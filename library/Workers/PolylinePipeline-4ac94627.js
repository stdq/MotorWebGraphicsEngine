/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-4ca4e419","./Check-430b3551","./defineProperties-163ddb68","./Cartesian3-32451e63","./Ellipsoid-d2aa3b12","./Transforms-7b04d7e0","./Matrix4-33464f2b","./IntersectionTests-15d018f5","./Plane-84b14a0a","./EllipsoidRhumbLine-c004db91","./EllipsoidGeodesic-c57b5e5c"],(function(a,e,r,i,t,n,o,s,c,l,u,h){"use strict";var f={numberOfPoints:function(a,e,r){var i=t.Cartesian3.distance(a,e);return Math.ceil(i/r)},numberOfPointsRhumbLine:function(a,e,r){var i=Math.pow(a.longitude-e.longitude,2)+Math.pow(a.latitude-e.latitude,2);return Math.ceil(Math.sqrt(i/(r*r)))}},d=new n.Cartographic;f.extractHeights=function(a,e){for(var r=a.length,i=new Array(r),t=0;t<r;t++){var n=a[t];i[t]=e.cartesianToCartographic(n,d).height}return i};var p=new s.Matrix4,C=new t.Cartesian3,g=new t.Cartesian3,v=new l.Plane(t.Cartesian3.UNIT_X,0),m=new t.Cartesian3,w=new l.Plane(t.Cartesian3.UNIT_X,0),T=new t.Cartesian3,P=new t.Cartesian3,y=[];function b(a,e,r){var i,t=y;if(t.length=a,e===r){for(i=0;i<a;i++)t[i]=e;return t}var n=(r-e)/a;for(i=0;i<a;i++){var o=e+i*n;t[i]=o}return t}var E=new n.Cartographic,A=new n.Cartographic,S=new t.Cartesian3,R=new t.Cartesian3,D=new t.Cartesian3,M=new h.EllipsoidGeodesic,x=new u.EllipsoidRhumbLine;function G(a,e,r,i,n,o,s,c){var l=i.scaleToGeodeticSurface(a,R),u=i.scaleToGeodeticSurface(e,D),h=f.numberOfPoints(a,e,r),d=i.cartesianToCartographic(l,E),p=i.cartesianToCartographic(u,A),C=b(h,n,o);M.setEndPoints(d,p);var g=M.surfaceDistance/h,v=c;d.height=n;var m=i.cartographicToCartesian(d,S);t.Cartesian3.pack(m,s,v),v+=3;for(var w=1;w<h;w++){var T=M.interpolateUsingSurfaceDistance(w*g,A);T.height=C[w],m=i.cartographicToCartesian(T,S),t.Cartesian3.pack(m,s,v),v+=3}return v}function N(a,e,r,i,n,o,s,c){var l=i.scaleToGeodeticSurface(a,R),h=i.scaleToGeodeticSurface(e,D),d=i.cartesianToCartographic(l,E),p=i.cartesianToCartographic(h,A),C=f.numberOfPointsRhumbLine(d,p,r),g=b(C,n,o);x.ellipsoid.equals(i)||(x=new u.EllipsoidRhumbLine(void 0,void 0,i)),x.setEndPoints(d,p);var v=x.surfaceDistance/C,m=c;d.height=n;var w=i.cartographicToCartesian(d,S);t.Cartesian3.pack(w,s,m),m+=3;for(var T=1;T<C;T++){var P=x.interpolateUsingSurfaceDistance(T*v,A);P.height=g[T],w=i.cartographicToCartesian(P,S),t.Cartesian3.pack(w,s,m),m+=3}return m}f.wrapLongitude=function(a,r){var i=[],n=[];if(e.defined(a)&&a.length>0){r=e.defaultValue(r,s.Matrix4.IDENTITY);var o=s.Matrix4.inverseTransformation(r,p),u=s.Matrix4.multiplyByPoint(o,t.Cartesian3.ZERO,C),h=t.Cartesian3.normalize(s.Matrix4.multiplyByPointAsVector(o,t.Cartesian3.UNIT_Y,g),g),f=l.Plane.fromPointNormal(u,h,v),d=t.Cartesian3.normalize(s.Matrix4.multiplyByPointAsVector(o,t.Cartesian3.UNIT_X,m),m),y=l.Plane.fromPointNormal(u,d,w),b=1;i.push(t.Cartesian3.clone(a[0]));for(var E=i[0],A=a.length,S=1;S<A;++S){var R=a[S];if(l.Plane.getPointDistance(y,E)<0||l.Plane.getPointDistance(y,R)<0){var D=c.IntersectionTests.lineSegmentPlane(E,R,f,T);if(e.defined(D)){var M=t.Cartesian3.multiplyByScalar(h,5e-9,P);l.Plane.getPointDistance(f,E)<0&&t.Cartesian3.negate(M,M),i.push(t.Cartesian3.add(D,M,new t.Cartesian3)),n.push(b+1),t.Cartesian3.negate(M,M),i.push(t.Cartesian3.add(D,M,new t.Cartesian3)),b=1}}i.push(t.Cartesian3.clone(a[S])),b++,E=R}n.push(b)}return{positions:i,lengths:n}},f.generateArc=function(a){e.defined(a)||(a={});var s=a.positions;if(!e.defined(s))throw new r.DeveloperError("options.positions is required.");var c=s.length,l=e.defaultValue(a.ellipsoid,n.Ellipsoid.WGS84),u=e.defaultValue(a.height,0),h=o.isArray(u);if(c<1)return[];if(1===c){var d=l.scaleToGeodeticSurface(s[0],R);if(0!==(u=h?u[0]:u)){var p=l.geodeticSurfaceNormal(d,S);t.Cartesian3.multiplyByScalar(p,u,p),t.Cartesian3.add(d,p,d)}return[d.x,d.y,d.z]}var C=a.minDistance;if(!e.defined(C)){var g=e.defaultValue(a.granularity,i.CesiumMath.RADIANS_PER_DEGREE);C=i.CesiumMath.chordLength(g,l.maximumRadius)}var v,m=0;for(v=0;v<c-1;v++)m+=f.numberOfPoints(s[v],s[v+1],C);var w=3*(m+1),T=new Array(w),P=0;for(v=0;v<c-1;v++){P=G(s[v],s[v+1],C,l,h?u[v]:u,h?u[v+1]:u,T,P)}y.length=0;var b=s[c-1],A=l.cartesianToCartographic(b,E);A.height=h?u[c-1]:u;var D=l.cartographicToCartesian(A,S);return t.Cartesian3.pack(D,T,w-3),T};var I=new n.Cartographic,k=new n.Cartographic;f.generateRhumbArc=function(a){e.defined(a)||(a={});var s=a.positions;if(!e.defined(s))throw new r.DeveloperError("options.positions is required.");var c=s.length,l=e.defaultValue(a.ellipsoid,n.Ellipsoid.WGS84),u=e.defaultValue(a.height,0),h=o.isArray(u);if(c<1)return[];if(1===c){var d=l.scaleToGeodeticSurface(s[0],R);if(0!==(u=h?u[0]:u)){var p=l.geodeticSurfaceNormal(d,S);t.Cartesian3.multiplyByScalar(p,u,p),t.Cartesian3.add(d,p,d)}return[d.x,d.y,d.z]}var C,g,v=e.defaultValue(a.granularity,i.CesiumMath.RADIANS_PER_DEGREE),m=0,w=l.cartesianToCartographic(s[0],I);for(C=0;C<c-1;C++)g=l.cartesianToCartographic(s[C+1],k),m+=f.numberOfPointsRhumbLine(w,g,v),w=n.Cartographic.clone(g,I);var T=3*(m+1),P=new Array(T),b=0;for(C=0;C<c-1;C++){b=N(s[C],s[C+1],v,l,h?u[C]:u,h?u[C+1]:u,P,b)}y.length=0;var A=s[c-1],D=l.cartesianToCartographic(A,E);D.height=h?u[c-1]:u;var M=l.cartographicToCartesian(D,S);return t.Cartesian3.pack(M,P,T-3),P},f.generateCartesianArc=function(a){for(var e=f.generateArc(a),r=e.length/3,i=new Array(r),n=0;n<r;n++)i[n]=t.Cartesian3.unpack(e,3*n);return i},f.generateCartesianRhumbArc=function(a){for(var e=f.generateRhumbArc(a),r=e.length/3,i=new Array(r),n=0;n<r;n++)i[n]=t.Cartesian3.unpack(e,3*n);return i},a.PolylinePipeline=f}));