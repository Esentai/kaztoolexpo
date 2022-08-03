<template>
    <div>
        <Title :name="$t('nav3')"/>
        <div class="container">   
            <h2 class="title">{{$t('participants1')}}</h2>
            <p class="desc" v-html="$t('participants2')"></p>
        </div>
        <Footer/>
     </div>
</template>   



<script>

import Title from '../components/Title.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "Participants",
    components:{
        Title,
        Footer
    },
    mounted () {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
.title{
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    margin-top: 60px;
    margin-bottom: 40px;
}
    .subtitle{
      font-weight: bold;
      display: flex;
      flex-direction: row;
      font-size: 26px;
      margin-bottom: 25px;
      margin-top: 20px;
   
    }

.desc{
    font-size: 18px;
    margin-bottom: 450px;
}
</style>