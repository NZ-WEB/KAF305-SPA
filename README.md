# KAF 305-SPA

## SPA Designed for the Department of 305 MAI, based on an interactive whiteboard ( SPA Предназначенное для кафедры 305 МАИ, базирующееся на интерактивной доске)

The SPA for an interactive whiteboard written on the basis of Vue JS, using the Quasar framework and its basic functionality. The schedule backend was provided by the developers of the MAI application. The database of teachers is based on the Google Firebase service

SPA для интерактивной доски, написаноое на базе Vue JS, с применением фреймворка Quasar и его базового функционала. Бэкенд расписания был предоставлен разработчиками приложения "МАИ". База данных преподавателей базируется на сервисе Google Firebase

# Attention

## for the program to work correctly, you need to add the ".env" file and a variable in it:

- VUE_APP_SCHEDULE_API_KEY
- VUE_APP_SCHEDULE_GROUP_BY_NAME_URL=https://jutter.online/mai/api/groups/search/
- VUE_APP_FIND_TEACHER_URL=https://jutter.online/mai/api/schedule/searchLector/
- VUE_APP_GROUP_SCHEDULE_URL=https://jutter.online/mai/api/schedule/all/
- VUE_APP_TEACHER_SCHEDULE_URL=https://jutter.online/mai/api/schedule/lector/
- VUE_APP_CURRENT_GROUP_SCHEDULE=https://jutter.online/mai/api/schedule/currentWeek/

> Внимание!
> Приложение находится на этапе разработки

# Links(ссылки)

- https://kaf305-mai.web.app/#/ (Ссылка на хостинг с проектом)
- https://github.com/NZ-WEB/KAF305-SPA/tree/master (ссылка на репозиторий)
- https://jutter.online/maiadmin/app/public/reg (Ссылка на API расписания)
- https://play.google.com/store/apps/details?id=com.raspisanie.mai (Мобильное приложение расписания занятий МАИ)

## Features(Особенности)

- Schedule functionality for students and teachers (Функционал расписания для студентов и преподавателей)
- Information about the teachers of the department 305 and their scientific works (Информация о преподавателях кафедры 305 и их научных работах)
- Information about the department 305 and its scientific activities (Информация о кафедре 305 и её научной деятельности)
- Information about research works conducted on the basis of the department 305 (Информация о научно-исследовательских работах, ведущихся на базе кафедры 305)
- Information about conferences taking place at the department 305 (Информация о конференциях, происходящих на кафедре 305)

## Tech(Технологии)

KAF-305 SPA uses a number of open source projects to work properly (KAF-305 SPA использует ряд проектов с открытым исходным кодом для правильной работы):

- [Vue Js] - JavaScript library for creating web interfaces (JavaScript библиотека для создания веб-интерфейсов)
- [Quasar] - A framework designed to facilitate the process of developing an application frontend (Фреймворк, предназначенный для облегчения процесса разработки фронтенда приложения)
  -- [Quasar CLI] - universal creator of the basic application structure (универсальный создатель базовой структуры приложения)
  -- [VueX] - Centralized state management based on Flux for Vue.js (Централизованное управление состоянием на основе Flux для Vue.js.)
  -- [Vue Router] - official routing library (библиотека маршрутизации приложеиня)
- [GIT] - Version control system (Система контроля версий)

And of course KAF-305 SPA itself is open source with a [public repository][dill]
on GitHub (И, конечно же, сам KAF-305 SPA имеет открытый исходный код с общедоступным репозиторием
на GitHub.)

# Install & Use (Установка и использование)

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

# Autor(Создатель) - Федосеев Евгений

## telegram - @nzweb
