package ru.krista.newbrooklyn.resources;

import ru.krista.newbrooklyn.beans.BookBean;
import ru.krista.newbrooklyn.beans.UserBooksBean;
import ru.krista.newbrooklyn.entities.Book;
import ru.krista.newbrooklyn.entities.UserBooks;

import javax.ejb.EJB;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("userbooks")
@Consumes({"application/json"})
@Produces({"application/json"})
public class UserBooksResource {

    @EJB
    UserBooksBean bean;

    @Context
    private HttpServletRequest request;

    @GET
    public List<Book> getAll() {
        HttpSession session = request.getSession();
        if (session.getAttribute("user") != null){
            return bean.findAllWithLazy((Integer) session.getAttribute("user"));
        }
        return null;
    }
}
