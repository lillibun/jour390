// document.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var background = document.querySelector('.header-bg');

//   });

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// document.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY;
//     const header = document.querySelector('.inner-header');
//     const maxScroll = header.offsetHeight;
//     const scaleFactor = (scrollPosition / maxScroll) * 2; // Adjust multiplier for desired effect
    
//     header.style.backgroundSize = `${100 + scaleFactor}%`;
//     header.style.backgroundPosition = `${scaleFactor * 10}% ${scaleFactor * 100}%`; // Adjust values for desired positioning
// });

window.addEventListener('scroll', function () {
    const parallax = document.querySelectorAll('.parallax-section');
    let scrollPosition = window.pageYOffset;

    parallax.forEach(section => {
        let offset = section.offsetTop;
        let distance = (scrollPosition - offset) * 0.3;
        section.style.backgroundPositionY = distance + 'px';
    });
});
// let backgrounds = ['background.jpg', 'pg2.png','pg3.png','pg4.png','pg5.png','pg6.png','pg7.png','pg8.png','pg9.png','pg10.png','pg11.png']
// window.addEventListener('scroll', function () {
//     const parallaxSections = document.querySelectorAll('.parallax-section');
//     const header = document.querySelector('.inner-header');
//     let scrollPosition = window.pageYOffset;

//     parallaxSections.forEach(section => {
//         let offset = section.offsetTop;
//         let distance = (scrollPosition - offset) * 0.5;
//         section.style.transform = `translateY(${distance}px)`;
//     });

//     // Check if the header has moved past the top of the screen
//     if (scrollPosition >= header.offsetHeight) {
//         document.body.style.backgroundImage = "url('new-background.jpg')";
//     } else {
//         document.body.style.backgroundImage = "url('background.jpg')";
//     }
// });
