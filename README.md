# Poster POS Platform Boilerplate

POS Platform Boilerplate — это шаблон для создания приложений на POS платформе.    

Как начать работу описано в разделе [Начало работы](https://github.com/joinposter/pos-platform-boilerplate#%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B). После запуска вы можете начинать разрабатывать свое приложение прямо в этом проекте.

Приложение на POS платформе выполняются на Javascript. 
Вы можете писать приложение на любом языке, который компилируется в JS (CoffeeScript, TypeScript). 
Приложение загружается в систему в виде одного JS-файла (bundle) который собирается при помощи [vite](https://vitejs.dev/).

Для создания интерфейса приложения, вы можете использовать любой фреймворк или библиотеки. 
Например, Backbone, VueJS, Angular, React. Например, интерфейс Poster написан на [React](https://reactjs.org/).


### Начало работы

1. Склонируйте репозиторий

2. Перейдите в папку с проектом и выполните: 

> **Убедитесь, что имеете версию node v20.14.0**

```bash
npm install 
npm run dev
```

3. Зайдите в нативное приложение кассового решения в своем аккаунте: `https://pos.ps`. Логин и пароль — который вы указывали при регистрации, стандартный пин-код официанта 0000.

4. Вверху слева нажмите на вкладку prod</>, переключите ваше приложение в режим разработки. Введите адрес `https://localhost:5173`

5. Откройте заказ и оплатите его. После закрытия счета приложение из Boilerplate покажет попап.

6. Ура, вы запустили первое приложение на платформе 🎉


### Примеры приложений

Чтобы запустить одни из примеров, поменяйте компоненту в файле `src/js/App.jsx` 

[Hello World](https://github.com/joinposter/pos-platform-boilerplate/tree/master/examples/hello-world) – Показывает как модифицировать интерфес трерминила Poster и отображать свой интерфейс. 

[Система лояльности](https://github.com/joinposter/pos-platform-boilerplate/tree/master/examples/loyalty) – Показывает как работать с заказом, находить гостей по номеру телефона и создавать новых. Устанавливать скидку на заказ.

[Система управления отелем](https://github.com/joinposter/pos-platform-boilerplate/tree/master/examples/pms) – Пример приложения для управления отелем
