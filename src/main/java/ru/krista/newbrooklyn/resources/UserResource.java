package ru.krista.newbrooklyn.resources;

import ru.krista.newbrooklyn.beans.UserBean;
import ru.krista.newbrooklyn.entities.KristaUser;

import javax.ejb.EJB;
import javax.ws.rs.*;
import java.util.List;

@Path("users")
@Consumes({"application/json"})
@Produces({"application/json"})
public class UserResource {

    @EJB
    UserBean bean;

    @GET
    public List<KristaUser> getAll() {
        return bean.findAll();
    }

    @POST
    public KristaUser create(KristaUser item) {
        bean.create(item);
        return item;
    }

    @Path("{id}")
    @GET
    public KristaUser getOne(@PathParam("id") Integer id) {
        return bean.find(id);
    }

    @Path("{id}")
    @PUT
    public KristaUser update(@PathParam("id") Integer id, KristaUser item) {
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
