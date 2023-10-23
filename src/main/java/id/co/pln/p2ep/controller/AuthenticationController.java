package id.co.pln.p2ep.controller;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import id.co.pln.p2ep.model.AuthRequest;
import id.co.pln.p2ep.model.AuthResponse;
import id.co.pln.p2ep.entity.User;
import id.co.pln.p2ep.repository.UserRepository;
import id.co.pln.p2ep.util.PBKDF2Encoder;
import id.co.pln.p2ep.util.TokenUtils;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.eclipse.microprofile.config.inject.ConfigProperty;


@Path("/auth")
@Slf4j
public class AuthenticationController {
    @Inject
    PBKDF2Encoder passwordEncoder;

    @Inject
    UserRepository userRepository;

    @ConfigProperty(name = "id.co.pln.p2ep.jwt.duration")
    public Long duration;
    @ConfigProperty(name = "mp.jwt.verify.issuer")
    public String issuer;

    @PermitAll
    @POST
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(AuthRequest authRequest) {
        User user = userRepository.findByUsername(authRequest.getUsername());
        if (user != null && user.getPassword().equals(passwordEncoder.encode(authRequest.password))) {
            try {
                return Response.ok(AuthResponse.builder()
                        .userData(user)
                        .token(TokenUtils.generateToken(user.getUsername(), user.getRoles(), duration, issuer))
                        .build()).build();
            } catch (Exception e) {
                return Response.status(Status.UNAUTHORIZED).build();
            }
        } else {
            return Response.status(Status.UNAUTHORIZED).build();
        }
    }

    @RolesAllowed({"USER", "ADMIN"})
    @GET
    @Path("/me")
    @Produces(MediaType.APPLICATION_JSON)
    public Response me(@HeaderParam("authorization") String token) {

        if (StringUtils.startsWith(token, "Bearer")) {
            Claims claims = passwordEncoder.getClaimsFromToken(token.substring(7));
            log.info("{}", claims);
            User user = userRepository.findByUsername(claims.getSubject());
            return Response.ok(user).build();
        } else {
            return Response.status(Status.BAD_REQUEST).build();
        }
    }
}