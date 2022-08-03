<template>
    <div>
        <Title :name="$t('nav3')"/>
        <div class="container">   
            <h2 class="subtitle" v-html="$t('opening1')">Время работы выставки для участников</h2>
            <table>
                <tr>
                    <td v-html="$t('opening2')">ПОНЕДЕЛЬНИК, 10 Октября</td>
                    <td>09:00 - 18:00</td>
                    <td v-html="$t('opening5')">Выставка открыта для участников</td>
                </tr>
                <tr>
                    <td v-html="$t('opening3')">ВТОРНИК, 11 Октября</td>
                    <td>09:00 - 18:00</td>
                    <td v-html="$t('opening5')">Выставка открыта для участников</td>
                </tr>
                <tr>
                    <td v-html="$t('opening4')">СРЕДА , 12 Октября</td>
                    <td>09:00 – 17:00</td>
                    <td v-html="$t('opening5')">Выставка открыта для участников</td>
                </tr>
            </table>
            <h2 class="subtitle" v-html="$t('opening6')">Заезд и выезд </h2>
            <p v-html="$t('opening7')">Проезд всего транспорта к павильону №1 будет осуществляться через въезд со стороны ул. Сатпаева.</p>
            <table>
                <tr>
                    <th v-html="$t('opening8')">Дата</th>
                    <th v-html="$t('opening9')">Документ на въезд</th>
                </tr>
                <tr>
                    <td v-html="$t('opening10')">7,8 Октября  (монтаж) с 9.00 до 18.00 час. <br>
                        9 Октября заезд участников с 9.00 до 20.00 час. <br>
                        10,11,12 Октября (период выставки) с 10.00 до 18.00 час. <br>
                        12 Октября (демонтаж) с 17.00 до 20.00 час. <br>
                        13 Октября (демонтаж) с 09.00 до 18.00 час. <br>
                        <br><br>
                        Вход в павильон с 9:00 часов.
                    </td>
                    <td v-html="$t('opening11')">
                        Письмо (или его копия)
                    </td>
                </tr>
            </table>
            <p v-html="$t('opening12')">Проезд всего транспорта к павильону Event Space будет осуществляться через въезд со стороны ул. Сейфулина и Тимирязева .<br>
            По всем вопросам, связанным  с доставкой экспонатов на выставку  Вы можете обращаться по тел.: + 7 771 506 85 32</p> 
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
 tr:nth-child(even){background-color: #f2f2f2;}

table{
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
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