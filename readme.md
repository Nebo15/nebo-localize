# Nebo Localize

Localization library for sites that can't be localized on a back-end or back-end localization would be too expensive. Simply replaces all strings on a page with localized value. Also replaces value for input placeholders.
 
### Example 
````
// Localization rules stored in JS object, as string -> localized string
var lang = {
 'String in English': 'Localized string in different language',
 'Enter card': 'Entero cardo senioro',
};

// Replace all strings
$.localize(lang);
````
