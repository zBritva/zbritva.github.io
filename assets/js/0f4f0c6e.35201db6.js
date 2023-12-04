"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[811],{3560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(5893),s=n(1151);const o={slug:"plotlyjs-visuals-172",title:"PlotlyJS Visual by Akvelon",authors:["ilfat"],tags:["powerbi","plotly","datavisualization"],unlisted:!1},i="PlotlyJS Visual by Akvelon",l={permalink:"/plotlyjs-visuals-172",source:"@site/blog/2023-11-24-plotlyjs-visual-173/index.md",title:"PlotlyJS Visual by Akvelon",description:"Today the 1.7.3 update for PlotlyJS Visual by Akvelon has been approved by Appsource. Here I want to tell you about some small but important changes.",date:"2023-11-24T00:00:00.000Z",formattedDate:"November 24, 2023",tags:[{label:"powerbi",permalink:"/tags/powerbi"},{label:"plotly",permalink:"/tags/plotly"},{label:"datavisualization",permalink:"/tags/datavisualization"}],readingTime:2.98,hasTruncateMarker:!1,authors:[{name:"Ilfat Galiev",title:"Software Engineer",url:"https://www.linkedin.com/in/ilfat-galiev/",imageURL:"https://avatars.githubusercontent.com/u/10897951?v=4",key:"ilfat"}],frontMatter:{slug:"plotlyjs-visuals-172",title:"PlotlyJS Visual by Akvelon",authors:["ilfat"],tags:["powerbi","plotly","datavisualization"],unlisted:!1},unlisted:!1,prevItem:{title:"HTML/SVG/Handlebars Visual",permalink:"/"},nextItem:{title:"Charticulator app deployment",permalink:"/charticulator-deployment"}},r={authorsImageUrls:[void 0]},d=[{value:"Internal refactoring the code of the visual",id:"internal-refactoring-the-code-of-the-visual",level:2},{value:"Save button moved to left panel",id:"save-button-moved-to-left-panel",level:2},{value:"Button to save current position of camera",id:"button-to-save-current-position-of-camera",level:2},{value:"License error notification banner added",id:"license-error-notification-banner-added",level:2},{value:"Add loading segments by 30k rows instead loading all data per update",id:"add-loading-segments-by-30k-rows-instead-loading-all-data-per-update",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Today the 1.7.3 update for ",(0,a.jsx)(t.a,{href:"https://appsource.microsoft.com/en-us/product/power-bi-visuals/akvelon.plotlyjsvisualbyakvelon?tab=DetailsAndSupport",children:"PlotlyJS Visual by Akvelon"})," has been approved by Appsource. Here I want to tell you about some small but important changes."]}),"\n",(0,a.jsx)(t.h2,{id:"internal-refactoring-the-code-of-the-visual",children:"Internal refactoring the code of the visual"}),"\n",(0,a.jsxs)(t.p,{children:["The first version was developed in a tight timeframe of 2 weeks. Since the idea was only to combine Chart Studio and Plotly.js visualization library, the internal code was very hard to read. The useState provided by the React library was used for state management, ",(0,a.jsxs)(t.a,{href:"https://learn.microsoft.com/en-us/power-bi/developer/visuals/power-bi-visuals-concept",children:["changes passed by Power BI to the ",(0,a.jsx)(t.code,{children:"update"})]})," function were passed to the React component via ",(0,a.jsx)(t.a,{href:"https://react.dev/reference/react/forwardRef",children:(0,a.jsx)(t.code,{children:"forwardRef"})}),"."]}),"\n",(0,a.jsx)(t.p,{children:"In version 1.7.3, the Redux Toolkit was added for state management, making the code much easier to understand and maintain."}),"\n",(0,a.jsx)(t.h2,{id:"save-button-moved-to-left-panel",children:"Save button moved to left panel"}),"\n",(0,a.jsx)(t.p,{children:'The "Save" button has been moved to the left panel next to the "Get In Touch" button. Initially, after making changes through the visual editor, it was always necessary to go to the text editor to save the changes'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"PlotlyJS visual save button screenshot on the left panel",src:n(2819).Z+"",width:"613",height:"558"})}),"\n",(0,a.jsx)(t.h2,{id:"button-to-save-current-position-of-camera",children:"Button to save current position of camera"}),"\n",(0,a.jsx)(t.p,{children:'Added "Save Camera" button to copy current camera coordinates to JSON schema.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The &quot;Save camera&quot; button on the visual",src:n(4726).Z+"",width:"795",height:"665"})}),"\n",(0,a.jsx)(t.p,{children:"This makes it faster and easier to set coordinates for the camera, and the camera does not return to the default position during the next visualization."}),"\n",(0,a.jsx)(t.h2,{id:"license-error-notification-banner-added",children:"License error notification banner added"}),"\n",(0,a.jsx)(t.p,{children:"Added a descriptive notification banner with a link to a paid visualization feature."}),"\n",(0,a.jsxs)(t.p,{children:["You can remove the banner by turning off the paid functionality in the viewer's settings (Settings => Plotly.js properties => Power BI tooltips) or by ",(0,a.jsx)(t.a,{href:"https://appsource.microsoft.com/en-us/marketplace/checkout/akvelon.plotlyjsvisualbyakvelon?tab=Overview",children:"purchasing a subscription"})," on Microsoft Office 365 page."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"License error notification banner",src:n(8363).Z+"",width:"762",height:"302"})}),"\n",(0,a.jsx)(t.p,{children:"You buy Power BI's tooltip functionality, while the visualization itself is free."}),"\n",(0,a.jsx)(t.p,{children:"You must purchase a license for each report user, regardless of role (report author or consumer)."}),"\n",(0,a.jsx)(t.p,{children:"There are only 2 subscription options at the moment:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Annual plan"}),"\n",(0,a.jsx)(t.li,{children:"Monthly plan"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The paid feature is available to everyone in the following environments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Embedded - Publish To Web, PaaS embed"}),"\n",(0,a.jsx)(t.li,{children:"National/Regional clouds (Depends on general support for transactability in national/regional clouds)"}),"\n",(0,a.jsx)(t.li,{children:"RS Server"}),"\n",(0,a.jsx)(t.li,{children:"Exporting (PDF\\PPT) using REST API"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If you still have questions, ",(0,a.jsx)(t.a,{href:"https://akvelon.com/contact-us/?category=Power+BI+Custom+Visuals&product=PlotlyJS+visual+(PBI+certified)",children:"please contact Akvelon Inc. support"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"add-loading-segments-by-30k-rows-instead-loading-all-data-per-update",children:"Add loading segments by 30k rows instead loading all data per update"}),"\n",(0,a.jsx)(t.p,{children:"Visuals supports visualization of one thousand data points by default. But this can be changed by the developer in the settings to load thirty thousand data points."}),"\n",(0,a.jsxs)(t.p,{children:["But if even that isn't enough, Power BI provides a ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/power-bi/developer/visuals/fetch-more-data",children:"Fetch more data API"})," for visuals that allows you to download more data (but no more than 100MB)."]}),"\n",(0,a.jsx)(t.p,{children:"Power BI can provide data:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"All at once, each time increasing the data portion by thirty thousand (30k, 60k, 90k e.t.c.)."}),"\n",(0,a.jsx)(t.li,{children:"By segments, shifting window of 30k data points"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The first approach was already supported by this visual, starting with this version the second option is also supported"}),"\n",(0,a.jsx)(t.p,{children:"To use the new features, set the following settings:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Aggregaate segmetns settings",src:n(186).Z+"",width:"224",height:"255"})}),"\n",(0,a.jsxs)(t.p,{children:["And add buttons to shift the segments into ",(0,a.jsx)(t.code,{children:"layout"})," settings of JSON schema:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "layout": {\n    "updatemenus": [\n      {\n        "buttons": [\n          {\n            "args": [\n              {\n                "aggregateSegments": false\n              }\n            ],\n            "label": "Previous",\n            "method": "loadPrevSegment",\n            "name": "loadPrevSegment"\n          },\n          {\n            "args": [\n              {\n                "aggregateSegments": false\n              }\n            ],\n            "label": "Next",\n            "method": "loadNextSegment",\n            "name": "loadNextSegment"\n          }\n        ],\n        "type": "buttons"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Example of a chart with buttons to shift segments:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Rendering 30k data points segments by segments",src:n(1512).Z+"",width:"1266",height:"232"})}),"\n",(0,a.jsx)(t.p,{children:"I hope these changes find applications in providing reports in Power BI for you and your clients."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},186:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aggregate_segments-a1da7429cc3374aafccf532a396ddbf4.png"},1512:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data-pagination-a7626e24c66aad1b10e6fe3061ff7694.gif"},8363:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/license_error-f96f3410f7dbc9112267395a1e209914.png"},2819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/save_button-2960302ded8903c9032dfe0ff78947b3.png"},4726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/save_camera-6ab6e1d656a7dfc774ce1398373fe3e5.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(7294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);