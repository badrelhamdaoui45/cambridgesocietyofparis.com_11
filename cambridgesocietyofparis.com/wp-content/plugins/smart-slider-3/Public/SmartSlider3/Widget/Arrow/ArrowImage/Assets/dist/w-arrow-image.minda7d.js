!function(t){var i=t;i._N2=i._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var n,o=t.document,c=(o.documentElement,t.setTimeout),r=t.clearTimeout,u=i._N2;t.requestAnimationFrame,o.createElement.bind(o),Object.assign,navigator.userAgent.indexOf("+http://www.google.com/bot.html")>-1||i.requestIdleCallback,i.cancelIdleCallback;n=function(){o.body},"complete"===o.readyState||"interactive"===o.readyState?n():Document&&Document.prototype&&Document.prototype.addEventListener&&Document.prototype.addEventListener!==o.addEventListener?Document.prototype.addEventListener.call(o,"DOMContentLoaded",n):o.addEventListener("DOMContentLoaded",n),u.d("SmartSliderWidgetArrowImage","SmartSliderWidget",(function(){function t(t,i,n){this.Dt=n,u.SmartSliderWidget.prototype.constructor.call(this,i,t,"#"+i.elementID+"-arrow-"+t)}return t.prototype=Object.create(u.SmartSliderWidget.prototype),t.prototype.constructor=t,t.prototype.onStart=function(){var t,i,n,o;t=this.widget,i="click",n=function(e){e.stopPropagation(),this.slider[this.Dt]()}.bind(this),o=o||{},t.addEventListener(i,n,o)},function(i){this.key="arrow",this.previous=new t("previous",i,"previousWithDirection"),this.next=new t("next",i,"nextWithDirection")}}))}(window);