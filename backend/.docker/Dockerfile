FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env ./

# run migrations
RUN npm run migrate

# run seeders
RUN npm run data:sync

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]