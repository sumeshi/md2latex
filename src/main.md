# Overview
A docker container that builds \LaTeX\ documents using markdown and a bit of \LaTeX notation.

# Usage

## Build Docker-Image
```
$ docker-compose build
```

## Run
```
$ docker-compose up
```

After starting the container, build is performed every time you edit template.tex and main.md in src directory. If any syntax errors occur, they are output to the screen as standard output.