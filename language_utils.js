// language_utils.js - Utility functions for language handling

/**
 * Populate a select element with all available languages
 * @param {HTMLSelectElement} selectElement - The select element to populate
 * @param {string} defaultLanguage - Optional default language to select
 */
function populateLanguageOptions(selectElement, defaultLanguage = null) {
    if (!selectElement) return;
    
    // Clear existing options
    selectElement.innerHTML = '';
    
    // Get all available languages from languageNameTranslations
    const languages = Object.keys(languageNameTranslations.English);
    
    // Add English as first option if it's not already included
    if (!languages.includes('English')) {
        const englishOption = document.createElement('option');
        englishOption.value = 'English';
        englishOption.textContent = 'English';
        selectElement.appendChild(englishOption);
    }
    
    // Add all other languages
    languages.sort().forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        
        // Set as selected if it matches the default language
        if (defaultLanguage && language === defaultLanguage) {
            option.selected = true;
        }
        
        selectElement.appendChild(option);
    });
}

/**
 * Get the user's preferred interface language
 * @returns {string} The interface language code
 */
function getUserInterfaceLanguage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser?.language || localStorage.getItem('interfaceLanguage') || 'English';
}

/**
 * Update all language dropdowns on the page
 */
function updateAllLanguageDropdowns() {
    // Update language dropdowns in forms
    const languageSelects = document.querySelectorAll('select[data-language-select]');
    languageSelects.forEach(select => {
        populateLanguageOptions(select);
    });
}

/**
 * Translate language names based on the interface language
 * @param {string} languageName - The original language name
 * @param {string} interfaceLanguage - The interface language
 * @returns {string} The translated language name
 */
function translateLanguageName(languageName, interfaceLanguage = null) {
    if (!interfaceLanguage) {
        interfaceLanguage = getUserInterfaceLanguage();
    }
    
    // If translations exist for this interface language
    if (languageNameTranslations[interfaceLanguage] && 
        languageNameTranslations[interfaceLanguage][languageName]) {
        return languageNameTranslations[interfaceLanguage][languageName];
    }
    
    // Fallback to English or the original name
    return languageNameTranslations.English?.[languageName] || languageName;
}