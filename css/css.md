CSS L3

Pointers:

font size -> Text Bada Karta hai
font weight -> Text mota karta hai (default size font-weight-400)

selectors in css:
class -> .
id -> #
attribute -> []

eg. (p class='hi')

attribute selector in css file:
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

All this, tag + { property } is called "🛑 css rule"

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

To prevent this overflow, use `max-width`, it will be same in large screen but reduce in small screens.

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

L - 7 CSS Box model 2

Padding: If we give the div element a background color, that color applies to the padding area too.

🛑 Border color by default is the color of the text, to make it visible, we will give it a solid property.
eg,
`border 10px solid`

To override the default border color, mention the color after the solid property
`border 10px solid red`

Now we know that in a box model of css, the structure from inside to outside is as follows:

content > padding > border

now say we give width (of content) = 300 px
padding on all sides = 25 px
border on all sides = 50 px

hence, total width on all sides is -> 300 + 2 x 25 + 2 x 50 => 450px

Now this this called `box-sizing: content-box` and this is the default property.

Now if we give `box-sizing: border-box` our total box width will be 300 (px) original, but our content , padding and border width will all reduce and adjust according to this property to accomodate 300px width.

Suppose you increase the border or padding when the `box-sizing: border-box`, in this case, it will first increase its size by consuming the width of the content. It will keep taking the width until the content width becomes 0. Then if we still increase the border or padding (when border or padding value is more than the overall box width), then our overall box size will increase.

Suppose you increase the border or padding when the `box-sizing: content-box`, in this case, our overall box size will increase from the starting only (no reduction in content width in this case).

So in css we do:

```
* {
  box-sizing: border-box;
}
```

This makes `box-sizing: border-box` to all elements in our css code.

`*` -> This is called Universal CSS Selector (very low specificity (0,0,0))

## Margin

Margin size and width are generally not included in our css box sizing and width (this box includes padding, content and border)

Giving margins does not affect our box's height and width.

By default, there is a bit of a margin by default when we write css code.

To remove this effect do:

```
body {
  margin: 0;
}
```

A good practice is to give body margin = 0 and then we give our own margin to tags.

`border-radius` -> Used to give rounded corners / borders

Ellipse => width and height different -> border radius = 50%

Circle => width and height same -> border radius = 50%

When we give width in %, the inner elements compare it to their parent (here if parent has content width, border, padding and margin -> % width only considers the content width as its parent element and resizes according to that.)

🛑If we have a very large image, whose height and width are even greater than the browser width, we can do: width = 100% or any other %. This will make the image smaller and allow it to resize according to their 🛑🛑 Parent element.

Sometimes the image goes out of its parent, i.e. it has some overflow. For that purpose, we do `overflow: hidden;` in the parent element to fit the image element inside of it.

We can also give margins in -ve.

eg. margin-top: 10px -> go 10 px down away from top of parent element.

margin-top: -10px -> go 10 px up towards top of parent element.

🛑Outline - This is same as border and it comes after border and before margin.

Unlike border it does not affect the box sizing when increased or decreased.

Outline syntax is same as the border syntax:

eg.
`outline 5px solid blue`

This will create an outline just after the border.

🛑 Negatives: Sometimes the outline overflows into the other elements when its size becomes too big, i.e. it invades and overlaps with other elements box space.

This was the box model for block level elements like div.

---

L-8 (Box Model 3)

Box model with inline elements

By default, the width and height of span tags is auto, it keeps gradually increasing as we start to fit content inside of it.

In span width and height do not work.

But `padding` works in span as it increases the width and height of the container.

Now the difference between div and span padding is,

- If we give padding to span and we write a div, below it, the span padding will envelop(cover) the div content.

- If we give padding to div and we write a span, below it, the div padding will not envelop(cover), but rather push down the span content.

This is because div is a box and span is not. Div follows box model.

Similar tags that behave just like span tag, like (a).

If we do `border` instead of padding, we will see a similar behaviour in 🛑🛑inline elements.

If we see `margin`, it will only work properly for left and right margins. It will not work properly for top and bottom margins for inline elements.

`outline` also works in a similar manner.

🛑🛑 Now to set the height and width of this, we can use the `display` property.

🛑 use `display: block` to make the span element as a block level element.

This will apply all the height, width, margin, padding etc. to the span element as the block level element.

It will also push the elements down below it instead of covering it.

Say we have 5 span elements and we want to treat it as a block level element, if we do `display: block`, all 5 span elements will come one below the other, behaving like a div.

To make it behave like a span, while we retain the div qualities, do `display: inline-block`

We can now set width, height, margin, border, padding etc. all to these spans.

🛑 Replaced and Non Replaced elements

🛑 Inline tags are of 2 types: Replaced and Non Replaced

Replaced - It has no content in it, the content inside of it has been replaced by some data, eg, image in img tag.

🛑 For img, give either width or height, donot give both to it.

Non Replaced - Those tags which have content inside of them are called Non Replaced elements. like anchor, bold, span, strong, em, i tags.

These behave in span like the cases of a typical span i.e. margin, padding will cover the content below it, width and height do not work.

🛑 Curious case of image, though we can use it as a span but we see that for this all properties work like width, height, margin, padding, border.

It will push the content and not cover it, when used as a span. Hence it is a replaced inline.

Another example of inline replaced is `i-frame`

Eg. to copy any youtube video, right click > copy embed code, (see the pasted result below):

```html
<iframe
  width="750"
  height="480"
  src="https://www.youtube.com/embed/VZuWORIAt9Q"
  title="Summer Internship 2024 | Python &amp; MySQL Training | Day 05 #python  #mysql #training #internship"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
>
</iframe>
```

This way we can play any YT video in our website.

To alter its height and width, do it in css, rather than doing it inside the `iframe` tag.

Another eg of inline replaced is `video` tag

[All Egs](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)

We can also embed a whole website inside an iframe tag, provided that website has no restrictions.

🛑 Ultimately box model works with inline non replaced elements in a pretty weird way, so we can use display property to fix it partially.

`display: none` this hides all the content inside the tag. Same as giving `hidden` attribute in any html tag to hide its contents. All its height width and space also goes away.

🛑 HTML tag attributes have lower specificity than CSS code, so display: none > hidden.

🛑🛑 Display Properties:
diplay: block
diplay: inline
diplay: inline-block
diplay: none
