package ru.krista.newbrooklyn.entities;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;

@Entity
@Table(name = "krista_post")
public class KristaPost {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;

    @NotNull
    @Size(min = 1, max = 144)
    String title;

    @NotNull
    String text;

    @ManyToOne(fetch = FetchType.LAZY)
    @Valid
    KristaUser owner;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public KristaUser getOwner() {
        return owner;
    }

    public void setOwner(KristaUser owner) {
        this.owner = owner;
    }
}
