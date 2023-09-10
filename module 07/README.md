# Module 7 - ScSS

## Stylesheet Preprocessor
* We discussed the fact that when working on an Angular project, we are actually using various compilers that modify our code before serving it to the browser
* We said that CSS is also compiled in Angular
* We talked about the idea of "compiling CSS" and saw that there are several technologies that do that.
    * The most common one is `SASS`
    * It supports 2 syntaxses: `Sass` and `Scss`
    * We saw that `Scss` is a superset of `CSS` which means that each valid `css` file is also a valid `scss` file.
    * Due to this characteristic, `scss` allows us to migrate to `SASS` incrementally.

## The main fatures of `scss`
* We saw that we can define variables using `$xyz:value` syntax
* We saw that atomic values have no "type"
* We saw that there are 2 additional values: lists and maps
    * We define a list by wrapping it with `()` and specifying the values seperated with `,`. For example: `$my-list: (1, 2, 3, 4)`;
    * We define a map the same as list, but the items are key-value pairs. For example: `$my-map: (x: 40, y: 20, z: 30)`
    * We saw that lists and maps may be nested. For example: `$nested-map: (x: 1, y: (1, 2, 3), z: (a: 1, b: 2, c: 3))`;

## at-rules in `scss`
* We saw that "keywords" in `scss` are marked with `@`
* The `@debug` rule allows us to print debug information during compilation
* The `@warn` rule allows us to print out a warning during compilation
* The `@error` rule fails the compilation process and prints out an error message to the console

## Flow control in `scss`
* We saw 3 flow control for example: 
    * `@if @else` to apply a condition
    * `@for` to interate over a counter
    * `@each` to iterate over lists and maps
* We saw how to define resusable functions in `scss` using `@function` and `@return`.


