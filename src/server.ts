import { config } from "./config";
import { app } from "./app";

app.listen(config.app.port, () => {
  console.log(`running server ${config.app.port}`);
});
