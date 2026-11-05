window.addEventListener('scroll', function () {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .nav-pills .nav-link');

      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 150)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });
