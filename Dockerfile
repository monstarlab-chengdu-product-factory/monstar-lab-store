FROM node:6

EXPOSE 8000

ADD ./ .
USER root

RUN npm install

RUN npm run test
