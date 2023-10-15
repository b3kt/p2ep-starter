package id.co.pln.p2ep.controller;

import id.co.pln.p2ep.model.CategoryEnum;
import id.co.pln.p2ep.model.CategoryItem;
import id.co.pln.p2ep.model.Message;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Arrays;

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
    @GET @Path("/categories") @Produces(MediaType.APPLICATION_JSON)
    public Response categories() {
        return Response.ok(
                Arrays.asList(
                        CategoryItem.builder()
                                .ordinal(CategoryEnum.BATUBARA.ordinal())
                                .name(CategoryEnum.BATUBARA.name())
                                .build(),
                        CategoryItem.builder()
                                .ordinal(CategoryEnum.BBM.ordinal())
                                .name(CategoryEnum.BBM.name())
                                .build(),
                        CategoryItem.builder()
                                .ordinal(CategoryEnum.BIOMASSA.ordinal())
                                .name(CategoryEnum.BIOMASSA.name())
                                .build(),
                        CategoryItem.builder()
                                .ordinal(CategoryEnum.GAS_PIPA.ordinal())
                                .name(CategoryEnum.GAS_PIPA.name())
                                .build(),
                        CategoryItem.builder()
                                .ordinal(CategoryEnum.GAS_LNG.ordinal())
                                .name(CategoryEnum.GAS_LNG.name())
                                .build(),
                        CategoryItem.builder()
                                .ordinal(CategoryEnum.FUEL_MIX.ordinal())
                                .name(CategoryEnum.FUEL_MIX.name())
                                .build(),
                        CategoryItem.builder()
                                .ordinal(CategoryEnum.DECARBONIZATION.ordinal())
                                .name(CategoryEnum.DECARBONIZATION.name())
                                .build()
                )
        ).build();
    }

}