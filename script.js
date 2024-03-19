// validate email


// dropdown functionality
function toggleDropdown() {
    // arrow flips down
    $('#dropdown').toggleClass('open')
}

function handleQtySelection() {
    const selectedQtyText = $(this).text();
    $('#dropdown .selected .option').text(selectedQtyText);
};

$('#dropdown').on('click', toggleDropdown);
$('#dropdown .options .option').on('click', handleQtySelection)

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