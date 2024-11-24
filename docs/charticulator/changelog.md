---
sidebar_position: 20
---

# Visual changelog

|*|Editor|View|
|-|-|-|
|Published|[1.4.2.0](#1420)|[1.5.0.0](#1500)|
|In pipeline|||
|Submitted|[1.5.1.0](#1510)||

Legend:

* Published - version is available for use
* In pipeline - version is approved, but has not reached to all users
* Submitted - version has been submitted for review

## Future plans

* Consider to add Plot Segment with [D3.js Voronoi diagrams layout](https://d3js.org/d3-delaunay/voronoi)
* Add [SVG patterns](https://developer.mozilla.org/docs/Web/SVG/Tutorial/Patterns). Sample is in [old repo](https://github.com/microsoft/charticulator/pull/1044)

## 1.5.1.0

* Add tick format to numerical legend to fix [the issue](https://github.com/zBritva/charticulator-visual-community/issues/41)
* Fix attribute panel [error state after deleting selected mark](https://github.com/zBritva/charticulator/issues/30)
* Fix scale name overlapping on scales panel
* Add [Jitter sub-layout uses PRNG for marks distribution](https://github.com/zBritva/charticulator/pull/73). Marks aren't renders randomly on chart resize
* Treemap, Geo sub-layout [support columns Drag & Drop for data binding](https://github.com/zBritva/charticulator/pull/74)
* Fix [writing of visual settings in Power BI](https://github.com/zBritva/charticulator-visual-community/issues/40)
* Fix [applying Power BI theme colors](https://github.com/zBritva/charticulator-visual-community/pull/45)

## 1.5.0.0

* [Scale editor dialog](https://github.com/zBritva/charticulator/pull/66)
* Fix selection of constraints parent object in Constraint editor
* Fix deleting constraints in Constraint editor
* Add [Treemap sublayout for Plot Segment](https://github.com/zBritva/charticulator/pull/67) with [D3.js Treemap layout](https://d3js.org/d3-hierarchy/treemap)
* Editor updates dataset when Power BI applies filter. (`Update tables` settings in `Editor settings` section of the visual)
* Add [GeoJSON sublayout for Plot Segment](https://github.com/zBritva/charticulator/pull/69) with [D3.js Geo package](https://d3js.org/d3-geo)
* Fix saving visual settings after reloading a report

## 1.4.2.0

* Fix loading Nested Chart editor (Nested Chart was broken in version 1.4.0.0)

## 1.4.1.0

* Splitting capabilities.json into two files to complaint certification requirements

## 1.4.0.0

* [Importing JSON dataset](https://github.com/zBritva/charticulator/pull/62) (ex. [Vega Examples Datasets](https://github.com/vega/vega/tree/main/docs/data))
* Fixed: [numerical input of data range in Polar PS](https://github.com/zBritva/charticulator/pull/63)
* Feature: [Keep text rotation on cartesian coordinates (Allow to exclude text rotation on polar PS depends on angle)](https://github.com/zBritva/charticulator/pull/64)
* Fixed: The editor is not loading when it doesn't have categorical column
* Fixed: The View visual is not loading "Segoe UI Bold" font
* Fixed: Closed polygon mark positioned incorrectly on glyph
* The Editor uses the same export view as application
* Visual supports export to HTML, SVG, PNG, JPG formats. Due to Power BI visual content export API, those formats exports with *.txt file extension.
* Feature: The View visual has export button for template exporting

## 1.3.0.0

* Fixed: Saving chart rewrites axis sorting property by current column.
* Editor option to hide "Editor preview" label.
* View option to hide default template message on loading visual/report.
* Public list of charts/templates to import
* Fixed: font selector label and dropdown layout
* Add "About" into helper menu list

## 1.2.4.0

* Fixed: [Font selector doesn't work](https://github.com/zBritva/charticulator-visual-community/discussions/30).
* Fixed: Constraints list doesn't update in some cases.
* Added link to visual changelog.
* Fixed: [Numerical data sorts as string on axes "Order by" property](https://github.com/zBritva/charticulator-visual-community/issues/32)

## 1.2.3.0

* Fixed: ["Visible On" attribute doesn't work](https://github.com/zBritva/charticulator-visual-community/issues/27) correctly when glyph doesn't have least one other visible mark.
* Links on the visual fixed.
* Fixed: [Scroll bar renders in infinity loop](https://github.com/zBritva/charticulator-visual-community/issues/24).

## 1.2.2.0

* Fixed: [Floating and hide preview label on small size of the visual or after 2 sec](https://github.com/zBritva/charticulator-visual-community/issues/25).

## 1.2.0.0

* Feature: [Polygon mark](https://ilfat-galiev.im/polygon-mark).

## 1.0.15.0

* Fixed: [Problem interpreting numeric formats](https://github.com/zBritva/charticulator-visual-community/issues/22).
* Feature: Constraint editor.
