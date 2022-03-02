# Artifact for Basic Web Server with javascript + Express (CommonJS modules version)

Use require("...") instructions

## [CommonJS vs. ES modules in Node.js](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)

## Install Dependencies

```bash
npm i express morgan cors response-time dotenv
```

## Install Dev Dependencies

```bash
npm i -D nodemon
```

## Create docker images

- Dockerfile
- .dockerignore

```bash
docker build -t node16-demo-api .
```

## Run docker images

```bash
docker run -it -p 4000:80 node16-demo-api
```

```bash
docker run -it -e PORT=80 -p 5000:80 node16-demo-api
```

## Work with docker-compose

```bash
docker-compose up --build
docker-compose down --rmi all
```

## Nodemon reload in docker windows

[link](https://errorsfixing.com/nodemon-doesnt-restart-in-windows-docker-environment/)

```json
"scripts": {
  "dev-docker-win": "nodemon src/ --legacy-watch"
}
```
