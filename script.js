// Advanced Creative JavaScript Features for Spark Event Management

// 🎨 Creative Theme System with Advanced Effects
const creativeThemes = {
  default: {
    primary: '#e74c3c',
    primaryDark: '#c0392b',
    secondary: '#2c3e50',
    accent: '#f39c12',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#333333',
    textLight: '#555555',
    gradient: 'linear-gradient(135deg, #e74c3c, #f39c12)',
    particleColor: '#e74c3c'
  },
  neon: {
    primary: '#00ff88',
    primaryDark: '#00cc6a',
    secondary: '#1a1a2e',
    accent: '#ff0080',
    background: '#0f0f23',
    surface: '#16213e',
    text: '#ffffff',
    textLight: '#b8b8ff',
    gradient: 'linear-gradient(135deg, #00ff88, #ff0080)',
    particleColor: '#00ff88'
  },
  sunset: {
    primary: '#ff6b6b',
    primaryDark: '#ee5a52',
    secondary: '#4ecdc4',
    accent: '#ffe66d',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#2c3e50',
    textLight: '#555555',
    gradient: 'linear-gradient(135deg, #ff6b6b, #ffe66d)',
    particleColor: '#ff6b6b'
  },
  ocean: {
    primary: '#667eea',
    primaryDark: '#764ba2',
    secondary: '#2c3e50',
    accent: '#f093fb',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#333333',
    textLight: '#555555',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    particleColor: '#667eea'
  },
  galaxy: {
    primary: '#8360c3',
    primaryDark: '#2ebf91',
    secondary: '#1a1a2e',
    accent: '#ffd700',
    background: '#0f0f23',
    surface: '#16213e',
    text: '#ffffff',
    textLight: '#b8b8ff',
    gradient: 'linear-gradient(135deg, #8360c3, #2ebf91)',
    particleColor: '#8360c3'
  }
};

// 🌟 Advanced Particle System
class CreativeParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.init();
  }

  init() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'particle-canvas';
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    
    this.resize();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
    this.container.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  createParticles() {
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#e74c3c'
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
      
      // Mouse interaction
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        particle.x -= dx * 0.01;
        particle.y -= dy * 0.01;
      }
      
      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
      this.ctx.fill();
      
      // Connect nearby particles
      this.particles.slice(index + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * 50).toString(16).padStart(2, '0')}`;
          this.ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// 🎭 Creative Animations and Effects
class CreativeEffects {
  static init() {
    this.initMagicCursor();
    this.initFloatingElements();
    this.initTextAnimations();
    this.initHoverEffects();
    this.initScrollMagic();
    this.initCreativeLoader();
  }

  static initMagicCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magic-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
      }, 50);
    });

    // Add hover effects for interactive elements
    document.querySelectorAll('a, button, .album-card, .offer-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
      });
    });
  }

  static initFloatingElements() {
    // Create floating shapes
    const shapes = ['💫', '✨', '🎉', '🎊', '💖', '🌟'];
    
    setInterval(() => {
      if (Math.random() > 0.7) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        shape.style.left = Math.random() * window.innerWidth + 'px';
        shape.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(shape);
        
        setTimeout(() => shape.remove(), 5000);
      }
    }, 2000);
  }

  static initTextAnimations() {
    // Typewriter effect for hero text
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.textContent = '';
      heroTitle.style.borderRight = '2px solid';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        } else {
          heroTitle.style.borderRight = 'none';
        }
      };
      
      setTimeout(typeWriter, 1000);
    }

    // Glitch effect for section headers
    document.querySelectorAll('.section-header h2').forEach(header => {
      header.addEventListener('mouseenter', () => {
        header.classList.add('glitch-effect');
        setTimeout(() => header.classList.remove('glitch-effect'), 500);
      });
    });
  }

  static initHoverEffects() {
    // 3D tilt effect for cards
    document.querySelectorAll('.offer-card, .album-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }

  static initScrollMagic() {
    // Parallax scrolling effect
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });

    // Reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add stagger effect for multiple elements
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  static initCreativeLoader() {
    // Creative page loader
    const loader = document.createElement('div');
    loader.className = 'creative-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="loader-logo">✨ Spark Events ✨</div>
        <div class="loader-progress">
          <div class="loader-bar"></div>
        </div>
        <div class="loader-text">Creating Magic...</div>
      </div>
    `;
    document.body.appendChild(loader);

    // Simulate loading
    let progress = 0;
    const loadInterval = setInterval(() => {
      progress += Math.random() * 15;
      document.querySelector('.loader-bar').style.width = Math.min(progress, 100) + '%';
      
      if (progress >= 100) {
        clearInterval(loadInterval);
        setTimeout(() => {
          loader.classList.add('fade-out');
          setTimeout(() => loader.remove(), 500);
        }, 500);
      }
    }, 100);
  }
}

// 🎵 Sound Effects System
class SoundEffects {
  static init() {
    this.sounds = {
      click: this.createTone(800, 0.1),
      hover: this.createTone(600, 0.05),
      success: this.createTone(1000, 0.2),
      error: this.createTone(300, 0.3)
    };
    
    this.addSoundEvents();
  }

  static createTone(frequency, duration) {
    return () => {
      if (!window.audioContext) {
        window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const oscillator = window.audioContext.createOscillator();
      const gainNode = window.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(window.audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, window.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, window.audioContext.currentTime + duration);
      
      oscillator.start(window.audioContext.currentTime);
      oscillator.stop(window.audioContext.currentTime + duration);
    };
  }

  static addSoundEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('button, .btn, .theme-option')) {
        this.sounds.click();
      }
    });

    document.querySelectorAll('.nav-link, .album-card, .offer-card').forEach(el => {
      el.addEventListener('mouseenter', () => this.sounds.hover());
    });
  }
}

// 🎨 Advanced Theme Management
class AdvancedThemeManager {
  static init() {
    this.currentTheme = localStorage.getItem('selectedTheme') || 'default';
    this.applyTheme(this.currentTheme);
    this.initThemeControls();
    this.initThemeAnimations();
  }

  static applyTheme(themeName) {
    const theme = creativeThemes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply CSS custom properties
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'gradient' && key !== 'particleColor') {
        root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
      }
    });
    
    root.style.setProperty('--theme-gradient', theme.gradient);
    root.style.setProperty('--particle-color', theme.particleColor);
    
    // Update body class
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${themeName}`);
    
    // Save preference
    localStorage.setItem('selectedTheme', themeName);
    this.currentTheme = themeName;
    
    // Update particle colors
    this.updateParticleColors(theme.particleColor);
    
    // Theme transition effect
    document.body.style.transition = 'all 0.5s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 500);
  }

  static updateParticleColors(color) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      particle.style.background = color;
    });
  }

  static initThemeControls() {
    // Enhanced theme switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    if (!themeSwitcher) return;

    themeSwitcher.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = document.querySelector('.theme-dropdown');
      dropdown.classList.toggle('active');
      
      // Add ripple effect
      this.createRipple(e, themeSwitcher);
    });

    document.querySelectorAll('.theme-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const themeName = option.dataset.theme;
        this.applyTheme(themeName);
        
        // Close dropdown with animation
        document.querySelector('.theme-dropdown').classList.remove('active');
        
        // Show theme change notification
        this.showThemeNotification(themeName);
      });
    });
  }

  static createRipple(event, element) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }

  static showThemeNotification(themeName) {
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `
      <div class="theme-notification-content">
        <i class="fas fa-palette"></i>
        <span>Theme changed to ${themeName.charAt(0).toUpperCase() + themeName.slice(1)}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  static initThemeAnimations() {
    // Auto theme cycling (optional)
    if (localStorage.getItem('autoTheme') === 'true') {
      const themes = Object.keys(creativeThemes);
      let currentIndex = themes.indexOf(this.currentTheme);
      
      setInterval(() => {
        currentIndex = (currentIndex + 1) % themes.length;
        this.applyTheme(themes[currentIndex]);
      }, 30000); // Change theme every 30 seconds
    }
  }
}

// 🎮 Interactive Games and Easter Eggs
class InteractiveFeatures {
  static init() {
    this.initKonamiCode();
    this.initClickGame();
    this.initSecretMenu();
  }

  static initKonamiCode() {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    let userInput = [];

    document.addEventListener('keydown', (e) => {
      userInput.push(e.code);
      userInput = userInput.slice(-konamiCode.length);

      if (userInput.join(',') === konamiCode.join(',')) {
        this.activateSecretMode();
      }
    });
  }

  static activateSecretMode() {
    document.body.classList.add('secret-mode');
    
    // Create confetti explosion
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
      }, i * 50);
    }

    // Show secret message
    const message = document.createElement('div');
    message.className = 'secret-message';
    message.innerHTML = '🎉 Secret Mode Activated! 🎉<br>You found the Easter egg!';
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.classList.add('fade-out');
      setTimeout(() => message.remove(), 500);
    }, 3000);
  }

  static initClickGame() {
    // Logo click game removed since logo is no longer present
    // Easter egg can be activated through other means
  }

  static unlockSpecialTheme() {
    // Add rainbow theme
    creativeThemes.rainbow = {
      primary: '#ff0080',
      primaryDark: '#cc0066',
      secondary: '#00ff80',
      accent: '#8000ff',
      background: '#ffffff',
      surface: '#f8f9fa',
      text: '#333333',
      textLight: '#555555',
      gradient: 'linear-gradient(45deg, #ff0080, #00ff80, #8000ff)',
      particleColor: '#ff0080'
    };

    AdvancedThemeManager.applyTheme('rainbow');
    
    const notification = document.createElement('div');
    notification.className = 'unlock-notification';
    notification.innerHTML = '🌈 Rainbow Theme Unlocked! 🌈';
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
  }

  static initSecretMenu() {
    // Triple click on footer to show developer menu
    const footer = document.querySelector('.footer');
    let clickCount = 0;
    let clickTimer;

    footer.addEventListener('click', () => {
      clickCount++;
      clearTimeout(clickTimer);
      
      clickTimer = setTimeout(() => {
        if (clickCount >= 3) {
          this.showDeveloperMenu();
        }
        clickCount = 0;
      }, 500);
    });
  }

  static showDeveloperMenu() {
    const menu = document.createElement('div');
    menu.className = 'developer-menu';
    menu.innerHTML = `
      <div class="dev-menu-content">
        <h3>🛠️ Developer Menu</h3>
        <button onclick="InteractiveFeatures.toggleAutoTheme()">Toggle Auto Theme</button>
        <button onclick="InteractiveFeatures.showStats()">Show Stats</button>
        <button onclick="InteractiveFeatures.exportTheme()">Export Theme</button>
        <button onclick="this.parentElement.parentElement.remove()">Close</button>
      </div>
    `;
    
    document.body.appendChild(menu);
  }

  static toggleAutoTheme() {
    const current = localStorage.getItem('autoTheme') === 'true';
    localStorage.setItem('autoTheme', !current);
    alert(`Auto theme ${!current ? 'enabled' : 'disabled'}`);
  }

  static showStats() {
    const stats = {
      'Current Theme': AdvancedThemeManager.currentTheme,
      'Page Load Time': performance.now().toFixed(2) + 'ms',
      'Screen Resolution': `${screen.width}x${screen.height}`,
      'User Agent': navigator.userAgent.split(' ')[0]
    };
    
    let statsText = 'Website Statistics:\n\n';
    Object.entries(stats).forEach(([key, value]) => {
      statsText += `${key}: ${value}\n`;
    });
    
    alert(statsText);
  }

  static exportTheme() {
    const themeData = JSON.stringify(creativeThemes[AdvancedThemeManager.currentTheme], null, 2);
    const blob = new Blob([themeData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${AdvancedThemeManager.currentTheme}-theme.json`;
    a.click();
    
    URL.revokeObjectURL(url);
  }
}

// 🚀 Initialize All Creative Features
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all creative systems
  AdvancedThemeManager.init();
  CreativeEffects.init();
  SoundEffects.init();
  InteractiveFeatures.init();
  
  // Initialize particle system for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    new CreativeParticleSystem(hero);
  }
  
  // Add creative classes to elements
  document.querySelectorAll('.offer-card, .album-card, .service-image').forEach(el => {
    el.classList.add('animate-on-scroll', 'stagger-item');
  });
  
  // Show welcome message with creative effect
  setTimeout(() => {
    const welcome = document.createElement('div');
    welcome.className = 'creative-welcome';
    welcome.innerHTML = `
      <div class="welcome-content">
        <h2>✨ Welcome to Spark Events! ✨</h2>
        <p>Experience the magic of professional event management</p>
      </div>
    `;
    document.body.appendChild(welcome);
    
    setTimeout(() => {
      welcome.classList.add('fade-out');
      setTimeout(() => welcome.remove(), 500);
    }, 3000);
  }, 2000);
});

// Export for global access
window.CreativeFeatures = {
  AdvancedThemeManager,
  CreativeEffects,
  SoundEffects,
  InteractiveFeatures
};