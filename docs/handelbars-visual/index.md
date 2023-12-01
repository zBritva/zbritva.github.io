---
sidebar_position: 3
---

# HTML/SVG/Handlebars Visual

The visual uses Handlebars.js to render template and bind data from Power BI. Read mode about [Handlebars.js](https://handlebarsjs.com/guide/) before start.

## Getting Started 

TBD

## Handlebarsjs defined context

`table`,

`viewport` 

## Visual helpers

### Variable (val)

Syntax:

`{{ var '<name>' <value>}}`

Defines variable or constant that can be used in expressions

Example:

`{{ var 'margin' 30}}`

Defines variable with name 'margin'

### Value

Syntax: 

`{{val 'margin'}}`

Reads value of defined variable.

Example:

`{{val 'margin'}}`

### Sum of two numbers (sum)
### Subtraction of two numbers (sub)
### Multiplication of two numbers (multiply)
### Division of two numbers (divide)
### Math
### Scale definition (scaleBand, scaleLinear, scaleLog, e.t.c)

Defines D3.js scales. Supported scales list: 

* scaleBand
* scaleLinear
* scaleLog
* scaleOrdinal
* scaleDiverging
* scalePoint
* scaleQuantize
* scalePow
* scaleSequential
* scaleThreshold
* scaleTime
* scaleRadial

### Call scale function (getScale)

### Get scale value for given input (useScale)


### Clears all scales definitions (resetScales)

It's internal helper that calls to remove all scales definitions before render template updates.

### Clears all axes definitions (resetAxes)

It's internal helper that calls before to remove all axes definitions before render template updates.

### Axis definition (axisBottom, axisLeft, axisRight, axisTop)

Defines D3.js axes. Supported axes list: 

* axisBottom
* axisLeft
* axisRight
* axisTop

### Create defined axis (useAxis)

### Formatting numerical values (format)

### Formatting date values (utcFormat, timeFormat)

### Crete array from list of input (array)

### Find minimum of array (min)

### Find maximum of array (max) 

### Get mean of array (mean) 

### Get median of array (median)

### Get sum of values (sums)

### Filter array by value (filter) 


### Clear selections (useSelectionClear)

### Select datapoint (useSelection)

### Get Power BI color palette value (useColor)