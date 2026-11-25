// Opening one menu closes the other. Works with the <details class="dropdown"> menus in the header.
(function () {
  var menus = document.querySelectorAll('details.dropdown');
  menus.forEach(function (menu) {
    menu.addEventListener('toggle', function () {
      if (!menu.open) return;
      menus.forEach(function (other) {
        if (other !== menu) other.open = false;
      });
    });
  });
})();
