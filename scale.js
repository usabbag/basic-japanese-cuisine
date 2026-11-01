// Scaler: each .recipe has data-base (number) and an <input class="n">.
// Every <span data-q="N"> inside is multiplied by input/base.
// Nothing else. No storage, no framework.
(function () {
  function fmt(v) {
    if (v >= 100) return String(Math.round(v));
    if (v >= 10) return String(Math.round(v * 10) / 10);
    return String(Math.round(v * 100) / 100);
  }
  document.querySelectorAll('.recipe').forEach(function (r) {
    var base = parseFloat(r.dataset.base);
    var input = r.querySelector('input.n');
    if (!base || !input) return;
    var qs = r.querySelectorAll('[data-q]');
    function update() {
      var n = parseFloat(input.value);
      if (!(n > 0)) return;
      var k = n / base;
      qs.forEach(function (el) { el.textContent = fmt(parseFloat(el.dataset.q) * k); });
    }
    input.addEventListener('input', update);
    update();
  });
})();
