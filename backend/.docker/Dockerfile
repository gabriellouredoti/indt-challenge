FROM node:18-slim

RUN apt update -qy && apt upgrade -qy && apt install -qy openssl && apt autoremove -qy

WORKDIR /app

ADD . .

RUN npm i

RUN npm run migrate

CMD ["npm", "run", "start:dev"]

EXPOSE 3001 3001
