FROM nginx:latest AS local

COPY nginx.local.conf /etc/nginx/nginx.conf


FROM nginx:latest AS prod

COPY nginx.prod.conf /etc/nginx/nginx.conf

RUN mkdir -p /static/
COPY /static/ /static/

RUN mkdir -p /media_files/

RUN mkdir -p /frontend/
COPY /frontend/ /frontend/
