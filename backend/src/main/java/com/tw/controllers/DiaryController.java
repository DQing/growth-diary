package com.tw.controllers;

import com.tw.repositories.DiaryRepository;
import com.tw.exceptions.AppearException;
import com.tw.entities.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DiaryController {

    @Autowired
    private DiaryRepository diaryRepository;

    @RequestMapping(value = "/api/diary", method = RequestMethod.POST)
    public ResponseEntity addDiary(@RequestBody Diary diary) throws Exception {

        System.out.print("=============");
        Diary back = diaryRepository.save(diary);

        if (!diaryRepository.exists(back.getId())) {
            throw new AppearException("保存失败！");
        }
        ResponseEntity a = new ResponseEntity(HttpStatus.CREATED);
        System.out.print(a);

        return a;
    }
}
