<template>
    <div>
        <Title :name="$t('nav2')" />
        <div class="container">
            <br>
            <br>
            <h3  class="subtitle" v-html="$t('directions1')"></h3>
            <br>
            <div class="row">
                <div class="col-md-5">
                    <div class="info">
                        <p v-html="$t('directions2')"></p>
                    </div>
                </div>
                <div class="col-md-7">
                      <yandex-map 
                        :coords="coords"
                        :zoom="17" 
                    >
                        <ymap-marker 
                        :coords="coords" 
                        marker-id="123" 
                        hint-content="Form" 
                        />
                    </yandex-map>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>

import Title from '../../components/Title.vue'
import Footer from '../../components/Footer.vue'

import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
    name: "Section",
     data: () => {
       return ({
         coords: [
            43.233773, 
            76.935420
         ],
         
       })
     },
    components:{
        Title,
        Footer,
        yandexMap, 
        ymapMarker
    },
}
</script>

<style scoped>
    .subtitle{
      font-weight: bold;
      display: flex;
      flex-direction: row;
      font-size: 26px;
      margin-bottom: 25px;
      margin-top: 20px;
   
    }


.ymap-container {
  height: 400px;

}
.info{
    padding: 0 40px;
}
</style>