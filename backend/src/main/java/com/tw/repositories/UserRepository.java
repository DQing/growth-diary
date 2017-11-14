package com.tw.repositories;

import com.tw.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Long>{
}
