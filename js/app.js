!function e(t,n,o){function r(s,a){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return r(n?n:e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e){function t(){Window.Application=new n,Backbone.history.start()}var n=(e("hbsfy/runtime"),e("./classes/routers/Application.js"));t()},{"./classes/routers/Application.js":15,"hbsfy/runtime":26}],2:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,o){var r,i="function",s=t.helperMissing,a=this.escapeExpression;return'<div>\n	<a href="#" class="goGroup"><p class="groupnaam">'+a((r=null!=(r=t.groupname||(null!=e?e.groupname:e))?r:s,typeof r===i?r.call(e,{name:"groupname",hash:{},data:o}):r))+"</p></a>\n	<span>"+a((r=null!=(r=t.username||(null!=e?e.username:e))?r:s,typeof r===i?r.call(e,{name:"username",hash:{},data:o}):r))+'</span>\n	<a href="#" class="addMe">+</a>\n</div>\n\n\n'},useData:!0})},{"hbsfy/runtime":26}],3:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,o){var r,i="function",s=t.helperMissing,a=this.escapeExpression;return"<header>\n	<h2>"+a((r=null!=(r=t.groupname||(null!=e?e.groupname:e))?r:s,typeof r===i?r.call(e,{name:"groupname",hash:{},data:o}):r))+'</h2>\n</header>\n\n<section class="test"></section>\n\n<a href="#">Terug</a>\n'},useData:!0})},{"hbsfy/runtime":26}],4:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<a class="logout" href="index.php?page=logout">Logout</a>\n\n<input type="text" name="groupname" class="groupname" value="" placeholder="nieuwe groep">\n<input type="submit" name="" class="add" value="submit">\n\n<section class="groups">\n	<input type="text" name="filter" placeholder="Filter" class="filter"/>\n	<div class="tbody"></div>\n</section>\n'},useData:!0})},{"hbsfy/runtime":26}],5:[function(e,t){var n=e("../models/Challenge.js"),o=Backbone.Collection.extend({model:n,url:"api/challenges/"});t.exports=o},{"../models/Challenge.js":10}],6:[function(e,t){var n=e("../models/Color.js"),o=Backbone.Collection.extend({model:n,url:"api/colors/"});t.exports=o},{"../models/Color.js":11}],7:[function(e,t){var n=e("../models/Group.js"),o=Backbone.Collection.extend({model:n,url:"api/group/",initialize:function(e){e&&(console.log(this.groupname),this.groupname=e.groupname)},comparator:function(e){return e.get("groupname")},methodUrl:function(e){return"read"===e&&this.groupname?void(this.url="api/group/"+this.groupname):void(this.url="api/group")},filterGroups:function(e){return this.filter(function(t){return t.get("groupname").toLowerCase().indexOf(e)>-1||t.get("username").toLowerCase().indexOf(e)>-1})},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=o},{"../models/Group.js":12}],8:[function(e,t){var n=e("../models/Object.js"),o=Backbone.Collection.extend({model:n,url:"api/objects/"});t.exports=o},{"../models/Object.js":13}],9:[function(e,t){var n=e("../models/User.js"),o=Backbone.Collection.extend({model:n,url:"api/users",initialize:function(e){e&&(this.id=e.id)},methodUrl:function(e){return"read"===e&&this.id?void(this.url="api/users/"+this.id):void(this.url="api/users")},sync:function(e,t,n){t.methodUrl&&t.methodUrl(e.toLowerCase())&&(n=n||{},n.url=t.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});t.exports=o},{"../models/User.js":14}],10:[function(e,t){var n=Backbone.Model.extend({defaults:{group_id:"",color_id:"",object_id:"",day:""},urlRoot:"api/challenges"});t.exports=n},{}],11:[function(e,t){var n=Backbone.Model.extend({urlRoot:"api/colors"});t.exports=n},{}],12:[function(e,t){var n=Backbone.Model.extend({defaults:{day:"",start_date:"",groupname:""},urlRoot:"api/group"});t.exports=n},{}],13:[function(e,t){var n=Backbone.Model.extend({urlRoot:"api/objects"});t.exports=n},{}],14:[function(e,t){var n=Backbone.Model.extend({defaults:{username:"",picture:"",password:"",role:"",group_id:0},urlRoot:"api/users"});t.exports=n},{}],15:[function(e,t){var n=e("../views/HomeView.js"),o=e("../views/GroepDetailView.js"),r=Backbone.Router.extend({routes:{home:"home","group/:groupname":"group","*actions":"default"},logout:function(){window.location.replace("index.php")},empty:function(){$(".container").empty()},home:function(){this.empty(),this.home=new n,$(".container").append(this.home.render().el)},group:function(e){this.empty(),this.group=new o({groupname:e}),$(".container").append(this.group.render().el)},"default":function(){this.navigate("home",{trigger:!0})}});t.exports=r},{"../views/GroepDetailView.js":16,"../views/HomeView.js":18}],16:[function(e,t){var n=e("../../../_hbs/groep_detail.hbs"),o=e("../models/Group.js"),r=e("../models/Color.js"),i=e("../models/Object.js"),s=e("../collections/ChallengeCollection.js"),a=e("../collections/ColorCollection.js"),l=e("../collections/ObjectCollection.js"),c=Backbone.View.extend({template:n,section:"section",className:"groepdetail",initialize:function(e){this.challengeCollection=new s,this.colorCollection=new a,this.objectCollection=new l,this.listenTo(this.colorCollection,"sync",this.setColor),this.listenTo(this.colorCollection,"sync",this.setChallenge),this.listenTo(this.objectCollection,"sync",this.setObject),this.colorCollection.fetch(),this.challengeCollection.fetch(),this.objectCollection.fetch(),e&&e.groupname&&(this.model=new o,this.model.set("groupname",e.groupname),this.model.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("home",{trigger:!0})}}),this.listenTo(this.model,"sync",this.render))},setColor:function(){this.colorLastId=this.colorCollection.length,this.randomColorId=Math.floor(Math.random()*this.colorLastId)+1,console.log(this.randomColorId),this.randomColor=new r,this.randomColor.set("id",this.randomColorId),this.randomColor.fetch({success:function(e,t){0===t.length&&console.log("fout")}}),this.listenTo(this.randomColor,"sync",this.render)},setObject:function(){this.objectLastId=this.objectCollection.length,this.randomObjectId=Math.floor(Math.random()*this.objectLastId)+1,console.log(this.randomObjectId),this.randomObject=new i,this.randomObject.set("id",this.randomObjectId),this.randomObject.fetch({success:function(e,t){0===t.length&&console.log("fout")}}),this.listenTo(this.randomObject,"sync",this.render),console.log(this.randomObject)},setChallenge:function(){this.challengeLastId=this.challengeCollection.length},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=c},{"../../../_hbs/groep_detail.hbs":3,"../collections/ChallengeCollection.js":5,"../collections/ColorCollection.js":6,"../collections/ObjectCollection.js":8,"../models/Color.js":11,"../models/Group.js":12,"../models/Object.js":13}],17:[function(e,t){var n=e("../../../_hbs/groepOverzicht.hbs"),o=e("../collections/UserCollection.js"),r=e("../models/User.js"),i=Backbone.View.extend({template:n,className:"groep",tagName:"div",events:{"click .goGroup":"clickGroup","click .addMe":"clickAdd"},initialize:function(){this.user=new o({user:"self"}),this.listenTo(this.user,"sync",this.setGroup),this.user.fetch(),this.userNow=new r},setGroup:function(){this.userNow.set("id",this.user.models[0].attributes.id),this.userNow.fetch({success:function(e,t){0===t.length&&Window.Application.navigate("home",{trigger:!0})}})},clickAdd:function(e){e.preventDefault(),console.log(this.model.get("id")),this.userNow.set("group_id",this.model.get("id")),this.userNow.save()},clickGroup:function(e){e.preventDefault(),Window.Application.navigate("group/"+this.model.get("groupname"),{trigger:!0})},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});t.exports=i},{"../../../_hbs/groepOverzicht.hbs":2,"../collections/UserCollection.js":9,"../models/User.js":14}],18:[function(e,t){var n=e("../../../_hbs/home.hbs"),o=e("../collections/GroupCollection.js"),r=e("../views/GroepOverzichtView.js"),i=Backbone.View.extend({template:n,tagName:"section",className:"groepen",events:{"click .add":"clickAddGroup","input .filter":"inputFilter"},initialize:function(){this.groupCollection=new o,this.listenTo(this.groupCollection,"sync",this.renderGroups),this.groupCollection.fetch()},clickAddGroup:function(e){e.preventDefault(),""===this.$el.find(".groupname").val()&&this.$el.find(".groupname").addClass("error"),this.groupCollection.create({groupname:this.$el.find(".groupname").val(),day:0,start_date:moment().format("YYYY-MM-DD")})},inputFilter:function(e){e.preventDefault();var t=$(e.currentTarget).val().toLowerCase();""!==t?this.renderFilteredGroups(this.groupCollection.filterGroups(t)):this.groupCollection.fetch()},navigateTo:function(e){Window.Application.navigate(e,{trigger:!0})},renderFilteredGroups:function(e){this.$groups.empty(),e.forEach(this.renderGroup,this)},renderGroups:function(){this.$groups.empty(),this.groupCollection.forEach(this.renderGroup,this)},renderGroup:function(e){var t=new r({model:e});this.$groups.append(t.render().el)},render:function(){return this.$el.html(this.template),this.$groups=this.$el.find(".tbody"),this}});t.exports=i},{"../../../_hbs/home.hbs":4,"../collections/GroupCollection.js":7,"../views/GroepOverzichtView.js":17}],19:[function(e,t,n){"use strict";var o=e("./handlebars/base"),r=e("./handlebars/safe-string")["default"],i=e("./handlebars/exception")["default"],s=e("./handlebars/utils"),a=e("./handlebars/runtime"),l=function(){var e=new o.HandlebarsEnvironment;return s.extend(e,o),e.SafeString=r,e.Exception=i,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=a,e.template=function(t){return a.template(t,e)},e},c=l();c.create=l,c["default"]=c,n["default"]=c},{"./handlebars/base":20,"./handlebars/exception":21,"./handlebars/runtime":22,"./handlebars/safe-string":23,"./handlebars/utils":24}],20:[function(e,t,n){"use strict";function o(e,t){this.helpers=e||{},this.partials=t||{},r(this)}function r(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new s("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(t,n){var o=n.inverse,r=n.fn;if(t===!0)return r(this);if(t===!1||null==t)return o(this);if(u(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var s=g(n.data);s.contextPath=i.appendContextPath(n.data.contextPath,n.name),n={data:s}}return r(t,n)}),e.registerHelper("each",function(e,t){if(!t)throw new s("Must pass iterator to #each");var n,o,r=t.fn,a=t.inverse,l=0,c="";if(t.data&&t.ids&&(o=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),p(e)&&(e=e.call(this)),t.data&&(n=g(t.data)),e&&"object"==typeof e)if(u(e))for(var h=e.length;h>l;l++)n&&(n.index=l,n.first=0===l,n.last=l===e.length-1,o&&(n.contextPath=o+l)),c+=r(e[l],{data:n});else for(var d in e)e.hasOwnProperty(d)&&(n&&(n.key=d,n.index=l,n.first=0===l,o&&(n.contextPath=o+d)),c+=r(e[d],{data:n}),l++);return 0===l&&(c=a(this)),c}),e.registerHelper("if",function(e,t){return p(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||i.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){p(e)&&(e=e.call(this));var n=t.fn;if(i.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var o=g(t.data);o.contextPath=i.appendContextPath(t.data.contextPath,t.ids[0]),t={data:o}}return n(e,t)}),e.registerHelper("log",function(t,n){var o=n.data&&null!=n.data.level?parseInt(n.data.level,10):1;e.log(o,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}var i=e("./utils"),s=e("./exception")["default"],a="2.0.0";n.VERSION=a;var l=6;n.COMPILER_REVISION=l;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};n.REVISION_CHANGES=c;var u=i.isArray,p=i.isFunction,h=i.toString,d="[object Object]";n.HandlebarsEnvironment=o,o.prototype={constructor:o,logger:f,log:m,registerHelper:function(e,t){if(h.call(e)===d){if(t)throw new s("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){h.call(e)===d?i.extend(this.partials,e):this.partials[e]=t},unregisterPartial:function(e){delete this.partials[e]}};var f={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(f.level<=e){var n=f.methodMap[e];"undefined"!=typeof console&&console[n]&&console[n].call(console,t)}}};n.logger=f;var m=f.log;n.log=m;var g=function(e){var t=i.extend({},e);return t._parent=e,t};n.createFrame=g},{"./exception":21,"./utils":24}],21:[function(e,t,n){"use strict";function o(e,t){var n;t&&t.firstLine&&(n=t.firstLine,e+=" - "+n+":"+t.firstColumn);for(var o=Error.prototype.constructor.call(this,e),i=0;i<r.length;i++)this[r[i]]=o[r[i]];n&&(this.lineNumber=n,this.column=t.firstColumn)}var r=["description","fileName","lineNumber","message","name","number","stack"];o.prototype=new Error,n["default"]=o},{}],22:[function(e,t,n){"use strict";function o(e){var t=e&&e[0]||1,n=p;if(t!==n){if(n>t){var o=h[n],r=h[t];throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+r+").")}throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function r(e,t){if(!t)throw new u("No environment passed to template");if(!e||!e.main)throw new u("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var n=function(n,o,r,i,s,a,l,p,h){s&&(i=c.extend({},i,s));var d=t.VM.invokePartial.call(this,n,r,i,a,l,p,h);if(null==d&&t.compile){var f={helpers:a,partials:l,data:p,depths:h};l[r]=t.compile(n,{data:void 0!==p,compat:e.compat},t),d=l[r](i,f)}if(null!=d){if(o){for(var m=d.split("\n"),g=0,v=m.length;v>g&&(m[g]||g+1!==v);g++)m[g]=o+m[g];d=m.join("\n")}return d}throw new u("The partial "+r+" could not be compiled when running in runtime-only mode")},o={lookup:function(e,t){for(var n=e.length,o=0;n>o;o++)if(e[o]&&null!=e[o][t])return e[o][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:c.escapeExpression,invokePartial:n,fn:function(t){return e[t]},programs:[],program:function(e,t,n){var o=this.programs[e],r=this.fn(e);return t||n?o=i(this,e,r,t,n):o||(o=this.programs[e]=i(this,e,r)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=c.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler},r=function(t,n){n=n||{};var i=n.data;r._setup(n),!n.partial&&e.useData&&(i=l(t,i));var s;return e.useDepths&&(s=n.depths?[t].concat(n.depths):[t]),e.main.call(o,t,o.helpers,o.partials,i,s)};return r.isTop=!0,r._setup=function(n){n.partial?(o.helpers=n.helpers,o.partials=n.partials):(o.helpers=o.merge(n.helpers,t.helpers),e.usePartial&&(o.partials=o.merge(n.partials,t.partials)))},r._child=function(t,n,r){if(e.useDepths&&!r)throw new u("must pass parent depths");return i(o,t,e[t],n,r)},r}function i(e,t,n,o,r){var i=function(t,i){return i=i||{},n.call(e,t,e.helpers,e.partials,i.data||o,r&&[t].concat(r))};return i.program=t,i.depth=r?r.length:0,i}function s(e,t,n,o,r,i,s){var a={partial:!0,helpers:o,partials:r,data:i,depths:s};if(void 0===e)throw new u("The partial "+t+" could not be found");return e instanceof Function?e(n,a):void 0}function a(){return""}function l(e,t){return t&&"root"in t||(t=t?d(t):{},t.root=e),t}var c=e("./utils"),u=e("./exception")["default"],p=e("./base").COMPILER_REVISION,h=e("./base").REVISION_CHANGES,d=e("./base").createFrame;n.checkRevision=o,n.template=r,n.program=i,n.invokePartial=s,n.noop=a},{"./base":20,"./exception":21,"./utils":24}],23:[function(e,t,n){"use strict";function o(e){this.string=e}o.prototype.toString=function(){return""+this.string},n["default"]=o},{}],24:[function(e,t,n){"use strict";function o(e){return c[e]}function r(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function i(e){return e instanceof l?e.toString():null==e?"":e?(e=""+e,p.test(e)?e.replace(u,o):e):e+""}function s(e){return e||0===e?f(e)&&0===e.length?!0:!1:!0}function a(e,t){return(e?e+".":"")+t}var l=e("./safe-string")["default"],c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,p=/[&<>"'`]/;n.extend=r;var h=Object.prototype.toString;n.toString=h;var d=function(e){return"function"==typeof e};d(/x/)&&(d=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)});var d;n.isFunction=d;var f=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===h.call(e):!1};n.isArray=f,n.escapeExpression=i,n.isEmpty=s,n.appendContextPath=a},{"./safe-string":23}],25:[function(e,t){t.exports=e("./dist/cjs/handlebars.runtime")},{"./dist/cjs/handlebars.runtime":19}],26:[function(e,t){t.exports=e("handlebars/runtime")["default"]},{"handlebars/runtime":25}]},{},[1]);
//# sourceMappingURL=app.js.map