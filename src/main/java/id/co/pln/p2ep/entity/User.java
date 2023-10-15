package id.co.pln.p2ep.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import id.co.pln.p2ep.model.RoleEnum;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(callSuper = false)
@Setter @Getter
@Entity
@Table(name = "users")
public class User extends PanacheEntity{

    @NotBlank
    private String username;

    @JsonIgnore
    private String password;
    @JsonIgnore
    private RoleEnum roles;

    private String name;

    @NotBlank
    private String email;

}
