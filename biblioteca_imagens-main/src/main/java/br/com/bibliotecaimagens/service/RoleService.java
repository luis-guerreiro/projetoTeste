package br.com.bibliotecaimagens.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bibliotecaimagens.model.Role;
import br.com.bibliotecaimagens.repository.RoleRepository;

@Service
public class RoleService {
    
    @Autowired
    private RoleRepository roleRepository;

    public List<Role> getAll(){
        return roleRepository.findAll();
    }
    
    public Optional<Role> getById(Long id){
        return roleRepository.findById(id);
    }
    
    public Role save(Role role){
        return roleRepository.save(role);
    }

    public Optional<Role> update(Role role){
        if(role.getId() != null){
            Optional<Role> buscaRole = roleRepository.findById(role.getId());
            if(buscaRole.isPresent()){
                return Optional.of(roleRepository.save(role));
            }
        }
        return Optional.empty();
    }

    public void delete(Long id){
        roleRepository.deleteById(id);
    }
}
