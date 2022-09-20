# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

Mobile version

![](screenshots/mobile-screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- IcoMoon icons
- CSS custom properties
- Flexbox
- CSS Grid
- CSS min/clamp functions
- Assemble.io

### What I learned

Like always most of the time was spent fine tuning the solution to better match the design. Figma files would definitely be helpful but to some extent. I'm struggling to setup project from the start either by using CSS custom properties or anything else and it is very costly in the project down the road. One thing to keep in mind is to setup as much as i can beforehand like colors, font sizes etc and style them accordingly when the time comes. This project would be interesting to work with Tailwind CSS. I suppose some things will be much easier.

Skip to content link inspired by WebDevSimplified

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
```

This snippet helped me with css logical properties padding-inline-start and padding-inline-end

```css
.dual[data-state='reversed'] {
  direction: rtl;
}
```

Style hover for devices that support it

```css
@media (hover: hover) {
  &:hover { …
```

### Continued development

Like in the previous chapter things that can be improved are: setup project from the start as much as i can regarding spacing, font sizes, colors etc. Also some things can be made better, toggle button for mobile navigation, aria roles for footer social icons etc..

### Useful resources

- [hover: hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) - MDN docs for hover:hover media query
- [skip link](https://www.youtube.com/watch?v=VUR0I5mqq7I) - Video explaining skip to content links

## Author

- Frontend Mentor - [@miranlegin](https://www.frontendmentor.io/profile/miranlegin)
