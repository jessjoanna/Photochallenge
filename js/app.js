!function e(n,t,s){function o(r,i){if(!t[r]){if(!n[r]){var l="function"==typeof require&&require;if(!i&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[r]={exports:{}};n[r][0].call(u.exports,function(e){var t=n[r][1][e];return o(t?t:e)},u,u.exports,e,n,t,s)}return t[r].exports}for(var a="function"==typeof require&&require,r=0;r<s.length;r++)o(s[r]);return o}({1:[function(e){function n(){var e=function(){var n=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,o=function(e,n){for(e=String(e),n=n||2;e.length<n;)e="0"+e;return e};return function(a,r,i){var l=e;if(1!==arguments.length||"[object String]"!==Object.prototype.toString.call(a)||/\d/.test(a)||(r=a,a=void 0),a=a?new Date(a):new Date,isNaN(a))throw SyntaxError("invalid date");r=String(l.masks[r]||r||l.masks["default"]),"UTC:"===r.slice(0,4)&&(r=r.slice(4),i=!0);var c=i?"getUTC":"get",u=a[c+"Date"](),p=a[c+"Day"](),d=a[c+"Month"](),h=a[c+"FullYear"](),m=a[c+"Hours"](),f=a[c+"Minutes"](),g=a[c+"Seconds"](),y=a[c+"Milliseconds"](),b=i?0:a.getTimezoneOffset(),v={d:u,dd:o(u),ddd:l.i18n.dayNames[p],dddd:l.i18n.dayNames[p+7],m:d+1,mm:o(d+1),mmm:l.i18n.monthNames[d],mmmm:l.i18n.monthNames[d+12],yy:String(h).slice(2),yyyy:h,h:m%12||12,hh:o(m%12||12),H:m,HH:o(m),M:f,MM:o(f),s:g,ss:o(g),l:o(y,3),L:o(y>99?Math.round(y/10):y),t:12>m?"a":"p",tt:12>m?"am":"pm",T:12>m?"A":"P",TT:12>m?"AM":"PM",Z:i?"UTC":(String(a).match(t)||[""]).pop().replace(s,""),o:(b>0?"-":"+")+o(100*Math.floor(Math.abs(b)/60)+Math.abs(b)%60,4),S:["th","st","nd","rd"][u%10>3?0:(u%100-u%10!=10)*u%10]};return r.replace(n,function(e){return e in v?v[e]:e.slice(1,e.length-1)})}}();e.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},e.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},Date.prototype.format=function(n,t){return e(this,n,t)},Array.prototype.pluck=function(e){return this.map(function(n){return n[e]})},Array.prototype.where=function(e){return this.map(function(n){return n[e[0]]})},Array.prototype.unique=function(){for(var e={},n=[],t=0,s=this.length;s>t;++t)e.hasOwnProperty(this[t])||(n.push(this[t]),e[this[t]]=1);return n},Array.prototype.count=function(){var e=0;return this.forEach(function(){e++}),e},Array.prototype.max=function(e){var n=0,t=0;return this.forEach(function(e,s){e>n&&(n=e,t=s)}),"key"===e?t:n},Array.prototype.maxTimeStamp=function(){var e=new Date("0");return this.forEach(function(n){new Date(n)>e&&(e=n)}),e},Window.Application=new t,Backbone.history.start()}var t=(e("hbsfy/runtime"),e("./classes/routers/Application.js"));n()},{"./classes/routers/Application.js":24,"hbsfy/runtime":42}],2:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,s){var o,a="function",r=n.helperMissing,i=this.escapeExpression;return"<p>\n	"+i((o=null!=(o=n.groupname||(null!=e?e.groupname:e))?o:r,typeof o===a?o.call(e,{name:"groupname",hash:{},data:s}):o))+"\n</p>\n\n<p>\n	"+i((o=null!=(o=n.day||(null!=e?e.day:e))?o:r,typeof o===a?o.call(e,{name:"day",hash:{},data:s}):o))+'\n</p>\n\n<button class="add-day">\n	dag vorderen\n</button>\n'},useData:!0})},{"hbsfy/runtime":42}],3:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<nav>\n		<button id="back" class="back">weekoverzicht</button>\n		<button id="scores" class="scores"><p class="hidden">scores</p></button>\n	</nav>\n	<section>\n		<header id="date">\n			<h1>\n				<p>Dag</p><p id="day-number">1</p>\n			</h1>\n			<h2>\n				18/09/2015\n			</h2>\n		</header>\n		<section>\n			<header id="object-of-the-day">\n				<h1>\n					object van de dag\n				</h1>\n			</header>\n			<span id="object-preview">\n				<p>\n					stoel\n				</p>\n			</span>\n		</section>\n		<section>\n				<header class="hidden">\n					<h1>dag overzicht</h1>\n				</header>\n				<section class="fotos"></section>\n				<article class="submit-today">\n					<header class="hidden">\n						<h1>pak een foto!</h1>\n					</header>\n					<p class="call-to-action">\n						Je kan nog 2e worden voor 2 punten!\n					</p>\n					<form id="file-form" method="POST">\n  				<input type="file" id="imageInput" name="imageInput" class="imageInput hidden" />\n					</form>\n						<button class="foto">\n						neem een foto!\n					</button>\n\n\n				</article>\n			</section>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":42}],4:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,s){var o,a="function",r=n.helperMissing,i=this.escapeExpression;return'<article class="submission-holder">\n	<header class="hidden">\n		<h1>eerste plaats</h1>\n	</header>\n	<span class="score-banner">\n		<p>\n			15\n		</p>\n	</span>\n	<span class="submission-details">\n		<img class="uploaded" src="assets/usergenerated/pictures/'+i((o=null!=(o=n.fotoname||(null!=e?e.fotoname:e))?o:r,typeof o===a?o.call(e,{name:"fotoname",hash:{},data:s}):o))+'" alt="ingave">\n		<span class="submission-user-details">\n			<span class="user-profile-photo" >\n				<img src="assets/usergenerated/profilepictures/lala.png" alt="profiel foto">\n			</span>\n			<p>\n				eennaamvandeelnemer\n			</p>\n			<p>\n				verifiëren\n			</p>\n			<button>\n			</button>\n			<button>\n			</button>\n		</span>\n	</span>\n</article>\n'},useData:!0})},{"hbsfy/runtime":42}],5:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,s){var o,a="function",r=n.helperMissing,i=this.escapeExpression;return'<article class="group">\n	<header>\n		<h1 class="goGroup">\n			'+i((o=null!=(o=n.groupname||(null!=e?e.groupname:e))?o:r,typeof o===a?o.call(e,{name:"groupname",hash:{},data:s}):o))+'\n		</h1>\n	</header>\n	<span id="players">\n\n		<figure>\n			<a href="#" class="user">\n				<span>\n					<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="'+i((o=null!=(o=n.username||(null!=e?e.username:e))?o:r,typeof o===a?o.call(e,{name:"username",hash:{},data:s}):o))+'" />\n				</span>\n			</a>\n			<figcaption>\n				<p>'+i((o=null!=(o=n.username||(null!=e?e.username:e))?o:r,typeof o===a?o.call(e,{name:"username",hash:{},data:s}):o))+'</p>\n			</figcaption>\n		</figure>\n\n		<figure>\n			<a href="#" class="user">\n				<span>\n					<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="'+i((o=null!=(o=n.username||(null!=e?e.username:e))?o:r,typeof o===a?o.call(e,{name:"username",hash:{},data:s}):o))+'" />\n				</span>\n			</a>\n			<figcaption>\n				<p>'+i((o=null!=(o=n.username||(null!=e?e.username:e))?o:r,typeof o===a?o.call(e,{name:"username",hash:{},data:s}):o))+'</p>\n			</figcaption>\n		</figure>\n\n			<figure>\n				<a href="#" class="addMe">\n					<span class="empty-slot">\n					</span>\n				</a>\n				<figcaption>\n					<p>Inschrijven</p>\n				</figcaption>\n			</figure>\n</article>\n'},useData:!0})},{"hbsfy/runtime":42}],6:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<nav>\n\n		<button id="back" class="back">afmelden</button>\n\n		<button id="scores" class="scores"><p class="hidden">scores</p></button>\n	</nav>\n	<section>\n		<header id="week-overview-header">\n			<h1 class="hidden">\n				week overzicht\n			</h1>\n		</header>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n		<article class="day">\n			<span class="day-title">\n				Maandag\n			</span>\n			<button class="day-button">\n				<p>\n					stoel\n				</p>\n			</button>\n			<button class="detail-button"></button>\n		</article>\n	</section>\n'},useData:!0})},{"hbsfy/runtime":42}],7:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<section>\n	<header id="group-page">\n		<h1>\n			<span>Kies een groep of maak er één.</span>\n		</h1>\n	</header>\n\n	<section>\n		<header class="hidden">\n			<h1>\n				zoeken\n			</h1>\n		</header>\n 			<div id="new-group">\n 				<input type="text" name="groupname" class="groupname" placeholder="nieuwe groep" value="">\n				<button id="add-new-group" class="add" type="submit"><p>nieuwe groep</p></button>\n			</div>\n	</section>\n\n	<section>\n		<header class="hidden">\n			<h1>\n				groepen\n			</h1>\n		</header>\n		<input id="search-group" type="text" name="filter" placeHolder="Zoeken..." class="filter"/>\n\n		<span id="groups" class="groups">\n		</span>\n	</section>\n</section\n'},useData:!0})},{"hbsfy/runtime":42}],8:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,s){var o,a="function",r=n.helperMissing,i=this.escapeExpression;return'<figure>\n	<span>\n		<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="'+i((o=null!=(o=n.username||(null!=e?e.username:e))?o:r,typeof o===a?o.call(e,{name:"username",hash:{},data:s}):o))+'" />\n	</span>\n	<figcaption>\n		<p>'+i((o=null!=(o=n.username||(null!=e?e.username:e))?o:r,typeof o===a?o.call(e,{name:"username",hash:{},data:s}):o))+"</p>\n	</figcaption>\n</figure>\n"},useData:!0})},{"hbsfy/runtime":42}],9:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<nav>\n		<button id="back" class="back">terug</button>\n	</nav>\n	<section id="scores-overview">\n		<header id="scores-overview-header">\n			<h1>\n				week scores\n			</h1>\n		</header>\n		<p>\n			Iedereen wordt <span>volgens zijn score gerangschikt. </span> Op het einde van de week is er een <span>winnaar</span>.\n		</p>\n		<article class="contestant">\n			<span class="overall-rank">\n				1\n			</span>\n			<span class="contestant-preview">\n				<img src="assets/usergenerated/profilepictures/lala.png" alt="foto" />\n			</span>\n			<span class="contestant-name">\n				Matthias\n			</span>\n			<span class="contestant-score">\n				score: 8\n			</span>\n		</article>\n		<article class="contestant">\n			<span class="overall-rank">\n				1\n			</span>\n			<span class="contestant-preview">\n				<img src="assets/usergenerated/profilepictures/lala.png" alt="foto" />\n			</span>\n			<span class="contestant-name">\n				Matthias\n			</span>\n			<span class="contestant-score">\n				score: 8\n			</span>\n		</article>\n		<article class="contestant">\n			<span class="overall-rank">\n				1\n			</span>\n			<span class="contestant-preview">\n				<img src="assets/usergenerated/profilepictures/lala.png" alt="foto" />\n			</span>\n			<span class="contestant-name">\n				Matthias\n			</span>\n			<span class="contestant-score">\n				score: 8\n			</span>\n		</article>\n	</section>\n'},useData:!0})},{"hbsfy/runtime":42}],10:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,s){var o,a="function",r=n.helperMissing,i=this.escapeExpression;return'	<nav>\n		<button id="back">terug</button>\n		<button id="scores"><p class="hidden">scores</p></button>\n	</nav>\n	<section id="contestant">\n		<header id="contestant-header">\n			<h1>\n				'+i((o=null!=(o=n.username||(null!=e?e.username:e))?o:r,typeof o===a?o.call(e,{name:"username",hash:{},data:s}):o))+'\n			</h1>\n		</header>\n		<span id="contestant-profile-photo">\n			<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="foto" />\n		</span>\n		<p id="score-banner">\n			total score\n		</p>\n		<p id="total-score-holder">\n			'+i((o=null!=(o=n.score||(null!=e?e.score:e))?o:r,typeof o===a?o.call(e,{name:"score",hash:{},data:s}):o))+'\n		</p>\n	</section>\n	<section>\n		<header class="hidden">\n			<h1>\n				dagen overzicht\n			</h1>\n		</header>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="foto">\n			</span>\n		</article>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="foto">\n			</span>\n		</article>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="foto">\n			</span>\n		</article>\n		<article class="contestant-day">\n			<header>\n				<h1>\n					maandag\n				</h1>\n				<h2>\n					stoel\n				</h2>\n			</header>\n			<p class="contestant-day-score">\n				15\n			</p>\n			<span class="contestant-day-photo">\n				<img src="assets/usergenerated/profilepictures/'+i((o=null!=(o=n.picture||(null!=e?e.picture:e))?o:r,typeof o===a?o.call(e,{name:"picture",hash:{},data:s}):o))+'" alt="foto">\n			</span>\n		</article>\n	</section>\n'},useData:!0})},{"hbsfy/runtime":42}],11:[function(e,n){var t=e("../models/Group.js"),s=Backbone.Collection.extend({model:t,url:"api/admin/"});n.exports=s},{"../models/Group.js":21}],12:[function(e,n){var t=e("../models/Challenge.js"),s=Backbone.Collection.extend({model:t,url:"api/challenges/"});n.exports=s},{"../models/Challenge.js":18}],13:[function(e,n){var t=e("../models/Color.js"),s=Backbone.Collection.extend({model:t,url:"api/colors/"});n.exports=s},{"../models/Color.js":19}],14:[function(e,n){var t=e("../models/Foto.js"),s=Backbone.Collection.extend({model:t,url:"api/fotos/",initialize:function(e){e&&(this.format=e.format)},methodUrl:function(e){return"read"===e&&this.format?void(this.url="api/fotos/"+this.format):void(this.url="api/fotos")},sync:function(e,n,t){n.methodUrl&&n.methodUrl(e.toLowerCase())&&(t=t||{},t.url=n.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});n.exports=s},{"../models/Foto.js":20}],15:[function(e,n){var t=e("../models/Group.js"),s=Backbone.Collection.extend({model:t,url:"api/group/",initialize:function(e){e&&(console.log(this.groupname),this.groupname=e.groupname)},comparator:function(e){return e.get("groupname")},methodUrl:function(e){return"read"===e&&this.groupname?void(this.url="api/group/"+this.groupname):void(this.url="api/group")},filterGroups:function(e){return this.filter(function(n){return n.get("groupname").toLowerCase().indexOf(e)>-1||n.get("username").toLowerCase().indexOf(e)>-1})},sync:function(e,n,t){n.methodUrl&&n.methodUrl(e.toLowerCase())&&(t=t||{},t.url=n.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});n.exports=s},{"../models/Group.js":21}],16:[function(e,n){var t=e("../models/Object.js"),s=Backbone.Collection.extend({model:t,url:"api/objects/"});n.exports=s},{"../models/Object.js":22}],17:[function(e,n){var t=e("../models/User.js"),s=Backbone.Collection.extend({model:t,url:"api/users/",initialize:function(e){e&&(this.par=e.user)},methodUrl:function(e){return"read"===e&&this.par?void(this.url="api/users/"+this.par):void(this.url="api/users")},sync:function(e,n,t){n.methodUrl&&n.methodUrl(e.toLowerCase())&&(t=t||{},t.url=n.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});n.exports=s},{"../models/User.js":23}],18:[function(e,n){var t=Backbone.Model.extend({defaults:{group_id:"",color_id:"",object_id:"",day:""},urlRoot:"api/challenges"});n.exports=t},{}],19:[function(e,n){var t=Backbone.Model.extend({urlRoot:"api/colors"});n.exports=t},{}],20:[function(e,n){var t=Backbone.Model.extend({defaults:{fotoname:"",day:"",user_id:"",group_id:""},urlRoot:"api/fotos"});n.exports=t},{}],21:[function(e,n){var t=Backbone.Model.extend({defaults:{day:"",start_date:"",groupname:""},urlRoot:"api/group"});n.exports=t},{}],22:[function(e,n){var t=Backbone.Model.extend({urlRoot:"api/objects"});n.exports=t},{}],23:[function(e,n){var t=Backbone.Model.extend({defaults:{username:"",picture:"",password:"",role:"",group_id:0},urlRoot:"api/users"});n.exports=t},{}],24:[function(e,n){var t=e("../views/HomeView.js"),s=e("../views/GroepDetailView.js"),o=e("../views/DayDetailView.js"),a=e("../views/UserDetailView.js"),r=e("../views/ScoresView.js"),i=e("../views/AdminView.js"),l=Backbone.Router.extend({routes:{home:"home","group/:groupname":"group",day:"day","user/:id":"user",admin:"admin",logout:"logout",scores:"scores","*actions":"default"},logout:function(){window.location.replace("index.php")},admin:function(){console.log("admin"),this.empty(),this.admin=new i,$(".container").append(this.admin.render().el)},empty:function(){$(".container").empty()},home:function(){this.empty(),this.home=new t,$(".container").append(this.home.render().el)},group:function(e){this.empty(),this.group=new s({groupname:e}),$(".container").append(this.group.render().el)},day:function(){this.empty(),this.day=new o,$(".container").append(this.day.render().el)},scores:function(){this.empty(),this.scores=new r,$(".container").append(this.scores.render().el)},user:function(e){this.empty(),this.user=new a({id:e}),$(".container").append(this.user.render().el)},"default":function(){this.navigate("home",{trigger:!0})}});n.exports=l},{"../views/AdminView.js":26,"../views/DayDetailView.js":27,"../views/GroepDetailView.js":29,"../views/HomeView.js":31,"../views/ScoresView.js":32,"../views/UserDetailView.js":33}],25:[function(e,n){var t=e("../../../_hbs/admin_detail.hbs"),s=Backbone.View.extend({template:t,tagName:"li",events:{"click .add-day":"addDay"},addDay:function(e){console.log("addDay"),e.preventDefault(),this.model.set({day:this.model.get("day")+1}),this.model.save({},{url:"api/group/"+this.model.get("id")}),Window.Application.navigate("admin/",{trigger:!0})},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});n.exports=s},{"../../../_hbs/admin_detail.hbs":2}],26:[function(e,n){var t=e("../collections/AdminCollection.js"),s=e("./AdminGroupView.js"),o=Backbone.View.extend({className:"group",tagName:"ul",events:{},initialize:function(){console.log("admin init"),this.adminCollection=new t,this.listenTo(this.adminCollection,"sync",this.renderGroups),this.adminCollection.fetch()},renderGroups:function(){console.log("admin rendergroups"),this.adminCollection.forEach(this.renderGroup,this)},renderGroup:function(e){console.log("admin >rendergroup");var n=new s({model:e});this.$el.append(n.render().el)},render:function(){return this}});n.exports=o},{"../collections/AdminCollection.js":11,"./AdminGroupView.js":25}],27:[function(e,n){var t=e("../../../_hbs/day.hbs"),s=e("../collections/FotoCollection.js"),o=e("./FotoView.js"),a=Backbone.View.extend({template:t,events:{"click .foto":"clickFoto","change #imageInput":"submitFoto","click .scores":"clickScores","click .back":"clickBack"},initialize:function(){this.fotoCollection=new s,this.listenTo(this.fotoCollection,"sync",this.renderFotos),this.fotoCollection.fetch()},renderFotos:function(){this.fotoCollection.forEach(this.renderFoto,this)},renderFoto:function(e){this.$fotos.empty();var n=new o({model:e});this.$fotos.append(n.render().el)},clickFoto:function(e){e.preventDefault();var n=$("#imageInput");n.click()},submitFoto:function(e){e.preventDefault();var n=new FormData(document.getElementById("file-form"));n.append("action","create"),$.ajax({url:"index.php?page=add_object",type:"POST",data:n,dataType:"json",processData:!1,contentType:!1,context:this,success:function(){document.getElementById("file-form").reset(),this.initialize()},error:function(e){console.log(e.responseText)}})},clickScores:function(e){e.preventDefault(),Window.Application.navigate("scores",{trigger:!0})},clickBack:function(e){e.preventDefault(),console.log("weekoverzicht")},render:function(){return this.$el.html(this.template),this.$fotos=this.$el.find(".fotos"),this}});n.exports=a},{"../../../_hbs/day.hbs":3,"../collections/FotoCollection.js":14,"./FotoView.js":28}],28:[function(e,n){var t=e("../../../_hbs/foto.hbs"),s=Backbone.View.extend({template:t,render:function(){return this.$el.html(this.template(this.model.attributes)),this}});n.exports=s},{"../../../_hbs/foto.hbs":4}],29:[function(e,n){var t=e("../../../_hbs/groep_detail.hbs"),s=e("../models/Group.js"),o=e("../models/Color.js"),a=e("../models/Object.js"),r=e("../collections/ChallengeCollection.js"),i=e("../collections/ColorCollection.js"),l=e("../collections/ObjectCollection.js"),c=Backbone.View.extend({template:t,section:"section",className:"groepdetail",events:{"click .day":"clickDay","click .back":"clickAfmelden","click .scores":"clickScores"},initialize:function(e){this.challengeCollection=new r,this.colorCollection=new i,this.objectCollection=new l,this.listenTo(this.colorCollection,"sync",this.setColor),this.listenTo(this.colorCollection,"sync",this.setChallenge),this.listenTo(this.objectCollection,"sync",this.setObject),this.colorCollection.fetch(),this.challengeCollection.fetch(),this.objectCollection.fetch(),e&&e.groupname&&(this.model=new s,this.model.set("groupname",e.groupname),this.model.fetch({success:function(e,n){0===n.length&&Window.Application.navigate("home",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render))},clickDay:function(e){e.preventDefault(),Window.Application.navigate("day",{trigger:!0})},clickAfmelden:function(e){e.preventDefault(),Window.Application.navigate("logout",{trigger:!0})},clickScores:function(e){e.preventDefault(),Window.Application.navigate("scores",{trigger:!0})},setColor:function(){this.colorLastId=this.colorCollection.length,this.randomColorId=Math.floor(Math.random()*this.colorLastId)+1,console.log(this.randomColorId),this.randomColor=new o,this.randomColor.set("id",this.randomColorId),this.randomColor.fetch({success:function(e,n){0===n.length&&console.log("fout")}}),this.listenTo(this.randomColor,"sync",this.render)},setObject:function(){this.objectLastId=this.objectCollection.length,this.randomObjectId=Math.floor(Math.random()*this.objectLastId)+1,console.log(this.randomObjectId),this.randomObject=new a,this.randomObject.set("id",this.randomObjectId),this.randomObject.fetch({success:function(e,n){0===n.length&&console.log("fout")}}),this.listenTo(this.randomObject,"sync",this.render),console.log(this.randomObject)},setChallenge:function(){this.challengeLastId=this.challengeCollection.length},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});n.exports=c},{"../../../_hbs/groep_detail.hbs":6,"../collections/ChallengeCollection.js":12,"../collections/ColorCollection.js":13,"../collections/ObjectCollection.js":16,"../models/Color.js":19,"../models/Group.js":21,"../models/Object.js":22}],30:[function(e,n){var t=e("../../../_hbs/groep.hbs"),s=e("../collections/UserCollection.js"),o=e("../collections/GroupCollection.js"),a=e("./UserGroupView.js"),r=e("../models/User.js"),i=Backbone.View.extend({template:t,className:"groep",tagName:"div",events:{"click .goGroup":"clickGroup","click .addMe":"clickAdd","click .user":"clickUser"},initialize:function(){this.user=new s({user:"self"}),this.listenTo(this.user,"sync",this.setGroup),this.user.fetch(),this.groupCollection=new o,this.listenTo(this.groupCollection,"sync",this.renderGroups),this.groupCollection.fetch(),this.userNow=new r},renderGroups:function(){this.$players.empty(),this.groupCollection.forEach(this.renderGroup,this)},renderGroup:function(e){console.log(e);var n=new a({model:e});this.$players.append(n.render().el)},setGroup:function(){this.userNow.set("id",this.user.models[0].attributes.id),this.userNow.fetch({success:function(e,n){0===n.length&&Window.Application.navigate("home",{trigger:!0})}})},clickAdd:function(e){e.preventDefault(),console.log(this.model.get("id")),this.userNow.set("group_id",this.model.get("id")),this.userNow.save(),Window.Application.navigate("group/"+this.model.get("id"),{trigger:!0})},clickGroup:function(e){e.preventDefault(),Window.Application.navigate("group/"+this.model.get("id"),{trigger:!0})},clickUser:function(e){e.preventDefault(),Window.Application.navigate("user/"+this.model.get("id"),{trigger:!0})},render:function(){return this.$el.html(this.template(this.model.attributes)),this.$players=this.$el.find(".players"),this}});n.exports=i},{"../../../_hbs/groep.hbs":5,"../collections/GroupCollection.js":15,"../collections/UserCollection.js":17,"../models/User.js":23,"./UserGroupView.js":34}],31:[function(e,n){var t=e("../../../_hbs/home.hbs"),s=e("../collections/GroupCollection.js"),o=e("../collections/UserCollection.js"),a=e("../views/GroepOverzichtView.js"),r=e("../models/User.js"),i=Backbone.View.extend({template:t,tagName:"section",className:"groepen",events:{"click .add":"clickAddGroup","input .filter":"inputFilter"},initialize:function(){this.user=new o({user:"self"}),this.listenTo(this.user,"sync",this.setGroup),this.user.fetch(),this.userNow=new r,this.groupCollection=new s,this.listenTo(this.groupCollection,"sync",this.renderGroups),this.groupCollection.fetch()},setGroup:function(){this.userNow.set("id",this.user.models[0].attributes.id),this.userNow.fetch({success:function(e,n){0===n.length&&Window.Application.navigate("home",{trigger:!0})}})},clickAddGroup:function(e){e.preventDefault(),""===this.$el.find(".groupname").val()&&this.$el.find(".groupname").addClass("error"),this.groupCollection.create({groupname:this.$el.find(".groupname").val(),day:0,start_date:moment().format("YYYY-MM-DD")}),this.userNow.set("group_id",this.groupCollection.length),this.userNow.save(),Window.Application.navigate("group/"+this.groupCollection.length,{trigger:!0})},inputFilter:function(e){e.preventDefault();var n=$(e.currentTarget).val().toLowerCase();""!==n?this.renderFilteredGroups(this.groupCollection.filterGroups(n)):this.groupCollection.fetch()},navigateTo:function(e){Window.Application.navigate(e,{trigger:!0})},renderFilteredGroups:function(e){this.$groups.empty(),e.forEach(this.renderGroup,this)},renderGroups:function(){this.$groups.empty(),this.groupCollection.forEach(this.renderGroup,this)},renderGroup:function(e){var n=new a({model:e});this.$groups.append(n.render().el)},render:function(){return this.$el.html(this.template),this.$groups=this.$el.find(".groups"),this}});n.exports=i},{"../../../_hbs/home.hbs":7,"../collections/GroupCollection.js":15,"../collections/UserCollection.js":17,"../models/User.js":23,"../views/GroepOverzichtView.js":30}],32:[function(e,n){var t=e("../../../_hbs/scores.hbs"),s=Backbone.View.extend({template:t,events:{"click .back":"clickBack"},clickBack:function(e){e.preventDefault(),Window.Application.navigate("day",{trigger:!0})},render:function(){return this.$el.html(this.template()),this}});n.exports=s},{"../../../_hbs/scores.hbs":9}],33:[function(e,n){var t=e("../../../_hbs/user_details.hbs"),s=e("../models/User.js"),o=Backbone.View.extend({template:t,initialize:function(e){e&&e.id&&(this.model=new s,this.model.set("id",e.id),this.model.fetch({success:function(e,n){0===n.length&&Window.Application.navigate("home",{trigger:!0})}}),console.log(this.model),this.listenTo(this.model,"sync",this.render))},render:function(){return console.log(this.model.attributes),this.$el.html(this.template(this.model.attributes)),this}});n.exports=o},{"../../../_hbs/user_details.hbs":10,"../models/User.js":23}],34:[function(e,n){var t=e("../../../_hbs/player.hbs"),s=Backbone.View.extend({template:t,render:function(){return this.$el.html(this.template(this.model.attributes)),this}});n.exports=s},{"../../../_hbs/player.hbs":8}],35:[function(e,n,t){"use strict";var s=e("./handlebars/base"),o=e("./handlebars/safe-string")["default"],a=e("./handlebars/exception")["default"],r=e("./handlebars/utils"),i=e("./handlebars/runtime"),l=function(){var e=new s.HandlebarsEnvironment;return r.extend(e,s),e.SafeString=o,e.Exception=a,e.Utils=r,e.escapeExpression=r.escapeExpression,e.VM=i,e.template=function(n){return i.template(n,e)},e},c=l();c.create=l,c["default"]=c,t["default"]=c},{"./handlebars/base":36,"./handlebars/exception":37,"./handlebars/runtime":38,"./handlebars/safe-string":39,"./handlebars/utils":40}],36:[function(e,n,t){"use strict";function s(e,n){this.helpers=e||{},this.partials=n||{},o(this)}function o(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new r("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(n,t){var s=t.inverse,o=t.fn;if(n===!0)return o(this);if(n===!1||null==n)return s(this);if(u(n))return n.length>0?(t.ids&&(t.ids=[t.name]),e.helpers.each(n,t)):s(this);if(t.data&&t.ids){var r=g(t.data);r.contextPath=a.appendContextPath(t.data.contextPath,t.name),t={data:r}}return o(n,t)}),e.registerHelper("each",function(e,n){if(!n)throw new r("Must pass iterator to #each");var t,s,o=n.fn,i=n.inverse,l=0,c="";if(n.data&&n.ids&&(s=a.appendContextPath(n.data.contextPath,n.ids[0])+"."),p(e)&&(e=e.call(this)),n.data&&(t=g(n.data)),e&&"object"==typeof e)if(u(e))for(var d=e.length;d>l;l++)t&&(t.index=l,t.first=0===l,t.last=l===e.length-1,s&&(t.contextPath=s+l)),c+=o(e[l],{data:t});else for(var h in e)e.hasOwnProperty(h)&&(t&&(t.key=h,t.index=l,t.first=0===l,s&&(t.contextPath=s+h)),c+=o(e[h],{data:t}),l++);return 0===l&&(c=i(this)),c}),e.registerHelper("if",function(e,n){return p(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||a.isEmpty(e)?n.inverse(this):n.fn(this)}),e.registerHelper("unless",function(n,t){return e.helpers["if"].call(this,n,{fn:t.inverse,inverse:t.fn,hash:t.hash})}),e.registerHelper("with",function(e,n){p(e)&&(e=e.call(this));var t=n.fn;if(a.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var s=g(n.data);s.contextPath=a.appendContextPath(n.data.contextPath,n.ids[0]),n={data:s}}return t(e,n)}),e.registerHelper("log",function(n,t){var s=t.data&&null!=t.data.level?parseInt(t.data.level,10):1;e.log(s,n)}),e.registerHelper("lookup",function(e,n){return e&&e[n]})}var a=e("./utils"),r=e("./exception")["default"],i="2.0.0";t.VERSION=i;var l=6;t.COMPILER_REVISION=l;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};
t.REVISION_CHANGES=c;var u=a.isArray,p=a.isFunction,d=a.toString,h="[object Object]";t.HandlebarsEnvironment=s,s.prototype={constructor:s,logger:m,log:f,registerHelper:function(e,n){if(d.call(e)===h){if(n)throw new r("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=n},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,n){d.call(e)===h?a.extend(this.partials,e):this.partials[e]=n},unregisterPartial:function(e){delete this.partials[e]}};var m={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,n){if(m.level<=e){var t=m.methodMap[e];"undefined"!=typeof console&&console[t]&&console[t].call(console,n)}}};t.logger=m;var f=m.log;t.log=f;var g=function(e){var n=a.extend({},e);return n._parent=e,n};t.createFrame=g},{"./exception":37,"./utils":40}],37:[function(e,n,t){"use strict";function s(e,n){var t;n&&n.firstLine&&(t=n.firstLine,e+=" - "+t+":"+n.firstColumn);for(var s=Error.prototype.constructor.call(this,e),a=0;a<o.length;a++)this[o[a]]=s[o[a]];t&&(this.lineNumber=t,this.column=n.firstColumn)}var o=["description","fileName","lineNumber","message","name","number","stack"];s.prototype=new Error,t["default"]=s},{}],38:[function(e,n,t){"use strict";function s(e){var n=e&&e[0]||1,t=p;if(n!==t){if(t>n){var s=d[t],o=d[n];throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+s+") or downgrade your runtime to an older version ("+o+").")}throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function o(e,n){if(!n)throw new u("No environment passed to template");if(!e||!e.main)throw new u("Unknown template object: "+typeof e);n.VM.checkRevision(e.compiler);var t=function(t,s,o,a,r,i,l,p,d){r&&(a=c.extend({},a,r));var h=n.VM.invokePartial.call(this,t,o,a,i,l,p,d);if(null==h&&n.compile){var m={helpers:i,partials:l,data:p,depths:d};l[o]=n.compile(t,{data:void 0!==p,compat:e.compat},n),h=l[o](a,m)}if(null!=h){if(s){for(var f=h.split("\n"),g=0,y=f.length;y>g&&(f[g]||g+1!==y);g++)f[g]=s+f[g];h=f.join("\n")}return h}throw new u("The partial "+o+" could not be compiled when running in runtime-only mode")},s={lookup:function(e,n){for(var t=e.length,s=0;t>s;s++)if(e[s]&&null!=e[s][n])return e[s][n]},lambda:function(e,n){return"function"==typeof e?e.call(n):e},escapeExpression:c.escapeExpression,invokePartial:t,fn:function(n){return e[n]},programs:[],program:function(e,n,t){var s=this.programs[e],o=this.fn(e);return n||t?s=a(this,e,o,n,t):s||(s=this.programs[e]=a(this,e,o)),s},data:function(e,n){for(;e&&n--;)e=e._parent;return e},merge:function(e,n){var t=e||n;return e&&n&&e!==n&&(t=c.extend({},n,e)),t},noop:n.VM.noop,compilerInfo:e.compiler},o=function(n,t){t=t||{};var a=t.data;o._setup(t),!t.partial&&e.useData&&(a=l(n,a));var r;return e.useDepths&&(r=t.depths?[n].concat(t.depths):[n]),e.main.call(s,n,s.helpers,s.partials,a,r)};return o.isTop=!0,o._setup=function(t){t.partial?(s.helpers=t.helpers,s.partials=t.partials):(s.helpers=s.merge(t.helpers,n.helpers),e.usePartial&&(s.partials=s.merge(t.partials,n.partials)))},o._child=function(n,t,o){if(e.useDepths&&!o)throw new u("must pass parent depths");return a(s,n,e[n],t,o)},o}function a(e,n,t,s,o){var a=function(n,a){return a=a||{},t.call(e,n,e.helpers,e.partials,a.data||s,o&&[n].concat(o))};return a.program=n,a.depth=o?o.length:0,a}function r(e,n,t,s,o,a,r){var i={partial:!0,helpers:s,partials:o,data:a,depths:r};if(void 0===e)throw new u("The partial "+n+" could not be found");return e instanceof Function?e(t,i):void 0}function i(){return""}function l(e,n){return n&&"root"in n||(n=n?h(n):{},n.root=e),n}var c=e("./utils"),u=e("./exception")["default"],p=e("./base").COMPILER_REVISION,d=e("./base").REVISION_CHANGES,h=e("./base").createFrame;t.checkRevision=s,t.template=o,t.program=a,t.invokePartial=r,t.noop=i},{"./base":36,"./exception":37,"./utils":40}],39:[function(e,n,t){"use strict";function s(e){this.string=e}s.prototype.toString=function(){return""+this.string},t["default"]=s},{}],40:[function(e,n,t){"use strict";function s(e){return c[e]}function o(e){for(var n=1;n<arguments.length;n++)for(var t in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],t)&&(e[t]=arguments[n][t]);return e}function a(e){return e instanceof l?e.toString():null==e?"":e?(e=""+e,p.test(e)?e.replace(u,s):e):e+""}function r(e){return e||0===e?m(e)&&0===e.length?!0:!1:!0}function i(e,n){return(e?e+".":"")+n}var l=e("./safe-string")["default"],c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,p=/[&<>"'`]/;t.extend=o;var d=Object.prototype.toString;t.toString=d;var h=function(e){return"function"==typeof e};h(/x/)&&(h=function(e){return"function"==typeof e&&"[object Function]"===d.call(e)});var h;t.isFunction=h;var m=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===d.call(e):!1};t.isArray=m,t.escapeExpression=a,t.isEmpty=r,t.appendContextPath=i},{"./safe-string":39}],41:[function(e,n){n.exports=e("./dist/cjs/handlebars.runtime")},{"./dist/cjs/handlebars.runtime":35}],42:[function(e,n){n.exports=e("handlebars/runtime")["default"]},{"handlebars/runtime":41}]},{},[1]);
//# sourceMappingURL=app.js.map