<template>
    <div>
        <Title :name="$t('nav2')"/>
        <div class="container">   
            <h2 class="title">{{$t('nav2_5')}}</h2>
            <h2 class="subtitle">{{$t('input1')}} </h2>
            <transition name="fade" mode="out-in">
                    <div v-if="sent">
                        <p>{{$t('input2')}} </p>
                        <br><br><br><br><br><br><br><br><br><br>
                    </div>
                    
            </transition>
            <b-form @submit="sendForm" v-if="!sent">
                <b-form-group
                id="input-group-1"
                :label="$t('input3')"
                label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    :placeholder="$t('input3')"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-2"
                :label="$t('input4')"
                label-for="input-2"
                >
                    <b-form-input
                    id="input-2"
                    v-model="form.surname"
                    type="text"
                    :placeholder="$t('input4')"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-3"
                label="Email:*"
                label-for="input-3"
                >
                    <b-form-input
                    id="input-3"
                    v-model="form.email"
                    type="email"
                    placeholder="Email*"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-3"
                :label="$t('input6')"
                label-for="input-3"
                >
                    <b-form-input
                    id="input-3"
                    v-model="form.company"
                    type="text"
                    :placeholder="$t('input6')"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-4"
                :label="$t('input7')"
                label-for="input-4"
                >
                    <b-form-input
                    id="input-4"
                    v-model="form.post"
                    type="text"
                    :placeholder="$t('input7')"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-5"
                :label="$t('input8')"
                label-for="input-5"
                >
                    <b-form-input
                    id="input-5"
                    v-model="form.address"
                    type="text"
                    :placeholder="$t('input8')"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-6"
                :label="$t('input9')"
                label-for="input-6"
                >
                    <b-form-input
                    id="input-6"
                    v-model="form.city"
                    type="text"
                    :placeholder="$t('input9')"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-7"
                :label="$t('input10')"
                label-for="input-7"
                >
                    <b-form-input
                    id="input-7"
                    v-model="form.country"
                    type="text"
                    :placeholder="$t('input10')"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-8"
                :label="$t('input11')"
                label-for="input-8"
                >
                    <b-form-input
                    id="input-8"
                    v-model="form.number"
                    type="text"
                    :placeholder="$t('input11')"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-9"
                :label="$t('input12')"
                label-for="input-9"
                >
                    <b-form-input
                    id="input-9"
                    v-model="form.phoneNumber"
                    type="text"
                    :placeholder="$t('input12')"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-10"
                :label="$t('input13')"
                label-for="input-10"
                >
                    <b-form-input
                    id="input-10"
                    v-model="form.fax"
                    type="text"
                    :placeholder="$t('input13')"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-11"
                :label="$t('input14')"
                label-for="input-11"
                >
                    <b-form-input
                    id="input-11"
                    v-model="form.site"
                    type="text"
                    :placeholder="$t('input14')"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-12"
                :label="$t('input15')"
                label-for="input-12"
                >
                    <b-form-input
                    id="input-12"
                    v-model="form.area"
                    type="text"
                    :placeholder="$t('input15')"
                    ></b-form-input>
                </b-form-group>

                <b-form-group :label="$t('input16')" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                    id="checkbox-group-2"
                    v-model="form.interes"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2"
                >
                    <b-form-checkbox size="lg" class="check" value="Участии на выставке со стендом">{{$t('input17')}}</b-form-checkbox>
                    <b-form-checkbox size="lg" value="Спонсорских возможностях">{{$t('input18')}}</b-form-checkbox>
                    <b-form-checkbox  size="lg" value="Рекламных возможностях">{{$t('input19')}}</b-form-checkbox>
                    <b-form-checkbox size="lg" value="Другом">{{$t('input20')}}</b-form-checkbox>
                </b-form-checkbox-group>
                </b-form-group>

                <b-form-group :label="$t('input21')" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                    id="checkbox-group-3"
                    v-model="form.interes2"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-3"
                >
                    <b-form-checkbox size="lg"  value="Оборудованной площади">{{$t('input22')}}</b-form-checkbox>
                    <b-form-checkbox size="lg" value="Чистой площади">{{$t('input23')}}</b-form-checkbox>
                    <b-form-checkbox  size="lg" value="Площади вне павильона">{{$t('input24')}}</b-form-checkbox>
                    <b-form-checkbox size="lg" value="Другом">{{$t('input25')}}</b-form-checkbox>
                </b-form-checkbox-group>
                </b-form-group>

                <b-form-group
                id="input-group-13"
                :label="$t('input26')"
                label-for="input-13"
                >
                    <b-form-textarea
                        id="textarea-no-resize"
                        :placeholder="$t('input26')"
                        rows="3"
                        v-model="form.find"
                        no-resize
                    ></b-form-textarea>
                </b-form-group>

                <b-form-group
                id="input-group-14"
                :label="$t('input27')"
                label-for="input-14"
                >
                    <b-form-textarea
                        id="textarea-no-resize"
                        :placeholder="$t('input27')"
                        v-model="form.comment"
                        rows="3"
                        no-resize
                    ></b-form-textarea>
                </b-form-group>
                <br>
                <b-button type="submit" variant="primary">{{$t('input28')}} </b-button>
            </b-form>
        </div>
        <Footer/>
     </div>
</template>   



<script>

import Title from '../../components/Title.vue'
import Footer from '../../components/Footer.vue'
import querystring from 'querystring'
import axios from 'axios'

export default {
    name: "Посетителям",
    components:{
        Title,
        Footer
    },
    data() {
      return {
        form: {
          name:'',
          surname:'',
          email: '',
          company:'',
          post:'',
          address:'',
          city:'',
          country:'',
          number:'',
          phoneNumber:'',
          fax:'',
          site:'',
          area:'',
          interes:[],
          interes2:[],
          find:'',
          comment:'',
        },
        sent: false,
        ContactForm: {
            name : '',
            email: '',
            subject: '',
            message: ''
        }
      }
    },
    methods: {
      sendForm(e) {
              this.ContactForm.name = this.form.name
              this.ContactForm.email = this.form.email
              this.ContactForm.subject = `Запрос Информации (${this.form.email})`
              this.ContactForm.message = `
                Имя: ${this.form.name} <br>
                Фамилия: ${this.form.surname} <br>
                Ваша компания (организация): ${this.form.company} <br>
                Должность: ${this.form.post} <br>
                Адрес: ${this.form.address} <br>
                Город: ${this.form.city} <br>
                Страна: ${this.form.country} <br>
                Телефон: ${this.form.number} <br>
                Моб: ${this.form.phoneNumber} <br>
                Факс: ${this.form.fax} <br>
                Сайт: ${this.form.site} <br>
                Предполагаемая площадь стенда в кв.м.: ${this.form.area} <br>
                Я заинтересован в ${this.form.interes} <br>
                Я заинтересован в резервации следующего вида площади ${this.form.interes2} <br>
                Как Вы узнали о выставке? ${this.form.find} <br>
                Ваши комментарии/вопросы: ${this.form.comment} <br>
              `
              e.preventDefault()
              console.log(this.ContactForm)
              axios.post('https://kaztoolexpo.kz/server.php',
              querystring.stringify(this.ContactForm)).then(res => {
                this.sent = true
                this.inputDef();
                console.log(res);
              })
        },
        inputDef(){
            this.form = {
            name:'',
            surname:'',
            email: '',
            company:'',
            post:'',
            address:'',
            city:'',
            country:'',
            number:'',
            phoneNumber:'',
            fax:'',
            site:'',
            area:'',
            interes:[],
            interes2:[],
            find:'',
            comment:'',
            }
            this.ContactForm = {
                name : '',
                email: '',
                subject: '',
                message: ''
            }
        }
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
.form-group{
    margin-top: 20px;
}
form{
    max-width: 650px;
}
.custom-control-input{
    margin: 10px 10px 10px 0;
    width: 30px;
}
input[type=checkbox] {
    margin-right: 10px !important;
}

</style>