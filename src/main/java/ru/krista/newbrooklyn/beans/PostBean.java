package ru.krista.newbrooklyn.beans;

import ru.krista.newbrooklyn.entities.KristaPost;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class PostBean extends AbstractBean<KristaPost> {

    @PersistenceContext(unitName = "ru-krista-data")
    EntityManager em;

    public PostBean() {
        super(KristaPost.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
}
