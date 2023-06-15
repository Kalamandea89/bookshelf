package ru.wolf.bookshelf.servlets;

import com.google.common.io.ByteStreams;
import com.google.gson.JsonObject;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import ru.wolf.bookshelf.beans.BookBean;

import javax.ejb.EJB;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;

import static java.nio.charset.StandardCharsets.UTF_8;

@WebServlet("/uploadcover")
@MultipartConfig(fileSizeThreshold = 10*1024*1024, maxRequestSize = 10*1024*1024, maxFileSize = 10*1024*1024)
public class UploadCoverServlet extends HttpServlet {
    private static final Logger log = LogManager.getLogger(UploadCoverServlet.class);

    @EJB
    BookBean bean;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding(UTF_8.name());
        JsonObject myObj = new JsonObject();
        try{
            /*if (request.getParameter("bookid") == null || request.getParameter("bookid") == ""){
                myObj.addProperty("error", "bookid is null!");
                throw new Exception("bookid is null!");
            }*/

            //StringBuilder sb = new StringBuilder();
            //sb.toString().to
            Collection<Part> parts = request.getParts();
            parts.isEmpty();
            Part coverFile = request.getPart("cover");
            InputStream filecontent = coverFile.getInputStream();
            //for JAVA 9
            //byte[] cover = filecontent.readAllBytes;
            byte[] cover = ByteStreams.toByteArray(filecontent);
            int bookId = Integer.parseInt(request.getParameter("bookid"));
            bean.uploadCover(bookId, cover);
            log.info("cover.length: " + cover.length);

            myObj.addProperty("length", cover.length);
            myObj.addProperty("upload", "true");
        }catch (Exception e){
            log.error(e.getMessage(), e);
        }
        response.getWriter().write(myObj.toString());
    }
}
