!function e(t,n,o){function s(i,a){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!a&&l)return l(i,!0);if(r)return r(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return s(n?n:e)},u,u.exports,e,t,n,o)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<o.length;i++)s(o[i]);return s}({1:[function(e){function t(){var e=function(){var t=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,n=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,o=/[^-+\dA-Z]/g,s=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e};return function(r,i,a){var l=e;if(1!==arguments.length||"[object String]"!==Object.prototype.toString.call(r)||/\d/.test(r)||(i=r,r=void 0),r=r?new Date(r):new Date,isNaN(r))throw SyntaxError("invalid date");i=String(l.masks[i]||i||l.masks["default"]),"UTC:"===i.slice(0,4)&&(i=i.slice(4),a=!0);var c=a?"getUTC":"get",u=r[c+"Date"](),p=r[c+"Day"](),h=r[c+"Month"](),d=r[c+"FullYear"](),f=r[c+"Hours"](),m=r[c+"Minutes"](),g=r[c+"Seconds"](),y=r[c+"Milliseconds"](),b=a?0:r.getTimezoneOffset(),v={d:u,dd:s(u),ddd:l.i18n.dayNames[p],dddd:l.i18n.dayNames[p+7],m:h+1,mm:s(h+1),mmm:l.i18n.monthNames[h],mmmm:l.i18n.monthNames[h+12],yy:String(d).slice(2),yyyy:d,h:f%12||12,hh:s(f%12||12),H:f,HH:s(f),M:m,MM:s(m),s:g,ss:s(g),l:s(y,3),L:s(y>99?Math.round(y/10):y),t:12>f?"a":"p",tt:12>f?"am":"pm",T:12>f?"A":"P",TT:12>f?"AM":"PM",Z:a?"UTC":(String(r).match(n)||[""]).pop().replace(o,""),o:(b>0?"-":"+")+s(100*Math.floor(Math.abs(b)/60)+Math.abs(b)%60,4),S:["th","st","nd","rd"][u%10>3?0:(u%100-u%10!=10)*u%10]};return i.replace(t,function(e){return e in v?v[e]:e.slice(1,e.length-1)})}}();e.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},e.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},Date.prototype.format=function(t,n){return e(this,t,n)},Array.prototype.pluck=function(e){return this.map(function(t){return t[e]})},Array.prototype.where=function(e){return this.map(function(t){return t[e[0]]})},Array.prototype.unique=function(){for(var e={},t=[],n=0,o=this.length;o>n;++n)e.hasOwnProperty(this[n])||(t.push(this[n]),e[this[n]]=1);return t},Array.prototype.count=function(){var e=0;return this.forEach(function(){e++}),e},Array.prototype.max=function(e){var t=0,n=0;return this.forEach(function(e,o){e>t&&(t=e,n=o)}),"key"===e?n:t},Array.prototype.maxTimeStamp=function(){var e=new Date("0");return this.forEach(function(t){new Date(t)>e&&(e=t)}),e},Window.Application=new n,Backbone.history.start()}var n=(e("hbsfy/runtime"),e("./classes/routers/Application.js"));t()},{"./classes/routers/Application.js":21,"hbsfy/runtime":36}],2:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<nav>\n		<button id="back">weekoverzicht</button>\n		<button id="scores"><p class="hidden">scores</p></button>\n	</nav>\n	<section>\n		<header id="date">\n			<h1>\n				<p>Dag</p><p id="day-number">1</p>\n			</h1>\n			<h2>\n				18/09/2015\n			</h2>\n		</header>\n		<section>\n			<header id="object-of-the-day">\n				<h1>\n					object van de dag\n				</h1>\n			</header>\n			<span id="object-preview">\n				<p>\n					stoel\n				</p>\n			</span>\n		</section>\n		<section>\n				<header class="hidden">\n					<h1>dag overzicht</h1>\n				</header>\n				<section class="fotos"></section>\n				<article class="submit-today">\n					<header class="hidden">\n						<h1>pak een foto!</h1>\n					</header>\n					<p class="call-to-action">\n						Je kan nog 2e worden voor 2 punten!\n					</p>\n					<form id="file-form" method="POST">\n  				<input type="file" id="imageInput" name="imageInput" class="imageInput hidden" />\n					</form>\n						<button class="foto">\n						neem een foto!\n					</button>\n\n\n				</article>\n			</section>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":36}],3:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,o){var s,r="function",i=t.helperMissing,a=this.escapeExpression;return'<article class="submission-holder">\n	<header class="hidden">\n		<h1>eerste plaats</h1>\n	</header>\n	<span class="score-banner">\n		<p>\n			15\n		</p>\n	</span>\n	<span class="submission-details">\n		<img class="uploaded" src="assets/usergenerated/pictures/'+a((s=null!=(s=t.fotoname||(null!=e?e.fotoname:e))?s:i,typeof s===r?s.call(e,{name:"fotoname",hash:{},data:o}):s))+'" alt="ingave">\n		<span class="submission-user-details">\n			<span class="user-profile-photo" >\n				<img src="assets/usergenerated/profilepictures/lala.png" alt="profiel foto">\n			</span>\n			<p>\n				eennaamvandeelnemer\n			</p>\n			<p>\n				verifiëren\n			</p>\n			<button>\n			</button>\n			<button>\n			</button>\n		</span>\n	</span>\n</article>\n'},useData:!0})},{"hbsfy/runtime":36}],4:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,o){var s,r="function",i=t.helperMissing,a=this.escapeExpression;return'<article class="group">\n	<header>\n		<h1 class="goGroup">\n			'+a((s=null!=(s=t.groupname||(null!=e?e.groupname:e))?s:i,typeof s===r?s.call(e,{name:"groupname",hash:{},data:o}):s))+'\n		</h1>\n	</header>\n	<span id="players">\n\n		<figure>\n			<a href="#" class="user">\n				<span>\n					<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="'+a((s=null!=(s=t.username||(null!=e?e.username:e))?s:i,typeof s===r?s.call(e,{name:"username",hash:{},data:o}):s))+'" />\n				</span>\n			</a>\n			<figcaption>\n				<p>'+a((s=null!=(s=t.username||(null!=e?e.username:e))?s:i,typeof s===r?s.call(e,{name:"username",hash:{},data:o}):s))+'</p>\n			</figcaption>\n		</figure>\n\n		<figure>\n			<a href="#" class="user">\n				<span>\n					<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="'+a((s=null!=(s=t.username||(null!=e?e.username:e))?s:i,typeof s===r?s.call(e,{name:"username",hash:{},data:o}):s))+'" />\n				</span>\n			</a>\n			<figcaption>\n				<p>'+a((s=null!=(s=t.username||(null!=e?e.username:e))?s:i,typeof s===r?s.call(e,{name:"username",hash:{},data:o}):s))+'</p>\n			</figcaption>\n		</figure>\n\n			<figure>\n				<a href="#" class="addMe">\n					<span class="empty-slot">\n					</span>\n				</a>\n				<figcaption>\n					<p>Inschrijven</p>\n				</figcaption>\n			</figure>\n</article>\n'},useData:!0})},{"hbsfy/runtime":36}],5:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<nav>\n\n		<button id="back">afmelden</button>\n\n		<button id="scores"><p class="hidden">scores</p></button>\n	</nav>\n	<section>\n		<header id="week-overview-header">\n			<h1 class="hidden">\n				week overzicht\n			</h1>\n		</header>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n	</section>\n'},useData:!0})},{"hbsfy/runtime":36}],6:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<section>\n	<a class="logout" href="index.php?page=logout">Logout</a>\n	<header id="group-page">\n		<h1>\n			<span>Kies een groep of maak er één.</span>\n		</h1>\n	</header>\n\n	<section>\n		<header class="hidden">\n			<h1>\n				zoeken\n			</h1>\n		</header>\n 			<div id="new-group">\n 				<input type="text" name="groupname" class="groupname" placeholder="nieuwe groep" value="">\n				<button id="add-new-group" class="add" type="submit"><p>nieuwe groep</p></button>\n			</div>\n	</section>\n\n	<section>\n		<header class="hidden">\n			<h1>\n				groepen\n			</h1>\n		</header>\n		<input id="search-group" type="text" name="filter" placeHolder="Zoeken..." class="filter"/>\n\n		<span id="groups" class="groups">\n		</span>\n	</section>\n</section\n'},useData:!0})},{"hbsfy/runtime":36}],7:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,o){var s,r="function",i=t.helperMissing,a=this.escapeExpression;return'<figure>\n	<span>\n		<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="'+a((s=null!=(s=t.username||(null!=e?e.username:e))?s:i,typeof s===r?s.call(e,{name:"username",hash:{},data:o}):s))+'" />\n	</span>\n	<figcaption>\n		<p>'+a((s=null!=(s=t.username||(null!=e?e.username:e))?s:i,typeof s===r?s.call(e,{name:"username",hash:{},data:o}):s))+"</p>\n	</figcaption>\n</figure>\n"},useData:!0})},{"hbsfy/runtime":36}],8:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,o){var s,r="function",i=t.helperMissing,a=this.escapeExpression;return'	<nav>\n		<button id="back">terug</button>\n		<button id="scores"><p class="hidden">scores</p></button>\n	</nav>\n	<section id="contestant">\n		<header id="contestant-header">\n			<h1>\n				'+a((s=null!=(s=t.username||(null!=e?e.username:e))?s:i,typeof s===r?s.call(e,{name:"username",hash:{},data:o}):s))+'\n			</h1>\n		</header>\n		<span id="contestant-profile-photo">\n			<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="foto" />\n		</span>\n		<p id="score-banner">\n			total score\n		</p>\n		<p id="total-score-holder">\n			'+a((s=null!=(s=t.score||(null!=e?e.score:e))?s:i,typeof s===r?s.call(e,{name:"score",hash:{},data:o}):s))+'\n		</p>\n	</section>\n	<section>\n		<header class="hidden">\n			<h1>\n				dagen overzicht\n			</h1>\n		</header>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="foto">\n			</span>\n		</article>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="foto">\n			</span>\n		</article>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="foto">\n			</span>\n		</article>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+a((s=null!=(s=t.picture||(null!=e?e.picture:e))?s:i,typeof s===r?s.call(e,{name:"picture",hash:{},data:o}):s))+'" alt="foto">\n			</span>\n		</article>\n	</section>\n'},useData:!0})},{"hbsfy/runtime":36}],9:[function(e,t){var n=e("../models/Challenge.js"),o=Backbone.Collection.extend({model:n,url:"api/challenges/"});t.exports=o},{"../models/Challenge.js":15}],10:[function(e,t){var n=e("../models/Color.js"),o=Backbone.Collection.extend({model:n,url:"api/colors/"});t.exports=o},{"../models/Color.js":16}],11:[function(e,t){var n=e("../models/Foto.js"),o=Backbone.Collection.extend({model:n,url:"api/fotos/",initialize:function(e){e&&(this.format=e.format)},methodUrl:function(e){return"read"===e&&this.format?void(this.url="api/fotos/"+this.format):void(this.url="api/fotos")},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=o},{"../models/Foto.js":17}],12:[function(e,t){var n=e("../models/Group.js"),o=Backbone.Collection.extend({model:n,url:"api/group/",initialize:function(e){e&&(console.log(this.groupname),this.groupname=e.groupname)},comparator:function(e){return e.get("groupname")},methodUrl:function(e){return"read"===e&&this.groupname?void(this.url="api/group/"+this.groupname):void(this.url="api/group")},filterGroups:function(e){return this.filter(function(t){return t.get("groupname").toLowerCase().indexOf(e)>-1||t.get("username").toLowerCase().indexOf(e)>-1})},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=o},{"../models/Group.js":18}],13:[function(e,t){var n=e("../models/Object.js"),o=Backbone.Collection.extend({model:n,url:"api/objects/"});t.exports=o},{"../models/Object.js":19}],14:[function(e,t){var n=e("../models/User.js"),o=Backbone.Collection.extend({model:n,url:"api/users/",initialize:function(e){e&&(this.par=e.user)},methodUrl:function(e){return"read"===e&&this.par?void(this.url="api/users/"+this.par):void(this.url="api/users")},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=o},{"../models/User.js":20}],15:[function(e,t){var n=Backbone.Model.extend({defaults:{group_id:"",color_id:"",object_id:"",day:""},urlRoot:"api/challenges"});t.exports=n},{}],16:[function(e,t){var n=Backbone.Model.extend({urlRoot:"api/colors"});t.exports=n},{}],17:[function(e,t){var n=Backbone.Model.extend({defaults:{fotoname:"",day:"",user_id:"",group_id:""},urlRoot:"api/fotos"});t.exports=n},{}],18:[function(e,t){var n=Backbone.Model.extend({defaults:{day:"",start_date:"",groupname:""},urlRoot:"api/group"});t.exports=n},{}],19:[function(e,t){var n=Backbone.Model.extend({urlRoot:"api/objects"});t.exports=n},{}],20:[function(e,t){var n=Backbone.Model.extend({defaults:{username:"",picture:"",password:"",role:"",group_id:0},urlRoot:"api/users"});t.exports=n},{}],21:[function(e,t){var n=e("../views/HomeView.js"),o=e("../views/GroepDetailView.js"),s=e("../views/DayDetailView.js"),r=e("../views/UserDetailView.js"),i=Backbone.Router.extend({routes:{home:"home","group/:groupname":"group",day:"day","user/:id":"user","*actions":"default"},logout:function(){window.location.replace("index.php")},empty:function(){$(".container").empty()},home:function(){this.empty(),this.home=new n,$(".container").append(this.home.render().el)},group:function(e){this.empty(),this.group=new o({groupname:e}),$(".container").append(this.group.render().el)},day:function(){this.empty(),this.day=new s,$(".container").append(this.day.render().el)},user:function(e){this.empty(),this.user=new r({id:e}),$(".container").append(this.user.render().el)},"default":function(){this.navigate("home",{trigger:!0})}});t.exports=i},{"../views/DayDetailView.js":22,"../views/GroepDetailView.js":24,"../views/HomeView.js":26,"../views/UserDetailView.js":27}],22:[function(e,t){var n=e("../../../_hbs/day.hbs"),o=e("../collections/FotoCollection.js"),s=e("./FotoView.js"),r=Backbone.View.extend({template:n,events:{"click .foto":"clickFoto","change #imageInput":"submitFoto"},initialize:function(){this.fotoCollection=new o,this.listenTo(this.fotoCollection,"sync",this.renderFotos),this.fotoCollection.fetch()},renderFotos:function(){this.fotoCollection.forEach(this.renderFoto,this)},renderFoto:function(e){this.$fotos.empty();var t=new s({model:e});this.$fotos.append(t.render().el)},clickFoto:function(e){e.preventDefault();var t=$("#imageInput");t.click()},submitFoto:function(e){e.preventDefault();var t=new FormData(document.getElementById("file-form"));t.append("action","create"),$.ajax({url:"index.php?page=add_object",type:"POST",data:t,dataType:"json",processData:!1,contentType:!1,context:this,success:function(){document.getElementById("file-form").reset(),this.initialize()},error:function(e){console.log(e.responseText)}}),console.log(t)},render:function(){return this.$el.html(this.template),this.$fotos=this.$el.find(".fotos"),this}});t.exports=r},{"../../../_hbs/day.hbs":2,"../collections/FotoCollection.js":11,"./FotoView.js":23}],23:[function(e,t){var n=e("../../../_hbs/foto.hbs"),o=Backbone.View.extend({template:n,render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=o},{"../../../_hbs/foto.hbs":3}],24:[function(e,t){var n=e("../../../_hbs/groep_detail.hbs"),o=e("../models/Group.js"),s=e("../models/Color.js"),r=e("../models/Object.js"),i=e("../collections/ChallengeCollection.js"),a=e("../collections/ColorCollection.js"),l=e("../collections/ObjectCollection.js"),c=Backbone.View.extend({template:n,section:"section",className:"groepdetail",events:{"click .day":"clickDay"},initialize:function(e){this.challengeCollection=new i,this.colorCollection=new a,this.objectCollection=new l,this.listenTo(this.colorCollection,"sync",this.setColor),this.listenTo(this.colorCollection,"sync",this.setChallenge),this.listenTo(this.objectCollection,"sync",this.setObject),this.colorCollection.fetch(),this.challengeCollection.fetch(),this.objectCollection.fetch(),e&&e.groupname&&(this.model=new o,this.model.set("groupname",e.groupname),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("home",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render))},clickDay:function(e){e.preventDefault(),Window.Application.navigate("day"),{trigger:!0}},setColor:function(){this.colorLastId=this.colorCollection.length,this.randomColorId=Math.floor(Math.random()*this.colorLastId)+1,console.log(this.randomColorId),this.randomColor=new s,this.randomColor.set("id",this.randomColorId),this.randomColor.fetch({success:function(e,t){0===t.length&&console.log("fout")}}),this.listenTo(this.randomColor,"sync",this.render)},setObject:function(){this.objectLastId=this.objectCollection.length,this.randomObjectId=Math.floor(Math.random()*this.objectLastId)+1,console.log(this.randomObjectId),this.randomObject=new r,this.randomObject.set("id",this.randomObjectId),this.randomObject.fetch({success:function(e,t){0===t.length&&console.log("fout")}}),this.listenTo(this.randomObject,"sync",this.render),console.log(this.randomObject)},setChallenge:function(){this.challengeLastId=this.challengeCollection.length},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=c},{"../../../_hbs/groep_detail.hbs":5,"../collections/ChallengeCollection.js":9,"../collections/ColorCollection.js":10,"../collections/ObjectCollection.js":13,"../models/Color.js":16,"../models/Group.js":18,"../models/Object.js":19}],25:[function(e,t){var n=e("../../../_hbs/groep.hbs"),o=e("../collections/UserCollection.js"),s=e("../collections/GroupCollection.js"),r=e("./UserGroupView.js"),i=e("../models/User.js"),a=Backbone.View.extend({template:n,className:"groep",tagName:"div",events:{"click .goGroup":"clickGroup","click .addMe":"clickAdd","click .user":"clickUser"},initialize:function(){this.user=new o({user:"self"}),this.listenTo(this.user,"sync",this.setGroup),this.user.fetch(),this.groupCollection=new s,this.listenTo(this.groupCollection,"sync",this.renderGroups),this.groupCollection.fetch(),this.userNow=new i},renderGroups:function(){this.$players.empty(),this.groupCollection.forEach(this.renderGroup,this)},renderGroup:function(e){console.log(e);var t=new r({model:e});this.$players.append(t.render().el)},setGroup:function(){this.userNow.set("id",this.user.models[0].attributes.id),this.userNow.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("home",{trigger:!0})}})},clickAdd:function(e){e.preventDefault(),console.log(this.model.get("id")),this.userNow.set("group_id",this.model.get("id")),this.userNow.save(),Window.Application.navigate("group/"+this.model.get("id"),{trigger:!0})},clickGroup:function(e){e.preventDefault(),Window.Application.navigate("group/"+this.model.get("id"),{trigger:!0})},clickUser:function(e){e.preventDefault(),Window.Application.navigate("user/"+this.model.get("id"),{trigger:!0})},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$players=this.$el.find(".players"),this}});t.exports=a},{"../../../_hbs/groep.hbs":4,"../collections/GroupCollection.js":12,"../collections/UserCollection.js":14,"../models/User.js":20,"./UserGroupView.js":28}],26:[function(e,t){var n=e("../../../_hbs/home.hbs"),o=e("../collections/GroupCollection.js"),s=e("../collections/UserCollection.js"),r=e("../views/GroepOverzichtView.js"),i=e("../models/User.js"),a=Backbone.View.extend({template:n,tagName:"section",className:"groepen",events:{"click .add":"clickAddGroup","input .filter":"inputFilter"},initialize:function(){this.user=new s({user:"self"}),this.listenTo(this.user,"sync",this.setGroup),this.user.fetch(),this.userNow=new i,this.groupCollection=new o,this.listenTo(this.groupCollection,"sync",this.renderGroups),this.groupCollection.fetch()},setGroup:function(){this.userNow.set("id",this.user.models[0].attributes.id),this.userNow.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("home",{trigger:!0})}})},clickAddGroup:function(e){e.preventDefault(),""===this.$el.find(".groupname").val()&&this.$el.find(".groupname").addClass("error"),this.groupCollection.create({groupname:this.$el.find(".groupname").val(),day:0,start_date:moment().format("YYYY-MM-DD")}),this.userNow.set("group_id",this.groupCollection.length),this.userNow.save(),Window.Application.navigate("group/"+this.groupCollection.length,{trigger:!0})},inputFilter:function(e){e.preventDefault();var t=$(e.currentTarget).val().toLowerCase();""!==t?this.renderFilteredGroups(this.groupCollection.filterGroups(t)):this.groupCollection.fetch()},navigateTo:function(e){Window.Application.navigate(e,{trigger:!0})},renderFilteredGroups:function(e){this.$groups.empty(),e.forEach(this.renderGroup,this)},renderGroups:function(){this.$groups.empty(),this.groupCollection.forEach(this.renderGroup,this)},renderGroup:function(e){var t=new r({model:e});this.$groups.append(t.render().el)},render:function(){return this.$el.html(this.template),this.$groups=this.$el.find(".groups"),this}});t.exports=a},{"../../../_hbs/home.hbs":6,"../collections/GroupCollection.js":12,"../collections/UserCollection.js":14,"../models/User.js":20,"../views/GroepOverzichtView.js":25}],27:[function(e,t){var n=e("../../../_hbs/user_details.hbs"),o=e("../models/User.js"),s=Backbone.View.extend({template:n,initialize:function(e){e&&e.id&&(this.model=new o,this.model.set("id",e.id),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("home",{trigger:!0})}}),console.log(this.model),this.listenTo(this.model,"sync",this.render))},render:function(){return console.log(this.model.attributes),this.$el.html(this.template(this.model.attributes)),this}});t.exports=s},{"../../../_hbs/user_details.hbs":8,"../models/User.js":20}],28:[function(e,t){var n=e("../../../_hbs/player.hbs"),o=Backbone.View.extend({template:n,render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=o},{"../../../_hbs/player.hbs":7}],29:[function(e,t,n){"use strict";var o=e("./handlebars/base"),s=e("./handlebars/safe-string")["default"],r=e("./handlebars/exception")["default"],i=e("./handlebars/utils"),a=e("./handlebars/runtime"),l=function(){var e=new o.HandlebarsEnvironment;return i.extend(e,o),e.SafeString=s,e.Exception=r,e.Utils=i,e.escapeExpression=i.escapeExpression,e.VM=a,e.template=function(t){return a.template(t,e)},e},c=l();c.create=l,c["default"]=c,n["default"]=c},{"./handlebars/base":30,"./handlebars/exception":31,"./handlebars/runtime":32,"./handlebars/safe-string":33,"./handlebars/utils":34}],30:[function(e,t,n){"use strict";function o(e,t){this.helpers=e||{},this.partials=t||{},s(this)}function s(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new i("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(t,n){var o=n.inverse,s=n.fn;if(t===!0)return s(this);if(t===!1||null==t)return o(this);if(u(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var i=g(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return s(t,n)}),e.registerHelper("each",function(e,t){if(!t)throw new i("Must pass iterator to #each");var n,o,s=t.fn,a=t.inverse,l=0,c="";if(t.data&&t.ids&&(o=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),p(e)&&(e=e.call(this)),t.data&&(n=g(t.data)),e&&"object"==typeof e)if(u(e))for(var h=e.length;h>l;l++)n&&(n.index=l,n.first=0===l,n.last=l===e.length-1,o&&(n.contextPath=o+l)),c+=s(e[l],{data:n});else for(var d in e)e.hasOwnProperty(d)&&(n&&(n.key=d,n.index=l,n.first=0===l,o&&(n.contextPath=o+d)),c+=s(e[d],{data:n}),l++);return 0===l&&(c=a(this)),c}),e.registerHelper("if",function(e,t){return p(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){p(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var o=g(t.data);o.contextPath=r.appendContextPath(t.data.contextPath,t.ids[0]),t={data:o}}return n(e,t)}),e.registerHelper("log",function(t,n){var o=n.data&&null!=n.data.level?parseInt(n.data.level,10):1;e.log(o,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}var r=e("./utils"),i=e("./exception")["default"],a="2.0.0";n.VERSION=a;var l=6;n.COMPILER_REVISION=l;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};n.REVISION_CHANGES=c;var u=r.isArray,p=r.isFunction,h=r.toString,d="[object Object]";n.HandlebarsEnvironment=o,o.prototype={constructor:o,logger:f,log:m,registerHelper:function(e,t){if(h.call(e)===d){if(t)throw new i("Arg not supported with multiple helpers");r.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){h.call(e)===d?r.extend(this.partials,e):this.partials[e]=t},unregisterPartial:function(e){delete this.partials[e]}};var f={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(f.level<=e){var n=f.methodMap[e];"undefined"!=typeof console&&console[n]&&console[n].call(console,t)}}};n.logger=f;var m=f.log;n.log=m;var g=function(e){var t=r.extend({},e);return t._parent=e,t};n.createFrame=g},{"./exception":31,"./utils":34}],31:[function(e,t,n){"use strict";function o(e,t){var n;t&&t.firstLine&&(n=t.firstLine,e+=" - "+n+":"+t.firstColumn);for(var o=Error.prototype.constructor.call(this,e),r=0;r<s.length;r++)this[s[r]]=o[s[r]];n&&(this.lineNumber=n,this.column=t.firstColumn)}var s=["description","fileName","lineNumber","message","name","number","stack"];o.prototype=new Error,n["default"]=o},{}],32:[function(e,t,n){"use strict";function o(e){var t=e&&e[0]||1,n=p;if(t!==n){if(n>t){var o=h[n],s=h[t];throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+s+").")}throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function s(e,t){if(!t)throw new u("No environment passed to template");if(!e||!e.main)throw new u("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var n=function(n,o,s,r,i,a,l,p,h){i&&(r=c.extend({},r,i));var d=t.VM.invokePartial.call(this,n,s,r,a,l,p,h);if(null==d&&t.compile){var f={helpers:a,partials:l,data:p,depths:h};l[s]=t.compile(n,{data:void 0!==p,compat:e.compat},t),d=l[s](r,f)}if(null!=d){if(o){for(var m=d.split("\n"),g=0,y=m.length;y>g&&(m[g]||g+1!==y);g++)m[g]=o+m[g];d=m.join("\n")}return d}throw new u("The partial "+s+" could not be compiled when running in runtime-only mode")},o={lookup:function(e,t){for(var n=e.length,o=0;n>o;o++)if(e[o]&&null!=e[o][t])return e[o][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:c.escapeExpression,invokePartial:n,fn:function(t){return e[t]},programs:[],program:function(e,t,n){var o=this.programs[e],s=this.fn(e);return t||n?o=r(this,e,s,t,n):o||(o=this.programs[e]=r(this,e,s)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=c.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler},s=function(t,n){n=n||{};var r=n.data;s._setup(n),!n.partial&&e.useData&&(r=l(t,r));var i;return e.useDepths&&(i=n.depths?[t].concat(n.depths):[t]),e.main.call(o,t,o.helpers,o.partials,r,i)};return s.isTop=!0,s._setup=function(n){n.partial?(o.helpers=n.helpers,o.partials=n.partials):(o.helpers=o.merge(n.helpers,t.helpers),e.usePartial&&(o.partials=o.merge(n.partials,t.partials)))},s._child=function(t,n,s){if(e.useDepths&&!s)throw new u("must pass parent depths");return r(o,t,e[t],n,s)},s}function r(e,t,n,o,s){var r=function(t,r){return r=r||{},n.call(e,t,e.helpers,e.partials,r.data||o,s&&[t].concat(s))};return r.program=t,r.depth=s?s.length:0,r}function i(e,t,n,o,s,r,i){var a={partial:!0,helpers:o,partials:s,data:r,depths:i};if(void 0===e)throw new u("The partial "+t+" could not be found");return e instanceof Function?e(n,a):void 0}function a(){return""}function l(e,t){return t&&"root"in t||(t=t?d(t):{},t.root=e),t}var c=e("./utils"),u=e("./exception")["default"],p=e("./base").COMPILER_REVISION,h=e("./base").REVISION_CHANGES,d=e("./base").createFrame;n.checkRevision=o,n.template=s,n.program=r,n.invokePartial=i,n.noop=a},{"./base":30,"./exception":31,"./utils":34}],33:[function(e,t,n){"use strict";function o(e){this.string=e}o.prototype.toString=function(){return""+this.string},n["default"]=o},{}],34:[function(e,t,n){"use strict";function o(e){return c[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);
return e}function r(e){return e instanceof l?e.toString():null==e?"":e?(e=""+e,p.test(e)?e.replace(u,o):e):e+""}function i(e){return e||0===e?f(e)&&0===e.length?!0:!1:!0}function a(e,t){return(e?e+".":"")+t}var l=e("./safe-string")["default"],c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,p=/[&<>"'`]/;n.extend=s;var h=Object.prototype.toString;n.toString=h;var d=function(e){return"function"==typeof e};d(/x/)&&(d=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)});var d;n.isFunction=d;var f=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===h.call(e):!1};n.isArray=f,n.escapeExpression=r,n.isEmpty=i,n.appendContextPath=a},{"./safe-string":33}],35:[function(e,t){t.exports=e("./dist/cjs/handlebars.runtime")},{"./dist/cjs/handlebars.runtime":29}],36:[function(e,t){t.exports=e("handlebars/runtime")["default"]},{"handlebars/runtime":35}]},{},[1]);
//# sourceMappingURL=app.js.map