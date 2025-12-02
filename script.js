const form = document.getElementById("requestForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Your Google Form POST URL
        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd1KlMzS3EAQ0g8t4u_wsVgr72m4UaJ8n5vjFS7gIZaD_dH4g/formResponse";

        // Your field ID
        const entryID = "entry.528844909";

        const userText = document.getElementById("requestText").value;

        // Construct final submit URL
        const submitUrl = `${googleFormUrl}?${entryID}=${encodeURIComponent(userText)}`;

        // Send form (opens new tab)
        window.open(submitUrl, "_blank");

        // Clear textarea
        document.getElementById("requestText").value = "";
    });
}

// Mobile navigation toggle (safe if elements are absent)
(function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }));

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.classList.contains('open')) return;
        const target = e.target;
        if (!navLinks.contains(target) && !navToggle.contains(target)) {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });
})();