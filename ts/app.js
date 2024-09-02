fetch('translation/languages.json')
    .then(function (response) { return response.json(); })
    .then(function (translations) {
    function updateFormLanguage(language) {
        var greetingElement = document.getElementById('greeting');
        var bodyElement = document.getElementById('body');
        greetingElement.textContent = translations.greeting[language];
        bodyElement.textContent = translations.body[language];
    }
    var languageSwitcher = document.getElementById('switcher');
    languageSwitcher.addEventListener('change', function (event) {
        updateFormLanguage(event.target.value);
    });
    updateFormLanguage('cz');
});
