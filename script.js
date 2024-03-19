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

// gather formData 
function gatherFormData() {
    const name = $('#name-input').val();
    const email = $('#email-input').val();
    const other = $('#other-textbox').val();
    const shippingOrPickup = $('#shipping-btn').attr('aria-checked') == 'true' ? 'shipping' : 'pickup' ;
    const selectedQty = $('#dropdown .selected .option').text();

    return {
        name,
        email,
        other, 
        shippingOrPickup,
        selectedQty
    }
}


// submit btn functionality
$('#submit-btn').on('click', function(e){
    e.preventDefault();
    const formData = gatherFormData();

    console.log(formData)
    // error messaging if missing required fields
})