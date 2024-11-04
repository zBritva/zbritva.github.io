"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[2649],{6334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(5893),o=a(1151);const n={slug:"charticulator-geo",title:"Charticulator GeoJSON sublayout",authors:["ilfat"],tags:["Charticulator","development","CharticulatorUpdates","geojson","d3.js"]},s="GeoJSON",i={permalink:"/charticulator-geo",source:"@site/blog/2024-11-03-geojson/index.md",title:"Charticulator GeoJSON sublayout",description:"GeoJSON is a format for encoding a variety of geographic data structures.",date:"2024-11-03T00:00:00.000Z",tags:[{inline:!0,label:"Charticulator",permalink:"/tags/charticulator"},{inline:!0,label:"development",permalink:"/tags/development"},{inline:!0,label:"CharticulatorUpdates",permalink:"/tags/charticulator-updates"},{inline:!0,label:"geojson",permalink:"/tags/geojson"},{inline:!0,label:"d3.js",permalink:"/tags/d-3-js"}],readingTime:.645,hasTruncateMarker:!1,authors:[{name:"Ilfat Galiev",title:"Software Engineer",url:"https://www.linkedin.com/in/ilfat-galiev/",imageURL:"https://avatars.githubusercontent.com/u/10897951?v=4",key:"ilfat"}],frontMatter:{slug:"charticulator-geo",title:"Charticulator GeoJSON sublayout",authors:["ilfat"],tags:["Charticulator","development","CharticulatorUpdates","geojson","d3.js"]},unlisted:!1,nextItem:{title:"Charticulator Treemap sublayout",permalink:"/charticulator-treemap"}},l={authorsImageUrls:[void 0]},c=[];function u(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"GeoJSON is a format for encoding a variety of geographic data structures."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-geojson",children:'{\r\n  "type": "Feature",\r\n  "geometry": {\r\n    "type": "Point",\r\n    "coordinates": [125.6, 10.1]\r\n  },\r\n  "properties": {\r\n    "name": "Dinagat Islands"\r\n  }\r\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"The Charticulator has sub-layout features that allow to authors arrange Glyphs on Plot Segments."}),"\n",(0,r.jsx)(t.p,{children:"Usually Charticulator uses x or y axes to determine positions of each Glyph."}),"\n",(0,r.jsxs)(t.p,{children:["Sub-layouts is one approach to integrate third party layouts like ",(0,r.jsx)(t.a,{href:"https://d3js.org/d3-geo",children:"d3-geo"}),", ",(0,r.jsx)(t.a,{href:"https://d3js.org/d3-hierarchy/tree",children:"d3-hierarchy/tree"}),", ",(0,r.jsx)(t.a,{href:"https://d3js.org/d3-hierarchy/pack",children:"d3-hierarchy/pack"})," e.t.c."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Geo sublayout",src:a(6379).Z+"",width:"1919",height:"912"})}),"\n",(0,r.jsx)(t.p,{children:"The d3-geo package uses to render GeoJSON into SVG path as part of Plot Segment and positioning Glyphs by given latitude, longitude column bindings."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Geo sublayout",src:a(2021).Z+"",width:"279",height:"753"})}),"\n",(0,r.jsx)(t.p,{children:"Geo sub-layout has properties to load GeoJSON file, to specify expression for geo coordinate columns, projections, center of map, rotations, scale and translates rendering SVG on Plot Segment."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2021:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/geo-json-attributes-43947b78065d4d47ffb9d5bba470bfa0.png"},6379:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/geo-json-452325fdffab2a3fc3f0f04d33a82ba5.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var r=a(7294);const o={},n=r.createContext(o);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);