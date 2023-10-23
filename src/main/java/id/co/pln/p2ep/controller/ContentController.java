package id.co.pln.p2ep.controller;

import id.co.pln.p2ep.model.CategoryEnum;
import id.co.pln.p2ep.repository.ContentRepository;
import org.eclipse.microprofile.openapi.annotations.enums.SecuritySchemeType;
import org.eclipse.microprofile.openapi.annotations.security.SecurityScheme;
import org.eclipse.microprofile.openapi.annotations.security.SecuritySchemes;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
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
@RolesAllowed({"ADMIN", "USER"})
@Path("/api/content")
public class ContentController extends BaseController {

    @Inject
    ContentRepository contentRepository;


    @GET
    @Path("/findAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAll() {
        return Response.ok(contentRepository.findAll()).build();
    }

    @GET
    @Path("/findByCategory/{category}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findByCategory(@PathParam("category") String category) {
        CategoryEnum categoryEnum  = CategoryEnum.valueOf(category);
        return Response.ok(contentRepository.findByCategory(categoryEnum)).build();
    }
}
