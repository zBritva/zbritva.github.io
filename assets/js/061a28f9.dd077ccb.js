"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[7731],{4346:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(5893),s=n(1151);const r={sidebar_position:7,sidebar_class_name:"_hidden"},o="Constraints editor",i={id:"charticulator/constraint-editor",title:"Constraints editor",description:"Constraint solver is core feature of the Charticulator that responsible for positioning of all objects on canvas.",source:"@site/docs/charticulator/constraint-editor.mdx",sourceDirName:"charticulator",slug:"/charticulator/constraint-editor",permalink:"/docs/charticulator/constraint-editor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_class_name:"_hidden"},sidebar:"tutorialSidebar",previous:{title:"Enterprise DNA",permalink:"/docs/charticulator/tutorials/enterprise-dna"},next:{title:"Visual changelog",permalink:"/docs/charticulator/changelog"}},c={},d=[];function h(t){const e={code:"code",h1:"h1",img:"img",p:"p",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"constraints-editor",children:"Constraints editor"}),"\n",(0,a.jsx)(e.p,{children:"Constraint solver is core feature of the Charticulator that responsible for positioning of all objects on canvas."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Constraints editor",src:n(5627).Z+"",width:"766",height:"821"})}),"\n",(0,a.jsx)(e.p,{children:"Understanding this will help you understand why certain features work the way they do, how to use it to your advantage, and understand the limits of the editor's capabilities."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Snapping text into center of rectangle",src:n(2221).Z+"",width:"287",height:"341"})}),"\n",(0,a.jsxs)(e.p,{children:["On snapping one mark anchor to another mark anchor Charticulator creates constraints that tells to constrains solver that anchor coordinates have to match, so it creates two constrains ",(0,a.jsx)(e.code,{children:"Text1.x = Shape1.cx"})," and ",(0,a.jsx)(e.code,{children:"Text1.y = Shape1.cy"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Text has one anchor point with ",(0,a.jsx)(e.code,{children:"x"})," and ",(0,a.jsx)(e.code,{children:"y"})," attributes. Rectangle has 9 anchor points with attributes ",(0,a.jsx)(e.code,{children:"x"}),", ",(0,a.jsx)(e.code,{children:"x2"}),", ",(0,a.jsx)(e.code,{children:"cx"}),", ",(0,a.jsx)(e.code,{children:"y"}),", ",(0,a.jsx)(e.code,{children:"y2"}),", ",(0,a.jsx)(e.code,{children:"cy"}),". Combination of x and y attributes gives us points on 4 corners, in th middle of each edges and center of rectangle."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Rectangle anchor points",src:n(3529).Z+"",width:"310",height:"352"})}),"\n",(0,a.jsx)(e.p,{children:"Snapping mark by mouse not always allows users to bind one mark to another properly. In the example above, snapping text to Rectangle mark impossible, because points are matches with anchors of Glyph borders. And text binds to Glyph instead Rectangle mark because glyph anchors has higher priority than Rectangle mark."}),"\n",(0,a.jsx)(e.p,{children:"To bind the text mark to center of Rectangle mark need to use constraints editor."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Binding text mark to center of rectangle",src:n(1949).Z+"",width:"928",height:"836"})})]})}function l(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}},1949:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bind-text-rect-001bbaf5d14a348a342087ec8c01f00a.gif"},5627:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/constraints-editor-58cc0750407eaf6296624addf77a8a71.png"},3529:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/rect-anchors-7a3369441266c8717a31709c277be84e.gif"},2221:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/snapping-a9713f4a38481a0943142223e72fbce3.png"},1151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>o});var a=n(7294);const s={},r=a.createContext(s);function o(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);