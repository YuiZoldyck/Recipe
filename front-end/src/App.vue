<template>
<div id="app">
  <div id="menu">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <img src="/finallogo.jpg">
        </div>
      </router-link>
    </div>

    <div class="nav">
      <router-link to="/about">
        <ul>About</ul>
      </router-link>

      <router-link to="/products">
        <ul>Products</ul>
      </router-link>

      <router-link to="/browse">
        <ul>Browse</ul>
      </router-link>

      <router-link to="/blog">
        <ul>Blog</ul>
      </router-link>

      <router-link to="/cart">
        <ul>Cart</ul>
      </router-link>
    </div>
  </div>

  <div class="content">
      <router-view />
  </div>

  <div class="footer">
    <router-link to="/admin">Admin</router-link> ||
    <a href="https://github.com/YuiZoldyck/Recipe.git">Github</a>
  </div>
</div>
</template>

<style>
#menu {
  display: block;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  
}

#menu a {
  color: #8c7162;
}

#menu a:hover {
  color: #90705d;
  font-weight: bold;
  font-size: 18px;
}

html {
  box-sizing: border-box;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  color: #1C454F;
  display: flex;
}

.nav {
  display: flex;
  color: #8c7162;
  background-color: #ffeae5;
  justify-content: center;
}

.nav a {
  text-decoration: none;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 30px;
  padding: 20px 100px 0px 50px;
  background-color: #ffeae5;
  font-size: 12px;
  color: #8c7162;
}

.footer a {
  color: #8c7162;
  text-decoration: none;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
