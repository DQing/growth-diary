package com.tw.controllers;

import com.tw.repositories.DiaryRepository;
import com.tw.exceptions.AppearException;
import com.tw.entities.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiaryController {

    @Autowired
    private DiaryRepository diaryRepository;

    @RequestMapping(value = "/api/diary", method = RequestMethod.POST)
    public ResponseEntity addDiary(@RequestBody Diary diary) throws Exception {

        Diary back = diaryRepository.save(diary);

        if (!diaryRepository.exists(back.getId())) {
            throw new AppearException("保存失败！");
        }
        ResponseEntity a = new ResponseEntity<>(HttpStatus.CREATED);
        System.out.print(a);

        return a;
    }

    @RequestMapping(value = "/api/diary/{id}", method = RequestMethod.GET)
    public ResponseEntity getDiary(@PathVariable("id") Long id) {
        List<Diary> diaries = diaryRepository.findByUserId(id);

        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/diary/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteDiary(@PathVariable("id") Long id) throws Exception {
        diaryRepository.delete(id);

        if (diaryRepository.exists(id)) {
            throw new AppearException("删除失败！");
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
