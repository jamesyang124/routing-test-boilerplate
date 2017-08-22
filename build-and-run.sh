#! /bin/sh
source .env

$(aws ecr get-login --no-include-email --region us-west-2)

docker-compose down --remove-orphan
docker-compose up --build -d

yarn run test

#docker-compose down --remove-orphan
