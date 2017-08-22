## Build Step

1. install yarn
2. install nodeJS 6.11.2 LTS
3. `yarn install`
4. create `.env` file and define environment variables `SG_REPO` and `SG_VERSION`

## Run

```sh
./build-and-run.sh
```

## Todo List

- add EsLinter and rules
~~- add shell script to bootstrap docker-compose~~
- add karma test runner instead of jest-cli
- add jenkinsfile for CI, any further change of service gateway should pass this testing before publish

## Tech Stack

- jest
- babel
- node-fetch
- yarn
- node 6.11.2 LTS
- docker 17.03.1-ce
- wiremock 2.7.1
- jenkins
- aws-cli 1.11.120
