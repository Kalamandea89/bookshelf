package ru.wolf.bookshelf.resources;

import ru.wolf.bookshelf.beans.BookBean;
import ru.wolf.bookshelf.entities.Book;

import javax.ejb.EJB;
import javax.ws.rs.*;
import java.util.List;

@Path("books")
@Consumes({"application/json"})
@Produces({"application/json"})
//@JSON
public class BooksResource {

    @EJB
    BookBean bean;

    @GET
    public List<Book> getAll() {
        //return bean.findAll();
        return bean.findAllWithLazy("author");
    }
    @POST
    public Book create(Book item) {
        bean.create(item);
        return item;
    }

    @Path("{id}")
    //@Path("{year:\\d+}/promise/{budgetClsId:\\d+}")
    @GET
    public Book getOne(@PathParam("id") Integer id) {
        return bean.findWithLazy(id, "author");
        //return bean.find(id);
    }

    @Path("{id}")
    @PUT
    public Book update(@PathParam("id") Integer id, Book item) {
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
