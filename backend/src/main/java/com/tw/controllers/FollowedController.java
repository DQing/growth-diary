package com.tw.controllers;

import com.tw.entities.Diary;
import com.tw.entities.Followed;
import com.tw.entities.User;
import com.tw.repositories.DiaryRepository;
import com.tw.repositories.FollowedRepository;
import com.tw.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class FollowedController {
    @Autowired
    private FollowedRepository followedRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DiaryRepository diaryRepository;

    @RequestMapping(value = "/api/followed/{id}", method = RequestMethod.GET)
    public ResponseEntity getFollowed(@PathVariable("id") Long id) {
        List<Followed> followers = followedRepository.findByUserId(id);

        List<Map> results = new ArrayList<>();

        for (Followed follower : followers) {
            Map<String, Object> result = new HashMap<>();
            Long userId = follower.getFollowedUserId();
            User user = userRepository.findOne(userId);
            long count = diaryRepository.countByUserId(userId);
            String date = "";
            if(count != 0) {

                List<Diary> diaries = diaryRepository.findByUserIdOrderByDateDesc(userId);
                date = diaries.get(0).getDate().toString().split(" ")[0];
            }

            result.put("user", user);
            result.put("count", count);
            result.put("date", date);

            results.add(result);
        }

        return new ResponseEntity<>(results, HttpStatus.OK);
    }
}
