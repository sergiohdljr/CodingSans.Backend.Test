import "dotenv";

export const config = {
  app: {
    port: process.env.PORT,
  },
  db: {
    host: "Your bd host",
    port: "your bd port",
    name: process.env.DB,
    url: process.env.URL,
  },
  jwt: {
    secret: process.env.SECRET_JWT,
  },
};
