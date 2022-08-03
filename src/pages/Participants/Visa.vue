<template>
    <div>
        <Title :name="$t('nav3')"/>
        <div class="container">   
            <h2 class="subtitle" v-html="$t('nav3_5')">Визовая поддержка</h2>
            <p class="desc">{{$t('visa1')}}</p>
            <p v-html="$t('visa2')"></p>
            <p v-html="$t('visa3')"></p>
            <p v-html="$t('visa4')"></p>
            <p>
                <span style="color:red"> <b>  {{$t('visa5')}}   </b> </span>
                <br> 
            </p>
            <p v-html="$t('visa6')"> </p>
             <h4><b>{{$t('visa7')}} </b></h4>
        </div>
        <Footer/>
     </div>
</template>   



<script>

import Title from '../../components/Title.vue'
import Footer from '../../components/Footer.vue'

export default {
    name: "Participants",
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
    font-weight: bold;
}
</style>