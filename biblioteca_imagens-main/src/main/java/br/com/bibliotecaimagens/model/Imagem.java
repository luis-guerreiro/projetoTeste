package br.com.bibliotecaimagens.model;

import java.util.List;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tb_imagens")
@SQLDelete(sql = "UPDATE tb_imagens SET deleted=true WHERE id=?")
@Where(clause = "deleted=false")
public class Imagem {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @Size(max = 255, message = "O atributo nome pode ter no máximo 255 caracteres")
    private String nome;

    @NotBlank(message = "O atributo descrição é obrigatório")
    private String descricao;

    @Lob
    @Column(name = "data", columnDefinition = "longblob", length = Integer.MAX_VALUE, nullable = true)
    private byte[] data;

    private boolean deleted = Boolean.FALSE;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name= "tb_imagem_categorias",
            joinColumns = {
            		@JoinColumn(name = "imagem_id")
            },
            inverseJoinColumns = {
            		@JoinColumn(name = "categoria_id", referencedColumnName = "id")
            		})
    @JsonIgnoreProperties("imagem")
    private List<Categoria> categorias;
    
    public Imagem(String nome, String descricao, byte[] data, List<Categoria> categorias) {
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.categorias = categorias;
    }
    
    public Imagem() { } 

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}

	
}
