"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[9187],{5917:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=a(5893),i=a(1151);a(7294);const t={sidebar_position:4},n="Apache ECharts visual",l={id:"echarts-visual/index",title:"Apache ECharts visual",description:"echartsVisual.1.0.0.0.pbiviz",source:"@site/docs/echarts-visual/index.md",sourceDirName:"echarts-visual",slug:"/echarts-visual/",permalink:"/docs/echarts-visual/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Handlebars helpers",permalink:"/docs/handelbars-visual/helpers"},next:{title:"ApexCharts Visual",permalink:"/docs/apexcharts-visual/"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Overview",id:"overview",level:2},{value:"Power BI Visuals Editor",id:"power-bi-visuals-editor",level:3},{value:"Built in editor",id:"built-in-editor",level:3},{value:"Handlebars.js templates",id:"handlebarsjs-templates",level:3},{value:"Examples",id:"examples",level:3},{value:"Creating chart from scratch",id:"creating-chart-from-scratch",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"apache-echarts-visual",children:"Apache ECharts visual"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://ilfat-galiev.im/visuals/echartsVisual.1.0.0.0.pbiviz",children:"echartsVisual.1.0.0.0.pbiviz"})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OIcs0mSlTnk?si=IibArG1XQgZpzYJ7",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://echarts.apache.org/en/index.html",children:"Apache ECharts"})," is an Open Source JavaScript Visualization Library with Declarative Framework for a for Rapid Construction of Web-based Visualization."]}),"\n",(0,s.jsxs)(r.p,{children:["The EChart Visual combines power of ECharts and Handlebars.js with Power BI data to build ",(0,s.jsx)(r.a,{href:"https://echarts.apache.org/examples/en/index.html",children:"about 20 chart types"})," within Power BI like ",(0,s.jsx)(r.a,{href:"https://deneb-viz.github.io/",children:"Deneb"})," or ",(0,s.jsx)(r.a,{href:"https://akvelon.github.io/plotlyjsvisual/",children:"Plotly.js"})," visuals."]}),"\n",(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(r.p,{children:["The visual initializes container and prepares data for the visual. Authors have to specify ",(0,s.jsx)(r.a,{href:"https://echarts.apache.org/en/option.html#title",children:"options for the chart"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["The visual creates ",(0,s.jsx)(r.a,{href:"https://echarts.apache.org/handbook/en/concepts/dataset",children:"ECharts dataset"})," from data provided for the visual by Power BI. Or user can use Power of ",(0,s.jsx)(r.a,{href:"https://handlebarsjs.com/guide/expressions.html",children:"Handlebars.js expressions"})," to bind data directly data properties of ECharts option."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Power BI visual data in EChart dataset (Power BI Visual Editor used for configuration)",src:a(5805).Z+"",width:"346",height:"486"})}),"\n",(0,s.jsx)(r.h3,{id:"power-bi-visuals-editor",children:"Power BI Visuals Editor"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.editorvisual?tab=Overview",children:"Power BI Visuals Editor"})," supports EChart options schema to provide autocomplete."]}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/R7GUcmipPvY?si=YCNJ4-YYldJl1FEr",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsx)(r.h3,{id:"built-in-editor",children:"Built in editor"}),"\n",(0,s.jsx)(r.p,{children:"When the visual has not options configuration or in Edit mode the visual displays built in editor:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Built in editor",src:a(379).Z+"",width:"875",height:"612"})}),"\n",(0,s.jsxs)(r.p,{children:["The editor based on ",(0,s.jsx)(r.a,{href:"https://github.com/securingsincity/react-ace",children:"React Ace Editor"})," and has lack features than ",(0,s.jsx)(r.a,{href:"https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.editorvisual?tab=Overview",children:"Power BI Visual Editor"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"handlebarsjs-templates",children:"Handlebars.js templates"}),"\n",(0,s.jsxs)(r.p,{children:["The visual supports ",(0,s.jsx)(r.a,{href:"https://handlebarsjs.com/guide/expressions.html",children:"Handlebars.js expressions"})," for configure the visual options and binding data. And provides ",(0,s.jsx)(r.a,{href:"/docs/handelbars-visual/helpers",children:"additional helpers"})," to manipulate with data and use ",(0,s.jsx)(r.a,{href:"https://d3js.org/getting-started",children:"D3.js capabilities (axes, scales, formatting e.t.c.)"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Handlebars.js example of using 'column' helper to get column values:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json5",children:'{\r\n "dataset": {\r\n  "dimensions": [\r\n   "Country",\r\n   " Sales",\r\n  ],\r\n },\r\n "xAxis": {\r\n  "type": "category",\r\n  // HBT data: {{{ column \'Country\' }}},\r\n },\r\n "yAxis": {\r\n  "type": "value",\r\n },\r\n "series": [\r\n  {\r\n   // HBT data: {{{ column \' Sales\' }}},\r\n   "type": "line",\r\n  },\r\n ],\r\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:"'column' helper returns array of all values for given colum name."}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:"The visual provides simple examples of EChart configuration for various chart types:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"EChart types list",src:a(8950).Z+"",width:"876",height:"616"})}),"\n",(0,s.jsx)(r.h2,{id:"creating-chart-from-scratch",children:"Creating chart from scratch"}),"\n",(0,s.jsx)(r.p,{children:"The flow of processing data and user defined chart schema:"}),"\n",(0,s.jsx)(r.p,{children:"//TODO add chart"}),"\n","\n",(0,s.jsx)(r.mermaid,{value:"flowchart TD\r\n    Editor[Power BI Visual Editor] --\x3e|JSON5 schema| Instance(Visual container settings);\r\n    Instance --\x3e Visual\r\n    Data[Data origin] --\x3e PBI[Power BI];\r\n    PBI --\x3e Visual\r\n    Schema[JSON5 schema] --\x3e Combine\r\n    Visual[ECharts Visuals]\r\n    HB --\x3e |Expressions| Combine\r\n    VisualData[Data] --\x3e Combine{{Process Handlebars template}};\r\n    Combine --\x3e JSON\r\n    JSON --\x3e EChart[Apache ECharts libaray]\r\n    EChart --\x3e |rendering| CHART\r\n    subgraph Visual[ECharts Visual]\r\n        Schema\r\n        VisualData\r\n        Combine\r\n        HB[handlebars.js]\r\n        JSON\r\n        EChart\r\n        CHART\r\n    end"})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},379:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/builtin-editor-ed3037e73b2411bf70787d2a42f9db0c.png"},8950:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/chart-types-12c712a3239e2749d1a6cc501ac29044.png"},5805:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/visual-dataset-faf0437feae8c5f6312a46d114551a30.png"},1151:(e,r,a)=>{a.d(r,{Z:()=>l,a:()=>n});var s=a(7294);const i={},t=s.createContext(i);function n(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);