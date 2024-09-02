interface SelectEvent extends Event {
  target: HTMLSelectElement;
}
interface Translations {
  greeting: Record<string, string>;
  body: Record<string, string>;
}
fetch('/translation/languages.json')
  .then((response: Response) => response.json())
  .then((translations: Translations) => {
    function updateFormLanguage(language: string): void {
      const greetingElement = document.getElementById('greeting');
      const bodyElement = document.getElementById('body');
      greetingElement.textContent = translations.greeting[language];
      bodyElement.textContent = translations.body[language];
    }
    const languageSwitcher = document.getElementById('switcher');
      languageSwitcher.addEventListener('change', (event: SelectEvent) => {
        updateFormLanguage(event.target.value);
      });
    updateFormLanguage('cz');
  });
