FROM node:18

WORKDIR /code

COPY . .

RUN npm install

CMD ["node", "index.js"]