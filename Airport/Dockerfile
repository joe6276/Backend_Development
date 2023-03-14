FROM node:19-alpine

WORKDIR /app

COPY  package*.json /app

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

COPY . . 

EXPOSE 4200

CMD ng serve --port 4200 --host 0.0.0.0 --poll 1