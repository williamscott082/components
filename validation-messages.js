// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};

// Define then the messages
window.ParsleyConfig.i18n.en = jQuery.extend(window.ParsleyConfig.i18n.en || {}, {
    defaultMessage: "Please check you have entered the value correctly",
    type: {
        email:        "Please enter a valid email address",
        url:          "Please enter a valid url",
        number:       "Please enter a valid number",
        integer:      "Please enter a valid integer",
        digits:       "This value should be digits",
        alphanum:     "This value should be alphanumeric"
    },
    notblank:       "This value should not be blank",
    required:       "This value is required",
    pattern:        "This value seems to be invalid",
    min:            "This value should be greater than or equal to %s",
    max:            "This value should be lower than or equal to %s",
    range:          "This value should be between %s and %s",
    minlength:      "This value is too short. It should have %s characters or more",
    maxlength:      "This value is too long. It should have %s characters or fewer",
    length:         "This value length is invalid. It should be between %s and %s characters long",
    mincheck:       "You must select at least %s choices",
    maxcheck:       "You must select %s choices or fewer",
    check:          "You must select between %s and %s choices",
    equalto:        "This value should be the same"
});

// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.Parsley) {
    window.Parsley.addCatalog('en', window.ParsleyConfig.i18n.en, true);
}
