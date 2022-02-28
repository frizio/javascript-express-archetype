FROM node:16

ENV PORT=5000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# CMD ["npm", "run", "dev-docker"]

CMD ["npm", "start"]

