FROM node:20

WORKDIR /data
COPY ./build .
COPY package.json .

CMD ["node", "./index.js"]