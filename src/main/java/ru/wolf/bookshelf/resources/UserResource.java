package ru.wolf.bookshelf.resources;

import ru.wolf.bookshelf.beans.UserBean;
import ru.wolf.bookshelf.entities.User;

import javax.ejb.EJB;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("users")
@Consumes({"application/json"})
@Produces({"application/json"})
public class UserResource {

    @EJB
    UserBean bean;

    @Context
    private HttpServletRequest request;

    @GET
    public List<User> getAll() {
        return bean.findAll();
    }

    @POST
    public User create(User item) {
        bean.create(item);
        return item;
    }

    @Path("{id}")
    @GET
    public User getOne(@PathParam("id") Integer id) {
        return bean.find(id);
    }

    @Path("{email}")
    @GET
    public User getOneByEmail(@PathParam("email") String email) {
        HttpSession session = request.getSession();
        return bean.find(email);
    }


    @Path("{id}")
    @PUT
    public User update(@PathParam("id") Integer id, User item) {
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
