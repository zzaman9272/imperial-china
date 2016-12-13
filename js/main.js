// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 100
    }
});

$('#form-date').datetimepicker({
  timepicker:false,
  minDate:0,
  maxDate:'+1970/03/01'
});

$('#form-time').datetimepicker({
  datepicker:false
});
