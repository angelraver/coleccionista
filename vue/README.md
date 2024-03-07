# base

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev

# bun
pnpm run dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build

# bun
pnpm run build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint

# bun
pnpm run lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).


### Deploy
```
gcloud config set project coleccionista-web

gcloud app deploy

gcloud app logs tail -s coleccionista-web

gcloud app browse -s coleccionista-web

```


### Issues

If the autocomplet search for VideoGames does not work take a look to the collector golang project, it may be the IGMD (Internet Game Data Base) credentials are expired.