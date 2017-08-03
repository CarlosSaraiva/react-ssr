FROM node:8.1.1
WORKDIR /build
EXPOSE 3005
CMD ["node", "server"]