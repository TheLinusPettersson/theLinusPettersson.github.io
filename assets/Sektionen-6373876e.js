import{r as a,j as e,R as u,a as d}from"./index-e257717a.js";import{I as o}from"./InfoCard-d20976ec.js";import{I as m}from"./ImageCard-5ac76d35.js";import x from"./Boka-98f1bbf2.js";const b=()=>{const i=()=>window.innerWidth<=768?window.innerWidth*.9:window.innerWidth<=1200?window.innerWidth*.45:500,s=()=>window.innerWidth<=768?140:window.innerWidth<=1200?112:120,[t,h]=a.useState({width:i(),imageHeight:i(),infoCardHeight:s()});return a.useEffect(()=>{const r=((l,w)=>{let n;return(...c)=>{const g=()=>{clearTimeout(n),l(...c)};clearTimeout(n),n=setTimeout(g,w)}})(()=>{h({width:i(),imageHeight:i(),infoCardHeight:s()})},100);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e.jsxs(u,{children:[e.jsx(d,{path:"/",element:e.jsx("div",{className:"sektionen",children:e.jsxs("div",{className:"sektionen-split",children:[e.jsx("div",{className:"left",children:e.jsx(m,{src:"img/kuggen.jpeg",alt:"red image",width:`${t.width}px`,height:`${t.imageHeight}px`,objectFit:"cover",zoomOnHover:!1,info:"Kuggen 2024"})}),e.jsxs("div",{className:"right",children:[e.jsx(o,{title:"Boka",content:"Här når du sektionens bokningsverktyg för bland annat sektionsbilen och sektionshögtalaren",width:`${t.width}px`,height:`${t.infoCardHeight}px`,url:"/sektionen/boka",isInternal:!0,showArrow:!1}),e.jsx(o,{title:"Dokument",content:"Se alla dokument rörande sektionen här",width:`${t.width}px`,height:`${t.infoCardHeight}px`,url:"https://www.youtube.com/watch?v=xvFZjo5PgG0",showArrow:!1}),e.jsx(o,{title:"Loggotyper",content:"Här finns alla logotyper tillhörande sektionen",width:`${t.width}px`,height:`${t.infoCardHeight}px`,url:"https://www.youtube.com/watch?v=xvFZjo5PgG0",showArrow:!1})]})]})})}),e.jsx(d,{path:"boka",element:e.jsx(x,{})})]})};export{b as default};
