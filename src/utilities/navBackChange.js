
const navBackChange = () => {
    window.addEventListener('scroll', () => {
        (window.scrollY) > 80 ?
            document.querySelector('nav').classList.add('scrolling')
            : document.querySelector('nav').classList.remove('scrolling');
    })
};

export default navBackChange;