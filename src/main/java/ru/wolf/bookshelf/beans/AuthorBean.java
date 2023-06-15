package ru.wolf.bookshelf.beans;

import ru.wolf.bookshelf.entities.Author;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Root;
import java.util.List;

@Stateless
public class AuthorBean extends AbstractBean<Author> {

    @PersistenceContext(unitName = "ru-krista-data")
    EntityManager em;

    AuthorBean(){
        super(Author.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    @Override
    public List<Author> findAllWithLazy(String... fields) {
        CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<Author> cq = cb.createQuery(Author.class);
        Root<Author> routeRoot = cq.from(Author.class);
        routeRoot.fetch("books", JoinType.INNER);
        cq.orderBy(cb.asc(routeRoot.get("id")));
        TypedQuery<Author> q = getEntityManager().createQuery(cq);
        return q.getResultList();
    }
}
