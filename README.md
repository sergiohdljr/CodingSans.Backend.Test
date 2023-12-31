# CodingSans Backend Test

The main goal is to create a web application which can authenticate via JWT (Json Web Token), and serve an API to GET a list of breweries filtered by a query based on the openbrewerydb.

- [x] For the web serving part you could use either 
- [Koa](https://koajs.com/)
- [Express](https://expressjs.com/)
- [Fastify](https://www.fastify.io/)

- [x] Please include a middleware for logging on all requests
- https://github.com/koajs/logger
- https://github.com/expressjs/morgan

- [x] The login endpoint ( `POST /login` ) should return a signed JWT token on correct username/password.

- [x] The token should be signed with https://github.com/auth0/node-jsonwebtoken and the signing secret should be provided via config.

For config handling we recommend our guide: https://codingsans.com/blog/node-config-best-practices

- [x] The POST request's body should contain `{ username: string, password: string }`.

- [x] The following interface describes the user.

``` { id: string; username: string; password: string; } ```

- [x] The users (with the given interface) should be stored inside a database. You can choose any db you like in your solution but the credentials should be provided via config.

- [x] The breweries endpoint ( `GET /breweries` ) should be guarded by a custom middleware.
The middleware should validate the token and check if the user exists in the database.

- The datasource should be the OpenBreweryDB https://www.openbrewerydb.org/

- [x] Use the search API to fetch the data `https://api.openbrewerydb.org/breweries/search?query=dog`

- To fetch the data use either:
- https://github.com/axios/axios
- https://github.com/bitinn/node-fetch

- [x] The search param should be provided in the query params ( `GET /breweries?query=dog` )

- [x] If the user is not authenticated on `GET /breweries` return `401`.

- [x] If the user not provided a query param return data from `https://api.openbrewerydb.org/breweries`

- [ ] If the user called any other then `POST /login` or `GET /breweries` return `404`.

Please use typescript, we included linting and testing in this project.

