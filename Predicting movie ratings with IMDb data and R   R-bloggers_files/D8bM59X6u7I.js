/*!CK:2603764381!*//*1445221894,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["MnTfQ"]); }

__d("ImageExtensions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best"};},null,{});
__d("PrivacyConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_OPEN_INVITE:854618297899786,EVENT_GUESTS_AND_FRIENDS:1439959856260766,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},EventExpansion:{NONE:0,EVENT_INVITEES:1,EVENT_GROUP:2},ExpansionType:{NONE:0,TAGS_ONLY:1,EVENT_INVITEES_ONLY:2,EVENT_GROUP_ONLY:3,TAGS_AND_EVENT_INVITEES:4,TAGS_AND_EVENT_GROUP:5}};},null,{});
__d("PUWMethods",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DRAGDROP:"dragdrop",FILE_SELECTOR:"file_selector",VAULT:"vault",RECENT_PHOTOS:"recent_photos",PHOTOS_OF_YOU:"photos_of_you",METHOD_EDITOR:"editor",SUGGESTIONS:"suggestions",CAMERA:"camera",COPYPASTE:"copypaste"};},null,{});
__d("VideoCreatorProductType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,MULTIMEDIA_POSTS:9};},null,{});
__d('NotificationPhotoThumbnail',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){if(!j.media||!j.style_list||!j.style_list.length)return null;switch(j.style_list[0]){case 'new_album':case 'album':case 'application':case 'photo':case 'video':case 'video_autoplay':case 'video_inline':return j.media.image;default:return null;}}var i={getThumbnail:function(j,k,l){var m;if(j&&j.length){j.some(function(q){m=h(q);if(m)return true;return false;});if(m)return m;}if(l){var n=l.relevant_comments;if(n&&n.length){var o=n[0].attachments;if(o&&o.length){m=h(o[0]);if(m)return m;}}}if(k){var p=k.attachments;if(p&&p.length)return h(p[0]);}return null;}};f.exports=i;},null);
__d('NotificationListPropTypes',['React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes,j={negativeTracking:i.object,tracking:i.string,useChevron:i.bool,chevronType:i.string,notifs:i.object,afterScroll:i.func,onChevronShow:i.func,onChevronHide:i.func,canFetchMore:i.bool,hiddenState:i.object,readState:i.object,showingChevron:i.bool,paused:i.bool,maxHeight:i.number,shouldScroll:i.bool,upsell:i.object};f.exports=j;},null);
__d('List.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'List',propTypes:{border:k.oneOf(['none','light','medium','dark']),spacing:k.oneOf(['none','small','medium','large']),direction:k.oneOf(['vertical','horizontal']),valign:k.oneOf(['baseline','top','middle','bottom']),edgepadding:k.bool},getDefaultProps:function(){return {border:'medium',spacing:'medium',direction:'vertical',valign:'top'};},render:function(){var m=this.props.border,n=this.props.direction,o=this.props.spacing,p=n==='horizontal'&&this.props.valign,q,r,s;q=(n==='vertical'?"_4kg":'')+(n==='horizontal'?' '+"_4ki":'')+(p==='top'?' '+"_509-":'')+(p==='middle'?' '+"_509_":'')+(p==='bottom'?' '+"_50a0":'');if(o!=='none'||m!=='none')r=(m==='none'?"_6-i":'')+(m==='light'?' '+"_4ks":'')+(m==='medium'?' '+"_4kt":'')+(m==='dark'?' '+"_4ku":'');if(o!=='none')s=(!this.props.edgepadding?"_6-h":'')+(o==='small'?' '+"_704":'')+(o==='medium'?' '+"_6-j":'')+(o==='large'?' '+"_703":'');var t=j("uiList",q,r,s);return (h.createElement('ul',babelHelpers._extends({},this.props,{className:j(this.props.className,t)}),this.props.children));}});f.exports=l;},null);
__d('XUINotice.react',['React','Image.react','XUICloseButton.react','cx','fbt','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p={notify:{altText:l._("Notice"),className:null,iconSrc:m('/images/deprecated/glyphs/flat/info-flat_m.png')},success:{altText:l._("Success"),className:"_3qh4",iconSrc:m('/images/deprecated/glyphs/flat/checkmark_white_m.png')},warn:{altText:l._("Warning"),className:"_585o",iconSrc:m('/images/deprecated/glyphs/flat/error-flat_m.png')}},q=h.createClass({displayName:'XUINotice',propTypes:{onDismiss:o.func,use:o.oneOf(Object.keys(p)),size:o.oneOf(['medium','small'])},getDefaultProps:function(){return {use:'notify',size:'medium'};},render:function(){var r=this.props,s=r.children,t=r.className,u=r.onDismiss,v=r.use,w=babelHelpers.objectWithoutProperties(r,['children','className','onDismiss','use']),x=p[v];t=n("_585n",x.className,t);var y=null;if(u)y=h.createElement(j,{className:"_585q",href:'#',onClick:u});var z="_585r"+(u?' '+"_2i-a":'')+(this.props.size==='medium'?' '+"_50f4":'')+(this.props.size==='small'?' '+"_50f3":'');return (h.createElement('div',babelHelpers._extends({},w,{className:t}),h.createElement(i,{alt:x.altText,className:"_585p",src:x.iconSrc}),y,h.createElement('div',{className:z},s)));}});f.exports=q;},null);
__d('BanzaiNectar',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){return {log:function(l,m,n){var o={e:m,a:n};h.post('nectar:'+l,o,k);}};}var j=i();j.create=i;f.exports=j;},null);
__d('PagesEventObserver',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='pages_client_logging',j={VITAL_WAIT:h.VITAL_WAIT,logData_DEPRECATED:function(k,l){var m={delay:l||h.VITAL_WAIT};h.post(i,k,m);},notify:function(event,k,l,m,n){var o=babelHelpers._extends({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||h.VITAL_WAIT};h.post(i,o,p);}};f.exports=j;},null);
__d('whitelistObjectKeys',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k={},l=Array.isArray(j)?j:Object.keys(j);for(var m=0;m<l.length;m++)if(typeof i[l[m]]!=='undefined')k[l[m]]=i[l[m]];return k;}f.exports=h;},null);
__d('ModalMask',['DOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=0,k={show:function(){j++;if(!i){i=h.create('div',{id:'modalMaskOverlay'});h.appendContent(document.body,i);}},hide:function(){if(j){j--;if(!j&&i){h.remove(i);i=null;}}},getNode:function(){return i;}};f.exports=k;},null);
__d('AccessibilityLogger',['AsyncSignal','Cookie'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function(){var k=j.DEFAULT,l=i.get(j.COOKIE);if(l){l=JSON.parse(l);for(var m in k)if(m in l)k[m]=l[m];}return k;},logKey:function(k,l){var m=j.getCookie();m[k]++;var n=Date.now();if(n-m[k+'-ts']>j.DECAY_MS){new h('/ajax/accessibilitylogging',{eventName:l,times_pressed:m[k]}).send();m[k+'-ts']=n;m[k]=0;}i.set(j.COOKIE,JSON.stringify(m));},logHCM:function(){j.logKey('hcm','hcm_users');},logSRKey:function(){j.logKey('sr','sr_users');},logJKKey:function(){j.logKey('jk','jk_users');},logFocusIn:function(){j.logKey('kb','kb_users');}};f.exports=j;},null);
__d('DOMClone',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={shallowClone:function(j){return i(j,false);},deepClone:function(j){return i(j,true);}};function i(j,k){var l=j.cloneNode(k);if(typeof l.__FB_TOKEN!=='undefined')delete l.__FB_TOKEN;return l;}f.exports=h;},null);
__d('FileInput',['ArbiterMixin','DOM','DOMClone','Event','Focus','Keys','UserAgent_DEPRECATED','cx','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s=n.ie();q=babelHelpers.inherits(t,p(h));r=q&&q.prototype;function t(u,v,w){'use strict';r.constructor.call(this);this.container=u;this.control=v;var x=i.scry(this.container,'a')[0];x&&x.removeAttribute('href');var y=i.create('div',{className:"_3jk"},w);i.appendContent(this.control,y);this._boundHandleChange=this._handleChange.bind(this);if(s)this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this);this._setInputElement(w);}t.prototype.getValue=function(){'use strict';return this.input.value;};t.prototype.getInput=function(){'use strict';return this.input;};t.prototype.getContainer=function(){'use strict';return this.container;};t.prototype.getControl=function(){'use strict';return this.control;};t.prototype.clear=function(){'use strict';if(s){var u=j.deepClone(this.input);i.replace(this.input,u);this._setInputElement(u);}else this.input.value='';};t.prototype.destroy=function(){'use strict';this._focus.remove();this._focus=null;this._listener.remove();this._listener=null;if(s){this._IEKeyDownListener.remove();this._IEKeyDownListener=null;}this.container=null;this.control=null;this.input=null;};t.prototype._setInputElement=function(u){'use strict';this.input=u;this._focus&&this._focus.remove();this._focus=l.relocate(u,this.control);this._listener&&this._listener.remove();this._listener=k.listen(u,'change',this._boundHandleChange);if(s){this._IEKeyDownListener&&this._IEKeyDownListener.remove();this._IEKeyDownListener=k.listen(u,'keydown',this._boundHandleIEKeyDown);}};t.prototype._handleChange=function(event){'use strict';this.inform('change',event);var u=this.input.form;if(u&&s<9)k.fire(u,'change',event);};t.prototype._handleIEKeyDown=function(event){'use strict';if(event.keyCode===m.RETURN){event.preventDefault();var u=document.createEvent('MouseEvents');u.initEvent('click',true,true);this.input.dispatchEvent(u);}};f.exports=t;},null);
__d('VideoPermalinkURI',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function(i){return h.parse(i)!==null;},parse:function(i){if(this.isValidLegacy(i)){var j=i.getQueryData();if(j.v)return {video_id:j.v,set_token:j.set};return null;}var k=i.getPath();if(k[k.length-1]==='/')k=k.substring(0,k.length-1);var l=k.split('/');if(l.length>=3&&l[2]==='videos')if(l.length===4&&/^\d+$/.exec(l[3])!==null){return {video_id:l[3],set_token:null};}else if(l.length===5&&/^\d+$/.exec(l[4])!==null)return {video_id:l[4],set_token:l[3]};return null;},isValidLegacy:function(i){var j=i.getPath();if(j[j.length-1]==='/')j=j.substring(0,j.length-1);if(j==='/photo.php'||j==='/force_photo/photo.php'||j==='/photo'||j==='/force_photo/photo/index.php'||j==='/photo/index.php'||j==='/force_photo/photo'||j==='/video.php'||j==='/video/video.php')return true;return false;}};f.exports=h;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d('XUIBadge',['CSS','DOM','cx','invariant'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(n){return parseInt(n,10)===n;}function m(n){'use strict';this.target=n.target;this.count=n.count;this.maxcount=n.maxcount;}m.prototype.getCount=function(){'use strict';return this.count;};m.prototype.setCount=function(n){'use strict';!l(n)?k(0):undefined;!(n>=0)?k(0):undefined;this.count=n;h.conditionClass(this.target,'hidden_elem',this.count===0);if(n>this.maxcount){i.setContent(this.target,this.maxcount+'+');h.addClass(this.target,"_5ugi");}else{i.setContent(this.target,n);h.removeClass(this.target,"_5ugi");}};m.prototype.setLegacyContent=function(n){'use strict';if(typeof n==='string'){h.conditionClass(this.target,'hidden_elem',n==0);i.setContent(this.target,n);h.removeClass(this.target,"_5ugi");}else this.setCount(n);};m.prototype.increment=function(){'use strict';this.setCount(this.getCount()+1);};f.exports=m;},null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n,o,p){'use strict';this.$VideoUploadFile1=m;this.$VideoUploadFile2=n;this.$VideoUploadFile3=o;this.$VideoUploadFile4=p;}l.fromFile=function(m){'use strict';var n=l.getExtensionFromFileName(m.name);return new this(null,m,m.size,n);};l.fromFileInput=function(m){'use strict';var n=null,o=null,p=l.getExtensionFromFileInput(m);if(k.supportsFileAPI()&&m.files.length){n=m.files[0];o=n.size;}return new this(m,n,o,p);};l.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};l.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};l.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};l.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};l.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===i.GIF)return j.ANIMATED_GIFS;return j.CORE_VIDEOS;};l.prototype.getChunk=function(m,n){'use strict';return this.$VideoUploadFile2?h.call(this.$VideoUploadFile2,m,n):null;};l.getExtensionFromFileInput=function(m){'use strict';return this.getExtensionFromFileName(m.value);};l.getExtensionFromFileName=function(m){'use strict';return m.indexOf('.')!=-1?m.split('.').pop().toLowerCase():'';};f.exports=l;},null);
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null,{});
__d("XPrivacyRemindersDismissController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/reminders\/dismiss\/",{type:{type:"String",required:true},log_plite:{type:"Bool",defaultValue:false}});},null,{});