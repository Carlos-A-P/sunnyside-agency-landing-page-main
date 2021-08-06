// this returns an array so we have to get the first element in that array
//there's only one of these so [0] is the first on page
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    // if active class does not exist itll add it or it can remove it if it does
    navbarLinks.classList.toggle('active')
})