package id.co.pln.p2ep.exception;

import java.io.Serializable;

public class P2EPApplicationException extends
        RuntimeException implements Serializable {

    private static final long serialVersionUID = 1L;

    public P2EPApplicationException() {
    }

    public P2EPApplicationException(String message) {
        super(message);
    }

    public P2EPApplicationException(String message, Throwable cause) {
        super(message, cause);
    }

    public P2EPApplicationException(Throwable cause) {
        super(cause);
    }

    public P2EPApplicationException(String message, Throwable cause,
                           boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
