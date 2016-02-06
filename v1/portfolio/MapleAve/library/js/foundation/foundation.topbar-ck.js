(function(e,t,n,r){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.0.3",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0},init:function(t,n,r){Foundation.inherit(this,"addCustomRule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar");this.bindings(n,r);e("[data-topbar]",this.scope).each(function(){var t=e(this),n=t.data("topbar-init"),r=e("section",this),s=e("> ul",this).first();t.data("index",0);var o=t.parent();if(o.hasClass("fixed")||o.hasClass(n.sticky_class)){i.settings.sticky_class=n.sticky_class;i.settings.sticky_topbar=t;t.data("height",o.outerHeight());t.data("stickyoffset",o.offset().top)}else t.data("height",t.outerHeight());n.assembled||i.assemble(t);n.is_hover?e(".has-dropdown",t).addClass("not-click"):e(".has-dropdown",t).removeClass("not-click");i.addCustomRule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }");o.hasClass("fixed")&&e("body").addClass("f-topbar-fixed")})},toggle:function(n){var r=this;if(n)var i=e(n).closest("[data-topbar]");else var i=e("[data-topbar]");var s=i.data("topbar-init"),o=e("section, .section",i);if(r.breakpoint()){if(!r.rtl){o.css({left:"0%"});e(">.name",o).css({left:"100%"})}else{o.css({right:"0%"});e(">.name",o).css({right:"100%"})}e("li.moved",o).removeClass("moved");i.data("index",0);i.toggleClass("expanded").css("height","")}if(s.scrolltop){if(!i.hasClass("expanded")){if(i.hasClass("fixed")){i.parent().addClass("fixed");i.removeClass("fixed");e("body").addClass("f-topbar-fixed")}}else if(i.parent().hasClass("fixed"))if(s.scrolltop){i.parent().removeClass("fixed");i.addClass("fixed");e("body").removeClass("f-topbar-fixed");t.scrollTo(0,0)}else i.parent().removeClass("expanded")}else{i.parent().hasClass(r.settings.sticky_class)&&i.parent().addClass("fixed");if(i.parent().hasClass("fixed"))if(!i.hasClass("expanded")){i.removeClass("fixed");i.parent().removeClass("expanded");r.update_sticky_positioning()}else{i.addClass("fixed");i.parent().addClass("expanded")}}},timer:null,events:function(n){var r=this;e(this.scope).off(".topbar").on("click.fndtn.topbar","[data-topbar] .toggle-topbar",function(e){e.preventDefault();r.toggle(this)}).on("click.fndtn.topbar","[data-topbar] li.has-dropdown",function(t){var n=e(this),i=e(t.target),s=n.closest("[data-topbar]"),o=s.data("topbar-init");if(i.data("revealId")){r.toggle();return}if(r.breakpoint())return;if(o.is_hover&&!Modernizr.touch)return;t.stopImmediatePropagation();if(n.hasClass("hover")){n.removeClass("hover").find("li").removeClass("hover");n.parents("li.hover").removeClass("hover")}else{n.addClass("hover");i[0].nodeName==="A"&&i.parent().hasClass("has-dropdown")&&t.preventDefault()}}).on("click.fndtn.topbar","[data-topbar] .has-dropdown>a",function(t){if(r.breakpoint()){t.preventDefault();var n=e(this),i=n.closest("[data-topbar]"),s=i.find("section, .section"),o=n.next(".dropdown").outerHeight(),u=n.closest("li");i.data("index",i.data("index")+1);u.addClass("moved");if(!r.rtl){s.css({left:-(100*i.data("index"))+"%"});s.find(">.name").css({left:100*i.data("index")+"%"})}else{s.css({right:-(100*i.data("index"))+"%"});s.find(">.name").css({right:100*i.data("index")+"%"})}i.css("height",n.siblings("ul").outerHeight(!0)+i.data("height"))}});e(t).off(".topbar").on("resize.fndtn.topbar",r.throttle(function(){r.resize.call(r)},50)).trigger("resize");e("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar",function(t){var n=e(t.target).closest("li").closest("li.hover");if(n.length>0)return;e("[data-topbar] li").removeClass("hover")});e(this.scope).on("click.fndtn.topbar","[data-topbar] .has-dropdown .back",function(t){t.preventDefault();var n=e(this),i=n.closest("[data-topbar]"),s=i.find("section, .section"),o=i.data("topbar-init"),u=n.closest("li.moved"),a=u.parent();i.data("index",i.data("index")-1);if(!r.rtl){s.css({left:-(100*i.data("index"))+"%"});s.find(">.name").css({left:100*i.data("index")+"%"})}else{s.css({right:-(100*i.data("index"))+"%"});s.find(">.name").css({right:100*i.data("index")+"%"})}i.data("index")===0?i.css("height",""):i.css("height",a.outerHeight(!0)+i.data("height"));setTimeout(function(){u.removeClass("moved")},300)})},resize:function(){var t=this;e("[data-topbar]").each(function(){var r=e(this),i=r.data("topbar-init"),s=r.parent("."+t.settings.sticky_class),o;if(!t.breakpoint()){var u=r.hasClass("expanded");r.css("height","").removeClass("expanded").find("li").removeClass("hover");u&&t.toggle(r)}if(s.length>0)if(s.hasClass("fixed")){s.removeClass("fixed");o=s.offset().top;e(n.body).hasClass("f-topbar-fixed")&&(o-=r.data("height"));r.data("stickyoffset",o);s.addClass("fixed")}else{o=s.offset().top;r.data("stickyoffset",o)}})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},assemble:function(t){var n=this,r=t.data("topbar-init"),i=e("section",t),s=e("> ul",t).first();i.detach();e(".has-dropdown>a",i).each(function(){var t=e(this),n=t.siblings(".dropdown"),i=t.attr("href");if(r.mobile_show_parent_link&&i&&i.length>1)var s=e('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="'+i+'">'+t.text()+"</a></li>");else var s=e('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');r.custom_back_text==1?e("h5>a",s).html(r.back_text):e("h5>a",s).html("&laquo; "+t.html());n.prepend(s)});i.appendTo(t);this.sticky();this.assembled(t)},assembled:function(t){t.data("topbar-init",e.extend({},t.data("topbar-init"),{assembled:!0}))},height:function(t){var n=0,r=this;e("> li",t).each(function(){n+=e(this).outerHeight(!0)});return n},sticky:function(){var n=e(t),r=this;e(t).on("scroll",function(){r.update_sticky_positioning()})},update_sticky_positioning:function(){var n="."+this.settings.sticky_class,r=e(t);if(e(n).length>0){var i=this.settings.sticky_topbar.data("stickyoffset");if(!e(n).hasClass("expanded"))if(r.scrollTop()>i){if(!e(n).hasClass("fixed")){e(n).addClass("fixed");e("body").addClass("f-topbar-fixed")}}else if(r.scrollTop()<=i&&e(n).hasClass("fixed")){e(n).removeClass("fixed");e("body").removeClass("f-topbar-fixed")}}},off:function(){e(this.scope).off(".fndtn.topbar");e(t).off(".fndtn.topbar")},reflow:function(){}}})(jQuery,this,this.document);