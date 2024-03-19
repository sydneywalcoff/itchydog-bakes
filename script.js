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

// generate Error Messaging
function generateErrorMessaging(vals) {
    let errorText;
    if(vals.length == 1) {
        errorText = `${vals[0]} is a required field`;
    } else {
        errorText = `${vals[0]} and ${vals[1]} are required fields`;
    }

    $('form .error').text(errorText)
}

// gather formData 
function gatherFormData() {
    const emptyVals = [];
    const name = $('#name-input').val();
    const email = $('#email-input').val();
    if (!name) emptyVals.push('name');
    if (!email) emptyVals.push('email');
    const other = $('#other-textbox').val();
    const shippingOrPickup = $('#shipping-btn').attr('aria-checked') == 'true' ? 'shipping' : 'pickup';
    const selectedQty = $('#dropdown .selected .option').text();

    if (emptyVals) {
        generateErrorMessaging(emptyVals);
        return {};
    }

    return {
        name,
        email,
        other,
        shippingOrPickup,
        selectedQty
    }
}


// submit btn functionality
$('#submit-btn').on('click', function (e) {
    e.preventDefault();
    const formData = gatherFormData();

    // error messaging if missing required fields
})