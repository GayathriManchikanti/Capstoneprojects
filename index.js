document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const dobInput = document.getElementById('dob');
    const dobValidation = document.getElementById('dob-validation');
    const tableBody = document.querySelector('#registration-table tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const currentDate = new Date();
        const dob = new Date(dobInput.value);
        const age = currentDate.getFullYear() - dob.getFullYear();

        if (age < 18 || age > 55) {
            dobValidation.textContent = 'Age should be between 18 and 55 years.';
            return;
        } else {
            dobValidation.textContent = '';
        }

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const acceptedTerms = form.terms.checked;

        if (name && email && password && acceptedTerms) {
            // Add data to the table
            const newRow = tableBody.insertRow();
            newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dobInput.value}</td><td>${acceptedTerms ? 'True' : 'False'}</td>`;
            
            // Clear form inputs
            form.reset();
        } else {
            alert('Please fill in all the required fields and accept the terms.');
        }
    });
});
