package id.co.pln.p2ep.model;


import id.co.pln.p2ep.entity.User;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserRequest extends BaseRequest<User> {
    private String requestId;
}
