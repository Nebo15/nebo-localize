(function() {
  $.getBrowserLanguage = function () {
    var nav = window.navigator,
      browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
      i,
      language;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
      for (i = 0; i < nav.languages.length; i++) {
        language = nav.languages[i];
        if (language && language.length) {
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = nav[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        return language;
      }
    }

    return null;
  };

  $.localize = function (strings) {
    strings = $.extend({}, strings || {});
    var $all = $('*:not(script,meta,br,ul,form,head,body,link,style)');

    // Replace all placeholder texts
    $all.find('[placeholder]').each(function() {
      var $this = $(this);
      var placeholder = $this.attr('placeholder');
      if(placeholder && strings[placeholder]) {
        $this.attr('placeholder', strings[placeholder]);
      }
    });

    // Replace all text nodes
    $all.contents().filter(function(){
      return this.nodeType === 3;
    }).filter(function(){
      return $.trim(this.nodeValue);
    }).each(function(){
      for(string in strings) {
        if(string.indexOf($.trim(this.nodeValue)) === 0) {
          this.nodeValue = this.nodeValue.replace(string, strings[string]);
          break;
        }
      }
    });

    $('input[value]').each(function() {
      $(this).val($(this).val().replace(/\*/g, strings['*']));
    });

    return this;
  }
})();
