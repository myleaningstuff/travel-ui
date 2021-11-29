
var colors = [["red", "#ff005b"], ["green","#00E676"], ["blue","#2196F3"]];
var randomColorId=Math.floor(Math.random() * colors.length);
var randomColor = colors[randomColorId];
var initialColor = randomColor[0];
var initialHeartColor = randomColor[1];

function colorChange(color){
  $("#span").typed({
    stringsElement: $("#typedStrings"),
    typeSpeed: 1.5,
    showCursor: false,
    contentType: "html",
    startDelay: 1000,
  });

  $('#span').attr('class', '').addClass(color);
}
// setTimeout(colorChange, 2000, initialColor);
colorChange(initialColor);

// r,g,b
var stroke_colors = ["fe3a80","69F0AE","42A5F5"];
var fill_colors = ["f9acc7", "b5ebd1", "a3cdef"];

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: fill_colors[randomColorId] },
    shape: {
      type: "circle",
      stroke: { width: 4, color: stroke_colors[randomColorId] },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 0,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 126.26362266116361,
      color: "#fdfdfd",
      opacity: 0.5932624625202434,
      width: 1.5782952832645454
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 1443.0708547789707, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: false, mode: "bubble" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 207.079689136843,
        size: 56.84540486109416,
        duration: 3.816762897816322,
        opacity: 1,
        speed: 3
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});


