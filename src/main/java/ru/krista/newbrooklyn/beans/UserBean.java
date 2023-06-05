package ru.krista.newbrooklyn.beans;

import ru.krista.newbrooklyn.entities.KristaUser;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class UserBean extends AbstractBean<KristaUser> {

    @PersistenceContext(unitName = "ru-krista-data")
    EntityManager em;
    //Session em;

    public UserBean() {
        super(KristaUser.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
}
