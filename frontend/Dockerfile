FROM node:latest AS local

RUN mkdir /frontend
WORKDIR /frontend

COPY package.json package-lock.json /frontend/
RUN npm install
RUN npm install -g @angular/cli

COPY . /frontend/

