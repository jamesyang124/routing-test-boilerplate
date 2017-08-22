#! /bin/sh
source .env
export SG_VERSION=1.0.1708220805-d3eb349b31

$(aws ecr get-login --no-include-email --region us-west-2)

docker-compose down --remove-orphan
docker-compose up --build -d

yarn run test

#docker-compose down --remove-orphan
