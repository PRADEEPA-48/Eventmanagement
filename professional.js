// Professional JavaScript for Spark Event Management with Bootstrap

// Smooth scrolling for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Account for fixed navbar height
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile navbar if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });
}

// Gallery Functions
function showAlbum(id) {
  const albumSelector = document.getElementById("albumSelector");
  const targetSection = document.getElementById(id);
  
  if (albumSelector) albumSelector.style.display = "none";
  
  document.querySelectorAll(".gallery-section").forEach(section => {
    section.classList.remove("active");
  });
  
  if (targetSection) {
    targetSection.classList.add("active");
  }
}

function goBack() {
  const albumSelector = document.getElementById("albumSelector");
  if (albumSelector) albumSelector.style.display = "block";
  
  document.querySelectorAll(".gallery-section").forEach(section => {
    section.classList.remove("active");
  });
}

// Bootstrap Offers Filter
function filterOffers(category) {
  const items = document.querySelectorAll('.offer-item');
  const buttons = document.querySelectorAll('.btn-group .btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
  
  // Filter items with Bootstrap animation
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
      item.classList.add('fade-in');
      // Ensure the item is visible
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 50);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.display = 'none';
        item.classList.remove('fade-in');
      }, 300);
    }
  });
}

// Form validation with Bootstrap classes
function validateField(field) {
  const value = field.value.trim();
  
  // Remove existing validation classes
  field.classList.remove('is-valid', 'is-invalid');
  const existingFeedback = field.parentNode.querySelector('.invalid-feedback');
  if (existingFeedback) existingFeedback.remove();
  
  // Validation rules
  if (field.hasAttribute('required') && !value) {
    showBootstrapFieldError(field, 'This field is required');
    return false;
  }
  
  if (field.type === 'email' && value && !isValidEmail(value)) {
    showBootstrapFieldError(field, 'Please enter a valid email address');
    return false;
  }
  
  if (field.type === 'tel' && value && !isValidPhone(value)) {
    showBootstrapFieldError(field, 'Please enter a valid phone number');
    return false;
  }
  
  // Field is valid
  field.classList.add('is-valid');
  return true;
}

function showBootstrapFieldError(field, message) {
  field.classList.add('is-invalid');
  const errorDiv = document.createElement('div');
  errorDiv.className = 'invalid-feedback';
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[\+]?[0-9\s\-\(\)]{10,}$/.test(phone);
}

// Form Submissions with Bootstrap Toast
function handleBookingSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const inputs = form.querySelectorAll('input[required], select[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  if (!isValid) {
    showBootstrapToast('Please fill in all required fields correctly', 'danger');
    return;
  }
  
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Submitting...';
  submitBtn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    showBootstrapToast('Thank you for your booking request! We will contact you soon.', 'success');
    form.reset();
    form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
    });
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

function handleContactSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    showBootstrapToast('Thank you for your message! We will get back to you within 24 hours.', 'success');
    form.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// Bootstrap Toast notification system
function showBootstrapToast(message, type = 'info') {
  // Remove existing toasts
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => toast.remove());
  
  // Create toast container if it doesn't exist
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
    toastContainer.style.zIndex = '1055';
    document.body.appendChild(toastContainer);
  }
  
  const toastId = 'toast-' + Date.now();
  const iconClass = type === 'success' ? 'fa-check-circle' : type === 'danger' ? 'fa-exclamation-circle' : 'fa-info-circle';
  const bgClass = type === 'success' ? 'text-bg-success' : type === 'danger' ? 'text-bg-danger' : 'text-bg-primary';
  
  const toastHTML = `
    <div id="${toastId}" class="toast ${bgClass}" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <i class="fas ${iconClass} me-2"></i>
        <strong class="me-auto">Spark Event Management</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body text-white">
        ${message}
      </div>
    </div>
  `;
  
  toastContainer.insertAdjacentHTML('beforeend', toastHTML);
  
  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement, {
    autohide: true,
    delay: 5000
  });
  
  toast.show();
  
  // Remove toast element after it's hidden
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}

// Header scroll effect with Bootstrap classes
function initScrollEffects() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }
  });
}

// Form validation setup
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        const feedback = input.parentNode.querySelector('.invalid-feedback');
        if (feedback) feedback.remove();
      });
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initScrollEffects();
  initFormValidation();
  createFloatingShapes();
  
  console.log('Spark Event Management - Bootstrap Professional Mode Loaded');
});

// Create floating background shapes
function createFloatingShapes() {
  const shapesContainer = document.createElement('div');
  shapesContainer.className = 'floating-shapes';
  document.body.appendChild(shapesContainer);
  
  const shapes = ['circle', 'square', 'triangle'];
  const colors = ['var(--accent-color)', 'var(--primary-color)', 'rgba(52, 152, 219, 0.3)'];
  
  for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    
    shape.className = `floating-shape ${shapeType}`;
    shape.style.left = Math.random() * 100 + '%';
    shape.style.width = (Math.random() * 30 + 10) + 'px';
    shape.style.height = (Math.random() * 30 + 10) + 'px';
    shape.style.animationDelay = Math.random() * 20 + 's';
    shape.style.animationDuration = (Math.random() * 15 + 15) + 's';
    
    shapesContainer.appendChild(shape);
  }
}

// Make functions available globally
window.showAlbum = showAlbum;
window.goBack = goBack;
window.filterOffers = filterOffers;
window.handleBookingSubmit = handleBookingSubmit;
window.handleContactSubmit = handleContactSubmit;