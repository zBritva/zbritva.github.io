"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[9368],{7581:(s,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var r=o(5893),a=o(1151),t=o(9773);const i={title:"Edible Mushrooms",description:"200 samples of mushrooms",image:"/images/gallery/mushrooms.png",video:"/videos/gallery/mushrooms.mp4",data:"/data/mushrooms.csv",dataset:"mushrooms",sidebar_position:19},l="Edible Mushrooms",m={id:"charticulator/gallery/mushrooms",title:"Edible Mushrooms",description:"200 samples of mushrooms",source:"@site/docs/charticulator/gallery/mushrooms.mdx",sourceDirName:"charticulator/gallery",slug:"/charticulator/gallery/mushrooms",permalink:"/docs/charticulator/gallery/mushrooms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Edible Mushrooms",description:"200 samples of mushrooms",image:"/images/gallery/mushrooms.png",video:"/videos/gallery/mushrooms.mp4",data:"/data/mushrooms.csv",dataset:"mushrooms",sidebar_position:19},sidebar:"defaultSidebar",previous:{title:"GDP per Capita v.s. Population",permalink:"/docs/charticulator/gallery/gdp_vs_population"},next:{title:"Edible Mushrooms (Alternative)",permalink:"/docs/charticulator/gallery/mushrooms_alternative"}},c={},u=[];function n(s){const e={a:"a",h1:"h1",img:"img",p:"p",...(0,a.a)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"edible-mushrooms",children:"Edible Mushrooms"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Edible Mushrooms",src:o(1111).Z+"",width:"1800",height:"778"})}),"\n",(0,r.jsxs)(e.p,{children:["This chart displays the characteristics of mushrooms sampled from the ",(0,r.jsx)(e.a,{href:"https://archive.ics.uci.edu/ml/datasets/Mushroom",children:"UCI mushroom dataset"}),".\r\nEach circle represents a single mushroom sample, colored according to whether it is poisonous. Odors are grouped along the X axis, while cap surface chartacteristics are grouped along the Y axis."]}),"\n",(0,r.jsx)(t.J,{url:"/videos/gallery/mushrooms.mp4"})]})}function h(s={}){const{wrapper:e}={...(0,a.a)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(n,{...s})}):n(s)}},9773:(s,e,o)=>{o.d(e,{J:()=>l});var r=o(7294),a=o(2004),t=o.n(a),i=o(5893);const l=s=>{let{url:e,timeToStart:o,timeToStop:a}=s;const l=r.useRef(),[m,c]=r.useState(!1),[u,n]=r.useState(!1),h=r.useCallback((()=>{}),[l.current,o]),d=r.useCallback((s=>{m&&a&&s.playedSeconds>=a&&c(!1)}),[m,a]),p=r.useCallback((()=>{c(!0),o&&!1===u&&(l.current?.seekTo(o,"seconds"),n(!0))}),[c]);return(0,i.jsx)(t(),{ref:l,playing:m,url:`${e}`,width:"80%",controls:!0,onReady:h,onProgress:d,onPlay:p})}},1111:(s,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/mushrooms-5663ae3cc85c38fa23c296b6e5f55776.png"}}]);