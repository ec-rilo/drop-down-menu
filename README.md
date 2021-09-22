# What is this?

Create multiple menu items in the <nav> of your html document with nested menu options.
Menu options will appear in the form of a drop down menu that appears and disappears.
All that you need to do is create it in html and the javascript will do the rest.

# Installation

'$ npm i dropDown-expand-contract --save'

# How to use

In index.js all you have to do is import dropDown.js and your ready to go!

```
import "src/modules/dropDown.js";
```

The path you use will be different then mine. The above is an example.

You MUST also have the below css and html for this to work. Tweak as you see fit.

```html
<nav>
  <ul class="nav-menu">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Projects</a>
      <ul class="nav-menu-item-dd expand-contract-contracted">
        <a href="#"><li>Project-1</li></a>
        <a href="#"><li>Project-2</li></a>
        <a href="#"><li>Project-3</li></a>
      </ul>
    </li>
    <li>
      <a href="#">Photography</a>
      <ul class="nav-menu-item-dd expand-contract-contracted">
        <a href="#"><li>Weddings</li></a>
        <a href="#"><li>Sports</li></a>
        <a href="#"><li>Wildlife</li></a>
      </ul>
    </li>
  </ul>
</nav>
```

```css
a {
  text-decoration: none;
  color: white;
}

nav {
  position: relative;
  display: flex;
  height: 80px;
  background-color: black;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
  font-size: 17px;
  font-family: 'Montserrat Light';
  justify-content: space-between;
}

.nav-menu {
  position: absolute;
  display: flex;
  gap: 40px;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.expand-contract-contracted {
  visibility: hidden;
  margin-top: 0px;
  opacity: 0;
}

.expand-contract-expanded {
  visibility: visible;
  margin-top: 30px;
  opacity: 1;
}

.nav-menu-item-dd {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: black;
  width: 100%;
  padding: 15px;
  padding-top: 20px;
  border-radius: 0 0 5px 5px;
  transition: margin-top 1s, opacity 0.5s, visibility 0.5s;
}
```
