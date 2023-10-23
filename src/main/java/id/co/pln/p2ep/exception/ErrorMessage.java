package id.co.pln.p2ep.exception;

import lombok.Getter;

@Getter
public class ErrorMessage {

    private String message;
    private Boolean status;

    public void setMessage(String message) {
        this.message = message;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public ErrorMessage(String message, Boolean status) {
        super();
        this.message = message;
        this.status = status;
    }

    public ErrorMessage() {
        super();
    }

}