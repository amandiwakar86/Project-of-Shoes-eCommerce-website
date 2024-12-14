function toggleNavbar() {
    let navbar = document.querySelector('.navbar');
    let content = document.querySelector('.content');
    navbar.classList.toggle("navs");
    content.classList.toggle("content-shifted");
}

// FOR REVIEWS
document.addEventListener("DOMContentLoaded", function () {
    // Example of dynamically adding a review
    const reviewsSection = document.getElementById('customer-reviews');
    const newReview = document.createElement('div');
    newReview.className = 'review';
    newReview.innerHTML = `
        <p>"Amazing shoes!" - Customer C</p>
        <p>Rating: ⭐⭐⭐⭐⭐</p>
    `;
    reviewsSection.appendChild(newReview);
});
const hearts = document.querySelectorAll('.love');
hearts.forEach(hearts =>{
    hearts.addEventListener("click", () => {
        hearts.classList.toggle('clicked');
    });
});






