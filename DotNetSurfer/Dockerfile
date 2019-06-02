FROM nginx:alpine
LABEL author="Jason Kim"
COPY ./dist/DotNetSurfer
  /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]