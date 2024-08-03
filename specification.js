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
