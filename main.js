// images scroller

// const hero = document.querySelector('.hero');
//   const images = [
//     './images/1.jpg',
//     './images/2.jpg',
//     './images/3.jpg',
//   ];

//   let current = 0;

//   function changeBackground() {
//     current = (current + 1) % images.length;
//     hero.style.backgroundImage = `url('${images[current]}')`;
//   }

//   setInterval(changeBackground, 4000);


  const images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg'
  ];

  const bg1 = document.querySelector('.bg1');
  const bg2 = document.querySelector('.bg2');

  let current = 0;
  let isBg1Active = true;

  bg1.style.backgroundImage = `url('${images[current]}')`;

  setInterval(() => {
    const next = (current + 1) % images.length;
    const nextImage = `url('${images[next]}')`;

    if (isBg1Active) {
      bg2.style.backgroundImage = nextImage;
      bg2.style.opacity = 1;
      bg1.style.opacity = 0;
    } else {
      bg1.style.backgroundImage = nextImage;
      bg1.style.opacity = 1;
      bg2.style.opacity = 0;
    }

    isBg1Active = !isBg1Active;
    current = next;
  }, 4000);
