import VueRouter from "vue-router";

import HomePage from '../pages/HomePage'

import About from '../pages/About'
import Section from '../pages/About/Section'
import Directions from '../pages/About/Directions'
import WorkingHours from '../pages/About/WorkingHours'
import Request from '../pages/About/Request'
import Forms from '../pages/About/Forms'

import Participants from '../pages/Participants'
import Hotels from '../pages/Participants/Hotels'
import OpeningHours from '../pages/Participants/OpeningHours'
import Stand from '../pages/Participants/Stand'
import Visa from '../pages/Participants/Visa'
import Request_p from '../pages/Participants/Request'


import Visitors from '../pages/Visitor'
import List from '../pages/Visitor/List'
import B2B from '../pages/Visitor/B2B'
import Business from '../pages/Visitor/Business'
import OpenHoursForVisitors from '../pages/Visitor/OpenHoursForVisitors'
import Rules from '../pages/Visitor/Rules'
import Online from '../pages/Visitor/Online'

import Press from '../pages/Press/Press'

import Contacts from '../pages/Contacts'

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/about/forms',
            component: Forms
        },
        {
            path: '/about/section',
            component: Section
        },
        {
            path: '/about/directions',
            component: Directions
        },
        {
            path: '/about/workinghours',
            component: WorkingHours
        },
        {
            path: '/about/request',
            component: Request
        },
        {
            path: '/participants',
            component: Participants
        },
        {
            path: '/participants/hotels',
            component: Hotels
        },
        {
            path: '/participants/opening',
            component: OpeningHours
        },
        {
            path: '/participants/stand',
            component: Stand  
        },
        {
            path: '/participants/visa',
            component: Visa  
        },
        {
            path: '/participants/request',
            component: Request_p  
        },
        {
            path: '/visitors',
            component: Visitors  
        },
        {
            path: '/visitors/list',
            component: List  
        },
        {
            path: '/visitors/b2b',
            component: B2B  
        },
        {
            path: '/visitors/business',
            component: Business  
        },
        {
            path: '/visitors/openhoursforvisitors',
            component: OpenHoursForVisitors  
        },
        {
            path: '/visitors/rules',
            component: Rules  
        },
        {
            path: '/visitors/online',
            component: Online  
        },
        {
            path: '/press',
            component: Press  
        },
        {
            path: '/contacts',
            component: Contacts,
        },
        
        
    ]
})  