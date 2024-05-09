import app from "./src/app";
import config from "config";

const startServer = async () => {
  const PORT = config.get("server.port") || 5503;

  try {
    app
      .listen(PORT, () => console.log(`Listening on port ${PORT}`))
      .on("error", (err) => {
        console.log("Error starting server: ", err.message);
        process.exit(1);
      });
  } catch (err) {
    console.log("Error happened: ", err.message);
    process.exit(1);
  }
};

void startServer();
