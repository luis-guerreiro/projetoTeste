package br.com.bibliotecaimagens.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class SwaggerConfig {

	@Bean
	OpenAPI springBlogPessoalOpenAPI() {
		return new OpenAPI()
				.info(new Info()
					.title("Projeto Biblioteca de Imagens")
					.description("Projeto Biblioteca de Imagens")
					.version("v0.0.1")
				.license(new License()
					.name("Licença")
					.url("https://autor.com.br/"))
				.contact(new Contact()
					.name("Autor")
					.url("https://github.com/autor")
					.email("autor@gmail.com")))
				.externalDocs(new ExternalDocumentation()
					.description("Github")
					.url("https://github.com/autor"));
	}

}