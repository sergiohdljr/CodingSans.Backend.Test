import { app } from "./server";
import "dotenv";

app.listen(3000, () => {
  console.log(`running server`);
});
