#
# Copyright (c) 2025 by WebMettle Systems.
#

FROM node:22-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

COPY app.js ./
COPY javascript ./javascript/
COPY views ./views/
COPY public ./public/

ENV HelloCloudListenPort=3100
CMD [ "node", "app.js" ]
