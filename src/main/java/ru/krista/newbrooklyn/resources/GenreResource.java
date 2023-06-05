package ru.krista.newbrooklyn.resources;

import ru.krista.newbrooklyn.beans.GenreBean;
import ru.krista.newbrooklyn.entities.Genre;

import javax.ejb.EJB;
import javax.ws.rs.*;
import java.util.List;

@Path("genres")
@Consumes({"application/json"})
@Produces({"application/json"})
public class GenreResource {

    @EJB
    GenreBean bean;

    @GET
    public List<Genre> getAll() {
        return bean.findAll();
        //return bean.findAllWithLazy("owner");
    }

    @POST
    public Genre create(Genre item) {
        bean.create(item);
        return item;
        //return bean.findWithLazy(item.getId(), "owner");
    }

    @Path("{id}")
    //@Path("{year:\\d+}/promise/{budgetClsId:\\d+}")
    @GET
    /*public Genre getOne(@PathParam("id") Integer id) {
        return bean.findWithLazy(id, "owner");
    }*/
    public Genre getOne(@PathParam("id") Integer id) {
        return bean.find(id);
    }

    @Path("{id}")
    @PUT
    public Genre update(@PathParam("id") Integer id, Genre item) {
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
