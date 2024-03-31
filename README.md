# Frontend Mentor - IP Address Tracker Challenge

![Design preview for the Shortly URL shortening API coding challenge](./public/images/desktop-preview.jpg)

## Welcome! 👋
Приложение выполнено в рамках челенджа проекта [Frontend Mentor](https://www.frontendmentor.io/?ref=challenge) ***"IP Address Tracker"***. <br/>
С готовым вариантом приложения можно ознакомиться [здесь](https://ip-address-tracker-green-six-25.vercel.app/).

### Функциональность.
Представляет собой одностраничное приложение (single page application) с возможностью поиска геоданных в зависимости от вручную введененного IP адреса. Также имеется возможность автоматического определения IP адреса и соответствующих геоданных.

Если введенный вручную IP адрес некорректный, то под полем появляется сообщение ошибки.

### Техническая часть.
Для запуска приложения использовать script `npm run dev`, открытое приложение доступно по адресу: **http://localhost:3000/**.

Приложение выполнено с использование фреймворка `Next.js`, языка `TypeScript` и адаптировано под все разрешения (десктопное и мобильное):
- ***Desktop: 1440px и выше***;
- ***Mobile: от 375px***.

Определение IP адреса, а также гоеданные по нему берутся с [IP Geolocation API by IPify](https://geo.ipify.org/). Карта выполнена при помощи библиотеки `React Leaflet`. Управления состоянием приложения осуществляется с помощью `Redux Toolkit`, работа с API запросами - `Redux Toolkit Query`. <br/>
Каскадные таблицы стилей написаны с использованием библиотеки `Tailwind CSS`.