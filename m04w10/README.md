# M04W10 - Responsive Design and SASS

### To Do
- [x] Responsive Design
- [x] Viewport Meta Tag
- [x] Percentages
- [x] `max-width` and `min-width`
- [x] Viewport Height/Width `vh`/`vw`
- [x] Based on Font-size `em`/`rem`
- [x] Media Queries
- [x] CSS Preprocessors
- [x] Intro to Sass/SCSS

### Responsive Design
* our web sites render well on a variety of devices


Ephimeral Units
em
M


### Media Queries
* ask the device questions about itself
* screen width, screen height, orientation, light-level

* type: screen, print, speech, all
* media feature: aspect-ratio, height, width, orientation

```css
@media only screen and (max-width: 500px) {
  h1 {
    font-size: 24px;
  }
}
```

### Preprocessors
* HTML, CSS, JS
* superset of CSS

.scss => preprocessor => .css

Sass, Less, Stylus

```html
<header>
  <h2>Hello <span>world</span></h2>
  <p>Welcome to my site</p>
</header>
```

