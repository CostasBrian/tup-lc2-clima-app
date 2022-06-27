const btn = document.getElementById('button');
const formulario = document.getElementById('form')

formulario.addEventListener('submit', function() {

    btn.value = 'Sending...';

    const serviceID = 'service_ak20yfj';
    const templateID = 'template_3yb8552';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});