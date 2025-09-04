FROM node:latest

WORKDIR /app/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5100

CMD ["npm", "start"]