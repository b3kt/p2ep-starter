package id.co.pln.p2ep.repository;

import id.co.pln.p2ep.entity.Content;
import id.co.pln.p2ep.model.CategoryEnum;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class ContentRepository implements PanacheRepository<Content> {

    public List<Content> findByCategory(CategoryEnum category){
        return find("category", category).list();
    }
}
