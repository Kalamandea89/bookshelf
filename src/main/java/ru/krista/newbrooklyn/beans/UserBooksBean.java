package ru.krista.newbrooklyn.beans;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.StatelessSession;
import ru.krista.newbrooklyn.entities.Book;
import ru.krista.newbrooklyn.entities.UserBooks;

import javax.ejb.Stateful;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.Metamodel;
import javax.transaction.Transactional;
import java.util.List;

@Stateless
public class UserBooksBean extends AbstractBean {
    private static final Logger log = LogManager.getLogger(UserBooksBean.class);

    @PersistenceContext(unitName = "ru-krista-data")
    EntityManager em;

    UserBooksBean(){
        super(UserBooks.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public List<Book> findAllWithLazy(Integer userId) {
        log.info("Запрос книг пользоватетя");
        /*StatelessSession session = null;
        session = sessionFactory.openStatelessSession();
        session.getTransaction().begin();*/
        //Query q = em.createQuery("select b from Book b left join b.author a");
  /*      CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<UserBooks> cq = cb.createQuery(UserBooks.class);
        Metamodel m = em.getMetamodel();
        EntityType<UserBooks> booksMetaModel = m.entity(UserBooks.class);
        //UserBooks_.
        Root<UserBooks> routeRoot = cq.from(UserBooks.class);
        routeRoot.join(booksMetaModel.getSet("book"), JoinType.INNER);
        //routeRoot.join();
        //routeRoot.fetch("book", JoinType.INNER);
        //routeRoot.fetch("genre", JoinType.INNER);
        cq.where(cb.equal(routeRoot.get("userId"), userId));
        cq.select(routeRoot);
        cq.orderBy(cb.asc(routeRoot.get("id")));
        TypedQuery<UserBooks> q = em.createQuery(cq);
*/

        TypedQuery<Book> q = em.createQuery("Select b" +
                " from UserBooks ub " +
                " join ub.book b " +
                " join fetch b.genre g " +
                " join fetch b.author a " +
                "where ub.userId =" + userId, Book.class);
        //session.getTransaction().commit();
        return q.getResultList();
    }
}
