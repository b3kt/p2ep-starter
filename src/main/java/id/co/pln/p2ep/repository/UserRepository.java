package id.co.pln.p2ep.repository;

import id.co.pln.p2ep.entity.User;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.panache.common.Sort;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class UserRepository implements PanacheRepository<User> {

    public User findByUsername(String username){
        return find("username", username).firstResult();
    }

}
