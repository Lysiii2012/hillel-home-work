const contentH2 = document.querySelector('.container h2')

document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    contentH2.classList.toggle('active')
})