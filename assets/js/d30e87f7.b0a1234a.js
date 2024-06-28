"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[9187],{5917:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(5893),r=a(1151);a(7294);const i={sidebar_position:4},t="Apache ECharts visual",l={id:"echarts-visual/index",title:"Apache ECharts visual",description:"echartsVisual.1.0.0.0.pbiviz",source:"@site/docs/echarts-visual/index.md",sourceDirName:"echarts-visual",slug:"/echarts-visual/",permalink:"/docs/echarts-visual/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Handlebars helpers",permalink:"/docs/handelbars-visual/helpers"},next:{title:"ApexCharts Visual",permalink:"/docs/apexcharts-visual/"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Overview",id:"overview",level:2},{value:"Power BI Visuals Editor",id:"power-bi-visuals-editor",level:3},{value:"Built in editor",id:"built-in-editor",level:3},{value:"Handlebars.js templates",id:"handlebarsjs-templates",level:3},{value:"Examples",id:"examples",level:3},{value:"Creating chart from scratch",id:"creating-chart-from-scratch",level:2},{value:"Plotly.js style data binding",id:"plotlyjs-style-data-binding",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"apache-echarts-visual",children:"Apache ECharts visual"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://ilfat-galiev.im/visuals/echartsVisual.1.0.0.0.pbiviz",children:"echartsVisual.1.0.0.0.pbiviz"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://echarts.apache.org/en/index.html",children:"Apache ECharts"})," is an Open Source JavaScript Visualization Library with Declarative Framework for a for Rapid Construction of Web-based Visualization."]}),"\n",(0,n.jsxs)(s.p,{children:["The EChart Visual combines power of ECharts and Handlebars.js with Power BI data to build ",(0,n.jsx)(s.a,{href:"https://echarts.apache.org/examples/en/index.html",children:"about 20 chart types"})," within Power BI like ",(0,n.jsx)(s.a,{href:"https://deneb-viz.github.io/",children:"Deneb"})," or ",(0,n.jsx)(s.a,{href:"https://akvelon.github.io/plotlyjsvisual/",children:"Plotly.js"})," visuals."]}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:["The visual initializes container and prepares data for the visual. Authors have to specify ",(0,n.jsx)(s.a,{href:"https://echarts.apache.org/en/option.html#title",children:"options for the chart"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The visual creates ",(0,n.jsx)(s.a,{href:"https://echarts.apache.org/handbook/en/concepts/dataset",children:"ECharts dataset"})," from data provided for the visual by Power BI. Or user can use Power of ",(0,n.jsx)(s.a,{href:"https://handlebarsjs.com/guide/expressions.html",children:"Handlebars.js expressions"})," to bind data directly data properties of ECharts option."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Power BI visual data in EChart dataset (Power BI Visual Editor used for configuration)",src:a(5805).Z+"",width:"346",height:"486"})}),"\n",(0,n.jsx)(s.h3,{id:"power-bi-visuals-editor",children:"Power BI Visuals Editor"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.editorvisual?tab=Overview",children:"Power BI Visuals Editor"})," supports EChart options schema to provide autocomplete."]}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/R7GUcmipPvY?si=YCNJ4-YYldJl1FEr",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,n.jsx)(s.h3,{id:"built-in-editor",children:"Built in editor"}),"\n",(0,n.jsx)(s.p,{children:"When the visual has not options configuration or in Edit mode the visual displays built in editor:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Built in editor",src:a(379).Z+"",width:"875",height:"612"})}),"\n",(0,n.jsxs)(s.p,{children:["The editor based on ",(0,n.jsx)(s.a,{href:"https://github.com/securingsincity/react-ace",children:"React Ace Editor"})," and has lack features than ",(0,n.jsx)(s.a,{href:"https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.editorvisual?tab=Overview",children:"Power BI Visual Editor"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"handlebarsjs-templates",children:"Handlebars.js templates"}),"\n",(0,n.jsxs)(s.p,{children:["The visual supports ",(0,n.jsx)(s.a,{href:"https://handlebarsjs.com/guide/expressions.html",children:"Handlebars.js expressions"})," for configure the visual options and binding data. And provides ",(0,n.jsx)(s.a,{href:"/docs/handelbars-visual/helpers",children:"additional helpers"})," to manipulate with data and use ",(0,n.jsx)(s.a,{href:"https://d3js.org/getting-started",children:"D3.js capabilities (axes, scales, formatting e.t.c.)"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Handlebars.js example of using 'column' helper to get column values:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json5",children:'{\r\n "dataset": {\r\n  "dimensions": [\r\n   "Country",\r\n   " Sales",\r\n  ],\r\n },\r\n "xAxis": {\r\n  "type": "category",\r\n  // HBT data: {{{ column \'Country\' }}},\r\n },\r\n "yAxis": {\r\n  "type": "value",\r\n },\r\n "series": [\r\n  {\r\n   // HBT data: {{{ column \' Sales\' }}},\r\n   "type": "line",\r\n  },\r\n ],\r\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"'column' helper returns array of all values for given colum name."}),"\n",(0,n.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"The visual provides simple examples of EChart configuration for various chart types:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"EChart types list",src:a(8950).Z+"",width:"876",height:"616"})}),"\n",(0,n.jsx)(s.h2,{id:"creating-chart-from-scratch",children:"Creating chart from scratch"}),"\n",(0,n.jsx)(s.p,{children:"The flow of processing data and user defined chart schema:"}),"\n",(0,n.jsx)(s.p,{children:"//TODO add chart"}),"\n","\n",(0,n.jsx)(s.mermaid,{value:"flowchart TD\r\n    Editor[Power BI Visual Editor] --\x3e|JSON5 schema| Instance(Visual container settings);\r\n    Instance --\x3e Visual\r\n    Data[Data origin] --\x3e PBI[Power BI];\r\n    PBI --\x3e Visual\r\n    Schema[JSON5 schema] --\x3e Combine\r\n    Visual[ECharts Visuals]\r\n    HB --\x3e |Expressions| Combine\r\n    VisualData[Data] --\x3e Combine{{Process Handlebars template}};\r\n    Combine --\x3e JSON\r\n    JSON --\x3e EChart[Apache ECharts libaray]\r\n    EChart --\x3e |rendering| CHART\r\n    subgraph Visual[ECharts Visual]\r\n        Schema\r\n        VisualData\r\n        Combine\r\n        HB[handlebars.js]\r\n        JSON\r\n        EChart\r\n        CHART\r\n    end"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://ilfat-galiev.im/visuals/echartsVisual.1.0.0.0.pbiviz",children:"Download"})," and import *.pbiviz file"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Importing pbiviz file",src:a(6581).Z+"",width:"375",height:"222"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create instance of the visual by clicking on the visual icon"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Creating instance of the visual",src:a(4167).Z+"",width:"622",height:"572"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Assign data to the visual instance"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Assigning data to the visual instance",src:a(349).Z+"",width:"860",height:"722"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Resize visual to give more space to visual content and switch to edit mode."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Resized visual",src:a(8209).Z+"",width:"1258",height:"735"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Select the predefined charts from the tree. There are several basic chart examples. The list will be update to add new charts late. ",(0,n.jsx)(s.a,{href:"https://echarts.apache.org/examples/en/index.html",children:"To see all chart types navigate to Examples section of ECharts Documentation"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The visual in edit mode has tree of charts, preview area and JSON editor"}),"\n",(0,n.jsxs)(s.p,{children:['Preview are shows current chart configuration after pressing "Apply" button\r\n',(0,n.jsx)(s.img,{alt:"Visual preview area",src:a(2520).Z+"",width:"1557",height:"777"})]}),"\n",(0,n.jsxs)(s.p,{children:["Editor provides basic editing capabilities to edit JSON5 schema with Handlebar templates\r\n",(0,n.jsx)(s.img,{alt:"Visual editor area",src:a(5670).Z+"",width:"1558",height:"778"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If the visual configuration has error, the visual shows error output instead chart preview."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Visual error view",src:a(2473).Z+"",width:"1557",height:"772"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Data binding and handlebars template."}),"\n",(0,n.jsxs)(s.p,{children:["EChart has ",(0,n.jsx)(s.a,{href:"https://echarts.apache.org/en/option.html#title",children:"options object"})," that contains chart configuration and settings"]}),"\n",(0,n.jsxs)(s.p,{children:["Options is JavaScript object, but the visual allows use JSON only (",(0,n.jsx)(s.a,{href:"https://json5.org/",children:"JSON5 format"}),")."]}),"\n",(0,n.jsx)(s.p,{children:"To provide dynamic binding, the visual support Handlebar templates in comment section."}),"\n",(0,n.jsxs)(s.p,{children:["All comments beginning with ",(0,n.jsx)(s.code,{children:"HBT"})," (whitespace are required) parses by ",(0,n.jsx)(s.a,{href:"https://handlebarsjs.com/",children:"Handlebars.js"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["There you can use ",(0,n.jsx)(s.a,{href:"https://handlebarsjs.com/guide/#what-is-handlebars",children:"power of Handlebars language"})," to generate JSON configuration for the EChart."]}),"\n",(0,n.jsxs)(s.p,{children:["Handlebars provides ",(0,n.jsx)(s.a,{href:"https://handlebarsjs.com/guide/expressions.html#basic-usage",children:"builtin expressions"})," and ",(0,n.jsx)(s.a,{href:"https://handlebarsjs.com/guide/builtin-helpers.html",children:"helpers"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["But the visual defines the set of own helpers like ",(0,n.jsx)(s.a,{href:"/docs/handelbars-visual/helpers",children:"HTML/SVG/Handlebars Visual"})," that makes easy to bind data to the JSON file."]}),"\n",(0,n.jsxs)(s.p,{children:["But EChart visual has additional helpers like ",(0,n.jsx)(s.code,{children:"column"}),", ",(0,n.jsx)(s.code,{children:"select"}),", ",(0,n.jsx)(s.code,{children:"jsonArray"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"column"})," - returns array of column values for given column name. Example: ",(0,n.jsx)(s.code,{children:"{{{ column 'Country' }}}"})," returns ",(0,n.jsx)(s.code,{children:'["Canada","France","Germany","Mexico","United States of America"]'})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"select"})," - returns arrays of columns values for given column names."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"jsonArray"})," - wraps input to ",(0,n.jsx)(s.code,{children:"["}),",",(0,n.jsx)(s.code,{children:"]"})," brackets."]}),"\n",(0,n.jsx)(s.p,{children:"Data Mapping example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json5",children:'{\r\n    "xAxis": {\r\n      "type": "category",\r\n      // HBT "data": {{{ column \'Country\' }}},\r\n    },\r\n    "yAxis": {\r\n      "type": "value"\r\n    },\r\n    "series": [\r\n      {\r\n        // HBT "data": {{{ column \' Sales\' }}},\r\n        "type": "line"\r\n      }\r\n    ]\r\n  }\n'})}),"\n",(0,n.jsx)(s.p,{children:"This JSON5 configuration has two templates:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"// HBT \"data\": {{{ column 'Country' }}},"})}),"\n",(0,n.jsx)(s.p,{children:"and"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"// HBT \"data\": {{{ column ' Sales' }}},"})}),"\n",(0,n.jsxs)(s.p,{children:["Handlebars uses the each template to generate part of content for JSON5. ",(0,n.jsx)(s.code,{children:"column"})," helper returns array of column values. Then the visual removes the comments to leave only part of json. The JSON5 content transforms to"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json5",children:'{\r\n    "xAxis": {\r\n      "type": "category",\r\n      "data": ["Canada","France","Germany","Mexico","United States of America"],\r\n    },\r\n    "yAxis": {\r\n      "type": "value"\r\n    },\r\n    "series": [\r\n      {\r\n        "data": ["24887654.88499999","24354172.28000001","23505340.820000004","20949352.109999992","25029830.165000007"],\r\n        "type": "line"\r\n      }\r\n    ]\r\n  }\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The result config is input object for ",(0,n.jsx)(s.a,{href:"https://echarts.apache.org/en/option.html#title",children:"options"})," parameter of EChart instance."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The result"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Final result",src:a(8307).Z+"",width:"1092",height:"617"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"plotlyjs-style-data-binding",children:"Plotly.js style data binding"}),"\n",(0,n.jsxs)(s.p,{children:["The visual supports data binding by ",(0,n.jsx)(s.code,{children:"<another property name>src"})," property:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json5",children:'{\r\n  "xAxis": {\r\n    "type": "category",\r\n    "data": [],\r\n    // Binds "Country" column values to data property\r\n    "datasrc": "Country",\r\n  },\r\n  "yAxis": {\r\n    "type": "value"\r\n  },\r\n  "series": [\r\n    {\r\n      "data": [],\r\n    // Binds " Sales" column values to data property\r\n      "datasrc": " Sales",\r\n      "type": "line"\r\n    }\r\n  ]\r\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},379:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/builtin-editor-ed3037e73b2411bf70787d2a42f9db0c.png"},8950:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/chart-types-cd0896c28c1bfcb55cd8d1b164f7a577.png"},6581:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step0-ed724d567deb668aa46805efdc270a49.png"},4167:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step1-2c419c0502ab04e09dfba4082cec9d53.png"},349:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step2-1eda316c7f4696b78873e4129fdcc940.png"},8209:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step3-2c51558a92396e2dc7b8e200d2a6c32b.png"},5670:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step4-editor-1733810a093e33e74b3f47311c5f0653.png"},2520:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step4-preview-7b6fddcba3b9c023dd2873d91708f6ab.png"},2473:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step5-error-view-1aa613810bfe57d1afe5fed1f823bffe.png"},8307:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/step6-result-3dad011afd7b38632b8ddca603ae894e.png"},5805:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/visual-dataset-faf0437feae8c5f6312a46d114551a30.png"},1151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>t});var n=a(7294);const r={},i=n.createContext(r);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);