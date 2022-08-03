<template>
    <div>
        <Title :name="$t('nav4')"/>
        <div class="container">   
            <h2 class="subtitle">{{$t('hw2')}}</h2>
            <table>
                <tr>
                    <td>{{$t('hw3')}}</td>
                    <td>10:00 - 18:00</td>
                </tr>
                <tr>
                    <td>{{$t('hw4')}}</td>
                    <td>10:00 - 18:00</td>
                </tr>
                <tr>
                    <td>{{$t('hw5')}}</td>
                    <td>10:00 – 17:00</td>
                </tr>
            </table>
                        <h2 class="subtitle" v-html="$t('OHFV')">Время работы выставки для поститителей </h2>
            <table>
                <tr>
                    <td>{{$t('OHFV1')}}</td>
                    <td>10:00 - 18:00</td>
                    <td>{{$t('OHFV4')}}</td>
                </tr>
                <tr>
                    <td>{{$t('OHFV2')}}</td>
                    <td>10:00 - 18:00</td>
                    <td>{{$t('OHFV4')}}</td>
                </tr>
                <tr>
                    <td>{{$t('OHFV3')}}</td>
                    <td>10:00 – 17:00</td>
                    <td>{{$t('OHFV4')}}</td>
                </tr>
            </table>
    
            <h2 class="subtitle">{{$t('hw6')}}</h2>
            <p>
                <b> 
                <i18n path="hw7">
                    <br place="break">
                </i18n>    
                </b> <br>
            </p>
            <p v-html="$t('hw8')"></p>
            <router-link  to="/visitors/online">{{$t('hw9')}}</router-link>
            <br><br>
            <p>{{$t('hw10')}}</p>
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
    margin-bottom: 50px;
}
tr:nth-child(even){background-color: #f2f2f2;}

table{
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 40px;
}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #afbccc;
  color: white;
}
</style>