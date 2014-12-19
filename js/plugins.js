// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/* Lettering.JS 0.6.1 by Dave Rupert  - http://daverupert.com */
(function($){function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after});t.empty().append(inject)}}var methods={init:function(){return this.each(function(){injector($(this),'','char','')})},words:function(){return this.each(function(){injector($(this),' ','word',' ')})},lines:function(){return this.each(function(){var r="eefec303079ad17405c889e092e105b0";injector($(this).children("br").replaceWith(r).end(),r,'line','')})}};$.fn.lettering=function(method){if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1))}else if(method==='letters'||!method){return methods.init.apply(this,[].slice.call(arguments,0))}$.error('Method '+method+' does not exist on jQuery.lettering');return this}})(jQuery);


(function(a){a.fn.animateLetters=function(b,c,d,e){function r(){var b="";var c=a(f).find("span");for(var d=0;d<c.length;d++){b+=a(c[d]).text()}a(f).empty();a(f).text(b)}function q(a){var b={};for(propertyName in a){var c=propertyName.toString();b[c]=0;if(propertyName==="opacity"){b[c]=1}}return b}function p(){h++;if(h==g.length){if(m){r()}if(o){o()}}}var f=this;var g=new Array;var h=0;var d=d;var i=b;var j=c;var k=1e3;var l=false;var m=false;var n=0;var o=e;g=a(this).find("span");if(d&&d.time!=undefined){k=d.time}if(d&&d.randomOrder){l=d.randomOrder}if(d&&d.reset){m=d.reset}if(i===undefined||i===null){i=q(j)}if(j===undefined||j===null){j=q(i)}g.each(function(){a(this).css("position","relative");a(this).css(i);a(this).delay(n).animate(j,{complete:p});if(l===true){n=Math.random()*k;n-=k/g.length;if(n<0){n=0}}else{if(k>10){n+=k/10}}})}})(jQuery)