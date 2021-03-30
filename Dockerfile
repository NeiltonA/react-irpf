
FROM node:11-alpine
ENV HOME=/home/app
WORKDIR $HOME
COPY package.json ./
RUN npm install --silent
EXPOSE 4000
CMD ["npm", "start"]