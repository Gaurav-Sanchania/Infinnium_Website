//console.log("Hello World!")

// document.addEventListener("DOMContentLoaded", () => {
  // const particleCount = window.innerWidth < 768 ? 50 : 80;
  // const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  // const mobileSidebar = document.getElementById('mobile-sidebar');
  // const mobileCloseBtn = document.getElementById('mobile-close-btn');

  // mobileMenuBtn.addEventListener('click', () => {
  //   mobileSidebar.classList.add('active');
  // });

  // mobileCloseBtn.addEventListener('click', () => {
  //   mobileSidebar.classList.remove('active');
  // });

  // Dropdown toggling for mobile sidebar:
  // document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  //   toggle.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     const dropdownMenu = this.nextElementSibling;
  //     if (dropdownMenu) {
  //       dropdownMenu.classList.toggle('hidden');
  //     }
  //   });
  // });

  // Scroll functionality for header background and logo color
  // window.onscroll = function () {
  //   const header = document.getElementById("header");
  //   const logoPath = document.getElementById("logo-svg").querySelector(".cls-1");

  //   if (window.scrollY > 0) {
  //     header.classList.add("header-bg-scrolled");
  //     header.classList.remove("header-bg");
  //     logoPath.style.fill = "#234653";
  //   } else {
  //     header.classList.add("header-bg");
  //     header.classList.remove("header-bg-scrolled");
  //     logoPath.style.fill = "#ffffff";
  //   }
  // };


  // Mobile menu toggle
  //  document.getElementById("mobile-menu-btn").addEventListener("click", function () {
  //      document.getElementById("nav-menu").classList.toggle("hidden");
  //  });

  // List of phrases to cycle through
  // const phrases = [
  //   "Data Protection",
  //   "Breach Response",
  //   "Data Governance",
  //   "Data Security",
  //   "Data Processing",
  //   "Data Discovery",
  //   "Automation & Al"
  // ];
  // const container = document.getElementById("phrase-container");
  // let currentPhrase = 0;

  // function animatePhrase() {
  //   // Set the current phrase text
  //   container.textContent = phrases[currentPhrase];

  //   // Start fade in (using a slight timeout to ensure the text is updated)
  //   setTimeout(() => {
  //     container.style.opacity = 1;
  //   }, 100);

  //   // Hold the phrase, then fade out after 3 seconds
  //   setTimeout(() => {
  //     container.style.opacity = 0;
  //   }, 3500);

  //   // After fade out is complete, update to the next phrase and loop
  //   setTimeout(() => {
  //     currentPhrase = (currentPhrase + 1) % phrases.length;
  //     animatePhrase();
  //   }, 4000); // total duration: 0.5s fade in + 3s hold + 0.5s fade out = 4s
  // }

  // // Start the animation loop
  // animatePhrase();
// }
// );

// document.addEventListener('DOMContentLoaded', function () {
  // Social media icons list (facebook removed)
  // const icons = [
  //   'fab fa-twitter',
  //   'fab fa-instagram',
  //   'fab fa-linkedin-in',
  //   'fab fa-github',
  //   'fab fa-youtube',
  //   'fab fa-pinterest',
  //   'fab fa-snapchat-ghost',
  //   'fab fa-skype',
  //   'fab fa-android',
  //   'fab fa-dribbble',
  //   'fab fa-tumblr',
  //   'fab fa-vimeo-v',
  //   'fab fa-flickr',
  //   'fab fa-reddit-alien',
  //   'fab fa-whatsapp',
  //   'fab fa-telegram-plane',
  //   'fab fa-discord',
  //   'fab fa-slack-hash',
  //   'fab fa-medium-m',
  // ];

  // Add icons to all hexagons EXCEPT the center one
  // const gels = document.querySelectorAll('.gel:not(.center-gel)');
  // gels.forEach((gel, index) => {
  //   const icon = document.createElement('i');
  //   icon.className = icons[index % icons.length];
  //   gel.appendChild(icon);
  // });

  // // Handle center hexagon separately
  // const centerGel = document.querySelector('.center-gel');
  // const svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
  //       <style type="text/css">
  //         .st0{fill:#2A9D8F;}
  //         .st1{fill:#264653;}
  //         .st2{fill:none;}
  //         .st3{fill:#E76F51;}
  //         .st4{fill:#E77051;}
  //       </style>
  //       <path class="st0" d="M12.5,3.2c0.5,0,1.1,0.1,1.6,0.2V0.2C13.6,0.1,13.1,0,12.5,0c-0.5,0-1,0.1-1.4,0.1v3.2  C11.6,3.2,12,3.2,12.5,3.2z"/>
  //       <path class="st1" d="M7.9,4.4V0.9C3.1,2.8,0,7.4,0,12.5c0,0.5,0,1,0.1,1.5h7.8v-3.2H3.3C3.8,8.1,5.5,5.8,7.9,4.4z"/>
  //       <path class="st1" d="M24.9,10.8h-7.5V14h4.3c-0.7,4.5-4.6,7.8-9.2,7.8c-3.3,0-6.4-1.8-8.1-4.7H0.9c2.5,6.4,9.8,9.6,16.2,7  c4.8-1.9,7.9-6.5,7.9-11.7C25,11.9,25,11.3,24.9,10.8z"/>
  //       <path class="st2" d="M14.2,18.5c-0.2,0.1-0.4,0.1-0.6,0.1C13.7,18.6,14,18.6,14.2,18.5z"/>
  //       <path class="st2" d="M11.7,18.7c-0.2,0-0.4-0.1-0.7-0.1C11.3,18.6,11.5,18.6,11.7,18.7z"/>
  //       <path class="st2" d="M13.3,18.7H13H13.3z"/>
  //       <path class="st2" d="M12.5,18.7c-0.2,0-0.5,0-0.7,0C12,18.8,12.3,18.8,12.5,18.7z"/>
  //       <polygon class="st3" points="14.2,18.5 14.2,18.5 14.2,18.5 "/>
  //       <path class="st3" d="M13.5,18.6h-0.3H13.5z"/>
  //       <path class="st3" d="M13,18.7h-0.5H13z"/>
  //       <path class="st3" d="M11.8,18.7L11.8,18.7z"/>
  //       <polygon class="st3" points="11,18.5 11,18.5 11,18.5 "/>
  //       <path class="st4" d="M14.2,6.5c-0.5-0.1-1-0.2-1.5-0.2c-0.5,0-1,0.1-1.5,0.2v12.1c0.5,0.1,1,0.1,1.5,0.1c0.5,0,1,0,1.5-0.1V6.5z"/>
  //       </svg>`;

  // // Create SVG container
  // const svgContainer = document.createElement('div');
  // svgContainer.innerHTML = svgString;
  // svgContainer.style.position = 'absolute';
  // svgContainer.style.top = '50%';
  // svgContainer.style.left = '50%';
  // svgContainer.style.transform = 'translate(-50%, -50%) scale(0.15)';
  // svgContainer.style.zIndex = '10';

  // // Add SVG to center hexagon WITHOUT removing the hexagon
  // centerGel.appendChild(svgContainer);

  // // Remove any potential icons from center hexagon
  // const centerIcons = centerGel.getElementsByTagName('i');
  // while (centerIcons.length > 0) {
  //   centerIcons[0].remove();
  // }
// });


// page load animation for area of experties
// Add this JavaScript at the end of the body
// document.addEventListener('DOMContentLoaded', () => {
//   // Animate grid container
//   const grid = document.getElementById('services-grid');
//   grid.style.opacity = '1';

//   // Animate individual cards with Intersection Observer
//   const cards = document.querySelectorAll('.card-item');

//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px'
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//       if (entry.isIntersecting) {
//         // Add animation with staggered delay
//         entry.target.style.animationDelay = `${index * 0.1}s`;
//         entry.target.classList.add('animate-card');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   cards.forEach(card => {
//     card.style.opacity = '0';
//     observer.observe(card);
//   });

//   // Animate the main grid container
//   const gridObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = '1';
//         gridObserver.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.1 });

//   gridObserver.observe(grid);
// });

/* Add page load animation styles for our product section */

// document.addEventListener('DOMContentLoaded', () => {
//   // Animate product grid container
//   const productGrid = document.getElementById('productGrid');
//   productGrid.style.opacity = '1';

//   // Configure Intersection Observer for product items
//   const productItems = document.querySelectorAll('.product-item');
//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px'
//   };

//   const productObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//       if (entry.isIntersecting) {
//         // Stagger animations with different delays
//         const delay = index * 0.15;
//         entry.target.style.animationDelay = `${delay}s`;
//         entry.target.classList.add('animate-product');
//         productObserver.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   productItems.forEach(item => {
//     item.style.opacity = '0';
//     productObserver.observe(item);
//   });

//   // Animate header
//   const headerElements = document.querySelectorAll('.animate-product');
//   headerElements.forEach(el => {
//     el.style.opacity = '0';
//     setTimeout(() => {
//       el.style.opacity = '1';
//     }, 500);
//   });
// });

/* Add page load animation styles for about us section */

// AOS.init({
//   once: true, // Animation only happens once
//   easing: 'ease-out-quad', // Smooth easing function
//   duration: 1000, // Default animation duration
// });

// Number counting animation function
// function animateCounters() {
//   const counters = document.querySelectorAll('.count-up');
//   const animationDuration = 2000; // 2 seconds
//   const frameDuration = 1000 / 60; // 60fps

//   counters.forEach(counter => {
//     const target = parseInt(counter.dataset.count);
//     const suffix = counter.textContent.includes('+') ? '+' : '';
//     const start = parseInt(counter.textContent);
//     const totalFrames = Math.round(animationDuration / frameDuration);
//     let currentFrame = 0;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           counter.classList.add('visible');
//           const counterInterval = setInterval(() => {
//             currentFrame++;
//             const progress = currentFrame / totalFrames;
//             const currentValue = Math.round(target * progress);

//             if (currentValue >= target) {
//               clearInterval(counterInterval);
//               counter.textContent = target + suffix;
//             } else {
//               counter.textContent = currentValue + suffix;
//             }
//           }, frameDuration);

//           // Stop observing after animation starts
//           observer.unobserve(counter);
//         }
//       });
//     });

//     observer.observe(counter);
//   });
// }

// Initialize when page loads
// document.addEventListener('DOMContentLoaded', animateCounters);

// Add this easing function
// function easeOutQuad(t) {
//   return t * (2 - t);
// }

// And modify the progress calculation to:
// const progress = easeOutQuad(currentFrame / totalFrames);

/* Add page load animation styles for what we do section */
// document.addEventListener('DOMContentLoaded', () => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('animate');

//         // For dividers - special animation
//         if (entry.target.classList.contains('divider-line')) {
//           entry.target.style.transform = 'scaleX(1)';
//         }
//       }
//     });
//   }, {
//     threshold: 0.1,
//     rootMargin: '0px'
//   });

//   // Observe all elements with animate-on-scroll class
//   document.querySelectorAll('.animate-on-scroll').forEach(element => {
//     // Initialize hidden state
//     element.style.opacity = '0';

//     // Special initial state for dividers
//     if (element.classList.contains('divider-line')) {
//       element.style.transform = 'scaleX(0)';
//       element.style.transformOrigin = 'left center';
//     }

//     observer.observe(element);
//   });

//   // Initialize hover transitions
//   document.querySelectorAll('.feature-card').forEach(card => {
//     card.style.transition = 'all 0.3s ease';
//   });
// });

// window.addEventListener('resize', function () {
//   const socket = document.querySelector('.socket');
//   if (window.innerWidth < 768) {
//     socket.style.transform = 'scale(0.7)';
//     socket.style.opacity = '0.3';
//   } else {
//     socket.style.transform = 'scale(1)';
//     socket.style.opacity = '1';
//   }
// });

// function toggleDescription(id) {
//   const desc = document.getElementById(`desc-${id}`);
//   const button = document.querySelector(`[onclick="toggleDescription(${id})"]`);
//   desc.classList.toggle('truncate-text');
//   button.textContent = desc.classList.contains('truncate-text') ? 'Read More →' : 'Read Less ↑';
// }

// read more btn to read truncated text
// document.querySelectorAll(".read-more-btn").forEach(button => {
//   button.addEventListener("click", (e) => {
//     e.preventDefault();
//     const card = button.closest('.break-inside-avoid');
//     const paragraph = button.previousElementSibling;

//     // Toggle truncation
//     paragraph.classList.toggle("truncate_text");

//     // Update button text
//     button.textContent = paragraph.classList.contains("truncate_text")
//       ? "Read More →"
//       : "Read Less ↑";

//     // Force column layout maintenance
//     card.style.pageBreakInside = 'avoid';
//     card.style.breakInside = 'avoid';
//   });
// });
