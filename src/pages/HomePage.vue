<template>
  <div>
    <Header />
 
    <div class="container">
      <div class="row info">
        <div class="col-md-4">
          <div class="text">
          <p> <b style="color:#07a0eb"> KAZTOOLEXPO </b> {{$t('homepage1')}} </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text">
          <p>  
            <b style="color:#07a0eb"> KAZTOOLEXPO </b>  {{$t('homepage2')}}
          </p>
          </div>
        </div>
        <div class="col-md-4"> 
          <div class="text">
          <p>
               <b style="color:#07a0eb"> 
                 <i18n path="homepage3_1">
                   <br place="break">
                 </i18n>
                </b> 
                <br>
                {{$t('homepage3_2')}}
          </p>
          </div>
        </div>
      </div>
     <!--  <div class="items">
          <router-link  to="/about"> 
            <div class="item">
              {{$t('nav2')}}
            </div> 
          </router-link >
          <router-link  to="/participants"> 
            <div class="item">
              {{$t('nav3')}}
            </div> 
          </router-link >
          <router-link  to="/visitors"> 
            <div class="item">
              {{$t('nav4')}}
            </div> 
          </router-link >
      </div>
      <div class="items">
          <router-link  to="/press"> 
            <div class="item">
              {{$t('nav5')}}
            </div> 
          </router-link >
          <router-link to="/contacts"> 
            <div class="item">
              {{$t('nav6')}}
            </div> 
          </router-link >
      </div>
    -->
    <!-- <vueper-slides
      >
        <vueper-slide     
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content" 
        :image="slide.image"
        />
      </vueper-slides> -->
    </div> 

    <!-- <div>
      <a href="#" @click="setLocale('en')"><flag iso='us'> </flag></a>
      <a href="#" @click="setLocale('ru')"><flag iso='ru'> </flag></a>
      <a href="#" @click="setLocale('kz')"><flag iso='kz'> </flag></a>
    </div>
    <hello-world :msg="$t('wellcomeMsg')"></hello-world> -->
      <Footer />
  </div>

</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

//import { VueperSlides, VueperSlide } from 'vueperslides'
//import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'HomePage',
  components:{
    Header,
    Footer,
  //  VueperSlides, 
  //  VueperSlide ,
  },
  data: () => ({
    slides: [
      {
        title: 'Aurora Borealis',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
      },
      {
        title: 'Aurora Borealis',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
      }
    ]
  }),
  mounted(){
   this.$i18n.locale = localStorage.getItem('locale') != null ? localStorage.getItem('locale') : localStorage.setItem('locale', 'ru') 
  },
  methods:{
    setLocale(locale){
      this.$i18n.locale = locale;
      localStorage.setItem('locale', locale)
    },
  }
}
</script>

<style>
div {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.items{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
.item{
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(170, 170, 170);
  margin: 20px;
  border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
background: rgb(96,108,136);
background: linear-gradient(62deg, rgba(96,108,136,1) 26%, rgba(63,76,107,1) 100%);

} 
.item:hover, .item:focus {
  color: rgba(255, 255,255, 0.8) !important;
  transform: scale(1.05);
   transition: all .2s ease-in-out;
}
.items a{
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
.items a:hover{
    color: rgba(255, 255,255, 0.8) !important;

}
.info{
  padding: 80px 0;
}
.text{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  min-height: 300px;
  padding: 25px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
}
.text p {
  line-height: 26px;
}
</style>
