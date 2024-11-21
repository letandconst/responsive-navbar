document.addEventListener('DOMContentLoaded', () => {
	const navbarMenu = document.getElementById('navbar');
	const burgerMenu = document.getElementById('burger');
	const overlayMenu = document.querySelector('.overlay');

	const toggleMenu = () => {
		navbarMenu.classList.toggle('active');
		overlayMenu.classList.toggle('active');
	};

	const collapseSubMenu = () => {
		const activeDropdown = navbarMenu.querySelector('.menu-dropdown.active');
		if (activeDropdown) {
			activeDropdown.classList.remove('active');
			const submenu = activeDropdown.querySelector('.submenu');
			if (submenu) submenu.removeAttribute('style');
		}
	};

	const toggleSubMenu = (e) => {
		const target = e.target;
		if (target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
			e.preventDefault();
			const menuDropdown = target.closest('.menu-dropdown');
			const submenu = menuDropdown.querySelector('.submenu');

			if (menuDropdown.classList.contains('active')) {
				collapseSubMenu();
			} else {
				collapseSubMenu();
				menuDropdown.classList.add('active');
				submenu.style.maxHeight = `${submenu.scrollHeight}px`;
			}
		}
	};

	const resizeWindow = () => {
		if (window.innerWidth > 992) {
			if (navbarMenu.classList.contains('active')) {
				toggleMenu();
			}
			collapseSubMenu();
		}
	};

	burgerMenu.addEventListener('click', toggleMenu);
	overlayMenu.addEventListener('click', toggleMenu);
	navbarMenu.addEventListener('click', toggleSubMenu);
	window.addEventListener('resize', resizeWindow);
});
