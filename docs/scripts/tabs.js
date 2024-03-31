export function initTabs() {
    document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll('.nav-menu__item');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(item => {
                    item.classList.remove('nav-menu__item_active');
                })

                this.classList.add('nav-menu__item_active');
            })
        })
    })
}