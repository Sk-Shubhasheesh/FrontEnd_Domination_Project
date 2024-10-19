/**
scrollY-  tells you how far the user has scrolled down from the top of the page.
innerHeight-  tells you how much of the page is currently visible in the browser window (including the height of the scrollbar).
scrollHeight- tells you the total height of the webpage's content, whether it's visible or not.
By adding scrollY and innerHeight, you're checking if the user has reached the bottom of the page by comparing the sum to scrollHeight.
 */

const scrollbar = document.querySelector('.scrollbar')  

window.addEventListener('scroll', () => {
    console.log("scrollY",window.scrollY)
    console.log("scrollHeight",document.body.scrollHeight)
    console.log("innerHeight",window.innerHeight)
    let percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    scrollbar.style.width = percentage + '%'
})