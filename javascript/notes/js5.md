# [What is BOM in JavaScript?](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=66337348e26226a2de0743fa)

## BOM - Browser Object Model

Browser gives us a Window Object by default.

This window object has some properties which allows us to interact with windows.

Let us see them one by one:

Use these in developer console in Browser

### 1. location - This has some methods like host, hostname, path, href, and reload()

    1.1. location.reload() - While doing reload(), our site gets reloaded

`location.reload()`

1.2 location.href() - While doing this, we can alter our website's address

eg. `location.href = 'index.html'`

This will shift our website to index.html file (note to do this, make sure that the file that we are shifting our website to, should already occur in our codebase, here since every website has a default file of index.html, we are able to do it successfully).

Using this attribute, we can also go from one website to another.

eg. `location.href = 'website url'`

eg. `location.href = 'https://chatgpt.com/c/66e1d2f7-4ff8-8005-82d8-ab1ba8974a0c'`

---

### 2. history - This has some methods like:

a. backward() and forward() - This allows us to go back and forth when we open multiple web pages at once (like -> and <- arrow in our browser).

In console, do `history.back()` or `history.forward()`.

When we cannot go back or forward anymore, we get `undefined` as the return value.

b. go() - This allows us to go back and forth multiple pages.

eg. 
`history.go(7) -> Go forward 7 pages`

`history.go(-4) -> Go back 4 pages`

These are found in prototypes in history.

---

### 3. innerHeight and innerWidth - This gives us height and width of the display browser screen.

It may change as screen size changes.

### 4. outerHeight & outerWidth - This will give us the widths of display browser + console + all the widths of task bar, menu bar, tab ball all.

To find all the extra height and width, do `outerHeight - innerHeight` and `outerWidth - innerWidth`

`Outer Height is fixed while inner height is variable`

---

### 5. open() - Opens a new tab

Returns the window object of a new tab.

`Different tabs have different window objects`

`open()`

This can be used to navigate to different file pages or even go to a new website in a new tab.

`open('https://www.youtube.com/')`

Syntax -> `open(url, name)`

we can check this name in the opened site's name variable.

By default, `name = ''`

---

### 6. close() - Closes that window which was opened via open()

eg

```js
open('https://www.youtube.com/')

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Youtube is open now in a new tab


close('https://www.youtube.com/')
// Youtube is close now and the tab is also closed now.
```

### 7. resizeBy() and resizeTo()

Pre-requisite:

We need to have a resizable tab opened by doing the following:

```js
open('https://www.youtube.com/', 'ksd', 'resizable')

// Window {window: Window, self: Window, document: document, name: 'ksd', location: Location, …}
```

Then we can do either `resizeBy(400, 800)` or `resizeTo(400, 800)`

Syntax => `resizeTo(width, height)`

#### Key Differences:
- resizeBy() changes the size relative to the current window size.
- resizeTo() sets the window size to specific, absolute dimensions.

## 8. moveBy() and moveTo()

Syntax => moveBy(x length, y length);

`moveTo(0,0) => Top left corner of screen`

### Key Differences
- moveBy() shifts the window by a relative number of pixels from its current position.
- moveTo() moves the window to specific, absolute screen coordinates.

## 9. scrollBy() and scrollTo()

In JavaScript, scrollBy(), scrollTo(), and scroll() are used to programmatically scroll elements (like the window or any scrollable element) in a web page. They differ slightly in their usage and scope.

1. scrollBy()
Purpose: Scrolls an element (or the window) by a specific number of pixels relative to its current scroll position.

Syntax:

```javascript
element.scrollBy(xDelta, yDelta);
```
- xDelta: The number of pixels to scroll horizontally (positive values scroll to the right, negative values scroll to the left).
- yDelta: The number of pixels to scroll vertically (positive values scroll down, negative values scroll up).

Example:

```javascript
window.scrollBy(100, 200); // Scrolls the window 100px to the right and 200px down.
```
This method moves the scroll position relative to the current position of the element or the window.

2. scrollTo()
Purpose: Scrolls an element (or the window) to a specific set of coordinates. It sets the scroll position to the exact values provided.

Syntax:

```javascript
element.scrollTo(x, y);
```
- x: The horizontal position to scroll to (in pixels).
- y: The vertical position to scroll to (in pixels).

Example:

```javascript
window.scrollTo(0, 500); // Scrolls to the vertical position 500px down and keeps the horizontal position unchanged.
```
In this case, the window or element will be scrolled to the absolute coordinates provided.

3. scroll()
Purpose: This method works similarly to scrollTo(), and in modern browsers, it's essentially the same. It scrolls an element (or window) to the specified coordinates. scroll() also allows for additional options like smooth scrolling.

Syntax:

```javascript
element.scroll(x, y); // Basic syntax like scrollTo()

// Or with additional options
element.scroll({
  top: y,
  left: x,
  behavior: 'smooth' // Optional for smooth scrolling
});
```
Example:

```javascript
window.scroll(0, 300); // Equivalent to window.scrollTo(0, 300)

window.scroll({
  top: 300,
  left: 0,
  behavior: 'smooth' // Scrolls smoothly to 300px down
});
```
### scroll() offers a flexible option with smooth scrolling, which scrollTo() doesn’t natively provide unless invoked with additional arguments in modern browsers.

### Key Differences:
- scrollBy(): Scrolls relative to the current position (adds or subtracts from the current scroll position).
- scrollTo(): Scrolls to a specific, absolute position.
- scroll(): Essentially an alias for scrollTo(), but supports smooth scrolling and additional options.

#### Smooth Scrolling:
The scroll() method can include a behavior option (e.g., 'smooth') to animate the scrolling, while scrollTo() is limited unless combined with options in modern implementations.

## 10. Print() 

Used to print a web page via a printer.

eg. `print()` and the printer window pops up.

# 11. Document (IMP) - This is DOM (Document Object Model). DOM is a small part of BOM but it is very important.

DOM is a part of `Web APIs`. These APIs help us in running code from the code from the JS engine to the Web Browser. Also these help us in interacting with the Web Browser via JavaScript.

# What is BOM?

Different Browser vendors like Chrome, FireFox, Safari has given us an Object Model called `BOM (Browser Object Model)` to interact with the Browser, we can move it, resize it, scroll it, see its history, locate it etc.. So BOM helps us do all of this and all these functionalities is present in a main object called `WINDOW OBJECT`. 
