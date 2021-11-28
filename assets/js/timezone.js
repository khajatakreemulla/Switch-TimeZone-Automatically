$(document).ready(function () {
    $('.speakers-time').each(function () {
            $time = $(this).data('date')
            $mydate =  moment.parseZone($time).local().format('HH:mm')
            $(this).html($mydate);    
    })
   
});