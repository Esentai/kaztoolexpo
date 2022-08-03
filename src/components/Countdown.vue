<template>
  <div class="countdown">
    <div v-if="days" class="countdown__block">
      <div class="countdown__digit">{{ days | twoDigits }}</div>
      <div class="countdown__text">{{$t("timer1")}}</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ hours | twoDigits }}</div>
      <div class="countdown__text">{{$t("timer2")}}</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ minutes | twoDigits }}</div>
      <div class="countdown__text">{{$t("timer3")}}</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ seconds | twoDigits }}</div>
      <div class="countdown__text">{{$t("timer4")}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: null
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: this.date,
      finish: false
    }
  },
  mounted () {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
  computed: {
    secondCount () {
      return this.calculatedDate - this.now
    },
    calculatedDate () {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds () {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },
    minutes () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  },
  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  }
}
</script>

<style  scoped>
.countdown{
	display: flex;
	justify-content: center;
    color: #3d3a50;
    background-color: #FAFBFE;
    padding: 10px 15px;
    width: 420px;
    float: right;
    border-radius: 10px;
}
 .countdown__block{
	text-align: center;
	padding: 0px 15px;
	position: relative;
}
 .countdown__block:first-child{
	padding-left: 0;
}
 .countdown__block:first-child .countdown__digit:before{
	display: none;
}
 .countdown__block:last-child{
	padding-right: 0;
}
 .countdown__text{
	text-transform: uppercase;
	margin-bottom: 5px;
}
 .countdown__digit{
	font-size: 300%;
	font-weight: bold;
	line-height: 1;
	margin-bottom: 5px;
}
 .countdown__digit:before{
	content: ":";
	position: absolute;
	left: -5px;
}
@media (max-width: 768px){
  .countdown{
    transform: scale(0.8);
    margin: auto;
  }
}
</style>
