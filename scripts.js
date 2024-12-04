// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.querySelector('#resume-download a');
    
    resumeLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Ваше резюме успешно загружено!');
    });
});
