document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class on the button
        button.classList.toggle('active');

        // Get the associated content
        const content = button.nextElementSibling;

        // Toggle the display of the content
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
