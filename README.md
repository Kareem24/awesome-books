# Awesome Books Project

> This is an e-library project, based primarily on `js` which implements features as; storage of books, adding of books and removal of books. It implements various `js` methods and API's.

![screenshot](./src/img/awesome-books.png)

This is a Web Application built with `JavaScript` and bundled with `webpack`, it utilizes the `luxon` library to display the local date & time,

## Built With

- HTML

  - `ul` Unordered List (To list out books items on the page)
  - HTML `form`
  - `input` attributes; `placeholder`

- Java Script
- Implemented DOM manipulation in various parts of the project to make page dynamic.
- JS `Objects`, `Arrays`, & `Object Arrays` to store data of similar items.
- Implement the use of Arrow Functions `=>` and `{destructure}` methods to match the modern conceptions.
- Implemented `array.forEach()`, through the course of the project to loop through `objects` in the `Objects Array`; thus making it possible to manipulate the objects and produce desired result.
- Made use of `if Statements` to match specific use cases.
- Made use of the`FormData` web API to get the form value
- Implement the use of `eventListeners` to make 'add' & 'delete' buttons functional.
- The `JSON` API `stringify` & `parse` was implemented, to enable JS Objects to be used on windows local storage.
- The `localStorage` `set()` & `get()` methods were used to store and retrieve books data.
- Made use of the `HTMLCollection` API with DOM selector `document.querySelectorAll()` to manipulate a list of elements with same class.
- Implement `JS - Class` to make an Object oriented programming (OOP)

* Luxon
* The Date & Time displayed in the page is gotten from the `Luxon` library

* WEBPACK
* Implement webpack with various plugins to bundle `js`, minify `css`, and create a `HTMl` template.
* Split `webpack` config into two modes `production` and `development`.
* Create a common webpack config and use a `webpack-merge` plugin to keep things `DRY` in production and development configs.
* Load `DateTime` from `luxon` library.
* Various webpack plugins were used for this project.

  - HTMLWebpackPlugin
  - MiniCssExtractPlugin
  - OptimizeCSSAssetsPlugin
  - CssMinimizerPlugin

- CSS
  - Pseudo-selectors (hover; to add hover effect to certain elements)
  - Pseudo-elements
  - CSS media query to make page responsive for mobile
  - `Flexbox`
  - Transition property

## Live Demo

[Live Demo Link](https://livedemo.com)

### Development (Running locally)

- Clone the project

```bash
git clone https://github.com/user/html-css-template.git

```

- Install Dependencies

```bash
npm run install
```

- Spin up the dev server

```bash
npm run start
```

To run StyleLint by itself, you may run the lint task:

```bash
npm run lint:check
```

Or to automatically fix issues found (where possible):

```bash
npm run lint
```

You can also check against Prettier:

```bash
npm run format:check
```

and to have it actually fix (to the best of its ability) any format issues, run:

```bash
npm run format
```

You can also check against HTML Validator:

```bash
npm run html-validator
```

## Style Guides

- [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Git Style Guide](https://udacity.github.io/git-styleguide/)

## 👤 Author

- Github: [@author](https://github.com/kareem24)
- Twitter: [@author](https://twitter.com/adekunle1855)
- Linkedin: [@author](https://www.linkedin.com/in/kareem-horlah/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](../../issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration, resources/assets used
- etc

## 📝 License

[MIT licensed](./LICENSE).
