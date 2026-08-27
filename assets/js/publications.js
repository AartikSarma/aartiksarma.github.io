/* Publication filters. Progressive enhancement — the full list renders without JS. */
(function () {
  var toolbar = document.querySelector('.pub-toolbar');
  if (!toolbar) return;

  var buttons = Array.prototype.slice.call(toolbar.querySelectorAll('.filter'));
  var items = Array.prototype.slice.call(document.querySelectorAll('.pub'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('.pub-year'));

  function apply(filter) {
    items.forEach(function (item) {
      var match =
        filter === 'all' ||
        item.dataset.role === filter ||
        item.dataset.kind === filter;
      item.hidden = !match;
    });

    // Hide a year heading once every paper under it is filtered out.
    groups.forEach(function (group) {
      var visible = group.querySelectorAll('.pub:not([hidden])').length;
      group.hidden = visible === 0;
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      apply(btn.dataset.filter);
    });
  });

  apply('all');
})();
