---
slug: charticulator-visual
title: Charticulator visual 
authors: [ilfat]
tags: [powerbi, charticulator, datavisualization]
---

# Charticulator visual. The second attempt to bring breef

It past a year after the first attemp to give breath Charticulator visual. I didn't get any feedback on the first version at the time, neither bad, good, or error message, but they were there.

Here's a second attempt. I will have the opportunity to publish a version on Appsource, I think it should help to find the old audience.

I forked the Charticulator source to my repository on GitHub, which is used internally by the new visual.

[https://github.com/zbritva/charticulator](https://github.com/zbritva/charticulator)

It already contains fixes and features that were not included in the original.

Editor is avialable for preview on [http://zbritva.click/](http://zbritva.click/).

**And, yes, there is no httpS. Do not use for production**

The source code for the new visual has been published on Github:

[https://github.com/zBritva/charticulator-visual-community](https://github.com/zBritva/charticulator-visual-community)

## The main difference from orginal Charticulator

The visual will be split into two parts. The first includes the Charticulator editor UI. The second includes only engine to render charts.

Report authors will have to use one visual to edit the chart and switch to the second visual before saving the report.

This approach allows:

* significantly decrease the package size.
* easier to obtain certification for the second, because less code for review.
* Keeping the first (editorial) version uncertified opens your hands for more technical possibilities, (downloading from the gallery or moving part of the editor code to CDN and so on).

## Community

Fell free to open any [discussion on GitHub](https://github.com/zBritva/charticulator-visual-community/discussions), even it is about closing.

The road map is stabilization and close workflow of the visual. Then submitting the first versions to Appsource.