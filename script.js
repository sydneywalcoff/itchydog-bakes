// validate email


// dropdown functionality
function toggleDropdown() {
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
    if (vals.length == 1) {
        errorText = `${vals[0]} is a required field`;
    } else {
        errorText = `${vals[0]} and ${vals[1]} are required fields`;
    }
    $('form .error').text(errorText)
}

function handleErrorResolution(fixedVal) {
    let errorText = $('form .error').text().split(' ');
    let newText = ''
    if (errorText.length !== 5) {
        if (fixedVal === 'name') {
            newText = 'email is a required field';
        } else {
            newText = 'name is a required field';
        }
    }
    $('form .error').text(newText);
}

$('#name-input').on('blur', function () {
    if ($(this).val().length && $('form .error').text()) {
        let val = $(this).attr('id').split('-')[0];
        handleErrorResolution(val);
    }
})
$('#email-input').on('blur', function () {
    if ($(this).val().length && $('form .error').text()) {
        let val = $(this).attr('id').split('-')[0];
        handleErrorResolution(val);
    }
})

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
    if (emptyVals.length) {
        generateErrorMessaging(emptyVals);
        return {};
    }
    const date = new Date().toLocaleDateString();

    return {
        name,
        email,
        other,
        shippingOrPickup,
        selectedQty,
        date
    }
}


// submit btn functionality
$('#submit-btn').on('click', function (e) {
    e.preventDefault();
    const formData = gatherFormData();
    if(!Object.keys(formData).length) return;
    let data = {
        service_id: 'service_wmnu86q',
        template_id: 'template_6ivdsx5',
        user_id: 'Y4DVl1ny8VVvZKICh', 
        template_params: {
            ...formData
        }
    }

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        $('form').addClass('success');
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
})