<template>
  <div style="height:3000px">
    <h1 class="mx-auto mt-2" style="width: 600px">wedding halls list page content</h1>
    <form style="width: 500px; margin: 10px auto"><hr/>
    <section class="main-info">
      <h4>main-info</h4>
      <input class="form-control" type="text" placeholder="name"/>
      <input class="form-control" type="text" placeholder="governorate"/>
      <input class="form-control" type="text" placeholder="city"/>
      <input class="form-control" type="text" placeholder="address"/>
      <input class="form-control range" type="number" placeholder="min range of people"/>
      <input class="form-control range" type="number" placeholder="max range of people"/>
      <div class="clearfix"></div>
      <div class="mt-2 mb-3 border border-info">
        <p>select some picture </p>
        <input type="file" name="images" multiple/>
      </div>
      <div id="map"></div><hr/>
    </section>
    <section class="sub-services">
      <h4>services-prices</h4>
      <div class="service-prices">
        <p class="mr-5">DJ and music:</p>
        <span>price: </span><input type="number"/> pounds
      </div>


    </section>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  margin: 5px 0
}
input.range{
  float: left;
  width: 45%;
  margin-left: 2.5%
}
.service-prices input{
  margin: 5px 10px
}

#map {
  width: 100%;
  height: 350px;
}
</style>
