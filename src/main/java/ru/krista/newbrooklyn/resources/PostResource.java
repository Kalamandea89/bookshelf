package ru.krista.newbrooklyn.resources;

import ru.krista.newbrooklyn.beans.PostBean;
import ru.krista.newbrooklyn.entities.KristaPost;

import javax.ejb.EJB;
import javax.ws.rs.*;
import java.util.List;

@Path("posts")
@Consumes({"application/json"})
@Produces({"application/json"})
public class PostResource {

    @EJB
    PostBean bean;

    @GET
    public List<KristaPost> getAll() {
        return bean.findAllWithLazy("owner");
    }

    @POST
    public KristaPost create(KristaPost item) {
        bean.create(item);
        return bean.findWithLazy(item.getId(), "owner");
    }

    @Path("{id}")
    @GET
    public KristaPost getOne(@PathParam("id") Integer id) {
        return bean.findWithLazy(id, "owner");
    }

    @Path("{id}")
    @PUT
    public KristaPost update(@PathParam("id") Integer id, KristaPost item) {
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
