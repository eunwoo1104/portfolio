FROM node:18-slim

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build
RUN yarn global add serve

CMD ["serve", "build"]