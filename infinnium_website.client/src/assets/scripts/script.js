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

// document.addEventListener("DOMContentLoaded", function () {
//   // Social media icons list (facebook removed)
//   const icons = [
//     "fa-brands fa-x-twitter", // 1
//     "fa-brands fa-instagram", // 2
//     "fa-brands fa-github", // 3
//     "fa-brands fa-google", // 4
//     "fa-brands fa-google-drive", // 5
//     "fa-brands fa-dropbox", // 6
//     "fa-brands fa-yahoo", // 7
//     "fa-brands fa-confluence", // 8
//     "fa-brands fa-jira", // 9
//     "fa-brands fa-hubspot", // 10
//     "fa-brands fa-slack", // 11
//     "fa-brands fa-aws", // 12
//     "fa-brands fa-facebook", // 13
//     "fa-brands fa-discord", // 14
//     "fa-solid fa-cloud fa-flip-horizontal", // 15
//     "envelope-svg", // 16
//     "fa-solid fa-video", // 17
//     "teams-svg",  // 18
//     "fileshare-svg", // 19
//     "ms-office-svg", // 20
//     "mixpanel-svg", // 21
//     "azure-svg", // 22
//     "egnyt-svg", // 23
//     "flatfile-svg", // 24
//     "rclone-svg", // 25
//     "outlook-svg", // 26
//   ];

//   const outlookSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 518 522" fill="none">
//   <g clip-path="url(#clip0_273_40)">
//   <path d="M152.984 358.935L153.284 358.955L153.584 358.95C178.458 358.558 197.674 345.895 210.606 327.697C223.425 309.66 230.224 286.072 230.988 262.663C231.752 239.257 226.507 215.269 214.337 196.486C202.024 177.48 182.67 163.968 156.219 162.222L155.914 162.202L155.609 162.207C130.576 162.596 111.185 175.234 98.1004 193.433C85.1302 211.473 78.2167 235.073 77.4118 258.503C76.607 281.929 81.885 305.938 94.1953 324.729C106.653 343.746 126.232 357.213 152.984 358.935ZM369.801 279.998C369.824 279.986 369.847 279.974 369.869 279.962C369.991 279.898 370.084 279.845 370.126 279.821C370.252 279.75 370.363 279.682 370.427 279.643L366.508 273.22C366.981 272.882 368.681 271.733 371.375 269.927C372.574 271.384 373.498 273.12 373.698 274.935C373.225 276.373 372.174 278.076 371.852 278.445C371.69 278.612 371.424 278.866 371.325 278.955C371.261 279.011 371.148 279.105 371.104 279.141C371.054 279.181 371.011 279.215 370.979 279.24C370.952 279.26 370.933 279.274 370.923 279.282C370.894 279.304 370.874 279.318 370.869 279.322L370.871 279.321C370.881 279.313 370.932 279.278 371.042 279.201C371.162 279.118 371.322 279.008 371.525 278.87C372.34 278.314 373.714 277.389 375.586 276.133C379.322 273.629 384.966 269.863 391.903 265.243C405.775 256.004 424.791 243.368 443.982 230.625C463.172 217.882 482.535 205.034 497.101 195.371C501.914 192.178 506.204 189.333 509.79 186.954V360.646C509.79 369.174 507.114 374.262 503.827 377.279C500.418 380.408 495.438 382.142 489.459 382.142H331.242L331.25 265.108L352.058 279.372C356.665 282.692 361.6 282.518 364.751 281.84C366.36 281.494 367.698 280.985 368.633 280.568C369.109 280.356 369.503 280.157 369.801 279.998ZM297.014 512.768L7.60156 452.189V65.0064L297.014 9.08781V512.768ZM153.905 309.732C145.386 309.465 138.449 304.574 133.269 295.822C127.95 286.834 124.969 274.398 124.882 261.466C124.795 248.539 127.606 235.948 132.985 226.647C138.211 217.611 145.541 212.08 155.049 211.307C163.265 211.575 170.079 216.405 175.229 225.21C180.509 234.236 183.5 246.722 183.627 259.686C183.755 272.649 181.012 285.252 175.709 294.535C170.559 303.552 163.325 309.018 153.905 309.732ZM361.395 227.578L331.26 208.636V118.174H499.357C499.355 118.174 499.355 118.174 499.357 118.174C499.377 118.175 499.566 118.186 499.936 118.291C500.334 118.404 500.852 118.601 501.463 118.914C502.697 119.545 504.09 120.538 505.391 121.86C507.145 123.64 508.503 125.769 509.216 128.089L361.395 227.578Z" fill="white" stroke="white" stroke-width="15"/>
//   </g>
//   <defs>
//   <clipPath id="clip0_273_40">
//   <rect width="518" height="522" fill="white"/>
//   </clipPath>
//   </defs>
//   </svg>`;

//   const dispositionSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 40 40" fill="none">
//   <path d="M28.0831 13.4004H34.0997C35.9331 13.4004 37.4331 14.9004 37.4331 16.7337V29.6337C37.4331 31.4671 35.9331 32.9671 34.0997 32.9671H5.89974C4.06641 32.9671 2.56641 31.4671 2.56641 29.6337V16.7337C2.56641 14.9004 4.06641 13.4004 5.89974 13.4004H11.9164" stroke="#E76F51" stroke-width="1.75" stroke-miterlimit="10"/>
//   <path d="M17.1331 9.71602H12.5498L13.4165 7.11602L15.6498 3.91602H18.6998V8.16602C18.6998 9.03268 17.9998 9.73268 17.1331 9.73268V9.71602Z" fill="#E76F51"/>
//   <path d="M11.7666 20.7331V10.0331C11.7666 9.41647 12.0166 8.81647 12.4499 8.36647L17.3499 3.48314C17.7833 3.0498 18.3833 2.7998 19.0166 2.7998H24.0833C26.3833 2.7998 28.2499 4.66647 28.2499 6.96647V20.9498" stroke="#E76F51" stroke-width="1.75" stroke-miterlimit="10"/>
//   <path d="M7.7998 20.5996H32.1998" stroke="#E76F51" stroke-width="1.75" stroke-miterlimit="10"/>
//   <path d="M9.25 30.4336V37.3336" stroke="#E76F51" stroke-width="1.75" stroke-miterlimit="10"/>
//   <path d="M16.417 30.4336V39.4503" stroke="#E76F51" stroke-width="1.75" stroke-miterlimit="10"/>
//   <path d="M23.583 30.4336V37.3336" stroke="#E76F51" stroke-width="1.75" stroke-miterlimit="10"/>
//   <path d="M30.75 30.4336V39.4503" stroke="#E76F51" stroke-width="1.75" stroke-miterlimit="10"/>
//   <path d="M3.7168 26.8662H36.2835" stroke="#E76F51" stroke-width="1.75" stroke-linejoin="round"/>
//   </svg>`;

// // Microsoft Teams SVG
// const teamsSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 408 380" fill="none">
//   <path d="M234.243 122.387C245.698 120.264 256.318 114.942 264.874 107.037C273.431 99.1312 279.576 88.9652 282.597 77.7141C285.618 66.463 285.393 54.5865 281.948 43.458C278.502 32.3296 271.977 22.4037 263.126 14.8283C254.276 7.25291 243.462 2.33744 231.935 0.650334C220.408 -1.03677 208.639 0.573403 197.989 5.29465C187.339 10.0159 178.243 17.6554 171.753 27.3296C165.262 37.0038 161.643 48.3176 161.313 59.9626H191.352C215.042 59.9626 234.243 79.1641 234.243 102.854V122.387ZM124.721 319.706H191.352C215.042 319.706 234.243 300.504 234.243 276.815V142.353H305.21C309.935 142.473 314.42 144.463 317.681 147.886C320.941 151.309 322.71 155.885 322.601 160.611V270.108C323.258 298.46 312.635 325.914 293.066 346.439C273.496 366.965 246.58 378.885 218.229 379.58C176.97 378.56 141.729 354.335 124.721 319.655V319.706ZM398.514 80.7196C398.514 86.3271 397.41 91.8796 395.264 97.0601C393.118 102.241 389.973 106.948 386.008 110.913C382.043 114.878 377.336 118.023 372.155 120.169C366.974 122.315 361.422 123.419 355.814 123.419C350.207 123.419 344.655 122.315 339.474 120.169C334.293 118.023 329.586 114.878 325.621 110.913C321.656 106.948 318.511 102.241 316.365 97.0601C314.219 91.8796 313.115 86.3271 313.115 80.7196C313.115 69.395 317.613 58.5341 325.621 50.5264C333.629 42.5186 344.49 38.0199 355.814 38.0199C367.139 38.0199 378 42.5186 386.008 50.5264C394.015 58.5341 398.514 69.395 398.514 80.7196ZM341.445 322.664L338.385 322.613C345.188 305.864 348.494 287.901 348.101 269.828V160.866C348.199 154.497 346.893 148.185 344.276 142.379H389.972C399.917 142.379 408 150.462 408 160.407V256.415C407.987 273.981 401.003 290.824 388.581 303.245C376.16 315.666 359.317 322.65 341.751 322.664H341.445Z" fill="white"/>
//   <path d="M17.3911 85.4626H191.352C200.966 85.4626 208.743 93.2402 208.743 102.854V276.815C208.75 279.1 208.305 281.365 207.433 283.478C206.561 285.591 205.281 287.511 203.664 289.127C202.048 290.743 200.128 292.024 198.015 292.896C195.902 293.767 193.638 294.212 191.352 294.206H17.3911C15.1054 294.212 12.8409 293.767 10.7279 292.896C8.61486 292.024 6.69501 290.743 5.07877 289.127C3.46252 287.511 2.18177 285.591 1.31017 283.478C0.438579 281.365 -0.00665738 279.1 7.52283e-05 276.815V102.828C7.52283e-05 93.2147 7.77757 85.4626 17.3911 85.4626ZM150.144 151.661V133.301H58.5991V151.661H93.2026V246.393H115.388V151.661H150.144Z" fill="white"/>
// </svg>`;

// // Google Vault (Gvault) SVG
// const fileshareSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 763 568" fill="none">
// <path d="M451.248 173.726L448.263 171.503L445.277 173.726L131.493 407.316L119.389 416.327H134.479H181.53H183.187L184.516 415.337L474.774 199.261L480.162 195.25L474.774 191.239L451.248 173.726ZM15.0898 447.743L428.625 139.895C432.993 136.82 438.312 134.866 444.032 134.22H447.945C455.381 134.22 462.214 136.136 467.531 140.094L524.756 182.694C529.899 186.523 532.041 191.159 532.041 195.368C532.041 199.578 529.899 204.214 524.756 208.043L202.764 447.743H15.0898Z" fill="white" stroke="white" stroke-width="10"/>
// <path d="M712.576 131.574C717.162 128.16 724.59 128.16 729.176 131.574L746.026 144.117C748.203 145.738 748.78 147.375 748.78 148.508C748.78 149.641 748.203 151.278 746.026 152.899L349.959 447.743H287.862L712.576 131.574Z" fill="white" stroke="white" stroke-width="10"/>
// </svg>`;

// // Envelope SVG
// const envelopeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 383 383" fill="none">
//   <path d="M319.166 287.25H287.249V147.615L191.499 207.458L95.7493 147.615V287.25H63.8327V95.7502H82.9827L191.499 163.573L300.016 95.7502H319.166M319.166 63.8335H63.8327C46.1189 63.8335 31.916 78.0364 31.916 95.7502V287.25C31.916 295.715 35.2787 303.833 41.2642 309.819C47.2497 315.804 55.3679 319.167 63.8327 319.167H319.166C327.631 319.167 335.749 315.804 341.734 309.819C347.72 303.833 351.083 295.715 351.083 287.25V95.7502C351.083 87.2853 347.72 79.1672 341.734 73.1817C335.749 67.1961 327.631 63.8335 319.166 63.8335Z" fill="white"/>
// </svg>`;

// // Microsoft Office SVG
// const msOfficeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 552 552" fill="none">
//   <path d="M458.62 128.57V422.97C458.62 433.243 455.63 442.443 449.65 450.57C443.67 458.543 435.62 463.91 425.5 466.67L293.71 504.62C291.87 505.08 289.8 505.54 287.5 506H282.44C277.38 506 272.78 505.31 268.64 503.93C264.5 502.55 260.283 500.71 255.99 498.41L169.74 449.65C166.52 447.81 163.99 445.433 162.15 442.52C160.31 439.607 159.39 436.31 159.39 432.63C159.39 427.11 161.383 422.433 165.37 418.6C169.203 414.767 173.88 412.85 179.4 412.85H291.18V141.22L207 171.12C200.407 173.573 195.04 177.867 190.9 184C186.76 189.827 184.69 196.343 184.69 203.55V358.34C184.69 364.78 183.08 370.607 179.86 375.82C176.793 381.033 172.423 385.173 166.75 388.24L127.19 409.86C123.51 411.853 119.83 412.85 116.15 412.85C109.863 412.85 104.497 410.627 100.05 406.18C95.6032 401.733 93.3799 396.29 93.3799 389.85V171.81C93.3799 163.837 95.4499 156.4 99.5899 149.5C103.883 141.833 109.48 136.007 116.38 132.02L258.06 51.52C261.28 49.68 264.73 48.3 268.41 47.38C272.09 46.46 275.77 46 279.45 46C282.057 46 284.433 46.23 286.58 46.69C288.727 46.9967 291.103 47.5333 293.71 48.3L425.5 84.87C430.56 86.25 435.083 88.32 439.07 91.08C443.057 93.84 446.507 97.1367 449.42 100.97C452.487 104.957 454.787 109.25 456.32 113.85C457.853 118.603 458.62 123.51 458.62 128.57Z" fill="white"/>
// </svg>`;

// // Microsoft Office SVG
// const mixpanelSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 391 391" fill="none">
// <path d="M140.017 135.646L140.052 135.777L140.093 135.907C143.179 145.863 146.022 154.067 150.265 160.856H123.646C108.542 160.856 99.5518 157.907 93.4982 153.005C87.3671 148.041 83.0525 140.127 79.3896 127.506L64.8124 73.4549C64.8119 73.4531 64.8114 73.4513 64.8109 73.4495C63.4347 68.3218 62.1773 63.678 60.7798 59.7627C59.3799 55.8409 57.6538 52.091 55.069 48.9529C49.3452 42.0038 41.2573 40.1515 31.1146 40.1515H29.5583V38.5H86.0208C100.304 38.5 107.085 41.5616 111.431 46.195C116.317 51.4032 119.42 59.7954 123.308 73.9124C123.31 73.918 123.311 73.9236 123.313 73.9292L140.017 135.646ZM271.083 160.856H244.579C248.74 154.243 251.586 146.144 254.672 135.838L254.701 135.741L254.727 135.644L271.425 73.8957L271.449 73.8083L271.471 73.7203C275.005 59.2757 277.974 51.0051 282.756 45.974C287.038 41.4686 293.925 38.5 308.708 38.5H364.5V40.1515H362.944C353.022 40.1515 345.03 42.0425 339.265 48.8914C336.646 52.0023 334.851 55.7293 333.388 59.6806C331.928 63.6267 330.632 68.2787 329.247 73.4519C329.246 73.4545 329.245 73.457 329.245 73.4596L314.671 127.496C310.953 140.182 306.785 148.087 300.812 153.039C294.956 157.894 286.191 160.856 271.083 160.856ZM123.602 234.144H150.265C146.022 240.933 143.179 249.137 140.093 259.093L140.052 259.223L140.017 259.354L123.313 321.071C123.311 321.076 123.31 321.082 123.308 321.088C119.42 335.205 116.317 343.597 111.431 348.805C107.085 353.438 100.304 356.5 86.0208 356.5H29.5V354.834H31.0562C41.2159 354.834 49.3141 352.991 55.0354 346.036C57.618 342.897 59.3381 339.146 60.7322 335.228C62.1239 331.316 63.3777 326.673 64.753 321.549C64.7533 321.548 64.7537 321.546 64.7541 321.545L79.3306 267.496C82.9931 254.905 87.3075 246.987 93.4443 242.014C99.5022 237.105 108.497 234.144 123.602 234.144ZM254.513 259.167C251.441 248.88 248.646 240.773 244.515 234.144H270.981C286.122 234.144 294.894 237.096 300.743 241.941C306.706 246.881 310.862 254.778 314.552 267.494L329.129 321.545C330.52 326.725 331.823 331.38 333.293 335.329C334.763 339.281 336.566 343.004 339.188 346.109C344.957 352.944 352.935 354.834 362.827 354.834H364.398V356.5H308.562C293.771 356.5 286.88 353.531 282.597 349.025C277.814 343.994 274.844 335.724 271.31 321.28L271.289 321.192L271.265 321.104L254.567 259.356L254.541 259.261L254.513 259.167ZM219.06 175.856V219.144H175.625V175.856H219.06Z" fill="white" stroke="white" stroke-width="15"/>
// </svg>`;

// const azureSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 441 441" fill="none">
// <path d="M250.38 114.484L396.006 349.448L213.346 355.929L300.242 337.217L312.928 334.485L304.228 324.857L213.949 224.941L250.38 114.484ZM134.533 177.709L214.444 105.691L119.543 327.764L53.4559 329.384L134.533 177.709Z" fill="white" stroke="white" stroke-width="15"/>
// </svg>`;

// const egnytSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
// <path d="M62.9941 22.627L40.333 39.3066V65.625H29.7373V39.375C29.7145 39.3522 29.3955 39.113 28.7803 38.6572C28.165 38.2015 27.3561 37.609 26.3535 36.8799C25.3509 36.1507 24.2116 35.2962 22.9355 34.3164C21.6595 33.3366 20.3265 32.3568 18.9365 31.377C17.5465 30.3971 16.1908 29.4059 14.8691 28.4033C13.5475 27.4007 12.3285 26.512 11.2119 25.7373C10.0954 24.9626 9.17253 24.279 8.44336 23.6865C7.71419 23.0941 7.23568 22.7409 7.00781 22.627L15.9629 16.0303L35.001 30.0439L54.0391 15.9961L62.9941 22.627ZM48.2627 43.1006L62.5498 53.6279L59.4053 57.9004L45.1182 47.373L48.2627 43.1006ZM37.7012 22.1484H32.3691V4.375H37.7012V22.1484ZM21.7393 43.1006L24.8838 47.373L10.5967 57.9004L7.45215 53.6279L21.7393 43.1006Z" fill="white"/>
// </svg>`;

// const flatfileSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 398 347" fill="none">
// <path d="M210.875 302.479L210.859 302.485L210.843 302.492C205.182 304.923 198.039 304.817 192.529 302.292L192.507 302.282L192.485 302.272L24.6296 227.308L21.0619 225.715L18.6534 228.792C14.405 234.219 12.9408 241.087 15.2205 247.597C17.4115 253.854 22.5072 258.875 29.1021 261.936L29.1356 261.952L29.1693 261.967L187.083 332.448L187.091 332.452C191.502 334.411 196.528 335.248 201.217 335.248C205.948 335.248 210.762 334.396 215.258 332.489C215.261 332.487 215.264 332.486 215.268 332.484L368.009 268.369C368.012 268.368 368.014 268.367 368.017 268.365C377.032 264.615 383.849 256.913 383.849 247.564C383.849 238.254 377.245 230.538 368.036 226.645L368.03 226.643L348.809 218.549L346.865 217.73L344.923 218.551L319.57 229.26L308.635 233.879L319.58 238.476L341.221 247.564L210.875 302.479Z" fill="white" stroke="white" stroke-width="10"/>
// <path d="M322.516 166.606L341.876 175.405C341.935 175.435 341.989 175.465 342.036 175.494C341.987 175.525 341.931 175.556 341.869 175.586L210.995 235.836C210.992 235.837 210.989 235.839 210.987 235.84C205.198 238.48 198.025 238.332 192.641 235.539L192.621 235.528L192.601 235.518L57.5377 166.97C57.5358 166.969 57.5338 166.968 57.5318 166.967C52.218 164.247 49.6412 159.946 49.6412 155.81V118.613C49.6412 114.283 52.4561 109.751 58.168 107.143L58.1702 107.142L192.085 45.9168L192.092 45.9138C197.571 43.3991 204.345 43.3991 209.825 45.9139L209.833 45.9174L330.472 101.033L330.488 101.04L330.503 101.047C331.048 101.292 331.268 101.544 331.341 101.65C331.382 101.708 331.397 101.746 331.402 101.764C331.408 101.781 331.408 101.791 331.408 101.797C331.408 101.803 331.408 101.819 331.398 101.848C331.389 101.877 331.368 101.93 331.317 102.004C331.223 102.142 330.981 102.415 330.432 102.681L209.833 157.778L209.825 157.782C204.345 160.296 197.571 160.296 192.092 157.782L192.084 157.778L109.777 120.174L105.935 118.419L103.563 121.913C99.3534 128.112 98.5577 135.297 100.821 141.779C103.066 148.205 108.188 153.62 115.254 156.832C115.254 156.832 115.254 156.832 115.255 156.832L186.765 189.544L186.776 189.549C195.572 193.546 206.191 193.528 215.103 189.566L215.127 189.555L215.15 189.545L358.341 124.119C358.343 124.118 358.345 124.117 358.347 124.116C367.535 119.956 374.057 111.61 374.057 101.78C374.057 91.9506 367.703 83.7487 358.37 79.454L358.362 79.4504L358.354 79.4467L215.146 14.1493L215.141 14.1468C206.359 10.1555 195.558 10.1555 186.776 14.1468L186.767 14.1507L30.466 85.5498C30.463 85.5512 30.46 85.5525 30.457 85.5539C21.2914 89.7054 14.75 98.0409 14.75 107.753V165.991C14.75 175.295 20.6379 183.354 29.2787 187.696C29.282 187.697 29.2853 187.699 29.2886 187.701L186.582 267.514L186.625 267.536L186.668 267.557C191.123 269.71 196.209 270.634 200.958 270.634C205.753 270.634 210.624 269.694 215.162 267.597C215.165 267.596 215.168 267.595 215.17 267.593L368.132 197.697C368.134 197.696 368.137 197.695 368.14 197.694C377.306 193.542 383.848 185.207 383.848 175.494C383.848 165.82 377.514 157.472 368.16 153.168L368.151 153.164L368.143 153.16L352.046 145.829L349.964 144.881L347.885 145.837L322.496 157.512L312.559 162.081L322.516 166.606Z" fill="white" stroke="white" stroke-width="10"/>
// </svg>`;

// const rcloneSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 560 560" fill="none">
// <mask id="path-1-inside-1_293_108" fill="white">
// <path d="M276.357 14.5685C246.934 15.1879 218.168 23.3995 192.841 38.4093C167.514 53.4191 146.484 74.7191 131.783 100.25C114.693 129.776 106.842 163.758 109.243 197.8C129.161 190.778 150.124 187.191 171.24 187.192L205.54 187.146C205.314 173.649 208.741 160.343 215.457 148.639C225.484 131.765 241.745 119.524 260.718 114.568C279.692 109.611 299.852 112.337 316.833 122.156C333.815 131.974 346.251 148.096 351.449 167.029C356.647 185.962 354.189 206.183 344.608 223.315L310.121 283.224L338.004 331.637H393.794L428.281 271.682C443.471 245.352 451.393 215.451 451.235 185.044C451.077 154.637 442.844 124.82 427.381 98.6507C411.918 72.4813 389.781 50.902 363.242 36.1262C336.703 21.3505 306.716 13.9102 276.357 14.5685ZM240.307 203.198L171.24 203.268C144.48 203.261 118.091 209.536 94.1907 221.59C70.2906 233.643 49.545 251.14 33.619 272.674C17.6931 294.209 7.0302 319.182 2.48619 345.59C-2.05781 371.998 -0.356406 399.104 7.45387 424.734C15.2641 450.365 28.9658 473.804 47.4591 493.173C65.9524 512.541 88.7224 527.298 113.942 536.26C139.161 545.222 166.127 548.139 192.676 544.778C219.224 541.416 244.616 531.868 266.814 516.902C250.794 503.13 237.224 486.736 226.68 468.419L209.484 438.674C197.925 445.629 184.701 449.319 171.217 449.352C161.314 449.528 151.476 447.726 142.276 444.053C133.076 440.379 124.7 434.908 117.635 427.957C110.57 421.006 104.958 412.716 101.127 403.57C97.2969 394.424 95.324 384.606 95.324 374.688C95.324 364.77 97.2969 354.952 101.127 345.806C104.958 336.66 110.57 328.37 117.635 321.419C124.7 314.469 133.076 308.997 142.276 305.324C151.476 301.65 161.314 299.849 171.217 300.024L240.284 299.977L268.214 251.587L240.307 203.198ZM464.005 220.652C460.121 241.435 452.744 261.407 442.188 279.719L425.061 309.51C436.471 315.842 446.411 325.189 453.411 337.362C462.874 354.486 465.245 374.646 460.014 393.503C454.783 412.36 442.368 428.407 425.442 438.191C408.515 447.975 388.43 450.714 369.507 445.818C350.584 440.923 334.337 428.784 324.261 412.014L289.681 352.129H233.844L205.96 400.519L240.564 460.404C263.266 499.776 300.657 528.505 344.512 540.27C388.367 552.036 435.093 545.874 474.412 523.141C513.73 500.407 542.419 462.964 554.168 419.049C565.917 375.134 559.764 328.344 537.062 288.972C520.075 259.391 494.618 235.592 463.981 220.652"/>
// </mask>
// <path d="M276.357 14.5685C246.934 15.1879 218.168 23.3995 192.841 38.4093C167.514 53.4191 146.484 74.7191 131.783 100.25C114.693 129.776 106.842 163.758 109.243 197.8C129.161 190.778 150.124 187.191 171.24 187.192L205.54 187.146C205.314 173.649 208.741 160.343 215.457 148.639C225.484 131.765 241.745 119.524 260.718 114.568C279.692 109.611 299.852 112.337 316.833 122.156C333.815 131.974 346.251 148.096 351.449 167.029C356.647 185.962 354.189 206.183 344.608 223.315L310.121 283.224L338.004 331.637H393.794L428.281 271.682C443.471 245.352 451.393 215.451 451.235 185.044C451.077 154.637 442.844 124.82 427.381 98.6507C411.918 72.4813 389.781 50.902 363.242 36.1262C336.703 21.3505 306.716 13.9102 276.357 14.5685ZM240.307 203.198L171.24 203.268C144.48 203.261 118.091 209.536 94.1907 221.59C70.2906 233.643 49.545 251.14 33.619 272.674C17.6931 294.209 7.0302 319.182 2.48619 345.59C-2.05781 371.998 -0.356406 399.104 7.45387 424.734C15.2641 450.365 28.9658 473.804 47.4591 493.173C65.9524 512.541 88.7224 527.298 113.942 536.26C139.161 545.222 166.127 548.139 192.676 544.778C219.224 541.416 244.616 531.868 266.814 516.902C250.794 503.13 237.224 486.736 226.68 468.419L209.484 438.674C197.925 445.629 184.701 449.319 171.217 449.352C161.314 449.528 151.476 447.726 142.276 444.053C133.076 440.379 124.7 434.908 117.635 427.957C110.57 421.006 104.958 412.716 101.127 403.57C97.2969 394.424 95.324 384.606 95.324 374.688C95.324 364.77 97.2969 354.952 101.127 345.806C104.958 336.66 110.57 328.37 117.635 321.419C124.7 314.469 133.076 308.997 142.276 305.324C151.476 301.65 161.314 299.849 171.217 300.024L240.284 299.977L268.214 251.587L240.307 203.198ZM464.005 220.652C460.121 241.435 452.744 261.407 442.188 279.719L425.061 309.51C436.471 315.842 446.411 325.189 453.411 337.362C462.874 354.486 465.245 374.646 460.014 393.503C454.783 412.36 442.368 428.407 425.442 438.191C408.515 447.975 388.43 450.714 369.507 445.818C350.584 440.923 334.337 428.784 324.261 412.014L289.681 352.129H233.844L205.96 400.519L240.564 460.404C263.266 499.776 300.657 528.505 344.512 540.27C388.367 552.036 435.093 545.874 474.412 523.141C513.73 500.407 542.419 462.964 554.168 419.049C565.917 375.134 559.764 328.344 537.062 288.972C520.075 259.391 494.618 235.592 463.981 220.652" fill="white"/>

// <path d="M276.357 14.5685L276.673 29.5652L276.682 29.565L276.357 14.5685ZM131.783 100.25L144.765 107.764L144.774 107.749L144.782 107.734L131.783 100.25ZM109.243 197.8L94.2803 198.856L95.6655 218.492L114.23 211.947L109.243 197.8ZM171.24 187.192L171.239 202.192L171.25 202.192L171.261 202.192L171.24 187.192ZM205.54 187.146L205.561 202.146L220.793 202.125L220.538 186.894L205.54 187.146ZM215.457 148.639L202.562 140.977L202.504 141.075L202.447 141.174L215.457 148.639ZM344.608 223.315L357.607 230.799L357.654 230.718L357.699 230.637L344.608 223.315ZM310.121 283.224L297.121 275.741L292.812 283.226L297.122 290.711L310.121 283.224ZM338.004 331.637L325.006 339.124L329.333 346.637H338.004V331.637ZM393.794 331.637V346.637H402.471L406.797 339.116L393.794 331.637ZM428.281 271.682L415.289 264.186L415.284 264.194L415.279 264.203L428.281 271.682ZM240.307 203.198L253.301 195.704L248.967 188.189L240.292 188.198L240.307 203.198ZM171.24 203.268L171.236 218.268L171.246 218.268L171.255 218.268L171.24 203.268ZM266.814 516.902L275.199 529.339L291.503 518.346L276.592 505.527L266.814 516.902ZM226.68 468.419L239.681 460.936L239.673 460.923L239.666 460.911L226.68 468.419ZM209.484 438.674L222.469 431.167L214.83 417.953L201.751 425.821L209.484 438.674ZM171.217 449.352L171.179 434.352L171.065 434.353L170.951 434.355L171.217 449.352ZM95.324 374.688H80.324H95.324ZM171.217 300.024L170.951 315.022L171.089 315.024L171.227 315.024L171.217 300.024ZM240.284 299.977L240.294 314.977L248.949 314.971L253.275 307.476L240.284 299.977ZM268.214 251.587L281.205 259.086L285.531 251.591L281.208 244.094L268.214 251.587ZM442.188 279.719L429.193 272.228L429.188 272.236L429.184 272.243L442.188 279.719ZM425.061 309.51L412.057 302.034L404.467 315.237L417.783 322.626L425.061 309.51ZM453.411 337.362L466.54 330.107L466.479 329.995L466.415 329.885L453.411 337.362ZM324.261 412.014L311.271 419.515L311.336 419.628L311.403 419.74L324.261 412.014ZM289.681 352.129L302.671 344.628L298.34 337.129H289.681V352.129ZM233.844 352.129V337.129H225.175L220.847 344.64L233.844 352.129ZM205.96 400.519L192.964 393.03L188.642 400.529L192.973 408.023L205.96 400.519ZM240.564 460.404L253.558 452.912L253.551 452.9L240.564 460.404ZM537.062 288.972L524.054 296.442L524.061 296.453L524.067 296.465L537.062 288.972ZM276.042 -0.428168C244.034 0.24561 212.742 9.17854 185.193 25.5052L200.488 51.3134C223.593 37.6205 249.834 30.1302 276.673 29.5652L276.042 -0.428168ZM185.193 25.5052C157.645 41.8318 134.772 64.9991 118.784 92.7647L144.782 107.734C158.196 84.4392 177.384 65.0063 200.488 51.3134L185.193 25.5052ZM118.801 92.7355C100.209 124.858 91.6679 161.824 94.2803 198.856L124.206 196.745C122.015 165.691 129.178 134.695 144.765 107.764L118.801 92.7355ZM114.23 211.947C132.546 205.49 151.823 202.192 171.239 202.192L171.241 172.192C148.425 172.191 125.776 176.067 104.256 183.654L114.23 211.947ZM171.261 202.192L205.561 202.146L205.52 172.146L171.22 172.192L171.261 202.192ZM220.538 186.894C220.357 176.101 223.098 165.462 228.467 156.105L202.447 141.174C194.384 155.224 190.271 171.197 190.542 187.397L220.538 186.894ZM228.352 156.302C236.366 142.816 249.357 133.039 264.51 129.081L256.927 100.055C234.132 106.01 214.602 120.714 202.562 140.977L228.352 156.302ZM264.51 129.081C279.662 125.122 295.761 127.299 309.325 135.141L324.342 109.17C303.943 97.3754 279.723 94.0996 256.927 100.055L264.51 129.081ZM309.325 135.141C322.889 142.984 332.829 155.865 336.984 171L365.914 163.057C359.673 140.326 344.74 120.965 324.342 109.17L309.325 135.141ZM336.984 171C341.14 186.136 339.174 202.3 331.516 215.993L357.699 230.637C369.204 210.066 372.155 185.788 365.914 163.057L336.984 171ZM331.608 215.832L297.121 275.741L323.121 290.708L357.607 230.799L331.608 215.832ZM297.122 290.711L325.006 339.124L351.002 324.151L323.119 275.738L297.122 290.711ZM338.004 346.637H393.794V316.637H338.004V346.637ZM406.797 339.116L441.284 279.161L415.279 264.203L380.792 324.158L406.797 339.116ZM441.274 279.178C457.793 250.545 466.407 218.03 466.235 184.966L436.235 185.122C436.38 212.872 429.15 240.16 415.289 264.186L441.274 279.178ZM466.235 184.966C466.063 151.902 457.111 119.478 440.295 91.02L414.467 106.281C428.577 130.162 436.091 157.372 436.235 185.122L466.235 184.966ZM440.295 91.02C423.479 62.5613 399.405 39.0916 370.539 23.0205L355.945 49.232C380.158 62.7123 400.357 82.4013 414.467 106.281L440.295 91.02ZM370.539 23.0205C341.672 6.9493 309.055 -1.14408 276.032 -0.427965L276.682 29.565C304.377 28.9644 331.733 35.7517 355.945 49.232L370.539 23.0205ZM240.292 188.198L171.225 188.268L171.255 218.268L240.322 218.198L240.292 188.198ZM171.244 188.268C142.135 188.26 113.432 195.086 87.4361 208.197L100.945 234.983C122.75 223.986 146.824 218.262 171.236 218.268L171.244 188.268ZM87.4361 208.197C61.4407 221.307 38.8784 240.336 21.5588 263.755L45.6793 281.593C60.2116 261.943 79.1404 245.98 100.945 234.983L87.4361 208.197ZM21.5588 263.755C4.23933 287.174 -7.35549 314.331 -12.2966 343.046L17.2689 348.134C21.4159 324.033 31.1468 301.244 45.6793 281.593L21.5588 263.755ZM-12.2966 343.046C-17.2376 371.761 -15.3876 401.237 -6.89471 429.107L21.8024 420.362C14.6748 396.972 13.122 372.234 17.2689 348.134L-12.2966 343.046ZM-6.89471 429.107C1.59821 456.977 16.4979 482.467 36.6103 503.531L58.3079 482.814C41.4336 465.141 28.9301 443.752 21.8024 420.362L-6.89471 429.107ZM36.6103 503.531C56.7227 524.595 81.4879 540.646 108.919 550.394L118.964 522.126C95.957 513.95 75.1821 500.486 58.3079 482.814L36.6103 503.531ZM108.919 550.394C136.35 560.142 165.682 563.316 194.56 559.659L190.791 529.896C166.572 532.963 141.972 530.302 118.964 522.126L108.919 550.394ZM194.56 559.659C223.438 556.002 251.057 545.617 275.199 529.339L258.428 504.465C238.176 518.12 215.011 526.829 190.791 529.896L194.56 559.659ZM276.592 505.527C261.859 492.862 249.378 477.784 239.681 460.936L213.68 475.901C225.069 495.688 239.729 513.398 257.035 528.276L276.592 505.527ZM239.666 460.911L222.469 431.167L196.498 446.182L213.694 475.926L239.666 460.911ZM201.751 425.821C192.515 431.378 181.951 434.325 171.179 434.352L171.254 464.352C187.452 464.312 203.335 459.879 217.216 451.528L201.751 425.821ZM170.951 434.355C163.043 434.495 155.186 433.056 147.839 430.122L136.714 457.983C147.765 462.396 159.585 464.561 171.482 464.35L170.951 434.355ZM147.839 430.122C140.491 427.188 133.799 422.818 128.154 417.264L107.115 438.65C115.6 446.998 125.662 453.57 136.714 457.983L147.839 430.122ZM128.154 417.264C122.509 411.711 118.025 405.086 114.963 397.776L87.292 409.365C91.8914 420.347 98.6298 430.302 107.115 438.65L128.154 417.264ZM114.963 397.776C111.901 390.465 110.324 382.617 110.324 374.688H80.324C80.324 386.595 82.6926 398.383 87.292 409.365L114.963 397.776ZM110.324 374.688C110.324 366.76 111.901 358.911 114.963 351.601L87.292 340.011C82.6926 350.993 80.324 362.781 80.324 374.688H110.324ZM114.963 351.601C118.025 344.291 122.509 337.666 128.154 332.112L107.115 310.727C98.6298 319.074 91.8914 329.03 87.292 340.011L114.963 351.601ZM128.154 332.112C133.799 326.559 140.491 322.188 147.839 319.254L136.714 291.393C125.662 295.806 115.6 302.379 107.115 310.727L128.154 332.112ZM147.839 319.254C155.186 316.32 163.043 314.882 170.951 315.022L171.482 285.026C159.585 284.816 147.765 286.98 136.714 291.393L147.839 319.254ZM171.227 315.024L240.294 314.977L240.274 284.977L171.207 285.024L171.227 315.024ZM253.275 307.476L281.205 259.086L255.223 244.089L227.292 292.479L253.275 307.476ZM281.208 244.094L253.301 195.704L227.313 210.691L255.22 259.081L281.208 244.094ZM449.26 217.896C445.688 237.014 438.902 255.385 429.193 272.228L455.183 287.211C466.586 267.43 474.555 245.856 478.75 223.407L449.26 217.896ZM429.184 272.243L412.057 302.034L438.065 316.986L455.192 287.195L429.184 272.243ZM417.783 322.626C426.933 327.704 434.838 335.153 440.408 344.839L466.415 329.885C457.985 315.224 446.009 303.981 432.34 296.395L417.783 322.626ZM440.282 344.617C447.845 358.303 449.741 374.419 445.559 389.493L474.468 397.512C480.748 374.873 477.902 350.669 466.54 330.107L440.282 344.617ZM445.559 389.493C441.378 404.567 431.456 417.389 417.935 425.204L432.948 451.177C453.281 439.425 468.188 420.152 474.468 397.512L445.559 389.493ZM417.935 425.204C404.415 433.019 388.375 435.206 373.264 431.296L365.75 460.34C388.484 466.222 412.615 462.931 432.948 451.177L417.935 425.204ZM373.264 431.296C358.152 427.387 345.171 417.691 337.118 404.289L311.403 419.74C323.502 439.877 343.016 454.459 365.75 460.34L373.264 431.296ZM337.251 404.514L302.671 344.628L276.691 359.63L311.271 419.515L337.251 404.514ZM289.681 337.129H233.844V367.129H289.681V337.129ZM220.847 344.64L192.964 393.03L218.957 408.008L246.84 359.618L220.847 344.64ZM192.973 408.023L227.576 467.909L253.551 452.9L218.948 393.014L192.973 408.023ZM227.569 467.897C252.257 510.713 292.923 541.96 340.626 554.758L348.399 525.783C308.392 515.049 274.275 488.84 253.558 452.912L227.569 467.897ZM340.626 554.758C388.329 567.556 439.154 560.853 481.92 536.126L466.903 510.155C431.033 530.895 388.406 536.515 348.399 525.783L340.626 554.758ZM481.92 536.126C524.684 511.4 555.883 470.679 568.659 422.926L539.678 415.173C528.955 455.25 502.775 489.414 466.903 510.155L481.92 536.126ZM568.659 422.926C581.434 375.174 574.744 324.294 550.056 281.479L524.067 296.465C544.784 332.394 550.4 375.095 539.678 415.173L568.659 422.926ZM550.07 281.502C531.589 249.321 503.892 223.427 470.556 207.169L457.406 234.134C485.343 247.758 508.56 269.461 524.054 296.442L550.07 281.502Z" fill="white" mask="url(#path-1-inside-1_293_108)"/>
// </svg>`;

// const gels = document.querySelectorAll(".gel:not(.center-gel)");
// gels.forEach((gel, index) => {
// const iconClass = icons[index % icons.length];

// if (iconClass === "teams-svg") {
// // Insert Teams SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = teamsSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// } else if (iconClass === "transform-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = transformSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "translation-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = translationSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "transcription-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = transcriptionSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "profilerai-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = profileraiSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "pi-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = piSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "sharepoint-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = sharepointSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "monitor-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = monitorSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "legalhold-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = legalholdSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "fileshare-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = fileshareSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "disposition-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = dispositionSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "outlook-svg") {
// // Insert Gvault SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = outlookSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// } else if (iconClass === "envelope-svg") {
// // Insert Envelope SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = envelopeSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// } else if (iconClass === "ms-office-svg") {
// // Insert MS Office SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = msOfficeSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// } else if (iconClass === "mixpanel-svg") {
// // Insert MS Office SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = mixpanelSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "azure-svg") {
// // Insert MS Office SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = azureSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "egnyt-svg") {
// // Insert MS Office SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = egnytSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "flatfile-svg") {
// // Insert MS Office SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = flatfileSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "rclone-svg") {
// // Insert MS Office SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = rcloneSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else if (iconClass === "archival-svg") {
// // Insert MS Office SVG
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = archivalSVG;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.6)";
// svgContainer.style.zIndex = "10";
// gel.appendChild(svgContainer);
// }else {
// // Insert FontAwesome icon
// const icon = document.createElement("i");
// icon.className = iconClass;
// gel.appendChild(icon);
// }
// });

// // Handle center hexagon separately
// const centerGel = document.querySelector(".center-gel");
// const svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
// <style type="text/css">
// .st0{fill:#2A9D8F;}
// .st1{fill:#264653;}
// .st2{fill:none;}
// .st3{fill:#E76F51;}
// .st4{fill:#E77051;}
// </style>
// <path class="st0" d="M12.5,3.2c0.5,0,1.1,0.1,1.6,0.2V0.2C13.6,0.1,13.1,0,12.5,0c-0.5,0-1,0.1-1.4,0.1v3.2  C11.6,3.2,12,3.2,12.5,3.2z"/>
// <path class="st1" d="M7.9,4.4V0.9C3.1,2.8,0,7.4,0,12.5c0,0.5,0,1,0.1,1.5h7.8v-3.2H3.3C3.8,8.1,5.5,5.8,7.9,4.4z"/>
// <path class="st1" d="M24.9,10.8h-7.5V14h4.3c-0.7,4.5-4.6,7.8-9.2,7.8c-3.3,0-6.4-1.8-8.1-4.7H0.9c2.5,6.4,9.8,9.6,16.2,7  c4.8-1.9,7.9-6.5,7.9-11.7C25,11.9,25,11.3,24.9,10.8z"/>
// <path class="st2" d="M14.2,18.5c-0.2,0.1-0.4,0.1-0.6,0.1C13.7,18.6,14,18.6,14.2,18.5z"/>
// <path class="st2" d="M11.7,18.7c-0.2,0-0.4-0.1-0.7-0.1C11.3,18.6,11.5,18.6,11.7,18.7z"/>
// <path class="st2" d="M13.3,18.7H13H13.3z"/>
// <path class="st2" d="M12.5,18.7c-0.2,0-0.5,0-0.7,0C12,18.8,12.3,18.8,12.5,18.7z"/>
// <polygon class="st3" points="14.2,18.5 14.2,18.5 14.2,18.5 "/>
// <path class="st3" d="M13.5,18.6h-0.3H13.5z"/>
// <path class="st3" d="M13,18.7h-0.5H13z"/>
// <path class="st3" d="M11.8,18.7L11.8,18.7z"/>
// <polygon class="st3" points="11,18.5 11,18.5 11,18.5 "/>
// <path class="st4" d="M14.2,6.5c-0.5-0.1-1-0.2-1.5-0.2c-0.5,0-1,0.1-1.5,0.2v12.1c0.5,0.1,1,0.1,1.5,0.1c0.5,0,1,0,1.5-0.1V6.5z"/>
// </svg>`;

// // Create SVG container for center hexagon
// const svgContainer = document.createElement("div");
// svgContainer.innerHTML = svgString;
// svgContainer.style.position = "absolute";
// svgContainer.style.top = "50%";
// svgContainer.style.left = "50%";
// svgContainer.style.transform = "translate(-50%, -50%) scale(0.15)";
// svgContainer.style.zIndex = "10";
// centerGel.appendChild(svgContainer);

// Remove any potential icons from center hexagon
// const centerIcons = centerGel.getElementsByTagName("i");
// while (centerIcons.length > 0) {
// centerIcons[0].remove();
// }
// });
