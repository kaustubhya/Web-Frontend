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

---

L - 5

Specificity of css ->

Most - Inline CSS (1000 specificity)
Then - Internal CSS
Last - External CSS

Basically inline css overrides every css code except ONE

That is when we write a CSS code and use !important with it.

eg.

li {
background-color: green `!important`;
}

Now this will make this code of highest specificity.

Now if we have this scenario:

li {
background-color: green `!important`;
}

li {
background-color: red `!important`;
}

then cascading rule and specificity rule will be applicable again for multiple !important keyword codes.

---

L - 6 CSS Box model

Block level elements cover the full viewport width of the screen like div

Their height and width alters depending on the screen size.

`width` property sets the height and width of the box and fixes it (it does not change according to screen size.)

`width: 500px` : Width and height will remain 500 px and (height) pixels fixed, even if we increase or reduce the browser screen size.

This causes the content to overflow and we get scroll bars in width.

To prevent this overflow, use `max-width`

eg.
`max-width: 500px`
Width here can go below 500 but not more than that, even if we increase the browser size. 🛑🛑 No scrollbars for width here.

`overflow: visible` : default property of overflow

`overflow: hidden` : hides the overflow text

`min-height: 100px` : Minimum height is 100px but if we reduce screen width, the div height will increase here to adjust to small sceens

Also prevents overflow.

🛑🛑 Prefer min and max properties more.

We can also use % instead of px, % -> percent of parent size.

eg.

```
<body>
<div height: 50%>Heloo </div>
</body>

This div does not take 50 % from viewport i.e. browser, it takes 50% from its parent i.e. the tag under which it is nested. Here it is body.


🛑🛑 Default body width = 100% -> Same as browser width.
```

But sometimes, long words give overflow when screens are very small.

Solution -> `word-break: break-all`

Breaks all the long words to fit to the screen size.

🛑🛑 This is not preferred as it makes the text a little bit un-readible.

Avoid using px for giving height and width, use max-width here.

In parent, if we donot give it any width, no problem.

If we use % to give width to child, even if we decrease the browser size, the width in % will adjust to it (the browser width which is now the parent width).

But for same case, if there is no height in px in parent, and we give `height: 50%` in child, height will not reduce in this case.

To see changes, give height in parent in px.

🛑🛑 Height Rule: For % values in child to work, the parent element property values like width and height should be in absolute values like px, em, rem etc.

🛑🛑 padding -> Gives the text in a box, some space to breathe i.e. moves the text away from inner edges.

Padding is a shorthand property i.e.

it has,
padding-bottom
padding-top
padding-left
padding-right
also.

---
