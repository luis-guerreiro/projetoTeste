package br.com.bibliotecaimagens.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class ResponseImagem {

	private String id;
	
    private String name;
    
    private String url;
    
    private int size;
    
    private String descricao;
        
    @JsonIgnoreProperties("imagem")
    private List<Categoria> categorias;
    
	public ResponseImagem(String id, String name, String url, int size, String descricao, List<Categoria> categorias) {
		this.id = id;
		this.name = name;
		this.url = url;
		this.size = size;
		this.descricao = descricao;
		this.categorias = categorias;
	}
	
	public ResponseImagem(){ }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}
	
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}
	
}
