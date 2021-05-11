FROM node:12-alpine

WORKDIR /usr/src/app/

COPY ["./package.json","./"]

RUN yarn && apk update && apk add bash

COPY . .

RUN ["chmod", "+x", "./wait-for.sh"]

EXPOSE 3333

CMD [ "node", "." ]