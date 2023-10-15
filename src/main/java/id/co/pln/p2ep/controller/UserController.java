package id.co.pln.p2ep.controller;

import id.co.pln.p2ep.entity.User;
import id.co.pln.p2ep.model.UserRequest;
import id.co.pln.p2ep.repository.UserRepository;
import id.co.pln.p2ep.service.UserService;
import org.apache.http.HttpHeaders;
import org.eclipse.microprofile.openapi.annotations.enums.ParameterIn;
import org.eclipse.microprofile.openapi.annotations.enums.SecuritySchemeType;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.Parameter;
import org.eclipse.microprofile.openapi.annotations.parameters.Parameters;
import org.eclipse.microprofile.openapi.annotations.security.SecurityScheme;
import org.eclipse.microprofile.openapi.annotations.security.SecuritySchemes;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@SecuritySchemes({
        @SecurityScheme(
                securitySchemeName = "bearerAuth",
                type = SecuritySchemeType.HTTP,
                scheme = "bearer",
                bearerFormat = "JWT"
        )
})
@RolesAllowed("ADMIN")
@Path("/api/user")
public class UserController extends BaseController {

    @Inject
    UserRepository userRepository;

    @Inject
    UserService userService;

    @GET
    @Path("/findAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAll() {
        return Response.ok(userRepository.findAll()).build();
    }

    @GET
    @Path("/findById/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findById(@PathParam("id") Long id){
        return Response.ok(userRepository.findById(id)).build();
    }

    @POST
    @Path("/upsert")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response upsert(UserRequest userRequest){
        if(isValid(userRequest)){
            try{
                userService.upsertUser(objectMapper.convertValue(userRequest, User.class));
                return Response.ok().build();
            }catch (Exception ex){
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
            }
        }else{
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }

    @DELETE
    @Path("/deleteById/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteById(@PathParam("id") Long id){
        return Response.ok(userRepository.deleteById(id)).build();
    }

}
