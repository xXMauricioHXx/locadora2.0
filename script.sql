CREATE TABLE cliente (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome VARCHAR(120) NULL,
  email VARCHAR(120) NULL,
  cpf VARCHAR(14) NULL,
  PRIMARY KEY(id)
);

CREATE TABLE diretor (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome VARCHAR(120) NULL,
  PRIMARY KEY(id)
);

CREATE TABLE filme (
  id INTEGER NOT NULL AUTO_INCREMENT,
  diretor_id INTEGER NOT NULL,
  titulo  VARCHAR(120) NOT NULL,
  copias_disponiveis INTEGER NOT NULL,  
  PRIMARY KEY(id),
  FOREIGN KEY (diretor_id) REFERENCES diretor(id)
);

CREATE TABLE aluguel(
  cliente_id INTEGER NOT NULL,
  filme_id INTEGER NOT NULL,
  data_entrega DATE NULL,
  INDEX FilmeUsuario_FKIndex1(Filme_id),
  INDEX FilmeUsuario_FKIndex2(Cliente_id)
);

CREATE TABLE usuario (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome VARCHAR(120) NULL,
  senha VARCHAR(72) NULL,
  email VARCHAR(120) NULL,
  PRIMARY KEY(id)
);

INSERT INTO usuario(nome, email, senha) VALUES("admin", "admin@admin", "123456");

INSERT INTO diretor(nome) VALUES ("Anthony Russo");
INSERT INTO filme(diretor_id, titulo, copias_disponiveis) VALUES(1, "Vingadores Ultimato", 10);


INSERT INTO diretor(nome) VALUES ("David F. Sandberg");
INSERT INTO filme(diretor_id, titulo, copias_disponiveis) VALUES(2, "Shazam", 7);