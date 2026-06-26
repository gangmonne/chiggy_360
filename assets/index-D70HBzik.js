var Xs=Object.defineProperty;var qs=(i,t,e)=>t in i?Xs(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var yt=(i,t,e)=>qs(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const Ea="fmv360_state";class Ys{constructor(t={}){yt(this,"state");this.initial=t;const e=localStorage.getItem(Ea);this.state=e?{...t,...JSON.parse(e)}:{...t}}get(){return this.state}apply(t){if(t){for(const[e,n]of Object.entries(t))this.state[e]=(this.state[e]??0)+n;this.save()}}set(t,e){this.state[t]=e,this.save()}reset(){this.state={...this.initial},localStorage.removeItem(Ea)}checkCondition(t){if(!t)return!0;for(const[e,n]of Object.entries(t)){const a=this.state[e]??0;if(n.gte!==void 0&&a<n.gte||n.lte!==void 0&&a>n.lte||n.eq!==void 0&&a!==n.eq)return!1}return!0}save(){localStorage.setItem(Ea,JSON.stringify(this.state))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="167",Ks=0,tr=1,$s=2,os=1,Zs=2,Ke=3,Je=0,ve=1,Ve=2,dn=0,Yn=1,Za=2,er=3,nr=4,Js=5,bn=100,Qs=101,tc=102,ec=103,nc=104,ic=200,ac=201,oc=202,rc=203,Ja=204,Qa=205,sc=206,cc=207,lc=208,dc=209,hc=210,uc=211,fc=212,pc=213,mc=214,_c=0,gc=1,vc=2,sa=3,xc=4,Sc=5,Mc=6,bc=7,rs=0,Ec=1,yc=2,hn=0,Ac=1,Tc=2,wc=3,Cc=4,Rc=5,Dc=6,Pc=7,ss=300,Zn=301,Jn=302,to=303,eo=304,_a=306,no=1e3,yn=1001,io=1002,we=1003,Lc=1004,Ri=1005,Ne=1006,ya=1007,An=1008,Qe=1009,cs=1010,ls=1011,vi=1012,Io=1013,Tn=1014,$e=1015,Mi=1016,No=1017,Bo=1018,Qn=1020,ds=35902,hs=1021,us=1022,Be=1023,fs=1024,ps=1025,Kn=1026,ti=1027,ms=1028,Fo=1029,_s=1030,Oo=1031,ko=1033,ea=33776,na=33777,ia=33778,aa=33779,ao=35840,oo=35841,ro=35842,so=35843,co=36196,lo=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,_o=37812,go=37813,vo=37814,xo=37815,So=37816,Mo=37817,bo=37818,Eo=37819,yo=37820,Ao=37821,oa=36492,To=36494,wo=36495,gs=36283,Co=36284,Ro=36285,Do=36286,Uc=3200,Ic=3201,Nc=0,Bc=1,ln="",Ae="srgb",un="srgb-linear",Vo="display-p3",ga="display-p3-linear",ca="linear",Yt="srgb",la="rec709",da="p3",Rn=7680,ir=519,Fc=512,Oc=513,kc=514,vs=515,Vc=516,zc=517,Hc=518,Gc=519,ar=35044,or="300 es",Ze=2e3,ha=2001;class ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let o=0,r=a.length;o<r;o++)a[o].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rr=1234567;const pi=Math.PI/180,xi=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(he[i&255]+he[i>>8&255]+he[i>>16&255]+he[i>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function zo(i,t){return(i%t+t)%t}function Wc(i,t,e,n,a){return n+(i-t)*(a-n)/(e-t)}function jc(i,t,e){return i!==t?(e-i)/(t-i):0}function mi(i,t,e){return(1-e)*i+e*t}function Xc(i,t,e,n){return mi(i,t,1-Math.exp(-e*n))}function qc(i,t=1){return t-Math.abs(zo(i,t*2)-t)}function Yc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $c(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zc(i,t){return i+Math.random()*(t-i)}function Jc(i){return i*(.5-Math.random())}function Qc(i){i!==void 0&&(rr=i);let t=rr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tl(i){return i*pi}function el(i){return i*xi}function nl(i){return(i&i-1)===0&&i!==0}function il(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function al(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ol(i,t,e,n,a){const o=Math.cos,r=Math.sin,s=o(e/2),c=r(e/2),l=o((t+n)/2),d=r((t+n)/2),u=o((t-n)/2),p=r((t-n)/2),m=o((n-t)/2),g=r((n-t)/2);switch(a){case"XYX":i.set(s*d,c*u,c*p,s*l);break;case"YZY":i.set(c*p,s*d,c*u,s*l);break;case"ZXZ":i.set(c*u,c*p,s*d,s*l);break;case"XZX":i.set(s*d,c*g,c*m,s*l);break;case"YXY":i.set(c*m,s*d,c*g,s*l);break;case"ZYZ":i.set(c*g,c*m,s*d,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ua={DEG2RAD:pi,RAD2DEG:xi,generateUUID:ii,clamp:me,euclideanModulo:zo,mapLinear:Wc,inverseLerp:jc,lerp:mi,damp:Xc,pingpong:qc,smoothstep:Yc,smootherstep:Kc,randInt:$c,randFloat:Zc,randFloatSpread:Jc,seededRandom:Qc,degToRad:tl,radToDeg:el,isPowerOfTwo:nl,ceilPowerOfTwo:il,floorPowerOfTwo:al,setQuaternionFromProperEuler:ol,normalize:fe,denormalize:Xn};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*a+t.x,this.y=o*a+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,a,o,r,s,c,l){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,o,r,s,c,l)}set(t,e,n,a,o,r,s,c,l){const d=this.elements;return d[0]=t,d[1]=a,d[2]=s,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,o=this.elements,r=n[0],s=n[3],c=n[6],l=n[1],d=n[4],u=n[7],p=n[2],m=n[5],g=n[8],x=a[0],f=a[3],h=a[6],y=a[1],M=a[4],A=a[7],O=a[2],C=a[5],w=a[8];return o[0]=r*x+s*y+c*O,o[3]=r*f+s*M+c*C,o[6]=r*h+s*A+c*w,o[1]=l*x+d*y+u*O,o[4]=l*f+d*M+u*C,o[7]=l*h+d*A+u*w,o[2]=p*x+m*y+g*O,o[5]=p*f+m*M+g*C,o[8]=p*h+m*A+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],o=t[3],r=t[4],s=t[5],c=t[6],l=t[7],d=t[8];return e*r*d-e*s*l-n*o*d+n*s*c+a*o*l-a*r*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],o=t[3],r=t[4],s=t[5],c=t[6],l=t[7],d=t[8],u=d*r-s*l,p=s*c-d*o,m=l*o-r*c,g=e*u+n*p+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(a*l-d*n)*x,t[2]=(s*n-a*r)*x,t[3]=p*x,t[4]=(d*e-a*c)*x,t[5]=(a*o-s*e)*x,t[6]=m*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,o,r,s){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*s)+r+t,-a*l,a*c,-a*(-l*r+c*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Pt;function xs(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Si(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rl(){const i=Si("canvas");return i.style.display="block",i}const sr={};function _i(i){i in sr||(sr[i]=!0,console.warn(i))}function sl(i,t,e){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const cr=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lr=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ri={[un]:{transfer:ca,primaries:la,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ae]:{transfer:Yt,primaries:la,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ga]:{transfer:ca,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(lr),fromReference:i=>i.applyMatrix3(cr)},[Vo]:{transfer:Yt,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(lr),fromReference:i=>i.applyMatrix3(cr).convertLinearToSRGB()}},cl=new Set([un,ga]),Ht={enabled:!0,_workingColorSpace:un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ri[t].toReference,a=ri[e].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ri[i].primaries},getTransfer:function(i){return i===ln?ca:ri[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ri[t].luminanceCoefficients)}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dn;class ll{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dn===void 0&&(Dn=Si("canvas")),Dn.width=t.width,Dn.height=t.height;const n=Dn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Dn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Si("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),o=a.data;for(let r=0;r<o.length;r++)o[r]=$n(o[r]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dl=0;class Ss{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dl++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let r=0,s=a.length;r<s;r++)a[r].isDataTexture?o.push(wa(a[r].image)):o.push(wa(a[r]))}else o=wa(a);n.url=o}return e||(t.images[this.uuid]=n),n}}function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hl=0;class _e extends ni{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=yn,a=yn,o=Ne,r=An,s=Be,c=Qe,l=_e.DEFAULT_ANISOTROPY,d=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=ii(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ss)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=ss;_e.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,a=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*a+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*a+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*a+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,o;const c=t.elements,l=c[0],d=c[4],u=c[8],p=c[1],m=c[5],g=c[9],x=c[2],f=c[6],h=c[10];if(Math.abs(d-p)<.01&&Math.abs(u-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,A=(m+1)/2,O=(h+1)/2,C=(d+p)/4,w=(u+x)/4,B=(g+f)/4;return M>A&&M>O?M<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(M),a=C/n,o=w/n):A>O?A<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(A),n=C/a,o=B/a):O<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(O),n=w/o,a=B/o),this.set(n,a,o,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-x)*(u-x)+(p-d)*(p-d));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-x)/y,this.z=(p-d)/y,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ul extends ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const a={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new _e(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ss(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ms extends _e{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=we,this.minFilter=we,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fl extends _e{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=we,this.minFilter=we,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,o,r,s){let c=n[a+0],l=n[a+1],d=n[a+2],u=n[a+3];const p=o[r+0],m=o[r+1],g=o[r+2],x=o[r+3];if(s===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(s===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==p||l!==m||d!==g){let f=1-s;const h=c*p+l*m+d*g+u*x,y=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const O=Math.sqrt(M),C=Math.atan2(O,h*y);f=Math.sin(f*C)/O,s=Math.sin(s*C)/O}const A=s*y;if(c=c*f+p*A,l=l*f+m*A,d=d*f+g*A,u=u*f+x*A,f===1-s){const O=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=O,l*=O,d*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,a,o,r){const s=n[a],c=n[a+1],l=n[a+2],d=n[a+3],u=o[r],p=o[r+1],m=o[r+2],g=o[r+3];return t[e]=s*g+d*u+c*m-l*p,t[e+1]=c*g+d*p+l*u-s*m,t[e+2]=l*g+d*m+s*p-c*u,t[e+3]=d*g-s*u-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,o=t._z,r=t._order,s=Math.cos,c=Math.sin,l=s(n/2),d=s(a/2),u=s(o/2),p=c(n/2),m=c(a/2),g=c(o/2);switch(r){case"XYZ":this._x=p*d*u+l*m*g,this._y=l*m*u-p*d*g,this._z=l*d*g+p*m*u,this._w=l*d*u-p*m*g;break;case"YXZ":this._x=p*d*u+l*m*g,this._y=l*m*u-p*d*g,this._z=l*d*g-p*m*u,this._w=l*d*u+p*m*g;break;case"ZXY":this._x=p*d*u-l*m*g,this._y=l*m*u+p*d*g,this._z=l*d*g+p*m*u,this._w=l*d*u-p*m*g;break;case"ZYX":this._x=p*d*u-l*m*g,this._y=l*m*u+p*d*g,this._z=l*d*g-p*m*u,this._w=l*d*u+p*m*g;break;case"YZX":this._x=p*d*u+l*m*g,this._y=l*m*u+p*d*g,this._z=l*d*g-p*m*u,this._w=l*d*u-p*m*g;break;case"XZY":this._x=p*d*u-l*m*g,this._y=l*m*u-p*d*g,this._z=l*d*g+p*m*u,this._w=l*d*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],o=e[8],r=e[1],s=e[5],c=e[9],l=e[2],d=e[6],u=e[10],p=n+s+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(o-l)*m,this._z=(r-a)*m}else if(n>s&&n>u){const m=2*Math.sqrt(1+n-s-u);this._w=(d-c)/m,this._x=.25*m,this._y=(a+r)/m,this._z=(o+l)/m}else if(s>u){const m=2*Math.sqrt(1+s-n-u);this._w=(o-l)/m,this._x=(a+r)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-n-s);this._w=(r-a)/m,this._x=(o+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,o=t._z,r=t._w,s=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+r*s+a*l-o*c,this._y=a*d+r*c+o*s-n*l,this._z=o*d+r*l+n*c-a*s,this._w=r*d-n*s-a*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,o=this._z,r=this._w;let s=r*t._w+n*t._x+a*t._y+o*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=r,this._x=n,this._y=a,this._z=o,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*a+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,s),u=Math.sin((1-e)*d)/l,p=Math.sin(e*d)/l;return this._w=r*u+this._w*p,this._x=n*u+this._x*p,this._y=a*u+this._y*p,this._z=o*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*a,this.y=o[1]*e+o[4]*n+o[7]*a,this.z=o[2]*e+o[5]*n+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*a+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*a+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*a+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,o=t.x,r=t.y,s=t.z,c=t.w,l=2*(r*a-s*n),d=2*(s*e-o*a),u=2*(o*n-r*e);return this.x=e+c*l+r*u-s*d,this.y=n+c*d+s*l-o*u,this.z=a+c*u+o*d-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*a,this.y=o[1]*e+o[5]*n+o[9]*a,this.z=o[2]*e+o[6]*n+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,o=t.z,r=e.x,s=e.y,c=e.z;return this.x=a*c-o*s,this.y=o*r-n*c,this.z=n*s-a*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new U,dr=new bi;class Ei{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Le.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Le.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Le.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,s=o.count;r<s;r++)t.isMesh===!0?t.getVertexPosition(r,Le):Le.fromBufferAttribute(o,r),Le.applyMatrix4(t.matrixWorld),this.expandByPoint(Le);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Di.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Di.copy(n.boundingBox)),Di.applyMatrix4(t.matrixWorld),this.union(Di)}const a=t.children;for(let o=0,r=a.length;o<r;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Le),Le.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(si),Pi.subVectors(this.max,si),Pn.subVectors(t.a,si),Ln.subVectors(t.b,si),Un.subVectors(t.c,si),nn.subVectors(Ln,Pn),an.subVectors(Un,Ln),pn.subVectors(Pn,Un);let e=[0,-nn.z,nn.y,0,-an.z,an.y,0,-pn.z,pn.y,nn.z,0,-nn.x,an.z,0,-an.x,pn.z,0,-pn.x,-nn.y,nn.x,0,-an.y,an.x,0,-pn.y,pn.x,0];return!Ra(e,Pn,Ln,Un,Pi)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,Pn,Ln,Un,Pi))?!1:(Li.crossVectors(nn,an),e=[Li.x,Li.y,Li.z],Ra(e,Pn,Ln,Un,Pi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Le).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Le).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const We=[new U,new U,new U,new U,new U,new U,new U,new U],Le=new U,Di=new Ei,Pn=new U,Ln=new U,Un=new U,nn=new U,an=new U,pn=new U,si=new U,Pi=new U,Li=new U,mn=new U;function Ra(i,t,e,n,a){for(let o=0,r=i.length-3;o<=r;o+=3){mn.fromArray(i,o);const s=a.x*Math.abs(mn.x)+a.y*Math.abs(mn.y)+a.z*Math.abs(mn.z),c=t.dot(mn),l=e.dot(mn),d=n.dot(mn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>s)return!1}return!0}const pl=new Ei,ci=new U,Da=new U;class yi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pl.setFromPoints(t).getCenter(n);let a=0;for(let o=0,r=t.length;o<r;o++)a=Math.max(a,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ci.subVectors(t,this.center);const e=ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(ci,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ci.copy(t.center).add(Da)),this.expandByPoint(ci.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new U,Pa=new U,Ui=new U,on=new U,La=new U,Ii=new U,Ua=new U;class Ho{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Pa.copy(t).add(e).multiplyScalar(.5),Ui.copy(e).sub(t).normalize(),on.copy(this.origin).sub(Pa);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ui),s=on.dot(this.direction),c=-on.dot(Ui),l=on.lengthSq(),d=Math.abs(1-r*r);let u,p,m,g;if(d>0)if(u=r*c-s,p=r*s-c,g=o*d,u>=0)if(p>=-g)if(p<=g){const x=1/d;u*=x,p*=x,m=u*(u+r*p+2*s)+p*(r*u+p+2*c)+l}else p=o,u=Math.max(0,-(r*p+s)),m=-u*u+p*(p+2*c)+l;else p=-o,u=Math.max(0,-(r*p+s)),m=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-r*o+s)),p=u>0?-o:Math.min(Math.max(-o,-c),o),m=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-o,-c),o),m=p*(p+2*c)+l):(u=Math.max(0,-(r*o+s)),p=u>0?o:Math.min(Math.max(-o,-c),o),m=-u*u+p*(p+2*c)+l);else p=r>0?-o:o,u=Math.max(0,-(r*p+s)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Pa).addScaledVector(Ui,p),m}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),a=je.dot(je)-n*n,o=t.radius*t.radius;if(a>o)return null;const r=Math.sqrt(o-a),s=n-r,c=n+r;return c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,o,r,s,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,a=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,a=(t.min.x-p.x)*l),d>=0?(o=(t.min.y-p.y)*d,r=(t.max.y-p.y)*d):(o=(t.max.y-p.y)*d,r=(t.min.y-p.y)*d),n>r||o>a||((o>n||isNaN(n))&&(n=o),(r<a||isNaN(a))&&(a=r),u>=0?(s=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(s=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||s>a)||((s>n||n!==n)&&(n=s),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,a,o){La.subVectors(e,t),Ii.subVectors(n,t),Ua.crossVectors(La,Ii);let r=this.direction.dot(Ua),s;if(r>0){if(a)return null;s=1}else if(r<0)s=-1,r=-r;else return null;on.subVectors(this.origin,t);const c=s*this.direction.dot(Ii.crossVectors(on,Ii));if(c<0)return null;const l=s*this.direction.dot(La.cross(on));if(l<0||c+l>r)return null;const d=-s*on.dot(Ua);return d<0?null:this.at(d/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,a,o,r,s,c,l,d,u,p,m,g,x,f){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,o,r,s,c,l,d,u,p,m,g,x,f)}set(t,e,n,a,o,r,s,c,l,d,u,p,m,g,x,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=a,h[1]=o,h[5]=r,h[9]=s,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=p,h[3]=m,h[7]=g,h[11]=x,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/In.setFromMatrixColumn(t,0).length(),o=1/In.setFromMatrixColumn(t,1).length(),r=1/In.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,o=t.z,r=Math.cos(n),s=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const p=r*d,m=r*u,g=s*d,x=s*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=p-x*l,e[9]=-s*c,e[2]=x-p*l,e[6]=g+m*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*d,m=c*u,g=l*d,x=l*u;e[0]=p+x*s,e[4]=g*s-m,e[8]=r*l,e[1]=r*u,e[5]=r*d,e[9]=-s,e[2]=m*s-g,e[6]=x+p*s,e[10]=r*c}else if(t.order==="ZXY"){const p=c*d,m=c*u,g=l*d,x=l*u;e[0]=p-x*s,e[4]=-r*u,e[8]=g+m*s,e[1]=m+g*s,e[5]=r*d,e[9]=x-p*s,e[2]=-r*l,e[6]=s,e[10]=r*c}else if(t.order==="ZYX"){const p=r*d,m=r*u,g=s*d,x=s*u;e[0]=c*d,e[4]=g*l-m,e[8]=p*l+x,e[1]=c*u,e[5]=x*l+p,e[9]=m*l-g,e[2]=-l,e[6]=s*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,m=r*l,g=s*c,x=s*l;e[0]=c*d,e[4]=x-p*u,e[8]=g*u+m,e[1]=u,e[5]=r*d,e[9]=-s*d,e[2]=-l*d,e[6]=m*u+g,e[10]=p-x*u}else if(t.order==="XZY"){const p=r*c,m=r*l,g=s*c,x=s*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=p*u+x,e[5]=r*d,e[9]=m*u-g,e[2]=g*u-m,e[6]=s*d,e[10]=x*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ml,t,_l)}lookAt(t,e,n){const a=this.elements;return Me.subVectors(t,e),Me.lengthSq()===0&&(Me.z=1),Me.normalize(),rn.crossVectors(n,Me),rn.lengthSq()===0&&(Math.abs(n.z)===1?Me.x+=1e-4:Me.z+=1e-4,Me.normalize(),rn.crossVectors(n,Me)),rn.normalize(),Ni.crossVectors(Me,rn),a[0]=rn.x,a[4]=Ni.x,a[8]=Me.x,a[1]=rn.y,a[5]=Ni.y,a[9]=Me.y,a[2]=rn.z,a[6]=Ni.z,a[10]=Me.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,o=this.elements,r=n[0],s=n[4],c=n[8],l=n[12],d=n[1],u=n[5],p=n[9],m=n[13],g=n[2],x=n[6],f=n[10],h=n[14],y=n[3],M=n[7],A=n[11],O=n[15],C=a[0],w=a[4],B=a[8],b=a[12],S=a[1],R=a[5],H=a[9],k=a[13],q=a[2],X=a[6],G=a[10],Y=a[14],V=a[3],rt=a[7],dt=a[11],mt=a[15];return o[0]=r*C+s*S+c*q+l*V,o[4]=r*w+s*R+c*X+l*rt,o[8]=r*B+s*H+c*G+l*dt,o[12]=r*b+s*k+c*Y+l*mt,o[1]=d*C+u*S+p*q+m*V,o[5]=d*w+u*R+p*X+m*rt,o[9]=d*B+u*H+p*G+m*dt,o[13]=d*b+u*k+p*Y+m*mt,o[2]=g*C+x*S+f*q+h*V,o[6]=g*w+x*R+f*X+h*rt,o[10]=g*B+x*H+f*G+h*dt,o[14]=g*b+x*k+f*Y+h*mt,o[3]=y*C+M*S+A*q+O*V,o[7]=y*w+M*R+A*X+O*rt,o[11]=y*B+M*H+A*G+O*dt,o[15]=y*b+M*k+A*Y+O*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],o=t[12],r=t[1],s=t[5],c=t[9],l=t[13],d=t[2],u=t[6],p=t[10],m=t[14],g=t[3],x=t[7],f=t[11],h=t[15];return g*(+o*c*u-a*l*u-o*s*p+n*l*p+a*s*m-n*c*m)+x*(+e*c*m-e*l*p+o*r*p-a*r*m+a*l*d-o*c*d)+f*(+e*l*u-e*s*m-o*r*u+n*r*m+o*s*d-n*l*d)+h*(-a*s*d-e*c*u+e*s*p+a*r*u-n*r*p+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],o=t[3],r=t[4],s=t[5],c=t[6],l=t[7],d=t[8],u=t[9],p=t[10],m=t[11],g=t[12],x=t[13],f=t[14],h=t[15],y=u*f*l-x*p*l+x*c*m-s*f*m-u*c*h+s*p*h,M=g*p*l-d*f*l-g*c*m+r*f*m+d*c*h-r*p*h,A=d*x*l-g*u*l+g*s*m-r*x*m-d*s*h+r*u*h,O=g*u*c-d*x*c-g*s*p+r*x*p+d*s*f-r*u*f,C=e*y+n*M+a*A+o*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=y*w,t[1]=(x*p*o-u*f*o-x*a*m+n*f*m+u*a*h-n*p*h)*w,t[2]=(s*f*o-x*c*o+x*a*l-n*f*l-s*a*h+n*c*h)*w,t[3]=(u*c*o-s*p*o-u*a*l+n*p*l+s*a*m-n*c*m)*w,t[4]=M*w,t[5]=(d*f*o-g*p*o+g*a*m-e*f*m-d*a*h+e*p*h)*w,t[6]=(g*c*o-r*f*o-g*a*l+e*f*l+r*a*h-e*c*h)*w,t[7]=(r*p*o-d*c*o+d*a*l-e*p*l-r*a*m+e*c*m)*w,t[8]=A*w,t[9]=(g*u*o-d*x*o-g*n*m+e*x*m+d*n*h-e*u*h)*w,t[10]=(r*x*o-g*s*o+g*n*l-e*x*l-r*n*h+e*s*h)*w,t[11]=(d*s*o-r*u*o-d*n*l+e*u*l+r*n*m-e*s*m)*w,t[12]=O*w,t[13]=(d*x*a-g*u*a+g*n*p-e*x*p-d*n*f+e*u*f)*w,t[14]=(g*s*a-r*x*a-g*n*c+e*x*c+r*n*f-e*s*f)*w,t[15]=(r*u*a-d*s*a+d*n*c-e*u*c-r*n*p+e*s*p)*w,this}scale(t){const e=this.elements,n=t.x,a=t.y,o=t.z;return e[0]*=n,e[4]*=a,e[8]*=o,e[1]*=n,e[5]*=a,e[9]*=o,e[2]*=n,e[6]*=a,e[10]*=o,e[3]*=n,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),o=1-n,r=t.x,s=t.y,c=t.z,l=o*r,d=o*s;return this.set(l*r+n,l*s-a*c,l*c+a*s,0,l*s+a*c,d*s+n,d*c-a*r,0,l*c-a*s,d*c+a*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,o,r){return this.set(1,n,o,0,t,1,r,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,o=e._x,r=e._y,s=e._z,c=e._w,l=o+o,d=r+r,u=s+s,p=o*l,m=o*d,g=o*u,x=r*d,f=r*u,h=s*u,y=c*l,M=c*d,A=c*u,O=n.x,C=n.y,w=n.z;return a[0]=(1-(x+h))*O,a[1]=(m+A)*O,a[2]=(g-M)*O,a[3]=0,a[4]=(m-A)*C,a[5]=(1-(p+h))*C,a[6]=(f+y)*C,a[7]=0,a[8]=(g+M)*w,a[9]=(f-y)*w,a[10]=(1-(p+x))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let o=In.set(a[0],a[1],a[2]).length();const r=In.set(a[4],a[5],a[6]).length(),s=In.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],Ue.copy(this);const l=1/o,d=1/r,u=1/s;return Ue.elements[0]*=l,Ue.elements[1]*=l,Ue.elements[2]*=l,Ue.elements[4]*=d,Ue.elements[5]*=d,Ue.elements[6]*=d,Ue.elements[8]*=u,Ue.elements[9]*=u,Ue.elements[10]*=u,e.setFromRotationMatrix(Ue),n.x=o,n.y=r,n.z=s,this}makePerspective(t,e,n,a,o,r,s=Ze){const c=this.elements,l=2*o/(e-t),d=2*o/(n-a),u=(e+t)/(e-t),p=(n+a)/(n-a);let m,g;if(s===Ze)m=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(s===ha)m=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,o,r,s=Ze){const c=this.elements,l=1/(e-t),d=1/(n-a),u=1/(r-o),p=(e+t)*l,m=(n+a)*d;let g,x;if(s===Ze)g=(r+o)*u,x=-2*u;else if(s===ha)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const In=new U,Ue=new Qt,ml=new U(0,0,0),_l=new U(1,1,1),rn=new U,Ni=new U,Me=new U,hr=new Qt,ur=new bi;class tn{constructor(t=0,e=0,n=0,a=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,o=a[0],r=a[4],s=a[8],c=a[1],l=a[5],d=a[9],u=a[2],p=a[6],m=a[10];switch(e){case"XYZ":this._y=Math.asin(me(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ur.setFromEuler(this),this.setFromQuaternion(ur,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class bs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gl=0;const fr=new U,Nn=new bi,Xe=new Qt,Bi=new U,li=new U,vl=new U,xl=new bi,pr=new U(1,0,0),mr=new U(0,1,0),_r=new U(0,0,1),gr={type:"added"},Sl={type:"removed"},Bn={type:"childadded",child:null},Ia={type:"childremoved",child:null};class ge extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new U,e=new tn,n=new bi,a=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Pt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.premultiply(Nn),this}rotateX(t){return this.rotateOnAxis(pr,t)}rotateY(t){return this.rotateOnAxis(mr,t)}rotateZ(t){return this.rotateOnAxis(_r,t)}translateOnAxis(t,e){return fr.copy(t).applyQuaternion(this.quaternion),this.position.add(fr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pr,t)}translateY(t){return this.translateOnAxis(mr,t)}translateZ(t){return this.translateOnAxis(_r,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bi.copy(t):Bi.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(li,Bi,this.up):Xe.lookAt(Bi,li,this.up),this.quaternion.setFromRotationMatrix(Xe),a&&(Xe.extractRotation(a.matrixWorld),Nn.setFromRotationMatrix(Xe),this.quaternion.premultiply(Nn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gr),Bn.child=t,this.dispatchEvent(Bn),Bn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sl),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gr),Bn.child=t,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,t,vl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,xl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(o(t.materials,this.material[c]));a.material=s}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];a.animations.push(o(t.animations,c))}}if(e){const s=r(t.geometries),c=r(t.materials),l=r(t.textures),d=r(t.images),u=r(t.shapes),p=r(t.skeletons),m=r(t.animations),g=r(t.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=a,n;function r(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}ge.DEFAULT_UP=new U(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ie=new U,qe=new U,Na=new U,Ye=new U,Fn=new U,On=new U,vr=new U,Ba=new U,Fa=new U,Oa=new U;class ze{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Ie.subVectors(t,e),a.cross(Ie);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,n,a,o){Ie.subVectors(a,e),qe.subVectors(n,e),Na.subVectors(t,e);const r=Ie.dot(Ie),s=Ie.dot(qe),c=Ie.dot(Na),l=qe.dot(qe),d=qe.dot(Na),u=r*l-s*s;if(u===0)return o.set(0,0,0),null;const p=1/u,m=(l*c-s*d)*p,g=(r*d-s*c)*p;return o.set(1-m-g,g,m)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,Ye)===null?!1:Ye.x>=0&&Ye.y>=0&&Ye.x+Ye.y<=1}static getInterpolation(t,e,n,a,o,r,s,c){return this.getBarycoord(t,e,n,a,Ye)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ye.x),c.addScaledVector(r,Ye.y),c.addScaledVector(s,Ye.z),c)}static isFrontFacing(t,e,n,a){return Ie.subVectors(n,e),qe.subVectors(t,e),Ie.cross(qe).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ie.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Ie.cross(qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,a,o){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,a,o)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,o=this.c;let r,s;Fn.subVectors(a,n),On.subVectors(o,n),Ba.subVectors(t,n);const c=Fn.dot(Ba),l=On.dot(Ba);if(c<=0&&l<=0)return e.copy(n);Fa.subVectors(t,a);const d=Fn.dot(Fa),u=On.dot(Fa);if(d>=0&&u<=d)return e.copy(a);const p=c*u-d*l;if(p<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(n).addScaledVector(Fn,r);Oa.subVectors(t,o);const m=Fn.dot(Oa),g=On.dot(Oa);if(g>=0&&m<=g)return e.copy(o);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return s=l/(l-g),e.copy(n).addScaledVector(On,s);const f=d*g-m*u;if(f<=0&&u-d>=0&&m-g>=0)return vr.subVectors(o,a),s=(u-d)/(u-d+(m-g)),e.copy(a).addScaledVector(vr,s);const h=1/(f+x+p);return r=x*h,s=p*h,e.copy(n).addScaledVector(Fn,r).addScaledVector(On,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Es={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function ka(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Ht.workingColorSpace){if(t=zo(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ka(r,o,t+1/3),this.g=ka(r,o,t),this.b=ka(r,o,t-1/3)}return Ht.toWorkingColorSpace(this,a),this}setStyle(t,e=Ae){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=a[1],s=a[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Es[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Ht.fromWorkingColorSpace(ue.copy(this),t),Math.round(me(ue.r*255,0,255))*65536+Math.round(me(ue.g*255,0,255))*256+Math.round(me(ue.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ue.copy(this),e);const n=ue.r,a=ue.g,o=ue.b,r=Math.max(n,a,o),s=Math.min(n,a,o);let c,l;const d=(s+r)/2;if(s===r)c=0,l=0;else{const u=r-s;switch(l=d<=.5?u/(r+s):u/(2-r-s),r){case n:c=(a-o)/u+(a<o?6:0);break;case a:c=(o-n)/u+2;break;case o:c=(n-a)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ue.copy(this),e),t.r=ue.r,t.g=ue.g,t.b=ue.b,t}getStyle(t=Ae){Ht.fromWorkingColorSpace(ue.copy(this),t);const e=ue.r,n=ue.g,a=ue.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(sn),this.setHSL(sn.h+t,sn.s+e,sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(Fi);const n=mi(sn.h,Fi.h,e),a=mi(sn.s,Fi.s,e),o=mi(sn.l,Fi.l,e);return this.setHSL(n,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*a,this.g=o[1]*e+o[4]*n+o[7]*a,this.b=o[2]*e+o[5]*n+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ue=new Gt;Gt.NAMES=Es;let Ml=0;class ai extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Yn,this.side=Je,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ir,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==Je&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ir&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const r=[];for(const s in o){const c=o[s];delete c.metadata,r.push(c)}return r}if(e){const o=a(t.textures),r=a(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Go extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new U,Oi=new Wt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ar,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return _i("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oi.fromBufferAttribute(this,e),Oi.applyMatrix3(t),this.setXY(e,Oi.x,Oi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),a=fe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,o){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),a=fe(a,this.array),o=fe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ar&&(t.usage=this.usage),t}}class ys extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class As extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bl=0;const ye=new Qt,Va=new ge,kn=new U,be=new Ei,di=new Ei,se=new U;class De extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xs(t)?As:ys)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Pt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ye.makeRotationFromQuaternion(t),this.applyMatrix4(ye),this}rotateX(t){return ye.makeRotationX(t),this.applyMatrix4(ye),this}rotateY(t){return ye.makeRotationY(t),this.applyMatrix4(ye),this}rotateZ(t){return ye.makeRotationZ(t),this.applyMatrix4(ye),this}translate(t,e,n){return ye.makeTranslation(t,e,n),this.applyMatrix4(ye),this}scale(t,e,n){return ye.makeScale(t,e,n),this.applyMatrix4(ye),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const o=e[n];be.setFromBufferAttribute(o),this.morphTargetsRelative?(se.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(se),se.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(se)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const s=e[o];di.setFromBufferAttribute(s),this.morphTargetsRelative?(se.addVectors(be.min,di.min),be.expandByPoint(se),se.addVectors(be.max,di.max),be.expandByPoint(se)):(be.expandByPoint(di.min),be.expandByPoint(di.max))}be.getCenter(n);let a=0;for(let o=0,r=t.count;o<r;o++)se.fromBufferAttribute(t,o),a=Math.max(a,n.distanceToSquared(se));if(e)for(let o=0,r=e.length;o<r;o++){const s=e[o],c=this.morphTargetsRelative;for(let l=0,d=s.count;l<d;l++)se.fromBufferAttribute(s,l),c&&(kn.fromBufferAttribute(t,l),se.add(kn)),a=Math.max(a,n.distanceToSquared(se))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),s=[],c=[];for(let B=0;B<n.count;B++)s[B]=new U,c[B]=new U;const l=new U,d=new U,u=new U,p=new Wt,m=new Wt,g=new Wt,x=new U,f=new U;function h(B,b,S){l.fromBufferAttribute(n,B),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),p.fromBufferAttribute(o,B),m.fromBufferAttribute(o,b),g.fromBufferAttribute(o,S),d.sub(l),u.sub(l),m.sub(p),g.sub(p);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(R),f.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),s[B].add(x),s[b].add(x),s[S].add(x),c[B].add(f),c[b].add(f),c[S].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let B=0,b=y.length;B<b;++B){const S=y[B],R=S.start,H=S.count;for(let k=R,q=R+H;k<q;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new U,A=new U,O=new U,C=new U;function w(B){O.fromBufferAttribute(a,B),C.copy(O);const b=s[B];M.copy(b),M.sub(O.multiplyScalar(O.dot(b))).normalize(),A.crossVectors(C,b);const R=A.dot(c[B])<0?-1:1;r.setXYZW(B,M.x,M.y,M.z,R)}for(let B=0,b=y.length;B<b;++B){const S=y[B],R=S.start,H=S.count;for(let k=R,q=R+H;k<q;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const a=new U,o=new U,r=new U,s=new U,c=new U,l=new U,d=new U,u=new U;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),x=t.getX(p+1),f=t.getX(p+2);a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,f),d.subVectors(r,o),u.subVectors(a,o),d.cross(u),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),s.add(d),c.add(d),l.add(d),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)a.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),d.subVectors(r,o),u.subVectors(a,o),d.cross(u),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)se.fromBufferAttribute(t,e),se.normalize(),t.setXYZ(e,se.x,se.y,se.z)}toNonIndexed(){function t(s,c){const l=s.array,d=s.itemSize,u=s.normalized,p=new l.constructor(c.length*d);let m=0,g=0;for(let x=0,f=c.length;x<f;x++){s.isInterleavedBufferAttribute?m=c[x]*s.data.stride+s.offset:m=c[x]*d;for(let h=0;h<d;h++)p[g++]=l[m++]}return new Ce(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,a=this.attributes;for(const s in a){const c=a[s],l=t(c,n);e.setAttribute(s,l)}const o=this.morphAttributes;for(const s in o){const c=[],l=o[s];for(let d=0,u=l.length;d<u;d++){const p=l[d],m=t(p,n);c.push(m)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let s=0,c=r.length;s<c;s++){const l=r[s];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const a={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];d.push(m.toJSON(t.data))}d.length>0&&(a[c]=d,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(e))}const o=t.morphAttributes;for(const l in o){const d=[],u=o[l];for(let p=0,m=u.length;p<m;p++)d.push(u[p].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,d=r.length;l<d;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xr=new Qt,_n=new Ho,ki=new yi,Sr=new U,Vn=new U,zn=new U,Hn=new U,za=new U,Vi=new U,zi=new Wt,Hi=new Wt,Gi=new Wt,Mr=new U,br=new U,Er=new U,Wi=new U,ji=new U;class Fe extends ge{constructor(t=new De,e=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const s=this.morphTargetInfluences;if(o&&s){Vi.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const d=s[c],u=o[c];d!==0&&(za.fromBufferAttribute(u,t),r?Vi.addScaledVector(za,d):Vi.addScaledVector(za.sub(e),d))}e.add(Vi)}return e}raycast(t,e){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(o),_n.copy(t.ray).recast(t.near),!(ki.containsPoint(_n.origin)===!1&&(_n.intersectSphere(ki,Sr)===null||_n.origin.distanceToSquared(Sr)>(t.far-t.near)**2))&&(xr.copy(o).invert(),_n.copy(t.ray).applyMatrix4(xr),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_n)))}_computeIntersections(t,e,n){let a;const o=this.geometry,r=this.material,s=o.index,c=o.attributes.position,l=o.attributes.uv,d=o.attributes.uv1,u=o.attributes.normal,p=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(r))for(let g=0,x=p.length;g<x;g++){const f=p[g],h=r[f.materialIndex],y=Math.max(f.start,m.start),M=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let A=y,O=M;A<O;A+=3){const C=s.getX(A),w=s.getX(A+1),B=s.getX(A+2);a=Xi(this,h,t,n,l,d,u,C,w,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const g=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let f=g,h=x;f<h;f+=3){const y=s.getX(f),M=s.getX(f+1),A=s.getX(f+2);a=Xi(this,r,t,n,l,d,u,y,M,A),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=p.length;g<x;g++){const f=p[g],h=r[f.materialIndex],y=Math.max(f.start,m.start),M=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let A=y,O=M;A<O;A+=3){const C=A,w=A+1,B=A+2;a=Xi(this,h,t,n,l,d,u,C,w,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=g,h=x;f<h;f+=3){const y=f,M=f+1,A=f+2;a=Xi(this,r,t,n,l,d,u,y,M,A),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}}}function El(i,t,e,n,a,o,r,s){let c;if(t.side===ve?c=n.intersectTriangle(r,o,a,!0,s):c=n.intersectTriangle(a,o,r,t.side===Je,s),c===null)return null;ji.copy(s),ji.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ji);return l<e.near||l>e.far?null:{distance:l,point:ji.clone(),object:i}}function Xi(i,t,e,n,a,o,r,s,c,l){i.getVertexPosition(s,Vn),i.getVertexPosition(c,zn),i.getVertexPosition(l,Hn);const d=El(i,t,e,n,Vn,zn,Hn,Wi);if(d){a&&(zi.fromBufferAttribute(a,s),Hi.fromBufferAttribute(a,c),Gi.fromBufferAttribute(a,l),d.uv=ze.getInterpolation(Wi,Vn,zn,Hn,zi,Hi,Gi,new Wt)),o&&(zi.fromBufferAttribute(o,s),Hi.fromBufferAttribute(o,c),Gi.fromBufferAttribute(o,l),d.uv1=ze.getInterpolation(Wi,Vn,zn,Hn,zi,Hi,Gi,new Wt)),r&&(Mr.fromBufferAttribute(r,s),br.fromBufferAttribute(r,c),Er.fromBufferAttribute(r,l),d.normal=ze.getInterpolation(Wi,Vn,zn,Hn,Mr,br,Er,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:s,b:c,c:l,normal:new U,materialIndex:0};ze.getNormal(Vn,zn,Hn,u.normal),d.face=u}return d}class Ai extends De{constructor(t=1,e=1,n=1,a=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:o,depthSegments:r};const s=this;a=Math.floor(a),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],d=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,a,r,2),g("x","z","y",1,-1,t,n,-e,a,r,3),g("x","y","z",1,-1,t,e,n,a,o,4),g("x","y","z",-1,-1,t,e,-n,a,o,5),this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(u,2));function g(x,f,h,y,M,A,O,C,w,B,b){const S=A/w,R=O/B,H=A/2,k=O/2,q=C/2,X=w+1,G=B+1;let Y=0,V=0;const rt=new U;for(let dt=0;dt<G;dt++){const mt=dt*R-k;for(let Nt=0;Nt<X;Nt++){const Xt=Nt*S-H;rt[x]=Xt*y,rt[f]=mt*M,rt[h]=q,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[f]=0,rt[h]=C>0?1:-1,d.push(rt.x,rt.y,rt.z),u.push(Nt/w),u.push(1-dt/B),Y+=1}}for(let dt=0;dt<B;dt++)for(let mt=0;mt<w;mt++){const Nt=p+mt+X*dt,Xt=p+mt+X*(dt+1),z=p+(mt+1)+X*(dt+1),J=p+(mt+1)+X*dt;c.push(Nt,Xt,J),c.push(Xt,z,J),V+=6}s.addGroup(m,V,b),m+=V,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ei(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function pe(i){const t={};for(let e=0;e<i.length;e++){const n=ei(i[e]);for(const a in n)t[a]=n[a]}return t}function yl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ts(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}const Al={clone:ei,merge:pe};var Tl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tl,this.fragmentShader=wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ei(t.uniforms),this.uniformsGroups=yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?e.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[a]={type:"m4",value:r.toArray()}:e.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ws extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ze}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cn=new U,yr=new Wt,Ar=new Wt;class Te extends ws{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cn.x,cn.y).multiplyScalar(-t/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cn.x,cn.y).multiplyScalar(-t/cn.z)}getViewSize(t,e){return this.getViewBounds(t,yr,Ar),e.subVectors(Ar,yr)}setViewOffset(t,e,n,a,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pi*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,o=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*a/c,e-=r.offsetY*n/l,a*=r.width/c,n*=r.height/l}const s=this.filmOffset;s!==0&&(o+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gn=-90,Wn=1;class Cl extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Te(Gn,Wn,t,e);a.layers=this.layers,this.add(a);const o=new Te(Gn,Wn,t,e);o.layers=this.layers,this.add(o);const r=new Te(Gn,Wn,t,e);r.layers=this.layers,this.add(r);const s=new Te(Gn,Wn,t,e);s.layers=this.layers,this.add(s);const c=new Te(Gn,Wn,t,e);c.layers=this.layers,this.add(c);const l=new Te(Gn,Wn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,o,r,s,c]=e;for(const l of e)this.remove(l);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,s,c,l,d]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,o),t.setRenderTarget(n,1,a),t.render(e,r),t.setRenderTarget(n,2,a),t.render(e,s),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,a),t.render(e,d),t.setRenderTarget(u,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cs extends _e{constructor(t,e,n,a,o,r,s,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:Zn,super(t,e,n,a,o,r,s,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rl extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new Cs(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ai(5,5,5),o=new He({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ve,blending:dn});o.uniforms.tEquirect.value=e;const r=new Fe(a,o),s=e.minFilter;return e.minFilter===An&&(e.minFilter=Ne),new Cl(1,10,this).update(t,r),e.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,a){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,a);t.setRenderTarget(o)}}const Ha=new U,Dl=new U,Pl=new Pt;class Sn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Ha.subVectors(n,e).cross(Dl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ha),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pl.getNormalMatrix(t),a=this.coplanarPoint(Ha).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gn=new yi,qi=new U;class Rs{constructor(t=new Sn,e=new Sn,n=new Sn,a=new Sn,o=new Sn,r=new Sn){this.planes=[t,e,n,a,o,r]}set(t,e,n,a,o,r){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(a),s[4].copy(o),s[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze){const n=this.planes,a=t.elements,o=a[0],r=a[1],s=a[2],c=a[3],l=a[4],d=a[5],u=a[6],p=a[7],m=a[8],g=a[9],x=a[10],f=a[11],h=a[12],y=a[13],M=a[14],A=a[15];if(n[0].setComponents(c-o,p-l,f-m,A-h).normalize(),n[1].setComponents(c+o,p+l,f+m,A+h).normalize(),n[2].setComponents(c+r,p+d,f+g,A+y).normalize(),n[3].setComponents(c-r,p-d,f-g,A-y).normalize(),n[4].setComponents(c-s,p-u,f-x,A-M).normalize(),e===Ze)n[5].setComponents(c+s,p+u,f+x,A+M).normalize();else if(e===ha)n[5].setComponents(s,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(t){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(qi.x=a.normal.x>0?t.max.x:t.min.x,qi.y=a.normal.y>0?t.max.y:t.min.y,qi.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(qi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ds(){let i=null,t=!1,e=null,n=null;function a(o,r){e(o,r),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ll(i){const t=new WeakMap;function e(s,c){const l=s.array,d=s.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,d),s.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:u}}function n(s,c,l){const d=c.array,u=c._updateRange,p=c.updateRanges;if(i.bindBuffer(l,s),u.count===-1&&p.length===0&&i.bufferSubData(l,0,d),p.length!==0){for(let m=0,g=p.length;m<g;m++){const x=p[m];i.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count),u.count=-1),c.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=t.get(s);c&&(i.deleteBuffer(c.buffer),t.delete(s))}function r(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=t.get(s);(!d||d.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=t.get(s);if(l===void 0)t.set(s,e(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:a,remove:o,update:r}}class Ti extends De{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const o=t/2,r=e/2,s=Math.floor(n),c=Math.floor(a),l=s+1,d=c+1,u=t/s,p=e/c,m=[],g=[],x=[],f=[];for(let h=0;h<d;h++){const y=h*p-r;for(let M=0;M<l;M++){const A=M*u-o;g.push(A,-y,0),x.push(0,0,1),f.push(M/s),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<s;y++){const M=y+l*h,A=y+l*(h+1),O=y+1+l*(h+1),C=y+1+l*h;m.push(M,A,C),m.push(A,O,C)}this.setIndex(m),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ul=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Il=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ol=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ql=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ah=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Th=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ph=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,au=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ou=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ru=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,su=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,du=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:Ul,alphahash_pars_fragment:Il,alphamap_fragment:Nl,alphamap_pars_fragment:Bl,alphatest_fragment:Fl,alphatest_pars_fragment:Ol,aomap_fragment:kl,aomap_pars_fragment:Vl,batching_pars_vertex:zl,batching_vertex:Hl,begin_vertex:Gl,beginnormal_vertex:Wl,bsdfs:jl,iridescence_fragment:Xl,bumpmap_pars_fragment:ql,clipping_planes_fragment:Yl,clipping_planes_pars_fragment:Kl,clipping_planes_pars_vertex:$l,clipping_planes_vertex:Zl,color_fragment:Jl,color_pars_fragment:Ql,color_pars_vertex:td,color_vertex:ed,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:rd,emissivemap_fragment:sd,emissivemap_pars_fragment:cd,colorspace_fragment:ld,colorspace_pars_fragment:dd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:fd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Ad,envmap_vertex:md,fog_vertex:_d,fog_pars_vertex:gd,fog_fragment:vd,fog_pars_fragment:xd,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:Md,lights_lambert_fragment:bd,lights_lambert_pars_fragment:Ed,lights_pars_begin:yd,lights_toon_fragment:Td,lights_toon_pars_fragment:wd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Rd,lights_physical_fragment:Dd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Ud,lights_fragment_end:Id,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:kd,map_pars_fragment:Vd,map_particle_fragment:zd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:jd,morphcolor_vertex:Xd,morphnormal_vertex:qd,morphtarget_pars_vertex:Yd,morphtarget_vertex:Kd,normal_fragment_begin:$d,normal_fragment_maps:Zd,normal_pars_fragment:Jd,normal_pars_vertex:Qd,normal_vertex:th,normalmap_pars_fragment:eh,clearcoat_normal_fragment_begin:nh,clearcoat_normal_fragment_maps:ih,clearcoat_pars_fragment:ah,iridescence_pars_fragment:oh,opaque_fragment:rh,packing:sh,premultiplied_alpha_fragment:ch,project_vertex:lh,dithering_fragment:dh,dithering_pars_fragment:hh,roughnessmap_fragment:uh,roughnessmap_pars_fragment:fh,shadowmap_pars_fragment:ph,shadowmap_pars_vertex:mh,shadowmap_vertex:_h,shadowmask_pars_fragment:gh,skinbase_vertex:vh,skinning_pars_vertex:xh,skinning_vertex:Sh,skinnormal_vertex:Mh,specularmap_fragment:bh,specularmap_pars_fragment:Eh,tonemapping_fragment:yh,tonemapping_pars_fragment:Ah,transmission_fragment:Th,transmission_pars_fragment:wh,uv_pars_fragment:Ch,uv_pars_vertex:Rh,uv_vertex:Dh,worldpos_vertex:Ph,background_vert:Lh,background_frag:Uh,backgroundCube_vert:Ih,backgroundCube_frag:Nh,cube_vert:Bh,cube_frag:Fh,depth_vert:Oh,depth_frag:kh,distanceRGBA_vert:Vh,distanceRGBA_frag:zh,equirect_vert:Hh,equirect_frag:Gh,linedashed_vert:Wh,linedashed_frag:jh,meshbasic_vert:Xh,meshbasic_frag:qh,meshlambert_vert:Yh,meshlambert_frag:Kh,meshmatcap_vert:$h,meshmatcap_frag:Zh,meshnormal_vert:Jh,meshnormal_frag:Qh,meshphong_vert:tu,meshphong_frag:eu,meshphysical_vert:nu,meshphysical_frag:iu,meshtoon_vert:au,meshtoon_frag:ou,points_vert:ru,points_frag:su,shadow_vert:cu,shadow_frag:lu,sprite_vert:du,sprite_frag:hu},it={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},ke={basic:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:pe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:pe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:pe([it.points,it.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:pe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:pe([it.common,it.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:pe([it.sprite,it.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:pe([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:pe([it.lights,it.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};ke.physical={uniforms:pe([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Yi={r:0,b:0,g:0},vn=new tn,uu=new Qt;function fu(i,t,e,n,a,o,r){const s=new Gt(0);let c=o===!0?0:1,l,d,u=null,p=0,m=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1;const A=g(y);A===null?h(s,c):A&&A.isColor&&(h(A,1),M=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===_a)?(d===void 0&&(d=new Fe(new Ai(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:ei(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),vn.copy(M.backgroundRotation),vn.x*=-1,vn.y*=-1,vn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(uu.makeRotationFromEuler(vn)),d.material.toneMapped=Ht.getTransfer(A.colorSpace)!==Yt,(u!==A||p!==A.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=A,p=A.version,m=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Fe(new Ti(2,2),new He({name:"BackgroundMaterial",uniforms:ei(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ht.getTransfer(A.colorSpace)!==Yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||p!==A.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,p=A.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,M){y.getRGB(Yi,Ts(i)),n.buffers.color.setClear(Yi.r,Yi.g,Yi.b,M,r)}return{getClearColor:function(){return s},setClearColor:function(y,M=1){s.set(y),c=M,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,h(s,c)},render:x,addToRenderList:f}}function pu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=p(null);let o=a,r=!1;function s(S,R,H,k,q){let X=!1;const G=u(k,H,R);o!==G&&(o=G,l(o.object)),X=m(S,k,H,q),X&&g(S,k,H,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,A(S,R,H,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function u(S,R,H){const k=H.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let X=q[R.id];X===void 0&&(X={},q[R.id]=X);let G=X[k];return G===void 0&&(G=p(c()),X[k]=G),G}function p(S){const R=[],H=[],k=[];for(let q=0;q<e;q++)R[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:k,object:S,attributes:{},index:null}}function m(S,R,H,k){const q=o.attributes,X=R.attributes;let G=0;const Y=H.getAttributes();for(const V in Y)if(Y[V].location>=0){const dt=q[V];let mt=X[V];if(mt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),dt===void 0||dt.attribute!==mt||mt&&dt.data!==mt.data)return!0;G++}return o.attributesNum!==G||o.index!==k}function g(S,R,H,k){const q={},X=R.attributes;let G=0;const Y=H.getAttributes();for(const V in Y)if(Y[V].location>=0){let dt=X[V];dt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));const mt={};mt.attribute=dt,dt&&dt.data&&(mt.data=dt.data),q[V]=mt,G++}o.attributes=q,o.attributesNum=G,o.index=k}function x(){const S=o.newAttributes;for(let R=0,H=S.length;R<H;R++)S[R]=0}function f(S){h(S,0)}function h(S,R){const H=o.newAttributes,k=o.enabledAttributes,q=o.attributeDivisors;H[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),q[S]!==R&&(i.vertexAttribDivisor(S,R),q[S]=R)}function y(){const S=o.newAttributes,R=o.enabledAttributes;for(let H=0,k=R.length;H<k;H++)R[H]!==S[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function M(S,R,H,k,q,X,G){G===!0?i.vertexAttribIPointer(S,R,H,q,X):i.vertexAttribPointer(S,R,H,k,q,X)}function A(S,R,H,k){x();const q=k.attributes,X=H.getAttributes(),G=R.defaultAttributeValues;for(const Y in X){const V=X[Y];if(V.location>=0){let rt=q[Y];if(rt===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){const dt=rt.normalized,mt=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;const Xt=Nt.buffer,z=Nt.type,J=Nt.bytesPerElement,ut=z===i.INT||z===i.UNSIGNED_INT||rt.gpuType===Io;if(rt.isInterleavedBufferAttribute){const ct=rt.data,wt=ct.stride,Lt=rt.offset;if(ct.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)h(V.location+It,ct.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let It=0;It<V.locationSize;It++)f(V.location+It);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let It=0;It<V.locationSize;It++)M(V.location+It,mt/V.locationSize,z,dt,wt*J,(Lt+mt/V.locationSize*It)*J,ut)}else{if(rt.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)h(V.location+ct,rt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ct=0;ct<V.locationSize;ct++)f(V.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let ct=0;ct<V.locationSize;ct++)M(V.location+ct,mt/V.locationSize,z,dt,mt*J,mt/V.locationSize*ct*J,ut)}}else if(G!==void 0){const dt=G[Y];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}y()}function O(){B();for(const S in n){const R=n[S];for(const H in R){const k=R[H];for(const q in k)d(k[q].object),delete k[q];delete R[H]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const H in R){const k=R[H];for(const q in k)d(k[q].object),delete k[q];delete R[H]}delete n[S.id]}function w(S){for(const R in n){const H=n[R];if(H[S.id]===void 0)continue;const k=H[S.id];for(const q in k)d(k[q].object),delete k[q];delete H[S.id]}}function B(){b(),r=!0,o!==a&&(o=a,l(o.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:B,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:f,disableUnusedAttributes:y}}function mu(i,t,e){let n;function a(l){n=l}function o(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function r(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),e.update(d,n,u))}function s(l,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];e.update(m,n,1)}function c(l,d,u,p){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)r(l[g],d[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,p,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];for(let x=0;x<p.length;x++)e.update(g,n,p[x])}}this.setMode=a,this.render=o,this.renderInstances=r,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function _u(i,t,e,n){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==Be&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(C){const w=C===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qe&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$e&&!w)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:h,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:A,maxSamples:O}}function gu(i){const t=this;let e=null,n=0,a=!1,o=!1;const r=new Sn,s=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||a;return a=p,n=u.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,p){e=d(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,h=i.get(u);if(!a||g===null||g.length===0||o&&!f)o?d(null):l();else{const y=o?0:n,M=y*4;let A=h.clippingState||null;c.value=A,A=d(g,p,M,m);for(let O=0;O!==M;++O)A[O]=e[O];h.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,p,m,g){const x=u!==null?u.length:0;let f=null;if(x!==0){if(f=c.value,g!==!0||f===null){const h=m+x*4,y=p.matrixWorldInverse;s.getNormalMatrix(y),(f===null||f.length<h)&&(f=new Float32Array(h));for(let M=0,A=m;M!==x;++M,A+=4)r.copy(u[M]).applyMatrix4(y,s),r.normal.toArray(f,A),f[A+3]=r.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function vu(i){let t=new WeakMap;function e(r,s){return s===to?r.mapping=Zn:s===eo&&(r.mapping=Jn),r}function n(r){if(r&&r.isTexture){const s=r.mapping;if(s===to||s===eo)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Rl(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",a),e(l.texture,r.mapping)}else return null}}return r}function a(r){const s=r.target;s.removeEventListener("dispose",a);const c=t.get(s);c!==void 0&&(t.delete(s),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class xu extends ws{constructor(t=-1,e=1,n=1,a=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-t,r=n+t,s=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(o,r,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qn=4,Tr=[.125,.215,.35,.446,.526,.582],En=20,Ga=new xu,wr=new Gt;let Wa=null,ja=0,Xa=0,qa=!1;const Mn=(1+Math.sqrt(5))/2,jn=1/Mn,Cr=[new U(-Mn,jn,0),new U(Mn,jn,0),new U(-jn,0,Mn),new U(jn,0,Mn),new U(0,Mn,-jn),new U(0,Mn,jn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Rr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Wa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,a,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa,ja,Xa),this._renderer.xr.enabled=qa,t.scissorTest=!1,Ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zn||t.mapping===Jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Mi,format:Be,colorSpace:un,depthBuffer:!1},a=Dr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dr(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Su(o)),this._blurMaterial=Mu(o,t,e)}return a}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,n,a){const s=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(wr),d.toneMapping=hn,d.autoClear=!1;const m=new Go({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),g=new Fe(new Ai,m);let x=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(wr),x=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(s.up.set(0,c[h],0),s.lookAt(l[h],0,0)):y===1?(s.up.set(0,0,c[h]),s.lookAt(0,l[h],0)):(s.up.set(0,c[h],0),s.lookAt(0,0,l[h]));const M=this._cubeSize;Ki(a,y*M,h>2?M:0,M,M),d.setRenderTarget(a),x&&d.render(g,s),d.render(t,s)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===Zn||t.mapping===Jn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pr());const o=a?this._cubemapMaterial:this._equirectMaterial,r=new Fe(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=t;const c=this._cubeSize;Ki(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Cr[(a-o-1)%Cr.length];this._blur(t,o-1,o,r,s)}e.autoClear=n}_blur(t,e,n,a,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,a,"latitudinal",o),this._halfBlur(r,t,n,n,a,"longitudinal",o)}_halfBlur(t,e,n,a,o,r,s){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Fe(this._lodPlanes[a],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*En-1),x=o/g,f=isFinite(o)?1+Math.floor(d*x):En;f>En&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);const h=[];let y=0;for(let w=0;w<En;++w){const B=w/x,b=Math.exp(-B*B/2);h.push(b),w===0?y+=b:w<f&&(y+=2*b)}for(let w=0;w<h.length;w++)h[w]=h[w]/y;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=r==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const A=this._sizeLods[a],O=3*A*(a>M-qn?a-M+qn:0),C=4*(this._cubeSize-A);Ki(e,O,C,3*A,2*A),c.setRenderTarget(e),c.render(u,Ga)}}function Su(i){const t=[],e=[],n=[];let a=i;const o=i-qn+1+Tr.length;for(let r=0;r<o;r++){const s=Math.pow(2,a);e.push(s);let c=1/s;r>i-qn?c=Tr[r-i+qn-1]:r===0&&(c=0),n.push(c);const l=1/(s-2),d=-l,u=1+l,p=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,x=3,f=2,h=1,y=new Float32Array(x*g*m),M=new Float32Array(f*g*m),A=new Float32Array(h*g*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,B=C>2?0:-1,b=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];y.set(b,x*g*C),M.set(p,f*g*C);const S=[C,C,C,C,C,C];A.set(S,h*g*C)}const O=new De;O.setAttribute("position",new Ce(y,x)),O.setAttribute("uv",new Ce(M,f)),O.setAttribute("faceIndex",new Ce(A,h)),t.push(O),a>qn&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dr(i,t,e){const n=new wn(i,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function Mu(i,t,e){const n=new Float32Array(En),a=new U(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Pr(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Lr(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bu(i){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===to||c===eo,d=c===Zn||c===Jn;if(l||d){let u=t.get(s);const p=u!==void 0?u.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==p)return e===null&&(e=new Rr(i)),u=l?e.fromEquirectangular(s,u):e.fromCubemap(s,u),u.texture.pmremVersion=s.pmremVersion,t.set(s,u),u.texture;if(u!==void 0)return u.texture;{const m=s.image;return l&&m&&m.height>0||d&&m&&a(m)?(e===null&&(e=new Rr(i)),u=l?e.fromEquirectangular(s):e.fromCubemap(s),u.texture.pmremVersion=s.pmremVersion,t.set(s,u),s.addEventListener("dispose",o),u.texture):null}}}return s}function a(s){let c=0;const l=6;for(let d=0;d<l;d++)s[d]!==void 0&&c++;return c===l}function o(s){const c=s.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Eu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const a=e(n);return a===null&&_i("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function yu(i,t,e,n){const a={},o=new WeakMap;function r(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const x=p.morphAttributes[g];for(let f=0,h=x.length;f<h;f++)t.remove(x[f])}p.removeEventListener("dispose",r),delete a[p.id];const m=o.get(p);m&&(t.remove(m),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function s(u,p){return a[p.id]===!0||(p.addEventListener("dispose",r),a[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const x=m[g];for(let f=0,h=x.length;f<h;f++)t.update(x[f],i.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,g=u.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let M=0,A=y.length;M<A;M+=3){const O=y[M+0],C=y[M+1],w=y[M+2];p.push(O,C,C,w,w,O)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,A=y.length/3-1;M<A;M+=3){const O=M+0,C=M+1,w=M+2;p.push(O,C,C,w,w,O)}}else return;const f=new(xs(p)?As:ys)(p,1);f.version=x;const h=o.get(u);h&&t.remove(h),o.set(u,f)}function d(u){const p=o.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return o.get(u)}return{get:s,update:c,getWireframeAttribute:d}}function Au(i,t,e){let n;function a(p){n=p}let o,r;function s(p){o=p.type,r=p.bytesPerElement}function c(p,m){i.drawElements(n,m,o,p*r),e.update(m,n,1)}function l(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,o,p*r,g),e.update(m,n,g))}function d(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];e.update(f,n,1)}function u(p,m,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)l(p[h]/r,m[h],x[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,o,p,0,x,0,g);let h=0;for(let y=0;y<g;y++)h+=m[y];for(let y=0;y<x.length;y++)e.update(h,n,x[y])}}this.setMode=a,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Tu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,s){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=s*(o/3);break;case i.LINES:e.lines+=s*(o/2);break;case i.LINE_STRIP:e.lines+=s*(o-1);break;case i.LINE_LOOP:e.lines+=s*o;break;case i.POINTS:e.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function wu(i,t,e){const n=new WeakMap,a=new ce;function o(r,s,c){const l=r.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=d!==void 0?d.length:0;let p=n.get(s);if(p===void 0||p.count!==u){let S=function(){B.dispose(),n.delete(s),s.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const g=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,f=s.morphAttributes.color!==void 0,h=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],M=s.morphAttributes.color||[];let A=0;g===!0&&(A=1),x===!0&&(A=2),f===!0&&(A=3);let O=s.attributes.position.count*A,C=1;O>t.maxTextureSize&&(C=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const w=new Float32Array(O*C*4*u),B=new Ms(w,O,C,u);B.type=$e,B.needsUpdate=!0;const b=A*4;for(let R=0;R<u;R++){const H=h[R],k=y[R],q=M[R],X=O*C*4*R;for(let G=0;G<H.count;G++){const Y=G*b;g===!0&&(a.fromBufferAttribute(H,G),w[X+Y+0]=a.x,w[X+Y+1]=a.y,w[X+Y+2]=a.z,w[X+Y+3]=0),x===!0&&(a.fromBufferAttribute(k,G),w[X+Y+4]=a.x,w[X+Y+5]=a.y,w[X+Y+6]=a.z,w[X+Y+7]=0),f===!0&&(a.fromBufferAttribute(q,G),w[X+Y+8]=a.x,w[X+Y+9]=a.y,w[X+Y+10]=a.z,w[X+Y+11]=q.itemSize===4?a.w:1)}}p={count:u,texture:B,size:new Wt(O,C)},n.set(s,p),s.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const x=s.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function Cu(i,t,e,n){let a=new WeakMap;function o(c){const l=n.render.frame,d=c.geometry,u=t.get(c,d);if(a.get(u)!==l&&(t.update(u),a.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),a.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==l&&(p.update(),a.set(p,l))}return u}function r(){a=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Ps extends _e{constructor(t,e,n,a,o,r,s,c,l,d=Kn){if(d!==Kn&&d!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Kn&&(n=Tn),n===void 0&&d===ti&&(n=Qn),super(null,a,o,r,s,c,d,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:we,this.minFilter=c!==void 0?c:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ls=new _e,Ur=new Ps(1,1),Us=new Ms,Is=new fl,Ns=new Cs,Ir=[],Nr=[],Br=new Float32Array(16),Fr=new Float32Array(9),Or=new Float32Array(4);function oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let o=Ir[a];if(o===void 0&&(o=new Float32Array(a),Ir[a]=o),t!==0){n.toArray(o,0);for(let r=1,s=0;r!==t;++r)s+=e,i[r].toArray(o,s)}return o}function oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=Nr[t];e===void 0&&(e=new Int32Array(t),Nr[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ru(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Du(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2fv(this.addr,t),re(e,t)}}function Pu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;i.uniform3fv(this.addr,t),re(e,t)}}function Lu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4fv(this.addr,t),re(e,t)}}function Uu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(oe(e,n))return;Or.set(n),i.uniformMatrix2fv(this.addr,!1,Or),re(e,n)}}function Iu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(oe(e,n))return;Fr.set(n),i.uniformMatrix3fv(this.addr,!1,Fr),re(e,n)}}function Nu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(oe(e,n))return;Br.set(n),i.uniformMatrix4fv(this.addr,!1,Br),re(e,n)}}function Bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2iv(this.addr,t),re(e,t)}}function Ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3iv(this.addr,t),re(e,t)}}function ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4iv(this.addr,t),re(e,t)}}function Vu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2uiv(this.addr,t),re(e,t)}}function Hu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3uiv(this.addr,t),re(e,t)}}function Gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4uiv(this.addr,t),re(e,t)}}function Wu(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(Ur.compareFunction=vs,o=Ur):o=Ls,e.setTexture2D(t||o,a)}function ju(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Is,a)}function Xu(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||Ns,a)}function qu(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Us,a)}function Yu(i){switch(i){case 5126:return Ru;case 35664:return Du;case 35665:return Pu;case 35666:return Lu;case 35674:return Uu;case 35675:return Iu;case 35676:return Nu;case 5124:case 35670:return Bu;case 35667:case 35671:return Fu;case 35668:case 35672:return Ou;case 35669:case 35673:return ku;case 5125:return Vu;case 36294:return zu;case 36295:return Hu;case 36296:return Gu;case 35678:case 36198:case 36298:case 36306:case 35682:return Wu;case 35679:case 36299:case 36307:return ju;case 35680:case 36300:case 36308:case 36293:return Xu;case 36289:case 36303:case 36311:case 36292:return qu}}function Ku(i,t){i.uniform1fv(this.addr,t)}function $u(i,t){const e=oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zu(i,t){const e=oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ju(i,t){const e=oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Qu(i,t){const e=oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tf(i,t){const e=oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ef(i,t){const e=oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nf(i,t){i.uniform1iv(this.addr,t)}function af(i,t){i.uniform2iv(this.addr,t)}function of(i,t){i.uniform3iv(this.addr,t)}function rf(i,t){i.uniform4iv(this.addr,t)}function sf(i,t){i.uniform1uiv(this.addr,t)}function cf(i,t){i.uniform2uiv(this.addr,t)}function lf(i,t){i.uniform3uiv(this.addr,t)}function df(i,t){i.uniform4uiv(this.addr,t)}function hf(i,t,e){const n=this.cache,a=t.length,o=va(e,a);oe(n,o)||(i.uniform1iv(this.addr,o),re(n,o));for(let r=0;r!==a;++r)e.setTexture2D(t[r]||Ls,o[r])}function uf(i,t,e){const n=this.cache,a=t.length,o=va(e,a);oe(n,o)||(i.uniform1iv(this.addr,o),re(n,o));for(let r=0;r!==a;++r)e.setTexture3D(t[r]||Is,o[r])}function ff(i,t,e){const n=this.cache,a=t.length,o=va(e,a);oe(n,o)||(i.uniform1iv(this.addr,o),re(n,o));for(let r=0;r!==a;++r)e.setTextureCube(t[r]||Ns,o[r])}function pf(i,t,e){const n=this.cache,a=t.length,o=va(e,a);oe(n,o)||(i.uniform1iv(this.addr,o),re(n,o));for(let r=0;r!==a;++r)e.setTexture2DArray(t[r]||Us,o[r])}function mf(i){switch(i){case 5126:return Ku;case 35664:return $u;case 35665:return Zu;case 35666:return Ju;case 35674:return Qu;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return af;case 35668:case 35672:return of;case 35669:case 35673:return rf;case 5125:return sf;case 36294:return cf;case 36295:return lf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}class _f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yu(e.type)}}class gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mf(e.type)}}class vf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let o=0,r=a.length;o!==r;++o){const s=a[o];s.setValue(t,e[s.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function kr(i,t){i.seq.push(t),i.map[t.id]=t}function xf(i,t,e){const n=i.name,a=n.length;for(Ya.lastIndex=0;;){const o=Ya.exec(n),r=Ya.lastIndex;let s=o[1];const c=o[2]==="]",l=o[3];if(c&&(s=s|0),l===void 0||l==="["&&r+2===a){kr(e,l===void 0?new _f(s,i,t):new gf(s,i,t));break}else{let u=e.map[s];u===void 0&&(u=new vf(s),kr(e,u)),e=u}}}class ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),r=t.getUniformLocation(e,o.name);xf(o,r,this)}}setValue(t,e,n,a){const o=this.map[e];o!==void 0&&o.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let o=0,r=e.length;o!==r;++o){const s=e[o],c=n[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,o=t.length;a!==o;++a){const r=t[a];r.id in e&&n.push(r)}return n}}function Vr(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Sf=37297;let Mf=0;function bf(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=a;r<o;r++){const s=r+1;n.push(`${s===t?">":" "} ${s}: ${e[r]}`)}return n.join(`
`)}function Ef(i){const t=Ht.getPrimaries(Ht.workingColorSpace),e=Ht.getPrimaries(i);let n;switch(t===e?n="":t===da&&e===la?n="LinearDisplayP3ToLinearSRGB":t===la&&e===da&&(n="LinearSRGBToLinearDisplayP3"),i){case un:case ga:return[n,"LinearTransferOETF"];case Ae:case Vo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zr(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+bf(i.getShaderSource(t),r)}else return a}function yf(i,t){const e=Ef(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Af(i,t){let e;switch(t){case Ac:e="Linear";break;case Tc:e="Reinhard";break;case wc:e="OptimizedCineon";break;case Cc:e="ACESFilmic";break;case Dc:e="AgX";break;case Pc:e="Neutral";break;case Rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $i=new U;function Tf(){Ht.getLuminanceCoefficients($i);const i=$i.x.toFixed(4),t=$i.y.toFixed(4),e=$i.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ui).join(`
`)}function Cf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(t,a),r=o.name;let s=1;o.type===i.FLOAT_MAT2&&(s=2),o.type===i.FLOAT_MAT3&&(s=3),o.type===i.FLOAT_MAT4&&(s=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:s}}return e}function ui(i){return i!==""}function Hr(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gr(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(i){return i.replace(Df,Lf)}const Pf=new Map;function Lf(i,t){let e=Dt[t];if(e===void 0){const n=Pf.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Po(e)}const Uf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wr(i){return i.replace(Uf,If)}function If(i,t,e,n){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function jr(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===os?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zs?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ke&&(t="SHADOWMAP_TYPE_VSM"),t}function Bf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zn:case Jn:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ff(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jn:t="ENVMAP_MODE_REFRACTION";break}return t}function Of(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rs:t="ENVMAP_BLENDING_MULTIPLY";break;case Ec:t="ENVMAP_BLENDING_MIX";break;case yc:t="ENVMAP_BLENDING_ADD";break}return t}function kf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vf(i,t,e,n){const a=i.getContext(),o=e.defines;let r=e.vertexShader,s=e.fragmentShader;const c=Nf(e),l=Bf(e),d=Ff(e),u=Of(e),p=kf(e),m=wf(e),g=Cf(o),x=a.createProgram();let f,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ui).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ui).join(`
`),h.length>0&&(h+=`
`)):(f=[jr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),h=[jr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==hn?Af("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,yf("linearToOutputTexel",e.outputColorSpace),Tf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ui).join(`
`)),r=Po(r),r=Hr(r,e),r=Gr(r,e),s=Po(s),s=Hr(s,e),s=Gr(s,e),r=Wr(r),s=Wr(s),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===or?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=y+f+r,A=y+h+s,O=Vr(a,a.VERTEX_SHADER,M),C=Vr(a,a.FRAGMENT_SHADER,A);a.attachShader(x,O),a.attachShader(x,C),e.index0AttributeName!==void 0?a.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){const H=a.getProgramInfoLog(x).trim(),k=a.getShaderInfoLog(O).trim(),q=a.getShaderInfoLog(C).trim();let X=!0,G=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,O,C);else{const Y=zr(a,O,"vertex"),V=zr(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Y+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||q==="")&&(G=!1);G&&(R.diagnostics={runnable:X,programLog:H,vertexShader:{log:k,prefix:f},fragmentShader:{log:q,prefix:h}})}a.deleteShader(O),a.deleteShader(C),B=new ra(a,x),b=Rf(a,x)}let B;this.getUniforms=function(){return B===void 0&&w(this),B};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(x,Sf)),S},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mf++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=C,this}let zf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gf(t),e.set(t,n)),n}}class Gf{constructor(t){this.id=zf++,this.code=t,this.usedTimes=0}}function Wf(i,t,e,n,a,o,r){const s=new bs,c=new Hf,l=new Set,d=[],u=a.logarithmicDepthBuffer,p=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function f(b,S,R,H,k){const q=H.fog,X=k.geometry,G=b.isMeshStandardMaterial?H.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),V=Y&&Y.mapping===_a?Y.image.height:null,rt=g[b.type];b.precision!==null&&(m=a.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=dt!==void 0?dt.length:0;let Nt=0;X.morphAttributes.position!==void 0&&(Nt=1),X.morphAttributes.normal!==void 0&&(Nt=2),X.morphAttributes.color!==void 0&&(Nt=3);let Xt,z,J,ut;if(rt){const Ot=ke[rt];Xt=Ot.vertexShader,z=Ot.fragmentShader}else Xt=b.vertexShader,z=b.fragmentShader,c.update(b),J=c.getVertexShaderID(b),ut=c.getFragmentShaderID(b);const ct=i.getRenderTarget(),wt=k.isInstancedMesh===!0,Lt=k.isBatchedMesh===!0,It=!!b.map,$t=!!b.matcap,T=!!Y,te=!!b.aoMap,jt=!!b.lightMap,qt=!!b.bumpMap,gt=!!b.normalMap,ee=!!b.displacementMap,At=!!b.emissiveMap,Ct=!!b.metalnessMap,E=!!b.roughnessMap,_=b.anisotropy>0,F=b.clearcoat>0,$=b.dispersion>0,Z=b.iridescence>0,K=b.sheen>0,vt=b.transmission>0,at=_&&!!b.anisotropyMap,lt=F&&!!b.clearcoatMap,Rt=F&&!!b.clearcoatNormalMap,Q=F&&!!b.clearcoatRoughnessMap,st=Z&&!!b.iridescenceMap,Bt=Z&&!!b.iridescenceThicknessMap,Et=K&&!!b.sheenColorMap,ht=K&&!!b.sheenRoughnessMap,Tt=!!b.specularMap,Ut=!!b.specularColorMap,Kt=!!b.specularIntensityMap,D=vt&&!!b.transmissionMap,tt=vt&&!!b.thicknessMap,W=!!b.gradientMap,j=!!b.alphaMap,nt=b.alphaTest>0,St=!!b.alphaHash,Ft=!!b.extensions;let ne=hn;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=i.toneMapping);const le={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:Xt,fragmentShader:z,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Lt,batchingColor:Lt&&k._colorsTexture!==null,instancing:wt,instancingColor:wt&&k.instanceColor!==null,instancingMorph:wt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:un,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:$t,envMap:T,envMapMode:T&&Y.mapping,envMapCubeUVHeight:V,aoMap:te,lightMap:jt,bumpMap:qt,normalMap:gt,displacementMap:p&&ee,emissiveMap:At,normalMapObjectSpace:gt&&b.normalMapType===Bc,normalMapTangentSpace:gt&&b.normalMapType===Nc,metalnessMap:Ct,roughnessMap:E,anisotropy:_,anisotropyMap:at,clearcoat:F,clearcoatMap:lt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:st,iridescenceThicknessMap:Bt,sheen:K,sheenColorMap:Et,sheenRoughnessMap:ht,specularMap:Tt,specularColorMap:Ut,specularIntensityMap:Kt,transmission:vt,transmissionMap:D,thicknessMap:tt,gradientMap:W,opaque:b.transparent===!1&&b.blending===Yn&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:nt,alphaHash:St,combine:b.combine,mapUv:It&&x(b.map.channel),aoMapUv:te&&x(b.aoMap.channel),lightMapUv:jt&&x(b.lightMap.channel),bumpMapUv:qt&&x(b.bumpMap.channel),normalMapUv:gt&&x(b.normalMap.channel),displacementMapUv:ee&&x(b.displacementMap.channel),emissiveMapUv:At&&x(b.emissiveMap.channel),metalnessMapUv:Ct&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:at&&x(b.anisotropyMap.channel),clearcoatMapUv:lt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ht&&x(b.sheenRoughnessMap.channel),specularMapUv:Tt&&x(b.specularMap.channel),specularColorMapUv:Ut&&x(b.specularColorMap.channel),specularIntensityMapUv:Kt&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:tt&&x(b.thicknessMap.channel),alphaMapUv:j&&x(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(gt||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(It||j),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&Ht.getTransfer(b.map.colorSpace)===Yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ft&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&b.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function h(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),b.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.doubleSided&&s.enable(10),S.flipSided&&s.enable(11),S.useDepthPacking&&s.enable(12),S.dithering&&s.enable(13),S.transmission&&s.enable(14),S.sheen&&s.enable(15),S.opaque&&s.enable(16),S.pointsUvs&&s.enable(17),S.decodeVideoTexture&&s.enable(18),S.alphaToCoverage&&s.enable(19),b.push(s.mask)}function A(b){const S=g[b.type];let R;if(S){const H=ke[S];R=Al.clone(H.uniforms)}else R=b.uniforms;return R}function O(b,S){let R;for(let H=0,k=d.length;H<k;H++){const q=d[H];if(q.cacheKey===S){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Vf(i,S,b,o),d.push(R)),R}function C(b){if(--b.usedTimes===0){const S=d.indexOf(b);d[S]=d[d.length-1],d.pop(),b.destroy()}}function w(b){c.remove(b)}function B(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:A,acquireProgram:O,releaseProgram:C,releaseShaderCache:w,programs:d,dispose:B}}function jf(){let i=new WeakMap;function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function e(o){i.delete(o)}function n(o,r,s){i.get(o)[r]=s}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function Xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xr(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qr(){const i=[];let t=0;const e=[],n=[],a=[];function o(){t=0,e.length=0,n.length=0,a.length=0}function r(u,p,m,g,x,f){let h=i[t];return h===void 0?(h={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:f},i[t]=h):(h.id=u.id,h.object=u,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=x,h.group=f),t++,h}function s(u,p,m,g,x,f){const h=r(u,p,m,g,x,f);m.transmission>0?n.push(h):m.transparent===!0?a.push(h):e.push(h)}function c(u,p,m,g,x,f){const h=r(u,p,m,g,x,f);m.transmission>0?n.unshift(h):m.transparent===!0?a.unshift(h):e.unshift(h)}function l(u,p){e.length>1&&e.sort(u||Xf),n.length>1&&n.sort(p||Xr),a.length>1&&a.sort(p||Xr)}function d(){for(let u=t,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:a,init:o,push:s,unshift:c,finish:d,sort:l}}function qf(){let i=new WeakMap;function t(n,a){const o=i.get(n);let r;return o===void 0?(r=new qr,i.set(n,[r])):a>=o.length?(r=new qr,o.push(r)):r=o[a],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Kf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $f=0;function Zf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jf(i){const t=new Yf,e=Kf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const a=new U,o=new Qt,r=new Qt;function s(l){let d=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,x=0,f=0,h=0,y=0,M=0,A=0,O=0,C=0,w=0;l.sort(Zf);for(let b=0,S=l.length;b<S;b++){const R=l[b],H=R.color,k=R.intensity,q=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=H.r*k,u+=H.g*k,p+=H.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],k);w++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=G,m++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(H).multiplyScalar(k),G.distance=q,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;const Y=R.shadow;if(R.map&&(n.spotLightMap[O]=R.map,O++,Y.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[x]=Y.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=X,A++}x++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(H).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=G,f++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[h]=G,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;const B=n.hash;(B.directionalLength!==m||B.pointLength!==g||B.spotLength!==x||B.rectAreaLength!==f||B.hemiLength!==h||B.numDirectionalShadows!==y||B.numPointShadows!==M||B.numSpotShadows!==A||B.numSpotMaps!==O||B.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=A+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,B.directionalLength=m,B.pointLength=g,B.spotLength=x,B.rectAreaLength=f,B.hemiLength=h,B.numDirectionalShadows=y,B.numPointShadows=M,B.numSpotShadows=A,B.numSpotMaps=O,B.numLightProbes=w,n.version=$f++)}function c(l,d){let u=0,p=0,m=0,g=0,x=0;const f=d.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const M=l[h];if(M.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),u++}else if(M.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),r.identity(),o.copy(M.matrixWorld),o.premultiply(f),r.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const A=n.point[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),x++}}}return{setup:s,setupView:c,state:n}}function Yr(i){const t=new Jf(i),e=[],n=[];function a(d){l.camera=d,e.length=0,n.length=0}function o(d){e.push(d)}function r(d){n.push(d)}function s(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:s,setupLightsView:c,pushLight:o,pushShadow:r}}function Qf(i){let t=new WeakMap;function e(a,o=0){const r=t.get(a);let s;return r===void 0?(s=new Yr(i),t.set(a,[s])):o>=r.length?(s=new Yr(i),r.push(s)):s=r[o],s}function n(){t=new WeakMap}return{get:e,dispose:n}}class tp extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ep extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ip=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ap(i,t,e){let n=new Rs;const a=new Wt,o=new Wt,r=new ce,s=new tp({depthPacking:Ic}),c=new ep,l={},d=e.maxTextureSize,u={[Je]:ve,[ve]:Je,[Ve]:Ve},p=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:np,fragmentShader:ip}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Fe(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let h=this.type;this.render=function(C,w,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(dn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=h!==Ke&&this.type===Ke,q=h===Ke&&this.type!==Ke;for(let X=0,G=C.length;X<G;X++){const Y=C[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const rt=V.getFrameExtents();if(a.multiply(rt),o.copy(V.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/rt.x),a.x=o.x*rt.x,V.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/rt.y),a.y=o.y*rt.y,V.mapSize.y=o.y)),V.map===null||k===!0||q===!0){const mt=this.type!==Ke?{minFilter:we,magFilter:we}:{};V.map!==null&&V.map.dispose(),V.map=new wn(a.x,a.y,mt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const dt=V.getViewportCount();for(let mt=0;mt<dt;mt++){const Nt=V.getViewport(mt);r.set(o.x*Nt.x,o.y*Nt.y,o.x*Nt.z,o.y*Nt.w),H.viewport(r),V.updateMatrices(Y,mt),n=V.getFrustum(),A(w,B,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Ke&&y(V,B),V.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(b,S,R)};function y(C,w){const B=t.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wn(a.x,a.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,B,p,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,B,m,x,null)}function M(C,w,B,b){let S=null;const R=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=B.isPointLight===!0?c:s,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,k=w.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let X=q[k];X===void 0&&(X=S.clone(),q[k]=X,w.addEventListener("dispose",O)),S=X}if(S.visible=w.visible,S.wireframe=w.wireframe,b===Ke?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=B}return S}function A(C,w,B,b,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Ke)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const k=t.update(C),q=C.material;if(Array.isArray(q)){const X=k.groups;for(let G=0,Y=X.length;G<Y;G++){const V=X[G],rt=q[V.materialIndex];if(rt&&rt.visible){const dt=M(C,rt,b,S);C.onBeforeShadow(i,C,w,B,k,dt,V),i.renderBufferDirect(B,null,k,dt,C,V),C.onAfterShadow(i,C,w,B,k,dt,V)}}}else if(q.visible){const X=M(C,q,b,S);C.onBeforeShadow(i,C,w,B,k,X,null),i.renderBufferDirect(B,null,k,X,C,null),C.onAfterShadow(i,C,w,B,k,X,null)}}const H=C.children;for(let k=0,q=H.length;k<q;k++)A(H[k],w,B,b,S)}function O(C){C.target.removeEventListener("dispose",O);for(const B in l){const b=l[B],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function op(i){function t(){let D=!1;const tt=new ce;let W=null;const j=new ce(0,0,0,0);return{setMask:function(nt){W!==nt&&!D&&(i.colorMask(nt,nt,nt,nt),W=nt)},setLocked:function(nt){D=nt},setClear:function(nt,St,Ft,ne,le){le===!0&&(nt*=ne,St*=ne,Ft*=ne),tt.set(nt,St,Ft,ne),j.equals(tt)===!1&&(i.clearColor(nt,St,Ft,ne),j.copy(tt))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function e(){let D=!1,tt=null,W=null,j=null;return{setTest:function(nt){nt?ut(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!D&&(i.depthMask(nt),tt=nt)},setFunc:function(nt){if(W!==nt){switch(nt){case _c:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case vc:i.depthFunc(i.LESS);break;case sa:i.depthFunc(i.LEQUAL);break;case xc:i.depthFunc(i.EQUAL);break;case Sc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=nt}},setLocked:function(nt){D=nt},setClear:function(nt){j!==nt&&(i.clearDepth(nt),j=nt)},reset:function(){D=!1,tt=null,W=null,j=null}}}function n(){let D=!1,tt=null,W=null,j=null,nt=null,St=null,Ft=null,ne=null,le=null;return{setTest:function(Ot){D||(Ot?ut(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Ot){tt!==Ot&&!D&&(i.stencilMask(Ot),tt=Ot)},setFunc:function(Ot,Ge,Oe){(W!==Ot||j!==Ge||nt!==Oe)&&(i.stencilFunc(Ot,Ge,Oe),W=Ot,j=Ge,nt=Oe)},setOp:function(Ot,Ge,Oe){(St!==Ot||Ft!==Ge||ne!==Oe)&&(i.stencilOp(Ot,Ge,Oe),St=Ot,Ft=Ge,ne=Oe)},setLocked:function(Ot){D=Ot},setClear:function(Ot){le!==Ot&&(i.clearStencil(Ot),le=Ot)},reset:function(){D=!1,tt=null,W=null,j=null,nt=null,St=null,Ft=null,ne=null,le=null}}}const a=new t,o=new e,r=new n,s=new WeakMap,c=new WeakMap;let l={},d={},u=new WeakMap,p=[],m=null,g=!1,x=null,f=null,h=null,y=null,M=null,A=null,O=null,C=new Gt(0,0,0),w=0,B=!1,b=null,S=null,R=null,H=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=G>=2);let V=null,rt={};const dt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Nt=new ce().fromArray(dt),Xt=new ce().fromArray(mt);function z(D,tt,W,j){const nt=new Uint8Array(4),St=i.createTexture();i.bindTexture(D,St),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<W;Ft++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(tt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return St}const J={};J[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),ut(i.DEPTH_TEST),o.setFunc(sa),qt(!1),gt(tr),ut(i.CULL_FACE),te(dn);function ut(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function ct(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function wt(D,tt){return d[D]!==tt?(i.bindFramebuffer(D,tt),d[D]=tt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Lt(D,tt){let W=p,j=!1;if(D){W=u.get(tt),W===void 0&&(W=[],u.set(tt,W));const nt=D.textures;if(W.length!==nt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Ft=nt.length;St<Ft;St++)W[St]=i.COLOR_ATTACHMENT0+St;W.length=nt.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function It(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const $t={[bn]:i.FUNC_ADD,[Qs]:i.FUNC_SUBTRACT,[tc]:i.FUNC_REVERSE_SUBTRACT};$t[ec]=i.MIN,$t[nc]=i.MAX;const T={[ic]:i.ZERO,[ac]:i.ONE,[oc]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[hc]:i.SRC_ALPHA_SATURATE,[lc]:i.DST_COLOR,[sc]:i.DST_ALPHA,[rc]:i.ONE_MINUS_SRC_COLOR,[Qa]:i.ONE_MINUS_SRC_ALPHA,[dc]:i.ONE_MINUS_DST_COLOR,[cc]:i.ONE_MINUS_DST_ALPHA,[uc]:i.CONSTANT_COLOR,[fc]:i.ONE_MINUS_CONSTANT_COLOR,[pc]:i.CONSTANT_ALPHA,[mc]:i.ONE_MINUS_CONSTANT_ALPHA};function te(D,tt,W,j,nt,St,Ft,ne,le,Ot){if(D===dn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(ut(i.BLEND),g=!0),D!==Js){if(D!==x||Ot!==B){if((f!==bn||M!==bn)&&(i.blendEquation(i.FUNC_ADD),f=bn,M=bn),Ot)switch(D){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case er:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case er:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,y=null,A=null,O=null,C.set(0,0,0),w=0,x=D,B=Ot}return}nt=nt||tt,St=St||W,Ft=Ft||j,(tt!==f||nt!==M)&&(i.blendEquationSeparate($t[tt],$t[nt]),f=tt,M=nt),(W!==h||j!==y||St!==A||Ft!==O)&&(i.blendFuncSeparate(T[W],T[j],T[St],T[Ft]),h=W,y=j,A=St,O=Ft),(ne.equals(C)===!1||le!==w)&&(i.blendColor(ne.r,ne.g,ne.b,le),C.copy(ne),w=le),x=D,B=!1}function jt(D,tt){D.side===Ve?ct(i.CULL_FACE):ut(i.CULL_FACE);let W=D.side===ve;tt&&(W=!W),qt(W),D.blending===Yn&&D.transparent===!1?te(dn):te(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),a.setMask(D.colorWrite);const j=D.stencilWrite;r.setTest(j),j&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function gt(D){D!==Ks?(ut(i.CULL_FACE),D!==S&&(D===tr?i.cullFace(i.BACK):D===$s?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),S=D}function ee(D){D!==R&&(X&&i.lineWidth(D),R=D)}function At(D,tt,W){D?(ut(i.POLYGON_OFFSET_FILL),(H!==tt||k!==W)&&(i.polygonOffset(tt,W),H=tt,k=W)):ct(i.POLYGON_OFFSET_FILL)}function Ct(D){D?ut(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+q-1),V!==D&&(i.activeTexture(D),V=D)}function _(D,tt,W){W===void 0&&(V===null?W=i.TEXTURE0+q-1:W=V);let j=rt[W];j===void 0&&(j={type:void 0,texture:void 0},rt[W]=j),(j.type!==D||j.texture!==tt)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(D,tt||J[D]),j.type=D,j.texture=tt)}function F(){const D=rt[V];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(D){Nt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Nt.copy(D))}function ht(D){Xt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Xt.copy(D))}function Tt(D,tt){let W=c.get(tt);W===void 0&&(W=new WeakMap,c.set(tt,W));let j=W.get(D);j===void 0&&(j=i.getUniformBlockIndex(tt,D.name),W.set(D,j))}function Ut(D,tt){const j=c.get(tt).get(D);s.get(tt)!==j&&(i.uniformBlockBinding(tt,j,D.__bindingPointIndex),s.set(tt,j))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,rt={},d={},u=new WeakMap,p=[],m=null,g=!1,x=null,f=null,h=null,y=null,M=null,A=null,O=null,C=new Gt(0,0,0),w=0,B=!1,b=null,S=null,R=null,H=null,k=null,Nt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:ut,disable:ct,bindFramebuffer:wt,drawBuffers:Lt,useProgram:It,setBlending:te,setMaterial:jt,setFlipSided:qt,setCullFace:gt,setLineWidth:ee,setPolygonOffset:At,setScissorTest:Ct,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:st,texImage3D:Bt,updateUBOMapping:Tt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:Q,texSubImage2D:K,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:lt,scissor:Et,viewport:ht,reset:Kt}}function Kr(i,t,e,n){const a=rp(n);switch(e){case hs:return i*t;case fs:return i*t;case ps:return i*t*2;case ms:return i*t/a.components*a.byteLength;case Fo:return i*t/a.components*a.byteLength;case _s:return i*t*2/a.components*a.byteLength;case Oo:return i*t*2/a.components*a.byteLength;case us:return i*t*3/a.components*a.byteLength;case Be:return i*t*4/a.components*a.byteLength;case ko:return i*t*4/a.components*a.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:case so:return Math.max(i,16)*Math.max(t,8)/4;case ao:case ro:return Math.max(i,8)*Math.max(t,8)/2;case co:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case To:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gs:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ro:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(i){switch(i){case Qe:case cs:return{byteLength:1,components:1};case vi:case ls:case Mi:return{byteLength:2,components:1};case No:case Bo:return{byteLength:2,components:4};case Tn:case Io:case $e:return{byteLength:4,components:1};case ds:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sp(i,t,e,n,a,o,r){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,d=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Si("canvas")}function x(E,_,F){let $=1;const Z=Ct(E);if((Z.width>F||Z.height>F)&&($=F/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor($*Z.width),vt=Math.floor($*Z.height);u===void 0&&(u=g(K,vt));const at=_?g(K,vt):u;return at.width=K,at.height=vt,at.getContext("2d").drawImage(E,0,0,K,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+vt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function f(E){return E.generateMipmaps&&E.minFilter!==we&&E.minFilter!==Ne}function h(E){i.generateMipmap(E)}function y(E,_,F,$,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=_;if(_===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),_===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),_===i.RGBA){const vt=Z?ca:Ht.getTransfer($);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=vt===Yt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(E,_){let F;return E?_===null||_===Tn||_===Qn?F=i.DEPTH24_STENCIL8:_===$e?F=i.DEPTH32F_STENCIL8:_===vi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===Qn?F=i.DEPTH_COMPONENT24:_===$e?F=i.DEPTH_COMPONENT32F:_===vi&&(F=i.DEPTH_COMPONENT16),F}function A(E,_){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==we&&E.minFilter!==Ne?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function O(E){const _=E.target;_.removeEventListener("dispose",O),w(_),_.isVideoTexture&&d.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),b(_)}function w(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,$=p.get(F);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&B(E),Object.keys($).length===0&&p.delete(F)}n.remove(E)}function B(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,$=p.get(F);delete $[_.__cacheKey],r.memory.textures--}function b(E){const _=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let $=0,Z=F.length;$<Z;$++){const K=n.get(F[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(F[$])}n.remove(E)}let S=0;function R(){S=0}function H(){const E=S;return E>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),S+=1,E}function k(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function q(E,_){const F=n.get(E);if(E.isVideoTexture&&ee(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(F,E,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Xt(F,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function G(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Xt(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function Y(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){z(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const V={[no]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},rt={[we]:i.NEAREST,[Lc]:i.NEAREST_MIPMAP_NEAREST,[Ri]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},dt={[Fc]:i.NEVER,[Gc]:i.ALWAYS,[Oc]:i.LESS,[vs]:i.LEQUAL,[kc]:i.EQUAL,[Hc]:i.GEQUAL,[Vc]:i.GREATER,[zc]:i.NOTEQUAL};function mt(E,_){if(_.type===$e&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ne||_.magFilter===ya||_.magFilter===Ri||_.magFilter===An||_.minFilter===Ne||_.minFilter===ya||_.minFilter===Ri||_.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,V[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,V[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,V[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,rt[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===we||_.minFilter!==Ri&&_.minFilter!==An||_.type===$e&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Nt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",O));const $=_.source;let Z=p.get($);Z===void 0&&(Z={},p.set($,Z));const K=k(_);if(K!==E.__cacheKey){Z[K]===void 0&&(Z[K]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Z[K].usedTimes++;const vt=Z[E.__cacheKey];vt!==void 0&&(Z[E.__cacheKey].usedTimes--,vt.usedTimes===0&&B(_)),E.__cacheKey=K,E.__webglTexture=Z[K].texture}return F}function Xt(E,_,F){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Z=Nt(E,_),K=_.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+F);const vt=n.get(K);if(K.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const at=Ht.getPrimaries(Ht.workingColorSpace),lt=_.colorSpace===ln?null:Ht.getPrimaries(_.colorSpace),Rt=_.colorSpace===ln||at===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Q=x(_.image,!1,a.maxTextureSize);Q=At(_,Q);const st=o.convert(_.format,_.colorSpace),Bt=o.convert(_.type);let Et=y(_.internalFormat,st,Bt,_.colorSpace,_.isVideoTexture);mt($,_);let ht;const Tt=_.mipmaps,Ut=_.isVideoTexture!==!0,Kt=vt.__version===void 0||Z===!0,D=K.dataReady,tt=A(_,Q);if(_.isDepthTexture)Et=M(_.format===ti,_.type),Kt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Et,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Et,Q.width,Q.height,0,st,Bt,null));else if(_.isDataTexture)if(Tt.length>0){Ut&&Kt&&e.texStorage2D(i.TEXTURE_2D,tt,Et,Tt[0].width,Tt[0].height);for(let W=0,j=Tt.length;W<j;W++)ht=Tt[W],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ht.width,ht.height,st,Bt,ht.data):e.texImage2D(i.TEXTURE_2D,W,Et,ht.width,ht.height,0,st,Bt,ht.data);_.generateMipmaps=!1}else Ut?(Kt&&e.texStorage2D(i.TEXTURE_2D,tt,Et,Q.width,Q.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,st,Bt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Et,Q.width,Q.height,0,st,Bt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Et,Tt[0].width,Tt[0].height,Q.depth);for(let W=0,j=Tt.length;W<j;W++)if(ht=Tt[W],_.format!==Be)if(st!==null)if(Ut){if(D)if(_.layerUpdates.size>0){const nt=Kr(ht.width,ht.height,_.format,_.type);for(const St of _.layerUpdates){const Ft=ht.data.subarray(St*nt/ht.data.BYTES_PER_ELEMENT,(St+1)*nt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,St,ht.width,ht.height,1,st,Ft,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ht.width,ht.height,Q.depth,st,ht.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Et,ht.width,ht.height,Q.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ht.width,ht.height,Q.depth,st,Bt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Et,ht.width,ht.height,Q.depth,0,st,Bt,ht.data)}else{Ut&&Kt&&e.texStorage2D(i.TEXTURE_2D,tt,Et,Tt[0].width,Tt[0].height);for(let W=0,j=Tt.length;W<j;W++)ht=Tt[W],_.format!==Be?st!==null?Ut?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ht.width,ht.height,st,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Et,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ht.width,ht.height,st,Bt,ht.data):e.texImage2D(i.TEXTURE_2D,W,Et,ht.width,ht.height,0,st,Bt,ht.data)}else if(_.isDataArrayTexture)if(Ut){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Et,Q.width,Q.height,Q.depth),D)if(_.layerUpdates.size>0){const W=Kr(Q.width,Q.height,_.format,_.type);for(const j of _.layerUpdates){const nt=Q.data.subarray(j*W/Q.data.BYTES_PER_ELEMENT,(j+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,st,Bt,nt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,st,Bt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,Q.width,Q.height,Q.depth,0,st,Bt,Q.data);else if(_.isData3DTexture)Ut?(Kt&&e.texStorage3D(i.TEXTURE_3D,tt,Et,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,st,Bt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Et,Q.width,Q.height,Q.depth,0,st,Bt,Q.data);else if(_.isFramebufferTexture){if(Kt)if(Ut)e.texStorage2D(i.TEXTURE_2D,tt,Et,Q.width,Q.height);else{let W=Q.width,j=Q.height;for(let nt=0;nt<tt;nt++)e.texImage2D(i.TEXTURE_2D,nt,Et,W,j,0,st,Bt,null),W>>=1,j>>=1}}else if(Tt.length>0){if(Ut&&Kt){const W=Ct(Tt[0]);e.texStorage2D(i.TEXTURE_2D,tt,Et,W.width,W.height)}for(let W=0,j=Tt.length;W<j;W++)ht=Tt[W],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,st,Bt,ht):e.texImage2D(i.TEXTURE_2D,W,Et,st,Bt,ht);_.generateMipmaps=!1}else if(Ut){if(Kt){const W=Ct(Q);e.texStorage2D(i.TEXTURE_2D,tt,Et,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st,Bt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Et,st,Bt,Q);f(_)&&h($),vt.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function z(E,_,F){if(_.image.length!==6)return;const $=Nt(E,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const K=n.get(Z);if(Z.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const vt=Ht.getPrimaries(Ht.workingColorSpace),at=_.colorSpace===ln?null:Ht.getPrimaries(_.colorSpace),lt=_.colorSpace===ln||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,st=[];for(let j=0;j<6;j++)!Rt&&!Q?st[j]=x(_.image[j],!0,a.maxCubemapSize):st[j]=Q?_.image[j].image:_.image[j],st[j]=At(_,st[j]);const Bt=st[0],Et=o.convert(_.format,_.colorSpace),ht=o.convert(_.type),Tt=y(_.internalFormat,Et,ht,_.colorSpace),Ut=_.isVideoTexture!==!0,Kt=K.__version===void 0||$===!0,D=Z.dataReady;let tt=A(_,Bt);mt(i.TEXTURE_CUBE_MAP,_);let W;if(Rt){Ut&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Tt,Bt.width,Bt.height);for(let j=0;j<6;j++){W=st[j].mipmaps;for(let nt=0;nt<W.length;nt++){const St=W[nt];_.format!==Be?Et!==null?Ut?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt,Tt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt,0,0,St.width,St.height,Et,ht,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt,Tt,St.width,St.height,0,Et,ht,St.data)}}}else{if(W=_.mipmaps,Ut&&Kt){W.length>0&&tt++;const j=Ct(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Tt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,st[j].width,st[j].height,Et,ht,st[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Tt,st[j].width,st[j].height,0,Et,ht,st[j].data);for(let nt=0;nt<W.length;nt++){const Ft=W[nt].image[j].image;Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt+1,0,0,Ft.width,Ft.height,Et,ht,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt+1,Tt,Ft.width,Ft.height,0,Et,ht,Ft.data)}}else{Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et,ht,st[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Tt,Et,ht,st[j]);for(let nt=0;nt<W.length;nt++){const St=W[nt];Ut?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt+1,0,0,Et,ht,St.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt+1,Tt,Et,ht,St.image[j])}}}f(_)&&h(i.TEXTURE_CUBE_MAP),K.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,F,$,Z,K){const vt=o.convert(F.format,F.colorSpace),at=o.convert(F.type),lt=y(F.internalFormat,vt,at,F.colorSpace);if(!n.get(_).__hasExternalTextures){const Q=Math.max(1,_.width>>K),st=Math.max(1,_.height>>K);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,K,lt,Q,st,_.depth,0,vt,at,null):e.texImage2D(Z,K,lt,Q,st,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),gt(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,n.get(F).__webglTexture,0,qt(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,n.get(F).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,K=M(_.stencilBuffer,Z),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=qt(_);gt(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,K,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{const $=_.textures;for(let Z=0;Z<$.length;Z++){const K=$[Z],vt=o.convert(K.format,K.colorSpace),at=o.convert(K.type),lt=y(K.internalFormat,vt,at,K.colorSpace),Rt=qt(_);F&&gt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,lt,_.width,_.height):gt(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,lt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,lt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,Z=qt(_);if(_.depthTexture.format===Kn)gt(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===ti)gt(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function wt(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ct(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=i.createRenderbuffer(),ut(_.__webglDepthbuffer[$],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),ut(_.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(E,_,F){const $=n.get(E);_!==void 0&&J($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&wt(E)}function It(E){const _=E.texture,F=n.get(E),$=n.get(_);E.addEventListener("dispose",C);const Z=E.textures,K=E.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,r.memory.textures++),K){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let lt=0;lt<_.mipmaps.length;lt++)F.__webglFramebuffer[at][lt]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,lt=Z.length;at<lt;at++){const Rt=n.get(Z[at]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&gt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const lt=Z[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Rt=o.convert(lt.format,lt.colorSpace),Q=o.convert(lt.type),st=y(lt.internalFormat,Rt,Q,lt.colorSpace,E.isXRRenderTarget===!0),Bt=qt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,st,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),mt(i.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)J(F.__webglFramebuffer[at][lt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,lt);else J(F.__webglFramebuffer[at],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,lt=Z.length;at<lt;at++){const Rt=Z[at],Q=n.get(Rt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),mt(i.TEXTURE_2D,Rt),J(F.__webglFramebuffer,E,Rt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),f(Rt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),mt(at,_),_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)J(F.__webglFramebuffer[lt],E,_,i.COLOR_ATTACHMENT0,at,lt);else J(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,at,0);f(_)&&h(at),e.unbindTexture()}E.depthBuffer&&wt(E)}function $t(E){const _=E.textures;for(let F=0,$=_.length;F<$;F++){const Z=_[F];if(f(Z)){const K=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(Z).__webglTexture;e.bindTexture(K,vt),h(K),e.unbindTexture()}}}const T=[],te=[];function jt(E){if(E.samples>0){if(gt(E)===!1){const _=E.textures,F=E.width,$=E.height;let Z=i.COLOR_BUFFER_BIT;const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),at=_.length>1;if(at)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const Rt=n.get(_[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,Z,i.NEAREST),c===!0&&(T.length=0,te.length=0,T.push(i.COLOR_ATTACHMENT0+lt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(T.push(K),te.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,T))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[lt]);const Rt=n.get(_[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function qt(E){return Math.min(a.maxSamples,E.samples)}function gt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ee(E){const _=r.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function At(E,_){const F=E.colorSpace,$=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==un&&F!==ln&&(Ht.getTransfer(F)===Yt?($!==Be||Z!==Qe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Ct(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Lt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=gt}function cp(i,t){function e(n,a=ln){let o;const r=Ht.getTransfer(a);if(n===Qe)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ds)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cs)return i.BYTE;if(n===ls)return i.SHORT;if(n===vi)return i.UNSIGNED_SHORT;if(n===Io)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===$e)return i.FLOAT;if(n===Mi)return i.HALF_FLOAT;if(n===hs)return i.ALPHA;if(n===us)return i.RGB;if(n===Be)return i.RGBA;if(n===fs)return i.LUMINANCE;if(n===ps)return i.LUMINANCE_ALPHA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===ms)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===_s)return i.RG;if(n===Oo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===aa)if(r===Yt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ea)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ea)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===ro||n===so)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===lo||n===ho)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===co||n===lo)return r===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ho)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===_o||n===go||n===vo||n===xo||n===So||n===Mo||n===bo||n===Eo||n===yo||n===Ao)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===uo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return r===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===To||n===wo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===oa)return r===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gs||n===Co||n===Ro||n===Do)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===oa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lp extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fi extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dp={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,o=null,r=null;const s=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),h=this._getHandJoint(l,x);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=d.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return s!==null&&(s.visible=a!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,up=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const a=new _e,o=t.properties.get(a);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:hp,fragmentShader:up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pp extends ni{constructor(t,e){super();const n=this;let a=null,o=1,r=null,s="local-floor",c=1,l=null,d=null,u=null,p=null,m=null,g=null;const x=new fp,f=e.getContextAttributes();let h=null,y=null;const M=[],A=[],O=new Wt;let C=null;const w=new Te;w.layers.enable(1),w.viewport=new ce;const B=new Te;B.layers.enable(2),B.viewport=new ce;const b=[w,B],S=new lp;S.layers.enable(1),S.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=M[z];return J===void 0&&(J=new Ka,M[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=M[z];return J===void 0&&(J=new Ka,M[z]=J),J.getGripSpace()},this.getHand=function(z){let J=M[z];return J===void 0&&(J=new Ka,M[z]=J),J.getHandSpace()};function k(z){const J=A.indexOf(z.inputSource);if(J===-1)return;const ut=M[J];ut!==void 0&&(ut.update(z.inputSource,z.frame,l||r),ut.dispatchEvent({type:z.type,data:z.inputSource}))}function q(){a.removeEventListener("select",k),a.removeEventListener("selectstart",k),a.removeEventListener("selectend",k),a.removeEventListener("squeeze",k),a.removeEventListener("squeezestart",k),a.removeEventListener("squeezeend",k),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",X);for(let z=0;z<M.length;z++){const J=A[z];J!==null&&(A[z]=null,M[z].disconnect(J))}R=null,H=null,x.reset(),t.setRenderTarget(h),m=null,p=null,u=null,a=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(h=t.getRenderTarget(),a.addEventListener("select",k),a.addEventListener("selectstart",k),a.addEventListener("selectend",k),a.addEventListener("squeeze",k),a.addEventListener("squeezestart",k),a.addEventListener("squeezeend",k),a.addEventListener("end",q),a.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),a.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(a,e,J),a.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new wn(m.framebufferWidth,m.framebufferHeight,{format:Be,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,ut=null,ct=null;f.depth&&(ct=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=f.stencil?ti:Kn,ut=f.stencil?Qn:Tn);const wt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:o};u=new XRWebGLBinding(a,e),p=u.createProjectionLayer(wt),a.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new wn(p.textureWidth,p.textureHeight,{format:Be,type:Qe,depthTexture:new Ps(p.textureWidth,p.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await a.requestReferenceSpace(s),Xt.setContext(a),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(z){for(let J=0;J<z.removed.length;J++){const ut=z.removed[J],ct=A.indexOf(ut);ct>=0&&(A[ct]=null,M[ct].disconnect(ut))}for(let J=0;J<z.added.length;J++){const ut=z.added[J];let ct=A.indexOf(ut);if(ct===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=A.length){A.push(ut),ct=Lt;break}else if(A[Lt]===null){A[Lt]=ut,ct=Lt;break}if(ct===-1)break}const wt=M[ct];wt&&wt.connect(ut)}}const G=new U,Y=new U;function V(z,J,ut){G.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ut.matrixWorld);const ct=G.distanceTo(Y),wt=J.projectionMatrix.elements,Lt=ut.projectionMatrix.elements,It=wt[14]/(wt[10]-1),$t=wt[14]/(wt[10]+1),T=(wt[9]+1)/wt[5],te=(wt[9]-1)/wt[5],jt=(wt[8]-1)/wt[0],qt=(Lt[8]+1)/Lt[0],gt=It*jt,ee=It*qt,At=ct/(-jt+qt),Ct=At*-jt;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ct),z.translateZ(At),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const E=It+At,_=$t+At,F=gt-Ct,$=ee+(ct-Ct),Z=T*$t/_*E,K=te*$t/_*E;z.projectionMatrix.makePerspective(F,$,Z,K,E,_),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function rt(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;x.texture!==null&&(z.near=x.depthNear,z.far=x.depthFar),S.near=B.near=w.near=z.near,S.far=B.far=w.far=z.far,(R!==S.near||H!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,H=S.far,w.near=R,w.far=H,B.near=R,B.far=H,w.updateProjectionMatrix(),B.updateProjectionMatrix(),z.updateProjectionMatrix());const J=z.parent,ut=S.cameras;rt(S,J);for(let ct=0;ct<ut.length;ct++)rt(ut[ct],J);ut.length===2?V(S,w,B):S.projectionMatrix.copy(w.projectionMatrix),dt(z,S,J)};function dt(z,J,ut){ut===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(ut.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=xi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let mt=null;function Nt(z,J){if(d=J.getViewerPose(l||r),g=J,d!==null){const ut=d.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let ct=!1;ut.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let Lt=0;Lt<ut.length;Lt++){const It=ut[Lt];let $t=null;if(m!==null)$t=m.getViewport(It);else{const te=u.getViewSubImage(p,It);$t=te.viewport,Lt===0&&(t.setRenderTargetTextures(y,te.colorTexture,p.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(y))}let T=b[Lt];T===void 0&&(T=new Te,T.layers.enable(Lt),T.viewport=new ce,b[Lt]=T),T.matrix.fromArray(It.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(It.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set($t.x,$t.y,$t.width,$t.height),Lt===0&&(S.matrix.copy(T.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(T)}const wt=a.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Lt=u.getDepthInformation(ut[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,a.renderState)}}for(let ut=0;ut<M.length;ut++){const ct=A[ut],wt=M[ut];ct!==null&&wt!==void 0&&wt.update(ct,J,l||r)}mt&&mt(z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Xt=new Ds;Xt.setAnimationLoop(Nt),this.setAnimationLoop=function(z){mt=z},this.dispose=function(){}}}const xn=new tn,mp=new Qt;function _p(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Ts(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function a(f,h,y,M,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(f,h):h.isMeshToonMaterial?(o(f,h),u(f,h)):h.isMeshPhongMaterial?(o(f,h),d(f,h)):h.isMeshStandardMaterial?(o(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,A)):h.isMeshMatcapMaterial?(o(f,h),g(f,h)):h.isMeshDepthMaterial?o(f,h):h.isMeshDistanceMaterial?(o(f,h),x(f,h)):h.isMeshNormalMaterial?o(f,h):h.isLineBasicMaterial?(r(f,h),h.isLineDashedMaterial&&s(f,h)):h.isPointsMaterial?c(f,h,y,M):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===ve&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===ve&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const y=t.get(h),M=y.envMap,A=y.envMapRotation;M&&(f.envMap.value=M,xn.copy(A),xn.x*=-1,xn.y*=-1,xn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),f.envMapRotation.value.setFromMatrix4(mp.makeRotationFromEuler(xn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function r(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function s(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,y,M){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*y,f.scale.value=M*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function u(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,y){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ve&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function x(f,h){const y=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function gp(i,t,e,n){let a={},o={},r=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const A=M.program;n.uniformBlockBinding(y,A)}function l(y,M){let A=a[y.id];A===void 0&&(g(y),A=d(y),a[y.id]=A,y.addEventListener("dispose",f));const O=M.program;n.updateUBOMapping(y,O);const C=t.render.frame;o[y.id]!==C&&(p(y),o[y.id]=C)}function d(y){const M=u();y.__bindingPointIndex=M;const A=i.createBuffer(),O=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,A),A}function u(){for(let y=0;y<s;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const M=a[y.id],A=y.uniforms,O=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,w=A.length;C<w;C++){const B=Array.isArray(A[C])?A[C]:[A[C]];for(let b=0,S=B.length;b<S;b++){const R=B[b];if(m(R,C,b,O)===!0){const H=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let X=0;X<k.length;X++){const G=k[X],Y=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+q,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,M,A,O){const C=y.value,w=M+"_"+A;if(O[w]===void 0)return typeof C=="number"||typeof C=="boolean"?O[w]=C:O[w]=C.clone(),!0;{const B=O[w];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return O[w]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(y){const M=y.uniforms;let A=0;const O=16;for(let w=0,B=M.length;w<B;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,R=b.length;S<R;S++){const H=b[S],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,X=k.length;q<X;q++){const G=k[q],Y=x(G),V=A%O,rt=V%Y.boundary,dt=V+rt;A+=rt,dt!==0&&O-dt<Y.storage&&(A+=O-dt),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=A,A+=Y.storage}}}const C=A%O;return C>0&&(A+=O-C),y.__size=A,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function f(y){const M=y.target;M.removeEventListener("dispose",f);const A=r.indexOf(M.__bindingPointIndex);r.splice(A,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete o[M.id]}function h(){for(const y in a)i.deleteBuffer(a[y]);r=[],a={},o={}}return{bind:c,update:l,dispose:h}}class vp{constructor(t={}){const{canvas:e=rl(),context:n=null,depth:a=!0,stencil:o=!1,alpha:r=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=hn,this.toneMappingExposure=1;const M=this;let A=!1,O=0,C=0,w=null,B=-1,b=null;const S=new ce,R=new ce;let H=null;const k=new Gt(0);let q=0,X=e.width,G=e.height,Y=1,V=null,rt=null;const dt=new ce(0,0,X,G),mt=new ce(0,0,X,G);let Nt=!1;const Xt=new Rs;let z=!1,J=!1;const ut=new Qt,ct=new U,wt=new ce,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function $t(){return w===null?Y:1}let T=n;function te(v,P){return e.getContext(v,P)}try{const v={alpha:!0,depth:a,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",nt,!1),T===null){const P="webgl2";if(T=te(P,v),T===null)throw te(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let jt,qt,gt,ee,At,Ct,E,_,F,$,Z,K,vt,at,lt,Rt,Q,st,Bt,Et,ht,Tt,Ut,Kt;function D(){jt=new Eu(T),jt.init(),Tt=new cp(T,jt),qt=new _u(T,jt,t,Tt),gt=new op(T),ee=new Tu(T),At=new jf,Ct=new sp(T,jt,gt,At,qt,Tt,ee),E=new vu(M),_=new bu(M),F=new Ll(T),Ut=new pu(T,F),$=new yu(T,F,ee,Ut),Z=new Cu(T,$,F,ee),Bt=new wu(T,qt,Ct),Rt=new gu(At),K=new Wf(M,E,_,jt,qt,Ut,Rt),vt=new _p(M,At),at=new qf,lt=new Qf(jt),st=new fu(M,E,_,gt,Z,p,c),Q=new ap(M,Z,qt),Kt=new gp(T,ee,qt,gt),Et=new mu(T,jt,ee),ht=new Au(T,jt,ee),ee.programs=K.programs,M.capabilities=qt,M.extensions=jt,M.properties=At,M.renderLists=at,M.shadowMap=Q,M.state=gt,M.info=ee}D();const tt=new pp(M,T);this.xr=tt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const v=jt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=jt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize(X,G,!1))},this.getSize=function(v){return v.set(X,G)},this.setSize=function(v,P,I=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,G=P,e.width=Math.floor(v*Y),e.height=Math.floor(P*Y),I===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(X*Y,G*Y).floor()},this.setDrawingBufferSize=function(v,P,I){X=v,G=P,Y=I,e.width=Math.floor(v*I),e.height=Math.floor(P*I),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(S)},this.getViewport=function(v){return v.copy(dt)},this.setViewport=function(v,P,I,N){v.isVector4?dt.set(v.x,v.y,v.z,v.w):dt.set(v,P,I,N),gt.viewport(S.copy(dt).multiplyScalar(Y).round())},this.getScissor=function(v){return v.copy(mt)},this.setScissor=function(v,P,I,N){v.isVector4?mt.set(v.x,v.y,v.z,v.w):mt.set(v,P,I,N),gt.scissor(R.copy(mt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(v){gt.setScissorTest(Nt=v)},this.setOpaqueSort=function(v){V=v},this.setTransparentSort=function(v){rt=v},this.getClearColor=function(v){return v.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(v=!0,P=!0,I=!0){let N=0;if(v){let L=!1;if(w!==null){const et=w.texture.format;L=et===ko||et===Oo||et===Fo}if(L){const et=w.texture.type,ot=et===Qe||et===Tn||et===vi||et===Qn||et===No||et===Bo,ft=st.getClearColor(),pt=st.getClearAlpha(),Mt=ft.r,bt=ft.g,xt=ft.b;ot?(m[0]=Mt,m[1]=bt,m[2]=xt,m[3]=pt,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Mt,g[1]=bt,g[2]=xt,g[3]=pt,T.clearBufferiv(T.COLOR,0,g))}else N|=T.COLOR_BUFFER_BIT}P&&(N|=T.DEPTH_BUFFER_BIT),I&&(N|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),at.dispose(),lt.dispose(),At.dispose(),E.dispose(),_.dispose(),Z.dispose(),Ut.dispose(),Kt.dispose(),K.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Oe),tt.removeEventListener("sessionend",qo),fn.stop()};function W(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const v=ee.autoReset,P=Q.enabled,I=Q.autoUpdate,N=Q.needsUpdate,L=Q.type;D(),ee.autoReset=v,Q.enabled=P,Q.autoUpdate=I,Q.needsUpdate=N,Q.type=L}function nt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function St(v){const P=v.target;P.removeEventListener("dispose",St),Ft(P)}function Ft(v){ne(v),At.remove(v)}function ne(v){const P=At.get(v).programs;P!==void 0&&(P.forEach(function(I){K.releaseProgram(I)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,I,N,L,et){P===null&&(P=Lt);const ot=L.isMesh&&L.matrixWorld.determinant()<0,ft=Hs(v,P,I,N,L);gt.setMaterial(N,ot);let pt=I.index,Mt=1;if(N.wireframe===!0){if(pt=$.getWireframeAttribute(I),pt===void 0)return;Mt=2}const bt=I.drawRange,xt=I.attributes.position;let kt=bt.start*Mt,Zt=(bt.start+bt.count)*Mt;et!==null&&(kt=Math.max(kt,et.start*Mt),Zt=Math.min(Zt,(et.start+et.count)*Mt)),pt!==null?(kt=Math.max(kt,0),Zt=Math.min(Zt,pt.count)):xt!=null&&(kt=Math.max(kt,0),Zt=Math.min(Zt,xt.count));const Jt=Zt-kt;if(Jt<0||Jt===1/0)return;Ut.setup(L,N,ft,I,pt);let xe,Vt=Et;if(pt!==null&&(xe=F.get(pt),Vt=ht,Vt.setIndex(xe)),L.isMesh)N.wireframe===!0?(gt.setLineWidth(N.wireframeLinewidth*$t()),Vt.setMode(T.LINES)):Vt.setMode(T.TRIANGLES);else if(L.isLine){let _t=N.linewidth;_t===void 0&&(_t=1),gt.setLineWidth(_t*$t()),L.isLineSegments?Vt.setMode(T.LINES):L.isLineLoop?Vt.setMode(T.LINE_LOOP):Vt.setMode(T.LINE_STRIP)}else L.isPoints?Vt.setMode(T.POINTS):L.isSprite&&Vt.setMode(T.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Vt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const _t=L._multiDrawStarts,de=L._multiDrawCounts,zt=L._multiDrawCount,Pe=pt?F.get(pt).bytesPerElement:1,Cn=At.get(N).currentProgram.getUniforms();for(let Se=0;Se<zt;Se++)Cn.setValue(T,"_gl_DrawID",Se),Vt.render(_t[Se]/Pe,de[Se])}else if(L.isInstancedMesh)Vt.renderInstances(kt,Jt,L.count);else if(I.isInstancedBufferGeometry){const _t=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,de=Math.min(I.instanceCount,_t);Vt.renderInstances(kt,Jt,de)}else Vt.render(kt,Jt)};function le(v,P,I){v.transparent===!0&&v.side===Ve&&v.forceSinglePass===!1?(v.side=ve,v.needsUpdate=!0,Ci(v,P,I),v.side=Je,v.needsUpdate=!0,Ci(v,P,I),v.side=Ve):Ci(v,P,I)}this.compile=function(v,P,I=null){I===null&&(I=v),f=lt.get(I),f.init(P),y.push(f),I.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),v!==I&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();const N=new Set;return v.traverse(function(L){const et=L.material;if(et)if(Array.isArray(et))for(let ot=0;ot<et.length;ot++){const ft=et[ot];le(ft,I,L),N.add(ft)}else le(et,I,L),N.add(et)}),y.pop(),f=null,N},this.compileAsync=function(v,P,I=null){const N=this.compile(v,P,I);return new Promise(L=>{function et(){if(N.forEach(function(ot){At.get(ot).currentProgram.isReady()&&N.delete(ot)}),N.size===0){L(v);return}setTimeout(et,10)}jt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ot=null;function Ge(v){Ot&&Ot(v)}function Oe(){fn.stop()}function qo(){fn.start()}const fn=new Ds;fn.setAnimationLoop(Ge),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(v){Ot=v,tt.setAnimationLoop(v),v===null?fn.stop():fn.start()},tt.addEventListener("sessionstart",Oe),tt.addEventListener("sessionend",qo),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(P),P=tt.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,P,w),f=lt.get(v,y.length),f.init(P),y.push(f),ut.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Xt.setFromProjectionMatrix(ut),J=this.localClippingEnabled,z=Rt.init(this.clippingPlanes,J),x=at.get(v,h.length),x.init(),h.push(x),tt.enabled===!0&&tt.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&xa(et,P,-1/0,M.sortObjects)}xa(v,P,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(V,rt),It=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,It&&st.addToRenderList(x,v),this.info.render.frame++,z===!0&&Rt.beginShadows();const I=f.state.shadowsArray;Q.render(I,v,P),z===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=x.opaque,L=x.transmissive;if(f.setupLights(),P.isArrayCamera){const et=P.cameras;if(L.length>0)for(let ot=0,ft=et.length;ot<ft;ot++){const pt=et[ot];Ko(N,L,v,pt)}It&&st.render(v);for(let ot=0,ft=et.length;ot<ft;ot++){const pt=et[ot];Yo(x,v,pt,pt.viewport)}}else L.length>0&&Ko(N,L,v,P),It&&st.render(v),Yo(x,v,P);w!==null&&(Ct.updateMultisampleRenderTarget(w),Ct.updateRenderTargetMipmap(w)),v.isScene===!0&&v.onAfterRender(M,v,P),Ut.resetDefaultState(),B=-1,b=null,y.pop(),y.length>0?(f=y[y.length-1],z===!0&&Rt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function xa(v,P,I,N){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)I=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Xt.intersectsSprite(v)){N&&wt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ut);const ot=Z.update(v),ft=v.material;ft.visible&&x.push(v,ot,ft,I,wt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Xt.intersectsObject(v))){const ot=Z.update(v),ft=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),wt.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),wt.copy(ot.boundingSphere.center)),wt.applyMatrix4(v.matrixWorld).applyMatrix4(ut)),Array.isArray(ft)){const pt=ot.groups;for(let Mt=0,bt=pt.length;Mt<bt;Mt++){const xt=pt[Mt],kt=ft[xt.materialIndex];kt&&kt.visible&&x.push(v,ot,kt,I,wt.z,xt)}}else ft.visible&&x.push(v,ot,ft,I,wt.z,null)}}const et=v.children;for(let ot=0,ft=et.length;ot<ft;ot++)xa(et[ot],P,I,N)}function Yo(v,P,I,N){const L=v.opaque,et=v.transmissive,ot=v.transparent;f.setupLightsView(I),z===!0&&Rt.setGlobalState(M.clippingPlanes,I),N&&gt.viewport(S.copy(N)),L.length>0&&wi(L,P,I),et.length>0&&wi(et,P,I),ot.length>0&&wi(ot,P,I),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Ko(v,P,I,N){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[N.id]===void 0&&(f.state.transmissionRenderTarget[N.id]=new wn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Mi:Qe,minFilter:An,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const et=f.state.transmissionRenderTarget[N.id],ot=N.viewport||S;et.setSize(ot.z,ot.w);const ft=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(k),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),It&&st.render(I);const pt=M.toneMapping;M.toneMapping=hn;const Mt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),f.setupLightsView(N),z===!0&&Rt.setGlobalState(M.clippingPlanes,N),wi(v,I,N),Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et),jt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let xt=0,kt=P.length;xt<kt;xt++){const Zt=P[xt],Jt=Zt.object,xe=Zt.geometry,Vt=Zt.material,_t=Zt.group;if(Vt.side===Ve&&Jt.layers.test(N.layers)){const de=Vt.side;Vt.side=ve,Vt.needsUpdate=!0,$o(Jt,I,N,xe,Vt,_t),Vt.side=de,Vt.needsUpdate=!0,bt=!0}}bt===!0&&(Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et))}M.setRenderTarget(ft),M.setClearColor(k,q),Mt!==void 0&&(N.viewport=Mt),M.toneMapping=pt}function wi(v,P,I){const N=P.isScene===!0?P.overrideMaterial:null;for(let L=0,et=v.length;L<et;L++){const ot=v[L],ft=ot.object,pt=ot.geometry,Mt=N===null?ot.material:N,bt=ot.group;ft.layers.test(I.layers)&&$o(ft,P,I,pt,Mt,bt)}}function $o(v,P,I,N,L,et){v.onBeforeRender(M,P,I,N,L,et),v.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.transparent===!0&&L.side===Ve&&L.forceSinglePass===!1?(L.side=ve,L.needsUpdate=!0,M.renderBufferDirect(I,P,N,L,v,et),L.side=Je,L.needsUpdate=!0,M.renderBufferDirect(I,P,N,L,v,et),L.side=Ve):M.renderBufferDirect(I,P,N,L,v,et),v.onAfterRender(M,P,I,N,L,et)}function Ci(v,P,I){P.isScene!==!0&&(P=Lt);const N=At.get(v),L=f.state.lights,et=f.state.shadowsArray,ot=L.state.version,ft=K.getParameters(v,L.state,et,P,I),pt=K.getProgramCacheKey(ft);let Mt=N.programs;N.environment=v.isMeshStandardMaterial?P.environment:null,N.fog=P.fog,N.envMap=(v.isMeshStandardMaterial?_:E).get(v.envMap||N.environment),N.envMapRotation=N.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Mt===void 0&&(v.addEventListener("dispose",St),Mt=new Map,N.programs=Mt);let bt=Mt.get(pt);if(bt!==void 0){if(N.currentProgram===bt&&N.lightsStateVersion===ot)return Jo(v,ft),bt}else ft.uniforms=K.getUniforms(v),v.onBeforeCompile(ft,M),bt=K.acquireProgram(ft,pt),Mt.set(pt,bt),N.uniforms=ft.uniforms;const xt=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(xt.clippingPlanes=Rt.uniform),Jo(v,ft),N.needsLights=Ws(v),N.lightsStateVersion=ot,N.needsLights&&(xt.ambientLightColor.value=L.state.ambient,xt.lightProbe.value=L.state.probe,xt.directionalLights.value=L.state.directional,xt.directionalLightShadows.value=L.state.directionalShadow,xt.spotLights.value=L.state.spot,xt.spotLightShadows.value=L.state.spotShadow,xt.rectAreaLights.value=L.state.rectArea,xt.ltc_1.value=L.state.rectAreaLTC1,xt.ltc_2.value=L.state.rectAreaLTC2,xt.pointLights.value=L.state.point,xt.pointLightShadows.value=L.state.pointShadow,xt.hemisphereLights.value=L.state.hemi,xt.directionalShadowMap.value=L.state.directionalShadowMap,xt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,xt.spotShadowMap.value=L.state.spotShadowMap,xt.spotLightMatrix.value=L.state.spotLightMatrix,xt.spotLightMap.value=L.state.spotLightMap,xt.pointShadowMap.value=L.state.pointShadowMap,xt.pointShadowMatrix.value=L.state.pointShadowMatrix),N.currentProgram=bt,N.uniformsList=null,bt}function Zo(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=ra.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Jo(v,P){const I=At.get(v);I.outputColorSpace=P.outputColorSpace,I.batching=P.batching,I.batchingColor=P.batchingColor,I.instancing=P.instancing,I.instancingColor=P.instancingColor,I.instancingMorph=P.instancingMorph,I.skinning=P.skinning,I.morphTargets=P.morphTargets,I.morphNormals=P.morphNormals,I.morphColors=P.morphColors,I.morphTargetsCount=P.morphTargetsCount,I.numClippingPlanes=P.numClippingPlanes,I.numIntersection=P.numClipIntersection,I.vertexAlphas=P.vertexAlphas,I.vertexTangents=P.vertexTangents,I.toneMapping=P.toneMapping}function Hs(v,P,I,N,L){P.isScene!==!0&&(P=Lt),Ct.resetTextureUnits();const et=P.fog,ot=N.isMeshStandardMaterial?P.environment:null,ft=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:un,pt=(N.isMeshStandardMaterial?_:E).get(N.envMap||ot),Mt=N.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,bt=!!I.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),xt=!!I.morphAttributes.position,kt=!!I.morphAttributes.normal,Zt=!!I.morphAttributes.color;let Jt=hn;N.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Jt=M.toneMapping);const xe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Vt=xe!==void 0?xe.length:0,_t=At.get(N),de=f.state.lights;if(z===!0&&(J===!0||v!==b)){const Ee=v===b&&N.id===B;Rt.setState(N,v,Ee)}let zt=!1;N.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==de.state.version||_t.outputColorSpace!==ft||L.isBatchedMesh&&_t.batching===!1||!L.isBatchedMesh&&_t.batching===!0||L.isBatchedMesh&&_t.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&_t.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&_t.instancing===!1||!L.isInstancedMesh&&_t.instancing===!0||L.isSkinnedMesh&&_t.skinning===!1||!L.isSkinnedMesh&&_t.skinning===!0||L.isInstancedMesh&&_t.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&_t.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&_t.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&_t.instancingMorph===!1&&L.morphTexture!==null||_t.envMap!==pt||N.fog===!0&&_t.fog!==et||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Rt.numPlanes||_t.numIntersection!==Rt.numIntersection)||_t.vertexAlphas!==Mt||_t.vertexTangents!==bt||_t.morphTargets!==xt||_t.morphNormals!==kt||_t.morphColors!==Zt||_t.toneMapping!==Jt||_t.morphTargetsCount!==Vt)&&(zt=!0):(zt=!0,_t.__version=N.version);let Pe=_t.currentProgram;zt===!0&&(Pe=Ci(N,P,L));let Cn=!1,Se=!1,Sa=!1;const ie=Pe.getUniforms(),en=_t.uniforms;if(gt.useProgram(Pe.program)&&(Cn=!0,Se=!0,Sa=!0),N.id!==B&&(B=N.id,Se=!0),Cn||b!==v){ie.setValue(T,"projectionMatrix",v.projectionMatrix),ie.setValue(T,"viewMatrix",v.matrixWorldInverse);const Ee=ie.map.cameraPosition;Ee!==void 0&&Ee.setValue(T,ct.setFromMatrixPosition(v.matrixWorld)),qt.logarithmicDepthBuffer&&ie.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ie.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,Se=!0,Sa=!0)}if(L.isSkinnedMesh){ie.setOptional(T,L,"bindMatrix"),ie.setOptional(T,L,"bindMatrixInverse");const Ee=L.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ie.setValue(T,"boneTexture",Ee.boneTexture,Ct))}L.isBatchedMesh&&(ie.setOptional(T,L,"batchingTexture"),ie.setValue(T,"batchingTexture",L._matricesTexture,Ct),ie.setOptional(T,L,"batchingIdTexture"),ie.setValue(T,"batchingIdTexture",L._indirectTexture,Ct),ie.setOptional(T,L,"batchingColorTexture"),L._colorsTexture!==null&&ie.setValue(T,"batchingColorTexture",L._colorsTexture,Ct));const Ma=I.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&Bt.update(L,I,Pe),(Se||_t.receiveShadow!==L.receiveShadow)&&(_t.receiveShadow=L.receiveShadow,ie.setValue(T,"receiveShadow",L.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(en.envMap.value=pt,en.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&P.environment!==null&&(en.envMapIntensity.value=P.environmentIntensity),Se&&(ie.setValue(T,"toneMappingExposure",M.toneMappingExposure),_t.needsLights&&Gs(en,Sa),et&&N.fog===!0&&vt.refreshFogUniforms(en,et),vt.refreshMaterialUniforms(en,N,Y,G,f.state.transmissionRenderTarget[v.id]),ra.upload(T,Zo(_t),en,Ct)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ra.upload(T,Zo(_t),en,Ct),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ie.setValue(T,"center",L.center),ie.setValue(T,"modelViewMatrix",L.modelViewMatrix),ie.setValue(T,"normalMatrix",L.normalMatrix),ie.setValue(T,"modelMatrix",L.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ee=N.uniformsGroups;for(let ba=0,js=Ee.length;ba<js;ba++){const Qo=Ee[ba];Kt.update(Qo,Pe),Kt.bind(Qo,Pe)}}return Pe}function Gs(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Ws(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(v,P,I){At.get(v.texture).__webglTexture=P,At.get(v.depthTexture).__webglTexture=I;const N=At.get(v);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=I===void 0,N.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const I=At.get(v);I.__webglFramebuffer=P,I.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,I=0){w=v,O=P,C=I;let N=!0,L=null,et=!1,ot=!1;if(v){const pt=At.get(v);pt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(T.FRAMEBUFFER,null),N=!1):pt.__webglFramebuffer===void 0?Ct.setupRenderTarget(v):pt.__hasExternalTextures&&Ct.rebindTextures(v,At.get(v.texture).__webglTexture,At.get(v.depthTexture).__webglTexture);const Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ot=!0);const bt=At.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[P])?L=bt[P][I]:L=bt[P],et=!0):v.samples>0&&Ct.useMultisampledRTT(v)===!1?L=At.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?L=bt[I]:L=bt,S.copy(v.viewport),R.copy(v.scissor),H=v.scissorTest}else S.copy(dt).multiplyScalar(Y).floor(),R.copy(mt).multiplyScalar(Y).floor(),H=Nt;if(gt.bindFramebuffer(T.FRAMEBUFFER,L)&&N&&gt.drawBuffers(v,L),gt.viewport(S),gt.scissor(R),gt.setScissorTest(H),et){const pt=At.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+P,pt.__webglTexture,I)}else if(ot){const pt=At.get(v.texture),Mt=P||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,pt.__webglTexture,I||0,Mt)}B=-1},this.readRenderTargetPixels=function(v,P,I,N,L,et,ot){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=At.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){gt.bindFramebuffer(T.FRAMEBUFFER,ft);try{const pt=v.texture,Mt=pt.format,bt=pt.type;if(!qt.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-N&&I>=0&&I<=v.height-L&&T.readPixels(P,I,N,L,Tt.convert(Mt),Tt.convert(bt),et)}finally{const pt=w!==null?At.get(w).__webglFramebuffer:null;gt.bindFramebuffer(T.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(v,P,I,N,L,et,ot){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=At.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){gt.bindFramebuffer(T.FRAMEBUFFER,ft);try{const pt=v.texture,Mt=pt.format,bt=pt.type;if(!qt.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-N&&I>=0&&I<=v.height-L){const xt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.bufferData(T.PIXEL_PACK_BUFFER,et.byteLength,T.STREAM_READ),T.readPixels(P,I,N,L,Tt.convert(Mt),Tt.convert(bt),0),T.flush();const kt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await sl(T,kt,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,et)}finally{T.deleteBuffer(xt),T.deleteSync(kt)}return et}}finally{const pt=w!==null?At.get(w).__webglFramebuffer:null;gt.bindFramebuffer(T.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(v,P=null,I=0){v.isTexture!==!0&&(_i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const N=Math.pow(2,-I),L=Math.floor(v.image.width*N),et=Math.floor(v.image.height*N),ot=P!==null?P.x:0,ft=P!==null?P.y:0;Ct.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,I,0,0,ot,ft,L,et),gt.unbindTexture()},this.copyTextureToTexture=function(v,P,I=null,N=null,L=0){v.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,I=null);let et,ot,ft,pt,Mt,bt;I!==null?(et=I.max.x-I.min.x,ot=I.max.y-I.min.y,ft=I.min.x,pt=I.min.y):(et=v.image.width,ot=v.image.height,ft=0,pt=0),N!==null?(Mt=N.x,bt=N.y):(Mt=0,bt=0);const xt=Tt.convert(P.format),kt=Tt.convert(P.type);Ct.setTexture2D(P,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);const Zt=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),xe=T.getParameter(T.UNPACK_SKIP_PIXELS),Vt=T.getParameter(T.UNPACK_SKIP_ROWS),_t=T.getParameter(T.UNPACK_SKIP_IMAGES),de=v.isCompressedTexture?v.mipmaps[L]:v.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,de.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,de.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ft),T.pixelStorei(T.UNPACK_SKIP_ROWS,pt),v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,L,Mt,bt,et,ot,xt,kt,de.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,L,Mt,bt,de.width,de.height,xt,de.data):T.texSubImage2D(T.TEXTURE_2D,L,Mt,bt,et,ot,xt,kt,de),T.pixelStorei(T.UNPACK_ROW_LENGTH,Zt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,_t),L===0&&P.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(v,P,I=null,N=null,L=0){v.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,N=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0);let et,ot,ft,pt,Mt,bt,xt,kt,Zt;const Jt=v.isCompressedTexture?v.mipmaps[L]:v.image;I!==null?(et=I.max.x-I.min.x,ot=I.max.y-I.min.y,ft=I.max.z-I.min.z,pt=I.min.x,Mt=I.min.y,bt=I.min.z):(et=Jt.width,ot=Jt.height,ft=Jt.depth,pt=0,Mt=0,bt=0),N!==null?(xt=N.x,kt=N.y,Zt=N.z):(xt=0,kt=0,Zt=0);const xe=Tt.convert(P.format),Vt=Tt.convert(P.type);let _t;if(P.isData3DTexture)Ct.setTexture3D(P,0),_t=T.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)Ct.setTexture2DArray(P,0),_t=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);const de=T.getParameter(T.UNPACK_ROW_LENGTH),zt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Pe=T.getParameter(T.UNPACK_SKIP_PIXELS),Cn=T.getParameter(T.UNPACK_SKIP_ROWS),Se=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Jt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,pt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,bt),v.isDataTexture||v.isData3DTexture?T.texSubImage3D(_t,L,xt,kt,Zt,et,ot,ft,xe,Vt,Jt.data):P.isCompressedArrayTexture?T.compressedTexSubImage3D(_t,L,xt,kt,Zt,et,ot,ft,xe,Jt.data):T.texSubImage3D(_t,L,xt,kt,Zt,et,ot,ft,xe,Vt,Jt),T.pixelStorei(T.UNPACK_ROW_LENGTH,de),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,zt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Cn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Se),L===0&&P.generateMipmaps&&T.generateMipmap(_t),gt.unbindTexture()},this.initRenderTarget=function(v){At.get(v).__webglFramebuffer===void 0&&Ct.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ct.setTextureCube(v,0):v.isData3DTexture?Ct.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ct.setTexture2DArray(v,0):Ct.setTexture2D(v,0),gt.unbindTexture()},this.resetState=function(){O=0,C=0,w=null,gt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Vo?"display-p3":"srgb",e.unpackColorSpace=Ht.workingColorSpace===ga?"display-p3":"srgb"}}class xp extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bs extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new U,pa=new U,$r=new Qt,hi=new Ho,Zi=new yi,$a=new U,Zr=new U;class Sp extends ge{constructor(t=new De,e=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let a=1,o=e.count;a<o;a++)fa.fromBufferAttribute(e,a-1),pa.fromBufferAttribute(e,a),n[a]=n[a-1],n[a]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(a),Zi.radius+=o,t.ray.intersectsSphere(Zi)===!1)return;$r.copy(a).invert(),hi.copy(t.ray).applyMatrix4($r);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const m=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=m,f=g-1;x<f;x+=l){const h=d.getX(x),y=d.getX(x+1),M=Ji(this,t,hi,c,h,y);M&&e.push(M)}if(this.isLineLoop){const x=d.getX(g-1),f=d.getX(m),h=Ji(this,t,hi,c,x,f);h&&e.push(h)}}else{const m=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let x=m,f=g-1;x<f;x+=l){const h=Ji(this,t,hi,c,x,x+1);h&&e.push(h)}if(this.isLineLoop){const x=Ji(this,t,hi,c,g-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function Ji(i,t,e,n,a,o){const r=i.geometry.attributes.position;if(fa.fromBufferAttribute(r,a),pa.fromBufferAttribute(r,o),e.distanceSqToSegment(fa,pa,$a,Zr)>n)return;$a.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($a);if(!(c<t.near||c>t.far))return{distance:c,point:Zr.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Jr=new U,Qr=new U;class Mp extends Sp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let a=0,o=e.count;a<o;a+=2)Jr.fromBufferAttribute(e,a),Qr.fromBufferAttribute(e,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Jr.distanceTo(Qr);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bp extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ts=new Qt,Lo=new Ho,Qi=new yi,ta=new U;class Ep extends ge{constructor(t=new De,e=new bp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,a=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(a),Qi.radius+=o,t.ray.intersectsSphere(Qi)===!1)return;ts.copy(a).invert(),Lo.copy(t.ray).applyMatrix4(ts);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let g=p,x=m;g<x;g++){const f=l.getX(g);ta.fromBufferAttribute(u,f),es(ta,f,c,a,t,e,this)}}else{const p=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=p,x=m;g<x;g++)ta.fromBufferAttribute(u,g),es(ta,g,c,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function es(i,t,e,n,a,o,r){const s=Lo.distanceSqToPoint(i);if(s<e){const c=new U;Lo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;o.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:t,face:null,object:r})}}class jo extends De{constructor(t=1,e=32,n=16,a=0,o=Math.PI*2,r=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:o,thetaStart:r,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+s,Math.PI);let l=0;const d=[],u=new U,p=new U,m=[],g=[],x=[],f=[];for(let h=0;h<=n;h++){const y=[],M=h/n;let A=0;h===0&&r===0?A=.5/e:h===n&&c===Math.PI&&(A=-.5/e);for(let O=0;O<=e;O++){const C=O/e;u.x=-t*Math.cos(a+C*o)*Math.sin(r+M*s),u.y=t*Math.cos(r+M*s),u.z=t*Math.sin(a+C*o)*Math.sin(r+M*s),g.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),f.push(C+A,1-M),y.push(l++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<e;y++){const M=d[h][y+1],A=d[h][y],O=d[h+1][y],C=d[h+1][y+1];(h!==0||r>0)&&m.push(M,A,C),(h!==n-1||c<Math.PI)&&m.push(A,O,C)}this.setIndex(m),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const ns={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yp{constructor(t,e,n){const a=this;let o=!1,r=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){s++,o===!1&&a.onStart!==void 0&&a.onStart(d,r,s),o=!0},this.itemEnd=function(d){r++,a.onProgress!==void 0&&a.onProgress(d,r,s),r===s&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,p=l.length;u<p;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Ap=new yp;class Xo{constructor(t){this.manager=t!==void 0?t:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,o){n.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Tp extends Xo{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=ns.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const s=Si("img");function c(){d(),ns.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){d(),a&&a(u),o.manager.itemError(t),o.manager.itemEnd(t)}function d(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(t),s.src=t,s}}class Fs extends Xo{constructor(t){super(t)}load(t,e,n,a){const o=new _e,r=new Tp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(s){o.image=s,o.needsUpdate=!0,e!==void 0&&e(o)},n,a),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);const gi=class gi{constructor(){yt(this,"scene");yt(this,"sphere");yt(this,"mat");this.scene=new xp;const t=new jo(gi.RADIUS,64,32);t.scale(-1,1,1),this.mat=new Go({side:Je}),this.sphere=new Fe(t,this.mat),this.scene.add(this.sphere)}async setScene(t){if(t)return new Promise(e=>{new Fs().load(t,n=>{n.colorSpace=Ae,this.mat.map=n,this.mat.needsUpdate=!0,e()},void 0,()=>{console.warn("[SphereViewer] failed to load",t),e()})})}static lonLatToWorld(t,e){const n=ua.degToRad(90-e),a=ua.degToRad(t),o=gi.RADIUS*.98;return new U(-Math.sin(n)*Math.cos(a),Math.cos(n),Math.sin(n)*Math.sin(a)).multiplyScalar(o)}};yt(gi,"RADIUS",10);let ma=gi;class wp{constructor(t){yt(this,"camera");yt(this,"lon",0);yt(this,"lat",0);yt(this,"lonVel",0);yt(this,"latVel",0);yt(this,"isDragging",!1);yt(this,"lastX",0);yt(this,"lastY",0);yt(this,"sensitivity",.22);this.camera=new Te(75,window.innerWidth/window.innerHeight,.01,Cp*2),this.camera.position.set(0,0,0),this.camera.rotation.order="YXZ",t.addEventListener("mousedown",a=>{this.isDragging=!0,this.lastX=a.clientX,this.lastY=a.clientY}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",a=>{if(!this.isDragging)return;const o=a.clientX-this.lastX,r=a.clientY-this.lastY;this.lonVel-=o*this.sensitivity,this.latVel-=r*this.sensitivity,this.lastX=a.clientX,this.lastY=a.clientY});let e=0,n=0;t.addEventListener("touchstart",a=>{e=a.touches[0].clientX,n=a.touches[0].clientY}),t.addEventListener("touchmove",a=>{a.preventDefault();const o=a.touches[0].clientX-e,r=a.touches[0].clientY-n;this.lonVel-=o*this.sensitivity,this.latVel-=r*this.sensitivity,e=a.touches[0].clientX,n=a.touches[0].clientY},{passive:!1})}update(){this.lon+=this.lonVel*.06,this.lat+=this.latVel*.06,this.lonVel*=.88,this.latVel*=.88,this.lat=Math.max(-85,Math.min(85,this.lat)),this.camera.rotation.y=ua.degToRad(-this.lon),this.camera.rotation.x=ua.degToRad(-this.lat)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}reset(){this.lon=0,this.lat=0,this.lonVel=0,this.latVel=0}lookAt(t,e){this.lon=t,this.lat=e,this.lonVel=0,this.latVel=0}}const Cp=10;class Rp{constructor(){yt(this,"mesh");yt(this,"N",3e3);yt(this,"targets");yt(this,"current");yt(this,"scatter");yt(this,"phases");this.buildSilhouette();const t=new De;t.setAttribute("position",new Ce(this.current,3));const e=new He({transparent:!0,depthWrite:!1,blending:Za,uniforms:{uTime:{value:0},uTrust:{value:.5},uAnomaly:{value:0}},vertexShader:`
        uniform float uTime;
        uniform float uTrust;
        varying float vA;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(2.8 / -mv.z * 9.0, 0.5, 5.0);
          vA = 0.4 + uTrust * 0.6;
        }
      `,fragmentShader:`
        varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.1, d) * vA;
          gl_FragColor = vec4(0.22, 0.86, 0.80, a);
        }
      `});this.mesh=new Ep(t,e),this.mesh.position.set(.65,-.15,-3.6),this.mesh.visible=!1}buildSilhouette(){this.targets=new Float32Array(this.N*3),this.current=new Float32Array(this.N*3),this.scatter=new Float32Array(this.N*3),this.phases=new Float32Array(this.N);const t=[{frac:.14,fn:n=>this.head(n)},{frac:.03,fn:n=>this.neck(n)},{frac:.28,fn:n=>this.torso(n)},{frac:.22,fn:n=>this.arms(n)},{frac:.1,fn:n=>this.hips(n)},{frac:.23,fn:n=>this.legs(n)}];let e=0;for(const n of t){const a=Math.round(this.N*n.frac);for(let o=0;o<a&&e<this.N;o++,e++){const r=Math.random(),s=n.fn(r);this.targets[e*3]=s.x,this.targets[e*3+1]=s.y,this.targets[e*3+2]=s.z,this.current[e*3]=(Math.random()-.5)*3,this.current[e*3+1]=(Math.random()-.5)*3,this.current[e*3+2]=(Math.random()-.5)*.5,this.scatter[e*3]=Math.random()-.5,this.scatter[e*3+1]=Math.random()-.5,this.scatter[e*3+2]=(Math.random()-.5)*.3,this.phases[e]=Math.random()*Math.PI*2}}}head(t){const e=t*Math.PI*2;return{x:Math.cos(e)*.14,y:.82+Math.sin(e)*.18,z:0}}neck(t){return{x:(Math.random()-.5)*.06,y:.58+Math.random()*.12,z:0}}torso(t){const e=.22-Math.abs(t-.5)*.2;return{x:(Math.random()-.5)*e*2,y:.05+t*.52,z:0}}arms(t){const e=t<.5?1:-1,n=t%.5*2;return{x:e*(.22+n*.28),y:.3+(1-n)*.28-n*.1,z:0}}hips(t){const e=.18+Math.abs(t-.5)*.14;return{x:(Math.random()-.5)*e*2,y:-.05+t*.12,z:0}}legs(t){const e=t<.5?.08:-.08,n=t%.5*2;return{x:e+(Math.random()-.5)*.09,y:-.12-n*.55,z:0}}show(){this.mesh.visible=!0}hide(){this.mesh.visible=!1}update(t,e,n,a){if(!this.mesh.visible)return;const o=this.mesh.material;o.uniforms.uTime.value=t,o.uniforms.uTrust.value=e/100,o.uniforms.uAnomaly.value=n/10;const r=e/100,s=.015+r*.085,c=(1-r)*.22,l=n>4?.015:0,d=this.mesh.geometry.attributes.position;for(let u=0;u<this.N;u++){Math.random()<l&&(this.current[u*3]+=(Math.random()-.5)*.8,this.current[u*3+1]+=(Math.random()-.5)*.8);const p=a?Math.sin(t*6+this.phases[u])*.02:0;for(let m=0;m<3;m++){const g=this.targets[u*3+m]+this.scatter[u*3+m]*c+(m===1?p:0);this.current[u*3+m]+=(g-this.current[u*3+m])*s}d.array[u*3]=this.current[u*3],d.array[u*3+1]=this.current[u*3+1],d.array[u*3+2]=this.current[u*3+2]}d.needsUpdate=!0}}const Dp={subject_a:{id:"subject_a",poses:{idle:{image:"/characters/subject_a/idle.webp"},talk:{image:"/characters/subject_a/talk.webp"}}}},is=1.6,as=2.4,Pp=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
`,Lp=`
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uTrust;
  uniform float uAnomaly;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float aberr = 0.003 * uAnomaly;
    float cr = texture2D(uTexture, uv + vec2(aberr, 0.0)).r;
    float cg = texture2D(uTexture, uv).g;
    float cb = texture2D(uTexture, uv - vec2(aberr, 0.0)).b;
    vec3 col = vec3(cr, cg, cb);

    // White background removal (min-channel, not luminance)
    float minCh = min(col.r, min(col.g, col.b));
    float bgMask = 1.0 - smoothstep(0.86, 0.98, minCh);

    // Atmospheric color grade
    float grey = dot(col, vec3(0.333));
    col = mix(col, vec3(grey), 0.30);
    col *= 0.78;
    col = mix(col, col * vec3(0.60, 1.02, 0.96), 0.10);

    // Scan beam
    float scanPos = fract(uTime * 0.14);
    float beam = smoothstep(0.0, 0.012, abs(vUv.y - scanPos)) > 0.0 ? 0.0 : 0.18;
    col += beam * vec3(0.3, 1.0, 0.9);

    // Rectangular vignette — avoids circular edge blur
    float ex = smoothstep(0.0, 0.06, vUv.x) * smoothstep(1.0, 0.94, vUv.x);
    float ey = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.96, vUv.y);
    float vign = ex * ey;

    float alpha = bgMask * vign * (0.72 + uTrust * 0.28);
    gl_FragColor = vec4(col, alpha);
  }
`;class Up{constructor(t){yt(this,"group");yt(this,"mat");yt(this,"loader",new Fs);this.group=new fi,this.mat=new He({transparent:!0,depthWrite:!1,side:Ve,uniforms:{uTexture:{value:null},uTime:{value:0},uTrust:{value:.5},uAnomaly:{value:0}},vertexShader:Pp,fragmentShader:Lp});const e=new Fe(new Ti(is,as),this.mat);this.group.add(e),this.group.add(this.buildBrackets()),this.group.visible=!1,t&&this.setImage(t)}setImage(t){this.loader.load(t,e=>{e.colorSpace=Ae,this.mat.uniforms.uTexture.value=e,this.mat.needsUpdate=!0})}setPose(t,e){const n=Dp[t];if(!n){console.warn("[CharacterSpatial] unknown character:",t);return}const a=n.poses[e];if(!a){console.warn("[CharacterSpatial] unknown pose:",e,"for",t);return}this.applyPose(a)}applyPose(t){this.setImage(t.image)}setPosition(t,e,n){this.group.position.set(t,e,n)}show(){this.group.visible=!0}hide(){this.group.visible=!1}update(t,e,n){this.group.visible&&(this.mat.uniforms.uTime.value=t,this.mat.uniforms.uTrust.value=e/100,this.mat.uniforms.uAnomaly.value=n/10)}buildBrackets(){const t=is/2,e=as/2,n=.12,a=[[-t,e-n],[-t,e],[-t+n,e],[t-n,e],[t,e],[t,e-n],[t,-e+n],[t,-e],[t-n,-e],[-t+n,-e],[-t,-e],[-t,-e+n]],o=[];for(let s=0;s<a.length;s+=3)o.push(a[s][0],a[s][1],.001),o.push(a[s+1][0],a[s+1][1],.001),o.push(a[s+1][0],a[s+1][1],.001),o.push(a[s+2][0],a[s+2][1],.001);const r=new De;return r.setAttribute("position",new Ce(new Float32Array(o),3)),new Mp(r,new Bs({color:3725e3,transparent:!0,opacity:.7}))}}class Ip{constructor(t){yt(this,"el");yt(this,"timeout",null);yt(this,"_typing",!1);this.el=t}get isTyping(){return this._typing}type(t,e=38){this.cancel(),this._typing=!0,this.el.textContent="";let n=0;const a=document.createElement("span");a.className="narrative-cursor",a.textContent="▮";const o=()=>{n<t.length?(this.el.textContent=t.slice(0,++n),this.el.appendChild(a),this.timeout=setTimeout(o,e)):(a.remove(),this._typing=!1)};o()}cancel(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this._typing=!1}}class Np{constructor(t,e){yt(this,"container");yt(this,"onActivate");yt(this,"live",[]);yt(this,"_ndc",new U);this.container=t,this.onActivate=e}render(t){this.container.innerHTML="",this.live=[];for(const e of t){const n=ma.lonLatToWorld(e.lon,e.lat),a=document.createElement("div");a.className="hotspot",a.setAttribute("data-id",e.id);const o=document.createElement("span");o.className="hotspot-label",o.textContent=e.label,a.appendChild(o),a.addEventListener("click",()=>this.onActivate(e.id,e.goto,e.effect)),this.container.appendChild(a),this.live.push({el:a,world:n,data:e})}}tick(t){const e=new U;for(const{el:n,world:a}of this.live){t.getWorldDirection(e);const o=e.dot(a.clone().normalize());if(o<.1){n.style.opacity="0",n.style.pointerEvents="none";continue}this._ndc.copy(a).project(t);const r=(this._ndc.x*.5+.5)*window.innerWidth,s=(-this._ndc.y*.5+.5)*window.innerHeight;n.style.left=`${r}px`,n.style.top=`${s}px`,n.style.opacity=String(Math.min(1,(o-.1)*3)),n.style.pointerEvents="auto"}}}class Bp{constructor(t,e){yt(this,"container");yt(this,"onSelect");this.container=t,this.onSelect=e}render(t){this.container.innerHTML="",t.forEach((e,n)=>{const a=document.createElement("button");a.className="choice",a.innerHTML=`<span class="tag">[${n+1}]</span> ${e.label}`,a.addEventListener("click",()=>this.onSelect(e.goto,e.effect)),this.container.appendChild(a)})}}class Fp{constructor(t,e,n={}){yt(this,"state");yt(this,"viewer");yt(this,"rig");yt(this,"gCloud");yt(this,"character");yt(this,"narrative");yt(this,"hotspots");yt(this,"choices");yt(this,"renderer");yt(this,"currentNodeId","");yt(this,"nodeId_el");yt(this,"state_el");this.graph=e,this.state=new Ys(n),this.renderer=new vp({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(innerWidth,innerHeight),this.viewer=new ma,this.rig=new wp(t),this.gCloud=new Rp,this.viewer.scene.add(this.gCloud.mesh),this.character=new Up,this.viewer.scene.add(this.character.group),this.narrative=new Ip(document.getElementById("narrative")),this.hotspots=new Np(document.getElementById("hotspots"),(a,o,r)=>this.handleHotspot(a,o,r)),this.choices=new Bp(document.getElementById("choices"),(a,o)=>this.handleChoice(a,o)),this.nodeId_el=document.getElementById("hud-node"),this.state_el=document.getElementById("hud-state"),document.getElementById("reset-btn").addEventListener("click",()=>this.reset()),document.getElementById("panel-close").addEventListener("click",()=>{document.getElementById("panel").classList.add("hidden")}),window.addEventListener("resize",()=>this.onResize())}async enter(t){const e=this.graph[t];if(!e){console.warn("[GameDirector] unknown node:",t);return}this.currentNodeId=t,await this.viewer.setScene(e.panorama),this.nodeId_el.textContent=`NODE ${t}`,this.refreshStateHud();let n=!1;e.character?(n=!0,this.character.setPose(e.character.id,e.character.pose),this.character.setPosition(...e.character.position),this.character.show()):this.character.hide();const a=(e.narrativeVariants??[]).find(c=>this.state.checkCondition(c.condition)),o=(a==null?void 0:a.text)??e.narrative;o?(n?this.gCloud.hide():this.gCloud.show(),this.narrative.type(o)):this.gCloud.hide();const r=(e.hotspots??[]).filter(c=>this.state.checkCondition(c.condition)),s=(e.choices??[]).filter(c=>this.state.checkCondition(c.condition));this.hotspots.render(r),s.length===0&&e.next?this.choices.render([{label:"▶",goto:e.next}]):this.choices.render(s)}refreshStateHud(){const t=this.state.get();this.state_el.textContent=Object.entries(t).map(([e,n])=>`${e} ${n}`).join(" · ")}handleHotspot(t,e,n){var r;const a=this.graph[this.currentNodeId],o=(r=a==null?void 0:a.hotspots)==null?void 0:r.find(s=>s.id===t);if(o){if(o.description){const s=document.getElementById("panel");document.getElementById("panel-title").textContent=o.label,document.getElementById("panel-body").textContent=o.description,s.classList.remove("hidden")}n&&this.state.apply(n),e&&this.enter(e)}}handleChoice(t,e){e&&this.state.apply(e),this.enter(t)}reset(){this.state.reset(),this.rig.reset(),this.narrative.cancel(),this.gCloud.hide(),this.character.hide();const t=Object.keys(this.graph)[0];t&&this.enter(t)}update(t){const e=this.state.get();this.rig.update(),this.gCloud.update(t,e.trustG??0,e.anomalyLevel??0,this.narrative.isTyping),this.character.update(t,e.trustG??0,e.anomalyLevel??0),this.hotspots.tick(this.rig.camera),this.renderer.render(this.viewer.scene,this.rig.camera)}onResize(){this.renderer.setSize(innerWidth,innerHeight),this.rig.onResize()}}const Op={note:"지게꾼 (PORTER) — D-21 징집 당일. Replace panorama paths with your own equirectangular 2:1 images under public/panorama/.",hotspot_coords:"lon = horizontal degrees (0=forward, +90=left), lat = vertical degrees (0=horizon)"},kp={panorama:"/panorama/d21_01_field_dawn.jpg",narrative:`해 뜨기 전. 만술이 눈을 뜬다. 논에서 자는 날이다.
벼 냄새. 흙 냄새. 이슬이 얼굴에 닿아 있다.
만술이 일어나지 않고 잠깐 누워 있는다. 하늘이 아직 어둡다. 별이 몇 개 남아 있다.`,choices:[{label:"A. 바로 일어난다",goto:"d21_02"},{label:"B. 별을 센다 — 셋까지 세고 일어난다",goto:"d21_02",effect:{starsCounted:1}},{label:"C. 그냥 누워 있는다 — 어머니 소리가 들릴 때까지",goto:"d21_02",effect:{starsCounted:1}}]},Vp={panorama:"/panorama/d21_02_paddy.jpg",narrative:`해가 뜬다. 벼가 아직 푸르다. 7월 초. 수확까진 멀었다.
만술이 허리를 숙이고 일한다. 손이 익숙하게 움직인다.
저 멀리 마을 입구에서 먼지가 인다. 트럭 소리.
만술이 허리를 편다.`,next:"d21_03"},zp={panorama:"/panorama/d21_03_truck_arrival.jpg",narrative:`트럭이 선다. 군인 둘. 마을 이장이 그 뒤에 서 있다.
이장은 만술의 아버지 친구다. 그런데 지금 눈을 못 마주친다.
군인 하나가 종이를 읽는다. 이만술. 박봉길.
이장이 만술을 보지 않는 채로 말한다.
"나라 일이다."`,choices:[{label:"A. 그냥 본다 — 아무 표정 없이",goto:"d21_04"},{label:"B. 고개를 끄덕인다",goto:"d21_04"},{label:"C. 이장의 눈을 찾는다 — 이장은 끝내 안 마주친다",goto:"d21_04",effect:{sawElderAvert:1}}]},Hp={panorama:"/panorama/d21_03_truck_arrival.jpg",narrativeVariants:[{condition:{sawElderAvert:{gte:1}},text:`봉길 아저씨가 논두렁에서 온다. 손에 흙이 묻어 있다. 닦지 않은 채로 트럭 쪽으로 걷는다.
만술이 이장의 눈을 끝까지 찾았다. 이장은 끝내 외면했다.
만술이 처음으로 어른의 외면을 정면으로 목격한다.
봉길 아저씨가 만술 옆을 지나치면서 낮게 말한다.
"짐 챙겨와. 옷 두 벌."`},{condition:{},text:`봉길 아저씨가 논두렁에서 온다. 손에 흙이 묻어 있다. 닦지 않은 채로 트럭 쪽으로 걷는다.
만술이 봉길 아저씨를 본다.
봉길 아저씨가 만술 옆을 지나치면서 낮게 말한다.
"짐 챙겨와. 옷 두 벌."
그게 다다. 뒤를 보지 않는다.`}],next:"d21_05"},Gp={panorama:"/panorama/d21_05_home.jpg",narrative:`만술이 집으로 뛰어간다.
마루. 방. 어머니가 부엌에 있다가 나온다. 어머니의 얼굴 — 이미 알고 있다는 얼굴.
아무 말이 없다. 어머니가 방으로 들어가서 옷을 챙긴다. 만술 것. 접어서 만술 손에 쥐어준다.
만술이 받는다.`,choices:[{label:'A. "다녀오겠습니다." 한다',goto:"d21_06"},{label:"B. 아무 말 안 한다 — 그냥 나간다",goto:"d21_06"},{label:'C. "어머니." 부른다 — 그리고 아무 말 못 한다',goto:"d21_06",effect:{motherPushedBack:1}}]},Wp={panorama:"/panorama/d21_06_truck_departure.jpg",narrative:`트럭 앞. 군인이 올라타라고 한다.
봉길 아저씨가 이미 올라가 있다. 다른 남자들이 올라간다.
만술이 올라타려다 한 번 돌아본다.
마을. 논. 어머니가 마루에 서 있다. 작게.`,choices:[{label:"A. 손을 든다",goto:"d21_07",effect:{wavedGoodbye:1}},{label:"B. 그냥 탄다",goto:"d21_07"},{label:"C. 한참 본다 — 군인이 재촉할 때까지",goto:"d21_07"}]},jp={panorama:"/panorama/d21_07_truck_bed.jpg",narrative:`트럭이 움직인다. 마을이 멀어진다.
만술이 뒤를 본다. 봉길 아저씨는 앞을 본다.
트럭에 여섯 명. 한 명은 계속 손마디를 꺾는다. 딱. 딱. 딱.
한 명은 눈을 감고 있다. 한 명은 봇짐을 두 손으로 꼭 쥐고 있다.
만술이 그 손들을 하나씩 본다.`,choices:[{label:"A. 손마디 꺾는 남자",goto:"d21_08"},{label:"B. 봇짐 쥔 남자",goto:"d21_08"},{label:"C. 봉길 아저씨의 손",goto:"d21_08",effect:{watchedBonggilHands:1}}]},Xp={panorama:"/panorama/d21_07_truck_bed.jpg",narrative:`한참 가다가 봉길 아저씨가 담배를 꺼낸다. 불을 붙인다. 연기를 내뱉는다.
만술한테 내밀지 않는다. 봉길 아저씨는 만술이 담배를 안 핀다는 걸 안다.
그런데 오늘은 —`,choices:[{label:"A. 내밀지 않는다",goto:"d21_09"},{label:'B. "저도요." 하고 손을 내민다',goto:"d21_09",effect:{sharedFirstCigarette:1}}]},qp={panorama:"/panorama/d21_09_basecamp_arrival.jpg",narrative:`트럭이 선다. 군인이 내리라고 한다. 다들 내린다.
만술이 내리기 직전 — 트럭 바닥을 본다. 짚이 깔려 있다.
누군가 흘린 건지 — 쌀알 몇 개가 떨어져 있다.`,choices:[{label:"A. 그냥 내린다",goto:"d21_10"},{label:"B. 쌀알을 집는다",goto:"d21_10",effect:{riceKept:1}}]},Yp={panorama:"/panorama/d21_10_basecamp.jpg",narrative:`산 아래 캠프. 텐트들. 지게들이 벽에 기대어 세워져 있다.
군인들이 움직인다. 빠르다. 냄새 — 땀, 밥, 뭔가 탄 것.
선배 지게꾼 하나가 지나가다 만술을 본다. 위아래로 훑는다. 아무 말 안 하고 지나간다.
봉길 아저씨가 만술 옆에 선다.
"입 다물고 시키는 것만 해."`,choices:[{label:'A. "예." 한다',goto:"d21_11"},{label:"B. 고개를 끄덕인다",goto:"d21_11"},{label:"C. 아무 반응 안 한다 — 캠프를 계속 본다",goto:"d21_11"}]},Kp={panorama:"/panorama/d21_10_basecamp.jpg",narrative:`하사가 나온다. 짧고 빠르게 말한다.
"군인 아니다. 짐 나른다. 탄약, 식량, 부상병. 시키는 대로. 딴짓하면 죽는다. 도망치면 죽는다. 겁나면 참아라."
그게 다다.
지게를 하나씩 받는다.
만술이 지게를 받아들고 선다. 짐이 없는데도 — 무게가 있다.`,hotspots:[{id:"jige",label:"지게",lon:0,lat:-10,description:"받았는데 — 어떻게 매는지 모른다."}],choices:[{label:"A. 선배 지게꾼한테 묻는다",goto:"d21_12"},{label:"B. 봉길 아저씨한테 묻는다",goto:"d21_12",effect:{bonggilDistance:1}},{label:"C. 아무한테도 안 묻고 혼자 해본다",goto:"d21_12"},{label:"D. 하사한테 묻는다",goto:"d21_12",effect:{askedSergeant:1}}]},$p={panorama:"/panorama/d21_12_tent_night.jpg",narrative:`텐트. 지게꾼 여섯이 눕는다. 좁다. 옆 사람 발이 얼굴 옆에 있다.
아무도 말이 없다. 밖에서 군인들 소리가 들린다.
한참 후 봉길 아저씨가 낮게 말한다.
"자라. 내일도 갈 길 멀다."`,choices:[{label:'A. "예." 하고 눈을 감는다',goto:"d21_end"},{label:"B. 아무 말 없이 눈을 감는다",goto:"d21_end"},{label:'C. "무섭습니다, 아저씨." 한다',goto:"d21_end",effect:{bonggilDistance:1}},{label:'D. "아저씨는요?" 한다',goto:"d21_end",effect:{bonggilDistance:2}}]},Zp={panorama:"/panorama/d21_12_tent_night.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:2}},text:`봉길 아저씨가 한참 있다가 아주 낮게 말한다. "나도."
늦게, 더 조용하게 나온다. 그래서 더 크게 들린다.

D-21이 끝났다.`},{condition:{bonggilDistance:{gte:1}},text:`봉길 아저씨가 잠시 침묵하다가 말한다. "나도."

D-21이 끝났다.`},{condition:{},text:`텐트 안이 조용해진다. 모두 잠든다.

D-21이 끝났다.`}],next:"d20_01"},Jp={panorama:"/panorama/d20_01_wakeup.jpg",narrative:`동이 트기 전. 누군가 텐트를 발로 찬다. 군인.
"일어나."
그게 다다.
지게꾼들이 일어난다. 말이 없다.
만술이 눈을 비빈다. 어디 있는지 1초쯤 모른다.
봉길 아저씨는 이미 앉아 있다. 언제 일어났는지 모른다.`,next:"d20_02"},Qp={panorama:"/panorama/d20_02_breakfast.jpg",narrative:`건빵 세 개. 물 한 모금. 그게 아침이다.
만술이 건빵을 씹는다. 딱딱하다.
옆에 처음 보는 지게꾼이 건빵을 물에 적셔서 먹는다.
만술이 그걸 본다.`,choices:[{label:"A. 그냥 씹는다",goto:"d20_03"},{label:"B. 따라서 물에 적신다",goto:"d20_03",effect:{softenedBiscuit:1}}]},tm={panorama:"/panorama/d20_03_load.jpg",narrative:`포탄 상자. 하사가 지게에 묶는 법을 보여준다. 한 번만.
만술이 흉내낸다. 끈이 삐뚤다.`,choices:[{label:"A. 그냥 맨다 — 어깨가 한쪽으로 쏠린다",goto:"d20_04"},{label:"B. 풀고 다시 맨다 — 뒤에서 선배 지게꾼이 본다",goto:"d20_04",effect:{redidStrap:1}},{label:"C. 옆 사람한테 봐달라고 한다",goto:"d20_04"}]},em={panorama:"/panorama/d20_03_load.jpg",narrativeVariants:[{condition:{redidStrap:{gte:1}},text:`선배 지게꾼이 아무 말 없이 다가와서 끈을 잡아당겨 준다. 단단하게.
그리고 간다. 이름도 모른다.`},{condition:{},text:`끈이 삐뚤다. 어깨가 한쪽으로 쏠린다.
신경 쓸 시간이 없다. 줄을 서야 한다.`}],next:"d20_05"},nm={panorama:"/panorama/d20_05_lineup.jpg",narrative:`지게꾼들이 줄을 선다. 앞에 군인 둘. 뒤에 군인 하나.
만술이 줄 중간에 선다. 앞사람 발뒤꿈치가 보인다. 낡은 고무신.
출발.`,next:"d20_06"},im={panorama:"/panorama/d20_06_climb.jpg",narrative:`산길로 접어든다. 경사가 시작된다.
포탄 상자가 등을 누른다. 발이 땅을 더 힘주어 밀어야 한다.
숨이 찬다. 10분도 안 됐는데.
앞사람은 그냥 걷는다. 리듬이 있다. 만술한테는 없다.`,choices:[{label:"A. 그냥 헐떡인다",goto:"d20_07"},{label:"B. 앞사람 발 박자에 맞춰본다",goto:"d20_07",effect:{breathRhythm:1}}]},am={panorama:"/panorama/d20_07_midslope.jpg",narrative:`고개 중턱. 멀리서 소리가 들린다. 쿵. 쿵쿵.
줄이 멈춘다. 아무 지시 없이. 그냥 다들 멈춘다.
만술도 멈춘다. 심장이 빨라진다.
앞사람 발뒤꿈치가 보인다. 움직이지 않는다.
5초. 10초.
군인이 말한다. "간다."
다시 걷는다.`,next:"d20_08"},om={panorama:"/panorama/d20_08_summit.jpg",narrative:`고개 정상. 잠깐 멈춰서 숨을 고른다.
만술이 고개를 들면 — 산 아래로 펼쳐지는 것들.
마을. 논. 길. 멀리 연기 두 줄기.
연기가 어디서 나는지는 모른다. 그냥 연기다.`,choices:[{label:"A. 숨 고르고 바로 내려간다",goto:"d20_09"},{label:"B. 잠깐 더 본다",goto:"d20_09"},{label:"C. 한참 본다 — 군인이 소리친다",goto:"d20_09",effect:{rememberedSummitView:1}}]},rm={panorama:"/panorama/d20_09_descend.jpg",narrative:`짐을 내려놓고 돌아오는 길. 지게가 비었다.
몸이 가벼운데 발이 이상하다. 무게가 없으니까 오히려 중심을 못 잡는다.
앞사람이 앞에서 걷는다. 담배를 피우면서.
만술이 따라 걷는다.`,choices:[{label:"A. 그냥 걷는다",goto:"d20_10"},{label:'B. "아저씨." 부른다',goto:"d20_10",effect:{talkedToStranger:1}}]},sm={panorama:"/panorama/d20_09_descend.jpg",narrativeVariants:[{condition:{talkedToStranger:{gte:1}},text:`앞사람이 뒤를 안 돌아보고 말한다. "응."
만술이 할 말을 잃는다. 뭘 물으려 했는지 모르겠다.
앞사람이 그냥 걷는다. 그게 다다.`},{condition:{},text:`앞사람이 담배를 피우며 걷는다. 만술이 따라 걷는다.
아무 말도 없다.`}],next:"d20_11"},cm={panorama:"/panorama/d20_11_second_load.jpg",narrative:`오전에 한 번. 오후에 한 번. 하루에 두 번 오른다는 걸 오늘 알았다.
두 번째 짐은 식량 자루. 포탄보다 가벼운데 — 형태가 없어서 흔들린다.
오르막 중간에 자루가 한쪽으로 쏠린다. 만술이 멈춰서 고쳐 맨다.
뒤에서 봉길 아저씨가 온다. 멈추지 않는다. 그냥 지나친다.`,choices:[{label:"A. 아무 말 안 한다",goto:"d20_12"},{label:'B. "아저씨, 잠깐만요." 한다',goto:"d20_12",effect:{bonggilDistance:1}}]},lm={panorama:"/panorama/d20_08_summit.jpg",narrative:`두 번째로 정상에 선다. 아까 본 풍경이랑 같다.
연기는 그대로다. 아직 피어오른다.
만술이 본다.`,choices:[{label:"A. 아까보다 짧게 본다",goto:"d20_13"},{label:"B. 아까랑 비슷하게 본다",goto:"d20_13"},{label:"C. 아까보다 오래 본다",goto:"d20_13"}]},dm={panorama:"/panorama/d20_13_feet.jpg",narrative:`캠프로 돌아온다. 만술이 앉아서 발을 본다.
발바닥에 물집이 잡혀 있다. 두 개.`,choices:[{label:"A. 그냥 둔다",goto:"d20_14"},{label:"B. 터뜨린다",goto:"d20_14",effect:{blisterPopped:1}}]},hm={panorama:"/panorama/d20_14_dinner.jpg",narrative:`봉길 아저씨가 옆에 앉는다. 만술의 발을 본다. 아무 말 안 한다.
오늘 저녁은 죽이다. 뜨겁다.
만술이 천천히 먹는다. 배가 고팠는지 몰랐다. 먹으니까 안다.
맞은편에 앉은 지게꾼이 죽을 다 먹고 그릇을 핥는다. 소리가 난다.
아무도 뭐라 안 한다.`,choices:[{label:"A. 안 한다",goto:"d20_15"},{label:"B. 한다",goto:"d20_15",effect:{lickedBowl:1}}]},um={panorama:"/panorama/d20_15_tent_night.jpg",narrative:`눕는다. 온몸이 아프다.
오늘 두 번 올랐다. 내일도 두 번 오른다.
봉길 아저씨가 눕는다.
잠깐 침묵.
봉길 아저씨가 말한다. "자라. 내일도 갈 길 멀다."`,choices:[{label:'A. "예." 한다',goto:"d20_16"},{label:"B. 아무 말 안 한다",goto:"d20_16"},{label:'C. "아저씨는 안 무서워요?" 한다',goto:"d20_16",effect:{bonggilDistance:1,askedIfScared:1}}]},fm={panorama:"/panorama/d20_15_tent_night.jpg",narrativeVariants:[{condition:{askedIfScared:{gte:1}},text:`봉길 아저씨가 한참 있다가 말한다. "무서운 거 생각하면 못 자."
그리고 돌아눕는다.

텐트 밖에서 바람 소리. 누군가 코를 곤다.
만술이 천장을 본다.
오늘 두 번 올랐다. 발에 물집이 생겼다. 연기가 어디서 나는지 몰랐다. 앞사람 이름을 몰랐다.
눈이 감긴다.

D-20이 끝났다.`},{condition:{},text:`텐트 밖에서 바람 소리. 누군가 코를 곤다.
만술이 천장을 본다.
오늘 두 번 올랐다. 발에 물집이 생겼다. 연기가 어디서 나는지 몰랐다. 앞사람 이름을 몰랐다.
눈이 감긴다.

D-20이 끝났다.`}],next:"d19_01"},pm={panorama:"/panorama/d19_01_wakeup.jpg",narrative:`눈을 뜬다. 어제 잠든 자세 그대로다.
움직이려는데 — 몸이 1초 늦게 반응한다.
허리. 어깨. 발. 어디가 제일 아픈지 순서를 매기기가 어렵다.
봉길 아저씨는 이미 밖에 나가 있다.`,next:"d19_02"},mm={panorama:"/panorama/d19_02_shoulder.jpg",narrative:`세수를 한다. 물이 차갑다.
셔츠를 올려보면 — 어깨가 벗겨져 있다. 어젯밤엔 몰랐다. 지금 보니까 안다.
빨갛게 쓸린 자리. 건드리면 쓰라리다.
봉길 아저씨가 지나가다 본다. 멈춘다. 주머니에서 헝겊 조각을 꺼낸다.
"감아라."`,choices:[{label:"A. 받는다",goto:"d19_03",effect:{acceptedClothD19:1}},{label:'B. "괜찮습니다." 하고 안 받는다',goto:"d19_03"}]},_m={panorama:"/panorama/d19_03_load.jpg",narrative:`오늘도 포탄 상자. 만술이 지게에 묶는다.
어제보다 빠르다. 끈도 덜 삐뚤다.
선배 지게꾼이 지나가다 본다. 아무 말 안 한다.
그게 칭찬인지 아닌지 모른다.`,next:"d19_04"},gm={panorama:"/panorama/d19_04_rhythm.jpg",narrative:`어제 앞사람 발 박자에 맞췄던 거 — 오늘 혼자 해본다.
발을 내딛는 간격. 숨 쉬는 타이밍.
맞을 때가 있고 안 맞을 때가 있다. 맞는 순간엔 조금 덜 힘들다. 조금만.`,choices:[{label:"A. 그냥 계속 걷는다",goto:"d19_05"},{label:"B. 그 리듬을 기억해두려 한다",goto:"d19_05",effect:{rememberedRhythm:1}}]},vm={panorama:"/panorama/d19_05_rest.jpg",narrative:`고개 중턱 그늘에서 잠깐 쉰다. 군인이 5분 준다.
앞사람이 바위에 기댄다. 눈을 감는다.
만술이 옆에 앉는다.`,choices:[{label:"A. 그냥 쉰다",goto:"d19_06"},{label:'B. "아저씨 여기 오래 됐어요?" 묻는다',goto:"d19_06",effect:{askedSeniorDays:1}}]},xm={panorama:"/panorama/d19_05_rest.jpg",narrativeVariants:[{condition:{askedSeniorDays:{gte:1}},text:`앞사람이 눈을 뜨지 않고 말한다. "열흘."
그게 다다. 만술이 열흘을 생각한다. 자기는 이틀째다.`},{condition:{},text:"쉬는 시간이 끝난다. 다시 일어선다."}],next:"d19_07"},Sm={panorama:"/panorama/d19_06_legs.jpg",narrative:`쉬고 나서 다시 오른다. 쉬었더니 오히려 다리가 더 무겁다.
앞사람이 아무렇지 않게 걷는다. 만술이 그 발뒤꿈치를 본다.
고무신 뒤축이 닳아 있다. 한쪽이 더 닳아 있다.
만술이 그걸 보면서 걷는다. 발뒤꿈치 하나를 보면서 고개를 오른다.`,next:"d19_08"},Mm={panorama:"/panorama/d19_08_summit_smoke.jpg",narrative:`정상. 어제 연기 두 줄기가 피어오르던 방향.
오늘은 한 줄기다.
어제보다 줄었는지 — 아니면 하나가 꺼진 건지. 만술은 모른다.`,choices:[{label:"A. 그냥 내려간다",goto:"d19_09"},{label:'B. "아저씨, 저 연기 어디서 나는 거예요?" 묻는다',goto:"d19_09",effect:{askedAboutSmoke:1}}]},bm={panorama:"/panorama/d19_08_summit_smoke.jpg",narrativeVariants:[{condition:{askedAboutSmoke:{gte:1}},text:`봉길 아저씨가 그 방향을 본다. 잠깐. 그리고 말한다.
"몰라도 돼."
걷는다. 만술은 그 연기를 보면서 내려간다.`},{condition:{},text:"만술이 그냥 내려간다."}],next:"d19_10"},Em={panorama:"/panorama/d19_10_valley_route.jpg",narrative:`오후 행군은 다른 루트다. 계곡을 끼고 가는 길.
물소리가 들린다. 더운데 — 물소리만 들어도 조금 낫다.
만술이 물소리 쪽을 본다.`,choices:[{label:"A. 그냥 걷는다",goto:"d19_11"},{label:"B. 잠깐 물쪽을 본다 — 군인 눈치를 본다",goto:"d19_11",effect:{wantedWater:1}}]},ym={panorama:"/panorama/d19_11_companion.jpg",narrative:`돌아오는 길. 빈 지게.
옆에 처음 보는 지게꾼이 걷는다. 나이가 만술이랑 비슷해 보인다.
그 사람이 만술을 본다. 만술도 본다. 아무 말 없다.
그냥 같이 걷는다.`,choices:[{label:"A. 묻는다",goto:"d19_12",effect:{knowsSeongchil:1}},{label:"B. 안 묻는다",goto:"d19_12"}]},Am={panorama:"/panorama/d19_11_companion.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`그 사람이 말한다. "성칠이요."
만술이 말한다. "만술이요."
그게 다다. 그런데 이름이 생겼다.`},{condition:{},text:"캠프까지 아무 말 없이 걷는다. 이름을 모른 채로."}],next:"d19_13"},Tm={panorama:"/panorama/d19_13_camp_evening.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:"캠프. 성칠이 만술 옆에 앉는다. 건빵을 하나 내민다."},{condition:{},text:"캠프. 옆에 앉았던 그 지게꾼이 멀찍이 앉아 혼자 먹는다. 이름을 모른 채로."}],choices:[{label:"A. 받는다",goto:"d19_14",condition:{knowsSeongchil:{gte:1}},effect:{ateWithSeongchil:1}},{label:'B. "괜찮아요." 한다',goto:"d19_14",condition:{knowsSeongchil:{gte:1}}}],next:"d19_14"},wm={panorama:"/panorama/d19_14_bonggil_evening.jpg",narrative:`봉길 아저씨가 혼자 앉아서 밥을 먹는다. 만술 쪽을 보지 않는다.
만술이 본다.
봉길 아저씨 손에 헝겊 조각이 있다. 아까 만술한테 주려던 그거다. 아직 주머니에서 꺼내지 않은 채로 쥐고 있다.`,choices:[{label:"A. 다가간다",goto:"d19_15",effect:{bonggilDistance:1,approachedBonggilD19:1}},{label:"B. 그냥 본다",goto:"d19_15"}]},Cm={panorama:"/panorama/d19_14_bonggil_evening.jpg",narrativeVariants:[{condition:{approachedBonggilD19:{gte:1}},text:`봉길 아저씨가 만술이 옆에 앉자 아무 말 없이 헝겊을 건넨다. 만술이 받는다.
아까 거절했다면 — 봉길 아저씨가 두 번 내미는 셈이다.`},{condition:{},text:"만술이 멀찍이서 그냥 본다."}],next:"d19_16"},Rm={panorama:"/panorama/d19_16_blisters.jpg",narrativeVariants:[{condition:{blisterPopped:{gte:1}},text:`텐트. 만술이 발바닥을 본다.
어제 물집 두 개. 오늘 하나 더 생겼다. 셋이다.
만술이 센다. 하나. 둘. 셋.
어제처럼 — 망설임 없이 터뜨린다. 습관이 됐다.`},{condition:{},text:`텐트. 만술이 발바닥을 본다.
어제 물집 두 개. 오늘 하나 더 생겼다. 셋이다.
만술이 센다. 하나. 둘. 셋.
어제처럼 — 그냥 둔다. 습관이 됐다.`}],next:"d19_17"},Dm={panorama:"/panorama/d19_17_seongchil_night.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`텐트 밖. 성칠이 혼자 앉아 있다. 만술이 나온다. 둘이 앉는다.
성칠이 말한다. "고향 어디야?"`},{condition:{},text:"텐트 밖. 바람이 분다. 만술이 혼자 잠깐 앉아 있다가 들어간다."}],choices:[{label:"A. 고향 마을 이름을 말한다",goto:"d19_18",condition:{knowsSeongchil:{gte:1}}},{label:'B. "경상도요." 그게 다',goto:"d19_18",condition:{knowsSeongchil:{gte:1}}},{label:'C. "아저씨는요?" 먼저 묻는다',goto:"d19_18",condition:{knowsSeongchil:{gte:1}},effect:{askedSeongchilFirst:1}}],next:"d19_18"},Pm={panorama:"/panorama/d19_17_seongchil_night.jpg",narrativeVariants:[{condition:{askedSeongchilFirst:{gte:1}},text:`성칠이 웃는다. 처음으로 웃는 사람을 본다. 작게.
그리고 말한다. "전라도."
그게 다다.`},{condition:{knowsSeongchil:{gte:1}},text:"성칠이 고개를 끄덕인다. 더 묻지 않는다."},{condition:{},text:"텐트 안으로 돌아온다."}],next:"d19_19"},Lm={panorama:"/panorama/d19_15_tent_night.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:1}},text:`텐트 안으로 돌아온다. 봉길 아저씨가 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
어제는 "내일도 갈 길 멀다" 했는데 — 오늘은 그 말이 없다.
없어진 말이 있다.

D-19가 끝났다.`},{condition:{},text:`텐트 안으로 돌아온다. 봉길 아저씨가 눕는다. 만술이 눕는다.
아무 말이 없다.

D-19가 끝났다.`}],next:"d18_01"},Um={panorama:"/panorama/d18_01_wakeup.jpg",narrative:`아침. 텐트 밖에서 밥 냄새가 난다. 어제보다 이른 것 같다.
만술이 일어난다. 몸이 — 어제보다 조금 빨리 반응한다.
몸이 기억하기 시작했다.`,next:"d18_02"},Im={panorama:"/panorama/d18_02_breakfast.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`성칠이 만술 옆에 앉는다. 자연스럽게.
건빵을 물에 적셔서 먹는다. 만술도 물에 적신다.
D-20에서 배운 것이다.`},{condition:{},text:`처음 보는 지게꾼이 만술 옆에 어색하게 앉는다.
건빵을 물에 적셔서 먹는다. 만술도 물에 적신다.
D-20에서 배운 것이다.`}],next:"d18_03"},Nm={panorama:"/panorama/d18_03_valley_route.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`오늘 루트가 다르다고 앞사람이 말한다. 계곡을 끼고 간다.
성칠이 만술한테 낮게 말한다. "계곡 있으면 물 마실 수 있어."`},{condition:{},text:"오늘 루트가 다르다고 앞사람이 말한다. 계곡을 끼고 간다."}],choices:[{label:"A. 고개를 끄덕인다",goto:"d18_04"},{label:"B. 아무 반응 안 한다",goto:"d18_04"}]},Bm={panorama:"/panorama/d18_04_climb.jpg",narrative:`산길. 저 아래서 물소리가 들린다.
더위가 심하다. 땀이 눈에 들어온다.
물소리가 가깝다.`,choices:[{label:"A. 앞만 보고 걷는다",goto:"d18_05"},{label:"B. 물소리 쪽을 본다",goto:"d18_05"}]},Fm={panorama:"/panorama/d18_05_valley_water.jpg",narrative:`잠깐 멈춘다. 군인이 물 마셔도 된다고 한다.
지게꾼들이 계곡으로 내려간다. 만술도 내려간다.
물이 차갑다. 손으로 떠서 마신다.
맛이 없다. 그냥 차갑다. 그게 좋다.
성칠이 옆에서 얼굴을 물에 박는다. 푸하 — 소리를 낸다.`,choices:[{label:"A. 손으로만 마신다",goto:"d18_06"},{label:"B. 얼굴을 물에 박는다",goto:"d18_06",effect:{dunkedFace:1}}]},Om={panorama:"/panorama/d18_05_valley_water.jpg",narrativeVariants:[{condition:{dunkedFace:{gte:1}},text:`차가운 물이 얼굴을 덮는다. 만술이 눈을 뜬다.
물속. 돌멩이들. 물풀. 아무 소리도 안 들린다. 1초.
고개를 든다. 성칠이 보고 웃는다.`},{condition:{},text:"만술이 손으로만 물을 떠서 마신다."}],next:"d18_07"},km={panorama:"/panorama/d18_05_valley_water.jpg",narrative:`물을 마시고 올라오려는데 — 앞사람이 손을 든다.
멈춤 신호. 다들 굳는다.
앞사람이 계곡 아래쪽을 가리킨다.`,next:"d18_08"},Vm={panorama:"/panorama/d18_08_enemy_in_valley.jpg",narrative:`계곡 아래. 웃통을 벗은 중년 북한군. 갈비뼈가 다 보인다.
물에 앉아서 손으로 물을 튀긴다. 천천히. 아무 생각 없이.
그 옆에 샛파란 애들 셋. 발을 물에 담그고 있다. 하나가 웃는다. 소리는 안 들린다.
총이 없다. 아무것도 없다. 그냥 물에 있다.
만술이 본다.`,choices:[{label:"A. 시선을 거둔다",goto:"d18_09"},{label:"B. 잠깐 본다",goto:"d18_09"},{label:"C. 한참 본다 — 애들 중 하나와 눈이 마주친다",goto:"d18_09",effect:{valleyEyeContact:1}}]},zm={panorama:"/panorama/d18_08_enemy_in_valley.jpg",narrativeVariants:[{condition:{valleyEyeContact:{gte:1}},text:`북한군 애가 고개를 든다. 만술을 본다. 웃음이 사라진다.
만술도 굳는다. 1초. 2초.
앞사람이 만술의 팔을 잡아당긴다. 만술이 시선을 끊는다.
그 얼굴이 남는다.`},{condition:{},text:"만술이 시선을 거둔다."}],next:"d18_10"},Hm={panorama:"/panorama/d18_10_after_valley.jpg",narrative:`계곡을 지나 오르막을 다시 오른다.
봉길 아저씨가 만술 옆으로 온다. 낮게 말한다.
"봤어?"`,choices:[{label:'A. "네." 그게 다',goto:"d18_11"},{label:'B. "근데 총이 없던데요."',goto:"d18_11",effect:{askedAboutGuns:1}},{label:"C. 아무 말 안 한다",goto:"d18_11",effect:{bonggilDistance:-1}}]},Gm={panorama:"/panorama/d18_10_after_valley.jpg",narrativeVariants:[{condition:{askedAboutGuns:{gte:1}},text:`봉길 아저씨가 걸으면서 말한다. "있어. 어딘가에."
그리고 앞을 본다.`},{condition:{},text:"봉길 아저씨가 만술을 잠깐 본다. 그리고 걷는다."}],next:"d18_12"},Wm={panorama:"/panorama/d18_12_summit.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`정상. 성칠이 옆에 선다. 숨을 고르면서 말한다.
"어렸다, 걔네."`},{condition:{},text:`정상. 옆에 선 지게꾼이 숨을 고르면서 중얼거린다.
"어렸다, 걔네."`}],choices:[{label:'A. "응." 한다',goto:"d18_13"},{label:"B. 아무 말 안 한다",goto:"d18_13"},{label:'C. "나랑 비슷하던데." 한다',goto:"d18_13",effect:{mentionedSimilarAge:1}}]},jm={panorama:"/panorama/d18_12_summit.jpg",narrativeVariants:[{condition:{mentionedSimilarAge:{gte:1}},text:"성칠이 만술을 본다. 잠깐. 그리고 아무 말 안 하고 내려간다."},{condition:{},text:"내려간다."}],next:"d18_14"},Xm={panorama:"/panorama/d18_14_burned_village.jpg",narrative:`내려오는 길. 뭔가 탄 냄새가 난다.
저 아래 — 마을이었던 자리. 무너진 담. 검게 그을린 나무.
빨랫줄에 옷이 걸려 있다. 어린아이 것.
바람에 흔들린다.`,choices:[{label:"A. 옷을 본다 — 걸음이 느려진다",goto:"d18_15"},{label:"B. 고개를 돌린다",goto:"d18_15"},{label:"C. 봉길 아저씨를 본다",goto:"d18_15",effect:{sawBonggilAvertVillage:1}}]},qm={panorama:"/panorama/d18_14_burned_village.jpg",narrativeVariants:[{condition:{sawBonggilAvertVillage:{gte:1}},text:`봉길 아저씨는 그냥 걷고 있다. 보지 않는다.
만술이 그걸 본다. 봤을 텐데. 왜 안 보지.
처음으로 드는 생각.`},{condition:{},text:"만술이 계속 걷는다."}],next:"d18_16"},Ym={panorama:"/panorama/d18_16_dinner.jpg",narrative:`저녁. 밥 냄새.
그런데 아까 탄 냄새가 아직 코에 남아 있다.
밥을 먹으면서도 가끔 그 냄새가 섞인다.`,choices:[{label:"A. 다 먹는다",goto:"d18_17"},{label:"B. 반쯤 먹다 만다",goto:"d18_17",effect:{ateHalfMeal:1}}]},Km={panorama:"/panorama/d18_16_dinner.jpg",narrativeVariants:[{condition:{ateHalfMeal:{gte:1},knowsSeongchil:{gte:1}},text:"성칠이 본다. 아무 말 안 한다. 그냥 본다."},{condition:{},text:"밥그릇이 빈다."}],next:"d18_18"},$m={panorama:"/panorama/d18_18_tent_night.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`텐트. 성칠이 눕는다. 봉길 아저씨가 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
성칠이 말한다. "예."
만술은 —`},{condition:{},text:`텐트. 봉길 아저씨가 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
만술은 —`}],choices:[{label:'A. "예." 한다',goto:"d18_19"},{label:"B. 아무 말 안 한다",goto:"d18_19",effect:{silentAtNight:1}}]},Zm={panorama:"/panorama/d18_18_tent_night.jpg",narrativeVariants:[{condition:{silentAtNight:{gte:1},valleyEyeContact:{gte:1}},text:`봉길 아저씨가 돌아눕는다. 만술은 천장을 본다.
계곡의 그 얼굴이 떠오른다.`},{condition:{silentAtNight:{gte:1}},text:"봉길 아저씨가 돌아눕는다. 만술은 천장을 본다."},{condition:{},text:"모두 눈을 감는다."}],choices:[{label:"A. 꺼내서 본다",goto:"d18_end",condition:{riceKept:{gte:1}},effect:{lookedAtRice:1}},{label:"B. 그냥 주머니 안에서 굴린다",goto:"d18_end",condition:{riceKept:{gte:1}}}],next:"d18_end"},Jm={panorama:"/panorama/d18_18_tent_night.jpg",narrativeVariants:[{condition:{lookedAtRice:{gte:1}},text:`손바닥 위에 쌀알 몇 개. 어둠 속이라 잘 안 보인다.
그냥 있다. 만술이 다시 주머니에 넣는다.

D-18이 끝났다.`},{condition:{riceKept:{gte:1}},text:`만술이 주머니에 손을 넣는다. D-21에 트럭에서 집은 쌀알. 아직 거기 있다.
손가락으로 굴린다. 작다.

D-18이 끝났다.`},{condition:{},text:"D-18이 끝났다."}],next:"d17_01"},Qm={panorama:"/panorama/d17_01_wakeup.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`아침. 성칠이 만술을 발로 툭 찬다.
"일어나."
봉길 아저씨 방식이랑 똑같다. 만술이 그걸 안다.`},{condition:{},text:`아침. 누군가 만술을 발로 툭 찬다.
"일어나."`}],next:"d17_02"},t_={panorama:"/panorama/d17_02_load.jpg",narrative:`짐 배정. 하사가 만술을 부른다. 오늘 짐이 다르다.
의식 없는 군인 하나. 들것이 없다. 지게에 묶는다.
하사가 말한다. "천천히. 흔들리면 안 돼."
만술이 군인을 본다. 또래다. 얼굴이 창백하다. 숨은 쉰다.`,choices:[{label:"A. 군인 얼굴만 본다",goto:"d17_03"},{label:"B. 군복 어딘가에 이름이 있나 찾아본다",goto:"d17_03",effect:{readNameTag:1}}]},e_={panorama:"/panorama/d17_02_load.jpg",narrativeVariants:[{condition:{readNameTag:{gte:1}},text:`군복 가슴께에 이름표가 있다. 글씨가 작다.
만술이 읽으려 하는데 하사가 빨리 하라고 한다. 다 못 읽는다.
한 글자만 읽었다. '이'.`},{condition:{},text:"만술이 군인 얼굴만 본다."}],next:"d17_04"},n_={panorama:"/panorama/d17_04_tying.jpg",narrative:`군인을 지게에 묶는다. 어떻게 묶어야 하는지 아무도 안 알려준다.
만술이 끈을 잡는다.`,choices:[{label:"A. 짐 묶던 방식으로 묶는다",goto:"d17_05"},{label:"B. 최대한 조심스럽게 묶는다",goto:"d17_05",effect:{tiedCarefully:1}},{label:"C. 앞사람한테 봐달라고 한다",goto:"d17_05"}]},i_={panorama:"/panorama/d17_04_tying.jpg",narrativeVariants:[{condition:{tiedCarefully:{gte:1}},text:`시간이 걸린다. 하사가 보고 있다. 뭐라 안 한다.
만술이 끈을 매만진다. 느슨하지 않게. 흔들리지 않게.
군인의 숨소리가 들린다.`},{condition:{},text:"만술이 짐 묶던 방식으로 묶는다."}],next:"d17_06"},a_={panorama:"/panorama/d17_06_climb.jpg",narrative:`출발. 포탄 상자랑 무게가 비슷한데 — 다르다.
출렁인다. 숨소리가 들린다. 가끔 신음소리가 난다.
만술이 걸으면서 그 숨소리를 듣는다. 살아 있다는 소리.`,choices:[{label:"A. 그냥 걷는다",goto:"d17_07"},{label:"B. 군인 숨소리에 리듬을 맞춰본다",goto:"d17_07",effect:{matchedSoldierBreath:1}}]},o_={panorama:"/panorama/d17_06_climb.jpg",narrativeVariants:[{condition:{matchedSoldierBreath:{gte:1}},text:`만술이 군인의 숨에 맞춰 발을 내딛는다. 리듬이 불규칙하다.
만술도 불규칙해진다. 오히려 힘들다. 그런데 계속 맞춘다.`},{condition:{},text:"만술이 그냥 걷는다."}],next:"d17_08"},r_={panorama:"/panorama/d17_08_midslope.jpg",narrative:`고개 중턱. 군인이 크게 신음한다.
만술이 멈춘다. 앞사람도 멈춘다. 줄 전체가 멈춘다.`,choices:[{label:'A. "괜찮습니까?" 묻는다',goto:"d17_09",effect:{askedIfOk:1}},{label:"B. 그냥 기다린다",goto:"d17_09"},{label:"C. 내려놓는다",goto:"d17_09",effect:{lowered:1}}]},s_={panorama:"/panorama/d17_08_midslope.jpg",narrativeVariants:[{condition:{askedIfOk:{gte:1}},text:`군인이 대답 못 한다. 그런데 손가락이 움직인다.
만술의 지게끈을 잡으려는 것처럼. 못 잡는다.
만술이 그걸 본다.`},{condition:{lowered:{gte:1}},text:`앞사람이 뒤를 돌아본다. 하사가 온다. 뭐라 하지 않는다.
잠깐 군인 상태를 보고 말한다. "다시 매라."
만술이 다시 맨다.`},{condition:{},text:"그냥 기다린다."}],next:"d17_10"},c_={panorama:"/panorama/d17_10_summit_handoff.jpg",narrative:`정상에 도착한다. 의무병이 기다리고 있다. 군인을 받아간다.
만술의 등이 가벼워진다.
그 가벼움이 이상하다. 홀가분한 건지 — 뭔가 잃은 건지.`,choices:[{label:"A. 본다",goto:"d17_11",effect:{watchedSoldierCarried:1}},{label:"B. 고개를 돌린다",goto:"d17_11"}]},l_={panorama:"/panorama/d17_10_summit_handoff.jpg",narrativeVariants:[{condition:{watchedSoldierCarried:{gte:1},readNameTag:{gte:1}},text:`군인이 의무병 손에 실려간다. 만술이 그 뒷모습을 본다.
'이'씨. 이름 한 글자.`},{condition:{watchedSoldierCarried:{gte:1}},text:"군인이 의무병 손에 실려간다. 만술이 그 뒷모습을 본다."},{condition:{},text:"만술이 고개를 돌린다."}],next:"d17_12"},d_={panorama:"/panorama/d17_12_descend.jpg",narrative:`내려오는 길. 봉길 아저씨가 만술 옆으로 온다. 걸으면서 말한다.
"무거웠지?"`,choices:[{label:'A. "네." 한다',goto:"d17_13"},{label:'B. "짐이랑 달라요." 한다',goto:"d17_13",effect:{saidLoadDiffers:1}},{label:"C. 아무 말 안 한다",goto:"d17_13"}]},h_={panorama:"/panorama/d17_12_descend.jpg",narrativeVariants:[{condition:{saidLoadDiffers:{gte:1}},text:`봉길 아저씨가 걸으면서 말한다. "그래."
그게 다다. 근데 그 '그래'가 — 알고 있었다는 말이다.`},{condition:{},text:"봉길 아저씨가 그냥 걷는다."}],next:"d17_14"},u_={panorama:"/panorama/d17_14_evening.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`저녁. 성칠이 묻는다. "오늘 사람 졌어?"
만술이 고개를 끄덕인다.
성칠이 말한다. "나도 언제 그거 할 차례 올 텐데."`},{condition:{},text:"저녁. 만술이 혼자 밥을 먹는다."}],choices:[{label:'A. "별거 없어." 한다',goto:"d17_15",condition:{knowsSeongchil:{gte:1}}},{label:"B. 아무 말 안 한다",goto:"d17_15",condition:{knowsSeongchil:{gte:1}}},{label:'C. "이름 있던데." 한다',goto:"d17_15",condition:{knowsSeongchil:{gte:1},readNameTag:{gte:1}},effect:{toldSeongchilName:1}}],next:"d17_15"},f_={panorama:"/panorama/d17_14_evening.jpg",narrativeVariants:[{condition:{toldSeongchilName:{gte:1}},text:`성칠이 만술을 본다. "알아?"
만술이 말한다. "'이'씨인 것 같아."
성칠이 고개를 끄덕인다. 그게 다다. 근데 그 이름이 둘 사이에 생겼다.`},{condition:{},text:"저녁 시간이 지나간다."}],next:"d17_16"},p_={panorama:"/panorama/d17_16_stars.jpg",narrativeVariants:[{condition:{starsCounted:{gte:1}},text:`텐트 밖. 만술이 혼자 앉아 있다. 하늘. 별.
D-21 새벽에 별을 셌던 게 떠오른다.
만술이 별을 찾는다. 그때 그 자리에 있던 별. 있는지 없는지 모르겠다. 하늘이 너무 넓다.`},{condition:{},text:`텐트 밖. 만술이 혼자 앉아 있다.
그냥 하늘을 본다. 별이 많다. 그게 다다.`}],next:"d17_17"},m_={panorama:"/panorama/d17_17_tent_night.jpg",narrative:`텐트 안. 봉길 아저씨가 눕는다.
만술이 들어와서 눕는다.
침묵.
봉길 아저씨가 말한다. "자라."
오늘은 그게 다다.`,choices:[{label:'A. "예." 한다',goto:"d17_end"},{label:"B. 아무 말 안 한다",goto:"d17_end",effect:{silentAtNightD17:1}}]},__={panorama:"/panorama/d17_17_tent_night.jpg",narrativeVariants:[{condition:{silentAtNightD17:{gte:1}},text:`봉길 아저씨가 돌아눕는다. 만술이 눈을 감는다.
군인 숨소리가 아직 귀에 남아 있다.

D-17이 끝났다.`},{condition:{},text:`만술이 "예." 하고 눈을 감는다.

D-17이 끝났다.`}],next:"d16_01"},g_={panorama:"/panorama/d16_01_empty_spot.jpg",narrative:`아침. 일어나서 밖에 나오면 — 앞사람이 없다.
지게꾼들이 모인다. 앞사람 자리가 비어 있다.
아무도 설명 안 한다. 하사도 언급 안 한다. 그냥 오늘 다른 사람이 앞에 선다.`,choices:[{label:"A. 봉길 아저씨한테 묻는다",goto:"d16_02",effect:{askedBonggilAboutMissing:1}},{label:"B. 성칠한테 묻는다",goto:"d16_02",condition:{knowsSeongchil:{gte:1}},effect:{askedSeongchilAboutMissing:1}},{label:"C. 아무것도 안 묻는다",goto:"d16_02"}]},v_={panorama:"/panorama/d16_01_empty_spot.jpg",narrativeVariants:[{condition:{askedBonggilAboutMissing:{gte:1}},text:'봉길 아저씨가 말한다. "몰라도 돼." 걷는다.'},{condition:{askedSeongchilAboutMissing:{gte:1}},text:'성칠이 낮게 말한다. "다쳤대." 그게 다다.'},{condition:{},text:"만술이 하루 종일 그 빈자리를 생각한다."}],next:"d16_03"},x_={panorama:"/panorama/d16_03_breakfast.jpg",narrative:`건빵. 만술이 씹는다. 물에 적신다. 이제 자동으로.
앞사람 자리에 오늘 다른 지게꾼이 앉아 있다. 모르는 얼굴.`,next:"d16_04"},S_={panorama:"/panorama/d16_04_load.jpg",narrative:`오늘 짐은 식량 자루. 만술이 맨다. 빠르다. 끈도 단단하다.
선배 지게꾼이 지나가다 본다. 오늘은 뭔가 고쳐주지 않는다.
그게 뭔지 안다.`,next:"d16_05"},M_={panorama:"/panorama/d16_05_climb.jpg",narrative:`출발. 오늘 앞에 서는 사람은 걸음이 다르다. 앞사람보다 빠르다.
만술이 그 발뒤꿈치를 본다. 새 고무신이다. 아직 안 닳았다.`,choices:[{label:"A. 빠른 걸음에 맞춰 따라간다",goto:"d16_06"},{label:"B. 자기 리듬을 지킨다",goto:"d16_06",effect:{keptOwnRhythm:1}}]},b_={panorama:"/panorama/d16_05_climb.jpg",narrativeVariants:[{condition:{keptOwnRhythm:{gte:1}},text:"뒤처진다. 만술이 자기 발을 보며 걷는다. 앞사람 발뒤꿈치 대신 자기 발."},{condition:{},text:"만술이 빠른 걸음에 맞춰 따라간다."}],next:"d16_07"},E_={panorama:"/panorama/d16_07_rest.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`그늘. 성칠이 옆에 앉는다. 말 없이.
잠깐 후 성칠이 말한다. "앞사람 아저씨 좋은 사람이었어?"`},{condition:{},text:"그늘에서 잠깐 쉰다."}],choices:[{label:'A. "잘 몰라요." 한다',goto:"d16_08",condition:{knowsSeongchil:{gte:1}}},{label:'B. "나쁜 사람은 아니었어요." 한다',goto:"d16_08",condition:{knowsSeongchil:{gte:1}}},{label:'C. "이름도 몰라요." 한다',goto:"d16_08",condition:{knowsSeongchil:{gte:1}},effect:{saidDontKnowName:1}}],next:"d16_08"},y_={panorama:"/panorama/d16_07_rest.jpg",narrativeVariants:[{condition:{saidDontKnowName:{gte:1}},text:`성칠이 고개를 끄덕인다. "나도."
둘이 잠깐 앉아 있는다.`},{condition:{},text:"쉬는 시간이 끝난다."}],next:"d16_09"},A_={panorama:"/panorama/d16_09_climb2.jpg",narrative:`다시 오르는데 — 앞이 허하다.
앞사람 발뒤꿈치 대신 — 그냥 길이 있다. 만술이 그 길을 본다.
어떤 빈자리는 설명이 없다.`,next:"d16_10"},T_={panorama:"/panorama/d16_10_summit_smoke.jpg",narrative:`정상. 연기를 센다. 오늘은 세 줄기다.
어제 한 줄기였는데.`,choices:[{label:"A. 그냥 본다",goto:"d16_11"},{label:"B. 센다 — 하나. 둘. 셋.",goto:"d16_11",effect:{countsSmoke:1}}]},w_={panorama:"/panorama/d16_10_summit_smoke.jpg",narrativeVariants:[{condition:{countsSmoke:{gte:1}},text:`만술이 매일 연기를 세게 된다. 이게 습관이 된다.
나중에 연기가 없는 날이 오면 — 만술이 센다. 그리고 멈춘다.`},{condition:{},text:"만술이 그냥 본다."}],next:"d16_12"},C_={panorama:"/panorama/d16_12_descend.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`내려오면서 성칠이 말한다. "며칠 됐다고 했잖아, 그 아저씨."
만술이 고개를 끄덕인다.
성칠이 말한다. "우리 이제 사흘째야."`},{condition:{},text:"내려오는 길. 아무도 말이 없다."}],choices:[{label:'A. "그렇네." 한다',goto:"d16_13",condition:{knowsSeongchil:{gte:1}}},{label:"B. 아무 말 안 한다",goto:"d16_13",condition:{knowsSeongchil:{gte:1}}},{label:'C. "앞으로 얼마나 더 있어야 해요?" 한다',goto:"d16_13",condition:{knowsSeongchil:{gte:1}},effect:{askedHowMuchLonger:1}}],next:"d16_13"},R_={panorama:"/panorama/d16_12_descend.jpg",narrativeVariants:[{condition:{askedHowMuchLonger:{gte:1}},text:`성칠이 말한다. "몰라."
그게 다다. 모른다는 게 이렇게 무거운 말인지 몰랐다.`},{condition:{},text:"캠프로 돌아온다."}],next:"d16_14"},D_={panorama:"/panorama/d16_14_evening.jpg",narrative:`저녁. 봉길 아저씨가 혼자 밥을 먹는다. 만술 쪽을 안 본다.
만술이 본다.
봉길 아저씨 언제부터였는지 모른다.`,choices:[{label:"A. 다가간다",goto:"d16_15",effect:{bonggilDistance:1}},{label:"B. 그냥 성칠 옆에 앉는다",goto:"d16_15"}]},P_={panorama:"/panorama/d16_14_evening.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:4}},text:"봉길 아저씨가 만술이 앉아도 아무 말 안 한다. 같이 먹는다. 말이 없다. 근데 같이 있다."},{condition:{},text:"만술이 성칠 옆에서 봉길 아저씨를 본다. 봉길 아저씨는 모른다."}],next:"d16_16"},L_={panorama:"/panorama/d16_16_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
오늘은 그냥 잔다.

D-16이 끝났다.`,next:"d15_01"},U_={panorama:"/panorama/d15_01_wakeup.jpg",narrative:`아침. 일어나면서 만술이 센다. D-21부터 D-15. 일주일이다.
몸이 달라졌다. 발에 물집이 굳었다. 어깨 쓸린 자리에 딱지가 앉았다.
아침에 일어나는 속도가 빨라졌다.`,next:"d15_02"},I_={panorama:"/panorama/d15_02_rain_forecast.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`하늘이 흐리다. 선배 지게꾼이 하늘을 보면서 말한다.
"오후에 비 온다."
성칠이 만술한테 낮게 말한다. "비 오면 길이 미끄러워."`},{condition:{},text:`하늘이 흐리다. 선배 지게꾼이 하늘을 보면서 말한다.
"오후에 비 온다."`}],next:"d15_03"},N_={panorama:"/panorama/d15_03_morning_march.jpg",narrative:"오전은 아직 맑다. 만술이 걷는다. 리듬이 생겼다. 몸이 안다.",choices:[{label:"A. 그냥 걷는다",goto:"d15_04"},{label:"B. 오늘 밤 확인해봐야겠다 — 생각한다",goto:"d15_04"}]},B_={panorama:"/panorama/d15_04_summit_smoke.jpg",narrativeVariants:[{condition:{countsSmoke:{gte:1}},text:`정상. 만술이 연기를 센다. 습관이 됐다.
오늘은 두 줄기. 어제 세 줄기였는데.`},{condition:{},text:"정상. 만술이 산 아래를 본다."}],choices:[{label:"A. 그냥 내려간다",goto:"d15_05",condition:{countsSmoke:{gte:1}}},{label:"B. 한 줄기가 없어진 방향을 본다",goto:"d15_05",condition:{countsSmoke:{gte:1}},effect:{sawSmokeGap:1}}],next:"d15_05"},F_={panorama:"/panorama/d15_04_summit_smoke.jpg",narrativeVariants:[{condition:{sawSmokeGap:{gte:1}},text:`만술이 그 방향을 본다. 마을이 있던 자리인지 아닌지 모른다.
그냥 산이다. 연기가 없는 산.`},{condition:{},text:"만술이 내려간다."}],next:"d15_06"},O_={panorama:"/panorama/d15_06_rain_climb.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`선배 지게꾼 말이 맞았다. 오후에 비가 온다. 길이 미끄럽다.
성칠이 말한 대로다.
만술이 발에 힘을 준다. 짐이 흔들린다.`},{condition:{},text:`오후에 비가 온다. 길이 미끄럽다.
만술이 발에 힘을 준다. 짐이 흔들린다.`}],choices:[{label:"A. 천천히 간다 — 뒤처진다",goto:"d15_07",effect:{slowedInRain:1}},{label:"B. 미끄러워도 속도를 맞춘다",goto:"d15_07"}]},k_={panorama:"/panorama/d15_06_rain_climb.jpg",narrativeVariants:[{condition:{slowedInRain:{gte:1}},text:`군인이 소리친다. 만술이 뛰려다 미끄러진다. 무릎이 쓸린다.
짐은 안 떨어진다.`},{condition:{},text:"만술이 미끄러워도 속도를 맞춘다."}],next:"d15_08"},V_={panorama:"/panorama/d15_08_rain_descend.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`비 맞으며 내려온다. 흠뻑 젖는다.
성칠이 옆에서 걷는다. "비 맞으면 냄새가 달라."
만술이 코를 킁킁인다. 흙 냄새. 나무 냄새. 비 냄새.
그리고 — 탄 냄새가 없다.`},{condition:{},text:`비 맞으며 내려온다. 흠뻑 젖는다.
만술이 코를 킁킁인다. 흙 냄새. 나무 냄새. 비 냄새.`}],choices:[{label:"A. 그냥 걷는다",goto:"d15_09"},{label:"B. 멈춰서 숨을 들이마신다",goto:"d15_09",effect:{noticedNoSmokeSmell:1}}]},z_={panorama:"/panorama/d15_08_rain_descend.jpg",narrativeVariants:[{condition:{noticedNoSmokeSmell:{gte:1},knowsSeongchil:{gte:1}},text:"성칠이 만술을 본다. 뭐라 안 한다. 만술이 다시 걷는다."},{condition:{},text:"만술이 다시 걷는다."}],next:"d15_10"},H_={panorama:"/panorama/d15_10_tent_rain.jpg",narrative:`비가 계속 온다. 텐트 안. 지게꾼들이 모여 있다. 젖은 옷. 젖은 냄새.
누군가 콧노래를 흥얼거린다. 아주 작게. 뭔 노래인지 모른다.
만술이 듣는다.`,choices:[{label:"A. 콧노래 하는 사람을 본다",goto:"d15_11"},{label:"B. 봉길 아저씨를 본다",goto:"d15_11"},{label:"C. 눈을 감고 듣는다",goto:"d15_11",effect:{closedEyesListening:1}}]},G_={panorama:"/panorama/d15_10_tent_rain.jpg",narrativeVariants:[{condition:{closedEyesListening:{gte:1}},text:`만술이 눈을 감는다. 비 소리. 콧노래. 텐트 밖 바람.
잠깐 — 여기가 어딘지 모른다. 1초.`},{condition:{},text:`누가 흥얼거리는지 본다. 모르는 지게꾼이다. 눈을 감고 있다.
여기 말고 다른 데 있는 것처럼 보인다.`}],next:"d15_12"},W_={panorama:"/panorama/d15_12_bonggil_strap.jpg",narrative:`봉길 아저씨가 지게끈을 손질한다. 조용히.
만술이 본다. 봉길 아저씨 손이 움직인다. 익숙하게. 빠르게.`,choices:[{label:'A. "아저씨, 고향 생각 안 나요?" 한다',goto:"d15_13",effect:{askedHomesick:1}},{label:"B. 그냥 본다",goto:"d15_13"}]},j_={panorama:"/panorama/d15_12_bonggil_strap.jpg",narrativeVariants:[{condition:{askedHomesick:{gte:1}},text:`봉길 아저씨가 끈에서 눈을 안 떼고 말한다. "생각하면 못 자."
D-20에서 같은 말을 했다. 만술이 그걸 기억하느냐 — 플레이어만 안다.`},{condition:{},text:"만술이 그냥 본다."}],next:"d15_14"},X_={panorama:"/panorama/d15_14_bear.jpg",narrative:`비가 그쳤다. 만술이 소변 보러 밖에 나간다.
어둠. 별이 몇 개 나왔다.
나뭇가지 부러지는 소리. 무거운 발소리.
만술이 굳는다.
어둠 속 — 형체. 크다.
곰이다. 20미터쯤. 만술을 안 본다. 그냥 지나간다.
만술이 숨을 참는다.
곰이 사라진다.
만술이 텐트로 돌아온다.
첫 번째 곰은 그냥 지나간다. 아직은.`,next:"d15_15"},q_={panorama:"/panorama/d15_15_tent_night.jpg",narrative:`눕는다. 봉길 아저씨가 말한다. "자라."
만술이 말하려다 — 곰 얘기. 그런데 안 한다.`,choices:[{label:'A. "곰 봤어요." 한다',goto:"d15_16",effect:{toldBonggilAboutBear:1}},{label:"B. 그냥 눈을 감는다",goto:"d15_16"}]},Y_={panorama:"/panorama/d15_15_tent_night.jpg",narrativeVariants:[{condition:{toldBonggilAboutBear:{gte:1}},text:`봉길 아저씨가 침묵한다. 한참. 그리고 말한다. "그래."
돌아눕는다. 만술이 그 '그래'를 생각하며 눈을 감는다.`},{condition:{},text:"만술이 그냥 눈을 감는다."}],next:"d15_end"},K_={panorama:"/panorama/d15_15_tent_night.jpg",narrative:`천장. 일주일이 지났다.
발바닥 물집이 굳었다. 어깨 딱지가 앉았다.
앞사람이 사라졌다. 성칠이 생겼다.
계곡에서 눈이 마주친 얼굴이 있거나 없거나.
연기를 세거나 안 세거나.
주머니에 쌀알이 있거나 없거나.
만술이 눈을 감는다.

1주차 끝.`,next:"d14_01"},$_={panorama:"/panorama/d14_01_wakeup.jpg",narrative:`아침. 일어나는데 — 빠르다. 몸이 먼저 안다. 일어날 시간.
1주일 전 첫날 아침이랑 다르다. 그게 좋은 건지 나쁜 건지 아직 모른다.
앞사람이 말했던 것 — 익숙해지면 그게 더 나쁜 거야.
아직 그 말의 뜻을 모른다.`,next:"d14_02"},Z_={panorama:"/panorama/d14_02_breakfast.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`성칠이 옆에 앉는다. 건빵을 물에 적신다. 이제 둘 다 자동으로.
성칠이 말한다. "2주차다."
만술이 고개를 끄덕인다.
성칠이 말한다. "뭔가 달라질까."`},{condition:{},text:"만술이 건빵을 물에 적셔서 먹는다. 자동으로."}],choices:[{label:'A. "글쎄요." 한다',goto:"d14_03",condition:{knowsSeongchil:{gte:1}}},{label:'B. "달라지면 좋겠어요." 한다',goto:"d14_03",condition:{knowsSeongchil:{gte:1}}},{label:"C. 아무 말 안 한다",goto:"d14_03",condition:{knowsSeongchil:{gte:1}}}],next:"d14_03"},J_={panorama:"/panorama/d14_03_bonggil_morning.jpg",narrative:`봉길 아저씨가 혼자 앉아서 밥을 먹는다.
만술이 다가가려는데 — 봉길 아저씨가 먼저 일어난다.
타이밍이 맞지 않았다. 그게 다다.`,choices:[{label:"A. 따라가서 옆에 선다",goto:"d14_04",effect:{followedBonggilD14:1}},{label:"B. 그냥 앉는다",goto:"d14_04"}]},Q_={panorama:"/panorama/d14_03_bonggil_morning.jpg",narrativeVariants:[{condition:{followedBonggilD14:{gte:1}},text:`봉길 아저씨가 만술을 본다. 뭐라 안 한다. 그냥 움직인다.
만술이 옆에서 같이 움직인다. 아무 말 없이.`},{condition:{},text:"만술이 그냥 앉는다."}],next:"d14_05"},tg={panorama:"/panorama/d14_05_load.jpg",narrative:`오늘도 포탄 상자. 만술이 맨다. 손이 기억한다. 끈 묶는 순서. 무게 중심.
선배 지게꾼이 지나가다 만술을 보지 않는다. 볼 필요가 없어졌다.
칭찬은 없다. 그냥 당연해졌다.`,next:"d14_06"},eg={panorama:"/panorama/d14_06_climb.jpg",narrative:`출발. 줄. 앞에 봉길 아저씨가 간다.
만술이 그 등을 본다.
1주차엔 봉길 아저씨가 종종 뒤를 봤다. 만술이 잘 오나.
오늘은 안 본다.`,choices:[{label:"A. 그냥 걷는다",goto:"d14_07"},{label:"B. 봉길 아저씨 등을 보면서 걷는다",goto:"d14_07",effect:{watchedBonggilBack:1}}]},ng={panorama:"/panorama/d14_06_climb.jpg",narrativeVariants:[{condition:{watchedBonggilBack:{gte:1}},text:"만술이 봉길 아저씨 등을 보며 걷는다. 뭔가 다른가. 모르겠다."},{condition:{},text:"만술이 그냥 걷는다."}],next:"d14_08"},ig={panorama:"/panorama/d14_08_summit_smoke.jpg",narrativeVariants:[{condition:{countsSmoke:{gte:1}},text:`정상. 연기를 센다. 습관이 됐다.
오늘은 네 줄기. 어제보다 늘었다.`},{condition:{},text:"정상에서 산 아래를 본다."}],choices:[{label:'A. 말한다 — "아저씨, 연기 네 개예요."',goto:"d14_09",condition:{countsSmoke:{gte:1}},effect:{toldBonggilSmokeCount:1}},{label:"B. 성칠한테 말한다",goto:"d14_09",condition:{countsSmoke:{gte:1},knowsSeongchil:{gte:1}}},{label:"C. 혼자 센다",goto:"d14_09",condition:{countsSmoke:{gte:1}}}],next:"d14_09"},ag={panorama:"/panorama/d14_08_summit_smoke.jpg",narrativeVariants:[{condition:{toldBonggilSmokeCount:{gte:1}},text:`봉길 아저씨가 그 방향을 잠깐 본다. "그래." 내려간다.
1주차였으면 뭔가 더 말했을 것 같은데 — 그 '더'가 없다.`},{condition:{},text:"내려간다."}],next:"d14_10"},og={panorama:"/panorama/d14_10_descend.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`내려오면서 성칠이 말한다.
"봉길 아저씨 요즘 말이 없지 않아?"`},{condition:{},text:"내려오는 길. 아무도 말이 없다."}],choices:[{label:'A. "원래 말 없는 분이에요." 한다',goto:"d14_11",condition:{knowsSeongchil:{gte:1}},effect:{agreedBonggilQuiet:1}},{label:'B. "그런가요." 한다',goto:"d14_11",condition:{knowsSeongchil:{gte:1}}},{label:"C. 아무 말 안 한다",goto:"d14_11",condition:{knowsSeongchil:{gte:1}}}],next:"d14_11"},rg={panorama:"/panorama/d14_10_descend.jpg",narrativeVariants:[{condition:{agreedBonggilQuiet:{gte:1}},text:`성칠이 말한다. "처음엔 아니었잖아."
만술이 생각한다. 맞나. 언제부터였나.`},{condition:{},text:"캠프로 돌아온다."}],next:"d14_12"},sg={panorama:"/panorama/d14_12_narrow_path.jpg",narrative:`오후는 다른 루트. 나무가 빽빽하다. 하늘이 좁다.
길이 좁아서 줄이 길어진다.`,choices:[{label:"A. 그냥 걷는다",goto:"d14_13"},{label:"B. 답답하다",goto:"d14_13"},{label:"C. 오히려 안전한 느낌이 든다",goto:"d14_13",effect:{feltSafeNarrow:1}}]},cg={panorama:"/panorama/d14_12_narrow_path.jpg",narrativeVariants:[{condition:{feltSafeNarrow:{gte:1}},text:`만술이 그 느낌이 이상하다고 생각한다. 좁고 어두운데 왜 안전하지.
모르겠다.`},{condition:{},text:"줄이 계속 간다."}],next:"d14_14"},lg={panorama:"/panorama/d14_14_passing_soldier.jpg",narrative:`좁은 길 중간에서 군인 하나가 내려온다. 반대 방향.
지게꾼들이 비켜선다.
군인이 지나가면서 중얼거린다. 알아들을 수 없다.
만술이 그 얼굴을 본다. 눈이 어딘가 먼 데를 보고 있다.`,choices:[{label:"A. 그냥 비켜선다",goto:"d14_15"},{label:'B. "어디서 오시는 겁니까." 하려다 안 한다',goto:"d14_15"},{label:"C. 봉길 아저씨를 본다",goto:"d14_15",effect:{watchedBonggilWatchSoldier:1}}]},dg={panorama:"/panorama/d14_14_passing_soldier.jpg",narrativeVariants:[{condition:{watchedBonggilWatchSoldier:{gte:1}},text:`봉길 아저씨가 그 군인을 보고 있다. 표정이 없다.
만술이 봉길 아저씨를 보다가 하사를 본다. 뭔가 있다.`},{condition:{},text:"지게꾼들이 다시 줄을 선다."}],next:"d14_16"},hg={panorama:"/panorama/d14_16_evening.jpg",narrative:`저녁. 봉길 아저씨가 혼자 앉는다. 만술 쪽을 보지 않는다.
어제도 그랬다. 그제도.
언제부터였는지 — 정확히는 모른다.`,choices:[{label:"A. 다가간다",goto:"d14_17",effect:{bonggilDistance:1}},{label:"B. 성칠 옆에 앉는다",goto:"d14_17"}]},ug={panorama:"/panorama/d14_16_evening.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:5}},text:`봉길 아저씨가 만술이 앉아도 말이 없다. 같이 먹는다. 침묵.
다 먹고 봉길 아저씨가 먼저 일어난다. 만술이 그 뒷모습을 본다.`},{condition:{},text:"만술이 성칠 옆에 앉는다."}],next:"d14_18"},fg={panorama:"/panorama/d14_18_seongchil_night.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`텐트 밖. 성칠이 하늘을 본다.
만술이 옆에 앉는다.
성칠이 말한다. "고향에 누구 있어?"`},{condition:{},text:"텐트 밖. 만술이 혼자 하늘을 본다."}],choices:[{label:'A. "어머니요." 한다',goto:"d14_19",condition:{knowsSeongchil:{gte:1}}},{label:'B. "별로 없어요." 한다',goto:"d14_19",condition:{knowsSeongchil:{gte:1}}},{label:'C. "아저씨는요?" 먼저 묻는다',goto:"d14_19",condition:{knowsSeongchil:{gte:1}},effect:{askedSeongchilFamily:1}}],next:"d14_19"},pg={panorama:"/panorama/d14_18_seongchil_night.jpg",narrativeVariants:[{condition:{askedSeongchilFamily:{gte:1}},text:`성칠이 말한다. "형이랑 어머니."
잠깐 있다가 말한다. "형이 왜 나 대신 안 왔는지 모르겠어."
그게 다다. 만술이 그 말을 씹는다.`},{condition:{},text:"텐트로 돌아간다."}],next:"d14_20"},mg={panorama:"/panorama/d14_20_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."`,choices:[{label:"A. 그냥 눈을 감는다",goto:"d14_end"},{label:'B. "아저씨." 부른다',goto:"d14_end",effect:{calledBonggilD14:1}}]},_g={panorama:"/panorama/d14_20_tent_night.jpg",narrativeVariants:[{condition:{calledBonggilD14:{gte:1}},text:`봉길 아저씨가 말한다. "왜."
만술이 할 말이 없다. 그냥 불렀다.
봉길 아저씨가 기다린다. 만술이 말한다. "아니에요."
봉길 아저씨가 돌아눕는다. 만술이 그 등을 본다.

D-14가 끝났다.`},{condition:{},text:`만술이 눈을 감는다.

D-14가 끝났다.`}],next:"d13_01"},gg={panorama:"/panorama/d13_01_americans.jpg",narrative:`아침. 캠프에 처음 보는 사람들이 있다. 미군 셋.
키가 크다. 냄새가 다르다. 말이 안 통한다.`,choices:[{label:"A. 힐끗 본다",goto:"d13_02"},{label:"B. 제대로 본다",goto:"d13_02",effect:{eyeContactUS:1}},{label:"C. 안 본다",goto:"d13_02"}]},vg={panorama:"/panorama/d13_01_americans.jpg",narrativeVariants:[{condition:{eyeContactUS:{gte:1}},text:`미군 하나가 만술과 눈이 마주친다. 미군이 고개를 끄덕인다.
만술이 굳는다. 어떻게 해야 할지 모른다.
하는 사이에 미군이 시선을 돌린다.`},{condition:{},text:"만술이 시선을 돌린다."}],next:"d13_03"},xg={panorama:"/panorama/d13_03_breakfast.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`성칠이 미군들을 보면서 말한다. "저 사람들 뭐 먹는지 봐."
만술이 본다. 달콤한 냄새가 난다. 뭔지 모르는 냄새.`},{condition:{},text:"달콤한 냄새가 난다. 뭔지 모르는 냄새."}],choices:[{label:"A. 그냥 건빵 먹는다",goto:"d13_04"},{label:"B. 코를 킁킁인다",goto:"d13_04",effect:{smelledUSFood:1}}]},Sg={panorama:"/panorama/d13_04_load.jpg",narrative:`오늘 짐은 미군 물자다. 상자에 글씨가 있다. 읽을 수 없다.
무겁다.`,choices:[{label:"A. 그냥 맨다",goto:"d13_05"},{label:"B. 글씨를 보려 한다",goto:"d13_05",effect:{readBoxLetters:1}}]},Mg={panorama:"/panorama/d13_04_load.jpg",narrativeVariants:[{condition:{readBoxLetters:{gte:1}},text:"알파벳이다. 만술이 모른다. 뭔지 모르는 걸 지고 간다."},{condition:{},text:"만술이 그냥 맨다."}],next:"d13_06"},bg={panorama:"/panorama/d13_06_climb_stumble.jpg",narrative:`오르막. 봉길 아저씨가 앞에서 간다.
중간쯤 — 봉길 아저씨가 멈춘다. 돌부리에 발이 걸렸다.
휘청한다.
봉길 아저씨가 혼자 중심을 잡는다. 뒤를 보지 않는다. 그냥 다시 걷는다.`,choices:[{label:"A. 아무 말 안 한다",goto:"d13_07"},{label:'B. "괜찮으세요?" 하려다 안 한다',goto:"d13_07"},{label:'C. "괜찮으세요?" 한다',goto:"d13_07",effect:{askedBonggilOkD13:1}}]},Eg={panorama:"/panorama/d13_06_climb_stumble.jpg",narrativeVariants:[{condition:{askedBonggilOkD13:{gte:1}},text:`봉길 아저씨가 대답 안 한다. 그냥 걷는다.
만술이 그 뒷모습을 보며 걷는다.`},{condition:{},text:"만술이 그냥 걷는다."}],next:"d13_08"},yg={panorama:"/panorama/d13_08_summit_scope.jpg",narrative:`정상에 미군이 있다. 망원경으로 뭔가를 보고 있다.
만술이 그 방향을 본다.`,choices:[{label:"A. 본다",goto:"d13_09",effect:{watchedUSScope:1}},{label:"B. 안 본다",goto:"d13_09"}]},Ag={panorama:"/panorama/d13_08_summit_scope.jpg",narrativeVariants:[{condition:{watchedUSScope:{gte:1}},text:`연기. 멀리. 오늘은 다섯 줄기.
그리고 그 너머 — 뭔가 있는데 보이지 않는다.`},{condition:{},text:"만술이 안 본다."}],next:"d13_10"},Tg={panorama:"/panorama/d13_10_chocolate.jpg",narrative:`내려오는 길. 미군 하나가 같은 방향으로 내려온다. 혼자.
미군이 뭔가를 꺼내서 만술한테 내민다.`,choices:[{label:"A. 일단 받는다",goto:"d13_11",effect:{gotChocolate:1}},{label:"B. 뭔지 보고 나서 결정한다",goto:"d13_11",effect:{gotChocolate:1}}]},wg={panorama:"/panorama/d13_10_chocolate.jpg",narrative:`초콜릿이다. 달다. 지금까지 먹어본 것 중 제일 달다.
만술이 굳는다. 미군이 웃는다.`,next:"d13_12"},Cg={panorama:"/panorama/d13_10_chocolate.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:'성칠이 묻는다. "미군이 뭔가 줬어?"'},{condition:{},text:"캠프로 돌아온다."}],choices:[{label:'A. "초콜릿." 하고 보여준다',goto:"d13_13",condition:{knowsSeongchil:{gte:1}},effect:{sharedChocolate:1}},{label:'B. "응." 그게 다',goto:"d13_13",condition:{knowsSeongchil:{gte:1}}},{label:'C. "아니." 한다',goto:"d13_13",condition:{knowsSeongchil:{gte:1}},effect:{hidChocolate:1}}],next:"d13_13"},Rg={panorama:"/panorama/d13_10_chocolate.jpg",narrativeVariants:[{condition:{sharedChocolate:{gte:1}},text:`성칠이 눈이 커진다. 만술이 반을 잘라서 준다.
둘이 초콜릿을 먹으며 내려온다.`},{condition:{hidChocolate:{gte:1}},text:"주머니에 초콜릿이 있다. 쌀알 옆에."},{condition:{},text:"캠프로 돌아온다."}],next:"d13_14"},Dg={panorama:"/panorama/d13_14_evening.jpg",narrativeVariants:[{condition:{gotChocolate:{gte:1},sharedChocolate:{lte:0}},text:`저녁. 만술이 봉길 아저씨한테 다가간다. 초콜릿을 꺼낸다.
봉길 아저씨한테 내민다.
봉길 아저씨가 말한다. "됐다."`},{condition:{},text:"저녁. 만술이 밥을 먹는다."}],choices:[{label:"A. 다시 넣는다",goto:"d13_15",condition:{gotChocolate:{gte:1},sharedChocolate:{lte:0}}},{label:"B. 그냥 옆에 둔다",goto:"d13_15",condition:{gotChocolate:{gte:1},sharedChocolate:{lte:0}},effect:{leftChocolateBeside:1}}],next:"d13_15"},Pg={panorama:"/panorama/d13_14_evening.jpg",narrativeVariants:[{condition:{leftChocolateBeside:{gte:1}},text:`봉길 아저씨가 그걸 보다가 — 집어서 먹는다. 아무 말 없이.
만술이 그걸 본다.`},{condition:{},text:"저녁 시간이 지나간다."}],next:"d13_end"},Lg={panorama:"/panorama/d13_16_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
오늘은 그냥 잔다.

D-13이 끝났다.`,next:"d12_01"},Ug={panorama:"/panorama/d12_01_artillery_dawn.jpg",narrative:`새벽. 포 소리에 눈이 떠진다. 멀지 않다. 어제보다 가깝다.
텐트 안 사람들이 다 깬다. 아무도 말 안 한다.
소리가 멈춘다.`,choices:[{label:"A. 다시 눈을 감는다",goto:"d12_02"},{label:"B. 봉길 아저씨를 본다",goto:"d12_02",effect:{watchedBonggilDawn:1}},{label:"C. 성칠을 본다",goto:"d12_02",condition:{knowsSeongchil:{gte:1}}}]},Ig={panorama:"/panorama/d12_01_artillery_dawn.jpg",narrativeVariants:[{condition:{watchedBonggilDawn:{gte:1}},text:"봉길 아저씨가 눈을 뜨고 천장을 보고 있다. 만술을 보지 않는다."},{condition:{},text:"만술이 다시 눈을 감는다."}],next:"d12_03"},Ng={panorama:"/panorama/d12_03_morning_tense.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`캠프 분위기가 다르다. 군인들이 빠르게 움직인다.
하사가 짧게 말한다. "오늘 루트 바뀐다. 빨리 움직여."
성칠이 만술한테 낮게 말한다. "뭔가 있나봐."`},{condition:{},text:`캠프 분위기가 다르다. 군인들이 빠르게 움직인다.
하사가 짧게 말한다. "오늘 루트 바뀐다. 빨리 움직여."`}],next:"d12_04"},Bg={panorama:"/panorama/d12_04_load_rush.jpg",narrative:`오늘 짐 배정이 급하게 이루어진다. 탄약 상자.
만술이 끈을 맨다. 빠르게. 손이 기억한다.`,next:"d12_05"},Fg={panorama:"/panorama/d12_05_climb_speed.jpg",narrative:`오늘 속도가 다르다. 빠르다.
만술이 리듬을 찾으려 하는데 — 속도가 자꾸 바뀐다.`,choices:[{label:"A. 이를 악물고 따라간다",goto:"d12_06"},{label:"B. 속도를 조금 낮춘다 — 뒤처진다",goto:"d12_06",effect:{fellBehindSpeed:1}}]},Og={panorama:"/panorama/d12_05_climb_speed.jpg",narrativeVariants:[{condition:{fellBehindSpeed:{gte:1},knowsSeongchil:{gte:1}},text:'성칠이 뒤에서 만술을 민다. 살짝. "빨리." 만술이 다시 속도를 올린다.'},{condition:{},text:"만술이 이를 악물고 따라간다."}],next:"d12_07"},kg={panorama:"/panorama/d12_07_gunfire.jpg",narrative:`고개 중턱. 총 소리가 들린다. 멀지 않다.
줄이 멈춘다. 이번엔 군인이 소리친다. "엎드려."
다들 엎드린다. 만술도 엎드린다. 짐이 무겁게 등을 누른다.
흙 냄새. 풀 냄새.
총 소리가 계속된다.`,choices:[{label:"A. 눈을 감는다",goto:"d12_08"},{label:"B. 고개를 들어 본다",goto:"d12_08"},{label:"C. 봉길 아저씨를 찾는다",goto:"d12_08",effect:{foundBonggilBreathing:1}}]},Vg={panorama:"/panorama/d12_07_gunfire.jpg",narrativeVariants:[{condition:{foundBonggilBreathing:{gte:1}},text:`봉길 아저씨가 앞에 엎드려 있다. 짐이 올라갔다 내려갔다 한다.
숨을 쉬고 있다.`},{condition:{},text:"만술이 눈을 감는다."}],next:"d12_09"},zg={panorama:"/panorama/d12_07_gunfire.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:'성칠이 만술 옆에 엎드려 있다. 낮게 말한다. "무서워?"'},{condition:{},text:"총 소리가 계속된다."}],choices:[{label:'A. "응." 한다',goto:"d12_10",condition:{knowsSeongchil:{gte:1}},effect:{saidScaredYes:1}},{label:'B. "모르겠어." 한다',goto:"d12_10",condition:{knowsSeongchil:{gte:1}}},{label:"C. 아무 말 안 한다",goto:"d12_10",condition:{knowsSeongchil:{gte:1}}}],next:"d12_10"},Hg={panorama:"/panorama/d12_07_gunfire.jpg",narrativeVariants:[{condition:{saidScaredYes:{gte:1}},text:'성칠이 말한다. "나도." 총 소리가 계속된다.'},{condition:{},text:"총 소리가 계속된다."}],next:"d12_11"},Gg={panorama:"/panorama/d12_11_gunfire_stop.jpg",narrative:`총 소리가 멈춘다. 군인이 말한다. "간다."
다들 일어난다.`,choices:[{label:"A. 바로 걷는다",goto:"d12_12"},{label:"B. 주위를 한 번 본다",goto:"d12_12",effect:{lookedAroundAfter:1}}]},Wg={panorama:"/panorama/d12_11_gunfire_stop.jpg",narrativeVariants:[{condition:{lookedAroundAfter:{gte:1}},text:`아무것도 없다. 나무. 길. 하늘. 아무 일도 없었던 것처럼.
그런데 방금 총 소리가 났었다.`},{condition:{},text:"만술이 바로 걷는다."}],next:"d12_13"},jg={panorama:"/panorama/d12_13_summit_smoke.jpg",narrative:`정상. 군인들이 많다. 지게꾼들이 짐을 내려놓고 비켜선다.
만술이 연기를 세려는데 — 오늘은 잘 안 보인다.
연기가 아니라 — 뭔가 다른 게 피어오른다. 더 크고 검다.`,choices:[{label:'A. "저거 연기가 아닌 것 같아." 한다',goto:"d12_14",condition:{knowsSeongchil:{gte:1}},effect:{saidNotSmoke:1}},{label:"B. 혼자 본다",goto:"d12_14"}]},Xg={panorama:"/panorama/d12_14_descend_fast.jpg",narrative:"내려오는 길도 빠르다. 만술이 뛰다시피 내려온다. 발이 미끄러진다.",choices:[{label:"A. 잠깐 멈추고 다시 내려간다",goto:"d12_15"},{label:"B. 멈추지 않고 계속 내려간다",goto:"d12_15",effect:{fellWhileDescending:1}}]},qg={panorama:"/panorama/d12_14_descend_fast.jpg",narrativeVariants:[{condition:{fellWhileDescending:{gte:1}},text:"또 미끄러진다. 넘어진다. 일어난다. 계속 간다. 아무도 멈추지 않았다."},{condition:{},text:"만술이 잠깐 멈추고 다시 내려간다."}],next:"d12_16"},Yg={panorama:"/panorama/d12_16_camp_news.jpg",narrative:`지게꾼 하나가 만술한테 말한다.
"오늘 누가 죽었대."
누가 죽었는지 모른다.`,choices:[{label:'A. "누가요?" 묻는다',goto:"d12_17",effect:{askedWhoDied:1}},{label:"B. 아무 말 안 한다",goto:"d12_17"}]},Kg={panorama:"/panorama/d12_16_camp_news.jpg",narrativeVariants:[{condition:{askedWhoDied:{gte:1}},text:`그 지게꾼이 말한다. "몰라. 저 위에서."
그게 다다. 만술이 '저 위에서'를 생각한다.`},{condition:{},text:"만술이 아무 말 안 한다."}],next:"d12_18"},$g={panorama:"/panorama/d12_18_bonggil_hard.jpg",narrative:`저녁. 봉길 아저씨가 혼자 앉는다. 오늘 표정이 — 어제랑 다르다.
딱딱하다. 더.
만술이 다가간다.
봉길 아저씨가 말한다. "됐어. 저쪽 가 있어."`,choices:[{label:'A. "예." 하고 간다',goto:"d12_19"},{label:"B. 그냥 앉는다",goto:"d12_19"},{label:'C. "왜요." 한다',goto:"d12_19",effect:{askedBonggilWhy:1}}]},Zg={panorama:"/panorama/d12_18_bonggil_hard.jpg",narrativeVariants:[{condition:{askedBonggilWhy:{gte:1}},text:`봉길 아저씨가 만술을 본다. 1초. 그리고 말한다. "그냥."
돌아선다. 만술이 서 있는다. 그리고 간다.`},{condition:{},text:'만술이 "예." 하고 간다.'}],next:"d12_20"},Jg={panorama:"/panorama/d12_20_seongchil_night.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`텐트 밖. 성칠이 말한다.
"봉길 아저씨 이상하지 않아?"`},{condition:{},text:"텐트 밖. 만술이 혼자 서 있다."}],choices:[{label:'A. "그러게요." 한다',goto:"d12_21",condition:{knowsSeongchil:{gte:1}}},{label:'B. "원래 그래요." 한다',goto:"d12_21",condition:{knowsSeongchil:{gte:1}},effect:{disagreedBonggilNormal:1}},{label:"C. 아무 말 안 한다",goto:"d12_21",condition:{knowsSeongchil:{gte:1}}}],next:"d12_21"},Qg={panorama:"/panorama/d12_20_seongchil_night.jpg",narrativeVariants:[{condition:{disagreedBonggilNormal:{gte:1}},text:'성칠이 만술을 본다. "아닌 것 같은데." 만술이 아무 말 안 한다.'},{condition:{},text:"텐트로 들어간다."}],next:"d12_22"},t0={panorama:"/panorama/d12_22_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 먼저 누워 있다.
봉길 아저씨가 말한다. "자라."
오늘은 — 목소리가 다르다. 뭔가 베어낸 것 같은 목소리.`,choices:[{label:"A. 그냥 눈을 감는다",goto:"d12_end"},{label:"B. 봉길 아저씨를 본다",goto:"d12_end",effect:{watchedBonggilEyesOpen:1}}]},e0={panorama:"/panorama/d12_22_tent_night.jpg",narrativeVariants:[{condition:{watchedBonggilEyesOpen:{gte:1}},text:`봉길 아저씨가 천장을 보고 있다. 눈이 열려 있다. 자는 게 아니다.

D-12가 끝났다.`},{condition:{},text:`만술이 눈을 감는다.

D-12가 끝났다.`}],next:"d11_01"},n0={panorama:"/panorama/d11_01_bonggil_morning.jpg",narrative:`아침. 봉길 아저씨가 이미 밖에 있다.
만술이 나가면 봉길 아저씨가 혼자 앉아서 뭔가를 본다. 아무것도 없는 방향.`,choices:[{label:'A. "아저씨, 잘 주무셨어요?" 한다',goto:"d11_02"},{label:"B. 옆에 그냥 앉는다",goto:"d11_02",effect:{satBesideBonggilD11:1}},{label:"C. 그냥 성칠을 찾는다",goto:"d11_02",condition:{knowsSeongchil:{gte:1}}}]},i0={panorama:"/panorama/d11_01_bonggil_morning.jpg",narrativeVariants:[{condition:{satBesideBonggilD11:{gte:1}},text:`봉길 아저씨가 만술을 보지 않는다. 둘이 아무 말 없이 앉아 있는다.
만술이 봉길 아저씨가 보는 방향을 본다. 아무것도 없다.`},{condition:{},text:"만술이 다른 곳으로 간다."}],next:"d11_03"},a0={panorama:"/panorama/d11_03_senior_carrier.jpg",narrative:`선배 지게꾼이 만술 옆에 앉는다.
한참 후 말한다. "며칠 됐어?"`,choices:[{label:'A. "열흘요." 한다',goto:"d11_04",effect:{saidTenDays:1}},{label:'B. "잘 모르겠어요." 한다',goto:"d11_04"}]},o0={panorama:"/panorama/d11_03_senior_carrier.jpg",narrativeVariants:[{condition:{saidTenDays:{gte:1}},text:`선배 지게꾼이 고개를 끄덕인다. "그 정도면 몸은 됐겠네."
만술이 그게 무슨 뜻인지 생각한다. 몸은 됐다. 그럼 뭐가 안 된 건가.`},{condition:{},text:"선배 지게꾼이 일어난다."}],next:"d11_05"},r0={panorama:"/panorama/d11_05_load.jpg",narrative:`오늘 짐. 하사가 만술을 부른다. 오늘 또 사람이다.
만술이 굳는다.
하사가 말한다. "부상병."
이번엔 의식이 있다. 또래다.
만술이 그 얼굴을 본다.`,next:"d11_06"},s0={panorama:"/panorama/d11_06_wounded_first.jpg",narrative:`부상병이 만술을 본다. 눈이 맑다.
다리에 붕대가 감겨 있다. 걷지 못한다.
만술이 지게에 묶으려 한다.
부상병이 말한다. "야."
만술이 본다.
부상병이 말한다. "조심해."`,choices:[{label:'A. "예." 한다',goto:"d11_07"},{label:'B. "알아." 한다',goto:"d11_07",effect:{saidAlGo:1}},{label:"C. 아무 말 안 하고 묶는다",goto:"d11_07"}]},c0={panorama:"/panorama/d11_06_wounded_first.jpg",narrativeVariants:[{condition:{saidAlGo:{gte:1}},text:`부상병이 잠깐 만술을 본다. 그리고 말한다. "몇 살이야?"
만술이 말한다. "열아홉." 부상병이 말한다. "나도."`},{condition:{},text:"만술이 끈을 묶는다."}],next:"d11_08"},l0={panorama:"/panorama/d11_08_climb_wounded.jpg",narrative:`출발. 부상병이 가끔 말한다.
"미끄러워." "조심." "여기 돌 있어."`,choices:[{label:'A. "응." 하고 피한다',goto:"d11_09",effect:{respondedToWarnings:1}},{label:"B. 말 없이 피한다",goto:"d11_09"},{label:'C. "그러게." 한다',goto:"d11_09"}]},d0={panorama:"/panorama/d11_08_climb_wounded.jpg",narrativeVariants:[{condition:{respondedToWarnings:{gte:1}},text:"둘 사이에 짧은 호흡이 생긴다."},{condition:{},text:"만술이 길을 살피며 걷는다."}],next:"d11_10"},h0={panorama:"/panorama/d11_10_name.jpg",narrative:`고개 중턱 그늘에서 쉰다.
부상병이 말한다. "이름이 뭐야."`,choices:[{label:'A. "만술이요." 한다',goto:"d11_11",effect:{knowsJaebok:1}},{label:"B. 아무 말 안 한다",goto:"d11_11"}]},u0={panorama:"/panorama/d11_10_name.jpg",narrativeVariants:[{condition:{knowsJaebok:{gte:1}},text:`부상병이 말한다. "나는 재복이."
만술이 그 이름을 받는다. 재복. 이름이 생겼다.`},{condition:{},text:"부상병이 아무 말 없이 쉰다."}],next:"d11_12"},f0={panorama:"/panorama/d11_12_slip.jpg",narrative:`오르막 후반. 경사가 심해진다.
발이 미끄러진다.
순간 — 뒤로 쏠린다.`,choices:[{label:"A. 버틴다 — 같이 굴러떨어지지 않으려고",goto:"d11_13",effect:{heldOnSlip:1}},{label:"B. 지게끈을 놓는다",goto:"d11_13",effect:{droppedJaebok:1}}]},p0={panorama:"/panorama/d11_12_slip.jpg",narrativeVariants:[{condition:{heldOnSlip:{gte:1}},text:`만술이 이를 악물고 버틴다. 무릎이 땅을 긁는다. 겨우 잡는다.
재복이 신음한다. 잠깐 후 재복이 말한다. "괜찮아?" 만술한테 묻는 거다.`},{condition:{droppedJaebok:{gte:1}},text:`재복이 굴러떨어진다. 만술이 뛰어 내려간다. 재복이 눈을 뜨고 있다.
"야." 만술이 재복 옆에 앉는다. 아무 말 못 한다.`},{condition:{},text:"만술이 버틴다."}],next:"d11_14"},m0={panorama:"/panorama/d11_14_summit_handoff.jpg",narrative:`정상. 재복을 내려놓는다. 의무병이 온다.
재복이 만술을 본다.`,choices:[{label:"A. 마주친다",goto:"d11_15",effect:{metJaebokEyes:1}},{label:"B. 피한다",goto:"d11_15"}]},_0={panorama:"/panorama/d11_14_summit_handoff.jpg",narrativeVariants:[{condition:{metJaebokEyes:{gte:1}},text:'재복이 말한다. "수고했어." 만술이 아무 말 못 한다. 재복이 실려간다.'},{condition:{},text:"만술이 시선을 피한다."}],next:"d11_16"},g0={panorama:"/panorama/d11_16_descend.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`내려오면서 성칠이 옆에 온다.
"부상병 어땠어?"`},{condition:{},text:"내려오는 길. 아무도 말이 없다."}],choices:[{label:'A. "무거웠어." 한다',goto:"d11_17",condition:{knowsSeongchil:{gte:1}}},{label:'B. "말을 하더라." 한다',goto:"d11_17",condition:{knowsSeongchil:{gte:1}}},{label:'C. "재복이래." 한다',goto:"d11_17",condition:{knowsSeongchil:{gte:1},knowsJaebok:{gte:1}},effect:{toldSeongchilJaebokName:1}}],next:"d11_17"},v0={panorama:"/panorama/d11_16_descend.jpg",narrativeVariants:[{condition:{toldSeongchilJaebokName:{gte:1}},text:`성칠이 멈춘다. 잠깐. 그리고 걷는다. "이름 알았어?"
만술이 고개를 끄덕인다. 성칠이 말한다. "난 모르는 게 나을 것 같아."
만술이 그 말을 씹는다.`},{condition:{},text:"캠프로 돌아온다."}],next:"d11_18"},x0={panorama:"/panorama/d11_18_evening_bonggil.jpg",narrative:`저녁. 만술이 봉길 아저씨 옆에 앉는다.
봉길 아저씨가 보지 않는다.`,choices:[{label:'A. "아저씨, 오늘 부상병 졌어요." 한다',goto:"d11_19",effect:{toldBonggilAboutJaebok:1}},{label:"B. 아무 말 안 하고 앉아 있는다",goto:"d11_19"}]},S0={panorama:"/panorama/d11_18_evening_bonggil.jpg",narrativeVariants:[{condition:{toldBonggilAboutJaebok:{gte:1}},text:`봉길 아저씨가 말한다. "그래." 그게 다다.
만술이 더 말하려다 안 한다.`},{condition:{},text:"둘이 아무 말 없이 앉아 있는다."}],next:"d11_20"},M0={panorama:"/panorama/d11_20_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다.
만술이 눕는다.
봉길 아저씨가 말한다. "자라."`,choices:[{label:"A. 그냥 눈을 감는다",goto:"d11_end"},{label:'B. "재복이라고 했어요." 한다',goto:"d11_end",condition:{knowsJaebok:{gte:1}},effect:{saidJaebokNameAtNight:1}}]},b0={panorama:"/panorama/d11_20_tent_night.jpg",narrativeVariants:[{condition:{saidJaebokNameAtNight:{gte:1}},text:`봉길 아저씨가 침묵한다. 한참. 그리고 말한다. "자라."
만술이 눈을 감는다. 재복. 그 이름이 어둠 속에 있다.

D-11이 끝났다.`},{condition:{},text:`만술이 눈을 감는다.

D-11이 끝났다.`}],next:"d10_01"},E0={panorama:"/panorama/d10_01_tent_morning.jpg",narrative:`아침. 봉길 아저씨가 없다.
텐트 안에 없다. 밖에도 없다.
만술이 찾는다.`,choices:[{label:"A. 캠프 안을 둘러본다",goto:"d10_02"},{label:"B. 성칠한테 묻는다",goto:"d10_02",condition:{knowsSeongchil:{gte:1}},effect:{askedSeongchilBonggilD10:1}},{label:"C. 하사한테 묻는다",goto:"d10_02",effect:{askedSergeantD10:1}}]},y0={panorama:"/panorama/d10_02_camp_outskirt.jpg",narrative:`캠프 외곽. 봉길 아저씨가 혼자 앉아 있다. 아무것도 없는 방향을 보고 있다.
만술이 다가가려다 — 멈춘다. 뭔가 다가가면 안 될 것 같은 느낌.`,next:"d10_03"},A0={panorama:"/panorama/d10_03_camp_morning.jpg",narrative:`봉길 아저씨가 돌아온다. 만술을 보지 않는다.
건빵을 집는다. 혼자 먹는다.
성칠이 만술한테 낮게 말한다. "봤어?"
만술이 고개를 끄덕인다.`,choices:[{label:'A. "뭔가 있었나봐." 한다',goto:"d10_04",effect:{saidSomethingHappenedD10:1}},{label:'B. "괜찮겠지." 한다',goto:"d10_04"},{label:"C. 아무 말 안 한다",goto:"d10_04"}]},T0={panorama:"/panorama/d10_04_ascent.jpg",narrative:`오르막 중간쯤 — 앞에서 뭔가 소리가 난다. 쿵.
지게꾼 하나가 넘어졌다. 짐이 쏟아졌다.
봉길 아저씨가 본다. 그리고 — 돌아선다. 그냥 걷는다.`,choices:[{label:"A. 달려가서 돕는다",goto:"d10_05",effect:{helpedFallenPorter:1}},{label:"B. 봉길 아저씨를 본다",goto:"d10_05",effect:{watchedBonggilTurnAway:1}},{label:"C. 멈춰 선다",goto:"d10_05"}]},w0={panorama:"/panorama/d10_04_ascent.jpg",narrativeVariants:[{condition:{watchedBonggilTurnAway:{gte:1}},text:`봉길 아저씨의 뒷모습이 보인다. 돌아보지 않는다.
만술이 그 등을 본다. 오래.`},{condition:{},text:"만술이 걷는다. 봉길 아저씨는 이미 저만치 앞서 있다."}],next:"d10_06"},C0={panorama:"/panorama/d10_06_shade_rest.jpg",narrative:`그늘. 만술이 봉길 아저씨 옆에 앉는다.
봉길 아저씨가 말한다. "저쪽 가."
만술이 움직이지 않는다.
봉길 아저씨가 만술을 본다. 처음으로 — 제대로 본다.
그 눈이 낯설다.`,choices:[{label:'A. "왜요." 한다',goto:"d10_07"},{label:"B. 그냥 앉아 있는다",goto:"d10_07"},{label:'C. "아저씨 괜찮아요?" 한다',goto:"d10_07",effect:{askedBonggilOkD10:1}}]},R0={panorama:"/panorama/d10_06_shade_rest.jpg",narrativeVariants:[{condition:{askedBonggilOkD10:{gte:1}},text:`봉길 아저씨가 오래 만술을 본다. 그리고 말한다.
"괜찮은 게 뭔데."
돌아선다. 만술이 그 말을 씹는다. 대답을 못 했다.`},{condition:{},text:"봉길 아저씨가 일어난다. 아무 말 없이."}],next:"d10_08"},D0={panorama:"/panorama/d10_08_summit.jpg",narrative:`정상. 봉길 아저씨가 서 있다. 만술이 옆에 선다.
봉길 아저씨가 말한다. 아무한테도 아닌 것처럼.
"다 저렇게 작네."`,choices:[{label:'A. "네." 한다',goto:"d10_09"},{label:"B. 아무 말 안 한다",goto:"d10_09",effect:{watchedSummitSilent:1}},{label:'C. "뭐가요." 한다',goto:"d10_09"}]},P0={panorama:"/panorama/d10_08_summit.jpg",narrativeVariants:[{condition:{watchedSummitSilent:{gte:1}},text:`둘이 한참 아래를 본다. 마을. 길. 사람들. 작다.
봉길 아저씨가 먼저 내려간다.`},{condition:{},text:"봉길 아저씨가 대답 없이 먼저 내려간다."}],next:"d10_10"},L0={panorama:"/panorama/d10_10_descent.jpg",narrative:`내려오면서 성칠이 말한다.
"봉길 아저씨 뭔가 달라졌어."
만술이 걷는다.
성칠이 말한다. "언제부터야?"`,choices:[{label:'A. "모르겠어." 한다',goto:"d10_11",condition:{knowsSeongchil:{gte:1}}},{label:'B. "D-12 이후인 것 같아." 한다',goto:"d10_11",condition:{knowsSeongchil:{gte:1}},effect:{saidD12AfterD10:1}},{label:"C. 아무 말 안 한다",goto:"d10_11"}]},U0={panorama:"/panorama/d10_10_descent.jpg",narrativeVariants:[{condition:{saidD12AfterD10:{gte:1}},text:`성칠이 생각한다. "그날 누가 죽었다고 했잖아."
만술이 걷는다. 아무 말 안 한다.`},{condition:{},text:"성칠이 더 말하지 않는다. 둘이 걷는다."}],next:"d10_12"},I0={panorama:"/panorama/d10_12_evening_alone.jpg",narrative:"저녁. 봉길 아저씨가 혼자 먹는다. 아무도 안 본다.",choices:[{label:"A. 다가간다",goto:"d10_13",effect:{approachedBonggilD10:1}},{label:"B. 성칠 옆에서 봉길 아저씨를 본다",goto:"d10_13",condition:{knowsSeongchil:{gte:1}}},{label:"C. 안 본다",goto:"d10_13"}]},N0={panorama:"/panorama/d10_12_evening_alone.jpg",narrativeVariants:[{condition:{approachedBonggilD10:{gte:1}},text:`봉길 아저씨가 만술이 앉는 걸 본다. 아무 말 안 한다.
봉길 아저씨가 다 먹고 일어난다. 만술이 그 뒷모습을 본다. 등이 단단하다. 돌처럼.`},{condition:{},text:"봉길 아저씨가 혼자 다 먹고 일어난다."}],next:"d10_14"},B0={panorama:"/panorama/d10_14_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
오늘은 — 그냥 말이다. 온기가 없다.`,choices:[{label:"A. 그냥 눈을 감는다",goto:"d10_end"},{label:'B. "아저씨."',goto:"d10_end",effect:{calledBonggilD10:1}}]},F0={panorama:"/panorama/d10_14_tent_night.jpg",narrativeVariants:[{condition:{calledBonggilD10:{gte:1}},text:`봉길 아저씨가 말한다. "자라고."
만술이 눈을 감는다. 어둠 속에서 봉길 아저씨 숨소리를 듣는다. 그냥 숨소리다. 그런데 낯설다.

D-10이 끝났다.`},{condition:{},text:`만술이 눈을 감는다.

D-10이 끝났다.`}],next:"d9_01"},O0={panorama:"/panorama/d9_01_tent_morning.jpg",narrative:`아침. 봉길 아저씨가 텐트 안에 있다.
일어나 있다. 앉아서 지게끈을 본다.
손질하는 게 아니다. 그냥 본다.
만술이 일어나서 봉길 아저씨를 본다.
봉길 아저씨가 만술을 보지 않는다.`,next:"d9_02"},k0={panorama:"/panorama/d9_02_camp_crying.jpg",narrative:`밖에 나오면 — 지게꾼 하나가 울고 있다.
소리 없이. 그냥 앉아서 건빵을 쥔 채로 운다.
아무도 뭐라 안 한다. 아무도 다가가지 않는다.`,choices:[{label:"A. 본다",goto:"d9_03"},{label:"B. 안 본다",goto:"d9_03"},{label:"C. 다가간다",goto:"d9_03",effect:{approachedCryingPorter:1}}]},V0={panorama:"/panorama/d9_02_camp_crying.jpg",narrativeVariants:[{condition:{approachedCryingPorter:{gte:1}},text:`만술이 그 옆에 앉는다. 아무 말 안 한다. 그 사람도 아무 말 안 한다.
잠깐 그렇게 있다. 그 사람이 건빵을 씹기 시작한다. 만술이 일어난다.
봉길 아저씨가 그 장면을 보고 있다. 만술이 돌아보면 — 봉길 아저씨가 시선을 돌린다.`},{condition:{},text:"만술이 자리를 옮긴다. 봉길 아저씨가 멀리서 그 모습을 보고 있었다는 걸 나중에 알게 된다."}],next:"d9_04"},z0={panorama:"/panorama/d9_04_ascent_wide.jpg",narrative:`오늘 루트가 넓어서 둘이 나란히 걸을 수 있다.
만술이 봉길 아저씨 옆에서 걷는다.
봉길 아저씨가 앞을 본다. 말이 없다.`,choices:[{label:'A. 말을 건다 — "아저씨, 고향 언제 가요."',goto:"d9_05",effect:{askedAboutHomeD9:1}},{label:"B. 끝까지 안 한다",goto:"d9_05"}]},H0={panorama:"/panorama/d9_04_ascent_wide.jpg",narrativeVariants:[{condition:{askedAboutHomeD9:{gte:1}},text:`봉길 아저씨가 걸으면서 말한다. "몰라." 그게 다다.
그 '몰라'가 1주차 때 '몰라도 돼'랑 다르다. 그때는 만술을 보호하는 말이었는데 — 지금은 그냥 모른다는 말이다.`},{condition:{},text:"둘이 말없이 걷는다."}],next:"d9_06"},G0={panorama:"/panorama/d9_06_rest_stranger.jpg",narrative:`쉬는 시간. 봉길 아저씨가 다른 지게꾼 옆에 앉는다. 처음 보는 사람.
만술이 그걸 본다.`,choices:[{label:"A. 다가간다",goto:"d9_07"},{label:"B. 성칠 옆에 앉는다",goto:"d9_07",condition:{knowsSeongchil:{gte:1}}},{label:"C. 혼자 앉는다",goto:"d9_07",effect:{satAloneD9:1}}]},W0={panorama:"/panorama/d9_06_rest_stranger.jpg",narrativeVariants:[{condition:{satAloneD9:{gte:1}},text:`만술이 혼자 앉아서 봉길 아저씨를 본다.
봉길 아저씨가 그 낯선 지게꾼과 이야기한다. 만술한테는 안 하는 이야기를.`},{condition:{},text:"만술이 다른 데 앉는다. 봉길 아저씨 쪽은 보지 않으려 한다."}],next:"d9_08"},j0={panorama:"/panorama/d9_08_ascent_late.jpg",narrative:"봉길 아저씨가 속도를 올린다. 만술을 기다리지 않는다.",choices:[{label:"A. 속도를 올려 따라간다",goto:"d9_09",effect:{chasedBonggilSpeed:1}},{label:"B. 자기 속도를 지킨다",goto:"d9_09"}]},X0={panorama:"/panorama/d9_08_ascent_late.jpg",narrativeVariants:[{condition:{chasedBonggilSpeed:{gte:1}},text:`봉길 아저씨를 따라잡는다. 그런데 봉길 아저씨가 만술이 옆에 온 걸 알면서 속도를 또 올린다.
만술이 그걸 안다. 그리고 속도를 낮춘다.`},{condition:{},text:"만술이 자기 속도로 걷는다. 봉길 아저씨는 점점 멀어진다."}],next:"d9_10"},q0={panorama:"/panorama/d9_10_summit_alone.jpg",narrative:`정상. 봉길 아저씨가 먼저 와 있다.
만술이 도착한다.
봉길 아저씨가 내려간다. 만술이 막 도착했는데.`,choices:[{label:'A. "아저씨." 부른다',goto:"d9_11",effect:{calledBonggilSummitD9:1}},{label:"B. 그냥 본다",goto:"d9_11"}]},Y0={panorama:"/panorama/d9_10_summit_alone.jpg",narrativeVariants:[{condition:{calledBonggilSummitD9:{gte:1}},text:`봉길 아저씨가 멈추지 않는다. 듣지 못한 건지. 들었는데 안 멈춘 건지.
만술은 모른다. 그게 더 힘들다.`},{condition:{},text:"만술이 그냥 본다. 봉길 아저씨의 뒷모습이 작아진다."}],next:"d9_12"},K0={panorama:"/panorama/d9_12_evening_alone.jpg",narrative:`저녁. 봉길 아저씨가 혼자 먹는다. 만술 쪽을 한 번도 안 본다.
만술이 성칠 옆에 앉아서 먹는다. 밥 맛을 모른다. 씹는다.`,choices:[{label:"A. 본다",goto:"d9_13",effect:{watchedBonggilEatAloneD9:1}},{label:"B. 안 본다",goto:"d9_13"}]},$0={panorama:"/panorama/d9_12_evening_alone.jpg",narrativeVariants:[{condition:{watchedBonggilEatAloneD9:{gte:1}},text:`봉길 아저씨가 먹는다. 표정이 없다.
만술이 그 옆모습을 본다. 낯설다. 고향에서 보던 봉길 아저씨가 아니다.`},{condition:{},text:"만술이 밥을 씹는다. 맛을 모른다."}],next:"d9_14"},Z0={panorama:"/panorama/d9_14_night_seongchil.jpg",narrative:`텐트 밖. 성칠이 말한다.
"오늘 봉길 아저씨 저번에 짐 못 드는 애한테 놔두고 가라고 했대."`,choices:[{label:'A. "그랬어요?" 한다',goto:"d9_15",condition:{knowsSeongchil:{gte:1}}},{label:'B. "그럴 리가." 한다',goto:"d9_15",condition:{knowsSeongchil:{gte:1}},effect:{deniedBonggilRumor:1}},{label:"C. 아무 말 안 한다",goto:"d9_15"}]},J0={panorama:"/panorama/d9_14_night_seongchil.jpg",narrativeVariants:[{condition:{deniedBonggilRumor:{gte:1}},text:"성칠이 만술을 본다. 아무 말 안 한다. 만술이 그 침묵을 받는다."},{condition:{},text:"성칠이 더 말하지 않는다."}],next:"d9_16"},Q0={panorama:"/panorama/d9_16_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
침묵.
봉길 아저씨가 말한다. "자라."
오늘은 — 그냥 습관이다.`,choices:[{label:'A. "예." 한다',goto:"d9_end"},{label:"B. 아무 말 안 한다",goto:"d9_end",effect:{silentAtNightD9:1}}]},t1={panorama:"/panorama/d9_16_tent_night.jpg",narrativeVariants:[{condition:{silentAtNightD9:{gte:1}},text:`봉길 아저씨가 돌아눕는다. 만술이 천장을 본다.
봉길 아저씨 숨소리를 듣는다. 고르다. 곧 잠든다. 만술은 오래 못 잔다.

D-9가 끝났다.`},{condition:{},text:`봉길 아저씨가 돌아눕는다. 만술이 눈을 감는다.

D-9가 끝났다.`}],next:"d8_01"},e1={panorama:"/panorama/d8_01_tent_morning.jpg",narrative:`아침. 성칠이 만술을 깨운다. "일어나."
봉길 아저씨 방식이랑 똑같이.
만술이 눈을 뜬다. 봉길 아저씨가 없다.`,choices:[{label:"A. 찾는다",goto:"d8_02",effect:{lookedForBonggilD8:1}},{label:"B. 그냥 일어난다",goto:"d8_02"}]},n1={panorama:"/panorama/d8_02_camp_outskirt.jpg",narrativeVariants:[{condition:{lookedForBonggilD8:{gte:1}},text:`봉길 아저씨가 캠프 외곽에 혼자 있다. D-10 아침이랑 같은 자리.
이번엔 만술이 다가가지 않는다.`},{condition:{},text:"만술이 일어나서 짐을 챙긴다."}],next:"d8_03"},i1={panorama:"/panorama/d8_03_senior_porter.jpg",narrative:`선배 지게꾼이 만술 옆에 앉는다.
"며칠 됐어?"
"열사흘요."
선배 지게꾼이 고개를 끄덕인다.
"저 아저씨." 봉길 아저씨 방향으로 턱짓한다. "같이 온 거야?"`,choices:[{label:'A. "네. 같은 마을이요." 한다',goto:"d8_04"},{label:'B. "네." 그게 다',goto:"d8_04"},{label:'C. "그랬어요." 한다',goto:"d8_04",effect:{saidUsedToBeD8:1}}]},a1={panorama:"/panorama/d8_03_senior_porter.jpg",narrativeVariants:[{condition:{saidUsedToBeD8:{gte:1}},text:`선배 지게꾼이 만술을 본다. 잠깐. 그리고 건빵을 씹는다.
그 '그랬어요'라는 말이 만술 입에서 나온 것을 만술이 듣는다.`},{condition:{},text:"선배 지게꾼이 더 묻지 않는다."}],next:"d8_05"},o1={panorama:"/panorama/d8_05_load_lineup.jpg",narrative:"줄을 선다. 봉길 아저씨가 만술 옆에 서지 않는다. 다른 자리.",choices:[{label:"A. 간다",goto:"d8_06",effect:{wentToBonggilLineD8:1}},{label:"B. 그냥 자기 자리에 선다",goto:"d8_06"}]},r1={panorama:"/panorama/d8_05_load_lineup.jpg",narrativeVariants:[{condition:{wentToBonggilLineD8:{gte:1}},text:`봉길 아저씨가 만술이 옆에 오는 걸 본다. 아무 말 안 한다. 앞을 본다.
나란히. 근데 나란히가 아닌 것 같다.`},{condition:{},text:"만술이 제자리에 선다. 봉길 아저씨는 멀찍이 있다."}],next:"d8_07"},s1={panorama:"/panorama/d8_07_ascent_fall.jpg",narrative:`앞에서 지게꾼 하나가 쓰러졌다. 짐이 굴러떨어진다.
봉길 아저씨가 그 장면을 본다. 그리고 그냥 걷는다.`,choices:[{label:"A. 달려가서 돕는다",goto:"d8_08",effect:{helpedFallenPorterD8:1}},{label:"B. 봉길 아저씨를 본다",goto:"d8_08"},{label:"C. 그냥 간다",goto:"d8_08"}]},c1={panorama:"/panorama/d8_07_ascent_fall.jpg",narrativeVariants:[{condition:{helpedFallenPorterD8:{gte:1}},text:`만술이 그 지게꾼을 잡아준다. 그 지게꾼이 일어난다. 아무 말 없이 고개를 숙인다.
만술이 봉길 아저씨 뒷모습을 본다. 멀어지고 있다.`},{condition:{},text:"만술이 걷는다. 봉길 아저씨는 이미 저만치 앞서 있다."}],next:"d8_09"},l1={panorama:"/panorama/d8_09_shade_rest.jpg",narrative:`그늘. 봉길 아저씨가 혼자 앉아 있다.
만술이 옆에 앉는다.
봉길 아저씨가 만술을 보지 않는다.
만술이 말한다. "아저씨."
봉길 아저씨가 말한다. "왜."`,choices:[{label:'A. "아무것도 아니에요." 한다',goto:"d8_10"},{label:'B. "요즘 왜 그래요." 한다',goto:"d8_10",effect:{askedWhyD8:1}},{label:'C. "고향 생각 나요?" 한다',goto:"d8_10"}]},d1={panorama:"/panorama/d8_09_shade_rest.jpg",narrativeVariants:[{condition:{askedWhyD8:{gte:1}},text:`봉길 아저씨가 만술을 본다. 정면으로. 그리고 말한다. "어떻게 그래." 그게 다다.
돌아선다. 만술이 그 말을 씹는다. 어떻게 그러냐는 건지. 왜 그러냐는 건지. 어떻게 안 그러냐는 건지.`},{condition:{},text:"봉길 아저씨가 더 말하지 않는다. 일어난다."}],next:"d8_11"},h1={panorama:"/panorama/d8_11_summit_no_smoke.jpg",narrative:`정상. 연기를 센다. 오늘은 — 없다.
처음으로 연기가 없다.
만술이 그 방향을 본다. 그냥 하늘이다.`,choices:[{label:'A. "오늘 연기 없어." 한다',goto:"d8_12",condition:{knowsSeongchil:{gte:1}},effect:{toldSeongchilNoSmokeD8:1}},{label:"B. 혼자 본다",goto:"d8_12"}]},u1={panorama:"/panorama/d8_11_summit_no_smoke.jpg",narrativeVariants:[{condition:{toldSeongchilNoSmokeD8:{gte:1}},text:`성칠이 그 방향을 본다. "다 탔나봐." 그게 다다.
다 탔다.`},{condition:{},text:"만술이 혼자 그 빈 하늘을 본다."}],next:"d8_13"},f1={panorama:"/panorama/d8_13_descent_bonggil_ahead.jpg",narrative:`봉길 아저씨가 빠르게 내려간다. 혼자.
만술이 그 뒷모습을 본다.
저 등이 — 고향에서 보던 등이랑 같은 등인데. 다르다.`,choices:[{label:"A. 따라간다",goto:"d8_14",effect:{chasedBonggilDescentD8:1}},{label:"B. 성칠이랑 내려간다",goto:"d8_14"}]},p1={panorama:"/panorama/d8_13_descent_bonggil_ahead.jpg",narrativeVariants:[{condition:{chasedBonggilDescentD8:{gte:1}},text:`봉길 아저씨를 따라잡는다. 봉길 아저씨가 말한다. 앞을 보면서. "뭐해."
만술이 말한다. "같이 가려고요."
봉길 아저씨가 말한다. "됐어." 속도를 올린다.
만술이 멈춘다. 그리고 성칠을 기다린다.`},{condition:{},text:"만술이 성칠과 함께 천천히 내려온다."}],next:"d8_15"},m1={panorama:"/panorama/d8_15_night_seongchil.jpg",narrative:`텐트 밖. 성칠이 말한다.
"봉길 아저씨가 요즘 다른 지게꾼한테 뭐라고 하는 거 봤어? 저번에 짐 못 드는 애한테 놔두고 가라고 했대."`,choices:[{label:'A. "그랬어요?" 한다',goto:"d8_16",condition:{knowsSeongchil:{gte:1}}},{label:'B. "그럴 리가." 한다',goto:"d8_16",condition:{knowsSeongchil:{gte:1}},effect:{deniedBonggilRumorD8:1}},{label:"C. 아무 말 안 한다",goto:"d8_16"}]},_1={panorama:"/panorama/d8_15_night_seongchil.jpg",narrativeVariants:[{condition:{deniedBonggilRumorD8:{gte:1}},text:"성칠이 만술을 본다. 아무 말 안 한다. 만술이 그 침묵을 받는다."},{condition:{},text:"성칠이 더 말하지 않는다."}],next:"d8_17"},g1={panorama:"/panorama/d8_17_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
침묵.
봉길 아저씨가 말하지 않는다.
처음으로 — "자라."가 없다.`,choices:[{label:'A. "아저씨, 자라." 한다',goto:"d8_end",effect:{saidSleepFirstD8:1}},{label:"B. 아무 말 안 한다",goto:"d8_end"}]},v1={panorama:"/panorama/d8_17_tent_night.jpg",narrativeVariants:[{condition:{saidSleepFirstD8:{gte:1}},text:`봉길 아저씨가 침묵한다. 잠든 건지. 만술이 천장을 본다. 오래.

D-8이 끝났다.`},{condition:{},text:`아무도 말 안 한다. 텐트 안이 다르다. 그 말 하나가 없으니까 다르다.

D-8이 끝났다.`}],next:"d7_01"},x1={panorama:"/panorama/d7_01_tent_morning.jpg",narrative:`아침. 2주일이다.
만술이 센다. D-21부터 D-7.
몸이 안 아픈 데가 없다. 근데 아픔이 익숙해졌다.
앞사람이 말했던 것 — 익숙해지면 그게 더 나쁜 거야.
오늘 처음으로 그 말이 무슨 뜻인지 알 것 같다.`,next:"d7_02"},S1={panorama:"/panorama/d7_02_camp_outskirt.jpg",narrative:`봉길 아저씨가 텐트에 없다.
만술이 밖에 나간다.
봉길 아저씨가 캠프 외곽에 혼자 있다. 항상 그 자리.
이번엔 만술이 다가간다.
봉길 아저씨 옆에 선다. 봉길 아저씨가 만술을 보지 않는다.
만술이 봉길 아저씨가 보는 방향을 본다. 산이다. 그냥 산.`,choices:[{label:'A. "아저씨, 밥 먹어요." 한다',goto:"d7_03"},{label:"B. 그냥 옆에 선다",goto:"d7_03"},{label:'C. "아저씨, 무서워요?" 한다',goto:"d7_03",effect:{askedIfScaredD7:1}}]},M1={panorama:"/panorama/d7_02_camp_outskirt.jpg",narrativeVariants:[{condition:{askedIfScaredD7:{gte:1}},text:`봉길 아저씨가 만술을 본다. 오래. 그리고 말한다.
"무서운 거 생각하면 못 살아."
D-20에서 했던 말과 비슷한데 — 다르다. 그때는 '못 자'였는데 지금은 '못 살아'다.`},{condition:{},text:"봉길 아저씨가 대답 없이 자리를 뜬다."}],next:"d7_04"},b1={panorama:"/panorama/d7_04_morning_seongchil.jpg",narrative:`성칠이 만술 옆에 온다.
"어젯밤에 봉길 아저씨 '자라' 안 했잖아."
만술이 고개를 끄덕인다.
성칠이 말한다. "이상하다. 그 말이 없으니까."`,choices:[{label:'A. "그러게." 한다',goto:"d7_05",condition:{knowsSeongchil:{gte:1}}},{label:'B. "나는 그 말 듣기 싫었는데." 한다',goto:"d7_05",condition:{knowsSeongchil:{gte:1}},effect:{saidHatedSleepWordD7:1}},{label:"C. 아무 말 안 한다",goto:"d7_05"}]},E1={panorama:"/panorama/d7_04_morning_seongchil.jpg",narrativeVariants:[{condition:{saidHatedSleepWordD7:{gte:1}},text:`성칠이 만술을 본다. "지금도?"
만술이 생각한다. 지금도 싫은가. 모르겠다.`},{condition:{},text:"성칠이 더 말하지 않는다."}],next:"d7_06"},y1={panorama:"/panorama/d7_06_load_heavy.jpg",narrative:`하사가 봉길 아저씨를 부른다. 뭔가 말한다.
봉길 아저씨가 고개를 끄덕인다.
오늘 봉길 아저씨 짐이 더 무겁다.
만술이 본다. 봉길 아저씨가 그 무거운 짐을 맨다. 표정이 없다.`,choices:[{label:'A. "제가 질게요." 하려다 안 한다',goto:"d7_07"},{label:'B. "아저씨 힘드시겠다." 하려다 안 한다',goto:"d7_07"},{label:"C. 아무 생각 안 한다",goto:"d7_07"}]},A1={panorama:"/panorama/d7_07_ascent_heavy.jpg",narrative:`봉길 아저씨가 무거운 짐을 지고 앞에 간다. 뒤처지지 않는다.
만술이 그 뒷모습을 본다.
저 무게를 저렇게 가는 게 — 이상하다. 아니면 저렇게 되는 게 이 곳에서 사는 방식인 건지.`,next:"d7_08"},T1={panorama:"/panorama/d7_08_rest_porter_lags.jpg",narrative:`쉬는 시간. 짐이 무거운 지게꾼 하나가 처진다. 못 오른다.
봉길 아저씨가 그걸 본다. 그리고 — 간다. 그냥.
만술이 봉길 아저씨를 본다.`,choices:[{label:"A. 그 지게꾼한테 간다",goto:"d7_09",effect:{helpedLaggingPorterD7:1}},{label:"B. 봉길 아저씨를 본다",goto:"d7_09"},{label:"C. 그냥 간다",goto:"d7_09",effect:{justWentD7:1}}]},w1={panorama:"/panorama/d7_08_rest_porter_lags.jpg",narrativeVariants:[{condition:{helpedLaggingPorterD7:{gte:1}},text:`만술이 그 지게꾼 옆에 앉는다. 짐을 조금 받아준다. 그 지게꾼이 일어난다.
만술이 봉길 아저씨 뒷모습을 본다. 멀어지고 있다.`},{condition:{justWentD7:{gte:1}},text:"만술이 그냥 간다. 걸으면서 그 지게꾼 소리를 뒤에서 듣는다. 그리고 없어진다."},{condition:{},text:"만술이 봉길 아저씨를 본다. 봉길 아저씨는 돌아보지 않는다."}],next:"d7_10"},C1={panorama:"/panorama/d7_10_summit.jpg",narrative:`정상. 봉길 아저씨가 먼저 와 있다. 만술이 도착한다.
봉길 아저씨가 만술을 본다.
처음으로 — 오늘 처음으로 — 만술을 제대로 본다.
만술이 그 시선을 받는다.
봉길 아저씨가 말한다. "힘들어?"`,choices:[{label:'A. "아니요." 한다',goto:"d7_11"},{label:'B. "네." 한다',goto:"d7_11"},{label:'C. "아저씨는요?" 한다',goto:"d7_11",effect:{askedBackD7:1,bonggilDistance:-1}}]},R1={panorama:"/panorama/d7_10_summit.jpg",narrativeVariants:[{condition:{askedBackD7:{gte:1}},text:`봉길 아저씨가 그 질문을 받는다. 오래 만술을 본다. 그리고 시선을 돌린다. 저 아래를.
대답을 안 한다. 만술이 그 옆에 선다. 둘이 아래를 본다. 마을. 길. 연기. 작다.

이게 2주차에서 봉길 아저씨와 가장 가까운 순간이다.`},{condition:{},text:"봉길 아저씨가 더 말하지 않는다. 먼저 내려간다."}],next:"d7_12"},D1={panorama:"/panorama/d7_12_descent_seongchil.jpg",narrative:`내려오면서 성칠이 말한다.
"2주 됐다."
만술이 고개를 끄덕인다.
성칠이 말한다. "살아 있네."`,choices:[{label:'A. "그러게." 한다',goto:"d7_13",condition:{knowsSeongchil:{gte:1}}},{label:'B. "당연하지." 한다',goto:"d7_13",condition:{knowsSeongchil:{gte:1}},effect:{saidOfCourseD7:1}},{label:"C. 아무 말 안 한다",goto:"d7_13"}]},P1={panorama:"/panorama/d7_12_descent_seongchil.jpg",narrativeVariants:[{condition:{saidOfCourseD7:{gte:1}},text:"성칠이 만술을 본다. 그리고 웃는다. 피식. 만술도 웃는다. 처음으로. 아주 짧게."},{condition:{},text:"성칠이 고개를 끄덕인다. 둘이 걷는다."}],next:"d7_14"},L1={panorama:"/panorama/d7_14_evening_bonggil.jpg",narrative:`저녁. 봉길 아저씨가 혼자 먹는다.
만술이 다가간다. 옆에 앉는다.
아무 말 없이 같이 먹는다.
봉길 아저씨가 다 먹고 일어나려다 — 멈춘다.
만술을 본다.
그리고 말한다.
"잘 먹어라."
그게 다다. 봉길 아저씨가 일어난다. 만술이 그 뒷모습을 본다.
잘 먹어라. 그게 오늘 봉길 아저씨가 만술한테 한 말 전부다.
그런데 오래 남는다.`,next:"d7_15"},U1={panorama:"/panorama/d7_15_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
돌아왔다. 그 말이.`,choices:[{label:'A. "예." 한다',goto:"d7_16"},{label:"B. 아무 말 안 한다",goto:"d7_16"}]},I1={panorama:"/panorama/d7_15_tent_night.jpg",narrative:"어느 쪽이든 — 봉길 아저씨가 돌아눕는다. 만술이 천장을 본다.",next:"d7_end"},N1={panorama:"/panorama/d7_end_pocket_rice.jpg",narrativeVariants:[{condition:{riceKept:{gte:1}},text:`만술이 눈을 감는다. 주머니에 손을 넣는다. 쌀알. 아직 있다. 손가락으로 굴린다.
2주일이 지났다.
앞사람이 사라졌다. 재복이라는 이름이 생겼다. 성칠이 생겼다. 봉길 아저씨가 — 달라졌다.
그 달라짐이 언제부터인지 모른다. 어느 날 보니까 — 없어진 거다. 그 사람이.
만술이 눈을 감는다. 페이드 아웃.

2주차 끝.`},{condition:{},text:`만술이 눈을 감는다.
2주일이 지났다.
앞사람이 사라졌다. 재복이라는 이름이 생겼다. 성칠이 생겼다. 봉길 아저씨가 — 달라졌다.
그 달라짐이 언제부터인지 모른다. 어느 날 보니까 — 없어진 거다. 그 사람이.
만술이 눈을 감는다. 페이드 아웃.

2주차 끝.`}],next:"d6_01"},B1={panorama:"/panorama/d6_01_tent_morning.jpg",narrative:`3주차 — 감당한다.

아침. 만술이 눈을 뜬다.
몸이 — 안 아프다. 아픈 게 없어진 게 아니라 — 아픔이 그냥 몸의 일부가 됐다.
앞사람이 말했던 것. 익숙해지면 그게 더 나쁜 거야.
이제 완전히 안다.`,next:"d6_02"},F1={panorama:"/panorama/d6_02_morning_seongchil.jpg",narrative:`성칠이 옆에 앉는다. 건빵을 물에 적신다. 만술도 적신다.
성칠이 말한다. "일주일 남았다."
만술이 고개를 끄덕인다.
성칠이 말한다. "그 다음엔 어떻게 되는 거야."`,choices:[{label:'A. "집에 가겠지." 한다',goto:"d6_03",condition:{knowsSeongchil:{gte:1}}},{label:'B. "모르지." 한다',goto:"d6_03",condition:{knowsSeongchil:{gte:1}}},{label:'C. "또 있겠지." 한다',goto:"d6_03",condition:{knowsSeongchil:{gte:1}},effect:{saidThereWillBeMoreD6:1}}]},O1={panorama:"/panorama/d6_02_morning_seongchil.jpg",narrativeVariants:[{condition:{saidThereWillBeMoreD6:{gte:1}},text:"성칠이 만술을 본다. 오래. 그리고 건빵을 씹는다. 아무 말 안 한다."},{condition:{},text:"성칠이 건빵을 씹는다."}],next:"d6_04"},k1={panorama:"/panorama/d6_04_bonggil_eat.jpg",narrative:`봉길 아저씨가 혼자 앉아서 밥을 먹는다.
만술이 다가가서 옆에 앉는다.
봉길 아저씨가 보지 않는다. 만술도 보지 않는다.
그냥 같이 먹는다.
다 먹고 봉길 아저씨가 일어난다. 아무 말 없다.
만술이 그 뒷모습을 본다.
이제는 — 그냥 본다. 뭔가를 기대하지 않는다.
그게 더 편한 건지 더 슬픈 건지 모른다.`,next:"d6_05"},V1={panorama:"/panorama/d6_05_load_ammo.jpg",narrative:`오늘 짐은 탄약 상자.
만술이 맨다. 손이 기억한다. 자동이다.
셋이 나란히 선다.
줄이 출발한다.
그냥 출발한다. 이제 출발은 그냥 출발이다.`,next:"d6_06"},z1={panorama:"/panorama/d6_06_ascent_open_sky.jpg",narrative:`오늘 루트는 처음 가는 길이다. 나무가 없다. 탁 트여 있다.
하늘이 크다.
만술이 올라가면서 하늘을 본다. 오랜만에 하늘을 봤다.`,choices:[{label:"A. 잠깐 보고 발을 본다",goto:"d6_07"},{label:"B. 걸으면서 계속 하늘을 본다",goto:"d6_07"},{label:"C. 멈춰서 본다 — 봉길 아저씨가 지나친다",goto:"d6_07",effect:{stoppedForSkyD6:1}}]},H1={panorama:"/panorama/d6_06_ascent_open_sky.jpg",narrativeVariants:[{condition:{stoppedForSkyD6:{gte:1}},text:`봉길 아저씨가 만술 옆을 지나친다. 보지 않는다.
만술이 하늘을 본다. 구름이 간다. 어디로 가는지 모른다. 전장 위로도 가겠지. 고향 위로도 가겠지.`},{condition:{},text:"만술이 걷는다. 하늘이 크다."}],next:"d6_08"},G1={panorama:"/panorama/d6_08_medic_passing.jpg",narrative:`쉬는 시간. 의무병이 지나간다. 부상병을 지고 간다.
만술이 본다. 얼굴이 안 보인다.
재복인지 아닌지 모른다.`,choices:[{label:"A. 보려 한다 — 얼굴을 확인하려",goto:"d6_09",condition:{knowsJaebok:{gte:1}},effect:{triedToSeeJaebokD6:1}},{label:"B. 그냥 본다",goto:"d6_09"},{label:"C. 안 본다",goto:"d6_09"}]},W1={panorama:"/panorama/d6_08_medic_passing.jpg",narrativeVariants:[{condition:{triedToSeeJaebokD6:{gte:1}},text:`얼굴이 안 보인다. 너무 빠르게 지나간다. 재복인지 아닌지 끝내 모른다.
만술이 그 뒷모습을 본다.`},{condition:{},text:"만술이 그 부상병을 잠시 보다가 시선을 돌린다."}],next:"d6_10"},j1={panorama:"/panorama/d6_10_summit_smoke.jpg",narrative:`정상. 연기를 센다. 오늘은 한 줄기.
며칠 전에 다섯이었는데.
만술이 센다. 하나.
그게 다다.`,choices:[{label:'A. "오늘 하나야." 한다',goto:"d6_11",condition:{knowsSeongchil:{gte:1}},effect:{toldSeongchilOneSmokeD6:1}},{label:"B. 혼자 센다",goto:"d6_11"}]},X1={panorama:"/panorama/d6_10_summit_smoke.jpg",narrativeVariants:[{condition:{toldSeongchilOneSmokeD6:{gte:1}},text:`성칠이 그 방향을 본다. "줄었네."
만술이 고개를 끄덕인다.`},{condition:{},text:"만술이 혼자 그 한 줄기 연기를 본다."}],next:"d6_12"},q1={panorama:"/panorama/d6_12_descent_us_soldiers.jpg",narrative:`내려오는 길. 미군 둘이 올라온다. 반대 방향.
지나치면서 하나가 만술한테 뭔가 말한다. 못 알아듣는다.
그냥 지나친다.`,choices:[{label:"A. 돌아본다",goto:"d6_13",effect:{lookedBackUSD6:1}},{label:"B. 그냥 내려간다",goto:"d6_13"}]},Y1={panorama:"/panorama/d6_12_descent_us_soldiers.jpg",narrativeVariants:[{condition:{lookedBackUSD6:{gte:1}},text:`미군들이 올라가고 있다. 저 위에 뭐가 있는지 모른다.
만술이 그 등을 보다가 내려간다.`},{condition:{},text:"만술이 그냥 내려간다."}],next:"d6_14"},K1={panorama:"/panorama/d6_14_afternoon_smell.jpg",narrative:`오후. 오늘 오후 루트에서 냄새가 난다. 탄 냄새가 아니다.
썩는 냄새다.
지게꾼들이 다 안다. 아무도 말 안 한다.`,choices:[{label:"A. 숨을 참는다",goto:"d6_15"},{label:"B. 그냥 쉰다 — 익숙해지려",goto:"d6_15"},{label:"C. 봉길 아저씨를 본다",goto:"d6_15",effect:{watchedBonggilSmellD6:1}}]},$1={panorama:"/panorama/d6_14_afternoon_smell.jpg",narrativeVariants:[{condition:{watchedBonggilSmellD6:{gte:1}},text:`봉길 아저씨가 그냥 걷는다. 숨을 참는 것 같지도 않다. 그냥 걷는다.
만술이 그걸 본다. 그리고 숨을 참는 걸 멈춘다.`},{condition:{},text:"만술이 그 냄새를 견딘다."}],next:"d6_16"},Z1={panorama:"/panorama/d6_16_afternoon_summit_empty.jpg",narrative:`정상. 오늘 오후 정상엔 아무것도 없다. 군인도 없다. 미군도 없다.
그냥 하늘이다.
만술이 선다.
멀리 — 마을들. 길들. 산들. 전장이 어딘지 모른다. 다 같이 보인다.`,choices:[{label:"A. 짐 내려놓고 바로 내려간다",goto:"d6_17"},{label:"B. 잠깐 선다",goto:"d6_17"},{label:"C. 한참 선다",goto:"d6_17",effect:{stoodLongD6:1}}]},J1={panorama:"/panorama/d6_16_afternoon_summit_empty.jpg",narrativeVariants:[{condition:{stoodLongD6:{gte:1}},text:"아무도 재촉하지 않는다. 만술이 한참 선다. 바람이 분다. 짐이 없는 것처럼 서 있다. 잠깐. 그리고 내려간다."},{condition:{},text:"만술이 내려간다."}],next:"d6_18"},Q1={panorama:"/panorama/d6_18_evening_rice.jpg",narrative:`오늘 저녁은 쌀밥이다. 처음으로 쌀밥이다.
성칠이 눈이 커진다. "쌀밥이다."
만술이 한 숟갈 뜬다. 어머니 집 밥이랑 다르다. 그런데 쌀이다.`,choices:[{label:"A. 천천히 먹는다",goto:"d6_19",effect:{ateSlowlyD6:1}},{label:"B. 빨리 먹는다",goto:"d6_19"}]},tv={panorama:"/panorama/d6_18_evening_rice.jpg",narrativeVariants:[{condition:{ateSlowlyD6:{gte:1}},text:`성칠이 만술을 본다. "왜 그렇게 먹어." 만술이 말한다. "그냥."
성칠이 고개를 끄덕이고 자기도 천천히 먹는다.`},{condition:{},text:"만술이 밥을 먹는다."}],next:"d6_20"},ev={panorama:"/panorama/d6_20_evening_bonggil_rice.jpg",narrative:`봉길 아저씨도 쌀밥을 먹는다. 혼자.
쌀밥인데 — 건빵 먹는 것처럼 먹는다.`,choices:[{label:"A. 그냥 본다",goto:"d6_21"},{label:"B. 다가간다",goto:"d6_21",effect:{approachedBonggilRiceD6:1}}]},nv={panorama:"/panorama/d6_20_evening_bonggil_rice.jpg",narrativeVariants:[{condition:{approachedBonggilRiceD6:{gte:1}},text:`봉길 아저씨 옆에 앉는다. 봉길 아저씨가 다 먹는다. 일어나려다 — 만술의 밥그릇을 본다.
아무 말 안 한다. 일어난다.`},{condition:{},text:"만술이 멀리서 그 모습을 본다."}],next:"d6_end"},iv={panorama:"/panorama/d6_end_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
만술이 눈을 감는다.
오늘 하루. 하늘을 봤다. 쌀밥을 먹었다. 썩는 냄새를 맡았다. 재복인지 아닌지 모르는 부상병을 봤다.
다 같이 오늘이다.

D-6이 끝났다.`,next:"d5_01"},av={panorama:"/panorama/d5_01_dawn_artillery.jpg",narrative:`새벽. 포 소리에 눈이 떠진다. 가깝다.
이번엔 아무도 안 일어난다. 다들 그냥 눈만 뜨고 있다.
소리가 멈춘다.
다시 잔다.
이제 그 소리에 익숙해졌다. 그게 더 나쁜 거다.`,next:"d5_02"},ov={panorama:"/panorama/d5_02_senior_porter.jpg",narrative:`선배 지게꾼이 만술 옆에 앉는다.
"며칠 됐어?"
"열여섯이요."
선배 지게꾼이 고개를 끄덕인다.`,choices:[{label:'A. "아저씨는요?" 한다',goto:"d5_03",effect:{askedSeniorD5:1}},{label:"B. 그냥 먹는다",goto:"d5_03"}]},rv={panorama:"/panorama/d5_02_senior_porter.jpg",narrativeVariants:[{condition:{askedSeniorD5:{gte:1}},text:`선배 지게꾼이 말한다. "서른둘."
만술이 그 숫자를 받는다. 서른두 날.`},{condition:{},text:"만술이 건빵을 씹는다."}],next:"d5_04"},sv={panorama:"/panorama/d5_04_wounded_again.jpg",narrative:`하사가 만술을 부른다. 또 부상병이다.
만술이 굳지 않는다. 이번엔.
그냥 간다.
부상병을 본다. 재복이 아니다. 처음 보는 얼굴. 의식이 없다.
만술이 지게에 묶는다. 익숙하게.`,choices:[{label:"A. 군복에서 이름을 찾는다",goto:"d5_05",effect:{lookedForNameD5:1}},{label:"B. 그냥 맨다",goto:"d5_05"}]},cv={panorama:"/panorama/d5_04_wounded_again.jpg",narrativeVariants:[{condition:{lookedForNameD5:{gte:1}},text:`이름표가 없다. 아니면 피에 가려져 있다.
만술이 그냥 맨다. 이름 없이.`},{condition:{},text:"만술이 그냥 멘다."}],next:"d5_06"},lv={panorama:"/panorama/d5_06_ascent_nameless.jpg",narrative:`오르막. 이번 부상병은 말이 없다. 의식이 없으니까.
숨소리만 들린다.
재복이 말하던 것들이 생각난다. 조심해. 여기 돌 있어.
이번엔 아무 말 없이 만술이 혼자 피한다.`,choices:[{label:"A. 아무 말 안 한다",goto:"d5_07"},{label:'B. "조심할게요." 한다 — 듣지 못할 텐데',goto:"d5_07",condition:{knowsJaebok:{gte:1}},effect:{saidCarefulD5:1}}]},dv={panorama:"/panorama/d5_06_ascent_nameless.jpg",narrativeVariants:[{condition:{saidCarefulD5:{gte:1}},text:"만술이 걸으면서 그 말을 한다. 아주 낮게. 아무도 못 듣는다. 부상병도 못 듣는다. 그냥 한다."},{condition:{},text:"만술이 묵묵히 걷는다."}],next:"d5_08"},hv={panorama:"/panorama/d5_08_rest_bonggil.jpg",narrative:`쉬는 시간. 봉길 아저씨가 지게꾼 하나한테 말한다. 짧게.
그 지게꾼이 고개를 끄덕이고 간다.
만술이 그걸 본다.`,choices:[{label:"A. 봉길 아저씨한테 간다",goto:"d5_09",effect:{wentToBonggilD5:1}},{label:"B. 그냥 부상병 옆에 앉는다",goto:"d5_09"}]},uv={panorama:"/panorama/d5_08_rest_bonggil.jpg",narrativeVariants:[{condition:{wentToBonggilD5:{gte:1}},text:`봉길 아저씨가 만술을 본다. "왜."
만술이 말하려다 — 안 한다. "아니에요."
봉길 아저씨가 돌아선다. 만술이 돌아온다. 부상병 숨소리가 들린다.`},{condition:{},text:"만술이 부상병 옆에 앉는다. 숨소리를 듣는다."}],next:"d5_10"},fv={panorama:"/panorama/d5_10_summit_handoff.jpg",narrative:`정상. 의무병이 부상병을 받아간다.
만술의 등이 가벼워진다. 이제 그 가벼움에도 익숙하다.
가벼워지면서 동시에 — 뭔가 빠져나간다. 그게 뭔지는 모른다.`,choices:[{label:"A. 본다",goto:"d5_11",effect:{watchedWoundedCarriedD5:1}},{label:"B. 안 본다",goto:"d5_11"}]},pv={panorama:"/panorama/d5_10_summit_handoff.jpg",narrativeVariants:[{condition:{watchedWoundedCarriedD5:{gte:1}},text:`이름 없는 부상병이 실려간다. 만술이 그 뒷모습을 본다.
이름을 모른다. 이름이 없는 건지. 못 찾은 건지.`},{condition:{},text:"만술이 다음 짐을 챙긴다."}],next:"d5_12"},mv={panorama:"/panorama/d5_12_descent_seongchil.jpg",narrative:`성칠이 옆에 온다.
"오늘 또 사람 졌어?"
만술이 고개를 끄덕인다.
성칠이 말한다. "이름은?"`,choices:[{label:'A. "몰라." 한다',goto:"d5_13",condition:{knowsSeongchil:{gte:1}}},{label:'B. "없었어." 한다',goto:"d5_13",condition:{knowsSeongchil:{gte:1}},effect:{saidNoNameD5:1}},{label:"C. 아무 말 안 한다",goto:"d5_13"}]},_v={panorama:"/panorama/d5_12_descent_seongchil.jpg",narrativeVariants:[{condition:{saidNoNameD5:{gte:1}},text:`성칠이 걷는다. 한참 후 말한다. "그게 더 나을 수도 있어."
만술이 그 말을 씹는다. D-11에서 성칠이 했던 말이랑 같은 말이다. 그때랑 지금이랑 — 그 말이 같게 들리는지 다르게 들리는지.`},{condition:{},text:"성칠이 더 말하지 않는다."}],next:"d5_14"},gv={panorama:"/panorama/d5_14_evening_bonggil.jpg",narrative:`저녁. 봉길 아저씨가 혼자 먹는다.
만술이 다가가서 앉는다. 봉길 아저씨가 보지 않는다.
만술이 먹는다. 봉길 아저씨가 먹는다.
봉길 아저씨가 일어나면서 만술 밥그릇을 본다.
어제도 그랬다.
왜 보는지 모른다. 그냥 본다. 그게 다다.`,next:"d5_15"},vv={panorama:"/panorama/d5_15_night_seongchil_outside.jpg",narrative:`성칠이 말한다.
"집에 가면 뭐 할 거야."`,choices:[{label:'A. "논에 가야지." 한다',goto:"d5_16",condition:{knowsSeongchil:{gte:1}},effect:{saidPaddyD5:1}},{label:'B. "모르겠어." 한다',goto:"d5_16",condition:{knowsSeongchil:{gte:1}}},{label:'C. "아직 거기까지 생각 못 했어." 한다',goto:"d5_16",condition:{knowsSeongchil:{gte:1}}}]},xv={panorama:"/panorama/d5_15_night_seongchil_outside.jpg",narrativeVariants:[{condition:{saidPaddyD5:{gte:1}},text:`성칠이 말한다. "나는 형 얼굴 보고 싶다."
둘이 잠깐 있는다. 하늘. 별. 만술이 D-21 새벽 별을 생각한다.`},{condition:{},text:"성칠이 하늘을 본다."}],next:"d5_17"},Sv={panorama:"/panorama/d5_17_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."`,choices:[{label:'A. "예." 한다',goto:"d5_end",effect:{saidYesD5:1}},{label:"B. 아무 말 안 한다",goto:"d5_end"}]},Mv={panorama:"/panorama/d5_17_tent_night.jpg",narrativeVariants:[{condition:{saidYesD5:{gte:1}},text:`봉길 아저씨가 돌아눕는다. 성칠이 말한다. 아주 낮게. "잘 자." 만술한테.
만술이 말한다. "응."
봉길 아저씨한테는 못 하는 말을 성칠한테는 한다.

D-5가 끝났다.`},{condition:{},text:`봉길 아저씨가 돌아눕는다. 만술이 눈을 감는다.

D-5가 끝났다.`}],next:"d4_01"},bv={panorama:"/panorama/d4_01_rain_morning.jpg",narrative:`비가 온다. 아침부터.
텐트 안이 눅눅하다. 냄새가 다르다.
성칠이 만술을 깨운다. "비 온다."
만술이 눈을 뜬다. "알아."`,next:"d4_02"},Ev={panorama:"/panorama/d4_02_rain_bonggil.jpg",narrative:`봉길 아저씨가 텐트 밖에 있다. 비를 맞으면서.
만술이 나간다.
"아저씨, 텐트 안으로 들어오세요."
봉길 아저씨가 만술을 본다. 아무 말 안 한다. 그냥 서 있는다.`,choices:[{label:"A. 텐트 안으로 들어간다",goto:"d4_03"},{label:"B. 봉길 아저씨 옆에 서 있는다",goto:"d4_03",effect:{stoodInRainD4:1}}]},yv={panorama:"/panorama/d4_02_rain_bonggil.jpg",narrativeVariants:[{condition:{stoodInRainD4:{gte:1}},text:`둘이 비를 맞으면서 서 있는다. 성칠이 텐트에서 나온다. 둘을 본다. 그리고 옆에 선다.
셋이 비를 맞는다. 아무 말 없이.`},{condition:{},text:"만술이 텐트 안으로 들어간다."}],next:"d4_04"},Av={panorama:"/panorama/d4_04_load_rain.jpg",narrative:`비 속에서 짐을 맨다. 짐이 젖는다. 무거워진다.
만술이 끈을 맨다. 젖은 끈이 미끄럽다.`,choices:[{label:"A. 그냥 맨다 — 미끄러워도",goto:"d4_05"},{label:"B. 끈을 말려서 맨다 — 시간이 걸린다",goto:"d4_05",effect:{driedStrapD4:1}}]},Tv={panorama:"/panorama/d4_05_ascent_mud.jpg",narrative:`비가 오니까 길이 진흙이다.
발이 빠진다. 짐이 흔들린다.
앞에 봉길 아저씨가 간다. 진흙에서도 빠르다.
만술이 그 발자국을 밟으면서 간다.`,choices:[{label:"A. 밟는다 — 조금 덜 빠진다",goto:"d4_06",effect:{followedFootprintsD4:1}},{label:"B. 자기 길로 간다",goto:"d4_06"}]},wv={panorama:"/panorama/d4_06_mid_slip.jpg",narrative:`고개 중턱. 지게꾼 하나가 미끄러진다. 짐이 쏟아진다.
봉길 아저씨가 그걸 본다. 지나친다.
만술이 본다.`,choices:[{label:"A. 달려가서 잡아준다",goto:"d4_07",effect:{helpedSlippedPorterD4:1}},{label:"B. 봉길 아저씨를 본다",goto:"d4_07"},{label:"C. 지나친다",goto:"d4_07",effect:{passedByD4:1}}]},Cv={panorama:"/panorama/d4_06_mid_slip.jpg",narrativeVariants:[{condition:{helpedSlippedPorterD4:{gte:1}},text:`만술이 그 지게꾼을 잡아준다. 진흙 속에서 같이 버틴다. 그 지게꾼이 일어난다. 아무 말 없이 고개를 숙인다.
만술이 봉길 아저씨 뒷모습을 본다.`},{condition:{passedByD4:{gte:1}},text:"만술이 지나친다. 봉길 아저씨 발자국이 앞에 있다."},{condition:{},text:"만술이 봉길 아저씨의 뒷모습을 본다."}],next:"d4_08"},Rv={panorama:"/panorama/d4_08_summit_rain.jpg",narrative:`정상. 비가 더 세진다.
만술이 연기를 찾는다. 보이지 않는다. 비 때문에.`,choices:[{label:"A. 그냥 내려간다",goto:"d4_09"},{label:"B. 비 속에서 그 방향을 본다",goto:"d4_09",effect:{lookedInRainD4:1}}]},Dv={panorama:"/panorama/d4_08_summit_rain.jpg",narrativeVariants:[{condition:{lookedInRainD4:{gte:1}},text:"아무것도 안 보인다. 그냥 회색이다. 만술이 그 회색을 본다."},{condition:{},text:"만술이 바로 내려간다."}],next:"d4_10"},Pv={panorama:"/panorama/d4_10_descent_footprints.jpg",narrative:`내려오는 길. 봉길 아저씨가 앞에서 빠르게 내려간다.
만술이 그 발자국을 보면서 내려온다.
진흙에 찍힌 발자국. 봉길 아저씨 것.`,choices:[{label:"A. 계속 밟는다",goto:"d4_11"},{label:"B. 어느 순간 멈추고 자기 길로 간다",goto:"d4_11",effect:{tookOwnPathD4:1}}]},Lv={panorama:"/panorama/d4_10_descent_footprints.jpg",narrativeVariants:[{condition:{tookOwnPathD4:{gte:1}},text:"만술이 봉길 아저씨 발자국 옆으로 걷는다. 평행하게. 같은 방향. 같은 길. 근데 다른 발자국."},{condition:{},text:"만술이 그 발자국을 계속 밟는다."}],next:"d4_12"},Uv={panorama:"/panorama/d4_12_camp_wet.jpg",narrative:`성칠이 만술한테 헝겊을 건넨다. "닦아."
만술이 받는다.
봉길 아저씨가 젖은 채로 앉는다. 아무도 헝겊을 주지 않는다.`,choices:[{label:"A. 건넨다",goto:"d4_13",effect:{offeredClothD4:1}},{label:"B. 안 건넨다",goto:"d4_13"}]},Iv={panorama:"/panorama/d4_12_camp_wet.jpg",narrativeVariants:[{condition:{offeredClothD4:{gte:1}},text:`봉길 아저씨가 만술을 본다. 헝겊을 받는다. 아무 말 안 한다. 닦는다.
D-19에서 봉길 아저씨가 만술한테 헝겊을 줬던 것. 지금은 반대다.`},{condition:{},text:"봉길 아저씨가 젖은 채로 앉아 있다."}],next:"d4_14"},Nv={panorama:"/panorama/d4_14_evening_three.jpg",narrative:`저녁. 비가 그쳤다.
오늘 저녁은 죽이다. 뜨겁다.
만술이 먹는다. 성칠이 먹는다. 봉길 아저씨가 먹는다.
셋이 나란히 앉아서 먹는다. 아무 말 없이.
처음으로 — 셋이 나란히 앉아서 먹는다.
봉길 아저씨가 먼저 다 먹는다. 일어나려다 — 만술을 본다. 성칠을 본다.
그리고 앉는다. 봉길 아저씨가 앉는다. 오늘은. 그냥.`,next:"d4_15"},Bv={panorama:"/panorama/d4_14_evening_three.jpg",narrative:`셋이 앉아 있는다.
봉길 아저씨가 말한다. 아무한테도 아닌 것처럼.
"비 오는 날엔 벼가 잘 큰다."
그게 다다. 봉길 아저씨가 일어난다. 만술이 그 말을 받는다. 성칠도. 아무도 대답 안 한다. 그냥 받는다.`,next:"d4_end"},Fv={panorama:"/panorama/d4_end_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
만술이 눈을 감는다.
비 오는 날엔 벼가 잘 큰다.
그 말이 어둠 속에 있다.

D-4가 끝났다.`,next:"d3_01"},Ov={panorama:"/panorama/d3_01_clear_morning.jpg",narrative:`아침. 맑다. 어제 비가 씻어냈다. 공기가 다르다.
만술이 눈을 뜬다. 봉길 아저씨가 텐트 안에 있다.
아직 안 일어났다.
만술이 그걸 본다. 이상하다. 항상 먼저 일어났는데.`,choices:[{label:'A. "아저씨, 일어나야 해요." 한다',goto:"d3_02",effect:{saidWakeUpD3:1}},{label:"B. 그냥 나간다",goto:"d3_02"}]},kv={panorama:"/panorama/d3_01_clear_morning.jpg",narrativeVariants:[{condition:{saidWakeUpD3:{gte:1}},text:`봉길 아저씨가 눈을 뜬다. 만술을 본다. 잠깐. 그리고 일어난다. 아무 말 안 한다.
그런데 만술이 그 눈을 본다. 어젯밤 잠을 못 잔 눈이다.`},{condition:{},text:"만술이 먼저 텐트를 나선다."}],next:"d3_03"},Vv={panorama:"/panorama/d3_03_morning_seongchil.jpg",narrative:`성칠이 말한다. "나흘 남았다."
만술이 고개를 끄덕인다.
성칠이 말한다. "세면 더 빨리 간다."`,choices:[{label:"A. 센다 — 습관처럼",goto:"d3_04",effect:{countedDaysD3:1}},{label:"B. 안 센다",goto:"d3_04"}]},zv={panorama:"/panorama/d3_04_load_ammo.jpg",narrative:`오늘 짐. 탄약 상자.
만술이 맨다.
그런데 오늘은 — 맨 다음에 잠깐 서 있는다.
이 짐이 어디로 가는지. 이 탄약이 누구한테 쓰이는지.`,choices:[{label:"A. 그냥 걷는다",goto:"d3_05"},{label:"B. 잠깐 생각한다 — 그리고 걷는다",goto:"d3_05",effect:{thoughtAboutAmmoD3:1}}]},Hv={panorama:"/panorama/d3_04_load_ammo.jpg",narrativeVariants:[{condition:{thoughtAboutAmmoD3:{gte:1}},text:"만술이 그 생각을 하다가 걷는다. 뭔가 달라지는 건 없다. 그런데 그 생각이 있었다."},{condition:{},text:"만술이 그냥 걷는다."}],next:"d3_06"},Gv={panorama:"/panorama/d3_06_ascent_seongchil.jpg",narrative:`오늘 성칠이 만술 옆에서 걷는다.
한참 오르다가 성칠이 말한다.
"만술아."
처음으로 이름을 불렀다.`,choices:[{label:'A. "응." 한다',goto:"d3_07",condition:{knowsSeongchil:{gte:1}}},{label:"B. 성칠을 본다",goto:"d3_07",condition:{knowsSeongchil:{gte:1}},effect:{lookedAtSeongchilD3:1}}]},Wv={panorama:"/panorama/d3_06_ascent_seongchil.jpg",narrativeVariants:[{condition:{lookedAtSeongchilD3:{gte:1}},text:`성칠이 앞을 보면서 걷는다. 만술이 성칠을 본다. 성칠이 말한다. "아무것도 아니야." 그리고 계속 걷는다.
만술도 걷는다. 그냥 이름을 불렀다. 그게 다다.`},{condition:{},text:"둘이 걷는다."}],next:"d3_08"},jv={panorama:"/panorama/d3_08_rest_bonggil.jpg",narrative:`쉬는 시간. 봉길 아저씨가 혼자 앉아 있다.
만술이 다가간다. 옆에 앉는다.
봉길 아저씨가 보지 않는다.
만술이 말한다. "아저씨."
봉길 아저씨가 말한다. "왜."
만술이 말한다. "이틀 있으면 우리 고개 하나만 더 오르면 된대요."
봉길 아저씨가 침묵한다.
그리고 말한다. "그래."
그게 다다. 그런데 오래 남는다.`,next:"d3_09"},Xv={panorama:"/panorama/d3_09_summit_smoke.jpg",narrative:`정상. 오늘 연기는 두 줄기.
만술이 센다. 하나. 둘.
성칠이 옆에서 본다. "세고 있어?"
만술이 고개를 끄덕인다.
성칠이 말한다. "처음부터 셌어?"`,choices:[{label:'A. "응." 한다',goto:"d3_10",condition:{knowsSeongchil:{gte:1}}},{label:'B. "D-16부터." 한다',goto:"d3_10",condition:{knowsSeongchil:{gte:1}},effect:{saidSinceD16:1}},{label:'C. "모르겠어." 한다',goto:"d3_10",condition:{knowsSeongchil:{gte:1}}}]},qv={panorama:"/panorama/d3_09_summit_smoke.jpg",narrativeVariants:[{condition:{saidSinceD16:{gte:1}},text:"성칠이 고개를 끄덕인다. 더 묻지 않는다."},{condition:{},text:"성칠이 더 묻지 않는다."}],next:"d3_11"},Yv={panorama:"/panorama/d3_11_descent_strange.jpg",narrative:`내려오는 길. 뭔가 이상하다.
뭔지 모르는데 — 이상하다.`,choices:[{label:'A. 성칠한테 "이상하지 않아?" 한다',goto:"d3_12",condition:{knowsSeongchil:{gte:1}},effect:{askedStrangeD3:1}},{label:"B. 봉길 아저씨를 본다",goto:"d3_12"},{label:"C. 그냥 내려간다",goto:"d3_12"}]},Kv={panorama:"/panorama/d3_11_descent_strange.jpg",narrativeVariants:[{condition:{askedStrangeD3:{gte:1}},text:`성칠이 주위를 본다. "뭐가?" 만술이 말한다. "모르겠어."
성칠이 걷는다. "원래 이상한 데야." 만술이 그 말을 씹으면서 내려간다.`},{condition:{},text:"만술이 그냥 내려간다."}],next:"d3_13"},$v={panorama:"/panorama/d3_13_evening_us.jpg",narrative:`저녁. 미군들이 많아졌다. 오늘 새로 온 것 같다.
하사가 군인들이랑 뭔가 이야기한다. 빠르게.`,choices:[{label:"A. 본다",goto:"d3_14"},{label:'B. 성칠한테 묻는다 — "뭔가 있나봐."',goto:"d3_14",condition:{knowsSeongchil:{gte:1}}},{label:"C. 봉길 아저씨를 본다",goto:"d3_14",effect:{watchedBonggilUSD3:1}}]},Zv={panorama:"/panorama/d3_13_evening_us.jpg",narrativeVariants:[{condition:{watchedBonggilUSD3:{gte:1}},text:`봉길 아저씨가 그 장면을 보고 있다. 표정이 없다. 그냥 본다.
만술이 봉길 아저씨를 보다가 하사를 본다. 뭔가 있다.`},{condition:{},text:"만술이 그 장면을 본다. 뭔가 있다."}],next:"d3_15"},Jv={panorama:"/panorama/d3_15_night_route_changes.jpg",narrative:`텐트 밖. 성칠이 말한다.
"내일 루트 바뀐대."
만술이 본다.
성칠이 말한다. "들었어. 군인들이 얘기하는 거."`,choices:[{label:'A. "어디로?" 한다',goto:"d3_16",condition:{knowsSeongchil:{gte:1}},effect:{askedWhereD3:1}},{label:'B. "그래서?" 한다',goto:"d3_16",condition:{knowsSeongchil:{gte:1}}},{label:"C. 아무 말 안 한다",goto:"d3_16"}]},Qv={panorama:"/panorama/d3_15_night_route_changes.jpg",narrativeVariants:[{condition:{askedWhereD3:{gte:1}},text:`성칠이 말한다. "저 고개."
저 고개가 어딘지는 말 안 한다. 만술도 안 묻는다. 저 고개.`},{condition:{},text:"성칠이 더 말하지 않는다."}],next:"d3_17"},tx={panorama:"/panorama/d3_17_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
봉길 아저씨가 말한다. "자라."
만술이 눈을 감는다.
저 고개.`,choices:[{label:"A. 그냥 잔다",goto:"d3_end"},{label:"B. 저 고개를 생각하다가 잔다",goto:"d3_end",effect:{thoughtAboutPassD3:1}}]},ex={panorama:"/panorama/d3_17_tent_night.jpg",narrativeVariants:[{condition:{thoughtAboutPassD3:{gte:1}},text:`만술이 저 고개를 생각한다. 고개는 고개다. 그런데 — 성칠의 말투가 이상했다. 잠이 늦게 온다.

D-3이 끝났다.`},{condition:{},text:`만술이 눈을 감는다.

D-3이 끝났다.`}],next:"d2_01"},nx={panorama:"/panorama/d2_01_camp_tense.jpg",narrative:`아침. 캠프 분위기가 다르다.
D-12때랑 비슷한데 — 더하다.
군인들이 빠르게 움직인다. 말이 없다.
하사가 지게꾼들을 모은다.
"오늘 루트 다르다. 빠르게 움직여. 뒤처지면 안 된다."
그게 다다.`,next:"d2_02"},ix={panorama:"/panorama/d2_02_load_bonggil.jpg",narrative:`성칠이 만술한테 낮게 말한다. "어제 말한 고개 맞는 것 같아."
만술이 고개를 끄덕인다.
봉길 아저씨가 짐을 맨다. 빠르게. 표정이 없다.`,choices:[{label:'A. "아저씨, 오늘 루트 바뀐대요." 한다',goto:"d2_03",effect:{toldBonggilRouteD2:1}},{label:"B. 그냥 짐을 맨다",goto:"d2_03"}]},ax={panorama:"/panorama/d2_02_load_bonggil.jpg",narrativeVariants:[{condition:{toldBonggilRouteD2:{gte:1}},text:`봉길 아저씨가 말한다. "안다."
이미 알고 있었다. 언제부터 알았는지는 모른다.`},{condition:{},text:"봉길 아저씨가 말없이 짐을 맨다."}],next:"d2_04"},ox={panorama:"/panorama/d2_04_departure.jpg",narrative:`줄이 선다. 오늘은 군인이 더 많다. 앞에도. 뒤에도.
만술이 줄 중간에 선다. 봉길 아저씨가 앞에. 성칠이 뒤에.
출발.`,next:"d2_05"},rx={panorama:"/panorama/d2_05_ascent_steep.jpg",narrative:"오늘 길은 처음 가는 길이다. 가파르다. 어제까지 오른 어떤 고개보다.",choices:[{label:"A. 리듬을 찾는다 — 하나. 둘.",goto:"d2_06"},{label:"B. 그냥 오른다 — 생각 없이",goto:"d2_06"},{label:"C. 봉길 아저씨 발자국을 본다",goto:"d2_06"}]},sx={panorama:"/panorama/d2_06_gunfire.jpg",narrative:`고개 중턱. 총 소리가 난다. 가깝다.
"엎드려."
다들 엎드린다.
이번엔 — 길다. 총 소리가 계속된다.
흙 냄새.`,choices:[{label:"A. 눈을 감는다",goto:"d2_07"},{label:"B. 눈을 뜨고 앞을 본다",goto:"d2_07"},{label:"C. 봉길 아저씨를 찾는다",goto:"d2_07",effect:{lookedForBonggilD2:1}}]},cx={panorama:"/panorama/d2_06_gunfire.jpg",narrativeVariants:[{condition:{lookedForBonggilD2:{gte:1}},text:`봉길 아저씨가 앞에 엎드려 있다. 움직이지 않는다.
만술이 그 등을 본다. 짐이 올라갔다 내려간다. 숨을 쉬고 있다. 만술이 그 리듬을 본다.`},{condition:{},text:"만술이 흙바닥에 엎드려 총 소리를 듣는다."}],next:"d2_08"},lx={panorama:"/panorama/d2_06_gunfire.jpg",narrative:`성칠이 만술 옆에 있다.
성칠이 낮게 말한다. "괜찮아?"`,choices:[{label:'A. "응." 한다',goto:"d2_09",condition:{knowsSeongchil:{gte:1}}},{label:"B. 아무 말 안 한다",goto:"d2_09"},{label:"C. 성칠 손을 잡는다",goto:"d2_09",condition:{knowsSeongchil:{gte:1}},effect:{heldSeongchilHandD2:1}}]},dx={panorama:"/panorama/d2_06_gunfire.jpg",narrativeVariants:[{condition:{heldSeongchilHandD2:{gte:1}},text:`성칠이 굳는다. 1초. 그리고 잡아준다. 총 소리가 계속된다.
둘이 엎드린 채로 손을 잡고 있는다. 총 소리가 멈출 때까지.`},{condition:{},text:"둘이 엎드린 채로 총 소리를 듣는다."}],next:"d2_10"},hx={panorama:"/panorama/d2_10_after_gunfire.jpg",narrative:`총 소리가 멈춘다.
군인이 말한다. "간다."
다들 일어난다.
만술이 일어난다. 무릎이 떨린다.
봉길 아저씨가 일어난다. 안 떨린다.
성칠이 일어난다. 만술과 눈이 마주친다.
그냥 걷는다.`,next:"d2_11"},ux={panorama:"/panorama/d2_11_summit_chaos.jpg",narrative:`정상. 오늘 정상은 다르다.
군인들이 많다. 미군들도 있다. 뭔가 빠르게 움직인다.
만술이 서 있는다.
연기를 세려 하는데 — 오늘은 못 센다. 너무 정신없다.
봉길 아저씨가 만술 옆에 선다. 처음으로 — 오늘 처음으로 — 옆에 선다.
말이 없다. 만술도 말이 없다.
둘이 그 정상에서 나란히 선다.`,choices:[{label:"A. 아무 말 안 한다",goto:"d2_12"},{label:'B. "아저씨." 부른다',goto:"d2_12",effect:{calledBonggilSummitD2:1}}]},fx={panorama:"/panorama/d2_11_summit_chaos.jpg",narrativeVariants:[{condition:{calledBonggilSummitD2:{gte:1}},text:`봉길 아저씨가 만술을 본다. 만술이 말하려다 — 안 한다.
그냥 나란히 선다. 봉길 아저씨가 다시 앞을 본다. 만술도 앞을 본다. 저 아래. 작은 것들.`},{condition:{},text:"둘이 나란히 저 아래를 본다."}],next:"d2_13"},px={panorama:"/panorama/d2_13_descent_together.jpg",narrative:`내려오는 길. 봉길 아저씨가 만술 옆에서 내려온다. 자연스럽게.
아무 말 없다.
그냥 나란히 내려온다.
오늘 이게 다다. 나란히 내려온다.`,next:"d2_14"},mx={panorama:"/panorama/d2_14_evening_three.jpg",narrative:`셋이 나란히 앉는다. 자연스럽게.
봉길 아저씨. 만술. 성칠.
밥을 먹는다.
봉길 아저씨가 말한다.
"내일이다."`,choices:[{label:'A. "네." 한다',goto:"d2_15"},{label:"B. 성칠이랑 눈을 마주친다",goto:"d2_15",condition:{knowsSeongchil:{gte:1}}},{label:"C. 봉길 아저씨를 본다",goto:"d2_15",effect:{watchedBonggilTomorrowD2:1}}]},_x={panorama:"/panorama/d2_14_evening_three.jpg",narrativeVariants:[{condition:{watchedBonggilTomorrowD2:{gte:1}},text:`봉길 아저씨가 밥을 먹는다. 만술이 그 옆모습을 본다.
저 고개. 내일. 봉길 아저씨가 그걸 알고 있었다. 언제부터 알았는지 모른다. 그래서 그랬던 건지도 모른다. 아니면 아닌 건지도.`},{condition:{},text:"셋이 말없이 밥을 먹는다."}],next:"d2_16"},gx={panorama:"/panorama/d2_16_night_seongchil_scared.jpg",narrative:`텐트 밖. 성칠이 만술 옆에 앉는다.
말이 없다.
한참 있다가 성칠이 말한다. "무서워?"`,choices:[{label:'A. "응." 한다',goto:"d2_17",condition:{knowsSeongchil:{gte:1}},effect:{saidScaredYesD2:1}},{label:'B. "모르겠어." 한다',goto:"d2_17",condition:{knowsSeongchil:{gte:1}}},{label:'C. "아저씨는?" 한다',goto:"d2_17",condition:{knowsSeongchil:{gte:1}}}]},vx={panorama:"/panorama/d2_16_night_seongchil_scared.jpg",narrativeVariants:[{condition:{saidScaredYesD2:{gte:1}},text:`성칠이 말한다. "나도." 그게 다다. 둘이 앉아 있는다.
별이 있다. 만술이 D-21 새벽 별을 생각한다. 저 별이 그 별인지 아닌지 — 이제는 알 것 같다. 같은 별이다. 그냥 만술이 달라진 거다.`},{condition:{},text:"둘이 말없이 별을 본다."}],next:"d2_18"},xx={panorama:"/panorama/d2_18_tent_night.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
침묵.
봉길 아저씨가 말한다. "자라."
만술이 눈을 감는다.
내일이다.`,choices:[{label:"A. 잠이 온다",goto:"d2_end"},{label:"B. 잠이 안 온다 — 오래 누워 있는다",goto:"d2_end",effect:{stayedAwakeD2:1}}]},Sx={panorama:"/panorama/d2_18_tent_night.jpg",narrativeVariants:[{condition:{stayedAwakeD2:{gte:1},riceKept:{gte:1}},text:`만술이 오래 누워 있는다. 봉길 아저씨 숨소리. 성칠 숨소리. 둘 다 잔다. 만술만 안 잔다.
주머니에 손을 넣는다. 쌀알. 아직 있다. 손가락으로 굴린다. 하나. 둘. 하나. 둘.
어느 순간 잠든다.

D-2가 끝났다.`},{condition:{stayedAwakeD2:{gte:1}},text:`만술이 오래 누워 있는다. 봉길 아저씨 숨소리. 성칠 숨소리. 둘 다 잔다. 만술만 안 잔다.
어느 순간 잠든다.

D-2가 끝났다.`},{condition:{},text:`만술이 눈을 감는다. 곧 잠든다.

D-2가 끝났다.`}],next:"d1_01"},Mx={panorama:"/panorama/d1_01_last_morning.jpg",narrative:`아침. 만술이 눈을 뜬다.
봉길 아저씨가 있다. 텐트 안에. 성칠이 있다.
셋 다 있다.
만술이 그걸 본다.`,next:"d1_02"},bx={panorama:"/panorama/d1_02_last_breakfast.jpg",narrative:`밖. 건빵.
만술이 물에 적신다. 성칠이 물에 적신다.
봉길 아저씨가 — 물에 적신다. 처음으로.
만술이 그걸 본다. 봉길 아저씨가 건빵을 물에 적시는 것.
아무 말 안 한다. 그냥 같이 먹는다.`,next:"d1_03"},Ex={panorama:"/panorama/d1_03_load_ammo_last.jpg",narrative:`하사가 짐을 배정한다. 탄약 상자.
만술이 맨다. 마지막이다. 아마.
끈을 맨다. 처음 날이랑 같은 끈인데 — 손이 다르다.`,choices:[{label:"A. 그냥 맨다",goto:"d1_04"},{label:"B. 잠깐 손을 본다 — 굳은살이 박인 손",goto:"d1_04",effect:{lookedAtHandsD1:1}}]},yx={panorama:"/panorama/d1_03_load_ammo_last.jpg",narrativeVariants:[{condition:{lookedAtHandsD1:{gte:1}},text:"만술이 손을 본다. D-21에 논에서 쓰던 손이랑 같은 손이다. 다른 손이다."},{condition:{},text:"만술이 끈을 맨다."}],next:"d1_05"},Ax={panorama:"/panorama/d1_05_departure_last.jpg",narrative:`줄이 선다. 봉길 아저씨가 앞에. 만술이 중간에. 성칠이 뒤에.
출발.
만술이 앞을 본다. 봉길 아저씨 등.
저 등을 보면서 3주를 왔다.`,choices:[{label:"A. 그냥 본다",goto:"d1_06"},{label:"B. 기억하려 한다",goto:"d1_06",effect:{rememberedBonggilBackD1:1}}]},Tx={panorama:"/panorama/d1_06_second_bear.jpg",narrative:`고개 중턱. 아무도 없는 시간. 군인들이 앞에서 멀어졌다.
나무 사이에서 소리가 난다.
만술이 멈춘다.
무거운 발소리. 가깝다.
나무 사이에서 — 곰이 나온다. 크다.
D-15 밤보다 가깝다. 10미터.
곰이 만술을 본다.`,choices:[{label:"A. 숨는다 — 나무 뒤로",goto:"d1_07",effect:{hidFromBearD1:1}},{label:"B. 움직이지 않는다",goto:"d1_07",effect:{stillForBearD1:1}},{label:"C. 짐을 버리고 도망친다",goto:"d1_07",effect:{ranFromBearD1:1}},{label:"D. 봉길 아저씨 쪽으로 민다",goto:"d1_07",condition:{bonggilDistance:{gte:5},calledBonggilSummitD2:{gte:1},rememberedBonggilBackD1:{gte:1}},effect:{pushedTowardBonggilD1:1}}]},wx={panorama:"/panorama/d1_06_second_bear.jpg",narrativeVariants:[{condition:{pushedTowardBonggilD1:{gte:1}},text:`이 선택지가 보였다는 것 자체가 — 만술이 거기까지 왔다는 것이다.
만술이 봉길 아저씨 쪽으로 움직인다. 봉길 아저씨가 그 움직임을 느낀다. 둘이 나란히 곰을 본다.
곰이 그 둘을 본다. 그리고 — 천천히 돌아선다. 간다.
혼자가 아니었다.`},{condition:{hidFromBearD1:{gte:1}},text:"곰이 천천히 지나간다. 만술이 나무 뒤에서 숨을 참는다. 곰이 사라진다."},{condition:{stillForBearD1:{gte:1}},text:"곰과 만술이 마주본다. 긴 시간. 곰이 먼저 시선을 돌린다. 간다. 만술이 숨을 내쉰다."},{condition:{ranFromBearD1:{gte:1}},text:`짐이 굴러떨어진다. 만술이 뛴다. 곰이 반대 방향으로 간다.
만술이 멈춘다. 짐이 저 아래 있다. 내려가서 다시 맨다.`},{condition:{},text:"곰이 사라진다."}],next:"d1_08"},Cx={panorama:"/panorama/d1_08_after_bear.jpg",narrative:`곰이 사라지고.
봉길 아저씨가 만술을 본다.
아무 말 안 한다.
만술이 봉길 아저씨를 본다.`,choices:[{label:'A. "곰이었어요." 한다',goto:"d1_09",effect:{saidItWasBearD1:1}},{label:"B. 아무 말 안 한다",goto:"d1_09"}]},Rx={panorama:"/panorama/d1_08_after_bear.jpg",narrativeVariants:[{condition:{saidItWasBearD1:{gte:1}},text:`봉길 아저씨가 말한다. "알아." 보고 있었다.
만술이 그걸 받는다. 봤다. 혼자가 아니었다.`},{condition:{},text:"봉길 아저씨가 돌아서서 걷는다."}],next:"d1_10"},Dx={panorama:"/panorama/d1_10_summit_no_smoke.jpg",narrative:`정상. 짐을 내려놓는다.
만술이 선다.
마지막이다.
연기를 센다.
오늘은 — 없다. 하나도 없다.
만술이 그 하늘을 본다. 연기가 없는 하늘.`,choices:[{label:"A. 바로 내려간다",goto:"d1_11"},{label:"B. 잠깐 선다",goto:"d1_11"},{label:"C. 한참 선다 — 아무도 재촉하지 않는다",goto:"d1_11",effect:{stoodLongLastSummitD1:1}}]},Px={panorama:"/panorama/d1_10_summit_no_smoke.jpg",narrativeVariants:[{condition:{stoodLongLastSummitD1:{gte:1}},text:`한참 선다. 봉길 아저씨가 옆에 선다. 성칠이 옆에 선다.
셋이 그 정상에서 선다. 연기 없는 하늘. 작은 것들. 아무 말 없이.`},{condition:{},text:"만술이 잠깐 서 있다가 내려간다."}],next:"d1_12"},Lx={panorama:"/panorama/d1_12_descent_last.jpg",narrative:`내려온다.
발이 안다. 이 길을 안다.
나무. 돌. 경사. 다 안다.
만술이 내려오면서 생각한다. 21일.
넘은 고개들.
그 고개들이 다 여기로 왔다.`,next:"d1_13"},Ux={panorama:"/panorama/d1_13_evening_rice_last.jpg",narrative:`저녁. 셋이 앉는다.
오늘 저녁은 쌀밥이다. 또.
봉길 아저씨가 먹는다. 오늘은 — 천천히.
만술이 그걸 본다.
성칠이 만술한테 낮게 말한다. "끝났다."`,choices:[{label:'A. "응." 한다',goto:"d1_14"},{label:"B. 봉길 아저씨를 본다",goto:"d1_14",effect:{watchedBonggilLastD1:1}},{label:"C. 아무 말 안 한다",goto:"d1_14"}]},Ix={panorama:"/panorama/d1_13_evening_rice_last.jpg",narrativeVariants:[{condition:{watchedBonggilLastD1:{gte:1}},text:`봉길 아저씨가 천천히 밥을 먹는다. 만술이 그 옆모습을 본다.
비 오는 날엔 벼가 잘 큰다. 잘 먹어라. 자라. 그 말들이 있다. 그리고 없어진 것들도 있다.`},{condition:{},text:"만술이 고개를 끄덕인다."}],next:"d1_15"},Nx={panorama:"/panorama/d1_15_last_tent.jpg",narrative:`텐트. 봉길 아저씨가 눕는다. 성칠이 눕는다. 만술이 눕는다.
침묵.
봉길 아저씨가 말한다. "자라."
만술이 눈을 감는다.`,choices:[{label:'A. "예." 한다',goto:"d1_end"},{label:"B. 아무 말 안 한다",goto:"d1_end"},{label:'C. "아저씨도요." 한다',goto:"d1_end",effect:{saidYouTooD1:1}}]},Bx={panorama:"/panorama/d1_15_last_tent.jpg",narrativeVariants:[{condition:{saidYouTooD1:{gte:1}},text:`봉길 아저씨가 침묵한다. 오래. 성칠 숨소리가 들린다. 잠든 것 같다.
봉길 아저씨가 말한다. 아주 낮게. "그래."
그게 다다. 만술이 눈을 감는다.

만술이 주머니에 손을 넣는다. 쌀알. 아직 있다.
꺼내서 손바닥에 올린다. 어둠 속이라 안 보인다.
D-21 트럭에서 집었던 거. 왜 집었는지 몰랐다. 지금도 모른다.
그냥 쥐고 있는다. 손을 쥔다. 잠든다.

3주차 끝.`},{condition:{},text:`만술이 눈을 감는다.
주머니에 손을 넣는다. 쌀알. 아직 있다.
꺼내서 손바닥에 올린다. 어둠 속이라 안 보인다.
D-21 트럭에서 집었던 거. 왜 집었는지 몰랐다. 지금도 모른다.
그냥 쥐고 있는다. 손을 쥔다. 잠든다.

3주차 끝.`}],next:"pivot_01"},Fx={panorama:"/panorama/pivot_01_wake.jpg",narrative:`아침. 눈을 뜬다.
텐트 안. 봉길 아저씨. 성칠. 둘 다 있다.
만술이 천장을 본다. 잠깐. 그리고 일어난다.`,next:"pivot_02"},Ox={panorama:"/panorama/pivot_02_different.jpg",narrative:`밖에 나오면. 캠프가 다르다.
군인들이 많다. 미군들도 있다. 하사가 빠르게 움직인다.
지게꾼들이 모여 있다. 아무도 말이 없다.
만술이 그 분위기를 본다.

몸이 안다. 오늘이 다른 날이라는 것.`,next:"pivot_03"},kx={panorama:"/panorama/pivot_03_three.jpg",narrative:`건빵. 셋이 앉는다. 봉길 아저씨. 만술. 성칠.
물에 적신다. 셋 다. 아무 말 없다.
봉길 아저씨가 씹는다. 만술이 씹는다. 성칠이 씹는다. 소리만 난다.
봉길 아저씨가 다 먹는다. 일어나지 않는다.
셋이 앉아 있는다.

아무도 먼저 일어나지 않는다.`,next:"pivot_04"},Vx={panorama:"/panorama/pivot_04_load.jpg",narrative:`하사가 짐을 배정한다. 탄약 상자. 만술이 받는다. 맨다. 끈을 묶는다.
손이 기억한다. D-21부터 오늘까지. 스물하루.
단단하게 맨다.`,choices:[{label:"A. 확인한다 — 아직 있다",goto:"pivot_05",effect:{checkedRicePivot:1}},{label:"B. 그냥 출발한다",goto:"pivot_05"}]},zx={panorama:"/panorama/pivot_05_line.jpg",narrativeVariants:[{condition:{checkedRicePivot:{gte:1}},text:`만술이 주머니에 손을 넣는다. 있다. 오늘도 있다. 손가락으로 굴린다. 한 번. 그리고 뺀다.

줄이 선다. 봉길 아저씨가 앞에. 만술이 중간에. 성칠이 뒤에.
3주 동안 같은 자리다.
성칠이 만술 어깨를 한 번 친다. 말 없이.
만술이 뒤를 돌아본다. 성칠이 앞을 본다. 봉길 아저씨가 앞을 본다.`},{condition:{},text:`줄이 선다. 봉길 아저씨가 앞에. 만술이 중간에. 성칠이 뒤에.
3주 동안 같은 자리다.
성칠이 만술 어깨를 한 번 친다. 말 없이.
만술이 뒤를 돌아본다. 성칠이 앞을 본다. 봉길 아저씨가 앞을 본다.`}],next:"pivot_06"},Hx={panorama:"/panorama/pivot_06_depart.jpg",narrative:`군인이 말한다. "간다."
줄이 움직인다. 만술이 걷는다.
오늘 고개.`,next:"pivot_07"},Gx={panorama:"/panorama/pivot_07_climb.jpg",narrative:`오르막. 만술이 걷는다.
발이 안다. 경사를 읽는 방법. 무게 중심을 잡는 방법. 숨 쉬는 타이밍.
몸이 다 안다.
D-20에서 몰랐던 것들을. 이제 다 안다.
그게 좋은 건지 나쁜 건지 — 오늘은 모르겠다.
그냥 오른다.`,next:"pivot_08"},Wx={panorama:"/panorama/pivot_08_passed.jpg",narrative:`오르면서 만술이 본다. 길 옆 나무. 돌. 경사.
어디선가 본 것 같은 것들.
아니다. 다 처음 보는 것들이다.
그런데 낯설지 않다. 3주 동안 다른 고개들을 올랐으니까.
고개는 다 비슷하다. 그런데 다 달랐다.`,next:"pivot_09"},jx={panorama:"/panorama/pivot_09_bonggil_back.jpg",narrative:`고개 중턱. 봉길 아저씨가 앞에 간다.
만술이 그 등을 본다. 3주 동안 본 등이다.
처음엔 — 뒤를 봐줬다. 그다음엔 — 안 봤다. 그다음엔 — 몰랐다. 어제는 — 나란히였다.
오늘은. 봉길 아저씨가 걷는다. 그냥 걷는다.
만술이 그 뒤에서 걷는다.`,choices:[{label:'A. "아저씨." 부른다',goto:"pivot_10",effect:{calledBonggilPivot:1}},{label:"B. 그냥 걷는다",goto:"pivot_10"}]},Xx={panorama:"/panorama/pivot_10_seongchil.jpg",narrativeVariants:[{condition:{calledBonggilPivot:{gte:1}},text:`봉길 아저씨가 걸으면서 말한다. "왜." 만술이 말한다. "아무것도 아니에요."
봉길 아저씨가 걷는다. 만술도 걷는다. 그냥 이름을 불렀다. 그게 다다.

성칠이 만술 옆으로 온다. 숨을 고르면서 말한다. "다 왔다."
만술이 위를 본다. 정상이 보인다.`},{condition:{},text:`성칠이 만술 옆으로 온다. 숨을 고르면서 말한다. "다 왔다."
만술이 위를 본다. 정상이 보인다.`}],choices:[{label:'A. "응." 한다',goto:"pivot_11"},{label:'B. "거의." 한다',goto:"pivot_11"},{label:"C. 아무 말 안 한다",goto:"pivot_11"}]},qx={panorama:"/panorama/pivot_11_gunfire.jpg",narrative:`정상 직전. 총 소리가 난다.
가깝지 않다. 그런데 이 방향이다.
줄이 속도를 올린다. 만술도 속도를 올린다.
짐이 흔들린다. 발이 미끄러질 것 같다.`,choices:[{label:"A. 속도를 올린다",goto:"pivot_12"},{label:"B. 속도를 조금 낮춘다",goto:"pivot_12"},{label:"C. 봉길 아저씨를 찾는다",goto:"pivot_12",effect:{lookedForBonggilPivot:1}}]},Yx={panorama:"/panorama/pivot_12_last_steps.jpg",narrativeVariants:[{condition:{lookedForBonggilPivot:{gte:1}},text:`봉길 아저씨가 앞에 있다. 속도를 올리고 있다. 뒤를 보지 않는다.
만술이 속도를 올린다. 봉길 아저씨 뒤를 따라간다.

정상이 보인다. 만술이 오른다. 한 발. 한 발.
숨이 찬다. 짐이 무겁다. 그런데 오른다.`},{condition:{},text:`정상이 보인다. 만술이 오른다. 한 발. 한 발.
숨이 찬다. 짐이 무겁다. 그런데 오른다.`}],next:"pivot_13"},Kx={panorama:"/panorama/pivot_13_arrival.jpg",narrative:`정상. 만술이 선다. 숨을 고른다. 짐을 내려놓는다.
의무병이 온다. 군인이 온다. 빠르게 움직인다.
뭔가 있다. 무슨 일인지는 모른다.
만술이 서 있는다.
봉길 아저씨가 온다. 성칠이 온다. 셋이 선다.`,next:"pivot_14"},$x={panorama:"/panorama/pivot_14_below.jpg",narrative:`만술이 아래를 본다.
저 아래. 마을들. 길들. 논들. 전장. 사람들.
멀리서 보면 — 점이다. 다 점이다.
만술이 그걸 본다.
3주 동안 넘은 고개들. 저 아래 어딘가에 있다.
다 점이다.`,next:"pivot_15"},Zx={panorama:"/panorama/pivot_15_bonggil_summit.jpg",narrative:`봉길 아저씨가 옆에 선다. 아래를 본다.
만술이 봉길 아저씨를 본다.
봉길 아저씨의 얼굴. 3주 전 논에서 보던 얼굴이랑 같은 얼굴이다. 다른 얼굴이다.
봉길 아저씨가 말한다. 아주 낮게.
"다 저렇게 작네."
D-10에서 한 번 했던 말이다. 그때는 아무한테도 아닌 것처럼 했는데.
지금은 — 만술한테 하는 말 같다.`,choices:[{label:'A. "네." 한다',goto:"pivot_16"},{label:'B. "작아요." 한다',goto:"pivot_16"},{label:"C. 아무 말 안 한다",goto:"pivot_16"},{label:'D. "그래도 거기 있는 거잖아요." 한다',goto:"pivot_16",effect:{bonggilDistance:2}}]},Jx={panorama:"/panorama/pivot_16_seongchil_summit.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:2}},text:`봉길 아저씨가 만술을 본다. 오래. 그리고 아래를 본다. 아무 말 안 한다.
만술도 아래를 본다. 점들이 있다. 작지만 거기 있다.

성칠이 만술 옆에 온다. 아래를 본다.
한참 후 성칠이 말한다. "저 어딘가에 형이 있겠지."`},{condition:{},text:`성칠이 만술 옆에 온다. 아래를 본다.
한참 후 성칠이 말한다. "저 어딘가에 형이 있겠지."`}],choices:[{label:'A. "그러게." 한다',goto:"pivot_17"},{label:'B. "있겠지." 한다',goto:"pivot_17",effect:{knowsSeongchil:1}},{label:"C. 아무 말 안 한다",goto:"pivot_17"}]},Qx={panorama:"/panorama/pivot_17_smoke.jpg",narrativeVariants:[{condition:{knowsSeongchil:{gte:1}},text:`성칠이 만술을 본다. 그리고 웃는다. 작게. 만술도 웃는다. 아주 작게.
봉길 아저씨는 아래를 보고 있다.

만술이 연기를 센다. 습관이다.
오늘은 — 없다. 어제도 없었다.
만술이 그 하늘을 본다. 연기가 없는 하늘.
D-20에서 두 줄기를 봤던 것. 다섯이 됐다가. 줄었다가. 없어졌다.
뭔지 모른다. 끝난 건지. 아니면 다른 데로 간 건지.`},{condition:{},text:`만술이 연기를 센다. 습관이다.
오늘은 — 없다. 어제도 없었다.
만술이 그 하늘을 본다. 연기가 없는 하늘.
D-20에서 두 줄기를 봤던 것. 다섯이 됐다가. 줄었다가. 없어졌다.
뭔지 모른다. 끝난 건지. 아니면 다른 데로 간 건지.`}],choices:[{label:"A. 센다 — 없다. 없다. 없다.",goto:"pivot_18"},{label:"B. 오늘은 안 센다",goto:"pivot_18"}]},tS={panorama:"/panorama/pivot_18_alone.jpg",narrative:`군인들이 빠르게 움직인다. 봉길 아저씨가 어딘가로 간다. 성칠이 어딘가로 간다.
만술이 혼자 선다. 정상. 아래를 본다.
바람이 분다. 짐이 없다. 몸이 가볍다.

그냥 선다. 그냥 바람을 맞는다.`,next:"pivot_19"},eS={panorama:"/panorama/pivot_19_pocket.jpg",narrative:`만술이 주머니에 손을 넣는다. 쌀알. 꺼낸다. 손바닥 위에 올린다.
오늘은 낮이라 보인다. 작다.
D-21 트럭 바닥에 있던 것. 왜 집었는지 몰랐다.
지금도 확실히 모른다. 그냥 — 집었다.
만술이 쌀알을 본다.`,choices:[{label:"A. 다시 주머니에 넣는다",goto:"pivot_20",effect:{keptRiceFinal:1}},{label:"B. 손에서 놓는다 — 바람에 날린다",goto:"pivot_20",effect:{releasedRice:1}},{label:"C. 그냥 쥐고 있는다",goto:"pivot_20",effect:{heldRiceFinal:1}}]},nS={panorama:"/panorama/pivot_20_return.jpg",narrativeVariants:[{condition:{keptRiceFinal:{gte:1}},text:`만술이 쌀알을 다시 주머니에 넣는다. 아직 가지고 간다.

봉길 아저씨가 돌아온다. 만술 옆에 선다. 아래를 본다.
만술도 아래를 본다. 아무 말 없다. 한참.
봉길 아저씨가 말한다. "내려가자."`},{condition:{releasedRice:{gte:1}},text:`쌀알이 바람에 날린다. 어디로 가는지 모른다. 저 아래로 가겠지. 점들 어딘가로.

봉길 아저씨가 돌아온다. 만술 옆에 선다. 아래를 본다.
만술도 아래를 본다. 아무 말 없다. 한참.
봉길 아저씨가 말한다. "내려가자."`},{condition:{},text:`만술이 그냥 쥐고 있는다. 손을 펴지도 닫지도 않는다. 그냥 손 위에 있다.

봉길 아저씨가 돌아온다. 만술 옆에 선다. 아래를 본다.
만술도 아래를 본다. 아무 말 없다. 한참.
봉길 아저씨가 말한다. "내려가자."`}],choices:[{label:'A. "예." 한다',goto:"pivot_21"},{label:"B. 잠깐 더 본다 — 그리고 간다",goto:"pivot_21"},{label:'C. "아저씨."',goto:"pivot_21",effect:{bonggilDistance:1}}]},iS={panorama:"/panorama/pivot_21_last_look.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:1}},text:`봉길 아저씨가 만술을 본다. 만술이 봉길 아저씨를 본다. 할 말이 없다. 그냥 봤다.
봉길 아저씨가 만술을 본다. 그리고 말한다. "가자." 만술이 고개를 끄덕인다.

내려가기 전. 만술이 마지막으로 아래를 본다.
저 아래. 점들.
3주 동안 넘은 고개들이 저 어딘가에 있다.
처음 올랐던 고개. 앞사람이 없어진 날. 계곡의 얼굴들. 재복. 비. 곰. 봉길 아저씨의 등. 성칠의 손.
다 점이다. 멀리서 보면.
그런데 — 있었다. 만술이 거기 있었다.`},{condition:{},text:`내려가기 전. 만술이 마지막으로 아래를 본다.
저 아래. 점들.
3주 동안 넘은 고개들이 저 어딘가에 있다.
처음 올랐던 고개. 앞사람이 없어진 날. 계곡의 얼굴들. 재복. 비. 곰. 봉길 아저씨의 등. 성칠의 손.
다 점이다. 멀리서 보면.
그런데 — 있었다. 만술이 거기 있었다.`}],next:"pivot_22"},aS={panorama:"/panorama/pivot_22_descend.jpg",narrative:`만술이 내려가기 시작한다. 봉길 아저씨가 앞에. 성칠이 뒤에.
발이 안다. 내리막을. 한 발. 한 발.

페이드 아웃.`,next:"ending_01"},oS={panorama:"/panorama/ending_01_time_passed.jpg",narrative:`페이드 인. 어느 날.
만술이 걷는다. 혼자.
짐이 없다. 지게가 없다.
어디로 가는지 모른다. 그냥 걷는다.`,next:"ending_02"},rS={panorama:"/panorama/ending_02_hill.jpg",narrative:`언덕이 보인다. 높다. 고개들이랑 다르다.
고개는 넘어야 했다. 이 언덕은 — 그냥 있다.
만술이 오른다.`,next:"ending_03"},sS={panorama:"/panorama/ending_03_weight.jpg",narrative:`오르면서. 짐이 없는데 — 발이 무겁다.
고개들을 오를 때랑 다른 무게.
그 무게가 뭔지 모른다. 그냥 무겁다.`,next:"ending_04"},cS={panorama:"/panorama/ending_04_passed.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:5},knowsSeongchil:{gte:1}},text:`봉길 아저씨가 어딘가 있다. 성칠이 어딘가 있다.
그런데 만술이 혼자 이 언덕을 오른다.
왜 혼자인지 모른다. 그냥 오른다.`},{condition:{bonggilDistance:{gte:5}},text:`봉길 아저씨가 어디서 갔는지 모른다. 어느 날 없었다. 설명이 없었다.
그게 이 전쟁의 방식이었다.
만술이 오르면서 생각한다. *비 오는 날엔 벼가 잘 큰다.* 그 말이 있다.
봉길 아저씨는 없다.`},{condition:{knowsSeongchil:{gte:1}},text:`성칠이 마지막으로 한 말이 뭔지 기억 안 난다. 그냥 어느 날 없었다.
만술이 오르면서 생각한다. *만술아.* 처음으로 이름을 불렀던 것. 그게 있다.
성칠은 없다.`},{condition:{knowsJaebok:{gte:1}},text:`재복. 이름 하나. 얼굴 하나. 그게 있다.
그 사람이 살았는지 죽었는지 모른다. 모른 채로 여기 왔다.`},{condition:{},text:`만술이 오른다. 누구의 이름도 떠오르지 않는다.
그냥 오른다.`}],next:"ending_05"},lS={panorama:"/panorama/ending_05_arrival.jpg",narrative:`언덕 정상. 만술이 선다. 숨을 고른다.
아무것도 내려놓을 게 없다. 짐이 없으니까.`,next:"ending_06"},dS={panorama:"/panorama/ending_06_below.jpg",narrative:`아래를 본다. 마을들. 길들. 논들. 산들.
전장이 어딘지 모른다. 다 같이 보인다.
멀리서 보면 — 점이다. 다 점이다.
3주 동안 거기 있었다. 저 점들 어딘가에.
지금은 여기 있다.`,next:"ending_07"},hS={panorama:"/panorama/ending_07_nothing.jpg",narrative:`바람이 분다. 만술이 서 있는다.
살아남았다. 혼자다.
이제 아무것도 없다.
봉길 아저씨가 없거나. 성칠이 없거나. 둘 다 있어도 — 뭔가 없다.
그 없음이 뭔지 모른다.
이름이 없다.`,next:"ending_08"},uS={panorama:"/panorama/ending_08_pocket.jpg",narrativeVariants:[{condition:{releasedRice:{gte:1}},text:"만술이 빈 주머니에 손을 넣는다. 아무것도 없다. 손을 뺀다."},{condition:{},text:`만술이 주머니에 손을 넣는다. 쌀알이 있다.
만술이 쌀알을 꺼낸다. 손바닥 위에 올린다. 바람이 분다. 날아갈 것 같다.
만술이 손을 오므린다. 꼭 쥔다.`}],next:"ending_09"},fS={panorama:"/panorama/ending_09_last_line.jpg",narrativeVariants:[{condition:{bonggilDistance:{gte:5},knowsSeongchil:{gte:1}},text:`만술이 아래를 본다.
아무 말도 안 한다. 끝까지.
그냥 선다. 그냥 본다.
바람이 분다.
그게 다다.`},{condition:{bonggilDistance:{gte:5}},text:`만술이 아래를 본다.
아무 말 없다. 한참.
그리고 아주 낮게.
"비 오는 날엔 벼가 잘 큰다."
봉길 아저씨 말이다. 만술이 한다.`},{condition:{knowsSeongchil:{gte:1}},text:`만술이 아래를 본다.
아무 말 없다. 한참.
그리고.
"만술아."
자기 이름을 부른다. 성칠이 불렀던 것처럼.
아무도 없다. 바람만 있다.`},{condition:{knowsJaebok:{gte:1}},text:`만술이 아래를 본다.
한참.
그리고.
"이."
재복 이름표에서 읽은 한 글자. 그게 다다.
이름의 절반. 절반만 알았다.`},{condition:{},text:`만술이 아래를 본다.
한참.
아무 말 안 한다.
이름이 없다. 부를 이름이 없다.
그냥 점들이 있다.
만술이 그 점들을 본다.
바람이 분다.`}],next:"ending_end"},pS={panorama:"/panorama/ending_end_fade.jpg",narrative:`어느 루트든. 만술이 서 있다.
저 아래 점들. 바람. 만술의 등.
카메라가 만술의 등을 본다. 멀어진다. 멀어진다.
만술이 작아진다. 점이 된다.
페이드 아웃.

"1950년 여름부터 1953년 휴전까지, 대한민국 국군을 지원한 민간인 지게꾼은 약 17만 명으로 추산된다. 이름이 기록된 사람은 거의 없다."

페이드 아웃.

END.`},mS={_meta:Op,d21_01:kp,d21_02:Vp,d21_03:zp,d21_04:Hp,d21_05:Gp,d21_06:Wp,d21_07:jp,d21_08:Xp,d21_09:qp,d21_10:Yp,d21_11:Kp,d21_12:$p,d21_end:Zp,d20_01:Jp,d20_02:Qp,d20_03:tm,d20_04:em,d20_05:nm,d20_06:im,d20_07:am,d20_08:om,d20_09:rm,d20_10:sm,d20_11:cm,d20_12:lm,d20_13:dm,d20_14:hm,d20_15:um,d20_16:fm,d19_01:pm,d19_02:mm,d19_03:_m,d19_04:gm,d19_05:vm,d19_06:xm,d19_07:Sm,d19_08:Mm,d19_09:bm,d19_10:Em,d19_11:ym,d19_12:Am,d19_13:Tm,d19_14:wm,d19_15:Cm,d19_16:Rm,d19_17:Dm,d19_18:Pm,d19_19:Lm,d18_01:Um,d18_02:Im,d18_03:Nm,d18_04:Bm,d18_05:Fm,d18_06:Om,d18_07:km,d18_08:Vm,d18_09:zm,d18_10:Hm,d18_11:Gm,d18_12:Wm,d18_13:jm,d18_14:Xm,d18_15:qm,d18_16:Ym,d18_17:Km,d18_18:$m,d18_19:Zm,d18_end:Jm,d17_01:Qm,d17_02:t_,d17_03:e_,d17_04:n_,d17_05:i_,d17_06:a_,d17_07:o_,d17_08:r_,d17_09:s_,d17_10:c_,d17_11:l_,d17_12:d_,d17_13:h_,d17_14:u_,d17_15:f_,d17_16:p_,d17_17:m_,d17_end:__,d16_01:g_,d16_02:v_,d16_03:x_,d16_04:S_,d16_05:M_,d16_06:b_,d16_07:E_,d16_08:y_,d16_09:A_,d16_10:T_,d16_11:w_,d16_12:C_,d16_13:R_,d16_14:D_,d16_15:P_,d16_16:L_,d15_01:U_,d15_02:I_,d15_03:N_,d15_04:B_,d15_05:F_,d15_06:O_,d15_07:k_,d15_08:V_,d15_09:z_,d15_10:H_,d15_11:G_,d15_12:W_,d15_13:j_,d15_14:X_,d15_15:q_,d15_16:Y_,d15_end:K_,d14_01:$_,d14_02:Z_,d14_03:J_,d14_04:Q_,d14_05:tg,d14_06:eg,d14_07:ng,d14_08:ig,d14_09:ag,d14_10:og,d14_11:rg,d14_12:sg,d14_13:cg,d14_14:lg,d14_15:dg,d14_16:hg,d14_17:ug,d14_18:fg,d14_19:pg,d14_20:mg,d14_end:_g,d13_01:gg,d13_02:vg,d13_03:xg,d13_04:Sg,d13_05:Mg,d13_06:bg,d13_07:Eg,d13_08:yg,d13_09:Ag,d13_10:Tg,d13_11:wg,d13_12:Cg,d13_13:Rg,d13_14:Dg,d13_15:Pg,d13_end:Lg,d12_01:Ug,d12_02:Ig,d12_03:Ng,d12_04:Bg,d12_05:Fg,d12_06:Og,d12_07:kg,d12_08:Vg,d12_09:zg,d12_10:Hg,d12_11:Gg,d12_12:Wg,d12_13:jg,d12_14:Xg,d12_15:qg,d12_16:Yg,d12_17:Kg,d12_18:$g,d12_19:Zg,d12_20:Jg,d12_21:Qg,d12_22:t0,d12_end:e0,d11_01:n0,d11_02:i0,d11_03:a0,d11_04:o0,d11_05:r0,d11_06:s0,d11_07:c0,d11_08:l0,d11_09:d0,d11_10:h0,d11_11:u0,d11_12:f0,d11_13:p0,d11_14:m0,d11_15:_0,d11_16:g0,d11_17:v0,d11_18:x0,d11_19:S0,d11_20:M0,d11_end:b0,d10_01:E0,d10_02:y0,d10_03:A0,d10_04:T0,d10_05:w0,d10_06:C0,d10_07:R0,d10_08:D0,d10_09:P0,d10_10:L0,d10_11:U0,d10_12:I0,d10_13:N0,d10_14:B0,d10_end:F0,d9_01:O0,d9_02:k0,d9_03:V0,d9_04:z0,d9_05:H0,d9_06:G0,d9_07:W0,d9_08:j0,d9_09:X0,d9_10:q0,d9_11:Y0,d9_12:K0,d9_13:$0,d9_14:Z0,d9_15:J0,d9_16:Q0,d9_end:t1,d8_01:e1,d8_02:n1,d8_03:i1,d8_04:a1,d8_05:o1,d8_06:r1,d8_07:s1,d8_08:c1,d8_09:l1,d8_10:d1,d8_11:h1,d8_12:u1,d8_13:f1,d8_14:p1,d8_15:m1,d8_16:_1,d8_17:g1,d8_end:v1,d7_01:x1,d7_02:S1,d7_03:M1,d7_04:b1,d7_05:E1,d7_06:y1,d7_07:A1,d7_08:T1,d7_09:w1,d7_10:C1,d7_11:R1,d7_12:D1,d7_13:P1,d7_14:L1,d7_15:U1,d7_16:I1,d7_end:N1,d6_01:B1,d6_02:F1,d6_03:O1,d6_04:k1,d6_05:V1,d6_06:z1,d6_07:H1,d6_08:G1,d6_09:W1,d6_10:j1,d6_11:X1,d6_12:q1,d6_13:Y1,d6_14:K1,d6_15:$1,d6_16:Z1,d6_17:J1,d6_18:Q1,d6_19:tv,d6_20:ev,d6_21:nv,d6_end:iv,d5_01:av,d5_02:ov,d5_03:rv,d5_04:sv,d5_05:cv,d5_06:lv,d5_07:dv,d5_08:hv,d5_09:uv,d5_10:fv,d5_11:pv,d5_12:mv,d5_13:_v,d5_14:gv,d5_15:vv,d5_16:xv,d5_17:Sv,d5_end:Mv,d4_01:bv,d4_02:Ev,d4_03:yv,d4_04:Av,d4_05:Tv,d4_06:wv,d4_07:Cv,d4_08:Rv,d4_09:Dv,d4_10:Pv,d4_11:Lv,d4_12:Uv,d4_13:Iv,d4_14:Nv,d4_15:Bv,d4_end:Fv,d3_01:Ov,d3_02:kv,d3_03:Vv,d3_04:zv,d3_05:Hv,d3_06:Gv,d3_07:Wv,d3_08:jv,d3_09:Xv,d3_10:qv,d3_11:Yv,d3_12:Kv,d3_13:$v,d3_14:Zv,d3_15:Jv,d3_16:Qv,d3_17:tx,d3_end:ex,d2_01:nx,d2_02:ix,d2_03:ax,d2_04:ox,d2_05:rx,d2_06:sx,d2_07:cx,d2_08:lx,d2_09:dx,d2_10:hx,d2_11:ux,d2_12:fx,d2_13:px,d2_14:mx,d2_15:_x,d2_16:gx,d2_17:vx,d2_18:xx,d2_end:Sx,d1_01:Mx,d1_02:bx,d1_03:Ex,d1_04:yx,d1_05:Ax,d1_06:Tx,d1_07:wx,d1_08:Cx,d1_09:Rx,d1_10:Dx,d1_11:Px,d1_12:Lx,d1_13:Ux,d1_14:Ix,d1_15:Nx,d1_end:Bx,pivot_01:Fx,pivot_02:Ox,pivot_03:kx,pivot_04:Vx,pivot_05:zx,pivot_06:Hx,pivot_07:Gx,pivot_08:Wx,pivot_09:jx,pivot_10:Xx,pivot_11:qx,pivot_12:Yx,pivot_13:Kx,pivot_14:$x,pivot_15:Zx,pivot_16:Jx,pivot_17:Qx,pivot_18:tS,pivot_19:eS,pivot_20:nS,pivot_21:iS,pivot_22:aS,ending_01:oS,ending_02:rS,ending_03:sS,ending_04:cS,ending_05:lS,ending_06:dS,ending_07:hS,ending_08:uS,ending_09:fS,ending_end:pS},{_meta:MS,..._S}=mS,Os=_S,gS=document.getElementById("scene"),vS=document.getElementById("loading"),ks=new Fp(gS,Os,{riceKept:0,knowsSeongchil:0,knowsJaebok:0,valleyEyeContact:0,bonggilDistance:0,countsSmoke:0,softenedBiscuit:0,redidStrap:0,breathRhythm:0,rememberedSummitView:0,talkedToStranger:0,blisterPopped:0,lickedBowl:0,askedIfScared:0,acceptedClothD19:0,rememberedRhythm:0,askedSeniorDays:0,askedAboutSmoke:0,wantedWater:0,ateWithSeongchil:0,approachedBonggilD19:0,askedSeongchilFirst:0,dunkedFace:0,askedAboutGuns:0,mentionedSimilarAge:0,sawBonggilAvertVillage:0,ateHalfMeal:0,silentAtNight:0,lookedAtRice:0,readNameTag:0,tiedCarefully:0,matchedSoldierBreath:0,askedIfOk:0,lowered:0,watchedSoldierCarried:0,saidLoadDiffers:0,toldSeongchilName:0,silentAtNightD17:0,askedBonggilAboutMissing:0,askedSeongchilAboutMissing:0,keptOwnRhythm:0,saidDontKnowName:0,askedHowMuchLonger:0,sawSmokeGap:0,slowedInRain:0,noticedNoSmokeSmell:0,closedEyesListening:0,askedHomesick:0,toldBonggilAboutBear:0,followedBonggilD14:0,watchedBonggilBack:0,toldBonggilSmokeCount:0,agreedBonggilQuiet:0,feltSafeNarrow:0,watchedBonggilWatchSoldier:0,askedSeongchilFamily:0,calledBonggilD14:0,eyeContactUS:0,smelledUSFood:0,readBoxLetters:0,askedBonggilOkD13:0,watchedUSScope:0,gotChocolate:0,sharedChocolate:0,hidChocolate:0,leftChocolateBeside:0,watchedBonggilDawn:0,fellBehindSpeed:0,foundBonggilBreathing:0,saidScaredYes:0,lookedAroundAfter:0,saidNotSmoke:0,fellWhileDescending:0,askedWhoDied:0,askedBonggilWhy:0,disagreedBonggilNormal:0,watchedBonggilEyesOpen:0,satBesideBonggilD11:0,saidTenDays:0,saidAlGo:0,respondedToWarnings:0,heldOnSlip:0,droppedJaebok:0,metJaebokEyes:0,toldSeongchilJaebokName:0,toldBonggilAboutJaebok:0,saidJaebokNameAtNight:0,askedSeongchilBonggilD10:0,askedSergeantD10:0,saidSomethingHappenedD10:0,helpedFallenPorter:0,watchedBonggilTurnAway:0,askedBonggilOkD10:0,watchedSummitSilent:0,saidD12AfterD10:0,approachedBonggilD10:0,calledBonggilD10:0,approachedCryingPorter:0,askedAboutHomeD9:0,satAloneD9:0,chasedBonggilSpeed:0,calledBonggilSummitD9:0,watchedBonggilEatAloneD9:0,deniedBonggilRumor:0,silentAtNightD9:0,lookedForBonggilD8:0,saidUsedToBeD8:0,wentToBonggilLineD8:0,helpedFallenPorterD8:0,askedWhyD8:0,toldSeongchilNoSmokeD8:0,chasedBonggilDescentD8:0,deniedBonggilRumorD8:0,saidSleepFirstD8:0,askedIfScaredD7:0,saidHatedSleepWordD7:0,helpedLaggingPorterD7:0,justWentD7:0,askedBackD7:0,saidOfCourseD7:0,saidThereWillBeMoreD6:0,stoppedForSkyD6:0,triedToSeeJaebokD6:0,toldSeongchilOneSmokeD6:0,lookedBackUSD6:0,watchedBonggilSmellD6:0,stoodLongD6:0,ateSlowlyD6:0,approachedBonggilRiceD6:0,askedSeniorD5:0,lookedForNameD5:0,saidCarefulD5:0,wentToBonggilD5:0,watchedWoundedCarriedD5:0,saidNoNameD5:0,saidPaddyD5:0,saidYesD5:0,stoodInRainD4:0,driedStrapD4:0,followedFootprintsD4:0,helpedSlippedPorterD4:0,passedByD4:0,lookedInRainD4:0,tookOwnPathD4:0,offeredClothD4:0,saidWakeUpD3:0,countedDaysD3:0,thoughtAboutAmmoD3:0,lookedAtSeongchilD3:0,saidSinceD16:0,askedStrangeD3:0,watchedBonggilUSD3:0,askedWhereD3:0,thoughtAboutPassD3:0,toldBonggilRouteD2:0,lookedForBonggilD2:0,heldSeongchilHandD2:0,calledBonggilSummitD2:0,watchedBonggilTomorrowD2:0,saidScaredYesD2:0,stayedAwakeD2:0,lookedAtHandsD1:0,rememberedBonggilBackD1:0,hidFromBearD1:0,stillForBearD1:0,ranFromBearD1:0,pushedTowardBonggilD1:0,saidItWasBearD1:0,stoodLongLastSummitD1:0,watchedBonggilLastD1:0,saidYouTooD1:0,checkedRicePivot:0,calledBonggilPivot:0,lookedForBonggilPivot:0,keptRiceFinal:0,releasedRice:0,heldRiceFinal:0}),xS=Object.keys(Os)[0];ks.enter(xS).then(()=>{vS.style.display="none"});let Vs=0;function zs(i){const t=(i-Vs)/1e3;ks.update(t),requestAnimationFrame(zs)}requestAnimationFrame(i=>{Vs=i,zs(i)});
