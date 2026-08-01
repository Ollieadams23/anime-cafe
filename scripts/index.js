/* jshint esversion: 6 */

// Define a function that inserts the same header on every page.
function loadSharedHeader() {
	// Find the placeholder element where the shared header should be inserted.
	const headerMount = document.getElementById("site-header");
	// If the placeholder does not exist on this page, stop safely.
	if (!headerMount) {
		// Exit early so we do not run the rest of the code.
		return;
	}

	// Inject shared header HTML into the placeholder.
	headerMount.innerHTML = `
		<header>
			<img aria-label="Cafe interior with warm lighting" class="header-image" src="assets/images/header.jpeg" alt="Cafe interior with warm lighting">
			<nav aria-label="Main navigation">
				<a href="index.html">Home</a>
				<a href="about.html">About</a>
				<a href="category.html">Category</a>
				<a href="products.html">Products</a>
				<a href="contact.html">Contact</a>
			</nav>
		</header>
	`;

	// Get the current file name from the URL path (for example: about.html).
	const currentPage = window.location.pathname.split("/").pop() || "index.html";
	// Select all navigation links inside the injected header.
	const navLinks = headerMount.querySelectorAll("nav a");

	// Loop through each nav link to find which one matches the current page.
	navLinks.forEach((link) => {
		// Read the href value from this link.
		const href = link.getAttribute("href");
		// If this link points to the current page, mark it as active.
		if (href === currentPage) {
			// Add accessibility metadata to indicate the current page in navigation.
			link.setAttribute("aria-current", "page");
			// Add visual active class after links exist in the DOM.
			link.classList.add("link-active");
		}
	});
}


function loadSharedFooter() {
	// Find the placeholder element where the shared footer should be inserted.
	const footerMount = document.querySelector("footer .footer-content");
	// If the placeholder does not exist on this page, stop safely.
	if (!footerMount) {
		// Exit early so we do not run the rest of the code.
		return;
	}

	// Inject shared footer HTML into the placeholder.
	footerMount.innerHTML = `
        <h2>ANIME-CAFE</h2>
        <p>123 Anime Street, Tokyo, Japan</p>
        <p>Phone: +81 123-456-7890</p>
        <p>Email: cafe@animecafe.com</p>
        <p>Opening Hours: Mon-Fri 8am - 8pm, Sat-Sun 9am - 10pm</p>
        <p>&copy; 2024 ANIME-CAFE. All rights reserved.</p>
	`;

	// Get the current file name from the URL path (for example: about.html).
	//const currentPage = window.location.pathname.split("/").pop() || "index.html";
}

// Run the header loader after the HTML page has finished loading.
document.addEventListener("DOMContentLoaded", loadSharedHeader);
document.addEventListener("DOMContentLoaded", loadSharedFooter);
