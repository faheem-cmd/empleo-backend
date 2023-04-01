 FROM node:16
 WORKDIR /Server
 COPY package.json /Server
 RUN npm install
 COPY . /Server 
 CMD node Server.js
 EXPOSE 8888