package id.co.pln.p2ep.model;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class  AuthRequest {
    public String username;
    public String password;

}
