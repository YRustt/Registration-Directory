FROM nginx:latest AS local

COPY nginx.local.conf /etc/nginx/nginx.conf


FROM nginx:latest AS prod

COPY nginx.prod.conf /etc/nginx/nginx.conf

RUN mkdir /static/
COPY /static/ /static/

RUN mkdir /media/

RUN mkdir /frontend/
COPY /frontend/ /frontend/
