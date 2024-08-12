# Conteúdo das aulas de Docker + Entrega dos desafios

## Desafio Golang Docker - Imagem até 2MB

Este repositório contém a solução para o desafio de criar uma imagem Docker utilizando Golang, com o tamanho máximo de 2MB.

### Descrição do Desafio

Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:

docker run <seu-user>/fullcycle

Temos que ter o seguinte resultado: Full Cycle Rocks!!

Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".

Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

3) A imagem de nosso projeto Go precisa ter menos de 2MB =)

### Imagem Docker

A imagem Docker resultante pode ser encontrada no Docker Hub através do seguinte link:

[Docker Hub - jp2a/fullcycle](https://hub.docker.com/repository/docker/jp2a/fullcycle/general)

### Como Usar

Para baixar e executar a imagem Docker, você pode utilizar os seguintes comandos:

```sh
# Baixar a imagem Docker
docker pull jp2a/fullcycle

# Executar a imagem Docker
docker run --rm jp2a/fullcycle
```

## Desafio Nginx com Node.js

### Descrição do desafio

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

### Como usar

```sh
# Executar o container Docker
docker compose up -d

# Acesse
http://localhost:8080
```