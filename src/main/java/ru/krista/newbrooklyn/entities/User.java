package ru.krista.newbrooklyn.entities;

import javax.annotation.Nullable;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Set;

@Entity(name = "User")
@Table(name = "b_users")
public class User {

    @Id
    @SequenceGenerator(name = "pet_seq", sequenceName = "pet_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pet_seq")
    Integer id;
    @Nullable
    @Size(min = 3, max = 50)
    String name;
    @Nullable
    @Min(0)
    Integer age;
    @NotNull
    @Pattern(regexp = ".*@.*")
    String email;
    @NotNull
    @Size(min = 3, max = 50)
    String pass;

    /*@OneToMany(mappedBy = "owner", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    Set<GBGenre> posts;*/

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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}
