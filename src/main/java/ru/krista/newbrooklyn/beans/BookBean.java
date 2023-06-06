package ru.krista.newbrooklyn.beans;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
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
    private static final Logger log = LogManager.getLogger(BookBean.class);

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
        log.info("Запрос всех книг");
        //Query q = em.createQuery("select b from Book b left join b.author a");
        CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<Book> cq = cb.createQuery(Book.class);
        Root<Book> routeRoot = cq.from(Book.class);
        routeRoot.fetch("author", JoinType.INNER);
        routeRoot.fetch("genre", JoinType.INNER);
        cq.select(routeRoot);
        cq.orderBy(cb.asc(routeRoot.get("id")));
        TypedQuery<Book> q = em.createQuery(cq);
        return q.getResultList();
    }

    public void uploadCover(int bookId, byte[] cover){
        Book book = findWithLazy(bookId, "author");
        book.setCover(cover);
        edit(book);
    }
}
