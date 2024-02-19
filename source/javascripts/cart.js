(function() {
  $(function() {
    return $('body#cart').on('click', '.remove', function(event) {
      event.preventDefault();
      return $(this).closest('li').find('input[id$=_qty]').val(0).closest('form').submit();
    });
  });

}).call(this);