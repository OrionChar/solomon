FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./solomon/ /usr/share/nginx/html/solomon
COPY ./orion/ /usr/share/nginx/html/orion

EXPOSE 80

# Запускаем Nginx (эта команда уже есть в базовом образе, но можно указать явно)
CMD ["nginx", "-g", "daemon off;"]