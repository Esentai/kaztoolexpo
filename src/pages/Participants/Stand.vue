<template>
    <div>
        <Title :name="$t('nav3')"/>
        <div class="container">   
            <h2 class="subtitle" v-html="$t('stand1')">Застройка стенда</h2>
            <div class="row ">
                <div class="col-md-5 standText">
                    <p v-html="$t('stand2')"></p>
                </div>
                <div class="col-md-7 standImg">
                    <img src="../../assets/stand.jpg" width="400" alt="">
                </div>
            </div>
            
            <h2 class="subtitle" v-html="$t('stand3')">Что такое стандартный стенд?</h2>
            <p class="standText" v-html="$t('stand4')"></p>

            <h2 class="subtitle" v-html="$t('stand5')">Что такое необорудованная площадь?</h2>
            <p class="standText" v-html="$t('stand6')"></p>
            <br>
            <div class="row">
                <div class="col-md-5 standText">
                    <p v-html="$t('stand7')"></p>
                </div>
                <div class="col-md-7 standImg">
                    <img src="../../assets/stand2.jpg" width="350"  alt="">
                </div>
            </div>
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
    margin-bottom: 450px;
}
.standImg{
    text-align: center;
    
}
.standText{
    font-size: 18px;
}
@media (max-width: 768px){
        .subtitle{
            font-size: 22px;
        }
        .standText{
                font-size: 16px;
            }

}

</style>