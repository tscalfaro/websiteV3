function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
    })

    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"))

    document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle")
}

function openBurgerMenu() {
    const menu = document.querySelector('.burger_menu_list')
    const icon = document.querySelector('.burger_icon')
    if(menu.classList.contains("hidden")){ 
        icon.classList.add("hidden")
        menu.classList.remove("hidden")
    } else {
        menu.classList.add("hidden")
        icon.classList.remove("hidden")
    }
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})
window.addEventListener('click', () => {
    openBurgerMenu();
})
