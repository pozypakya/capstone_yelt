/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=c9bf9003d8bbd669c876)
 * Config saved to config.json and https://gist.github.com/c9bf9003d8bbd669c876
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.4",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.4",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=i(o),s={relatedTarget:this};n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.4",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var n=i(o),a=n.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var h=l.index(e.target);38==e.which&&h>0&&h--,40==e.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(u);r="bottom"==r&&d.bottom+c>g.bottom?"top":"top"==r&&d.top-c<g.top?"bottom":"right"==r&&d.right+p>g.width?"left":"left"==r&&d.left-p<g.left?"right":r,s.removeClass(f).addClass(r)}var m=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(m,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.width&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.4",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.4",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=t(document.body).height();"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.4",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);
this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.4",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

/*
 * bootstrap-tagsinput v0.4.2 by Tim Schlechter
 *
 */

!function(a){"use strict";function b(b,c){this.itemsArray=[],this.$element=a(b),this.$element.hide(),this.isSelect="SELECT"===b.tagName,this.multiple=this.isSelect&&b.hasAttribute("multiple"),this.objectItems=c&&c.itemValue,this.placeholderText=b.hasAttribute("placeholder")?this.$element.attr("placeholder"):"",this.inputSize=Math.max(1,this.placeholderText.length),this.$container=a('<div class="bootstrap-tagsinput"></div>'),this.$input=a('<input type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container),this.$element.after(this.$container);var d=(this.inputSize<3?3:this.inputSize)+"em";this.$input.get(0).style.cssText="width: "+d+" !important;",this.build(c)}function c(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(a){return a[c]}}}function d(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(){return c}}}function e(a){return a?i.text(a).html():""}function f(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"==a.selectionStart)&&(b=a.selectionStart);return b}function g(b,c){var d=!1;return a.each(c,function(a,c){if("number"==typeof c&&b.which===c)return d=!0,!1;if(b.which===c.which){var e=!c.hasOwnProperty("altKey")||b.altKey===c.altKey,f=!c.hasOwnProperty("shiftKey")||b.shiftKey===c.shiftKey,g=!c.hasOwnProperty("ctrlKey")||b.ctrlKey===c.ctrlKey;if(e&&f&&g)return d=!0,!1}}),d}var h={tagClass:function(){return"label label-info"},itemValue:function(a){return a?a.toString():a},itemText:function(a){return this.itemValue(a)},freeInput:!0,addOnBlur:!0,maxTags:void 0,maxChars:void 0,confirmKeys:[13,44],onTagExists:function(a,b){b.hide().fadeIn()},trimValue:!1,allowDuplicates:!1};b.prototype={constructor:b,add:function(b,c){var d=this;if(!(d.options.maxTags&&d.itemsArray.length>=d.options.maxTags||b!==!1&&!b)){if("string"==typeof b&&d.options.trimValue&&(b=a.trim(b)),"object"==typeof b&&!d.objectItems)throw"Can't add objects when itemValue option is not set";if(!b.toString().match(/^\s*$/)){if(d.isSelect&&!d.multiple&&d.itemsArray.length>0&&d.remove(d.itemsArray[0]),"string"==typeof b&&"INPUT"===this.$element[0].tagName){var f=b.split(",");if(f.length>1){for(var g=0;g<f.length;g++)this.add(f[g],!0);return void(c||d.pushVal())}}var h=d.options.itemValue(b),i=d.options.itemText(b),j=d.options.tagClass(b),k=a.grep(d.itemsArray,function(a){return d.options.itemValue(a)===h})[0];if(!k||d.options.allowDuplicates){if(!(d.items().toString().length+b.length+1>d.options.maxInputLength)){var l=a.Event("beforeItemAdd",{item:b,cancel:!1});if(d.$element.trigger(l),!l.cancel){d.itemsArray.push(b);var m=a('<span class="tag '+e(j)+'">'+e(i)+'<span data-role="remove"></span></span>');if(m.data("item",b),d.findInputWrapper().before(m),m.after(" "),d.isSelect&&!a('option[value="'+encodeURIComponent(h)+'"]',d.$element)[0]){var n=a("<option selected>"+e(i)+"</option>");n.data("item",b),n.attr("value",h),d.$element.append(n)}c||d.pushVal(),(d.options.maxTags===d.itemsArray.length||d.items().toString().length===d.options.maxInputLength)&&d.$container.addClass("bootstrap-tagsinput-max"),d.$element.trigger(a.Event("itemAdded",{item:b}))}}}else if(d.options.onTagExists){var o=a(".tag",d.$container).filter(function(){return a(this).data("item")===k});d.options.onTagExists(b,o)}}}},remove:function(b,c){var d=this;if(d.objectItems&&(b="object"==typeof b?a.grep(d.itemsArray,function(a){return d.options.itemValue(a)==d.options.itemValue(b)}):a.grep(d.itemsArray,function(a){return d.options.itemValue(a)==b}),b=b[b.length-1]),b){var e=a.Event("beforeItemRemove",{item:b,cancel:!1});if(d.$element.trigger(e),e.cancel)return;a(".tag",d.$container).filter(function(){return a(this).data("item")===b}).remove(),a("option",d.$element).filter(function(){return a(this).data("item")===b}).remove(),-1!==a.inArray(b,d.itemsArray)&&d.itemsArray.splice(a.inArray(b,d.itemsArray),1)}c||d.pushVal(),d.options.maxTags>d.itemsArray.length&&d.$container.removeClass("bootstrap-tagsinput-max"),d.$element.trigger(a.Event("itemRemoved",{item:b}))},removeAll:function(){var b=this;for(a(".tag",b.$container).remove(),a("option",b.$element).remove();b.itemsArray.length>0;)b.itemsArray.pop();b.pushVal()},refresh:function(){var b=this;a(".tag",b.$container).each(function(){var c=a(this),d=c.data("item"),f=b.options.itemValue(d),g=b.options.itemText(d),h=b.options.tagClass(d);if(c.attr("class",null),c.addClass("tag "+e(h)),c.contents().filter(function(){return 3==this.nodeType})[0].nodeValue=e(g),b.isSelect){var i=a("option",b.$element).filter(function(){return a(this).data("item")===d});i.attr("value",f)}})},items:function(){return this.itemsArray},pushVal:function(){var b=this,c=a.map(b.items(),function(a){return b.options.itemValue(a).toString()});b.$element.val(c,!0).trigger("change")},build:function(b){var e=this;if(e.options=a.extend({},h,b),e.objectItems&&(e.options.freeInput=!1),c(e.options,"itemValue"),c(e.options,"itemText"),d(e.options,"tagClass"),e.options.typeahead){var i=e.options.typeahead||{};d(i,"source"),e.$input.typeahead(a.extend({},i,{source:function(b,c){function d(a){for(var b=[],d=0;d<a.length;d++){var g=e.options.itemText(a[d]);f[g]=a[d],b.push(g)}c(b)}this.map={};var f=this.map,g=i.source(b);a.isFunction(g.success)?g.success(d):a.isFunction(g.then)?g.then(d):a.when(g).then(d)},updater:function(a){e.add(this.map[a])},matcher:function(a){return-1!==a.toLowerCase().indexOf(this.query.trim().toLowerCase())},sorter:function(a){return a.sort()},highlighter:function(a){var b=new RegExp("("+this.query+")","gi");return a.replace(b,"<strong>$1</strong>")}}))}if(e.options.typeaheadjs){var j=e.options.typeaheadjs||{};e.$input.typeahead(null,j).on("typeahead:selected",a.proxy(function(a,b){e.add(j.valueKey?b[j.valueKey]:b),e.$input.typeahead("val","")},e))}e.$container.on("click",a.proxy(function(){e.$element.attr("disabled")||e.$input.removeAttr("disabled"),e.$input.focus()},e)),e.options.addOnBlur&&e.options.freeInput&&e.$input.on("focusout",a.proxy(function(){0===a(".typeahead, .twitter-typeahead",e.$container).length&&(e.add(e.$input.val()),e.$input.val(""))},e)),e.$container.on("keydown","input",a.proxy(function(b){var c=a(b.target),d=e.findInputWrapper();if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");switch(b.which){case 8:if(0===f(c[0])){var g=d.prev();g&&e.remove(g.data("item"))}break;case 46:if(0===f(c[0])){var h=d.next();h&&e.remove(h.data("item"))}break;case 37:var i=d.prev();0===c.val().length&&i[0]&&(i.before(d),c.focus());break;case 39:var j=d.next();0===c.val().length&&j[0]&&(j.after(d),c.focus())}{var k=c.val().length;Math.ceil(k/5)}c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("keypress","input",a.proxy(function(b){var c=a(b.target);if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");var d=c.val(),f=e.options.maxChars&&d.length>=e.options.maxChars;e.options.freeInput&&(g(b,e.options.confirmKeys)||f)&&(e.add(f?d.substr(0,e.options.maxChars):d),c.val(""),b.preventDefault());{var h=c.val().length;Math.ceil(h/5)}c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("click","[data-role=remove]",a.proxy(function(b){e.$element.attr("disabled")||e.remove(a(b.target).closest(".tag").data("item"))},e)),e.options.itemValue===h.itemValue&&("INPUT"===e.$element[0].tagName?e.add(e.$element.val()):a("option",e.$element).each(function(){e.add(a(this).attr("value"),!0)}))},destroy:function(){var a=this;a.$container.off("keypress","input"),a.$container.off("click","[role=remove]"),a.$container.remove(),a.$element.removeData("tagsinput"),a.$element.show()},focus:function(){this.$input.focus()},input:function(){return this.$input},findInputWrapper:function(){for(var b=this.$input[0],c=this.$container[0];b&&b.parentNode!==c;)b=b.parentNode;return a(b)}},a.fn.tagsinput=function(c,d){var e=[];return this.each(function(){var f=a(this).data("tagsinput");if(f)if(c||d){if(void 0!==f[c]){var g=f[c](d);void 0!==g&&e.push(g)}}else e.push(f);else f=new b(this,c),a(this).data("tagsinput",f),e.push(f),"SELECT"===this.tagName&&a("option",a(this)).attr("selected","selected"),a(this).val(a(this).val())}),"string"==typeof c?e.length>1?e:e[0]:e},a.fn.tagsinput.Constructor=b;var i=a("<div />");a(function(){a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()})}(window.jQuery);
//# sourceMappingURL=bootstrap-tagsinput.min.js.map

/*!
 * Fuel UX v3.6.4
 * Copyright 2012-2015 ExactTarget
 * Licensed under the BSD-3-Clause license (https://github.com/ExactTarget/fuelux/blob/master/LICENSE)
 */


// For more information on UMD visit: https://github.com/umdjs/umd/
( function( factory ) {
	if ( typeof define === 'function' && define.amd ) {
		define( [ 'jquery', 'bootstrap' ], factory );
	} else {
		factory( jQuery );
	}
}( function( jQuery ) {

	if ( typeof jQuery === 'undefined' ) {
		throw new Error( 'Fuel UX\'s JavaScript requires jQuery' )
	}

	if ( typeof jQuery.fn.dropdown === 'undefined' || typeof jQuery.fn.collapse === 'undefined' ) {
		throw new Error( 'Fuel UX\'s JavaScript requires Bootstrap' )
	}

	( function( $ ) {

		/*
		 * Fuel UX Checkbox
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.checkbox;

		// CHECKBOX CONSTRUCTOR AND PROTOTYPE

		var Checkbox = function( element, options ) {
			this.options = $.extend( {}, $.fn.checkbox.defaults, options );

			// cache elements
			this.$element = $( element ).is( 'input[type="checkbox"]' ) ? $( element ) : $( element ).find( 'input[type="checkbox"]:first' );
			this.$label = this.$element.parent();
			this.$parent = this.$label.parent( '.checkbox' );
			this.$toggleContainer = this.$element.attr( 'data-toggle' );
			this.state = {
				disabled: false,
				checked: false
			};

			if ( this.$parent.length === 0 ) {
				this.$parent = null;
			}

			if ( Boolean( this.$toggleContainer ) ) {
				this.$toggleContainer = $( this.$toggleContainer );
			} else {
				this.$toggleContainer = null;
			}

			// handle events
			this.$element.on( 'change.fu.checkbox', $.proxy( this.itemchecked, this ) );
			this.$label.unbind( 'click', $.proxy( this.toggle, this ) ); //unbind previous binds so that double clickage doesn't happen (thus making checkbox appear to not work)
			this.$label.on( 'click', $.proxy( this.toggle, this ) ); //make repeated label clicks work

			// set default state
			this.setState();
		};

		Checkbox.prototype = {

			constructor: Checkbox,

			setState: function( $chk ) {
				$chk = $chk || this.$element;

				this.state.disabled = Boolean( $chk.prop( 'disabled' ) );
				this.state.checked = Boolean( $chk.is( ':checked' ) );

				this._resetClasses();

				// set state of checkbox
				this._toggleCheckedState();
				this._toggleDisabledState();

				//toggle container
				this.toggleContainer();
			},

			enable: function() {
				this.state.disabled = false;
				this.$element.removeAttr( 'disabled' );
				this.$element.prop( 'disabled', false );
				this._resetClasses();
				this.$element.trigger( 'enabled.fu.checkbox' );
			},

			disable: function() {
				this.state.disabled = true;
				this.$element.prop( 'disabled', true );
				this.$element.attr( 'disabled', 'disabled' );
				this._setDisabledClass();
				this.$element.trigger( 'disabled.fu.checkbox' );
			},

			check: function() {
				this.state.checked = true;
				this.$element.prop( 'checked', true );
				this.$element.attr( 'checked', 'checked' );
				this._setCheckedClass();
				this.$element.trigger( 'checked.fu.checkbox' );
			},

			uncheck: function() {
				this.state.checked = false;
				this.$element.prop( 'checked', false );
				this.$element.removeAttr( 'checked' );
				this._resetClasses();
				this.$element.trigger( 'unchecked.fu.checkbox' );
			},

			isChecked: function() {
				return this.state.checked;
			},

			toggle: function( e ) {
				//keep checkbox from being used if it is disabled. You can't rely on this.state.disabled, because on bind time it might not be disabled, but, state.disabled may be set to true after bind time (and this.state.disabled won't be updated for this bound instance)
				//To see how this works, uncomment the next line of code and go to http://0.0.0.0:8000/index.html click the "disable #myCustomCheckbox1" and then click on the first checkbox and see the disparity in the output between this.state and this.$element.attr
				//console.log('is disabled? this.state says, "' + this.state.disabled + '"; this.$element.attr says, "' + this.$element.attr('disabled') + '"');
				if ( /* do not change this to this.state.disabled. It will break edge cases */ this.$element.prop( 'disabled' ) ) {
					return;
				}

				//keep event from firing twice in Chrome
				if ( !e || ( e.target === e.originalEvent.target ) ) {
					this.state.checked = !this.state.checked;

					this._toggleCheckedState();

					if ( Boolean( e ) ) {
						//stop bubbling, otherwise event fires twice in Firefox.
						e.preventDefault();
						//make change event still fire (prevented by preventDefault to avoid firefox bug, see preceeding line)
						this.$element.trigger( 'change', e );
					}

				}
			},

			toggleContainer: function() {
				if ( Boolean( this.$toggleContainer ) ) {
					if ( this.state.checked ) {
						this.$toggleContainer.removeClass( 'hide hidden' );
						this.$toggleContainer.attr( 'aria-hidden', 'false' );
					} else {
						this.$toggleContainer.addClass( 'hidden' );
						this.$toggleContainer.attr( 'aria-hidden', 'true' );
					}

				}
			},

			itemchecked: function( element ) {
				this.setState( $( element.target ) );
			},

			destroy: function() {
				this.$parent.remove();
				// remove any external bindings
				// [none]
				// empty elements to return to original markup
				// [none]
				return this.$parent[ 0 ].outerHTML;
			},

			_resetClasses: function() {
				var classesToRemove = [];

				if ( !this.state.checked ) {
					classesToRemove.push( 'checked' );
				}

				if ( !this.state.disabled ) {
					classesToRemove.push( 'disabled' );
				}

				classesToRemove = classesToRemove.join( ' ' );

				this.$label.removeClass( classesToRemove );

				if ( this.$parent ) {
					this.$parent.removeClass( classesToRemove );
				}
			},

			_toggleCheckedState: function() {
				if ( this.state.checked ) {
					this.check();
				} else {
					this.uncheck();
				}
			},

			_toggleDisabledState: function() {
				if ( this.state.disabled ) {
					this.disable();
				} else {
					this.enable();
				}
			},

			_setCheckedClass: function() {
				this.$label.addClass( 'checked' );

				if ( this.$parent ) {
					this.$parent.addClass( 'checked' );
				}
			},

			_setDisabledClass: function() {
				this.$label.addClass( 'disabled' );

				if ( this.$parent ) {
					this.$parent.addClass( 'disabled' );
				}
			}
		};


		// CHECKBOX PLUGIN DEFINITION

		$.fn.checkbox = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.checkbox' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.checkbox', ( data = new Checkbox( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.checkbox.defaults = {};

		$.fn.checkbox.Constructor = Checkbox;

		$.fn.checkbox.noConflict = function() {
			$.fn.checkbox = old;
			return this;
		};

		// DATA-API

		$( document ).on( 'mouseover.fu.checkbox.data-api', '[data-initialize=checkbox]', function( e ) {
			var $control = $( e.target ).closest( '.checkbox' ).find( '[type=checkbox]' );
			if ( !$control.data( 'fu.checkbox' ) ) {
				$control.checkbox( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=checkbox] [type=checkbox]' ).each( function() {
				var $this = $( this );
				if ( !$this.data( 'fu.checkbox' ) ) {
					$this.checkbox( $this.data() );
				}
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Combobox
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.combobox;


		// COMBOBOX CONSTRUCTOR AND PROTOTYPE

		var Combobox = function( element, options ) {
			this.$element = $( element );
			this.options = $.extend( {}, $.fn.combobox.defaults, options );

			this.$dropMenu = this.$element.find( '.dropdown-menu' );
			this.$input = this.$element.find( 'input' );
			this.$button = this.$element.find( '.btn' );

			this.$element.on( 'click.fu.combobox', 'a', $.proxy( this.itemclicked, this ) );
			this.$element.on( 'change.fu.combobox', 'input', $.proxy( this.inputchanged, this ) );
			this.$element.on( 'shown.bs.dropdown', $.proxy( this.menuShown, this ) );

			// set default selection
			this.setDefaultSelection();
		};

		Combobox.prototype = {

			constructor: Combobox,

			destroy: function() {
				this.$element.remove();
				// remove any external bindings
				// [none]

				// set input value attrbute in markup
				this.$element.find( 'input' ).each( function() {
					$( this ).attr( 'value', $( this ).val() );
				} );

				// empty elements to return to original markup
				// [none]

				return this.$element[ 0 ].outerHTML;
			},

			doSelect: function( $item ) {
				if ( typeof $item[ 0 ] !== 'undefined' ) {
					this.$selectedItem = $item;
					this.$input.val( this.$selectedItem.text().trim() );
				} else {
					this.$selectedItem = null;
				}
			},

			menuShown: function() {
				if ( this.options.autoResizeMenu ) {
					this.resizeMenu();
				}
			},

			resizeMenu: function() {
				var width = this.$element.outerWidth();
				this.$dropMenu.outerWidth( width );
			},

			selectedItem: function() {
				var item = this.$selectedItem;
				var data = {};

				if ( item ) {
					var txt = this.$selectedItem.text().trim();
					data = $.extend( {
						text: txt
					}, this.$selectedItem.data() );
				} else {
					data = {
						text: this.$input.val()
					};
				}

				return data;
			},

			selectByText: function( text ) {
				var $item = $( [] );
				this.$element.find( 'li' ).each( function() {
					if ( ( this.textContent || this.innerText || $( this ).text() || '' ).toLowerCase() === ( text || '' ).toLowerCase() ) {
						$item = $( this );
						return false;
					}
				} );
				this.doSelect( $item );
			},

			selectByValue: function( value ) {
				var selector = 'li[data-value="' + value + '"]';
				this.selectBySelector( selector );
			},

			selectByIndex: function( index ) {
				// zero-based index
				var selector = 'li:eq(' + index + ')';
				this.selectBySelector( selector );
			},

			selectBySelector: function( selector ) {
				var $item = this.$element.find( selector );
				this.doSelect( $item );
			},

			setDefaultSelection: function() {
				var selector = 'li[data-selected=true]:first';
				var item = this.$element.find( selector );

				if ( item.length > 0 ) {
					// select by data-attribute
					this.selectBySelector( selector );
					item.removeData( 'selected' );
					item.removeAttr( 'data-selected' );
				}
			},

			enable: function() {
				this.$element.removeClass( 'disabled' );
				this.$input.removeAttr( 'disabled' );
				this.$button.removeClass( 'disabled' );
			},

			disable: function() {
				this.$element.addClass( 'disabled' );
				this.$input.attr( 'disabled', true );
				this.$button.addClass( 'disabled' );
			},

			itemclicked: function( e ) {
				this.$selectedItem = $( e.target ).parent();

				// set input text and trigger input change event marked as synthetic
				this.$input.val( this.$selectedItem.text().trim() ).trigger( 'change', {
					synthetic: true
				} );

				// pass object including text and any data-attributes
				// to onchange event
				var data = this.selectedItem();

				// trigger changed event
				this.$element.trigger( 'changed.fu.combobox', data );

				e.preventDefault();

				// return focus to control after selecting an option
				this.$element.find( '.dropdown-toggle' ).focus();
			},

			inputchanged: function( e, extra ) {
				// skip processing for internally-generated synthetic event
				// to avoid double processing
				if ( extra && extra.synthetic ) return;
				var val = $( e.target ).val();
				this.selectByText( val );

				// find match based on input
				// if no match, pass the input value
				var data = this.selectedItem();
				if ( data.text.length === 0 ) {
					data = {
						text: val
					};
				}

				// trigger changed event
				this.$element.trigger( 'changed.fu.combobox', data );
			}
		};


		// COMBOBOX PLUGIN DEFINITION

		$.fn.combobox = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.combobox' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.combobox', ( data = new Combobox( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.combobox.defaults = {
			autoResizeMenu: true
		};

		$.fn.combobox.Constructor = Combobox;

		$.fn.combobox.noConflict = function() {
			$.fn.combobox = old;
			return this;
		};

		// DATA-API

		$( document ).on( 'mousedown.fu.combobox.data-api', '[data-initialize=combobox]', function( e ) {
			var $control = $( e.target ).closest( '.combobox' );
			if ( !$control.data( 'fu.combobox' ) ) {
				$control.combobox( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=combobox]' ).each( function() {
				var $this = $( this );
				if ( !$this.data( 'fu.combobox' ) ) {
					$this.combobox( $this.data() );
				}
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Datepicker
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var INVALID_DATE = 'Invalid Date';
		var MOMENT_NOT_AVAILABLE = 'moment.js is not available so you cannot use this function';

		var datepickerStack = [];
		var moment = false;
		var old = $.fn.datepicker;
		var requestedMoment = false;

		var runStack = function() {
			var i, l;
			requestedMoment = true;
			for ( i = 0, l = datepickerStack.length; i < l; i++ ) {
				datepickerStack[ i ].init.call( datepickerStack[ i ].scope );
			}
			datepickerStack = [];
		};

		//only load moment if it's there. otherwise we'll look for it in window.moment
		if ( typeof define === 'function' && define.amd ) { //check if AMD is available
			require( [ 'moment' ], function( amdMoment ) {
				moment = amdMoment;
				runStack();
			}, function( err ) {
				var failedId = err.requireModules && err.requireModules[ 0 ];
				if ( failedId === 'moment' ) {
					runStack();
				}
			} );
		} else {
			runStack();
		}

		// DATEPICKER CONSTRUCTOR AND PROTOTYPE

		var Datepicker = function( element, options ) {
			this.$element = $( element );
			this.options = $.extend( true, {}, $.fn.datepicker.defaults, options );

			this.$calendar = this.$element.find( '.datepicker-calendar' );
			this.$days = this.$calendar.find( '.datepicker-calendar-days' );
			this.$header = this.$calendar.find( '.datepicker-calendar-header' );
			this.$headerTitle = this.$header.find( '.title' );
			this.$input = this.$element.find( 'input' );
			this.$wheels = this.$element.find( '.datepicker-wheels' );
			this.$wheelsMonth = this.$element.find( '.datepicker-wheels-month' );
			this.$wheelsYear = this.$element.find( '.datepicker-wheels-year' );

			this.artificialScrolling = false;
			this.formatDate = this.options.formatDate || this.formatDate;
			this.inputValue = null;
			this.moment = false;
			this.momentFormat = null;
			this.parseDate = this.options.parseDate || this.parseDate;
			this.preventBlurHide = false;
			this.restricted = this.options.restricted || [];
			this.restrictedParsed = [];
			this.restrictedText = this.options.restrictedText;
			this.sameYearOnly = this.options.sameYearOnly;
			this.selectedDate = null;
			this.yearRestriction = null;

			this.$calendar.find( '.datepicker-today' ).on( 'click.fu.datepicker', $.proxy( this.todayClicked, this ) );
			this.$days.on( 'click.fu.datepicker', 'tr td button', $.proxy( this.dateClicked, this ) );
			this.$element.find( '.dropdown-menu' ).on( 'mousedown.fu.datepicker', $.proxy( this.dropdownMousedown, this ) );
			this.$header.find( '.next' ).on( 'click.fu.datepicker', $.proxy( this.next, this ) );
			this.$header.find( '.prev' ).on( 'click.fu.datepicker', $.proxy( this.prev, this ) );
			this.$headerTitle.on( 'click.fu.datepicker', $.proxy( this.titleClicked, this ) );
			this.$input.on( 'blur.fu.datepicker', $.proxy( this.inputBlurred, this ) );
			this.$input.on( 'focus.fu.datepicker', $.proxy( this.inputFocused, this ) );
			this.$wheels.find( '.datepicker-wheels-back' ).on( 'click.fu.datepicker', $.proxy( this.backClicked, this ) );
			this.$wheels.find( '.datepicker-wheels-select' ).on( 'click.fu.datepicker', $.proxy( this.selectClicked, this ) );
			this.$wheelsMonth.on( 'click.fu.datepicker', 'ul button', $.proxy( this.monthClicked, this ) );
			this.$wheelsYear.on( 'click.fu.datepicker', 'ul button', $.proxy( this.yearClicked, this ) );
			this.$wheelsYear.find( 'ul' ).on( 'scroll.fu.datepicker', $.proxy( this.onYearScroll, this ) );

			var init = function() {
				if ( this.checkForMomentJS() ) {
					moment = moment || window.moment; // need to pull in the global moment if they didn't do it via require
					this.moment = true;
					this.momentFormat = this.options.momentConfig.format;
					this.setCulture( this.options.momentConfig.culture );

					// support moment with lang (< v2.8) or locale
					moment.locale = moment.locale || moment.lang;
				}

				this.setRestrictedDates( this.restricted );
				if ( !this.setDate( this.options.date ) ) {
					this.$input.val( '' );
					this.inputValue = this.$input.val();
				}

				if ( this.sameYearOnly ) {
					this.yearRestriction = ( this.selectedDate ) ? this.selectedDate.getFullYear() : new Date().getFullYear();
				}
			};

			if ( requestedMoment ) {
				init.call( this );
			} else {
				datepickerStack.push( {
					init: init,
					scope: this
				} );
			}
		};

		Datepicker.prototype = {

			constructor: Datepicker,

			backClicked: function() {
				this.changeView( 'calendar' );
			},

			changeView: function( view, date ) {
				if ( view === 'wheels' ) {
					this.$calendar.hide().attr( 'aria-hidden', 'true' );
					this.$wheels.show().removeAttr( 'aria-hidden', '' );
					if ( date ) {
						this.renderWheel( date );
					}

				} else {
					this.$wheels.hide().attr( 'aria-hidden', 'true' );
					this.$calendar.show().removeAttr( 'aria-hidden', '' );
					if ( date ) {
						this.renderMonth( date );
					}

				}
			},

			checkForMomentJS: function() {
				if (
					( $.isFunction( window.moment ) || ( typeof moment !== 'undefined' && $.isFunction( moment ) ) ) &&
					$.isPlainObject( this.options.momentConfig ) &&
					this.options.momentConfig.culture && this.options.momentConfig.format
				) {
					return true;
				} else {
					return false;
				}
			},

			dateClicked: function( e ) {
				var $td = $( e.currentTarget ).parents( 'td:first' );
				var date;

				if ( $td.hasClass( 'restricted' ) ) {
					return;
				}

				this.$days.find( 'td.selected' ).removeClass( 'selected' );
				$td.addClass( 'selected' );

				date = new Date( $td.attr( 'data-year' ), $td.attr( 'data-month' ), $td.attr( 'data-date' ) );
				this.selectedDate = date;
				this.$input.val( this.formatDate( date ) );
				this.inputValue = this.$input.val();
				this.$input.focus();
				this.$element.trigger( 'dateClicked.fu.datepicker', date );
			},

			destroy: function() {
				this.$element.remove();
				// any external bindings
				// [none]

				// empty elements to return to original markup
				this.$days.find( 'tbody' ).empty();
				this.$wheelsYear.find( 'ul' ).empty();

				return this.$element[ 0 ].outerHTML;
			},

			disable: function() {
				this.$element.addClass( 'disabled' );
				this.$element.find( 'input, button' ).attr( 'disabled', 'disabled' );
				this.$element.find( '.input-group-btn' ).removeClass( 'open' );
			},

			dropdownMousedown: function() {
				var self = this;
				this.preventBlurHide = true;
				setTimeout( function() {
					self.preventBlurHide = false;
				}, 0 );
			},

			enable: function() {
				this.$element.removeClass( 'disabled' );
				this.$element.find( 'input, button' ).removeAttr( 'disabled' );
			},

			formatDate: function( date ) {
				var padTwo = function( value ) {
					var s = '0' + value;
					return s.substr( s.length - 2 );
				};

				if ( this.moment ) {
					return moment( date ).format( this.momentFormat );
				} else {
					return padTwo( date.getMonth() + 1 ) + '/' + padTwo( date.getDate() ) + '/' + date.getFullYear();
				}
			},

			getCulture: function() {
				if ( this.moment ) {
					return moment.locale();
				} else {
					throw MOMENT_NOT_AVAILABLE;
				}
			},

			getDate: function() {
				return ( !this.selectedDate ) ? new Date( NaN ) : this.selectedDate;
			},

			getFormat: function() {
				if ( this.moment ) {
					return this.momentFormat;
				} else {
					throw MOMENT_NOT_AVAILABLE;
				}
			},

			getFormattedDate: function() {
				return ( !this.selectedDate ) ? INVALID_DATE : this.formatDate( this.selectedDate );
			},

			getRestrictedDates: function() {
				return this.restricted;
			},

			inputBlurred: function( e ) {
				var inputVal = this.$input.val();
				var date;
				if ( inputVal !== this.inputValue ) {
					date = this.setDate( inputVal );
					if ( date === null ) {
						this.$element.trigger( 'inputParsingFailed.fu.datepicker', inputVal );
					} else if ( date === false ) {
						this.$element.trigger( 'inputRestrictedDate.fu.datepicker', date );
					} else {
						this.$element.trigger( 'changed.fu.datepicker', date );
					}

				}

				if ( !this.preventBlurHide ) {
					this.$element.find( '.input-group-btn' ).removeClass( 'open' );
				}
			},

			inputFocused: function( e ) {
				this.$element.find( '.input-group-btn' ).addClass( 'open' );
			},

			isInvalidDate: function( date ) {
				var dateString = date.toString();
				if ( dateString === INVALID_DATE || dateString === 'NaN' ) {
					return true;
				}

				return false;
			},

			isRestricted: function( date, month, year ) {
				var restricted = this.restrictedParsed;
				var i, from, l, to;

				if ( this.sameYearOnly && this.yearRestriction !== null && year !== this.yearRestriction ) {
					return true;
				}

				for ( i = 0, l = restricted.length; i < l; i++ ) {
					from = restricted[ i ].from;
					to = restricted[ i ].to;
					if (
						( year > from.year || ( year === from.year && month > from.month ) || ( year === from.year && month === from.month && date >= from.date ) ) &&
						( year < to.year || ( year === to.year && month < to.month ) || ( year === to.year && month === to.month && date <= to.date ) )
					) {
						return true;
					}

				}

				return false;
			},

			monthClicked: function( e ) {
				this.$wheelsMonth.find( '.selected' ).removeClass( 'selected' );
				$( e.currentTarget ).parent().addClass( 'selected' );
			},

			next: function() {
				var month = this.$headerTitle.attr( 'data-month' );
				var year = this.$headerTitle.attr( 'data-year' );
				month++;
				if ( month > 11 ) {
					if ( this.sameYearOnly ) {
						return;
					}

					month = 0;
					year++;
				}

				this.renderMonth( new Date( year, month, 1 ) );
			},

			onYearScroll: function( e ) {
				if ( this.artificialScrolling ) {
					return;
				}

				var $yearUl = $( e.currentTarget );
				var height = ( $yearUl.css( 'box-sizing' ) === 'border-box' ) ? $yearUl.outerHeight() : $yearUl.height();
				var scrollHeight = $yearUl.get( 0 ).scrollHeight;
				var scrollTop = $yearUl.scrollTop();
				var bottomPercentage = ( height / ( scrollHeight - scrollTop ) ) * 100;
				var topPercentage = ( scrollTop / scrollHeight ) * 100;
				var i, start;

				if ( topPercentage < 5 ) {
					start = parseInt( $yearUl.find( 'li:first' ).attr( 'data-year' ), 10 );
					for ( i = ( start - 1 ); i > ( start - 11 ); i-- ) {
						$yearUl.prepend( '<li data-year="' + i + '"><button type="button">' + i + '</button></li>' );
					}
					this.artificialScrolling = true;
					$yearUl.scrollTop( ( $yearUl.get( 0 ).scrollHeight - scrollHeight ) + scrollTop );
					this.artificialScrolling = false;
				} else if ( bottomPercentage > 90 ) {
					start = parseInt( $yearUl.find( 'li:last' ).attr( 'data-year' ), 10 );
					for ( i = ( start + 1 ); i < ( start + 11 ); i++ ) {
						$yearUl.append( '<li data-year="' + i + '"><button type="button">' + i + '</button></li>' );
					}
				}
			},

			//some code ripped from http://stackoverflow.com/questions/2182246/javascript-dates-in-ie-nan-firefox-chrome-ok
			parseDate: function( date ) {
				var self = this;
				var BAD_DATE = new Date( NaN );
				var dt, isoExp, momentParse, momentParseWithFormat, tryMomentParseAll, month, parts, use;

				if ( date ) {
					if ( this.moment ) { //if we have moment, use that to parse the dates
						momentParseWithFormat = function( d ) {
							var md = moment( d, self.momentFormat );
							return ( true === md.isValid() ) ? md.toDate() : BAD_DATE;
						};
						momentParse = function( d ) {
							var md = moment( new Date( d ) );
							return ( true === md.isValid() ) ? md.toDate() : BAD_DATE;
						};

						tryMomentParseAll = function( d, parseFunc1, parseFunc2 ) {
							var pd = parseFunc1( d );
							if ( !self.isInvalidDate( pd ) ) {
								return pd;
							}

							pd = parseFunc2( pd );
							if ( !self.isInvalidDate( pd ) ) {
								return pd;
							}

							return BAD_DATE;
						};

						if ( 'string' === typeof( date ) ) {
							// Attempts to parse date strings using this.momentFormat, falling back on newing a date
							return tryMomentParseAll( date, momentParseWithFormat, momentParse );
						} else {
							// Attempts to parse date by newing a date object directly, falling back on parsing using this.momentFormat
							return tryMomentParseAll( date, momentParse, momentParseWithFormat );
						}

					} else { //if moment isn't present, use previous date parsing strategy
						if ( typeof( date ) === 'string' ) {
							dt = new Date( Date.parse( date ) );
							if ( !this.isInvalidDate( dt ) ) {
								return dt;
							} else {
								date = date.split( 'T' )[ 0 ];
								isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/;
								parts = isoExp.exec( date );
								if ( parts ) {
									month = parseInt( parts[ 2 ], 10 );
									dt = new Date( parts[ 1 ], month - 1, parts[ 3 ] );
									if ( month === ( dt.getMonth() + 1 ) ) {
										return dt;
									}

								}

							}

						} else {
							dt = new Date( date );
							if ( !this.isInvalidDate( dt ) ) {
								return dt;
							}

						}

					}

				}

				return new Date( NaN );
			},

			prev: function() {
				var month = this.$headerTitle.attr( 'data-month' );
				var year = this.$headerTitle.attr( 'data-year' );
				month--;
				if ( month < 0 ) {
					if ( this.sameYearOnly ) {
						return;
					}

					month = 11;
					year--;
				}

				this.renderMonth( new Date( year, month, 1 ) );
			},

			renderMonth: function( date ) {
				date = date || new Date();

				var firstDay = new Date( date.getFullYear(), date.getMonth(), 1 ).getDay();
				var lastDate = new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();
				var lastMonthDate = new Date( date.getFullYear(), date.getMonth(), 0 ).getDate();
				var $month = this.$headerTitle.find( '.month' );
				var month = date.getMonth();
				var now = new Date();
				var nowDate = now.getDate();
				var nowMonth = now.getMonth();
				var nowYear = now.getFullYear();
				var selected = this.selectedDate;
				var $tbody = this.$days.find( 'tbody' );
				var year = date.getFullYear();
				var curDate, curMonth, curYear, i, j, rows, stage, $td, $tr;

				if ( selected ) {
					selected = {
						date: selected.getDate(),
						month: selected.getMonth(),
						year: selected.getFullYear()
					};
				}

				$month.find( '.current' ).removeClass( 'current' );
				$month.find( 'span[data-month="' + month + '"]' ).addClass( 'current' );
				this.$headerTitle.find( '.year' ).text( year );
				this.$headerTitle.attr( {
					'data-month': month,
					'data-year': year
				} );

				$tbody.empty();
				if ( firstDay !== 0 ) {
					curDate = lastMonthDate - firstDay + 1;
					stage = -1;
				} else {
					curDate = 1;
					stage = 0;
				}

				rows = ( lastDate <= ( 35 - firstDay ) ) ? 5 : 6;
				for ( i = 0; i < rows; i++ ) {
					$tr = $( '<tr></tr>' );
					for ( j = 0; j < 7; j++ ) {
						$td = $( '<td></td>' );
						if ( stage === -1 ) {
							$td.addClass( 'last-month' );
						} else if ( stage === 1 ) {
							$td.addClass( 'next-month' );
						}

						curMonth = month + stage;
						curYear = year;
						if ( curMonth < 0 ) {
							curMonth = 11;
							curYear--;
						} else if ( curMonth > 11 ) {
							curMonth = 0;
							curYear++;
						}

						$td.attr( {
							'data-date': curDate,
							'data-month': curMonth,
							'data-year': curYear
						} );
						if ( curYear === nowYear && curMonth === nowMonth && curDate === nowDate ) {
							$td.addClass( 'current-day' );
						} else if ( curYear < nowYear || ( curYear === nowYear && curMonth < nowMonth ) ||
							( curYear === nowYear && curMonth === nowMonth && curDate < nowDate ) ) {
							$td.addClass( 'past' );
							if ( !this.options.allowPastDates ) {
								$td.addClass( 'restricted' ).attr( 'title', this.restrictedText );
							}

						}

						if ( this.isRestricted( curDate, curMonth, curYear ) ) {
							$td.addClass( 'restricted' ).attr( 'title', this.restrictedText );
						}

						if ( selected && curYear === selected.year && curMonth === selected.month && curDate === selected.date ) {
							$td.addClass( 'selected' );
						}

						if ( $td.hasClass( 'restricted' ) ) {
							$td.html( '<span><b class="datepicker-date">' + curDate + '</b></span>' );
						} else {
							$td.html( '<span><button type="button" class="datepicker-date">' + curDate + '</button></span>' );
						}

						curDate++;
						if ( stage === -1 && curDate > lastMonthDate ) {
							curDate = 1;
							stage = 0;
						} else if ( stage === 0 && curDate > lastDate ) {
							curDate = 1;
							stage = 1;
						}

						$tr.append( $td );
					}
					$tbody.append( $tr );
				}
			},

			renderWheel: function( date ) {
				var month = date.getMonth();
				var $monthUl = this.$wheelsMonth.find( 'ul' );
				var year = date.getFullYear();
				var $yearUl = this.$wheelsYear.find( 'ul' );
				var i, $monthSelected, $yearSelected;

				if ( this.sameYearOnly ) {
					this.$wheelsMonth.addClass( 'full' );
					this.$wheelsYear.addClass( 'hide' );
				} else {
					this.$wheelsMonth.removeClass( 'full' );
					this.$wheelsYear.removeClass( 'hide' );
				}

				$monthUl.find( '.selected' ).removeClass( 'selected' );
				$monthSelected = $monthUl.find( 'li[data-month="' + month + '"]' );
				$monthSelected.addClass( 'selected' );
				$monthUl.scrollTop( $monthUl.scrollTop() + ( $monthSelected.position().top - $monthUl.outerHeight() / 2 - $monthSelected.outerHeight( true ) / 2 ) );

				$yearUl.empty();
				for ( i = ( year - 10 ); i < ( year + 11 ); i++ ) {
					$yearUl.append( '<li data-year="' + i + '"><button type="button">' + i + '</button></li>' );
				}
				$yearSelected = $yearUl.find( 'li[data-year="' + year + '"]' );
				$yearSelected.addClass( 'selected' );
				this.artificialScrolling = true;
				$yearUl.scrollTop( $yearUl.scrollTop() + ( $yearSelected.position().top - $yearUl.outerHeight() / 2 - $yearSelected.outerHeight( true ) / 2 ) );
				this.artificialScrolling = false;
				$monthSelected.find( 'button' ).focus();
			},

			selectClicked: function() {
				var month = this.$wheelsMonth.find( '.selected' ).attr( 'data-month' );
				var year = this.$wheelsYear.find( '.selected' ).attr( 'data-year' );
				this.changeView( 'calendar', new Date( year, month, 1 ) );
			},

			setCulture: function( cultureCode ) {
				if ( !cultureCode ) {
					return false;
				}

				if ( this.moment ) {
					moment.locale( cultureCode );
				} else {
					throw MOMENT_NOT_AVAILABLE;
				}
			},

			setDate: function( date ) {
				var parsed = this.parseDate( date );
				if ( !this.isInvalidDate( parsed ) ) {
					if ( !this.isRestricted( parsed.getDate(), parsed.getMonth(), parsed.getFullYear() ) ) {
						this.selectedDate = parsed;
						this.renderMonth( parsed );
						this.$input.val( this.formatDate( parsed ) );
					} else {
						this.selectedDate = false;
						this.renderMonth();
					}

				} else {
					this.selectedDate = null;
					this.renderMonth();
				}

				this.inputValue = this.$input.val();
				return this.selectedDate;
			},

			setFormat: function( format ) {
				if ( !format ) {
					return false;
				}

				if ( this.moment ) {
					this.momentFormat = format;
				} else {
					throw MOMENT_NOT_AVAILABLE;
				}
			},

			setRestrictedDates: function( restricted ) {
				var parsed = [];
				var self = this;
				var i, l;

				var parseItem = function( val ) {
					if ( val === -Infinity ) {
						return {
							date: -Infinity,
							month: -Infinity,
							year: -Infinity
						};
					} else if ( val === Infinity ) {
						return {
							date: Infinity,
							month: Infinity,
							year: Infinity
						};
					} else {
						val = self.parseDate( val );
						return {
							date: val.getDate(),
							month: val.getMonth(),
							year: val.getFullYear()
						};
					}
				};

				this.restricted = restricted;
				for ( i = 0, l = restricted.length; i < l; i++ ) {
					parsed.push( {
						from: parseItem( restricted[ i ].from ),
						to: parseItem( restricted[ i ].to )
					} );
				}
				this.restrictedParsed = parsed;
			},

			titleClicked: function( e ) {
				this.changeView( 'wheels', new Date( this.$headerTitle.attr( 'data-year' ), this.$headerTitle.attr( 'data-month' ), 1 ) );
			},

			todayClicked: function( e ) {
				var date = new Date();

				if ( ( date.getMonth() + '' ) !== this.$headerTitle.attr( 'data-month' ) || ( date.getFullYear() + '' ) !== this.$headerTitle.attr( 'data-year' ) ) {
					this.renderMonth( date );
				}
			},

			yearClicked: function( e ) {
				this.$wheelsYear.find( '.selected' ).removeClass( 'selected' );
				$( e.currentTarget ).parent().addClass( 'selected' );
			}
		};


		// DATEPICKER PLUGIN DEFINITION

		$.fn.datepicker = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.datepicker' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.datepicker', ( data = new Datepicker( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.datepicker.defaults = {
			allowPastDates: false,
			date: new Date(),
			formatDate: null,
			momentConfig: {
				culture: 'en',
				format: 'L' // more formats can be found here http://momentjs.com/docs/#/customization/long-date-formats/.
			},
			parseDate: null,
			restricted: [], //accepts an array of objects formatted as so: { from: {{date}}, to: {{date}} }  (ex: [ { from: new Date('12/11/2014'), to: new Date('03/31/2015') } ])
			restrictedText: 'Restricted',
			sameYearOnly: false
		};

		$.fn.datepicker.Constructor = Datepicker;

		$.fn.datepicker.noConflict = function() {
			$.fn.datepicker = old;
			return this;
		};

		// DATA-API

		$( document ).on( 'mousedown.fu.datepicker.data-api', '[data-initialize=datepicker]', function( e ) {
			var $control = $( e.target ).closest( '.datepicker' );
			if ( !$control.data( 'datepicker' ) ) {
				$control.datepicker( $control.data() );
			}
		} );

		//used to prevent the dropdown from closing when clicking within it's bounds
		$( document ).on( 'click.fu.datepicker.data-api', '.datepicker .dropdown-menu', function( e ) {
			var $target = $( e.target );
			if ( !$target.is( '.datepicker-date' ) || $target.closest( '.restricted' ).length ) {
				e.stopPropagation();
			}
		} );

		//used to prevent the dropdown from closing when clicking on the input
		$( document ).on( 'click.fu.datepicker.data-api', '.datepicker input', function( e ) {
			e.stopPropagation();
		} );

		$( function() {
			$( '[data-initialize=datepicker]' ).each( function() {
				var $this = $( this );
				if ( $this.data( 'datepicker' ) ) {
					return;
				}

				$this.datepicker( $this.data() );
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Dropdown Auto Flip
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		$( document.body ).on( 'click.fu.dropdown-autoflip', '[data-toggle=dropdown][data-flip]', function( event ) {
			if ( $( this ).data().flip === "auto" ) {
				// have the drop down decide where to place itself
				_autoFlip( $( this ).next( '.dropdown-menu' ) );
			}
		} );

		// For pillbox suggestions dropdown
		$( document.body ).on( 'suggested.fu.pillbox', function( event, element ) {
			_autoFlip( $( element ) );
			$( element ).parent().addClass( 'open' );
		} );

		function _autoFlip( menu ) {
			// hide while the browser thinks
			$( menu ).css( {
				visibility: "hidden"
			} );

			// decide where to put menu
			if ( dropUpCheck( menu ) ) {
				menu.parent().addClass( "dropup" );
			} else {
				menu.parent().removeClass( "dropup" );
			}

			// show again
			$( menu ).css( {
				visibility: "visible"
			} );
		}

		function dropUpCheck( element ) {
			// caching container
			var $container = _getContainer( element );

			// building object with measurementsances for later use
			var measurements = {};
			measurements.parentHeight = element.parent().outerHeight();
			measurements.parentOffsetTop = element.parent().offset().top;
			measurements.dropdownHeight = element.outerHeight();
			measurements.containerHeight = $container.overflowElement.outerHeight();

			// this needs to be different if the window is the container or another element is
			measurements.containerOffsetTop = ( !!$container.isWindow ) ? $container.overflowElement.scrollTop() : $container.overflowElement.offset().top;

			// doing the calculations
			measurements.fromTop = measurements.parentOffsetTop - measurements.containerOffsetTop;
			measurements.fromBottom = measurements.containerHeight - measurements.parentHeight - ( measurements.parentOffsetTop - measurements.containerOffsetTop );

			// actual determination of where to put menu
			// false = drop down
			// true = drop up
			if ( measurements.dropdownHeight < measurements.fromBottom ) {
				return false;
			} else if ( measurements.dropdownHeight < measurements.fromTop ) {
				return true;
			} else if ( measurements.dropdownHeight >= measurements.fromTop && measurements.dropdownHeight >= measurements.fromBottom ) {
				// decide which one is bigger and put it there
				if ( measurements.fromTop >= measurements.fromBottom ) {
					return true;
				} else {
					return false;
				}

			}

		}

		function _getContainer( element ) {
			var containerElement, isWindow;
			if ( element.attr( 'data-target' ) ) {
				containerElement = element.attr( 'data-target' );
				isWindow = false;
			} else {
				containerElement = window;
				isWindow = true;
			}

			$.each( element.parents(), function( index, value ) {
				if ( $( value ).css( 'overflow' ) !== 'visible' ) {
					containerElement = value;
					isWindow = false;
					return false;
				}
			} );

			return {
				overflowElement: $( containerElement ),
				isWindow: isWindow
			};
		}

		// register empty plugin
		$.fn.dropdownautoflip = function() {
			/* empty */
		};



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Loader
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.loader;

		// LOADER CONSTRUCTOR AND PROTOTYPE

		var Loader = function( element, options ) {
			this.$element = $( element );
			this.options = $.extend( {}, $.fn.loader.defaults, options );

			this.begin = ( this.$element.is( '[data-begin]' ) ) ? parseInt( this.$element.attr( 'data-begin' ), 10 ) : 1;
			this.delay = ( this.$element.is( '[data-delay]' ) ) ? parseFloat( this.$element.attr( 'data-delay' ) ) : 150;
			this.end = ( this.$element.is( '[data-end]' ) ) ? parseInt( this.$element.attr( 'data-end' ), 10 ) : 8;
			this.frame = ( this.$element.is( '[data-frame]' ) ) ? parseInt( this.$element.attr( 'data-frame' ), 10 ) : this.begin;
			this.isIElt9 = false;
			this.timeout = {};

			var ieVer = this.msieVersion();
			if ( ieVer !== false && ieVer < 9 ) {
				this.$element.addClass( 'iefix' );
				this.isIElt9 = true;
			}

			this.$element.attr( 'data-frame', this.frame + '' );
			this.play();
		};

		Loader.prototype = {

			constructor: Loader,

			destroy: function() {
				this.$element.remove();
				// any external bindings
				// [none]
				// empty elements to return to original markup
				// [none]
				// returns string of markup
				return this.$element[ 0 ].outerHTML;
			},

			ieRepaint: function() {
				if ( this.isIElt9 ) {
					this.$element.addClass( 'iefix_repaint' ).removeClass( 'iefix_repaint' );
				}
			},

			msieVersion: function() {
				var ua = window.navigator.userAgent;
				var msie = ua.indexOf( 'MSIE ' );
				if ( msie > 0 ) {
					return parseInt( ua.substring( msie + 5, ua.indexOf( ".", msie ) ), 10 );
				} else {
					return false;
				}
			},

			next: function() {
				this.frame++;
				if ( this.frame > this.end ) {
					this.frame = this.begin;
				}

				this.$element.attr( 'data-frame', this.frame + '' );
				this.ieRepaint();
			},

			pause: function() {
				clearTimeout( this.timeout );
			},

			play: function() {
				var self = this;
				clearTimeout( this.timeout );
				this.timeout = setTimeout( function() {
					self.next();
					self.play();
				}, this.delay );
			},

			previous: function() {
				this.frame--;
				if ( this.frame < this.begin ) {
					this.frame = this.end;
				}

				this.$element.attr( 'data-frame', this.frame + '' );
				this.ieRepaint();
			},

			reset: function() {
				this.frame = this.begin;
				this.$element.attr( 'data-frame', this.frame + '' );
				this.ieRepaint();
			}
		};

		// LOADER PLUGIN DEFINITION

		$.fn.loader = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.loader' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.loader', ( data = new Loader( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.loader.defaults = {};

		$.fn.loader.Constructor = Loader;

		$.fn.loader.noConflict = function() {
			$.fn.loader = old;
			return this;
		};

		// INIT LOADER ON DOMCONTENTLOADED

		$( function() {
			$( '[data-initialize=loader]' ).each( function() {
				var $this = $( this );
				if ( !$this.data( 'fu.loader' ) ) {
					$this.loader( $this.data() );
				}
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Placard
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.placard;

		// PLACARD CONSTRUCTOR AND PROTOTYPE

		var Placard = function( element, options ) {
			var self = this;
			this.$element = $( element );
			this.options = $.extend( {}, $.fn.placard.defaults, options );

			this.$accept = this.$element.find( '.placard-accept' );
			this.$cancel = this.$element.find( '.placard-cancel' );
			this.$field = this.$element.find( '.placard-field' );
			this.$footer = this.$element.find( '.placard-footer' );
			this.$header = this.$element.find( '.placard-header' );
			this.$popup = this.$element.find( '.placard-popup' );

			this.actualValue = null;
			this.clickStamp = '_';
			this.previousValue = '';
			if ( this.options.revertOnCancel === -1 ) {
				this.options.revertOnCancel = ( this.$accept.length > 0 ) ? true : false;
			}

			this.isInput = this.$field.is( 'input' );

			this.$field.on( 'focus.fu.placard', $.proxy( this.show, this ) );
			this.$field.on( 'keydown.fu.placard', $.proxy( this.keyComplete, this ) );
			this.$accept.on( 'click.fu.placard', $.proxy( this.complete, this, 'accept' ) );
			this.$cancel.on( 'click.fu.placard', function( e ) {
				e.preventDefault();
				self.complete( 'cancel' );
			} );

			this.ellipsis();
		};

		Placard.prototype = {
			constructor: Placard,

			complete: function( action ) {
				var func = this.options[ 'on' + action[ 0 ].toUpperCase() + action.substring( 1 ) ];
				var obj = {
					previousValue: this.previousValue,
					value: this.$field.val()
				};
				if ( func ) {
					func( obj );
					this.$element.trigger( action, obj );
				} else {
					if ( action === 'cancel' && this.options.revertOnCancel ) {
						this.$field.val( this.previousValue );
					}

					this.$element.trigger( action, obj );
					this.hide();
				}
			},

			keyComplete: function( e ) {
				if ( this.isInput && e.keyCode === 13 ) {
					this.complete( 'accept' );
					this.$field.blur();
				} else if ( e.keyCode === 27 ) {
					this.complete( 'cancel' );
					this.$field.blur();
				}
			},

			destroy: function() {
				this.$element.remove();
				// remove any external bindings
				$( document ).off( 'click.fu.placard.externalClick.' + this.clickStamp );
				// set input value attrbute
				this.$element.find( 'input' ).each( function() {
					$( this ).attr( 'value', $( this ).val() );
				} );
				// empty elements to return to original markup
				// [none]
				// return string of markup
				return this.$element[ 0 ].outerHTML;
			},

			disable: function() {
				this.$element.addClass( 'disabled' );
				this.$field.attr( 'disabled', 'disabled' );
				this.hide();
			},

			ellipsis: function() {
				var field, i, str;
				if ( this.$element.attr( 'data-ellipsis' ) === 'true' ) {
					field = this.$field.get( 0 );
					if ( this.$field.is( 'input' ) ) {
						field.scrollLeft = 0;
					} else {
						field.scrollTop = 0;
						if ( field.clientHeight < field.scrollHeight ) {
							this.actualValue = this.$field.val();
							this.$field.val( '' );
							str = '';
							i = 0;
							while ( field.clientHeight >= field.scrollHeight ) {
								str += this.actualValue[ i ];
								this.$field.val( str + '...' );
								i++;
							}
							str = ( str.length > 0 ) ? str.substring( 0, str.length - 1 ) : '';
							this.$field.val( str + '...' );
						}

					}

				}
			},

			enable: function() {
				this.$element.removeClass( 'disabled' );
				this.$field.removeAttr( 'disabled' );
			},

			externalClickListener: function( e, force ) {
				if ( force === true || this.isExternalClick( e ) ) {
					this.complete( this.options.externalClickAction );
				}
			},

			getValue: function() {
				if ( this.actualValue !== null ) {
					return this.actualValue;
				} else {
					return this.$field.val();
				}
			},

			hide: function() {
				if ( !this.$element.hasClass( 'showing' ) ) {
					return;
				}

				this.$element.removeClass( 'showing' );
				this.ellipsis();
				$( document ).off( 'click.fu.placard.externalClick.' + this.clickStamp );
				this.$element.trigger( 'hidden.fu.placard' );
			},

			isExternalClick: function( e ) {
				var el = this.$element.get( 0 );
				var exceptions = this.options.externalClickExceptions || [];
				var $originEl = $( e.target );
				var i, l;

				if ( e.target === el || $originEl.parents( '.placard:first' ).get( 0 ) === el ) {
					return false;
				} else {
					for ( i = 0, l = exceptions.length; i < l; i++ ) {
						if ( $originEl.is( exceptions[ i ] ) || $originEl.parents( exceptions[ i ] ).length > 0 ) {
							return false;
						}

					}
				}

				return true;
			},

			setValue: function( val ) {
				this.$field.val( val );
				if ( !this.$element.hasClass( 'showing' ) ) {
					this.ellipsis();
				}
			},

			show: function() {
				var other;

				if ( this.$element.hasClass( 'showing' ) ) {
					return;
				}

				other = $( document ).find( '.placard.showing' );
				if ( other.length > 0 ) {
					if ( other.data( 'fu.placard' ) && other.data( 'fu.placard' ).options.explicit ) {
						return;
					}

					other.placard( 'externalClickListener', {}, true );
				}

				this.previousValue = this.$field.val();

				this.$element.addClass( 'showing' );
				if ( this.actualValue !== null ) {
					this.$field.val( this.actualValue );
					this.actualValue = null;
				}

				if ( this.$header.length > 0 ) {
					this.$popup.css( 'top', '-' + this.$header.outerHeight( true ) + 'px' );
				}

				if ( this.$footer.length > 0 ) {
					this.$popup.css( 'bottom', '-' + this.$footer.outerHeight( true ) + 'px' );
				}

				this.$element.trigger( 'shown.fu.placard' );
				this.clickStamp = new Date().getTime() + ( Math.floor( Math.random() * 100 ) + 1 );
				if ( !this.options.explicit ) {
					$( document ).on( 'click.fu.placard.externalClick.' + this.clickStamp, $.proxy( this.externalClickListener, this ) );
				}
			}
		};

		// PLACARD PLUGIN DEFINITION

		$.fn.placard = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.placard' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.placard', ( data = new Placard( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.placard.defaults = {
			onAccept: undefined,
			onCancel: undefined,
			externalClickAction: 'cancel',
			externalClickExceptions: [],
			explicit: false,
			revertOnCancel: -1 //negative 1 will check for an '.placard-accept' button. Also can be set to true or false
		};

		$.fn.placard.Constructor = Placard;

		$.fn.placard.noConflict = function() {
			$.fn.placard = old;
			return this;
		};

		// DATA-API

		$( document ).on( 'focus.fu.placard.data-api', '[data-initialize=placard]', function( e ) {
			var $control = $( e.target ).closest( '.placard' );
			if ( !$control.data( 'fu.placard' ) ) {
				$control.placard( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=placard]' ).each( function() {
				var $this = $( this );
				if ( $this.data( 'fu.placard' ) ) return;
				$this.placard( $this.data() );
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Radio
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.radio;

		// RADIO CONSTRUCTOR AND PROTOTYPE

		var Radio = function( element, options ) {
			this.options = $.extend( {}, $.fn.radio.defaults, options );

			// cache elements
			this.$radio = $( element ).is( 'input[type="radio"]' ) ? $( element ) : $( element ).find( 'input[type="radio"]:first' );
			this.$label = this.$radio.parent();
			this.groupName = this.$radio.attr( 'name' );
			this.$blockWrapper = this.$label.parent( '.radio' ); // only used if block radio control, otherwise radio is inline
			this.isBlockWrapped = true; // initialized as a block radio control
			this.$toggleContainer = null;

			if ( this.$blockWrapper.length === 0 ) {
				this.isBlockWrapped = false;
			}

			var toggleSelector = this.$radio.attr( 'data-toggle' );
			if ( toggleSelector ) {
				this.$toggleContainer = $( toggleSelector );
			}

			// set default state
			this.setState( this.$radio );

			// handle events
			this.$radio.on( 'change.fu.radio', $.proxy( this.itemchecked, this ) );
		};

		Radio.prototype = {

			constructor: Radio,

			destroy: function() {
				// remove any external bindings
				// [none]
				// empty elements to return to original markup
				// [none]
				// return string of markup
				if ( this.isBlockWrapped ) {
					this.$blockWrapper.remove();
					return this.$blockWrapper[ 0 ].outerHTML;
				} else {
					this.$label.remove();
					return this.$label[ 0 ].outerHTML;
				}

			},

			setState: function( $radio ) {
				$radio = $radio || this.$radio;

				var checked = $radio.is( ':checked' );
				var disabled = !!$radio.prop( 'disabled' );

				this.$label.removeClass( 'checked' );
				if ( this.isBlockWrapped ) {
					this.$blockWrapper.removeClass( 'checked disabled' );
				}

				// set state of radio
				if ( checked === true ) {
					this.$label.addClass( 'checked' );
					if ( this.isBlockWrapped ) {
						this.$blockWrapper.addClass( 'checked' );
					}

				}

				if ( disabled === true ) {
					this.$label.addClass( 'disabled' );
					if ( this.isBlockWrapped ) {
						this.$blockWrapper.addClass( 'disabled' );
					}

				}

				//toggle container
				this.toggleContainer();
			},

			resetGroup: function() {
				var group = $( 'input[name="' + this.groupName + '"]' );

				group.each( function() {
					var lbl = $( this ).parent( 'label' );
					lbl.removeClass( 'checked' );
					lbl.parent( '.radio' ).removeClass( 'checked' );
				} );
			},

			enable: function() {
				this.$radio.attr( 'disabled', false );
				this.$label.removeClass( 'disabled' );
				if ( this.isBlockWrapped ) {
					this.$blockWrapper.removeClass( 'disabled' );
				}
			},

			disable: function() {
				this.$radio.attr( 'disabled', true );
				this.$label.addClass( 'disabled' );
				if ( this.isBlockWrapped ) {
					this.$blockWrapper.addClass( 'disabled' );
				}
			},

			itemchecked: function( e ) {
				var radio = $( e.target );

				this.resetGroup();
				this.setState( radio );
			},

			check: function() {
				this.resetGroup();
				this.$radio.prop( 'checked', true );
				this.$radio.attr( 'checked', 'checked' );
				this.setState( this.$radio );
			},

			toggleContainer: function() {
				var group;
				if ( this.$toggleContainer ) {
					// show corresponding container for currently selected radio
					if ( this.isChecked() ) {
						// hide containers for each item in group
						group = $( 'input[name="' + this.groupName + '"]' );
						group.each( function() {
							var selector = $( this ).attr( 'data-toggle' );
							$( selector ).addClass( 'hidden' );
							$( selector ).attr( 'aria-hidden', 'true' );
						} );
						this.$toggleContainer.removeClass( 'hide hidden' );
						this.$toggleContainer.attr( 'aria-hidden', 'false' );
					} else {
						this.$toggleContainer.addClass( 'hidden' );
						this.$toggleContainer.attr( 'aria-hidden', 'true' );
					}

				}
			},

			uncheck: function() {
				this.$radio.prop( 'checked', false );
				this.$radio.removeAttr( 'checked' );
				this.setState( this.$radio );
			},

			isChecked: function() {
				return this.$radio.is( ':checked' );
			}
		};


		// RADIO PLUGIN DEFINITION

		$.fn.radio = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.radio' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.radio', ( data = new Radio( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.radio.defaults = {};

		$.fn.radio.Constructor = Radio;

		$.fn.radio.noConflict = function() {
			$.fn.radio = old;
			return this;
		};


		// DATA-API

		$( document ).on( 'mouseover.fu.checkbox.data-api', '[data-initialize=radio]', function( e ) {
			var $control = $( e.target ).closest( '.radio' ).find( '[type=radio]' );
			if ( !$control.data( 'fu.radio' ) ) {
				$control.radio( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=radio] [type=radio]' ).each( function() {
				var $this = $( this );
				if ( $this.data( 'fu.radio' ) ) return;
				$this.radio( $this.data() );
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Search
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.search;

		// SEARCH CONSTRUCTOR AND PROTOTYPE

		var Search = function( element, options ) {
			this.$element = $( element );
			this.options = $.extend( {}, $.fn.search.defaults, options );

			this.$button = this.$element.find( 'button' );
			this.$input = this.$element.find( 'input' );
			this.$icon = this.$element.find( '.glyphicon' );

			this.$button.on( 'click.fu.search', $.proxy( this.buttonclicked, this ) );
			this.$input.on( 'keydown.fu.search', $.proxy( this.keypress, this ) );
			this.$input.on( 'keyup.fu.search', $.proxy( this.keypressed, this ) );

			this.activeSearch = '';
		};

		Search.prototype = {

			constructor: Search,

			destroy: function() {
				this.$element.remove();
				// any external bindings
				// [none]
				// set input value attrbute
				this.$element.find( 'input' ).each( function() {
					$( this ).attr( 'value', $( this ).val() );
				} );
				// empty elements to return to original markup
				// [none]
				// returns string of markup
				return this.$element[ 0 ].outerHTML;
			},

			search: function( searchText ) {
				if ( this.$icon.hasClass( 'glyphicon' ) ) {
					this.$icon.removeClass( 'glyphicon-search' ).addClass( 'glyphicon-remove' );
				}

				this.activeSearch = searchText;
				this.$element.addClass( 'searched' );
				this.$element.trigger( 'searched.fu.search', searchText );
			},

			clear: function() {
				if ( this.$icon.hasClass( 'glyphicon' ) ) {
					this.$icon.removeClass( 'glyphicon-remove' ).addClass( 'glyphicon-search' );
				}

				this.activeSearch = '';
				this.$input.val( '' );
				this.$element.removeClass( 'searched' );
				this.$element.trigger( 'cleared.fu.search' );
			},

			action: function() {
				var val = this.$input.val();
				var inputEmptyOrUnchanged = ( val === '' || val === this.activeSearch );

				if ( this.activeSearch && inputEmptyOrUnchanged ) {
					this.clear();
				} else if ( val ) {
					this.search( val );
				}
			},

			buttonclicked: function( e ) {
				e.preventDefault();
				if ( $( e.currentTarget ).is( '.disabled, :disabled' ) ) return;
				this.action();
			},

			keypress: function( e ) {
				if ( e.which === 13 ) {
					e.preventDefault();
				}
			},

			keypressed: function( e ) {
				var remove = 'glyphicon-remove';
				var search = 'glyphicon-search';
				var val;

				if ( e.which === 13 ) {
					e.preventDefault();
					this.action();
				} else if ( e.which === 9 ) {
					e.preventDefault();
				} else {
					val = this.$input.val();

					if ( val !== this.activeSearch || !val ) {
						this.$icon.removeClass( remove ).addClass( search );
						if ( val ) {
							this.$element.removeClass( 'searched' );
						} else if ( this.options.clearOnEmpty ) {
							this.clear();
						}

					} else {
						this.$icon.removeClass( search ).addClass( remove );
					}

				}
			},

			disable: function() {
				this.$element.addClass( 'disabled' );
				this.$input.attr( 'disabled', 'disabled' );
				this.$button.addClass( 'disabled' );
			},

			enable: function() {
				this.$element.removeClass( 'disabled' );
				this.$input.removeAttr( 'disabled' );
				this.$button.removeClass( 'disabled' );
			}
		};


		// SEARCH PLUGIN DEFINITION

		$.fn.search = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.search' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.search', ( data = new Search( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.search.defaults = {
			clearOnEmpty: false
		};

		$.fn.search.Constructor = Search;

		$.fn.search.noConflict = function() {
			$.fn.search = old;
			return this;
		};


		// DATA-API

		$( document ).on( 'mousedown.fu.search.data-api', '[data-initialize=search]', function( e ) {
			var $control = $( e.target ).closest( '.search' );
			if ( !$control.data( 'fu.search' ) ) {
				$control.search( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=search]' ).each( function() {
				var $this = $( this );
				if ( $this.data( 'fu.search' ) ) return;
				$this.search( $this.data() );
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Selectlist
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.selectlist;
		// SELECT CONSTRUCTOR AND PROTOTYPE

		var Selectlist = function( element, options ) {
			this.$element = $( element );
			this.options = $.extend( {}, $.fn.selectlist.defaults, options );

			this.$button = this.$element.find( '.btn.dropdown-toggle' );
			this.$hiddenField = this.$element.find( '.hidden-field' );
			this.$label = this.$element.find( '.selected-label' );
			this.$dropdownMenu = this.$element.find( '.dropdown-menu' );

			this.$element.on( 'click.fu.selectlist', '.dropdown-menu a', $.proxy( this.itemClicked, this ) );
			this.setDefaultSelection();

			if ( options.resize === 'auto' || this.$element.attr( 'data-resize' ) === 'auto' ) {
				this.resize();
			}
		};

		Selectlist.prototype = {

			constructor: Selectlist,

			destroy: function() {
				this.$element.remove();
				// any external bindings
				// [none]
				// empty elements to return to original markup
				// [none]
				// returns string of markup
				return this.$element[ 0 ].outerHTML;
			},

			doSelect: function( $item ) {
				var $selectedItem;
				this.$selectedItem = $selectedItem = $item;

				this.$hiddenField.val( this.$selectedItem.attr( 'data-value' ) );
				this.$label.html( $( this.$selectedItem.children()[ 0 ] ).html() );

				// clear and set selected item to allow declarative init state
				// unlike other controls, selectlist's value is stored internal, not in an input
				this.$element.find( 'li' ).each( function() {
					if ( $selectedItem.is( $( this ) ) ) {
						$( this ).attr( 'data-selected', true );
					} else {
						$( this ).removeData( 'selected' ).removeAttr( 'data-selected' );
					}
				} );
			},

			itemClicked: function( e ) {
				this.$element.trigger( 'clicked.fu.selectlist', this.$selectedItem );

				e.preventDefault();

				// is clicked element different from currently selected element?
				if ( !( $( e.target ).parent().is( this.$selectedItem ) ) ) {
					this.itemChanged( e );
				}

				// return focus to control after selecting an option
				this.$element.find( '.dropdown-toggle' ).focus();
			},

			itemChanged: function( e ) {
				//selectedItem needs to be <li> since the data is stored there, not in <a>
				this.doSelect( $( e.target ).closest( 'li' ) );

				// pass object including text and any data-attributes
				// to onchange event
				var data = this.selectedItem();
				// trigger changed event
				this.$element.trigger( 'changed.fu.selectlist', data );
			},

			resize: function() {
				var width = 0;
				var newWidth = 0;
				var sizer = $( '<div/>' ).addClass( 'selectlist-sizer' );


				if ( Boolean( $( document ).find( 'html' ).hasClass( 'fuelux' ) ) ) {
					// default behavior for fuel ux setup. means fuelux was a class on the html tag
					$( document.body ).append( sizer );
				} else {
					// fuelux is not a class on the html tag. So we'll look for the first one we find so the correct styles get applied to the sizer
					$( '.fuelux:first' ).append( sizer );
				}

				sizer.append( this.$element.clone() );

				this.$element.find( 'a' ).each( function() {
					sizer.find( '.selected-label' ).text( $( this ).text() );
					newWidth = sizer.find( '.selectlist' ).outerWidth();
					newWidth = newWidth + sizer.find( '.sr-only' ).outerWidth();
					if ( newWidth > width ) {
						width = newWidth;
					}
				} );

				if ( width <= 1 ) {
					return;
				}

				this.$button.css( 'width', width );
				this.$dropdownMenu.css( 'width', width );

				sizer.remove();
			},

			selectedItem: function() {
				var txt = this.$selectedItem.text();
				return $.extend( {
					text: txt
				}, this.$selectedItem.data() );
			},

			selectByText: function( text ) {
				var $item = $( [] );
				this.$element.find( 'li' ).each( function() {
					if ( ( this.textContent || this.innerText || $( this ).text() || '' ).toLowerCase() === ( text || '' ).toLowerCase() ) {
						$item = $( this );
						return false;
					}
				} );
				this.doSelect( $item );
			},

			selectByValue: function( value ) {
				var selector = 'li[data-value="' + value + '"]';
				this.selectBySelector( selector );
			},

			selectByIndex: function( index ) {
				// zero-based index
				var selector = 'li:eq(' + index + ')';
				this.selectBySelector( selector );
			},

			selectBySelector: function( selector ) {
				var $item = this.$element.find( selector );
				this.doSelect( $item );
			},

			setDefaultSelection: function() {
				var $item = this.$element.find( 'li[data-selected=true]' ).eq( 0 );

				if ( $item.length === 0 ) {
					$item = this.$element.find( 'li' ).has( 'a' ).eq( 0 );
				}

				this.doSelect( $item );
			},

			enable: function() {
				this.$element.removeClass( 'disabled' );
				this.$button.removeClass( 'disabled' );
			},

			disable: function() {
				this.$element.addClass( 'disabled' );
				this.$button.addClass( 'disabled' );
			}
		};


		// SELECT PLUGIN DEFINITION

		$.fn.selectlist = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.selectlist' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.selectlist', ( data = new Selectlist( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.selectlist.defaults = {};

		$.fn.selectlist.Constructor = Selectlist;

		$.fn.selectlist.noConflict = function() {
			$.fn.selectlist = old;
			return this;
		};


		// DATA-API

		$( document ).on( 'mousedown.fu.selectlist.data-api', '[data-initialize=selectlist]', function( e ) {
			var $control = $( e.target ).closest( '.selectlist' );
			if ( !$control.data( 'fu.selectlist' ) ) {
				$control.selectlist( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=selectlist]' ).each( function() {
				var $this = $( this );
				if ( !$this.data( 'fu.selectlist' ) ) {
					$this.selectlist( $this.data() );
				}
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Spinbox
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.spinbox;

		// SPINBOX CONSTRUCTOR AND PROTOTYPE

		var Spinbox = function( element, options ) {
			this.$element = $( element );
			this.$element.find( '.btn' ).on( 'click', function( e ) {
				//keep spinbox from submitting if they forgot to say type="button" on their spinner buttons
				e.preventDefault();
			} );
			this.options = $.extend( {}, $.fn.spinbox.defaults, options );
			this.$input = this.$element.find( '.spinbox-input' );
			this.$element.on( 'focusin.fu.spinbox', this.$input, $.proxy( this.changeFlag, this ) );
			this.$element.on( 'focusout.fu.spinbox', this.$input, $.proxy( this.change, this ) );
			this.$element.on( 'keydown.fu.spinbox', this.$input, $.proxy( this.keydown, this ) );
			this.$element.on( 'keyup.fu.spinbox', this.$input, $.proxy( this.keyup, this ) );

			this.bindMousewheelListeners();
			this.mousewheelTimeout = {};

			if ( this.options.hold ) {
				this.$element.on( 'mousedown.fu.spinbox', '.spinbox-up', $.proxy( function() {
					this.startSpin( true );
				}, this ) );
				this.$element.on( 'mouseup.fu.spinbox', '.spinbox-up, .spinbox-down', $.proxy( this.stopSpin, this ) );
				this.$element.on( 'mouseout.fu.spinbox', '.spinbox-up, .spinbox-down', $.proxy( this.stopSpin, this ) );
				this.$element.on( 'mousedown.fu.spinbox', '.spinbox-down', $.proxy( function() {
					this.startSpin( false );
				}, this ) );
			} else {
				this.$element.on( 'click.fu.spinbox', '.spinbox-up', $.proxy( function() {
					this.step( true );
				}, this ) );
				this.$element.on( 'click.fu.spinbox', '.spinbox-down', $.proxy( function() {
					this.step( false );
				}, this ) );
			}

			this.switches = {
				count: 1,
				enabled: true
			};

			if ( this.options.speed === 'medium' ) {
				this.switches.speed = 300;
			} else if ( this.options.speed === 'fast' ) {
				this.switches.speed = 100;
			} else {
				this.switches.speed = 500;
			}

			this.lastValue = this.options.value;

			this.render();

			if ( this.options.disabled ) {
				this.disable();
			}
		};

		Spinbox.prototype = {
			constructor: Spinbox,

			destroy: function() {
				this.$element.remove();
				// any external bindings
				// [none]
				// set input value attrbute
				this.$element.find( 'input' ).each( function() {
					$( this ).attr( 'value', $( this ).val() );
				} );
				// empty elements to return to original markup
				// [none]
				// returns string of markup
				return this.$element[ 0 ].outerHTML;
			},

			render: function() {
				var inputValue = this.parseInput( this.$input.val() );
				var maxUnitLength = '';

				// if input is empty and option value is default, 0
				if ( inputValue !== '' && this.options.value === 0 ) {
					this.value( inputValue );
				} else {
					this.output( this.options.value );
				}

				if ( this.options.units.length ) {
					$.each( this.options.units, function( index, value ) {
						if ( value.length > maxUnitLength.length ) {
							maxUnitLength = value;
						}
					} );
				}
			},

			output: function( value, updateField ) {
				value = ( value + '' ).split( '.' ).join( this.options.decimalMark );
				updateField = ( updateField || true );
				if ( updateField ) {
					this.$input.val( value );
				}

				return value;
			},

			parseInput: function( value ) {
				value = ( value + '' ).split( this.options.decimalMark ).join( '.' );

				return value;
			},

			change: function() {
				var newVal = this.parseInput( this.$input.val() ) || '';

				if ( this.options.units.length || this.options.decimalMark !== '.' ) {
					newVal = this.parseValueWithUnit( newVal );
				} else if ( newVal / 1 ) {
					newVal = this.options.value = this.checkMaxMin( newVal / 1 );
				} else {
					newVal = this.checkMaxMin( newVal.replace( /[^0-9.-]/g, '' ) || '' );
					this.options.value = newVal / 1;
				}

				this.output( newVal );

				this.changeFlag = false;
				this.triggerChangedEvent();
			},

			changeFlag: function() {
				this.changeFlag = true;
			},

			stopSpin: function() {
				if ( this.switches.timeout !== undefined ) {
					clearTimeout( this.switches.timeout );
					this.switches.count = 1;
					this.triggerChangedEvent();
				}
			},

			triggerChangedEvent: function() {
				var currentValue = this.value();
				if ( currentValue === this.lastValue ) return;
				this.lastValue = currentValue;

				// Primary changed event
				this.$element.trigger( 'changed.fu.spinbox', this.output( currentValue, false ) ); // no DOM update
			},

			startSpin: function( type ) {
				if ( !this.options.disabled ) {
					var divisor = this.switches.count;

					if ( divisor === 1 ) {
						this.step( type );
						divisor = 1;
					} else if ( divisor < 3 ) {
						divisor = 1.5;
					} else if ( divisor < 8 ) {
						divisor = 2.5;
					} else {
						divisor = 4;
					}

					this.switches.timeout = setTimeout( $.proxy( function() {
						this.iterate( type );
					}, this ), this.switches.speed / divisor );
					this.switches.count++;
				}
			},

			iterate: function( type ) {
				this.step( type );
				this.startSpin( type );
			},

			step: function( isIncrease ) {
				// isIncrease: true is up, false is down

				var digits, multiple, currentValue, limitValue;

				// trigger change event
				if ( this.changeFlag ) {
					this.change();
				}

				// get current value and min/max options
				currentValue = this.options.value;
				limitValue = isIncrease ? this.options.max : this.options.min;

				if ( ( isIncrease ? currentValue < limitValue : currentValue > limitValue ) ) {
					var newVal = currentValue + ( isIncrease ? 1 : -1 ) * this.options.step;

					// raise to power of 10 x number of decimal places, then round
					if ( this.options.step % 1 !== 0 ) {
						digits = ( this.options.step + '' ).split( '.' )[ 1 ].length;
						multiple = Math.pow( 10, digits );
						newVal = Math.round( newVal * multiple ) / multiple;
					}

					// if outside limits, set to limit value
					if ( isIncrease ? newVal > limitValue : newVal < limitValue ) {
						this.value( limitValue );
					} else {
						this.value( newVal );
					}

				} else if ( this.options.cycle ) {
					var cycleVal = isIncrease ? this.options.min : this.options.max;
					this.value( cycleVal );
				}
			},

			value: function( value ) {
				if ( value || value === 0 ) {
					if ( this.options.units.length || this.options.decimalMark !== '.' ) {
						this.output( this.parseValueWithUnit( value + ( this.unit || '' ) ) );
						return this;

					} else if ( !isNaN( parseFloat( value ) ) && isFinite( value ) ) {
						this.options.value = value / 1;
						this.output( value + ( this.unit ? this.unit : '' ) );
						return this;

					}

				} else {
					if ( this.changeFlag ) {
						this.change();
					}

					if ( this.unit ) {
						return this.options.value + this.unit;
					} else {
						return this.output( this.options.value, false ); // no DOM update
					}

				}
			},

			isUnitLegal: function( unit ) {
				var legalUnit;

				$.each( this.options.units, function( index, value ) {
					if ( value.toLowerCase() === unit.toLowerCase() ) {
						legalUnit = unit.toLowerCase();
						return false;
					}
				} );

				return legalUnit;
			},

			// strips units and add them back
			parseValueWithUnit: function( value ) {
				var unit = value.replace( /[^a-zA-Z]/g, '' );
				var number = value.replace( /[^0-9.-]/g, '' );

				if ( unit ) {
					unit = this.isUnitLegal( unit );
				}

				this.options.value = this.checkMaxMin( number / 1 );
				this.unit = unit || undefined;
				return this.options.value + ( unit || '' );
			},

			checkMaxMin: function( value ) {
				// if unreadable
				if ( isNaN( parseFloat( value ) ) ) {
					return value;
				}

				// if not within range return the limit
				if ( !( value <= this.options.max && value >= this.options.min ) ) {
					value = value >= this.options.max ? this.options.max : this.options.min;
				}

				return value;
			},

			disable: function() {
				this.options.disabled = true;
				this.$element.addClass( 'disabled' );
				this.$input.attr( 'disabled', '' );
				this.$element.find( 'button' ).addClass( 'disabled' );
			},

			enable: function() {
				this.options.disabled = false;
				this.$element.removeClass( 'disabled' );
				this.$input.removeAttr( 'disabled' );
				this.$element.find( 'button' ).removeClass( 'disabled' );
			},

			keydown: function( event ) {
				var keyCode = event.keyCode;
				if ( keyCode === 38 ) {
					this.step( true );
				} else if ( keyCode === 40 ) {
					this.step( false );
				}
			},

			keyup: function( event ) {
				var keyCode = event.keyCode;

				if ( keyCode === 38 || keyCode === 40 ) {
					this.triggerChangedEvent();
				}
			},

			bindMousewheelListeners: function() {
				var inputEl = this.$input.get( 0 );
				if ( inputEl.addEventListener ) {
					//IE 9, Chrome, Safari, Opera
					inputEl.addEventListener( 'mousewheel', $.proxy( this.mousewheelHandler, this ), false );
					// Firefox
					inputEl.addEventListener( 'DOMMouseScroll', $.proxy( this.mousewheelHandler, this ), false );
				} else {
					// IE <9
					inputEl.attachEvent( 'onmousewheel', $.proxy( this.mousewheelHandler, this ) );
				}
			},

			mousewheelHandler: function( event ) {
				if ( !this.options.disabled ) {
					var e = window.event || event; // old IE support
					var delta = Math.max( -1, Math.min( 1, ( e.wheelDelta || -e.detail ) ) );
					var self = this;

					clearTimeout( this.mousewheelTimeout );
					this.mousewheelTimeout = setTimeout( function() {
						self.triggerChangedEvent();
					}, 300 );

					if ( delta < 0 ) {
						this.step( true );
					} else {
						this.step( false );
					}

					if ( e.preventDefault ) {
						e.preventDefault();
					} else {
						e.returnValue = false;
					}

					return false;
				}
			}
		};


		// SPINBOX PLUGIN DEFINITION

		$.fn.spinbox = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.spinbox' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.spinbox', ( data = new Spinbox( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		// value needs to be 0 for this.render();
		$.fn.spinbox.defaults = {
			value: 0,
			min: 0,
			max: 999,
			step: 1,
			hold: true,
			speed: 'medium',
			disabled: false,
			cycle: false,
			units: [],
			decimalMark: '.'
		};

		$.fn.spinbox.Constructor = Spinbox;

		$.fn.spinbox.noConflict = function() {
			$.fn.spinbox = old;
			return this;
		};


		// DATA-API

		$( document ).on( 'mousedown.fu.spinbox.data-api', '[data-initialize=spinbox]', function( e ) {
			var $control = $( e.target ).closest( '.spinbox' );
			if ( !$control.data( 'fu.spinbox' ) ) {
				$control.spinbox( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=spinbox]' ).each( function() {
				var $this = $( this );
				if ( !$this.data( 'fu.spinbox' ) ) {
					$this.spinbox( $this.data() );
				}
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Tree
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.tree;

		// TREE CONSTRUCTOR AND PROTOTYPE

		var Tree = function Tree( element, options ) {
			this.$element = $( element );
			this.options = $.extend( {}, $.fn.tree.defaults, options );

			if ( this.options.itemSelect ) {
				this.$element.on( 'click.fu.tree', '.tree-item', $.proxy( function( ev ) {
					this.selectItem( ev.currentTarget );
				}, this ) );
			}

			this.$element.on( 'click.fu.tree', '.tree-branch-name', $.proxy( function( ev ) {
				this.toggleFolder( ev.currentTarget );
			}, this ) );

			if ( this.options.folderSelect ) {
				this.$element.off( 'click.fu.tree', '.tree-branch-name' );
				this.$element.on( 'click.fu.tree', '.icon-caret', $.proxy( function( ev ) {
					this.toggleFolder( $( ev.currentTarget ).parent() );
				}, this ) );
				this.$element.on( 'click.fu.tree', '.tree-branch-name', $.proxy( function( ev ) {
					this.selectFolder( $( ev.currentTarget ) );
				}, this ) );
			}

			this.render();
		};

		Tree.prototype = {
			constructor: Tree,

			destroy: function destroy() {
				// any external bindings [none]
				// empty elements to return to original markup
				this.$element.find( "li:not([data-template])" ).remove();

				this.$element.remove();
				// returns string of markup
				return this.$element[ 0 ].outerHTML;
			},

			render: function render() {
				this.populate( this.$element );
			},

			populate: function populate( $el ) {
				var self = this;
				var $parent = ( $el.hasClass( 'tree' ) ) ? $el : $el.parent();
				var loader = $parent.find( '.tree-loader:eq(0)' );
				var treeData = $parent.data();

				loader.removeClass( 'hide' );
				this.options.dataSource( treeData ? treeData : {}, function( items ) {
					loader.addClass( 'hide' );

					$.each( items.data, function( index, value ) {
						var $entity;

						if ( value.type === 'folder' ) {
							$entity = self.$element.find( '[data-template=treebranch]:eq(0)' ).clone().removeClass( 'hide' ).removeData( 'template' );
							$entity.data( value );
							$entity.find( '.tree-branch-name > .tree-label' ).html( value.text || value.name );
						} else if ( value.type === 'item' ) {
							$entity = self.$element.find( '[data-template=treeitem]:eq(0)' ).clone().removeClass( 'hide' ).removeData( 'template' );
							$entity.find( '.tree-item-name > .tree-label' ).html( value.text || value.name );
							$entity.data( value );
						}

						// Decorate $entity with data or other attributes making the
						// element easily accessable with libraries like jQuery.
						//
						// Values are contained within the object returned
						// for folders and items as attr:
						//
						// {
						//     text: "An Item",
						//     type: 'item',
						//     attr = {
						//         'classes': 'required-item red-text',
						//         'data-parent': parentId,
						//         'guid': guid,
						//         'id': guid
						//     }
						// };
						//
						// the "name" attribute is also supported but is deprecated for "text".

						// add attributes to tree-branch or tree-item
						var attr = value.attr || value.dataAttributes || [];
						$.each( attr, function( key, value ) {
							switch ( key ) {
								case 'cssClass':
								case 'class':
								case 'className':
									$entity.addClass( value );
									break;

									// allow custom icons
								case 'data-icon':
									$entity.find( '.icon-item' ).removeClass().addClass( 'icon-item ' + value );
									$entity.attr( key, value );
									break;

									// ARIA support
								case 'id':
									$entity.attr( key, value );
									$entity.attr( 'aria-labelledby', value + '-label' );
									$entity.find( '.tree-branch-name > .tree-label' ).attr( 'id', value + '-label' );
									break;

									// style, data-*
								default:
									$entity.attr( key, value );
									break;
							}
						} );

						// add child nodes
						if ( $el.hasClass( 'tree-branch-header' ) ) {
							$parent.find( '.tree-branch-children:eq(0)' ).append( $entity );
						} else {
							$el.append( $entity );
						}
					} );

					// return newly populated folder
					self.$element.trigger( 'loaded.fu.tree', $parent );
				} );
			},

			selectItem: function selectItem( el ) {
				if ( !this.options.itemSelect ) return;
				var $el = $( el );
				var selData = $el.data();
				var $all = this.$element.find( '.tree-selected' );
				var data = [];
				var $icon = $el.find( '.icon-item' );

				if ( this.options.multiSelect ) {
					$.each( $all, function( index, value ) {
						var $val = $( value );
						if ( $val[ 0 ] !== $el[ 0 ] ) {
							data.push( $( value ).data() );
						}
					} );
				} else if ( $all[ 0 ] !== $el[ 0 ] ) {
					$all.removeClass( 'tree-selected' )
						.find( '.glyphicon' ).removeClass( 'glyphicon-ok' ).addClass( 'fueluxicon-bullet' );
					data.push( selData );
				}

				var eventType = 'selected';
				if ( $el.hasClass( 'tree-selected' ) ) {
					eventType = 'deselected';
					$el.removeClass( 'tree-selected' );
					if ( $icon.hasClass( 'glyphicon-ok' ) || $icon.hasClass( 'fueluxicon-bullet' ) ) {
						$icon.removeClass( 'glyphicon-ok' ).addClass( 'fueluxicon-bullet' );
					}

				} else {
					$el.addClass( 'tree-selected' );
					// add tree dot back in
					if ( $icon.hasClass( 'glyphicon-ok' ) || $icon.hasClass( 'fueluxicon-bullet' ) ) {
						$icon.removeClass( 'fueluxicon-bullet' ).addClass( 'glyphicon-ok' );
					}

					if ( this.options.multiSelect ) {
						data.push( selData );
					}

				}

				this.$element.trigger( eventType + '.fu.tree', {
					target: selData,
					selected: data
				} );

				// Return new list of selected items, the item
				// clicked, and the type of event:
				$el.trigger( 'updated.fu.tree', {
					selected: data,
					item: $el,
					eventType: eventType
				} );
			},

			openFolder: function openFolder( el, ignoreRedundantOpens ) {
				var $el = $( el );

				//don't break the API :| (make this functionally the same as calling 'toggleFolder')
				if ( !ignoreRedundantOpens && $el.find( '.glyphicon-folder-open' ).length && !this.options.ignoreRedundantOpens ) {
					this.closeFolder( el );
				}

				var $branch = $el.closest( '.tree-branch' );
				var $treeFolderContent = $branch.find( '.tree-branch-children' );
				var $treeFolderContentFirstChild = $treeFolderContent.eq( 0 );

				//take care of the styles
				$branch.addClass( 'tree-open' );
				$branch.attr( 'aria-expanded', 'true' );
				$treeFolderContentFirstChild.removeClass( 'hide' );
				$branch.find( '> .tree-branch-header .icon-folder' ).eq( 0 )
					.removeClass( 'glyphicon-folder-close' )
					.addClass( 'glyphicon-folder-open' );

				//add the children to the folder
				if ( !$treeFolderContent.children().length ) {
					this.populate( $treeFolderContent );
				}

				this.$element.trigger( 'opened.fu.tree', $branch.data() );
			},

			closeFolder: function closeFolder( el ) {
				var $el = $( el );
				var $branch = $el.closest( '.tree-branch' );
				var $treeFolderContent = $branch.find( '.tree-branch-children' );
				var $treeFolderContentFirstChild = $treeFolderContent.eq( 0 );

				//take care of the styles
				$branch.removeClass( 'tree-open' );
				$branch.attr( 'aria-expanded', 'false' );
				$treeFolderContentFirstChild.addClass( 'hide' );
				$branch.find( '> .tree-branch-header .icon-folder' ).eq( 0 )
					.removeClass( 'glyphicon-folder-open' )
					.addClass( 'glyphicon-folder-close' );

				// remove chidren if no cache
				if ( !this.options.cacheItems ) {
					$treeFolderContentFirstChild.empty();
				}

				this.$element.trigger( 'closed.fu.tree', $branch.data() );
			},

			toggleFolder: function toggleFolder( el ) {
				var $el = $( el );

				if ( $el.find( '.glyphicon-folder-close' ).length ) {
					this.openFolder( el );
				} else if ( $el.find( '.glyphicon-folder-open' ).length ) {
					this.closeFolder( el );
				}
			},

			selectFolder: function selectFolder( clickedElement ) {
				if ( !this.options.folderSelect ) return;
				var $clickedElement = $( clickedElement );
				var $clickedBranch = $clickedElement.closest( '.tree-branch' );
				var $selectedBranch = this.$element.find( '.tree-branch.tree-selected' );
				var clickedData = $clickedBranch.data();
				var selectedData = [];
				var eventType = 'selected';

				// select clicked item
				if ( $clickedBranch.hasClass( 'tree-selected' ) ) {
					eventType = 'deselected';
					$clickedBranch.removeClass( 'tree-selected' );
				} else {
					$clickedBranch.addClass( 'tree-selected' );
				}

				if ( this.options.multiSelect ) {
					// get currently selected
					$selectedBranch = this.$element.find( '.tree-branch.tree-selected' );

					$.each( $selectedBranch, function( index, value ) {
						var $value = $( value );
						if ( $value[ 0 ] !== $clickedElement[ 0 ] ) {
							selectedData.push( $( value ).data() );
						}
					} );

				} else if ( $selectedBranch[ 0 ] !== $clickedElement[ 0 ] ) {
					$selectedBranch.removeClass( 'tree-selected' );

					selectedData.push( clickedData );
				}

				this.$element.trigger( eventType + '.fu.tree', {
					target: clickedData,
					selected: selectedData
				} );

				// Return new list of selected items, the item
				// clicked, and the type of event:
				$clickedElement.trigger( 'updated.fu.tree', {
					selected: selectedData,
					item: $clickedElement,
					eventType: eventType
				} );
			},

			selectedItems: function selectedItems() {
				var $sel = this.$element.find( '.tree-selected' );
				var data = [];

				$.each( $sel, function( index, value ) {
					data.push( $( value ).data() );
				} );
				return data;
			},

			// collapses open folders
			collapse: function collapse() {
				var self = this;
				var reportedClosed = [];

				var closedReported = function closedReported( event, closed ) {
					reportedClosed.push( closed );

					if ( self.$element.find( ".tree-branch.tree-open:not('.hide')" ).length === 0 ) {
						self.$element.trigger( 'closedAll.fu.tree', {
							tree: self.$element,
							reportedClosed: reportedClosed
						} );
						self.$element.off( 'loaded.fu.tree', self.$element, closedReported );
					}
				};

				//trigger callback when all folders have reported closed
				self.$element.on( 'closed.fu.tree', closedReported );

				self.$element.find( ".tree-branch.tree-open:not('.hide')" ).each( function() {
					self.closeFolder( this );
				} );
			},

			//disclose visible will only disclose visible tree folders
			discloseVisible: function discloseVisible() {
				var self = this;
				var $openableFolders = self.$element.find( ".tree-branch:not('.tree-open, .hide')" );
				var reportedOpened = [];

				var openReported = function openReported( event, opened ) {
					reportedOpened.push( opened );

					if ( reportedOpened.length === $openableFolders.length ) {
						self.$element.trigger( 'disclosedVisible.fu.tree', {
							tree: self.$element,
							reportedOpened: reportedOpened
						} );
						/*
						 * Unbind the `openReported` event. `discloseAll` may be running and we want to reset this
						 * method for the next iteration.
						 */
						self.$element.off( 'loaded.fu.tree', self.$element, openReported );
					}
				};

				//trigger callback when all folders have reported opened
				self.$element.on( 'loaded.fu.tree', openReported );

				// open all visible folders
				self.$element.find( ".tree-branch:not('.tree-open, .hide')" ).each( function triggerOpen() {
					self.openFolder( $( this ).find( '.tree-branch-header' ), true );
				} );
			},

			/**
			 * Disclose all will keep listening for `loaded.fu.tree` and if `$(tree-el).data('ignore-disclosures-limit')`
			 * is `true` (defaults to `true`) it will attempt to disclose any new closed folders than were
			 * loaded in during the last disclosure.
			 */
			discloseAll: function discloseAll() {
				var self = this;

				//first time
				if ( typeof self.$element.data( 'disclosures' ) === 'undefined' ) {
					self.$element.data( 'disclosures', 0 );
				}

				var isExceededLimit = ( self.options.disclosuresUpperLimit >= 1 && self.$element.data( 'disclosures' ) >= self.options.disclosuresUpperLimit );
				var isAllDisclosed = self.$element.find( ".tree-branch:not('.tree-open, .hide')" ).length === 0;


				if ( !isAllDisclosed ) {
					if ( isExceededLimit ) {
						self.$element.trigger( 'exceededDisclosuresLimit.fu.tree', {
							tree: self.$element,
							disclosures: self.$element.data( 'disclosures' )
						} );

						/*
						 * If you've exceeded the limit, the loop will be killed unless you
						 * explicitly ignore the limit and start the loop again:
						 *
						 *    $tree.one('exceededDisclosuresLimit.fu.tree', function () {
						 *        $tree.data('ignore-disclosures-limit', true);
						 *        $tree.tree('discloseAll');
						 *    });
						 */
						if ( !self.$element.data( 'ignore-disclosures-limit' ) ) {
							return;
						}

					}

					self.$element.data( 'disclosures', self.$element.data( 'disclosures' ) + 1 );

					/*
					 * A new branch that is closed might be loaded in, make sure those get handled too.
					 * This attachment needs to occur before calling `discloseVisible` to make sure that
					 * if the execution of `discloseVisible` happens _super fast_ (as it does in our QUnit tests
					 * this will still be called. However, make sure this only gets called _once_, because
					 * otherwise, every single time we go through this loop, _another_ event will be bound
					 * and then when the trigger happens, this will fire N times, where N equals the number
					 * of recursive `discloseAll` executions (instead of just one)
					 */
					self.$element.one( 'disclosedVisible.fu.tree', function() {
						self.discloseAll();
					} );

					/*
					 * If the page is very fast, calling this first will cause `disclosedVisible.fu.tree` to not
					 * be bound in time to be called, so, we need to call this last so that the things bound
					 * and triggered above can have time to take place before the next execution of the
					 * `discloseAll` method.
					 */
					self.discloseVisible();
				} else {
					self.$element.trigger( 'disclosedAll.fu.tree', {
						tree: self.$element,
						disclosures: self.$element.data( 'disclosures' )
					} );

					//if `cacheItems` is false, and they call closeAll, the data is trashed and therefore
					//disclosures needs to accurately reflect that
					if ( !self.options.cacheItems ) {
						self.$element.one( 'closeAll.fu.tree', function() {
							self.$element.data( 'disclosures', 0 );
						} );
					}

				}
			}
		};

		//alias for collapse for consistency. "Collapse" is an ambiguous term (collapse what? All? One specific branch?)
		Tree.prototype.closeAll = Tree.prototype.collapse;

		// TREE PLUGIN DEFINITION

		$.fn.tree = function tree( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.tree' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.tree', ( data = new Tree( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.tree.defaults = {
			dataSource: function dataSource( options, callback ) {},
			multiSelect: false,
			cacheItems: true,
			folderSelect: true,
			itemSelect: true,
			/*
			 * Calling "open" on something, should do that. However, the current API
			 * instead treats "open" as a "toggle" and will close a folder that is open
			 * if you call `openFolder` on it. Setting `ignoreRedundantOpens` to `true`
			 * will make the folder instead ignore the redundant call and stay open.
			 * This allows you to fix the API until 3.7.x when we can deprecate the switch
			 * and make `openFolder` behave correctly by default.
			 */
			ignoreRedundantOpens: false,
			/*
			 * How many times `discloseAll` should be called before a stopping and firing
			 * an `exceededDisclosuresLimit` event. You can force it to continue by
			 * listening for this event, setting `ignore-disclosures-limit` to `true` and
			 * starting `discloseAll` back up again. This lets you make more decisions
			 * about if/when/how/why/how many times `discloseAll` will be started back
			 * up after it exceeds the limit.
			 *
			 *    $tree.one('exceededDisclosuresLimit.fu.tree', function () {
			 *        $tree.data('ignore-disclosures-limit', true);
			 *        $tree.tree('discloseAll');
			 *    });
			 *
			 * `disclusuresUpperLimit` defaults to `0`, so by default this trigger
			 * will never fire. The true hard the upper limit is the browser's
			 * ability to load new items (i.e. it will keep loading until the browser
			 * falls over and dies). On the Fuel UX `index.html` page, the point at
			 * which the page became super slow (enough to seem almost unresponsive)
			 * was `4`, meaning 256 folders had been opened, and 1024 were attempting to open.
			 */
			disclosuresUpperLimit: 0
		};

		$.fn.tree.Constructor = Tree;

		$.fn.tree.noConflict = function() {
			$.fn.tree = old;
			return this;
		};


		// NO DATA-API DUE TO NEED OF DATA-SOURCE



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Wizard
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.wizard;

		// WIZARD CONSTRUCTOR AND PROTOTYPE

		var Wizard = function( element, options ) {
			var kids;

			this.$element = $( element );
			this.options = $.extend( {}, $.fn.wizard.defaults, options );
			this.options.disablePreviousStep = ( this.$element.attr( 'data-restrict' ) === 'previous' ) ? true : this.options.disablePreviousStep;
			this.currentStep = this.options.selectedItem.step;
			this.numSteps = this.$element.find( '.steps li' ).length;
			this.$prevBtn = this.$element.find( 'button.btn-prev' );
			this.$nextBtn = this.$element.find( 'button.btn-next' );

			kids = this.$nextBtn.children().detach();
			this.nextText = $.trim( this.$nextBtn.text() );
			this.$nextBtn.append( kids );

			// handle events
			this.$prevBtn.on( 'click.fu.wizard', $.proxy( this.previous, this ) );
			this.$nextBtn.on( 'click.fu.wizard', $.proxy( this.next, this ) );
			this.$element.on( 'click.fu.wizard', 'li.complete', $.proxy( this.stepclicked, this ) );

			this.selectedItem( this.options.selectedItem );

			if ( this.options.disablePreviousStep ) {
				this.$prevBtn.attr( 'disabled', true );
				this.$element.find( '.steps' ).addClass( 'previous-disabled' );
			}
		};

		Wizard.prototype = {

			constructor: Wizard,

			destroy: function() {
				this.$element.remove();
				// any external bindings [none]
				// empty elements to return to original markup [none]
				// returns string of markup
				return this.$element[ 0 ].outerHTML;
			},

			//index is 1 based
			//second parameter can be array of objects [{ ... }, { ... }] or you can pass n additional objects as args
			//object structure is as follows (all params are optional): { badge: '', label: '', pane: '' }
			addSteps: function( index ) {
				var items = [].slice.call( arguments ).slice( 1 );
				var $steps = this.$element.find( '.steps' );
				var $stepContent = this.$element.find( '.step-content' );
				var i, l, $pane, $startPane, $startStep, $step;

				index = ( index === -1 || ( index > ( this.numSteps + 1 ) ) ) ? this.numSteps + 1 : index;
				if ( items[ 0 ] instanceof Array ) {
					items = items[ 0 ];
				}

				$startStep = $steps.find( 'li:nth-child(' + index + ')' );
				$startPane = $stepContent.find( '.step-pane:nth-child(' + index + ')' );
				if ( $startStep.length < 1 ) {
					$startStep = null;
				}

				for ( i = 0, l = items.length; i < l; i++ ) {
					$step = $( '<li data-step="' + index + '"><span class="badge badge-info"></span></li>' );
					$step.append( items[ i ].label || '' ).append( '<span class="chevron"></span>' );
					$step.find( '.badge' ).append( items[ i ].badge || index );

					$pane = $( '<div class="step-pane" data-step="' + index + '"></div>' );
					$pane.append( items[ i ].pane || '' );

					if ( !$startStep ) {
						$steps.append( $step );
						$stepContent.append( $pane );
					} else {
						$startStep.before( $step );
						$startPane.before( $pane );
					}

					index++;
				}

				this.syncSteps();
				this.numSteps = $steps.find( 'li' ).length;
				this.setState();
			},

			//index is 1 based, howMany is number to remove
			removeSteps: function( index, howMany ) {
				var action = 'nextAll';
				var i = 0;
				var $steps = this.$element.find( '.steps' );
				var $stepContent = this.$element.find( '.step-content' );
				var $start;

				howMany = ( howMany !== undefined ) ? howMany : 1;

				if ( index > $steps.find( 'li' ).length ) {
					$start = $steps.find( 'li:last' );
				} else {
					$start = $steps.find( 'li:nth-child(' + index + ')' ).prev();
					if ( $start.length < 1 ) {
						action = 'children';
						$start = $steps;
					}

				}

				$start[ action ]().each( function() {
					var item = $( this );
					var step = item.attr( 'data-step' );
					if ( i < howMany ) {
						item.remove();
						$stepContent.find( '.step-pane[data-step="' + step + '"]:first' ).remove();
					} else {
						return false;
					}

					i++;
				} );

				this.syncSteps();
				this.numSteps = $steps.find( 'li' ).length;
				this.setState();
			},

			setState: function() {
				var canMovePrev = ( this.currentStep > 1 ); //remember, steps index is 1 based...
				var isFirstStep = ( this.currentStep === 1 );
				var isLastStep = ( this.currentStep === this.numSteps );

				// disable buttons based on current step
				if ( !this.options.disablePreviousStep ) {
					this.$prevBtn.attr( 'disabled', ( isFirstStep === true || canMovePrev === false ) );
				}

				// change button text of last step, if specified
				var last = this.$nextBtn.attr( 'data-last' );
				if ( last ) {
					this.lastText = last;
					// replace text
					var text = this.nextText;
					if ( isLastStep === true ) {
						text = this.lastText;
						// add status class to wizard
						this.$element.addClass( 'complete' );
					} else {
						this.$element.removeClass( 'complete' );
					}

					var kids = this.$nextBtn.children().detach();
					this.$nextBtn.text( text ).append( kids );
				}

				// reset classes for all steps
				var $steps = this.$element.find( '.steps li' );
				$steps.removeClass( 'active' ).removeClass( 'complete' );
				$steps.find( 'span.badge' ).removeClass( 'badge-info' ).removeClass( 'badge-success' );

				// set class for all previous steps
				var prevSelector = '.steps li:lt(' + ( this.currentStep - 1 ) + ')';
				var $prevSteps = this.$element.find( prevSelector );
				$prevSteps.addClass( 'complete' );
				$prevSteps.find( 'span.badge' ).addClass( 'badge-success' );

				// set class for current step
				var currentSelector = '.steps li:eq(' + ( this.currentStep - 1 ) + ')';
				var $currentStep = this.$element.find( currentSelector );
				$currentStep.addClass( 'active' );
				$currentStep.find( 'span.badge' ).addClass( 'badge-info' );

				// set display of target element
				var $stepContent = this.$element.find( '.step-content' );
				var target = $currentStep.attr( 'data-step' );
				$stepContent.find( '.step-pane' ).removeClass( 'active' );
				$stepContent.find( '.step-pane[data-step="' + target + '"]:first' ).addClass( 'active' );

				// reset the wizard position to the left
				this.$element.find( '.steps' ).first().attr( 'style', 'margin-left: 0' );

				// check if the steps are wider than the container div
				var totalWidth = 0;
				this.$element.find( '.steps > li' ).each( function() {
					totalWidth += $( this ).outerWidth();
				} );
				var containerWidth = 0;
				if ( this.$element.find( '.actions' ).length ) {
					containerWidth = this.$element.width() - this.$element.find( '.actions' ).first().outerWidth();
				} else {
					containerWidth = this.$element.width();
				}

				if ( totalWidth > containerWidth ) {
					// set the position so that the last step is on the right
					var newMargin = totalWidth - containerWidth;
					this.$element.find( '.steps' ).first().attr( 'style', 'margin-left: -' + newMargin + 'px' );

					// set the position so that the active step is in a good
					// position if it has been moved out of view
					if ( this.$element.find( 'li.active' ).first().position().left < 200 ) {
						newMargin += this.$element.find( 'li.active' ).first().position().left - 200;
						if ( newMargin < 1 ) {
							this.$element.find( '.steps' ).first().attr( 'style', 'margin-left: 0' );
						} else {
							this.$element.find( '.steps' ).first().attr( 'style', 'margin-left: -' + newMargin + 'px' );
						}

					}

				}

				// only fire changed event after initializing
				if ( typeof( this.initialized ) !== 'undefined' ) {
					var e = $.Event( 'changed.fu.wizard' );
					this.$element.trigger( e, {
						step: this.currentStep
					} );
				}

				this.initialized = true;
			},

			stepclicked: function( e ) {
				var li = $( e.currentTarget );
				var index = this.$element.find( '.steps li' ).index( li );

				if ( index < this.currentStep && this.options.disablePreviousStep ) { //enforce restrictions
					return;
				} else {
					var evt = $.Event( 'stepclicked.fu.wizard' );
					this.$element.trigger( evt, {
						step: index + 1
					} );
					if ( evt.isDefaultPrevented() ) {
						return;
					}

					this.currentStep = ( index + 1 );
					this.setState();
				}
			},

			syncSteps: function() {
				var i = 1;
				var $steps = this.$element.find( '.steps' );
				var $stepContent = this.$element.find( '.step-content' );

				$steps.children().each( function() {
					var item = $( this );
					var badge = item.find( '.badge' );
					var step = item.attr( 'data-step' );

					if ( !isNaN( parseInt( badge.html(), 10 ) ) ) {
						badge.html( i );
					}

					item.attr( 'data-step', i );
					$stepContent.find( '.step-pane[data-step="' + step + '"]:last' ).attr( 'data-step', i );
					i++;
				} );
			},

			previous: function() {
				if ( this.options.disablePreviousStep || this.currentStep === 1 ) {
					return;
				}

				var e = $.Event( 'actionclicked.fu.wizard' );
				this.$element.trigger( e, {
					step: this.currentStep,
					direction: 'previous'
				} );
				if ( e.isDefaultPrevented() ) {
					return;
				} // don't increment ...what? Why?

				this.currentStep -= 1;
				this.setState();

				// only set focus if focus is still on the $nextBtn (avoid stomping on a focus set programmatically in actionclicked callback)
				if ( this.$prevBtn.is( ':focus' ) ) {
					var firstFormField = this.$element.find( '.active' ).find( 'input, select, textarea' )[ 0 ];

					if ( typeof firstFormField !== 'undefined' ) {
						// allow user to start typing immediately instead of having to click on the form field.
						$( firstFormField ).focus();
					} else if ( this.$element.find( '.active input:first' ).length === 0 && this.$prevBtn.is( ':disabled' ) ) {
						//only set focus on a button as the last resort if no form fields exist and the just clicked button is now disabled
						this.$nextBtn.focus();
					}

				}
			},

			next: function() {
				if ( this.currentStep < this.numSteps ) {
					var e = $.Event( 'actionclicked.fu.wizard' );
					this.$element.trigger( e, {
						step: this.currentStep,
						direction: 'next'
					} );
					if ( e.isDefaultPrevented() ) {
						return;
					} // respect preventDefault in case dev has attached validation to step and wants to stop propagation based on it.

					this.currentStep += 1;
					this.setState();
				} else { //is last step
					this.$element.trigger( 'finished.fu.wizard' );
				}

				// only set focus if focus is still on the $nextBtn (avoid stomping on a focus set programmatically in actionclicked callback)
				if ( this.$nextBtn.is( ':focus' ) ) {
					var firstFormField = this.$element.find( '.active' ).find( 'input, select, textarea' )[ 0 ];

					if ( typeof firstFormField !== 'undefined' ) {
						// allow user to start typing immediately instead of having to click on the form field.
						$( firstFormField ).focus();
					} else if ( this.$element.find( '.active input:first' ).length === 0 && this.$nextBtn.is( ':disabled' ) ) {
						//only set focus on a button as the last resort if no form fields exist and the just clicked button is now disabled
						this.$prevBtn.focus();
					}

				}
			},

			selectedItem: function( selectedItem ) {
				var retVal, step;

				if ( selectedItem ) {
					step = selectedItem.step || -1;
					//allow selection of step by data-name
					step = isNaN( step ) && this.$element.find( '.steps li[data-name="' + step + '"]' ).first().attr( 'data-step' ) || step;

					if ( 1 <= step && step <= this.numSteps ) {
						this.currentStep = step;
						this.setState();
					} else {
						step = this.$element.find( '.steps li.active:first' ).attr( 'data-step' );
						if ( !isNaN( step ) ) {
							this.currentStep = parseInt( step, 10 );
							this.setState();
						}

					}

					retVal = this;
				} else {
					retVal = {
						step: this.currentStep
					};
					if ( this.$element.find( '.steps li.active:first[data-name]' ).length ) {
						retVal.stepname = this.$element.find( '.steps li.active:first' ).attr( 'data-name' );
					}

				}

				return retVal;
			}
		};


		// WIZARD PLUGIN DEFINITION

		$.fn.wizard = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.wizard' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.wizard', ( data = new Wizard( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.wizard.defaults = {
			disablePreviousStep: false,
			selectedItem: {
				step: -1
			} //-1 means it will attempt to look for "active" class in order to set the step
		};

		$.fn.wizard.Constructor = Wizard;

		$.fn.wizard.noConflict = function() {
			$.fn.wizard = old;
			return this;
		};


		// DATA-API

		$( document ).on( 'mouseover.fu.wizard.data-api', '[data-initialize=wizard]', function( e ) {
			var $control = $( e.target ).closest( '.wizard' );
			if ( !$control.data( 'fu.wizard' ) ) {
				$control.wizard( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=wizard]' ).each( function() {
				var $this = $( this );
				if ( $this.data( 'fu.wizard' ) ) return;
				$this.wizard( $this.data() );
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Infinite Scroll
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.infinitescroll;

		// INFINITE SCROLL CONSTRUCTOR AND PROTOTYPE

		var InfiniteScroll = function( element, options ) {
			this.$element = $( element );
			this.$element.addClass( 'infinitescroll' );
			this.options = $.extend( {}, $.fn.infinitescroll.defaults, options );

			this.curScrollTop = this.$element.scrollTop();
			this.curPercentage = this.getPercentage();
			this.fetchingData = false;

			this.$element.on( 'scroll.fu.infinitescroll', $.proxy( this.onScroll, this ) );
			this.onScroll();
		};

		InfiniteScroll.prototype = {

			constructor: InfiniteScroll,

			destroy: function() {
				this.$element.remove();
				// any external bindings
				// [none]

				// empty elements to return to original markup
				this.$element.empty();

				return this.$element[ 0 ].outerHTML;
			},

			disable: function() {
				this.$element.off( 'scroll.fu.infinitescroll' );
			},

			enable: function() {
				this.$element.on( 'scroll.fu.infinitescroll', $.proxy( this.onScroll, this ) );
			},

			end: function( content ) {
				var end = $( '<div class="infinitescroll-end"></div>' );
				if ( content ) {
					end.append( content );
				} else {
					end.append( '---------' );
				}

				this.$element.append( end );
				this.disable();
			},

			getPercentage: function() {
				var height = ( this.$element.css( 'box-sizing' ) === 'border-box' ) ? this.$element.outerHeight() : this.$element.height();
				var scrollHeight = this.$element.get( 0 ).scrollHeight;
				return ( scrollHeight > height ) ? ( ( height / ( scrollHeight - this.curScrollTop ) ) * 100 ) : 0;
			},

			fetchData: function( force ) {
				var load = $( '<div class="infinitescroll-load"></div>' );
				var self = this;
				var moreBtn;

				var fetch = function() {
					var helpers = {
						percentage: self.curPercentage,
						scrollTop: self.curScrollTop
					};
					var $loader = $( '<div class="loader"></div>' );
					load.append( $loader );
					$loader.loader();
					if ( self.options.dataSource ) {
						self.options.dataSource( helpers, function( resp ) {
							var end;
							load.remove();
							if ( resp.content ) {
								self.$element.append( resp.content );
							}

							if ( resp.end ) {
								end = ( resp.end !== true ) ? resp.end : undefined;
								self.end( end );
							}

							self.fetchingData = false;
						} );
					}
				};

				this.fetchingData = true;
				this.$element.append( load );
				if ( this.options.hybrid && force !== true ) {
					moreBtn = $( '<button type="button" class="btn btn-primary"></button>' );
					if ( typeof this.options.hybrid === 'object' ) {
						moreBtn.append( this.options.hybrid.label );
					} else {
						moreBtn.append( '<span class="glyphicon glyphicon-repeat"></span>' );
					}

					moreBtn.on( 'click.fu.infinitescroll', function() {
						moreBtn.remove();
						fetch();
					} );
					load.append( moreBtn );
				} else {
					fetch();
				}
			},

			onScroll: function( e ) {
				this.curScrollTop = this.$element.scrollTop();
				this.curPercentage = this.getPercentage();
				if ( !this.fetchingData && this.curPercentage >= this.options.percentage ) {
					this.fetchData();
				}
			}
		};

		// INFINITE SCROLL PLUGIN DEFINITION

		$.fn.infinitescroll = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.infinitescroll' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.infinitescroll', ( data = new InfiniteScroll( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.infinitescroll.defaults = {
			dataSource: null,
			hybrid: false, //can be true or an object with structure: { 'label': (markup or jQuery obj) }
			percentage: 95 //percentage scrolled to the bottom before more is loaded
		};

		$.fn.infinitescroll.Constructor = InfiniteScroll;

		$.fn.infinitescroll.noConflict = function() {
			$.fn.infinitescroll = old;
			return this;
		};

		// NO DATA-API DUE TO NEED OF DATA-SOURCE



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Pillbox
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.pillbox;

		// PILLBOX CONSTRUCTOR AND PROTOTYPE

		var Pillbox = function( element, options ) {
			this.$element = $( element );
			this.$moreCount = this.$element.find( '.pillbox-more-count' );
			this.$pillGroup = this.$element.find( '.pill-group' );
			this.$addItem = this.$element.find( '.pillbox-add-item' );
			this.$addItemWrap = this.$addItem.parent();
			this.$suggest = this.$element.find( '.suggest' );
			this.$pillHTML = '<li class="btn btn-default pill">' +
				'	<span></span>' +
				'	<span class="glyphicon glyphicon-close">' +
				'		<span class="sr-only">Remove</span>' +
				'	</span>' +
				'</li>';

			this.options = $.extend( {}, $.fn.pillbox.defaults, options );

			if ( this.options.readonly === -1 ) {
				if ( this.$element.attr( 'data-readonly' ) !== undefined ) {
					this.readonly( true );
				}

			} else if ( this.options.readonly ) {
				this.readonly( true );
			}

			// EVENTS
			this.acceptKeyCodes = this._generateObject( this.options.acceptKeyCodes );
			// Creatie an object out of the key code array, so we dont have to loop through it on every key stroke

			this.$element.on( 'click.fu.pillbox', '.pill-group > .pill', $.proxy( this.itemClicked, this ) );
			this.$element.on( 'click.fu.pillbox', $.proxy( this.inputFocus, this ) );
			this.$element.on( 'keydown.fu.pillbox', '.pillbox-add-item', $.proxy( this.inputEvent, this ) );
			if ( this.options.onKeyDown ) {
				this.$element.on( 'mousedown.fu.pillbox', '.suggest > li', $.proxy( this.suggestionClick, this ) );
			}

			if ( this.options.edit ) {
				this.$element.addClass( 'pills-editable' );
				this.$element.on( 'blur.fu.pillbox', '.pillbox-add-item', $.proxy( this.cancelEdit, this ) );
			}
		};

		Pillbox.prototype = {
			constructor: Pillbox,

			destroy: function() {
				this.$element.remove();
				// any external bindings
				// [none]
				// empty elements to return to original markup
				// [none]
				// returns string of markup
				return this.$element[ 0 ].outerHTML;
			},

			items: function() {
				var self = this;

				return this.$pillGroup.children( '.pill' ).map( function() {
					return self.getItemData( $( this ) );
				} ).get();
			},

			itemClicked: function( e ) {
				var self = this;
				var $target = $( e.target );
				var $item;

				e.preventDefault();
				e.stopPropagation();
				this._closeSuggestions();

				if ( !$target.hasClass( 'pill' ) ) {
					$item = $target.parent();
					if ( this.$element.attr( 'data-readonly' ) === undefined ) {
						if ( $target.hasClass( 'glyphicon-close' ) ) {
							if ( this.options.onRemove ) {
								this.options.onRemove( this.getItemData( $item, {
									el: $item
								} ), $.proxy( this._removeElement, this ) );
							} else {
								this._removeElement( this.getItemData( $item, {
									el: $item
								} ) );
							}

							return false;
						} else if ( this.options.edit ) {
							if ( $item.find( '.pillbox-list-edit' ).length ) {
								return false;
							}

							this.openEdit( $item );
						}

					}

				} else {
					$item = $target;
				}

				this.$element.trigger( 'clicked.fu.pillbox', this.getItemData( $item ) );
			},

			readonly: function( enable ) {
				if ( enable ) {
					this.$element.attr( 'data-readonly', 'readonly' );
				} else {
					this.$element.removeAttr( 'data-readonly' );
				}

				if ( this.options.truncate ) {
					this.truncate( enable );
				}
			},

			suggestionClick: function( e ) {
				var $item = $( e.currentTarget );
				var item = {
					text: $item.html(),
					value: $item.data( 'value' )
				};

				e.preventDefault();
				this.$addItem.val( '' );

				if ( $item.data( 'attr' ) ) {
					item.attr = JSON.parse( $item.data( 'attr' ) );
				}

				item.data = $item.data( 'data' );

				this.addItems( item, true );

				// needs to be after addItems for IE
				this._closeSuggestions();
			},

			itemCount: function() {
				return this.$pillGroup.children( '.pill' ).length;
			},

			// First parameter is 1 based index (optional, if index is not passed all new items will be appended)
			// Second parameter can be array of objects [{ ... }, { ... }] or you can pass n additional objects as args
			// object structure is as follows (attr and value are optional): { text: '', value: '', attr: {}, data: {} }
			addItems: function() {
				var self = this;
				var items, index, isInternal;

				if ( isFinite( String( arguments[ 0 ] ) ) && !( arguments[ 0 ] instanceof Array ) ) {
					items = [].slice.call( arguments ).slice( 1 );
					index = arguments[ 0 ];
				} else {
					items = [].slice.call( arguments ).slice( 0 );
					isInternal = items[ 1 ] && !items[ 1 ].text;
				}

				//If first argument is an array, use that, otherwise they probably passed each thing through as a separate arg, so use items as-is
				if ( items[ 0 ] instanceof Array ) {
					items = items[ 0 ];
				}

				if ( items.length ) {
					$.each( items, function( i, value ) {
						var data = {
							text: value.text,
							value: ( value.value ? value.value : value.text ),
							el: self.$pillHTML
						};

						if ( value.attr ) {
							data.attr = value.attr;
						}

						if ( value.data ) {
							data.data = value.data;
						}

						items[ i ] = data;
					} );

					if ( this.options.edit && this.currentEdit ) {
						items[ 0 ].el = this.currentEdit.wrap( '<div></div>' ).parent().html();
					}

					if ( isInternal ) {
						items.pop( 1 );
					}

					if ( self.options.onAdd && isInternal ) {
						if ( this.options.edit && this.currentEdit ) {
							self.options.onAdd( items[ 0 ], $.proxy( self.saveEdit, this ) );
						} else {
							self.options.onAdd( items[ 0 ], $.proxy( self.placeItems, this ) );
						}

					} else {
						if ( this.options.edit && this.currentEdit ) {
							self.saveEdit( items );
						} else {
							if ( index ) {
								self.placeItems( index, items );
							} else {
								self.placeItems( items, isInternal );
							}

						}

					}

				}
			},

			//First parameter is the index (1 based) to start removing items
			//Second parameter is the number of items to be removed
			removeItems: function( index, howMany ) {
				var self = this;
				var count;
				var $currentItem;

				if ( !index ) {
					this.$pillGroup.find( '.pill' ).remove();
					this._removePillTrigger( {
						method: 'removeAll'
					} );
				} else {
					howMany = howMany ? howMany : 1;

					for ( count = 0; count < howMany; count++ ) {
						$currentItem = self.$pillGroup.find( '> .pill:nth-child(' + index + ')' );

						if ( $currentItem ) {
							$currentItem.remove();
						} else {
							break;
						}

					}
				}
			},

			//First parameter is index (optional)
			//Second parameter is new arguments
			placeItems: function() {
				var $newHtml = [];
				var items;
				var index;
				var $neighbor;
				var isInternal;

				if ( isFinite( String( arguments[ 0 ] ) ) && !( arguments[ 0 ] instanceof Array ) ) {
					items = [].slice.call( arguments ).slice( 1 );
					index = arguments[ 0 ];
				} else {
					items = [].slice.call( arguments ).slice( 0 );
					isInternal = items[ 1 ] && !items[ 1 ].text;
				}

				if ( items[ 0 ] instanceof Array ) {
					items = items[ 0 ];
				}

				if ( items.length ) {
					$.each( items, function( i, item ) {
						var $item = $( item.el );
						var $neighbor;

						$item.attr( 'data-value', item.value );
						$item.find( 'span:first' ).html( item.text );

						// DOM attributes
						if ( item.attr ) {
							$.each( item.attr, function( key, value ) {
								if ( key === 'cssClass' || key === 'class' ) {
									$item.addClass( value );
								} else {
									$item.attr( key, value );
								}
							} );

						}

						if ( item.data ) {
							$item.data( 'data', item.data );
						}

						$newHtml.push( $item );
					} );

					if ( this.$pillGroup.children( '.pill' ).length > 0 ) {
						if ( index ) {
							$neighbor = this.$pillGroup.find( '.pill:nth-child(' + index + ')' );

							if ( $neighbor.length ) {
								$neighbor.before( $newHtml );
							} else {
								this.$pillGroup.children( '.pill:last' ).after( $newHtml );
							}

						} else {
							this.$pillGroup.children( '.pill:last' ).after( $newHtml );
						}

					} else {
						this.$pillGroup.prepend( $newHtml );
					}

					if ( isInternal ) {
						this.$element.trigger( 'added.fu.pillbox', {
							text: items[ 0 ].text,
							value: items[ 0 ].value
						} );
					}

				}
			},

			inputEvent: function( e ) {
				var self = this;
				var text = this.$addItem.val();
				var value;
				var attr;
				var $lastItem;
				var $selection;

				if ( this.acceptKeyCodes[ e.keyCode ] ) {
					if ( this.options.onKeyDown && this._isSuggestionsOpen() ) {
						$selection = this.$suggest.find( '.pillbox-suggest-sel' );

						if ( $selection.length ) {
							text = $selection.html();
							value = $selection.data( 'value' );
							attr = $selection.data( 'attr' );
						}

					}

					//ignore comma and make sure text that has been entered (protects against " ,". https://github.com/ExactTarget/fuelux/issues/593), unless allowEmptyPills is true.
					if ( text.replace( /[ ]*\,[ ]*/, '' ).match( /\S/ ) || ( this.options.allowEmptyPills && text.length ) ) {
						this._closeSuggestions();
						this.$addItem.hide();

						if ( attr ) {
							this.addItems( {
								text: text,
								value: value,
								attr: JSON.parse( attr )
							}, true );
						} else {
							this.addItems( {
								text: text,
								value: value
							}, true );
						}

						setTimeout( function() {
							self.$addItem.show().val( '' ).attr( {
								size: 10
							} );
						}, 0 );
					}

					e.preventDefault();
					return true;
				} else if ( e.keyCode === 8 || e.keyCode === 46 ) {
					// backspace: 8
					// delete: 46

					if ( !text.length ) {
						e.preventDefault();

						if ( this.options.edit && this.currentEdit ) {
							this.cancelEdit();
							return true;
						}

						this._closeSuggestions();
						$lastItem = this.$pillGroup.children( '.pill:last' );

						if ( $lastItem.hasClass( 'pillbox-highlight' ) ) {
							this._removeElement( this.getItemData( $lastItem, {
								el: $lastItem
							} ) );
						} else {
							$lastItem.addClass( 'pillbox-highlight' );
						}

						return true;
					}

				} else if ( text.length > 10 ) {
					if ( this.$addItem.width() < ( this.$pillGroup.width() - 6 ) ) {
						this.$addItem.attr( {
							size: text.length + 3
						} );
					}

				}

				this.$pillGroup.find( '.pill' ).removeClass( 'pillbox-highlight' );

				if ( this.options.onKeyDown ) {
					if ( e.keyCode === 9 || e.keyCode === 38 || e.keyCode === 40 ) {
						// tab: 9
						// up arrow: 38
						// down arrow: 40

						if ( this._isSuggestionsOpen() ) {
							this._keySuggestions( e );
						}

						return true;
					}

					//only allowing most recent event callback to register
					this.callbackId = e.timeStamp;
					this.options.onKeyDown( {
						event: e,
						value: text
					}, function( data ) {
						self._openSuggestions( e, data );
					} );
				}
			},

			openEdit: function( el ) {
				var index = el.index() + 1;
				var $addItemWrap = this.$addItemWrap.detach().hide();

				this.$pillGroup.find( '.pill:nth-child(' + index + ')' ).before( $addItemWrap );
				this.currentEdit = el.detach();

				$addItemWrap.addClass( 'editing' );
				this.$addItem.val( el.find( 'span:first' ).html() );
				$addItemWrap.show();
				this.$addItem.focus().select();
			},

			cancelEdit: function( e ) {
				var $addItemWrap;
				if ( !this.currentEdit ) {
					return false;
				}

				this._closeSuggestions();
				if ( e ) {
					this.$addItemWrap.before( this.currentEdit );
				}

				this.currentEdit = false;

				$addItemWrap = this.$addItemWrap.detach();
				$addItemWrap.removeClass( 'editing' );
				this.$addItem.val( '' );
				this.$pillGroup.append( $addItemWrap );
			},

			//Must match syntax of placeItem so addItem callback is called when an item is edited
			//expecting to receive an array back from the callback containing edited items
			saveEdit: function() {
				var item = arguments[ 0 ][ 0 ] ? arguments[ 0 ][ 0 ] : arguments[ 0 ];

				this.currentEdit = $( item.el );
				this.currentEdit.data( 'value', item.value );
				this.currentEdit.find( 'span:first' ).html( item.text );

				this.$addItemWrap.hide();
				this.$addItemWrap.before( this.currentEdit );
				this.currentEdit = false;

				this.$addItem.val( '' );
				this.$addItemWrap.removeClass( 'editing' );
				this.$pillGroup.append( this.$addItemWrap.detach().show() );
				this.$element.trigger( 'edited.fu.pillbox', {
					value: item.value,
					text: item.text
				} );
			},

			removeBySelector: function() {
				var selectors = [].slice.call( arguments ).slice( 0 );
				var self = this;

				$.each( selectors, function( i, sel ) {
					self.$pillGroup.find( sel ).remove();
				} );

				this._removePillTrigger( {
					method: 'removeBySelector',
					removedSelectors: selectors
				} );
			},

			removeByValue: function() {
				var values = [].slice.call( arguments ).slice( 0 );
				var self = this;

				$.each( values, function( i, val ) {
					self.$pillGroup.find( '> .pill[data-value="' + val + '"]' ).remove();
				} );

				this._removePillTrigger( {
					method: 'removeByValue',
					removedValues: values
				} );
			},

			removeByText: function() {
				var text = [].slice.call( arguments ).slice( 0 );
				var self = this;

				$.each( text, function( i, text ) {
					self.$pillGroup.find( '> .pill:contains("' + text + '")' ).remove();
				} );

				this._removePillTrigger( {
					method: 'removeByText',
					removedText: text
				} );
			},

			truncate: function( enable ) {
				var self = this;
				var available, full, i, pills, used;

				this.$element.removeClass( 'truncate' );
				this.$addItemWrap.removeClass( 'truncated' );
				this.$pillGroup.find( '.pill' ).removeClass( 'truncated' );

				if ( enable ) {
					this.$element.addClass( 'truncate' );

					available = this.$element.width();
					full = false;
					i = 0;
					pills = this.$pillGroup.find( '.pill' ).length;
					used = 0;

					this.$pillGroup.find( '.pill' ).each( function() {
						var pill = $( this );
						if ( !full ) {
							i++;
							self.$moreCount.text( pills - i );
							if ( ( used + pill.outerWidth( true ) + self.$addItemWrap.outerWidth( true ) ) <= available ) {
								used += pill.outerWidth( true );
							} else {
								self.$moreCount.text( ( pills - i ) + 1 );
								pill.addClass( 'truncated' );
								full = true;
							}

						} else {
							pill.addClass( 'truncated' );
						}
					} );
					if ( i === pills ) {
						this.$addItemWrap.addClass( 'truncated' );
					}

				}
			},

			inputFocus: function( e ) {
				this.$element.find( '.pillbox-add-item' ).focus();
			},

			getItemData: function( el, data ) {
				return $.extend( {
					text: el.find( 'span:first' ).html()
				}, el.data(), data );
			},

			_removeElement: function( data ) {
				data.el.remove();
				delete data.el;
				this.$element.trigger( 'removed.fu.pillbox', data );
			},

			_removePillTrigger: function( removedBy ) {
				this.$element.trigger( 'removed.fu.pillbox', removedBy );
			},

			_generateObject: function( data ) {
				var obj = {};

				$.each( data, function( index, value ) {
					obj[ value ] = true;
				} );

				return obj;
			},

			_openSuggestions: function( e, data ) {
				var markup = '';
				var $suggestionList = $( '<ul>' );

				if ( this.callbackId !== e.timeStamp ) {
					return false;
				}

				if ( data.data && data.data.length ) {
					$.each( data.data, function( index, value ) {
						var val = value.value ? value.value : value.text;

						// markup concatentation is 10x faster, but does not allow data store
						var $suggestion = $( '<li data-value="' + val + '">' + value.text + '</li>' );

						if ( value.attr ) {
							$suggestion.data( 'attr', JSON.stringify( value.attr ) );
						}

						if ( value.data ) {
							$suggestion.data( 'data', value.data );
						}

						$suggestionList.append( $suggestion );
					} );

					// suggestion dropdown
					this.$suggest.html( '' ).append( $suggestionList.children() );
					$( document.body ).trigger( 'suggested.fu.pillbox', this.$suggest );
				}
			},

			_closeSuggestions: function() {
				this.$suggest.html( '' ).parent().removeClass( 'open' );
			},

			_isSuggestionsOpen: function() {
				return this.$suggest.parent().hasClass( 'open' );
			},

			_keySuggestions: function( e ) {
				var $first = this.$suggest.find( 'li.pillbox-suggest-sel' );
				var dir = e.keyCode === 38; // up arrow
				var $next, val;

				e.preventDefault();

				if ( !$first.length ) {
					$first = this.$suggest.find( 'li:first' );
					$first.addClass( 'pillbox-suggest-sel' );
				} else {
					$next = dir ? $first.prev() : $first.next();

					if ( !$next.length ) {
						$next = dir ? this.$suggest.find( 'li:last' ) : this.$suggest.find( 'li:first' );
					}

					if ( $next ) {
						$next.addClass( 'pillbox-suggest-sel' );
						$first.removeClass( 'pillbox-suggest-sel' );
					}

				}
			}
		};

		// PILLBOX PLUGIN DEFINITION

		$.fn.pillbox = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.pillbox' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.pillbox', ( data = new Pillbox( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.pillbox.defaults = {
			onAdd: undefined,
			onRemove: undefined,
			onKeyDown: undefined,
			edit: false,
			readonly: -1, //can be true or false. -1 means it will check for data-readonly="readonly"
			truncate: false,
			acceptKeyCodes: [
				13, //Enter
				188 //Comma
			],
			allowEmptyPills: false

			//example on remove
			/*onRemove: function(data,callback){
				console.log('onRemove');
				callback(data);
			}*/

			//example on key down
			/*onKeyDown: function(event, data, callback ){
				callback({data:[
					{text: Math.random(),value:'sdfsdfsdf'},
					{text: Math.random(),value:'sdfsdfsdf'}
				]});
			}
			*/
			//example onAdd
			/*onAdd: function( data, callback ){
				console.log(data, callback);
				callback(data);
			}*/
		};

		$.fn.pillbox.Constructor = Pillbox;

		$.fn.pillbox.noConflict = function() {
			$.fn.pillbox = old;
			return this;
		};


		// DATA-API

		$( document ).on( 'mousedown.fu.pillbox.data-api', '[data-initialize=pillbox]', function( e ) {
			var $control = $( e.target ).closest( '.pillbox' );
			if ( !$control.data( 'fu.pillbox' ) ) {
				$control.pillbox( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=pillbox]' ).each( function() {
				var $this = $( this );
				if ( $this.data( 'fu.pillbox' ) ) return;
				$this.pillbox( $this.data() );
			} );
		} );



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Repeater
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.repeater;

		// REPEATER CONSTRUCTOR AND PROTOTYPE

		var Repeater = function( element, options ) {
			var self = this;
			var $btn, currentView;

			this.$element = $( element );

			this.$canvas = this.$element.find( '.repeater-canvas' );
			this.$count = this.$element.find( '.repeater-count' );
			this.$end = this.$element.find( '.repeater-end' );
			this.$filters = this.$element.find( '.repeater-filters' );
			this.$loader = this.$element.find( '.repeater-loader' );
			this.$pageSize = this.$element.find( '.repeater-itemization .selectlist' );
			this.$nextBtn = this.$element.find( '.repeater-next' );
			this.$pages = this.$element.find( '.repeater-pages' );
			this.$prevBtn = this.$element.find( '.repeater-prev' );
			this.$primaryPaging = this.$element.find( '.repeater-primaryPaging' );
			this.$search = this.$element.find( '.repeater-search' ).find( '.search' );
			this.$secondaryPaging = this.$element.find( '.repeater-secondaryPaging' );
			this.$start = this.$element.find( '.repeater-start' );
			this.$viewport = this.$element.find( '.repeater-viewport' );
			this.$views = this.$element.find( '.repeater-views' );

			this.currentPage = 0;
			this.currentView = null;
			this.infiniteScrollingCallback = function() {};
			this.infiniteScrollingCont = null;
			this.infiniteScrollingEnabled = false;
			this.infiniteScrollingEnd = null;
			this.infiniteScrollingOptions = {};
			this.lastPageInput = 0;
			this.options = $.extend( {}, $.fn.repeater.defaults, options );
			this.pageIncrement = 0; // store direction navigated
			this.resizeTimeout = {};
			this.stamp = new Date().getTime() + ( Math.floor( Math.random() * 100 ) + 1 );
			this.storedDataSourceOpts = null;
			this.viewOptions = {};
			this.viewType = null;

			this.$filters.selectlist();
			this.$pageSize.selectlist();
			this.$primaryPaging.find( '.combobox' ).combobox();
			this.$search.search();

			this.$filters.on( 'changed.fu.selectlist', function( e, value ) {
				self.$element.trigger( 'filtered.fu.repeater', value );
				self.render( {
					clearInfinite: true,
					pageIncrement: null
				} );
			} );
			this.$nextBtn.on( 'click.fu.repeater', $.proxy( this.next, this ) );
			this.$pageSize.on( 'changed.fu.selectlist', function( e, value ) {
				self.$element.trigger( 'pageSizeChanged.fu.repeater', value );
				self.render( {
					pageIncrement: null
				} );
			} );
			this.$prevBtn.on( 'click.fu.repeater', $.proxy( this.previous, this ) );
			this.$primaryPaging.find( '.combobox' ).on( 'changed.fu.combobox', function( evt, data ) {
				self.$element.trigger( 'pageChanged.fu.repeater', [ data.text, data ] );
				self.pageInputChange( data.text );
			} );
			this.$search.on( 'searched.fu.search cleared.fu.search', function( e, value ) {
				self.$element.trigger( 'searchChanged.fu.repeater', value );
				self.render( {
					clearInfinite: true,
					pageIncrement: null
				} );
			} );
			this.$secondaryPaging.on( 'blur.fu.repeater', function( e ) {
				self.pageInputChange( self.$secondaryPaging.val() );
			} );
			this.$secondaryPaging.on( 'keyup', function( e ) {
				if ( e.keyCode === 13 ) {
					self.pageInputChange( self.$secondaryPaging.val() );
				}
			} );
			this.$views.find( 'input' ).on( 'change.fu.repeater', $.proxy( this.viewChanged, this ) );

			// ID needed since event is bound to instance
			$( window ).on( 'resize.fu.repeater.' + this.stamp, function( event ) {
				clearTimeout( self.resizeTimeout );
				self.resizeTimeout = setTimeout( function() {
					self.resize();
					self.$element.trigger( 'resized.fu.repeater' );
				}, 75 );
			} );

			this.$loader.loader();
			this.$loader.loader( 'pause' );
			if ( this.options.defaultView !== -1 ) {
				currentView = this.options.defaultView;
			} else {
				$btn = this.$views.find( 'label.active input' );
				currentView = ( $btn.length > 0 ) ? $btn.val() : 'list';
			}

			this.setViewOptions( currentView );

			this.initViewTypes( function() {
				self.resize();
				self.$element.trigger( 'resized.fu.repeater' );
				self.render( {
					changeView: currentView
				} );
			} );
		};

		Repeater.prototype = {
			constructor: Repeater,

			clear: function( options ) {
				var viewChanged, viewTypeObj;

				function scan( cont ) {
					var keep = [];
					cont.children().each( function() {
						var item = $( this );
						var pres = item.attr( 'data-preserve' );
						if ( pres === 'deep' ) {
							item.detach();
							keep.push( item );
						} else if ( pres === 'shallow' ) {
							scan( item );
							item.detach();
							keep.push( item );
						}
					} );
					cont.empty();
					cont.append( keep );
				}

				options = options || {};

				if ( !options.preserve ) {
					//Just trash everything because preserve is false
					this.$canvas.empty();
				} else if ( !this.infiniteScrollingEnabled || options.clearInfinite ) {
					//Preserve clear only if infiniteScrolling is disabled or if specifically told to do so
					scan( this.$canvas );
				} //Otherwise don't clear because infiniteScrolling is enabled

				//If viewChanged and current viewTypeObj has a cleared function, call it
				viewChanged = ( options.viewChanged !== undefined ) ? options.viewChanged : false;
				viewTypeObj = $.fn.repeater.viewTypes[ this.viewType ] || {};
				if ( !viewChanged && viewTypeObj.cleared ) {
					viewTypeObj.cleared.call( this, {
						options: options
					} );
				}
			},

			clearPreservedDataSourceOptions: function() {
				this.storedDataSourceOpts = null;
			},

			destroy: function() {
				var markup;
				// set input value attrbute in markup
				this.$element.find( 'input' ).each( function() {
					$( this ).attr( 'value', $( this ).val() );
				} );

				// empty elements to return to original markup
				this.$canvas.empty();
				markup = this.$element[ 0 ].outerHTML;

				// destroy components and remove leftover
				this.$element.find( '.combobox' ).combobox( 'destroy' );
				this.$element.find( '.selectlist' ).selectlist( 'destroy' );
				this.$element.find( '.search' ).search( 'destroy' );
				if ( this.infiniteScrollingEnabled ) {
					$( this.infiniteScrollingCont ).infinitescroll( 'destroy' );
				}

				this.$element.remove();

				// any external events
				$( window ).off( 'resize.fu.repeater.' + this.stamp );

				return markup;
			},

			getDataOptions: function( options ) {
				var dataSourceOptions = {};
				var opts = {};
				var val, viewDataOpts;

				options = options || {};

				opts.filter = ( this.$filters.length > 0 ) ? this.$filters.selectlist( 'selectedItem' ) : {
					text: 'All',
					value: 'all'
				};
				opts.view = this.currentView;

				if ( !this.infiniteScrollingEnabled ) {
					opts.pageSize = ( this.$pageSize.length > 0 ) ? parseInt( this.$pageSize.selectlist( 'selectedItem' ).value, 10 ) : 25;
				}

				if ( options.pageIncrement !== undefined ) {
					if ( options.pageIncrement === null ) {
						this.currentPage = 0;
					} else {
						this.currentPage += options.pageIncrement;
					}

				}

				opts.pageIndex = this.currentPage;

				val = ( this.$search.length > 0 ) ? this.$search.find( 'input' ).val() : '';
				if ( val !== '' ) {
					opts.search = val;
				}

				if ( options.dataSourceOptions ) {
					dataSourceOptions = options.dataSourceOptions;
					if ( options.preserveDataSourceOptions ) {
						this.storedDataSourceOpts = ( this.storedDataSourceOpts ) ? $.extend( this.storedDataSourceOpts, dataSourceOptions ) : dataSourceOptions;
					}
				}

				if ( this.storedDataSourceOpts ) {
					dataSourceOptions = $.extend( this.storedDataSourceOpts, dataSourceOptions );
				}

				viewDataOpts = $.fn.repeater.viewTypes[ this.viewType ] || {};
				viewDataOpts = viewDataOpts.dataOptions;
				if ( viewDataOpts ) {
					viewDataOpts = viewDataOpts.call( this, opts );
					opts = $.extend( viewDataOpts, dataSourceOptions );
				} else {
					opts = $.extend( opts, dataSourceOptions );
				}

				return opts;
			},

			infiniteScrolling: function( enable, options ) {
				var itemization = this.$element.find( '.repeater-itemization' );
				var pagination = this.$element.find( '.repeater-pagination' );
				var cont, data;

				options = options || {};

				if ( enable ) {
					this.infiniteScrollingEnabled = true;
					this.infiniteScrollingEnd = options.end;
					delete options.dataSource;
					delete options.end;
					this.infiniteScrollingOptions = options;
					itemization.hide();
					pagination.hide();
				} else {
					cont = this.infiniteScrollingCont;
					data = cont.data();
					delete data.infinitescroll;
					cont.off( 'scroll' );
					cont.removeClass( 'infinitescroll' );

					this.infiniteScrollingCont = null;
					this.infiniteScrollingEnabled = false;
					this.infiniteScrollingEnd = null;
					this.infiniteScrollingOptions = {};
					itemization.show();
					pagination.show();
				}
			},

			infiniteScrollPaging: function( data, options ) {
				var end = ( this.infiniteScrollingEnd !== true ) ? this.infiniteScrollingEnd : undefined;
				var page = data.page;
				var pages = data.pages;

				this.currentPage = ( page !== undefined ) ? page : NaN;

				if ( ( this.currentPage + 1 ) >= pages ) {
					this.infiniteScrollingCont.infinitescroll( 'end', end );
				}
			},

			initInfiniteScrolling: function() {
				var cont = this.$canvas.find( '[data-infinite="true"]:first' );
				var opts, self;

				cont = ( cont.length < 1 ) ? this.$canvas : cont;
				if ( cont.data( 'fu.infinitescroll' ) ) {
					cont.infinitescroll( 'enable' );
				} else {
					self = this;
					opts = $.extend( {}, this.infiniteScrollingOptions );
					opts.dataSource = function( helpers, callback ) {
						self.infiniteScrollingCallback = callback;
						self.render( {
							pageIncrement: 1
						} );
					};
					cont.infinitescroll( opts );
					this.infiniteScrollingCont = cont;
				}
			},

			initViewTypes: function( callback ) {
				var self = this;
				var viewTypes = [];
				var i, viewTypesLength;

				function init( index ) {
					function next() {
						index++;
						if ( index < viewTypesLength ) {
							init( index );
						} else {
							callback();
						}
					}

					if ( viewTypes[ index ].initialize ) {
						viewTypes[ index ].initialize.call( self, {}, function() {
							next();
						} );
					} else {
						next();
					}
				}

				for ( i in $.fn.repeater.viewTypes ) {
					viewTypes.push( $.fn.repeater.viewTypes[ i ] );
				}
				viewTypesLength = viewTypes.length;
				if ( viewTypesLength > 0 ) {
					init( 0 );
				} else {
					callback();
				}
			},

			itemization: function( data ) {
				this.$count.html( data.count || '' );
				this.$end.html( data.end || '' );
				this.$start.html( data.start || '' );
			},

			next: function( e ) {
				var d = 'disabled';
				this.$nextBtn.attr( d, d );
				this.$prevBtn.attr( d, d );
				this.pageIncrement = 1;
				this.$element.trigger( 'nextClicked.fu.repeater' );
				this.render( {
					pageIncrement: this.pageIncrement
				} );
			},

			pageInputChange: function( val ) {
				var pageInc;
				if ( val !== this.lastPageInput ) {
					this.lastPageInput = val;
					val = parseInt( val, 10 ) - 1;
					pageInc = val - this.currentPage;
					this.$element.trigger( 'pageChanged.fu.repeater', val );
					this.render( {
						pageIncrement: pageInc
					} );
				}
			},

			pagination: function( data ) {
				var act = 'active';
				var dsbl = 'disabled';
				var page = data.page;
				var pages = data.pages;
				var dropMenu, i, l;

				this.currentPage = ( page !== undefined ) ? page : NaN;

				this.$primaryPaging.removeClass( act );
				this.$secondaryPaging.removeClass( act );

				if ( pages <= this.viewOptions.dropPagingCap ) {
					this.$primaryPaging.addClass( act );
					dropMenu = this.$primaryPaging.find( '.dropdown-menu' );
					dropMenu.empty();
					for ( i = 0; i < pages; i++ ) {
						l = i + 1;
						dropMenu.append( '<li data-value="' + l + '"><a href="#">' + l + '</a></li>' );
					}
					this.$primaryPaging.find( 'input.form-control' ).val( this.currentPage + 1 );
				} else {
					this.$secondaryPaging.addClass( act );
					this.$secondaryPaging.val( this.currentPage + 1 );
				}

				this.lastPageInput = this.currentPage + 1 + '';

				this.$pages.html( pages );

				// this is not the last page
				if ( ( this.currentPage + 1 ) < pages ) {
					this.$nextBtn.removeAttr( dsbl );
				} else {
					this.$nextBtn.attr( dsbl, dsbl );
				}

				// this is not the first page
				if ( ( this.currentPage - 1 ) >= 0 ) {
					this.$prevBtn.removeAttr( dsbl );
				} else {
					this.$prevBtn.attr( dsbl, dsbl );
				}

				// return focus to next/previous buttons after navigating
				if ( this.pageIncrement !== 0 ) {
					if ( this.pageIncrement > 0 ) {
						if ( this.$nextBtn.is( ':disabled' ) ) {
							// if you can't focus, go the other way
							this.$prevBtn.focus();
						} else {
							this.$nextBtn.focus();
						}

					} else {
						if ( this.$prevBtn.is( ':disabled' ) ) {
							// if you can't focus, go the other way
							this.$nextBtn.focus();
						} else {
							this.$prevBtn.focus();
						}

					}

				}
			},

			previous: function() {
				var d = 'disabled';
				this.$nextBtn.attr( d, d );
				this.$prevBtn.attr( d, d );
				this.pageIncrement = -1;
				this.$element.trigger( 'previousClicked.fu.repeater' );
				this.render( {
					pageIncrement: this.pageIncrement
				} );
			},

			render: function( options ) {
				var self = this;
				var viewChanged = false;
				var viewTypeObj = $.fn.repeater.viewTypes[ this.viewType ] || {};
				var dataOptions, prevView;

				options = options || {};

				if ( options.changeView && ( this.currentView !== options.changeView ) ) {
					prevView = this.currentView;
					this.currentView = options.changeView;
					this.viewType = this.currentView.split( '.' )[ 0 ];
					this.setViewOptions( this.currentView );
					this.$element.attr( 'data-currentview', this.currentView );
					this.$element.attr( 'data-viewtype', this.viewType );
					viewChanged = true;
					options.viewChanged = viewChanged;

					this.$element.trigger( 'viewChanged.fu.repeater', this.currentView );

					if ( this.infiniteScrollingEnabled ) {
						self.infiniteScrolling( false );
					}

					viewTypeObj = $.fn.repeater.viewTypes[ this.viewType ] || {};
					if ( viewTypeObj.selected ) {
						viewTypeObj.selected.call( this, {
							prevView: prevView
						} );
					}
				}

				options.preserve = ( options.preserve !== undefined ) ? options.preserve : !viewChanged;
				this.clear( options );

				if ( !this.infiniteScrollingEnabled || ( this.infiniteScrollingEnabled && viewChanged ) ) {
					this.$loader.show().loader( 'play' );
				}

				dataOptions = this.getDataOptions( options );

				this.viewOptions.dataSource( dataOptions, function( data ) {
					if ( self.infiniteScrollingEnabled ) {
						self.infiniteScrollingCallback( {} );
					} else {
						self.itemization( data );
						self.pagination( data );
					}

					self.runRenderer( viewTypeObj, data, function() {
						if ( self.infiniteScrollingEnabled ) {
							if ( viewChanged || options.clearInfinite ) {
								self.initInfiniteScrolling();
							}

							self.infiniteScrollPaging( data, options );
						}

						self.$loader.hide().loader( 'pause' );
						self.$element.trigger( 'rendered.fu.repeater', {
							data: data,
							options: dataOptions,
							renderOptions: options
						} );

						//for maintaining support of 'loaded' event
						self.$element.trigger( 'loaded.fu.repeater', dataOptions );
					} );
				} );
			},

			resize: function() {
				var staticHeight = ( this.viewOptions.staticHeight === -1 ) ? this.$element.attr( 'data-staticheight' ) : this.viewOptions.staticHeight;
				var viewTypeObj = {};
				var height, viewportMargins;

				if ( this.viewType ) {
					viewTypeObj = $.fn.repeater.viewTypes[ this.viewType ] || {};
				}

				if ( staticHeight !== undefined && staticHeight !== false && staticHeight !== 'false' ) {
					this.$canvas.addClass( 'scrolling' );
					viewportMargins = {
						bottom: this.$viewport.css( 'margin-bottom' ),
						top: this.$viewport.css( 'margin-top' )
					};
					height = ( ( staticHeight === 'true' || staticHeight === true ) ? this.$element.height() : parseInt( staticHeight, 10 ) ) -
						this.$element.find( '.repeater-header' ).outerHeight() -
						this.$element.find( '.repeater-footer' ).outerHeight() -
						( ( viewportMargins.bottom === 'auto' ) ? 0 : parseInt( viewportMargins.bottom, 10 ) ) -
						( ( viewportMargins.top === 'auto' ) ? 0 : parseInt( viewportMargins.top, 10 ) );
					this.$viewport.outerHeight( height );
				} else {
					this.$canvas.removeClass( 'scrolling' );
				}

				if ( viewTypeObj.resize ) {
					viewTypeObj.resize.call( this, {
						height: this.$element.outerHeight(),
						width: this.$element.outerWidth()
					} );
				}
			},

			runRenderer: function( viewTypeObj, data, callback ) {
				var $container, i, l, response, repeat, subset;

				function addItem( $parent, resp ) {
					var action;
					if ( resp ) {
						action = ( resp.action ) ? resp.action : 'append';
						if ( action !== 'none' && resp.item !== undefined ) {
							$parent = ( resp.container !== undefined ) ? $( resp.container ) : $parent;
							$parent[ action ]( resp.item );
						}
					}
				}

				if ( !viewTypeObj.render ) {
					if ( viewTypeObj.before ) {
						response = viewTypeObj.before.call( this, {
							container: this.$canvas,
							data: data
						} );
						addItem( this.$canvas, response );
					}

					$container = this.$canvas.find( '[data-container="true"]:last' );
					$container = ( $container.length > 0 ) ? $container : this.$canvas;

					if ( viewTypeObj.renderItem ) {
						repeat = viewTypeObj.repeat || 'data.items';
						repeat = repeat.split( '.' );
						if ( repeat[ 0 ] === 'data' || repeat[ 0 ] === 'this' ) {
							subset = ( repeat[ 0 ] === 'this' ) ? this : data;
							repeat.shift();
						} else {
							repeat = [];
							subset = [];
							if ( window.console && window.console.warn ) {
								window.console.warn( 'WARNING: Repeater plugin "repeat" value must start with either "data" or "this"' );
							}
						}

						for ( i = 0, l = repeat.length; i < l; i++ ) {
							if ( subset[ repeat[ i ] ] !== undefined ) {
								subset = subset[ repeat[ i ] ];
							} else {
								subset = [];
								if ( window.console && window.console.warn ) {
									window.console.warn( 'WARNING: Repeater unable to find property to iterate renderItem on.' );
								}
								break;
							}
						}

						for ( i = 0, l = subset.length; i < l; i++ ) {
							response = viewTypeObj.renderItem.call( this, {
								container: $container,
								data: data,
								index: i,
								subset: subset
							} );
							addItem( $container, response );
						}
					}

					if ( viewTypeObj.after ) {
						response = viewTypeObj.after.call( this, {
							container: this.$canvas,
							data: data
						} );
						addItem( this.$canvas, response );
					}

					callback();
				} else {
					viewTypeObj.render.call( this, {
						container: this.$canvas,
						data: data
					}, function() {
						callback();
					} );
				}

			},

			setViewOptions: function( curView ) {
				var opts = {};
				var viewName = curView.split( '.' )[ 1 ];

				if ( viewName && this.options.views ) {
					opts = this.options.views[ viewName ] || this.options.views[ curView ] || {};
				} else {
					opts = {};
				}

				this.viewOptions = $.extend( {}, this.options, opts );
			},

			viewChanged: function( e ) {
				var $selected = $( e.target );
				var val = $selected.val();
				this.render( {
					changeView: val,
					pageIncrement: null
				} );
			}
		};

		// REPEATER PLUGIN DEFINITION

		$.fn.repeater = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.repeater' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.repeater', ( data = new Repeater( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.repeater.defaults = {
			dataSource: function( options, callback ) {},
			defaultView: -1, //should be a string value. -1 means it will grab the active view from the view controls
			dropPagingCap: 10,
			staticHeight: -1, //normally true or false. -1 means it will look for data-staticheight on the element
			views: null //can be set to an object to configure multiple views of the same type
		};

		$.fn.repeater.viewTypes = {};

		$.fn.repeater.Constructor = Repeater;

		$.fn.repeater.noConflict = function() {
			$.fn.repeater = old;
			return this;
		};



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Repeater - List View Plugin
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		if ( $.fn.repeater ) {
			//ADDITIONAL METHODS
			$.fn.repeater.Constructor.prototype.list_clearSelectedItems = function() {
				this.$canvas.find( '.repeater-list-check' ).remove();
				this.$canvas.find( '.repeater-list table tbody tr.selected' ).removeClass( 'selected' );
			};

			$.fn.repeater.Constructor.prototype.list_highlightColumn = function( index, force ) {
				var tbody = this.$canvas.find( '.repeater-list tbody' );
				if ( this.viewOptions.list_highlightSortedColumn || force ) {
					tbody.find( 'td.sorted' ).removeClass( 'sorted' );
					tbody.find( 'tr' ).each( function() {
						var col = $( this ).find( 'td:nth-child(' + ( index + 1 ) + ')' );
						col.addClass( 'sorted' );
					} );
				}
			};

			$.fn.repeater.Constructor.prototype.list_getSelectedItems = function() {
				var selected = [];
				this.$canvas.find( '.repeater-list table tbody tr.selected' ).each( function() {
					var $item = $( this );
					selected.push( {
						data: $item.data( 'item_data' ),
						element: $item
					} );
				} );
				return selected;
			};

			$.fn.repeater.Constructor.prototype.list_positionHeadings = function() {
				var $wrapper = this.$element.find( '.repeater-list-wrapper' );
				var offsetLeft = $wrapper.offset().left;
				var scrollLeft = $wrapper.scrollLeft();
				if ( scrollLeft > 0 ) {
					$wrapper.find( '.repeater-list-heading' ).each( function() {
						var $heading = $( this );
						var left = ( $heading.parents( 'th:first' ).offset().left - offsetLeft ) + 'px';
						$heading.addClass( 'shifted' ).css( 'left', left );
					} );
				} else {
					$wrapper.find( '.repeater-list-heading' ).each( function() {
						$( this ).removeClass( 'shifted' ).css( 'left', '' );
					} );
				}
			};

			$.fn.repeater.Constructor.prototype.list_setSelectedItems = function( items, force ) {
				var selectable = this.viewOptions.list_selectable;
				var self = this;
				var data, i, $item, l;

				//this function is necessary because lint yells when a function is in a loop
				function checkIfItemMatchesValue() {
					$item = $( this );
					data = $item.data( 'item_data' ) || {};
					if ( data[ items[ i ].property ] === items[ i ].value ) {
						selectItem( $item, items[ i ].selected );
					}
				}

				function selectItem( $itm, select ) {
					select = ( select !== undefined ) ? select : true;
					if ( select ) {
						if ( !force && selectable !== 'multi' ) {
							self.list_clearSelectedItems();
						}

						if ( !$itm.hasClass( 'selected' ) ) {
							$itm.addClass( 'selected' );
							$itm.find( 'td:first' ).prepend( '<div class="repeater-list-check"><span class="glyphicon glyphicon-ok"></span></div>' );
						}

					} else {
						$itm.find( '.repeater-list-check' ).remove();
						$itm.removeClass( 'selected' );
					}
				}

				if ( !$.isArray( items ) ) {
					items = [ items ];
				}

				if ( force === true || selectable === 'multi' ) {
					l = items.length;
				} else if ( selectable ) {
					l = ( items.length > 0 ) ? 1 : 0;
				} else {
					l = 0;
				}

				for ( i = 0; i < l; i++ ) {
					if ( items[ i ].index !== undefined ) {
						$item = this.$canvas.find( '.repeater-list table tbody tr:nth-child(' + ( items[ i ].index + 1 ) + ')' );
						if ( $item.length > 0 ) {
							selectItem( $item, items[ i ].selected );
						}

					} else if ( items[ i ].property !== undefined && items[ i ].value !== undefined ) {
						this.$canvas.find( '.repeater-list table tbody tr' ).each( checkIfItemMatchesValue );
					}

				}
			};

			$.fn.repeater.Constructor.prototype.list_sizeHeadings = function() {
				var $table = this.$element.find( '.repeater-list table' );
				$table.find( 'thead th' ).each( function() {
					var $hr = $( this );
					var $heading = $hr.find( '.repeater-list-heading' );
					$heading.outerHeight( $hr.outerHeight() );
					$heading.outerWidth( $hr.outerWidth() );
				} );
			};

			//ADDITIONAL DEFAULT OPTIONS
			$.fn.repeater.defaults = $.extend( {}, $.fn.repeater.defaults, {
				list_columnRendered: null,
				list_columnSizing: true,
				list_columnSyncing: true,
				list_highlightSortedColumn: false,
				list_infiniteScroll: false,
				list_noItemsHTML: '',
				list_selectable: false,
				list_sortClearing: false,
				list_rowRendered: null
			} );

			//EXTENSION DEFINITION
			$.fn.repeater.viewTypes.list = {
				cleared: function() {
					if ( this.viewOptions.list_columnSyncing ) {
						this.list_sizeHeadings();
					}
				},
				dataOptions: function( options ) {
					if ( this.list_sortDirection ) {
						options.sortDirection = this.list_sortDirection;
					}
					if ( this.list_sortProperty ) {
						options.sortProperty = this.list_sortProperty;
					}
					return options;
				},
				initialize: function( helpers, callback ) {
					this.list_sortDirection = null;
					this.list_sortProperty = null;
					callback();
				},
				resize: function() {
					if ( this.viewOptions.list_columnSyncing ) {
						this.list_sizeHeadings();
					}
				},
				selected: function() {
					var infScroll = this.viewOptions.list_infiniteScroll;
					var opts;

					this.list_firstRender = true;
					this.$loader.addClass( 'noHeader' );

					if ( infScroll ) {
						opts = ( typeof infScroll === 'object' ) ? infScroll : {};
						this.infiniteScrolling( true, opts );
					}
				},
				before: function( helpers ) {
					var $listContainer = helpers.container.find( '.repeater-list' );
					var self = this;
					var $table;

					if ( $listContainer.length < 1 ) {
						$listContainer = $( '<div class="repeater-list" data-preserve="shallow"><div class="repeater-list-wrapper" data-infinite="true" data-preserve="shallow"><table aria-readonly="true" class="table" data-preserve="shallow" role="grid"></table></div></div>' );
						$listContainer.find( '.repeater-list-wrapper' ).on( 'scroll.fu.repeaterList', function() {
							if ( self.viewOptions.list_columnSyncing ) {
								self.list_positionHeadings();
							}
						} );
						helpers.container.append( $listContainer );
					}

					$table = $listContainer.find( 'table' );
					renderThead.call( this, $table, helpers.data );
					renderTbody.call( this, $table, helpers.data );

					return false;
				},
				renderItem: function( helpers ) {
					renderRow.call( this, helpers.container, helpers.subset, helpers.index );
					return false;
				},
				after: function() {
					var $sorted;

					if ( this.viewOptions.list_columnSyncing ) {
						this.list_sizeHeadings();
						this.list_positionHeadings();
					}

					$sorted = this.$canvas.find( '.repeater-list-heading.sorted' );
					if ( $sorted.length > 0 ) {
						this.list_highlightColumn( $sorted.data( 'fu_item_index' ) );
					}

					return false;
				}
			};
		}

		//ADDITIONAL METHODS
		function renderColumn( $row, rows, rowIndex, columns, columnIndex ) {
			var className = columns[ columnIndex ].className;
			var content = rows[ rowIndex ][ columns[ columnIndex ].property ];
			var $col = $( '<td></td>' );
			var width = columns[ columnIndex ]._auto_width;

			$col.addClass( ( ( className !== undefined ) ? className : '' ) ).append( content );
			if ( width !== undefined ) {
				$col.outerWidth( width );
			}
			$row.append( $col );

			if ( this.viewOptions.list_columnRendered ) {
				this.viewOptions.list_columnRendered( {
					container: $row,
					columnAttr: columns[ columnIndex ].property,
					item: $col,
					rowData: rows[ rowIndex ]
				}, function() {} );
			}
		}

		function renderHeader( $tr, columns, index ) {
			var chevDown = 'glyphicon-chevron-down';
			var chevron = '.glyphicon.rlc:first';
			var chevUp = 'glyphicon-chevron-up';
			var $div = $( '<div class="repeater-list-heading"><span class="glyphicon rlc"></span></div>' );
			var $header = $( '<th></th>' );
			var self = this;
			var $both, className, sortable, $span, $spans;

			$div.data( 'fu_item_index', index );
			$div.prepend( columns[ index ].label );
			$header.html( $div.html() ).find( '[id]' ).removeAttr( 'id' );
			$header.append( $div );

			$both = $header.add( $div );
			$span = $div.find( chevron );
			$spans = $span.add( $header.find( chevron ) );

			className = columns[ index ].className;
			if ( className !== undefined ) {
				$both.addClass( className );
			}

			sortable = columns[ index ].sortable;
			if ( sortable ) {
				$both.addClass( 'sortable' );
				$div.on( 'click.fu.repeaterList', function() {
					self.list_sortProperty = ( typeof sortable === 'string' ) ? sortable : columns[ index ].property;
					if ( $div.hasClass( 'sorted' ) ) {
						if ( $span.hasClass( chevUp ) ) {
							$spans.removeClass( chevUp ).addClass( chevDown );
							self.list_sortDirection = 'desc';
						} else {
							if ( !self.viewOptions.list_sortClearing ) {
								$spans.removeClass( chevDown ).addClass( chevUp );
								self.list_sortDirection = 'asc';
							} else {
								$both.removeClass( 'sorted' );
								$spans.removeClass( chevDown );
								self.list_sortDirection = null;
								self.list_sortProperty = null;
							}
						}

					} else {
						$tr.find( 'th, .repeater-list-heading' ).removeClass( 'sorted' );
						$spans.removeClass( chevDown ).addClass( chevUp );
						self.list_sortDirection = 'asc';
						$both.addClass( 'sorted' );
					}

					self.render( {
						clearInfinite: true,
						pageIncrement: null
					} );
				} );
			}

			if ( columns[ index ].sortDirection === 'asc' || columns[ index ].sortDirection === 'desc' ) {
				$tr.find( 'th, .repeater-list-heading' ).removeClass( 'sorted' );
				$both.addClass( 'sortable sorted' );
				if ( columns[ index ].sortDirection === 'asc' ) {
					$spans.addClass( chevUp );
					this.list_sortDirection = 'asc';
				} else {
					$spans.addClass( chevDown );
					this.list_sortDirection = 'desc';
				}

				this.list_sortProperty = ( typeof sortable === 'string' ) ? sortable : columns[ index ].property;
			}

			$tr.append( $header );
		}

		function renderRow( $tbody, rows, index ) {
			var $row = $( '<tr></tr>' );
			var self = this;
			var i, l;

			if ( this.viewOptions.list_selectable ) {
				$row.addClass( 'selectable' );
				$row.attr( 'tabindex', 0 ); // allow items to be tabbed to / focused on
				$row.data( 'item_data', rows[ index ] );
				$row.on( 'click.fu.repeaterList', function() {
					var $item = $( this );
					if ( $item.hasClass( 'selected' ) ) {
						$item.removeClass( 'selected' );
						$item.find( '.repeater-list-check' ).remove();
						$item.$element.trigger( 'deselected.fu.repeaterList', $item );
					} else {
						if ( self.viewOptions.list_selectable !== 'multi' ) {
							self.$canvas.find( '.repeater-list-check' ).remove();
							self.$canvas.find( '.repeater-list tbody tr.selected' ).each( function() {
								$( this ).removeClass( 'selected' );
								self.$element.trigger( 'deselected.fu.repeaterList', $( this ) );
							} );
						}

						$item.addClass( 'selected' );
						$item.find( 'td:first' ).prepend( '<div class="repeater-list-check"><span class="glyphicon glyphicon-ok"></span></div>' );
						self.$element.trigger( 'selected.fu.repeaterList', $item );
					}
				} );
				// allow selection via enter key
				$row.keyup( function( e ) {
					if ( e.keyCode === 13 ) {
						// triggering a standard click event to be caught by the row click handler above
						$row.trigger( 'click.fu.repeaterList' );
					}
				} );
			}

			$tbody.append( $row );

			for ( i = 0, l = this.list_columns.length; i < l; i++ ) {
				renderColumn.call( this, $row, rows, index, this.list_columns, i );
			}

			if ( this.viewOptions.list_rowRendered ) {
				this.viewOptions.list_rowRendered( {
					container: $tbody,
					item: $row,
					rowData: rows[ index ]
				}, function() {} );
			}
		}

		function renderTbody( $table, data ) {
			var $tbody = $table.find( 'tbody' );
			var $empty;

			if ( $tbody.length < 1 ) {
				$tbody = $( '<tbody data-container="true"></tbody>' );
				$table.append( $tbody );
			}

			if ( data.items && data.items.length < 1 ) {
				$empty = $( '<tr class="empty"><td colspan="' + this.list_columns.length + '"></td></tr>' );
				$empty.find( 'td' ).append( this.viewOptions.list_noItemsHTML );
				$tbody.append( $empty );
			}
		}

		function renderThead( $table, data ) {
			var columns = data.columns || [];
			var i, j, l, $thead, $tr;

			function differentColumns( oldCols, newCols ) {
				if ( !newCols ) {
					return false;
				}
				if ( !oldCols || ( newCols.length !== oldCols.length ) ) {
					return true;
				}
				for ( i = 0, l = newCols.length; i < l; i++ ) {
					if ( !oldCols[ i ] ) {
						return true;
					} else {
						for ( j in newCols[ i ] ) {
							if ( oldCols[ i ][ j ] !== newCols[ i ][ j ] ) {
								return true;
							}

						}
					}

				}
				return false;
			}

			if ( this.list_firstRender || differentColumns( this.list_columns, columns ) ) {
				$table.find( 'thead' ).remove();

				this.list_columns = columns;
				this.list_firstRender = false;
				this.$loader.removeClass( 'noHeader' );

				$thead = $( '<thead data-preserve="deep"><tr></tr></thead>' );
				$tr = $thead.find( 'tr' );
				for ( i = 0, l = columns.length; i < l; i++ ) {
					renderHeader.call( this, $tr, columns, i );
				}
				$table.prepend( $thead );

				sizeColumns.call( this, $tr );
			}
		}

		function sizeColumns( $tr ) {
			var auto = [];
			var self = this;
			var i, l, newWidth, taken;

			if ( this.viewOptions.list_columnSizing ) {
				i = 0;
				taken = 0;
				$tr.find( 'th' ).each( function() {
					var $th = $( this );
					var isLast = ( $th.next( 'th' ).length === 0 );
					var width;
					if ( self.list_columns[ i ].width !== undefined ) {
						width = self.list_columns[ i ].width;
						$th.outerWidth( width );
						taken += $th.outerWidth();
						if ( !isLast ) {
							self.list_columns[ i ]._auto_width = width;
						} else {
							$th.outerWidth( '' );
						}

					} else {
						auto.push( {
							col: $th,
							index: i,
							last: isLast
						} );
					}

					i++;
				} );

				l = auto.length;
				if ( l > 0 ) {
					newWidth = Math.floor( ( this.$canvas.width() - taken ) / l );
					for ( i = 0; i < l; i++ ) {
						if ( !auto[ i ].last ) {
							auto[ i ].col.outerWidth( newWidth );
							this.list_columns[ auto[ i ].index ]._auto_width = newWidth;
						}

					}
				}
			}
		}



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Repeater - Thumbnail View Plugin
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		if ( $.fn.repeater ) {
			//ADDITIONAL METHODS
			$.fn.repeater.Constructor.prototype.thumbnail_clearSelectedItems = function() {
				this.$canvas.find( '.repeater-thumbnail-cont .selectable.selected' ).removeClass( 'selected' );
			};

			$.fn.repeater.Constructor.prototype.thumbnail_getSelectedItems = function() {
				var selected = [];
				this.$canvas.find( '.repeater-thumbnail-cont .selectable.selected' ).each( function() {
					selected.push( $( this ) );
				} );
				return selected;
			};

			$.fn.repeater.Constructor.prototype.thumbnail_setSelectedItems = function( items, force ) {
				var selectable = this.viewOptions.thumbnail_selectable;
				var self = this;
				var i, $item, l, n;

				//this function is necessary because lint yells when a function is in a loop
				function compareItemIndex() {
					if ( n === items[ i ].index ) {
						$item = $( this );
						return false;
					} else {
						n++;
					}
				}

				//this function is necessary because lint yells when a function is in a loop
				function compareItemSelector() {
					$item = $( this );
					if ( $item.is( items[ i ].selector ) ) {
						selectItem( $item, items[ i ].selected );
					}
				}

				function selectItem( $itm, select ) {
					select = ( select !== undefined ) ? select : true;
					if ( select ) {
						if ( !force && selectable !== 'multi' ) {
							self.thumbnail_clearSelectedItems();
						}

						$itm.addClass( 'selected' );
					} else {
						$itm.removeClass( 'selected' );
					}
				}

				if ( !$.isArray( items ) ) {
					items = [ items ];
				}

				if ( force === true || selectable === 'multi' ) {
					l = items.length;
				} else if ( selectable ) {
					l = ( items.length > 0 ) ? 1 : 0;
				} else {
					l = 0;
				}

				for ( i = 0; i < l; i++ ) {
					if ( items[ i ].index !== undefined ) {
						$item = $();
						n = 0;
						this.$canvas.find( '.repeater-thumbnail-cont .selectable' ).each( compareItemIndex );
						if ( $item.length > 0 ) {
							selectItem( $item, items[ i ].selected );
						}

					} else if ( items[ i ].selector ) {
						this.$canvas.find( '.repeater-thumbnail-cont .selectable' ).each( compareItemSelector );
					}
				}
			};

			//ADDITIONAL DEFAULT OPTIONS
			$.fn.repeater.defaults = $.extend( {}, $.fn.repeater.defaults, {
				thumbnail_alignment: 'left',
				thumbnail_infiniteScroll: false,
				thumbnail_itemRendered: null,
				thumbnail_selectable: false,
				thumbnail_template: '<div class="thumbnail repeater-thumbnail"><img height="75" src="{{src}}" width="65"><span>{{name}}</span></div>'
			} );

			//EXTENSION DEFINITION
			$.fn.repeater.viewTypes.thumbnail = {
				selected: function() {
					var infScroll = this.viewOptions.thumbnail_infiniteScroll;
					var opts;
					if ( infScroll ) {
						opts = ( typeof infScroll === 'object' ) ? infScroll : {};
						this.infiniteScrolling( true, opts );
					}
				},
				before: function( helpers ) {
					var alignment = this.viewOptions.thumbnail_alignment;
					var $cont = this.$canvas.find( '.repeater-thumbnail-cont' );
					var data = helpers.data;
					var response = {};
					var $empty, validAlignments;

					if ( $cont.length < 1 ) {
						$cont = $( '<div class="clearfix repeater-thumbnail-cont" data-container="true" data-infinite="true" data-preserve="shallow"></div>' );
						if ( alignment && alignment !== 'none' ) {
							validAlignments = {
								'center': 1,
								'justify': 1,
								'left': 1,
								'right': 1
							};
							alignment = ( validAlignments[ alignment ] ) ? alignment : 'justify';
							$cont.addClass( 'align-' + alignment );
							this.thumbnail_injectSpacers = true;
							response.item = $cont;
						} else {
							this.thumbnail_injectSpacers = false;
							response.action = 'none';
						}
					}

					if ( data.items && data.items.length < 1 ) {
						$empty = $( '<div class="empty"></div>' );
						$empty.append( this.viewOptions.thumbnail_noItemsHTML );
						$cont.append( $empty );
					} else {
						$cont.find( '.empty:first' ).remove();
					}

					return response;
				},
				renderItem: function( helpers ) {
					var selectable = this.viewOptions.thumbnail_selectable;
					var selected = 'selected';
					var self = this;
					var $thumbnail = $( fillTemplate( helpers.subset[ helpers.index ], this.viewOptions.thumbnail_template ) );

					if ( selectable ) {
						$thumbnail.addClass( 'selectable' );
						$thumbnail.on( 'click', function() {
							if ( !$thumbnail.hasClass( selected ) ) {
								if ( selectable !== 'multi' ) {
									self.$canvas.find( '.repeater-thumbnail-cont .selectable.selected' ).each( function() {
										var $itm = $( this );
										$itm.removeClass( selected );
										self.$element.trigger( 'deselected.fu.repeaterThumbnail', $itm );
									} );
								}

								$thumbnail.addClass( selected );
								self.$element.trigger( 'selected.fu.repeaterThumbnail', $thumbnail );
							} else {
								$thumbnail.removeClass( selected );
								self.$element.trigger( 'deselected.fu.repeaterThumbnail', $thumbnail );
							}
						} );
					}

					helpers.container.append( $thumbnail );
					if ( this.thumbnail_injectSpacers ) {
						$thumbnail.after( '<span class="spacer">&nbsp;</span>' );
					}

					if ( this.viewOptions.thumbnail_itemRendered ) {
						this.viewOptions.thumbnail_itemRendered( {
							container: helpers.container,
							item: $thumbnail,
							itemData: helpers.subset[ helpers.index ]
						}, function() {} );
					}

					return false;
				}
			};
		}

		//ADDITIONAL METHODS
		function fillTemplate( itemData, template ) {
			var invalid = false;

			function replace() {
				var end, start, val;

				start = template.indexOf( '{{' );
				end = template.indexOf( '}}', start + 2 );

				if ( start > -1 && end > -1 ) {
					val = $.trim( template.substring( start + 2, end ) );
					val = ( itemData[ val ] !== undefined ) ? itemData[ val ] : '';
					template = template.substring( 0, start ) + val + template.substring( end + 2 );
				} else {
					invalid = true;
				}
			}

			while ( !invalid && template.search( '{{' ) >= 0 ) {
				replace( template );
			}

			return template;
		}



	} )( jQuery );


	( function( $ ) {

		/*
		 * Fuel UX Scheduler
		 * https://github.com/ExactTarget/fuelux
		 *
		 * Copyright (c) 2014 ExactTarget
		 * Licensed under the BSD New license.
		 */



		// -- BEGIN MODULE CODE HERE --

		var old = $.fn.scheduler;

		// SCHEDULER CONSTRUCTOR AND PROTOTYPE

		var Scheduler = function( element, options ) {
			var self = this;

			this.$element = $( element );
			this.options = $.extend( {}, $.fn.scheduler.defaults, options );

			// cache elements
			this.$startDate = this.$element.find( '.start-datetime .start-date' );
			this.$startTime = this.$element.find( '.start-datetime .start-time' );

			this.$timeZone = this.$element.find( '.timezone-container .timezone' );

			this.$repeatIntervalPanel = this.$element.find( '.repeat-every-panel' );
			this.$repeatIntervalSelect = this.$element.find( '.repeat-options' );

			this.$repeatIntervalSpinbox = this.$element.find( '.repeat-every' );
			this.$repeatIntervalTxt = this.$element.find( '.repeat-every-text' );

			this.$end = this.$element.find( '.repeat-end' );
			this.$endSelect = this.$end.find( '.end-options' );
			this.$endAfter = this.$end.find( '.end-after' );
			this.$endDate = this.$end.find( '.end-on-date' );

			// panels
			this.$recurrencePanels = this.$element.find( '.repeat-panel' );


			this.$repeatIntervalSelect.selectlist();

			//initialize sub-controls
			this.$element.find( '.selectlist' ).selectlist();
			this.$startDate.datepicker( this.options.startDateOptions );
			this.$startTime.combobox();
			// init start time
			if ( this.$startTime.find( 'input' ).val() === '' ) {
				this.$startTime.combobox( 'selectByIndex', 0 );
			}

			// every 0 days/hours doesn't make sense, change if not set
			if ( this.$repeatIntervalSpinbox.find( 'input' ).val() === '0' ) {
				this.$repeatIntervalSpinbox.spinbox( {
					'value': 1,
					'min': 1
				} );
			} else {
				this.$repeatIntervalSpinbox.spinbox( {
					'min': 1
				} );
			}

			this.$endAfter.spinbox( {
				'value': 1,
				'min': 1
			} );
			this.$endDate.datepicker( this.options.endDateOptions );
			this.$element.find( '.radio-custom' ).radio();

			// bind events: 'change' is a Bootstrap JS fired event
			this.$repeatIntervalSelect.on( 'changed.fu.selectlist', $.proxy( this.repeatIntervalSelectChanged, this ) );
			this.$endSelect.on( 'changed.fu.selectlist', $.proxy( this.endSelectChanged, this ) );
			this.$element.find( '.repeat-days-of-the-week .btn-group .btn' ).on( 'change.fu.scheduler', function( e, data ) {
				self.changed( e, data, true );
			} );
			this.$element.find( '.combobox' ).on( 'changed.fu.combobox', $.proxy( this.changed, this ) );
			this.$element.find( '.datepicker' ).on( 'changed.fu.datepicker', $.proxy( this.changed, this ) );
			this.$element.find( '.selectlist' ).on( 'changed.fu.selectlist', $.proxy( this.changed, this ) );
			this.$element.find( '.spinbox' ).on( 'changed.fu.spinbox', $.proxy( this.changed, this ) );
			this.$element.find( '.repeat-monthly .radio, .repeat-yearly .radio' ).on( 'change.fu.scheduler', $.proxy( this.changed, this ) );
		};

		Scheduler.prototype = {
			constructor: Scheduler,

			destroy: function() {
				var markup;
				// set input value attribute
				this.$element.find( 'input' ).each( function() {
					$( this ).attr( 'value', $( this ).val() );
				} );

				// empty elements to return to original markup and store
				this.$element.find( '.datepicker .calendar' ).empty();

				markup = this.$element[ 0 ].outerHTML;

				// destroy components
				this.$element.find( '.combobox' ).combobox( 'destroy' );
				this.$element.find( '.datepicker' ).datepicker( 'destroy' );
				this.$element.find( '.selectlist' ).selectlist( 'destroy' );
				this.$element.find( '.spinbox' ).spinbox( 'destroy' );
				this.$element.find( '[type=radio]' ).radio( 'destroy' );
				this.$element.remove();

				// any external bindings
				// [none]

				return markup;
			},

			changed: function( e, data, propagate ) {
				if ( !propagate ) {
					e.stopPropagation();
				}

				this.$element.trigger( 'changed.fu.scheduler', {
					data: ( data !== undefined ) ? data : $( e.currentTarget ).data(),
					originalEvent: e,
					value: this.getValue()
				} );
			},

			disable: function() {
				this.toggleState( 'disable' );
			},

			enable: function() {
				this.toggleState( 'enable' );
			},

			setUtcTime: function( d, t, offset ) {
				var date = d.split( '-' );
				var time = t.split( ':' );

				function z( n ) {
					return ( n < 10 ? '0' : '' ) + n;
				}

				var utcDate = new Date( Date.UTC( date[ 0 ], ( date[ 1 ] - 1 ), date[ 2 ], time[ 0 ], time[ 1 ], ( time[ 2 ] ? time[ 2 ] : 0 ) ) );

				if ( offset === 'Z' ) {
					utcDate.setUTCHours( utcDate.getUTCHours() + 0 );
				} else {
					var re1 = '(.)'; // Any Single Character 1
					var re2 = '.*?'; // Non-greedy match on filler
					var re3 = '\\d'; // Uninteresting: d
					var re4 = '.*?'; // Non-greedy match on filler
					var re5 = '(\\d)'; // Any Single Digit 1

					var p = new RegExp( re1 + re2 + re3 + re4 + re5, [ "i" ] );
					var m = p.exec( offset );
					if ( m !== null ) {
						var c1 = m[ 1 ];
						var d1 = m[ 2 ];

						var modifier = ( c1 === '+' ) ? 1 : -1;

						utcDate.setUTCHours( utcDate.getUTCHours() + ( modifier * parseInt( d1, 10 ) ) );
					}

				}

				var localDifference = utcDate.getTimezoneOffset();
				utcDate.setMinutes( localDifference );
				return utcDate;
			},

			// called when the end range changes
			// (Never, After, On date)
			endSelectChanged: function( e, data ) {
				var selectedItem, val;

				if ( !data ) {
					selectedItem = this.$endSelect.selectlist( 'selectedItem' );
					val = selectedItem.value;
				} else {
					val = data.value;
				}

				// hide all panels
				this.$endAfter.parent().addClass( 'hide' );
				this.$endAfter.parent().attr( 'aria-hidden', 'true' );

				this.$endDate.parent().addClass( 'hide' );
				this.$endDate.parent().attr( 'aria-hidden', 'true' );

				if ( val === 'after' ) {
					this.$endAfter.parent().removeClass( 'hide' );
					this.$endAfter.parent().attr( 'aria-hidden', 'false' );
				} else if ( val === 'date' ) {
					this.$endDate.parent().removeClass( 'hide' );
					this.$endDate.parent().attr( 'aria-hidden', 'false' );
				}
			},

			getValue: function() {
				// FREQ = frequency (hourly, daily, monthly...)
				// BYDAY = when picking days (MO,TU,WE,etc)
				// BYMONTH = when picking months (Jan,Feb,March) - note the values should be 1,2,3...
				// BYMONTHDAY = when picking days of the month (1,2,3...)
				// BYSETPOS = when picking First,Second,Third,Fourth,Last (1,2,3,4,-1)

				var interval = this.$repeatIntervalSpinbox.spinbox( 'value' );
				var pattern = '';
				var repeat = this.$repeatIntervalSelect.selectlist( 'selectedItem' ).value;
				var startTime;

				if ( this.$startTime.combobox( 'selectedItem' ).value ) {
					startTime = this.$startTime.combobox( 'selectedItem' ).value;
					startTime = startTime.toLowerCase();

				} else {
					startTime = this.$startTime.combobox( 'selectedItem' ).text.toLowerCase();
				}

				var timeZone = this.$timeZone.selectlist( 'selectedItem' );
				var getFormattedDate;

				getFormattedDate = function( dateObj, dash ) {
					var fdate = '';
					var item;

					fdate += dateObj.getFullYear();
					fdate += dash;
					item = dateObj.getMonth() + 1; //because 0 indexing makes sense when dealing with months /sarcasm
					fdate += ( item < 10 ) ? '0' + item : item;
					fdate += dash;
					item = dateObj.getDate();
					fdate += ( item < 10 ) ? '0' + item : item;

					return fdate;
				};

				var day, days, hasAm, hasPm, month, pos, startDateTime, type;

				startDateTime = '' + getFormattedDate( this.$startDate.datepicker( 'getDate' ), '-' );

				startDateTime += 'T';
				hasAm = ( startTime.search( 'am' ) >= 0 );
				hasPm = ( startTime.search( 'pm' ) >= 0 );
				startTime = $.trim( startTime.replace( /am/g, '' ).replace( /pm/g, '' ) ).split( ':' );
				startTime[ 0 ] = parseInt( startTime[ 0 ], 10 );
				startTime[ 1 ] = parseInt( startTime[ 1 ], 10 );
				if ( hasAm && startTime[ 0 ] > 11 ) {
					startTime[ 0 ] = 0;
				} else if ( hasPm && startTime[ 0 ] < 12 ) {
					startTime[ 0 ] += 12;
				}

				startDateTime += ( startTime[ 0 ] < 10 ) ? '0' + startTime[ 0 ] : startTime[ 0 ];
				startDateTime += ':';
				startDateTime += ( startTime[ 1 ] < 10 ) ? '0' + startTime[ 1 ] : startTime[ 1 ];

				startDateTime += ( timeZone.offset === '+00:00' ) ? 'Z' : timeZone.offset;

				if ( repeat === 'none' ) {
					pattern = 'FREQ=DAILY;INTERVAL=1;COUNT=1;';
				} else if ( repeat === 'hourly' ) {
					pattern = 'FREQ=HOURLY;';
					pattern += 'INTERVAL=' + interval + ';';
				} else if ( repeat === 'daily' ) {
					pattern += 'FREQ=DAILY;';
					pattern += 'INTERVAL=' + interval + ';';
				} else if ( repeat === 'weekdays' ) {
					pattern += 'FREQ=DAILY;';
					pattern += 'BYDAY=MO,TU,WE,TH,FR;';
					pattern += 'INTERVAL=1;';
				} else if ( repeat === 'weekly' ) {
					days = [];
					this.$element.find( '.repeat-days-of-the-week .btn-group input:checked' ).each( function() {
						days.push( $( this ).data().value );
					} );

					pattern += 'FREQ=WEEKLY;';
					pattern += 'BYDAY=' + days.join( ',' ) + ';';
					pattern += 'INTERVAL=' + interval + ';';
				} else if ( repeat === 'monthly' ) {
					pattern += 'FREQ=MONTHLY;';
					pattern += 'INTERVAL=' + interval + ';';
					type = this.$element.find( 'input[name=repeat-monthly]:checked' ).val();

					if ( type === 'bymonthday' ) {
						day = parseInt( this.$element.find( '.repeat-monthly-date .selectlist' ).selectlist( 'selectedItem' ).text, 10 );
						pattern += 'BYMONTHDAY=' + day + ';';
					} else if ( type === 'bysetpos' ) {
						days = this.$element.find( '.month-days' ).selectlist( 'selectedItem' ).value;
						pos = this.$element.find( '.month-day-pos' ).selectlist( 'selectedItem' ).value;
						pattern += 'BYDAY=' + days + ';';
						pattern += 'BYSETPOS=' + pos + ';';
					}

				} else if ( repeat === 'yearly' ) {
					pattern += 'FREQ=YEARLY;';
					type = this.$element.find( 'input[name=repeat-yearly]:checked' ).val();

					if ( type === 'bymonthday' ) {
						month = this.$element.find( '.repeat-yearly-date .year-month' ).selectlist( 'selectedItem' ).value;
						day = this.$element.find( '.year-month-day' ).selectlist( 'selectedItem' ).text;
						pattern += 'BYMONTH=' + month + ';';
						pattern += 'BYMONTHDAY=' + day + ';';
					} else if ( type === 'bysetpos' ) {
						days = this.$element.find( '.year-month-days' ).selectlist( 'selectedItem' ).value;
						pos = this.$element.find( '.year-month-day-pos' ).selectlist( 'selectedItem' ).value;
						month = this.$element.find( '.repeat-yearly-day .year-month' ).selectlist( 'selectedItem' ).value;

						pattern += 'BYDAY=' + days + ';';
						pattern += 'BYSETPOS=' + pos + ';';
						pattern += 'BYMONTH=' + month + ';';
					}

				}

				var end = this.$endSelect.selectlist( 'selectedItem' ).value;
				var duration = '';

				// if both UNTIL and COUNT are not specified, the recurrence will repeat forever
				// http://tools.ietf.org/html/rfc2445#section-4.3.10
				if ( repeat !== 'none' ) {
					if ( end === 'after' ) {
						duration = 'COUNT=' + this.$endAfter.spinbox( 'value' ) + ';';
					} else if ( end === 'date' ) {
						duration = 'UNTIL=' + getFormattedDate( this.$endDate.datepicker( 'getDate' ), '' ) + ';';
					}

				}

				pattern += duration;

				var data = {
					startDateTime: startDateTime,
					timeZone: {
						name: timeZone.name,
						offset: timeZone.offset
					},
					recurrencePattern: pattern
				};

				return data;
			},

			// called when the repeat interval changes
			// (None, Hourly, Daily, Weekdays, Weekly, Monthly, Yearly
			repeatIntervalSelectChanged: function( e, data ) {
				var selectedItem, val, txt;

				if ( !data ) {
					selectedItem = this.$repeatIntervalSelect.selectlist( 'selectedItem' );
					val = selectedItem.value;
					txt = selectedItem.text;
				} else {
					val = data.value;
					txt = data.text;
				}

				// set the text
				this.$repeatIntervalTxt.text( txt );

				switch ( val.toLowerCase() ) {
					case 'hourly':
					case 'daily':
					case 'weekly':
					case 'monthly':
						this.$repeatIntervalPanel.removeClass( 'hide' );
						this.$repeatIntervalPanel.attr( 'aria-hidden', 'false' );
						break;
					default:
						this.$repeatIntervalPanel.addClass( 'hide' );
						this.$repeatIntervalPanel.attr( 'aria-hidden', 'true' );
						break;
				}

				// hide all panels
				this.$recurrencePanels.addClass( 'hide' );
				this.$recurrencePanels.attr( 'aria-hidden', 'true' );

				// show panel for current selection
				this.$element.find( '.repeat-' + val ).removeClass( 'hide' );
				this.$element.find( '.repeat-' + val ).attr( 'aria-hidden', 'false' );

				// the end selection should only be shown when
				// the repeat interval is not "None (run once)"
				if ( val === 'none' ) {
					this.$end.addClass( 'hide' );
					this.$end.attr( 'aria-hidden', 'true' );
				} else {
					this.$end.removeClass( 'hide' );
					this.$end.attr( 'aria-hidden', 'false' );
				}
			},

			setValue: function( options ) {
				var hours, i, item, l, minutes, period, recur, temp, startDate, startTime, timeOffset;

				if ( options.startDateTime ) {
					temp = options.startDateTime.split( 'T' );
					startDate = temp[ 0 ];

					if ( temp[ 1 ] ) {
						startTime = temp[ 1 ];
						temp[ 1 ] = temp[ 1 ].split( ':' );
						hours = parseInt( temp[ 1 ][ 0 ], 10 );
						minutes = ( temp[ 1 ][ 1 ] ) ? parseInt( temp[ 1 ][ 1 ].split( '+' )[ 0 ].split( '-' )[ 0 ].split( 'Z' )[ 0 ], 10 ) : 0;
						period = ( hours < 12 ) ? 'AM' : 'PM';

						if ( hours === 0 ) {
							hours = 12;
						} else if ( hours > 12 ) {
							hours -= 12;
						}

						minutes = ( minutes < 10 ) ? '0' + minutes : minutes;
						startTime = hours + ':' + minutes;
						temp = hours + ':' + minutes + ' ' + period;
						this.$startTime.find( 'input' ).val( temp );
						this.$startTime.combobox( 'selectByText', temp );
					} else {
						startTime = '00:00';
					}

				} else {
					startTime = '00:00';
					var currentDate = this.$startDate.datepicker( 'getDate' );
					startDate = currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDate();
				}

				item = 'li[data';
				if ( options.timeZone ) {
					if ( typeof( options.timeZone ) === 'string' ) {
						item += '-name="' + options.timeZone;
					} else {
						if ( options.timeZone.name ) {
							item += '-name="' + options.timeZone.name;
						} else {
							item += '-offset="' + options.timeZone.offset;
						}

					}

					item += '"]';
					timeOffset = options.timeZone.offset;
					this.$timeZone.selectlist( 'selectBySelector', item );
				} else if ( options.startDateTime ) {
					temp = options.startDateTime.split( 'T' )[ 1 ];
					if ( temp ) {
						if ( temp.search( /\+/ ) > -1 ) {
							temp = '+' + $.trim( temp.split( '+' )[ 1 ] );
						} else if ( temp.search( /\-/ ) > -1 ) {
							temp = '-' + $.trim( temp.split( '-' )[ 1 ] );
						} else {
							temp = '+00:00';
						}

					} else {
						temp = '+00:00';
					}

					timeOffset = ( temp === '+00:00' ) ? 'Z' : temp;

					item += '-offset="' + temp + '"]';
					this.$timeZone.selectlist( 'selectBySelector', item );
				} else {
					timeOffset = 'Z';
				}

				if ( options.recurrencePattern ) {
					recur = {};
					temp = options.recurrencePattern.toUpperCase().split( ';' );
					for ( i = 0, l = temp.length; i < l; i++ ) {
						if ( temp[ i ] !== '' ) {
							item = temp[ i ].split( '=' );
							recur[ item[ 0 ] ] = item[ 1 ];
						}

					}

					if ( recur.FREQ === 'DAILY' ) {
						if ( recur.BYDAY === 'MO,TU,WE,TH,FR' ) {
							item = 'weekdays';
						} else {
							if ( recur.INTERVAL === '1' && recur.COUNT === '1' ) {
								item = 'none';
							} else {
								item = 'daily';
							}

						}

					} else if ( recur.FREQ === 'HOURLY' ) {
						item = 'hourly';
					} else if ( recur.FREQ === 'WEEKLY' ) {
						if ( recur.BYDAY ) {
							item = this.$element.find( '.repeat-days-of-the-week .btn-group' );
							item.find( 'label' ).removeClass( 'active' );
							temp = recur.BYDAY.split( ',' );
							for ( i = 0, l = temp.length; i < l; i++ ) {
								item.find( 'input[data-value="' + temp[ i ] + '"]' ).prop( 'checked', true ).parent().addClass( 'active' );
							}
						}

						item = 'weekly';
					} else if ( recur.FREQ === 'MONTHLY' ) {
						this.$element.find( '.repeat-monthly input' ).removeAttr( 'checked' ).removeClass( 'checked' );
						this.$element.find( '.repeat-monthly label.radio-custom' ).removeClass( 'checked' );
						if ( recur.BYMONTHDAY ) {
							temp = this.$element.find( '.repeat-monthly-date' );
							temp.find( 'input' ).addClass( 'checked' ).prop( 'checked', true );
							temp.find( 'label.radio-custom' ).addClass( 'checked' );
							temp.find( '.selectlist' ).selectlist( 'selectByValue', recur.BYMONTHDAY );
						} else if ( recur.BYDAY ) {
							temp = this.$element.find( '.repeat-monthly-day' );
							temp.find( 'input' ).addClass( 'checked' ).prop( 'checked', true );
							temp.find( 'label.radio-custom' ).addClass( 'checked' );
							if ( recur.BYSETPOS ) {
								temp.find( '.month-day-pos' ).selectlist( 'selectByValue', recur.BYSETPOS );
							}

							temp.find( '.month-days' ).selectlist( 'selectByValue', recur.BYDAY );
						}

						item = 'monthly';
					} else if ( recur.FREQ === 'YEARLY' ) {
						this.$element.find( '.repeat-yearly input' ).removeAttr( 'checked' ).removeClass( 'checked' );
						this.$element.find( '.repeat-yearly label.radio-custom' ).removeClass( 'checked' );
						if ( recur.BYMONTHDAY ) {
							temp = this.$element.find( '.repeat-yearly-date' );
							temp.find( 'input' ).addClass( 'checked' ).prop( 'checked', true );
							temp.find( 'label.radio-custom' ).addClass( 'checked' );
							if ( recur.BYMONTH ) {
								temp.find( '.year-month' ).selectlist( 'selectByValue', recur.BYMONTH );
							}

							temp.find( '.year-month-day' ).selectlist( 'selectByValue', recur.BYMONTHDAY );
						} else if ( recur.BYSETPOS ) {
							temp = this.$element.find( '.repeat-yearly-day' );
							temp.find( 'input' ).addClass( 'checked' ).prop( 'checked', true );
							temp.find( 'label.radio-custom' ).addClass( 'checked' );
							temp.find( '.year-month-day-pos' ).selectlist( 'selectByValue', recur.BYSETPOS );
							if ( recur.BYDAY ) {
								temp.find( '.year-month-days' ).selectlist( 'selectByValue', recur.BYDAY );
							}

							if ( recur.BYMONTH ) {
								temp.find( '.year-month' ).selectlist( 'selectByValue', recur.BYMONTH );
							}

						}

						item = 'yearly';
					} else {
						item = 'none';
					}

					if ( recur.COUNT ) {
						this.$endAfter.spinbox( 'value', parseInt( recur.COUNT, 10 ) );
						this.$endSelect.selectlist( 'selectByValue', 'after' );
					} else if ( recur.UNTIL ) {
						temp = recur.UNTIL;
						if ( temp.length === 8 ) {
							temp = temp.split( '' );
							temp.splice( 4, 0, '-' );
							temp.splice( 7, 0, '-' );
							temp = temp.join( '' );
						}

						var timeZone = this.$timeZone.selectlist( 'selectedItem' );
						var timezoneOffset = ( timeZone.offset === '+00:00' ) ? 'Z' : timeZone.offset;

						startDate = temp;
						var utcEndHours = this.setUtcTime( startDate, startTime, timezoneOffset );
						this.$endDate.datepicker( 'setDate', utcEndHours );

						this.$endSelect.selectlist( 'selectByValue', 'date' );
					}

					this.endSelectChanged();

					if ( recur.INTERVAL ) {
						this.$repeatIntervalSpinbox.spinbox( 'value', parseInt( recur.INTERVAL, 10 ) );
					}

					this.$repeatIntervalSelect.selectlist( 'selectByValue', item );
					this.repeatIntervalSelectChanged();
				}

				var utcStartHours = this.setUtcTime( startDate, startTime, timeOffset );

				this.$startDate.datepicker( 'setDate', utcStartHours );
			},

			toggleState: function( action ) {
				this.$element.find( '.combobox' ).combobox( action );
				this.$element.find( '.datepicker' ).datepicker( action );
				this.$element.find( '.selectlist' ).selectlist( action );
				this.$element.find( '.spinbox' ).spinbox( action );
				this.$element.find( '[type=radio]' ).radio( action );

				if ( action === 'disable' ) {
					action = 'addClass';
				} else {
					action = 'removeClass';
				}

				this.$element.find( '.repeat-days-of-the-week .btn-group' )[ action ]( 'disabled' );
			},

			value: function( options ) {
				if ( options ) {
					return this.setValue( options );
				} else {
					return this.getValue();
				}
			}
		};


		// SCHEDULER PLUGIN DEFINITION

		$.fn.scheduler = function( option ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			var methodReturn;

			var $set = this.each( function() {
				var $this = $( this );
				var data = $this.data( 'fu.scheduler' );
				var options = typeof option === 'object' && option;

				if ( !data ) {
					$this.data( 'fu.scheduler', ( data = new Scheduler( this, options ) ) );
				}

				if ( typeof option === 'string' ) {
					methodReturn = data[ option ].apply( data, args );
				}
			} );

			return ( methodReturn === undefined ) ? $set : methodReturn;
		};

		$.fn.scheduler.defaults = {};

		$.fn.scheduler.Constructor = Scheduler;

		$.fn.scheduler.noConflict = function() {
			$.fn.scheduler = old;
			return this;
		};


		// DATA-API

		$( document ).on( 'mousedown.fu.scheduler.data-api', '[data-initialize=scheduler]', function( e ) {
			var $control = $( e.target ).closest( '.scheduler' );
			if ( !$control.data( 'fu.scheduler' ) ) {
				$control.scheduler( $control.data() );
			}
		} );

		// Must be domReady for AMD compatibility
		$( function() {
			$( '[data-initialize=scheduler]' ).each( function() {
				var $this = $( this );
				if ( $this.data( 'scheduler' ) ) return;
				$this.scheduler( $this.data() );
			} );
		} );



	} )( jQuery );


} ) );

/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(){function a(a){this._value=a}function b(a,b,c,d){var e,f,g=Math.pow(10,b);return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}function c(a,b,c){var d;return d=b.indexOf("$")>-1?e(a,b,c):b.indexOf("%")>-1?f(a,b,c):b.indexOf(":")>-1?g(a,b):i(a._value,b,c)}function d(a,b){var c,d,e,f,g,i=b,j=["KB","MB","GB","TB","PB","EB","ZB","YB"],k=!1;if(b.indexOf(":")>-1)a._value=h(b);else if(b===q)a._value=0;else{for("."!==o[p].delimiters.decimal&&(b=b.replace(/\./g,"").replace(o[p].delimiters.decimal,".")),c=new RegExp("[^a-zA-Z]"+o[p].abbreviations.thousand+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+o[p].abbreviations.million+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+o[p].abbreviations.billion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+o[p].abbreviations.trillion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),g=0;g<=j.length&&!(k=b.indexOf(j[g])>-1?Math.pow(1024,g+1):!1);g++);a._value=(k?k:1)*(i.match(c)?Math.pow(10,3):1)*(i.match(d)?Math.pow(10,6):1)*(i.match(e)?Math.pow(10,9):1)*(i.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),a._value=k?Math.ceil(a._value):a._value}return a._value}function e(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),j="";return b.indexOf(" $")>-1?(j=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(j=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=i(a._value,b,c),1>=f?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(g>f||h>f)&&(d=0),e.splice(d,0,o[p].currency.symbol+j),e=e.join("")):e=o[p].currency.symbol+j+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,j+o[p].currency.symbol),e=e.join("")):e=e+j+o[p].currency.symbol,e}function f(a,b,c){var d,e="",f=100*a._value;return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=i(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function g(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*b*60)/60),d=Math.round(a._value-60*b*60-60*c);return b+":"+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d)}function h(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function i(a,c,d){var e,f,g,h,i,j,k=!1,l=!1,m=!1,n="",r=!1,s=!1,t=!1,u=!1,v=!1,w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;if(0===a&&null!==q)return q;if(c.indexOf("(")>-1?(k=!0,c=c.slice(1,-1)):c.indexOf("+")>-1&&(l=!0,c=c.replace(/\+/g,"")),c.indexOf("a")>-1&&(r=c.indexOf("aK")>=0,s=c.indexOf("aM")>=0,t=c.indexOf("aB")>=0,u=c.indexOf("aT")>=0,v=r||s||t||u,c.indexOf(" a")>-1?(n=" ",c=c.replace(" a","")):c=c.replace("a",""),y>=Math.pow(10,12)&&!v||u?(n+=o[p].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||t?(n+=o[p].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||s?(n+=o[p].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||r)&&(n+=o[p].abbreviations.thousand,a/=Math.pow(10,3))),c.indexOf("b")>-1)for(c.indexOf(" b")>-1?(w=" ",c=c.replace(" b","")):c=c.replace("b",""),g=0;g<=z.length;g++)if(e=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=e&&f>a){w+=z[g],e>0&&(a/=e);break}return c.indexOf("o")>-1&&(c.indexOf(" o")>-1?(x=" ",c=c.replace(" o","")):c=c.replace("o",""),x+=o[p].ordinal(a)),c.indexOf("[.]")>-1&&(m=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],j=c.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=b(a,i[0].length+i[1].length,d,i[1].length)):A=b(a,i.length,d),h=A.split(".")[0],A=A.split(".")[1].length?o[p].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=b(a,null,d),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o[p].delimiters.thousands)),0===c.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x?x:"")+(n?n:"")+(w?w:"")+(k&&B?")":"")}function j(a,b){o[a]=b}function k(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}function l(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var c=k(a),d=k(b);return c>d?c:d},-1/0)}var m,n="1.5.3",o={},p="en",q=null,r="0,0",s="undefined"!=typeof module&&module.exports;m=function(b){return m.isNumeral(b)?b=b.value():0===b||"undefined"==typeof b?b=0:Number(b)||(b=m.fn.unformat(b)),new a(Number(b))},m.version=n,m.isNumeral=function(b){return b instanceof a},m.language=function(a,b){if(!a)return p;if(a&&!b){if(!o[a])throw new Error("Unknown language : "+a);p=a}return(b||!o[a])&&j(a,b),m},m.languageData=function(a){if(!a)return o[p];if(!o[a])throw new Error("Unknown language : "+a);return o[a]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(a){q="string"==typeof a?a:null},m.defaultFormat=function(a){r="string"==typeof a?a:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),m.fn=a.prototype={clone:function(){return m(this)},format:function(a,b){return c(this,a?a:r,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:d(this,a?a:r)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b){return a+c*b}var c=l.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b){return a-c*b}var c=l.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b){var c=l(a,b);return a*c*b*c/(c*c)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b){var c=l(a,b);return a*c/(b*c)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(m(this._value).subtract(a).value())}},s&&(module.exports=m),"undefined"==typeof ender&&(this.numeral=m),"function"==typeof define&&define.amd&&define([],function(){return m})}).call(this);

function popUp(URL) {
    day = new Date();
    id = day.getTime();
    eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=1,statusbar=0,menubar=0,resizable=1,width=700,height=500,left = 150,top = 150');");
}
$( document ).ready( function(){

    $('.blog-article ul br').remove();

    // clean up youtube embeds to add responsiv iframe support and a clean iframe
    var youtube_videos = $('iframe[src*="youtube"], iframe[src*="vimeo"]');
    $(youtube_videos).each(function(index, obj){
        $(this).wrap('<div class="videoWrapper"></div>');
        $(this).attr('frameborder','0');
        $(this).attr('src',$(this).attr('src')+'?autoplay=0&controls=1&rel=0&showinfo=0&autohide=1');
    });

    $('.modal_dlg').click(function(event){
        var $modal_link = $(this).attr('href');
        popUp($modal_link);
        event.preventDefault();
    });

    $('.article-content a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if(!a.test(this.href)) {
           $(this).click(function(event) {
               event.preventDefault();
               event.stopPropagation();
               window.open(this.href, '_blank');
           });
        }
    });

    // toggle share buttons
    $('.inverter').click(function(event){
        $('.invertable').toggleClass('hidden');
        event.preventDefault();
    });

    // spinbox used in shopping cart quantity
    $('.spinbox').spinbox({'min':1,'max':10});

    // todo - fix this code to support multiple cart items and dynamic cart
    $('.spinbox').on('changed.fu.spinbox', function () {
        var qty = $(this).spinbox('value');
        var price = $(this).attr('data-price');
        var totalPrice = parseInt(qty) * parseInt(price);

        var totalString = numeral(totalPrice).format('0,0.00');

        $('.item-row-price').html(totalString);
        $('#cart-total-amount').html(totalString);
    });

    // waza form

    var wazaInput = $('#evans_communitybundle_waza_WazaPackage input');
    var wazaPackages = $('#evans_communitybundle_waza_Packages input');

    function calculateWaza(){
        var khcTotal = 0;

        for(var i=0; i<wazaPackages.length; i++){
            if($(wazaPackages[i]).is(':checked')){
                khcTotal += 4000;
            }
        }

        return khcTotal;
    }

    $(wazaInput).prop('checked',true);

    $(wazaPackages).change(function (e) {
        console.log($(this));
        var khcTotal = calculateWaza();
        console.log('Total: ' + khcTotal);

        if(khcTotal <1){
            $(wazaInput).prop('checked',true);
            khcTotal = 30000;
        } else {
            $(wazaInput).prop('checked',false);
        }

        $('#form_totals').html(khcTotal);
    });

    $(wazaInput).change(function(e){
        var khcTotal = 30000;

        if($(this).is(':checked')){
            $('#evans_communitybundle_waza_Packages input').prop('checked',false);
        } else {
            $('#evans_communitybundle_waza_Packages input').prop('checked',true);
            khcTotal = calculateWaza();
        }

        $('#form_totals').html(khcTotal);
    });

    $('.searchmenu a').click(function(e){
        $('.seaarch-widget').addClass('expanded');
        $('#search-input').focus();
        $('.searchmenu').fadeOut(100);
        e.preventDefault();

    });

    $('#search-close').click(function(e){
        $('.seaarch-widget').removeClass('expanded');
        $('.searchmenu').fadeIn(100);
    });

    // send feedback
    $('#submit-contact').click(function(e){
        var button = $(this);

        if($(button).hasClass('sending') || $(button).hasClass('send-success')){
            return false;
        }

        $(button).addClass('sending');
        $(button).html('Sending...');

        var jqxhr = $.post( "/feedback", $( "#contact-form" ).serialize())
        .done(function(response) {
            if(response.status == 'success'){
                $(button).removeClass('sending');
                $('#submit-contact').html('<i class="fa fa-check-circle-o"></i> Thank you!');
                $('#submit-contact').addClass('send-success');
            } else {
                $(button).removeClass('sending');
                $(button).removeClass('send-success');
                $(button).html('Failed! Try Again');
            }
        })
        .fail(function() {
            $(button).removeClass('sending');
            $(button).removeClass('send-success');
            $(button).html('Failed! Try Again');
        })
    });

    // remove empty tags
    $('.full-event-details p').each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
            $this.remove();
    });

    $('p').removeAttr('style');

});