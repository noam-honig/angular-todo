# Angular todo

This is an example todo app which uses:

- Angular
- express
- remult

## Getting Started

### Setup

```sh
git clone https://github.com/noam-honig/angular-todo
cd angular-todo
npm i
```

### Fire it up

```sh
npm run dev
npm run dev-node
```

Browse to `http://localhost:4200` to see the web app.

Api runs on `localhost:3002` but is proxied via `localhost:4200/api/*`

## Installed components:

1. Basic Setup: `express` and `remult`
   ```sh
   npm i express remult tsx
   npm i --save-dev @types/express
   ```
   See [Basic Setup](https://remult.dev/tutorials/angular/#option-2-step-by-step-setup)
2. Authentication:

   ```sh
   npm i cookie-session
   npm i --save-dev @types/cookie-session
   ```

3. Postgres:
   ```sh
   npm i pg
   npm i --save-dev @types/pg
   ```
   See [Connect to Postgres](https://remult.dev/tutorials/angular/deployment.html#connect-to-postgres)
4. For Heroku Deployment:
   ```sh
   npm i compression helmet
   npm i @types/compression --save-dev
   ```
   See [Prepare for Production](https://remult.dev/tutorials/angular/deployment.html#prepare-for-production)
