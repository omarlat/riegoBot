# RiegoBot

### Installation

RiegoBot requires [Node.js](https://nodejs.org/) v8+ to run (async/await).


Install the dependencies and devDependencies and start the server.

```sh
$ cd riegoBot
$ npm install
$ node app.js
```

For production environments...

```sh
$ export TG_TOKEN=???????????????????
```

### DOCKER

```sh
docker run -d -e TG_TOKEN=TelegramBotToken omarlat/riegobot
```
