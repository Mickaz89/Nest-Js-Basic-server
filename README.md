## Installation

```bash
$ npm install
```

## Running the app

Create corresponding env file (local.env or dev.env)

```bash
#local
$ npm run start

# development
$ npm run start:dev
```

## Deployment

Deployment to AWS ECS using aws copilot.

### Create/Edit Dockerfile

### Create/Edit Copilot Env and App (using copilot cli)

```bash
$ copilot init
```

### Set your aws credentials using aws cli

```bash
$ aws configure
```

### Deploy

```bash
$ copilot deploy
```
