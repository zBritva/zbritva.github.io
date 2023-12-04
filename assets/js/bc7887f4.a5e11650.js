"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[3382],{4227:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=s(5893),t=s(1151);const r={sidebar_position:1},d="Intro",a={id:"charticulator/index",title:"Intro",description:"This page describes four things that you need to learn in order to use Charticulator.",source:"@site/docs/charticulator/index.md",sourceDirName:"charticulator",slug:"/charticulator/",permalink:"/docs/charticulator/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Charticulator",permalink:"/docs/category/charticulator"},next:{title:"Using in Power BI",permalink:"/docs/charticulator/using_in_power_bi"}},l={},h=[{value:"Terminology",id:"terminology",level:2},{value:"User Interface Components",id:"user-interface-components",level:2},{value:"Help Menu",id:"help-menu",level:3},{value:"Preparing Data",id:"preparing-data",level:2},{value:"Narrow",id:"narrow",level:3},{value:"Wide",id:"wide",level:3},{value:"Data for Links",id:"data-for-links",level:3},{value:"Loading Data",id:"loading-data",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"intro",children:"Intro"}),"\n",(0,i.jsxs)(n.p,{children:["This page describes four things that you need to learn in order to use Charticulator.\nThe documentation based on original source of ",(0,i.jsx)(n.a,{href:"https://charticulator.com/docs/getting-started.html",children:"Charticulator documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This documentation will include also new features and changes that aren't included original visual or Charticulator app."}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"mark"})," is a primitive graphical element (e.g., rectangle, line, text)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"glyph"})," is a visual representation of a single data row. A glyph contains one or more ",(0,i.jsx)(n.strong,{children:"marks"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"guide"})," is an auxiliary element for positioning marks or glyphs. Guides do not appear in exported charts."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"plot segment"})," lays out a set of glyphs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"scaffold"})," or an ",(0,i.jsx)(n.strong,{children:"axis"})," specifies the layout property of one particular direction in a plot segment. A scaffold specifies a basic stacking layout without data binding and an axis specifies a layout that is bound to properties of the data. An axis can position glyphs according to a categorical data attribute or to a numerical data attribute."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Terminology illustration",src:s(2093).Z+"",width:"2114",height:"956"})}),"\n",(0,i.jsx)(n.h2,{id:"user-interface-components",children:"User Interface Components"}),"\n",(0,i.jsx)(n.p,{children:"Charticulator's user interface consists of the following components:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dataset Panel"}),': listing the columns in your dataset. Click the "..." button to view the actual data values.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Toolbar"}),": widgets for specifying Marks, Links, Guides, Plot Segments, and Scaffolds."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Chart Canvas"}),": a canvas for specifying the chart design."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Glyph Editor"}),": a canvas for specifying the glyph design."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Layers Panel"}),": listing the contents of the chart and glyph designs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attributes Panel"}),": widgets for specifying the attributes and data bindings for each layer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scales Panel"}),": listing the scales used in the chart."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"User interface",src:s(6571).Z+"",width:"1280",height:"720"})}),"\n",(0,i.jsxs)(n.p,{children:["You can customize the position, size, and docking status of the ",(0,i.jsx)(n.em,{children:"Glyph Editor"}),", ",(0,i.jsx)(n.em,{children:"Layers Panel"}),", ",(0,i.jsx)(n.em,{children:"Attributes Panel"}),", and ",(0,i.jsx)(n.em,{children:"Scales Panel"}),". Click the dock status icon in the top right corner of each view to toggle its docking status. When the view is undocked, you can change its position and size."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Floating Panels",src:s(7793).Z+"",width:"845",height:"860"})}),"\n",(0,i.jsx)(n.h3,{id:"help-menu",children:"Help Menu"}),"\n",(0,i.jsxs)(n.p,{children:["Click the help icon in the top right corner to reveal links to several resources, including a link to this Getting Started page, the ",(0,i.jsx)("a",{href:"/gallery/index.html",children:"Example Gallery"}),", a link to ",(0,i.jsx)("a",{href:"https://github.com/Microsoft/charticulator/issues/new",children:"create an issue"})," in our Github repository, the ",(0,i.jsx)("a",{href:"https://charticulator.com",children:"Charticulator main website"}),", and a link to ",(0,i.jsx)("a",{href:"mailto:charticulator@microsoft.com",children:"contact us"})," via email."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Help Menu",src:s(4062).Z+"",width:"215",height:"295"})}),"\n",(0,i.jsx)(n.h2,{id:"preparing-data",children:"Preparing Data"}),"\n",(0,i.jsxs)(n.p,{children:["Charticulator supports datasets in ",(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Comma-separated_values",children:(0,i.jsx)(n.strong,{children:"CSV"})})," format and expects that ",(0,i.jsx)(n.strong,{children:"the first row contains the column names"}),". Charticulator is designed to support both the ",(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Wide_and_narrow_data",children:"wide and narrow"})," format of a data table."]}),"\n",(0,i.jsx)(n.h3,{id:"narrow",children:"Narrow"}),"\n",(0,i.jsx)(n.p,{children:"The table below shows (in narrow form) the market share of mobile operating systems from one year to the next."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Year"}),(0,i.jsx)("th",{children:"OperatingSystem"}),(0,i.jsx)("th",{children:"MarketShare"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2009"}),(0,i.jsx)("td",{children:"iOS"}),(0,i.jsx)("td",{children:"59.35"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2009"}),(0,i.jsx)("td",{children:"Android"}),(0,i.jsx)("td",{children:"5.58"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2009"}),(0,i.jsx)("td",{children:"Symbian"}),(0,i.jsx)("td",{children:"2.5"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2010"}),(0,i.jsx)("td",{children:"iOS"}),(0,i.jsx)("td",{children:"40.77"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"2010"}),(0,i.jsx)("td",{children:"Android"}),(0,i.jsx)("td",{children:"16.97"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"wide",children:"Wide"}),"\n",(0,i.jsxs)(n.p,{children:["The table below shows (in wide form) the world population by gender and age. Because a glyph represents one data row, you need to use a ",(0,i.jsx)("a",{href:"/docs/user-interaction.html#data-driven-guides",children:"data-driven guide"})," to position multiple marks based on numerical data values in a glyph."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Age"}),(0,i.jsx)("th",{children:"Female"}),(0,i.jsx)("th",{children:"Male"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"0-4"}),(0,i.jsx)("td",{children:"327.601"}),(0,i.jsx)("td",{children:"350.321"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"5-9"}),(0,i.jsx)("td",{children:"316.714"}),(0,i.jsx)("td",{children:"338.892"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"10-14"}),(0,i.jsx)("td",{children:"301.011"}),(0,i.jsx)("td",{children:"322.363"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"15-19"}),(0,i.jsx)("td",{children:"288.482"}),(0,i.jsx)("td",{children:"308.333"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"20-24"}),(0,i.jsx)("td",{children:"287.820"}),(0,i.jsx)("td",{children:"306.100"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"data-for-links",children:"Data for Links"}),"\n",(0,i.jsx)(n.p,{children:"To draw charts with the links between glyphs, you will need two data tables: one for nodes/entities and another for links/relationships between nodes. For example, to draw the arc chart below (character co-ocurrence in Les Miserables), you will need one table for the characters and another for their co-occurrences."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Les Miserables Chart",src:s(8584).Z+"",width:"1800",height:"1096"})}),"\n",(0,i.jsxs)(n.p,{children:["Charticulator expects the nodes table to contain an ",(0,i.jsx)(n.code,{children:"id"})," column and the links table to contain ",(0,i.jsx)(n.code,{children:"source_id"})," and ",(0,i.jsx)(n.code,{children:"target_id"})," columns, which refer to the ",(0,i.jsx)(n.code,{children:"id"}),"s in the nodes table, as illustrated below. Note that these column names are ",(0,i.jsx)(n.strong,{children:"case sensitive"}),"."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"id"}),(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Group"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Myriel"}),(0,i.jsx)("td",{children:"Myriel"}),(0,i.jsx)("td",{children:"G01"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Napoleon"}),(0,i.jsx)("td",{children:"Napoleon"}),(0,i.jsx)("td",{children:"G01"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Valjean"}),(0,i.jsx)("td",{children:"Valjean"}),(0,i.jsx)("td",{children:"G02"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Marguerite"}),(0,i.jsx)("td",{children:"Marguerite"}),(0,i.jsx)("td",{children:"G03"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."})]})]})]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"source_id"}),(0,i.jsx)("th",{children:"target_id"}),(0,i.jsx)("th",{children:"Strength"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Napoleon"}),(0,i.jsx)("td",{children:"Myriel"}),(0,i.jsx)("td",{children:"1"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Valjean"}),(0,i.jsx)("td",{children:"Myriel"}),(0,i.jsx)("td",{children:"5"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Marguerite"}),(0,i.jsx)("td",{children:"Valjean"}),(0,i.jsx)("td",{children:"1"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"loading-data",children:"Loading Data"}),"\n",(0,i.jsx)(n.p,{children:'When you launch Charticulator, it automatically invokes the "New" chart command. Because you need to load data in order to create a chart, the New chart panel lets you select data files. You can click the button or drag a CSV file into the button area to open the data file.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Import Data",src:s(5231).Z+"",width:"1140",height:"700"})}),"\n",(0,i.jsx)(n.p,{children:"Once you choose the data file, Charticulator previews its top five rows."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Import Data Preview",src:s(7256).Z+"",width:"1140",height:"870"})}),"\n",(0,i.jsxs)(n.p,{children:["Now you are ready to ",(0,i.jsx)("a",{href:"/docs/user-interaction.htm",children:"create a chart with Charticulator"})," and follow along with our ",(0,i.jsx)("a",{href:"/docs/video-tutorials.html",children:"video tutorials"}),".\nAlso note that many of the charts in our ",(0,i.jsx)("a",{href:"/gallery/index.html",children:"gallery"})," have an associated video of their creation process."]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7793:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/floating-panels-96b856ad3d4b1955567aa666ff83b486.png"},4062:(e,n,s)=>{s.d(n,{Z:()=>i});const i="data:image/png;base64,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"},7256:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/import-data-preview-6aaa3601a4aedb469886b700f70071db.png"},5231:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/import-data-978785d03cd4020932a7cfa0690047fd.png"},2093:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/term-illustration-e27e57b91bd96b5e6351648a790d3aa8.png"},6571:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/ui-components-a44adb4c6b8a87be3f1af3a8f839efff.png"},8584:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/les_miserables_linear-44c1ca007f786ecf1dbd9779418d8e2d.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>d});var i=s(7294);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);