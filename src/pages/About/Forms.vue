<template>
    <div>
        <Title :name="$t('nav2')"/>
        <div class="container">   
            <h2 class="title">{{$t('nav2_6')}}</h2>
            <p style="font-size: 20px"><b>{{$t('forms1')}}</b></p>
            <div class="row ">
                <div class="col-md-6 standText">
                    <p>{{$t('forms2')}}</p>
                </div>
                <div class="col-md-6 standImg">
                    <img src="../../assets/stand5.jpg" width="400" alt="">
                </div>
            </div>
            <br>
            <br>
            <p style="font-size: 20px"><b>{{$t('forms3')}}</b></p>
            <div class="row">
                <div class="col-md-7 standText">
                    <p>{{$t('forms4')}}
                    </p>
                </div>
                <div class="col-md-5 standImg">
                    <img src="../../assets/stand6.jpg" width="350"  alt="">
                </div>
            </div>
            <br>
            <br>
            <br>
            <p style="font-size: 20px"><b>{{$t('forms5')}}</b></p>
            <p class="standText">{{$t('forms6')}}</p>
            <br>
            <br>
            <p style="font-size: 20px"><b>{{$t('forms7')}}</b></p> 
            <p class="standText" v-html="$t('forms8')">
</p>
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