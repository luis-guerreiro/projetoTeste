package br.com.bibliotecaimagens.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bibliotecaimagens.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    
}
