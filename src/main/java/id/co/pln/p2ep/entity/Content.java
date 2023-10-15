package id.co.pln.p2ep.entity;

import id.co.pln.p2ep.model.CategoryEnum;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(callSuper = false)
@Setter
@Getter
@Entity
@Table(name = "contents")
public class Content extends PanacheEntity {

    private String name;
    private String description;
    private String code;
    private CategoryEnum categoryEnum;
    private Boolean status;

}
