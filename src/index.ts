import { config } from "../src/config";
import { app } from "./server";
import "dotenv";

app.listen(config.app.port, () => {
  console.log(`running server ${config.app.port}`);
});
