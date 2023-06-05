package ru.krista.newbrooklyn.beans;

import ru.krista.newbrooklyn.entities.Genre;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class GenreBean extends AbstractBean<Genre> {

    @PersistenceContext(unitName = "ru-krista-data")
    EntityManager em;

    public GenreBean() {
        super(Genre.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
}
