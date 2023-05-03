package br.com.bibliotecaimagens.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import br.com.bibliotecaimagens.model.Categoria;
import br.com.bibliotecaimagens.model.Imagem;
import br.com.bibliotecaimagens.repository.ImagemRepository;

@Service
public class ImagemService {

	@Autowired
	private ImagemRepository imagemRepository;

	public Imagem store(MultipartFile file, String descricao, List<Categoria> categorias) throws IOException {

		if (file.isEmpty())
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Arquivo Inválido ou Inexistente!", null);

		if (file.getSize() > 20000000)
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O Arquivo deve ser menor do que 20 Megabytes.",
					null);

		Optional<String> arquivo = Optional.of(file.getContentType()).filter(type -> type.equals("image/jpeg")
				|| type.equals("image/png") || type.equals("image/jpg") || type.equals("image/gif"));

		if (!arquivo.isPresent())
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Tipo de Arquivo inválido! Envie uma imagem JPG, GIF ou PNG.", null);

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		fileName = fileName.toLowerCase().replaceAll(" ", "-");

		Imagem imagem = new Imagem(fileName, descricao, file.getBytes(), categorias);

		return imagemRepository.save(imagem);

	}

	public Imagem getFile(String id) {
		return imagemRepository.findById(id).get();
	}

	/*
	 * public List<Imagem> getAllFiles() { return imagemRepository.findAll(); }
	 */

	public Stream<Imagem> getAllFiles() {
		return imagemRepository.findAll().stream();
	}

	public void remove(String id) {
		imagemRepository.deleteById(id);
	}

}
