/*! http://mths.be/placeholder v2.0.7 by @mathias */!function(e,t,n){function r(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function i(e,r){var i=this,s=n(i);if(i.value==s.attr("placeholder")&&s.hasClass("placeholder"))if(s.data("placeholder-password")){if(s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id")),e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder"),i==t.activeElement&&i.select()}function s(){var e,t=this,s=n(t),o=this.id;if(""==t.value){if("password"==t.type){if(!s.data("placeholder-textinput")){try{e=s.clone().attr({type:"text"})}catch(u){e=n("<input>").attr(n.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":o}).bind("focus.placeholder",i),s.data({"placeholder-textinput":e,"placeholder-id":o}).before(e)}s=s.removeAttr("id").hide().prev().attr("id",o).show()}s.addClass("placeholder"),s[0].value=s.attr("placeholder")}else s.removeClass("placeholder")}var o,u,a="placeholder"in t.createElement("input"),f="placeholder"in t.createElement("textarea"),l=n.fn,c=n.valHooks;a&&f?(u=l.placeholder=function(){return this},u.input=u.textarea=!0):(u=l.placeholder=function(){var e=this;return e.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":i,"blur.placeholder":s}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},u.input=a,u.textarea=f,o={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var o=n(e);return o.data("placeholder-enabled")?(""==r?(e.value=r,e!=t.activeElement&&s.call(e)):o.hasClass("placeholder")?i.call(e,!0,r)||(e.value=r):e.value=r,o):e.value=r}},a||(c.input=o),f||(c.textarea=o),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(i);setTimeout(function(){e.each(s)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);