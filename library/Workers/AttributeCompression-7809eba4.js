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
define(["exports","./when-4ca4e419","./Check-430b3551","./defineProperties-163ddb68","./Cartesian3-32451e63","./Cartesian2-f49a1383"],(function(e,t,n,o,r,a){"use strict";var c={octEncodeInRange:function(e,t,a){n.Check.defined("vector",e),n.Check.defined("result",a);var c=r.Cartesian3.magnitudeSquared(e);if(Math.abs(c-1)>o.CesiumMath.EPSILON6)throw new n.DeveloperError("vector must be normalized.");if(a.x=e.x/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),a.y=e.y/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),e.z<0){var d=a.x,i=a.y;a.x=(1-Math.abs(i))*o.CesiumMath.signNotZero(d),a.y=(1-Math.abs(d))*o.CesiumMath.signNotZero(i)}return a.x=o.CesiumMath.toSNorm(a.x,t),a.y=o.CesiumMath.toSNorm(a.y,t),a},octEncode:function(e,t){return c.octEncodeInRange(e,255,t)}},d=new a.Cartesian2,i=new Uint8Array(1);function u(e){return i[0]=e,i[0]}c.octEncodeToCartesian4=function(e,t){return c.octEncodeInRange(e,65535,d),t.x=u(d.x*(1/256)),t.y=u(d.x),t.z=u(d.y*(1/256)),t.w=u(d.y),t},c.octDecodeInRange=function(e,t,a,c){if(n.Check.defined("result",c),e<0||e>a||t<0||t>a)throw new n.DeveloperError("x and y must be unsigned normalized integers between 0 and "+a);if(c.x=o.CesiumMath.fromSNorm(e,a),c.y=o.CesiumMath.fromSNorm(t,a),c.z=1-(Math.abs(c.x)+Math.abs(c.y)),c.z<0){var d=c.x;c.x=(1-Math.abs(c.y))*o.CesiumMath.signNotZero(d),c.y=(1-Math.abs(d))*o.CesiumMath.signNotZero(c.y)}return r.Cartesian3.normalize(c,c)},c.octDecode=function(e,t,n){return c.octDecodeInRange(e,t,255,n)},c.octDecodeFromCartesian4=function(e,t){n.Check.typeOf.object("encoded",e),n.Check.typeOf.object("result",t);var o=e.x,r=e.y,a=e.z,d=e.w;if(o<0||o>255||r<0||r>255||a<0||a>255||d<0||d>255)throw new n.DeveloperError("x, y, z, and w must be unsigned normalized integers between 0 and 255");var i=256*o+r,u=256*a+d;return c.octDecodeInRange(i,u,65535,t)},c.octPackFloat=function(e){return n.Check.defined("encoded",e),256*e.x+e.y};var f=new a.Cartesian2;function h(e){return e>>1^-(1&e)}c.octEncodeFloat=function(e){return c.octEncode(e,f),c.octPackFloat(f)},c.octDecodeFloat=function(e,t){n.Check.defined("value",e);var o=e/256,r=Math.floor(o),a=256*(o-r);return c.octDecode(r,a,t)},c.octPack=function(e,t,o,r){n.Check.defined("v1",e),n.Check.defined("v2",t),n.Check.defined("v3",o),n.Check.defined("result",r);var a=c.octEncodeFloat(e),d=c.octEncodeFloat(t),i=c.octEncode(o,f);return r.x=65536*i.x+a,r.y=65536*i.y+d,r},c.octUnpack=function(e,t,o,r){n.Check.defined("packed",e),n.Check.defined("v1",t),n.Check.defined("v2",o),n.Check.defined("v3",r);var a=e.x/65536,d=Math.floor(a),i=65536*(a-d);a=e.y/65536;var u=Math.floor(a),f=65536*(a-u);c.octDecodeFloat(i,t),c.octDecodeFloat(f,o),c.octDecode(d,u,r)},c.compressTextureCoordinates=function(e){return n.Check.defined("textureCoordinates",e),4096*(4095*e.x|0)+(4095*e.y|0)},c.decompressTextureCoordinates=function(e,t){n.Check.defined("compressed",e),n.Check.defined("result",t);var o=e/4096,r=Math.floor(o);return t.x=r/4095,t.y=(e-4096*r)/4095,t},c.zigZagDeltaDecode=function(e,o,r){n.Check.defined("uBuffer",e),n.Check.defined("vBuffer",o),n.Check.typeOf.number.equals("uBuffer.length","vBuffer.length",e.length,o.length),t.defined(r)&&n.Check.typeOf.number.equals("uBuffer.length","heightBuffer.length",e.length,r.length);for(var a=e.length,c=0,d=0,i=0,u=0;u<a;++u)c+=h(e[u]),d+=h(o[u]),e[u]=c,o[u]=d,t.defined(r)&&(i+=h(r[u]),r[u]=i)},e.AttributeCompression=c}));
