document.addEventListener("DOMContentLoaded", () => {
	const content = document.querySelector(".content");

	window.addEventListener("scroll", () => {
		const scrolled = window.scrollY;
		if (scrolled > 0) {
			content.style.transform = `translateY(-${scrolled}px)`;
		} else {
			content.style.transform = "none";
		}
	});
});

function showSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
}

function hideSidebar() {
	const sidebar = document.querySelector(".sidebar");
	const display = window.getComputedStyle(sidebar).display;
	if (display !== "none") {
		sidebar.style.display = "none";
	}
}
