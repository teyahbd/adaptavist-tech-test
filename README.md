# Adaptavist Tech Test

This repo holds a Node and TypeScript application which reads a file and returns a count of each unique word. The words are returned alphabetically and account for unusual capitalisation, padding or characters. It does not currently account for hyphenated words and will return them separately.

## How to run

This project uses `npm` and `Node`. You can clone/fork this repo to run, or you can find an archive of the repo (at the time of writing) in the `tech-test-archive.zip` file. After cloning/forking or unzipping an archive, navigate to the root folder of this project and install the dependencies using

```
npm i
```

This project uses `ts-node` so the application can be run with the command

```
ts-node app.ts < filename >
```

where < filename > is the path to the file you wish to count the words of. This repo includes an example file you can run with

```
ts-node app.ts example.txt
```

and if desired, the output of the app can be piped into another file using

```
ts-node app.ts example.txt >> output.txt
```

## Testing

Unit tests are written in Jest and can be run using

```
npm run test
```

## Conventions

This repo uses `Prettier `for formatting and `ESLint` for linting following the Airbnb config.

You can check and fix formatting using

```
npm run format
npm run format:fix
```

and check and fix formatting using

```
npm run lint
npm run lint:fix
```

## CI

There is a CI workflow using `GitHub Actions` in this repo on pushes to the main branch. There are checks for formatting, linting, TypeScript and tests. There is also a pre-commit hook written with `Husky` for the same checks.
