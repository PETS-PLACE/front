# PETS PLACE FRONT-END
Front-end para a aplicação pets-place.

## Time de desenvolvimento
- Luiz Paulo de Lima Araújo
- José Edson da Silva Galdino
- Mateus Alexandre Barros
- Thales Adriel Soares de Araújo
- Pedro Henrique Dias Xavier
- Samuel Rodrigues da Silveira Neto

## Instalação das Dependências fora o docker
Na primeira vez de rodar o projeto execute esse comando para instalar as dependências
```

npm install

```
## Execução Do Projeto fora o docker
```

npm start

```
## Comandos para container docker.
```bash

# Construir imagem
$ docker compose build

# Criar e executar container e a subrede petsplace
$ docker compose up front

# Parar container/serviço
$ docker compose stop front

# Parar e remover container/serviço e a subrede (tudo)
$ docker compose down

# Para mais detalhes de uso do comando docker compose
# leia atentamente o pequeno manual ao executar:
$ docker compose --help

```


Ao executar esse comando será exibido no terminal as opções do expo que é uma ferramenta de desenvolvimanto. 

### Rodando O Projeto No Android
Entre essas opções temos o QRcode que é usado para rodar o projeto no android que estiver conectado na mesma rede. No caso dos androids é necessário baixar um app na playStore chamado Expo Go e escaner o QRcode por ele.

### Rodando O Projeto Na Web
Para rodar o projeto na web temos a opção de precionar a tecla 'w' que vai abrir o navegador padrão para executar o projeto. Podemos também acessar a URL http://localhost:8081 que é exibida no terminal ou digita-la direto no navegador
