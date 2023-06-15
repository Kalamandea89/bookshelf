package ru.wolf.bookshelf.beans;

import ru.wolf.bookshelf.entities.Genre;

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
