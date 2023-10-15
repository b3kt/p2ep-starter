package id.co.pln.p2ep.handler;

import id.co.pln.p2ep.exception.ErrorMessage;
import id.co.pln.p2ep.exception.P2EPApplicationException;

import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import javax.ws.rs.core.Response;

@Provider
public class ExceptionHandler implements ExceptionMapper<P2EPApplicationException> {

    @ConfigProperty(name = "id.co.pln.p2ep.error.msg.usernotfound")
    String userNotFound;

    @Override
    public Response toResponse(P2EPApplicationException e) {

        if (e.getMessage().equalsIgnoreCase(userNotFound)) {
            return Response.status(Response.Status.NOT_FOUND).
                    entity(new ErrorMessage(e.getMessage(), false)).build();
        } else {

            return Response.status(Response.Status.BAD_REQUEST).
                    entity(new ErrorMessage(e.getMessage(), false)).build();
        }
    }
}