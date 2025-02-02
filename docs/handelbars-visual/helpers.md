---
sidebar_position: 4
---

# Handlebars helpers

Handlebars lib has [build-in helper functions](https://handlebarsjs.com/guide/builtin-helpers.html). But developer can define own helper functions.

[HTML/SVG/Handlebars](./../handelbars-visual/index.md), [Apache ECharts Visual](./../echarts-visual/index.md), and [Markdown & Mermaid Visual](./../markdown-visual/index.md) have custom helpers.

## Visual helpers

### Variable (val)

Syntax:

`{{ var '<name>' <value>}}`

Defines variable or constant that can be used in expressions

Example:

`{{ var 'margin' 30}}`

Defines variable with name 'margin'

### Value (val)

Syntax: 

`{{val 'margin'}}`

Reads value of defined variable.

Example:

`{{val 'margin'}}`

### Sum of two numbers (sum)

`{{ sum <value1> <value2> }}` - return sum of value1 and value2

Usage:

`{{ sum 30 30 }}` gives output 60.

### Subtraction of two numbers (sub)

`{{ sub <value1> <value2> }}` - substracts value2 from value1

Usage:

`{{ var 'height' (sub viewport.height 30) }}`

JS expression `let height = viewport.height - 30`. It substracts 30 from viewport.height and assigns result to `height` variable.


### Multiplication of two numbers (multiply)

`{{ multiply <value1> <value2> }}` - return sum of value1 and value2

Usage:

`{{ multiply 2 3 }}` gives output 6.

### Division of two numbers (divide)

`{{ divide <value1> <value2> }}` - return result of division of `value1` and `value2` values

Usage:

`{{ var 'rectHeight' (divide viewport.height table.rows.length)}}`

Computes height of bars dividing 'viewport.height' to rows count and assigns result to 'rectHeight' variable.

### Math  functions and constants (math)

Calls math functions for Math object in JS

Usage:

`{{ math 'PI' }}` returns 3.141592653589793

`{{ math 'floor' 2.5 }}` returns 2

### Scale definition (scaleBand, scaleLinear, scaleLog, e.t.c)

Defines D3.js scales. Supported scales list: 

* [scaleBand](https://d3js.org/d3-scale/band)
* [scaleLinear](https://d3js.org/d3-scale/linear)
* [scaleLog](https://d3js.org/d3-scale/log)
* [scaleOrdinal](https://d3js.org/d3-scale/ordinal)
* [scaleDiverging](https://d3js.org/d3-scale/diverging)
* [scalePoint](https://d3js.org/d3-scale/point)
* [scaleQuantize](https://d3js.org/d3-scale/quantize)
* [scalePow](https://d3js.org/d3-scale/pow)
* [scaleSequential](https://d3js.org/d3-scale/sequential)
* [scaleThreshold](https://d3js.org/d3-scale/threshold)
* [scaleTime](https://d3js.org/d3-scale/time)
* [scaleRadial](https://d3js.org/d3-scale/linear#scaleRadial)

`{{ scale<Type> '<name>' <argument 1> <argument 2> <argument 3> ... }}`

Usage:

`{{ scaleBand 'Scale Y' (map 'Country' table.rows) (array 0 (val 'viewport.height'))}}`

[It's equivalent for call in JS](https://d3js.org/d3-scale/band#scaleBand):

`d3.scaleBand(table.rows.map(r => r.Country), [0, viewport.height])`

### Call scale function (getScale)

Gets scale object to call methods.

`{{ getScale <name> <method> <arguments> }}`

Usage:

`height="{{{ getScale 'Scale Y' 'bandwidth' }}}"` gets bandwidth value from `Scale Y` scale 

### Get scale value for given input (useScale)

Creates svg output for scale:

`y="{{{ useScale <name> <domain value> }}}"`

Usage:

`y="{{{ useScale 'Scale Y' this.Country }}}"` returns value for y attribute for given Country name

### Clears all scales definitions (resetScales)

It's internal helper that calls to remove all scales definitions before render template updates.

### Clears all axes definitions (resetAxes)

It's internal helper that calls before to remove all axes definitions before render template updates.

### Axis definition (axisBottom, axisLeft, axisRight, axisTop)

Defines D3.js axes. Supported axes list: 

* [axisBottom](https://d3js.org/d3-axis#axisBottom)
* [axisLeft](https://d3js.org/d3-axis#axisLeft)
* [axisRight](https://d3js.org/d3-axis#axisRight)
* [axisTop](https://d3js.org/d3-axis#axisTop)

`{{ axis<Type> '<axis name>' '<scale name>' }}` creates D3.js axis with given scale.

Usage:

`{{ axisBottom 'axisBottom' 'Scale X' }}` creates [bottom-oriented axi](https://d3js.org/d3-axis#axisBottom) axis.

### Create defined axis (useAxis)

Returns SVG output of D3.js axis.

`{{{ useAxis '<axis name>' }}}`

Usage:

```svg
<g transform="translate({{val 'margin'}}, {{val 'height2'}})">
    {{{ useAxis 'axisBottom' }}}
</g>
```

### Formatting numerical values (format)

`{{ format <value> '<format specification>' }}` applies [D3.js formatting](https://d3js.org/d3-format#d3-format) for value.

Usage:

`{{ format 100.56 '.1f' }}` gives 100.5 output

### Formatting date values (utcFormat, timeFormat)

`{{ utcFormat <value> '<format specification>' }}` applies [D3.js time formatting](https://d3js.org/d3-time-format#d3-time-format) for date value.

Usage:

`{{ utcFormat '2023-05-31T10:04:05.005' '%B %d, %Y' }}` gives May 31, 2023 output

### Crete array from list of input (array)

`{{ array <argument 1> <argument 2>}}` creates array from given arguments.

Usage:

`{{ array 0 1 2 3}}` creates array object with values 0, 1, 2, 3

### Find minimum of array (min)

`{{ min <value1> <value2> }}` returns minimum of two values

Usage:

`{{ min 2 3 }}` returns 2


### Find maximum of array (max)

`{{ max <value1> <value2> }}` returns maximum of two values

Usage:

`{{ max 2 3 }}` returns 3


### Get mean of array (mean) 

`{{ mean <array>}}` returns mean of values.

Usage:

`{{ mean (array 0 1 2 3 4 5 6 7)}}` returns 3.5

### Get median of array (median)

`{{ median <array>}}` returns median of values.

Usage:

`{{ median (array 10 1 2 3 4 5 6 7)}}` returns 4.5

### Get sum of values(sums)

`{{ sums <array>}}` returns sum of values.

Usage:

`{{ sums (array 0 1 2 3 4 5 6 7)}}` returns 28

### Filter array by value (filter) 

`{{ sums <array> '<operator>'}}` returns sum of values.

Operators `==`, `>`, `<`, `>=`, `<=`

Usage:

`{{ filter (array 0 1 2 3 4 5 6 7) 5 '>'}}` returns 6, 7

### Clear selections (useSelectionClear)

`{{{ useSelectionClear }}}` creates click handler on element for clearing selection on click.

Clears current selection for the visual.

Usage:

```svg
<svg width="{{val 'width'}}" height="{{ val 'height' }}" {{{ useSelectionClear }}}>
```

Clears selection on SVG element click.

### Select datapoint (useSelection)

`{{{ useSelection @index}}}` creates click handler on element to perform selection

```svg
    {{#each table.rows}}
        <rect
            {{{ useSelection @index}}}
        >
            ...
        </rect>
    {{/each}}
```

Creates click handler for each rectange element. When user clicks on rectangle call selection with correspond `row`.

### Get Power BI color palette value (useColor)

`{{{ useColor <string> }}}` gets color for given value.

Usage:

```svg
{{#each table.rows}}
    <rect
        ...
        fill="{{{ useColor this.Country }}}">    
    </rect>
{{/each}}
```

returns color from Power BI palette for each country name.

### Equal

Function compares two values and return true if they are equal

```handlebars
`{{ eq <value1> <value2> }}`
```

Example of using in Mermaid.js visual, the link adds only if `Product type` is `Respiratory`.

```mermaid
flowchart TD
{{#each table.rows}}
{{#if (and (eq this.Region "Midwest") (eq this.[Product Type] "Respiratory"))}}
    {{this.Region}} --> markdown["`{{this.[Product Type]}}`"]
{{/if}}
{{/each}}
```

### Not Equal

Function compares two values and return true if they are NOT equal

```handlebars
{{ ne <value1> <value2> }}
```

### Less or equal

Function compares two values and return true if `value1` is less or equal than `value2`

```handlebars
{{ lte <value1> <value2> }}
```

### Greater or equal

Function compares two values and return true if `value1` is greater or equal than `value2`

```handlebars
{{ gte <value1> <value2> }}
```

### Less

Function compares two values and return true if `value1` is less than `value2`

```handlebars
{{ lt <value1> <value2> }}
```

### Greater

Function compares two values and return true if `value1` is greater than `value2`

```handlebars
{{ gt <value1> <value2> }}
```

### And

Logical AND statement

```handlebars
{{ and (gt <value1> <value2>) (lt <value1> <value3>) }}
```

The statement is true if `value1` greater `value2` AND less than `value3`

### Or

Logical OR statement

```handlebars
{{ or (gt <value1> <value2>) (lt <value1> <value3>) }}
```

The statement is true if `value1` greater `value2` OR less than `value3`
