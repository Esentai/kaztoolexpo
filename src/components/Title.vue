<template>
    <div class="slider-area2">
        <navigation/>
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap text-center">
                            <h2 class="title">{{name}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  components: { Navigation },
    name: "Title",
    props: {
    name: String
  }
}
</script>

<style scoped>
.slider-area2 {
background: #FAFBFE;

    background-repeat: no-repeat;
    background-size: cover;
    color: #000;
}
.slider-height2 {
    height: 200px;
    background-size: cover;
    border-bottom: 1px solid #000;
}
.title{
    font-size: 34px;
    margin-top: -40px;
    font-weight: 600;
}
@media only screen and (min-width: 768px) and (max-width: 991px){
    .slider-height2 {
        height: 250px;
    }
}
  @media (max-width: 768px){
    .title{
        margin-top: -30px;
    }
  }

</style>