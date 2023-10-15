package id.co.pln.p2ep.service;

import id.co.pln.p2ep.entity.User;
import id.co.pln.p2ep.repository.UserRepository;
import id.co.pln.p2ep.util.PBKDF2Encoder;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

@ApplicationScoped
public class UserService {

    @Inject
    UserRepository userRepository;

    @Inject
    PBKDF2Encoder passwordEncoder;

    public void upsertUser(User user){
        user.setPassword(generatePassword());
        userRepository.persist(user);
    }

    private String generatePassword(){
        return passwordEncoder.encode("password");
    }
}
