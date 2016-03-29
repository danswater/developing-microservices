FROM node

RUN mkdir -p /opt/app
ADD . /opt/app

RUN cd /opt/app/api && npm install
CMD ["node", "/opt/app/api/index.js"]
