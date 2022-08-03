<template>
    <header>

        <Navigation/>
        <div class="container headerText">
            <div class="animation">
                <h3 class="mainTitle"> <b>{{$t("header1")}} </b></h3>
                <p class="desc"> {{$t("header2")}} <b> KAZTOOLEXPO 2022 </b></p>
                <p class="addressTitle"><b> {{$t("header3")}}</b></p>
                <p class="address">
                    <i18n path="header4">
                        <br place="break">
                    </i18n>
                </p>
            </div>
            <Countdown :date="end" @onFinish="finish()"></Countdown>
        </div>
        <video playsinline autoplay muted loop poster="../assets/kazautoexpo2022.png">
            <source src="../assets/backgroundVideo2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </header>
</template>

<script>

import Navigation from './Navigation.vue'
import Countdown from "./Countdown";

export default ({
    components:{
        Navigation,
        Countdown
    },
    data() {
        return {
        end: new Date("2022-10-10T00:00:00")
        };
    },
    methods:{
        setLocale(locale){
            this.$i18n.locale = locale;
            localStorage.setItem('locale', locale)
        },
        finish() {
          console.log("finish");
        }
    }
})
</script>

<style scoped>
    header{
        min-height: 500px;
        /* background: url('../assets/kazautoexpo2022.png') no-repeat;  */
        position: relative;
        background-size: cover;
        background-position: center center;
        padding-bottom: 120px;
        color: #f7f7f7;
        overflow: hidden;
    }
    video {
        position: absolute;
        width: auto;
        top: 0;
        left: 0;
        z-index: -1;
        }
    .headerText{
        margin-top: 120px;
    
    }
    .mainTitle{
        font-size: 38px;
    }
    .desc{
        max-width: 700px;
        font-size: 20px;
        margin-top: 25px;
    }
    .addressTitle{
        margin-top: 25px;
        font-size: 20px;
        margin-bottom: 0;
    }
    .address{
        margin-top: 10px;
        font-size: 20px;
        margin-bottom: 30px;
    }

    .animation{
        animation: left_to_right 1s ease;
    }

    @keyframes right_to_left {
    from {
        margin-left: 100%;
    }
    to {
        margin-left: 0;
    }
    }

    @keyframes left_to_right {
    from {
        margin-left: -50%;
    }
    to {
        margin-left: 0;
    }
    }

</style>
