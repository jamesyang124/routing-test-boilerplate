FROM openjdk:8-alpine
MAINTAINER james_yang@htc.com

RUN apk add --no-cache --virtual .build-deps wget && \
    rm -rf /var/cache/apk/*

ARG WIREMOCK_VERSION
ENV VERSION $WIREMOCK_VERSION

RUN mkdir /wiremock
WORKDIR /wiremock
RUN wget -q https://repo1.maven.org/maven2/com/github/tomakehurst/wiremock-standalone/$WIREMOCK_VERSION/wiremock-standalone-$WIREMOCK_VERSION.jar

RUN apk del .build-deps

EXPOSE 9999

ENTRYPOINT java -jar wiremock-standalone-$VERSION.jar --port 9999
