function validateForm(data) {
    let errors = []

    if (data.first_name === '') {
        errors.push('First name is empty')
    }

    if (data.last_name === '') {
        errors.push('Last name is empty')
    }

    if (data.email === '') {
        errors.push('Email is empty')
    }

    if (data.phone === '') {
        errors.push('Phone is empty')
    }

    if (data.address === '') {
        errors.push('Address is empty')
    }

    if (data.zipcode === '') {
        errors.push('Zipcode is empty')
    }

    if (data.place === '') {
        errors.push('Place is empty')
    }

    return errors
}

function buy(event) {
    event.preventDefault()

    let data = {
        'first_name': document.querySelector('input[name=first_name]').value,
        'last_name': document.querySelector('input[name=last_name]').value,
        'email': document.querySelector('input[name=email]').value,
        'phone': document.querySelector('input[name=phone]').value,
        'address': document.querySelector('input[name=address]').value,
        'zipcode': document.querySelector('input[name=zipcode]').value,
        'place': document.querySelector('input[name=place]').value,
    }

    let errors = validateForm(data)

    if (errors.length) {
        console.log('Errors', errors)
    } else {
        var stripe = Stripe('{{ pub_key }}')

        fetch('/order/start_order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': '{{ csrf_token }}'
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (session) {
                return stripe.redirectToCheckout({ sessionId: session.session.id })
            })
            .then(function (result) {
                if (result.error) {
                    alert(result.error.message)
                }
            })
            .catch(function (error) {
                console.log('Errors', error)
            })
    }

    return false
}