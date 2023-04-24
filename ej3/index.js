const pair = require("./numeros");
let http = require("http");
const Logger = require("logplease");
const logger = Logger.create("logger name");

const checkPair = (n) =>
  !pair.esPar(n)
    ? logger.info(`El número es par`)
    : logger.error(`El número no es par`);

[2, 3, 101, 201, 202, 100].forEach((numb) => checkPair(numb));

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end();
  })
  .listen(8080);
