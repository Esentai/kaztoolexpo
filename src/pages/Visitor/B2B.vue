<template>
    <div>
        <Title :name="$t('nav4')"/>
        <div class="container">   
            <h2 class="subtitle" v-html="$t('b2b1')">Байерская программа для поситителей выставки</h2>
            <h3 v-html="$t('b2b2')"></h3>
            <br>
            <p class="desc" v-html="$t('b2b4')"> <b> B2B ПРОГРАММА </b> – бесплатный сервис для посетителей, облегчающий поиск нужных поставщиков и продукции на выставке. Она дает возможность посетителям и экспонентам заранее назначить друг другу встречи, которые будут проводиться на протяжении 3 дней работы выставки. </p>
            <br>
            <h2 class="subtitle" v-html="$t('b2b5')">Выгоды участия в байерской программе: </h2>
            <ol>
                <li v-html="$t('b2b6')">Доступ к списку участников выставки после прохождения регистрации.</li>
                <li v-html="$t('b2b7')">Возможность заранее составить удобное расписание деловых встреч с поставщиками с помощью on-line системы MatchMakingBayer2022.</li>
                <li v-html="$t('b2b8')">Прибыть на выставку в любой день ее работы <br>
                - подойти к стойке регистрации «Регистрация Байеров» <br>
                - получить пропуск-бейдж на выставку «Байер».
                </li>
                <li v-html="$t('b2b9')">Пакет Байера, который включает: Путеводитель и Официальный каталог выставки.</li>
                <li v-html="$t('b2b10')">Услуги Байерского кафе для проведения переговоров с экспонентами выставки, личной работы и отдыха.</li>
            </ol>
            <br>
            <h2 class="subtitle" v-html="$t('b2b11')">Участникам "B2B Программа" программы могут стать: </h2>
            <ul>
                <li v-html="$t('b2b12')">Руководители, специалисты по закупу;</li>
                <li v-html="$t('b2b13')">	Представители оптовых компаний;</li>
                <li v-html="$t('b2b14')">	Розничные сетей и Сетей супермаркетов;</li>
                <li v-html="$t('b2b15')">	Гос. структур и организаций;</li>
                <li v-html="$t('b2b16')">	Дизайнеры, архитекторы, и др. профессионалы отрасли;</li>
                <li v-html="$t('b2b17')">	Дистрибьюторы и Импортеры </li>
                <li v-html="$t('b2b18')">	Частные предприниматели, ведущие оптовую торговлю в определенном регионе.</li>
            </ul>
            <br><br>
            <p class="desc" v-html="$t('b2b19')">Для уточнения всех интересующих вопросов обращайтесь к руководителю B2B программы: 
Жайык М. <br>
ТЕЛ.:+ 7 771 506 85 32 (WhatsApp) <br>
E-MAIL: info@kaztoolexpo.kz <br>
www.kaztoolexpo.kz
</p>
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
}
h3{
    text-align: center;
    font-size: 22px;
    font-weight: bold;
}
li{
    font-size: 18px; 
}

@media (max-width: 768px){
        .subtitle{
            font-size: 22px;
        }
}
</style>