WORKDIR /usr/src/app
COPY * ./
EXPOSE 180
CMD [ "node", "app.js" ]
