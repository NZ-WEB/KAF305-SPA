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
- VUE_APP_SERVER_BASE_URL=http://81.163.26.156:3001

> Внимание!
> Приложение находится на этапе разработки

# Links(ссылки)

- http://81.163.26.156:8080/#/ (Ссылка на хостинг с проектом)
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

## Directories tree:
```
├── babel.config.js
├── firebase.json
├── icongenie-prod.json
├── jest.config.js
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── icons
│       ├── favicon-128x128.png
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       └── favicon-96x96.png
├── quasar.conf.js
├── quasar.extensions.json
├── quasar.testing.json
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── bg.mp4
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   ├── main-image-1.jpg
│   │   ├── mai-web.svg
│   │   ├── quasar-logo-vertical.svg
│   │   └── splash.png
│   ├── axios
│   │   └── teachers.js
│   ├── boot
│   │   ├── axios.js
│   │   └── i18n.js
│   ├── components
│   │   ├── AppKeyboard.vue
│   │   ├── AppNirsCounterCard.vue
│   │   ├── AppPageTitle.vue
│   │   ├── AppProfileCard.vue
│   │   ├── AppPublicationCard.vue
│   │   ├── AppQRCode.vue
│   │   ├── AppScheduleForm.vue
│   │   ├── AppScheduleItem.vue
│   │   ├── AppSimpleKeyboard.vue
│   │   ├── AppTeachersPanel.vue
│   │   ├── AppTopSlider.vue
│   │   ├── AppWeeksSchedule.vue
│   │   ├── EssentialLink.vue
│   │   ├── TheMainTabPanels.vue
│   │   ├── TheNirsCounter.vue
│   │   ├── TheNirsCustomers.vue
│   │   └── TheNirsDestinations.vue
│   ├── css
│   │   ├── app.scss
│   │   └── quasar.variables.scss
│   ├── data
│   │   ├── currWeek.js
│   │   ├── homePageTabs.js
│   │   ├── membersSlider.js
│   │   └── Teachers.js
│   ├── i18n
│   │   ├── en-US
│   │   │   └── index.js
│   │   └── index.js
│   ├── index.template.html
│   ├── layouts
│   │   ├── MainLayout.vue
│   │   └── OwnLayout.vue
│   ├── pages
│   │   ├── Error404.vue
│   │   ├── GroupWeeksSchedule.vue
│   │   ├── History.vue
│   │   ├── Home.vue
│   │   ├── News.vue
│   │   ├── NIR.vue
│   │   ├── Schedule.vue
│   │   ├── TeacherSchedule.vue
│   │   ├── Teachers.vue
│   │   └── WeeksSchedule.vue
│   ├── router
│   │   ├── index.js
│   │   └── routes.js
│   ├── service
│   │   └── members.service.js
│   ├── store
│   │   ├── homePage
│   │   │   ├── actions.js
│   │   │   ├── getters.js
│   │   │   ├── index.js
│   │   │   ├── mutations.js
│   │   │   └── state.js
│   │   ├── index.js
│   │   ├── modules
│   │   │   ├── currentSchedule.module.js
│   │   │   ├── schedule.module.js
│   │   │   ├── teachers.module.js
│   │   │   └── user.module.js
│   │   ├── news
│   │   │   ├── actions.js
│   │   │   ├── getters.js
│   │   │   ├── index.js
│   │   │   ├── mutations.js
│   │   │   └── state.js
│   │   └── store-flag.d.ts
│   └── use
│       ├── homePage.js
│       ├── schedulePage.js
│       └── weeksSchedule.js
├── src-electron
│   ├── electron-main.js
│   ├── electron-preload.js
│   └── icons
│       ├── icon.icns
│       ├── icon.ico
│       └── linux-512x512.png
└── yarn.lock

26 directories, 99 files

```

### Customize the configuration

See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

# Autor(Создатель) - Федосеев Евгений

## telegram - @nzweb
