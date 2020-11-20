jQuery(document).ready(function ($) {
    $(".scroll, .navbar li a, .footer li a").click(function (event) {
      $("html,body").animate(
        { scrollTop: $(this.hash).offset().top },
        1000
      );
    });
  });

  

  $(document).ready(function () {
    const defaults = {
      containerID: "toTop", // fading element id
      containerHoverID: "toTopHover", // fading element hover id
      scrollSpeed: 100,
      easingType: "linear",
    };
    $().UItoTop({ easingType: "easeOutQuart" });
  });

  const pause = document.querySelector(".pause");
  const audio = document.querySelector(".audio");
  const mymusic = document.getElementById("mymusic");
  mymusic.volume = .2; 

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      pause.innerHTML = `<i class="fa fa-volume-up"></i>`;
      pause.style.color = "#053C3B";
    } else {
      audio.pause();
      pause.innerHTML = `<i class="fa fa-volume-mute"></i>`;
      pause.style.color = "#053C3B";
    }
  }

// Countdown
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let countdown = "dec 14, 2020 20:30:00",
        countDown = new Date(countdown).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Aing Kawin!";
            countdown.style.display = "none";
            content.style.display = "flex";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());