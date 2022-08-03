<template>
        <footer>
            <p class="copyright" v-html="$t('footer')"> KAZTOOLEXPO © 2022</p>
            <p class="social">{{$t('footer2')}} <a target="_blank" href="https://www.instagram.com/kaztoolexpo/"><img src="../assets/insta.png" ></a></p>
      
        </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer{
    margin-top: 60px;
    height: 80px;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: #EDEDED;
}
.copyright{
    margin: 0;
    padding: 0;
}
.social{
    margin-top: 10px;
}
</style>