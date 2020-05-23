define(["exports","./when-7ef6387a","./Check-ed6a1804","./Ellipsoid-911f8bc2","./Transforms-d8f9dcbd","./Cartesian2-ff47d58f"],(function(e,t,i,n,h,r){"use strict";function a(e,i,n,h){this.x=t.defaultValue(e,0),this.y=t.defaultValue(i,0),this.width=t.defaultValue(n,0),this.height=t.defaultValue(h,0)}a.packedLength=4,a.pack=function(e,n,h){return i.Check.typeOf.object("value",e),i.Check.defined("array",n),h=t.defaultValue(h,0),n[h++]=e.x,n[h++]=e.y,n[h++]=e.width,n[h]=e.height,n},a.unpack=function(e,n,h){return i.Check.defined("array",e),n=t.defaultValue(n,0),t.defined(h)||(h=new a),h.x=e[n++],h.y=e[n++],h.width=e[n++],h.height=e[n],h},a.fromPoints=function(e,i){if(t.defined(i)||(i=new a),!t.defined(e)||0===e.length)return i.x=0,i.y=0,i.width=0,i.height=0,i;for(var n=e.length,h=e[0].x,r=e[0].y,d=e[0].x,c=e[0].y,f=1;f<n;f++){var u=e[f],o=u.x,y=u.y;h=Math.min(o,h),d=Math.max(o,d),r=Math.min(y,r),c=Math.max(y,c)}return i.x=h,i.y=r,i.width=d-h,i.height=c-r,i};var d=new h.GeographicProjection,c=new n.Cartographic,f=new n.Cartographic;a.fromRectangle=function(e,i,n){if(t.defined(n)||(n=new a),!t.defined(e))return n.x=0,n.y=0,n.width=0,n.height=0,n;var h=(i=t.defaultValue(i,d)).project(r.Rectangle.southwest(e,c)),u=i.project(r.Rectangle.northeast(e,f));return r.Cartesian2.subtract(u,h,u),n.x=h.x,n.y=h.y,n.width=u.x,n.height=u.y,n},a.clone=function(e,i){if(t.defined(e))return t.defined(i)?(i.x=e.x,i.y=e.y,i.width=e.width,i.height=e.height,i):new a(e.x,e.y,e.width,e.height)},a.union=function(e,n,h){i.Check.typeOf.object("left",e),i.Check.typeOf.object("right",n),t.defined(h)||(h=new a);var r=Math.min(e.x,n.x),d=Math.min(e.y,n.y),c=Math.max(e.x+e.width,n.x+n.width),f=Math.max(e.y+e.height,n.y+n.height);return h.x=r,h.y=d,h.width=c-r,h.height=f-d,h},a.expand=function(e,t,n){i.Check.typeOf.object("rectangle",e),i.Check.typeOf.object("point",t),n=a.clone(e,n);var h=t.x-n.x,r=t.y-n.y;return h>n.width?n.width=h:h<0&&(n.width-=h,n.x=t.x),r>n.height?n.height=r:r<0&&(n.height-=r,n.y=t.y),n},a.intersect=function(e,t){i.Check.typeOf.object("left",e),i.Check.typeOf.object("right",t);var n=e.x,r=e.y,a=t.x,d=t.y;return n>a+t.width||n+e.width<a||r+e.height<d||r>d+t.height?h.Intersect.OUTSIDE:h.Intersect.INTERSECTING},a.equals=function(e,i){return e===i||t.defined(e)&&t.defined(i)&&e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height},a.prototype.clone=function(e){return a.clone(this,e)},a.prototype.intersect=function(e){return a.intersect(this,e)},a.prototype.equals=function(e){return a.equals(this,e)},e.BoundingRectangle=a}));
//# sourceMappingURL=BoundingRectangle-335c7812.js.map