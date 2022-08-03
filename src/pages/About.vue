<template>
    <div>
        <Title :name="$t('nav2')"/>
        <div class="container about">   
            <h3 class="title">{{$t('about1')}}</h3>
            <p v-html="$t('about2')"> </p>
            <br>
            <h2 class="subtitle">{{$t("about3")}}</h2>
            <p>
                <i18n path="about4">
                    <br place="break">
                </i18n>
            </p>
            <br>
            <h2 class="subtitle">{{$t("about5")}}</h2>
            <ul class="descList">
                <li>{{$t("about5_1")}} </li>
                <li>{{$t("about5_2")}} </li>
                <li>{{$t("about5_3")}} </li>
                <li>{{$t("about5_4")}} </li>
                <li>{{$t("about5_5")}} </li>
                <li>{{$t("about5_6")}} </li>
            </ul>
            <br>
            <h2 class="subtitle">{{$t("about6")}} </h2>
            <p>{{$t("about7")}} </p>
            <br>
            <h2 class="subtitle">{{$t("about8")}} </h2>
            <p>
                {{$t("about9")}} 
            </p>
            <br>
            <h2 class="subtitle">{{$t("about10")}} </h2>
            <ul class="descList">
                <li>{{$t("about10_2")}} </li>
                <li>{{$t("about10_3")}} </li>
            </ul>

        </div>
        <Footer/>
    </div>
</template>

<script>
import Title from '../components/Title.vue'
import Footer from '../components/Footer.vue'
export default {
    name: "Information",
    components: {
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
        font-size: 24px;
        text-align: center;
        margin: 60px 20px 40px 20px;
        font-weight: bold;
    }
    .subtitle{
      font-weight: bold;
      display: flex;
      flex-direction: row;
      font-size: 26px;
      margin-bottom: 25px;
      margin-top: 20px;
   
    }


    .about p{
        font-size: 18px;
        line-height: 28px;
    }
    .descList li {
        padding-left: 40px;
        font-size: 16px;
        line-height: 30px;
    }
    .descList {
        list-style: none;
        padding: 0;
    }
    .descList li {
        padding-left: 40px;
        font-size: 18px;
        line-height: 40px;
    }
</style>