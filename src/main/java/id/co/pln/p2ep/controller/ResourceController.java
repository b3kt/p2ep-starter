package id.co.pln.p2ep.controller;

import id.co.pln.p2ep.model.Message;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/resource")
public class ResourceController {

    @RolesAllowed("USER")
    @GET @Path("/user") @Produces(MediaType.APPLICATION_JSON)
    public Response user() {
        return Response.ok(new Message("Content for user")).build();
    }

    @RolesAllowed("ADMIN")
    @GET @Path("/admin") @Produces(MediaType.APPLICATION_JSON)
    public Response admin() {
        return Response.ok(new Message("Content for admin")).build();
    }

    @RolesAllowed({"USER", "ADMIN"})
    @GET @Path("/user-or-admin") @Produces(MediaType.APPLICATION_JSON)
    public Response userOrAdmin() {
        return Response.ok(new Message("Content for user or admin")).build();
    }
}