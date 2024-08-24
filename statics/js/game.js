document.addEventListener('DOMContentLoaded', () => {
    const popcat = document.getElementById('popcat');
    const clickCount = document.getElementById('click-count');
    let count = 0;

    popcat.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });
});
