import{p as e,e as t,_ as a,f as s,u as i,g as l,h as o,o as c,c as n,b as r,w as v,i as u,t as f,j as d,N as m,F as k,r as p,k as h,l as g,m as y}from"./app.98312c6e.js";e("data-v-370f18c0");const x={key:0,class:"home-hero"},_={key:0,class:"figure"},I=["src","alt"],T={key:1,id:"main-title",class:"title"},A={key:2,class:"tagline"};t();var L=a(s({setup(e){const{site:t,frontmatter:a}=i(),s=l((()=>{const{heroImage:e,heroText:t,tagline:s,actionLink:i,actionText:l}=a.value;return e||t||s||i&&l})),k=l((()=>a.value.heroText||t.value.title)),p=l((()=>a.value.tagline||t.value.description));return(e,t)=>o(s)?(c(),n("header",x,[o(a).heroImage?(c(),n("figure",_,[r("img",{class:"image",src:o(v)(o(a).heroImage),alt:o(a).heroAlt},null,8,I)])):u("v-if",!0),o(k)?(c(),n("h1",T,f(o(k)),1)):u("v-if",!0),o(p)?(c(),n("p",A,f(o(p)),1)):u("v-if",!0),o(a).actionLink&&o(a).actionText?(c(),d(m,{key:3,item:{link:o(a).actionLink,text:o(a).actionText},class:"action"},null,8,["item"])):u("v-if",!0),o(a).altActionLink&&o(a).altActionText?(c(),d(m,{key:4,item:{link:o(a).altActionLink,text:o(a).altActionText},class:"action alt"},null,8,["item"])):u("v-if",!0)])):u("v-if",!0)}}),[["__scopeId","data-v-370f18c0"]]);e("data-v-e39c13e0");const b={key:0,class:"home-features"},$={class:"wrapper"},j={class:"container"},w={class:"features"},C={key:0,class:"title"},F={key:1,class:"details"};t();var N=a(s({setup(e){const{frontmatter:t}=i(),a=l((()=>t.value.features&&t.value.features.length>0)),s=l((()=>t.value.features?t.value.features:[]));return(e,t)=>o(a)?(c(),n("div",b,[r("div",$,[r("div",j,[r("div",w,[(c(!0),n(k,null,p(o(s),((e,t)=>(c(),n("section",{key:t,class:"feature"},[e.title?(c(),n("h2",C,f(e.title),1)):u("v-if",!0),e.details?(c(),n("p",F,f(e.details),1)):u("v-if",!0)])))),128))])])])])):u("v-if",!0)}}),[["__scopeId","data-v-e39c13e0"]]);e("data-v-30918238");const q={key:0,class:"footer"},z={class:"container"},B={class:"text"};t();var D=a(s({setup(e){const{frontmatter:t}=i();return(e,a)=>o(t).footer?(c(),n("footer",q,[r("div",z,[r("p",B,f(o(t).footer),1)])])):u("v-if",!0)}}),[["__scopeId","data-v-30918238"]]);e("data-v-10122c92");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};t();var H=a(s({setup:e=>(e,t)=>{const a=h("Content");return c(),n("main",E,[g(L),y(e.$slots,"hero",{},void 0,!0),g(N),r("div",G,[g(a)]),y(e.$slots,"features",{},void 0,!0),g(D),y(e.$slots,"footer",{},void 0,!0)])}}),[["__scopeId","data-v-10122c92"]]);export default H;
