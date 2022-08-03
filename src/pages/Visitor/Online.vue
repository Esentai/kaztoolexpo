<template>
    <div>
        <Title :name="$t('nav4')"/>
        <div class="container">   
            <h2 class="title" v-html="$t('nav4_1')">Онлайн регистрация</h2>
            <h2 class="subtitle" v-html="$t('input1')">Пожалуйста, заполните форму ниже и мы свяжемся с Вами </h2>

            <transition name="fade" mode="out-in">
                    <div v-if="sent">
                        <p v-html="$t('input2')">Спасибо, что связались с нами, мы свяжемся с вами в ближайшее время...</p>
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
                id="input-group-13"
                :label="$t('input29')"
                label-for="input-13"
                >
                    <b-form-textarea
                        id="textarea-no-resize"
                        :placeholder="$t('input29')"
                        rows="3"
                        v-model="form.find"
                        no-resize
                    ></b-form-textarea>
                </b-form-group>

                <b-form-group :label="$t('input30')">
                <b-form-checkbox-group id="checkbox-group-2" v-model="form.selected">
                    <b-form-checkbox value="ok" > {{$t('input31')}}</b-form-checkbox>
                </b-form-checkbox-group>

                </b-form-group>
                <b-alert :show="alert">{{$t('input32')}}</b-alert>
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
          number:'',
          site:'',
          find:'',
          selected: [],
        },
        sent: false,
        alert: false,
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
            if(this.form.selected[0] === 'ok'){
              this.ContactForm.name = this.form.name
              this.ContactForm.email = this.form.email
              this.ContactForm.subject = `Онлайн регистрация (${this.form.email})`
              this.ContactForm.message = `
                Имя: ${this.form.name} <br>
                Фамилия: ${this.form.surname} <br>
                Ваша компания (организация): ${this.form.company} <br>
                Должность: ${this.form.post} <br>
                Телефон: ${this.form.number} <br>
                Сайт: ${this.form.site} <br>
                Откуда узнали о выставке* ${this.form.find} <br>
              `
              e.preventDefault()
              console.log(this.ContactForm)
              axios.post('https://kaztoolexpo.kz/server.php',
              querystring.stringify(this.ContactForm)).then(res => {
                this.sent = true
                this.inputDef();
                console.log(res);
              })
            }else{
                this.alert = true
            }
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