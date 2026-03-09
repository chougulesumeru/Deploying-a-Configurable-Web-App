FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY app.js .

RUN mkdir -p /etc/config   #for configmap mounts

EXPOSE 3000

CMD ["node","app.js"]