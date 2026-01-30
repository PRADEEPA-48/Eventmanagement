// 🎨 Ultra Creative Features for Spark Event Management

// 🌟 3D Floating Navigation
class FloatingNavigation {
  static init() {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;

    // Add floating effect
    nav.style.transform = 'translateZ(0)';
    nav.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

    // Mouse parallax effect
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      nav.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
    });
  }
}

// 🎪 Morphing Background Shapes
class MorphingShapes {
  static init() {
    this.createShapes();
    this.animateShapes();
  }

  static createShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'morphing-shapes';
    document.body.appendChild(shapesContainer);

    const shapes = ['circle', 'triangle', 'square', 'hexagon', 'star'];
    
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      shape.className = `morphing-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      shape.style.animationDelay = Math.random() * 10 + 's';
      shapesContainer.appendChild(shape);
    }
  }

  static animateShapes() {
    const shapes = document.querySelectorAll('.morphing-shape');
    
    setInterval(() => {
      shapes.forEach(shape => {
        const newShape = ['circle', 'triangle', 'square', 'hexagon', 'star'][Math.floor(Math.random() * 5)];
        shape.className = `morphing-shape ${newShape}`;
      });
    }, 5000);
  }
}

// 🎵 Interactive Sound Visualizer
class SoundVisualizer {
  static init() {
    this.createVisualizer();
    this.addInteractiveElements();
  }

  static createVisualizer() {
    const visualizer = document.createElement('div');
    visualizer.className = 'sound-visualizer';
    document.body.appendChild(visualizer);

    for (let i = 0; i < 50; i++) {
      const bar = document.createElement('div');
      bar.className = 'sound-bar';
      bar.style.animationDelay = i * 0.1 + 's';
      visualizer.appendChild(bar);
    }
  }

  static addInteractiveElements() {
    document.addEventListener('click', () => {
      document.querySelectorAll('.sound-bar').forEach((bar, index) => {
        setTimeout(() => {
          bar.style.height = Math.random() * 100 + 'px';
          bar.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        }, index * 20);
      });
    });
  }
}

// 🌈 Color Wave Animation
class ColorWave {
  static init() {
    this.createWave();
    this.animateWave();
  }

  static createWave() {
    const wave = document.createElement('div');
    wave.className = 'color-wave';
    document.body.appendChild(wave);

    for (let i = 0; i < 100; i++) {
      const dot = document.createElement('div');
      dot.className = 'wave-dot';
      dot.style.left = i + '%';
      wave.appendChild(dot);
    }
  }

  static animateWave() {
    const dots = document.querySelectorAll('.wave-dot');
    let time = 0;

    const animate = () => {
      dots.forEach((dot, index) => {
        const y = Math.sin((index * 0.1) + (time * 0.02)) * 50;
        const hue = (index * 3.6 + time) % 360;
        
        dot.style.transform = `translateY(${y}px)`;
        dot.style.background = `hsl(${hue}, 70%, 60%)`;
      });
      
      time++;
      requestAnimationFrame(animate);
    };
    
    animate();
  }
}

// 🎭 Text Reveal Animations
class TextRevealAnimations {
  static init() {
    this.addRevealEffects();
    this.addTypingEffects();
    this.addGlowEffects();
  }

  static addRevealEffects() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.revealText(entry.target);
        }
      });
    });

    document.querySelectorAll('h1, h2, h3').forEach(el => {
      observer.observe(el);
    });
  }

  static revealText(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(50px) rotateX(90deg)';
      span.style.transition = `all 0.5s ease ${index * 0.05}s`;
      element.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0) rotateX(0)';
      }, 100);
    });
  }

  static addTypingEffects() {
    document.querySelectorAll('.typing-effect').forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      
      [...text].forEach((char, index) => {
        setTimeout(() => {
          element.textContent += char;
        }, index * 100);
      });
    });
  }

  static addGlowEffects() {
    document.querySelectorAll('h1, h2').forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.textShadow = '0 0 20px var(--primary-color), 0 0 40px var(--primary-color)';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.textShadow = 'none';
      });
    });
  }
}

// 🎪 Interactive Card Deck
class InteractiveCardDeck {
  static init() {
    this.enhanceCards();
    this.addCardEffects();
  }

  static enhanceCards() {
    document.querySelectorAll('.offer-card, .album-card').forEach(card => {
      // Add card flip effect
      card.addEventListener('click', () => {
        card.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
          card.style.transform = 'rotateY(0deg)';
        }, 600);
      });

      // Add magnetic effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        card.style.transform = `
          perspective(1000px) 
          rotateX(${y / 10}deg) 
          rotateY(${x / 10}deg) 
          translateZ(20px)
        `;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });
  }

  static addCardEffects() {
    // Add sparkle effect on hover
    document.querySelectorAll('.offer-card, .album-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.createSparkles(card);
      });
    });
  }

  static createSparkles(element) {
    for (let i = 0; i < 10; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      element.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1000);
    }
  }
}

// 🌟 Constellation Background
class ConstellationBackground {
  static init() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'constellation-canvas';
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    
    this.stars = [];
    this.mouse = { x: 0, y: 0 };
    
    this.resize();
    this.createStars();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  static resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  static createStars() {
    const starCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
  }

  static animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw stars
    this.stars.forEach(star => {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fill();
      
      // Move stars
      star.y += star.speed;
      if (star.y > this.canvas.height) {
        star.y = -10;
        star.x = Math.random() * this.canvas.width;
      }
    });
    
    // Draw connections
    this.stars.forEach((star, i) => {
      this.stars.slice(i + 1).forEach(otherStar => {
        const distance = Math.sqrt(
          Math.pow(star.x - otherStar.x, 2) + 
          Math.pow(star.y - otherStar.y, 2)
        );
        
        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(star.x, star.y);
          this.ctx.lineTo(otherStar.x, otherStar.y);
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
          this.ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// 🎨 Dynamic Theme Transitions
class DynamicThemeTransitions {
  static init() {
    this.addTransitionEffects();
    this.createThemePreview();
  }

  static addTransitionEffects() {
    const originalApplyTheme = window.CreativeFeatures?.AdvancedThemeManager?.applyTheme;
    
    if (originalApplyTheme) {
      window.CreativeFeatures.AdvancedThemeManager.applyTheme = function(themeName) {
        // Add transition overlay
        const overlay = document.createElement('div');
        overlay.className = 'theme-transition-overlay';
        document.body.appendChild(overlay);
        
        setTimeout(() => {
          originalApplyTheme.call(this, themeName);
          
          setTimeout(() => {
            overlay.classList.add('fade-out');
            setTimeout(() => overlay.remove(), 500);
          }, 300);
        }, 300);
      };
    }
  }

  static createThemePreview() {
    document.querySelectorAll('.theme-option').forEach(option => {
      option.addEventListener('mouseenter', () => {
        const preview = document.createElement('div');
        preview.className = 'theme-preview';
        preview.style.background = option.querySelector('span').style.background;
        document.body.appendChild(preview);
        
        setTimeout(() => preview.remove(), 2000);
      });
    });
  }
}

// 🎪 Scroll-Triggered Animations
class ScrollTriggeredAnimations {
  static init() {
    this.addScrollEffects();
    this.addParallaxElements();
  }

  static addScrollEffects() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Parallax hero background
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
      }
      
      // Rotate elements based on scroll
      document.querySelectorAll('.scroll-rotate').forEach(el => {
        el.style.transform = `rotate(${scrolled * 0.1}deg)`;
      });
      
      // Scale elements based on scroll
      document.querySelectorAll('.scroll-scale').forEach(el => {
        const scale = 1 + (scrolled * 0.001);
        el.style.transform = `scale(${Math.min(scale, 1.5)})`;
      });
    });
  }

  static addParallaxElements() {
    document.querySelectorAll('section').forEach((section, index) => {
      section.style.transform = `translateZ(${index * -100}px) scale(${1 + index * 0.1})`;
    });
  }
}

// 🎵 Audio Reactive Elements
class AudioReactiveElements {
  static init() {
    this.setupAudioContext();
    this.createReactiveElements();
  }

  static setupAudioContext() {
    // Create audio context for microphone input (optional)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
          this.analyser = this.audioContext.createAnalyser();
          this.source = this.audioContext.createMediaStreamSource(stream);
          this.source.connect(this.analyser);
          this.analyser.fftSize = 256;
          this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
          this.animateAudioReactive();
        })
        .catch(() => {
          // Fallback to fake audio data
          this.createFakeAudioData();
        });
    } else {
      this.createFakeAudioData();
    }
  }

  static createFakeAudioData() {
    setInterval(() => {
      const fakeData = Array.from({ length: 128 }, () => Math.random() * 255);
      this.updateReactiveElements(fakeData);
    }, 100);
  }

  static createReactiveElements() {
    const reactiveBar = document.createElement('div');
    reactiveBar.className = 'audio-reactive-bar';
    document.body.appendChild(reactiveBar);
  }

  static animateAudioReactive() {
    if (this.analyser) {
      this.analyser.getByteFrequencyData(this.dataArray);
      this.updateReactiveElements(this.dataArray);
    }
    requestAnimationFrame(() => this.animateAudioReactive());
  }

  static updateReactiveElements(audioData) {
    const average = audioData.reduce((a, b) => a + b) / audioData.length;
    
    // Update reactive elements based on audio
    document.querySelectorAll('.audio-reactive').forEach(el => {
      el.style.transform = `scale(${1 + average / 500})`;
      el.style.filter = `hue-rotate(${average}deg)`;
    });
  }
}

// 🎨 Initialize All Ultra Creative Features
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all creative systems
  FloatingNavigation.init();
  MorphingShapes.init();
  SoundVisualizer.init();
  ColorWave.init();
  TextRevealAnimations.init();
  InteractiveCardDeck.init();
  ConstellationBackground.init();
  DynamicThemeTransitions.init();
  ScrollTriggeredAnimations.init();
  AudioReactiveElements.init();
  
  // Add creative classes to elements
  document.querySelectorAll('h1').forEach(el => el.classList.add('typing-effect'));
  document.querySelectorAll('.offer-card, .album-card').forEach(el => {
    el.classList.add('audio-reactive', 'scroll-rotate');
  });
  
  console.log('🎨 Ultra Creative Mode Activated! 🎨');
});

// Export for global access
window.UltraCreativeFeatures = {
  FloatingNavigation,
  MorphingShapes,
  SoundVisualizer,
  ColorWave,
  TextRevealAnimations,
  InteractiveCardDeck,
  ConstellationBackground,
  DynamicThemeTransitions,
  ScrollTriggeredAnimations,
  AudioReactiveElements
};