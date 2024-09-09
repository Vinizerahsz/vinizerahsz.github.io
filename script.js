function redirecionar() {
      // Altera a URL atual para a nova página
      window.location.href = "./tela2/index.html";
    }

window.addEventListener('scroll', function() {
      var blackDiv = document.querySelector('.black-div');
      if (window.pageYOffset >= 500) {
        blackDiv.style.opacity = '1';
        blackDiv.style.zIndex = '1';
      } else {
        blackDiv.style.opacity = '0';
        blackDiv.style.zIndex = '-1';
      }
    });

 var element = document.querySelector('.grow-element');

    element.addEventListener('mouseover', function() {
      element.style.transform = 'scale(1.1)';
    });

    element.addEventListener('mouseout', function() {
      element.style.transform = 'scale(1)';
    });