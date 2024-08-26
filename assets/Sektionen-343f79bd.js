import{r as c,j as e,R as F,a as b}from"./index-e424eda9.js";import{I as $,a as y}from"./InfoCard-7fc246ef.js";const E=({date:n})=>{const[a,o]=c.useState([]),[t,r]=c.useState(""),[s,h]=c.useState(""),[d,u]=c.useState(""),x=()=>{const m={id:a.length+1,title:t,startTime:s,endTime:d};o([...a,m]),r(""),h(""),u("")};return e.jsx("div",{className:"day-view-container",children:e.jsx("div",{className:"right-column",children:e.jsxs("div",{className:"book-event-form",children:[e.jsx("div",{className:"text",children:"Book an Event"}),e.jsxs("label",{children:["Title",e.jsx("input",{type:"text",value:t,onChange:m=>r(m.target.value)})]}),e.jsxs("label",{children:["Start Time",e.jsx("input",{type:"time",value:s,onChange:m=>h(m.target.value)})]}),e.jsxs("label",{children:["End Time",e.jsx("input",{type:"time",value:d,onChange:m=>u(m.target.value)})]}),e.jsx("button",{onClick:x,children:"Add Event"})]})})})},M=({date:n,setDate:a,color:o})=>{const[t,r]=c.useState(n.getFullYear()),[s,h]=c.useState(n.getMonth()),[d,u]=c.useState("month"),x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.useEffect(()=>{d==="month"&&m()},[t,s,d]);const m=()=>{const l=new Date(t,s,1).getDay(),j=new Date(t,s+1,0).getDate(),g=new Date(t,s,j).getDay(),k=new Date(t,s,0).getDate();let w="";for(let i=l;i>0;i--)w+=`<li class="inactive">${k-i+1}</li>`;for(let i=1;i<=j;i++){const p=i===n.getDate()&&s===new Date().getMonth()&&t===new Date().getFullYear()?"active":"";w+=`<li class="${p}" data-day="${i}">${i}</li>`}for(let i=g;i<6;i++)w+=`<li class="inactive">${i-g+1}</li>`;document.querySelector(".calendar-dates").innerHTML=w,document.querySelector(".calendar-current-date").innerHTML=`${x[s]} ${t}`,document.querySelectorAll(".calendar-dates li").forEach(i=>{i.addEventListener("click",p=>{const N=p.target.getAttribute("data-day");N&&f(parseInt(N,10))})})},v=l=>{h(j=>{const g=l==="prev"?j-1:j+1;if(g<0||g>11){const k=new Date(t,g,n.getDate());return r(k.getFullYear()),k.getMonth()}return g})},f=l=>{a(new Date(t,s,l)),u("day")},S=()=>{u("month")},D=()=>{const l=new Date;a(l),r(l.getFullYear()),h(l.getMonth()),u("month")},C=l=>new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(l),T=()=>{const l=new Date;return t===l.getFullYear()&&s===l.getMonth()};return e.jsxs("div",{className:"calendar-container",style:{"--color-rgb":o},children:[e.jsxs("header",{className:"calendar-header",children:[e.jsxs("div",{className:"calendar-split",children:[e.jsx("p",{className:"calendar-current-date",children:d==="day"?`${C(n)}`:`${x[s]} ${t}`}),!T()&&e.jsx("button",{onClick:D,className:"today-button",children:"Today"})]}),e.jsxs("div",{className:"calendar-navigation",children:[d==="day"&&e.jsx("button",{onClick:S,className:"back-button",children:"back to calendar"}),d==="month"&&e.jsxs(e.Fragment,{children:[e.jsx("span",{id:"calendar-prev",className:"material-symbols-rounded",onClick:()=>v("prev"),children:"<"}),e.jsx("span",{id:"calendar-next",className:"material-symbols-rounded",onClick:()=>v("next"),children:">"})]})]})]}),e.jsx("div",{className:"calendar-body",children:d==="month"?e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"calendar-weekdays",children:[e.jsx("li",{children:"Sun"}),e.jsx("li",{children:"Mon"}),e.jsx("li",{children:"Tue"}),e.jsx("li",{children:"Wed"}),e.jsx("li",{children:"Thu"}),e.jsx("li",{children:"Fri"}),e.jsx("li",{children:"Sat"})]}),e.jsx("ul",{className:"calendar-dates"})]}):e.jsx(E,{date:n})})]})};const H=({color:n})=>{const[a,o]=c.useState("Sektionsbilen"),t=r=>{const s=r.target;o(s.textContent||"")};return e.jsxs("div",{className:"menu-content",style:{"--color-rgb":n},children:[e.jsxs("div",{className:"icon-wrapper",children:[e.jsx("img",{src:"img/info.svg",className:"icon",alt:"info"}),e.jsx("div",{className:"tooltip",children:'En stör bestämde sig för att besöka en fiskmarknad. Han simmade upp på land, vinkade med fenorna och sa: "Hej! Har ni sett min bror? Han är en riktig stjärna på caviar!"'})]}),e.jsxs("ul",{className:"menu",children:[e.jsx("li",{onClick:t,className:a==="Sektionsbilen"?"selected":"",children:"Sektionsbilen"}),e.jsx("li",{onClick:t,className:a==="Golden-I"?"selected":"",children:"Golden-I"}),e.jsx("li",{onClick:t,className:a==="Ljudsystemet"?"selected":"",children:"Ljudsystemet"}),e.jsx("li",{onClick:t,className:a==="Sektionshögtalaren"?"selected":"",children:"Sektionshögtalaren"})]}),e.jsxs("div",{className:"status",children:[e.jsxs("div",{children:[e.jsx("span",{className:"circle green"}),"Tillgänglig"]}),e.jsxs("div",{children:[e.jsx("span",{className:"circle yellow"}),"Delvis bokad"]}),e.jsxs("div",{children:[e.jsx("span",{className:"circle red"}),"Fullbokad"]})]})]})};const I=()=>{const[n,a]=c.useState(new Date),o="5, 95, 65";return e.jsxs("div",{className:"boka",children:[e.jsx("img",{className:"bond",src:"/img/bond.webp",alt:"bond"}),e.jsxs("div",{className:"boka-content",children:[e.jsx(H,{color:o}),e.jsx(M,{date:n,setDate:a,color:o})]})]})};const L=()=>{const n=()=>window.innerWidth<=768?window.innerWidth*.9:window.innerWidth<=1200?window.innerWidth*.45:500,a=()=>window.innerWidth<=768?140:window.innerWidth<=1200?112:120,o=r=>window.innerWidth<=768?`${r*.9}px`:window.innerWidth<=1200?`${r*.9}px`:`${r}px`,[,t]=c.useState({width:n(),imageHeight:n(),infoCardHeight:a(),titleFontSize:o(24),contentFontSize:o(16)});return c.useEffect(()=>{const h=((d,u)=>{let x;return(...m)=>{const v=()=>{clearTimeout(x),d(...m)};clearTimeout(x),x=setTimeout(v,u)}})(()=>{t({width:n(),imageHeight:n(),infoCardHeight:a(),titleFontSize:o(24),contentFontSize:o(16)})},100);return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),e.jsxs(F,{children:[e.jsx(b,{path:"/",element:e.jsx("div",{className:"sektionen",children:e.jsxs("div",{className:"sektionen-split",children:[e.jsx("div",{className:"left",children:e.jsx($,{src:"img/vasa.jpeg",alt:"red image",objectFit:"cover",zoomOnHover:!1,info:"Vasa 2023",className:"Sektionen-image-card"})}),e.jsxs("div",{className:"right",children:[e.jsx(y,{title:"Boka",content:"Här når du sektionens bokningsverktyg för bland annat sektionsbilen och sektionshögtalaren",url:"/sektionen/boka",isInternal:!0,className:"sektionen-info-card"}),e.jsx(y,{title:"kommiteér",content:"Visa alla kommiteér på I",url:"https://www.youtube.com/watch?v=xvFZjo5PgG0",className:"sektionen-info-card"}),e.jsx(y,{title:"Dokument & Loggotyper",content:"Se alla dokument och logotyper tillhörande sektionen här",url:"https://www.youtube.com/watch?v=xvFZjo5PgG0",className:"sektionen-info-card"})]})]})})}),e.jsx(b,{path:"boka",element:e.jsx(I,{})})]})};export{L as default};
