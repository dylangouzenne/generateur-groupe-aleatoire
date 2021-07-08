FROM httpd:2.4-alpine

WORKDIR /usr/local/apache2/htdocs/

COPY ./www/ /usr/local/apache2/htdocs/

RUN apk add --update npm

RUN npm install