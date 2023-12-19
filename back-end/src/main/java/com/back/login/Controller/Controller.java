package com.back.login.Controller;

import com.back.login.Model.User;
import com.back.login.Services.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dados")
@CrossOrigin(origins = "http://localhost:5173/")
public class Controller {

    @Autowired
    private Services services;
    private User user;

    @PutMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user){
        if (services.validLogin (user.getEmail (), user.getPassword ())){
            Map<String, String> response = new HashMap<> ();
            response.put ("message", "Login bem-sucedido");
            return ResponseEntity.ok(response);
        }else{
            return ResponseEntity.status (HttpStatus.UNAUTHORIZED).body (null);
        }
    }
    @GetMapping("/list")
    public Iterable<User> list(){
       return services.list ();
    }
    @PostMapping("/cadastrar")
    public ResponseEntity<?> create(@RequestBody User request){
        return services.create(request);
    }

    @DeleteMapping("/deletear")
    public ResponseEntity<?> delete(){
        return services.delete ();
    }

}