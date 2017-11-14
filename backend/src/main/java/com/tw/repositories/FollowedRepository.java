package com.tw.repositories;

import com.tw.entities.Followed;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FollowedRepository extends JpaRepository<Followed, Long> {
    List<Followed> findByUserId(Long id);

    Followed findByUserIdAndFollowedUserId(Long id, Long id1);
}
