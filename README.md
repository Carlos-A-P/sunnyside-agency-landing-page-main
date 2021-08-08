# Sunnyside Agency Landing page-main

- Live website -(https://carlospwd-sunnyside-agency-landing-page-main.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## My process

### Screenshot

### End Result

![result-1](https://user-images.githubusercontent.com/85038929/128619265-25ba84e8-2592-4185-a0cc-0d02c0074de4.JPG)
![result-2](https://user-images.githubusercontent.com/85038929/128619274-2046a112-e69b-4624-a881-00d8529a7ff2.JPG)

### Active image

![active](https://user-images.githubusercontent.com/85038929/128619281-87cd2bd1-7e36-4e31-bc51-21f37c639411.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS FlexBox
- JavaScript
- Media Queries

### What I learned

This was a difficult challenge that really tested my CSS skills. I found it difficult to provide a flexible layout for all screen sizes so I limited the display to 375px mobile view and 1440px desktop view. However, I was more than happy to achieve a result that looked very similar to the end goal. In this challenge I learned about the filter property to change the color of my svg icons. I also learned how to implement a drop down navigation menu for mobile users.

Here is some code that I wrote in order to complete this task

```HTML
        <!-- inserting our hamburger menu icon -->
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <!-- end of hamburger menu -->

```

```Javascript
// this returns an array so we have to get the first element in that array
//there's only one of these so [0] is the first on page
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    // if active class does not exist itll add it or it can remove it if it does
    navbarLinks.classList.toggle('active')
})
```

```CSS
/* adding color to svg icons/ images with filter property */
.footer-logo {
	filter: brightness(0) saturate(100%) invert(38%) sepia(54%) saturate(453%)
		hue-rotate(116deg) brightness(96%) contrast(65%);
	height: auto;
	width: 10rem;
}

footer a:hover {
	filter: brightness(1000%);
}
```

### Questions

- What are some better examples on providing a more flexible layout for other displays?

### Useful resources

- [Responsive Navbar Tutorial](https://www.youtube.com/watch?v=At4B7A4GOPg&ab_channel=WebDevSimplified) - this is a tutorial that helped me understand how to create a dropdown menu for mobile screens

- [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) - I used this element to style my svg icons

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://www.site.com)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
