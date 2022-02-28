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
docker build -t demo-node-16 .
docker run -it -p 4000:3000  demo-node-16 
```

## Run docker images

```bash
docker run -it -p 4000:3000 demo-node-16
```

```bash
docker run -it -e PORT=5000 -p 5001:5000 demo-node-16
```
