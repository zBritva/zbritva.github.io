"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[6197],{5387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=a(5893),r=a(1151);const i={sidebar_position:2},s="Using in Power BI",o={id:"charticulator/using_in_power_bi",title:"Using in Power BI",description:"You can import the chart design, exported as a Power BI Custom Visual, into Power BI. Once its required data fields are filled, you can see the chart within Power BI.",source:"@site/docs/charticulator/using_in_power_bi.md",sourceDirName:"charticulator",slug:"/charticulator/using_in_power_bi",permalink:"/docs/charticulator/using_in_power_bi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Reusing charts",permalink:"/docs/charticulator/reusing_charts"},next:{title:"HTML/SVG/Handlebars Visual",permalink:"/docs/category/htmlsvghandlebars-visual"}},d={},h=[{value:"Don&#39;t Summarize",id:"dont-summarize",level:2},{value:"Data Order",id:"data-order",level:2},{value:"Date vs. Date Hierarchy",id:"date-vs-date-hierarchy",level:2},{value:"Creating a Chart with Links",id:"creating-a-chart-with-links",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"using-in-power-bi",children:"Using in Power BI"}),"\n",(0,n.jsx)(t.p,{children:"You can import the chart design, exported as a Power BI Custom Visual, into Power BI. Once its required data fields are filled, you can see the chart within Power BI."}),"\n",(0,n.jsxs)(t.p,{children:["In addition, the chart reacts to the event from other charts or slicers. For example, you can create a slicer using the Month value of the ",(0,n.jsx)(t.code,{children:"DATE"})," value so that you can interactively choose the desired month to be shown."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI",src:a(8939).Z+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.p,{children:"Charticulator\u2019s underlying framework handles data tables in a certain way, expecting data tables are formatted in a specific way. Some of the Power BI\u2019s default behaviors do not satisfy the expectations and cause unwanted results. Here, we explain how to configure the settings in Power BI to meet Charticulator\u2019s expectations."}),"\n",(0,n.jsx)(t.h2,{id:"dont-summarize",children:"Don't Summarize"}),"\n",(0,n.jsxs)(t.p,{children:["In Charticulator, a glyph represents one data row. For example, to create a bar chart, each row in the data table must correspond to one bar. On the other hand, Power BI \u201csummarizes\u201d data by default. For example, with the 200 mushrooms dataset, for a numerical data field (ID), Power BI automatically computes the Count, the number of rows with the same set of data values (see the left figure below). To ensure that each data row is drawn as a glyph in Charticulator, you need to tell Power BI not to summarize, by selecting the ",(0,n.jsx)(t.strong,{children:"Don\u2019t summarize"})," menu item."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Do not summarize",src:a(3874).Z+"",width:"1202",height:"720"})}),"\n",(0,n.jsx)(t.h2,{id:"data-order",children:"Data Order"}),"\n",(0,n.jsxs)(t.p,{children:["By default, Charticulator does ",(0,n.jsx)(t.strong,{children:"not"})," sort data and handles the data in the order they appear in the table. On the other hand, Power BI usually tries to order data in a predefined way (based on data values). Therefore, if you want to enforce an order that is not based on existing data values, you need to add a data field to specify order and then order the table based on that field."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Data order",src:a(3985).Z+"",width:"746",height:"554"})}),"\n",(0,n.jsx)(t.h2,{id:"date-vs-date-hierarchy",children:"Date vs. Date Hierarchy"}),"\n",(0,n.jsxs)(t.p,{children:['For the date type data value (e.g., "02/24/2021"), Charticulator automatically extracts its subcomponents (e.g., day, dayOfYear, weekday). On the other hand, Power BI creates a date hierarchy, consisting of Year, Quarter, Month, and Day, and uses the date hierarchy by default. Therefore, to reuse a chart design created with Charticulator in Power BI, you need to select the ',(0,n.jsx)(t.strong,{children:"Date"})," menu item."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Date",src:a(1158).Z+"",width:"621",height:"487"})}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-chart-with-links",children:"Creating a Chart with Links"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://charticulator.com/docs/using-in-power-bi.html",children:"Original documentation source"})}),"\n",(0,n.jsx)(t.p,{children:"To draw a chart with the links between glyphs in Charticulator, you need two data tables: one for nodes (or entities) and another for links (or relationships) between nodes. Because Power BI visuals expects a single table, you need to create a relationship between these two tables, by following these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Modeling"})," from the main menu."]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Manage relationships"})," from the ribbon."]}),"\n",(0,n.jsxs)(t.li,{children:["In the Manage relationships window, select ",(0,n.jsx)(t.strong,{children:"New\u2026"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["In the Create relationship window, follow these steps:","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Select the table for nodes from the first dropdown menu."}),"\n",(0,n.jsx)(t.li,{children:"Select the table for links from the second dropdown menu."}),"\n",(0,n.jsx)(t.li,{children:"Select the id column from the table for nodes."}),"\n",(0,n.jsx)(t.li,{children:"Select the source_id column from the table for links."}),"\n",(0,n.jsxs)(t.li,{children:["Select Many to many (",(0,n.jsx)(t.em,{children:"."}),") from the Cardinality dropdown."]}),"\n",(0,n.jsx)(t.li,{children:"Select OK to compete the relationship creation process."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Create relationship",src:a(4508).Z+"",width:"746",height:"720"})}),"\n",(0,n.jsxs)(t.p,{children:["After creating the relationship, do not forget to select both ",(0,n.jsx)(t.strong,{children:"Don\u2019t summarize"})," and ",(0,n.jsx)(t.strong,{children:"Show items with no data"})," for all columns in the Data and Links sections."]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-relationship-5145c9a5a9820f1413bc9e0f15ae4ff4.png"},3985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-order-c8a889de73d47590612e0f4b31d59fce.png"},1158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/date-eeb99d1b2b857f361e4dfa993fd6039b.png"},3874:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/do-not-summarize-6ce677f95b3918ec3a93230927c216a5.png"},8939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/power-bi-f489ceab3076370d1eece5b894362cf1.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(7294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);