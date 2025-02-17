document.getElementById('upper-case')
    .addEventListener('click', function () {
       let textarea = document.querySelector('textarea');
       textarea.value = textarea.value.toUpperCase();
    });