package br.com.bibliotecaimagens.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bibliotecaimagens.model.Role;
import br.com.bibliotecaimagens.service.RoleService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	@GetMapping
	private ResponseEntity<List<Role>> getAll(){
		
		return ResponseEntity.ok(roleService.getAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Role> getById(@PathVariable Long id){
		
		return roleService.getById(id)
			.map(resposta -> ResponseEntity.ok(resposta))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Role> postRole(@Valid @RequestBody Role role){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(roleService.save(role));
	}
	
	@PutMapping
	public ResponseEntity<Role> putRole(@Valid @RequestBody Role role) {
					
		return roleService.update(role)
				.map(resposta -> ResponseEntity.ok().body(resposta))
				.orElse(ResponseEntity.notFound().build());

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteRole(@PathVariable Long id) {
		
		return roleService.getById(id)
				.map(resposta -> {
					roleService.delete(id);
					return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
				})
				.orElse(ResponseEntity.notFound().build());
	}

}