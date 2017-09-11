# Pagare App

App Build in Angular + Angular Material

## Getting Started

Manual para estruturação do projeto

### Components

Usado para estruturar todos os arquivos em HTML (templates) separado por modulos
Exemplo:
```
components
---------------- inico
------------------------- home.html
---------------- extrato
------------------------- extrato.html
---------------- pagamentos
------------------------- efetuadas.html
------------------------- agendadas.html
```

### JS - Config

Usado para processos ligados ao route provider ou configurações gerais que serão aplicadas no projeto inteiro


## JS - Controllers / Directives/ Filters/ Services

Separado por módulos assim como o html, deverá ter os js usados nas respectivas views

### Libs

Qualquer js externo / angular

### CSS / Sass

Utilizar os arquivos separados por módulos dentro da pasta SASS, só deverá ser "buildado" apenas o style.scss que contém todo so arquivos em sass importados