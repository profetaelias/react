FROM node:8.16.2-alpine

RUN mkdir /srv/app
WORKDIR /srv/app

COPY package.json ./
RUN yarn && yarn cache clean
COPY . .
