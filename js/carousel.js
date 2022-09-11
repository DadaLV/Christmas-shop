(function () {

  const slides = [`<div class="happy_carousel_item">
<img src="./img/Happy/dog.png" alt="dog" class="happ_img">
<span class="carousel_subheader">Dean and Alice Peterson</span>
<p class="happy_carousel_text">“Christmas is a special time! We always buy Christmas decorations in advance. For the third year now, we have been making orders in this store and are completely satisfied with the quality of each bauble purchased."</p>
<em class="happy_date">December 08, 2018</em>
</div>`,
    `<div class="happy_carousel_item">
  <img src="./img/Happy/girl_and_mom.png" alt="girl" class="happ_img">
  <span class="carousel_subheader">Susan Owel</span>
  <p class="happy_carousel_text">“My daughter is 4 years old and she has been waiting for Christmas preparations since October! We start decorating the Christmas tree in early December, and I always buy something new at Christmas Decorations Shop.”</p>
  <em class="happy_date">December 02, 2020</em>
</div>`,
    `<div class="happy_carousel_item">
  <img src="./img/Happy/tree.png" alt="tree" class="happ_img">
  <span class="carousel_subheader">Daniella Lexington</span>
  <p class="happy_carousel_text">“The anticipation of Christmas is the best thing in December. I like the feeling that magic is coming and try to start Christmas decorations in early December. This year, I've bought a new X-mas tree and lots of baubles.”</p>
  <em class="happy_date">December 15, 2021</em>
</div>`
  ]

  let currentSlide = 0;

  function renderCarousel() {
    const slidepContainer = document.querySelector('.carousel_testimonials .carousel-item');
    slidepContainer.innerHTML = slides[currentSlide];
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderCarousel();
  }

  function prevSlide() {
    currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
    renderCarousel();
  }

  const btnForward = document.querySelector('.forwardp');
  btnForward.addEventListener('click', nextSlide);

  const btnBack = document.querySelector('.backp');
  btnBack.addEventListener('click', prevSlide);

  window.addEventListener('resize', renderCarousel);

  renderCarousel();

}) ()