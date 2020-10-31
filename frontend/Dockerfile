FROM node:latest AS local

RUN mkdir /frontend
WORKDIR /frontend

# you need to run `npm install` on the host
# COPY package.json package-lock.json /frontend/
# RUN npm install
RUN npm install -g @angular/cli@latest

COPY . /frontend/
