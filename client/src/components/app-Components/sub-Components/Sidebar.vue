<template>
  <aside class="sidenav">
    <li @click="navigateTo('/app/accessories')">Accessories</li>
    <li @click="navigateTo('/app/furniture')">Furniture</li>
    <li @click="navigateTo('/app/hairstyle')">Hair style</li>
    <li @click="navigateTo('/app/honeymoon')">Honeymoon</li>
    <li @click="navigateTo('/app/hotels')">Hotels</li>
    <li @click="navigateTo('/app/photographers')">Photographers</li>
    <li @click="navigateTo('/app/weddingcakes')">Wedding Cakes</li>
    <li @click="navigateTo('/app/weddingcars')">Wedding cars</li>
    <li @click="navigateTo('/app/weddingclothes')">Wedding Clothes</li>
    <li @click="navigateTo('/app/weddingflowers')">Wedding flowers</li>
    <li @click="navigateTo('/app/weddinghalls')">Wedding Halls</li>
    <li @click="navigateTo('/app/weddinginvitations')">Wedding Invitations</li>
    <li @click="navigateTo('/app/weddingmusic')">Wedding Music</li>
  </aside>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
.sidenav {
    height: 100%;
    width: 160px;
    position: fixed;
    top: 56px;
    left: 0;
    background-color: #eee;
    overflow-x: hidden;
    padding-top: 20px;
}

.sidenav li {
    padding: 3px 8px 3px 16px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: block;
}

.sidenav li:hover {
    color: skyblue;
}

.main {
    margin-left: 160px; /* Same as the width of the sidenav */
    font-size: 28px; /* Increased text to enable scrolling */
    padding: 0px 10px;
}
</style>

