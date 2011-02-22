
$('a.external').live('click', function() {
  var newWindow = window.open(this.href, 'external');
  newWindow.focus();
  return false;
});
