function initparticles() {
  bubbles()
  hearts()
  confetti()
}

function bubbles() {
  $.each($(".particletext.bubbles"), function () {
    const bubblecount = ($(this).width() / 50) * 10
    for (let i = 0; i <= bubblecount; i++) {
      const size = ($.rnd(40, 80) / 10)
      $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>')
    }
  })
}

function hearts() {
  $.each($(".particletext.hearts"), function () {
    const heartcount = ($(this).width() / 50) * 5
    for (let i = 0; i < heartcount; i++) {
      const size = ($.rnd(60, 120) / 10)
      $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>')
    }
  })
}

function confetti() {
  $.each($(".particletext.confetti"), function () {
    const confetticount = ($(this).width() / 50) * 10;
    for (let i = 0; i <= confetticount; i++) {
      $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
    }
  });
}

jQuery.rnd = function (m, n) {
  m = parseInt(m)
  n = parseInt(n)
  return Math.floor(Math.random() * (n - m + 1)) + m
}

initparticles()
