FROM node:12.9.1

WORKDIR /usr/src/app
COPY * ./
EXPOSE 180
CMD [ "node", "app.js" ]
