"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[6539],{110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>h,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=a(5893),i=a(1151),r=a(9773),n=a(2799);const o={sidebar_position:4},h="Reusing charts",c={id:"charticulator/reusing_charts",title:"Reusing charts",description:"You can reuse a chart design for differnt datasets either (1) by importing a Charticulator template to the current dataset or (2) by swapping in a new dataset into an existing Charticualtor design session.",source:"@site/docs/charticulator/reusing_charts.mdx",sourceDirName:"charticulator",slug:"/charticulator/reusing_charts",permalink:"/docs/charticulator/reusing_charts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Marks, Glyphs and other objects",permalink:"/docs/charticulator/marks"},next:{title:"Using in Power BI",permalink:"/docs/charticulator/using_in_power_bi"}},l={},d=[{value:"Import a Charticulator Template",id:"import-a-charticulator-template",level:2},{value:"Swap in New Dataset",id:"swap-in-new-dataset",level:2},{value:"Chart Output",id:"chart-output",level:2},{value:"Save to My Charts",id:"save-to-my-charts",level:3},{value:"Download as Chart",id:"download-as-chart",level:3},{value:"Export as Image",id:"export-as-image",level:3},{value:"Export as HTML",id:"export-as-html",level:3},{value:"Charticulator Template",id:"charticulator-template",level:3},{value:"Power BI Custom Visual",id:"power-bi-custom-visual",level:3},{value:"Nested Chart",id:"nested-chart",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"reusing-charts",children:"Reusing charts"}),"\n",(0,s.jsx)(t.p,{children:"You can reuse a chart design for differnt datasets either (1) by importing a Charticulator template to the current dataset or (2) by swapping in a new dataset into an existing Charticualtor design session."}),"\n",(0,s.jsx)(t.h2,{id:"import-a-charticulator-template",children:"Import a Charticulator Template"}),"\n",(0,s.jsxs)(t.p,{children:["Clicking the ",(0,s.jsx)(n.J,{url:"/images/icons/icons-import-template.svg"})," icon in the toolbar will display a file open dialog so that you can select a template file. If the current dataset has all the data columns used (and thus are required) in the template, having the same column name and data type for every column, Charticulator immediately redraws the chart applying the selected template."]}),"\n",(0,s.jsxs)(t.p,{children:["Otherwise, Charticulator opens the ",(0,s.jsx)(t.em,{children:"Map your data"}),' window, asking you to create mappings between the data columns in the current dataset and those used in the template. Once you create all the required mappings, the "Save mapping" button is enabled. For example, a dot plot template created with a mushroom dataset requires three data columns: one for the x-axis (',(0,s.jsx)(t.code,{children:"Odor"}),"), andother for the y-axis (",(0,s.jsx)(t.code,{children:"Surface"}),"), and the third for the color coding (",(0,s.jsx)(t.code,{children:"IsEdible"}),"). For a publication dataset that includes the research area of the paper and the year the paper was published, you can map the x-axis to ",(0,s.jsx)(t.code,{children:"Year"})," and both y-axis and color to ",(0,s.jsx)(t.code,{children:"ResearchArea"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Map you data",src:a(5950).Z+"",width:"1020",height:"430"})}),"\n",(0,s.jsx)(t.p,{children:'Once you click on the "Save mapping" button, you see the chart generated using the template.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Before edit",src:a(6416).Z+"",width:"1250",height:"710"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit the chart to achieve your intended chart design, best matching your dataset. For example, you can change a hard-coded text (e.g., title), the axis ordering, and the legend location & orientation."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"After edit",src:a(1858).Z+"",width:"1700",height:"860"})}),"\n",(0,s.jsx)(t.h2,{id:"swap-in-new-dataset",children:"Swap in New Dataset"}),"\n",(0,s.jsxs)(t.p,{children:["Clicking the ",(0,s.jsx)(n.J,{url:"/images/icons/icons-replace.svg",alt:"Replace icon"})," icon in the Dataset Panel will display a file open dialog so that you can select a new dataset file. If the new dataset has exactly the same structure --- the same number of columns as well as same column name and data type for every column --- Charticulator immediately redraws the chart once the dataset file is selected."]}),"\n",(0,s.jsxs)(t.p,{children:["Otherwise, Charticulator opens the ",(0,s.jsx)(t.em,{children:"Map your data"})," window to allow you to create mappings between the data columns used in the current design and those in the new dataset."]}),"\n",(0,s.jsx)(t.h2,{id:"chart-output",children:"Chart Output"}),"\n",(0,s.jsx)(t.p,{children:"You can reuse your chart design in six ways: (1) save it in the 'My Charts' list within Charticulator, (2) download it as a chart file, (3) export it as an image file, (4) export it as an HTML file, (5) export it as a Charticulator template, and (6) export it as Power BI Custom visual."}),"\n",(0,s.jsx)(t.h3,{id:"save-to-my-charts",children:"Save to My Charts"}),"\n",(0,s.jsxs)(t.p,{children:["You can save chart designs to the 'My Charts' list. Please note that your data and your charts ",(0,s.jsx)(t.strong,{children:"remains local"})," in your browser unless you download them as a chart file."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Save to My Charts",src:a(340).Z+"",width:"950",height:"820"})}),"\n",(0,s.jsx)(t.h3,{id:"download-as-chart",children:"Download as Chart"}),"\n",(0,s.jsxs)(t.p,{children:["Once your chart is saved to the 'My Charts' list, you can open the saved chart or download it as a chart file from the list. To open a saved chart, click the ",(0,s.jsx)(n.J,{url:"/images/icons/icons-open.svg",alt:"Open icon"})," icon at the bottom right corner of the item."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Save to My Charts",src:a(9992).Z+"",width:"640",height:"402"})}),"\n",(0,s.jsxs)(t.p,{children:["You can open the downloaded chart from a different machine. Click the Open Chart button in the Open panel to select the chart file. Please note that a downloaded chart file contains both ",(0,s.jsx)(t.strong,{children:"data"})," and chart design."]}),"\n",(0,s.jsx)(t.h3,{id:"export-as-image",children:"Export as Image"}),"\n",(0,s.jsx)(t.p,{children:"You can export chart designs as images in PNG, JPEG, and SVG format. For the PNG and JPEG formats, you can specify the desired DPI (Dots per inch)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Export as Image",src:a(591).Z+"",width:"870",height:"705"})}),"\n",(0,s.jsx)(t.h3,{id:"export-as-html",children:"Export as HTML"}),"\n",(0,s.jsx)(t.p,{children:"You can export chart designs as an HTML file."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Export as HTML",src:a(3387).Z+"",width:"870",height:"635"})}),"\n",(0,s.jsx)(t.h3,{id:"charticulator-template",children:"Charticulator Template"}),"\n",(0,s.jsx)(t.p,{children:'You can export chart designs as a Charticulator Template, which can be (1) imported to apply the chart design or (2) loaded as a chart component to create a nested chart. Once you click the "Charticulator Template" button at the bottom, a template file is created in JSON format.'}),"\n",(0,s.jsx)(r.J,{url:"/videos/tutorials/tutorial7.mp4",timeToStart:64.67,timeToStop:80}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Export as Image",src:a(7615).Z+"",width:"1115",height:"1640"})}),"\n",(0,s.jsx)(t.h3,{id:"power-bi-custom-visual",children:"Power BI Custom Visual"}),"\n",(0,s.jsxs)(t.p,{children:["You can export chart designs as a Power BI Custom Visual (.pbiviz), which can be imported into Power BI. Check out how you can ",(0,s.jsx)(t.a,{href:"/docs/using-in-power-bi.html",children:"use the chart design in Power BI"}),".\r\nNote that ",(0,s.jsx)(t.strong,{children:"not all"})," chart designs can be exported as a valid custom visual that can be imported into Power BI."]}),"\n",(0,s.jsx)(r.J,{url:"/videos/tutorials/tutorial8.mp4",timeToStart:0,timeToStop:16}),"\n",(0,s.jsx)(t.h2,{id:"nested-chart",children:"Nested Chart"}),"\n",(0,s.jsxs)(t.p,{children:["Charticulaor allows you to create a ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Small_multiple",children:"small multiple"}),", a series of similar graphs or charts using the same scale and axes, by using a nested chart (or a chart component)."]}),"\n",(0,s.jsxs)(t.p,{children:['You first need to select the "Group by" field of the Plot Semgment before adding the Nested Chart compenent to the ',(0,s.jsx)(t.em,{children:"Glyph Editor"}),"."]}),"\n",(0,s.jsx)(r.J,{url:"/videos/tutorials/tutorial11.mp4",timeToStart:16,timeToStop:19.84}),"\n",(0,s.jsxs)(t.p,{children:['For example, if you want to create a small multiples with 12 months of Boston Weather, choose the "month" from the ',(0,s.jsx)(t.code,{children:"DATE"})," data column. Once the group by is applied, the guides layout within the ",(0,s.jsx)(t.em,{children:"Glyph Editor"})," is updated accordingly."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Group by",src:a(4343).Z+"",width:"1020",height:"890"})}),"\n",(0,s.jsxs)(t.p,{children:["To add a nested chart component to a glyph, you can drag it from the ",(0,s.jsx)(t.em,{children:"Toolbar"})," and drop it into the ",(0,s.jsx)(t.em,{children:"Glyph Editor"}),"."]}),"\n",(0,s.jsx)(r.J,{url:"/videos/tutorials/tutorial11.mp4",timeToStart:21.3,timeToStop:23.8}),"\n",(0,s.jsx)(t.p,{children:"Once a nested chart is added, you can edit it directly or import a Charticulator Template."}),"\n",(0,s.jsx)(r.J,{url:"/videos/tutorials/tutorial11.mp4",timeToStart:24.2,timeToStop:29.7}),"\n",(0,s.jsx)(t.p,{children:"Because a small multiple typically needs larger space than a single chart, it is a good idea to increase the chart size before editing the nested chart."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Nested Chart",src:a(7591).Z+"",width:"480",height:"435"})}),"\n",(0,s.jsx)(t.p,{children:'When you click on the "Edit Nested Chart..." button, another Chaticulator will open in a new tab. Because the nested chart usually does not need as large margin as a regular chart, it is a good idea to decrease the margins of the chart before you edit the glyph. (The margin between the nested charts can be adjusted in the main Charticulator.)'}),"\n",(0,s.jsx)(t.p,{children:'Unlike the main Charticulator page, the header will have the "Save Nested Chart" button. Whenever you click this button, the main chart will be automatically updated.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Nested Chart Header",src:a(7203).Z+"",width:"799",height:"165"})}),"\n",(0,s.jsx)(t.p,{children:"You can swtich back and forth between the main Charticualtor and the one for the nested chart"})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2799:(e,t,a)=>{a.d(t,{J:()=>i});a(7294);var s=a(5893);const i=e=>{let{url:t,alt:a,size:i}=e;return(0,s.jsx)("img",{src:t,alt:a,width:i??"20px",height:i??"20px"})}},9773:(e,t,a)=>{a.d(t,{J:()=>o});var s=a(7294),i=a(2004),r=a.n(i),n=a(5893);const o=e=>{let{url:t,timeToStart:a,timeToStop:i}=e;const o=s.useRef(),[h,c]=s.useState(!1),[l,d]=s.useState(!1),p=s.useCallback((()=>{}),[o.current,a]),u=s.useCallback((e=>{h&&i&&e.playedSeconds>=i&&c(!1)}),[h,i]),m=s.useCallback((()=>{c(!0),a&&!1===l&&(o.current?.seekTo(a,"seconds"),d(!0))}),[c]);return(0,n.jsx)(r(),{ref:o,playing:h,url:`${t}`,width:"80%",controls:!0,onReady:p,onProgress:u,onPlay:m})}},1858:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/after-edit-e67185c2a1eb8ad53039ed37026b74b8.png"},6416:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/before-edit-c48b4c1899fa0f12a249c3b6e00d4340.png"},7615:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/export-CT-35d5916e5a63bcef5e397972165ebf5e.png"},3387:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/export-html-46f4cb574faede98e4977c6088ba24e1.png"},591:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/export-image-13508fd6158f307205d801eacc59c4dd.png"},4343:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/groupby-63250894a115927620774bf0582db259.png"},5950:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/map-your-data-631f69813666281205ffbc59df77780f.png"},7203:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/nested-chart-header-8a83751e435f70de173133be3f5bf6be.png"},7591:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/nested-chart-25151c49e569aea0db797d80bf9747a5.png"},9992:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/open-chart-738bc72f6e98b92b942347af5cd6c6f3.png"},340:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/save-chart-18e39b3c9ea2335b099c30ca438a2f4c.png"}}]);