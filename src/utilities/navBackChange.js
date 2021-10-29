
const navBackChange = () => {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        (window.scrollY) > 100 ?
            nav.classList.add('scrolling')
            : nav.classList.remove('scrolling');
    })
};

export default navBackChange;