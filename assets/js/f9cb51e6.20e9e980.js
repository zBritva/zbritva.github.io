"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[7557],{606:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=a(5893),r=a(1151);const t={sidebar_position:2,tags:["Handlebars","Power BI Visual","Data visualization","SVG"]},i="Getting Started",l={id:"handelbars-visual/index",title:"Getting Started",description:"The visual uses Handlebars.js to render template and bind data from Power BI. Read mode about Handlebars.js before start.",source:"@site/docs/handelbars-visual/index.md",sourceDirName:"handelbars-visual",slug:"/handelbars-visual/",permalink:"/docs/handelbars-visual/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Handlebars",permalink:"/docs/tags/handlebars"},{inline:!0,label:"Power BI Visual",permalink:"/docs/tags/power-bi-visual"},{inline:!0,label:"Data visualization",permalink:"/docs/tags/data-visualization"},{inline:!0,label:"SVG",permalink:"/docs/tags/svg"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Handlebars","Power BI Visual","Data visualization","SVG"]},sidebar:"tutorialSidebar",previous:{title:"HTML/SVG/Handlebars Visual",permalink:"/docs/category/htmlsvghandlebars-visual"},next:{title:"Step by step guide",permalink:"/docs/handelbars-visual/step-by-step"}},o={},c=[{value:"Handlebarsjs defined context",id:"handlebarsjs-defined-context",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Column aliases",id:"column-aliases",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(n.p,{children:["The visual uses Handlebars.js to render template and bind data from Power BI. Read mode about ",(0,s.jsx)(n.a,{href:"https://handlebarsjs.com/guide/",children:"Handlebars.js"})," before start."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.handlebars_visual?tab=Overview",children:"Download the visual or sample report file on Appsource page"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://appsource.microsoft.com/en-US/product/PowerBIVisuals/ilfatgaliev1696579877540.editorvisual",children:"Power BI Visual Editor"})," can be used for editing HTML/SVG content with autocomplete and syntax highlight"]}),"\n",(0,s.jsx)(n.p,{children:"Or prepare your own dataset."}),"\n",(0,s.jsxs)(n.p,{children:["Follow the ",(0,s.jsx)(n.a,{href:"/docs/handelbars-visual/step-by-step",children:"Step by step guide"})," to create simple bar chart example:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Bar chart example",src:a(2633).Z+"",width:"737",height:"493"})}),"\n",(0,s.jsx)(n.p,{children:"Full template:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"{{ var 'margin' 30}}\r\n{{ var 'svgHeight' (sub viewport.height (val 'margin'))}}\r\n{{ var 'chartHeight' (sub viewport.height 90)}}\r\n{{ var 'svgWidth' (sub viewport.width 30)}}\r\n{{ var 'rectHeight' (divide (val 'chartHeight') table.rows.length)}}\r\n{{ var 'sales' (map ' Sales' table.rows) }}\r\n{{ var 'countries' (map 'Country' table.rows) }}\r\n{{ scaleLinear 'Scale X' (array ( min (val 'sales')) ( max (val 'sales'))) (array 0 (val 'svgWidth'))}}\r\n{{ scaleBand 'Scale Y' (val 'countries') (array 0 (val 'chartHeight'))}}\r\n{{ axisBottom 'axisMeasure' 'Scale X' }}\r\n{{ axisRight 'axisCategory' 'Scale Y' }}\r\n{{ setupScale 'Scale Y' 'paddingOuter' 0.2 }}\r\n{{ setupScale 'Scale Y' 'paddingInner' 0.1 }}\r\n{{ setupAxis 'axisMeasure' 'tickFormat' '~s' }}\r\n{{ setupAxis 'axisMeasure' 'ticks' 5 }}\r\n<svg width=\"{{val 'svgWidth'}}\" height=\"{{ val 'svgHeight' }}\">\r\n    <g transform=\"translate({{val 'margin'}}, {{val 'margin'}})\">\r\n        <g>\r\n            {{#each table.rows}}\r\n            <rect\r\n                x=\"0\"\r\n                y=\"{{{ useScale 'Scale Y' this.Country }}}\"\r\n                width=\"{{{ useScale 'Scale X' this.[ Sales] }}}\"\r\n                height=\"{{{ getScale 'Scale Y' 'bandwidth' }}}\"\r\n                fill=\"{{{ useColor this.Country }}}\">    \r\n            </rect>\r\n            {{/each}}\r\n        </g>\r\n        <g transform=\"translate(0, {{val 'chartHeight'}})\">\r\n            {{{ useAxis 'axisMeasure' 'Scale X' }}}\r\n        </g>\r\n        <g transform=\"translate(0, 0)\">\r\n            {{{ useAxis 'axisCategory' 'Scale Y' }}}\r\n        </g>\r\n    </g>\r\n</svg>\r\n<style>\r\n    .tick text {\r\n        font-size: 20px;\r\n        font-weight: 700;\r\n    }\r\n</style>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"handlebarsjs-defined-context",children:"Handlebarsjs defined context"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"table"})," - contains data from Power BI in table structure."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"table.rows"})," - contains rows content from Power BI as JS objects."]}),"\n",(0,s.jsx)(n.p,{children:"Usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-svg",children:"{{#each table.rows}}\r\n    <text>\r\n        {{ this.Country }}   \r\n        ...\r\n    </text>\r\n{{/each}}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Prints the list of country names in ",(0,s.jsx)(n.code,{children:"Country"})," column."]}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"Country"})," is column name assigned to the visual."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"table.columns"})," - contains list of columns from Power BI."]}),"\n",(0,s.jsx)(n.p,{children:"Usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-svg",children:"{{#each table.columns}}\r\n    {{this.displayName}}\r\n{{/each}}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"viewport"})," - contains visual viewport size"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"viewport.height"})," - height of viewport"]}),"\n",(0,s.jsx)(n.p,{children:"Usage:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"{{ viewport.height }}"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"viewport.width"})," - width of viewport"]}),"\n",(0,s.jsx)(n.p,{children:"usage:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"{{ viewport.width }}"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The visuals's output is HTML content. HTML supports comments tag that doesn't render in browser. The visual uses the first comment tag configuration with ",(0,s.jsx)(n.a,{href:"https://json5.org/",children:"JSON5"})," content."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Template config",src:a(9974).Z+"",width:"913",height:"551"})}),"\n",(0,s.jsx)(n.h3,{id:"column-aliases",children:"Column aliases"}),"\n",(0,s.jsx)(n.p,{children:"The visual supports defining aliases for columns bound to the visual. It allows to define general column names in the template and columns mapping for template consumers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!--\r\n{\r\n    aliases: {\r\n        Type: "Category",\r\n        Death: "Measure"\r\n    }\r\n}\r\n--\x3e\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above config contains mapping ",(0,s.jsx)(n.code,{children:"Type"})," visual column to ",(0,s.jsx)(n.code,{children:"Category"})," and ",(0,s.jsx)(n.code,{children:"Death"})," visual column to ",(0,s.jsx)(n.code,{children:"Measure"}),". Then new column names can be used in template"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-handlebars",children:"<p>aliases example:</p>\r\n{{#each table.rows}}\r\n<p>{{this.Category}}</p>\r\n{{/each}}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output is"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!--\r\n{\r\naliases: {\r\n Type: "Category",\r\n Death: "Measure"\r\n}\r\n}\r\n--\x3e\r\n<p>aliases example:</p>\r\n<p>Disease</p>\r\n<p>Other</p>\r\n<p>Wounds</p>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2633:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/barchart-output-e8ce9fbb2882959c82f108f3edb7a8b4.png"},9974:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/config-0ac3b977739dc27da7b33bce9d57ede4.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var s=a(7294);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);