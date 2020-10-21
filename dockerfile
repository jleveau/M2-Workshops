FROM node:10

WORKDIR /usr/src/app

RUN git clone https://github.com/mathiouu/M2-Workshops.git . \
    && git checkout dev && npm install

EXPOSE 3000

CMD [ "node", "js/index.js" ]