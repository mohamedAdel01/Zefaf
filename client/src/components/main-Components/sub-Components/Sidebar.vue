<template>
  <aside class="sidenav">
    <li @click="navigateTo('/accessories')">Accessories</li>
    <li @click="navigateTo('/furniture')">Furniture</li>
    <li @click="navigateTo('/hairstyle')">Hair style</li>
    <li @click="navigateTo('/honeymoon')">Honeymoon</li>
    <li @click="navigateTo('/hotels')">Hotels</li>
    <li @click="navigateTo('/photographers')">Photographers</li>
    <li @click="navigateTo('/weddingcakes')">Wedding Cakes</li>
    <li @click="navigateTo('/weddingcars')">Wedding cars</li>
    <li @click="navigateTo('/weddingclothes')">Wedding Clothes</li>
    <li @click="navigateTo('/weddingflowers')">Wedding flowers</li>
    <li @click="navigateTo('/weddinghalls')">Wedding Halls</li>
    <li @click="navigateTo('/weddinginvitations')">Wedding Invitations</li>
    <li @click="navigateTo('/weddingmusic')">Wedding Music</li>
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
    height: 36em;
    width: 160px;
    float: left;
    top: 56px;
    left: 0;
    background-color: #eee;
    overflow-x: hidden;
    padding-top: 20px;
    margin-right: 20px
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

