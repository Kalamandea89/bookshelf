package booksstore;

import org.junit.Test;
import junit.framework.Assert;
import ru.wolf.bookshelf.entities.Book;
import ru.wolf.bookshelf.entities.Genre;

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
        assertEquals(genre, book.getGenre());
    }
}
