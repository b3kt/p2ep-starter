package id.co.pln.p2ep.model;


import id.co.pln.p2ep.entity.User;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserRequest extends BaseRequest<User> {
    private String requestId;
}
