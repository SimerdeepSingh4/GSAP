let body = document.querySelector("body")
let marque = document.querySelectorAll("#move .marque")
let marque2 = document.querySelectorAll("#move2 .marque2")




  gsap.fromTo(".move", 
      { yPercent: 0 },
      {
        yPercent: -50,
        duration: 20,
        repeat: -1,
        ease: "none",
      }
    );


  gsap.fromTo(".move2", 
      { yPercent: -50 },
      {
        yPercent: 0,
        repeat: -1,
        duration: 20,
        ease: "none",
      }
    );


    gsap.fromTo(".move", 
      { yPercent: 0 },
      {
        yPercent: -50,
        duration: 20,
        repeat: -1,
        ease: "none",
      }
    );

  const posters = [
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC1.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC19.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC9.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC18.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC4.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC11.jpg"
  ];
  const posters2 = [
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC14.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC7.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC11.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC28.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC13.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC23.jpg"
  ];
  const posters3 = [
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC18.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC3.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC11.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC22.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC1.jpg",
    "https://ik.imagekit.io/dhyh95euj/movie%20posters/PC17.jpg"
  ];