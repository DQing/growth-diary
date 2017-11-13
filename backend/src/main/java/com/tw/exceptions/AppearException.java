package com.tw.exceptions;

public class AppearException extends Exception {
    private String message;

    public AppearException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
