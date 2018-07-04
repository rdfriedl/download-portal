FROM node:10

WORKDIR /usr/src/app

ENV PORT 8008

COPY package*.json ./
RUN npm install

COPY . .

VOLUME ["/downloads"]
VOLUME ["/config"]

HEALTHCHECK CMD curl --fail http://0.0.0.0:$PORT/health || exit 1

EXPOSE 8080
CMD ["npm", "start"]