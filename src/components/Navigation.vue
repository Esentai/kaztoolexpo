<template>
    <div>
        <nav id="desktop">
            <div class="container navi" >
                <img src="../assets/Logo.jpeg" width="120" class="logo" alt="">

                <ul class="navigationUl">
                    <li class="navigationItem" v-if="this.lang1 != 'Kaz'"><router-link class="navigationItemLink" to="/">{{$t('nav1')}}</router-link ></li>
                   
                    <li class="navigationItem">  
                        <ul class="nav">
                            <li class="dropdown">
                                <router-link to="/about" class="dropdown-toggle navigationItemLink" data-toggle="dropdown">{{$t('nav2')}}</router-link>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/about">{{$t('nav2_1')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/about/section">{{$t('nav2_2')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/about/workinghours">{{$t('nav2_3')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/about/directions">{{$t('nav2_4')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/about/request">{{$t('nav2_5')}}</router-link></li>  
                                    <li><router-link class="dropdown-item" to="/about/forms">{{$t('nav2_6')}}</router-link></li>  
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="navigationItem">
                        <ul class="nav">
                            <li class="dropdown">
                                <router-link to="/participants" class="dropdown-toggle navigationItemLink" data-toggle="dropdown">{{$t('nav3')}}</router-link>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/participants">{{$t('nav3_1')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/participants/hotels">{{$t('nav3_2')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/participants/opening">{{$t('nav3_3')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/participants/stand">{{$t('nav3_4')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/participants/visa"> {{$t('nav3_5')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/participants/request">{{$t('nav3_6')}}</router-link></li>  
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="navigationItem">
                        <ul class="nav">
                            <li class="dropdown">
                                <router-link to="#" class="dropdown-toggle navigationItemLink" data-toggle="dropdown">{{$t('nav4')}}</router-link>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/visitors/online"> {{$t('nav4_1')}} </router-link></li>
                                    <li><router-link class="dropdown-item" to="/visitors/list">{{$t('nav4_2')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/visitors/b2b"> {{$t('nav4_3')}} </router-link></li>
                                    <li><router-link class="dropdown-item" to="/visitors/business">{{$t('nav4_4')}}</router-link></li>
                                    <li><router-link class="dropdown-item" to="/visitors/openhoursforvisitors">{{$t('nav4_5')}}</router-link></li> 
                                    <li><router-link class="dropdown-item" to="/visitors/rules">{{$t('nav4_6')}}</router-link></li>     
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="navigationItem">
                        <ul class="nav">
                            <li class="dropdown">
                                <router-link to="/press" class="dropdown-toggle navigationItemLink" data-toggle="dropdown">{{$t('nav5')}} </router-link>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/press"> {{$t('nav5_1')}} </router-link></li>
                                    <li><router-link class="dropdown-item" to=""> {{$t('nav5_2')}} </router-link></li>
                                    <li><router-link class="dropdown-item" to="">{{$t('nav5_3')}}</router-link></li>  
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="navigationItem"><router-link class="navigationItemLink" to="/contacts">{{$t('nav6')}}</router-link></li>
                    <li class="navigationItem">
                        <ul class="nav">
                            <li class="dropdown">
                                <router-link to="#"   class="dropdown-toggle navigationItemLink lang lang-drop" data-toggle="dropdown"> <img src="../assets/internet_b.png"  width="20" alt=""> <span v-on:click="setLocale(lang1)"> {{lang1}} </span> </router-link>
                                <ul class="dropdown-menu">
                                    <li  v-on:click="setLocale(lang2)"><router-link class="dropdown-item lang-drop" to="#"> <span> {{lang2}} </span> </router-link></li>
                                    <li v-on:click="setLocale(lang3)"><router-link  class="dropdown-item lang-drop" to="#"> <span > {{lang3}} </span> </router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>

        <b-navbar id="mobile" toggleable type="light" variant="light">
            <div class="container">
                <b-navbar-brand to=""><router-link class="nav-link submenuTitile"  to="/">  KAZTOOLEXPO</router-link > </b-navbar-brand>
                <div class="mobile_lang">
                    <div>
                        <ul class="mobile_lang_drop">
                            <li class="dropdown">
                                <router-link to="#" style="color:#000"  class="dropdown-toggle navigationItemLink lang mobile_lang_drop_link" data-toggle="dropdown"> <img src="../assets/internet_b.png"  width="20" alt=""> <span v-on:click="setLocale(lang1)"> {{lang1}} </span> </router-link>
                                <ul class="dropdown-menu">
                                    <li  v-on:click="setLocale(lang2)"><router-link class="dropdown-item lang-drop" to="#"> <span> {{lang2}} </span> </router-link></li>
                                    <li v-on:click="setLocale(lang3)"><router-link  class="dropdown-item lang-drop" to="#"> <span > {{lang3}} </span> </router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <b-navbar-toggle target="navbar-toggle-collapse">    
                        <template #default="{ expanded }">
                            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                            <b-icon v-else icon="chevron-bar-down"></b-icon>
                        </template>
                        </b-navbar-toggle>
                    </div>
                </div>
                <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <li><router-link class="nav-link " to="/">{{$t('nav1')}}</router-link ></li>
                    <li>
                        <router-link class="nav-link " to="/about">{{$t('nav2')}}</router-link>
                        <ul class="submenu">
                            <li><router-link class="nav-link " to="/about">{{$t('nav2_1')}}</router-link></li>
                            <li><router-link class="nav-link " to="/about/section">{{$t('nav2_2')}}</router-link></li>
                            <li><router-link class="nav-link " to="/about/workinghours">{{$t('nav2_3')}}</router-link></li>
                            <li><router-link class="nav-link " to="/about/directions">{{$t('nav2_4')}}</router-link></li>
                            <li><router-link class="nav-link " to="/about/request">{{$t('nav2_5')}}</router-link></li>
                            <li><router-link class="nav-link " to="/about/forms">{{$t('nav2_6')}}</router-link></li>
                            
                        </ul>
                    </li>
                    <li>
                        <router-link class="nav-link " to="/participants">{{$t('nav3')}}</router-link >
                        <ul class="submenu">
                            <li><router-link class="nav-link " to="/participants">{{$t('nav3_1')}}</router-link></li> 
                            <li><router-link class="nav-link " to="/participants/hotels">{{$t('nav3_2')}}</router-link></li>      
                            <li><router-link class="nav-link " to="/participants/opening">{{$t('nav3_3')}}</router-link></li>      
                            <li><router-link class="nav-link " to="/participants/stand">{{$t('nav3_4')}}</router-link></li>  
                            <li><router-link class="nav-link " to="/participants/visa">{{$t('nav3_5')}}</router-link></li>        
                            <li><router-link class="nav-link " to="/participants/request">{{$t('nav3_6')}}</router-link></li>            
                        </ul>
                    </li>
                    <li>
                        <router-link class="nav-link " to="/visitors">{{$t('nav4')}}</router-link>
                        <ul class="submenu">
                            <li><router-link class="nav-link " to="/visitors/online">{{$t('nav4_1')}}</router-link></li> 
                            <li><router-link class="nav-link " to="/visitors/list">{{$t('nav4_2')}}</router-link></li> 
                            <li><router-link class="nav-link " to="/visitors/b2b">{{$t('nav4_3')}} </router-link></li> 
                            <li><router-link class="nav-link " to="/visitors/business">{{$t('nav4_4')}}</router-link></li> 
                            <li><router-link class="nav-link " to="/visitors/openhoursforvisitors">{{$t('nav4_5')}}</router-link></li> 
                            <li><router-link class="nav-link " to="/visitors/rules">{{$t('nav4_6')}}</router-link></li> 
                        </ul>
                    </li>
                    <li><router-link class="nav-link " to="/press">{{$t('nav5')}}</router-link ></li>
                    <li><router-link class="nav-link " to="/contacts">{{$t('nav6')}}</router-link ></li>
                </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>

export default ({
    name: 'Navigatoin',
    data() {
      return {
          lang1: 'Ru' ,
          lang2: 'Eng',
          lang3: 'Kaz' ,
      }},
    mounted(){
      // this.$i18n.locale = localStorage.getItem('locale') != null ? localStorage.getItem('locale') : localStorage.setItem('locale', 'ru') 
        if(localStorage.getItem('locale') != null ){
            this.$i18n.locale = localStorage.getItem('locale');
        }else{
            localStorage.setItem('locale', 'ru')
        }
        if (localStorage.getItem('lang1') != null ){
            this.lang1 = localStorage.getItem('lang1')
        }else{
            localStorage.setItem('lang1', 'Ru') 
        }
        if (localStorage.getItem('lang2') != null ){
            this.lang2 = localStorage.getItem('lang2')
        }else{
            localStorage.setItem('lang2', 'Eng') 
        }
        if (localStorage.getItem('lang3') != null ){
            this.lang3 = localStorage.getItem('lang3')
        }else{
            localStorage.setItem('lang3', 'Kaz') 
        }
                 
    },

    methods: {
        setLocale(locale){ //en ru kz
            console.log(locale)
            console.log("Ok")
            if(locale == "Ru"){
                this.$i18n.locale = 'ru';
                localStorage.setItem('locale', 'ru');
                localStorage.setItem('lang1', 'Ru');
                localStorage.setItem('lang2', 'Eng');
                localStorage.setItem('lang3', 'Kaz');
                
                this.lang1 = "Ru";
                this.lang2 = "Eng";
                this.lang3 = "Kaz";
            }

            if(locale == "Eng"){
                this.$i18n.locale = 'en';
                localStorage.setItem('locale', 'en');

                localStorage.setItem('lang1', 'Eng');
                localStorage.setItem('lang2', 'Ru');
                localStorage.setItem('lang3', 'Kaz');

                this.lang1 = "Eng";
                this.lang2 = "Ru";
                this.lang3 = "Kaz";
            }

            if(locale == "Kaz"){
                this.$i18n.locale = 'kz';
                localStorage.setItem('locale', 'kz');

                localStorage.setItem('lang1', 'Kaz');
                localStorage.setItem('lang2', 'Ru');
                localStorage.setItem('lang3', 'Eng');

                this.lang1 = "Kaz";
                this.lang2 = "Ru";
                this.lang3 = "Eng";
            }
        },
        isMobile() {
            if(/router-linkndroid|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Operrouter-linkMini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    }
})
</script>

<style scoped>
    nav{
         background-color: #FAFBFE; 
         
    }
    .submenu{
        list-style-type: none;
    }
    .navigationUl{
        display: flex;
        justify-content: end;
        list-style-type: none;
  
    }   
    .navigationItemLink{
        color: #000;
        font-weight: 600;
        padding: 10px  27px 5px;
        display: block;
        font-size: 15px;
        text-decoration: none;
    }
    .navigationItemLink:hover{
        color: rgb(80, 80, 80);
    }
    #mobile{
        display: none;
    }
    .navi{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
    }
    .submenuTitile{
        font-weight: bold;
        color: #000;
    }
    .logo{
        margin-bottom: 10px;
    }
    .lang{
        text-transform: uppercase;
    }
    .nav-link{
        text-transform: lowercase;
    }
    .nav-link:first-letter{
        text-transform: capitalize;
    }
    .mobile_lang{
        display: flex;
        align-items: center;
        
    }
    .mobile_lang_drop{
        padding-top: 15px;
    }
    @media(max-width: 1200px){
        .logo{
            display: none;
        }
        .navigationItemLink{
            font-size: 14px;
            padding: 10px  20px 5px;
        }
        
    }
    @media(max-width: 1000px){
        #desktop{
            display: none;
        }
        #mobile{
            display: flex;
        }

    }
    .dropdown:hover .dropdown-menu {
        display: block;
        margin-top: 0;
    }


</style>
