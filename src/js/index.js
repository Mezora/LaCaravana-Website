/* Mezora Studios */
// rp = responsive
rpMenu = document.getElementById('hero-rp-menu');
rpMenuClose = document.getElementById('rp-menu-secondary')
rpContainer = document.getElementById('nav-items-active')

const menuResponsive = () => {
    if (rpContainer.style.display != 'flex') {
        rpContainer.style.display = 'flex';
    } else {
        rpContainer.style.display = 'none'
    }
}

rpMenu.addEventListener('click', menuResponsive)

rpMenuClose.addEventListener('click', () => {
    rpContainer.style.display = 'none';
})