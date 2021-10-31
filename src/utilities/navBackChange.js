// change navbar class on scroll
const navBackChange = () => {
    window.addEventListener('scroll', () => {
        (window.scrollY) > 50 ?
            document.querySelector('nav').classList.add('scrolling')
            : document.querySelector('nav').classList.remove('scrolling');
    })
};

export default navBackChange;