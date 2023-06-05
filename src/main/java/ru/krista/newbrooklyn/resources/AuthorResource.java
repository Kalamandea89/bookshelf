package ru.krista.newbrooklyn.resources;

import ru.krista.newbrooklyn.beans.AuthorBean;
import ru.krista.newbrooklyn.entities.Author;


import javax.ejb.EJB;
import javax.ws.rs.*;
import java.util.List;

@Path("authors")
@Consumes({"application/json"})
@Produces({"application/json"})
public class AuthorResource {
    @EJB
    AuthorBean bean;

    @GET
    public List<Author> getAll() {
        //return bean.findAll();
        return bean.findAllWithLazy("books");
    }

    @POST
    public Author create(Author item) {
        bean.create(item);
        return item;
    }

    @Path("{id}")
    @GET
    public Author getOne(@PathParam("id") Integer id) {
        return bean.findWithLazy(id, "books");
    }

    @Path("{id}")
    @PUT
    public Author update(@PathParam("id") Integer id, Author item) {
        item.setId(id);
        bean.edit(item);
        return item;
    }

    @Path("{id}")
    @DELETE
    public void delete(@PathParam("id") Integer id) {
        bean.remove(bean.find(id));
    }
}
