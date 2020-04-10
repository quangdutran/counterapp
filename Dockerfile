FROM node:latest

MAINTAINER Duke

ENV NODE_ENV=development

COPY . /var/www
WORKDIR /var/www


RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]