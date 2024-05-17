CSS L3

Pointers:

font size -> Text Bada Karta hai
font weight -> Text mota karta hai (default size font-weight-400)

selectors in css:
class -> .
id -> #
attribute -> []

eg. (p class='hi')

in css file:
[class] {
color: red;
}

or

[class='hi'] {
color: red;
}

pseudo selectors: eg. hover

h1:hover{
color:yellow;
}

descendent selectors:
li p {
color: red;
}

here p is inside li

CSS L4

🛑🛑 Importance of Cascade in a CSS file (Top to Bottom -> Least Important to Most Important i.e. the importance increases as we go from top to bottom)

css tag {
css property
}

All this, tag + { property } is called "css rule"

Inside a rule, only a property is overridden and not the whole rule if the selectors are same.

Specificity : This decides the priority of CSS selectors

here:

id specificity -> 100 (most)
class specificity -> 010 (2nd)
tag specificity -> 001 (least)

Hover over a tag to check its specificity

Now if 2 same tags have same specifity, check for its cascade rule - Lower one will be more important

To increase specificity even more than an id selector (100):

- Add a Id selector of same tag below it, due to cascading, it will be more important
- Use this:
  #html.html {
  font-size: 32px;
  }

Here we have a tag with same id and class i.e. html. So their specificities add up (100 + 10 = 110) and they become more important than #html

Even more specificity:

li#html.html {
font-size: 32px;
}

li tag with class "html" and id "html" (specificity -> 111) more important than #html.html (110)

Increasing specificities :

#html#html (specificity -> 200)

#html#html#html (specificity -> 300)

like this

---

If we have 2 or more css files linked to an html, the cascading rule says, the lower one (css file) will be more important.

See network tab in inspect in browser to see order of file arrival.

---

Inheritance

(ul styles: color: red
(li fontsize: 32)
(li fontsize: 32)
(li fontsize: 32)
(li fontsize: 32)
)

here all li will inherit the color:red property from ul as they are nested inside ul
