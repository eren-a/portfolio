document.addEventListener('DOMContentLoaded', function () {
    let downArrow = document.querySelector('.down-arrow');

    downArrow.addEventListener('click', function () {
        let targetDiv = document.querySelector('.projects');

        if (targetDiv) {
            let scrollToValue = targetDiv.offsetTop;
            window.scrollTo({
                top: scrollToValue,
                behavior: 'smooth'
            });
        }
    });
});