document.getElementById('upper-case')
    .addEventListener('click', function () {
       let textarea = document.querySelector('textarea');
       textarea.value = textarea.value.toUpperCase();
    });
document.getElementById('lower-case')
    .addEventListener('click', function () {
        let textarea = document.querySelector('textarea');
        textarea.value = textarea.value.toLowerCase();
    });
document.getElementById('proper-case')
    .addEventListener('click', function () {
        let textarea = document.querySelector('textarea');
        textarea.value = textarea.value
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });
document.getElementById('sentence-case')
    .addEventListener('click', function () {
        let textarea = document.querySelector('textarea');
        let text = textarea.value.toLowerCase();
        let sentences = text.split(/([.!?]\s*)/);
        for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
        }
        textarea.value = sentences.join('');

    });
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById('save-text-file')
    .addEventListener('click', function () {
        let textarea = document.querySelector('textarea');
        let textFile = "text.txt";
        download(textFile,textarea.value);
    });
document.getElementById('make-america-great-again')
    .addEventListener('click', function () {
        let textarea = document.querySelector('textarea');

        textarea.classList.add('flag-america');

        let MAGA = textarea.value.toLowerCase();
        let words = MAGA.split(' ');

        for (let i = 0; i < words.length; i++) {
            if (words[i].startsWith('m')) {
                words[i] = 'make '.repeat(3);
            } else if (words[i].startsWith('a')) {
                words[i] = 'america '.repeat(3);
            } else if (words[i].startsWith('g')) {
                words[i] = 'great '.repeat(3);
            }
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1) + '🦅';
        }

        textarea.value = words.join(' ');
    });
document.getElementById('reset')
    .addEventListener('click', function () {
        let textarea = document.querySelector('textarea');
        textarea.value = '';
        textarea.classList.remove('flag-america');
    });