package ru.krista.newbrooklyn.entities;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;

@Entity(name = "Genre")
@Table(name = "b_genres")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;

    @NotNull
    @Size(min = 1, max = 250)
    String name;

    @Size(min = 1, max = 950)
    String description;

    /*@ManyToOne(fetch = FetchType.LAZY)
    @Valid
    GBUser owner;*/

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    /*public GBUser getOwner() {
        return owner;
    }

    public void setOwner(GBUser owner) {
        this.owner = owner;
    }

     */
}
