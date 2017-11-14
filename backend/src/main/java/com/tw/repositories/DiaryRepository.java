package com.tw.repositories;

import com.tw.entities.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary,Long>{

    List<Diary> findByUserId(Long id);

    long countByUserId(Long id);

    List<Diary> findByUserIdOrderByDateDesc(Long id);
}
