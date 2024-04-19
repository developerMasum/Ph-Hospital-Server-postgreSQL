import { Server } from "http";
import app from "./app";

const port = 3000;

function main() {
  const server: Server = app.listen(port, () => {
    console.log(` app is listening on port ${port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.info("Server closed!");
      });
    }
    process.exit(1);
  };
  process.on("uncaughtException", (error) => {
    console.log(error);
    exitHandler();
  });

  process.on("unhandledRejection", (error) => {
    console.log(error);
    exitHandler();
  });
}

main();
