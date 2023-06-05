package ru.krista.newbrooklyn.beans;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.List;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

public abstract class AbstractBean<T> {
    private Class<T> entityClass;
    private static final Logger log = LogManager.getLogger(AbstractBean.class);

    public AbstractBean(Class<T> entityClass) {
        this.entityClass = entityClass;
    }

    protected abstract EntityManager getEntityManager();

    public void create(T entity) {
        getEntityManager().persist(entity);
    }

    public void edit(T entity) {
        getEntityManager().merge(entity);
    }

    public void remove(T entity) {
        getEntityManager().remove(getEntityManager().merge(entity));
    }

    public T find(Object id) {
        return getEntityManager().find(entityClass, id);
    }

    public List<T> findAll() {
        log.info("Stas");
        log.info(getEntityManager().getProperties().toString());
        CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<T> cq = cb.createQuery(entityClass);
        Root<T> routeRoot = cq.from(entityClass);
        cq.orderBy(cb.asc(routeRoot.get("id")));

        //cq.select(cq.from(entityClass));
        TypedQuery<T> q = getEntityManager().createQuery(cq);
        return q.getResultList();
    }

    public T findWithLazy(Object id, String... fields) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(entityClass);
        Root<T> root = criteriaQuery.from(entityClass);

        for (String field : fields) {
            root.fetch(field);
        }

        criteriaQuery.where(criteriaBuilder.equal(root.get("id"), id));

        TypedQuery<T> typedQuery = getEntityManager().createQuery(criteriaQuery);

        return typedQuery.getSingleResult();
    }

    public List<T> findAllWithLazy(String... fields) {
        CriteriaBuilder criteriaBuilder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(entityClass);
        Root<T> root = criteriaQuery.from(entityClass);

        for (String field : fields) {
            root.fetch(field);
        }

        criteriaQuery.select(root);

        TypedQuery<T> typedQuery = getEntityManager().createQuery(criteriaQuery);

        return typedQuery.getResultList();
    }
}
