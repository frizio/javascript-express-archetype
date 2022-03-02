FROM node:16

ENV PORT=80

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

# CMD ["npm", "run", "dev-docker"]

CMD ["npm", "start"]

