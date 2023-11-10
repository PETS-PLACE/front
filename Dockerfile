# syntax=docker/dockerfile:1

FROM node:20-alpine3.17
WORKDIR /usr/src/front
COPY . .
EXPOSE 8081
ENTRYPOINT npm start
