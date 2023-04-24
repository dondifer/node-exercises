let http = require("http");
const fs = require("fs");
const Logger = require("logplease");
const logger = Logger.create("logger name");

logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!`);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    return res.end();
  })
  .listen(8080);
