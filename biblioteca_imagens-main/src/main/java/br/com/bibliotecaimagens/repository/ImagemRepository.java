package br.com.bibliotecaimagens.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bibliotecaimagens.model.Imagem;

public interface ImagemRepository extends JpaRepository<Imagem, String> {
    
}
