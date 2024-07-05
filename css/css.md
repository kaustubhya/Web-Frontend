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

---

L - 9 Percentage: The Underestimated CSS Unit | Frontend Bootcamp Hindi | Ep.16

Try not to give width in pixels, always give max-width in pixels else we will get scrollbars.

Or give width in %. It will take width from its parent.

🛑 To give % width to the child, make sure you give parent width in px.

Just like width, padding also takes its values from the parent when given in %.

But it is recommended to give padding in px.

% does not work with borders.

🛑🛑 1em = 16px;

Font size in %, looks for its parent's font size.

🛑 % is a relative property.

🛑 % is related to width when we work with width, margin and padding.

% is related to height when working with height.

🛑 DEFAULT FONT SIZE of tags => 16px / 1em;

When using font-size in %, its font will not go below 6px, when using font-size in px, it can go down to any value. (This is when parent is the body or html tag)

6px is the browser's minimum font size.

Please try it in chrome devtools.

To go below 6px in %, donot let body tag be your parent, let us set or make a parent which has font size in px, say div or section wrapper.

Then we can use % in child and go below 6px.

---

Viewport Height (vh) and ViewPort Width (vw)

[What is The Viewport?](https://www.w3schools.com/css/css_rwd_viewport.asp)
The viewport is the user's visible area of a web page.

The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

This was not perfect!! But a quick fix.

Setting The Viewport
HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.

You should include the following <meta> viewport element in all your web pages:

<meta name="viewport" content="width=device-width, initial-scale=1.0">
This gives the browser instructions on how to control the page's dimensions and scaling.

The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

Here is an example of a web page without the viewport meta tag, and the same web page with the viewport meta tag:

Tip: If you are browsing this page with a phone or a tablet, you can click on the two links above to see the difference.

Size Content to The Viewport
Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally!

So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience.

Some additional rules to follow:

1. Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.

2. Do NOT let the content rely on a particular viewport width to render well - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.

3. Use CSS media queries to apply different styling for small and large screens - Setting large absolute CSS widths for page elements will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.

- 100vw => full device screen width cover

- 50vw => half device screen width cover

🛑🛑 vw and vh does not depend on parent width and height, it takes the height and width directly from the viewport(device screen) width and height.

It is also responsive.

🛑🛑 Try to use min-height for most cases.

---

You'll NEVER Get Confused Again | rem and em Explained in Depth | Frontend Bootcamp Hindi | Ep.17

em -> It gets worked up like this: 1 em = parent font size

Say in parent you gave font size = 3em (48 px)

And in child you gave 2 em, then in child the font size is (2em) (🛑🛑🛑 but in child here 1em of child = 3em of parent(48px))

🛑 So total em of child = 2em (48 px * 2 = 96px or 2*3em = 6em)

We can use em with width also.

🛑🛑 1em = 64px (in width)

This is when parent is the body, to further enhance the em effect, we can put another parent between the body and child and give it an em property.

🛑🛑🛑 When we give font size, it looks up to its parent for em. When we give padding, it looks up to its neighbouring childs elements only for em.

🛑🛑🛑🛑 rem -> This only checks the font size of the root i.e. html.

If we change the html font size, 1 rem = html font size given.

:root and html is same in css

rem related to root.

em related to parent.

---

CSS Positions: Static, Relative, Absolute, Fixed, Sticky Explained | Frontend Bootcamp Hindi | Ep.18

Static is the default position in CSS.

---

position: relative

top 50 -> 50 away from top 0 in downward direction

top -50 -> 50 away from top 0 in upward direction or comes towards top.

top -50px is same as bottom 50px

left +ve => goes rightwards (away from) left
left -ve => comes leftwards (towards) left

right +ve => goes leftwards (away from) right
right -ve => comes rightwards (towards) right

bottom +ve => goes upwards (away from) bottom
bottom -ve => comes downwards (towards) bottom

Now say we encounter such scenario where:

position: relative;
top: 10px;
bottom: 10px;
left: 5px;
right: 5px;

here top and bottom are giving force in equal and opposite direction

here left and right are giving force in equal and opposite direction

So in such case only one of top/bottom and one out of left/right is executed.

---

to apply this feature :

```css
position: relative;
top: 10px;
bottom: 10px;
left: 10px;
right: 10px;
```

use

```css
position: relative;
inset: 5px;
/* Equal spacing */
```

this is same as:

```css
position: relative;
top: 10px;
bottom: 10px;
left: 10px;
right: 10px;
```

---

Here position: static
Nothing (no movement) will happen here

```css
position: static;
top: 10px;
bottom: 10px;
left: 10px;
right: 10px;
```

---

🛑🛑🛑🛑 Position Absolute

When we give an element a position of absolute, whatever space that element was occupying, "vanishes".

That space is then taken by the surrounding elements, due to which we may see overlapping of content.

Basically the absolute element is there but it tells the other people that I am not here, so you can come and occupy my space.

🛑🛑 It is advisable to not set the height of a wrapper container having many elements, we should leave it to the browser.

Now when you give it top: 0px in position absolute, it will stick to the top of the screen (viewport).

Now when top: 50px; -> it comes down 50px from the top of viewport.

Now when left: 50px; -> it goes right 50px from the left edge of viewport.

position: absolute
top: 5px;
left: 5px;

It is 5px down and 5px right from the topleft corner of viewport (0,0)

the right and bottom values are automatically given in by the browser.

if you manually enter the right value (as seen in box model in browser in your code), there will be no change

left 5px is same as right 606.525 px

So now if
top: 5px
left: 5px
right: 5px

then our element will stretch out in left-right direction, being only 5px away from both left and right edge of the viewport.

```css
position: absolute;
top: 5px;
left: 5px;
right: 5px;
bottom: 5px;
```

this is same as

```css
position: absolute;
inset: 5px;
```

Let us see a general layout

```html
<ul>
  <li class="html-element">HTML</li>
  <li class="css-element">CSS</li>
  <li class="js-element">JavaScript</li>
</ul>
```

and

```css
ul {
  position: relative;
}

.css-element {
  background-color: aquamarine;
  position: absolute;
  top: 56px;
  /* bottom: 5px; */
}
```

🛑🛑 Normally css would adjust according to the viewport (this was because viewport position was static) and we did not give any other positions to css's parents

But now ul, a parent of css has a position of relative (anything other than static), so css will now adjust its absolute position, according to the ul (container box). It is now attached to ul box.

If the ul (relative parent) moves top, left, ... etc. All contents inside of it will now move along with it too!!

🛑🛑 Now if

- body position: relative
- ul (no position)
- css position: absolute

so css will now attach itself to the body container as body is parent of ul (grandparent of css).

CSS will now move along with body.

🛑🛑 Now if

- body position: relative
- ul position: relative
- css position: absolute

so css will now attach itself to the ul container.

CSS will now move along with ul.

🛑 Basically CSS (position absolute) will attach itself to the closest(immediate) parent which has position other than static (default).

🛑 If it finds no such parent with a position other than static, it will attach itself to the viewport.

🛑Now if ul container width = 50px but li is asked to go down by giving top: 150px;

Then it can go out of the ul container (it just takes ul container top as a reference (top: 0px;))

---

position fixed

Here an element works just like position absolute but

"It will always be connected to the viewport container top (vh) (as a reference)"

say JS -> position: fixed;

then the JS element is there but it tells the other people that I am not here, so you can come and occupy my space.

🛑🛑🛑 Basically, position absolute and position sticky makes the element go out of the document flow.

---

Position sticky

Position sticky behaves like position relative

Sticky position needs the following 2 properties to work:

- When it is moved top, left, right, bottom. It will not move unless the parent container is big enough for it to move and the parent container should have a scrollbar.

- Child will always be inside the parent in sticky (in relative, child can go outside of the parent).

To give scrollbars:

use: `overflow: scroll`

overflow: scroll has:

- overflow-x: scroll (horizontal motion)
- overflow-y: scroll (vertical motion)
  in it.

overflow-y: scroll (vertical motion) -> priority is given to this since moving vertical is more imp.

This sticky look for overflow: scroll in its parent, if not found then looks to its parent's parent. It keeps doing this until it founds no overflow: scroll in any parent. Finally it goes up and attaches itself to the viewport if no overflow: scroll is found.

eg. sticky is used in making headers which stick to the top even when we scroll down.

just do position: sticky; top: 0 in header.

---

Transform, Translate, Transition, Shadows, Opacity, Alpha Channel | Frontend Bootcamp Hindi | Ep.19

Normally when we use `transform: scale` we are not changing an object's height and width, we are only changing the way we see it. It's like looking through a lens.

Scale increases from the center, it covers the other elements.

To make it grow from any other point, use `transform-origin: 0 0` (it starts growing from 0, 0 -> top left corner of the box)

`transform-origin: 100% 100%` (it starts growing from 100, 100 -> lower right corener of box)

The `a` in rgba is the alpha channel, use it to give the color transparency, 1 -> least transparent 0 -> most transparent

We can also use this for opacity:
`opacity : 1` -> Most opaque
`opacity : 0` -> Least opaque

`alpha channel` makes only background transparent

`opacity` makes both the background and the content inside of it as transparent.

eg. #00802510 -> 10 at end is alpha channel

---

transform: rotate(45deg)

transform: translateX(100px) -> moves 100 px towards right
transform: translateY(100px) -> moves 100 px towards down

It will not push the other contents below, it will only move up, down, left, right

left, -100px -> X
up, -100px -> Y

translateX(100%) -> if box size is 200X300 px, then it will move 200 px (100%) (width) towards right

---

center a div

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%)

---

Giving multiple transform properties at once:

transform: translate(50%, -50%) rotate(45deg) scale(1.5);

---

background : url(image url)

background-size: contain (fits the image according to the div, but if div is larger than image, image may start to repeat)

To stop this, use background-repeat: no-repeat -> This makes the image occur only once but it may leave out some div space if used with contain

🛑🛑 background-size: cover -> This will cover the entire background with image, no spaces left.

We can also give background size in px and %.

background-position-x -> moves image in x direction
background-position-y -> moves image in y direction
background-position: 5px 10px (5 in x & 10 in y)

---

transition: all 500ms;

all -> all properties (not used commonly)

transform: translate(-50%, -50%) rotate(45deg)

hover:
transition: transform 500ms;

transition: transform 500ms scale(1.4)

---

Flexbox: The Inside Story | Flexbox Explained in Depth | Frontend Bootcamp Hindi | Ep.22

When we give content in a div, there are 2 properties:

`width: max-content` - Tries to put all contents in 1 line (width of one line = content width).
`width: min-content` - Tries to put all contents in minimum possible width (width of longest word = 1 line).

To make a flexbox: use `display: flex`

🛑🛑🛑 When we use `display: flex` in inline elements, all of our inline elements become block level elements, and when we use display: flex on block level elements, they stay the same.

🛑🛑 But these block level elements inside the flexbox will occur in a single line. These are now `flex-items` inside the `flex-container`.

Now when we do `display: flex`, we can use height and width on even inline elements such as span as these are now block level flex items.

---

`span p` (span will target all children and grandchilren (nested inside childern) p tags).

`span > p` (span will DIRECTLY target ONLY its children p tags (no grandchildren p tags)).

---

For CSS, use mozilla firefox devtools as they are much better than chrome.

For JS, chrome is good.

Just paste the live server url in the browser.

---

Growing and Shrinking in flexbox => If we have available empty then we can say that the flex-items can grow(when content is added to them).

If no available space then we say that ALL the flex items will shrink in equal proportions (i.e. larger items shrink more fastly than thinner items)

---

Flex Shrink

Now say we have a flexbox and in that flexbox are 3 flex-items A, B, C. Now if we donot want flex-item A to shrink when we reduce the width of the flexbox, we can use:

`flex-shrink: 0` -> This will bring the contents of A in a single straight line and it prevents the flex box from shrinking further.

B and C will keep on shrinking but A does not shrink now.

`flex-shrink: 0.5` if B and C are shrinking by 10%, shrink A by 5% only.

default: `flex-shrink: 1` -> No shrinking

---

`flex-grow` -> This has default value of 0 (no growing)

This works just as opposite of flex-shrink (it will grow those flex items which have this property set).

For A:

`flex-grow: 0` -> This will bring the contents of A in a single straight line, and it tries to grow more by taking up the extra space.

🛑🛑🛑 Flex grow will work only if there is some extra space available.

`flex-grow: 0.5` if B and C are growing by 10%, grow A by 5% only.

Sometimes when the space is available, we can give flex grow 1 to both elements and tell them to distribute the spaces equally among themselves.

💡 Prefer giving flex-shrink over min-width while re-sizing elements.

💡💡 align-items: stretch (Flex items cover the whole height of the flex-container)

Else their height is same as the content height inside of them.

💡💡 Padding and border are included outside of the flex-box.

---

Flexbox: The Missing Pieces | Advance Flexbox Properties Explained | Frontend Bootcamp Hindi | Ep.23

To give equal width to all items in the flexbox, just give width = 100 % to all the flex items.

Or give width = 100% in .parent > \*

eg.

.parent > \* {
width: 100%;

  <!-- Selecting all properties (direct) inside .parent and giving them width: 100% -->

}

🛑 `flex-basis: 400px`

When we gave no width, flex box took base width from the content (default)

When we gave width, flex box took base width from the width.

When we gave flex basis, flex box took base width from this flex basis. (This is most important now).

🛑 eg. .parent span {
`flex-basis: 400px`
}

If we give both width and flex basis, flex basis will get more importance.

If flex-direction: column

Flex basis will now affect the height of the flex item.

(!! Height in % will not work untill its parent has height in some units)

Width vs Flex Basis

The first thing that comes to mind when reading your question is that flex-basis doesn't always apply to width.

When flex-direction is row, flex-basis controls width.

But when flex-direction is column, flex-basis controls height.

Key Differences
Here are some important differences between flex-basis and width / height:

flex-basis applies only to flex items. Flex containers (that aren't also flex items) will ignore flex-basis but can use width and height.

flex-basis works only on the main axis. For example, if you're in flex-direction: column, the width property would be needed for sizing flex items horizontally.

flex-basis has no effect on absolutely-positioned flex items. width and height properties would be necessary. Absolutely-positioned flex items do not participate in flex layout.

By using the flex property, three properties – flex-grow, flex-shrink and flex-basis – can be neatly combined into one declaration. Using width, the same rule would require multiple lines of code.

Browser Behavior
In terms of how they are rendered, there should be no difference between flex-basis and width, unless flex-basis is auto or content.

🛑🛑 We can basically control the height and width of our flex items using flex basis.

(flex-shrink, flex-grow, flex-basis -> All these properties are given to flex items).

---

`flex-wrap` (given to parent) like flex direction, align items, justify content

This will bring elements (flex-items) to a new line rather than shrinking them when viewport width decreases.

`gap: 16px` -> Gives some fixed spaces between 2 adjacent flex items. (to parent).

`gap : row-gap column-gap`

Better than margins for flex items spacing.

```css
.parent > * + * {
  margin-left: 16px;

  /* Give margin to all except the first element */
}
```

---

margin-left: auto - Works well with or without flexbox

margin-right: auto - Works well with or without flexbox

margin-top: auto - Cannot Work well without flexbox
margin-left: auto - Cannot Work well without flexbox

flexbox here means parent should be flex.

🛑🛑🛑🛑🛑🛑 Blocks like p tags have these following margins:

- margin block start aka margin top
- margin block end aka margin bottom

default in flex -> align-items: stretch

🛑🛑🛑🛑 New way => Center a div

```css
.parent {
  display: flex give some height also if you want to stretch the flexbox;
}

.children {
  margin: auto;
}
```

---

margin-block: 0 -> Makes margin top and margin bottom = 0

margin-inline: 0 -> Makes margin left and margin right = 0

Prefer these more ↑ ↑

margin: 0 0 (top-bottom = 0 left-right = 0)

---

`flex-order` -> Used in flex-items to change the order of things.

order:0 (default value)
order:-1 (first element)
order: 1 (last element)

play with these values

---

`align-self: auto` (default)

Used with children to align just one element out of a number of elements in a flex-box

To center in x direction, use margin-inline: auto and use margin-block: auto.

🛑🛑🛑 Shortcut Property

`flex: flex-basis flex-grow flex-shrink`

eg. flex: 100px 2 3;

`flex: 1`

flex-basis => 0%
flex-grow => 1 ✅ (0 => 1)
flex-shrink => 1 (default)

---

`Align-items: baseline`

This is visible when the 2 elements have different font sizes.

When we use align items baseline, the smaller font gets aligned with the larger font's baseline.

(when we use align-items: flex start then both elements get aligned to the top of the parent)

---

`align-content` -> Used with flex wrap when we have multiple lines of content (elements).

✅✅ Flexbox def. => It is a 1D layout method for arranging items in rows / columns (MDN)

(Grid is 2D).

---

Main and Cross Axis

For Row
Main Axis <-->

Cross Axis
↑
↓

For Column

Main Axis
↑
↓

Cross Axis <-->

---

`display: inline-flex`

Unlike flexbox, which covers the whole width of parent, inline flex flexbox parent will only cover the specified width of the children.

We can also put multiple inline flex parent flexbox in a single line if space is available.

(You can use inline flex in our YT header navbar to place things together.)

This makes our elements behave like an inline flexbox.

---

Watch this before learning @media queries | Frontend Bootcamp Hindi | Ep.25

By default, when we print a document, the background color is ignored. This is because a lot of ink is used up for this.

---

Changing Settings during Printouts

```css
@media print {
  .class {
    attributes
  }
}
```

Read & Refer BKL!!
[Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)

---

Media Queries in CSS | Most Important for Responsive Websites | Frontend Bootcamp Hindi | Ep.26

Media query has: media type and (media feature)

media types - all, print, screen

default: media type = all

For screen media there are 2 modes of orientation:

laptop : landscape
mobiles: portrait

media features:

see this:

```css
@media (orientation: portrait) {
  .class {
    properties
  }
}
```

So when we reduce the width of our screen (we go from landscape to portrait), so the above change will show.

---

Combining multiple media features (use `and`):

```css
@media (orientation: portrait) and (width > 400px) {
  .class {
    properties
  }
}
```

---

Latest Style of writing:

```css
@media (max-width: 700px) {
  .class {
    properties
  }
}
```

Apply only when max width is 700 or less

Another ways:

```css
@media (min-width: 700px) {
  .class {
    properties
  }
}
```

```css
@media (min-height: 500px) {
  .class {
    properties
  }
}
```

---

Generally it is not advised to give `overflow: hidden`.

---

Bring Div to Front Without z-index | Stacking Elements and z-index | Frontend Bootcamp Hindi | Ep.29

If we give position property to any element (other than static), it will automatically come on top (irrespective of whether or not you give z index).

If position types are same in all elements, use z index

✅✅✅✅ More z index value => element is more on top

see eg. in 30.00 in video

[HERE IS VIDEO](https://www.youtube.com/watch?v=VDjXE4v-NdQ&list=PLfEr2kn3s-br8gqsHdrIv7F3-AWENtk8m&index=22)

---

Don't use Floats this Way | Floats & Clears Explained in Depth | Frontend Bootcamp Hindi | Ep. 30

`float: left`

Used to place image and wrap text around it.

Float changes almost any element to block elements (given to each child elements).

Float is used with images mostly.

Exceptions:

- flex -> inline-flex (flex)
- grid -> inline grid (grid)

When using floats with images, the image becomes position absolute and it allows the other elements like p tag get below it and take its space.

Float also works in the same way.

🛑🛑 There is however one difference, in float, the text won't go along with image when using float.

🛑🛑 In absolute, the text also goes off alongside the image.

🛑 `clear: left` -> It tells us that do not go along side any floated content. Start from a fresh space and then align to left.

Not used much today.

Problem with floats: Sometimes when screen and image is too large and is set on float, the image may leave the image area, as it is smaller.

To prevent that from happening i.e. to fix it, we will use `display: flow-root` (give it in parent container).

---

CSS Grid is Much Easier Than You Might Think | CSS Grid in Depth | Frontend Bootcamp Hindi | Ep.31

All grid properties with default values:

```css
/* Required to Know */
.container {
  grid-template-rows: none;
  grid-template-columns: none;
  column-gap: normal;
  row-gap: normal;
}

.children {
  grid-column-start: auto;
  grid-column-end: auto;
  grid-row-start: auto;
  grid-row-end: auto;
}

/* Optional to Know */
.container {
  grid-template-areas: none;
  grid-auto-rows: auto;
  grid-auto-columns: auto;
  grid-auto-flow: row;
}
```

Container:
(gave it a min height of 60vh)
`display: grid`

`grid-template-columns: 100px 100px` => Gives us the number of columns (2 columns of 100px horizontal height each)

`grid-template-rows: 150px 150px 150px` => Gives us the number of rows (3 rows of 150px vertical length each)

Shorter Syntax: `grid-template-columns: repeat(5, 100px)`; => 5 columns of 100px each horizontal height

🛑🛑🛑 REPEAT 3 TIMES 100px (YAAD RAKHO)

Grid Items:
If we use a span inside of grid (it default display -> inline, will be automatically changed to display -> block).

If we give a grid cell height and width of 100px X 100px and we give a flex item a width and height of 100px X 100px, we will see that the grid cell's height and width will remain the same and the flex item will position itself accordingly inside the grid container.

If we give a grid cell height and width of 100px X 100px and we give a flex item a width and height of 120px X 120px, we will see that the grid cell's height and width will remain the same and the flex item will start to overflow into the next grid item's space (this is normally not preferred).

When the number of items inside the grid exceed the grid cells in total, then the grid automatically creates a new row with height and width = the items's height and width (if there is space available, else those extra items outside of the grid will be squished in to fit the space).

---

Positioning elements in grid:

Positioning via columns =>

If there are 'n' columns, then there will be 'n+1' column lines.

1st column => between lines 1 and 2

So to position an element in the last column, we give it:

`grid-column-start: 4` -> start the element from line 4

default (`grid-column-start: auto` && `grid-column-end: auto`)

---

Positioning via rows =>

If there are 'n' rows, then there will be 'n+1' row lines.

default (`grid-row-start: auto` && `grid-row-end: auto`)

When we have a single cell, we can expand it using the span attribute:

`grid-column-start: span 3` Starting from column 1, span to 2 column blocks

To move it from 1,1 using span, specify its end

---

gap | column-gap and | row-gap (give in parent)

These gives gaps between grid elements (children).

Unlike flexbox elements, the elements inside the grid will overflow if the gap given is too large between them.

Column pushes other elements behind, row or (row + col) does not do like this (try it out).

---

% in grid

`grid-template-columns: 20% 20% 20% 20%`

`grid-template-columns: repeat(5, 20%)`

covers 80% of the screen with 4 columns

`grid-template-columns: 1fr 1fr`
divide grid into 2 parts (fr -> fractions) (2 columns)

`grid-template-columns: repeat(3, 1fr)`
divide grid into 3 parts (fr -> fractions)
(3 columns)

Normally if we have content, no need to give height (rows height -> auto)

`grid-template-columns: 1fr 3fr 2fr 1fr`
divide grid into 7 parts (fr -> fractions) (4 columns)

Typing both grid-column-start and grid-column-end every time can get tiring. Fortunately, grid-column is a shorthand property that can accept both values at once, separated by a slash.

For example, grid-column: 2 / 4; will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.

---

Unlock Superpowers of CSS Grid | Frontend Bootcamp Hindi | Ep.33

We know that when we use column start, it pushes the other elements after it backwards.

To prevent this, we can use, `grid-auto-flow: row dense`

This will prevent us from creating any extra space.

---

Now say we have 10 elements and we made a grid of 4 columns each having width of 100px then we see that the first 4 elements will have width of 100px but the rest take up random widths to fit in the available space.

To give everyone, equal width of 100px, use

```css
grid-auto-flow: column;
grid-auto-columns: 100px;

/* 10 elements in 1 row (10 columns) each of width 100px */
```

```css
grid-auto-flow: row;
grid-auto-columns: 100px;

/* 10 elements in 1 row (10 columns) each of width 100px */
```

If there is content inside the grid, the grid column width depends on the width of the content.
To fix the width of the column in a grid, use `grid-auto-columns: (width)`

If there is content inside the grid, the grid row height depends on the height of the content.
To fix the height of the row in a grid, use `grid-auto-rows: (height)`

We can use:

`justify-items: center`; and `align-items: center`; to center an element inside a grid cell.

By default, it is `justify-items: stretch(or normal)`.

other options of flex also works on grid like `align-items:flex start`, `align-items:flex end`

and justify items start, end, center etc....

🛑🛑 It is justify items and not justify content

justify => x axis
align => y axis

---

Using margins to center content now: `margin-left: auto` => brings content to extreme right

`margin-right: auto` => brings content to extreme left

`margin-top: auto` => brings content to extreme bottom

`margin-bottom: auto` => brings content to extreme top

Also there are `margin block auto (stretch content to left-right)` and `margin inline auto (stretch content to top-bottom)`

`grid column: start / end`

If end value is more than last column, then an extra column is created to fit those contents.

🛑🛑 Creating grid beforehand then giving start and end values => Explicit grid creation.

🛑🛑 Giving start and end values first, and then the grid is created automatically by the browser => Implicit grid creation.

`grid-template: grid-template-rows / grid-template-columns`

try to give both values, if giving only one value, give other value as `none` (default value)

`grid-template-columns: repeat(auto-fill, 100px)`

Creting infinite columns of 100px width till there is space available in the parent.

`grid-template-columns: repeat(5, minmax(100px, 200px)`

creates flexible sized grids where min width => 100px and max width => 200px.

try to combine various properties like auto-fill, minmax, etc...

1fr, tries to divide all elements inside the grid equally, giving each element equal width

---

---

Grid Areas Explained in Depth | Frontend Bootcamp Hindi | Ep.34

`grid-template-area` -> The grid-template-areas CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.

```css
.parent-container {
  grid-template-areas:
    "Bangalore Bangalore Delhi"
    "Mumbai Mumbai Delhi"
    "Pune Pune Delhi";
  /* in quotes */
}

.box-1 {
  background-color: green;

  grid-area: Bangalore;
  /* no quotes */
}
```

🛑🛑 Try to make grid template areas values in the shape of square or rectangle, other shapes will be considered as invalid. (see above eg.)

`grid-area` -> When you need to combine, grid row start, grid row end, grid column start and grid column end, we use grid area.
(kya kya area create karna hai)

`grid-area: row-start / column-start / row-end / column-end`
(kis area mein usko(child ko) reside karwana hai)

eg. grid-area: 2 / 1 / 2 / 4;

Here if columns and rows are not specified during creation using grid-template rows and columns then browser creates them implicitly.

shortcut:

grid-auto-columns: 150px; (width of each column) (creates columns automatically based on our content)
grid-auto-rows: 250px; (height of each row) (creates rows automatically based on our content)

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 TBC

---

# CSS Variables Explained in Depth | Last CSS Video | Frontend Bootcamp Hindi | Ep.35

---

`<code></code>` This tag is like span but is helpful in declaring code bits in html

When there is one property multiple times and we have to change all of them, we can store that property in a CSS variable, then change that variable's value to change the property everywhere where it is defined.

CSS variables are also called `custom properties`.

eg.

```css
body {
  --color-variable: white;
}

/* Now use this `--color-variable` whereever we want to give text-color white */

p {
  color: var(--color-variable);
}
```

We can store any property in a CSS variable.

Try to define variables in `:root`, even above body (and html) to give them access globally for all CSS properties and containers.

We can also override the CSS variables by redefining them in the class containers.

---

Fallback:

p {
var(--color-variable, yellow);
}

Let us say that for some reason, the --color-variable property is not available, then in that case, we can use a `fallback` color here (backup color).
Its value will be shown when the variable color property does not work out.

🛑🛑 If neither of the colors are available, then CSS looks for colors from the parent, grandparent and so on until it finds a color. If nothing is found, it applies the default color black.

Same thing happens when we give it a variable having values other than color

eg.

--rounded: 24px

p {
  color: var(--rounded);
}

Now here color has a variable with value in pixel (not in colors), so it is nullified and color property goes on looking for colors in its parent, grandparent and so on....