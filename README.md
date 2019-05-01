# RiegoBot

Telegram bot that allows you to manage an irrigation system with a raspberry pi

### Installation

RiegoBot requires [Node.js](https://nodejs.org/) v8+.


Install the dependencies and devDependencies and start the server.

```sh
$ cd riegoBot
$ npm install
$ node app.js
```

For production environments...

```sh
$ export TG_TOKEN=???????????????????
$ export TG_CHAT_ID=???????????????????
```

### RUN AS SERVICE

For run as service in a raspberry with raspbian

```sh
$ cd riegoBot
$ sudo cp riegobot /etc/init.d/
$ sudo chmod 755 /etc/init.d/riegobot
```

Now we can test it:

```sh
$ sh /etc/init.d/riegobot start/stop
```

If all goes well we can, finally, make it bootable:

```sh
$ sudo update-rc.d riegobot defaults
```

To remove it from boot:

```sh
$ update-rc.d -f riegobot remove
```
