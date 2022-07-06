FROM node:12.9.1
RUN npm install ejs express-partials express
COPY . /build-context
WORKDIR /build-context
EXPOSE 180
CMD [ "node", "app.js" ]
