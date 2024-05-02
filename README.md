# react_converter
What i found was that whenever we are uploading to jsx format from premade libraries like bootstrap and tailwind we need to substitute class with className, for with htmlFor, change the &lt;br> tags to &lt;br/> tags so instead of updating each time, i found a way to convert plain html code into jsx 

# How it works
There are basically 3 files 
1. index.html
2. main.js
3. style.css

## index.html
this file consists of two text areas. one text area for input and the other for output and a button which is responsible for copying the new output file to database. The inputHtml oninput event runs function change() 

## main.js
This file is where the actual js magic happens. this file consists of basically 3 functions
  Copy()
   this consists of navigator.clipboard.writeText(document.getElementById("outputHtml").value)   
   which is further done try catch for client side error handling. 
  setCursorPosition()-> this is for the textarea property, text area didn't work like input so that is the reason why i upgraded this

  change()-> this is where parsing takes place. COncept of TOC was applied here 

## style.css
I have styled somewhat good but maybe not perfect. I feel i could have done better styling. I have just displayed flex. I feel i could still have improved design somehow.

