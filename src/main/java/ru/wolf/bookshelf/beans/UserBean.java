package ru.wolf.bookshelf.beans;

import ru.wolf.bookshelf.entities.User;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Stateless
public class UserBean extends AbstractBean<User> {

    @PersistenceContext(unitName = "ru-krista-data")
    EntityManager em;
    //Session em;

    public UserBean() {
        super(User.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public User findUserByEmail(String email) {
        try{
            TypedQuery<User> q = em.createQuery("FROM User U WHERE U.email = :email", User.class);
            q.setParameter("email", email);
            return q.getSingleResult();
        }catch (NoResultException e){
            return null;
        }
        //List<User> userList = q.getResultList();
        //return userList != null && (userList.size() !=0) && userList.get(0).getPass().equals(password);
    }
}
