FROM python3.7 AS local

ENV PYTHONBUFFERED 1

RUN mkdir /backend
WORKDIR /backend

COPY requirements.txt /backend/
RUN pip install -r requirements.txt

COPY . /backend/
RUN mkdir -p media


FROM python3.7 AS prod

ENV PYTHONBUFFERED 1

RUN mkdir /backend
WORKDIR /backend

COPY requirements.txt /backend/
RUN pip install -r requirements.txt

COPY . /backend/
RUN mkdir -p media
RUN mkdir -p static
