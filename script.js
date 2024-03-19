// validate email


// dropdown functionality
    // arrow flips down


// radio btn functionality
function handleRadioBtnChange() {
    $('.radio-btn.active').attr('aria-checked', 'false');
    $('.radio-btn.active').removeClass('active');
    $(this).addClass('active')
    $(this).attr('aria-checked', 'true');
}

$('.radio-btn').on('click', handleRadioBtnChange);


// submit btn functionality
    // error messaging if missing required fields