package ru.wolf.bookshelf.servlets;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import ru.wolf.bookshelf.beans.UserBean;
import ru.wolf.bookshelf.entities.User;

import javax.ejb.EJB;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

import static java.nio.charset.StandardCharsets.UTF_8;

@WebServlet("/signin")
public class LoginServlet extends HttpServlet {
    private static final Logger log = LogManager.getLogger(LoginServlet.class);

    @EJB
    UserBean userBean;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding(UTF_8.name());
        response.setHeader("Cache-control", "no-cache, no-store");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "-1");
        User inputUser = new Gson().fromJson(request.getReader(), User.class);
        JsonObject myObj = new JsonObject();
        //myObj.addProperty("pass", inputUser.getPass());
        myObj.addProperty("user", inputUser.getEmail());
        myObj.addProperty("status", "error");
        if (inputUser != null && !"".equals(inputUser.getEmail())){
            log.info("Вход пользователя: " + inputUser.getEmail());
            try {
                User user =  userBean.findUserByEmail(inputUser.getEmail());
                if (user == null){
                    userBean.create(inputUser);
                }else{
                    if(user.getPass().equals(inputUser.getPass())){
                        HttpSession session = request.getSession();
                        session.setAttribute("user", user.getId());
                        myObj.addProperty("status", "success");
                        myObj.addProperty("name", user.getName());
                    }
                }
            }catch (Exception e){
                log.error(e.getMessage(), e);
            }
        }else{
            myObj.addProperty("status", "not");
        }
        response.getWriter().write(myObj.toString());
    }
}
