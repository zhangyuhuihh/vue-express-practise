import Vue from "vue";
import App from "./app";
import './css/common2' //想要webpack中的root。css起作用，这里需要引入才行
new Vue({
    el:'#app', 
    render:h=> h(App)
})