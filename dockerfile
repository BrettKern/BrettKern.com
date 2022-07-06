FROM node:12.9.1
npm install ejs
WORKDIR /usr/src/app
COPY * ./
EXPOSE 180
CMD [ "node", "app.js" ]
