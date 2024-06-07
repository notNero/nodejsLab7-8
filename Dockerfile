# Используем node.js образ в качестве базового
FROM node:latest


# Установка и копирование зависимостей
WORKDIR /app
COPY package.json .
RUN npm install


# Копирование исходного кода
COPY . .



# Компиляция TypeScript


# Выполнение команды postbuild
RUN npm run postbuild

# Указываем порт, который будет использоваться приложением
EXPOSE 4000

# Команда для запуска приложения
CMD ["npm", "start"]
