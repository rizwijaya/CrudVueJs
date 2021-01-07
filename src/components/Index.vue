<template>
  <div class="hello container">
    <div class="card" v-for="sm in smoothies" :key="sm.id">
      <div class="card-content">
        <i class="material-icons deleteicondata" @click="deletesm(sm.id)">delete</i>
        <h2 class="indigo-text">{{ sm.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in sm.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      smoothies: [
        {title: 'Murphytech', slug: 'kursus-web', ingredients:['kursusseo', 'googleadword', 'facebookads'], id: '1'},
        {title: 'Technopreneur', slug: 'online-shop', ingredients:['sepatu', 'baju', 'celana'], id: '2'}
      ]
    }
  },
  methods: {
    deletesm(id){
      this.smoothies = this.smoothies.filter(sm => {
        return sm.id != id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .hello {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 30px;
   margin-top: 60px;
 }
 .hello h2{
   font-size: 1.8em;
   text-align: center;
   margin-top: 0;
 }
 .hello .ingredients{
   margin: 30px auto;
 }
 .hello .ingredients li{
   display: inline-block;
 }
 .deleteicondata{
   position: absolute;
   top: 4px;
   right: 4px;
   cursor: pointer;
   color: #aaa;
   font-size: 1.4em;
 }
</style>
