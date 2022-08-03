<template>
    <div>
        <Title :name="$t('nav2')" />
        <div class="container">
            <br>
            <br>
            <h3  class="subtitle">{{$t('section1')}}</h3>
            <br>
            <ul class="descList">
                <li>{{$t('section2')}}</li>
                <li>{{$t('section3')}}</li>
                <li>{{$t('section4')}}</li>
                <li>{{$t('section5')}}</li>
                <li>{{$t('section6')}}</li>
                <li>{{$t('section7')}}</li>
                <li>{{$t('section8')}}</li>
                <li>{{$t('section9')}}</li>
                <li>{{$t('section10')}}</li>
                <li>{{$t('section11')}}</li>
                <li>{{$t('section12')}}</li>
                <li>{{$t('section13')}}</li>
                <li>{{$t('section14')}}</li>
                <li>{{$t('section15')}}</li>
                <li>{{$t('section16')}}</li>
                <li>{{$t('section17')}}</li>
                <li>{{$t('section18')}}</li>
                <li>{{$t('section19')}}</li>
                <li>{{$t('section20')}}</li>
                <li>{{$t('section21')}}</li>
                <li>{{$t('section22')}}</li>
                <li>{{$t('section23')}}</li>
                <li>{{$t('section24')}}</li>
                <li>{{$t('section25')}}</li>
                <li>{{$t('section26')}}</li>
                <li>{{$t('section27')}}</li>
                <li>{{$t('section28')}}</li>
                <li>{{$t('section29')}}</li>              
            </ul>
        </div>

        <Footer />
    </div>
</template>

<script>

import Title from '../../components/Title.vue'
import Footer from '../../components/Footer.vue'

export default {
    name: "Section",
    components:{
        Title,
        Footer
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

    .descList {
        padding: 0;
    }
    .descList li {
        padding-left: 5px;
        font-size: 18px;
        line-height: 38px;
        margin-left: 50px;
    }
</style>