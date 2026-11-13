var ji=2463534242,$e=()=>(ji^=ji<<13,ji^=ji>>>17,ji^=ji<<5,(ji>>>0)/4294967296);var Al="170",_s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,oh=1,Td=2;var yu=1,Rl=2,Mi=3,Oi=0,vn=1,wn=2,en=0,qs=1,Da=2,ch=3,lh=4,Cl=5,Xn=100,wd=101,Ad=102,Rd=103,Cd=104,or=200,Pd=201,Id=202,Dd=203,ac=204,oc=205,io=206,Ld=207,so=208,Ud=209,Nd=210,Fd=211,Od=212,zd=213,Bd=214,cc=0,lc=1,hc=2,Js=3,uc=4,dc=5,fc=6,pc=7,Mu=0,kd=1,Vd=2,Fi=0,Hd=1,Gd=2,Wd=3,Xd=4,qd=5,Yd=6,Pl=7;var bu=300,Ks=301,js=302,mc=303,gc=304,ro=306,Ei=1e3,cs=1001,xc=1002,_n=1003,Zd=1004;var Qr=1005;var ai=1006,Ro=1007;var ls=1008;var Vn=1009,Su=1010,Eu=1011,Rr=1012,Il=1013,hs=1014,oi=1015,di=1016,Dl=1017,Ll=1018,zi=1020,Tu=35902,wu=1021,Au=1022,kn=1023,Ru=1024,Cu=1025,Ys=1026,Bi=1027,Ul=1028,Nl=1029,Pu=1030,Fl=1031;var Ol=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,vc=35840,_c=35841,yc=35842,Mc=35843,bc=36196,Sc=37492,Ec=37496,Tc=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Dc=37815,Lc=37816,Uc=37817,Nc=37818,Fc=37819,Oc=37820,zc=37821,Ia=36492,Bc=36494,kc=36495,Iu=36283,Vc=36284,Hc=36285,Gc=36286;var La=2300,Wc=2301,Co=2302,hh=2400,uh=2401,dh=2402;var $d=3200,Jd=3201;var zl=0,Kd=1,Ni="",ln="srgb",Wi="srgb-linear",ao="linear",Le="srgb";var Rs=7680;var fh=519,jd=512,Qd=513,tf=514,Du=515,ef=516,nf=517,sf=518,rf=519,ph=35044,Lu=35048;var mh="300 es",bi=2e3,Ua=2001,Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=1234567,br=Math.PI/180,Cr=180/Math.PI;function Ms(){let i=$e()*4294967295|0,t=$e()*4294967295|0,e=$e()*4294967295|0,n=$e()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function Bl(i,t){return(i%t+t)%t}function af(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function of(i,t,e){return i!==t?(e-i)/(t-i):0}function Sr(i,t,e){return(1-e)*i+e*t}function cf(i,t,e,n){return Sr(i,t,1-Math.exp(-e*n))}function lf(i,t=1){return t-Math.abs(Bl(i,t*2)-t)}function hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function df(i,t){return i+Math.floor($e()*(t-i+1))}function ff(i,t){return i+$e()*(t-i)}function pf(i){return i*(.5-$e())}function mf(i){i!==void 0&&(gh=i);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gf(i){return i*br}function xf(i){return i*Cr}function vf(i){return(i&i-1)===0&&i!==0}function _f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Uu={DEG2RAD:br,RAD2DEG:Cr,generateUUID:Ms,clamp:Qe,euclideanModulo:Bl,mapLinear:af,inverseLerp:of,lerp:Sr,damp:cf,pingpong:lf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:xf,isPowerOfTwo:vf,ceilPowerOfTwo:_f,floorPowerOfTwo:yf,setQuaternionFromProperEuler:Mf,normalize:Sn,denormalize:Gs},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=$e(),this.y=$e(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],b=s[4],M=s[7],H=s[2],_=s[5],C=s[8];return r[0]=a*x+o*T+c*H,r[3]=a*m+o*b+c*_,r[6]=a*p+o*M+c*C,r[1]=l*x+u*T+d*H,r[4]=l*m+u*b+d*_,r[7]=l*p+u*M+d*C,r[2]=h*x+f*T+g*H,r[5]=h*m+f*b+g*_,r[8]=h*p+f*M+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Po=new me;function Nu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){let i=Na("canvas");return i.style.display="block",i}var xh={};function yr(i){i in xh||(xh[i]=!0,console.warn(i))}function Sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ef(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Se={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Le&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Le&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vh=[.64,.33,.3,.6,.15,.06],_h=[.2126,.7152,.0722],yh=[.3127,.329],Mh=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Se.define({[Wi]:{primaries:vh,whitePoint:yh,transfer:ao,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:_h,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:vh,whitePoint:yh,transfer:Le,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:_h,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});var Cs,Xc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=Na("canvas")),Cs.width=t.width,Cs.height=t.height;let n=Cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,Fa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Io(s[a].image)):r.push(Io(s[a]))}else r=Io(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Af=0,Ln=class i extends Ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=cs,s=cs,r=ai,a=ls,o=kn,c=Vn,l=i.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Ms(),this.name="",this.source=new Fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=bu;Ln.DEFAULT_ANISOTROPY=1;var Ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,M=(f+1)/2,H=(p+1)/2,_=(u+h)/4,C=(d+x)/4,R=(g+m)/4;return b>M&&b>H?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=_/n,r=C/n):M>H?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=_/s,r=R/s):H<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(H),n=C/r,s=R/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-x)/T,this.z=(h-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=$e(),this.y=$e(),this.z=$e(),this.w=$e(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qc=class extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Oa=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yc=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==h||l!==f||u!==g){let m=1-o,p=c*h+l*f+u*g+d*x,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let H=Math.sqrt(b),_=Math.atan2(H,p*T);m=Math.sin(m*_)/H,o=Math.sin(o*_)/H}let M=o*T;if(c=c*m+h*M,l=l*m+f*M,u=u*m+g*M,d=d*m+x*M,m===1-o){let H=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=H,l*=H,u*=H,d*=H}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*$e(),e=2*Math.PI*$e(),n=$e(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=$e(),this.y=$e(),this.z=$e(),this}randomDirection(){let t=$e()*Math.PI*2,e=$e()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new D,Sh=new dn,Rn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),ea.subVectors(this.max,pr),Ps.subVectors(t.a,pr),Is.subVectors(t.b,pr),Ds.subVectors(t.c,pr),Ci.subVectors(Is,Ps),Pi.subVectors(Ds,Is),Qi.subVectors(Ps,Ds);let e=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Qi.z,Qi.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Qi.z,0,-Qi.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Qi.y,Qi.x,0];return!Lo(e,Ps,Is,Ds,ea)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,Ps,Is,Ds,ea))?!1:(na.crossVectors(Ci,Pi),e=[na.x,na.y,na.z],Lo(e,Ps,Is,Ds,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gi=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,ta=new Rn,Ps=new D,Is=new D,Ds=new D,Ci=new D,Pi=new D,Qi=new D,pr=new D,ea=new D,na=new D,ts=new D;function Lo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ts.fromArray(i,r);let o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),c=t.dot(ts),l=e.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Rf=new Rn,mr=new D,Uo=new D,ki=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);let e=mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(Uo)),this.expandByPoint(mr.copy(t.center).sub(Uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new D,No=new D,ia=new D,Ii=new D,Fo=new D,sa=new D,Oo=new D,us=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){No.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(No);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ia),o=Ii.dot(this.direction),c=-Ii.dot(ia),l=Ii.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(No).addScaledVector(ia,h),f}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){Fo.subVectors(e,t),sa.subVectors(n,t),Oo.crossVectors(Fo,sa);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,t);let c=o*this.direction.dot(sa.crossVectors(Ii,sa));if(c<0)return null;let l=o*this.direction.dot(Fo.cross(Ii));if(l<0||c+l>a)return null;let u=-o*Ii.dot(Oo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),a=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){let h=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,n){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Di.crossVectors(n,zn),Di.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Di.crossVectors(n,zn)),Di.normalize(),ra.crossVectors(zn,Di),s[0]=Di.x,s[4]=ra.x,s[8]=zn.x,s[1]=Di.y,s[5]=ra.y,s[9]=zn.y,s[2]=Di.z,s[6]=ra.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],b=n[7],M=n[11],H=n[15],_=s[0],C=s[4],R=s[8],S=s[12],y=s[1],I=s[5],Y=s[9],U=s[13],L=s[2],O=s[6],z=s[10],nt=s[14],K=s[3],rt=s[7],Tt=s[11],Ct=s[15];return r[0]=a*_+o*y+c*L+l*K,r[4]=a*C+o*I+c*O+l*rt,r[8]=a*R+o*Y+c*z+l*Tt,r[12]=a*S+o*U+c*nt+l*Ct,r[1]=u*_+d*y+h*L+f*K,r[5]=u*C+d*I+h*O+f*rt,r[9]=u*R+d*Y+h*z+f*Tt,r[13]=u*S+d*U+h*nt+f*Ct,r[2]=g*_+x*y+m*L+p*K,r[6]=g*C+x*I+m*O+p*rt,r[10]=g*R+x*Y+m*z+p*Tt,r[14]=g*S+x*U+m*nt+p*Ct,r[3]=T*_+b*y+M*L+H*K,r[7]=T*C+b*I+M*O+H*rt,r[11]=T*R+b*Y+M*z+H*Tt,r[15]=T*S+b*U+M*nt+H*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*o*h+n*l*h+s*o*f-n*c*f)+x*(+e*c*f-e*l*h+r*a*h-s*a*f+s*l*u-r*c*u)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-e*c*d+e*o*h+s*a*d-n*a*h+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],T=d*m*l-x*h*l+x*c*f-o*m*f-d*c*p+o*h*p,b=g*h*l-u*m*l-g*c*f+a*m*f+u*c*p-a*h*p,M=u*x*l-g*d*l+g*o*f-a*x*f-u*o*p+a*d*p,H=g*d*c-u*x*c-g*o*h+a*x*h+u*o*m-a*d*m,_=e*T+n*b+s*M+r*H;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/_;return t[0]=T*C,t[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*p-n*h*p)*C,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*C,t[3]=(d*c*r-o*h*r-d*s*l+n*h*l+o*s*f-n*c*f)*C,t[4]=b*C,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*C,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*C,t[7]=(a*h*r-u*c*r+u*s*l-e*h*l-a*s*f+e*c*f)*C,t[8]=M*C,t[9]=(g*d*r-u*x*r-g*n*f+e*x*f+u*n*p-e*d*p)*C,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*C,t[11]=(u*o*r-a*d*r-u*n*l+e*d*l+a*n*f-e*o*f)*C,t[12]=H*C,t[13]=(u*x*s-g*d*s+g*n*h-e*x*h-u*n*m+e*d*m)*C,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*C,t[15]=(a*d*s-u*o*s+u*n*c-e*d*c-a*n*h+e*o*h)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,x=a*u,m=a*d,p=o*d,T=c*l,b=c*u,M=c*d,H=n.x,_=n.y,C=n.z;return s[0]=(1-(x+p))*H,s[1]=(f+M)*H,s[2]=(g-b)*H,s[3]=0,s[4]=(f-M)*_,s[5]=(1-(h+p))*_,s[6]=(m+T)*_,s[7]=0,s[8]=(g+b)*C,s[9]=(m-T)*C,s[10]=(1-(h+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),a=Ls.set(s[4],s[5],s[6]).length(),o=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);let l=1/r,u=1/a,d=1/o;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,e.setFromRotationMatrix(jn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=bi){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s),f,g;if(o===bi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ua)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bi){let c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(a-r),h=(e+t)*l,f=(n+s)*u,g,x;if(o===bi)g=(a+r)*d,x=-2*d;else if(o===Ua)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ls=new D,jn=new ye,Cf=new D(0,0,0),Pf=new D(1,1,1),Di=new D,ra=new D,zn=new D,Eh=new ye,Th=new dn,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},If=0,wh=new D,Us=new dn,vi=new ye,aa=new D,gr=new D,Df=new D,Lf=new dn,Ah=new D(1,0,0),Rh=new D(0,1,0),Ch=new D(0,0,1),Ph={type:"added"},Uf={type:"removed"},Ns={type:"childadded",child:null},zo={type:"childremoved",child:null},Cn=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ci,n=new dn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new me}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(gr,aa,this.up):vi.lookAt(aa,gr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(vi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Cn.DEFAULT_UP=new D(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new D,_i=new D,Bo=new D,yi=new D,Fs=new D,Os=new D,Ih=new D,ko=new D,Vo=new D,Ho=new D,Go=new Ye,Wo=new Ye,Xo=new Ye,as=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),_i.subVectors(n,e),Bo.subVectors(t,e);let a=Qn.dot(Qn),o=Qn.dot(_i),c=Qn.dot(Bo),l=_i.dot(_i),u=_i.dot(Bo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(t,e),Wo.fromBufferAttribute(t,n),Xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),_i.subVectors(t,e),Qn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Qn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Fs.subVectors(s,n),Os.subVectors(r,n),ko.subVectors(t,n);let c=Fs.dot(ko),l=Os.dot(ko);if(c<=0&&l<=0)return e.copy(n);Vo.subVectors(t,s);let u=Fs.dot(Vo),d=Os.dot(Vo);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Fs,a);Ho.subVectors(t,r);let f=Fs.dot(Ho),g=Os.dot(Ho);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Os,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Ih.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Ih,o);let p=1/(m+x+h);return a=x*p,o=h*p,e.copy(n).addScaledVector(Fs,a).addScaledVector(Os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},oa={h:0,s:0,l:0};function qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=Bl(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qo(a,r,t+1/3),this.g=qo(a,r,t),this.b=qo(a,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Se.fromWorkingColorSpace(gn.copy(this),t),Math.round(Qe(gn.r*255,0,255))*65536+Math.round(Qe(gn.g*255,0,255))*256+Math.round(Qe(gn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ln){Se.fromWorkingColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(oa);let n=Sr(Li.h,oa.h,e),s=Sr(Li.s,oa.s,e),r=Sr(Li.l,oa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ae;ae.NAMES=Fu;var Nf=0,li=class extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Ms(),this.name="",this.blending=qs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yn=class extends li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var je=new D,ca=new vt,un=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ph&&(t.usage=this.usage),t}};var za=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ba=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ff=0,Wn=new ye,Yo=new Cn,zs=new D,Bn=new Rn,xr=new Rn,cn=new D,Ge=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?Ba:za)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Bn.min,xr.min),Bn.expandByPoint(cn),cn.addVectors(Bn.max,xr.max),Bn.expandByPoint(cn)):(Bn.expandByPoint(xr.min),Bn.expandByPoint(xr.max))}Bn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)cn.fromBufferAttribute(o,l),c&&(zs.fromBufferAttribute(t,l),cn.add(zs)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new D,c[R]=new D;let l=new D,u=new D,d=new D,h=new vt,f=new vt,g=new vt,x=new D,m=new D;function p(R,S,y){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[R].add(x),o[S].add(x),o[y].add(x),c[R].add(m),c[S].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,S=T.length;R<S;++R){let y=T[R],I=y.start,Y=y.count;for(let U=I,L=I+Y;U<L;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new D,M=new D,H=new D,_=new D;function C(R){H.fromBufferAttribute(s,R),_.copy(H);let S=o[R];b.copy(S),b.sub(H.multiplyScalar(H.dot(S))).normalize(),M.crossVectors(_,S);let I=M.dot(c[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,I)}for(let R=0,S=T.length;R<S;++R){let y=T[R],I=y.start,Y=y.count;for(let U=I,L=I+Y;U<L;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new un(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new ye,es=new us,la=new ki,Lh=new D,ha=new D,ua=new D,da=new D,Zo=new D,fa=new D,Uh=new D,pa=new D,Te=class extends Cn{constructor(t=new Ge,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(Zo.fromBufferAttribute(d,t),a?fa.addScaledVector(Zo,u):fa.addScaledVector(Zo.sub(e),u))}e.add(fa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(la.containsPoint(es.origin)===!1&&(es.intersectSphere(la,Lh)===null||es.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),es.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,H=b;M<H;M+=3){let _=o.getX(M),C=o.getX(M+1),R=o.getX(M+2);s=ma(this,p,t,n,l,u,d,_,C,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=ma(this,a,t,n,l,u,d,T,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,H=b;M<H;M+=3){let _=M,C=M+1,R=M+2;s=ma(this,p,t,n,l,u,d,_,C,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=m,b=m+1,M=m+2;s=ma(this,a,t,n,l,u,d,T,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Of(i,t,e,n,s,r,a,o){let c;if(t.side===vn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Oi,o),c===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pa);return l<e.near||l>e.far?null:{distance:l,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ha),i.getVertexPosition(c,ua),i.getVertexPosition(l,da);let u=Of(i,t,e,n,ha,ua,da,Uh);if(u){let d=new D;as.getBarycoord(Uh,ha,ua,da,d),s&&(u.uv=as.getInterpolatedAttribute(s,o,c,l,d,new vt)),r&&(u.uv1=as.getInterpolatedAttribute(r,o,c,l,d,new vt)),a&&(u.normal=as.getInterpolatedAttribute(a,o,c,l,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new D,materialIndex:0};as.getNormal(ha,ua,da,h.normal),u.face=h,u.barycoord=d}return u}var ds=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(d,2));function g(x,m,p,T,b,M,H,_,C,R,S){let y=M/C,I=H/R,Y=M/2,U=H/2,L=_/2,O=C+1,z=R+1,nt=0,K=0,rt=new D;for(let Tt=0;Tt<z;Tt++){let Ct=Tt*I-U;for(let Mt=0;Mt<O;Mt++){let $t=Mt*y-Y;rt[x]=$t*T,rt[m]=Ct*b,rt[p]=L,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[p]=_>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(Mt/C),d.push(1-Tt/R),nt+=1}}for(let Tt=0;Tt<R;Tt++)for(let Ct=0;Ct<C;Ct++){let Mt=h+Ct+O*Tt,$t=h+Ct+O*(Tt+1),st=h+(Ct+1)+O*(Tt+1),ot=h+(Ct+1)+O*Tt;c.push(Mt,$t,ot),c.push($t,st,ot),K+=6}o.addGroup(f,K,S),f+=K,h+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=Qs(i[e]);for(let s in n)t[s]=n[s]}return t}function zf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var bs={clone:Qs,merge:En},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ka=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new D,Nh=new vt,Fh=new vt,Tn=class extends ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Fh),e.subVectors(Fh,Nh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bs=-90,ks=1,Zc=class extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Bs,ks,t,e);s.layers=this.layers,this.add(s);let r=new Tn(Bs,ks,t,e);r.layers=this.layers,this.add(r);let a=new Tn(Bs,ks,t,e);a.layers=this.layers,this.add(a);let o=new Tn(Bs,ks,t,e);o.layers=this.layers,this.add(o);let c=new Tn(Bs,ks,t,e);c.layers=this.layers,this.add(c);let l=new Tn(Bs,ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Va=class extends Ln{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ks,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$c=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Va(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ds(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:en});r.uniforms.tEquirect.value=e;let a=new Te(s,r),o=e.minFilter;return e.minFilter===ls&&(e.minFilter=ai),new Zc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},$o=new D,Vf=new D,Hf=new me,hn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$o.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hf.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new ki,ga=new D,Ir=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],T=s[13],b=s[14],M=s[15];if(n[0].setComponents(c-r,h-l,m-f,M-p).normalize(),n[1].setComponents(c+r,h+l,m+f,M+p).normalize(),n[2].setComponents(c+a,h+u,m+g,M+T).normalize(),n[3].setComponents(c-a,h-u,m-g,M-T).normalize(),n[4].setComponents(c-o,h-d,m-x,M-b).normalize(),e===bi)n[5].setComponents(c+o,h+d,m+x,M+b).normalize();else if(e===Ua)n[5].setComponents(o,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gf(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var hi=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let T=p*h-a;for(let b=0;b<l;b++){let M=b*d-r;g.push(M,-T,0),x.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let b=T+l*p,M=T+l*(p+1),H=T+1+l*(p+1),_=T+1+l*p;f.push(b,M,_),f.push(M,H,_)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`uniform float scale;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#define LAMBERT
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
}`,a0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,c0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,u0=`#define PHONG
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
}`,d0=`#define PHONG
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
}`,f0=`#define STANDARD
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
}`,p0=`#define STANDARD
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
}`,m0=`#define TOON
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
}`,g0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,b0=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:qf,alphamap_pars_fragment:Yf,alphatest_fragment:Zf,alphatest_pars_fragment:$f,aomap_fragment:Jf,aomap_pars_fragment:Kf,batching_pars_vertex:jf,batching_vertex:Qf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:cp,color_fragment:lp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:xp,emissivemap_fragment:vp,emissivemap_pars_fragment:_p,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:bp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Fp,envmap_vertex:wp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Dp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:zp,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Gp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:$p,map_fragment:Jp,map_pars_fragment:Kp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:am,normal_fragment_begin:om,normal_fragment_maps:cm,normal_pars_fragment:lm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:ym,dithering_fragment:Mm,dithering_pars_fragment:bm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:wm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Im,skinnormal_vertex:Dm,specularmap_fragment:Lm,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:zm,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:Vm,worldpos_vertex:Hm,background_vert:Gm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:Zm,depth_vert:$m,depth_frag:Jm,distanceRGBA_vert:Km,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:t0,linedashed_vert:e0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:s0,meshlambert_vert:r0,meshlambert_frag:a0,meshmatcap_vert:o0,meshmatcap_frag:c0,meshnormal_vert:l0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:f0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:x0,points_frag:v0,shadow_vert:_0,shadow_frag:y0,sprite_vert:M0,sprite_frag:b0},Gt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},ri={basic:{uniforms:En([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:En([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ae(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:En([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:En([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:En([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ae(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:En([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:En([Gt.points,Gt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:En([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:En([Gt.common,Gt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:En([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:En([Gt.sprite,Gt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:En([Gt.common,Gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:En([Gt.lights,Gt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ri.physical={uniforms:En([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var xa={r:0,b:0,g:0},is=new ci,S0=new ye;function E0(i,t,e,n,s,r,a){let o=new ae(0),c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function x(T){let b=!1,M=g(T);M===null?p(o,c):M&&M.isColor&&(p(M,1),b=!0);let H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,a):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,b){let M=g(b);M&&(M.isCubeTexture||M.mapping===ro)?(u===void 0&&(u=new Te(new ds(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Qs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,_,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),is.copy(b.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(is)),u.material.toneMapped=Se.getTransfer(M.colorSpace)!==Le,(d!==M||h!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Te(new hi(2,2),new Be({name:"BackgroundMaterial",uniforms:Qs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Se.getTransfer(M.colorSpace)!==Le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,b){T.getRGB(xa,Ou(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:x,addToRenderList:m}}function T0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(y,I,Y,U,L){let O=!1,z=d(U,Y,I);r!==z&&(r=z,l(r.object)),O=f(y,U,Y,L),O&&g(y,U,Y,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(y,I,Y,U),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,I,Y){let U=Y.wireframe===!0,L=n[y.id];L===void 0&&(L={},n[y.id]=L);let O=L[I.id];O===void 0&&(O={},L[I.id]=O);let z=O[U];return z===void 0&&(z=h(c()),O[U]=z),z}function h(y){let I=[],Y=[],U=[];for(let L=0;L<e;L++)I[L]=0,Y[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,I,Y,U){let L=r.attributes,O=I.attributes,z=0,nt=Y.getAttributes();for(let K in nt)if(nt[K].location>=0){let Tt=L[K],Ct=O[K];if(Ct===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Ct=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Ct=y.instanceColor)),Tt===void 0||Tt.attribute!==Ct||Ct&&Tt.data!==Ct.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(y,I,Y,U){let L={},O=I.attributes,z=0,nt=Y.getAttributes();for(let K in nt)if(nt[K].location>=0){let Tt=O[K];Tt===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor));let Ct={};Ct.attribute=Tt,Tt&&Tt.data&&(Ct.data=Tt.data),L[K]=Ct,z++}r.attributes=L,r.attributesNum=z,r.index=U}function x(){let y=r.newAttributes;for(let I=0,Y=y.length;I<Y;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){let Y=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;Y[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),L[y]!==I&&(i.vertexAttribDivisor(y,I),L[y]=I)}function T(){let y=r.newAttributes,I=r.enabledAttributes;for(let Y=0,U=I.length;Y<U;Y++)I[Y]!==y[Y]&&(i.disableVertexAttribArray(Y),I[Y]=0)}function b(y,I,Y,U,L,O,z){z===!0?i.vertexAttribIPointer(y,I,Y,L,O):i.vertexAttribPointer(y,I,Y,U,L,O)}function M(y,I,Y,U){x();let L=U.attributes,O=Y.getAttributes(),z=I.defaultAttributeValues;for(let nt in O){let K=O[nt];if(K.location>=0){let rt=L[nt];if(rt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){let Tt=rt.normalized,Ct=rt.itemSize,Mt=t.get(rt);if(Mt===void 0)continue;let $t=Mt.buffer,st=Mt.type,ot=Mt.bytesPerElement,Bt=st===i.INT||st===i.UNSIGNED_INT||rt.gpuType===Il;if(rt.isInterleavedBufferAttribute){let ft=rt.data,Ut=ft.stride,Jt=rt.offset;if(ft.isInstancedInterleavedBuffer){for(let kt=0;kt<K.locationSize;kt++)p(K.location+kt,ft.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let kt=0;kt<K.locationSize;kt++)m(K.location+kt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let kt=0;kt<K.locationSize;kt++)b(K.location+kt,Ct/K.locationSize,st,Tt,Ut*ot,(Jt+Ct/K.locationSize*kt)*ot,Bt)}else{if(rt.isInstancedBufferAttribute){for(let ft=0;ft<K.locationSize;ft++)p(K.location+ft,rt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ft=0;ft<K.locationSize;ft++)m(K.location+ft);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ft=0;ft<K.locationSize;ft++)b(K.location+ft,Ct/K.locationSize,st,Tt,Ct*ot,Ct/K.locationSize*ft*ot,Bt)}}else if(z!==void 0){let Tt=z[nt];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv(K.location,Tt);break;case 3:i.vertexAttrib3fv(K.location,Tt);break;case 4:i.vertexAttrib4fv(K.location,Tt);break;default:i.vertexAttrib1fv(K.location,Tt)}}}}T()}function H(){R();for(let y in n){let I=n[y];for(let Y in I){let U=I[Y];for(let L in U)u(U[L].object),delete U[L];delete I[Y]}delete n[y]}}function _(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let Y in I){let U=I[Y];for(let L in U)u(U[L].object),delete U[L];delete I[Y]}delete n[y.id]}function C(y){for(let I in n){let Y=n[I];if(Y[y.id]===void 0)continue;let U=Y[y.id];for(let L in U)u(U[L].object),delete U[L];delete Y[y.id]}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:H,releaseStatesOfGeometry:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function w0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function A0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let R=C===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!R)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=g>0,_=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:H,maxSamples:_}}function R0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let T=r?0:n,b=T*4,M=p.clippingState||null;c.value=M,M=u(g,h,b,f);for(let H=0;H!==b;++H)M[H]=e[H];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)a.copy(d[b]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function C0(i){let t=new WeakMap;function e(a,o){return o===mc?a.mapping=Ks:o===gc&&(a.mapping=js),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===mc||o===gc)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new $c(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var tr=class extends ka{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ws=4,Oh=[.125,.215,.35,.446,.526,.582],os=20,Jo=new tr,zh=new ae,Ko=null,jo=0,Qo=0,tc=!1,rs=(1+Math.sqrt(5))/2,Vs=1/rs,Bh=[new D(-rs,Vs,0),new D(rs,Vs,0),new D(-Vs,0,rs),new D(Vs,0,rs),new D(0,rs,-Vs),new D(0,rs,Vs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],er=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,jo,Qo),this._renderer.xr.enabled=tc,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:di,format:kn,colorSpace:Wi,depthBuffer:!1},s=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(r)),this._blurMaterial=I0(r,t,e)}return s}_compileMaterial(t){let e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,Jo)}_sceneToCubeUV(t,e,n,s){let o=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(zh),u.toneMapping=Fi,u.autoClear=!1;let f=new yn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Te(new ds,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(zh),x=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):T===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let b=this._cubeSize;va(s,T*b,p>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ks||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;va(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bh[(s-r-1)%Bh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Te(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],T=0;for(let C=0;C<os;++C){let R=C/x,S=Math.exp(-R*R/2);p.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;let M=this._sizeLods[s],H=3*M*(s>b-Ws?s-b+Ws:0),_=4*(this._cubeSize-M);va(e,H,_,3*M,2*M),c.setRenderTarget(e),c.render(d,Jo)}};function P0(i){let t=[],e=[],n=[],s=i,r=i-Ws+1+Oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ws?c=Oh[a-i+Ws-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let _=0;_<f;_++){let C=_%3*2/3-1,R=_>2?0:-1,S=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];T.set(S,x*g*_),b.set(h,m*g*_);let y=[_,_,_,_,_,_];M.set(y,p*g*_)}let H=new Ge;H.setAttribute("position",new un(T,x)),H.setAttribute("uv",new un(b,m)),H.setAttribute("faceIndex",new un(M,p)),t.push(H),s>Ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(i,t,e){let n=new An(i,t,e);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function I0(i,t,e){let n=new Float32Array(os),s=new D(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Vh(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Hh(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function D0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===mc||c===gc,u=c===Ks||c===js;if(l||u){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new er(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new er(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U0(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);for(let g in h.morphAttributes){let x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let T=f.array;x=f.version;for(let b=0,M=T.length;b<M;b+=3){let H=T[b+0],_=T[b+1],C=T[b+2];h.push(H,_,_,C,C,H)}}else if(g!==void 0){let T=g.array;x=g.version;for(let b=0,M=T.length/3-1;b<M;b+=3){let H=b+0,_=b+1,C=b+2;h.push(H,_,_,C,C,H)}}else return;let m=new(Nu(h)?Ba:za)(h,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function N0(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*x[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function F0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function O0(i,t,e){let n=new WeakMap,s=new Ye;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=o.attributes.position.count*b,H=1;M>t.maxTextureSize&&(H=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let _=new Float32Array(M*H*4*d),C=new Oa(_,M,H,d);C.type=oi,C.needsUpdate=!0;let R=b*4;for(let y=0;y<d;y++){let I=m[y],Y=p[y],U=T[y],L=M*H*4*y;for(let O=0;O<I.count;O++){let z=O*R;f===!0&&(s.fromBufferAttribute(I,O),_[L+z+0]=s.x,_[L+z+1]=s.y,_[L+z+2]=s.z,_[L+z+3]=0),g===!0&&(s.fromBufferAttribute(Y,O),_[L+z+4]=s.x,_[L+z+5]=s.y,_[L+z+6]=s.z,_[L+z+7]=0),x===!0&&(s.fromBufferAttribute(U,O),_[L+z+8]=s.x,_[L+z+9]=s.y,_[L+z+10]=s.z,_[L+z+11]=U.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new vt(M,H)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function z0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Vi=class extends Ln{constructor(t,e,n,s,r,a,o,c,l,u=Ys){if(u!==Ys&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ys&&(n=hs),n===void 0&&u===Bi&&(n=zi),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bu=new Ln,Gh=new Vi(1,1),ku=new Oa,Vu=new Yc,Hu=new Va,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function cr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oo(i,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),sn(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),sn(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),sn(e,n)}}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function J0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=Du,r=Gh):r=Bu,e.setTexture2D(t||r,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hu,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function sg(i){switch(i){case 5126:return B0;case 35664:return k0;case 35665:return V0;case 35666:return H0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return $0;case 5125:return J0;case 36294:return K0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,t){i.uniform1fv(this.addr,t)}function ag(i,t){let e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function og(i,t){let e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function cg(i,t){let e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function lg(i,t){let e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hg(i,t){let e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ug(i,t){let e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dg(i,t){i.uniform1iv(this.addr,t)}function fg(i,t){i.uniform2iv(this.addr,t)}function pg(i,t){i.uniform3iv(this.addr,t)}function mg(i,t){i.uniform4iv(this.addr,t)}function gg(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function vg(i,t){i.uniform3uiv(this.addr,t)}function _g(i,t){i.uniform4uiv(this.addr,t)}function yg(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bu,r[a])}function Mg(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vu,r[a])}function bg(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hu,r[a])}function Sg(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ku,r[a])}function Eg(i){switch(i){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return cg;case 35674:return lg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Sg}}var Jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},Kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ec=/(\w+)(\])?(\[|\.)?/g;function $h(i,t){i.seq.push(t),i.map[t.id]=t}function Tg(i,t,e){let n=i.name,s=n.length;for(ec.lastIndex=0;;){let r=ec.exec(n),a=ec.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){$h(e,l===void 0?new Jc(o,i,t):new Kc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new jc(o),$h(e,d)),e=d}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Tg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Jh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wg=37297,Ag=0;function Rg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Kh=new me;function Cg(i){Se._getMatrix(Kh,Se.workingColorSpace,i);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case ao:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(t),a)}else return s}function Pg(i,t){let e=Cg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ig(i,t){let e;switch(t){case Hd:e="Linear";break;case Gd:e="Reinhard";break;case Wd:e="Cineon";break;case Xd:e="ACESFilmic";break;case Yd:e="AgX";break;case Pl:e="Neutral";break;case qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _a=new D;function Dg(){Se.getLuminanceCoefficients(_a);let i=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function Ug(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ng(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function Qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(Fg,zg)}var Og=new Map;function zg(i,t){let e=fe[t];if(e===void 0){let n=Og.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qc(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(i){return i.replace(Bg,kg)}function kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Vg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Hg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case js:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function Wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mu:t="ENVMAP_BLENDING_MULTIPLY";break;case kd:t="ENVMAP_BLENDING_MIX";break;case Vd:t="ENVMAP_BLENDING_ADD";break}return t}function Xg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Vg(e),l=Hg(e),u=Gg(e),d=Wg(e),h=Xg(e),f=Lg(e),g=Ug(r),x=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?fe.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Qc(a),a=Qh(a,e),a=tu(a,e),o=Qc(o),o=Qh(o,e),o=tu(o,e),a=eu(a),o=eu(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=T+m+a,M=T+p+o,H=Jh(s,s.VERTEX_SHADER,b),_=Jh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,H),s.attachShader(x,_),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(I){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(H).trim(),L=s.getShaderInfoLog(_).trim(),O=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,H,_);else{let nt=jh(s,H,"vertex"),K=jh(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+nt+`
`+K)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(U===""||L==="")&&(z=!1);z&&(I.diagnostics={runnable:O,programLog:Y,vertexShader:{log:U,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(H),s.deleteShader(_),R=new $s(s,x),S=Ng(s,x)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,wg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=H,this.fragmentShader=_,this}var Yg=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new el(t),e.set(t,n)),n}},el=class{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}};function Zg(i,t,e,n,s,r,a){let o=new Pr,c=new tl,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,Y,U){let L=Y.fog,O=U.geometry,z=S.isMeshStandardMaterial?Y.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),K=nt&&nt.mapping===ro?nt.image.height:null,rt=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ct=Tt!==void 0?Tt.length:0,Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let $t,st,ot,Bt;if(rt){let ut=ri[rt];$t=ut.vertexShader,st=ut.fragmentShader}else $t=S.vertexShader,st=S.fragmentShader,c.update(S),ot=c.getVertexShaderID(S),Bt=c.getFragmentShaderID(S);let ft=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Jt=U.isInstancedMesh===!0,kt=U.isBatchedMesh===!0,ce=!!S.map,pt=!!S.matcap,Pt=!!nt,N=!!S.aoMap,Ot=!!S.lightMap,xt=!!S.bumpMap,wt=!!S.normalMap,At=!!S.displacementMap,Xt=!!S.emissiveMap,dt=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,F=S.clearcoat>0,$=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,yt=S.transmission>0,Et=v&&!!S.anisotropyMap,zt=F&&!!S.clearcoatMap,re=F&&!!S.clearcoatNormalMap,ct=F&&!!S.clearcoatRoughnessMap,It=it&&!!S.iridescenceMap,Dt=it&&!!S.iridescenceThicknessMap,jt=Q&&!!S.sheenColorMap,Rt=Q&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,X=!!S.specularColorMap,Z=!!S.specularIntensityMap,A=yt&&!!S.transmissionMap,W=yt&&!!S.thicknessMap,B=!!S.gradientMap,k=!!S.alphaMap,tt=S.alphaTest>0,G=!!S.alphaHash,lt=!!S.extensions,at=Fi;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(at=i.toneMapping);let gt={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:st,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:Bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:kt,batchingColor:kt&&U._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&U.instanceColor!==null,instancingMorph:Jt&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Wi,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:pt,envMap:Pt,envMapMode:Pt&&nt.mapping,envMapCubeUVHeight:K,aoMap:N,lightMap:Ot,bumpMap:xt,normalMap:wt,displacementMap:h&&At,emissiveMap:Xt,normalMapObjectSpace:wt&&S.normalMapType===Kd,normalMapTangentSpace:wt&&S.normalMapType===zl,metalnessMap:dt,roughnessMap:E,anisotropy:v,anisotropyMap:Et,clearcoat:F,clearcoatMap:zt,clearcoatNormalMap:re,clearcoatRoughnessMap:ct,dispersion:$,iridescence:it,iridescenceMap:It,iridescenceThicknessMap:Dt,sheen:Q,sheenColorMap:jt,sheenRoughnessMap:Rt,specularMap:Qt,specularColorMap:X,specularIntensityMap:Z,transmission:yt,transmissionMap:A,thicknessMap:W,gradientMap:B,opaque:S.transparent===!1&&S.blending===qs&&S.alphaToCoverage===!1,alphaMap:k,alphaTest:tt,alphaHash:G,combine:S.combine,mapUv:ce&&x(S.map.channel),aoMapUv:N&&x(S.aoMap.channel),lightMapUv:Ot&&x(S.lightMap.channel),bumpMapUv:xt&&x(S.bumpMap.channel),normalMapUv:wt&&x(S.normalMap.channel),displacementMapUv:At&&x(S.displacementMap.channel),emissiveMapUv:Xt&&x(S.emissiveMap.channel),metalnessMapUv:dt&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:Et&&x(S.anisotropyMap.channel),clearcoatMapUv:zt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(S.sheenRoughnessMap.channel),specularMapUv:Qt&&x(S.specularMap.channel),specularColorMapUv:X&&x(S.specularColorMap.channel),specularIntensityMapUv:Z&&x(S.specularIntensityMap.channel),transmissionMapUv:A&&x(S.transmissionMap.channel),thicknessMapUv:W&&x(S.thicknessMap.channel),alphaMapUv:k&&x(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(wt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(ce||k),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ut,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Mt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&Se.getTransfer(S.map.colorSpace)===Le,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&Se.getTransfer(S.emissiveMap.colorSpace)===Le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(T(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){let y=g[S.type],I;if(y){let Y=ri[y];I=bs.clone(Y.uniforms)}else I=S.uniforms;return I}function H(S,y){let I;for(let Y=0,U=u.length;Y<U;Y++){let L=u[Y];if(L.cacheKey===y){I=L,++I.usedTimes;break}}return I===void 0&&(I=new qg(i,y,S,r),u.push(I)),I}function _(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:H,releaseProgram:_,releaseShaderCache:C,programs:u,dispose:R}}function $g(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function iu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function su(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,h,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function o(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||Jg),n.length>1&&n.sort(h||iu),s.length>1&&s.sort(h||iu)}function u(){for(let d=t,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Kg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new su,i.set(n,[a])):s>=r.length?(a=new su,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ae};break;case"SpotLight":e={position:new D,direction:new D,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tx=0;function ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nx(i){let t=new jg,e=Qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new ye,a=new ye;function o(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,b=0,M=0,H=0,_=0,C=0;l.sort(ex);for(let S=0,y=l.length;S<y;S++){let I=l[S],Y=I.color,U=I.intensity,L=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=Y.r*U,d+=Y.g*U,h+=Y.b*U;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],U);C++}else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,K=e.get(I);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=I.shadow.matrix,T++}n.directional[f]=z,f++}else if(I.isSpotLight){let z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(Y).multiplyScalar(U),z.distance=L,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[x]=z;let nt=I.shadow;if(I.map&&(n.spotLightMap[H]=I.map,H++,nt.updateMatrices(I),I.castShadow&&_++),n.spotLightMatrix[x]=nt.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=O,M++}x++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(Y).multiplyScalar(U),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=z,m++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let nt=I.shadow,K=e.get(I);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=z,g++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(U),z.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==b||R.numSpotShadows!==M||R.numSpotMaps!==H||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+H-_,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=b,R.numSpotShadows=M,R.numSpotMaps=H,R.numLightProbes=C,n.version=tx++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let b=l[p];if(b.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function ru(i){let t=new nx(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ix(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ru(i),t.set(s,[o])):r>=a.length?(o=new ru(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var nl=class extends li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},il=class extends li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function ax(i,t,e){let n=new Ir,s=new vt,r=new vt,a=new Ye,o=new nl({depthPacking:Jd}),c=new il,l={},u=e.maxTextureSize,d={[Oi]:vn,[vn]:Oi,[wn]:wn},h=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Te(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let p=this.type;this.render=function(_,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(en),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let U=p!==Mi&&this.type===Mi,L=p===Mi&&this.type!==Mi;for(let O=0,z=_.length;O<z;O++){let nt=_[O],K=nt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let rt=K.getFrameExtents();if(s.multiply(rt),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,K.mapSize.y=r.y)),K.map===null||U===!0||L===!0){let Ct=this.type!==Mi?{minFilter:_n,magFilter:_n}:{};K.map!==null&&K.map.dispose(),K.map=new An(s.x,s.y,Ct),K.map.texture.name=nt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let Tt=K.getViewportCount();for(let Ct=0;Ct<Tt;Ct++){let Mt=K.getViewport(Ct);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),Y.viewport(a),K.updateMatrices(nt,Ct),n=K.getFrustum(),M(C,R,K.camera,nt,this.type)}K.isPointLightShadow!==!0&&this.type===Mi&&T(K,R),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,I)};function T(_,C){let R=t.update(x);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new An(s.x,s.y)),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(C,null,R,h,x,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(C,null,R,f,x,null)}function b(_,C,R,S){let y=null,I=R.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let Y=y.uuid,U=C.uuid,L=l[Y];L===void 0&&(L={},l[Y]=L);let O=L[U];O===void 0&&(O=y.clone(),L[U]=O,C.addEventListener("dispose",H)),y=O}if(y.visible=C.visible,y.wireframe=C.wireframe,S===Mi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let Y=i.properties.get(y);Y.light=R}return y}function M(_,C,R,S,y){if(_.visible===!1)return;if(_.layers.test(C.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===Mi)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,_.matrixWorld);let U=t.update(_),L=_.material;if(Array.isArray(L)){let O=U.groups;for(let z=0,nt=O.length;z<nt;z++){let K=O[z],rt=L[K.materialIndex];if(rt&&rt.visible){let Tt=b(_,rt,S,y);_.onBeforeShadow(i,_,C,R,U,Tt,K),i.renderBufferDirect(R,null,U,Tt,_,K),_.onAfterShadow(i,_,C,R,U,Tt,K)}}}else if(L.visible){let O=b(_,L,S,y);_.onBeforeShadow(i,_,C,R,U,O,null),i.renderBufferDirect(R,null,U,O,_,null),_.onAfterShadow(i,_,C,R,U,O,null)}}let Y=_.children;for(let U=0,L=Y.length;U<L;U++)M(Y[U],C,R,S,y)}function H(_){_.target.removeEventListener("dispose",H);for(let R in l){let S=l[R],y=_.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var ox={[cc]:lc,[hc]:fc,[uc]:pc,[Js]:dc,[lc]:cc,[fc]:hc,[pc]:uc,[dc]:Js};function cx(i,t){function e(){let A=!1,W=new Ye,B=null,k=new Ye(0,0,0,0);return{setMask:function(tt){B!==tt&&!A&&(i.colorMask(tt,tt,tt,tt),B=tt)},setLocked:function(tt){A=tt},setClear:function(tt,G,lt,at,gt){gt===!0&&(tt*=at,G*=at,lt*=at),W.set(tt,G,lt,at),k.equals(W)===!1&&(i.clearColor(tt,G,lt,at),k.copy(W))},reset:function(){A=!1,B=null,k.set(-1,0,0,0)}}}function n(){let A=!1,W=!1,B=null,k=null,tt=null;return{setReversed:function(G){if(W!==G){let lt=t.get("EXT_clip_control");W?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);let at=tt;tt=null,this.setClear(at)}W=G},getReversed:function(){return W},setTest:function(G){G?ft(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(G){B!==G&&!A&&(i.depthMask(G),B=G)},setFunc:function(G){if(W&&(G=ox[G]),k!==G){switch(G){case cc:i.depthFunc(i.NEVER);break;case lc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=G}},setLocked:function(G){A=G},setClear:function(G){tt!==G&&(W&&(G=1-G),i.clearDepth(G),tt=G)},reset:function(){A=!1,B=null,k=null,tt=null,W=!1}}}function s(){let A=!1,W=null,B=null,k=null,tt=null,G=null,lt=null,at=null,gt=null;return{setTest:function(ut){A||(ut?ft(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(ut){W!==ut&&!A&&(i.stencilMask(ut),W=ut)},setFunc:function(ut,bt,ht){(B!==ut||k!==bt||tt!==ht)&&(i.stencilFunc(ut,bt,ht),B=ut,k=bt,tt=ht)},setOp:function(ut,bt,ht){(G!==ut||lt!==bt||at!==ht)&&(i.stencilOp(ut,bt,ht),G=ut,lt=bt,at=ht)},setLocked:function(ut){A=ut},setClear:function(ut){gt!==ut&&(i.clearStencil(ut),gt=ut)},reset:function(){A=!1,W=null,B=null,k=null,tt=null,G=null,lt=null,at=null,gt=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,b=null,M=null,H=null,_=null,C=new ae(0,0,0),R=0,S=!1,y=null,I=null,Y=null,U=null,L=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,nt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=nt>=1):K.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=nt>=2);let rt=null,Tt={},Ct=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),$t=new Ye().fromArray(Ct),st=new Ye().fromArray(Mt);function ot(A,W,B,k){let tt=new Uint8Array(4),G=i.createTexture();i.bindTexture(A,G),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<B;lt++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(W,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(W+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return G}let Bt={};Bt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(Js),xt(!1),wt(oh),ft(i.CULL_FACE),N(en);function ft(A){u[A]!==!0&&(i.enable(A),u[A]=!0)}function Ut(A){u[A]!==!1&&(i.disable(A),u[A]=!1)}function Jt(A,W){return d[A]!==W?(i.bindFramebuffer(A,W),d[A]=W,A===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=W),A===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=W),!0):!1}function kt(A,W){let B=f,k=!1;if(A){B=h.get(W),B===void 0&&(B=[],h.set(W,B));let tt=A.textures;if(B.length!==tt.length||B[0]!==i.COLOR_ATTACHMENT0){for(let G=0,lt=tt.length;G<lt;G++)B[G]=i.COLOR_ATTACHMENT0+G;B.length=tt.length,k=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,k=!0);k&&i.drawBuffers(B)}function ce(A){return g!==A?(i.useProgram(A),g=A,!0):!1}let pt={[Xn]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};pt[Rd]=i.MIN,pt[Cd]=i.MAX;let Pt={[or]:i.ZERO,[Pd]:i.ONE,[Id]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[so]:i.DST_COLOR,[io]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Ud]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(A,W,B,k,tt,G,lt,at,gt,ut){if(A===en){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),A!==Cl){if(A!==m||ut!==S){if((p!==Xn||M!==Xn)&&(i.blendEquation(i.FUNC_ADD),p=Xn,M=Xn),ut)switch(A){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}T=null,b=null,H=null,_=null,C.set(0,0,0),R=0,m=A,S=ut}return}tt=tt||W,G=G||B,lt=lt||k,(W!==p||tt!==M)&&(i.blendEquationSeparate(pt[W],pt[tt]),p=W,M=tt),(B!==T||k!==b||G!==H||lt!==_)&&(i.blendFuncSeparate(Pt[B],Pt[k],Pt[G],Pt[lt]),T=B,b=k,H=G,_=lt),(at.equals(C)===!1||gt!==R)&&(i.blendColor(at.r,at.g,at.b,gt),C.copy(at),R=gt),m=A,S=!1}function Ot(A,W){A.side===wn?Ut(i.CULL_FACE):ft(i.CULL_FACE);let B=A.side===vn;W&&(B=!B),xt(B),A.blending===qs&&A.transparent===!1?N(en):N(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let k=A.stencilWrite;o.setTest(k),k&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Xt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(A){y!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),y=A)}function wt(A){A!==Ed?(ft(i.CULL_FACE),A!==I&&(A===oh?i.cullFace(i.BACK):A===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),I=A}function At(A){A!==Y&&(z&&i.lineWidth(A),Y=A)}function Xt(A,W,B){A?(ft(i.POLYGON_OFFSET_FILL),(U!==W||L!==B)&&(i.polygonOffset(W,B),U=W,L=B)):Ut(i.POLYGON_OFFSET_FILL)}function dt(A){A?ft(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function E(A){A===void 0&&(A=i.TEXTURE0+O-1),rt!==A&&(i.activeTexture(A),rt=A)}function v(A,W,B){B===void 0&&(rt===null?B=i.TEXTURE0+O-1:B=rt);let k=Tt[B];k===void 0&&(k={type:void 0,texture:void 0},Tt[B]=k),(k.type!==A||k.texture!==W)&&(rt!==B&&(i.activeTexture(B),rt=B),i.bindTexture(A,W||Bt[A]),k.type=A,k.texture=W)}function F(){let A=Tt[rt];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function jt(A){$t.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),$t.copy(A))}function Rt(A){st.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),st.copy(A))}function Qt(A,W){let B=l.get(W);B===void 0&&(B=new WeakMap,l.set(W,B));let k=B.get(A);k===void 0&&(k=i.getUniformBlockIndex(W,A.name),B.set(A,k))}function X(A,W){let k=l.get(W).get(A);c.get(W)!==k&&(i.uniformBlockBinding(W,k,A.__bindingPointIndex),c.set(W,k))}function Z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,Tt={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,b=null,M=null,H=null,_=null,C=new ae(0,0,0),R=0,S=!1,y=null,I=null,Y=null,U=null,L=null,$t.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Ut,bindFramebuffer:Jt,drawBuffers:kt,useProgram:ce,setBlending:N,setMaterial:Ot,setFlipSided:xt,setCullFace:wt,setLineWidth:At,setPolygonOffset:Xt,setScissorTest:dt,activeTexture:E,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:it,texImage2D:It,texImage3D:Dt,updateUBOMapping:Qt,uniformBlockBinding:X,texStorage2D:re,texStorage3D:ct,texSubImage2D:Q,texSubImage3D:yt,compressedTexSubImage2D:Et,compressedTexSubImage3D:zt,scissor:jt,viewport:Rt,reset:Z}}function au(i,t,e,n){let s=lx(n);switch(e){case wu:return i*t;case Ru:return i*t;case Cu:return i*t*2;case Ul:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case Pu:return i*t*2/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case Au:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case Ol:return i*t*4/s.components*s.byteLength;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:case Mc:return Math.max(i,16)*Math.max(t,8)/4;case vc:case yc:return Math.max(i,8)*Math.max(t,8)/2;case bc:case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Bc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Iu:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hc:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lx(i){switch(i){case Vn:case Su:return{byteLength:1,components:1};case Rr:case Eu:case di:return{byteLength:2,components:1};case Dl:case Ll:return{byteLength:2,components:4};case hs:case Il:case oi:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Na("canvas")}function x(E,v,F){let $=1,it=dt(E);if((it.width>F||it.height>F)&&($=F/Math.max(it.width,it.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Q=Math.floor($*it.width),yt=Math.floor($*it.height);d===void 0&&(d=g(Q,yt));let Et=v?g(Q,yt):d;return Et.width=Q,Et.height=yt,Et.getContext("2d").drawImage(E,0,0,Q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+yt+")."),Et}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,v,F,$,it=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=v;if(v===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RG8UI),F===i.UNSIGNED_SHORT&&(Q=i.RG16UI),F===i.UNSIGNED_INT&&(Q=i.RG32UI),F===i.BYTE&&(Q=i.RG8I),F===i.SHORT&&(Q=i.RG16I),F===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),F===i.UNSIGNED_INT&&(Q=i.RGB32UI),F===i.BYTE&&(Q=i.RGB8I),F===i.SHORT&&(Q=i.RGB16I),F===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),F===i.UNSIGNED_INT&&(Q=i.RGBA32UI),F===i.BYTE&&(Q=i.RGBA8I),F===i.SHORT&&(Q=i.RGBA16I),F===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),v===i.RGBA){let yt=it?ao:Se.getTransfer($);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=yt===Le?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(E,v){let F;return E?v===null||v===hs||v===zi?F=i.DEPTH24_STENCIL8:v===oi?F=i.DEPTH32F_STENCIL8:v===Rr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hs||v===zi?F=i.DEPTH_COMPONENT24:v===oi?F=i.DEPTH_COMPONENT32F:v===Rr&&(F=i.DEPTH_COMPONENT16),F}function H(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==_n&&E.minFilter!==ai?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function _(E){let v=E.target;v.removeEventListener("dispose",_),R(v),v.isVideoTexture&&u.delete(v)}function C(E){let v=E.target;v.removeEventListener("dispose",C),y(v)}function R(E){let v=n.get(E);if(v.__webglInit===void 0)return;let F=E.source,$=h.get(F);if($){let it=$[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(E),Object.keys($).length===0&&h.delete(F)}n.remove(E)}function S(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let F=E.source,$=h.get(F);delete $[v.__cacheKey],a.memory.textures--}function y(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let it=0;it<v.__webglFramebuffer[$].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[$][it]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=E.textures;for(let $=0,it=F.length;$<it;$++){let Q=n.get(F[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(E)}let I=0;function Y(){I=0}function U(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function L(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function O(E,v){let F=n.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(F,E,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function z(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){st(F,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function nt(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){st(F,E,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function K(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let rt={[Ei]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[xc]:i.MIRRORED_REPEAT},Tt={[_n]:i.NEAREST,[Zd]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Ct={[jd]:i.NEVER,[rf]:i.ALWAYS,[Qd]:i.LESS,[Du]:i.LEQUAL,[tf]:i.EQUAL,[sf]:i.GEQUAL,[ef]:i.GREATER,[nf]:i.NOTEQUAL};function Mt(E,v){if(v.type===oi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ai||v.magFilter===Ro||v.magFilter===Qr||v.magFilter===ls||v.minFilter===ai||v.minFilter===Ro||v.minFilter===Qr||v.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,rt[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,rt[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,rt[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Tt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Tt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_n||v.minFilter!==Qr&&v.minFilter!==ls||v.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",_));let $=v.source,it=h.get($);it===void 0&&(it={},h.set($,it));let Q=L(v);if(Q!==E.__cacheKey){it[Q]===void 0&&(it[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),it[Q].usedTimes++;let yt=it[E.__cacheKey];yt!==void 0&&(it[E.__cacheKey].usedTimes--,yt.usedTimes===0&&S(v)),E.__cacheKey=Q,E.__webglTexture=it[Q].texture}return F}function st(E,v,F){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let it=$t(E,v),Q=v.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+F);let yt=n.get(Q);if(Q.version!==yt.__version||it===!0){e.activeTexture(i.TEXTURE0+F);let Et=Se.getPrimaries(Se.workingColorSpace),zt=v.colorSpace===Ni?null:Se.getPrimaries(v.colorSpace),re=v.colorSpace===Ni||Et===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ct=x(v.image,!1,s.maxTextureSize);ct=Xt(v,ct);let It=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),jt=b(v.internalFormat,It,Dt,v.colorSpace,v.isVideoTexture);Mt($,v);let Rt,Qt=v.mipmaps,X=v.isVideoTexture!==!0,Z=yt.__version===void 0||it===!0,A=Q.dataReady,W=H(v,ct);if(v.isDepthTexture)jt=M(v.format===Bi,v.type),Z&&(X?e.texStorage2D(i.TEXTURE_2D,1,jt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,jt,ct.width,ct.height,0,It,Dt,null));else if(v.isDataTexture)if(Qt.length>0){X&&Z&&e.texStorage2D(i.TEXTURE_2D,W,jt,Qt[0].width,Qt[0].height);for(let B=0,k=Qt.length;B<k;B++)Rt=Qt[B],X?A&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Rt.width,Rt.height,It,Dt,Rt.data):e.texImage2D(i.TEXTURE_2D,B,jt,Rt.width,Rt.height,0,It,Dt,Rt.data);v.generateMipmaps=!1}else X?(Z&&e.texStorage2D(i.TEXTURE_2D,W,jt,ct.width,ct.height),A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,It,Dt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,jt,ct.width,ct.height,0,It,Dt,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){X&&Z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,jt,Qt[0].width,Qt[0].height,ct.depth);for(let B=0,k=Qt.length;B<k;B++)if(Rt=Qt[B],v.format!==kn)if(It!==null)if(X){if(A)if(v.layerUpdates.size>0){let tt=au(Rt.width,Rt.height,v.format,v.type);for(let G of v.layerUpdates){let lt=Rt.data.subarray(G*tt/Rt.data.BYTES_PER_ELEMENT,(G+1)*tt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,G,Rt.width,Rt.height,1,It,lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Rt.width,Rt.height,ct.depth,It,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,jt,Rt.width,Rt.height,ct.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?A&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Rt.width,Rt.height,ct.depth,It,Dt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,jt,Rt.width,Rt.height,ct.depth,0,It,Dt,Rt.data)}else{X&&Z&&e.texStorage2D(i.TEXTURE_2D,W,jt,Qt[0].width,Qt[0].height);for(let B=0,k=Qt.length;B<k;B++)Rt=Qt[B],v.format!==kn?It!==null?X?A&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,Rt.width,Rt.height,It,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,B,jt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?A&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Rt.width,Rt.height,It,Dt,Rt.data):e.texImage2D(i.TEXTURE_2D,B,jt,Rt.width,Rt.height,0,It,Dt,Rt.data)}else if(v.isDataArrayTexture)if(X){if(Z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,jt,ct.width,ct.height,ct.depth),A)if(v.layerUpdates.size>0){let B=au(ct.width,ct.height,v.format,v.type);for(let k of v.layerUpdates){let tt=ct.data.subarray(k*B/ct.data.BYTES_PER_ELEMENT,(k+1)*B/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,k,ct.width,ct.height,1,It,Dt,tt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,It,Dt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,ct.width,ct.height,ct.depth,0,It,Dt,ct.data);else if(v.isData3DTexture)X?(Z&&e.texStorage3D(i.TEXTURE_3D,W,jt,ct.width,ct.height,ct.depth),A&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,It,Dt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,jt,ct.width,ct.height,ct.depth,0,It,Dt,ct.data);else if(v.isFramebufferTexture){if(Z)if(X)e.texStorage2D(i.TEXTURE_2D,W,jt,ct.width,ct.height);else{let B=ct.width,k=ct.height;for(let tt=0;tt<W;tt++)e.texImage2D(i.TEXTURE_2D,tt,jt,B,k,0,It,Dt,null),B>>=1,k>>=1}}else if(Qt.length>0){if(X&&Z){let B=dt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,W,jt,B.width,B.height)}for(let B=0,k=Qt.length;B<k;B++)Rt=Qt[B],X?A&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,It,Dt,Rt):e.texImage2D(i.TEXTURE_2D,B,jt,It,Dt,Rt);v.generateMipmaps=!1}else if(X){if(Z){let B=dt(ct);e.texStorage2D(i.TEXTURE_2D,W,jt,B.width,B.height)}A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Dt,ct)}else e.texImage2D(i.TEXTURE_2D,0,jt,It,Dt,ct);m(v)&&p($),yt.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ot(E,v,F){if(v.image.length!==6)return;let $=$t(E,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let Q=n.get(it);if(it.version!==Q.__version||$===!0){e.activeTexture(i.TEXTURE0+F);let yt=Se.getPrimaries(Se.workingColorSpace),Et=v.colorSpace===Ni?null:Se.getPrimaries(v.colorSpace),zt=v.colorSpace===Ni||yt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let re=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,It=[];for(let k=0;k<6;k++)!re&&!ct?It[k]=x(v.image[k],!0,s.maxCubemapSize):It[k]=ct?v.image[k].image:v.image[k],It[k]=Xt(v,It[k]);let Dt=It[0],jt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),Qt=b(v.internalFormat,jt,Rt,v.colorSpace),X=v.isVideoTexture!==!0,Z=Q.__version===void 0||$===!0,A=it.dataReady,W=H(v,Dt);Mt(i.TEXTURE_CUBE_MAP,v);let B;if(re){X&&Z&&e.texStorage2D(i.TEXTURE_CUBE_MAP,W,Qt,Dt.width,Dt.height);for(let k=0;k<6;k++){B=It[k].mipmaps;for(let tt=0;tt<B.length;tt++){let G=B[tt];v.format!==kn?jt!==null?X?A&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt,0,0,G.width,G.height,jt,G.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt,Qt,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt,0,0,G.width,G.height,jt,Rt,G.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt,Qt,G.width,G.height,0,jt,Rt,G.data)}}}else{if(B=v.mipmaps,X&&Z){B.length>0&&W++;let k=dt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,W,Qt,k.width,k.height)}for(let k=0;k<6;k++)if(ct){X?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,It[k].width,It[k].height,jt,Rt,It[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Qt,It[k].width,It[k].height,0,jt,Rt,It[k].data);for(let tt=0;tt<B.length;tt++){let lt=B[tt].image[k].image;X?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt+1,0,0,lt.width,lt.height,jt,Rt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt+1,Qt,lt.width,lt.height,0,jt,Rt,lt.data)}}else{X?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,jt,Rt,It[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Qt,jt,Rt,It[k]);for(let tt=0;tt<B.length;tt++){let G=B[tt];X?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt+1,0,0,jt,Rt,G.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,tt+1,Qt,jt,Rt,G.image[k])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Q.__version=it.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Bt(E,v,F,$,it,Q){let yt=r.convert(F.format,F.colorSpace),Et=r.convert(F.type),zt=b(F.internalFormat,yt,Et,F.colorSpace),re=n.get(v),ct=n.get(F);if(ct.__renderTarget=v,!re.__hasExternalTextures){let It=Math.max(1,v.width>>Q),Dt=Math.max(1,v.height>>Q);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,zt,It,Dt,v.depth,0,yt,Et,null):e.texImage2D(it,Q,zt,It,Dt,0,yt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,it,ct.__webglTexture,0,xt(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,it,ct.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let $=v.depthTexture,it=$&&$.isDepthTexture?$.type:null,Q=M(v.stencilBuffer,it),yt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=xt(v);wt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,Q,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,E)}else{let $=v.textures;for(let it=0;it<$.length;it++){let Q=$[it],yt=r.convert(Q.format,Q.colorSpace),Et=r.convert(Q.type),zt=b(Q.internalFormat,yt,Et,Q.colorSpace),re=xt(v);F&&wt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,zt,v.width,v.height):wt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,zt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,zt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O(v.depthTexture,0);let it=$.__webglTexture,Q=xt(v);if(v.depthTexture.format===Ys)wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===Bi)wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Jt(E){let v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",it)};$.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),ft(v.__webglDepthbuffer[$],E,!1);else{let it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ft(v.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,v,F){let $=n.get(E);v!==void 0&&Bt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Jt(E)}function ce(E){let v=E.texture,F=n.get(E),$=n.get(v);E.addEventListener("dispose",C);let it=E.textures,Q=E.isWebGLCubeRenderTarget===!0,yt=it.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),Q){F.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Et]=[];for(let zt=0;zt<v.mipmaps.length;zt++)F.__webglFramebuffer[Et][zt]=i.createFramebuffer()}else F.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Et=0;Et<v.mipmaps.length;Et++)F.__webglFramebuffer[Et]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let Et=0,zt=it.length;Et<zt;Et++){let re=n.get(it[Et]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&wt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Et=0;Et<it.length;Et++){let zt=it[Et];F.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Et]);let re=r.convert(zt.format,zt.colorSpace),ct=r.convert(zt.type),It=b(zt.internalFormat,re,ct,zt.colorSpace,E.isXRRenderTarget===!0),Dt=xt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,It,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,F.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v);for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0)for(let zt=0;zt<v.mipmaps.length;zt++)Bt(F.__webglFramebuffer[Et][zt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt);else Bt(F.__webglFramebuffer[Et],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let Et=0,zt=it.length;Et<zt;Et++){let re=it[Et],ct=n.get(re);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Mt(i.TEXTURE_2D,re),Bt(F.__webglFramebuffer,E,re,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(re)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Et=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,$.__webglTexture),Mt(Et,v),v.mipmaps&&v.mipmaps.length>0)for(let zt=0;zt<v.mipmaps.length;zt++)Bt(F.__webglFramebuffer[zt],E,v,i.COLOR_ATTACHMENT0,Et,zt);else Bt(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Et,0);m(v)&&p(Et),e.unbindTexture()}E.depthBuffer&&Jt(E)}function pt(E){let v=E.textures;for(let F=0,$=v.length;F<$;F++){let it=v[F];if(m(it)){let Q=T(E),yt=n.get(it).__webglTexture;e.bindTexture(Q,yt),p(Q),e.unbindTexture()}}}let Pt=[],N=[];function Ot(E){if(E.samples>0){if(wt(E)===!1){let v=E.textures,F=E.width,$=E.height,it=i.COLOR_BUFFER_BIT,Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(E),Et=v.length>1;if(Et)for(let zt=0;zt<v.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let zt=0;zt<v.length;zt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[zt]);let re=n.get(v[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,it,i.NEAREST),c===!0&&(Pt.length=0,N.length=0,Pt.push(i.COLOR_ATTACHMENT0+zt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Pt.push(Q),N.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let zt=0;zt<v.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[zt]);let re=n.get(v[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function xt(E){return Math.min(s.maxSamples,E.samples)}function wt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(E){let v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Xt(E,v){let F=E.colorSpace,$=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Wi&&F!==Ni&&(Se.getTransfer(F)===Le?($!==kn||it!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function dt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=Y,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=nt,this.setTextureCube=K,this.rebindTextures=kt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=wt}function ux(i,t){function e(n,s=Ni){let r,a=Se.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.BYTE;if(n===Eu)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===hs)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===di)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===Au)return i.RGB;if(n===kn)return i.RGBA;if(n===Ru)return i.LUMINANCE;if(n===Cu)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===Pu)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(a===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===_c||n===yc||n===Mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Sc||n===Ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Sc)return a===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ec)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Fc||n===Oc||n===zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Bc||n===kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return a===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===Vc||n===Hc||n===Gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sl=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},dx={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends Ti{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,x=new rl,m=e.getContextAttributes(),p=null,T=null,b=[],M=[],H=new vt,_=null,C=new Tn;C.viewport=new Ye;let R=new Tn;R.viewport=new Ye;let S=[C,R],y=new sl,I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ot=b[st];return ot===void 0&&(ot=new Er,b[st]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(st){let ot=b[st];return ot===void 0&&(ot=new Er,b[st]=ot),ot.getGripSpace()},this.getHand=function(st){let ot=b[st];return ot===void 0&&(ot=new Er,b[st]=ot),ot.getHandSpace()};function U(st){let ot=M.indexOf(st.inputSource);if(ot===-1)return;let Bt=b[ot];Bt!==void 0&&(Bt.update(st.inputSource,st.frame,l||a),Bt.dispatchEvent({type:st.type,data:st.inputSource}))}function L(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",O);for(let st=0;st<b.length;st++){let ot=M[st];ot!==null&&(M[st]=null,b[st].disconnect(ot))}I=null,Y=null,x.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,T=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",L),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(H),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new An(f.framebufferWidth,f.framebufferHeight,{format:kn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,Bt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Bi:Ys,Bt=m.stencil?zi:hs);let Ut={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new An(h.textureWidth,h.textureHeight,{format:kn,type:Vn,depthTexture:new Vi(h.textureWidth,h.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(st){for(let ot=0;ot<st.removed.length;ot++){let Bt=st.removed[ot],ft=M.indexOf(Bt);ft>=0&&(M[ft]=null,b[ft].disconnect(Bt))}for(let ot=0;ot<st.added.length;ot++){let Bt=st.added[ot],ft=M.indexOf(Bt);if(ft===-1){for(let Jt=0;Jt<b.length;Jt++)if(Jt>=M.length){M.push(Bt),ft=Jt;break}else if(M[Jt]===null){M[Jt]=Bt,ft=Jt;break}if(ft===-1)break}let Ut=b[ft];Ut&&Ut.connect(Bt)}}let z=new D,nt=new D;function K(st,ot,Bt){z.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(Bt.matrixWorld);let ft=z.distanceTo(nt),Ut=ot.projectionMatrix.elements,Jt=Bt.projectionMatrix.elements,kt=Ut[14]/(Ut[10]-1),ce=Ut[14]/(Ut[10]+1),pt=(Ut[9]+1)/Ut[5],Pt=(Ut[9]-1)/Ut[5],N=(Ut[8]-1)/Ut[0],Ot=(Jt[8]+1)/Jt[0],xt=kt*N,wt=kt*Ot,At=ft/(-N+Ot),Xt=At*-N;if(ot.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Xt),st.translateZ(At),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ut[10]===-1)st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let dt=kt+At,E=ce+At,v=xt-Xt,F=wt+(ft-Xt),$=pt*ce/E*dt,it=Pt*ce/E*dt;st.projectionMatrix.makePerspective(v,F,$,it,dt,E),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function rt(st,ot){ot===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ot.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ot=st.near,Bt=st.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(Bt=x.depthFar)),y.near=R.near=C.near=ot,y.far=R.far=C.far=Bt,(I!==y.near||Y!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,Y=y.far),C.layers.mask=st.layers.mask|2,R.layers.mask=st.layers.mask|4,y.layers.mask=C.layers.mask|R.layers.mask;let ft=st.parent,Ut=y.cameras;rt(y,ft);for(let Jt=0;Jt<Ut.length;Jt++)rt(Ut[Jt],ft);Ut.length===2?K(y,C,R):y.projectionMatrix.copy(C.projectionMatrix),Tt(st,y,ft)};function Tt(st,ot,Bt){Bt===null?st.matrix.copy(ot.matrixWorld):(st.matrix.copy(Bt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ot.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Cr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(st){c=st,h!==null&&(h.fixedFoveation=st),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=st)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ct=null;function Mt(st,ot){if(u=ot.getViewerPose(l||a),g=ot,u!==null){let Bt=u.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let ft=!1;Bt.length!==y.cameras.length&&(y.cameras.length=0,ft=!0);for(let Jt=0;Jt<Bt.length;Jt++){let kt=Bt[Jt],ce=null;if(f!==null)ce=f.getViewport(kt);else{let Pt=d.getViewSubImage(h,kt);ce=Pt.viewport,Jt===0&&(t.setRenderTargetTextures(T,Pt.colorTexture,h.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(T))}let pt=S[Jt];pt===void 0&&(pt=new Tn,pt.layers.enable(Jt),pt.viewport=new Ye,S[Jt]=pt),pt.matrix.fromArray(kt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(kt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ce.x,ce.y,ce.width,ce.height),Jt===0&&(y.matrix.copy(pt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ft===!0&&y.cameras.push(pt)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Jt=d.getDepthInformation(Bt[0]);Jt&&Jt.isValid&&Jt.texture&&x.init(t,Jt,s.renderState)}}for(let Bt=0;Bt<b.length;Bt++){let ft=M[Bt],Ut=b[Bt];ft!==null&&Ut!==void 0&&Ut.update(ft,ot,l||a)}Ct&&Ct(st,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let $t=new zu;$t.setAnimationLoop(Mt),this.setAnimationLoop=function(st){Ct=st},this.dispose=function(){}}},ss=new ci,mx=new ye;function gx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ou(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),b=T.envMap,M=T.envMapRotation;b&&(m.envMap.value=b,ss.copy(M),ss.x*=-1,ss.y*=-1,ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(ss)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let M=b.program;n.uniformBlockBinding(T,M)}function l(T,b){let M=s[T.id];M===void 0&&(g(T),M=u(T),s[T.id]=M,T.addEventListener("dispose",m));let H=b.program;n.updateUBOMapping(T,H);let _=t.render.frame;r[T.id]!==_&&(h(T),r[T.id]=_)}function u(T){let b=d();T.__bindingPointIndex=b;let M=i.createBuffer(),H=T.__size,_=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,H,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){let b=s[T.id],M=T.uniforms,H=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,C=M.length;_<C;_++){let R=Array.isArray(M[_])?M[_]:[M[_]];for(let S=0,y=R.length;S<y;S++){let I=R[S];if(f(I,_,S,H)===!0){let Y=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],L=0;for(let O=0;O<U.length;O++){let z=U[O],nt=x(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,Y+L,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,L),L+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,b,M,H){let _=T.value,C=b+"_"+M;if(H[C]===void 0)return typeof _=="number"||typeof _=="boolean"?H[C]=_:H[C]=_.clone(),!0;{let R=H[C];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return H[C]=_,!0}else if(R.equals(_)===!1)return R.copy(_),!0}return!1}function g(T){let b=T.uniforms,M=0,H=16;for(let C=0,R=b.length;C<R;C++){let S=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,I=S.length;y<I;y++){let Y=S[y],U=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,O=U.length;L<O;L++){let z=U[L],nt=x(z),K=M%H,rt=K%nt.boundary,Tt=K+rt;M+=rt,Tt!==0&&H-Tt<nt.storage&&(M+=H-Tt),Y.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=nt.storage}}}let _=M%H;return _>0&&(M+=H-_),T.__size=M,T.__cache={},this}function x(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ha=class{constructor(t={}){let{canvas:e=bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Fi,this.toneMappingExposure=1;let M=this,H=!1,_=0,C=0,R=null,S=-1,y=null,I=new Ye,Y=new Ye,U=null,L=new ae(0),O=0,z=e.width,nt=e.height,K=1,rt=null,Tt=null,Ct=new Ye(0,0,z,nt),Mt=new Ye(0,0,z,nt),$t=!1,st=new Ir,ot=!1,Bt=!1,ft=new ye,Ut=new ye,Jt=new D,kt=new Ye,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function Pt(){return R===null?K:1}let N=n;function Ot(w,q){return e.getContext(w,q)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Al}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",G,!1),N===null){let q="webgl2";if(N=Ot(q,w),N===null)throw Ot(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let xt,wt,At,Xt,dt,E,v,F,$,it,Q,yt,Et,zt,re,ct,It,Dt,jt,Rt,Qt,X,Z,A;function W(){xt=new L0(N),xt.init(),X=new ux(N,xt),wt=new A0(N,xt,t,X),At=new cx(N,xt),wt.reverseDepthBuffer&&h&&At.buffers.depth.setReversed(!0),Xt=new F0(N),dt=new $g,E=new hx(N,xt,At,dt,wt,X,Xt),v=new C0(M),F=new D0(M),$=new Gf(N),Z=new T0(N,$),it=new U0(N,$,Xt,Z),Q=new z0(N,it,$,Xt),jt=new O0(N,wt,E),ct=new R0(dt),yt=new Zg(M,v,F,xt,wt,Z,ct),Et=new gx(M,dt),zt=new Kg,re=new ix(xt),Dt=new E0(M,v,F,At,Q,f,c),It=new ax(M,Q,wt),A=new xx(N,Xt,wt,At),Rt=new w0(N,xt,Xt),Qt=new N0(N,xt,Xt),Xt.programs=yt.programs,M.capabilities=wt,M.extensions=xt,M.properties=dt,M.renderLists=zt,M.shadowMap=It,M.state=At,M.info=Xt}W();let B=new al(M,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(z,nt,!1))},this.getSize=function(w){return w.set(z,nt)},this.setSize=function(w,q,j=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,nt=q,e.width=Math.floor(w*K),e.height=Math.floor(q*K),j===!0&&(e.style.width=w+"px",e.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(z*K,nt*K).floor()},this.setDrawingBufferSize=function(w,q,j){z=w,nt=q,K=j,e.width=Math.floor(w*j),e.height=Math.floor(q*j),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,q,j,et){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,q,j,et),At.viewport(I.copy(Ct).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(Mt)},this.setScissor=function(w,q,j,et){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,q,j,et),At.scissor(Y.copy(Mt).multiplyScalar(K).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(w){At.setScissorTest($t=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){Tt=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,q=!0,j=!0){let et=0;if(w){let J=!1;if(R!==null){let Lt=R.texture.format;J=Lt===Ol||Lt===Fl||Lt===Nl}if(J){let Lt=R.texture.type,Ht=Lt===Vn||Lt===hs||Lt===Rr||Lt===zi||Lt===Dl||Lt===Ll,Kt=Dt.getClearColor(),ee=Dt.getClearAlpha(),he=Kt.r,ne=Kt.g,te=Kt.b;Ht?(g[0]=he,g[1]=ne,g[2]=te,g[3]=ee,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=he,x[1]=ne,x[2]=te,x[3]=ee,N.clearBufferiv(N.COLOR,0,x))}else et|=N.COLOR_BUFFER_BIT}q&&(et|=N.DEPTH_BUFFER_BIT),j&&(et|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",G,!1),zt.dispose(),re.dispose(),dt.dispose(),v.dispose(),F.dispose(),Q.dispose(),Z.dispose(),A.dispose(),yt.dispose(),B.dispose(),B.removeEventListener("sessionstart",qt),B.removeEventListener("sessionend",Yt),Ae.stop()};function k(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let w=Xt.autoReset,q=It.enabled,j=It.autoUpdate,et=It.needsUpdate,J=It.type;W(),Xt.autoReset=w,It.enabled=q,It.autoUpdate=j,It.needsUpdate=et,It.type=J}function G(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){let q=w.target;q.removeEventListener("dispose",lt),at(q)}function at(w){gt(w),dt.remove(w)}function gt(w){let q=dt.get(w).programs;q!==void 0&&(q.forEach(function(j){yt.releaseProgram(j)}),w.isShaderMaterial&&yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,j,et,J,Lt){q===null&&(q=ce);let Ht=J.isMesh&&J.matrixWorld.determinant()<0,Kt=Zi(w,q,j,et,J);At.setMaterial(et,Ht);let ee=j.index,he=1;if(et.wireframe===!0){if(ee=it.getWireframeAttribute(j),ee===void 0)return;he=2}let ne=j.drawRange,te=j.attributes.position,ve=ne.start*he,Re=(ne.start+ne.count)*he;Lt!==null&&(ve=Math.max(ve,Lt.start*he),Re=Math.min(Re,(Lt.start+Lt.count)*he)),ee!==null?(ve=Math.max(ve,0),Re=Math.min(Re,ee.count)):te!=null&&(ve=Math.max(ve,0),Re=Math.min(Re,te.count));let _e=Re-ve;if(_e<0||_e===1/0)return;Z.setup(J,et,Kt,j,ee);let Ze,P=Rt;if(ee!==null&&(Ze=$.get(ee),P=Qt,P.setIndex(Ze)),J.isMesh)et.wireframe===!0?(At.setLineWidth(et.wireframeLinewidth*Pt()),P.setMode(N.LINES)):P.setMode(N.TRIANGLES);else if(J.isLine){let V=et.linewidth;V===void 0&&(V=1),At.setLineWidth(V*Pt()),J.isLineSegments?P.setMode(N.LINES):J.isLineLoop?P.setMode(N.LINE_LOOP):P.setMode(N.LINE_STRIP)}else J.isPoints?P.setMode(N.POINTS):J.isSprite&&P.setMode(N.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)P.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))P.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let V=J._multiDrawStarts,St=J._multiDrawCounts,_t=J._multiDrawCount,Nt=ee?$.get(ee).bytesPerElement:1,ie=dt.get(et).currentProgram.getUniforms();for(let ue=0;ue<_t;ue++)ie.setValue(N,"_gl_DrawID",ue),P.render(V[ue]/Nt,St[ue])}else if(J.isInstancedMesh)P.renderInstances(ve,_e,J.count);else if(j.isInstancedBufferGeometry){let V=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,St=Math.min(j.instanceCount,V);P.renderInstances(ve,_e,St)}else P.render(ve,_e)};function ut(w,q,j){w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=vn,w.needsUpdate=!0,Je(w,q,j),w.side=Oi,w.needsUpdate=!0,Je(w,q,j),w.side=wn):Je(w,q,j)}this.compile=function(w,q,j=null){j===null&&(j=w),p=re.get(j),p.init(q),b.push(p),j.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),w!==j&&w.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();let et=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Lt=J.material;if(Lt)if(Array.isArray(Lt))for(let Ht=0;Ht<Lt.length;Ht++){let Kt=Lt[Ht];ut(Kt,j,J),et.add(Kt)}else ut(Lt,j,J),et.add(Lt)}),b.pop(),p=null,et},this.compileAsync=function(w,q,j=null){let et=this.compile(w,q,j);return new Promise(J=>{function Lt(){if(et.forEach(function(Ht){dt.get(Ht).currentProgram.isReady()&&et.delete(Ht)}),et.size===0){J(w);return}setTimeout(Lt,10)}xt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let bt=null;function ht(w){bt&&bt(w)}function qt(){Ae.stop()}function Yt(){Ae.start()}let Ae=new zu;Ae.setAnimationLoop(ht),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(w){bt=w,B.setAnimationLoop(w),w===null?Ae.stop():Ae.start()},B.addEventListener("sessionstart",qt),B.addEventListener("sessionend",Yt),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(q),q=B.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,q,R),p=re.get(w,b.length),p.init(q),b.push(p),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),st.setFromProjectionMatrix(Ut),Bt=this.localClippingEnabled,ot=ct.init(this.clippingPlanes,Bt),m=zt.get(w,T.length),m.init(),T.push(m),B.enabled===!0&&B.isPresenting===!0){let Lt=M.xr.getDepthSensingMesh();Lt!==null&&pe(Lt,q,-1/0,M.sortObjects)}pe(w,q,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,Tt),pt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,pt&&Dt.addToRenderList(m,w),this.info.render.frame++,ot===!0&&ct.beginShadows();let j=p.state.shadowsArray;It.render(j,w,q),ot===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=m.opaque,J=m.transmissive;if(p.setupLights(),q.isArrayCamera){let Lt=q.cameras;if(J.length>0)for(let Ht=0,Kt=Lt.length;Ht<Kt;Ht++){let ee=Lt[Ht];Dn(et,J,w,ee)}pt&&Dt.render(w);for(let Ht=0,Kt=Lt.length;Ht<Kt;Ht++){let ee=Lt[Ht];xe(m,w,ee,ee.viewport)}}else J.length>0&&Dn(et,J,w,q),pt&&Dt.render(w),xe(m,w,q);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(M,w,q),Z.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],ot===!0&&ct.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function pe(w,q,j,et){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||st.intersectsSprite(w)){et&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ut);let Ht=Q.update(w),Kt=w.material;Kt.visible&&m.push(w,Ht,Kt,j,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||st.intersectsObject(w))){let Ht=Q.update(w),Kt=w.material;if(et&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),kt.copy(Ht.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(Ut)),Array.isArray(Kt)){let ee=Ht.groups;for(let he=0,ne=ee.length;he<ne;he++){let te=ee[he],ve=Kt[te.materialIndex];ve&&ve.visible&&m.push(w,Ht,ve,j,kt.z,te)}}else Kt.visible&&m.push(w,Ht,Kt,j,kt.z,null)}}let Lt=w.children;for(let Ht=0,Kt=Lt.length;Ht<Kt;Ht++)pe(Lt[Ht],q,j,et)}function xe(w,q,j,et){let J=w.opaque,Lt=w.transmissive,Ht=w.transparent;p.setupLightsView(j),ot===!0&&ct.setGlobalState(M.clippingPlanes,j),et&&At.viewport(I.copy(et)),J.length>0&&Fe(J,q,j),Lt.length>0&&Fe(Lt,q,j),Ht.length>0&&Fe(Ht,q,j),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Dn(w,q,j,et){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new An(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?di:Vn,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));let Lt=p.state.transmissionRenderTarget[et.id],Ht=et.viewport||I;Lt.setSize(Ht.z,Ht.w);let Kt=M.getRenderTarget();M.setRenderTarget(Lt),M.getClearColor(L),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),pt&&Dt.render(j);let ee=M.toneMapping;M.toneMapping=Fi;let he=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),ot===!0&&ct.setGlobalState(M.clippingPlanes,et),Fe(w,j,et),E.updateMultisampleRenderTarget(Lt),E.updateRenderTargetMipmap(Lt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let te=0,ve=q.length;te<ve;te++){let Re=q[te],_e=Re.object,Ze=Re.geometry,P=Re.material,V=Re.group;if(P.side===wn&&_e.layers.test(et.layers)){let St=P.side;P.side=vn,P.needsUpdate=!0,Ie(_e,j,et,Ze,P,V),P.side=St,P.needsUpdate=!0,ne=!0}}ne===!0&&(E.updateMultisampleRenderTarget(Lt),E.updateRenderTargetMipmap(Lt))}M.setRenderTarget(Kt),M.setClearColor(L,O),he!==void 0&&(et.viewport=he),M.toneMapping=ee}function Fe(w,q,j){let et=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Lt=w.length;J<Lt;J++){let Ht=w[J],Kt=Ht.object,ee=Ht.geometry,he=et===null?Ht.material:et,ne=Ht.group;Kt.layers.test(j.layers)&&Ie(Kt,q,j,ee,he,ne)}}function Ie(w,q,j,et,J,Lt){w.onBeforeRender(M,q,j,et,J,Lt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(M,q,j,et,w,Lt),J.transparent===!0&&J.side===wn&&J.forceSinglePass===!1?(J.side=vn,J.needsUpdate=!0,M.renderBufferDirect(j,q,et,J,w,Lt),J.side=Oi,J.needsUpdate=!0,M.renderBufferDirect(j,q,et,J,w,Lt),J.side=wn):M.renderBufferDirect(j,q,et,J,w,Lt),w.onAfterRender(M,q,j,et,J,Lt)}function Je(w,q,j){q.isScene!==!0&&(q=ce);let et=dt.get(w),J=p.state.lights,Lt=p.state.shadowsArray,Ht=J.state.version,Kt=yt.getParameters(w,J.state,Lt,q,j),ee=yt.getProgramCacheKey(Kt),he=et.programs;et.environment=w.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(w.isMeshStandardMaterial?F:v).get(w.envMap||et.environment),et.envMapRotation=et.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,he===void 0&&(w.addEventListener("dispose",lt),he=new Map,et.programs=he);let ne=he.get(ee);if(ne!==void 0){if(et.currentProgram===ne&&et.lightsStateVersion===Ht)return Gn(w,Kt),ne}else Kt.uniforms=yt.getUniforms(w),w.onBeforeCompile(Kt,M),ne=yt.acquireProgram(Kt,ee),he.set(ee,ne),et.uniforms=Kt.uniforms;let te=et.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(te.clippingPlanes=ct.uniform),Gn(w,Kt),et.needsLights=le(w),et.lightsStateVersion=Ht,et.needsLights&&(te.ambientLightColor.value=J.state.ambient,te.lightProbe.value=J.state.probe,te.directionalLights.value=J.state.directional,te.directionalLightShadows.value=J.state.directionalShadow,te.spotLights.value=J.state.spot,te.spotLightShadows.value=J.state.spotShadow,te.rectAreaLights.value=J.state.rectArea,te.ltc_1.value=J.state.rectAreaLTC1,te.ltc_2.value=J.state.rectAreaLTC2,te.pointLights.value=J.state.point,te.pointLightShadows.value=J.state.pointShadow,te.hemisphereLights.value=J.state.hemi,te.directionalShadowMap.value=J.state.directionalShadowMap,te.directionalShadowMatrix.value=J.state.directionalShadowMatrix,te.spotShadowMap.value=J.state.spotShadowMap,te.spotLightMatrix.value=J.state.spotLightMatrix,te.spotLightMap.value=J.state.spotLightMap,te.pointShadowMap.value=J.state.pointShadowMap,te.pointShadowMatrix.value=J.state.pointShadowMatrix),et.currentProgram=ne,et.uniformsList=null,ne}function ke(w){if(w.uniformsList===null){let q=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Gn(w,q){let j=dt.get(w);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.batchingColor=q.batchingColor,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.instancingMorph=q.instancingMorph,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function Zi(w,q,j,et,J){q.isScene!==!0&&(q=ce),E.resetTextureUnits();let Lt=q.fog,Ht=et.isMeshStandardMaterial?q.environment:null,Kt=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wi,ee=(et.isMeshStandardMaterial?F:v).get(et.envMap||Ht),he=et.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ne=!!j.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),te=!!j.morphAttributes.position,ve=!!j.morphAttributes.normal,Re=!!j.morphAttributes.color,_e=Fi;et.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=M.toneMapping);let Ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,P=Ze!==void 0?Ze.length:0,V=dt.get(et),St=p.state.lights;if(ot===!0&&(Bt===!0||w!==y)){let Ke=w===y&&et.id===S;ct.setState(et,w,Ke)}let _t=!1;et.version===V.__version?(V.needsLights&&V.lightsStateVersion!==St.state.version||V.outputColorSpace!==Kt||J.isBatchedMesh&&V.batching===!1||!J.isBatchedMesh&&V.batching===!0||J.isBatchedMesh&&V.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&V.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&V.instancing===!1||!J.isInstancedMesh&&V.instancing===!0||J.isSkinnedMesh&&V.skinning===!1||!J.isSkinnedMesh&&V.skinning===!0||J.isInstancedMesh&&V.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&V.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&V.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&V.instancingMorph===!1&&J.morphTexture!==null||V.envMap!==ee||et.fog===!0&&V.fog!==Lt||V.numClippingPlanes!==void 0&&(V.numClippingPlanes!==ct.numPlanes||V.numIntersection!==ct.numIntersection)||V.vertexAlphas!==he||V.vertexTangents!==ne||V.morphTargets!==te||V.morphNormals!==ve||V.morphColors!==Re||V.toneMapping!==_e||V.morphTargetsCount!==P)&&(_t=!0):(_t=!0,V.__version=et.version);let Nt=V.currentProgram;_t===!0&&(Nt=Je(et,q,J));let ie=!1,ue=!1,Ve=!1,Ee=Nt.getUniforms(),Ce=V.uniforms;if(At.useProgram(Nt.program)&&(ie=!0,ue=!0,Ve=!0),et.id!==S&&(S=et.id,ue=!0),ie||y!==w){At.buffers.depth.getReversed()?(ft.copy(w.projectionMatrix),Ef(ft),Tf(ft),Ee.setValue(N,"projectionMatrix",ft)):Ee.setValue(N,"projectionMatrix",w.projectionMatrix),Ee.setValue(N,"viewMatrix",w.matrixWorldInverse);let We=Ee.map.cameraPosition;We!==void 0&&We.setValue(N,Jt.setFromMatrixPosition(w.matrixWorld)),wt.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,ue=!0,Ve=!0)}if(J.isSkinnedMesh){Ee.setOptional(N,J,"bindMatrix"),Ee.setOptional(N,J,"bindMatrixInverse");let Ke=J.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ee.setValue(N,"boneTexture",Ke.boneTexture,E))}J.isBatchedMesh&&(Ee.setOptional(N,J,"batchingTexture"),Ee.setValue(N,"batchingTexture",J._matricesTexture,E),Ee.setOptional(N,J,"batchingIdTexture"),Ee.setValue(N,"batchingIdTexture",J._indirectTexture,E),Ee.setOptional(N,J,"batchingColorTexture"),J._colorsTexture!==null&&Ee.setValue(N,"batchingColorTexture",J._colorsTexture,E));let be=j.morphAttributes;if((be.position!==void 0||be.normal!==void 0||be.color!==void 0)&&jt.update(J,j,Nt),(ue||V.receiveShadow!==J.receiveShadow)&&(V.receiveShadow=J.receiveShadow,Ee.setValue(N,"receiveShadow",J.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Ce.envMap.value=ee,Ce.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(Ce.envMapIntensity.value=q.environmentIntensity),ue&&(Ee.setValue(N,"toneMappingExposure",M.toneMappingExposure),V.needsLights&&Wt(Ce,Ve),Lt&&et.fog===!0&&Et.refreshFogUniforms(Ce,Lt),Et.refreshMaterialUniforms(Ce,et,K,nt,p.state.transmissionRenderTarget[w.id]),$s.upload(N,ke(V),Ce,E)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&($s.upload(N,ke(V),Ce,E),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ee.setValue(N,"center",J.center),Ee.setValue(N,"modelViewMatrix",J.modelViewMatrix),Ee.setValue(N,"normalMatrix",J.normalMatrix),Ee.setValue(N,"modelMatrix",J.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let Ke=et.uniformsGroups;for(let We=0,Xe=Ke.length;We<Xe;We++){let bn=Ke[We];A.update(bn,Nt),A.bind(bn,Nt)}}return Nt}function Wt(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function le(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,q,j){dt.get(w.texture).__webglTexture=q,dt.get(w.depthTexture).__webglTexture=j;let et=dt.get(w);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=j===void 0,et.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,q){let j=dt.get(w);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,j=0){R=w,_=q,C=j;let et=!0,J=null,Lt=!1,Ht=!1;if(w){let ee=dt.get(w);if(ee.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),et=!1;else if(ee.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(ee.__hasExternalTextures)E.rebindTextures(w,dt.get(w.texture).__webglTexture,dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let te=w.depthTexture;if(ee.__boundDepthTexture!==te){if(te!==null&&dt.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let he=w.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(Ht=!0);let ne=dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?J=ne[q][j]:J=ne[q],Lt=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?J=dt.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?J=ne[j]:J=ne,I.copy(w.viewport),Y.copy(w.scissor),U=w.scissorTest}else I.copy(Ct).multiplyScalar(K).floor(),Y.copy(Mt).multiplyScalar(K).floor(),U=$t;if(At.bindFramebuffer(N.FRAMEBUFFER,J)&&et&&At.drawBuffers(w,J),At.viewport(I),At.scissor(Y),At.setScissorTest(U),Lt){let ee=dt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee.__webglTexture,j)}else if(Ht){let ee=dt.get(w.texture),he=q||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ee.__webglTexture,j||0,he)}S=-1},this.readRenderTargetPixels=function(w,q,j,et,J,Lt,Ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Kt=Kt[Ht]),Kt){At.bindFramebuffer(N.FRAMEBUFFER,Kt);try{let ee=w.texture,he=ee.format,ne=ee.type;if(!wt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-et&&j>=0&&j<=w.height-J&&N.readPixels(q,j,et,J,X.convert(he),X.convert(ne),Lt)}finally{let ee=R!==null?dt.get(R).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(w,q,j,et,J,Lt,Ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Kt=Kt[Ht]),Kt){let ee=w.texture,he=ee.format,ne=ee.type;if(!wt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=w.width-et&&j>=0&&j<=w.height-J){At.bindFramebuffer(N.FRAMEBUFFER,Kt);let te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.bufferData(N.PIXEL_PACK_BUFFER,Lt.byteLength,N.STREAM_READ),N.readPixels(q,j,et,J,X.convert(he),X.convert(ne),0);let ve=R!==null?dt.get(R).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,ve);let Re=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Sf(N,Re,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Lt),N.deleteBuffer(te),N.deleteSync(Re),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,q=null,j=0){w.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1]);let et=Math.pow(2,-j),J=Math.floor(w.image.width*et),Lt=Math.floor(w.image.height*et),Ht=q!==null?q.x:0,Kt=q!==null?q.y:0;E.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Ht,Kt,J,Lt),At.unbindTexture()},this.copyTextureToTexture=function(w,q,j=null,et=null,J=0){w.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,w=arguments[1],q=arguments[2],J=arguments[3]||0,j=null);let Lt,Ht,Kt,ee,he,ne,te,ve,Re,_e=w.isCompressedTexture?w.mipmaps[J]:w.image;j!==null?(Lt=j.max.x-j.min.x,Ht=j.max.y-j.min.y,Kt=j.isBox3?j.max.z-j.min.z:1,ee=j.min.x,he=j.min.y,ne=j.isBox3?j.min.z:0):(Lt=_e.width,Ht=_e.height,Kt=_e.depth||1,ee=0,he=0,ne=0),et!==null?(te=et.x,ve=et.y,Re=et.z):(te=0,ve=0,Re=0);let Ze=X.convert(q.format),P=X.convert(q.type),V;q.isData3DTexture?(E.setTexture3D(q,0),V=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),V=N.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),V=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);let St=N.getParameter(N.UNPACK_ROW_LENGTH),_t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Nt=N.getParameter(N.UNPACK_SKIP_PIXELS),ie=N.getParameter(N.UNPACK_SKIP_ROWS),ue=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,he),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ne);let Ve=w.isDataArrayTexture||w.isData3DTexture,Ee=q.isDataArrayTexture||q.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Ce=dt.get(w),be=dt.get(q),Ke=dt.get(Ce.__renderTarget),We=dt.get(be.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,Ke.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Xe=0;Xe<Kt;Xe++)Ve&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.get(w).__webglTexture,J,ne+Xe),w.isDepthTexture?(Ee&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.get(q).__webglTexture,J,Re+Xe),N.blitFramebuffer(ee,he,Lt,Ht,te,ve,Lt,Ht,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ee?N.copyTexSubImage3D(V,J,te,ve,Re+Xe,ee,he,Lt,Ht):N.copyTexSubImage2D(V,J,te,ve,Re+Xe,ee,he,Lt,Ht);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ee?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(V,J,te,ve,Re,Lt,Ht,Kt,Ze,P,_e.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(V,J,te,ve,Re,Lt,Ht,Kt,Ze,_e.data):N.texSubImage3D(V,J,te,ve,Re,Lt,Ht,Kt,Ze,P,_e):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,J,te,ve,Lt,Ht,Ze,P,_e.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,J,te,ve,_e.width,_e.height,Ze,_e.data):N.texSubImage2D(N.TEXTURE_2D,J,te,ve,Lt,Ht,Ze,P,_e);N.pixelStorei(N.UNPACK_ROW_LENGTH,St),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ue),J===0&&q.generateMipmaps&&N.generateMipmap(V),At.unbindTexture()},this.copyTextureToTexture3D=function(w,q,j=null,et=null,J=0){return w.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,et=arguments[1]||null,w=arguments[2],q=arguments[3],J=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,j,et,J)},this.initRenderTarget=function(w){dt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){_=0,C=0,R=null,At.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var Dr=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fs=class extends Ln{constructor(t=null,e=1,n=1,s,r,a,o,c,l=_n,u=_n,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=class extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hs=new ye,ou=new ye,ya=[],cu=new Rn,vx=new ye,vr=new Te,_r=new ki,Ga=class extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),cu.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),_r.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),ou.multiplyMatrices(n,Hs),vr.matrixWorld=ou,vr.raycast(t,ya);for(let a=0,o=ya.length;a<o;a++){let c=ya[a];c.instanceId=r,c.object=this,e.push(c)}ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fs(new Float32Array(s*this.count),s,this.count,Ul,oi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Lr=class extends li{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lu=new ye,ol=new us,Ma=new ki,ba=new D,Wa=class extends Cn{constructor(t=new Ge,e=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;lu.copy(s).invert(),ol.copy(t.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,x=f;g<x;g++){let m=l.getX(g);ba.fromBufferAttribute(d,m),hu(ba,m,c,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,x=f;g<x;g++)ba.fromBufferAttribute(d,g),hu(ba,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hu(i,t,e,n,s,r,a){let o=ol.distanceSqToPoint(i);if(o<e){let c=new D;ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Hi=class extends Ln{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new vt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],a=[],o=new D,c=new ye;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ur=class extends qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},cl=class extends Ur{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Sa=new D,nc=new Vl,ic=new Vl,sc=new Vl,tn=class extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Sa.subVectors(s[0],s[1]).add(s[0]),l=Sa);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),nc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,m),ic.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,m),sc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ic.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),sc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(nc.calc(c),ic.calc(c),sc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function _x(i,t){let e=1-i;return e*e*t}function yx(i,t){return 2*(1-i)*i*t}function Mx(i,t){return i*i*t}function Tr(i,t,e,n){return _x(i,t)+yx(i,e)+Mx(i,n)}function bx(i,t){let e=1-i;return e*e*e*t}function Sx(i,t){let e=1-i;return 3*e*e*i*t}function Ex(i,t){return 3*(1-i)*i*i*t}function Tx(i,t){return i*i*i*t}function wr(i,t,e,n,s){return bx(i,t)+Sx(i,e)+Ex(i,n)+Tx(i,s)}var Xa=class extends qn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(t,s.x,r.x,a.x,o.x),wr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ll=class extends qn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(t,s.x,r.x,a.x,o.x),wr(t,s.y,r.y,a.y,o.y),wr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends qn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends qn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends qn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(t,s.x,r.x,a.x),Tr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nr=class extends qn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(t,s.x,r.x,a.x),Tr(t,s.y,r.y,a.y),Tr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(uu(o,c.x,l.x,u.x,d.x),uu(o,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},$a=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:tn,CubicBezierCurve:Xa,CubicBezierCurve3:ll,EllipseCurve:Ur,LineCurve:qa,LineCurve3:Nr,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:nr,SplineCurve:Za}),Fr=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new $a[s.type]().fromJSON(s))}return this}},Gi=class extends Fr{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qa(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ya(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Xa(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Za(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Ur(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ir=class i extends Ge{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qe(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/e,d=new D,h=new vt,f=new D,g=new D,x=new D,m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let T=0;T<=e;T++){let b=n+T*u*s,M=Math.sin(b),H=Math.cos(b);for(let _=0;_<=t.length-1;_++){d.x=t[_].x*M,d.y=t[_].y,d.z=t[_].x*H,a.push(d.x,d.y,d.z),h.x=T/e,h.y=_/(t.length-1),o.push(h.x,h.y);let C=c[3*_+0]*M,R=c[3*_+1],S=c[3*_+0]*H;l.push(C,R,S)}}for(let T=0;T<e;T++)for(let b=0;b<t.length-1;b++){let M=b+T*t.length,H=M,_=M+t.length,C=M+t.length+1,R=M+1;r.push(H,_,R),r.push(C,R,_)}this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ge=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],m=n/2,p=0;T(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(f,2));function T(){let M=new D,H=new D,_=0,C=(e-t)/n;for(let R=0;R<=r;R++){let S=[],y=R/r,I=y*(e-t)+t;for(let Y=0;Y<=s;Y++){let U=Y/s,L=U*c+o,O=Math.sin(L),z=Math.cos(L);H.x=I*O,H.y=-y*n+m,H.z=I*z,d.push(H.x,H.y,H.z),M.set(O,C,z).normalize(),h.push(M.x,M.y,M.z),f.push(U,1-y),S.push(g++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let y=x[S][R],I=x[S+1][R],Y=x[S+1][R+1],U=x[S][R+1];(t>0||S!==0)&&(u.push(y,I,U),_+=3),(e>0||S!==r-1)&&(u.push(I,Y,U),_+=3)}l.addGroup(p,_,0),p+=_}function b(M){let H=g,_=new vt,C=new D,R=0,S=M===!0?t:e,y=M===!0?1:-1;for(let Y=1;Y<=s;Y++)d.push(0,m*y,0),h.push(0,y,0),f.push(.5,.5),g++;let I=g;for(let Y=0;Y<=s;Y++){let L=Y/s*c+o,O=Math.cos(L),z=Math.sin(L);C.x=S*z,C.y=m*y,C.z=S*O,d.push(C.x,C.y,C.z),h.push(0,y,0),_.x=O*.5+.5,_.y=z*.5*y+.5,f.push(_.x,_.y),g++}for(let Y=0;Y<s;Y++){let U=H+Y,L=I+Y;M===!0?u.push(L,L+1,U):u.push(L+1,L,U),R+=3}l.addGroup(p,R,M===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sr=class i extends ge{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ui=class extends Gi{constructor(t){super(t),this.uuid=Ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Gi().fromJSON(s))}return this}},wx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,d,h,f;if(n&&(r=Ix(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)d=i[g],h=i[g+1],d<o&&(o=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return Or(r,a,e,o,c,f,0),a}};function Gu(i,t,e,n,s){let r,a;if(s===Hx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=du(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=du(r,i[r],i[r+1],a);return a&&co(a,a.next)&&(Br(a),a=a.next),a}function ms(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(co(e,e.next)||He(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Fx(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Rx(i,n,s,r):Ax(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Br(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Cx(ms(i),t,e),Or(i,t,e,n,s,r,2)):a===2&&Px(i,t,e,n,s,r):Or(ms(i),t,e,n,s,r,1);break}}}function Ax(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,h=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Xs(s,o,r,c,a,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(He(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,h=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,x=o>c?o>l?o:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,p=hl(f,g,t,e,n),T=hl(x,m,t,e,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=T;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Xs(o,u,c,d,l,h,b.x,b.y)&&He(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Xs(o,u,c,d,l,h,M.x,M.y)&&He(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Xs(o,u,c,d,l,h,b.x,b.y)&&He(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=T;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Xs(o,u,c,d,l,h,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Cx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!co(s,r)&&Wu(s,n,n.next,r)&&zr(s,r)&&zr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Br(n),Br(n.next),n=i=r),n=n.next}while(n!==i);return ms(n)}function Px(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bx(a,o)){let c=Xu(a,o);a=ms(a,a.next),c=ms(c,c.next),Or(a,t,e,n,s,r,0),Or(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ix(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Gu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(zx(l));for(s.sort(Dx),r=0;r<s.length;r++)e=Lx(s[r],e);return e}function Dx(i,t){return i.x-t.x}function Lx(i,t){let e=Ux(i,t);if(!e)return t;let n=Xu(e,i);return ms(n,n.next),ms(e,e.next)}function Ux(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,u=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Xs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),zr(e,i)&&(d<u||d===u&&(e.x>s.x||e.x===s.x&&Nx(s,e)))&&(s=e,u=d)),e=e.next;while(e!==o);return s}function Nx(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function Fx(i,t,e,n){let s=i;do s.z===0&&(s.z=hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ox(s)}function Ox(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Bx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kx(i,t)&&(zr(i,t)&&zr(t,i)&&Vx(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||co(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function co(i,t){return i.x===t.x&&i.y===t.y}function Wu(i,t,e,n){let s=Ta(He(i,t,e)),r=Ta(He(i,t,n)),a=Ta(He(e,n,i)),o=Ta(He(e,n,t));return!!(s!==r&&a!==o||s===0&&Ea(i,e,t)||r===0&&Ea(i,n,t)||a===0&&Ea(e,i,n)||o===0&&Ea(e,t,n))}function Ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ta(i){return i>0?1:i<0?-1:0}function kx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function Vx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xu(i,t){let e=new ul(i.i,i.x,i.y),n=new ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function du(i,t,e,n){let s=new ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ar=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];fu(t),pu(n,t);let a=t.length;e.forEach(fu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,pu(n,e[c]);let o=wx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function fu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ti=class i extends Ge{constructor(t=new ui([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Gx,b,M=!1,H,_,C,R;p&&(b=p.getSpacedPoints(u),M=!0,h=!1,H=p.computeFrenetFrames(u,!1),_=new D,C=new D,R=new D),h||(m=0,f=0,g=0,x=0);let S=o.extractPoints(l),y=S.shape,I=S.holes;if(!Ar.isClockWise(y)){y=y.reverse();for(let pt=0,Pt=I.length;pt<Pt;pt++){let N=I[pt];Ar.isClockWise(N)&&(I[pt]=N.reverse())}}let U=Ar.triangulateShape(y,I),L=y;for(let pt=0,Pt=I.length;pt<Pt;pt++){let N=I[pt];y=y.concat(N)}function O(pt,Pt,N){return Pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(Pt,N)}let z=y.length,nt=U.length;function K(pt,Pt,N){let Ot,xt,wt,At=pt.x-Pt.x,Xt=pt.y-Pt.y,dt=N.x-pt.x,E=N.y-pt.y,v=At*At+Xt*Xt,F=At*E-Xt*dt;if(Math.abs(F)>Number.EPSILON){let $=Math.sqrt(v),it=Math.sqrt(dt*dt+E*E),Q=Pt.x-Xt/$,yt=Pt.y+At/$,Et=N.x-E/it,zt=N.y+dt/it,re=((Et-Q)*E-(zt-yt)*dt)/(At*E-Xt*dt);Ot=Q+At*re-pt.x,xt=yt+Xt*re-pt.y;let ct=Ot*Ot+xt*xt;if(ct<=2)return new vt(Ot,xt);wt=Math.sqrt(ct/2)}else{let $=!1;At>Number.EPSILON?dt>Number.EPSILON&&($=!0):At<-Number.EPSILON?dt<-Number.EPSILON&&($=!0):Math.sign(Xt)===Math.sign(E)&&($=!0),$?(Ot=-Xt,xt=At,wt=Math.sqrt(v)):(Ot=At,xt=Xt,wt=Math.sqrt(v/2))}return new vt(Ot/wt,xt/wt)}let rt=[];for(let pt=0,Pt=L.length,N=Pt-1,Ot=pt+1;pt<Pt;pt++,N++,Ot++)N===Pt&&(N=0),Ot===Pt&&(Ot=0),rt[pt]=K(L[pt],L[N],L[Ot]);let Tt=[],Ct,Mt=rt.concat();for(let pt=0,Pt=I.length;pt<Pt;pt++){let N=I[pt];Ct=[];for(let Ot=0,xt=N.length,wt=xt-1,At=Ot+1;Ot<xt;Ot++,wt++,At++)wt===xt&&(wt=0),At===xt&&(At=0),Ct[Ot]=K(N[Ot],N[wt],N[At]);Tt.push(Ct),Mt=Mt.concat(Ct)}for(let pt=0;pt<m;pt++){let Pt=pt/m,N=f*Math.cos(Pt*Math.PI/2),Ot=g*Math.sin(Pt*Math.PI/2)+x;for(let xt=0,wt=L.length;xt<wt;xt++){let At=O(L[xt],rt[xt],Ot);ft(At.x,At.y,-N)}for(let xt=0,wt=I.length;xt<wt;xt++){let At=I[xt];Ct=Tt[xt];for(let Xt=0,dt=At.length;Xt<dt;Xt++){let E=O(At[Xt],Ct[Xt],Ot);ft(E.x,E.y,-N)}}}let $t=g+x;for(let pt=0;pt<z;pt++){let Pt=h?O(y[pt],Mt[pt],$t):y[pt];M?(C.copy(H.normals[0]).multiplyScalar(Pt.x),_.copy(H.binormals[0]).multiplyScalar(Pt.y),R.copy(b[0]).add(C).add(_),ft(R.x,R.y,R.z)):ft(Pt.x,Pt.y,0)}for(let pt=1;pt<=u;pt++)for(let Pt=0;Pt<z;Pt++){let N=h?O(y[Pt],Mt[Pt],$t):y[Pt];M?(C.copy(H.normals[pt]).multiplyScalar(N.x),_.copy(H.binormals[pt]).multiplyScalar(N.y),R.copy(b[pt]).add(C).add(_),ft(R.x,R.y,R.z)):ft(N.x,N.y,d/u*pt)}for(let pt=m-1;pt>=0;pt--){let Pt=pt/m,N=f*Math.cos(Pt*Math.PI/2),Ot=g*Math.sin(Pt*Math.PI/2)+x;for(let xt=0,wt=L.length;xt<wt;xt++){let At=O(L[xt],rt[xt],Ot);ft(At.x,At.y,d+N)}for(let xt=0,wt=I.length;xt<wt;xt++){let At=I[xt];Ct=Tt[xt];for(let Xt=0,dt=At.length;Xt<dt;Xt++){let E=O(At[Xt],Ct[Xt],Ot);M?ft(E.x,E.y+b[u-1].y,b[u-1].x+N):ft(E.x,E.y,d+N)}}}st(),ot();function st(){let pt=s.length/3;if(h){let Pt=0,N=z*Pt;for(let Ot=0;Ot<nt;Ot++){let xt=U[Ot];Ut(xt[2]+N,xt[1]+N,xt[0]+N)}Pt=u+m*2,N=z*Pt;for(let Ot=0;Ot<nt;Ot++){let xt=U[Ot];Ut(xt[0]+N,xt[1]+N,xt[2]+N)}}else{for(let Pt=0;Pt<nt;Pt++){let N=U[Pt];Ut(N[2],N[1],N[0])}for(let Pt=0;Pt<nt;Pt++){let N=U[Pt];Ut(N[0]+z*u,N[1]+z*u,N[2]+z*u)}}n.addGroup(pt,s.length/3-pt,0)}function ot(){let pt=s.length/3,Pt=0;Bt(L,Pt),Pt+=L.length;for(let N=0,Ot=I.length;N<Ot;N++){let xt=I[N];Bt(xt,Pt),Pt+=xt.length}n.addGroup(pt,s.length/3-pt,1)}function Bt(pt,Pt){let N=pt.length;for(;--N>=0;){let Ot=N,xt=N-1;xt<0&&(xt=pt.length-1);for(let wt=0,At=u+m*2;wt<At;wt++){let Xt=z*wt,dt=z*(wt+1),E=Pt+Ot+Xt,v=Pt+xt+Xt,F=Pt+xt+dt,$=Pt+Ot+dt;Jt(E,v,F,$)}}}function ft(pt,Pt,N){c.push(pt),c.push(Pt),c.push(N)}function Ut(pt,Pt,N){kt(pt),kt(Pt),kt(N);let Ot=s.length/3,xt=T.generateTopUV(n,s,Ot-3,Ot-2,Ot-1);ce(xt[0]),ce(xt[1]),ce(xt[2])}function Jt(pt,Pt,N,Ot){kt(pt),kt(Pt),kt(Ot),kt(Pt),kt(N),kt(Ot);let xt=s.length/3,wt=T.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);ce(wt[0]),ce(wt[1]),ce(wt[3]),ce(wt[1]),ce(wt[2]),ce(wt[3])}function kt(pt){s.push(c[pt*3+0]),s.push(c[pt*3+1]),s.push(c[pt*3+2])}function ce(pt){r.push(pt.x),r.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $a[s.type]().fromJSON(s)),new i(n,t.options)}},Gx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new vt(r,a),new vt(o,c),new vt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new vt(a,1-c),new vt(l,1-d),new vt(h,1-g),new vt(x,1-p)]:[new vt(o,1-c),new vt(u,1-d),new vt(f,1-g),new vt(m,1-p)]}};function Wx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gs=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new D,h=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let T=[],b=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let H=0;H<=e;H++){let _=H/e;d.x=-t*Math.cos(s+_*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(s+_*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(_+M,1-b),T.push(l++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let b=u[p][T+1],M=u[p][T],H=u[p+1][T],_=u[p+1][T+1];(p!==0||a>0)&&f.push(b,M,_),(p!==n-1||c<Math.PI)&&f.push(M,H,_)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var kr=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new D,d=new D,h=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;a.push(x,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Mn=class i extends Ge{constructor(t=new nr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new vt,u=new D,d=[],h=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(f,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),T(),p()}function m(b){u=t.getPointAt(b/e,u);let M=a.normals[b],H=a.binormals[b];for(let _=0;_<=s;_++){let C=_/s*Math.PI*2,R=Math.sin(C),S=-Math.cos(C);c.x=S*M.x+R*H.x,c.y=S*M.y+R*H.y,c.z=S*M.z+R*H.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let M=1;M<=s;M++){let H=(s+1)*(b-1)+(M-1),_=(s+1)*b+(M-1),C=(s+1)*b+M,R=(s+1)*(b-1)+M;g.push(H,_,R),g.push(_,C,R)}}function T(){for(let b=0;b<=e;b++)for(let M=0;M<=s;M++)l.x=b/e,l.y=M/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new $a[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ja=class extends li{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new ae(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var dl=class extends li{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vr=class extends dl{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ka=class extends li{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function wa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var rr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends rr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uh:r=t,o=2*e-n;break;case dh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uh:a=t,c=2*n-e;break;case dh:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,T=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let H=0;H!==o;++H)r[H]=p*a[u+H]+T*a[l+H]+b*a[c+H]+M*a[d+H];return r}},pl=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}},ml=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wa(e,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wa(t.times,Array),values:wa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case La:e=this.InterpolantFactoryMethodDiscrete;break;case Wc:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Wc;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Xx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Co,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Wc;var xs=class extends ei{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=La;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends ei{};gl.prototype.ValueTypeName="color";var xl=class extends ei{};xl.prototype.ValueTypeName="number";var vl=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)dn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ja=class extends ei{InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ei{constructor(t,e,n){super(t,e,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=La;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends ei{};_l.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},qx=new yl,Ml=class{constructor(t){this.manager=t!==void 0?t:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var bl=class extends Cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var rc=new ye,mu=new D,gu=new D,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(mu),gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gu),e.updateMatrixWorld(),rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var El=class extends Sl{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new El}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Qa=class extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var to=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=xu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function xu(){return performance.now()}var Hl="\\[\\]\\.:\\/",Yx=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",Zx="[^"+Hl.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Jx=/(WCOD+)?/.source.replace("WCOD",Zx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Qx=new RegExp("^"+$x+Jx+Kx+jx+"$"),tv=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(t){let e=Qx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Tl;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1);var vu=new ye,eo=class{constructor(t,e,n=0,s=1/0){this.ray=new us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vu),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort(_u),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wl(t[s],this,n,e);return n.sort(_u),n}};function _u(i,t){return i.distance-t.distance}function wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],t,e,!0)}}var Hr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var no=class extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);var qu={type:"change"},Xl={type:"start"},Zu={type:"end"},lo=new us,Yu=new hn,ev=Math.cos(70*Uu.DEG2RAD),rn=new D,Un=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wl=1e-6,ho=class extends no{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new dn,this._lastTargetPosition=new D,this._quat=new dn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hr,this._sphericalDelta=new Hr,this._scale=1,this._panOffset=new D,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new D,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=sv.bind(this),this._onContextMenu=uv.bind(this),this._onMouseWheel=ov.bind(this),this._onKeyDown=cv.bind(this),this._onTouchStart=lv.bind(this),this._onTouchMove=hv.bind(this),this._onMouseDown=rv.bind(this),this._onMouseMove=av.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=fv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=Ue.NONE}update(t=null){let e=this.object.position;rn.copy(e).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),e.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=rn.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lo.origin.copy(this.object.position),lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lo.direction))<ev?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),lo.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wl||this._lastTargetPosition.distanceToSquared(this.target)>Wl?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Un/60*this.autoRotateSpeed*t:Un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){rn.setFromMatrixColumn(e,0),rn.multiplyScalar(-t),this._panOffset.add(rn)}_panUp(t,e){this.screenSpacePanning===!0?rn.setFromMatrixColumn(e,1):(rn.setFromMatrixColumn(e,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(t),this._panOffset.add(rn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;rn.copy(s).sub(this.target);let r=rn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zu),this.state=Ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ue.DOLLY;break;case _s.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}break;case _s.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Xl)}function av(i){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ov(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(i.preventDefault(),this.dispatchEvent(Xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zu))}function cv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function lv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ue.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ue.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Xl)}function hv(i){switch(this._trackPointer(i),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ue.NONE}}function uv(i){this.enabled!==!1&&i.preventDefault()}function dv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var uo=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pv=new tr(-1,1,1,-1,0,1),ql=class extends Ge{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}},mv=new ql,lr=class{constructor(t){this._mesh=new Te(mv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,pv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Gr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new vt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ye},cameraProjectionMatrixInverse:{value:new ye},cameraWorldMatrix:{value:new ye},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Wr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},fo={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function $u(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=gv(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],c=2*Math.PI*o/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new fs(s,t,t);return r.wrapS=Ei,r.wrapT=Ei,r.needsUpdate=!0,r}function gv(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Xr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Yl(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new vt},cameraProjectionMatrixInverse:{value:new ye},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Yl(i,t,e){let n=xv(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function xv(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var mo=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),u=(3-Math.sqrt(3))/6,d=(c+l)*u,h=c-d,f=l-d,g=t-h,x=e-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let T=g-m+u,b=x-p+u,M=g-1+2*u,H=x-1+2*u,_=c&255,C=l&255,R=this.perm[_+this.perm[C]]%12,S=this.perm[_+m+this.perm[C+p]]%12,y=this.perm[_+1+this.perm[C+1]]%12,I=.5-g*g-x*x;I<0?n=0:(I*=I,n=I*I*this.dot(this.grad3[R],g,x));let Y=.5-T*T-b*b;Y<0?s=0:(Y*=Y,s=Y*Y*this.dot(this.grad3[S],T,b));let U=.5-M*M-H*H;return U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[y],M,H)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,l=(t+e+n)*.3333333333333333,u=Math.floor(t+l),d=Math.floor(e+l),h=Math.floor(n+l),f=1/6,g=(u+d+h)*f,x=u-g,m=d-g,p=h-g,T=t-x,b=e-m,M=n-p,H,_,C,R,S,y;T>=b?b>=M?(H=1,_=0,C=0,R=1,S=1,y=0):T>=M?(H=1,_=0,C=0,R=1,S=0,y=1):(H=0,_=0,C=1,R=1,S=0,y=1):b<M?(H=0,_=0,C=1,R=0,S=1,y=1):T<M?(H=0,_=1,C=0,R=0,S=1,y=1):(H=0,_=1,C=0,R=1,S=1,y=0);let I=T-H+f,Y=b-_+f,U=M-C+f,L=T-R+2*f,O=b-S+2*f,z=M-y+2*f,nt=T-1+3*f,K=b-1+3*f,rt=M-1+3*f,Tt=u&255,Ct=d&255,Mt=h&255,$t=this.perm[Tt+this.perm[Ct+this.perm[Mt]]]%12,st=this.perm[Tt+H+this.perm[Ct+_+this.perm[Mt+C]]]%12,ot=this.perm[Tt+R+this.perm[Ct+S+this.perm[Mt+y]]]%12,Bt=this.perm[Tt+1+this.perm[Ct+1+this.perm[Mt+1]]]%12,ft=.6-T*T-b*b-M*M;ft<0?s=0:(ft*=ft,s=ft*ft*this.dot3(this.grad3[$t],T,b,M));let Ut=.6-I*I-Y*Y-U*U;Ut<0?r=0:(Ut*=Ut,r=Ut*Ut*this.dot3(this.grad3[st],I,Y,U));let Jt=.6-L*L-O*O-z*z;Jt<0?a=0:(Jt*=Jt,a=Jt*Jt*this.dot3(this.grad3[ot],L,O,z));let kt=.6-nt*nt-K*K-rt*rt;return kt<0?o=0:(kt*=kt,o=kt*kt*this.dot3(this.grad3[Bt],nt,K,rt)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,d,h,f,g,x=(t+e+n+s)*c,m=Math.floor(t+x),p=Math.floor(e+x),T=Math.floor(n+x),b=Math.floor(s+x),M=(m+p+T+b)*l,H=m-M,_=p-M,C=T-M,R=b-M,S=t-H,y=e-_,I=n-C,Y=s-R,U=S>y?32:0,L=S>I?16:0,O=y>I?8:0,z=S>Y?4:0,nt=y>Y?2:0,K=I>Y?1:0,rt=U+L+O+z+nt+K,Tt=a[rt][0]>=3?1:0,Ct=a[rt][1]>=3?1:0,Mt=a[rt][2]>=3?1:0,$t=a[rt][3]>=3?1:0,st=a[rt][0]>=2?1:0,ot=a[rt][1]>=2?1:0,Bt=a[rt][2]>=2?1:0,ft=a[rt][3]>=2?1:0,Ut=a[rt][0]>=1?1:0,Jt=a[rt][1]>=1?1:0,kt=a[rt][2]>=1?1:0,ce=a[rt][3]>=1?1:0,pt=S-Tt+l,Pt=y-Ct+l,N=I-Mt+l,Ot=Y-$t+l,xt=S-st+2*l,wt=y-ot+2*l,At=I-Bt+2*l,Xt=Y-ft+2*l,dt=S-Ut+3*l,E=y-Jt+3*l,v=I-kt+3*l,F=Y-ce+3*l,$=S-1+4*l,it=y-1+4*l,Q=I-1+4*l,yt=Y-1+4*l,Et=m&255,zt=p&255,re=T&255,ct=b&255,It=o[Et+o[zt+o[re+o[ct]]]]%32,Dt=o[Et+Tt+o[zt+Ct+o[re+Mt+o[ct+$t]]]]%32,jt=o[Et+st+o[zt+ot+o[re+Bt+o[ct+ft]]]]%32,Rt=o[Et+Ut+o[zt+Jt+o[re+kt+o[ct+ce]]]]%32,Qt=o[Et+1+o[zt+1+o[re+1+o[ct+1]]]]%32,X=.6-S*S-y*y-I*I-Y*Y;X<0?u=0:(X*=X,u=X*X*this.dot4(r[It],S,y,I,Y));let Z=.6-pt*pt-Pt*Pt-N*N-Ot*Ot;Z<0?d=0:(Z*=Z,d=Z*Z*this.dot4(r[Dt],pt,Pt,N,Ot));let A=.6-xt*xt-wt*wt-At*At-Xt*Xt;A<0?h=0:(A*=A,h=A*A*this.dot4(r[jt],xt,wt,At,Xt));let W=.6-dt*dt-E*E-v*v-F*F;W<0?f=0:(W*=W,f=W*W*this.dot4(r[Rt],dt,E,v,F));let B=.6-$*$-it*it-Q*Q-yt*yt;return B<0?g=0:(B*=B,g=B*B*this.dot4(r[Qt],$,it,Q,yt)),27*(u+d+h+f+g)}};var hr=class i extends uo{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=$u(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new An(this.width,this.height,{type:di}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Be({defines:Object.assign({},Gr.defines),uniforms:bs.clone(Gr.uniforms),vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader,blending:en,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ka,this.normalMaterial.blending=en,this.pdMaterial=new Be({defines:Object.assign({},Xr.defines),uniforms:bs.clone(Xr.uniforms),vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Be({defines:Object.assign({},Wr.defines),uniforms:bs.clone(Wr.uniforms),vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader,blending:en}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Be({uniforms:bs.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:so,blendDst:or,blendEquation:Xn,blendSrcAlpha:io,blendDstAlpha:or,blendEquationAlpha:Xn}),this.blendMaterial=new Be({uniforms:bs.clone(fo.uniforms),vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Cl,blendSrc:so,blendDst:or,blendEquation:Xn,blendSrcAlpha:io,blendDstAlpha:or,blendEquationAlpha:Xn}),this.fsQuad=new lr(null),this.originalClearColor=new ae,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Vi,this.depthTexture.format=Bi,this.depthTexture.type=zi,this.normalRenderTarget=new An(this.width,this.height,{minFilter:_n,magFilter:_n,type:di,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Yl(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){let e=new mo,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let c=a,l=o;s[(a*t+o)*4]=(e.noise(c,l)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}let r=new fs(s,t,t,kn,Vn);return r.wrapS=Ei,r.wrapT=Ei,r.needsUpdate=!0,r}};hr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function qr(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ge,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=Ju(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][h]);let g=Ju(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Ju(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new un(a,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);o.setComponent(h+d,g,x)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Yr=new D;function Yn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Yr.copy(t),Yr[n]=0,Yr.normalize();let l=.5*a/(a+o),u=1-Yr.angleTo(i)/c;return Math.sign(Yr[e])===1?u*l:o/(a+o)+l+l*(1-u)}var go=class extends ds{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new D,c=new D,l=new D(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,f=u.length/6,g=new D,x=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*r,u[m+1]=l.y*Math.sign(o.y)+c.y*r,u[m+2]=l.z*Math.sign(o.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),h[p+0]=Yn(g,c,"z","y",r,n),h[p+1]=1-Yn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),h[p+0]=1-Yn(g,c,"z","y",r,n),h[p+1]=1-Yn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),h[p+0]=1-Yn(g,c,"x","z",r,t),h[p+1]=Yn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),h[p+0]=1-Yn(g,c,"x","z",r,t),h[p+1]=1-Yn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),h[p+0]=1-Yn(g,c,"x","y",r,t),h[p+1]=1-Yn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),h[p+0]=Yn(g,c,"x","y",r,t),h[p+1]=1-Yn(g,c,"y","x",r,e);break}}};var Pn=(i,t,e)=>Math.max(t,Math.min(e,i)),Zr=(i,t,e)=>i+(t-i)*e;var Ku=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;var xo=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t});function vo(i=1234567){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var fn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var $n={L:4054,secs:[[0,102,180],[102,218,178],[218,320,180],[320,491,220],[491,653.1,279.9],[653.1,666.8,345],[666.8,879.65,279.7],[879.65,893.35,345],[893.35,1215.8,279.9],[1215.8,1295.2,374.7],[1295.2,1368.2,377.9],[1368.2,1542.4,394],[1542.4,1866.7,394],[1866.7,2139.8,395],[2139.8,2416,397],[2416,2638.2,406.4],[2638.2,2711.2,377.9],[2711.2,2790.3,374.7],[2790.3,3203.9,279.9],[3203.9,3217.6,345],[3217.6,3430.38,279.7],[3430.38,3444.08,345],[3444.08,3584,279.9],[3584,4054,280.8]],mLOA:773.2,mLA:3324,pacote:[1368.2,2625.5],excit:[218,491],diodos:[0,218]},Xi=[[0,-3.6210999999999998],[218,-3.4031],[491,-3.1301],[653.1,-2.9301],[666.8,-2.9164],[879.65,-2.7036],[893.35,-2.6899],[1215.8,-1.693],[1295.2,-1.62],[1368.2,-1.15],[2625.5,1.15],[2711.2,1.62],[2790.3,1.693],[3203.9,2.6899],[3217.6,2.7036],[3430.38,2.9164],[3444.08,2.9301],[4054,3.54]],we=i=>{let t=1;for(;t<Xi.length-1&&i>Xi[t][0];)t++;let[e,n]=Xi[t-1],[s,r]=Xi[t];return n+(i-e)/(s-e)*(r-n)},vv=i=>{let t=1;for(;t<Xi.length-1&&i>Xi[t][1];)t++;let[e,n]=Xi[t-1],[s,r]=Xi[t];return e+(i-n)/(r-n)*(s-e)};function ed(i){let t=vv(i),e=$n.secs.find(([n,s])=>t>=n&&t<=s);return e?e[2]/2e3:.14}var Ft={polos:4,ranhuras:72,bore:.665,rExt:.97,nucleo:2.3,pacotes:15,duto:.012,rotorR:.648,aranhaR:.36,polCorpo:.3,polAlt:.17,frame:{x0:-2.43,x1:2.43,z:1.15,y0:-1.08,y1:1.12},cooler:{y0:1.12,y1:1.96},base:-1.32,ext:.37},Ai=(we(2711.2)+we(2790.3))/2,In=Ai-.075,dr=Ai+.07,Zn=.05,Ts=Ft.frame.x1+Zn+.03,oe={rF:.56,rCap:.415,rC:.335,yS:-.56,wF:.05,wC:.3,wE:.48,rEsp:.5,parede:.04,nivel:-.22},qi=i=>i*(Ts+oe.wC),_v={rCubo:.66,eCubo:.04,rAnel:.93,xAnel:Ft.frame.x1+Zn};var Mo=[{id:"carcaca",nome:"Carca\xE7a e tampas",sub:"estrutura soldada, tampas e funda\xE7\xE3o",cor:"#8fb6d2",partes:["carcaca","escudoLA","escudoLOA","base"]},{id:"trocador",nome:"Trocador ar\u2013\xE1gua",sub:"feixe aletado, caixas d\u2019\xE1gua e tubula\xE7\xE3o",cor:"#4fc3f7",partes:["trocador","feixe","caixasAgua","agua"]},{id:"estator",nome:"Estator",sub:"n\xFAcleo, enrolamento e caixa de liga\xE7\xE3o",cor:"#ff8a65",partes:["estator","enrolamento","saidas","terminais"]},{id:"rotor",nome:"Rotor e campo",sub:"polos, bobinas de campo e gaiola",cor:"#ffc15e",partes:["rotor","campo","amortecedor"]},{id:"eixo",nome:"Eixo e ventiladores",sub:"eixo, ponta de eixo e ventiladores",cor:"#c3ced6",partes:["eixo","acoplamento","ventLA","ventLOA"]},{id:"mancais",nome:"Mancais",sub:"deslizamento, de flange, na tampa",cor:"#7fd48a",partes:["mancalLA","mancalLOA"]},{id:"excitatriz",nome:"Excitatriz e diodos",sub:"sem escovas, com os cabos do campo",cor:"#c792ea",partes:["excitatriz","diodos","cabos"]},{id:"defletor",nome:"Defletores",sub:"guias de ar dos ventiladores",cor:"#e6e9ec",partes:["defletor"]}],ws={trocador:[0,1.15,0],feixe:[0,1.15,0],caixasAgua:[0,1.15,0],agua:[0,1.15,0],escudoLA:[.8,0,0],mancalLA:[1.35,0,0],escudoLOA:[-.8,0,0],mancalLOA:[-1.35,0,0],excitatrizFixa:[-1.85,0,0],terminais:[0,0,.65]};function nd(){let i=(e,n,s,r={})=>new Vr({color:e,metalness:n,roughness:s,...r}),t=(e,n,s,r,a={})=>(e.userData.relevo={t:n,e:s,f:r,...a},e);return{chapa:t(i(5792363,.8,.36),"lamina",.0045,45e-5,{cor:.08,rug:.1}),chapaFace:t(i(7108480,.8,.3),"lamina",.0045,4e-4,{cor:.08,rug:.1}),cobre:i(12087356,1,.26),bobina:i(7024413,.05,.42,{clearcoat:.8,clearcoatRoughness:.25}),campo:t(i(12745542,1,.3),"camadas",.006,45e-5,{cor:.1,rug:.1}),isol:i(2828067,0,.7),eixo:t(i(9081754,1,.3,{anisotropy:.35}),"torno",.0012,6e-5,{cor:.04,rug:.08}),eixoFosco:t(i(9278875,1,.36),"tinta",220,4e-5,{cor:.06,rug:.14}),aco:t(i(10134184,1,.3),"tinta",220,4e-5,{cor:.05,rug:.14}),pintura:t(i(8889271,0,.42,{clearcoat:.55,clearcoatRoughness:.3}),"tinta",140,12e-5,{cor:.045,rug:.1}),pinturaEsc:t(i(7705513,0,.45,{clearcoat:.45,clearcoatRoughness:.34}),"tinta",140,12e-5,{cor:.045,rug:.1}),pinturaInt:i(12175055,0,.6),mancal:t(i(6260390,0,.48,{clearcoat:.35,clearcoatRoughness:.45}),"fundido",60,35e-5,{cor:.07,rug:.16}),base:i(3818314,.7,.45),ferroFundido:t(i(7173498,.6,.55),"fundido",60,35e-5,{cor:.08,rug:.18}),patente:i(14341574,1,.22),oleo:Object.assign(i(13931818,0,.08,{transparent:!0,opacity:.84,clearcoat:1,clearcoatRoughness:.04}),{userData:{liquido:!0}}),inox:i(11976387,1,.24),aluminio:i(13489111,1,.3),latao:i(13148234,1,.26),diodo:i(2237736,.3,.45),dissip:i(11910595,1,.3),aguaFria:i(3112912,0,.35,{clearcoat:.6}),aguaQuente:i(13124910,0,.35,{clearcoat:.6}),caboPos:i(12986408,0,.45),caboNeg:i(1842204,0,.45),caboAT:i(1513755,0,.55,{clearcoat:.2}),trancado:i(12173508,1,.42),vidro:i(14019829,0,.04,{transparent:!0,opacity:.45}),aletas:i(13883869,1,.32),espelho:i(12371146,.55,.4),aletaTubo:t(i(13818076,1,.36),"aletas",.006,9e-4,{cor:.55,rug:.08}),tubulacao:t(i(4160853,0,.44,{clearcoat:.45,clearcoatRoughness:.3}),"tinta",140,12e-5,{cor:.045,rug:.1}),caixaAgua:t(i(7178912,0,.42,{clearcoat:.5,clearcoatRoughness:.3}),"tinta",140,12e-5,{cor:.045,rug:.1}),solda:t(i(8231341,.1,.55),"fundido",900,.0012,{cor:.12,rug:.2}),amarelo:new yn({color:15909376}),preto:new yn({color:1382426}),faseU:i(12597547,.1,.42,{clearcoat:.5}),faseV:i(13935130,.1,.42,{clearcoat:.5}),faseW:i(2912191,.1,.42,{clearcoat:.5}),norte:i(13780271,.2,.4,{emissive:4852998,emissiveIntensity:.4}),sul:i(3108816,.2,.4,{emissive:532554,emissiveIntensity:.4})}}var yv=i=>(i.rotateZ(-Math.PI/2),i),se=(i,t,e,n=.008)=>new go(i,t,e,2,Math.max(4e-4,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4)));function Hn(i,t,e=.004,n=48){let s=Math.min(e,t/4),r=new ti(i,{depth:Math.max(1e-4,t-2*s),bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelOffset:-s,bevelSegments:2,curveSegments:n});return r.translate(0,0,-(t-2*s)/2),r.rotateY(Math.PI/2),r}var Fn=(i,t=!1,e=0,n=0)=>{let s=t?new Gi:new ui;return s.absarc(e,n,i,0,Math.PI*2,t),s};function Pe(i,t,e,n=96,s=.003){let r=Fn(t);return r.holes.push(Fn(i,!0)),Hn(r,e,Math.min(s,(t-i)/4),n)}var _o=(i,t,e=48)=>yv(new ge(i,i,t,e)),Nn=(i,...t)=>{let e=new ui;return i.forEach(([n,s],r)=>r?e.lineTo(n,s):e.moveTo(n,s)),e.closePath(),e.holes.push(...t),e},Zl=i=>{let t=new Gi;return i.forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t};function $r(i,t,e,n,s,r=6){let a=[],o=[[e-s,t+s,-Math.PI/2],[e-s,n-s,0],[i+s,n-s,Math.PI/2],[i+s,t+s,Math.PI]];for(let[c,l,u]of o)for(let d=0;d<=r;d++){let h=u+d/r*Math.PI/2;a.push([c+s*Math.cos(h),l+s*Math.sin(h)])}return a}function $l(i=0){let t=oe.rC+i,e=oe.yS-i,n=Math.max(.02,.06+i*.5),s=[];for(let r=0;r<=48;r++){let a=r/48*Math.PI;s.push([t*Math.cos(a),t*Math.sin(a)])}for(let r=0;r<=6;r++){let a=Math.PI+r/6*Math.PI/2;s.push([-t+n+n*Math.cos(a),e+n+n*Math.sin(a)])}for(let r=0;r<=6;r++){let a=1.5*Math.PI+r/6*Math.PI/2;s.push([t-n+n*Math.cos(a),e+n+n*Math.sin(a)])}return s}function Mv(){let i=[];for(let t=0;t<=40;t++){let e=t/40*Math.PI;i.push([oe.rCap*Math.cos(e),oe.rCap*Math.sin(e)])}for(let t=0;t<=56;t++){let e=Math.PI+t/56*Math.PI;i.push([oe.rF*Math.cos(e),oe.rF*Math.sin(e)])}return i}function yo(i=.012){let t=new ge(i*1.75,i*1.75,i*1.15,6);t.translate(0,i*.3+i*.575,0);let e=new ge(i*2.2,i*2.2,i*.3,20);e.translate(0,i*.15,0);let n=new ge(i*1.2,i*1.2,i*.12,16);return n.translate(0,i*1.51,0),qr([t,e,n])}var ju=new D(0,1,0);function bv(i,t,e,n){let s=Math.min(e,n)*.38,r=[[e/2,n/2-s],[e/2-s,n/2],[-e/2+s,n/2],[-e/2,n/2-s],[-e/2,-n/2+s],[-e/2+s,-n/2],[e/2-s,-n/2],[e/2,-n/2+s]],a=r.length,o=[],c=[],l=[],u=new D,d=new D,h=new D,f=new D;for(let x=0;x<=t;x++){i.getPoint(x/t,u),i.getTangent(x/t,d),h.set(0,u.y,u.z).normalize(),h.addScaledVector(d,-h.dot(d)).normalize(),f.crossVectors(d,h).normalize();for(let[m,p]of r)o.push(u.x+h.x*m+f.x*p,u.y+h.y*m+f.y*p,u.z+h.z*m+f.z*p),c.push(x/t,0)}for(let x=0;x<t;x++)for(let m=0;m<a;m++){let p=x*a+m,T=x*a+(m+1)%a,b=p+a,M=T+a;l.push(p,T,b,T,M,b)}let g=new Ge;return g.setAttribute("position",new Me(o,3)),g.setAttribute("uv",new Me(c,2)),g.setIndex(l),g.computeVertexNormals(),g}function ur(i,t,e,{metal:n=.2,rug:s=.45,px:r=900}={}){let a=document.createElement("canvas");a.width=r,a.height=Math.round(r*t/i);let o=a.getContext("2d");e(o,a.width,a.height);let c=new Hi(a);return c.colorSpace=ln,c.anisotropy=8,{geo:new hi(i,t),mat:new Vr({map:c,metalness:n,roughness:s,clearcoat:.3})}}var Qu="Inter, Helvetica, Arial, sans-serif";function wi(i,t,e,n,s,r,a=700){let o=r;for(i.font=`${a} ${o}px ${Qu}`;i.measureText(t).width>s&&o>6;)o*=.94,i.font=`${a} ${o}px ${Qu}`;i.fillText(t,e,n)}var Es=917,td=()=>(Es^=Es<<13,Es^=Es>>>17,Es^=Es<<5,(Es>>>0)/4294967296);function Ne(i,t,e,n){let s=new Te(i,t);return s.castShadow=s.receiveShadow=!0,e&&(s.userData.parte=e),n&&(s.name=n),s}function id(i,{leve:t}){let e=new xn,n={},s={},r={},a=(X,Z=e)=>{let A=new xn;return A.name=X,A.userData.parte=X,Z.add(A),n[X]=A,A},o=[],c=[],l=(X,Z=o)=>{let A=X.clone();return A.userData={...X.userData},Z.push(A),A},u=new Map,d=X=>(u.has(X)||u.set(X,l(X)),u.get(X)),h=(X,Z,A,W=0,B=0,k=0,tt=X.userData.parte)=>{let G=Ne(Z,A,tt);return G.position.set(W,B,k),X.add(G),G},f=new dn,g=yo(.012),x=yo(.009),m=yo(.016),p=yo(.02),T=(X,Z,A,W,B,k,tt=g)=>{let G=Ne(tt,Z,X.userData.parte);return G.position.set(A,W,B),G.quaternion.copy(f.setFromUnitVectors(ju,k)),X.add(G),G},b=X=>new D(X,0,0),M=X=>new D(0,0,X),H=new D(0,1,0),_=(X,Z,A)=>new D(X,Z,A),C=(X,Z,A,W=!1)=>{r[X]={p:Z,g:A,gira:W}},R=Ft.frame,S=R.x1-R.x0,y=Ft.nucleo,I=Ft.rotorR,Y=.03,U=new xn;U.name="giro",e.add(U);let L=a("eixo",U),O=.032,z=-y/2+.07,nt=l(i.eixo,c);{let X=[new vt(0,z),new vt(O,z),new vt(O,we(0))];for(let[W,B,k]of $n.secs){let tt=k/2e3,G=Math.min(.003,(we(B)-we(W))/4);X.push(new vt(tt-G,we(W)),new vt(tt,we(W)+G),new vt(tt,we(B)-G),new vt(tt-G,we(B)))}X.push(new vt(0,we($n.L)));let Z=new ir(X,112);Z.rotateZ(-Math.PI/2),Z.computeVertexNormals();let A=Ne(Z,nt,"eixo");A.userData.manter=!0,L.add(A),h(L,se(we(315)-we(223),.014,.02,.003),l(i.isol,c),(we(223)+we(315))/2,.09-.003,0)}C("eixo",_(-0,.2,.02),"eixo"),C("coloLA",_(qi(1)-.16,.16,.02),"eixo"),C("coloLOA",_(qi(-1)+.16,.16,.02),"eixo"),C("assento",_(1.4,.19,.03),"eixo");{let X=a("acoplamento",U),Z=we(3619),A=we(4019),W=.2808/2;h(X,se(A-Z,.04,.063,.006),d(i.aco),(Z+A)/2,W+.02-.022,0),C("ponta",_((Z+A)/2+.08,W+.03,0),"acoplamento")}let K=a("rotor",U),rt=a("campo",U);K.add(Ne(Pe(.205,Ft.aranhaR,y),i.chapa,"rotor"));for(let X=0;X<Ft.polos;X++){let Z=X*2*Math.PI/Ft.polos,A=new xn;A.rotation.x=Z,K.add(A);let W=Ne(se(y*.97,Ft.polAlt+.02,Ft.polCorpo,.006),i.chapa,"rotor");W.position.y=Ft.aranhaR+Ft.polAlt/2-.01,A.add(W);let B=new ui,k=.62*Math.PI/Ft.polos,tt=Ft.aranhaR+Ft.polAlt;B.moveTo(tt*Math.sin(-k*.92),tt*Math.cos(-k*.92));for(let qt=0;qt<=72;qt++){let Yt=-k+2*k*qt/72,Ae=I-.018*Math.pow(Math.abs(Yt/k),2);B.lineTo(Ae*Math.sin(Yt),Ae*Math.cos(Yt))}B.lineTo(tt*Math.sin(k*.92),tt*Math.cos(k*.92)),B.closePath();let G=Ne(Hn(B,y,.005,4),i.chapaFace,"rotor");G.userData.polo=X,G.userData.manter=!0,A.add(G);let lt=Ft.polCorpo+.07,at=y*.97+.07,ut=Nn($r(-at/2,-lt/2,at/2,lt/2,.05,5),Zl($r(-(y*.97+.006)/2,-(Ft.polCorpo+.006)/2,(y*.97+.006)/2,(Ft.polCorpo+.006)/2,.004,1).reverse())),bt=new ti(ut,{depth:Ft.polAlt-.035,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:6});bt.rotateX(-Math.PI/2);let ht=Ne(bt,i.campo,"campo");ht.position.y=Ft.aranhaR+.012,ht.userData.polo=X,ht.userData.manter=!0,A.add(ht);{let qt=Ne(se(at,.006,lt,.002),i.isol,"campo");qt.position.set(0,Ft.aranhaR+Ft.polAlt-.018,0),A.add(qt)}for(let qt=0;qt<7;qt++){let Yt=-k*.8+2*k*.8*qt/6,Ae=I-.03,pe=Ne(_o(.008,y+.06,12),i.latao,"amortecedor");pe.position.set(0,Ae*Math.cos(Yt),Ae*Math.sin(Yt)),A.add(pe)}}for(let X of[-1,1]){let Z=Ne(Pe(I-.05,I-.012,.018,96),i.latao,"amortecedor");Z.position.x=X*(y/2+.03),K.add(Z)}C("polo",_(.45,I+.005,.1),"rotor",!0),C("campo",_(-.7,Ft.aranhaR+.1,Ft.polCorpo/2+.035),"campo",!0),C("sapata",_(.9,I-.004,-.16),"rotor",!0),C("amortecedor",_(y/2+.03,I-.03,.12),"rotor",!0),C("rotorPonta",_(y/2+.03,(I-.03)*.7071,(I-.03)*.7071),"rotor");let Tt=.3747/2,Ct=(()=>{let X=[];for(let k=0;k<=14;k++){let tt=.26+.29200000000000004*k/14,G=.55*((tt-.26)/(.552-.26))**1.3;X.push([tt*Math.sin(G),tt*Math.cos(G)])}for(let k=14;k>=0;k--){let tt=.26+.29200000000000004*k/14,G=.55*((tt-.26)/(.552-.26))**1.3+.011/tt;X.push([tt*Math.sin(G),tt*Math.cos(G)])}return Hn(Nn(X),.062,.002,4)})(),Mt=(X,Z)=>{let A=a(Z,U),W=16;A.add(Ne(Pe(Tt+5e-4,.262,we(2790.3)-we(2711.2),72,.005),i.aco,Z)),A.add(Ne(Pe(.24,.565,.012,96).translate(-.031,0,0),i.aluminio,Z)),A.add(Ne(Pe(.43,.565,.01,96).translate(.031,0,0),i.aluminio,Z));for(let B=0;B<W;B++){let k=Ne(Ct,i.aluminio,Z);k.rotation.x=B*2*Math.PI/W,A.add(k)}for(let B=0;B<8;B++){let k=B*Math.PI/4,tt=Ne(_o(.011,.09,10),i.eixoFosco,Z);tt.position.set(0,.225*Math.cos(k),.225*Math.sin(k)),A.add(tt)}return A.position.x=X,A};Mt(Ai,"ventLA"),Mt(-Ai,"ventLOA").scale.x=-1,C("ventLA",_(Ai,.5,.12),"ventLA"),C("ventLOA",_(-Ai,.5,.12),"ventLOA");let $t=a("excitatriz",U),st=a("diodos",U),ot=(we($n.excit[0])+we($n.excit[1]))/2,Bt=we($n.excit[1])-we($n.excit[0]),ft=(we($n.diodos[0])+we($n.diodos[1]))/2;{h($t,Pe(.11,.25,Bt*.9),i.chapa,ot);for(let W of[-1,1])h($t,Pe(.2,.256,.045),i.cobre,ot+W*Bt*.48);h(st,Pe(.095,.3,.035),i.dissip,ft);for(let W=0;W<18;W++){let B=W*Math.PI/9,k=h(st,se(.09,.06,.006,.002),i.dissip,ft+.045,.24*Math.cos(B),.24*Math.sin(B));k.rotation.x=-B}for(let W=0;W<6;W++){let B=W*Math.PI/3+Math.PI/6,k=h(st,new ge(.024,.024,.032,20),i.diodo,ft-.035,.2*Math.cos(B),.2*Math.sin(B));k.rotation.z=Math.PI/2}h(st,se(.03,.05,.09,.006),i.aguaFria,ft-.035,0,.16);let X=ot-Bt*.48-.02,Z=ft+.02,A=[i.faseU,i.faseV,i.faseW];for(let W=0;W<3;W++){let B=-Math.PI/2+.5+(W-1)*.14,k=(lt,at)=>_(lt,at*Math.cos(B),at*Math.sin(B)),tt=new tn([k(X,.228),k(X-.03,.262),k((X+Z)/2,.27),k(Z+.03,.25),k(Z,.222)],!1,"centripetal"),G=Ne(new Mn(tt,40,.009,10,!1),A[W],"diodos");G.userData.manter=!0,st.add(G),h(st,new ge(.013,.013,.025,6).rotateZ(Math.PI/2),i.latao,Z+.005,.222*Math.cos(B),.222*Math.sin(B))}}C("armadura",_(ot+.04,.18,.18),"excitatriz"),C("diodos",_(ft+.02,.19,.19),"diodos"),C("excFora",_(ot,.45*Math.cos(.55),.45*Math.sin(.55)),"excitatrizFixa");{let X=[],Z=[],A=we(0)-.03,W=z-.03,B=ft-.05;for(let[k,tt]of[[X,.014],[Z,-.014]]){k.push(_(B,.16,tt*1.6),_(B-.03,.11,tt*1.3),_(A-.02,.045,tt),_(A+.02,.004,tt));for(let G of[we($n.excit[1]),qi(-1),we(1215),-y/2])k.push(_(G,0,tt));k.push(_(W-.03,.004,tt),_(W+.005,.06,tt),_(W+.01,Ft.aranhaR-.04,tt),_(-y/2-.035,Ft.aranhaR+.015,tt*2),_(-y/2-.04,Ft.aranhaR+.06,tt*4))}for(let k of[.022,-.022])h(rt,new ge(.012,.012,.03,6).rotateZ(Math.PI/2),i.latao,B+.012,.16,k);for(let[k,tt]of[[X,i.caboPos],[Z,i.caboNeg]]){let G=new tn(k,!1,"centripetal"),lt=Ne(new Mn(G,200,.009,10,!1),tt,"cabos");lt.userData.manter=!0,rt.add(lt),(s.cabos=s.cabos||[]).push(G)}}C("cabos",_(-1.9,0,.02),"cabos");let Ut=a("estator"),Jt=a("enrolamento"),kt=Ft.ranhuras,ce=.13,pt=.024;{let X=Fn(Ft.rExt),Z=new Gi;for(let G=0;G<kt;G++){let lt=G*2*Math.PI/kt,at=pt/Ft.bore/2,gt=(ut,bt)=>[ut*Math.cos(bt),ut*Math.sin(bt)];[gt(Ft.bore,lt-Math.PI/kt),gt(Ft.bore,lt-at),gt(Ft.bore+ce,lt-at),gt(Ft.bore+ce,lt+at),gt(Ft.bore,lt+at)].forEach(([ut,bt],ht)=>G===0&&ht===0?Z.moveTo(ut,bt):Z.lineTo(ut,bt))}Z.closePath(),X.holes.push(Z);let A=(y-(Ft.pacotes-1)*Ft.duto)/Ft.pacotes,W=Hn(X,A,.0025,72),B=l(i.chapa);for(let G=0;G<Ft.pacotes;G++)h(Ut,W,B,-y/2+A/2+G*(A+Ft.duto));for(let G=1;G<Ft.pacotes;G++)for(let lt=0;lt<24;lt++){let at=lt*Math.PI/12+.05,gt=-y/2+G*(A+Ft.duto)-Ft.duto/2,ut=(Ft.bore+ce+Ft.rExt)/2,bt=h(Ut,se(Ft.duto,.2,.008,.002),B,gt,ut*Math.cos(at),ut*Math.sin(at));bt.rotation.x=at}let k=l(i.pinturaEsc);for(let G of[-1,1])h(Ut,Pe(Ft.bore+ce+.02,Ft.rExt-.01,.035),k,G*(y/2+.0175));for(let G=0;G<12;G++){let lt=G*Math.PI/6,at=h(Ut,se(y+.1,.05,.05,.006),k,0,(Ft.rExt+.02)*Math.cos(lt),(Ft.rExt+.02)*Math.sin(lt));at.rotation.x=lt}let tt=-y/2+7*(A+Ft.duto)-Ft.duto/2;C("nucleo",_(-.45,.88,0),"estator"),C("dutos",_(tt,.84,0),"estator"),C("ranhuras",_(.62,Ft.bore+.02,0),"estator"),C("placaPressao",_(y/2+.02,.9,0),"estator"),C("dorso",_(-.8,Ft.rExt+.02,0),"estator")}let Pt=Ft.bore+ce*.72,N=Ft.bore+ce*.3,Ot=Ft.ext,xt=X=>({x:y/2+.01+Ot*Math.sin(Math.PI*X)*.9+.02*(1-Math.cos(Math.PI*X)),r:Pt+(N-Pt)*X+.07*Math.sin(Math.PI*X)});{let Z=G=>Math.floor(G%18/6)%3,A=[[],[],[]];for(let G=0;G<kt;G++){let lt=G*2*Math.PI/kt,at=(G+15)*2*Math.PI/kt;for(let[gt,ut]of[[lt,Pt],[at,N]]){let bt=se(y+.02,ce*.38,pt*.8,.004);bt.rotateX(gt-Math.PI/2),bt.translate(0,ut*Math.sin(gt),-ut*Math.cos(gt)),A[Z(G)].push(bt)}for(let gt of[-1,1]){let ut=[];for(let bt=0;bt<=12;bt++){let ht=bt/12,qt=lt+(at-lt)*ht,Yt=xt(ht);ut.push(_(gt*Yt.x,Yt.r*Math.sin(qt),-Yt.r*Math.cos(qt)))}A[Z(G)].push(bv(new tn(ut),22,.036,.015).toNonIndexed())}}let W=l(i.bobina);s.fases=[];for(let G=0;G<3;G++){A[G].forEach(at=>{for(let gt of Object.keys(at.attributes))["position","normal","uv"].includes(gt)||at.deleteAttribute(gt)});let lt=Ne(qr(A[G]),W,"enrolamento");lt.userData.fase=G,lt.userData.manter=!0,Jt.add(lt),s.fases.push(lt)}let B=l(i.isol),k=G=>{let lt=0,at=.5;for(let gt=0;gt<30;gt++){let ut=(lt+at)/2;xt(ut).x-y/2<G?lt=ut:at=ut}return xt(lt).r+.02};for(let G of[-1,1])for(let lt of[.14,.26]){let at=k(lt);h(Jt,Pe(at,at+.026,.026),B,G*(y/2+lt))}C("amarracao",_(y/2+.26,k(.26)+.013,0),"enrolamento"),s.saidas=[];let tt=-1.85;for(let G=0;G<3;G++){let lt=[_(-(y/2+.14+G*.06),-.04-G*.03,.78),_(-(y/2+.3+G*.05),-.09-G*.02,.95),_(tt+(G-1)*.12,-.13,1.07),_(tt+(G-1)*.12,-.15,R.z+.22)],at=Ne(new Mn(new tn(lt,!1,"centripetal"),48,.02,12,!1),[i.faseU,i.faseV,i.faseW][G],"saidas");at.userData.manter=!0,Jt.add(at),s.saidas.push(at)}C("saidas",_(-(y/2+.38),-.11,1),"enrolamento")}{let X=xt(.22);C("cabecas",_(X.x,X.r,0),"enrolamento"),C("cabecasLOA",_(-X.x,X.r,0),"enrolamento")}C("ladoBobina",_(.25,Pt,0),"enrolamento");let wt=R.y0+.3,At=R.z-.14,Xt=Ft.base+.05,dt=a("carcaca"),E=a("base"),v=a("terminais"),F=l(i.pintura),$=l(i.pinturaEsc),it=l(i.pinturaInt),Q=l(i.eixoFosco),yt=l(i.inox),Et=[-1.22,0,1.22],zt=[-1.85,-.6,.6,1.85],re=.9,ct=-1.85;{for(let at of[-1,1]){h(dt,se(S,R.y1-wt,Y,.006),F,0,(R.y1+wt)/2,at*(R.z-Y/2)),h(dt,se(S,wt-R.y0+Y,Y,.006),$,0,(R.y0+wt)/2,at*(At-Y/2)),h(dt,se(S,Y,R.z-At,.006),F,0,wt+Y/2,at*(At+R.z)/2),h(dt,se(S+.04,.06,.055,.012),$,0,R.y1-.03,at*(R.z+.016));for(let gt=0;gt<19;gt++)T(dt,Q,R.x0+.12+gt*(S-.24)/18,R.y1-.03,at*(R.z+.044),M(at),x);for(let gt of Et)h(dt,se(.03,R.y1-wt-.1,.07,.01),F,gt,(R.y1+wt)/2-.02,at*(R.z+.035)),h(dt,se(.12,.03,.09,.008),$,gt,wt+.035,at*(R.z+.03));for(let gt of zt)if(!(at>0&&gt===ct)){h(dt,se(re,.86,.022,.016),F,gt,-.16,at*(R.z+.011));for(let ut=0;ut<7;ut++)for(let bt of[-.56,.24])T(dt,Q,gt-.4+ut*.1333,bt,at*(R.z+.022),M(at),x);for(let ut of[gt-.42,gt+.42])for(let bt of[-.3,0])T(dt,Q,ut,bt,at*(R.z+.022),M(at),x)}}h(dt,se(S,Y,2*At,.006),$,0,R.y0+Y/2,0);for(let at of[-1,1])h(dt,se(S,Y,.26,.006),F,0,R.y1-Y/2,at*(R.z-.13)),h(dt,se(.06,Y,2*R.z-.52,.006),F,at*In,R.y1-Y/2,0);let X=R.z+.04,Z=new ui,A=R.y1-.14,W=.1;Z.moveTo(-X,Xt+.05),Z.lineTo(X,Xt+.05),Z.lineTo(X,A-.22),Z.lineTo(X+.08,A-W),Z.absarc(X+.08,A,W,-Math.PI/2,Math.PI/2,!1),Z.lineTo(X,R.y1),Z.lineTo(-X,R.y1),Z.lineTo(-X-.08,A+W),Z.absarc(-X-.08,A,W,Math.PI/2,1.5*Math.PI,!1),Z.lineTo(-X,A-.22),Z.closePath(),Z.holes.push(Fn(.96,!0),Fn(.045,!0,X+.08,A),Fn(.045,!0,-X-.08,A));let B=Hn(Z,Zn,.006,48);for(let at of[-1,1]){h(dt,B,F,at*(R.x1+Zn/2)),h(dt,Pe(.96,1.06,.02,96,.004),$,at*(R.x1-.01));for(let[gt,ut]of[[.62,-.86],[.74,-.72]])h(dt,_o(.03,.05,24),yt,at*(R.x1+Zn+.025),gt,ut),h(dt,_o(.042,.022,6),yt,at*(R.x1+Zn+.011),gt,ut)}C("olhal",_(R.x1+Zn/2,A+.06,-(X+.13)),"carcaca"),C("placaPonta",_(R.x1+Zn,-.78,.85),"carcaca");let k=Nn($r(-(R.z-.035),R.y0+.035,R.z-.035,R.y1-.035,.02,2),Fn(Ft.rExt+.04,!0),...[[1,1],[1,-1],[-1,1],[-1,-1]].map(([at,gt])=>Fn(.09,!0,at*(R.z-.2),gt*(R.y1-.2)))),tt=Hn(k,.025,.003,72);for(let at of[-y/2-.03,y/2+.03])h(dt,tt,it,at);C("alma",_(y/2+.03,Ft.rExt+.075,0),"carcaca");{let ut=d(i.inox),bt=Hn(Nn($r(-(R.z-Y),R.y0+Y,R.z-Y,R.y1-Y,.02,2),Fn(.59+.012,!0)),.012,.003,72),ht=[];for(let Yt=0;Yt<=14;Yt++){let Ae=Yt/14*Math.PI/2;ht.push([.59+.075*(1-Math.cos(Ae)),.075*Math.sin(Ae)])}let qt=[...ht.map(([Yt,Ae])=>new vt(Yt,Ae)),...ht.slice().reverse().map(([Yt,Ae],pe,xe)=>{let Dn=(xe.length-1-pe)/(xe.length-1)*Math.PI/2;return new vt(Yt+.01*Math.cos(Dn),Ae-.01*Math.sin(Dn))})];for(let Yt of[-1,1]){h(dt,bt,ut,Yt*In,0,0,"defletor"),h(dt,Pe(.59+.012,.59+.07,.025,96,.003),ut,Yt*(In-.019),0,0,"defletor"),h(dt,Pe(.59,.59+.01,dr-In,96,.002),ut,Yt*(In+dr)/2,0,0,"defletor");let Ae=new ir(qt,96);Ae.rotateZ(-Math.PI/2*Yt),Ae.computeVertexNormals(),h(dt,Ae,ut,Yt*dr,0,0,"defletor");for(let pe=0;pe<16;pe++){let xe=pe*Math.PI/8+Math.PI/16;T(dt,Q,Yt*(In-.031),(.59+.045)*Math.sin(xe),(.59+.045)*Math.cos(xe),b(-Yt),x)}for(let pe of[-1,1])h(dt,se(.06,R.y1-R.y0-.1,.012,.004),ut,Yt*(In-.03),0,pe*(R.z-Y-.006),"defletor");h(dt,se(.06,.012,2*R.z-.1,.004),ut,Yt*(In-.03),R.y0+Y+.006,0,"defletor")}C("defletor",_(In,.86,0),"carcaca"),C("bocal",_(dr+.03,.59+.05,0),"carcaca")}let G=new ui;G.moveTo(0,0),G.lineTo(.12,0),G.lineTo(0,.26),G.closePath();for(let at of[-1,1])for(let gt of[R.x0+.34,R.x1-.34]){h(dt,se(.56,wt-Xt,R.z-At+.04,.012),F,gt,(wt+Xt)/2-.01,at*(At+R.z+.04)/2),h(dt,se(.72,.06,.5,.012),$,gt,Xt+.03,at*(R.z-.07));for(let ut of[-.24,.24]){let bt=new ti(G,{depth:.026,bevelEnabled:!1});bt.translate(0,0,-.013),bt.rotateY(-at*Math.PI/2),h(dt,bt,F,gt+ut,Xt+.06,at*(R.z+.04))}for(let ut of[-.3,.3])h(dt,new ge(.018,.018,.1,12),Q,gt+ut,Xt+.1,at*(R.z+.1)),T(dt,Q,gt+ut,Xt+.06,at*(R.z+.1),H,p)}C("pe",_(R.x1-.34,Xt+.16,R.z+.06),"carcaca");{let at=d(i.solda),gt=(ut,bt)=>{let ht=bt.clone().sub(ut),qt=Ne(new ge(.009,.009,ht.length(),8,1),at,"carcaca");qt.position.copy(ut).addScaledVector(ht,.5),qt.quaternion.setFromUnitVectors(ju,ht.normalize()),dt.add(qt)};for(let ut of[-1,1])for(let bt of[-1,1])gt(_(bt*(R.x1-.002),wt+.01,ut*(R.z+.003)),_(bt*(R.x1-.002),R.y1-.06,ut*(R.z+.003)));for(let ut of[-1,1])gt(_(R.x0+.02,wt+Y+.004,ut*(R.z+.002)),_(R.x1-.02,wt+Y+.004,ut*(R.z+.002)))}let lt=(at,gt,ut,bt,ht=0)=>{let qt=Ne(at.geo,l(at.mat),"carcaca");return qt.position.set(gt,ut,bt),qt.rotation.y=ht,qt.userData.manter=!0,dt.add(qt),qt};for(let[at,gt]of[[-.8,"AQUECIMENTO 230 V"],[-.38,"SENSORES PT100"]]){h(dt,se(.34,.24,.14,.014),$,at,R.y1-.25,R.z+.07),h(dt,se(.31,.21,.018,.008),F,at,R.y1-.25,R.z+.148);for(let[ut,bt]of[[-.135,-.085],[.135,-.085],[-.135,.085],[.135,.085]])T(dt,Q,at+ut,R.y1-.25+bt,R.z+.157,M(1),x);lt(ur(.2,.05,(ut,bt,ht)=>{ut.fillStyle="#e9ecee",ut.fillRect(0,0,bt,ht),ut.strokeStyle="#2a3036",ut.lineWidth=6,ut.strokeRect(3,3,bt-6,ht-6),ut.fillStyle="#1b1f23",ut.textAlign="center",ut.textBaseline="middle",wi(ut,gt,bt/2,ht/2+2,bt*.86,ht*.5)},{px:600}),at,R.y1-.22,R.z+.158);for(let ut of[-.07,.07])h(dt,new ge(.022,.022,.04,6),yt,at+ut,R.y1-.39,R.z+.07),h(dt,new ge(.016,.016,.03,16),d(i.preto),at+ut,R.y1-.42,R.z+.07)}{let at=ur(.36,.24,(bt,ht,qt)=>{let Yt=bt.createLinearGradient(0,0,ht,qt);Yt.addColorStop(0,"#d9dde0"),Yt.addColorStop(.5,"#c4c9cd"),Yt.addColorStop(1,"#d5d9dc"),bt.fillStyle=Yt,bt.fillRect(0,0,ht,qt);for(let pe=0;pe<900;pe++)bt.fillStyle=`rgba(255,255,255,${td()*.06})`,bt.fillRect(0,td()*qt,ht,1);bt.strokeStyle="#3a4046",bt.lineWidth=5,bt.strokeRect(14,14,ht-28,qt-28),bt.fillStyle="#20262b",bt.textBaseline="top",wi(bt,"GERADOR S\xCDNCRONO TRIF\xC1SICO",ht*.075,qt*.06,ht*.85,qt*.085,800),[["Tens\xE3o","13 800 V"],["Frequ\xEAncia","60 Hz"],["Rota\xE7\xE3o","1 800 rpm"],["Polos","4"],["Liga\xE7\xE3o","Y"],["Excita\xE7\xE3o","sem escovas"],["Refrigera\xE7\xE3o","IC81W"],["Prote\xE7\xE3o","IP55"],["Isola\xE7\xE3o","classe F"],["Regime","S1"]].forEach(([pe,xe],Dn)=>{let Fe=Dn%2,Ie=Math.floor(Dn/2),Je=34+Fe*ht*.48,ke=qt*.24+Ie*qt*.135;bt.fillStyle="#4b535a",wi(bt,pe,Je,ke,ht*.19,qt*.052,500),bt.fillStyle="#15191d",wi(bt,xe,Je+ht*.2,ke,ht*.22,qt*.052,700),bt.strokeStyle="rgba(40,46,52,.35)",bt.lineWidth=2,bt.beginPath(),bt.moveTo(Je,ke+qt*.075),bt.lineTo(Je+ht*.43,ke+qt*.075),bt.stroke()})},{metal:.85,rug:.3,px:1400}),gt=1,ut=.62;lt(at,gt,ut,R.z+.004);for(let[bt,ht]of[[-.168,-.108],[.168,-.108],[-.168,.108],[.168,.108]])h(dt,new gs(.006,10,6,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),yt,gt+bt,ut+ht,R.z+.005);C("placa",_(gt,ut+.02,R.z+.01),"carcaca")}h(dt,se(.12,.08,.03,.006),d(i.latao),1.2,wt-.1,At+.015);for(let at of[-.03,.03])T(dt,d(i.latao),1.2+at,wt-.1,At+.03,M(1),g);h(dt,new Mn(new tn([_(1.2,wt-.13,At+.04),_(1.22,wt-.2,At+.06),_(1.25,Ft.base+.08,At+.05),_(1.28,Ft.base+.01,At+.02)]),32,.012,8),d(i.cobre));{let at=ur(.26,.11,(gt,ut,bt)=>{gt.clearRect(0,0,ut,bt),gt.fillStyle="#c0392b",gt.beginPath(),gt.moveTo(ut*.08,bt*.38),gt.lineTo(ut*.7,bt*.38),gt.lineTo(ut*.7,bt*.15),gt.lineTo(ut*.94,bt*.5),gt.lineTo(ut*.7,bt*.85),gt.lineTo(ut*.7,bt*.62),gt.lineTo(ut*.08,bt*.62),gt.closePath(),gt.fill()},{px:400});at.mat.transparent=!0,lt(at,R.x1+Zn+.002,R.y1-.32,.62,Math.PI/2)}C("tampa",_(zt[2],-.42,R.z+.025),"carcaca"),C("nervura",_(Et[2],-.45,R.z+.07),"carcaca"),C("carcaca",_(-1.2,-.5,R.z+.02),"carcaca"),C("auxiliares",_(-.59,R.y1-.2,R.z+.16),"carcaca")}for(let X of[-1,1]){let Z=X>0?"escudoLA":"escudoLOA",A=a(Z),W=l(i.pinturaEsc),B=l(i.pintura),k=l(i.eixoFosco),tt=_v.xAnel;h(A,Pe(oe.rEsp,1,.03,128,.004),W,X*(tt+.015)),h(A,Pe(.93,1,.02,128,.004),B,X*(tt+.04));for(let lt=0;lt<24;lt++){let at=lt*Math.PI/12+Math.PI/24;T(A,k,X*(tt+.05),.965*Math.sin(at),.965*Math.cos(at),b(X))}h(A,Pe(oe.rEsp,.66,.05,128,.004),W,X*(tt-.025));let G=new ti(Nn([[.62,0],[.92,0],[.92,.025],[.62,.07]]),{depth:.026,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelOffset:-.004,bevelSegments:2});G.translate(0,0,-.013);for(let lt=0;lt<12;lt++){let at=lt*Math.PI/6+Math.PI/12,gt=_(0,Math.cos(at),Math.sin(at)),ut=_(X,0,0),bt=new D().crossVectors(gt,ut);h(A,G.clone().applyMatrix4(new ye().makeBasis(gt,ut,bt)),W,X*Ts)}C(Z,_(X*(Ts+.004),.8*Math.cos(.5),.8*Math.sin(.5)),Z)}let It=X=>{let Z=X>0?"mancalLA":"mancalLOA",A=a(Z),W=Wt=>X*(Ts+Wt),B=W(oe.wC),k=l(i.mancal),tt=l(i.pinturaEsc),G=l(i.inox),lt=l(i.patente),at=l(i.aco),gt=l(i.oleo),ut=l(i.latao),bt=l(i.eixoFosco),ht=oe.wE,qt=oe.parede;h(A,Hn(Nn(Mv(),Fn(.17,!0)),oe.wF,.006,64),k,W(oe.wF/2));for(let Wt of[-12,-32,-50,192,212,230]){let le=Wt*Math.PI/180;T(A,bt,W(oe.wF),.52*Math.sin(le),.52*Math.cos(le),b(X),m)}for(let Wt of[22,54,126,158]){let le=Wt*Math.PI/180;T(A,bt,W(oe.wF),.382*Math.sin(le),.382*Math.cos(le),b(X),g)}h(A,Pe(.43,oe.rEsp-.004,.07,96,.004),k,W(-.035)),h(A,Pe(.1415,.24,.045,96,.003),G,W(-.095));for(let Wt of[.15,.16])h(A,Pe(Wt,Wt+.004,.012,72,.001),bt,W(-.122));h(A,Hn(Nn($l(0),Zl($l(-qt).reverse())),ht-oe.wF-qt,.004,48),k,W((oe.wF+ht-qt)/2)),h(A,Hn(Nn($l(0),Fn(.165,!0)),qt,.004,48),k,W(ht-qt/2));for(let Wt of[-1,1]){h(A,se(ht-oe.wF-.02,.05,.085,.01),tt,W((oe.wF+ht)/2),0,Wt*(oe.rC+.04));for(let le of[0,1,2])T(A,bt,W(oe.wF+.07+le*.15),.025,Wt*(oe.rC+.045),H,m)}for(let Wt of[70,80,100,110]){let le=Wt*Math.PI/180,w=oe.rC+.028,q=h(A,se(ht-oe.wF-.06,.056,.016,.005),k,W((oe.wF+ht)/2),w*Math.sin(le),w*Math.cos(le));q.rotation.x=Math.PI/2-le}for(let Wt of[58,122]){let le=Wt*Math.PI/180,w=oe.rC,q=w*Math.sin(le),j=w*Math.cos(le);h(A,new ge(.04,.05,.05,24),k,B,q+.015,j);let et=h(A,new kr(.046,.013,12,32),G,B,q+.115,j);et.rotation.y=Math.PI/2,h(A,new ge(.014,.014,.06,12),G,B,q+.06,j)}for(let Wt=0;Wt<=10;Wt++){let le=-.3+Wt*.06,w=Math.abs(le)<.25?-Math.sqrt(.25*.25-le*le)-.02:-.035,q=oe.yS+.02;h(A,se(.05,w-q,.014,.004),k,W(ht+.025),(w+q)/2,le)}for(let Wt of[-1,1])for(let le of[.12,.2,.34,.42])h(A,se(.014,-.05-(oe.yS+.03),.045,.004),k,W(le),(-.05+oe.yS+.03)/2,Wt*(oe.rC+.0225));h(A,Pe(.1415,.24,.03,96,.003),G,W(ht+.015)),h(A,Pe(.1415,.175,.03,72,.002),bt,W(ht+.045));for(let Wt of[.15,.16])h(A,Pe(Wt,Wt+.004,.012,72,.001),bt,W(ht+.066));for(let Wt=0;Wt<8;Wt++){let le=Wt*Math.PI/4+Math.PI/8;T(A,bt,W(ht+.03),.21*Math.sin(le),.21*Math.cos(le),b(X),x)}{let Wt=[],w=oe.rC-qt+.004;for(let j=0;j<=32;j++){let et=j/32*Math.PI;Wt.push([w*Math.cos(et),w*Math.sin(et)])}for(let j=32;j>=0;j--){let et=j/32*Math.PI;Wt.push([.2*Math.cos(et),.2*Math.sin(et)])}let q=Hn(Nn(Wt),.05,.003,32);for(let j of[-1,1])h(A,q,k,B+j*.095),h(A,se(.05,.06,.12,.008),k,B+j*.095,-.23,0)}let Yt=[];for(let Wt=0;Wt<=12;Wt++){let le=-1+2*Wt/12;Yt.push(new vt(.2-.012*le*le,le*.0425))}let Ae=[new vt(.151,-.0425),...Yt,new vt(.151,.0425)];for(let Wt of[-1,1]){let le=new ir(Ae,96);le.rotateZ(-Math.PI/2),le.computeVertexNormals(),h(A,le,at,B+Wt*.0575),h(A,Pe(.1405,.151,.085,96,.001),lt,B+Wt*.0575)}let pe=.215,xe=Ne(Pe(pe,pe+.016,.026,96,.002),ut,Z);xe.position.set(B,.1405-pe,0),xe.userData.manter=!0,A.add(xe),(s.aneis=s.aneis||[]).push(xe);let Dn=new gs(.0085,12,8);for(let Wt=0;Wt<14;Wt++){let le=Wt/14*Math.PI*2,w=Ne(Dn,gt,Z);w.position.set(Wt%2?.006:-.006,(pe-.007)*Math.cos(le),(pe-.007)*Math.sin(le)),w.scale.set(1,1.6,1),w.rotation.x=-le,xe.add(w)}h(A,Pe(pe-.003,pe,.02,96,.001),gt,B,.1405-pe,0);let Fe=oe.yS+qt+.002,Ie=oe.rC-qt-.003;h(A,se(ht-oe.wF-qt-.008,oe.nivel-Fe,2*Ie,.015),gt,W((oe.wF+ht-qt)/2),(oe.nivel+Fe)/2,0);let Je=W(.2);h(A,se(.12,.05,.09,.012),k,Je,oe.rC+.015,0),h(A,new ge(.022,.022,.06,6),G,Je,oe.rC+.07,0),h(A,new ge(.03,.03,.03,24),G,Je,oe.rC+.115,0);let ke=W(.19);h(A,new ge(.055,.055,.02,32).rotateX(Math.PI/2),G,ke,oe.nivel,oe.rC+.01),h(A,new ge(.04,.04,.022,32).rotateX(Math.PI/2),d(i.vidro),ke,oe.nivel,oe.rC+.013),h(A,se(.06,.036,.008,.004),gt,ke,oe.nivel-.02,oe.rC+.006);for(let[Wt,le,w]of[[.12,-.1,.026],[.4,-.45,.03]])h(A,new ge(w,w,.03,6).rotateX(Math.PI/2),G,W(Wt),le,oe.rC+.015);h(A,new ge(.03,.03,.035,6),G,W(.3),oe.yS-.015,-.15);let Gn=X*(R.x1+Zn+.05),Zi=new tn([_(Je,oe.rC+.13,-.02),_(Je,oe.rC+.2,-.12),_(W(.08),.52,-.52),_(X*(Ts-.02),.44,-.76),_(Gn+X*.04,.56,-.86),_(Gn,.62,-.86)],!1,"centripetal");return h(A,new Mn(Zi,64,.011,10,!1),d(i.trancado)),C(Z,_(B-X*.08,oe.rC*.89,oe.rC*.45),Z),C(Z+".casquilho",_(B+X*.07,.17,0),Z),C(Z+".anel",_(B+X*.001,.1405-pe,pe+.008),Z),C(Z+".oleo",_(B+X*.001,-.4,.16),Z),C(Z+".visor",_(ke,oe.nivel,oe.rC+.02),Z),C(Z+".labirinto",_(W(ht+.035),.2,0),Z),C(Z+".flange",_(W(.03),-.4,.37),Z),C(Z+".aletas",_(W(ht+.05),-.45,-.18),Z),C(Z+".termometro",_(Je,oe.rC+.13,0),Z),A};It(1),It(-1);{let X=a("excitatrizFixa");X.userData.parte="excitatriz";let Z=l(i.pintura),A=l(i.chapa),W=l(i.cobre);h(X,Pe(.265,.36,Bt*.85),A,ot,0,0,"excitatriz");for(let lt of[-1,1])h(X,Pe(.29,.35,.03),W,ot+lt*Bt*.46,0,0,"excitatriz");let B=ot+Bt*.43,k=ot-Bt*.43;h(X,Pe(.36,.4,Bt*.86,96,.004),Z,ot,0,0,"excitatriz");for(let lt of[B,k])h(X,Pe(.36,.45,.025,96,.004),Z,lt,0,0,"excitatriz");for(let lt=0;lt<12;lt++){let at=lt*Math.PI/6;h(X,se(Bt*.86,.02,.03,.005),Z,ot,.41*Math.cos(at),.41*Math.sin(at),"excitatriz").rotation.x=at}let tt=.7,G=-(Ts+.01);for(let lt of[.7,-.7,2.25,-2.25]){let at=h(X,se(Math.abs(B-G),.08,.1,.02),Z,(B+G)/2,tt*Math.cos(lt),tt*Math.sin(lt),"excitatriz");at.rotation.x=lt;let gt=h(X,se(.05,.3,.1,.015),Z,B,.55*Math.cos(lt),.55*Math.sin(lt),"excitatriz");gt.rotation.x=lt,T(X,Q,G-.005,(tt+.04)*Math.cos(lt),(tt+.04)*Math.sin(lt),b(-1),m)}h(X,new Mn(new tn([_(ot,.4,-.1),_(ot+.02,.47,-.3),_(ot+.12,.52,-.55),_(-Ts-.28,.6,-.7),_(-(R.x1+Zn+.1),.7,-.72),_(-(R.x1+Zn+.05),.74,-.72)],!1,"centripetal"),64,.012,10,!1),d(i.trancado),0,0,0,"excitatriz"),C("estatorExc",_(ot-.03,.4,0),"excitatrizFixa"),C("bracos",_((B+G)/2,tt*Math.cos(-.7)+.05,tt*Math.sin(-.7)),"excitatrizFixa")}let Dt=a("trocador"),jt=a("feixe"),Rt=a("caixasAgua"),Qt=a("agua");{let X=Ft.cooler,Z=R.z+.02,A=2*In+.3,W=X.y0+.3,B=.17,k=X.y1-B,tt=(mt,Zt)=>(mt.userData.raioX=Zt,mt),G=(...mt)=>tt(h(...mt),"f"),lt=(...mt)=>tt(h(...mt),"o"),at=d(i.pintura),gt=d(i.pinturaEsc),ut=d(i.aco),bt=l(i.eixoFosco),ht=A/2+.02,qt=.19;for(let mt of[-1,1]){G(Dt,se(S-.02,k-X.y0,.02,.006),at,0,(X.y0+k)/2,mt*(Z-.01)),G(Dt,se(S-.06,.05,.035,.012),gt,0,k-.03,mt*(Z+.016));for(let Zt of[-1,1]){let Vt=ht+.1,de=S/2-.03;G(Dt,se(de-Vt,.05,.035,.012),gt,Zt*(Vt+de)/2,X.y0+.035,mt*(Z+.016))}for(let Zt of[-S/2+.12,S/2-.12])G(Dt,se(.06,k-X.y0-.12,.035,.012),gt,Zt,(X.y0+k)/2,mt*(Z+.016))}let Yt=[[-Z,k-.02],[Z,k-.02],[Z,k],[Z-B,X.y1],[-Z+B,X.y1],[-Z,k]],Ae=[[Z,k-.02],[Z,k],[Z-B,X.y1],[-Z+B,X.y1],[-Z,k],[-Z,k-.02],[-Z+.02,k-.02],[-Z+.02,k-.008],[-Z+B+.008,X.y1-.02],[Z-B-.008,X.y1-.02],[Z-.02,k-.008],[Z-.02,k-.02]];G(Dt,Hn(Nn(Ae),S,.004,4),at,0,0,0);for(let mt of[-1,1])G(Dt,se(.02,k-X.y0,2*Z,.006),at,mt*(S/2-.01),(X.y0+k)/2,0),G(Dt,Hn(Nn(Yt),.02,.004,4),at,mt*(S/2-.01),0,0);for(let mt of[-1.86,-.62,.62,1.86]){G(Dt,se(1.1,.02,2*(Z-B)-.14,.012),gt,mt,X.y1+.01,0);for(let Zt=0;Zt<7;Zt++)for(let Vt of[-1,1])tt(T(Dt,bt,mt-.5+Zt*.1667,X.y1+.02,Vt*(Z-B-.1),H,x),"o")}let pe=new ui;pe.moveTo(-.075,0),pe.lineTo(.075,0),pe.lineTo(.05,.07),pe.absarc(0,.07,.05,0,Math.PI,!1),pe.closePath(),pe.holes.push(Fn(.024,!0,0,.07));let xe=new ti(pe,{depth:.025,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelOffset:-.003,bevelSegments:2,curveSegments:16});xe.translate(0,0,-.0125);let Dn=l(i.pinturaEsc);for(let mt of[-S/2+.2,S/2-.2])for(let Zt of[-1,1])lt(Dt,xe,Dn,mt,X.y1-.005,Zt*(Z-B-.03));let Fe=6,Ie=.022,Je=.0095,ke=.008,Gn=.05,Zi=.0433,Wt=Z+.015,le=.04,w=Z-.07,q=mt=>W+(mt-(Fe-1)/2)*Zi,j=[],et=Math.floor((A-2*Ie-.02)/Gn)+1;for(let mt=0;mt<Fe;mt++){let Zt=mt%2?et-1:et;j.push({y:q(mt),passe:mt<Fe/2?1:2,xs:Array.from({length:Zt},(Vt,de)=>(de-(Zt-1)/2)*Gn)})}let J=new ge(Ie,Ie,2*w,t?12:18,1,!1);J.rotateX(Math.PI/2);let Lt=Fn(Je);Lt.holes.push(Fn(ke,!0));let Ht=new ti(Lt,{depth:2*(Wt+.002),bevelEnabled:!1,curveSegments:6});Ht.translate(0,0,-(Wt+.002));let Kt=d(i.aletaTubo),ee=d(i.cobre),he=vo(4021),ne=[];for(let mt of j)for(let Zt of mt.xs){tt(h(jt,J,Kt,Zt,mt.y,0),"o"),tt(h(jt,Ht,ee,Zt,mt.y,0),"f");let Vt=new ge(.0074,.0074,2*(Wt+.0016),8,1,!1);Vt.rotateX(Math.PI/2),Vt.translate(Zt,mt.y,0);let de=he();Vt.setAttribute("aFase",new Me(new Float32Array(Vt.attributes.position.count).fill(de),1)),ne.push(Vt)}let te=l(i.espelho);for(let mt of[-1,1])h(jt,se(A+.18,.52,le,.008),te,0,W,mt*(Wt-le/2));for(let mt of[-1,1])G(jt,se(.008,.3,2*(Z-.025),.003),ut,mt*(A/2+.008),W,0);for(let mt of[-1,1]){G(Dt,se(.01,W-.15-X.y0,2*Z-.06,.003),gt,mt*(A/2+.008),(X.y0+W-.15)/2,0);let Zt=In-.03,Vt=A/2+.008;G(Dt,se(Vt-Zt,.008,2*Z-.06,.003),gt,mt*(Zt+Vt)/2,X.y0+.006,0)}let ve=l(i.inox),Re=l(i.inox),_e=-2.05;for(let mt of[-1,1]){let Zt=mt*(Z-.065);h(Dt,se(A+.02,.006,.08,.002),ve,0,W-.178,Zt);for(let Vt of[-.0375,.0375])h(Dt,se(A+.02,.035,.005,.002),ve,0,W-.163,Zt+Vt);h(Dt,new Mn(new tn([_(-A/2+.02,W-.182,Zt),_(-A/2-.2,W-.2,Zt),_(_e,W-.21,mt*(Z-.03)),_(_e,W-.21,mt*(Z+.06)),_(_e,X.y0+.2,mt*(Z+.07))],!1,"centripetal"),48,.009,8,!1),ve),h(Dt,new ge(.036,.036,.13,20),Re,_e,X.y0+.13,mt*(Z+.07)),h(Dt,new ge(.0372,.0372,.036,20),d(i.vidro),_e,X.y0+.13,mt*(Z+.07)),h(Dt,new ge(.03,.03,.03,6),Re,_e,X.y0+.05,mt*(Z+.07)),h(Dt,new Mn(new tn([_(_e,X.y0+.035,mt*(Z+.07)),_(_e+.02,X.y0-.04,mt*(Z+.08)),_(_e+.09,X.y0-.1,mt*(R.z+.07)),_(-1.94,R.y1-.22,mt*(R.z+.02))],!1,"centripetal"),32,.007,8,!1),d(i.trancado))}let Ze=d(i.caixaAgua),P=l(i.caixaAgua),V=l(i.aco),St=l(i.inox),_t=(mt,Zt,Vt)=>$r(-mt,-Zt,mt,Zt,Vt,6),Nt=(mt,Zt,Vt,de,qe,Ki)=>Nn(_t(mt,Zt,Vt),Zl(_t(de,qe,Ki).reverse())),ie=(mt,Zt,Vt=.003)=>{let de=new ti(mt,{depth:Zt-2*Vt,bevelEnabled:!0,bevelThickness:Vt,bevelSize:Vt,bevelOffset:-Vt,bevelSegments:1,curveSegments:8});return de.translate(0,0,-(Zt-2*Vt)/2),de},ue=ie(Nt(ht+.07,qt+.07,.05,ht,qt,.03),.025),Ve=ie(Nt(ht+.012,qt+.012,.042,ht,qt,.03),.15),Ee=ie(Nt(ht+.07,qt+.07,.05,ht,qt,.03),.02),Ce=ie(Nn(_t(ht+.07,qt+.07,.05)),.022),be=[];for(let mt=0;mt<=22;mt++)for(let Zt of[-1,1])be.push([-(ht+.02)+mt*2*(ht+.02)/22,Zt*(qt+.045)]);for(let mt of[-1,1])for(let Zt of[-.1,0,.1])be.push([mt*(ht+.045),Zt]);let Ke=xe.clone().scale(.6,.6,.8);for(let mt of[-1,1]){G(Rt,ue,Ze,0,W,mt*(Wt+.0125)),G(Rt,Ve,Ze,0,W,mt*(Wt+.1)),G(Rt,Ee,Ze,0,W,mt*(Wt+.185)),G(Rt,Ce,Ze,0,W,mt*(Wt+.206));for(let[Zt,Vt]of be)tt(T(Rt,bt,Zt,W+Vt,mt*(Wt+.025),M(mt),x),"o"),tt(T(Rt,bt,Zt,W+Vt,mt*(Wt+.217),M(mt),x),"o");for(let Zt of[-(ht-.35),ht-.35])lt(Rt,Ke,P,Zt,W+qt+.066,mt*(Wt+.206));for(let[Zt,Vt]of[[-(ht-.15),1],[ht-.15,-1]]){let de=W+Vt*(qt+.012);h(Rt,new ge(.022,.022,.024,20),St,Zt,de+Vt*.012,mt*(Wt+.1)),h(Rt,new ge(.017,.017,.018,6),St,Zt,de+Vt*.033,mt*(Wt+.1))}}h(Rt,se(2*ht,.012,.195,.002),V,0,W,-(Wt+.0975));let We=.057,Xe=-(ht-.32),bn=ht-.32,Ri=W-.095,pi=W+.095,si=Wt+.217,bd=l(i.caixaAgua),Eo=l(i.caixaAgua),mi=(mt,Zt)=>{let Vt=new ge(mt,mt,Zt,32,1,!1);return Vt.rotateX(Math.PI/2),Vt},th=new ge(.074,We,.03,32,1,!1);th.rotateX(-Math.PI/2);for(let[mt,Zt]of[[Xe,Ri],[bn,pi]])tt(h(Rt,mi(We,.06),bd,mt,Zt,-(si+.03)),"f"),h(Rt,mi(.085,.012),Eo,mt,Zt,-(si+.006)),h(Rt,th,Eo,mt,Zt,-(si+.075)),h(Rt,mi(.11,.022),Eo,mt,Zt,-(si+.1));let To=d(i.tubulacao),wo=d(i.ferroFundido),fr=d(i.inox),Kr=-(si+.133),$i=.114,De=Kr-$i,Ao=Ft.base+.02,Ji=.05,eh=mt=>{let Zt=new Fr;for(let[Vt,de,qe]of mt)Zt.add(qe?new nr(Vt,de,qe):new Nr(Vt,de));return Zt},nh=eh([[_(Xe,Ao,De),_(Xe,Ri-$i,De)],[_(Xe,Ri-$i,De),_(Xe,Ri,De),_(Xe,Ri,Kr)]]),ih=eh([[_(bn,pi,Kr),_(bn,pi,De),_(bn,pi-$i,De)],[_(bn,pi-$i,De),_(bn,Ao,De)]]),sh=(mt,Zt)=>ur(.08,.08,(Vt,de,qe)=>{Vt.fillStyle="#f4f5f2",Vt.beginPath(),Vt.arc(de/2,qe/2,de/2,0,Math.PI*2),Vt.fill(),Vt.strokeStyle="#2a3036",Vt.lineWidth=de*.02;for(let Ki=0;Ki<=10;Ki++){let Oe=Math.PI*(.75+1.5*Ki/10);Vt.beginPath(),Vt.moveTo(de/2+de*.36*Math.cos(Oe),qe/2+qe*.36*Math.sin(Oe)),Vt.lineTo(de/2+de*.43*Math.cos(Oe),qe/2+qe*.43*Math.sin(Oe)),Vt.stroke()}Vt.strokeStyle=Zt,Vt.lineWidth=de*.05,Vt.beginPath(),Vt.arc(de/2,qe/2,de*.44,Math.PI*.75,Math.PI*2.25),Vt.stroke(),Vt.fillStyle="#1b1f23",Vt.textAlign="center",Vt.textBaseline="middle",wi(Vt,mt,de/2,qe*.7,de*.5,qe*.12,700),Vt.strokeStyle="#c0392b",Vt.lineWidth=de*.025,Vt.beginPath(),Vt.moveTo(de/2,qe/2),Vt.lineTo(de/2+de*.3*Math.cos(-1.1),qe/2+qe*.3*Math.sin(-1.1)),Vt.stroke()},{px:256,metal:0,rug:.3}),rh=mt=>(mt.mat.alphaTest=.5,mt),Sd=(mt,Zt)=>ur(.1,.036,(Vt,de,qe)=>{Vt.fillStyle=Zt,Vt.fillRect(0,0,de,qe),Vt.fillStyle="#ffffff",Vt.textBaseline="middle",Vt.textAlign="center",wi(Vt,mt,de/2,qe/2+2,de*.88,qe*.52,800)},{px:420});for(let[mt,Zt,Vt,de,qe,Ki]of[[Xe,Ri,nh,i.aguaFria,"\u25B2  ENTRADA DE \xC1GUA","#2f6fc0"],[bn,pi,ih,i.aguaQuente,"SA\xCDDA DE \xC1GUA  \u25BC","#b8432c"]]){h(Qt,mi(.11,.022),d(i.tubulacao),mt,Zt,-(si+.122));for(let Oe=0;Oe<8;Oe++){let pn=Oe*Math.PI/4+Math.PI/8;T(Qt,bt,mt+.09*Math.cos(pn),Zt+.09*Math.sin(pn),-(si+.133),M(-1),x)}h(Qt,new Mn(Vt,120,We,24,!1),To);for(let Oe of[-.047,.047])h(Qt,new ge(.11,.11,.022,32),To,mt,Ji+Oe,De);h(Qt,new ge(.092,.092,.05,32),wo,mt,Ji,De),h(Qt,mi(.02,.1),wo,mt,Ji,De-.14),h(Qt,se(.07,.07,.014,.004),wo,mt,Ji,De-.19),h(Qt,se(.26,.026,.016,.006),d(i.amarelo),mt+.1,Ji,De-.205);for(let Oe=0;Oe<8;Oe++){let pn=Oe*Math.PI/4+Math.PI/8;T(Qt,bt,mt+.09*Math.cos(pn),Ji+.058,De+.09*Math.sin(pn),H,x)}for(let Oe of[-.55,.55])h(Qt,new ge(We+.0025,We+.0025,.07,32),d(de),mt,Oe,De);{let Oe=Sd(qe,Ki),pn=Ne(Oe.geo,l(Oe.mat),"agua");pn.position.set(mt,-.4,De-We-.004),pn.rotation.y=Math.PI,pn.userData.manter=!0,Qt.add(pn)}{let Oe=Zt-$i-.24,pn=De-We;h(Qt,mi(.014,.05),fr,mt,Oe,pn-.025),h(Qt,mi(.045,.026),fr,mt,Oe,pn-.063);let ah=rh(sh("\xB0C","#c0392b")),jr=Ne(ah.geo,l(ah.mat),"agua");jr.position.set(mt,Oe,pn-.0765),jr.rotation.y=Math.PI,jr.userData.manter=!0,Qt.add(jr)}{h(Qt,se(.14,.16,.012,.004),gt,mt,.78,-(R.z+.006)),h(Qt,se(.06,.05,-De-R.z-.075,.006),gt,mt,.78,-(R.z+.012+(-De-R.z-.075)/2));let pn=h(Qt,new kr(We+.007,.007,8,32),fr,mt,.78,De);pn.rotation.x=Math.PI/2}for(let Oe of[.1,.122])h(Qt,new ge(.11,.11,.022,32),To,mt,Ao+Oe,De);h(Qt,new ge(.12,.12,.012,32),d(i.base),mt,Ft.base+.006,De)}{let Zt=De-We;h(Qt,mi(.012,.05),fr,Xe,.35,Zt-.025),h(Qt,mi(.045,.026),fr,Xe,.35,Zt-.063);let Vt=rh(sh("bar","#2f6fc0")),de=Ne(Vt.geo,l(Vt.mat),"agua");de.position.set(Xe,.35,Zt-.0765),de.rotation.y=Math.PI,de.userData.manter=!0,Qt.add(de)}s.trocador={gx:A,yb:W,W:Z,zS:Wt,zA:w,aC:ht,bC:qt,filas:j,xIn:Xe,xOut:bn,yI:Ri,yO:pi,zTp:si,zF:Kr,zP:De,rT:We,Rf:Ie,yBase:W-.13,yTopo:W+.13,xCh:A/2+.008,curvas:{entrada:nh,saida:ih},nucleos:qr(ne)},C("trocador",_(-1.1,X.y1-.04,0),"trocador"),C("chicana",_(A/2+.008,X.y0+.08,0),"trocador"),C("calha",_(-.9,W-.175,-(Z-.065)),"trocador"),C("detector",_(_e,X.y0+.16,-(Z+.107)),"trocador"),C("arQuente",_(-.35,X.y0+.07,-.35),"trocador"),C("arFrio",_(1.05,q(5)+.13,-.35),"trocador");{let mt=Zt=>j[Zt].xs[j[Zt].xs.length-1];C("passe1x",_(mt(1),q(1),.45),"feixe"),C("passe2x",_(mt(4),q(4),-.45),"feixe")}C("feixe",_(-.6,q(5)+.024,0),"feixe"),C("tubos",_(j[4].xs[40],q(4),0),"feixe"),C("aletasTroc",_(j[1].xs[50]+.018,q(1),0),"feixe"),C("passe1",_(j[1].xs[20],q(1),0),"feixe"),C("passe2",_(j[4].xs[20],q(4),0),"feixe"),C("espelho",_(-1.25,W+.255,-(Z-.03)),"feixe"),C("caixaEntrada",_(.35,W+qt+.07,-(Wt+.21)),"caixasAgua"),C("caixaRetorno",_(-.3,W+qt+.07,Wt+.21),"caixasAgua"),C("divisoria",_(.55,W+.004,-(Wt+.12)),"caixasAgua"),C("respiro",_(-(ht-.15),W+qt+.05,-(Wt+.1)),"caixasAgua"),C("dreno",_(ht-.15,W-qt-.05,-(Wt+.1)),"caixasAgua"),C("bocalEntrada",_(Xe,Ri,-(si+.05)),"caixasAgua"),C("bocalSaida",_(bn,pi,-(si+.05)),"caixasAgua"),C("entradaAgua",_(Xe,-.25,De-We),"agua"),C("saidaAgua",_(bn,.25,De-We),"agua"),C("valvula",_(bn+.2,Ji,De-.205),"agua"),C("termometro",_(bn,pi-$i-.24,De-We-.078),"agua")}{let X=l(i.pintura),Z=R.z+.36,A=new ti(Nn([[0,.3],[.36,.3],[.36,-.52],[0,-.24]]),{depth:.4,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelOffset:-.008,bevelSegments:2});A.translate(0,0,-.2),A.rotateY(-Math.PI/2),h(v,A,X,ct+.02,0,R.z),h(v,se(.62,1.04,.26,.018),X,ct-.03,-.09,Z+.13),h(v,se(.56,.98,.022,.012),d(i.pinturaEsc),ct-.03,-.09,Z+.27);for(let W of[-.25,.19])for(let B=0;B<6;B++)T(v,d(i.eixoFosco),ct+W,-.53+B*.176,Z+.281,M(1),x);{let W=ur(.2,.13,(k,tt,G)=>{k.fillStyle="#f2c200",k.fillRect(0,0,tt,G),k.fillStyle="#111",k.fillRect(0,0,tt,G*.06),k.fillRect(0,G*.94,tt,G*.06),k.beginPath(),k.moveTo(tt*.2,G*.62),k.lineTo(tt*.31,G*.18),k.lineTo(tt*.42,G*.62),k.closePath(),k.lineWidth=G*.05,k.strokeStyle="#111",k.stroke(),k.beginPath(),k.moveTo(tt*.32,G*.25),k.lineTo(tt*.27,G*.42),k.lineTo(tt*.33,G*.42),k.lineTo(tt*.29,G*.57),k.lineWidth=G*.035,k.stroke(),k.fillStyle="#111",k.textBaseline="middle",wi(k,"PERIGO",tt*.5,G*.3,tt*.45,G*.16,800),wi(k,"13,8 kV",tt*.5,G*.52,tt*.45,G*.12),wi(k,"Desligue antes de abrir",tt*.08,G*.8,tt*.84,G*.085,600)},{px:700}),B=Ne(W.geo,l(W.mat),"terminais");B.position.set(ct-.03,.2,Z+.2825),B.userData.manter=!0,v.add(B)}h(v,se(.56,.025,.22,.008),d(i.pinturaEsc),ct-.03,-.62,Z+.13);for(let W=0;W<3;W++){let B=ct-.2+W*.17;h(v,new ge(.045,.045,.03,6),d(i.inox),B,-.645,Z+.13),h(v,new ge(.036,.04,.06,20),d(i.inox),B,-.69,Z+.13),h(v,new Mn(new tn([_(B,-.715,Z+.13),_(B,-.9,Z+.13),_(B+.02,-1.15,Z+.1+W*.02),_(B+.04,Ft.base+.02,Z+.05+W*.03)],!1,"centripetal"),48,.026,14),d(i.caboAT))}h(v,se(.7,.02,.32,.004),d(i.base),ct-.02,Ft.base+.01,Z+.1),C("caixa",_(ct-.03,-.22,Z+.29),"terminais"),C("caboAT",_(ct-.2,-1,Z+.14),"terminais")}for(let X of[-1,1])for(let Z of[R.x0+.34,R.x1-.34])h(E,se(.82,.05,.58,.006),d(i.base),Z,Ft.base+.025,X*(R.z-.07));return Sv(e),{raiz:e,giro:U,partes:n,corte:o,corteEixo:c,anim:s,ancoras:r,G:Ft,xa:ot,xd:ft,XF:z}}function Sv(i){i.updateMatrixWorld(!0);let t=r=>{let a=r.parent;for(;a&&a!==i&&!a.userData.parte;)a=a.parent;return a||i},e=new Map,n=new ye,s=new ye;i.traverse(r=>{if(!r.isMesh||r.userData.manter||r.isInstancedMesh)return;let a=t(r),o=`${a.uuid}|${r.userData.parte}|${r.material.uuid}|${r.castShadow}|${r.userData.raioX||""}`;e.has(o)||e.set(o,{g:a,lista:[]}),e.get(o).lista.push(r)});for(let{g:r,lista:a}of e.values()){if(a.length<2)continue;n.copy(r.matrixWorld).invert();let o=a.map(d=>{let h=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();for(let f of Object.keys(h.attributes))["position","normal","uv"].includes(f)||h.deleteAttribute(f);if(h.attributes.uv||h.setAttribute("uv",new Me(new Float32Array(h.attributes.position.count*2),2)),s.multiplyMatrices(n,d.matrixWorld),h.applyMatrix4(s),s.determinant()<0){let f=h.attributes.position,g=h.attributes.normal;for(let x=0;x<f.count;x+=3)for(let m of[f,g,h.attributes.uv]){let p=[];for(let T=0;T<m.itemSize;T++)p.push(m.getComponent(x+1,T));for(let T=0;T<m.itemSize;T++)m.setComponent(x+1,T,m.getComponent(x+2,T)),m.setComponent(x+2,T,p[T])}}return h}),c=qr(o);if(!c)continue;let l=a[0],u=Ne(c,l.material,l.userData.parte);u.castShadow=l.castShadow,l.userData.raioX&&(u.userData.raioX=l.userData.raioX),r.add(u);for(let d of a)d.parent.remove(d)}}var sd=i=>i*Math.PI/180;function rd(i,t,e){let n=new D;function s(){let l=n.copy(i.position).sub(t.target),u=Math.max(.2,l.length());return{alvo:t.target.clone(),dist:u,az:Math.atan2(l.z,l.x)*180/Math.PI,el:Math.asin(Pn(l.y/u,-1,1))*180/Math.PI,c:e.get()}}let r=l=>{let u=sd(l.az),d=sd(l.el);return new D(l.alvo.x+l.dist*Math.cos(d)*Math.cos(u),l.alvo.y+l.dist*Math.sin(d),l.alvo.z+l.dist*Math.cos(d)*Math.sin(u))},a=l=>typeof l=="function"?l():Array.isArray(l)?new D(...l):l;function o(l){t.target.copy(a(l.alvo)),i.position.copy(r({...l,alvo:a(l.alvo)})),l.c&&e.set(l.c[0],l.c[1])}function c(l,u,d){let h=u.az-l.az;for(;h>180;)h-=360;for(;h<-180;)h+=360;let f=l.c||e.get(),g=u.c||f;return{alvo:a(l.alvo).clone().lerp(a(u.alvo),d),dist:Math.exp(Zr(Math.log(l.dist),Math.log(u.dist),d)),az:l.az+h*d,el:Zr(l.el,u.el,d),c:[Zr(f[0],g[0],d),Zr(f[1],g[1],d)]}}return{estado:s,aplicar:o,misturar:c}}function ad(i,{reduce:t,resolver:e}){let n=[],s=0,r=!1,a=!1,o=null,c=0,l=-1;function u(h,f){let g=i.estado();n=[];let x=g;for(let m of h){let p=m.para||e(m.vista);n.push({...m,para:p,de:x}),x=p}t&&(n=n.map(m=>({...m,corte:!0}))),c=n.reduce((m,p)=>m+p.dur,0),s=0,r=!0,a=!1,o=f||null,l=-1}function d(h){if(!r||a)return null;s+=h;let f=0;for(let m=0;m<n.length;m++){let p=n[m];if(s<f+p.dur){m!==l&&(l=m,p.ini&&p.ini());let T=Pn((s-f)/p.dur,0,1),b=p.corte?1:p.suave===!1?T:Ku(T);return i.aplicar(i.misturar(p.de,p.para,b)),{k:s/c,i:m}}f+=p.dur}let g=n[n.length-1];g&&i.aplicar(i.misturar(g.de,g.para,1)),r=!1;let x=o;return o=null,x&&x(),{k:1,i:n.length-1}}return{tocar:u,atualizar:d,parar(){r=!1,o=null},pausar(){r&&(a=!0)},continuar(){a=!1},get ativo(){return r},get pausado(){return a},get t(){return s},get dur(){return c},get idx(){return l}}}var Ev=`
varying vec3 vRelP;
float relHash(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float relRuido(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
  return mix(mix(mix(relHash(i), relHash(i + vec3(1, 0, 0)), f.x), mix(relHash(i + vec3(0, 1, 0)), relHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(relHash(i + vec3(0, 0, 1)), relHash(i + vec3(1, 0, 1)), f.x), mix(relHash(i + vec3(0, 1, 1)), relHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
// sulco na divisa de cada per\xEDodo; some quando o per\xEDodo fica menor que o pixel (sem serrilhado)
float relFaixa(float c, float p, float larg) {
  float w = fwidth(c) / p, u = fract(c / p), d = min(u, 1. - u);
  return (1. - smoothstep(0., larg + w, d)) * (1. - smoothstep(.04, .16, w));
}
vec3 relNormal(vec3 n, float h, float faceDir) {
  vec3 dx = dFdx(-vViewPosition), dy = dFdy(-vViewPosition);
  vec3 sx = cross(dy, n), sy = cross(n, dx);
  float det = dot(dx, sx) * faceDir;
  vec3 g = sign(det) * (dFdx(h) * sx + dFdy(h) * sy);
  return normalize(abs(det) * n - g);
}
`,Tv={tinta:"float q = relRuido(P * E) * .65 + relRuido(P * E * 2.7) * .35; float h = F * q;",fundido:"float q = relRuido(P * E) * .55 + relRuido(P * E * 3.1) * .3 + relRuido(P * E * 9.3) * .15; float h = F * q;",lamina:"float q = relRuido(vec3(P.x * 45., P.y * 7., P.z * 7.)); float h = -F * relFaixa(P.x, E, .14);",camadas:"float r = length(P.yz); float q = relRuido(vec3(P.x * 4., r * 300., 0.)); float h = -F * relFaixa(r, E, .16);",torno:"float q = relRuido(vec3(P.x * 120., 0., 0.)); float h = -F * relFaixa(P.x, E, .35);",aletas:"float g = relFaixa(P.z, E, .3); float q = .5 - g * .9; float h = -F * g;"},wv=`
uniform float uCorte;
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
#endif
`,Av=`
  bool tampa = false; vec3 nTampaV = vec3(0., 0., 1.); vec3 pTampaV = vec3(0.);
  #if NUM_CLIPPING_PLANES > 0
  pTampaV = -vClipPosition;
  if (uCorte > .5 && !gl_FrontFacing) {
    vec3 Pv = -vClipPosition; float t0 = 0., t1 = 1.; int k = -1; bool vale = true;
    for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {
      vec4 pl = clippingPlanes[i]; float dc = pl.w, dp = dot(Pv, pl.xyz) + pl.w;
      if (dc >= 0. && dp >= 0.) vale = false;
      else if (dc < 0. && dp >= 0.) { float tt = dc / (dc - dp); if (tt < t1) { t1 = tt; k = i; } }
      else if (dc >= 0. && dp < 0.) t0 = max(t0, dc / (dc - dp));
    }
    if (vale && k >= 0 && t0 <= t1) {
      tampa = true; pTampaV = Pv * t1;
      for (int i = 0; i < NUM_CLIPPING_PLANES; i++) if (i == k) nTampaV = -clippingPlanes[i].xyz;
    }
  }
  #endif
  vec3 pTampaW = cameraPosition + (vec4(pTampaV, 0.) * viewMatrix).xyz;
  vec3 nTampaW = normalize((vec4(nTampaV, 0.) * viewMatrix).xyz);
  // hachura a 45\xB0 no pr\xF3prio plano, em metros (n\xE3o escorrega quando a c\xE2mera anda)
  float hU = dot(pTampaW, normalize(vec3(1.) - abs(nTampaW) + 1e-4)) / .028, hW = fwidth(hU);
  float hD = .5 - abs(fract(hU) - .5), hL = (1. - smoothstep(.11 - hW, .11 + hW, hD)) * (1. - smoothstep(.22, .45, hW));
`;function od(i,{corte:t,uCorte:e}){let n=i.userData&&i.userData.relevo;if(!n&&!t)return;let s=i.onBeforeCompile;i.onBeforeCompile=(a,o)=>{if(s&&s!==i.onBeforeCompile&&s(a,o),n&&(a.vertexShader=`varying vec3 vRelP;
`+a.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vRelP = (modelMatrix * vec4(transformed, 1.)).xyz;`),a.fragmentShader=a.fragmentShader.replace("void main() {",Ev+`
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 P = vRelP; const float E = ${n.e.toFixed(5)}, F = ${n.f.toExponential(4)};
        ${Tv[n.t]}
        diffuseColor.rgb *= 1. + (q - .5) * ${(n.cor??.05).toFixed(3)};`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = clamp(roughnessFactor + (q - .5) * ${(n.rug??.12).toFixed(3)}, .04, 1.);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (gl_FrontFacing) normal = relNormal(normal, h, 1.);`)),t){a.uniforms.uCorte=e;let c=fe.lights_fragment_begin.replace("vDirectionalShadowCoord[ i ]","( tampa ? directionalShadowMatrix[ i ] * vec4( pTampaW + nTampaW * directionalLightShadows[ i ].shadowNormalBias, 1. ) : vDirectionalShadowCoord[ i ] )");a.fragmentShader=wv+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+Av).replace("#include <color_fragment>",`#include <color_fragment>
        if (tampa) diffuseColor.rgb *= ${i.userData.liquido?"1.08":"mix(.94, .64, hL)"};`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        if (tampa) { normal = normalize(nTampaV); nonPerturbedNormal = normal; }`).replace("#include <lights_fragment_begin>",c).replace("#include <opaque_fragment>",`#include <opaque_fragment>
  if (tampa) gl_FragColor.a = .995;`)}};let r=(n?`rel-${n.t}-${n.e}-${n.f}-${n.cor??""}-${n.rug??""}`:"")+(t?"-corte3"+(i.userData.liquido?"l":""):"");i.customProgramCacheKey=()=>r}var ld=new ae(2854143),hd=new ae(16726815),Kl="linear-gradient(90deg,#2b8cff,#bc6dbb,#ff3b1f)",Jl=(i,t)=>t.copy(ld).lerp(hd,Pn(i,0,1)),Rv=i=>{let t=Pn((i-.3)/.4,0,1);return t*t*(3-2*t)},Cv=`
attribute vec3 aP; attribute vec3 aD; attribute vec3 aC; attribute float aS;
varying vec3 vC; varying vec2 vQ; varying float vL; varying float vW;
#include <common>
#include <clipping_planes_pars_vertex>
void main() {
  vec3 h = (modelViewMatrix * vec4(aP, 1.)).xyz, t = (modelViewMatrix * vec4(aP - aD, 1.)).xyz;
  vec3 d = h - t; float len = length(d); vec3 dn = len > 1e-6 ? d / len : vec3(1., 0., 0.);
  vec3 sd = cross(dn, normalize(h + t)); float sl = length(sd); sd = sl > 1e-5 ? sd / sl : vec3(0., 1., 0.);
  float w = aS, u = position.x;
  vec3 p = mix(h + dn * w, t - dn * w, u) + sd * (position.y * w);
  vQ = vec2(mix(-w, len + w, u), position.y * w); vL = len; vW = w; vC = aC;
  vec4 mvPosition = vec4(p, 1.);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}`,Pv=`
uniform float uOp;
varying vec3 vC; varying vec2 vQ; varying float vL; varying float vW;
#include <common>
#include <clipping_planes_pars_fragment>
void main() {
  #include <clipping_planes_fragment>
  float a = clamp(vQ.x, 0., vL), k = 1. - a / max(vL, 1e-5);
  float w = vW * (.38 + .62 * k), r = length(vec2(vQ.x - a, vQ.y)) / w;
  float al = (1. - smoothstep(.45, 1., r)) * (.1 + .9 * k * k) * uOp;
  if (al < .01) discard;
  gl_FragColor = vec4(vC * (.78 + .5 * k), al);
}`;function cd(i,t,{ordem:e=7,fraco:n=.16}={}){let s=new Qa;s.setAttribute("position",new Me([0,-1,0,0,1,0,1,-1,0,1,1,0],3)),s.setIndex([0,1,2,2,1,3]);let r=(f,g)=>{let x=new ps(new Float32Array(i*g),g);return x.setUsage(Lu),s.setAttribute(f,x),x},a=r("aP",3),o=r("aD",3),c=r("aC",3),l=r("aS",1);s.instanceCount=i;let u=(f,g)=>{let x=new Be({uniforms:{uOp:{value:f}},vertexShader:Cv,fragmentShader:Pv,transparent:!0,depthWrite:!1,depthTest:g,clipping:!0});return x.clippingPlanes=t,x.clipIntersection=!0,x},d=new xn,h=[[new Te(s,u(1,!0)),e]];n>0&&h.push([new Te(s,u(n,!1)),e-1]);for(let[f,g]of h)f.frustumCulled=!1,f.renderOrder=g,f.userData.sobre=!0,d.add(f);return d.visible=!1,{grupo:d,P:a.array,D:o.array,C:c.array,S:l.array,enviar(){a.needsUpdate=o.needsUpdate=c.needsUpdate=l.needsUpdate=!0}}}function bo(i,t,e){let n=i.getSpacedPoints(t),s=new Float32Array((t+1)*3),r=new Float32Array(t+1);return n.forEach((a,o)=>{s[o*3]=a.x,s[o*3+1]=a.y,s[o*3+2]=a.z,r[o]=e(i.getUtoTmapping(o/t))}),{p:s,k:r,m:t,L:i.getLength()}}function So(i,t,e){let n=Pn(t,0,1)*i.m,s=Math.min(i.m-1,Math.floor(n)),r=n-s,a=s*3,o=a+3;return e.set(i.p[a]+(i.p[o]-i.p[a])*r,i.p[a+1]+(i.p[o+1]-i.p[a+1])*r,i.p[a+2]+(i.p[o+2]-i.p[a+2])*r),i.k[s]+(i.k[s+1]-i.k[s])*r}function ud(i,t,{leve:e,planos:n}){let s=vo(97531),r=new D,a=new D,o=new D,c=new ae,l=(()=>{let E=document.createElement("canvas");E.width=E.height=64;let v=E.getContext("2d"),F=v.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,"rgba(255,255,255,1)"),F.addColorStop(.35,"rgba(255,255,255,.9)"),F.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=F,v.fillRect(0,0,64,64);let $=new Hi(E);return $.colorSpace=ln,$})(),u=(E,v,F)=>{let $=new Ge,it=new Float32Array(E*3),Q=new Float32Array(E*3);$.setAttribute("position",new un(it,3)),$.setAttribute("color",new un(Q,3));let yt=new Lr({size:v,map:l,vertexColors:!0,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1,toneMapped:!1}),Et=new Wa($,yt);return Et.renderOrder=F,Et.visible=!1,Et.frustumCulled=!1,{o:Et,pos:it,cr:Q,geo:$}},d=t.anim.trocador,h=Ft.frame,f=Ft.nucleo,g=[];{let E=(f-(Ft.pacotes-1)*Ft.duto)/Ft.pacotes;for(let v=1;v<Ft.pacotes;v++)g.push(-f/2+v*(E+Ft.duto)-Ft.duto/2)}let x=(E,v,F)=>new D(E,v*Math.cos(F),v*Math.sin(F)),m=(E,v,F)=>new D(E,v,F),p=[],T=e?64:150,b=d.gx/2-.06,M=d.zA-.04;for(let E=0;E<T;E++){let v=g[Math.floor(s()*g.length)]+(s()-.5)*.008,F=s()*Math.PI*2,$=Math.cos(F),it=Math.sin(F),Q=h.z-.08,yt=h.y0+.08,Et=Math.sign(it)||1,zt=Math.min(Math.abs(it)>.001?Q/Math.abs(it):9,$<0?-yt/-$:(h.y1-.06)/Math.max($,.001)),re=Pn(v*1.06+(s()-.5)*.14,-(In-.16),In-.16),ct=[x(v,Ft.bore+.06,F),x(v,Ft.rExt+.05,F),x(v*1.02,zt*.95,F)];$<.55&&($<-.4&&ct.push(m(re,yt+.05,Et*(Q-.1))),ct.push(m(re,Math.max(-.2,zt*$)+.25,Et*Q),m(re,.78,Et*(Q-.02))));let It=Et*Math.min(Math.abs(zt*it),h.z-.32)*(.45+.55*s()),Dt=Pn(re*1.2+(s()-.5)*.9,-b,b),jt=Pn(It*1.25+(s()-.5)*.5,-M,M),Rt=Math.sign(Dt)||1;ct.push(m(re,h.y1-.02,It),m((re+Dt)/2,h.y1+.07,(It+jt)/2),m(Dt,d.yBase-.05,jt));let Qt=ct.length;ct.push(m(Dt,d.yBase,jt),m(Dt,d.yb,jt),m(Dt,d.yTopo,jt));let X=ct.length-1,Z=Rt*(d.xCh+.22+s()*.3),A=F+(s()-.5)*.3;ct.push(m(Dt+Rt*.08,d.yTopo+.1,jt*.97),m(Rt*(d.xCh+.04),d.yTopo+.17,jt*.92),m(Z,d.yTopo+.02,jt*.9),m(Z+Rt*.02,h.y1+.05,jt*.88),m(Z+Rt*.05,.96,It),x(Rt*2.04,.82,A),x(Rt*1.96,.6,A),x(Rt*(dr+.1),.44,A),x(Rt*(Ai+.012),.34,A),x(Rt*(Ai-.02),.56,A),x(Rt*(In-.03),.585,A),x(Rt*(f/2+.3),.77,A),x(Rt*(f/2+.04),.7,A),x(Rt*(f/2-.12),.657,A),x((v+Rt*(f/2-.12))/2,.661,F));let W=new tn(ct,!0,"centripetal"),B=ct.length,k=(Qt-.15)/B,tt=(X+.1)/B,G=(B-4)/B;p.push(bo(W,700,lt=>lt<k?1:lt<tt?1-(lt-k)/(tt-k):lt>G?.85*(lt-G)/(1-G):0))}let H=e?1500:3400,_=cd(H,n,{ordem:7,fraco:.14}),C=[];for(let E=0;E<H;E++)C.push({c:E%p.length,u:s(),v:.3+s()*.16,j:m(s()-.5,s()-.5,s()-.5).multiplyScalar(.035)});i.add(_.grupo);function R(E){for(let v=0;v<H;v++){let F=C[v],$=p[F.c];F.u=(F.u+E*F.v/$.L)%1;let it=So($,F.u,a),Q=F.u-.15/$.L;Q<0&&(Q+=1),So($,Q,o);let yt=v*3;a.add(F.j),_.P[yt]=a.x,_.P[yt+1]=a.y,_.P[yt+2]=a.z,o.add(F.j),_.D[yt]=a.x-o.x,_.D[yt+1]=a.y-o.y,_.D[yt+2]=a.z-o.z,Jl(it,c),_.C[yt]=c.r,_.C[yt+1]=c.g,_.C[yt+2]=c.b,_.S[v]=.019}_.enviar()}let S=new xn;S.visible=!1,i.add(S);let y={value:0},I=new Te(d.nucleos,new Be({uniforms:{uT:y,uYb:{value:d.yb},uZ:{value:d.zS},uV:{value:.32},uLam:{value:.16},cF:{value:ld.clone()},cQ:{value:hd.clone()}},clipping:!0,side:wn,vertexShader:`attribute float aFase; varying vec3 vP; varying vec3 vN; varying float vF;
      #include <common>
      #include <clipping_planes_pars_vertex>
      void main() { vP = position; vF = aFase; vN = normalize(normalMatrix * normal); vec4 mvPosition = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mvPosition;
      #include <clipping_planes_vertex>
      }`,fragmentShader:`uniform float uT; uniform float uYb; uniform float uZ; uniform float uV; uniform float uLam; uniform vec3 cF; uniform vec3 cQ;
      varying vec3 vP; varying vec3 vN; varying float vF;
      #include <common>
      #include <clipping_planes_pars_fragment>
      void main() {
      #include <clipping_planes_fragment>
        float zr = clamp((vP.z + uZ) / (2. * uZ), 0., 1.); bool baixo = vP.y < uYb;
        float s = baixo ? zr * .5 : 1. - zr * .5, ao = baixo ? vP.z : -vP.z;
        float f = fract((ao - uT * uV) / uLam + vF), faixa = smoothstep(0., .1, f) * (1. - smoothstep(.28, .5, f));
        vec3 n = normalize(gl_FrontFacing ? vN : -vN);
        vec3 c = mix(cF, cQ, smoothstep(.3, .7, s)) * (.62 + .55 * faixa) * (.62 + .45 * max(dot(n, normalize(vec3(.35, .9, .45))), 0.));
        gl_FragColor = vec4(c, 1.);
      }`}));I.material.clippingPlanes=n,I.material.clipIntersection=!0,I.userData.sobre=!0,I.frustumCulled=!1,S.add(I);let Y=[];for(let[E,v]of[["entrada",0],["saida",1]]){let F=d.curvas[E],$=F.getLength(),it=new Be({uniforms:{uT:y,uL:{value:$},uR:{value:d.rT+.004},uV:{value:.32},uCor:{value:Jl(v,new ae)}},transparent:!0,depthWrite:!1,clipping:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:`varying vec2 vUv;
        #include <common>
        #include <clipping_planes_pars_vertex>
        void main() { vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
        }`,fragmentShader:`uniform float uT; uniform float uL; uniform float uR; uniform float uV; uniform vec3 uCor; varying vec2 vUv;
        #include <common>
        #include <clipping_planes_pars_fragment>
        void main() {
        #include <clipping_planes_fragment>
          float y = (fract(vUv.y * 3.) - .5) * 6.2832 * uR / 3., ay = abs(y);
          float x = vUv.x * uL - uT * uV + ay * .9, f = fract(x / .15);
          float faixa = 1. - smoothstep(.018, .026, ay), chev = smoothstep(.0, .06, f) * (1. - smoothstep(.22, .3, f));
          float al = faixa * chev * .95 * smoothstep(0., .04, vUv.x * uL) * smoothstep(0., .04, (1. - vUv.x) * uL);
          if (al < .02) discard;
          gl_FragColor = vec4(uCor * 1.15, al);
        }`});it.clippingPlanes=n,it.clipIntersection=!0;let Q=new Te(new Mn(F,160,d.rT+.004,24,!1),it);Q.renderOrder=8,Q.userData.sobre=!0,S.add(Q),Y.push(Q)}let U=d.zS,L=d.filas.filter(E=>E.passe===1),O=d.filas.filter(E=>E.passe===2),z=[],nt=E=>{let v=E[Math.floor(s()*E.length)];return[v.xs[Math.floor(s()*v.xs.length)],v.y]},K=e?26:46;for(let E=0;E<K;E++){{let[v,F]=nt(L),$=(s()-.5)*.05;z.push(bo(new tn([m(d.xIn,d.yI,-(d.zTp+.085)),m(d.xIn,d.yI+$*.6,-(U+.19)),m(d.xIn+(v-d.xIn)*.4,(d.yI+F)/2+$,-(U+.13)),m(d.xIn+(v-d.xIn)*.85,F+$*.3,-(U+.06)),m(v,F,-(U+.012)),m(v,F,-(U-.04))],!1,"centripetal"),220,it=>.03*it))}{let[v,F]=nt(L),$=Pn(v+(s()-.5)*.2,-d.aC+.05,d.aC-.05),it=O[Math.floor(s()*O.length)].y;z.push(bo(new tn([m(v,F,U-.04),m(v,F,U+.03),m((v+$)/2,F+.02,U+.12),m((v+$)/2,d.yb,U+.16),m($,it-.02,U+.12),m($,it,U+.03),m($,it,U-.04)],!1,"centripetal"),120,Q=>.47+.06*Q))}{let[v,F]=nt(O),$=(s()-.5)*.05;z.push(bo(new tn([m(v,F,-(U-.04)),m(v,F,-(U+.012)),m(d.xOut+(v-d.xOut)*.85,F+$*.3,-(U+.06)),m(d.xOut+(v-d.xOut)*.4,(d.yO+F)/2+$,-(U+.13)),m(d.xOut,d.yO+$*.6,-(U+.19)),m(d.xOut,d.yO,-(d.zTp+.085))],!1,"centripetal"),220,it=>.97+.03*it))}}let rt=z.reduce((E,v)=>E+v.L,0),Tt=e?420:900,Ct=cd(Tt,n,{ordem:9,fraco:0}),Mt=[];{let E=0,v=0;for(let F=0;F<z.length;F++)for(E+=z[F].L/rt*Tt;v<Math.round(E)&&v<Tt;)Mt.push({c:F,u:s(),v:.2+s()*.06}),v++;for(;Mt.length<Tt;)Mt.push({c:0,u:s(),v:.22})}S.add(Ct.grupo),Ct.grupo.visible=!0;function $t(E){y.value+=E,I.position.copy(t.partes.feixe.position);for(let F of Y)F.position.copy(t.partes.agua.position);let v=t.partes.caixasAgua.position;for(let F=0;F<Tt;F++){let $=Mt[F],it=z[$.c];$.u+=E*$.v/it.L,$.u>1&&($.u-=1);let Q=So(it,$.u,a);So(it,Math.max(0,$.u-.05/it.L),o);let yt=F*3;Ct.P[yt]=a.x+v.x,Ct.P[yt+1]=a.y+v.y,Ct.P[yt+2]=a.z+v.z,Ct.D[yt]=a.x-o.x,Ct.D[yt+1]=a.y-o.y,Ct.D[yt+2]=a.z-o.z,Jl(Rv(Q),c),Ct.C[yt]=c.r,Ct.C[yt+1]=c.g,Ct.C[yt+2]=c.b,Ct.S[F]=.0085}Ct.enviar()}let st=46,ot=u(st*2,.042,8);t.giro.add(ot.o);let Bt=0;function ft(E){Bt+=E*.16;for(let v=0;v<2;v++)for(let F=0;F<st;F++){let $=(F/st+Bt)%1,it=v?1-$:$,Q=t.anim.cabos[v].getPointAt(it,r),yt=(v*st+F)*3;ot.pos[yt]=Q.x,ot.pos[yt+1]=Q.y,ot.pos[yt+2]=Q.z;let Et=v?[1,.85,.35]:[1,.35,.25];ot.cr[yt]=Et[0],ot.cr[yt+1]=Et[1],ot.cr[yt+2]=Et[2]}ot.geo.attributes.position.needsUpdate=!0,ot.geo.attributes.color.needsUpdate=!0}let Ut=72,Jt=new sr(.024,.12,12);Jt.rotateZ(-Math.PI/2);let kt=new Ga(Jt,new yn({toneMapped:!1,depthTest:!1,transparent:!0,opacity:.95}),Ut*3);kt.material.clippingPlanes=n,kt.material.clipIntersection=!0,kt.visible=!1,kt.renderOrder=9,kt.frustumCulled=!1,i.add(kt);let ce=new ye,pt=new dn,Pt=new D,N=new D(1,0,0),Ot=new D,xt=new D;function wt(E){let v=0;for(let F of[-.75,0,.75])for(let $=0;$<Ut;$++){let it=$*2*Math.PI/Ut,Q=Math.cos(Ft.polos/2*(it-E)),yt=Ft.bore-.008;Ot.set(0,Math.cos(it),Math.sin(it)),Q<0&&Ot.negate(),pt.setFromUnitVectors(N,Ot);let Et=.35+.9*Math.abs(Q);Pt.set(Et,Et,Et),ce.compose(xt.set(F,yt*Math.cos(it),yt*Math.sin(it)),pt,Pt),kt.setMatrixAt(v,ce),c.setRGB(Q>=0?.95:.18,Q>=0?.3+.2*(1-Q):.45,Q>=0?.2:.95),kt.setColorAt(v,c),v++}kt.instanceMatrix.needsUpdate=!0,kt.instanceColor&&(kt.instanceColor.needsUpdate=!0)}let At=new xn;At.visible=!1,i.add(At);let Xt=[],dt=(E,v,F,$,it)=>{let Q=v.clone().normalize(),yt=new yn({color:$,toneMapped:!1,depthTest:!1,transparent:!0}),Et=Math.min(.16,F*.32),zt=new Te(new ge(.018,.018,F-Et,12),yt),re=new Te(new sr(.055,Et,16),yt);zt.position.y=(F-Et)/2,re.position.y=F-Et/2;let ct=new xn;return ct.add(zt,re),ct.position.copy(E),ct.quaternion.setFromUnitVectors(new D(0,1,0),Q),zt.renderOrder=re.renderOrder=10,At.add(ct),it&&Xt.push({p:E.clone(),texto:it,cor:"#"+new ae($).getHexString()}),ct};dt(new D(-.3,1.4,0),new D(0,-1,0),.66,16757575,"Peso do rotor"),dt(new D(.35,1.22,0),new D(0,-1,0),.48,12950527,"Atra\xE7\xE3o magn\xE9tica"),dt(new D(qi(1),-1.02,0),new D(0,1,0),.62,7329999,"Rea\xE7\xE3o no mancal LA"),dt(new D(qi(-1),-1.02,0),new D(0,1,0),.6,7329999,"Rea\xE7\xE3o no mancal LOA");{let E=[];for(let $=0;$<=40;$++){let it=-.3+$/40*Math.PI*1.4;E.push(new D(we($n.L)+.14,.5*Math.cos(it),.5*Math.sin(it)))}let v=new Te(new Mn(new tn(E),40,.02,8),new yn({color:16765286,toneMapped:!1,depthTest:!1,transparent:!0}));v.renderOrder=10,At.add(v),Xt.push({p:E[20].clone(),texto:"Torque na ponta de eixo",cor:"#ffd166"});let F=new Te(new sr(.06,.14,12),v.material);F.renderOrder=10,F.position.copy(E[40]),F.lookAt(E[40].clone().add(E[40].clone().sub(E[38]))),F.rotateX(Math.PI/2),At.add(F)}return{ar:_.grupo,agua:S,corrente:ot.o,fluxo:kt,cargas:At,rotulosCargas:Xt,atualizar(E,v){_.grupo.visible&&R(E),S.visible&&$t(E),ot.o.visible&&ft(E),kt.visible&&wt(v)}}}var jl=i=>i*Math.PI/180;function dd(i){i.raiz.updateMatrixWorld(!0);let t=new Map,e=new D,n=s=>{let r=null,a=!1,o=s.userData.parte;for(let c=s;c;c=c.parent)!o&&c.userData.parte&&(o=c.userData.parte),!r&&ws[c.name]&&(r=c.name),c===i.giro&&(a=!0);return{g:r,gira:a,parte:o}};return i.raiz.traverse(s=>{if(!s.isMesh||s.userData.sobre)return;let{g:r,gira:a,parte:o}=n(s);if(!o)return;let c=new Rn,l=s.geometry.attributes.position,u=0,d=Math.max(1,Math.floor(l.count/4e3));for(let g=0;g<l.count;g+=d)e.fromBufferAttribute(l,g).applyMatrix4(s.matrixWorld),c.expandByPoint(e),a&&(u=Math.max(u,Math.hypot(e.y,e.z)));a&&(c.min.y=c.min.z=-u,c.max.y=c.max.z=u);let h=`${o==="excitatrizFixa"?"excitatriz":o}|${r||""}`;t.has(h)||t.set(h,{parte:o==="excitatrizFixa"?"excitatriz":o,g:r,caixa:new Rn,pts:[]});let f=t.get(h);if(f.caixa.union(c),c.getSize(e).length()>.15)for(let g=0;g<8;g++)f.pts.push(new D(g&1?c.max.x:c.min.x,g&2?c.max.y:c.min.y,g&4?c.max.z:c.min.z));else f.pts.push(c.getCenter(new D))}),[...t.values()]}function fd(i,t,e=0){let n=[],s=new D;for(let r of i)if(!(t&&!t.includes(r.parte))){r.g&&e?s.fromArray(ws[r.g]).multiplyScalar(e):s.set(0,0,0);for(let a of r.pts)n.push(a.clone().add(s))}return n}function pd(i,t,e){let s=e.direita??i,r=e.card,a=e.meta,o=(a?a.y+a.h:0)+18*.6,c=[];return r?(c.push({x:r.x+r.w+18,y:18,w:s-18-(r.x+r.w+18),h:t-2*18}),c.push({x:18,y:o,w:s-2*18,h:r.y-18-o})):c.push({x:18,y:o,w:s-2*18,h:t-18-o}),c.filter(l=>l.w>120&&l.h>120)}function Iv(i,{az:t=40,el:e=18,folga:n=1.12},s,r,a,o){let c=jl(s.fov),l=Math.tan(c/2)*o.h/a,u=Math.tan(c/2)*o.w/a,d=jl(t),h=jl(e),f=new D(Math.cos(h)*Math.cos(d),Math.sin(h),Math.cos(h)*Math.sin(d)),g=f.clone().negate(),x=new D().crossVectors(g,new D(0,1,0)).normalize(),m=new D().crossVectors(x,g),p=new Rn().setFromPoints(i).getCenter(new D),T=new D,b=1;for(let M=0;M<5;M++){b=.5;for(let S of i){T.subVectors(S,p);let y=T.dot(x),I=T.dot(m),Y=T.dot(f);b=Math.max(b,Y+Math.abs(y)*n/u,Y+Math.abs(I)*n/l)}let H=1/0,_=-1/0,C=1/0,R=-1/0;for(let S of i){T.subVectors(S,p);let y=Math.max(.1,b-T.dot(f)),I=T.dot(x)/y,Y=T.dot(m)/y;H=Math.min(H,I),_=Math.max(_,I),C=Math.min(C,Y),R=Math.max(R,Y)}p.addScaledVector(x,(H+_)/2*b*.9).addScaledVector(m,(C+R)/2*b*.9)}return{alvo:p,dist:b,az:t,el:e,c:[(o.x+o.w/2)/r,(o.y+o.h/2)/a]}}function md(i,t,e,n,s,r){let a=null;for(let o of r){let c=Iv(i,t,e,n,s,o);(!a||c.dist<a.dist)&&(a=c,a.area=o)}return a}var gd='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',xd='"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',vd=(i,t)=>{let e=new ae(i);return`rgba(${Math.round(e.r*255)},${Math.round(e.g*255)},${Math.round(e.b*255)},${t})`},Ql=(i,t,e,n,s,r=6)=>i<s.x+s.w+r&&i+e+r>s.x&&t<s.y+s.h+r&&t+n+r>s.y;function _d(i,{reduce:t}){let e=i.getContext("2d"),n=new Map,s=new D,r=1,a=1,o=1,c=performance.now(),l=!1;function u(x,m){o=Math.min(devicePixelRatio||1,2),r=x,a=m,i.width=Math.round(x*o),i.height=Math.round(m*o),i.style.width=x+"px",i.style.height=m+"px"}function d(x,m,p,T,b,M,H,_,C){e.globalAlpha=M,e.fillStyle=C?"rgba(4,16,24,.94)":"rgba(6,20,30,.86)",e.beginPath(),e.roundRect?e.roundRect(x,m,p,T,7):e.rect(x,m,p,T),e.fill(),e.strokeStyle=vd(b,C?.8:.45),e.lineWidth=1,e.stroke(),e.fillStyle=b,e.fillRect(x+7,m+7,3,T-14),e.fillStyle="#eaf3f5",e.font=`600 ${C?12.5:11.8}px ${gd}`,e.fillText(H,x+16,m+(_?15.5:T/2+4)),_&&(e.fillStyle="rgba(200,220,226,.78)",e.font=`500 10px ${xd}`,e.fillText(_,x+16,m+30)),e.globalAlpha=1}function h(x,m){let{L:p,x0:T,y0:b,x:M,y:H,tw:_,th:C}=x,R=n.get(p.chave)??0,S=t||l?1:Math.min(1,R+m);n.set(p.chave,S);let y=S*(p.visivel??1);if(y<.02)return;let I=M+_/2>=T,Y=I?M:M+_,U=H+C/2,L=Y+(I?-12:12);e.globalAlpha=y;for(let[O,z]of[["rgba(4,14,22,.45)",3],[vd(p.cor,.95),1.2]])e.strokeStyle=O,e.lineWidth=z,e.beginPath(),e.moveTo(T,b),e.lineTo(L,U),e.lineTo(Y,U),e.stroke();e.beginPath(),e.arc(T,b,4.6,0,6.283),e.fillStyle="rgba(4,14,22,.8)",e.fill(),e.beginPath(),e.arc(T,b,2.8,0,6.283),e.fillStyle=p.cor,e.fill(),e.globalAlpha=1,d(M,H,_,C,p.cor,y,p.texto,p.sub,p.forte)}function f(x,m,p,T,{limite:b=12,direita:M=r}={}){let H=performance.now(),_=Math.min(1,(H-c)/260);c=H,e.setTransform(o,0,0,o,0,0),e.clearRect(0,0,r,a),e.textBaseline="alphabetic";let C=new Set,R=[];for(let L of x){if(s.copy(L.pos).project(m),s.z>1||s.z<-1)continue;let O=(s.x+1)/2*r,z=(1-s.y)/2*a;if(O<4||z<4||O>r-4||z>a-4)continue;e.font=`600 ${L.forte?12.5:11.8}px ${gd}`;let nt=e.measureText(L.texto).width;L.sub&&(e.font=`500 10px ${xd}`,nt=Math.max(nt,e.measureText(L.sub).width)),R.push({L,x0:O,y0:z,tw:nt+26,th:L.sub?38:25})}let S=[],y=(L,O,z,nt)=>L<8||O<8||L+z>r-8||O+nt>a-8||p.some(K=>Ql(L,O,z,nt,K))||S.some(K=>Ql(L,O,z,nt,K,5)),I=L=>{S.push({x:L.x,y:L.y,w:L.tw,h:L.th}),C.add(L.L.chave),h(L,_)},Y=L=>{let{x0:O,y0:z,tw:nt,th:K}=L,rt=O>=T[0]?1:-1,Tt=z<=T[1]?-1:1,Ct=($t,st)=>$t>0?st:-nt-st,Mt=($t,st)=>$t<0?-K-st:st;for(let[$t,st]of[[Ct(rt,26),Mt(Tt,26)],[Ct(rt,44),Mt(Tt,62)],[Ct(rt,30),-K/2],[Ct(-rt,26),Mt(Tt,26)],[Ct(rt,26),Mt(-Tt,18)],[-nt/2,Mt(Tt,60)],[Ct(-rt,44),Mt(Tt,62)],[Ct(rt,110),Mt(Tt,40)]])if(!y(O+$t,z+st,nt,K))return L.x=O+$t,L.y=z+st,!0;return!1};for(let L of R.filter(O=>O.L.forte))Y(L)&&I(L);let U=R.filter(L=>!L.L.forte).slice(0,b);for(let L of[1,-1]){let O=U.filter(Mt=>Mt.x0>=T[0]==L>0).sort((Mt,$t)=>Mt.y0-$t.y0);if(!O.length)continue;let z=Math.max(...O.map(Mt=>Mt.tw)),nt=O.map(Mt=>Mt.x0),K=Math.min(r,M)-10,rt=L>0?Math.max(...nt)+38:Math.min(...nt)-38-z;rt+z>K&&(rt=Math.min(...nt)-38-z),rt<10&&(rt=Math.max(...nt)+38),rt=Math.max(10,Math.min(K-z,rt));let Tt=-1e9;for(let Mt of O){let $t=Math.max(Mt.y0-Mt.th/2,Tt+7,10);for(let st=0;st<6;st++){let ot=p.find(Bt=>Ql(rt,$t,z,Mt.th,Bt,4));if(!ot)break;$t=ot.y+ot.h+8}Mt.y=$t,Tt=$t+Mt.th}let Ct=a-10;for(let Mt=O.length-1;Mt>=0;Mt--){let $t=O[Mt];$t.y+$t.th>Ct&&($t.y=Ct-$t.th),Ct=$t.y-7}for(let Mt of O)Mt.x=rt+(rt+z/2<Mt.x0?z-Mt.tw:0),(!y(Mt.x,Mt.y,Mt.tw,Mt.th)||Y(Mt))&&I(Mt)}for(let L of[...n.keys()])C.has(L)||n.delete(L)}function g(){e.setTransform(o,0,0,o,0,0),e.clearRect(0,0,r,a),n.clear()}return{medir:u,desenhar:f,limpar:g,set instantaneo(x){l=x}}}var Dv={sistemas:'<path d="M8 2 2 5l6 3 6-3-6-3Z"/><path d="m2 8 6 3 6-3"/><path d="m2 11 6 3 6-3"/>',pecas:'<path d="M6 4h8M6 8h8M6 12h8"/><path d="M2.4 4h.2M2.4 8h.2M2.4 12h.2"/>',corte:'<circle cx="4" cy="12" r="2"/><circle cx="4" cy="4" r="2"/><path d="M5.6 5.3 14 12M5.6 10.7 14 4"/>',vistas:'<path d="M2 5.2h2.6L6 3.6h4l1.4 1.6H14V13H2Z"/><circle cx="8" cy="8.9" r="2.3"/>',ajuda:'<circle cx="8" cy="8" r="6"/><path d="M6.3 6.3a1.8 1.8 0 1 1 2.6 1.6c-.6.3-.9.7-.9 1.3v.3"/><path d="M8 11.5v.2"/>',fechar:'<path d="m4 4 8 8M12 4l-8 8"/>',alvo:'<circle cx="8" cy="8" r="5.2"/><circle cx="8" cy="8" r="1.6"/>',olho:'<path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8Z"/><circle cx="8" cy="8" r="1.9"/>',busca:'<circle cx="7" cy="7" r="4.4"/><path d="m10.4 10.4 3.4 3.4"/>',seta:'<path d="m6 3.5 4.5 4.5L6 12.5"/>',zoom:'<circle cx="7" cy="7" r="4.6"/><path d="M7 5v4M5 7h4M10.4 10.4l3.4 3.4"/>'},ni=i=>`<svg viewBox="0 0 16 16" aria-hidden="true">${Dv[i]}</svg>`,yd=[["sistemas","Sistemas"],["pecas","Pe\xE7as"],["corte","Corte e fluxos"],["vistas","Vistas"],["ajuda","Ajuda"]],Lv=[["geral","Geral","tr\xEAs quartos, lado LA"],["frente","Lateral","face da caixa de liga\xE7\xE3o"],["la","Ponta LA","ponta de eixo e mancal"],["loa","Ponta LOA","excitatriz e mancal"],["cima","De cima","trocador e carca\xE7a"],["tras","Lado da \xE1gua","bocais e tubos do trocador"],["mancal","Mancal LA","de perto"],["excitatriz","Excitatriz","de perto"]];function Md(i,t){let{SISTEMAS:e,PARTES:n,api:s,movel:r}=t,a=(U,L,O)=>{let z=document.createElement(U);return L&&(z.className=L),O!=null&&(z.innerHTML=O),z},o=a("div","m3-meta",`<p class="m3-kicker">Gerador s\xEDncrono \xB7 modelo de refer\xEAncia</p>
    <dl><div><dt>Polos</dt><dd>4</dd></div><div><dt>Rota\xE7\xE3o</dt><dd>1.800<small>rpm</small></dd></div><div><dt>Tens\xE3o</dt><dd>13,8<small>kV</small></dd></div><div><dt>Frequ\xEAncia</dt><dd>60<small>Hz</small></dd></div></dl>`);o.setAttribute("aria-hidden","true");let c=a("div","m3-trilho");c.setAttribute("role","toolbar"),c.setAttribute("aria-label","Explorar o gerador"),c.innerHTML=yd.map(([U,L])=>`<button type="button" data-painel="${U}" aria-pressed="false" aria-label="${L}" title="${L}">${ni(U)}<span>${L}</span></button>`).join("");let l=a("section","m3-gaveta");l.hidden=!0,l.setAttribute("aria-label","Painel"),l.innerHTML=`<div class="m3-g-topo"><p class="m3-g-tit"></p><button type="button" class="m3-g-x" aria-label="Fechar painel">${ni("fechar")}</button></div><div class="m3-g-corpo"></div>`;let u=l.querySelector(".m3-g-tit"),d=l.querySelector(".m3-g-corpo"),h=a("div","m3-legenda");h.hidden=!0,h.setAttribute("aria-hidden","true");let f=a("div","m3-escala","<i></i><span></span>");f.setAttribute("aria-hidden","true");let g=a("p","m3-aviso");g.hidden=!0,g.setAttribute("aria-live","polite");let x=a("button","m3-explorar",`${ni("sistemas")}<span>Explorar</span>`);x.type="button";let m=i.querySelector("#m3-tip");i.append(o,c,l,h,f,g,x);let p=null,T=null,b=0,M=U=>'<span class="m3-sw" aria-hidden="true"></span>',H=(U,L,O,z)=>`<button type="button" class="m3-opcao" data-op="${U}" aria-pressed="${z}"><span class="m3-txt"><b>${L}</b>${O?`<small>${O}</small>`:""}</span>${M(z)}</button>`;function _(U){let L=s.estado();return U==="sistemas"?`<div class="m3-camadas">${e.map(O=>`<div class="m3-sis-l"><button type="button" class="m3-sis" data-sis="${O.id}" aria-pressed="${s.sistemaVisivel(O.id)}"><i style="--c:${O.cor}"></i><span class="m3-txt"><b>${fn(O.nome)}</b><small>${fn(O.sub)}</small></span>${M()}</button><button type="button" class="m3-iso${s.isolado()===O.id?" on":""}" data-iso="${O.id}" aria-label="Isolar ${fn(O.nome)}" title="Isolar">${ni("alvo")}</button></div>`).join("")}</div>
      <div class="m3-acoes-g"><button type="button" data-ac="tudo">${ni("olho")}Mostrar todos os sistemas</button><button type="button" data-ac="explodir" aria-pressed="${L.explodir>.5}">${ni("zoom")}${L.explodir>.5?"Montar de novo":"Vista explodida"}</button></div>`:U==="pecas"?`<label class="m3-busca">${ni("busca")}<input type="search" placeholder="Procurar pe\xE7a" aria-label="Procurar pe\xE7a"></label><div class="m3-lista">${e.map(O=>{let z=O.partes.filter(nt=>n[nt]);return`<p class="m3-grupo" style="--c:${O.cor}">${fn(O.nome)}</p>${z.map(nt=>`<button type="button" data-peca="${nt}" data-busca="${fn((n[nt][0]+" "+O.nome).toLowerCase())}"><i style="--c:${O.cor}"></i><span>${fn(n[nt][0])}${n[nt][3]?`<small>${fn(n[nt][3])}</small>`:""}</span>${ni("seta")}</button>`).join("")}`}).join("")}</div>`:U==="corte"?`<p class="m3-grupo">Corte das partes fixas</p><div class="m3-segc" role="group" aria-label="Corte">${[["nenhum","Sem corte"],["meio","Meio"],["quarto","Um quarto"]].map(([O,z])=>`<button type="button" data-corte="${O}" aria-pressed="${L.corte===O}">${z}</button>`).join("")}</div>
      ${H("janela","Janela no eixo","mostra os cabos do campo no furo central",L.janela)}${H("raioX","Trocador por dentro","carca\xE7a, aletas e caixas transparentes",L.raioX)}
      <p class="m3-grupo">Fluxos</p>${H("ar","Ar de refrigera\xE7\xE3o","circuito fechado com o trocador",L.ar)}${H("agua","\xC1gua do trocador","entrada fria, sa\xEDda quente",L.agua)}${H("corrente","Corrente do campo","da ponte de diodos \xE0s bobinas",L.corrente)}${H("fluxo","Fluxo no entreferro","norte para fora, sul para dentro",L.fluxo)}${H("cargas","Cargas no eixo","peso, atra\xE7\xE3o, rea\xE7\xF5es e torque",L.cargas)}
      <p class="m3-grupo">Cores e r\xF3tulos</p>${H("fases","Fases U, V e W","enrolamento da armadura",L.fases)}${H("ns","Polos norte e sul","bobinas de campo",L.ns)}${H("rotulos","R\xF3tulos","nomes das pe\xE7as na cena",s.rotulos())}`:U==="vistas"?`<div class="m3-vistas">${Lv.map(([O,z,nt])=>`<button type="button" data-vista="${O}"><b>${z}</b><small>${nt}</small></button>`).join("")}</div>`:U==="ajuda"?`<div class="m3-ajuda"><b>Mouse</b><p>Arraste para girar, bot\xE3o direito ou Shift + arraste para deslocar e <kbd>Ctrl</kbd> + rolagem para aproximar (ou clique na cena e role). Clique numa pe\xE7a para abrir a ficha dela; duplo clique aproxima.</p>
      <b>Teclado</b><p><kbd>1</kbd>\u2013<kbd>9</kbd> cap\xEDtulos \xB7 <kbd>\u2190</kbd> <kbd>\u2192</kbd> anterior e pr\xF3ximo \xB7 <kbd>Espa\xE7o</kbd> tour \xB7 <kbd>X</kbd> corte \xB7 <kbd>E</kbd> vista explodida \xB7 <kbd>L</kbd> r\xF3tulos \xB7 <kbd>F</kbd> tela cheia \xB7 <kbd>Esc</kbd> fecha o painel</p>
      <b>Tour e explora\xE7\xE3o</b><p>O tour escolhe o corte, os fluxos e o enquadramento de cada cap\xEDtulo. Ao mexer na cena ou no painel, o tour para e o que voc\xEA ligar fica valendo at\xE9 o pr\xF3ximo cap\xEDtulo.</p></div>`:""}function C(U){let[L,O,z,nt]=n[U],K=e.find(rt=>rt.partes.includes(U));return`<div class="m3-insp"><header><i style="--c:${K?K.cor:"#fff"}"></i><div><small>${fn(K?K.nome:"")}</small><h4>${fn(L)}</h4></div></header><p>${fn(O)}</p>
      <div class="m3-insp-acoes"><button type="button" class="m3-focar" data-ac="aproximar">${ni("zoom")}Aproximar</button><button type="button" class="m3-sec" data-ac="isolar">${ni("alvo")}Isolar</button><button type="button" class="m3-sec" data-ac="ocultar">${ni("olho")}Ocultar</button></div>
      ${z?`<a class="m3-modulo" href="${z}">Abrir ${fn(nt)} \u2192</a>`:""}</div>`}function R(U,{foco:L=!1}={}){p=U,T=null,c.querySelectorAll("[data-painel]").forEach(O=>O.setAttribute("aria-pressed",String(O.dataset.painel===U))),u.textContent=(yd.find(O=>O[0]===U)||[0,""])[1],d.innerHTML=_(U),l.hidden=!1,requestAnimationFrame(()=>l.classList.add("on")),i.classList.add("m3-gaveta-on"),L&&l.querySelector("input,button:not(.m3-g-x)")?.focus(),t.aoMudarLayout?.()}function S(U){n[U]&&(p="insp",T=U,c.querySelectorAll("[data-painel]").forEach(L=>L.setAttribute("aria-pressed","false")),u.textContent="Pe\xE7a",d.innerHTML=C(U),l.hidden=!1,requestAnimationFrame(()=>l.classList.add("on")),i.classList.add("m3-gaveta-on"),t.aoMudarLayout?.())}function y(){p&&(p=null,T=null,l.classList.remove("on"),l.hidden=!0,i.classList.remove("m3-gaveta-on"),c.querySelectorAll("[data-painel]").forEach(U=>U.setAttribute("aria-pressed","false")),t.aoFechar?.(),t.aoMudarLayout?.())}function I(){if(p&&p!=="insp"&&p!=="pecas"){let U=d.scrollTop;d.innerHTML=_(p),d.scrollTop=U}Y()}function Y(){let U=s.estado();c.querySelector('[data-painel="sistemas"]').classList.toggle("ativo",!!s.isolado()||e.some(L=>!s.sistemaVisivel(L.id))||U.explodir>.5),c.querySelector('[data-painel="corte"]').classList.toggle("ativo",U.corte!=="nenhum"||U.raioX||U.ar||U.agua||U.corrente||U.fluxo||U.cargas)}return c.addEventListener("click",U=>{let L=U.target.closest("[data-painel]");L&&(p===L.dataset.painel?y():R(L.dataset.painel))}),x.addEventListener("click",()=>p?y():R("sistemas")),l.querySelector(".m3-g-x").addEventListener("click",y),d.addEventListener("input",U=>{if(U.target.type!=="search")return;let L=U.target.value.trim().toLowerCase();d.querySelectorAll("[data-peca]").forEach(O=>{O.hidden=!!L&&!O.dataset.busca.includes(L)}),d.querySelectorAll(".m3-grupo").forEach(O=>{let z=O.nextElementSibling,nt=!1;for(;z&&!z.classList.contains("m3-grupo");)z.hidden||(nt=!0),z=z.nextElementSibling;O.hidden=!nt})}),d.addEventListener("click",U=>{let L=U.target.closest("button");if(!L)return;if(L.dataset.sis){s.alternarSistema(L.dataset.sis),I();return}if(L.dataset.iso){s.isolarSistema(s.isolado()===L.dataset.iso?null:L.dataset.iso),I();return}if(L.dataset.peca){s.selecionarParte(L.dataset.peca,{voar:!0});return}if(L.dataset.corte){s.setCorte(L.dataset.corte),I();return}if(L.dataset.op){let z=L.dataset.op,nt=L.getAttribute("aria-pressed")!=="true";z==="rotulos"?s.setRotulos(nt):z==="janela"?s.setJanela(nt):s.setFlag(z,nt),I();return}if(L.dataset.vista){s.irVista(L.dataset.vista),r()&&y();return}let O=L.dataset.ac;O&&(O==="tudo"?(s.mostrarTudo(),I()):O==="explodir"?(s.explodir(s.estado().explodir<.5),I()):T&&O==="aproximar"?s.aproximar(T):T&&O==="isolar"?s.isolarParte(T):T&&O==="ocultar"&&(s.ocultarParte(T),y()))}),{abrir:R,abrirInspetor:S,fechar:y,sincronizar:I,get painel(){return p},get selecionada(){return T},blocos(){let U=i.getBoundingClientRect(),L=Mt=>{if(!Mt||Mt.hidden||!Mt.offsetParent&&getComputedStyle(Mt).position!=="fixed")return null;let $t=Mt.getBoundingClientRect();return $t.width&&$t.height?{x:$t.left-U.left,y:$t.top-U.top,w:$t.width,h:$t.height}:null},O=L(i.querySelector("#m3-card")),z=L(o),nt=L(c),K=p?L(l):null,rt=L(h),Tt=L(f),Ct=L(x);return{card:O,meta:z,trilho:nt,gaveta:K,direita:K?K.x-10:nt?nt.x-6:U.width,lista:[O,z,nt,K,rt,Tt,Ct].filter(Boolean)}},legenda(U){h.hidden=!U.length,h.innerHTML=U.map(([L,O,z,nt])=>z?`<span>${fn(L)}<small>${fn(z)}</small><i class="m3-grad" style="background:${O}"></i><small>${fn(nt)}</small></span>`:`<span><i style="background:${O}"></i>${fn(L)}</span>`).join("")},escala(U,L){f.querySelector("i").style.width=U.toFixed(0)+"px",f.querySelector("span").textContent=L},dica(U,L,O,z,nt){m.innerHTML=`<i style="--c:${nt}"></i><b>${fn(U)}</b>${L?`<small>${fn(L)}</small>`:""}`,m.hidden=!1;let K=m.offsetWidth,rt=m.offsetHeight,Tt=i.clientWidth,Ct=i.clientHeight;m.style.left=Math.max(8,Math.min(Tt-K-8,O+16))+"px",m.style.top=Math.max(8,Math.min(Ct-rt-8,z+18))+"px"},semDica(){m.hidden=!0},aviso(U,L=1600){g.textContent=U,g.hidden=!1,g.classList.add("on"),clearTimeout(b),b=setTimeout(()=>{g.classList.remove("on"),setTimeout(()=>{g.hidden=!0},250)},L)},ativos:Y}}var fi=["01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],Jr=["02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],As=["03-termica.html","03 \xB7 T\xE9rmica"],Uv=["04-eixos.html","04 \xB7 Eixos"],Yi={carcaca:["Carca\xE7a","Estrutura soldada em chapa: paredes com nervuras e tampas de inspe\xE7\xE3o, placas das pontas com olhais de i\xE7amento e almas internas que seguram o n\xFAcleo. Os quatro p\xE9s levam o peso e o torque de rea\xE7\xE3o para a funda\xE7\xE3o.",null,null],escudoLA:["Tampa LA","Disco reto aparafusado na placa da ponta, com nervuras radiais por fora e o cubo refor\xE7ado onde o flange do mancal \xE9 aparafusado.",...Jr],escudoLOA:["Tampa LOA","Igual \xE0 LA; al\xE9m do mancal, segura o estator da excitatriz pelos quatro bra\xE7os.",...Jr],base:["Chapas de assentamento","Chapas niveladas sob os p\xE9s, chumbadas na funda\xE7\xE3o de concreto.",null,null],defletor:["Defletor","Anel guia em volta das pontas das p\xE1s, com bocal de entrada, e a chapa que sobe at\xE9 a carca\xE7a: separa a c\xE2mara de entrada do ar frio, junto da tampa, da c\xE2mara das cabe\xE7as de bobina.",...As],trocador:["Carca\xE7a do trocador","Caixa de chapa sobre a carca\xE7a da m\xE1quina, com teto chanfrado, nervuras e tampas aparafusadas. Por dentro, as chicanas fecham a c\xE2mara de ar quente embaixo do feixe, e calhas sob os espelhos levam qualquer vazamento ao detector.",...As],feixe:["Feixe de tubos aletados","Um feixe s\xF3, de uma ponta \xE0 outra: tubos de cobre com aletas anulares de alum\xEDnio, em fileiras desencontradas, transversais ao eixo e mandrilados nos dois espelhos. A \xE1gua corre por dentro dos tubos; o ar passa por fora, entre as aletas.",...As],caixasAgua:["Caixas d\u2019\xE1gua","A de entrada e sa\xEDda tem a divis\xF3ria que separa as duas passagens; a de retorno, do outro lado, devolve a \xE1gua das fileiras de baixo para as de cima. As tampas saem para a limpeza dos tubos; respiro em cima e dreno embaixo.",...As],agua:["Tubula\xE7\xE3o de \xE1gua","Entra fria pelo bocal de baixo, na ponta LOA, e sai aquecida pelo bocal de cima, na ponta LA; em cada ramo, v\xE1lvula, term\xF4metro e suporte na carca\xE7a, e um man\xF4metro na entrada.",...As],estator:["N\xFAcleo do estator","Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre os pacotes, por onde o ar sai quente.",...fi],enrolamento:["Enrolamento da armadura","Bobinas de dupla camada nas ranhuras, ligadas em tr\xEAs fases. As cabe\xE7as ficam fora do n\xFAcleo, amarradas em an\xE9is.",...fi],saidas:["Sa\xEDdas das fases","Os tr\xEAs cabos das fases U, V e W deixam as cabe\xE7as de bobina da ponta LOA por baixo e entram na caixa de liga\xE7\xE3o, na lateral.",...fi],terminais:["Caixa de liga\xE7\xE3o","Recebe os tr\xEAs cabos das fases nos isoladores e os cabos de alta tens\xE3o que descem para a instala\xE7\xE3o, com a placa de perigo na tampa.",...fi],rotor:["Rotor de polos salientes","Coroa laminada com os polos e as sapatas. A sapata tem o arco exc\xEAntrico que deixa o entreferro maior nas pontas e a tens\xE3o mais senoidal.",...fi],campo:["Bobinas de campo","Cobre de chapa em volta do corpo de cada polo, em corrente cont\xEDnua; ligadas em s\xE9rie, com a polaridade alternando de polo para polo.",...fi],amortecedor:["Gaiola amortecedora","Barras de lat\xE3o na sapata ligadas por an\xE9is nas pontas: amortecem oscila\xE7\xF5es e ajudam nos transit\xF3rios.",...fi],eixo:["Eixo do rotor","Perfil escalonado: assentos do pacote, dos ventiladores e da excitatriz, colos dos mancais e ponta acoplada, com furo central para os cabos do campo.",...Uv],acoplamento:["Ponta de eixo e chaveta","Ponta LA com a chaveta no rasgo: \xE9 por ela que o acoplamento da m\xE1quina acionadora transmite o torque.",...Jr],ventLA:["Ventilador LA","Radial, no assento logo depois das cabe\xE7as de bobina, dentro do anel guia do defletor: puxa o ar frio da c\xE2mara de entrada e o empurra pelas cabe\xE7as, pelo entreferro e entre os polos.",...As],ventLOA:["Ventilador LOA","Igual ao LA, na ponta oposta; os dois juntos d\xE3o a vaz\xE3o do circuito de ar.",...As],mancalLA:["Mancal LA","Mancal de deslizamento de flange, preso no cubo da tampa: caixa bipartida de ferro fundido com domo e c\xE1rter aletados, casquilho de assento esf\xE9rico com metal patente, anel de \xF3leo solto, veda\xE7\xF5es de labirinto, visor de n\xEDvel e sensor de temperatura.",...Jr],mancalLOA:["Mancal LOA","Igual ao LA, isolado da tampa para cortar a corrente de eixo; fica entre o ventilador LOA e a excitatriz.",...Jr],excitatriz:["Excitatriz sem escovas","\xDAltima pe\xE7a do rotor na ponta LOA, \xE0 mostra: estator de campo fixo, preso na tampa por quatro bra\xE7os, e armadura girante, que gera a corrente alternada da excita\xE7\xE3o.",...fi],diodos:["Ponte de diodos girante","Recebe as tr\xEAs fases da armadura da excitatriz, retifica e entrega corrente cont\xEDnua ao campo pelos dois cabos, + e \u2212; o varistor protege os diodos.",...fi],cabos:["Cabos do campo","Dois cabos de corrente cont\xEDnua, + e \u2212, saem lado a lado da ponte de diodos, entram pelo furo central na ponta do eixo, correm por dentro dele e sobem por um furo radial no pacote at\xE9 as bobinas de campo.",...fi]};var on=i=>document.getElementById(i),an=on("m3-stage"),On=on("m3-canvas"),Nv=()=>{try{return!!(window.WebGL2RenderingContext&&document.createElement("canvas").getContext("webgl2"))}catch{return!1}},Jn={voltage:13800,frequency:60,poles:4,rpm:1800},ii=(i,t,e)=>new D(i,t,e);function Fv(){let i=new URLSearchParams(location.search).get("m3"),t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=i==="leve"?!0:i==="alta"?!1:matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency||8)<=4,n=()=>matchMedia("(max-width: 720px)").matches,s=new Ha({canvas:On,antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),s.outputColorSpace=ln,s.toneMapping=Pl,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=Rl,s.localClippingEnabled=!0,s.setClearColor(0,0);let r=new Dr;r.environment=Ov(s),r.environmentIntensity=1;let a=new Tn(30,1,.05,120),o=new ar(16774374,2.1);o.position.set(3.4,8.5,6),o.castShadow=!0,Object.assign(o.shadow.camera,{left:-5.6,right:5.6,top:5,bottom:-5,near:2,far:24}),o.shadow.mapSize.set(e?1024:4096,e?1024:4096),o.shadow.bias=-25e-5,o.shadow.normalBias=.014,r.add(o);let c=new ar(14411519,.55);c.position.set(-6,2.5,4),r.add(c);let l=new ar(16777215,.9);l.position.set(-2.5,4.5,-7),r.add(l);let u=new Te(new hi(80,80),new Ja({color:727074,opacity:.28}));u.rotation.x=-Math.PI/2,u.position.y=Ft.base,u.receiveShadow=!0,r.add(u);let d=(()=>{let P=document.createElement("canvas");P.width=P.height=256;let V=P.getContext("2d"),St=V.createRadialGradient(128,128,0,128,128,128);St.addColorStop(0,"rgba(0,0,0,.6)"),St.addColorStop(.5,"rgba(0,0,0,.28)"),St.addColorStop(1,"rgba(0,0,0,0)"),V.fillStyle=St,V.fillRect(0,0,256,256);let _t=new Te(new hi(8.6,4.4),new yn({map:new Hi(P),transparent:!0,depthWrite:!1,opacity:.75}));return _t.rotation.x=-Math.PI/2,_t.position.set(0,Ft.base+.003,0),_t.renderOrder=-1,r.add(_t),_t})(),h=nd(),f=id(h,{leve:e});r.add(f.raiz);let g=[new hn(ii(0,0,-1),1e3),new hn(ii(0,-1,0),-1e3)],x=[new hn(ii(0,0,-1),1e3),new hn(ii(0,-1,0),0),new hn(ii(-1,0,0),0),new hn(ii(1,0,0),0)],m={value:0},p=(P,V)=>{P.side=wn,P.clippingPlanes=V,P.clipIntersection=!0,P.clipShadows=!0},T=[h.faseU,h.faseV,h.faseW].map(P=>{let V=P.clone();return f.corte.push(V),V});for(let P of f.corte)p(P,g);for(let P of f.corteEixo)p(P,x);let b=P=>f.corte.includes(P)?1:f.corteEixo.includes(P)?2:0;{let P=new Set,V=St=>{P.has(St)||(P.add(St),od(St,{corte:b(St)>0,uCorte:m}))};f.raiz.traverse(St=>{St.isMesh&&[].concat(St.material).forEach(V)}),[...T,h.faseU,h.faseV,h.faseW,h.norte,h.sul].forEach(V)}let M=`#include <clipping_planes_pars_vertex>
    varying vec3 vN; varying vec3 vV;
    void main() { vec4 mvPosition = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = -mvPosition.xyz; gl_Position = projectionMatrix * mvPosition;
    #include <clipping_planes_vertex>
    }`,H=new Be({uniforms:{cor:{value:new ae(8230826)}},transparent:!0,depthWrite:!1,clipping:!0,clippingPlanes:g,clipIntersection:!0,vertexShader:`#include <common>
`+M,fragmentShader:`#include <common>
      #include <clipping_planes_pars_fragment>
      uniform vec3 cor; varying vec3 vN; varying vec3 vV;
      void main() {
      #include <clipping_planes_fragment>
        float f = 1. - abs(dot(normalize(vN), normalize(vV))); f = f * f * f;
        gl_FragColor = vec4(cor, .005 + .13 * f);
      }`}),_={},C=(P,V)=>{let St=P+V;if(_[St])return _[St];let _t=P==="sel",Nt=new Be({uniforms:{cor:{value:new ae(_t?16757575:10478591)},base:{value:_t?.1:.05},borda:{value:_t?.9:.55}},transparent:!0,depthWrite:!1,blending:Da,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:!1,clipping:V>0,vertexShader:`#include <common>
`+M,fragmentShader:`#include <common>
        #include <clipping_planes_pars_fragment>
        uniform vec3 cor; uniform float base; uniform float borda; varying vec3 vN; varying vec3 vV;
        void main() {
        #include <clipping_planes_fragment>
          float f = 1. - abs(dot(normalize(vN), normalize(vV))); f = f * f;
          gl_FragColor = vec4(cor * (base + borda * f), 1.);
        }`});return V&&(Nt.clippingPlanes=V===1?g:x,Nt.clipIntersection=!0),_[St]=Nt},R=P=>{for(;P&&!P.userData.parte;)P=P.parent;return P?P.userData.parte:null},S=P=>P==="excitatrizFixa"?"excitatriz":P,y=[];f.raiz.traverse(P=>{P.isMesh&&(P.userData.mat0=P.material,P.userData.cfg=b(P.material),P.userData.parteR=S(P.userData.parte||R(P)),P.userData.sombra0=P.castShadow,y.push(P))});for(let P of y)P.geometry.computeBoundingSphere(),P.userData.miudo=P.geometry.boundingSphere.radius*Math.max(P.scale.x,P.scale.y,P.scale.z)<.06;let I=new Map;for(let P of y){let V=P.userData.parteR;I.has(V)||I.set(V,[]),I.get(V).push(P)}let Y=P=>Mo.find(V=>V.partes.includes(P)),U=P=>(Y(S(P))||{cor:"#dfe7ea"}).cor,L=[...I.keys()].filter(Boolean),O={corte:"nenhum",lado:"auto",janela:!1,foco:null,raioX:!1,ar:!1,agua:!1,corrente:!1,fluxo:!1,cargas:!1,fases:!1,ns:!1,giro:.02,explodir:0,th:null},z={ocultos:new Set,ocultas:new Set,isolado:null,isoladoParte:null,rotulos:!0,girarLivre:!0},nt=1,K=0,rt=ud(r,f,{leve:e,planos:g});function Tt(){let[P,V]=g,St=O.corte==="nenhum";St?(P.normal.set(0,0,-1),P.constant=1e3,V.normal.set(0,-1,0),V.constant=-1e3):(P.normal.set(0,0,-nt),P.constant=0,O.corte==="meio"?(V.normal.set(0,-1,0),V.constant=-1e3):O.corte==="quarto"?(V.normal.set(0,-1,0),V.constant=0):O.corte==="mancal"&&(V.normal.set(-1,0,0),V.constant=qi(1)+f.partes.mancalLA.position.x));let[_t,Nt,ie,ue]=x;O.janela?(_t.normal.set(0,0,-nt),_t.constant=0,Nt.normal.set(0,-1,0),Nt.constant=0,ie.normal.set(-1,0,0),ie.constant=we(0)-.06,ue.normal.set(1,0,0),ue.constant=Ft.nucleo/2-.03):(_t.normal.set(0,0,-1),_t.constant=1e3),m.value=St&&!O.janela?0:1}function Ct(){return z.isoladoParte?[z.isoladoParte]:z.isolado?Mo.find(P=>P.id===z.isolado).partes:O.foco}function Mt(){let P=Ct();for(let V of y){let St=V.userData.parteR,_t=Y(St),Nt=!(_t&&z.ocultos.has(_t.id))&&!z.ocultas.has(St),ie=O.raioX?V.userData.raioX:null,ue=(!P||P.includes(St))&&ie!=="f",Ve=V.userData.matCap||V.userData.mat0;V.material=ue?Ve:H,V.castShadow=ue&&Nt&&V.userData.sombra0,V.visible=Nt&&ie!=="o"&&(ue||!V.userData.miudo)}It&&!$t(It.parte)&&X()}let $t=P=>(I.get(P)||[]).some(V=>V.visible&&V.material!==H);function st(P){f.anim.fases.forEach(V=>{V.userData.matCap=P?T[V.userData.fase]:null})}function ot(P){f.giro.traverse(V=>{V.isMesh&&V.userData.polo!==void 0&&V.userData.parteR==="rotor"&&(V.userData.matCap=P?V.userData.polo%2?h.sul:h.norte:null)})}function Bt(){Tt(),st(O.fases),ot(O.ns),Mt(),rt.ar.visible=O.ar,rt.agua.visible=O.agua,rt.corrente.visible=O.corrente,rt.fluxo.visible=O.fluxo,rt.cargas.visible=O.cargas,re(),ht&&ht.ativos()}let ft=new ho(a,On);ft.enableDamping=!t,ft.dampingFactor=.08,ft.minDistance=.5,ft.maxDistance=30,ft.maxPolarAngle=Math.PI*.58,ft.screenSpacePanning=!0;let Ut=[.5,.5],Jt=null,kt=()=>{let P=an.clientWidth,V=an.clientHeight;!P||!V||(a.aspect=P/V,a.setViewOffset(P,V,P/2-Ut[0]*P,V/2-Ut[1]*V,P,V),a.updateProjectionMatrix())},ce=rd(a,ft,{get:()=>Ut.slice(),set:(P,V)=>{Ut=[P,V],Jt=null,kt()}}),pt=dd(f),Pt=null;function N(P){let V=an.clientWidth,St=an.clientHeight,_t=ht.blocos(),Nt=fd(pt,P.partes==="tudo"||!P.partes?null:P.partes,O.explodir);if(P.extra)for(let ue of P.extra)Nt.push(ii(...ue));let ie=pd(V,St,_t);return Pt=P,md(Nt,P,a,V,St,ie.length?ie:[{x:0,y:0,w:V,h:St}])}let Ot=ad(ce,{reduce:t,resolver:N}),xt=P=>xo(P,0),wt="tudo",At=["eixo","acoplamento","rotor","campo","amortecedor","ventLA","ventLOA","excitatriz","diodos","cabos"],Xt={mecanica:[{id:"geral",t:"O gerador montado",txt:()=>`Carca\xE7a soldada sobre chapas de assentamento, com o trocador ar\u2013\xE1gua em cima, um mancal de deslizamento de flange em cada tampa e a excitatriz \xE0 mostra na ponta LOA. ${Jn.poles} polos a ${xt(Jn.rpm)} rpm.`,estado:{giro:.02},rotulos:[["trocador","Trocador ar\u2013\xE1gua"],["mancalLA","Mancal LA"],["caixa","Caixa de liga\xE7\xE3o"],["ponta","Ponta de eixo"],["placa","Placa de identifica\xE7\xE3o"],["pe","P\xE9"]],tomadas:[{dur:3.2,vista:{partes:wt,az:30,el:18,folga:1.05}},{dur:10,vista:{partes:wt,az:50,el:13,folga:1.05}}]},{id:"carcaca",t:"Carca\xE7a e tampas",txt:()=>"Estrutura soldada em chapa. As almas internas seguram o n\xFAcleo nas duas pontas do pacote; as paredes t\xEAm nervuras e tampas de inspe\xE7\xE3o, e as placas das pontas, olhais de i\xE7amento. As tampas, retas e nervuradas, levam os mancais de flange; os quatro p\xE9s descarregam o peso e o torque de rea\xE7\xE3o na funda\xE7\xE3o.",estado:{corte:"quarto",foco:["carcaca","escudoLA","escudoLOA","base","defletor","mancalLA","mancalLOA","terminais","trocador","feixe","caixasAgua","agua"]},rotulos:[["alma","Alma que segura o n\xFAcleo"],["defletor","Defletor"],["tampa","Tampa de inspe\xE7\xE3o"],["pe","P\xE9 sobre a chapa de assentamento"],["escudoLA","Tampa LA"],["olhal","Olhal de i\xE7amento"]],tomadas:[{dur:3.4,vista:{partes:wt,az:34,el:24,folga:1.05}},{dur:8,vista:{partes:wt,az:54,el:18,folga:1.05}}]},{id:"eixo",t:"Eixo e ponta de eixo",txt:()=>"O eixo leva o pacote do rotor nos assentos centrais, os ventiladores nos assentos logo depois das cabe\xE7as de bobina e a excitatriz na ponta, e passa pelos colos dos mancais. Na ponta LA, a chaveta no rasgo transmite o torque da m\xE1quina acionadora.",estado:{corte:"quarto",giro:.03,foco:[...At,"mancalLA","mancalLOA"]},rotulos:[["ponta","Ponta de eixo e chaveta"],["coloLA","Colo do mancal LA"],["ventLA","Ventilador no assento"],["assento","Eixo sob as cabe\xE7as de bobina"],["armadura","Excitatriz na ponta LOA"]],tomadas:[{dur:3.4,vista:{partes:["eixo","acoplamento"],az:60,el:15,folga:1.04}},{dur:7,vista:{partes:["eixo","acoplamento"],az:76,el:11,folga:1.04}}]},{id:"mancais",t:"Mancais de deslizamento",txt:()=>"Em cada tampa, um mancal de flange com a caixa aletada, resfriada pelo ar ambiente. O colo gira dentro do casquilho de metal patente sobre uma cunha de \xF3leo; o anel solto, pendurado no colo, mergulha no c\xE1rter e leva o \xF3leo para cima. O visor mostra o n\xEDvel e o sensor mede a temperatura do metal. O mancal LOA \xE9 isolado contra corrente de eixo.",estado:{corte:"mancal",lado:1,giro:.05,foco:["mancalLA","eixo","acoplamento","escudoLA"]},rotulos:[["mancalLA.casquilho","Casquilho de metal patente"],["mancalLA.anel","Anel de \xF3leo"],["mancalLA.oleo","\xD3leo no c\xE1rter"],["mancalLA.visor","Visor de n\xEDvel"],["mancalLA.labirinto","Veda\xE7\xE3o de labirinto"],["mancalLA.flange","Flange na tampa"]],tomadas:[{dur:3.6,vista:{partes:["mancalLA"],az:50,el:18,folga:1.5}},{dur:7,vista:{partes:["mancalLA"],az:34,el:24,folga:1.5}}]},{id:"ar",t:"Ventila\xE7\xE3o IC81W",txt:()=>"O ar n\xE3o sai da m\xE1quina: volta frio do trocador pelas pontas, desce na c\xE2mara entre a tampa e o defletor, passa pelo bocal e \xE9 soprado pelo ventilador nas cabe\xE7as de bobina, no entreferro e entre os polos; sai quente pelos dutos do n\xFAcleo, contorna o n\xFAcleo por cima, pelos lados e por baixo e sobe ao trocador.",estado:{corte:"quarto",ar:!0,giro:.12},rotulos:[["trocador","Trocador: o ar esfria"],["dutos","Dutos: sai o ar quente"],["ventLA","Ventilador"],["defletor","Defletor"]],tomadas:[{dur:3.4,vista:{partes:wt,az:68,el:16,folga:1.03}},{dur:8,vista:{partes:wt,az:84,el:10,folga:1.03}}]},{id:"troc",t:"Trocador ar\u2013\xE1gua",txt:()=>"Uma unidade s\xF3 sobre a carca\xE7a: um feixe cont\xEDnuo de tubos de cobre com aletas de alum\xEDnio, de uma ponta \xE0 outra, preso entre dois espelhos. O ar quente sobe pela abertura do meio, atravessa o feixe entre as aletas, entrega o calor \xE0 \xE1gua que corre nos tubos e sai frio por cima, rumo \xE0s pontas. As chicanas fecham as laterais embaixo do feixe: todo o ar passa por ele.",estado:{corte:"quarto",lado:1,ar:!0,foco:["trocador","feixe","caixasAgua","agua","carcaca","escudoLA","escudoLOA","base","defletor"]},tomadas:[{dur:3.8,vista:{partes:["trocador","feixe","caixasAgua"],az:66,el:26,folga:1.06},rotulos:[["feixe","Feixe de tubos aletados"],["arQuente","Ar quente sobe ao feixe"],["arFrio","Ar frio vai \xE0s pontas"],["chicana","Chicana"],["trocador","Carca\xE7a do trocador"]]},{dur:7.5,estado:{agua:!0},vista:{partes:["feixe"],az:80,el:12,folga:.98},rotulos:[["passe2","2\xAA passagem: \xE1gua aquecida"],["passe1","1\xAA passagem: \xE1gua fria"],["aletasTroc","Aletas de alum\xEDnio"],["tubos","Tubo de cobre"],["calha","Calha coletora"]]}]},{id:"aguaTroc",t:"Circuito da \xE1gua",txt:()=>"A \xE1gua entra fria pelo bocal de baixo, na ponta LOA da caixa de entrada e sa\xEDda. A divis\xF3ria a manda para as fileiras de baixo, a primeira passagem; na caixa de retorno, do outro lado, ela sobe e volta pelas fileiras de cima, a segunda passagem, j\xE1 aquecida, at\xE9 o bocal de cima, na ponta LA. Respiro no alto, dreno embaixo e um detector para qualquer vazamento.",estado:{agua:!0,foco:["trocador","feixe","caixasAgua","agua","carcaca","escudoLA","escudoLOA","base"]},tomadas:[{dur:4.2,vista:{partes:["caixasAgua","agua"],az:-64,el:12,folga:1.05},rotulos:[["saidaAgua","Sa\xEDda: \xE1gua aquecida"],["entradaAgua","Entrada: \xE1gua fria"],["valvula","V\xE1lvula"],["termometro","Term\xF4metro"],["caixaEntrada","Caixa de entrada e sa\xEDda"],["detector","Detector de vazamento"]]},{dur:6.5,estado:{raioX:!0},vista:{partes:["feixe","caixasAgua"],az:-24,el:11,folga:1},rotulos:[["passe2x","2\xAA passagem: volta aquecida"],["passe1x","1\xAA passagem: vai fria"],["caixaRetorno","Caixa de retorno"],["divisoria","Divis\xF3ria"],["espelho","Espelho"]]},{dur:7,estado:{raioX:!0},vista:{partes:["feixe","caixasAgua"],az:-52,el:32,folga:1.02},rotulos:[["bocalEntrada","Entra fria"],["bocalSaida","Sai aquecida"],["divisoria","Divis\xF3ria"],["caixaRetorno","Caixa de retorno"],["respiro","Respiro"]]}]},{id:"cargas",t:"Cargas no eixo e nos mancais",txt:()=>"O peso do rotor e a atra\xE7\xE3o magn\xE9tica desequilibrada fletem o eixo entre os mancais, e as tampas reagem nos dois mancais. O torque nominal entra pela ponta de eixo e pela chaveta.",estado:{cargas:!0,giro:.04,foco:[...At,"mancalLA","mancalLOA"]},tomadas:[{dur:3.4,vista:{partes:["eixo","acoplamento","mancalLA","mancalLOA"],az:90,el:8,folga:1.08,extra:[[0,1.45,0],[0,-1.05,0],[3.5,.55,0]]}},{dur:6,vista:{partes:["eixo","acoplamento","mancalLA","mancalLOA"],az:66,el:12,folga:1.08,extra:[[0,1.45,0],[0,-1.05,0],[3.5,.55,0]]}}]},{id:"montagem",t:"Vista explodida",txt:()=>"Trocador erguido, tampas e mancais afastados ao longo do eixo e o estator da excitatriz recuado: \xE9 a ordem de desmontagem para inspe\xE7\xE3o. Com uma tampa e o mancal fora, o rotor sai axialmente pelo furo do estator.",estado:{explodir:1,giro:.02},rotulos:[["trocador","Trocador erguido"],["escudoLA","Tampa LA"],["mancalLA","Mancal LA"],["excFora","Estator da excitatriz"],["caixa","Caixa de liga\xE7\xE3o"]],tomadas:[{dur:3.8,vista:{partes:wt,az:30,el:20,folga:1.04}},{dur:9,vista:{partes:wt,az:50,el:15,folga:1.04}}]}],eletrica:[{id:"maq",t:"Gerador s\xEDncrono",txt:()=>`Gerador de ${xt(Jn.voltage)} V e ${xt(Jn.frequency)} Hz, com ${Jn.poles} polos: ${xt(Jn.rpm)} rpm. Rotor de polos salientes, excita\xE7\xE3o sem escovas e refrigera\xE7\xE3o em circuito fechado com trocador ar\u2013\xE1gua (IC81W).`,estado:{corte:"quarto",giro:.05},rotulos:[["nucleo","Estator"],["rotorPonta","Rotor de polos salientes"],["excFora","Excitatriz sem escovas"],["caixa","Caixa de liga\xE7\xE3o"],["trocador","Trocador ar\u2013\xE1gua"]],tomadas:[{dur:3.2,vista:{partes:wt,az:34,el:20,folga:1.05}},{dur:10,vista:{partes:wt,az:54,el:15,folga:1.05}}]},{id:"nucleo",t:"N\xFAcleo do estator",txt:()=>"Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre eles. As chapas finas e isoladas cortam as correntes parasitas; o n\xFAcleo \xE9 preso na carca\xE7a pelas barras de dorso e pelas almas.",estado:{corte:"quarto",foco:["estator","enrolamento","carcaca"]},rotulos:[["nucleo","Pacotes de chapas"],["dutos","Dutos radiais"],["ranhuras","Ranhuras"],["placaPressao","Placa de press\xE3o"],["dorso","Barras de dorso"]],tomadas:[{dur:3.4,vista:{partes:["estator"],az:46,el:24,folga:1.3}},{dur:6,vista:{partes:["estator"],az:60,el:30,folga:1.32}}]},{id:"enr",t:"Enrolamento trif\xE1sico",txt:()=>`Bobinas de dupla camada, com passo encurtado, formam as fases U, V e W. A tens\xE3o de ${xt(Jn.voltage)} V nasce nos lados de bobina dentro das ranhuras; as cabe\xE7as s\xF3 ligam um lado ao outro. As sa\xEDdas v\xE3o \xE0 caixa de liga\xE7\xE3o.`,estado:{corte:"quarto",fases:!0,foco:["enrolamento","terminais","estator"]},rotulos:[["cabecas","Cabe\xE7as de bobina"],["ladoBobina","Lados de bobina nas ranhuras"],["amarracao","An\xE9is de amarra\xE7\xE3o"],["saidas","Sa\xEDdas das fases"],["caixa","Caixa de liga\xE7\xE3o"]],tomadas:[{dur:3.4,vista:{partes:["enrolamento"],az:40,el:20,folga:1.1}},{dur:6,vista:{partes:["enrolamento","terminais"],az:64,el:24,folga:1.08}}]},{id:"rotor",t:"Rotor de polos salientes",txt:()=>`${Jn.poles} polos com bobinas de campo em corrente cont\xEDnua, alternando norte e sul. As barras de lat\xE3o na sapata e os an\xE9is das pontas formam a gaiola amortecedora.`,estado:{corte:"quarto",ns:!0,giro:0,th:.87,foco:["rotor","campo","amortecedor","eixo"]},rotulos:[["polo","Polo"],["campo","Bobina de campo"],["sapata","Sapata polar"],["amortecedor","Gaiola amortecedora"]],tomadas:[{dur:3.4,vista:{partes:["rotor","campo"],az:62,el:22,folga:1.32}},{dur:6,vista:{partes:["rotor","campo"],az:44,el:28,folga:1.32}}]},{id:"exc",t:"Excitatriz e ponte de diodos",txt:()=>"Na ponta LOA, depois do mancal, a excitatriz gera corrente alternada trif\xE1sica na armadura que gira com o eixo; as tr\xEAs fases v\xE3o \xE0 ponte de diodos girante, que retifica, e os dois cabos (+ e \u2212) levam a corrente cont\xEDnua por dentro do furo central do eixo at\xE9 as bobinas de campo, sem escovas nem an\xE9is.",estado:{corte:"quarto",janela:!0,corrente:!0,giro:.04,foco:["excitatriz","diodos","cabos","eixo","mancalLOA","escudoLOA"]},rotulos:[["estatorExc","Estator da excitatriz"],["armadura","Armadura girante"],["diodos","Ponte de diodos"],["cabos","Cabos + e \u2212 no furo do eixo"]],tomadas:[{dur:3.4,vista:{partes:["excitatriz","diodos","mancalLOA"],az:126,el:22,folga:1.15}},{dur:7,vista:{partes:["excitatriz","diodos","mancalLOA","cabos"],az:106,el:20,folga:1.06}}]},{id:"girante",t:"Campo girante e tens\xE3o",txt:()=>`Com o rotor a ${xt(Jn.rpm)} rpm, o campo dos polos passa pelas ranhuras e induz a tens\xE3o nas fases: f = P\xB7n/120 = ${Jn.poles} \xD7 ${xt(Jn.rpm)} / 120 = ${xt(Jn.frequency)} Hz. As setas mostram o fluxo no entreferro, para fora no norte e para dentro no sul.`,estado:{corte:"quarto",ns:!0,fases:!0,fluxo:!0,giro:.22,foco:["rotor","campo","estator","eixo","enrolamento"]},tomadas:[{dur:3.4,vista:{partes:["estator"],az:118,el:16,folga:1.1}},{dur:8,vista:{partes:["estator"],az:26,el:14,folga:1.1}}]}]},dt={corte:"nenhum",lado:"auto",janela:!1,foco:null,raioX:!1,ar:!1,agua:!1,corrente:!1,fluxo:!1,cargas:!1,fases:!1,ns:!1,giro:.02,explodir:0,th:null},E=document.createElement("canvas");E.className="m3-ov",E.setAttribute("aria-hidden","true"),On.after(E);let v=_d(E,{reduce:t}),F=[],$=new dn,it=ii(1,0,0),Q=ii(0,0,0),yt=ii(0,0,0);function Et(P){let V=f.ancoras[P];if(!V)return null;let St=V.p.clone();V.gira&&St.applyQuaternion($.setFromAxisAngle(it,f.giro.rotation.x));let _t=V.g&&f.partes[V.g];return _t&&ws[V.g]&&St.add(_t.position),{p:St,gira:V.gira,parte:S(V.g)}}function zt(){let P=[];if(z.rotulos&&!It)for(let[V,St,_t]of F){let Nt=Et(V);if(!Nt)continue;let ie=V.includes(".")?V.split(".")[0]:Nt.parte;if(ie&&!$t(ie))continue;let ue=((I.get(ie)||[])[0]||{userData:{}}).userData.cfg;if(ue&&!Nt.gira&&lt(Nt.p,ue))continue;let Ve=1;Nt.gira&&(yt.set(0,Nt.p.y,Nt.p.z).normalize(),Q.subVectors(a.position,Nt.p).normalize(),Ve=Pn(yt.dot(Q)*4+.3,0,1)),P.push({chave:V,pos:Nt.p,texto:St,sub:_t,cor:U(ie||"carcaca"),visivel:Ve})}if(O.cargas)for(let V of rt.rotulosCargas)P.push({chave:"c"+V.texto,pos:V.p,texto:V.texto,cor:V.cor});if(It){let V=It.mesh.localToWorld(It.local.clone()),St=Y(It.parte);P.push({chave:"sel",pos:V,texto:Yi[It.parte][0],sub:St?St.nome:"",cor:U(It.parte),forte:!0})}return P}function re(){if(!ht)return;let P=[];O.ar&&P.push(["Ar",Kl,"frio","quente"]),O.agua&&P.push(["\xC1gua",Kl,"fria","quente"]),O.corrente&&P.push(["Campo +","#ff5a40"],["Campo \u2212","#ffd966"]),O.fluxo&&P.push(["Fluxo norte","#f24d33"],["Fluxo sul","#2e73f2"]),O.fases&&P.push(["Fase U","#c0392b"],["Fase V","#d4a21a"],["Fase W","#2c6fbf"]),O.ns&&!O.fluxo&&P.push(["Polo norte","#d2452f"],["Polo sul","#2f6fd0"]),O.cargas&&P.push(["Peso","#ffb347"],["Atra\xE7\xE3o magn\xE9tica","#c59bff"],["Rea\xE7\xF5es","#6fd8cf"],["Torque","#ffd166"]),ht.legenda(P)}function ct(){let P=an.clientHeight,V=a.position.distanceTo(ft.target),St=P/(2*Math.tan(a.fov*Math.PI/360))/V,_t=[.1,.2,.25,.5,1,2,5].find(Nt=>Nt*St>=70)||5;ht.escala(_t*St,_t<1?`${xo(_t*1e3,0)} mm`:`${xo(_t,0)} m`)}let It=null,Dt=null,jt=new Map;function Rt(P,V,St){let _t=V+"|"+P;if(St&&!jt.has(_t)){let ie=[];for(let ue of I.get(P)||[]){let Ve=new Te(ue.geometry,C(V,ue.userData.cfg));Ve.userData.sobre=!0,Ve.renderOrder=6,Ve.raycast=()=>{},ue.add(Ve),ie.push(Ve)}jt.set(_t,ie)}let Nt=jt.get(_t);if(Nt)for(let ie of Nt)ie.visible=St&&ie.parent.material!==H}function Qt(P,V,St){if(!Yi[P])return;It&&Rt(It.parte,"sel",!1);let _t=St||(I.get(P)||[]).find(ie=>ie.visible)||I.get(P)[0],Nt=V||new Rn().setFromObject(_t).getCenter(ii(0,0,0));It={parte:P,mesh:_t,local:_t.worldToLocal(Nt.clone())},Rt(P,"sel",!0),Dt===P&&Rt(P,"hover",!1),ht.abrirInspetor(P)}function X(){It&&(Rt(It.parte,"sel",!1),It=null,ht.painel==="insp"&&ht.fechar())}let Z=new An(1,1),A=new Uint8Array(4),W=new Map,B=P=>{let V=L.indexOf(P.userData.parteR)+1,St=P.userData.cfg,_t=St+"|"+V;if(!W.has(_t)){let Nt=new yn({color:new ae().setRGB((V&255)/255,(V>>8&255)/255,0,Wi),toneMapped:!1});St&&(Nt.side=wn,Nt.clippingPlanes=St===1?g:x,Nt.clipIntersection=!0),W.set(_t,Nt)}return W.get(_t)};function k(P,V){let St=an.clientWidth,_t=an.clientHeight,Nt=[],ie=[];for(let be of y)if(be.visible){if(be.material===H){be.visible=!1,ie.push(be);continue}Nt.push([be,be.material]),be.material=B(be)}r.traverse(be=>{be.visible&&(be.userData.sobre||be.isPoints||be.isInstancedMesh||be===u||be===d||be===rt.cargas)&&(be.visible=!1,ie.push(be))});let ue=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1;let Ve=St/2-Ut[0]*St,Ee=_t/2-Ut[1]*_t;a.setViewOffset(St,_t,Ve+P,Ee+V,1,1),a.updateProjectionMatrix(),s.setRenderTarget(Z),s.setClearColor(0,0),s.clear(),s.render(r,a),s.readRenderTargetPixels(Z,0,0,1,1,A),s.setRenderTarget(null),kt(),s.shadowMap.autoUpdate=ue;for(let[be,Ke]of Nt)be.material=Ke;for(let be of ie)be.visible=!0;let Ce=A[0]+A[1]*256;return Ce?L[Ce-1]:null}let tt=new eo,G=new vt,lt=(P,V)=>{let St=V===1?g:V===2?x:null;return St?St.every(_t=>_t.distanceToPoint(P)<0):!1};function at(P,V,St){let _t=an.clientWidth,Nt=an.clientHeight;G.set(V/_t*2-1,-(St/Nt)*2+1),tt.setFromCamera(G,a);let ie=(I.get(P)||[]).filter(ue=>ue.visible&&ue.material!==H);for(let ue of tt.intersectObjects(ie,!1))if(!(ue.object.userData.cfg&&lt(ue.point,ue.object.userData.cfg)))return ue;return null}let gt={estado:()=>({...O}),sistemaVisivel:P=>!z.ocultos.has(P),isolado:()=>z.isolado,rotulos:()=>z.rotulos,alternarSistema(P){Ie(),z.ocultos.has(P)?z.ocultos.delete(P):z.ocultos.add(P),z.isoladoParte=null,Mt(),ht.ativos()},isolarSistema(P){Ie(),z.isolado=P,z.isoladoParte=null,P&&z.ocultos.delete(P),Mt(),ht.ativos()},mostrarTudo(){z.ocultos.clear(),z.ocultas.clear(),z.isolado=null,z.isoladoParte=null,Mt(),ht.ativos()},selecionarParte(P,{voar:V}={}){Ie(),z.ocultas.delete(P);let St=Y(P);St&&z.ocultos.delete(St.id),Mt(),Qt(P),V&&gt.aproximar(P)},setCorte(P){Ie(),O.corte=P,O.lado="auto",Tt(),ht.sincronizar()},setJanela(P){Ie(),O.janela=P,Tt(),ht.sincronizar()},setFlag(P,V){Ie(),O[P]=V,Bt(),ht.sincronizar()},setRotulos(P){z.rotulos=P},explodir(P){Ie(),O.explodir=P?1:0,xe.exp?.setAttribute("aria-pressed",String(P)),ht.sincronizar()},irVista(P){Ie(),bt(ut[P])},aproximar(P){Ie(),bt({partes:[P],az:ce.estado().az,el:Pn(ce.estado().el,8,40),folga:P==="carcaca"||P==="trocador"?1.06:1.45})},isolarParte(P){Ie(),z.isoladoParte=z.isoladoParte===P?null:P,Mt()},ocultarParte(P){Ie(),z.ocultas.add(P),X(),Mt(),ht.ativos()}},ut={geral:{partes:wt,az:36,el:18,folga:1.05},frente:{partes:wt,az:90,el:6,folga:1.04},la:{partes:wt,az:4,el:10,folga:1.1},loa:{partes:wt,az:176,el:10,folga:1.1},cima:{partes:wt,az:90,el:72,folga:1.04},tras:{partes:wt,az:-64,el:18,folga:1.05},mancal:{partes:["mancalLA"],az:44,el:20,folga:1.5},excitatriz:{partes:["excitatriz","diodos"],az:132,el:20,folga:1.35}};function bt(P){Ot.tocar([{dur:t?.01:1.3,vista:P}])}let ht=Md(an,{SISTEMAS:Mo,PARTES:Yi,api:gt,movel:n,aoFechar:()=>{It&&(Rt(It.parte,"sel",!1),It=null)},aoMudarLayout:()=>requestAnimationFrame(qt)});function qt(){if(Ot.ativo||!Pt)return;Jt=N(Pt).c}let Yt={trilha:"mecanica",cap:0,tocando:!1},Ae=on("m3-card"),pe=on("m3-caps"),xe={play:on("m3-play"),giro:on("m3-giro"),exp:on("m3-explodir"),centro:on("m3-centro"),full:on("m3-full"),prev:on("m3-prev"),next:on("m3-next")};function Dn(){let P=Xt[Yt.trilha];pe.innerHTML=P.map((V,St)=>`<button type="button" role="tab" data-i="${St}" aria-selected="${St===Yt.cap}"><span>${String(St+1).padStart(2,"0")}</span>${V.t}</button>`).join(""),document.querySelectorAll("[data-trilha]").forEach(V=>V.setAttribute("aria-pressed",String(V.dataset.trilha===Yt.trilha)))}function Fe(P,{tocar:V=!0}={}){let St=Xt[Yt.trilha];Yt.cap=Pn(P,0,St.length-1);let _t=St[Yt.cap];on("m3-count").textContent=`${String(Yt.cap+1).padStart(2,"0")} / ${String(St.length).padStart(2,"0")}`,on("m3-step-title").textContent=_t.t,on("m3-step-text").textContent=_t.txt(),on("m3-trilha-rot").textContent=Yt.trilha==="eletrica"?"El\xE9trica":"Mec\xE2nica",Object.assign(O,dt,_t.estado),z.ocultos.clear(),z.ocultas.clear(),z.isolado=null,z.isoladoParte=null,It&&X(),ht.painel&&ht.painel!=="insp"?ht.sincronizar():ht.fechar(),Bt(),Dn(),F=_t.rotulos||[],xe.exp?.setAttribute("aria-pressed",String(O.explodir>.5));let Nt=_t.tomadas.map(ie=>({...ie,ini:()=>{F=ie.rotulos||_t.rotulos||[],ie.estado&&(Object.assign(O,ie.estado),Bt())}}));return V&&Ot.tocar(Nt,()=>{Yt.tocando&&(Yt.cap<St.length-1?setTimeout(()=>Yt.tocando&&Fe(Yt.cap+1),t?2500:1100):Ie())}),Nt}function Ie(){Ot.ativo&&Yt.tocando&&Ot.parar(),Yt.tocando=!1,xe.play.setAttribute("aria-pressed","false"),xe.play.querySelector("span").textContent="Tour guiado"}function Je(){Yt.tocando=!0,xe.play.setAttribute("aria-pressed","true"),xe.play.querySelector("span").textContent="Pausar tour",Fe(Yt.cap)}xe.play.addEventListener("click",()=>{Yt.tocando?(Ie(),Ot.parar()):Je()}),xe.prev.addEventListener("click",()=>Fe(Yt.cap-1)),xe.next.addEventListener("click",()=>Fe(Yt.cap+1)),pe.addEventListener("click",P=>{let V=P.target.closest("[data-i]");V&&Fe(+V.dataset.i)}),document.querySelectorAll("[data-trilha]").forEach(P=>P.addEventListener("click",()=>{Yt.trilha!==P.dataset.trilha&&(Yt.trilha=P.dataset.trilha,Yt.cap=0,Fe(0))})),xe.giro?.addEventListener("click",()=>{z.girarLivre=!z.girarLivre,xe.giro.setAttribute("aria-pressed",String(z.girarLivre))}),xe.exp?.addEventListener("click",()=>{gt.explodir(O.explodir<.5),xe.exp.setAttribute("aria-pressed",String(O.explodir>.5)),ht.sincronizar(),Ot.ativo||bt({...Pt||ut.geral})}),xe.centro?.addEventListener("click",()=>{if(Ie(),It)gt.aproximar(It.parte);else{let P=Xt[Yt.trilha][Yt.cap];bt(P.tomadas[P.tomadas.length-1].vista)}});let ke=on("tour-3d"),Gn=()=>document.fullscreenElement||document.webkitFullscreenElement,Zi=()=>!!Gn()||ke.classList.contains("m3-cheia"),Wt=P=>{xe.full?.setAttribute("aria-pressed",String(P)),xe.full?.setAttribute("aria-label",P?"Sair da tela cheia":"Tela cheia")};function le(P){ke.classList.toggle("m3-cheia",P),document.documentElement.classList.toggle("m3-travado",P),Wt(P),requestAnimationFrame(te)}function w(){if(ke.classList.contains("m3-cheia"))return le(!1);if(Gn()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}let P=ke.requestFullscreen||ke.webkitRequestFullscreen,V=matchMedia("(pointer: coarse)").matches;if(P&&!V)try{let St=P.call(ke);St&&St.catch&&St.catch(()=>le(!0))}catch{le(!0)}else le(!0)}xe.full?.addEventListener("click",w);for(let P of["fullscreenchange","webkitfullscreenchange"])document.addEventListener(P,()=>{Wt(!!Gn()),requestAnimationFrame(te)});document.addEventListener("keydown",P=>{P.key==="Escape"&&ke.classList.contains("m3-cheia")&&le(!1)}),ke.addEventListener("keydown",P=>{if(P.target.closest("input, textarea")||P.altKey||P.ctrlKey||P.metaKey)return;let V=P.key.toLowerCase(),St=Xt[Yt.trilha].length;if(/^[1-9]$/.test(V)&&+V<=St)Fe(+V-1),P.preventDefault();else if(V==="arrowright")Fe(Yt.cap+1),P.preventDefault();else if(V==="arrowleft")Fe(Yt.cap-1),P.preventDefault();else if(V===" "&&!P.target.closest("button"))xe.play.click(),P.preventDefault();else if(V==="x"){let _t=["nenhum","meio","quarto"],Nt=_t.indexOf(O.corte);gt.setCorte(_t[(Nt+1)%3]),ht.sincronizar()}else V==="e"?xe.exp?.click():V==="l"?(z.rotulos=!z.rotulos,ht.sincronizar()):V==="f"?w():V==="escape"&&(ht.painel?ht.fechar():X())}),ft.addEventListener("start",()=>{Ot.ativo&&(Ot.parar(),Ie()),Jt=null});let q=!1;On.addEventListener("wheel",P=>{let V=q||P.ctrlKey||P.metaKey||Zi();ft.enableZoom=V,V||ht.aviso("Use Ctrl + rolagem para aproximar, ou clique na cena antes")},{capture:!0,passive:!0}),an.addEventListener("pointerleave",()=>{q=!1});let j=null,et=null,J=0;On.addEventListener("pointerdown",P=>{j=[P.clientX,P.clientY,performance.now()],q=!0,ft.enableZoom=!0,ht.semDica()}),On.addEventListener("pointerup",P=>{if(!j||Math.hypot(P.clientX-j[0],P.clientY-j[1])>5||performance.now()-j[2]>600){j=null;return}j=null;let V=On.getBoundingClientRect(),St=P.clientX-V.left,_t=P.clientY-V.top,Nt=k(St,_t);if(Nt&&Yi[Nt]){Ot.ativo&&(Ot.parar(),Ie());let ie=at(Nt,St,_t);Qt(Nt,ie?ie.point:null,ie?ie.object:null)}else X()}),On.addEventListener("dblclick",P=>{let V=On.getBoundingClientRect(),St=k(P.clientX-V.left,P.clientY-V.top);St&&Yi[St]&&gt.aproximar(St)}),On.addEventListener("pointermove",P=>{if(P.pointerType!=="mouse"||P.buttons){Dt&&(Rt(Dt,"hover",!1),Dt=null,ht.semDica());return}let V=On.getBoundingClientRect();et=[P.clientX-V.left,P.clientY-V.top]}),On.addEventListener("pointerleave",()=>{et=null,Dt&&(Rt(Dt,"hover",!1),Dt=null),ht.semDica()});function Lt(P){if(!et||P-J<90)return;J=P;let[V,St]=et;et=null;let _t=k(V,St),Nt=_t&&Yi[_t]?_t:null;if(Nt!==Dt&&(Dt&&Dt!==It?.parte&&Rt(Dt,"hover",!1),Dt=Nt,Nt&&Nt!==It?.parte&&Rt(Nt,"hover",!0),On.style.cursor=Nt?"pointer":""),Nt){let ie=Y(Nt);ht.dica(Yi[Nt][0],ie?ie.nome:"",V,St,U(Nt))}else ht.semDica()}let Ht=new to,Kt=0,ee=!0,he=0;new IntersectionObserver(P=>{ee=P[0].isIntersecting}).observe(an);let ne=null;if(!e)try{ne=zv(s,r,a)}catch(P){console.warn(P),ne=null}function te(){let P=an.clientWidth,V=an.clientHeight;if(!(!P||!V)){if(s.setSize(P,V,!1),kt(),v.medir(P,V),ne){let St=s.getPixelRatio(),_t=Math.round(P*St),Nt=Math.round(V*St),ie=St>1.2?.5:1;ne.rt.setSize(_t,Nt),ne.ao.setSize(Math.round(_t*ie),Math.round(Nt*ie)),ne.quad.material.uniforms.uTexel.value.set(1/_t,1/Nt)}!Ot.ativo&&Pt&&requestAnimationFrame(qt)}}function ve(){if(!ne){s.render(r,a);return}ne.quad.material.uniforms.uNear.value=a.near,ne.quad.material.uniforms.uFar.value=a.far,s.setRenderTarget(ne.rt),s.clear(),s.render(r,a),ne.ao.render(s,null,ne.rt),s.setRenderTarget(null),ne.quad.render(s)}new ResizeObserver(te).observe(an),te();let Re=new dn;function _e(P){requestAnimationFrame(_e);let V=Math.min(.05,Ht.getDelta());if(!ee||document.hidden)return;he++;let St=Ot.atualizar(V);if(St&&(on("m3-prog").style.width=(St.k*100).toFixed(1)+"%"),Jt&&!Ot.ativo){let Ce=Math.min(1,V*6);Ut=[Ut[0]+(Jt[0]-Ut[0])*Ce,Ut[1]+(Jt[1]-Ut[1])*Ce],kt(),Math.abs(Ut[0]-Jt[0])+Math.abs(Ut[1]-Jt[1])<1e-4&&(Jt=null)}let _t=a.position.z-ft.target.z,Nt=a.position.distanceTo(ft.target),ie=nt;O.lado===1||O.lado===-1?nt=O.lado:_t>.12*Nt?nt=1:_t<-.12*Nt&&(nt=-1);let ue=O.explodir,Ve=K;if(K+=(ue-K)*Math.min(1,V*(t?30:3.2)),Math.abs(ue-K)<1e-4&&(K=ue),K!==Ve){let Ce=K*K*(3-2*K);for(let[be,Ke]of Object.entries(ws))f.partes[be]?.position.set(Ke[0]*Ce,Ke[1]*Ce,Ke[2]*Ce)}(nt!==ie||K!==Ve)&&Tt();let Ee=(z.girarLivre||Ot.ativo?O.giro:0)*2*Math.PI*(t?.3:1);if(Kt+=Ee*V,!O.giro&&O.th!=null){let Ce=Math.PI/2,be=O.th+Math.round((Kt-O.th)/Ce)*Ce;Kt+=(be-Kt)*Math.min(1,V*2.5)}f.giro.rotation.x=Kt;for(let Ce of f.anim.aneis||[])Ce.rotation.x+=Ee*V*.35;rt.atualizar(V,Kt),Lt(P||performance.now()),ft.update(),ve();{let Ce=ht.blocos();v.desenhar(zt(),a,Ce.lista,[Ut[0]*an.clientWidth,Ut[1]*an.clientHeight],{limite:n()?4:9,direita:Ce.direita})}he%12===1&&ct()}Fe(0,{tocar:!1}),Ot.tocar(Xt.mecanica[0].tomadas.map(P=>({...P}))),an.classList.add("m3-pronto"),requestAnimationFrame(_e);let Ze=(P,V,St)=>{Yt.trilha=P;let _t=Fe(V,{tocar:!1}),Nt=_t[St??_t.length-1];Nt.ini(),Ot.parar(),K=O.explodir;for(let[ie,ue]of Object.entries(ws))f.partes[ie]?.position.set(ue[0]*K,ue[1]*K,ue[2]*K);ce.aplicar(N(Nt.vista)),ft.update(),Tt()};window.__m3={rot:v,scene:r,camera:a,controls:ft,Q:f,FX:rt,mostrarCap:Fe,tour:Yt,est:O,usu:z,api:gt,ui:ht,rEixo:ed,irPara:Ze,renderer:s,pos:()=>!!ne,desenhar:ve,escolher:k,selecionar:Qt,planos:g,planosE:x,aplicarPlanos:Tt}}function Ov(i){let t=new Dr,e=30,n=new gs(e,64,32),s=n.attributes.position,r=[],a=new ae,o=new ae(.16,.17,.18),c=new ae(.5,.53,.56),l=new ae(.78,.8,.83);for(let f=0;f<s.count;f++){let g=s.getY(f)/e;g<0?a.copy(c).lerp(o,Math.min(1,-g*2.2)):a.copy(c).lerp(l,Math.min(1,g*1.4)),r.push(a.r,a.g,a.b)}n.setAttribute("color",new Me(r,3)),t.add(new Te(n,new yn({vertexColors:!0,side:vn})));let u=(f,g,x,m,p,T,b=16777215)=>{let M=new Te(new hi(f,g),new yn({color:new ae(b).multiplyScalar(T),side:wn}));M.position.set(x,m,p),M.lookAt(0,0,0),t.add(M)};u(16,9,3,19,7,5),u(5,16,-19,6,7,2.4),u(5,16,17,6,-8,1.8,14871551),u(22,3.5,0,5,-21,1.4),u(12,3,5,1.5,21,.9);let d=new er(i),h=d.fromScene(t,.03).texture;return d.dispose(),h}function zv(i,t,e){let n=i.getContext(),s=!!i.extensions.get("EXT_color_buffer_float")||!!n.getExtension("EXT_color_buffer_float"),r=new An(4,4,{type:s?di:Vn,samples:4,depthTexture:new Vi(4,4)}),a=new hr(t,e,4,4);a.setGBuffer(r.depthTexture),a.updateGtaoMaterial({radius:.3,distanceExponent:1.6,thickness:1.4,scale:1.15,samples:16,distanceFallOff:1}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),a.output=hr.OUTPUT.Off;let o=new lr(new Be({uniforms:{tCor:{value:r.texture},tAO:{value:a.pdRenderTarget.texture},tProf:{value:r.depthTexture},forca:{value:.95},uLinhas:{value:.34},uTexel:{value:new vt(1,1)},uNear:{value:.05},uFar:{value:120}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`#include <packing>
      uniform sampler2D tCor; uniform sampler2D tAO; uniform sampler2D tProf; uniform float forca; uniform float uLinhas; uniform vec2 uTexel; uniform float uNear; uniform float uFar; varying vec2 vUv;
      float vz(vec2 uv) { float d = texture2D(tProf, uv).r; return d >= .99999 ? 1e4 : -perspectiveDepthToViewZ(d, uNear, uFar); }
      float capa(vec2 uv) { return 1. - clamp(abs(texture2D(tCor, uv).a - .995) / .003, 0., 1.); }
      void main() {
        vec4 c = texture2D(tCor, vUv); float tp = 1. - clamp(abs(c.a - .995) / .003, 0., 1.);
        float a = texture2D(tAO, vUv).r; c.rgb *= mix(1., a, forca * (1. - tp));
        float d0 = vz(vUv);
        if (uLinhas > 0. && d0 < 1e3) {
          vec2 dx = vec2(uTexel.x, 0.), dy = vec2(0., uTexel.y);
          float l = vz(vUv - dx), r = vz(vUv + dx), u = vz(vUv + dy), b = vz(vUv - dy);
          float lap = abs(min(l, d0 * 1.5) + min(r, d0 * 1.5) - 2. * d0) + abs(min(u, d0 * 1.5) + min(b, d0 * 1.5) - 2. * d0);
          float w = smoothstep(.0035, .014, lap / d0);
          float tv = min(min(capa(vUv - dx), capa(vUv + dx)), min(capa(vUv + dy), capa(vUv - dy)));
          w *= 1. - tp * tv;
          c.rgb *= 1. - uLinhas * w;
        }
        c.a = c.a > .99 ? 1. : c.a;
        gl_FragColor = c;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1,blending:en}));return{rt:r,ao:a,quad:o}}if(an&&On)if(!Nv())on("tour-3d")?.setAttribute("hidden","");else try{Fv()}catch(i){console.error(i),on("tour-3d")?.setAttribute("hidden","")}
