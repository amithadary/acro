FROM node:latest
RUN mkdir -p /usr/src/app/client
COPY ./client/package.json /usr/src/app/client
WORKDIR /usr/src/app/client
RUN npm install
COPY ./client .
RUN npm run build
RUN mkdir -p /usr/src/app/server
COPY ./server/package.json /usr/src/app/server
WORKDIR /usr/src/app/server
RUN npm install
COPY ./server .
EXPOSE 3000
CMD ["npm","start"]