package com.tw.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Followed {
    private Long id;
    private Long userId;
    private Long followedUserId;

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getFollowedUserId() {
        return followedUserId;
    }

    public void setFollowedUserId(Long followedUserId) {
        this.followedUserId = followedUserId;
    }
}
