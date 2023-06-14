# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Github Live Page](https://williamvnobrega.github.io/frontend-mentor-interactive-rating/)

## My process

Firstly, to commence the project, I initiated by gathering the measurements using Figma. Then, I proceeded to code the static HTML and carefully styled it to closely match the provided challenge. Following that, I proceeded to code the dynamic parts using JavaScript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

One important point that I learned in this challenge was how to redirect to another page through a button event:

```JS code snippet:
document.getElementById("submitButton").addEventListener("click", function(){
    let selectedRating = document.querySelector(".btn-score.active");
    if(selectedRating){
        let rating = selectedRating.value;
        window.location.assign(`thank-you.html?rating=${rating}`);
        
    }
})
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Resource 1](https://www.geeksforgeeks.org/how-to-add-a-pressed-effect-on-button-click-in-css/) - This helped me for styling a button to add pressed effect using CSS and JS.
- [Resource 2](https://medium.com/geekculture/how-to-build-a-simple-star-rating-system-abcbb5117365) - This helped me coding the rating system.
- [Resource 3](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_media_queries/Using_media_queries) - This is an article which always help me with media queries.

## Author

- Frontend Mentor - [@williamvnobrega](https://www.frontendmentor.io/profile/williamvnobrega)
