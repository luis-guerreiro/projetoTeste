package br.com.bibliotecaimagens.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bibliotecaimagens.model.Categoria;
import br.com.bibliotecaimagens.repository.CategoriaRepository;

@Service
public class CategoriaService {
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> getAll(){
        return categoriaRepository.findAll();
    }
    
    public Optional<Categoria> getById(Long id){
        return categoriaRepository.findById(id);
    }
    
    public Categoria save(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    public Optional<Categoria> update(Categoria categoria){
        if(categoria.getId() != null){
            Optional<Categoria> buscaCategoria = categoriaRepository.findById(categoria.getId());
            if(buscaCategoria.isPresent()){
                return Optional.of(categoriaRepository.save(categoria));
            }
        }
        return Optional.empty();
    }

    public void delete(Long id){
        categoriaRepository.deleteById(id);
    }
}
