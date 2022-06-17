<p align="center">
  <img width="240" height="180" src="https://cdn.dribbble.com/users/702032/screenshots/3410973/media/de2f03b8916a47de0291b41a21ced8c5.png?compress=1&resize=400x300&vertical=top"/>
</p>

<h1 align="center">Monolitik</h1>

🚀 Powered by [Turborepo](https://turborepo.org/)

## Motivation

Having the code split up in multiple repositories is definitely a good practice, having the backend and the frontend on their own repositories is certainly a clean approach. But this ends up complicating things for agile development, where prototypes need to **ship** fast, and this is even more noticeable in small development teams, where usually one person takes care of each side of the project, so having everything in one place ends up being for the best, everyone can easily know how things look like both in the backend and in the frontend, without having to head over to their Organization and look for the other side of the project, just to know what an API endpoint does.

## About monorepos

[Uber Technology Day: Monorepo to Multirepo and Back Again](https://www.youtube.com/watch?v=lV8-1S28ycM)


[Big JavaScript Projects - Code Sharing](https://www.youtube.com/watch?v=MflUMIeADZU)

## Usage

There are 6 main packages in this monorepo: 

* backend
  - **db**: Prisma models & DB interface
  - **server**: REST API

* frontend
  - **landing**: landing page
  - **admin-dashboard**: admin dashboard
  - **ui-kit**: reusable react components

You can interact with them through the following scripts:

```json
"scripts": {
  "db": "yarn workspace db",
  "server": "yarn workspace server",
  "landing": "yarn workspace landing", 
  "a-d": "yarn workspace admin-dashboard", 
  "ui": "yarn workspace ui-kit" 
},
```

### Examples

- Run the server in dev mode:

```bash
yarn server dev
```

- Adding the web3 and web3-utils dependencies to the server

```bash
yarn landing add web3 web3-utils
```

- Adding the **db** package to the server as a dependency

```bash
yarn server add "db@*"
```

### Extra

#### linters

A collection of presets for eslint rules and configuration

- **base**: Generic rules
- **nest**: For NestJS apps
- **next**: For NextJS apps
- **react**: For React Apps 

If you want to create a new linter, duplicate one of the existing directories and override the `index.js` file as needed.

#### _config

A collection of tsconfig files

- **base**: Generic TS code
- **next**: For NextJS apps
- **react-library**: For React Apps and component libraries 

#### CI/CD

Github actions that'll run and check if your changes broke everything

```yml
env:
  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
  TURBO_TEAM: ${{ secrets.TURBO_TEAM }}
```

Make sure to configurate your secrets and fill in the variables above. [Guide](https://turborepo.org/docs/ci/github-actions#remote-caching)

### Deployments

#### Deploy a microfrontend to a serverless

```bash
cd frontend/landing
```

Create a `netlify.toml` config file:

```toml
[build]
  ignore = "git diff --quiet HEAD^ . ../ui-kit/"
  command = "yarn build"
  publish = "build"

[build.environment]
  NETLIFY_USE_YARN = "true"
```

Install netlify

```bash
npm i -g netlify-cli
netlify init
```

Choose:

1. Create and configure a new site
2. Select your team
3. Choose a site name
4. Set the base directory to `frontend/landing`
5. For build command, input `yarn build`
6. For directory to deploy, choose the output directory that the build command generates. Nextjs outputs to `.next` and react does so to `build`. Following the landing example, you will input `frontend/landing/build`
7. Leave blank for functions