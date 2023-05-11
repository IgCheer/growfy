const body = document.querySelector('body')
document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
        body.classList.toggle('_lock')
    } 
}
