const products = [
    {
        name: "AI ChatBot",
        description: "Advanced conversational AI for customer support",
        price: "$999",
        icon: "🤖"
    },
    {
        name: "Vision AI",
        description: "Image recognition and analysis system",
        price: "$1499",
        icon: "👁️"
    },
    {
        name: "AI Analytics",
        description: "Predictive analytics and business intelligence",
        price: "$1999",
        icon: "📊"
    },
    {
        name: "Voice Assistant",
        description: "Natural language processing system",
        price: "$799",
        icon: "🎤"
    }
];

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">${product.icon}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button class="btn">Learn More</button>
        </div>
    `;
}

const productsGrid = document.getElementById('productsGrid');
products.forEach(product => {
    productsGrid.innerHTML += createProductCard(product);
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const productCards = document.querySelectorAll('.product-card');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    { threshold: 0.1 }
);

productCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    observer.observe(card);
});