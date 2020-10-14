FROM node:10

WORKDIR /usr/src/app

ADD https://github.com/wilfriedaugeard/M2-Workshops.git .

RUN npm install

EXPOSE 27017

CMD [ "node", "js/index.js" ]
