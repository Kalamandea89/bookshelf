package ru.krista.newbrooklyn.beans;

import ru.krista.newbrooklyn.entities.Author;
import ru.krista.newbrooklyn.entities.Book;

import javax.ejb.Stateless;
import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Root;
import java.util.List;


@Stateless
public class BookBean extends AbstractBean<Book> {

    @PersistenceContext(unitName = "ru-krista-data")
    EntityManager em;

    public BookBean() {
        super(Book.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    @Override
    public List<Book> findAllWithLazy(String... fields) {
        //Query q = em.createQuery("select b from Book b left join b.author a");
        CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<Book> cq = cb.createQuery(Book.class);
        Root<Book> routeRoot = cq.from(Book.class);
        routeRoot.fetch("author", JoinType.INNER);
        cq.select(routeRoot);
        cq.orderBy(cb.asc(routeRoot.get("id")));
        TypedQuery<Book> q = em.createQuery(cq);
        List<Book> books = q.getResultList();
        return books;
    }
}
