package br.com.bibliotecaimagens.controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.bibliotecaimagens.model.Categoria;
import br.com.bibliotecaimagens.model.Imagem;
import br.com.bibliotecaimagens.model.ResponseImagem;
import br.com.bibliotecaimagens.service.ImagemService;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ImagemController {

	@Autowired
	private ImagemService imagemService;

	@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Imagem> uploadFile(@RequestParam("data") MultipartFile data,
			@RequestParam("descricao") String descricao, @RequestParam("categorias") List<Categoria> categorias)
			throws IOException {

		return ResponseEntity.status(HttpStatus.CREATED).body(imagemService.store(data, descricao, categorias));

	}

	@GetMapping
	public ResponseEntity<List<ResponseImagem>> getListFiles() {
		List<ResponseImagem> files = imagemService.getAllFiles().map(dbFile -> {
			String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/")
					.path(dbFile.getId()).toUriString();

			return new ResponseImagem(dbFile.getId(), dbFile.getNome(), fileDownloadUri, dbFile.getData().length,
					dbFile.getDescricao(), dbFile.getCategorias());
		}).collect(Collectors.toList());

		return ResponseEntity.status(HttpStatus.OK).body(files);
	}

	@GetMapping("/{id}")
	public ResponseEntity<byte[]> getFile(@PathVariable String id) {

		try {

			Imagem imagem = imagemService.getFile(id);

			return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + imagem.getNome() + "\"")
					.body(imagem.getData());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable String id) {

		imagemService.remove(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

	}
}