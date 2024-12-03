document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".ratingbuttons button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("clicked");

            // Remove 'active' class from all buttons
            buttons.forEach((btn) => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            button.classList.add("active");
        });
    });
});

let selectedRating = null;

function selectRating(rating) {
    selectedRating = rating;
}

function submitRating() {
    if (selectedRating) {
        document.getElementById('rating-screen').style.display = 'none';
        document.getElementById('thankyou-screen').style.display = 'block';
        document.getElementById('selected-rating').textContent = selectedRating;
    } else {
        alert("Please select a rating!");
    }
}