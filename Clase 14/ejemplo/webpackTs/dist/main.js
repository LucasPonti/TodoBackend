(()=>{"use strict";var e={130:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.firstname=e,this.lastname=t}getFullName(){return`${this.firstname} ${this.lastname}`}}},607:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=s(r(860)),a=r(721),n=new(s(r(130)).default)("Lucas","Ponti"),i=(0,o.default)();i.get("/",((e,t)=>{t.send({time:(0,a.getTime)(),name:n.getFullName()})})),i.listen(8080,(()=>{console.log("conectado al puerto 8080")}))},721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=void 0,t.getTime=()=>({fyh:(new Date).toLocaleString(),timestamp:Date.now()})},860:e=>{e.exports=require("express")}},t={};!function r(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,r),a.exports}(607)})();