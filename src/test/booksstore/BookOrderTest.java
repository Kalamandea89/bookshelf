package booksstore;

import org.junit.Test;
import junit.framework.Assert;
import ru.krista.newbrooklyn.beans.BookBean;
import ru.krista.newbrooklyn.entities.Book;
import ru.krista.newbrooklyn.entities.Genre;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.doReturn;

public class BookOrderTest extends Assert {

    @Test
    public void checkBookAsc() {
        Book book = mock(Book.class);
        Genre genre = mock(Genre.class);
        doReturn(genre).when(book).getGenre();
        doReturn("test").when(book).getTitle();
        assertEquals("test", book.getTitle());
//        assertEquals(genre, book.getGenre());
    }
}
