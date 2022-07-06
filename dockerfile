FROM node:12.9.1
RUN npm install ejs express-partials
WORKDIR /usr/src/app
COPY * ./
EXPOSE 180
CMD [ "node", "app.js" ]
