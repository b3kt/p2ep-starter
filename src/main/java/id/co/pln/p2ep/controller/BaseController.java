package id.co.pln.p2ep.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.lang.Collections;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

public abstract class BaseController {

    protected final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    protected final Validator validator = factory.getValidator();
    protected final ObjectMapper objectMapper = new ObjectMapper();

    public boolean isValid(Object object){
        Set<ConstraintViolation<Object>> violations = validator.validate(object);
        return Collections.isEmpty(violations);
    }
}
