FROM node:14.11.0-alpine3.11
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g
COPY . .
EXPOSE 49001
CMD ["pm2-runtime", "npm,", "--", "start"]