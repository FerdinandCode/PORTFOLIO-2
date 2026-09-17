         /*=============== TABS BUTTONS WITH SMOOTH ANIMATION ===============*/ 
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
      const targetSelector = tab.dataset.target,
        targetContent = document.querySelector(targetSelector)

      // Avoid re-triggering if the same tab is clicked
    if(!targetContent || targetContent.classList.contains('main-active')) return

      // Switch active button
      tabs.forEach((t) => t.classList.remove('main-active'))
      tab.classList.add('main-active')

    // Switch content immediately. Waiting for transitionend prevented the
    // Projects tab from opening because the hidden content has no transition.
    tabContents.forEach((content) => content.classList.remove('main-active', 'show'))
    targetContent.classList.add('main-active', 'show')
   })
})


/*=============== INITIAL FADE IN ON LOAD ===============*/

window.addEventListener('load', () => {
   const initialContent = document.querySelector('[data-content].main-active')
   requestAnimationFrame(() => {
      requestAnimationFrame(() => {
         initialContent.classList.add('show')
      })
   })
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'right',
    distance: '200px',
    duration: 1500,
    delay: 300,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
   // reset: true, // animation repeat

})
sr.reveal(`.main__content`,{origin: 'top'})
sr.reveal(`.profile`, {delay: 600})
sr.reveal(`.profile__image`, {rotate: {z: -55}, scale: 0, delay: 900})
sr.reveal(`.profile__greeting`, {delay: 900})
sr.reveal(`.profile__name`,{delay:1100})
sr.reveal(`.profile__buttons`, {delay: 1300, scale: 0})
sr.reveal(`.profile__data .section__title`, {delay: 1500})
sr.reveal(`.profile__description`, {delay: 1700})
sr.reveal(`.main__area`, {origin: 'left', delay: 2000})