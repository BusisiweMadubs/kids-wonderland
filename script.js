
document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Add animation to cart icon
            const cartIcon = document.querySelector('.cart');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 200);
            
            // Change button text temporarily
            const originalText = this.textContent;
            this.textContent = 'Added! ✓';
            this.style.background = '#4ecdc4';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 1000);
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Category card click functionality
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show alert for demo purposes
            showNotification(`Exploring ${category.charAt(0).toUpperCase() + category.slice(1)} section! 🎉`);
        });
    });
    
    // Hero button functionality
    const heroBtn = document.querySelector('.hero-btn');
    heroBtn.addEventListener('click', function() {
        const categoriesSection = document.querySelector('.categories');
        categoriesSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Welcome to our Fun Club! 🎈');
            this.querySelector('input[type="email"]').value = '';
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value;
            if (searchTerm) {
                showNotification(`Searching for "${searchTerm}"... 🔍`);
                this.value = '';
            }
        }
    });
    
    // Special offer button
    const offerBtn = document.querySelector('.offer-btn');
    offerBtn.addEventListener('click', function() {
        showNotification('Special discount applied! Happy shopping! 🛍️');
    });
    
    // Notification system
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 2000;
            font-weight: bold;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Add floating animation to hero characters
    const characters = document.querySelectorAll('.character');
    characters.forEach((char, index) => {
        char.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 500);
        });
    });
    
    // Add scroll effects
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(90deg, rgba(255,107,107,0.95), rgba(78,205,196,0.95), rgba(69,183,209,0.95), rgba(150,206,180,0.95))';
        } else {
            header.style.background = 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)';
        }
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const emoji = this.querySelector('.product-image');
            emoji.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const emoji = this.querySelector('.product-image');
            emoji.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to KidsWonderland! Have fun shopping! 🌟');
    }, 1000);
});
