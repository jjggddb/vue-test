import{d as w,r,o as c,c as b,w as i,a as u,b as p,e as m,t as V,f as k,p as B,g as I,h as v,i as x,j as h}from"./index.5ae7e691.js";var S=(e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o};const C=e=>(B("data-v-30548eac"),e=e(),I(),e),D={class:"home-index"},N=x("-"),j={class:"home-index__conut"},F=x("+"),E=C(()=>m("div",null,null,-1)),O=w({__name:"index",setup(e){const t=r(0),o=(s="-")=>{s==="-"&&t.value>0?t.value--:s==="+"&&t.value++},n=r(""),a=()=>{console.log(n.value)};return(s,d)=>{const l=v("el-button"),f=v("el-input"),_=h("debounce"),g=h("throttle");return c(),b("div",D,[i((c(),u(l,{type:"primary"},{default:p(()=>[N]),_:1})),[[_,o,"500"]]),m("div",j,V(t.value),1),i((c(),u(l,{type:"primary"},{default:p(()=>[F]),_:1})),[[g,()=>o("+"),"500"]]),i(k(f,{style:{width:"200px"},modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=y=>n.value=y)},null,8,["modelValue"]),[[_,a,"500",{input:!0}]]),E])}}});var U=S(O,[["__scopeId","data-v-30548eac"]]);export{U as default};