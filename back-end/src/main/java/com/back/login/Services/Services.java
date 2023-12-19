package com.back.login.Services;

import com.back.login.Model.User;
import com.back.login.Repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;


@Service
public class Services {
    @Autowired
    private Repository repository;

    public ResponseEntity<?> login (@RequestBody User request) {
        User response = repository.save(request);
        return new ResponseEntity<> (response, HttpStatus.CREATED);
    }
    public Iterable<User> list(){
        return repository.findAll ();
    }
    public Boolean validLogin(String email, String password){
        Optional<User> userOptional = repository.findByEmail(email);
        if (userOptional.isPresent ()){
            User user = userOptional.get ();
            return password.equals (user.getPassword ());
        }
        return false;
    }

    public ResponseEntity<?> create (@RequestBody User request) {
        User response = repository.save (request);
        return new ResponseEntity<> (response, HttpStatus.CREATED);
    }

    public ResponseEntity<?> delete(){
        repository.deleteAll ();
        return new ResponseEntity<> ("Todos os dados excluidos", HttpStatus.OK);

    }
}
