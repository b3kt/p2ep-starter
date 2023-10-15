package id.co.pln.p2ep.model;

import id.co.pln.p2ep.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class AuthResponse {

    public String token;
    public User userData;

}
