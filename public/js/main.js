document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;
        const resume = document.getElementById('resume').files[0];

        if (!name || !email || !phone || !location ||!resume) {
            alert('Please fill out all fields and upload your resume.');
            event.preventDefault();
        }
    });
});
