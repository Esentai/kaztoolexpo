<template>
    <div>
        <Title :name="$t('nav4')"/>
        <div class="container">   
            <h2 class="subtitle" v-html="$t('nav4_2')">Список участников</h2>
            <p class="desc" v-html="$t('list')">Список участников будет опубликован 20/08/2022</p>
        </div>
        <Footer/>
     </div>
</template>   



<script>

import Title from '../../components/Title.vue'
import Footer from '../../components/Footer.vue'

export default {
    name: "Посетителям",
    components:{
        Title,
        Footer
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
      margin-bottom: 40px;
      margin-top: 60px;
   
    }


.desc{
    font-size: 18px;
    margin-bottom: 450px;
}
</style>