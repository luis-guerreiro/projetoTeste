package br.com.bibliotecaimagens.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bibliotecaimagens.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
}
