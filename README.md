# Monolitik Template

🚀 Powered by [Turborepo](https://turborepo.org/)

## Motivation

Having the code split up in multiple repositories is definitely a good practice, having the backend and the frontend on their own repositories is certainly a clean approach. But this ends up complicating things for agile development, where prototypes need to **ship** fast, and this is even more noticeable in small development teams, where usually one person takes care of each side of the project, so having everything in one place ends up being for the best, everyone can easily know how things look like both in the backend and in the frontend, without having to head over to their Organization and look for the other side of the project, just to know what an API endpoint does.

## About monorepos

[Uber Technology Day: Monorepo to Multirepo and Back Again](https://www.youtube.com/watch?v=lV8-1S28ycM)


[Big JavaScript Projects - Code Sharing](https://www.youtube.com/watch?v=MflUMIeADZU)

## Usage

There are 6 packages in this monorepo: 

* backend
  - **db**: Prisma models & DB interface
  - **server**: REST API

* frontend
  - **landing**: landing page
  - **admin-dashboard**: admin dashboard
  - **ui**: reusable react components

You can interact with them through the following scripts:

```json
"scripts": {
  "db": "yarn workspace db",
  "server": "yarn workspace server",
  "landing": "yarn workspace landing", 
  "a-d": "yarn workspace admin-dashboard", 
  "ui": "yarn workspace ui" 
},
```

### Examples

- Run the server in dev mode:

```bash
yarn server dev
```

- Adding the web3 and web3-utils dependencies to the server

```bash
yarn server add web3 web3-utils
```

- Adding the **db** package to the server as a dependency

```bash
yarn server add "db@*"
```