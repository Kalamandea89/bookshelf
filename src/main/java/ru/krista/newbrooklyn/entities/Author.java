package ru.krista.newbrooklyn.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

/*@NamedEntityGraph(
        name = "graph.authors",
        attributeNodes = @NamedAttributeNode("books")
)*/
@Entity(name = "Author")
@Table(name = "b_authors")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;

    @NotNull
    @Size(min = 1, max = 250)
    String name;

    @Size(min = 1, max = 250)
    String website;

    @OneToMany(mappedBy = "author",  fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Book> books;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    /*@OneToMany(mappedBy = "author",  fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }*/
}
