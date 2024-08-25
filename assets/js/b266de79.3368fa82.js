"use strict";(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[5269],{5914:t=>{t.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"polygon-mark","metadata":{"permalink":"/polygon-mark","source":"@site/blog/2024-08-24-polygon-mark/index.md","title":"Polygon mark in Charticulator","description":"The new feature for Charticulator","date":"2024-08-24T00:00:00.000Z","tags":[{"inline":true,"label":"charticulator","permalink":"/tags/charticulator"}],"readingTime":0.5,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"polygon-mark","title":"Polygon mark in Charticulator","authors":["ilfat"],"tags":["charticulator"]},"unlisted":false,"nextItem":{"title":"Markdown and Mermaid Visual","permalink":"/markdown-mermaid-01"}},"content":"### The new feature for Charticulator\\r\\n\\r\\nThis is one of the most significant updates for Charticulator. The mark allows to draw arbitrary shape for data visualization. The polygon support snapping to other marks or parent objects and supports basic styling like rectangle, ellipsis or triangle marks.\\r\\n\\r\\n![polygon](polygon.png)\\r\\n\\r\\nThe mark doesn\'t have a icon yet. But already available for testing in application on [https://ilfat-galiev.im/charticulator/](https://ilfat-galiev.im/charticulator/) page.\\r\\n\\r\\nCurrent limitations:\\r\\n\\r\\n* The mark doesn\'t have internal constraints (no middle points like in line mark)\\r\\n* Rendering in polar coordinates has not implemented yet\\r\\n* The feature has issue with snapping one polygon to another"},{"id":"markdown-mermaid-01","metadata":{"permalink":"/markdown-mermaid-01","source":"@site/blog/2024-08-01-markdown-mermaid/index.md","title":"Markdown and Mermaid Visual","description":"Markdown and Mermaid Visual","date":"2024-08-01T00:00:00.000Z","tags":[{"inline":true,"label":"Mermaid","permalink":"/tags/mermaid"},{"inline":true,"label":"development","permalink":"/tags/development"},{"inline":true,"label":"markdown","permalink":"/tags/markdown"}],"readingTime":0.35,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"markdown-mermaid-01","title":"Markdown and Mermaid Visual","authors":["ilfat"],"tags":["Mermaid","development","markdown"]},"unlisted":false,"prevItem":{"title":"Polygon mark in Charticulator","permalink":"/polygon-mark"},"nextItem":{"title":"Charticulator upcoming updates","permalink":"/charticulator-updates-01"}},"content":"### Markdown and Mermaid Visual\\r\\n\\r\\n![Visual editor preview](./editor-preview.png)\\r\\n\\r\\nThere is POC of the visual for rendering Markdown layout and Mermaid diagrams in Power BI reports.\\r\\n\\r\\nThe visual has built in editor powered by [react-md-editor](https://github.com/uiwjs/react-md-editor) with preview feature.\\r\\n\\r\\nDiagrams rendering powered by [Mermaid](https://mermaid.js.org/)\\r\\n\\r\\nFuture work:\\r\\n\\r\\n* Implement click handlers on nodes\\r\\n* Power BI Data binding to nodes\\r\\n\\r\\nThe preview version of the visual available in Visuals menu (above)\\r\\n\\r\\nDemo:\\r\\n\\r\\n![Preview](markdown-mermaid-demo.gif)"},{"id":"charticulator-updates-01","metadata":{"permalink":"/charticulator-updates-01","source":"@site/blog/2024-07-05-charticulator-updates-01/index.md","title":"Charticulator upcoming updates","description":"Power BI Certification","date":"2024-07-05T00:00:00.000Z","tags":[{"inline":true,"label":"Charticulator","permalink":"/tags/charticulator"},{"inline":true,"label":"development","permalink":"/tags/development"},{"inline":true,"label":"CharticulatorUpdates","permalink":"/tags/charticulator-updates"}],"readingTime":1.32,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"charticulator-updates-01","title":"Charticulator upcoming updates","authors":["ilfat"],"tags":["Charticulator","development","CharticulatorUpdates"]},"unlisted":false,"prevItem":{"title":"Markdown and Mermaid Visual","permalink":"/markdown-mermaid-01"},"nextItem":{"title":"Charticulator documentation","permalink":"/charticulator-docs"}},"content":"### Power BI Certification\\r\\n\\r\\nThe [Charticulator Visual Community (View)](https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.charticulator_visual_community_view?tab=Overview) has passed [the certification](https://learn.microsoft.com/en-us/power-bi/developer/visuals/power-bi-custom-visuals-certified) and will be available for end users in 2-3 weeks.\\r\\n\\r\\n### Popup toast notification\\r\\n\\r\\nThe [Charticulator Visual Community (Editor)](https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.charticulator_visual_community_editor?tab=Overview) shows notification in toast when chat saves in visual settings.\\r\\n\\r\\n![Popup toast notification](./chart_saved_toast.gif)\\r\\n\\r\\n### Scale editor popup\\r\\n\\r\\nIssue with scale editor popup on click on scale has been partially fixed. When user clicks on scale name on Scales list panel editor opens Scale editor.\\r\\n\\r\\n![Scale editor popup](./scale_editor_popup.gif)\\r\\n\\r\\n## Columns highlight fixed partially\\r\\n\\r\\nThe visual passed highlight columns correctly. Highlight controls was added into visual settings.\\r\\n\\r\\n![Highlight settings](./highlight-settings.png)\\r\\n\\r\\nThe visual enabled the highlight settings for editor if template contains highlight columns.\\r\\n\\r\\n![Highlights demo](./highlight_fixed_partially.gif)\\r\\n\\r\\nTODO: need to implement case when highlight disabled and visual doesn\'t filter category values.\\r\\n\\r\\n## Attribute panel\\r\\n\\r\\nAttribute panel has border lines for each  group of properties.\\r\\n\\r\\n![Attribute panel](./attribute-panel-grouping.png)\\r\\n\\r\\n## Fixing issue with sorting axes data in plot segment\\r\\n\\r\\nThe sorting axis value by another colum works now\\r\\n\\r\\n![Sorting demo](./sorting.gif)\\r\\n\\r\\n## Importing chat templates fixed\\r\\n\\r\\nThe visual supports importing templates in edit mode.\\r\\n\\r\\n![Import button](./import.png)\\r\\n\\r\\n![Import demo](./import.gif)\\r\\n\\r\\n## Bind data button icon\\r\\n\\r\\nThe icons of data binding button has been fixed\\r\\n\\r\\n![Bind data button](./bind-data.png)\\r\\n\\r\\n## Chart attributes search\\r\\n\\r\\nThe issue, when chart attributes doesn\'t filters properly, has been fixed\\r\\n\\r\\n## Dataset and Glyph/Attributes panels are collapsible\\r\\n\\r\\nIt brings more space for editing the chart.\\r\\nData can be bind to properties on Attributes panel. It\'s not necessary to have Dataset panel always visible\\r\\n\\r\\n![Collapsible panels](./collapsible-panels.gif)\\r\\n\\r\\n## Downloads\\r\\n\\r\\nYou can download the latest development version in Visuals menu of blog\\r\\n\\r\\n![Visuals menu](./visuals.png)"},{"id":"charticulator-docs","metadata":{"permalink":"/charticulator-docs","source":"@site/blog/2024-07-01-charticulator-docs/index.md","title":"Charticulator documentation","description":"The Charticulator documentation has been partially moved to the doc section of the website.","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":true,"label":"Charticulator","permalink":"/tags/charticulator"},{"inline":true,"label":"documentation","permalink":"/tags/documentation"},{"inline":true,"label":"development","permalink":"/tags/development"}],"readingTime":0.165,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"charticulator-docs","title":"Charticulator documentation","authors":["ilfat"],"tags":["Charticulator","documentation","development"]},"unlisted":false,"prevItem":{"title":"Charticulator upcoming updates","permalink":"/charticulator-updates-01"},"nextItem":{"title":"Charticulator Visual (View)","permalink":"/charticulator-view"}},"content":"The Charticulator documentation has been partially moved to [the doc section of the website](/docs/category/charticulator/).\\r\\n\\r\\nThe original source documentation is available in the [github repository](https://github.com/microsoft/charticulator.com). It was deployed to [https://charticulator.com/docs/](https://charticulator.com/docs/), which is now unavailable."},{"id":"charticulator-view","metadata":{"permalink":"/charticulator-view","source":"@site/blog/2023-12-11-charticulator-view/index.md","title":"Charticulator Visual (View)","description":"The first version of the visual for rendering Charticulator templates has been published in AppSource","date":"2023-12-11T00:00:00.000Z","tags":[{"inline":true,"label":"powerbi","permalink":"/tags/powerbi"},{"inline":true,"label":"charticulator","permalink":"/tags/charticulator"},{"inline":true,"label":"datavisualization","permalink":"/tags/datavisualization"}],"readingTime":1.865,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"charticulator-view","title":"Charticulator Visual (View)","authors":["ilfat"],"tags":["powerbi","charticulator","datavisualization"]},"unlisted":false,"prevItem":{"title":"Charticulator documentation","permalink":"/charticulator-docs"},"nextItem":{"title":"HTML/SVG/Handlebars Visual","permalink":"/handlebars-powerbi-01"}},"content":"The first version of the visual for rendering Charticulator templates has been published in [AppSource](https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.charticulator_visual_community_view) \\r\\n\\r\\n![AppSource search result for Charticulator word](./appsource-search.png)\\r\\n\\r\\nThe editor version of the visual available on [GitHub repository page](https://github.com/zBritva/charticulator-visual-community/tree/master/charticulator-visual/docs) or by [direct link](charticulatorVisualCommunity_EDITOR.1.0.5.0.pbiviz)\\r\\n\\r\\n## Getting started\\r\\n\\r\\nTo use the visual, you need to create a new chart using either the old Charticulator or a visual with an editor, or import a template that you have (or took from https://charticulator.com/gallery/index.html). \\r\\n\\r\\nYou also can use [The New Charticulator App](https://ilfat-galiev.im/charticulator/) to create chart templates.\\r\\n\\r\\n![The New Charticulator App](app.png)\\r\\n\\r\\nit\'s not recommend to use [Old Charticulator App](https://charticulator.com/app/index.html) because it doesn\'t include new features and bug fixes.\\r\\n\\r\\nTo import the template, create instance of the new visual, assign data from Power BI and switch the visual to edit mode by click on \\"Edit\\" on visual menu. You should see button to import the template, click on it and select template file. The visual saves the template in settings immediately.\\r\\n\\r\\n![Importing template](import.png)\\r\\n\\r\\nClick on \\"Back to report\\" to exit from edit mode.\\r\\n\\r\\nThe visual shows the chart built from template if the visual has all data for template, otherwise it requires to provide columns mapping between data columns and template columns. In this case set column mappings and confirm by clicking on \\"Confirm\\".\\r\\n\\r\\n![Mapping Power BI columns to template columns](./mapping.png)\\r\\n\\r\\nAfter that visual should show the chart built from template and data assigned from Power BI.\\r\\n\\r\\n![Visual sample](view-example1.png)\\r\\n\\r\\nTo build the chart from scratch, create instance of the visual and assign data, then switch the visual to old Charticulator visual or to the new Charticulator with editor.\\r\\n\\r\\nAfter that click on \\"Edit\\" in visual menu to switch the visual to editor mode, it launches the Charticulator App for plotting new chart. \\r\\n\\r\\nSave the chart and close editor by click on \\"Back to report\\", the editor version of the visual will show preview version of chart.\\r\\n\\r\\nTo save the chart switch back to the view version of the visual and save a report. The visual with editor will not work in Power BI services in view mode of the report.\\r\\n\\r\\n![Switching the visual to View version](switch-visual.png)\\r\\n\\r\\n# Next steps\\r\\n\\r\\nIf you have an idea or suggestions, feel free to open a [discussion on the GitHub repository page](https://github.com/zBritva/charticulator-visual-community/discussions)"},{"id":"handlebars-powerbi-01","metadata":{"permalink":"/handlebars-powerbi-01","source":"@site/blog/2023-11-27-handlebars-powerbi-01/index.md","title":"HTML/SVG/Handlebars Visual","description":"Here\'s a brief description of what I want to offer to the Power BI community. There may be a need for a visual that would allow the use of HTML and SVG to layout content in Power BI reports using data from Power BI. Yes, AppSource already has visuals that offer these solutions. But all of them load HTML content through data.","date":"2023-11-27T00:00:00.000Z","tags":[{"inline":true,"label":"powerbi","permalink":"/tags/powerbi"},{"inline":true,"label":"handlebars","permalink":"/tags/handlebars"},{"inline":true,"label":"datavisualization","permalink":"/tags/datavisualization"},{"inline":true,"label":"html","permalink":"/tags/html"},{"inline":true,"label":"svg","permalink":"/tags/svg"}],"readingTime":1.92,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"handlebars-powerbi-01","title":"HTML/SVG/Handlebars Visual","authors":["ilfat"],"tags":["powerbi","handlebars","datavisualization","html","svg"]},"unlisted":false,"prevItem":{"title":"Charticulator Visual (View)","permalink":"/charticulator-view"},"nextItem":{"title":"PlotlyJS Visual by Akvelon","permalink":"/plotlyjs-visuals-172"}},"content":"Here\'s a brief description of what I want to offer to the Power BI community. There may be a need for a visual that would allow the use of HTML and SVG to layout content in Power BI reports using data from Power BI. Yes, AppSource already has visuals that offer these solutions. But all of them load HTML content through data.\\r\\n\\r\\nThe video shows the process of using two visual objects to create a simple table.\\r\\n\\r\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/QpSfZvts_FE?si=T3rcsc328fOYFZbi\\" title=\\"HTML/SVG/Handlebars Visual demo on YouTube\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\r\\n\\r\\nThe idea is very simple, I already have a visual that has the Monaco editor built in, with syntax highlighting and autocomplete. The second visual will display the [handlebarsjs](https://handlebarsjs.com/) template, which is created using the editor. The templateizer allows you use [handlebars expressions](https://handlebarsjs.com/guide/#what-is-handlebars) to use the data in the resulting output.\\r\\n\\r\\nExample Handlebars expression\\r\\n\\r\\n`<p>{{there can be Power BI data}}</p>`\\r\\n\\r\\ngives us an HTML paragraph element with data from Power BI.\\r\\n\\r\\nIn the video, I use another example similar to the following one:\\r\\n\\r\\n```html\\r\\n<p>Title</p>\\r\\n<p>Rows: {{table.rows.length}}</p>\\r\\n<table>\\r\\n  {{#each table.columns}}\\r\\n    <th>{{this.displayName}}</th>\\r\\n  {{/each}}\\r\\n  {{#each table.rows}}\\r\\n    <tr>\\r\\n\\t\\t<td>{{this.Country}}</td>\\r\\n        <td>{{this.[ Sales]}}</td>\\r\\n        <td>{{this.Date}}</td>\\r\\n\\t </tr>\\r\\n  {{/each}}\\r\\n</table>\\r\\n```\\r\\n\\r\\nThe `table` object contains data in the form of a table passed from Power BI to visual.\\r\\n\\r\\nI use the `{{table.rows.length}}` expression to get the number of rows. In the output, instead of `{{{table.rows.length}}`, the templating engine outputs the value. And it is dynamic, it updates the value when the data changes.\\r\\n\\r\\nHandlebarsjs has [custom helpers](https://handlebarsjs.com/guide/#custom-helpers) that allows developers provide custom functionality. I used it to provide [D3.js formatting features](https://d3js.org/d3-format).\\r\\n\\r\\nYou can use `format` and `timeFormat` functions to formad numbers and date.\\r\\n\\r\\n```html\\r\\n<tr>\\r\\n    <td>{{this.Country}}</td>\\r\\n    <td>{{format this.[ Sales] \'.1f\'}}</td>\\r\\n    <td>{{timeFormat this.Date \'%Y.%m.%d\'}}</td>\\r\\n</tr>\\r\\n```\\r\\n\\r\\nOutput of template:\\r\\n\\r\\n![Template output with formatted numbers and dates](./visual_output.png)\\r\\n\\r\\nTry it for yourself:\\r\\n\\r\\n[Power BI Visual Editor](https://appsource.microsoft.com/en-US/product/PowerBIVisuals/ilfatgaliev1696579877540.editorvisual)\\r\\n\\r\\n[HTML/SVG/Handlebars Visual](./handlebarsVisual.1.0.0.0.pbiviz)\\r\\n\\r\\nHTML/SVG/Handlebars Visual is not 100% ready, there is no error output in the UI, to understand what is wrong you need to use browser DevTools if your template is not working.\\r\\n\\r\\nDon\'t forget switch the target visual and schema for Power BI Visual Editor:\\r\\n\\r\\n![Editor settings](./editor.png)\\r\\n\\r\\nI\'m currently experimenting with adding functions from D3.js, such as scale and axes.\\r\\n\\r\\nWould love to hear your opinion, you can connect with me on [LinkedIn](https://www.linkedin.com/in/ilfat-galiev/)"},{"id":"plotlyjs-visuals-172","metadata":{"permalink":"/plotlyjs-visuals-172","source":"@site/blog/2023-11-24-plotlyjs-visual-173/index.md","title":"PlotlyJS Visual by Akvelon","description":"Today the 1.7.3 update for PlotlyJS Visual by Akvelon has been approved by AppSource. Here I want to tell you about some small but important changes.","date":"2023-11-24T00:00:00.000Z","tags":[{"inline":true,"label":"powerbi","permalink":"/tags/powerbi"},{"inline":true,"label":"plotly","permalink":"/tags/plotly"},{"inline":true,"label":"datavisualization","permalink":"/tags/datavisualization"}],"readingTime":2.98,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"plotlyjs-visuals-172","title":"PlotlyJS Visual by Akvelon","authors":["ilfat"],"tags":["powerbi","plotly","datavisualization"],"unlisted":false},"unlisted":false,"prevItem":{"title":"HTML/SVG/Handlebars Visual","permalink":"/handlebars-powerbi-01"},"nextItem":{"title":"Charticulator app deployment","permalink":"/charticulator-deployment"}},"content":"Today the 1.7.3 update for [PlotlyJS Visual by Akvelon](https://appsource.microsoft.com/en-us/product/power-bi-visuals/akvelon.plotlyjsvisualbyakvelon?tab=DetailsAndSupport) has been approved by AppSource. Here I want to tell you about some small but important changes.\\n\\n## Internal refactoring the code of the visual\\n\\nThe first version was developed in a tight timeframe of 2 weeks. Since the idea was only to combine Chart Studio and Plotly.js visualization library, the internal code was very hard to read. The useState provided by the React library was used for state management, [changes passed by Power BI to the `update`](https://learn.microsoft.com/en-us/power-bi/developer/visuals/power-bi-visuals-concept) function were passed to the React component via [`forwardRef`](https://react.dev/reference/react/forwardRef).\\n\\nIn version 1.7.3, the Redux Toolkit was added for state management, making the code much easier to understand and maintain.\\n\\n## Save button moved to left panel\\n\\nThe \\"Save\\" button has been moved to the left panel next to the \\"Get In Touch\\" button. Initially, after making changes through the visual editor, it was always necessary to go to the text editor to save the changes\\n\\n![PlotlyJS visual save button screenshot on the left panel](./save_button.png)\\n\\n## Button to save current position of camera\\n\\nAdded \\"Save Camera\\" button to copy current camera coordinates to JSON schema.\\n\\n![The \\"Save camera\\" button on the visual](./save_camera.png)\\n\\nThis makes it faster and easier to set coordinates for the camera, and the camera does not return to the default position during the next visualization.\\n\\n## License error notification banner added\\n\\nAdded a descriptive notification banner with a link to a paid visualization feature.\\n\\nYou can remove the banner by turning off the paid functionality in the viewer\'s settings (Settings => Plotly.js properties => Power BI tooltips) or by [purchasing a subscription](https://appsource.microsoft.com/en-us/marketplace/checkout/akvelon.plotlyjsvisualbyakvelon?tab=Overview) on Microsoft Office 365 page.\\n\\n![License error notification banner](./license_error.png)\\n\\nYou buy Power BI\'s tooltip functionality, while the visualization itself is free.\\n\\nYou must purchase a license for each report user, regardless of role (report author or consumer).\\n\\nThere are only 2 subscription options at the moment:\\n\\n* Annual plan\\n* Monthly plan\\n\\nThe paid feature is available to everyone in the following environments:\\n\\n* Embedded - Publish To Web, PaaS embed\\n* National/Regional clouds (Depends on general support for transactability in national/regional clouds)\\n* RS Server\\n* Exporting (PDF\\\\PPT) using REST API \\n\\nIf you still have questions, [please contact Akvelon Inc. support](https://akvelon.com/contact-us/?category=Power+BI+Custom+Visuals&product=PlotlyJS+visual+(PBI+certified)).\\n\\n## Add loading segments by 30k rows instead loading all data per update\\n\\nVisuals supports visualization of one thousand data points by default. But this can be changed by the developer in the settings to load thirty thousand data points.\\n\\nBut if even that isn\'t enough, Power BI provides a [Fetch more data API](https://learn.microsoft.com/en-us/power-bi/developer/visuals/fetch-more-data) for visuals that allows you to download more data (but no more than 100MB).\\n\\nPower BI can provide data:\\n\\n* All at once, each time increasing the data portion by thirty thousand (30k, 60k, 90k e.t.c.).\\n* By segments, shifting window of 30k data points\\n\\nThe first approach was already supported by this visual, starting with this version the second option is also supported\\n\\nTo use the new features, set the following settings:\\n\\n![Aggregaate segmetns settings](./aggregate_segments.png)\\n\\nAnd add buttons to shift the segments into `layout` settings of JSON schema:\\n\\n```json\\n{\\n  \\"layout\\": {\\n    \\"updatemenus\\": [\\n      {\\n        \\"buttons\\": [\\n          {\\n            \\"args\\": [\\n              {\\n                \\"aggregateSegments\\": false\\n              }\\n            ],\\n            \\"label\\": \\"Previous\\",\\n            \\"method\\": \\"loadPrevSegment\\",\\n            \\"name\\": \\"loadPrevSegment\\"\\n          },\\n          {\\n            \\"args\\": [\\n              {\\n                \\"aggregateSegments\\": false\\n              }\\n            ],\\n            \\"label\\": \\"Next\\",\\n            \\"method\\": \\"loadNextSegment\\",\\n            \\"name\\": \\"loadNextSegment\\"\\n          }\\n        ],\\n        \\"type\\": \\"buttons\\"\\n      }\\n    ]\\n  }\\n}\\n```\\n\\nExample of a chart with buttons to shift segments:\\n\\n![Rendering 30k data points segments by segments](./data-pagination.gif)\\n\\nI hope these changes find applications in providing reports in Power BI for you and your clients."},{"id":"charticulator-deployment","metadata":{"permalink":"/charticulator-deployment","source":"@site/blog/2023-11-14-charticulator/index.md","title":"Charticulator app deployment","description":"Since the version of Charticulator from Microsoft is retiring, I decided to deploy to GitHub Pages the latest version with fixes and some new functionality. Unfortunately all this new stuff is not included in the Power BI Visual. In the next 2 months I plan to prepare alternative versions of visuals.","date":"2023-11-14T00:00:00.000Z","tags":[{"inline":true,"label":"powerbi","permalink":"/tags/powerbi"},{"inline":true,"label":"charticulator","permalink":"/tags/charticulator"},{"inline":true,"label":"datavisualization","permalink":"/tags/datavisualization"}],"readingTime":0.55,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"charticulator-deployment","title":"Charticulator app deployment","authors":["ilfat"],"tags":["powerbi","charticulator","datavisualization"]},"unlisted":false,"prevItem":{"title":"PlotlyJS Visual by Akvelon","permalink":"/plotlyjs-visuals-172"},"nextItem":{"title":"Charticulator visual","permalink":"/charticulator-visual"}},"content":"Since the version of Charticulator from Microsoft is retiring, I decided to deploy to [GitHub Pages](https://zbritva.github.io/charticulator/) the latest version with fixes and some new functionality. Unfortunately all this new stuff is not included in the Power BI Visual. In the next 2 months I plan to prepare alternative versions of visuals.\\r\\n\\r\\n![Charticulator app](./charticulator-app.png)\\r\\n\\r\\nThe first stage is practically accomplished. In which I upgrade the UI library to Fluent UI 9. Since the first version doesn\'t work with React 18+ fully.\\r\\n\\r\\nThe upcoming work is fixing critical bugs in the current version of the visual, which block the implementation of the full cycle of chart development in the Power BI report."},{"id":"charticulator-visual","metadata":{"permalink":"/charticulator-visual","source":"@site/blog/2023-11-6-charticulator-visual/index.md","title":"Charticulator visual","description":"It past a year after the first attemp to give breath Charticulator visual. I didn\'t get any feedback on the first version at the time, neither bad, good, or error message, but they were there.","date":"2023-11-06T00:00:00.000Z","tags":[{"inline":true,"label":"powerbi","permalink":"/tags/powerbi"},{"inline":true,"label":"charticulator","permalink":"/tags/charticulator"},{"inline":true,"label":"datavisualization","permalink":"/tags/datavisualization"}],"readingTime":1.3,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"charticulator-visual","title":"Charticulator visual","authors":["ilfat"],"tags":["powerbi","charticulator","datavisualization"]},"unlisted":false,"prevItem":{"title":"Charticulator app deployment","permalink":"/charticulator-deployment"},"nextItem":{"title":"Welcome","permalink":"/"}},"content":"It past a year after the first attemp to give breath Charticulator visual. I didn\'t get any feedback on the first version at the time, neither bad, good, or error message, but they were there.\\r\\n\\r\\nHere\'s a second attempt. I will have the opportunity to publish a version on AppSource, I think it should help to find the old audience.\\r\\n\\r\\nI forked the Charticulator source to my repository on GitHub, which is used internally by the new visual.\\r\\n\\r\\n[https://github.com/zbritva/charticulator](https://github.com/zbritva/charticulator)\\r\\n\\r\\nIt already contains fixes and features that were not included in the original.\\r\\n\\r\\nEditor is avialable for preview on [https://ilfat-galiev.im/charticulator/](https://ilfat-galiev.im/charticulator/).\\r\\n\\r\\n**And, yes, there is no httpS. Do not use for production**\\r\\n\\r\\nThe source code for the new visual has been published on Github:\\r\\n\\r\\n[https://github.com/zBritva/charticulator-visual-community](https://github.com/zBritva/charticulator-visual-community)\\r\\n\\r\\n## The main difference from orginal Charticulator\\r\\n\\r\\nThe visual will be split into two parts. The first includes the Charticulator editor UI. The second includes only engine to render charts.\\r\\n\\r\\nReport authors will have to use one visual to edit the chart and switch to the second visual before saving the report.\\r\\n\\r\\nThis approach allows:\\r\\n\\r\\n* significantly decrease the package size.\\r\\n* easier to obtain certification for the second, because less code for review.\\r\\n* Keeping the first (editorial) version uncertified opens your hands for more technical possibilities, (downloading from the gallery or moving part of the editor code to CDN and so on).\\r\\n\\r\\n## Community\\r\\n\\r\\nFell free to open any [discussion on GitHub](https://github.com/zBritva/charticulator-visual-community/discussions), even it is about closing.\\r\\n\\r\\nThe road map is stabilization and close workflow of the visual. Then submitting the first versions to AppSource."},{"id":"/","metadata":{"permalink":"/","source":"@site/blog/2023-11-3-welcome/index.md","title":"Welcome","description":"Welcome to my blog!","date":"2023-11-03T00:00:00.000Z","tags":[{"inline":true,"label":"hello","permalink":"/tags/hello"},{"inline":true,"label":"experience","permalink":"/tags/experience"},{"inline":true,"label":"development","permalink":"/tags/development"}],"readingTime":0.77,"hasTruncateMarker":false,"authors":[{"name":"Ilfat Galiev","title":"Software Engineer","url":"https://www.linkedin.com/in/ilfat-galiev/","imageURL":"https://avatars.githubusercontent.com/u/10897951?v=4","key":"ilfat"}],"frontMatter":{"slug":"/","title":"Welcome","authors":["ilfat"],"tags":["hello","experience","development"]},"unlisted":false,"prevItem":{"title":"Charticulator visual","permalink":"/charticulator-visual"}},"content":"Welcome to my blog!\\n\\nHere I will be talking about my journey into the world of software development. Even though I started working in the Tech field a long time ago, I think it\'s never too late to start telling my story.\\n\\nI\'m 10+ year experience implementing UI with JavaScript/TypeScript, HTML/CSS and frameworks (React.js, Redux, ExtJS,Angular), moreover experienced in C#, .Net and Node.js for backend development.\\n\\n* Certified LookerML Developer and Power BI Data Analyst Associate\\n* Led the entire project as project manager and solution architect with a 6-person development team.\\n* Implemented a converter of query results into .Net objects, which accelerated code writing by 50%.\\n* Implemented 5 complex Power BI plugins for data visualization.\\n\\nAnd I\'m obsessed with developing Power BI visualization.\\n\\nI hope you find the blog useful.\\n\\nShort content overview:\\n\\n* [Recent updates about Charticulator visual](/charticulator-updates-01)\\n* [Charticulator documentation](/docs/charticulator/intro.md)\\n* [Apache EChart Visual documentation](/docs/echarts-visual/)\\n* [HTML/SVG/Handlebars Visual documentation](/docs/handelbars-visual/)"}]}}')}}]);