FROM node:10
WORKDIR /opt/riegoBot
COPY package*.json /opt/riegoBot/
RUN npm install
COPY . /opt/riegoBot/
CMD node app.js
