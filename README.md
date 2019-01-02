# vue-blog-placeholders

![npm](https://img.shields.io/npm/v/vue-blog-placeholders.svg)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Vue plugin package for a placeholder of your content to a demonstration before content loads.

![example](https://i.imgur.com/C9gGu7D.gif)

---

## Installation

* via npm: `npm install vue-blog-placeholders --save`

## Usage

Include plugin in your `app.js` file.

```javascript
import Vue from 'vue'
import VueBlogPlaceholders from 'vue-blog-placeholders'

Vue.use(VueBlogPlaceholders)
```

> ⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.

### Examples:

```html
<content-placeholders>
  <content-placeholders-img :height="14"/>
  <content-placeholders-heading />
</content-placeholders>
```

![rendered example](https://i.imgur.com/mbC5227.gif)

```html
<content-placeholders>
    <content-placeholders-list-item :items="3">
        <content-placeholders-img :height="5"/>
        <content-placeholders-text :lines="2"/>
    </content-placeholders-list-item>
</content-placeholders>
```

![rendered example](https://i.imgur.com/bcYYkU8.gif)

```html
<content-placeholders :rounded="15">
    <content-placeholders-img :height="12"/>
</content-placeholders>
<content-placeholders :centered="true">
    <content-placeholders-text :lines="3" :thickness="25"/>
</content-placeholders>
```

![rendered example](https://i.imgur.com/C9gGu7D.gif)

```html
<content-placeholders>
  <content-placeholders-text :lines="6" :thickness="30"/>
</content-placeholders>
```

![rendered example](https://i.imgur.com/Q6TmhPx.gif)

### Available components and properties

* wrap component `<content-placeholders>`
  * Boolean `animated` (default: true)
  * Boolean `rounded` (default: 10px) - border radius in px
  * Boolean `centered` (default: false)
  > these properties will effect the inner components


* `<content-placeholders-heading />`
  * Boolean `img` (default: false)


* `<content-placeholders-text />`
  * Number `lines` (default: 4)
  * Number `thickness` (default: 15) - in px
  * Boolean `center` (default: false)


* `<content-placeholders-img />`
  * Number `height` (default: 2) - in em

* `<content-placeholders-list-item />`
  * Number `items` (default: 4)

---

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT). This package inspired by [vue-content-placeholders](https://github.com/michalsnik/vue-content-placeholders).
