<template>
    <div>
        <Title :name="$t('nav6')"/>
        <div class="container">   
            <h2 class="subtitle">{{$t('nav6')}} </h2>
            <a target="_blank" href="https://satu.kz/c720740-too-kaziron-trejd.html" v-html="$t('contacts.1')">ТОО" Kaziron Трейд"</a>
            <br> <br>
            <p>Тел.: <a href="tel:87715068532">+7 (771) 506-85-32</a> <br>
            <a href="tel:87717188097" style="margin-left: 40px;">+7 (771) 718-80-97</a> <br>
            <a href="tel:87717188200" style="margin-left: 40px;">+7 (771) 718-82-00</a>
            </p>
            <p>Тел.: <a target="_blank" href="https://wa.me/77077725015">+7 (707) 772-50-15 (WhatsApp)</a></p>
            <p>Email.: <a href="mailto:Info@kaztoolexpo.kz">Info@kaztoolexpo.kz</a>, <a href="mailto:b2b@kaztoolexpo.kz"> b2b@kaztoolexpo.kz </a> ,<a href="mailto:kazirontrade@gmail.com">kazirontrade@gmail.com</a> </p>
            <p>Web.: <a target="_blank" href="www.kaztoolexpo.kz">www.kaztoolexpo.kz</a> </p>
            <a href="#" v-html="$t('contacts.2')">Индекс 050010, ул. Казыбек би 22, БЦ. Жан-Ер, офис 204, г. Алматы, Казахстан.</a>
        </div>
        <Footer/>
     </div>
</template>   



<script>

import Title from '../components/Title.vue'
import Footer from '../components/Footer.vue'
export default {
    name: "Контакты",
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
      margin-bottom: 40px;
      margin-top: 60px;
      text-transform: capitalize;
    }
    .subtitle:first-letter{
        text-transform: capitalize;
    }

    .desc{
        font-size: 18px;
        margin-bottom: 450px;
    }
    .container a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
</style>