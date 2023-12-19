package com.back.login.Repository;

import com.back.login.Model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


@org.springframework.stereotype.Repository
public interface Repository extends CrudRepository<User, Long> {
    Optional<User> findByEmail (String email);
}
