// Smooth Scroll for Navigation Links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
  