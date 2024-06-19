document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formData = {
        name: name,
        email: email,
        message: message
    };
    
    fetch('https://jsonplaceholder.typicode.com/posts', {  // Replace with your backend URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        alert('An error occurred. Please try again later.');
        console.error('Error:', error);
    });
});
