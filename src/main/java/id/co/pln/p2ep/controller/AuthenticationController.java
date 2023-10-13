package id.co.pln.p2ep.controller;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;


import id.co.pln.p2ep.model.AuthRequest;
import id.co.pln.p2ep.model.AuthResponse;
import id.co.pln.p2ep.model.User;
import id.co.pln.p2ep.util.PBKDF2Encoder;
import id.co.pln.p2ep.util.TokenUtils;
import org.eclipse.microprofile.config.inject.ConfigProperty;


@Path("/auth")
public class AuthenticationController {
        @Inject
        PBKDF2Encoder passwordEncoder;

        @ConfigProperty(name = "id.co.pln.p2ep.jwt.duration") public Long duration;
        @ConfigProperty(name = "mp.jwt.verify.issuer") public String issuer;

        @PermitAll
        @POST @Path("/login")
        @Produces(MediaType.APPLICATION_JSON)
        @Consumes(MediaType.APPLICATION_JSON)
        public Response login(AuthRequest authRequest) {
            User u = User.findByUsername(authRequest.username);
            if (u != null && u.password.equals(passwordEncoder.encode(authRequest.password))) {
                try {
                    return Response.ok(new AuthResponse(TokenUtils.generateToken(u.username, u.roles, duration, issuer))).build();
                } catch (Exception e) {
                    return Response.status(Status.UNAUTHORIZED).build();
                }
            } else {
                return Response.status(Status.UNAUTHORIZED).build();
            }
        }

    }