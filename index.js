document.addEventListener('DOMContentLoaded', function () {
    const pngImage = document.getElementById('spotifypng');
    const gifImage = document.getElementById('spotifygif');

    pngImage.addEventListener('mouseover', function () {
        gifImage.classList.remove('hidden');
        pngImage.classList.add('hidden');

        setTimeout(() => {
            gifImage.classList.add('hidden');
            pngImage.classList.remove('hidden');
        }, 22000);
    });
});