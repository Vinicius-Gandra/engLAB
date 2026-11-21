var Yi=2463534242,je=()=>(Yi^=Yi<<13,Yi^=Yi>>>17,Yi^=Yi<<5,(Yi>>>0)/4294967296);var Bl="170",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nf=0,bh=1,sf=2;var Bu=1,rf=2,xi=3,ti=0,Qe=1,un=2,Hi=0,ks=1,Bn=2,Sh=3,Eh=4,of=5,es=100,af=101,cf=102,lf=103,hf=104,uf=200,df=201,ff=202,pf=203,gc=204,xc=205,mf=206,gf=207,xf=208,vf=209,_f=210,yf=211,Mf=212,bf=213,Sf=214,vc=0,_c=1,yc=2,Xs=3,Mc=4,bc=5,Sc=6,Ec=7,Hu=0,Ef=1,wf=2,ki=0,Tf=1,Af=2,Rf=3,Hl=4,Cf=5,Pf=6,If=7;var ku=300,qs=301,Ys=302,wc=303,Tc=304,xa=306,Rr=1e3,is=1001,Ac=1002,Un=1003,Df=1004;var Jr=1005;var Jn=1006,Na=1007;var ss=1008;var yi=1009,Vu=1010,Gu=1011,Cr=1012,kl=1013,rs=1014,Kn=1015,Wr=1016,Vl=1017,Gl=1018,$s=1020,Wu=35902,Xu=1021,qu=1022,Yn=1023,Yu=1024,$u=1025,Vs=1026,Zs=1027,Wl=1028,Xl=1029,Zu=1030,ql=1031;var Yl=1033,Do=33776,Lo=33777,Uo=33778,zo=33779,Rc=35840,Cc=35841,Pc=35842,Ic=35843,Dc=36196,Lc=37492,Uc=37496,zc=37808,Nc=37809,Oc=37810,Fc=37811,Bc=37812,Hc=37813,kc=37814,Vc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,$c=37821,No=36492,Zc=36494,jc=36495,ju=36283,Jc=36284,Kc=36285,Qc=36286;var Oo=2300,tl=2301,Oa=2302,wh=2400,Th=2401,Ah=2402;var Lf=3200,Uf=3201;var Ju=0,zf=1,Fi="",_n="srgb",nr="srgb-linear",va="linear",Oe="srgb";var ys=7680;var Rh=519,Nf=512,Of=513,Ff=514,Ku=515,Bf=516,Hf=517,kf=518,Vf=519,el=35044;var Ch="300 es",vi=2e3,Fo=2001,Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,br=Math.PI/180,Pr=180/Math.PI;function Qn(){let i=je()*4294967295|0,t=je()*4294967295|0,e=je()*4294967295|0,n=je()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function $l(i,t){return(i%t+t)%t}function Gf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wf(i,t,e){return i!==t?(e-i)/(t-i):0}function Sr(i,t,e){return(1-e)*i+e*t}function Xf(i,t,e,n){return Sr(i,t,1-Math.exp(-e*n))}function qf(i,t=1){return t-Math.abs($l(i,t*2)-t)}function Yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zf(i,t){return i+Math.floor(je()*(t-i+1))}function jf(i,t){return i+je()*(t-i)}function Jf(i){return i*(.5-je())}function Kf(i){i!==void 0&&(Ph=i);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qf(i){return i*br}function tp(i){return i*Pr}function ep(i){return(i&i-1)===0&&i!==0}function np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _a={DEG2RAD:br,RAD2DEG:Pr,generateUUID:Qn,clamp:Ke,euclideanModulo:$l,mapLinear:Gf,inverseLerp:Wf,lerp:Sr,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:$f,randInt:Zf,randFloat:jf,randFloatSpread:Jf,seededRandom:Kf,degToRad:Qf,radToDeg:tp,isPowerOfTwo:ep,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:Ue,denormalize:qn},wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=je(),this.y=je(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ge=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],S=s[1],y=s[4],_=s[7],z=s[2],E=s[5],w=s[8];return r[0]=o*x+a*S+c*z,r[3]=o*m+a*y+c*E,r[6]=o*f+a*_+c*w,r[1]=l*x+h*S+d*z,r[4]=l*m+h*y+d*E,r[7]=l*f+h*_+d*w,r[2]=u*x+p*S+g*z,r[5]=u*m+p*y+g*E,r[8]=u*f+p*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fa=new ge;function Qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rp(){let i=Bo("canvas");return i.style.display="block",i}var Ih={};function yr(i){i in Ih||(Ih[i]=!0,console.warn(i))}function op(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ap(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Pe={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?va:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Dh=[.64,.33,.3,.6,.15,.06],Lh=[.2126,.7152,.0722],Uh=[.3127,.329],zh=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pe.define({[nr]:{primaries:Dh,whitePoint:Uh,transfer:va,toXYZ:zh,fromXYZ:Nh,luminanceCoefficients:Lh,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:Dh,whitePoint:Uh,transfer:Oe,toXYZ:zh,fromXYZ:Nh,luminanceCoefficients:Lh,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}});var Ms,nl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=Bo("canvas")),Ms.width=t.width,Ms.height=t.height;let n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lp=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hp=0,An=class i extends Mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=is,s=is,r=Jn,o=ss,a=Yn,c=yi,l=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Qn(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=ku;An.DEFAULT_ANISOTROPY=1;var Fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(p+1)/2,z=(f+1)/2,E=(h+u)/4,w=(d+x)/4,I=(g+m)/4;return y>_&&y>z?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=w/n):_>z?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=I/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=w/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(u-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=je(),this.y=je(),this.z=je(),this.w=je(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new An(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends il{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ko=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sl=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==u||l!==p||h!==g){let m=1-a,f=c*u+l*p+h*g+d*x,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let z=Math.sqrt(y),E=Math.atan2(z,f*S);m=Math.sin(m*E)/z,a=Math.sin(a*E)/z}let _=a*S;if(c=c*m+u*_,l=l*m+p*_,h=h*m+g*_,d=d*m+x*_,m===1-a){let z=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=z,l*=z,h*=z,d*=z}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-a*p,t[e+2]=l*g+h*p+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*je(),e=2*Math.PI*je(),n=je(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=je(),this.y=je(),this.z=je(),this}randomDirection(){let t=je()*Math.PI*2,e=je()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha=new R,Oh=new tn,Rn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Qr.subVectors(this.max,hr),bs.subVectors(t.a,hr),Ss.subVectors(t.b,hr),Es.subVectors(t.c,hr),Di.subVectors(Ss,bs),Li.subVectors(Es,Ss),$i.subVectors(bs,Es);let e=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-$i.z,$i.y,Di.z,0,-Di.x,Li.z,0,-Li.x,$i.z,0,-$i.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-$i.y,$i.x,0];return!ka(e,bs,Ss,Es,Qr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,bs,Ss,Es,Qr))?!1:(to.crossVectors(Di,Li),e=[to.x,to.y,to.z],ka(e,bs,Ss,Es,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},di=[new R,new R,new R,new R,new R,new R,new R,new R],Gn=new R,Kr=new Rn,bs=new R,Ss=new R,Es=new R,Di=new R,Li=new R,$i=new R,hr=new R,Qr=new R,to=new R,Zi=new R;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zi.fromArray(i,r);let a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),c=t.dot(Zi),l=e.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var up=new Rn,ur=new R,Va=new R,zn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):up.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Va)),this.expandByPoint(ur.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new R,Ga=new R,eo=new R,Ui=new R,Wa=new R,no=new R,Xa=new R,Vi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ga.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(Ga);let r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=Ui.dot(this.direction),c=-Ui.dot(eo),l=Ui.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ga).addScaledVector(eo,u),p}intersectSphere(t,e){fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){Wa.subVectors(e,t),no.subVectors(n,t),Xa.crossVectors(Wa,no);let o=this.direction.dot(Xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,t);let c=a*this.direction.dot(no.crossVectors(Ui,no));if(c<0)return null;let l=a*this.direction.dot(Wa.cross(Ui));if(l<0||c+l>o)return null;let h=-a*Ui.dot(Xa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,u,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,p,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),o=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,p=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,p=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),zi.crossVectors(n,Dn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),zi.crossVectors(n,Dn)),zi.normalize(),io.crossVectors(Dn,zi),s[0]=zi.x,s[4]=io.x,s[8]=Dn.x,s[1]=zi.y,s[5]=io.y,s[9]=Dn.y,s[2]=zi.z,s[6]=io.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],S=n[3],y=n[7],_=n[11],z=n[15],E=s[0],w=s[4],I=s[8],T=s[12],b=s[1],U=s[5],Y=s[9],W=s[13],X=s[2],st=s[6],$=s[10],V=s[14],Q=s[3],At=s[7],rt=s[11],vt=s[15];return r[0]=o*E+a*b+c*X+l*Q,r[4]=o*w+a*U+c*st+l*At,r[8]=o*I+a*Y+c*$+l*rt,r[12]=o*T+a*W+c*V+l*vt,r[1]=h*E+d*b+u*X+p*Q,r[5]=h*w+d*U+u*st+p*At,r[9]=h*I+d*Y+u*$+p*rt,r[13]=h*T+d*W+u*V+p*vt,r[2]=g*E+x*b+m*X+f*Q,r[6]=g*w+x*U+m*st+f*At,r[10]=g*I+x*Y+m*$+f*rt,r[14]=g*T+x*W+m*V+f*vt,r[3]=S*E+y*b+_*X+z*Q,r[7]=S*w+y*U+_*st+z*At,r[11]=S*I+y*Y+_*$+z*rt,r[15]=S*T+y*W+_*V+z*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*p-n*c*p)+x*(+e*c*p-e*l*u+r*o*u-s*o*p+s*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],S=d*m*l-x*u*l+x*c*p-a*m*p-d*c*f+a*u*f,y=g*u*l-h*m*l-g*c*p+o*m*p+h*c*f-o*u*f,_=h*x*l-g*d*l+g*a*p-o*x*p-h*a*f+o*d*f,z=g*d*c-h*x*c-g*a*u+o*x*u+h*a*m-o*d*m,E=e*S+n*y+s*_+r*z;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=S*w,t[1]=(x*u*r-d*m*r-x*s*p+n*m*p+d*s*f-n*u*f)*w,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*w,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*p-n*c*p)*w,t[4]=y*w,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*w,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*p+e*c*p)*w,t[8]=_*w,t[9]=(g*d*r-h*x*r-g*n*p+e*x*p+h*n*f-e*d*f)*w,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*w,t[12]=z*w,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*m+e*d*m)*w,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*w,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,g=r*d,x=o*h,m=o*d,f=a*d,S=c*l,y=c*h,_=c*d,z=n.x,E=n.y,w=n.z;return s[0]=(1-(x+f))*z,s[1]=(p+_)*z,s[2]=(g-y)*z,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(u+f))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+y)*w,s[9]=(m-S)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ws.set(s[0],s[1],s[2]).length(),o=ws.set(s[4],s[5],s[6]).length(),a=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);let l=1/r,h=1/o,d=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,g;if(a===vi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vi){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,p=(n+s)*h,g,x;if(a===vi)g=(o+r)*d,x=-2*d;else if(a===Fo)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ws=new R,Wn=new de,dp=new R(0,0,0),fp=new R(1,1,1),zi=new R,io=new R,Dn=new R,Fh=new de,Bh=new tn,ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pp=0,Hh=new R,Ts=new tn,pi=new de,so=new R,dr=new R,mp=new R,gp=new tn,kh=new R(1,0,0),Vh=new R(0,1,0),Gh=new R(0,0,1),Wh={type:"added"},xp={type:"removed"},As={type:"childadded",child:null},qa={type:"childremoved",child:null},cn=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new ei,n=new tn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new ge}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(dr,so,this.up):pi.lookAt(so,dr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(pi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xp),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};cn.DEFAULT_UP=new R(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new R,mi=new R,Ya=new R,gi=new R,Rs=new R,Cs=new R,Xh=new R,$a=new R,Za=new R,ja=new R,Ja=new Fe,Ka=new Fe,Qa=new Fe,Bi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),mi.subVectors(n,e),Ya.subVectors(t,e);let o=Xn.dot(Xn),a=Xn.dot(mi),c=Xn.dot(Ya),l=mi.dot(mi),h=mi.dot(Ya),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ja.setScalar(0),Ka.setScalar(0),Qa.setScalar(0),Ja.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),Qa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ja,r.x),o.addScaledVector(Ka,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),mi.subVectors(t,e),Xn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Xn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,n),Cs.subVectors(r,n),$a.subVectors(t,n);let c=Rs.dot($a),l=Cs.dot($a);if(c<=0&&l<=0)return e.copy(n);Za.subVectors(t,s);let h=Rs.dot(Za),d=Cs.dot(Za);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Rs,o);ja.subVectors(t,r);let p=Rs.dot(ja),g=Cs.dot(ja);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Cs,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Xh.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Xh,a);let f=1/(m+x+u);return o=x*f,a=u*f,e.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ro={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=$l(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){let n=td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return Pe.fromWorkingColorSpace(vn.copy(this),t),Math.round(Ke(vn.r*255,0,255))*65536+Math.round(Ke(vn.g*255,0,255))*256+Math.round(Ke(vn.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=_n){Pe.fromWorkingColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(ro);let n=Sr(Ni.h,ro.h,e),s=Sr(Ni.s,ro.s,e),r=Sr(Ni.l,ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new le;le.NAMES=td;var vp=0,ni=class extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Qn(),this.name="",this.blending=ks,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Cn=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new R,oo=new wt,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),t}};var Vo=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Go=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},_p=0,Fn=new de,ec=new cn,Ps=new R,Ln=new Rn,fr=new Rn,an=new R,Re=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?Go:Vo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ge().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Ln.min,fr.min),Ln.expandByPoint(an),an.addVectors(Ln.max,fr.max),Ln.expandByPoint(an)):(Ln.expandByPoint(fr.min),Ln.expandByPoint(fr.max))}Ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(t,l),an.add(Ps)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;let l=new R,h=new R,d=new R,u=new wt,p=new wt,g=new wt,x=new R,m=new R;function f(I,T,b){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,b),h.sub(l),d.sub(l),p.sub(u),g.sub(u);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[I].add(x),a[T].add(x),a[b].add(x),c[I].add(m),c[T].add(m),c[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,T=S.length;I<T;++I){let b=S[I],U=b.start,Y=b.count;for(let W=U,X=U+Y;W<X;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let y=new R,_=new R,z=new R,E=new R;function w(I){z.fromBufferAttribute(s,I),E.copy(z);let T=a[I];y.copy(T),y.sub(z.multiplyScalar(z.dot(T))).normalize(),_.crossVectors(E,T);let U=_.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,T=S.length;I<T;++I){let b=S[I],U=b.start,Y=b.count;for(let W=U,X=U+Y;W<X;W+=3)w(t.getX(W+0)),w(t.getX(W+1)),w(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new ke(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new de,ji=new Vi,ao=new zn,Yh=new R,co=new R,lo=new R,ho=new R,nc=new R,uo=new R,$h=new R,fo=new R,$t=class extends cn{constructor(t=new Re,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(nc.fromBufferAttribute(d,t),o?uo.addScaledVector(nc,h):uo.addScaledVector(nc.sub(e),h))}e.add(uo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(ao.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ao,Yh)===null||ji.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),ji.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,z=y;_<z;_+=3){let E=a.getX(_),w=a.getX(_+1),I=a.getX(_+2);s=po(this,f,t,n,l,h,d,E,w,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let S=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=po(this,o,t,n,l,h,d,S,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,z=y;_<z;_+=3){let E=_,w=_+1,I=_+2;s=po(this,f,t,n,l,h,d,E,w,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let S=m,y=m+1,_=m+2;s=po(this,o,t,n,l,h,d,S,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function yp(i,t,e,n,s,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ti,a),c===null)return null;fo.copy(a),fo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fo);return l<e.near||l>e.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,co),i.getVertexPosition(c,lo),i.getVertexPosition(l,ho);let h=yp(i,t,e,n,co,lo,ho,$h);if(h){let d=new R;Bi.getBarycoord($h,co,lo,ho,d),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,c,l,d,new wt)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,c,l,d,new wt)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};Bi.getNormal(co,lo,ho,u.normal),h.face=u,h.barycoord=d}return h}var We=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2));function g(x,m,f,S,y,_,z,E,w,I,T){let b=_/w,U=z/I,Y=_/2,W=z/2,X=E/2,st=w+1,$=I+1,V=0,Q=0,At=new R;for(let rt=0;rt<$;rt++){let vt=rt*U-W;for(let tt=0;tt<st;tt++){let ct=tt*b-Y;At[x]=ct*S,At[m]=vt*y,At[f]=X,l.push(At.x,At.y,At.z),At[x]=0,At[m]=0,At[f]=E>0?1:-1,h.push(At.x,At.y,At.z),d.push(tt/w),d.push(1-rt/I),V+=1}}for(let rt=0;rt<I;rt++)for(let vt=0;vt<w;vt++){let tt=u+vt+st*rt,ct=u+vt+st*(rt+1),N=u+(vt+1)+st*(rt+1),G=u+(vt+1)+st*rt;c.push(tt,ct,G),c.push(ct,N,G),Q+=6}a.addGroup(p,Q,T),p+=Q,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Mn(i){let t={};for(let e=0;e<i.length;e++){let n=js(i[e]);for(let s in n)t[s]=n[s]}return t}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ed(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}var wi={clone:js,merge:Mn},bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wo=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new R,Zh=new wt,jh=new wt,bn=class extends Wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,jh),e.subVectors(jh,Zh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Is=-90,Ds=1,rl=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(Is,Ds,t,e);s.layers=this.layers,this.add(s);let r=new bn(Is,Ds,t,e);r.layers=this.layers,this.add(r);let o=new bn(Is,Ds,t,e);o.layers=this.layers,this.add(o);let a=new bn(Is,Ds,t,e);a.layers=this.layers,this.add(a);let c=new bn(Is,Ds,t,e);c.layers=this.layers,this.add(c);let l=new bn(Is,Ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xo=class extends An{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ol=class extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Hi});r.uniforms.tEquirect.value=e;let o=new $t(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Jn),new rl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ic=new R,Ep=new R,wp=new ge,hn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ic.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new zn,mo=new R,Dr=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,o=new hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],S=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,u-l,m-p,_-f).normalize(),n[1].setComponents(c+r,u+l,m+p,_+f).normalize(),n[2].setComponents(c+o,u+h,m+g,_+S).normalize(),n[3].setComponents(c-o,u-h,m-g,_-S).normalize(),n[4].setComponents(c-a,u-d,m-x,_-y).normalize(),e===vi)n[5].setComponents(c+a,u+d,m+x,_+y).normalize();else if(e===Fo)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Js=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let S=f*u-o;for(let y=0;y<l;y++){let _=y*d-r;g.push(_,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let y=S+l*f,_=S+l*(f+1),z=S+1+l*(f+1),E=S+1+l*f;p.push(y,_,E),p.push(_,z,E)}this.setIndex(p),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,Tm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,zg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,kg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,jg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,t0=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,alphatest_pars_fragment:Dp,aomap_fragment:Lp,aomap_pars_fragment:Up,batching_pars_vertex:zp,batching_vertex:Np,begin_vertex:Op,beginnormal_vertex:Fp,bsdfs:Bp,iridescence_fragment:Hp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:$p,color_vertex:Zp,common:jp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Qp,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:cm,envmap_physical_pars_fragment:_m,envmap_vertex:lm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:ym,lights_toon_pars_fragment:Mm,lights_phong_fragment:bm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Em,lights_physical_pars_fragment:wm,lights_fragment_begin:Tm,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Dm,map_fragment:Lm,map_pars_fragment:Um,map_particle_fragment:zm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Bm,morphcolor_vertex:Hm,morphnormal_vertex:km,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:$m,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Qm,opaque_fragment:tg,packing:eg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:lg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:xg,tonemapping_fragment:vg,tonemapping_pars_fragment:_g,transmission_fragment:yg,transmission_pars_fragment:Mg,uv_pars_fragment:bg,uv_pars_vertex:Sg,uv_vertex:Eg,worldpos_vertex:wg,background_vert:Tg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Ig,depth_vert:Dg,depth_frag:Lg,distanceRGBA_vert:Ug,distanceRGBA_frag:zg,equirect_vert:Ng,equirect_frag:Og,linedashed_vert:Fg,linedashed_frag:Bg,meshbasic_vert:Hg,meshbasic_frag:kg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:$g,meshphong_frag:Zg,meshphysical_vert:jg,meshphysical_frag:Jg,meshtoon_vert:Kg,meshtoon_frag:Qg,points_vert:t0,points_frag:e0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},Ut={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Sn={basic:{uniforms:Mn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Mn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Mn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Mn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Mn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Mn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Mn([Ut.points,Ut.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Mn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Mn([Ut.common,Ut.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Mn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Mn([Ut.sprite,Ut.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Mn([Ut.common,Ut.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Mn([Ut.lights,Ut.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Sn.physical={uniforms:Mn([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var go={r:0,b:0,g:0},Ki=new ei,o0=new de;function a0(i,t,e,n,s,r,o){let a=new le(0),c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function x(S){let y=!1,_=g(S);_===null?f(a,c):_&&_.isColor&&(f(_,1),y=!0);let z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===xa)?(h===void 0&&(h=new $t(new We(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:js(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(y.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(Ki)),h.material.toneMapped=Pe.getTransfer(_.colorSpace)!==Oe,(d!==_||u!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $t(new Js(2,2),new ln({name:"BackgroundMaterial",uniforms:js(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Pe.getTransfer(_.colorSpace)!==Oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,y){S.getRGB(go,ed(i)),n.buffers.color.setClear(go.r,go.g,go.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:x,addToRenderList:m}}function c0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,U,Y,W,X){let st=!1,$=d(W,Y,U);r!==$&&(r=$,l(r.object)),st=p(b,W,Y,X),st&&g(b,W,Y,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,_(b,U,Y,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,U,Y){let W=Y.wireframe===!0,X=n[b.id];X===void 0&&(X={},n[b.id]=X);let st=X[U.id];st===void 0&&(st={},X[U.id]=st);let $=st[W];return $===void 0&&($=u(c()),st[W]=$),$}function u(b){let U=[],Y=[],W=[];for(let X=0;X<e;X++)U[X]=0,Y[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:W,object:b,attributes:{},index:null}}function p(b,U,Y,W){let X=r.attributes,st=U.attributes,$=0,V=Y.getAttributes();for(let Q in V)if(V[Q].location>=0){let rt=X[Q],vt=st[Q];if(vt===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),rt===void 0||rt.attribute!==vt||vt&&rt.data!==vt.data)return!0;$++}return r.attributesNum!==$||r.index!==W}function g(b,U,Y,W){let X={},st=U.attributes,$=0,V=Y.getAttributes();for(let Q in V)if(V[Q].location>=0){let rt=st[Q];rt===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));let vt={};vt.attribute=rt,rt&&rt.data&&(vt.data=rt.data),X[Q]=vt,$++}r.attributes=X,r.attributesNum=$,r.index=W}function x(){let b=r.newAttributes;for(let U=0,Y=b.length;U<Y;U++)b[U]=0}function m(b){f(b,0)}function f(b,U){let Y=r.newAttributes,W=r.enabledAttributes,X=r.attributeDivisors;Y[b]=1,W[b]===0&&(i.enableVertexAttribArray(b),W[b]=1),X[b]!==U&&(i.vertexAttribDivisor(b,U),X[b]=U)}function S(){let b=r.newAttributes,U=r.enabledAttributes;for(let Y=0,W=U.length;Y<W;Y++)U[Y]!==b[Y]&&(i.disableVertexAttribArray(Y),U[Y]=0)}function y(b,U,Y,W,X,st,$){$===!0?i.vertexAttribIPointer(b,U,Y,X,st):i.vertexAttribPointer(b,U,Y,W,X,st)}function _(b,U,Y,W){x();let X=W.attributes,st=Y.getAttributes(),$=U.defaultAttributeValues;for(let V in st){let Q=st[V];if(Q.location>=0){let At=X[V];if(At===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(At=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(At=b.instanceColor)),At!==void 0){let rt=At.normalized,vt=At.itemSize,tt=t.get(At);if(tt===void 0)continue;let ct=tt.buffer,N=tt.type,G=tt.bytesPerElement,H=N===i.INT||N===i.UNSIGNED_INT||At.gpuType===kl;if(At.isInterleavedBufferAttribute){let ot=At.data,pt=ot.stride,gt=At.offset;if(ot.isInstancedInterleavedBuffer){for(let St=0;St<Q.locationSize;St++)f(Q.location+St,ot.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let St=0;St<Q.locationSize;St++)m(Q.location+St);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let St=0;St<Q.locationSize;St++)y(Q.location+St,vt/Q.locationSize,N,rt,pt*G,(gt+vt/Q.locationSize*St)*G,H)}else{if(At.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)f(Q.location+ot,At.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ot=0;ot<Q.locationSize;ot++)m(Q.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ot=0;ot<Q.locationSize;ot++)y(Q.location+ot,vt/Q.locationSize,N,rt,vt*G,vt/Q.locationSize*ot*G,H)}}else if($!==void 0){let rt=$[V];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(Q.location,rt);break;case 3:i.vertexAttrib3fv(Q.location,rt);break;case 4:i.vertexAttrib4fv(Q.location,rt);break;default:i.vertexAttrib1fv(Q.location,rt)}}}}S()}function z(){I();for(let b in n){let U=n[b];for(let Y in U){let W=U[Y];for(let X in W)h(W[X].object),delete W[X];delete U[Y]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let U=n[b.id];for(let Y in U){let W=U[Y];for(let X in W)h(W[X].object),delete W[X];delete U[Y]}delete n[b.id]}function w(b){for(let U in n){let Y=n[U];if(Y[b.id]===void 0)continue;let W=Y[b.id];for(let X in W)h(W[X].object),delete W[X];delete Y[b.id]}}function I(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function l0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function h0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Yn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Kn&&!I)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:z,maxSamples:E}}function u0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new hn,a=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,y=S*4,_=f.clippingState||null;c.value=_,_=h(g,u,y,p);for(let z=0;z!==y;++z)_[z]=e[z];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=p;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function d0(i){let t=new WeakMap;function e(o,a){return a===wc?o.mapping=qs:a===Tc&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wc||a===Tc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ol(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var qo=class extends Wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bs=4,Jh=[.125,.215,.35,.446,.526,.582],ns=20,sc=new qo,Kh=new le,rc=null,oc=0,ac=0,cc=!1,ts=(1+Math.sqrt(5))/2,Ls=1/ts,Qh=[new R(-ts,Ls,0),new R(ts,Ls,0),new R(-Ls,0,ts),new R(Ls,0,ts),new R(0,ts,-Ls),new R(0,ts,Ls),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Yo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,oc,ac),this._renderer.xr.enabled=cc,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Wr,format:Yn,colorSpace:nr,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,sc)}_sceneToCubeUV(t,e,n,s){let a=new bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Kh),h.toneMapping=ki,h.autoClear=!1;let p=new Cn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new $t(new We,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Kh),x=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let y=this._cubeSize;xo(s,S*y,f>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;xo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,sc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qh[(s-r-1)%Qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new $t(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let f=[],S=0;for(let w=0;w<ns;++w){let I=w/x,T=Math.exp(-I*I/2);f.push(T),w===0?S+=T:w<m&&(S+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;let _=this._sizeLods[s],z=3*_*(s>y-Bs?s-y+Bs:0),E=4*(this._cubeSize-_);xo(e,z,E,3*_,2*_),c.setRenderTarget(e),c.render(d,sc)}};function f0(i){let t=[],e=[],n=[],s=i,r=i-Bs+1+Jh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Bs?c=Jh[o-i+Bs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,S=new Float32Array(x*g*p),y=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let E=0;E<p;E++){let w=E%3*2/3-1,I=E>2?0:-1,T=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];S.set(T,x*g*E),y.set(u,m*g*E);let b=[E,E,E,E,E,E];_.set(b,f*g*E)}let z=new Re;z.setAttribute("position",new ke(S,x)),z.setAttribute("uv",new ke(y,m)),z.setAttribute("faceIndex",new ke(_,f)),t.push(z),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tu(i,t,e){let n=new bi(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p0(i,t,e){let n=new Float32Array(ns),s=new R(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function eu(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function nu(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function m0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wc||c===Tc,h=c===qs||c===Ys;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Yo(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Yo(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function g0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function x0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let y=0,_=S.length;y<_;y+=3){let z=S[y+0],E=S[y+1],w=S[y+2];u.push(z,E,E,w,w,z)}}else if(g!==void 0){let S=g.array;x=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){let z=y+0,E=y+1,w=y+2;u.push(z,E,E,w,w,z)}}else return;let m=new(Qu(u)?Go:Vo)(u,1);m.version=x;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function v0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*x[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function _0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function y0(i,t,e){let n=new WeakMap,s=new Fe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,z=1;_>t.maxTextureSize&&(z=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*z*4*d),w=new ko(E,_,z,d);w.type=Kn,w.needsUpdate=!0;let I=y*4;for(let b=0;b<d;b++){let U=m[b],Y=f[b],W=S[b],X=_*z*4*b;for(let st=0;st<U.count;st++){let $=st*I;p===!0&&(s.fromBufferAttribute(U,st),E[X+$+0]=s.x,E[X+$+1]=s.y,E[X+$+2]=s.z,E[X+$+3]=0),g===!0&&(s.fromBufferAttribute(Y,st),E[X+$+4]=s.x,E[X+$+5]=s.y,E[X+$+6]=s.z,E[X+$+7]=0),x===!0&&(s.fromBufferAttribute(W,st),E[X+$+8]=s.x,E[X+$+9]=s.y,E[X+$+10]=s.z,E[X+$+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new wt(_,z)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function M0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var $o=class extends An{constructor(t,e,n,s,r,o,a,c,l,h=Vs){if(h!==Vs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vs&&(n=rs),n===void 0&&h===Zs&&(n=$s),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Un,this.minFilter=c!==void 0?c:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},id=new An,iu=new $o(1,1),sd=new ko,rd=new sl,od=new Xo,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),cu=new Float32Array(4);function ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ya(i,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function b0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function T0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),nn(e,n)}}function A0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),nn(e,n)}}function R0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),nn(e,n)}}function C0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function O0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=Ku,r=iu):r=id,e.setTexture2D(t||r,s)}function F0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rd,s)}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||od,s)}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sd,s)}function k0(i){switch(i){case 5126:return b0;case 35664:return S0;case 35665:return E0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return I0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return U0;case 36295:return z0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return H0}}function V0(i,t){i.uniform1fv(this.addr,t)}function G0(i,t){let e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){let e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function X0(i,t){let e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function q0(i,t){let e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){let e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $0(i,t){let e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Z0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function K0(i,t){i.uniform4iv(this.addr,t)}function Q0(i,t){i.uniform1uiv(this.addr,t)}function tx(i,t){i.uniform2uiv(this.addr,t)}function ex(i,t){i.uniform3uiv(this.addr,t)}function nx(i,t){i.uniform4uiv(this.addr,t)}function ix(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||id,r[o])}function sx(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rd,r[o])}function rx(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||od,r[o])}function ox(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sd,r[o])}function ax(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return $0;case 5124:case 35670:return Z0;case 35667:case 35671:return j0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return Q0;case 36294:return tx;case 36295:return ex;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}var al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}},cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},lc=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function cx(i,t,e){let n=i.name,s=n.length;for(lc.lastIndex=0;;){let r=lc.exec(n),o=lc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lu(e,l===void 0?new al(a,i,t):new cl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ll(a),lu(e,d)),e=d}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);cx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lx=37297,hx=0;function ux(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var uu=new ge;function dx(i){Pe._getMatrix(uu,Pe.workingColorSpace,i);let t=`mat3( ${uu.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case va:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ux(i.getShaderSource(t),o)}else return s}function fx(i,t){let e=dx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function px(i,t){let e;switch(t){case Tf:e="Linear";break;case Af:e="Reinhard";break;case Rf:e="Cineon";break;case Hl:e="ACESFilmic";break;case Pf:e="AgX";break;case If:e="Neutral";break;case Cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vo=new R;function mx(){Pe.getLuminanceCoefficients(vo);let i=vo.x.toFixed(4),t=vo.y.toFixed(4),e=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function xx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mr(i){return i!==""}function fu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(_x,Mx)}var yx=new Map;function Mx(i,t){let e=ye[t];if(e===void 0){let n=yx.get(t);if(n!==void 0)e=ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}var bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(bx,Sx)}function Sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ex(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Ax(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hu:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case wf:t="ENVMAP_BLENDING_ADD";break}return t}function Rx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ex(e),l=wx(e),h=Tx(e),d=Ax(e),u=Rx(e),p=gx(e),g=xx(r),x=s.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),f.length>0&&(f+=`
`)):(m=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),f=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?ye.tonemapping_pars_fragment:"",e.toneMapping!==ki?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=hl(o),o=fu(o,e),o=pu(o,e),a=hl(a),a=fu(a,e),a=pu(a,e),o=mu(o),a=mu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=S+m+o,_=S+f+a,z=hu(s,s.VERTEX_SHADER,y),E=hu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,z),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(U){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(z).trim(),X=s.getShaderInfoLog(E).trim(),st=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,z,E);else{let V=du(s,z,"vertex"),Q=du(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+V+`
`+Q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(W===""||X==="")&&($=!1);$&&(U.diagnostics={runnable:st,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(z),s.deleteShader(E),I=new Ws(s,x),T=vx(s,x)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,lx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=E,this}var Px=0,ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dl(t),e.set(t,n)),n}},dl=class{constructor(t){this.id=Px++,this.code=t,this.usedTimes=0}};function Ix(i,t,e,n,s,r,o){let a=new Ir,c=new ul,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,b,U,Y,W){let X=Y.fog,st=W.geometry,$=T.isMeshStandardMaterial?Y.environment:null,V=(T.isMeshStandardMaterial?e:t).get(T.envMap||$),Q=V&&V.mapping===xa?V.image.height:null,At=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let rt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,vt=rt!==void 0?rt.length:0,tt=0;st.morphAttributes.position!==void 0&&(tt=1),st.morphAttributes.normal!==void 0&&(tt=2),st.morphAttributes.color!==void 0&&(tt=3);let ct,N,G,H;if(At){let P=Sn[At];ct=P.vertexShader,N=P.fragmentShader}else ct=T.vertexShader,N=T.fragmentShader,c.update(T),G=c.getVertexShaderID(T),H=c.getFragmentShaderID(T);let ot=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),gt=W.isInstancedMesh===!0,St=W.isBatchedMesh===!0,It=!!T.map,j=!!T.matcap,yt=!!V,D=!!T.aoMap,Vt=!!T.lightMap,bt=!!T.bumpMap,Tt=!!T.normalMap,Rt=!!T.displacementMap,Zt=!!T.emissiveMap,Ot=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,q=T.clearcoat>0,lt=T.dispersion>0,ft=T.iridescence>0,ht=T.sheen>0,Ct=T.transmission>0,Dt=M&&!!T.anisotropyMap,Wt=q&&!!T.clearcoatMap,jt=q&&!!T.clearcoatNormalMap,_t=q&&!!T.clearcoatRoughnessMap,Pt=ft&&!!T.iridescenceMap,te=ft&&!!T.iridescenceThicknessMap,ie=ht&&!!T.sheenColorMap,Gt=ht&&!!T.sheenRoughnessMap,ue=!!T.specularMap,oe=!!T.specularColorMap,be=!!T.specularIntensityMap,k=Ct&&!!T.transmissionMap,zt=Ct&&!!T.thicknessMap,it=!!T.gradientMap,mt=!!T.alphaMap,Ht=T.alphaTest>0,Lt=!!T.alphaHash,se=!!T.extensions,Te=ki;T.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Te=i.toneMapping);let ze={shaderID:At,shaderType:T.type,shaderName:T.name,vertexShader:ct,fragmentShader:N,defines:T.defines,customVertexShaderID:G,customFragmentShaderID:H,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:St,batchingColor:St&&W._colorsTexture!==null,instancing:gt,instancingColor:gt&&W.instanceColor!==null,instancingMorph:gt&&W.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:nr,alphaToCoverage:!!T.alphaToCoverage,map:It,matcap:j,envMap:yt,envMapMode:yt&&V.mapping,envMapCubeUVHeight:Q,aoMap:D,lightMap:Vt,bumpMap:bt,normalMap:Tt,displacementMap:u&&Rt,emissiveMap:Zt,normalMapObjectSpace:Tt&&T.normalMapType===zf,normalMapTangentSpace:Tt&&T.normalMapType===Ju,metalnessMap:Ot,roughnessMap:C,anisotropy:M,anisotropyMap:Dt,clearcoat:q,clearcoatMap:Wt,clearcoatNormalMap:jt,clearcoatRoughnessMap:_t,dispersion:lt,iridescence:ft,iridescenceMap:Pt,iridescenceThicknessMap:te,sheen:ht,sheenColorMap:ie,sheenRoughnessMap:Gt,specularMap:ue,specularColorMap:oe,specularIntensityMap:be,transmission:Ct,transmissionMap:k,thicknessMap:zt,gradientMap:it,opaque:T.transparent===!1&&T.blending===ks&&T.alphaToCoverage===!1,alphaMap:mt,alphaTest:Ht,alphaHash:Lt,combine:T.combine,mapUv:It&&x(T.map.channel),aoMapUv:D&&x(T.aoMap.channel),lightMapUv:Vt&&x(T.lightMap.channel),bumpMapUv:bt&&x(T.bumpMap.channel),normalMapUv:Tt&&x(T.normalMap.channel),displacementMapUv:Rt&&x(T.displacementMap.channel),emissiveMapUv:Zt&&x(T.emissiveMap.channel),metalnessMapUv:Ot&&x(T.metalnessMap.channel),roughnessMapUv:C&&x(T.roughnessMap.channel),anisotropyMapUv:Dt&&x(T.anisotropyMap.channel),clearcoatMapUv:Wt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(T.sheenRoughnessMap.channel),specularMapUv:ue&&x(T.specularMap.channel),specularColorMapUv:oe&&x(T.specularColorMap.channel),specularIntensityMapUv:be&&x(T.specularIntensityMap.channel),transmissionMapUv:k&&x(T.transmissionMap.channel),thicknessMapUv:zt&&x(T.thicknessMap.channel),alphaMapUv:mt&&x(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Tt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!st.attributes.uv&&(It||mt),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:pt,skinning:W.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:It&&T.map.isVideoTexture===!0&&Pe.getTransfer(T.map.colorSpace)===Oe,decodeVideoTextureEmissive:Zt&&T.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(T.emissiveMap.colorSpace)===Oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===un,flipSided:T.side===Qe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:se&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&T.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function f(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let U in T.defines)b.push(U),b.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(S(b,T),y(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function S(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){let b=g[T.type],U;if(b){let Y=Sn[b];U=wi.clone(Y.uniforms)}else U=T.uniforms;return U}function z(T,b){let U;for(let Y=0,W=h.length;Y<W;Y++){let X=h[Y];if(X.cacheKey===b){U=X,++U.usedTimes;break}}return U===void 0&&(U=new Cx(i,b,T,r),h.push(U)),U}function E(T){if(--T.usedTimes===0){let b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function w(T){c.remove(T)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:z,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:I}}function Dx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,g,x,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function a(d,u,p,g,x,m){let f=o(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(d,u,p,g,x,m){let f=o(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||Lx),n.length>1&&n.sort(u||xu),s.length>1&&s.sort(u||xu)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ux(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new vu,i.set(n,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new le};break;case"SpotLight":e={position:new R,direction:new R,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Nx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ox=0;function Fx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bx(i){let t=new zx,e=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new de,o=new de;function a(l){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,S=0,y=0,_=0,z=0,E=0,w=0;l.sort(Fx);for(let T=0,b=l.length;T<b;T++){let U=l[T],Y=U.color,W=U.intensity,X=U.distance,st=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Y.r*W,d+=Y.g*W,u+=Y.b*W;else if(U.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(U.sh.coefficients[$],W);w++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let V=U.shadow,Q=e.get(U);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=st,n.directionalShadowMatrix[p]=U.shadow.matrix,S++}n.directional[p]=$,p++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(Y).multiplyScalar(W),$.distance=X,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,n.spot[x]=$;let V=U.shadow;if(U.map&&(n.spotLightMap[z]=U.map,z++,V.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[x]=V.matrix,U.castShadow){let Q=e.get(U);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=st,_++}x++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(Y).multiplyScalar(W),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=$,m++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let V=U.shadow,Q=e.get(U);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=U.shadow.matrix,y++}n.point[g]=$,g++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(W),$.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==z||I.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+z-E,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=z,I.numLightProbes=w,n.version=Ox++)}function c(l,h){let d=0,u=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let y=l[f];if(y.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function _u(i){let t=new Bx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _u(i),t.set(s,[a])):r>=o.length?(a=new _u(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var fl=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pl=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`;function Gx(i,t,e){let n=new Dr,s=new wt,r=new wt,o=new Fe,a=new fl({depthPacking:Uf}),c=new pl,l={},h=e.maxTextureSize,d={[ti]:Qe,[Qe]:ti,[un]:un},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:kx,fragmentShader:Vx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $t(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let f=this.type;this.render=function(E,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let T=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Hi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let W=f!==xi&&this.type===xi,X=f===xi&&this.type!==xi;for(let st=0,$=E.length;st<$;st++){let V=E[st],Q=V.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let At=Q.getFrameExtents();if(s.multiply(At),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/At.x),s.x=r.x*At.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/At.y),s.y=r.y*At.y,Q.mapSize.y=r.y)),Q.map===null||W===!0||X===!0){let vt=this.type!==xi?{minFilter:Un,magFilter:Un}:{};Q.map!==null&&Q.map.dispose(),Q.map=new bi(s.x,s.y,vt),Q.map.texture.name=V.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let rt=Q.getViewportCount();for(let vt=0;vt<rt;vt++){let tt=Q.getViewport(vt);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),Y.viewport(o),Q.updateMatrices(V,vt),n=Q.getFrustum(),_(w,I,Q.camera,V,this.type)}Q.isPointLightShadow!==!0&&this.type===xi&&S(Q,I),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,b,U)};function S(E,w){let I=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bi(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,I,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,I,p,x,null)}function y(E,w,I,T){let b=null,U=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)b=U;else if(b=I.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let Y=b.uuid,W=w.uuid,X=l[Y];X===void 0&&(X={},l[Y]=X);let st=X[W];st===void 0&&(st=b.clone(),X[W]=st,w.addEventListener("dispose",z)),b=st}if(b.visible=w.visible,b.wireframe=w.wireframe,T===xi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Y=i.properties.get(b);Y.light=I}return b}function _(E,w,I,T,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===xi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let W=t.update(E),X=E.material;if(Array.isArray(X)){let st=W.groups;for(let $=0,V=st.length;$<V;$++){let Q=st[$],At=X[Q.materialIndex];if(At&&At.visible){let rt=y(E,At,T,b);E.onBeforeShadow(i,E,w,I,W,rt,Q),i.renderBufferDirect(I,null,W,rt,E,Q),E.onAfterShadow(i,E,w,I,W,rt,Q)}}}else if(X.visible){let st=y(E,X,T,b);E.onBeforeShadow(i,E,w,I,W,st,null),i.renderBufferDirect(I,null,W,st,E,null),E.onAfterShadow(i,E,w,I,W,st,null)}}let Y=E.children;for(let W=0,X=Y.length;W<X;W++)_(Y[W],w,I,T,b)}function z(E){E.target.removeEventListener("dispose",z);for(let I in l){let T=l[I],b=E.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var Wx={[vc]:_c,[yc]:Sc,[Mc]:Ec,[Xs]:bc,[_c]:vc,[Sc]:yc,[Ec]:Mc,[bc]:Xs};function Xx(i,t){function e(){let k=!1,zt=new Fe,it=null,mt=new Fe(0,0,0,0);return{setMask:function(Ht){it!==Ht&&!k&&(i.colorMask(Ht,Ht,Ht,Ht),it=Ht)},setLocked:function(Ht){k=Ht},setClear:function(Ht,Lt,se,Te,ze){ze===!0&&(Ht*=Te,Lt*=Te,se*=Te),zt.set(Ht,Lt,se,Te),mt.equals(zt)===!1&&(i.clearColor(Ht,Lt,se,Te),mt.copy(zt))},reset:function(){k=!1,it=null,mt.set(-1,0,0,0)}}}function n(){let k=!1,zt=!1,it=null,mt=null,Ht=null;return{setReversed:function(Lt){if(zt!==Lt){let se=t.get("EXT_clip_control");zt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);let Te=Ht;Ht=null,this.setClear(Te)}zt=Lt},getReversed:function(){return zt},setTest:function(Lt){Lt?ot(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Lt){it!==Lt&&!k&&(i.depthMask(Lt),it=Lt)},setFunc:function(Lt){if(zt&&(Lt=Wx[Lt]),mt!==Lt){switch(Lt){case vc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Ht!==Lt&&(zt&&(Lt=1-Lt),i.clearDepth(Lt),Ht=Lt)},reset:function(){k=!1,it=null,mt=null,Ht=null,zt=!1}}}function s(){let k=!1,zt=null,it=null,mt=null,Ht=null,Lt=null,se=null,Te=null,ze=null;return{setTest:function(P){k||(P?ot(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(P){zt!==P&&!k&&(i.stencilMask(P),zt=P)},setFunc:function(P,at,Et){(it!==P||mt!==at||Ht!==Et)&&(i.stencilFunc(P,at,Et),it=P,mt=at,Ht=Et)},setOp:function(P,at,Et){(Lt!==P||se!==at||Te!==Et)&&(i.stencilOp(P,at,Et),Lt=P,se=at,Te=Et)},setLocked:function(P){k=P},setClear:function(P){ze!==P&&(i.clearStencil(P),ze=P)},reset:function(){k=!1,zt=null,it=null,mt=null,Ht=null,Lt=null,se=null,Te=null,ze=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,y=null,_=null,z=null,E=null,w=new le(0,0,0),I=0,T=!1,b=null,U=null,Y=null,W=null,X=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,V=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=V>=2);let At=null,rt={},vt=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ct=new Fe().fromArray(vt),N=new Fe().fromArray(tt);function G(k,zt,it,mt){let Ht=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(k,Lt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<it;se++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Ht):i.texImage2D(zt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ht);return Lt}let H={};H[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Xs),bt(!1),Tt(bh),ot(i.CULL_FACE),D(Hi);function ot(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function pt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function gt(k,zt){return d[k]!==zt?(i.bindFramebuffer(k,zt),d[k]=zt,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=zt),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=zt),!0):!1}function St(k,zt){let it=p,mt=!1;if(k){it=u.get(zt),it===void 0&&(it=[],u.set(zt,it));let Ht=k.textures;if(it.length!==Ht.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,se=Ht.length;Lt<se;Lt++)it[Lt]=i.COLOR_ATTACHMENT0+Lt;it.length=Ht.length,mt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,mt=!0);mt&&i.drawBuffers(it)}function It(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let j={[es]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[cf]:i.FUNC_REVERSE_SUBTRACT};j[lf]=i.MIN,j[hf]=i.MAX;let yt={[uf]:i.ZERO,[df]:i.ONE,[ff]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[yf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[Sf]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,zt,it,mt,Ht,Lt,se,Te,ze,P){if(k===Hi){x===!0&&(pt(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),k!==of){if(k!==m||P!==T){if((f!==es||_!==es)&&(i.blendEquation(i.FUNC_ADD),f=es,_=es),P)switch(k){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,y=null,z=null,E=null,w.set(0,0,0),I=0,m=k,T=P}return}Ht=Ht||zt,Lt=Lt||it,se=se||mt,(zt!==f||Ht!==_)&&(i.blendEquationSeparate(j[zt],j[Ht]),f=zt,_=Ht),(it!==S||mt!==y||Lt!==z||se!==E)&&(i.blendFuncSeparate(yt[it],yt[mt],yt[Lt],yt[se]),S=it,y=mt,z=Lt,E=se),(Te.equals(w)===!1||ze!==I)&&(i.blendColor(Te.r,Te.g,Te.b,ze),w.copy(Te),I=ze),m=k,T=!1}function Vt(k,zt){k.side===un?pt(i.CULL_FACE):ot(i.CULL_FACE);let it=k.side===Qe;zt&&(it=!it),bt(it),k.blending===ks&&k.transparent===!1?D(Hi):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let mt=k.stencilWrite;a.setTest(mt),mt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Zt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function Tt(k){k!==nf?(ot(i.CULL_FACE),k!==U&&(k===bh?i.cullFace(i.BACK):k===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),U=k}function Rt(k){k!==Y&&($&&i.lineWidth(k),Y=k)}function Zt(k,zt,it){k?(ot(i.POLYGON_OFFSET_FILL),(W!==zt||X!==it)&&(i.polygonOffset(zt,it),W=zt,X=it)):pt(i.POLYGON_OFFSET_FILL)}function Ot(k){k?ot(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function C(k){k===void 0&&(k=i.TEXTURE0+st-1),At!==k&&(i.activeTexture(k),At=k)}function M(k,zt,it){it===void 0&&(At===null?it=i.TEXTURE0+st-1:it=At);let mt=rt[it];mt===void 0&&(mt={type:void 0,texture:void 0},rt[it]=mt),(mt.type!==k||mt.texture!==zt)&&(At!==it&&(i.activeTexture(it),At=it),i.bindTexture(k,zt||H[k]),mt.type=k,mt.texture=zt)}function q(){let k=rt[At];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(k){ct.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ct.copy(k))}function Gt(k){N.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),N.copy(k))}function ue(k,zt){let it=l.get(zt);it===void 0&&(it=new WeakMap,l.set(zt,it));let mt=it.get(k);mt===void 0&&(mt=i.getUniformBlockIndex(zt,k.name),it.set(k,mt))}function oe(k,zt){let mt=l.get(zt).get(k);c.get(zt)!==mt&&(i.uniformBlockBinding(zt,mt,k.__bindingPointIndex),c.set(zt,mt))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},At=null,rt={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,y=null,_=null,z=null,E=null,w=new le(0,0,0),I=0,T=!1,b=null,U=null,Y=null,W=null,X=null,ct.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:pt,bindFramebuffer:gt,drawBuffers:St,useProgram:It,setBlending:D,setMaterial:Vt,setFlipSided:bt,setCullFace:Tt,setLineWidth:Rt,setPolygonOffset:Zt,setScissorTest:Ot,activeTexture:C,bindTexture:M,unbindTexture:q,compressedTexImage2D:lt,compressedTexImage3D:ft,texImage2D:Pt,texImage3D:te,updateUBOMapping:ue,uniformBlockBinding:oe,texStorage2D:jt,texStorage3D:_t,texSubImage2D:ht,texSubImage3D:Ct,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Wt,scissor:ie,viewport:Gt,reset:be}}function yu(i,t,e,n){let s=qx(n);switch(e){case Xu:return i*t;case Yu:return i*t;case $u:return i*t*2;case Wl:return i*t/s.components*s.byteLength;case Xl:return i*t/s.components*s.byteLength;case Zu:return i*t*2/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case qu:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case Yl:return i*t*4/s.components*s.byteLength;case Do:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:case Ic:return Math.max(i,16)*Math.max(t,8)/4;case Rc:case Pc:return Math.max(i,8)*Math.max(t,8)/2;case Dc:case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case No:case Zc:case jc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ju:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qx(i){switch(i){case yi:case Vu:return{byteLength:1,components:1};case Cr:case Gu:case Wr:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case rs:case kl:case Kn:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):Bo("canvas")}function x(C,M,q){let lt=1,ft=Ot(C);if((ft.width>q||ft.height>q)&&(lt=q/Math.max(ft.width,ft.height)),lt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ht=Math.floor(lt*ft.width),Ct=Math.floor(lt*ft.height);d===void 0&&(d=g(ht,Ct));let Dt=M?g(ht,Ct):d;return Dt.width=ht,Dt.height=Ct,Dt.getContext("2d").drawImage(C,0,0,ht,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+ht+"x"+Ct+")."),Dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,M,q,lt,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ht=M;if(M===i.RED&&(q===i.FLOAT&&(ht=i.R32F),q===i.HALF_FLOAT&&(ht=i.R16F),q===i.UNSIGNED_BYTE&&(ht=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.R8UI),q===i.UNSIGNED_SHORT&&(ht=i.R16UI),q===i.UNSIGNED_INT&&(ht=i.R32UI),q===i.BYTE&&(ht=i.R8I),q===i.SHORT&&(ht=i.R16I),q===i.INT&&(ht=i.R32I)),M===i.RG&&(q===i.FLOAT&&(ht=i.RG32F),q===i.HALF_FLOAT&&(ht=i.RG16F),q===i.UNSIGNED_BYTE&&(ht=i.RG8)),M===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.RG8UI),q===i.UNSIGNED_SHORT&&(ht=i.RG16UI),q===i.UNSIGNED_INT&&(ht=i.RG32UI),q===i.BYTE&&(ht=i.RG8I),q===i.SHORT&&(ht=i.RG16I),q===i.INT&&(ht=i.RG32I)),M===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),q===i.UNSIGNED_INT&&(ht=i.RGB32UI),q===i.BYTE&&(ht=i.RGB8I),q===i.SHORT&&(ht=i.RGB16I),q===i.INT&&(ht=i.RGB32I)),M===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),q===i.UNSIGNED_INT&&(ht=i.RGBA32UI),q===i.BYTE&&(ht=i.RGBA8I),q===i.SHORT&&(ht=i.RGBA16I),q===i.INT&&(ht=i.RGBA32I)),M===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),M===i.RGBA){let Ct=ft?va:Pe.getTransfer(lt);q===i.FLOAT&&(ht=i.RGBA32F),q===i.HALF_FLOAT&&(ht=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ht=Ct===Oe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function _(C,M){let q;return C?M===null||M===rs||M===$s?q=i.DEPTH24_STENCIL8:M===Kn?q=i.DEPTH32F_STENCIL8:M===Cr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rs||M===$s?q=i.DEPTH_COMPONENT24:M===Kn?q=i.DEPTH_COMPONENT32F:M===Cr&&(q=i.DEPTH_COMPONENT16),q}function z(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==Jn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){let M=C.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&h.delete(M)}function w(C){let M=C.target;M.removeEventListener("dispose",w),b(M)}function I(C){let M=n.get(C);if(M.__webglInit===void 0)return;let q=C.source,lt=u.get(q);if(lt){let ft=lt[M.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&T(C),Object.keys(lt).length===0&&u.delete(q)}n.remove(C)}function T(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let q=C.source,lt=u.get(q);delete lt[M.__cacheKey],o.memory.textures--}function b(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(M.__webglFramebuffer[lt]))for(let ft=0;ft<M.__webglFramebuffer[lt].length;ft++)i.deleteFramebuffer(M.__webglFramebuffer[lt][ft]);else i.deleteFramebuffer(M.__webglFramebuffer[lt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[lt])}else{if(Array.isArray(M.__webglFramebuffer))for(let lt=0;lt<M.__webglFramebuffer.length;lt++)i.deleteFramebuffer(M.__webglFramebuffer[lt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let lt=0;lt<M.__webglColorRenderbuffer.length;lt++)M.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[lt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let q=C.textures;for(let lt=0,ft=q.length;lt<ft;lt++){let ht=n.get(q[lt]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(q[lt])}n.remove(C)}let U=0;function Y(){U=0}function W(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function X(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function st(C,M){let q=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let lt=C.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(q,C,M);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function $(C,M){let q=n.get(C);if(C.version>0&&q.__version!==C.version){N(q,C,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function V(C,M){let q=n.get(C);if(C.version>0&&q.__version!==C.version){N(q,C,M);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function Q(C,M){let q=n.get(C);if(C.version>0&&q.__version!==C.version){G(q,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}let At={[Rr]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[Ac]:i.MIRRORED_REPEAT},rt={[Un]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},vt={[Nf]:i.NEVER,[Vf]:i.ALWAYS,[Of]:i.LESS,[Ku]:i.LEQUAL,[Ff]:i.EQUAL,[kf]:i.GEQUAL,[Bf]:i.GREATER,[Hf]:i.NOTEQUAL};function tt(C,M){if(M.type===Kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Jn||M.magFilter===Na||M.magFilter===Jr||M.magFilter===ss||M.minFilter===Jn||M.minFilter===Na||M.minFilter===Jr||M.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,At[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,At[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,At[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,rt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Jr&&M.minFilter!==ss||M.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ct(C,M){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));let lt=M.source,ft=u.get(lt);ft===void 0&&(ft={},u.set(lt,ft));let ht=X(M);if(ht!==C.__cacheKey){ft[ht]===void 0&&(ft[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ft[ht].usedTimes++;let Ct=ft[C.__cacheKey];Ct!==void 0&&(ft[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&T(M)),C.__cacheKey=ht,C.__webglTexture=ft[ht].texture}return q}function N(C,M,q){let lt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(lt=i.TEXTURE_3D);let ft=ct(C,M),ht=M.source;e.bindTexture(lt,C.__webglTexture,i.TEXTURE0+q);let Ct=n.get(ht);if(ht.version!==Ct.__version||ft===!0){e.activeTexture(i.TEXTURE0+q);let Dt=Pe.getPrimaries(Pe.workingColorSpace),Wt=M.colorSpace===Fi?null:Pe.getPrimaries(M.colorSpace),jt=M.colorSpace===Fi||Dt===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let _t=x(M.image,!1,s.maxTextureSize);_t=Zt(M,_t);let Pt=r.convert(M.format,M.colorSpace),te=r.convert(M.type),ie=y(M.internalFormat,Pt,te,M.colorSpace,M.isVideoTexture);tt(lt,M);let Gt,ue=M.mipmaps,oe=M.isVideoTexture!==!0,be=Ct.__version===void 0||ft===!0,k=ht.dataReady,zt=z(M,_t);if(M.isDepthTexture)ie=_(M.format===Zs,M.type),be&&(oe?e.texStorage2D(i.TEXTURE_2D,1,ie,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,ie,_t.width,_t.height,0,Pt,te,null));else if(M.isDataTexture)if(ue.length>0){oe&&be&&e.texStorage2D(i.TEXTURE_2D,zt,ie,ue[0].width,ue[0].height);for(let it=0,mt=ue.length;it<mt;it++)Gt=ue[it],oe?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Gt.width,Gt.height,Pt,te,Gt.data):e.texImage2D(i.TEXTURE_2D,it,ie,Gt.width,Gt.height,0,Pt,te,Gt.data);M.generateMipmaps=!1}else oe?(be&&e.texStorage2D(i.TEXTURE_2D,zt,ie,_t.width,_t.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,Pt,te,_t.data)):e.texImage2D(i.TEXTURE_2D,0,ie,_t.width,_t.height,0,Pt,te,_t.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,ie,ue[0].width,ue[0].height,_t.depth);for(let it=0,mt=ue.length;it<mt;it++)if(Gt=ue[it],M.format!==Yn)if(Pt!==null)if(oe){if(k)if(M.layerUpdates.size>0){let Ht=yu(Gt.width,Gt.height,M.format,M.type);for(let Lt of M.layerUpdates){let se=Gt.data.subarray(Lt*Ht/Gt.data.BYTES_PER_ELEMENT,(Lt+1)*Ht/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Lt,Gt.width,Gt.height,1,Pt,se)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Gt.width,Gt.height,_t.depth,Pt,Gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,ie,Gt.width,Gt.height,_t.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Gt.width,Gt.height,_t.depth,Pt,te,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,ie,Gt.width,Gt.height,_t.depth,0,Pt,te,Gt.data)}else{oe&&be&&e.texStorage2D(i.TEXTURE_2D,zt,ie,ue[0].width,ue[0].height);for(let it=0,mt=ue.length;it<mt;it++)Gt=ue[it],M.format!==Yn?Pt!==null?oe?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Gt.width,Gt.height,Pt,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,ie,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Gt.width,Gt.height,Pt,te,Gt.data):e.texImage2D(i.TEXTURE_2D,it,ie,Gt.width,Gt.height,0,Pt,te,Gt.data)}else if(M.isDataArrayTexture)if(oe){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,ie,_t.width,_t.height,_t.depth),k)if(M.layerUpdates.size>0){let it=yu(_t.width,_t.height,M.format,M.type);for(let mt of M.layerUpdates){let Ht=_t.data.subarray(mt*it/_t.data.BYTES_PER_ELEMENT,(mt+1)*it/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,_t.width,_t.height,1,Pt,te,Ht)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Pt,te,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,_t.width,_t.height,_t.depth,0,Pt,te,_t.data);else if(M.isData3DTexture)oe?(be&&e.texStorage3D(i.TEXTURE_3D,zt,ie,_t.width,_t.height,_t.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Pt,te,_t.data)):e.texImage3D(i.TEXTURE_3D,0,ie,_t.width,_t.height,_t.depth,0,Pt,te,_t.data);else if(M.isFramebufferTexture){if(be)if(oe)e.texStorage2D(i.TEXTURE_2D,zt,ie,_t.width,_t.height);else{let it=_t.width,mt=_t.height;for(let Ht=0;Ht<zt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,ie,it,mt,0,Pt,te,null),it>>=1,mt>>=1}}else if(ue.length>0){if(oe&&be){let it=Ot(ue[0]);e.texStorage2D(i.TEXTURE_2D,zt,ie,it.width,it.height)}for(let it=0,mt=ue.length;it<mt;it++)Gt=ue[it],oe?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Pt,te,Gt):e.texImage2D(i.TEXTURE_2D,it,ie,Pt,te,Gt);M.generateMipmaps=!1}else if(oe){if(be){let it=Ot(_t);e.texStorage2D(i.TEXTURE_2D,zt,ie,it.width,it.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,te,_t)}else e.texImage2D(i.TEXTURE_2D,0,ie,Pt,te,_t);m(M)&&f(lt),Ct.__version=ht.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,q){if(M.image.length!==6)return;let lt=ct(C,M),ft=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let ht=n.get(ft);if(ft.version!==ht.__version||lt===!0){e.activeTexture(i.TEXTURE0+q);let Ct=Pe.getPrimaries(Pe.workingColorSpace),Dt=M.colorSpace===Fi?null:Pe.getPrimaries(M.colorSpace),Wt=M.colorSpace===Fi||Ct===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let jt=M.isCompressedTexture||M.image[0].isCompressedTexture,_t=M.image[0]&&M.image[0].isDataTexture,Pt=[];for(let mt=0;mt<6;mt++)!jt&&!_t?Pt[mt]=x(M.image[mt],!0,s.maxCubemapSize):Pt[mt]=_t?M.image[mt].image:M.image[mt],Pt[mt]=Zt(M,Pt[mt]);let te=Pt[0],ie=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type),ue=y(M.internalFormat,ie,Gt,M.colorSpace),oe=M.isVideoTexture!==!0,be=ht.__version===void 0||lt===!0,k=ft.dataReady,zt=z(M,te);tt(i.TEXTURE_CUBE_MAP,M);let it;if(jt){oe&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ue,te.width,te.height);for(let mt=0;mt<6;mt++){it=Pt[mt].mipmaps;for(let Ht=0;Ht<it.length;Ht++){let Lt=it[Ht];M.format!==Yn?ie!==null?oe?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,0,0,Lt.width,Lt.height,ie,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,ue,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,0,0,Lt.width,Lt.height,ie,Gt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht,ue,Lt.width,Lt.height,0,ie,Gt,Lt.data)}}}else{if(it=M.mipmaps,oe&&be){it.length>0&&zt++;let mt=Ot(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ue,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(_t){oe?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Pt[mt].width,Pt[mt].height,ie,Gt,Pt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ue,Pt[mt].width,Pt[mt].height,0,ie,Gt,Pt[mt].data);for(let Ht=0;Ht<it.length;Ht++){let se=it[Ht].image[mt].image;oe?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,0,0,se.width,se.height,ie,Gt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,ue,se.width,se.height,0,ie,Gt,se.data)}}else{oe?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ie,Gt,Pt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ue,ie,Gt,Pt[mt]);for(let Ht=0;Ht<it.length;Ht++){let Lt=it[Ht];oe?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,0,0,ie,Gt,Lt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ht+1,ue,ie,Gt,Lt.image[mt])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),ht.__version=ft.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function H(C,M,q,lt,ft,ht){let Ct=r.convert(q.format,q.colorSpace),Dt=r.convert(q.type),Wt=y(q.internalFormat,Ct,Dt,q.colorSpace),jt=n.get(M),_t=n.get(q);if(_t.__renderTarget=M,!jt.__hasExternalTextures){let Pt=Math.max(1,M.width>>ht),te=Math.max(1,M.height>>ht);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,ht,Wt,Pt,te,M.depth,0,Ct,Dt,null):e.texImage2D(ft,ht,Wt,Pt,te,0,Ct,Dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Tt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ft,_t.__webglTexture,0,bt(M)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ft,_t.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let lt=M.depthTexture,ft=lt&&lt.isDepthTexture?lt.type:null,ht=_(M.stencilBuffer,ft),Ct=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=bt(M);Tt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,ht,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{let lt=M.textures;for(let ft=0;ft<lt.length;ft++){let ht=lt[ft],Ct=r.convert(ht.format,ht.colorSpace),Dt=r.convert(ht.type),Wt=y(ht.internalFormat,Ct,Dt,ht.colorSpace),jt=bt(M);q&&Tt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Wt,M.width,M.height):Tt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,Wt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Wt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=n.get(M.depthTexture);lt.__renderTarget=M,(!lt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),st(M.depthTexture,0);let ft=lt.__webglTexture,ht=bt(M);if(M.depthTexture.format===Vs)Tt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(M.depthTexture.format===Zs)Tt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function gt(C){let M=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let lt=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),lt){let ft=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,lt.removeEventListener("dispose",ft)};lt.addEventListener("dispose",ft),M.__depthDisposeCallback=ft}M.__boundDepthTexture=lt}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,C)}else if(q){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]===void 0)M.__webglDepthbuffer[lt]=i.createRenderbuffer(),ot(M.__webglDepthbuffer[lt],C,!1);else{let ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,ht)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ot(M.__webglDepthbuffer,C,!1);else{let lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(C,M,q){let lt=n.get(C);M!==void 0&&H(lt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&gt(C)}function It(C){let M=C.texture,q=n.get(C),lt=n.get(M);C.addEventListener("dispose",w);let ft=C.textures,ht=C.isWebGLCubeRenderTarget===!0,Ct=ft.length>1;if(Ct||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=M.version,o.memory.textures++),ht){q.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Dt]=[];for(let Wt=0;Wt<M.mipmaps.length;Wt++)q.__webglFramebuffer[Dt][Wt]=i.createFramebuffer()}else q.__webglFramebuffer[Dt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Dt=0;Dt<M.mipmaps.length;Dt++)q.__webglFramebuffer[Dt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let Dt=0,Wt=ft.length;Dt<Wt;Dt++){let jt=n.get(ft[Dt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Tt(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Dt=0;Dt<ft.length;Dt++){let Wt=ft[Dt];q.__webglColorRenderbuffer[Dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Dt]);let jt=r.convert(Wt.format,Wt.colorSpace),_t=r.convert(Wt.type),Pt=y(Wt.internalFormat,jt,_t,Wt.colorSpace,C.isXRRenderTarget===!0),te=bt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Pt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,M);for(let Dt=0;Dt<6;Dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)H(q.__webglFramebuffer[Dt][Wt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Wt);else H(q.__webglFramebuffer[Dt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let Dt=0,Wt=ft.length;Dt<Wt;Dt++){let jt=ft[Dt],_t=n.get(jt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),tt(i.TEXTURE_2D,jt),H(q.__webglFramebuffer,C,jt,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,0),m(jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,lt.__webglTexture),tt(Dt,M),M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)H(q.__webglFramebuffer[Wt],C,M,i.COLOR_ATTACHMENT0,Dt,Wt);else H(q.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,Dt,0);m(M)&&f(Dt),e.unbindTexture()}C.depthBuffer&&gt(C)}function j(C){let M=C.textures;for(let q=0,lt=M.length;q<lt;q++){let ft=M[q];if(m(ft)){let ht=S(C),Ct=n.get(ft).__webglTexture;e.bindTexture(ht,Ct),f(ht),e.unbindTexture()}}}let yt=[],D=[];function Vt(C){if(C.samples>0){if(Tt(C)===!1){let M=C.textures,q=C.width,lt=C.height,ft=i.COLOR_BUFFER_BIT,ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),Dt=M.length>1;if(Dt)for(let Wt=0;Wt<M.length;Wt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Wt=0;Wt<M.length;Wt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),Dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Wt]);let jt=n.get(M[Wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,q,lt,0,0,q,lt,ft,i.NEAREST),c===!0&&(yt.length=0,D.length=0,yt.push(i.COLOR_ATTACHMENT0+Wt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(yt.push(ht),D.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Dt)for(let Wt=0;Wt<M.length;Wt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Wt]);let jt=n.get(M[Wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function bt(C){return Math.min(s.maxSamples,C.samples)}function Tt(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Zt(C,M){let q=C.colorSpace,lt=C.format,ft=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==nr&&q!==Fi&&(Pe.getTransfer(q)===Oe?(lt!==Yn||ft!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=st,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=St,this.setupRenderTarget=It,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Tt}function $x(i,t){function e(n,s=Fi){let r,o=Pe.getTransfer(s);if(n===yi)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Wr)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===Yn)return i.RGBA;if(n===Yu)return i.LUMINANCE;if(n===$u)return i.LUMINANCE_ALPHA;if(n===Vs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===Zu)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===Do||n===Lo||n===Uo||n===zo)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Pc||n===Ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Lc||n===Uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Lc)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zc||n===Nc||n===Oc||n===Fc||n===Bc||n===Hc||n===kc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===Zc||n===jc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ju||n===Jc||n===Kc||n===Qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ml=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zx={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
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

}`,gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new An,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:jx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xl=class extends Mi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null,x=new gl,m=e.getContextAttributes(),f=null,S=null,y=[],_=[],z=new wt,E=null,w=new bn;w.viewport=new Fe;let I=new bn;I.viewport=new Fe;let T=[w,I],b=new ml,U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=y[N];return G===void 0&&(G=new Er,y[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=y[N];return G===void 0&&(G=new Er,y[N]=G),G.getGripSpace()},this.getHand=function(N){let G=y[N];return G===void 0&&(G=new Er,y[N]=G),G.getHandSpace()};function W(N){let G=_.indexOf(N.inputSource);if(G===-1)return;let H=y[G];H!==void 0&&(H.update(N.inputSource,N.frame,l||o),H.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",st);for(let N=0;N<y.length;N++){let G=_[N];G!==null&&(_[N]=null,y[N].disconnect(G))}U=null,Y=null,x.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,S=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){let G={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new bi(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let G=null,H=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=m.stencil?Zs:Vs,H=m.stencil?$s:rs);let pt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new bi(u.textureWidth,u.textureHeight,{format:Yn,type:yi,depthTexture:new $o(u.textureWidth,u.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st(N){for(let G=0;G<N.removed.length;G++){let H=N.removed[G],ot=_.indexOf(H);ot>=0&&(_[ot]=null,y[ot].disconnect(H))}for(let G=0;G<N.added.length;G++){let H=N.added[G],ot=_.indexOf(H);if(ot===-1){for(let gt=0;gt<y.length;gt++)if(gt>=_.length){_.push(H),ot=gt;break}else if(_[gt]===null){_[gt]=H,ot=gt;break}if(ot===-1)break}let pt=y[ot];pt&&pt.connect(H)}}let $=new R,V=new R;function Q(N,G,H){$.setFromMatrixPosition(G.matrixWorld),V.setFromMatrixPosition(H.matrixWorld);let ot=$.distanceTo(V),pt=G.projectionMatrix.elements,gt=H.projectionMatrix.elements,St=pt[14]/(pt[10]-1),It=pt[14]/(pt[10]+1),j=(pt[9]+1)/pt[5],yt=(pt[9]-1)/pt[5],D=(pt[8]-1)/pt[0],Vt=(gt[8]+1)/gt[0],bt=St*D,Tt=St*Vt,Rt=ot/(-D+Vt),Zt=Rt*-D;if(G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Zt),N.translateZ(Rt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),pt[10]===-1)N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let Ot=St+Rt,C=It+Rt,M=bt-Zt,q=Tt+(ot-Zt),lt=j*It/C*Ot,ft=yt*It/C*Ot;N.projectionMatrix.makePerspective(M,q,lt,ft,Ot,C),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function At(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let G=N.near,H=N.far;x.texture!==null&&(x.depthNear>0&&(G=x.depthNear),x.depthFar>0&&(H=x.depthFar)),b.near=I.near=w.near=G,b.far=I.far=w.far=H,(U!==b.near||Y!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,Y=b.far),w.layers.mask=N.layers.mask|2,I.layers.mask=N.layers.mask|4,b.layers.mask=w.layers.mask|I.layers.mask;let ot=N.parent,pt=b.cameras;At(b,ot);for(let gt=0;gt<pt.length;gt++)At(pt[gt],ot);pt.length===2?Q(b,w,I):b.projectionMatrix.copy(w.projectionMatrix),rt(N,b,ot)};function rt(N,G,H){H===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(H.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Pr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(N){c=N,u!==null&&(u.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let vt=null;function tt(N,G){if(h=G.getViewerPose(l||o),g=G,h!==null){let H=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;H.length!==b.cameras.length&&(b.cameras.length=0,ot=!0);for(let gt=0;gt<H.length;gt++){let St=H[gt],It=null;if(p!==null)It=p.getViewport(St);else{let yt=d.getViewSubImage(u,St);It=yt.viewport,gt===0&&(t.setRenderTargetTextures(S,yt.colorTexture,u.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(S))}let j=T[gt];j===void 0&&(j=new bn,j.layers.enable(gt),j.viewport=new Fe,T[gt]=j),j.matrix.fromArray(St.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(St.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ot===!0&&b.cameras.push(j)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let gt=d.getDepthInformation(H[0]);gt&&gt.isValid&&gt.texture&&x.init(t,gt,s.renderState)}}for(let H=0;H<y.length;H++){let ot=_[H],pt=y[H];ot!==null&&pt!==void 0&&pt.update(ot,G,l||o)}vt&&vt(N,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let ct=new nd;ct.setAnimationLoop(tt),this.setAnimationLoop=function(N){vt=N},this.dispose=function(){}}},Qi=new ei,Kx=new de;function Qx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ed(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,Qi.copy(_),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(Qi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){let _=y.program;n.uniformBlockBinding(S,_)}function l(S,y){let _=s[S.id];_===void 0&&(g(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",m));let z=y.program;n.updateUBOMapping(S,z);let E=t.render.frame;r[S.id]!==E&&(u(S),r[S.id]=E)}function h(S){let y=d();S.__bindingPointIndex=y;let _=i.createBuffer(),z=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,z,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let y=s[S.id],_=S.uniforms,z=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,w=_.length;E<w;E++){let I=Array.isArray(_[E])?_[E]:[_[E]];for(let T=0,b=I.length;T<b;T++){let U=I[T];if(p(U,E,T,z)===!0){let Y=U.__offset,W=Array.isArray(U.value)?U.value:[U.value],X=0;for(let st=0;st<W.length;st++){let $=W[st],V=x($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,Y+X,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,y,_,z){let E=S.value,w=y+"_"+_;if(z[w]===void 0)return typeof E=="number"||typeof E=="boolean"?z[w]=E:z[w]=E.clone(),!0;{let I=z[w];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return z[w]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(S){let y=S.uniforms,_=0,z=16;for(let w=0,I=y.length;w<I;w++){let T=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,U=T.length;b<U;b++){let Y=T[b],W=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,st=W.length;X<st;X++){let $=W[X],V=x($),Q=_%z,At=Q%V.boundary,rt=Q+At;_+=At,rt!==0&&z-rt<V.storage&&(_+=z-rt),Y.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=_,_+=V.storage}}}let E=_%z;return E>0&&(_+=z-E),S.__size=_,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Zo=class{constructor(t={}){let{canvas:e=rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=ki,this.toneMappingExposure=1;let _=this,z=!1,E=0,w=0,I=null,T=-1,b=null,U=new Fe,Y=new Fe,W=null,X=new le(0),st=0,$=e.width,V=e.height,Q=1,At=null,rt=null,vt=new Fe(0,0,$,V),tt=new Fe(0,0,$,V),ct=!1,N=new Dr,G=!1,H=!1,ot=new de,pt=new de,gt=new R,St=new Fe,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function yt(){return I===null?Q:1}let D=n;function Vt(A,F){return e.getContext(A,F)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),D===null){let F="webgl2";if(D=Vt(F,A),D===null)throw Vt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let bt,Tt,Rt,Zt,Ot,C,M,q,lt,ft,ht,Ct,Dt,Wt,jt,_t,Pt,te,ie,Gt,ue,oe,be,k;function zt(){bt=new g0(D),bt.init(),oe=new $x(D,bt),Tt=new h0(D,bt,t,oe),Rt=new Xx(D,bt),Tt.reverseDepthBuffer&&u&&Rt.buffers.depth.setReversed(!0),Zt=new _0(D),Ot=new Dx,C=new Yx(D,bt,Rt,Ot,Tt,oe,Zt),M=new d0(_),q=new m0(_),lt=new Tp(D),be=new c0(D,lt),ft=new x0(D,lt,Zt,be),ht=new M0(D,ft,lt,Zt),ie=new y0(D,Tt,C),_t=new u0(Ot),Ct=new Ix(_,M,q,bt,Tt,be,_t),Dt=new Qx(_,Ot),Wt=new Ux,jt=new Hx(bt),te=new a0(_,M,q,Rt,ht,p,c),Pt=new Gx(_,ht,Tt),k=new tv(D,Zt,Tt,Rt),Gt=new l0(D,bt,Zt),ue=new v0(D,bt,Zt),Zt.programs=Ct.programs,_.capabilities=Tt,_.extensions=bt,_.properties=Ot,_.renderLists=Wt,_.shadowMap=Pt,_.state=Rt,_.info=Zt}zt();let it=new xl(_,D);this.xr=it,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize($,V,!1))},this.getSize=function(A){return A.set($,V)},this.setSize=function(A,F,Z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,V=F,e.width=Math.floor(A*Q),e.height=Math.floor(F*Q),Z===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set($*Q,V*Q).floor()},this.setDrawingBufferSize=function(A,F,Z){$=A,V=F,Q=Z,e.width=Math.floor(A*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,F,Z,K){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,F,Z,K),Rt.viewport(U.copy(vt).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,F,Z,K){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,F,Z,K),Rt.scissor(Y.copy(tt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){Rt.setScissorTest(ct=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,F=!0,Z=!0){let K=0;if(A){let v=!1;if(I!==null){let L=I.texture.format;v=L===Yl||L===ql||L===Xl}if(v){let L=I.texture.type,B=L===yi||L===rs||L===Cr||L===$s||L===Vl||L===Gl,J=te.getClearColor(),et=te.getClearAlpha(),Mt=J.r,dt=J.g,xt=J.b;B?(g[0]=Mt,g[1]=dt,g[2]=xt,g[3]=et,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Mt,x[1]=dt,x[2]=xt,x[3]=et,D.clearBufferiv(D.COLOR,0,x))}else K|=D.COLOR_BUFFER_BIT}F&&(K|=D.DEPTH_BUFFER_BIT),Z&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Wt.dispose(),jt.dispose(),Ot.dispose(),M.dispose(),q.dispose(),ht.dispose(),be.dispose(),k.dispose(),Ct.dispose(),it.dispose(),it.removeEventListener("sessionstart",Xt),it.removeEventListener("sessionend",ne),we.stop()};function mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let A=Zt.autoReset,F=Pt.enabled,Z=Pt.autoUpdate,K=Pt.needsUpdate,v=Pt.type;zt(),Zt.autoReset=A,Pt.enabled=F,Pt.autoUpdate=Z,Pt.needsUpdate=K,Pt.type=v}function Lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){let F=A.target;F.removeEventListener("dispose",se),Te(F)}function Te(A){ze(A),Ot.remove(A)}function ze(A){let F=Ot.get(A).programs;F!==void 0&&(F.forEach(function(Z){Ct.releaseProgram(Z)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Z,K,v,L){F===null&&(F=It);let B=v.isMesh&&v.matrixWorld.determinant()<0,J=he(A,F,Z,K,v);Rt.setMaterial(K,B);let et=Z.index,Mt=1;if(K.wireframe===!0){if(et=ft.getWireframeAttribute(Z),et===void 0)return;Mt=2}let dt=Z.drawRange,xt=Z.attributes.position,Jt=dt.start*Mt,kt=(dt.start+dt.count)*Mt;L!==null&&(Jt=Math.max(Jt,L.start*Mt),kt=Math.min(kt,(L.start+L.count)*Mt)),et!==null?(Jt=Math.max(Jt,0),kt=Math.min(kt,et.count)):xt!=null&&(Jt=Math.max(Jt,0),kt=Math.min(kt,xt.count));let fe=kt-Jt;if(fe<0||fe===1/0)return;be.setup(v,K,J,Z,et);let Se,ut=Gt;if(et!==null&&(Se=lt.get(et),ut=ue,ut.setIndex(Se)),v.isMesh)K.wireframe===!0?(Rt.setLineWidth(K.wireframeLinewidth*yt()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(v.isLine){let Ft=K.linewidth;Ft===void 0&&(Ft=1),Rt.setLineWidth(Ft*yt()),v.isLineSegments?ut.setMode(D.LINES):v.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else v.isPoints?ut.setMode(D.POINTS):v.isSprite&&ut.setMode(D.TRIANGLES);if(v.isBatchedMesh)if(v._multiDrawInstances!==null)ut.renderMultiDrawInstances(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount,v._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))ut.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else{let Ft=v._multiDrawStarts,ae=v._multiDrawCounts,Bt=v._multiDrawCount,_e=et?lt.get(et).bytesPerElement:1,Ee=Ot.get(K).currentProgram.getUniforms();for(let me=0;me<Bt;me++)Ee.setValue(D,"_gl_DrawID",me),ut.render(Ft[me]/_e,ae[me])}else if(v.isInstancedMesh)ut.renderInstances(Jt,fe,v.count);else if(Z.isInstancedBufferGeometry){let Ft=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ae=Math.min(Z.instanceCount,Ft);ut.renderInstances(Jt,fe,ae)}else ut.render(Jt,fe)};function P(A,F,Z){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=Qe,A.needsUpdate=!0,O(A,F,Z),A.side=ti,A.needsUpdate=!0,O(A,F,Z),A.side=un):O(A,F,Z)}this.compile=function(A,F,Z=null){Z===null&&(Z=A),f=jt.get(Z),f.init(F),y.push(f),Z.traverseVisible(function(v){v.isLight&&v.layers.test(F.layers)&&(f.pushLight(v),v.castShadow&&f.pushShadow(v))}),A!==Z&&A.traverseVisible(function(v){v.isLight&&v.layers.test(F.layers)&&(f.pushLight(v),v.castShadow&&f.pushShadow(v))}),f.setupLights();let K=new Set;return A.traverse(function(v){if(!(v.isMesh||v.isPoints||v.isLine||v.isSprite))return;let L=v.material;if(L)if(Array.isArray(L))for(let B=0;B<L.length;B++){let J=L[B];P(J,Z,v),K.add(J)}else P(L,Z,v),K.add(L)}),y.pop(),f=null,K},this.compileAsync=function(A,F,Z=null){let K=this.compile(A,F,Z);return new Promise(v=>{function L(){if(K.forEach(function(B){Ot.get(B).currentProgram.isReady()&&K.delete(B)}),K.size===0){v(A);return}setTimeout(L,10)}bt.get("KHR_parallel_shader_compile")!==null?L():setTimeout(L,10)})};let at=null;function Et(A){at&&at(A)}function Xt(){we.stop()}function ne(){we.start()}let we=new nd;we.setAnimationLoop(Et),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(A){at=A,it.setAnimationLoop(A),A===null?we.stop():we.start()},it.addEventListener("sessionstart",Xt),it.addEventListener("sessionend",ne),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,F,I),f=jt.get(A,y.length),f.init(F),y.push(f),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),N.setFromProjectionMatrix(pt),H=this.localClippingEnabled,G=_t.init(this.clippingPlanes,H),m=Wt.get(A,S.length),m.init(),S.push(m),it.enabled===!0&&it.isPresenting===!0){let L=_.xr.getDepthSensingMesh();L!==null&&ve(L,F,-1/0,_.sortObjects)}ve(A,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(At,rt),j=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,j&&te.addToRenderList(m,A),this.info.render.frame++,G===!0&&_t.beginShadows();let Z=f.state.shadowsArray;Pt.render(Z,A,F),G===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,v=m.transmissive;if(f.setupLights(),F.isArrayCamera){let L=F.cameras;if(v.length>0)for(let B=0,J=L.length;B<J;B++){let et=L[B];Ne(K,v,A,et)}j&&te.render(A);for(let B=0,J=L.length;B<J;B++){let et=L[B];Ce(m,A,et,et.viewport)}}else v.length>0&&Ne(K,v,A,F),j&&te.render(A),Ce(m,A,F);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,F),be.resetDefaultState(),T=-1,b=null,y.pop(),y.length>0?(f=y[y.length-1],G===!0&&_t.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ve(A,F,Z,K){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||N.intersectsSprite(A)){K&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);let B=ht.update(A),J=A.material;J.visible&&m.push(A,B,J,Z,St.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||N.intersectsObject(A))){let B=ht.update(A),J=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(B.boundingSphere===null&&B.computeBoundingSphere(),St.copy(B.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(J)){let et=B.groups;for(let Mt=0,dt=et.length;Mt<dt;Mt++){let xt=et[Mt],Jt=J[xt.materialIndex];Jt&&Jt.visible&&m.push(A,B,Jt,Z,St.z,xt)}}else J.visible&&m.push(A,B,J,Z,St.z,null)}}let L=A.children;for(let B=0,J=L.length;B<J;B++)ve(L[B],F,Z,K)}function Ce(A,F,Z,K){let v=A.opaque,L=A.transmissive,B=A.transparent;f.setupLightsView(Z),G===!0&&_t.setGlobalState(_.clippingPlanes,Z),K&&Rt.viewport(U.copy(K)),v.length>0&&Tn(v,F,Z),L.length>0&&Tn(L,F,Z),B.length>0&&Tn(B,F,Z),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Ne(A,F,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new bi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Wr:yi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));let L=f.state.transmissionRenderTarget[K.id],B=K.viewport||U;L.setSize(B.z,B.w);let J=_.getRenderTarget();_.setRenderTarget(L),_.getClearColor(X),st=_.getClearAlpha(),st<1&&_.setClearColor(16777215,.5),_.clear(),j&&te.render(Z);let et=_.toneMapping;_.toneMapping=ki;let Mt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),G===!0&&_t.setGlobalState(_.clippingPlanes,K),Tn(A,Z,K),C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L),bt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let xt=0,Jt=F.length;xt<Jt;xt++){let kt=F[xt],fe=kt.object,Se=kt.geometry,ut=kt.material,Ft=kt.group;if(ut.side===un&&fe.layers.test(K.layers)){let ae=ut.side;ut.side=Qe,ut.needsUpdate=!0,Vn(fe,Z,K,Se,ut,Ft),ut.side=ae,ut.needsUpdate=!0,dt=!0}}dt===!0&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L))}_.setRenderTarget(J),_.setClearColor(X,st),Mt!==void 0&&(K.viewport=Mt),_.toneMapping=et}function Tn(A,F,Z){let K=F.isScene===!0?F.overrideMaterial:null;for(let v=0,L=A.length;v<L;v++){let B=A[v],J=B.object,et=B.geometry,Mt=K===null?B.material:K,dt=B.group;J.layers.test(Z.layers)&&Vn(J,F,Z,et,Mt,dt)}}function Vn(A,F,Z,K,v,L){A.onBeforeRender(_,F,Z,K,v,L),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),v.onBeforeRender(_,F,Z,K,A,L),v.transparent===!0&&v.side===un&&v.forceSinglePass===!1?(v.side=Qe,v.needsUpdate=!0,_.renderBufferDirect(Z,F,K,v,A,L),v.side=ti,v.needsUpdate=!0,_.renderBufferDirect(Z,F,K,v,A,L),v.side=un):_.renderBufferDirect(Z,F,K,v,A,L),A.onAfterRender(_,F,Z,K,v,L)}function O(A,F,Z){F.isScene!==!0&&(F=It);let K=Ot.get(A),v=f.state.lights,L=f.state.shadowsArray,B=v.state.version,J=Ct.getParameters(A,v.state,L,F,Z),et=Ct.getProgramCacheKey(J),Mt=K.programs;K.environment=A.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(A.isMeshStandardMaterial?q:M).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Mt===void 0&&(A.addEventListener("dispose",se),Mt=new Map,K.programs=Mt);let dt=Mt.get(et);if(dt!==void 0){if(K.currentProgram===dt&&K.lightsStateVersion===B)return Nt(A,J),dt}else J.uniforms=Ct.getUniforms(A),A.onBeforeCompile(J,_),dt=Ct.acquireProgram(J,et),Mt.set(et,dt),K.uniforms=J.uniforms;let xt=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(xt.clippingPlanes=_t.uniform),Nt(A,J),K.needsLights=ce(A),K.lightsStateVersion=B,K.needsLights&&(xt.ambientLightColor.value=v.state.ambient,xt.lightProbe.value=v.state.probe,xt.directionalLights.value=v.state.directional,xt.directionalLightShadows.value=v.state.directionalShadow,xt.spotLights.value=v.state.spot,xt.spotLightShadows.value=v.state.spotShadow,xt.rectAreaLights.value=v.state.rectArea,xt.ltc_1.value=v.state.rectAreaLTC1,xt.ltc_2.value=v.state.rectAreaLTC2,xt.pointLights.value=v.state.point,xt.pointLightShadows.value=v.state.pointShadow,xt.hemisphereLights.value=v.state.hemi,xt.directionalShadowMap.value=v.state.directionalShadowMap,xt.directionalShadowMatrix.value=v.state.directionalShadowMatrix,xt.spotShadowMap.value=v.state.spotShadowMap,xt.spotLightMatrix.value=v.state.spotLightMatrix,xt.spotLightMap.value=v.state.spotLightMap,xt.pointShadowMap.value=v.state.pointShadowMap,xt.pointShadowMatrix.value=v.state.pointShadowMatrix),K.currentProgram=dt,K.uniformsList=null,dt}function nt(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Ws.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Nt(A,F){let Z=Ot.get(A);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function he(A,F,Z,K,v){F.isScene!==!0&&(F=It),C.resetTextureUnits();let L=F.fog,B=K.isMeshStandardMaterial?F.environment:null,J=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:nr,et=(K.isMeshStandardMaterial?q:M).get(K.envMap||B),Mt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,dt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),xt=!!Z.morphAttributes.position,Jt=!!Z.morphAttributes.normal,kt=!!Z.morphAttributes.color,fe=ki;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(fe=_.toneMapping);let Se=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ut=Se!==void 0?Se.length:0,Ft=Ot.get(K),ae=f.state.lights;if(G===!0&&(H===!0||A!==b)){let Le=A===b&&K.id===T;_t.setState(K,A,Le)}let Bt=!1;K.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ae.state.version||Ft.outputColorSpace!==J||v.isBatchedMesh&&Ft.batching===!1||!v.isBatchedMesh&&Ft.batching===!0||v.isBatchedMesh&&Ft.batchingColor===!0&&v.colorTexture===null||v.isBatchedMesh&&Ft.batchingColor===!1&&v.colorTexture!==null||v.isInstancedMesh&&Ft.instancing===!1||!v.isInstancedMesh&&Ft.instancing===!0||v.isSkinnedMesh&&Ft.skinning===!1||!v.isSkinnedMesh&&Ft.skinning===!0||v.isInstancedMesh&&Ft.instancingColor===!0&&v.instanceColor===null||v.isInstancedMesh&&Ft.instancingColor===!1&&v.instanceColor!==null||v.isInstancedMesh&&Ft.instancingMorph===!0&&v.morphTexture===null||v.isInstancedMesh&&Ft.instancingMorph===!1&&v.morphTexture!==null||Ft.envMap!==et||K.fog===!0&&Ft.fog!==L||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==_t.numPlanes||Ft.numIntersection!==_t.numIntersection)||Ft.vertexAlphas!==Mt||Ft.vertexTangents!==dt||Ft.morphTargets!==xt||Ft.morphNormals!==Jt||Ft.morphColors!==kt||Ft.toneMapping!==fe||Ft.morphTargetsCount!==ut)&&(Bt=!0):(Bt=!0,Ft.__version=K.version);let _e=Ft.currentProgram;Bt===!0&&(_e=O(K,F,v));let Ee=!1,me=!1,qt=!1,Kt=_e.getUniforms(),pe=Ft.uniforms;if(Rt.useProgram(_e.program)&&(Ee=!0,me=!0,qt=!0),K.id!==T&&(T=K.id,me=!0),Ee||b!==A){Rt.buffers.depth.getReversed()?(ot.copy(A.projectionMatrix),ap(ot),cp(ot),Kt.setValue(D,"projectionMatrix",ot)):Kt.setValue(D,"projectionMatrix",A.projectionMatrix),Kt.setValue(D,"viewMatrix",A.matrixWorldInverse);let $e=Kt.map.cameraPosition;$e!==void 0&&$e.setValue(D,gt.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&Kt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Kt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,me=!0,qt=!0)}if(v.isSkinnedMesh){Kt.setOptional(D,v,"bindMatrix"),Kt.setOptional(D,v,"bindMatrixInverse");let Le=v.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Kt.setValue(D,"boneTexture",Le.boneTexture,C))}v.isBatchedMesh&&(Kt.setOptional(D,v,"batchingTexture"),Kt.setValue(D,"batchingTexture",v._matricesTexture,C),Kt.setOptional(D,v,"batchingIdTexture"),Kt.setValue(D,"batchingIdTexture",v._indirectTexture,C),Kt.setOptional(D,v,"batchingColorTexture"),v._colorsTexture!==null&&Kt.setValue(D,"batchingColorTexture",v._colorsTexture,C));let He=Z.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&ie.update(v,Z,_e),(me||Ft.receiveShadow!==v.receiveShadow)&&(Ft.receiveShadow=v.receiveShadow,Kt.setValue(D,"receiveShadow",v.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(pe.envMap.value=et,pe.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(pe.envMapIntensity.value=F.environmentIntensity),me&&(Kt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&Yt(pe,qt),L&&K.fog===!0&&Dt.refreshFogUniforms(pe,L),Dt.refreshMaterialUniforms(pe,K,Q,V,f.state.transmissionRenderTarget[A.id]),Ws.upload(D,nt(Ft),pe,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ws.upload(D,nt(Ft),pe,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Kt.setValue(D,"center",v.center),Kt.setValue(D,"modelViewMatrix",v.modelViewMatrix),Kt.setValue(D,"normalMatrix",v.normalMatrix),Kt.setValue(D,"modelMatrix",v.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Le=K.uniformsGroups;for(let $e=0,Ve=Le.length;$e<Ve;$e++){let hi=Le[$e];k.update(hi,_e),k.bind(hi,_e)}}return _e}function Yt(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ce(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,F,Z){Ot.get(A.texture).__webglTexture=F,Ot.get(A.depthTexture).__webglTexture=Z;let K=Ot.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){let Z=Ot.get(A);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Z=0){I=A,E=F,w=Z;let K=!0,v=null,L=!1,B=!1;if(A){let et=Ot.get(A);if(et.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(et.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(et.__hasExternalTextures)C.rebindTextures(A,Ot.get(A.texture).__webglTexture,Ot.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let xt=A.depthTexture;if(et.__boundDepthTexture!==xt){if(xt!==null&&Ot.has(xt)&&(A.width!==xt.image.width||A.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let Mt=A.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(B=!0);let dt=Ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(dt[F])?v=dt[F][Z]:v=dt[F],L=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?v=Ot.get(A).__webglMultisampledFramebuffer:Array.isArray(dt)?v=dt[Z]:v=dt,U.copy(A.viewport),Y.copy(A.scissor),W=A.scissorTest}else U.copy(vt).multiplyScalar(Q).floor(),Y.copy(tt).multiplyScalar(Q).floor(),W=ct;if(Rt.bindFramebuffer(D.FRAMEBUFFER,v)&&K&&Rt.drawBuffers(A,v),Rt.viewport(U),Rt.scissor(Y),Rt.setScissorTest(W),L){let et=Ot.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,et.__webglTexture,Z)}else if(B){let et=Ot.get(A.texture),Mt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,et.__webglTexture,Z||0,Mt)}T=-1},this.readRenderTargetPixels=function(A,F,Z,K,v,L,B){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=Ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&B!==void 0&&(J=J[B]),J){Rt.bindFramebuffer(D.FRAMEBUFFER,J);try{let et=A.texture,Mt=et.format,dt=et.type;if(!Tt.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-K&&Z>=0&&Z<=A.height-v&&D.readPixels(F,Z,K,v,oe.convert(Mt),oe.convert(dt),L)}finally{let et=I!==null?Ot.get(I).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,F,Z,K,v,L,B){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let J=Ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&B!==void 0&&(J=J[B]),J){let et=A.texture,Mt=et.format,dt=et.type;if(!Tt.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-K&&Z>=0&&Z<=A.height-v){Rt.bindFramebuffer(D.FRAMEBUFFER,J);let xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xt),D.bufferData(D.PIXEL_PACK_BUFFER,L.byteLength,D.STREAM_READ),D.readPixels(F,Z,K,v,oe.convert(Mt),oe.convert(dt),0);let Jt=I!==null?Ot.get(I).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,Jt);let kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await op(D,kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,L),D.deleteBuffer(xt),D.deleteSync(kt),L}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,Z=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);let K=Math.pow(2,-Z),v=Math.floor(A.image.width*K),L=Math.floor(A.image.height*K),B=F!==null?F.x:0,J=F!==null?F.y:0;C.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,B,J,v,L),Rt.unbindTexture()},this.copyTextureToTexture=function(A,F,Z=null,K=null,v=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],F=arguments[2],v=arguments[3]||0,Z=null);let L,B,J,et,Mt,dt,xt,Jt,kt,fe=A.isCompressedTexture?A.mipmaps[v]:A.image;Z!==null?(L=Z.max.x-Z.min.x,B=Z.max.y-Z.min.y,J=Z.isBox3?Z.max.z-Z.min.z:1,et=Z.min.x,Mt=Z.min.y,dt=Z.isBox3?Z.min.z:0):(L=fe.width,B=fe.height,J=fe.depth||1,et=0,Mt=0,dt=0),K!==null?(xt=K.x,Jt=K.y,kt=K.z):(xt=0,Jt=0,kt=0);let Se=oe.convert(F.format),ut=oe.convert(F.type),Ft;F.isData3DTexture?(C.setTexture3D(F,0),Ft=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Ft=D.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let ae=D.getParameter(D.UNPACK_ROW_LENGTH),Bt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),_e=D.getParameter(D.UNPACK_SKIP_PIXELS),Ee=D.getParameter(D.UNPACK_SKIP_ROWS),me=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,dt);let qt=A.isDataArrayTexture||A.isData3DTexture,Kt=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let pe=Ot.get(A),He=Ot.get(F),Le=Ot.get(pe.__renderTarget),$e=Ot.get(He.__renderTarget);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,Le.__webglFramebuffer),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ve=0;Ve<J;Ve++)qt&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.get(A).__webglTexture,v,dt+Ve),A.isDepthTexture?(Kt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.get(F).__webglTexture,v,kt+Ve),D.blitFramebuffer(et,Mt,L,B,xt,Jt,L,B,D.DEPTH_BUFFER_BIT,D.NEAREST)):Kt?D.copyTexSubImage3D(Ft,v,xt,Jt,kt+Ve,et,Mt,L,B):D.copyTexSubImage2D(Ft,v,xt,Jt,kt+Ve,et,Mt,L,B);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Kt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ft,v,xt,Jt,kt,L,B,J,Se,ut,fe.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,v,xt,Jt,kt,L,B,J,Se,fe.data):D.texSubImage3D(Ft,v,xt,Jt,kt,L,B,J,Se,ut,fe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,v,xt,Jt,L,B,Se,ut,fe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,v,xt,Jt,fe.width,fe.height,Se,fe.data):D.texSubImage2D(D.TEXTURE_2D,v,xt,Jt,L,B,Se,ut,fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,me),v===0&&F.generateMipmaps&&D.generateMipmap(Ft),Rt.unbindTexture()},this.copyTextureToTexture3D=function(A,F,Z=null,K=null,v=0){return A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,A=arguments[2],F=arguments[3],v=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,Z,K,v)},this.initRenderTarget=function(A){Ot.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){E=0,w=0,I=null,Rt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}},jo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jo=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Lr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new R,Nn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gi=class extends ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Us,pr=new R,zs=new R,Ns=new R,Os=new wt,mr=new wt,ad=new de,_o=new R,gr=new R,yo=new R,Mu=new wt,hc=new wt,bu=new wt,os=class extends cn{constructor(t=new Gi){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(e,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Nn(n,3,0,!1)),Us.setAttribute("uv",new Nn(n,2,3,!1))}this.geometry=Us,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mo(_o.set(-.5,-.5,0),Ns,o,zs,s,r),Mo(gr.set(.5,-.5,0),Ns,o,zs,s,r),Mo(yo.set(.5,.5,0),Ns,o,zs,s,r),Mu.set(0,0),hc.set(1,0),bu.set(1,1);let a=t.ray.intersectTriangle(_o,gr,yo,!1,pr);if(a===null&&(Mo(gr.set(-.5,.5,0),Ns,o,zs,s,r),hc.set(0,1),a=t.ray.intersectTriangle(_o,yo,gr,!1,pr),a===null))return;let c=t.ray.origin.distanceTo(pr);c<t.near||c>t.far||e.push({distance:c,point:pr.clone(),uv:Bi.getInterpolation(pr,_o,gr,yo,Mu,hc,bu,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Mo(i,t,e,n,s,r){Os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Os.x-s*Os.y,mr.y=s*Os.x+r*Os.y):mr.copy(Os),i.copy(t),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(ad)}var vl=class extends An{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Un,h=Un,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new de,Su=new de,bo=[],Eu=new Rn,ev=new de,xr=new $t,vr=new zn,ii=class extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ev)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Eu.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),vr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),t.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),Su.multiplyMatrices(n,Fs),xr.matrixWorld=Su,xr.raycast(t,bo);for(let o=0,a=bo.length;o<a;o++){let c=bo[o];c.instanceId=r,c.object=this,e.push(c)}bo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vl(new Float32Array(s*this.count),s,this.count,Wl,Kn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Si=class extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ko=new R,Qo=new R,wu=new de,_r=new Vi,So=new zn,uc=new R,Tu=new R,as=class extends cn{constructor(t=new Re,e=new Si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ko.fromBufferAttribute(e,s-1),Qo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ko.distanceTo(Qo);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;wu.copy(s).invert(),_r.copy(t.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=h.getX(x),S=h.getX(x+1),y=Eo(this,t,_r,c,f,S);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=Eo(this,t,_r,c,x,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=Eo(this,t,_r,c,x,x+1);f&&e.push(f)}if(this.isLineLoop){let x=Eo(this,t,_r,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eo(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Ko.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),e.distanceSqToSegment(Ko,Qo,uc,Tu)>n)return;uc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(uc);if(!(c<t.near||c>t.far))return{distance:c,point:Tu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ta=class extends as{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},$n=class extends ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Au=new de,_l=new Vi,wo=new zn,To=new R,si=class extends cn{constructor(t=new Re,e=new $n){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;Au.copy(s).invert(),_l.copy(t.ray).applyMatrix4(Au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=u,x=p;g<x;g++){let m=l.getX(g);To.fromBufferAttribute(d,m),Ru(To,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,x=p;g<x;g++)To.fromBufferAttribute(d,g),Ru(To,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ru(i,t,e,n,s,r,o){let a=_l.distanceSqToPoint(i);if(a<e){let c=new R;_l.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ks=class extends An{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new wt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new de;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ke(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zr=class extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends zr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ao=new R,dc=new jl,fc=new jl,pc=new jl,Ei=class extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),l=Ao);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),dc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,m),fc.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,m),pc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),fc.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),pc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(dc.calc(c),fc.calc(c),pc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function nv(i,t){let e=1-i;return e*e*t}function iv(i,t){return 2*(1-i)*i*t}function sv(i,t){return i*i*t}function wr(i,t,e,n){return nv(i,t)+iv(i,e)+sv(i,n)}function rv(i,t){let e=1-i;return e*e*e*t}function ov(i,t){let e=1-i;return 3*e*e*i*t}function av(i,t){return 3*(1-i)*i*i*t}function cv(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return rv(i,t)+ov(i,e)+av(i,n)+cv(i,s)}var ea=class extends Hn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends Hn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y),Tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},na=class extends Hn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends Hn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends Hn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qs=class extends Hn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y),wr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Cu(a,c.x,l.x,h.x,d.x),Cu(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},ra=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:Ei,CubicBezierCurve:ea,CubicBezierCurve3:Ml,EllipseCurve:zr,LineCurve:na,LineCurve3:bl,QuadraticBezierCurve:ia,QuadraticBezierCurve3:Qs,SplineCurve:sa}),Sl=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ra[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ra[s.type]().fromJSON(s))}return this}},Nr=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new na(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ia(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ea(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new sa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new zr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Or=class i extends Re{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,d=new R,u=new wt,p=new R,g=new R,x=new R,m=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let S=0;S<=e;S++){let y=n+S*h*s,_=Math.sin(y),z=Math.cos(y);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*z,o.push(d.x,d.y,d.z),u.x=S/e,u.y=E/(t.length-1),a.push(u.x,u.y);let w=c[3*E+0]*_,I=c[3*E+1],T=c[3*E+0]*z;l.push(w,I,T)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){let _=y+S*t.length,z=_,E=_+t.length,w=_+t.length+1,I=_+1;r.push(z,E,I),r.push(w,I,E)}this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("uv",new Me(a,2)),this.setAttribute("normal",new Me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},oa=class i extends Or{constructor(t=1,e=1,n=4,s=8){let r=new Nr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Fr=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,h=new wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sn=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,x=[],m=n/2,f=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(p,2));function S(){let _=new R,z=new R,E=0,w=(e-t)/n;for(let I=0;I<=r;I++){let T=[],b=I/r,U=b*(e-t)+t;for(let Y=0;Y<=s;Y++){let W=Y/s,X=W*c+a,st=Math.sin(X),$=Math.cos(X);z.x=U*st,z.y=-b*n+m,z.z=U*$,d.push(z.x,z.y,z.z),_.set(st,w,$).normalize(),u.push(_.x,_.y,_.z),p.push(W,1-b),T.push(g++)}x.push(T)}for(let I=0;I<s;I++)for(let T=0;T<r;T++){let b=x[T][I],U=x[T+1][I],Y=x[T+1][I+1],W=x[T][I+1];(t>0||T!==0)&&(h.push(b,U,W),E+=3),(e>0||T!==r-1)&&(h.push(U,Y,W),E+=3)}l.addGroup(f,E,0),f+=E}function y(_){let z=g,E=new wt,w=new R,I=0,T=_===!0?t:e,b=_===!0?1:-1;for(let Y=1;Y<=s;Y++)d.push(0,m*b,0),u.push(0,b,0),p.push(.5,.5),g++;let U=g;for(let Y=0;Y<=s;Y++){let X=Y/s*c+a,st=Math.cos(X),$=Math.sin(X);w.x=T*$,w.y=m*b,w.z=T*st,d.push(w.x,w.y,w.z),u.push(0,b,0),E.x=st*.5+.5,E.y=$*.5*b+.5,p.push(E.x,E.y),g++}for(let Y=0;Y<s;Y++){let W=z+Y,X=U+Y;_===!0?h.push(X,X+1,W):h.push(X+1,X,W),I+=3}l.addGroup(f,I,_===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Wi=class extends Nr{constructor(t){super(t),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Nr().fromJSON(s))}return this}},lv={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=cd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,p;if(n&&(r=pv(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Br(r,o,e,a,c,p,0),o}};function cd(i,t,e,n,s){let r,o;if(s===wv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Pu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Pu(r,i[r],i[r+1],o);return o&&Ma(o,o.next)&&(kr(o),o=o.next),o}function cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ma(e,e.next)||Ye(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Br(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_v(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?uv(i,n,s,r):hv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),kr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=dv(cs(i),t,e),Br(i,t,e,n,s,r,2)):o===2&&fv(i,t,e,n,s,r):Br(cs(i),t,e,n,s,r,1);break}}}function hv(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Hs(s,a,r,c,o,l,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uv(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,f=El(p,g,t,e,n),S=El(x,m,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=f&&_&&_.z<=S;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Hs(a,h,c,d,l,u,y.x,y.y)&&Ye(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Hs(a,h,c,d,l,u,_.x,_.y)&&Ye(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Hs(a,h,c,d,l,u,y.x,y.y)&&Ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Hs(a,h,c,d,l,u,_.x,_.y)&&Ye(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function dv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ma(s,r)&&ld(s,n,n.next,r)&&Hr(s,r)&&Hr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),kr(n),kr(n.next),n=i=r),n=n.next}while(n!==i);return cs(n)}function fv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bv(o,a)){let c=hd(o,a);o=cs(o,o.next),c=cs(c,c.next),Br(o,t,e,n,s,r,0),Br(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pv(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=cd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Mv(l));for(s.sort(mv),r=0;r<s.length;r++)e=gv(s[r],e);return e}function mv(i,t){return i.x-t.x}function gv(i,t){let e=xv(i,t);if(!e)return t;let n=hd(e,i);return cs(n,n.next),cs(e,e.next)}function xv(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Hs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Hr(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&vv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function vv(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function _v(i,t,e,n){let s=i;do s.z===0&&(s.z=El(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yv(s)}function yv(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function El(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function bv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sv(i,t)&&(Hr(i,t)&&Hr(t,i)&&Ev(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||Ma(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ma(i,t){return i.x===t.x&&i.y===t.y}function ld(i,t,e,n){let s=Co(Ye(i,t,e)),r=Co(Ye(i,t,n)),o=Co(Ye(e,n,i)),a=Co(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Ro(i,e,t)||r===0&&Ro(i,n,t)||o===0&&Ro(e,i,n)||a===0&&Ro(e,t,n))}function Ro(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Co(i){return i>0?1:i<0?-1:0}function Sv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hr(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function Ev(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hd(i,t){let e=new wl(i.i,i.x,i.y),n=new wl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pu(i,t,e,n){let s=new wl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ar=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Iu(t),Du(n,t);let o=t.length;e.forEach(Iu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Du(n,e[c]);let a=lv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Iu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Du(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ls=class i extends Re{constructor(t=new Wi([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Tv,y,_=!1,z,E,w,I;f&&(y=f.getSpacedPoints(h),_=!0,u=!1,z=f.computeFrenetFrames(h,!1),E=new R,w=new R,I=new R),u||(m=0,p=0,g=0,x=0);let T=a.extractPoints(l),b=T.shape,U=T.holes;if(!Ar.isClockWise(b)){b=b.reverse();for(let j=0,yt=U.length;j<yt;j++){let D=U[j];Ar.isClockWise(D)&&(U[j]=D.reverse())}}let W=Ar.triangulateShape(b,U),X=b;for(let j=0,yt=U.length;j<yt;j++){let D=U[j];b=b.concat(D)}function st(j,yt,D){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(yt,D)}let $=b.length,V=W.length;function Q(j,yt,D){let Vt,bt,Tt,Rt=j.x-yt.x,Zt=j.y-yt.y,Ot=D.x-j.x,C=D.y-j.y,M=Rt*Rt+Zt*Zt,q=Rt*C-Zt*Ot;if(Math.abs(q)>Number.EPSILON){let lt=Math.sqrt(M),ft=Math.sqrt(Ot*Ot+C*C),ht=yt.x-Zt/lt,Ct=yt.y+Rt/lt,Dt=D.x-C/ft,Wt=D.y+Ot/ft,jt=((Dt-ht)*C-(Wt-Ct)*Ot)/(Rt*C-Zt*Ot);Vt=ht+Rt*jt-j.x,bt=Ct+Zt*jt-j.y;let _t=Vt*Vt+bt*bt;if(_t<=2)return new wt(Vt,bt);Tt=Math.sqrt(_t/2)}else{let lt=!1;Rt>Number.EPSILON?Ot>Number.EPSILON&&(lt=!0):Rt<-Number.EPSILON?Ot<-Number.EPSILON&&(lt=!0):Math.sign(Zt)===Math.sign(C)&&(lt=!0),lt?(Vt=-Zt,bt=Rt,Tt=Math.sqrt(M)):(Vt=Rt,bt=Zt,Tt=Math.sqrt(M/2))}return new wt(Vt/Tt,bt/Tt)}let At=[];for(let j=0,yt=X.length,D=yt-1,Vt=j+1;j<yt;j++,D++,Vt++)D===yt&&(D=0),Vt===yt&&(Vt=0),At[j]=Q(X[j],X[D],X[Vt]);let rt=[],vt,tt=At.concat();for(let j=0,yt=U.length;j<yt;j++){let D=U[j];vt=[];for(let Vt=0,bt=D.length,Tt=bt-1,Rt=Vt+1;Vt<bt;Vt++,Tt++,Rt++)Tt===bt&&(Tt=0),Rt===bt&&(Rt=0),vt[Vt]=Q(D[Vt],D[Tt],D[Rt]);rt.push(vt),tt=tt.concat(vt)}for(let j=0;j<m;j++){let yt=j/m,D=p*Math.cos(yt*Math.PI/2),Vt=g*Math.sin(yt*Math.PI/2)+x;for(let bt=0,Tt=X.length;bt<Tt;bt++){let Rt=st(X[bt],At[bt],Vt);ot(Rt.x,Rt.y,-D)}for(let bt=0,Tt=U.length;bt<Tt;bt++){let Rt=U[bt];vt=rt[bt];for(let Zt=0,Ot=Rt.length;Zt<Ot;Zt++){let C=st(Rt[Zt],vt[Zt],Vt);ot(C.x,C.y,-D)}}}let ct=g+x;for(let j=0;j<$;j++){let yt=u?st(b[j],tt[j],ct):b[j];_?(w.copy(z.normals[0]).multiplyScalar(yt.x),E.copy(z.binormals[0]).multiplyScalar(yt.y),I.copy(y[0]).add(w).add(E),ot(I.x,I.y,I.z)):ot(yt.x,yt.y,0)}for(let j=1;j<=h;j++)for(let yt=0;yt<$;yt++){let D=u?st(b[yt],tt[yt],ct):b[yt];_?(w.copy(z.normals[j]).multiplyScalar(D.x),E.copy(z.binormals[j]).multiplyScalar(D.y),I.copy(y[j]).add(w).add(E),ot(I.x,I.y,I.z)):ot(D.x,D.y,d/h*j)}for(let j=m-1;j>=0;j--){let yt=j/m,D=p*Math.cos(yt*Math.PI/2),Vt=g*Math.sin(yt*Math.PI/2)+x;for(let bt=0,Tt=X.length;bt<Tt;bt++){let Rt=st(X[bt],At[bt],Vt);ot(Rt.x,Rt.y,d+D)}for(let bt=0,Tt=U.length;bt<Tt;bt++){let Rt=U[bt];vt=rt[bt];for(let Zt=0,Ot=Rt.length;Zt<Ot;Zt++){let C=st(Rt[Zt],vt[Zt],Vt);_?ot(C.x,C.y+y[h-1].y,y[h-1].x+D):ot(C.x,C.y,d+D)}}}N(),G();function N(){let j=s.length/3;if(u){let yt=0,D=$*yt;for(let Vt=0;Vt<V;Vt++){let bt=W[Vt];pt(bt[2]+D,bt[1]+D,bt[0]+D)}yt=h+m*2,D=$*yt;for(let Vt=0;Vt<V;Vt++){let bt=W[Vt];pt(bt[0]+D,bt[1]+D,bt[2]+D)}}else{for(let yt=0;yt<V;yt++){let D=W[yt];pt(D[2],D[1],D[0])}for(let yt=0;yt<V;yt++){let D=W[yt];pt(D[0]+$*h,D[1]+$*h,D[2]+$*h)}}n.addGroup(j,s.length/3-j,0)}function G(){let j=s.length/3,yt=0;H(X,yt),yt+=X.length;for(let D=0,Vt=U.length;D<Vt;D++){let bt=U[D];H(bt,yt),yt+=bt.length}n.addGroup(j,s.length/3-j,1)}function H(j,yt){let D=j.length;for(;--D>=0;){let Vt=D,bt=D-1;bt<0&&(bt=j.length-1);for(let Tt=0,Rt=h+m*2;Tt<Rt;Tt++){let Zt=$*Tt,Ot=$*(Tt+1),C=yt+Vt+Zt,M=yt+bt+Zt,q=yt+bt+Ot,lt=yt+Vt+Ot;gt(C,M,q,lt)}}}function ot(j,yt,D){c.push(j),c.push(yt),c.push(D)}function pt(j,yt,D){St(j),St(yt),St(D);let Vt=s.length/3,bt=S.generateTopUV(n,s,Vt-3,Vt-2,Vt-1);It(bt[0]),It(bt[1]),It(bt[2])}function gt(j,yt,D,Vt){St(j),St(yt),St(Vt),St(yt),St(D),St(Vt);let bt=s.length/3,Tt=S.generateSideWallUV(n,s,bt-6,bt-3,bt-2,bt-1);It(Tt[0]),It(Tt[1]),It(Tt[3]),It(Tt[1]),It(Tt[2]),It(Tt[3])}function St(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function It(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Av(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ra[s.type]().fromJSON(s)),new i(n,t.options)}},Tv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new wt(r,o),new wt(a,c),new wt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new wt(o,1-c),new wt(l,1-d),new wt(u,1-g),new wt(x,1-f)]:[new wt(a,1-c),new wt(h,1-d),new wt(p,1-g),new wt(m,1-f)]}};function Av(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var aa=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,p=new R,g=new wt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let S=f+m,y=S,_=S+n+1,z=S+n+2,E=S+1;a.push(y,_,E),a.push(_,z,E)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var tr=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new R,u=new R,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let S=[],y=f/n,_=0;f===0&&o===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let z=0;z<=e;z++){let E=z/e;d.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+_,1-y),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let y=h[f][S+1],_=h[f][S],z=h[f+1][S],E=h[f+1][S+1];(f!==0||o>0)&&p.push(y,_,E),(f!==n-1||c<Math.PI)&&p.push(_,z,E)}this.setIndex(p),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zn=class i extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new R,d=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,S=(s+1)*p+g;o.push(x,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ca=class i extends Re{constructor(t=new Qs(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new wt,h=new R,d=[],u=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(p,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),f()}function m(y){h=t.getPointAt(y/e,h);let _=o.normals[y],z=o.binormals[y];for(let E=0;E<=s;E++){let w=E/s*Math.PI*2,I=Math.sin(w),T=-Math.cos(w);c.x=T*_.x+I*z.x,c.y=T*_.y+I*z.y,c.z=T*_.z+I*z.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let z=(s+1)*(y-1)+(_-1),E=(s+1)*y+(_-1),w=(s+1)*y+_,I=(s+1)*(y-1)+_;g.push(z,E,I),g.push(E,w,I)}}function S(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)l.x=y/e,l.y=_/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ra[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},la=class extends Re{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new R,r=new R;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start,p=d.count;for(let g=u,x=u+p;g<x;g+=3)for(let m=0;m<3;m++){let f=a.getX(g+m),S=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,S),Lu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let h=3*a+l,d=3*a+(l+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),Lu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Me(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Lu(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Xi=class extends ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Po(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var er=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tl=class extends er{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=t,a=2*e-n;break;case Ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Th:o=t,c=2*n-e;break;case Ah:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,S=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let z=0;z!==a;++z)r[z]=f*o[h+z]+S*o[l+z]+y*o[c+z]+_*o[d+z];return r}},Al=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Rl=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Po(e,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Po(t.times,Array),values:Po(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Oo:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Rv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=tl;var hs=class extends jn{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Oo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends jn{};Cl.prototype.ValueTypeName="color";var Pl=class extends jn{};Pl.prototype.ValueTypeName="number";var Il=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ha=class extends jn{InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends jn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Oo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends jn{};Dl.prototype.ValueTypeName="vector";var Ll=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Cv=new Ll,Ul=class{constructor(t){this.manager=t!==void 0?t:Cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua=class extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},da=class extends ua{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},mc=new de,Uu=new R,zu=new R,zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nl=class extends zl{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fa=class extends Re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Jl="\\[\\]\\.:\\/",Pv=new RegExp("["+Jl+"]","g"),Kl="[^"+Jl+"]",Iv="[^"+Jl.replace("\\.","")+"]",Dv=/((?:WC+[\/:])*)/.source.replace("WC",Kl),Lv=/(WCOD+)?/.source.replace("WCOD",Iv),Uv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),zv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),Nv=new RegExp("^"+Dv+Lv+Uv+zv+"$"),Ov=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let s=n||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pv,"")}static parseTrackName(t){let e=Nv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Ol;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);var ds=class extends Lr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Nu=new de,pa=class{constructor(t,e,n=0,s=1/0){this.ray=new Vi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(t,e=!0,n=[]){return Fl(t,this,n,e),n.sort(Ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fl(t[s],this,n,e);return n.sort(Ou),n}};function Ou(i,t){return i.distance-t.distance}function Fl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Fl(r[o],t,e,!0)}}var Gr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fu=new R,Io=new R,ma=class{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Fu.subVectors(t,this.start),Io.subVectors(this.end,this.start);let n=Io.dot(Io),r=Io.dot(Fu)/n;return e&&(r=Ke(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ga=class extends Mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);var ud={type:"change"},th={type:"start"},fd={type:"end"},ba=new Vi,dd=new hn,Fv=Math.cos(70*_a.DEG2RAD),rn=new R,Pn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ql=1e-6,Sa=class extends ga{constructor(t,e=null){super(t,e),this.state=Be.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new tn,this._lastTargetPosition=new R,this._quat=new tn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gr,this._sphericalDelta=new Gr,this._scale=1,this._panOffset=new R,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new R,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hv.bind(this),this._onPointerDown=Bv.bind(this),this._onPointerUp=kv.bind(this),this._onContextMenu=$v.bind(this),this._onMouseWheel=Wv.bind(this),this._onKeyDown=Xv.bind(this),this._onTouchStart=qv.bind(this),this._onTouchMove=Yv.bind(this),this._onMouseDown=Vv.bind(this),this._onMouseMove=Gv.bind(this),this._interceptControlDown=Zv.bind(this),this._interceptControlUp=jv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ud),this.update(),this.state=Be.NONE}update(t=null){let e=this.object.position;rn.copy(e).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),e.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=rn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ba.origin.copy(this.object.position),ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ba.direction))<Fv?this.object.lookAt(this.target):(dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ba.intersectPlane(dd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ql||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ql||this._lastTargetPosition.distanceToSquared(this.target)>Ql?(this.dispatchEvent(ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){rn.setFromMatrixColumn(e,0),rn.multiplyScalar(-t),this._panOffset.add(rn)}_panUp(t,e){this.screenSpacePanning===!0?rn.setFromMatrixColumn(e,1):(rn.setFromMatrixColumn(e,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(t),this._panOffset.add(rn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;rn.copy(s).sub(this.target);let r=rn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Bv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Hv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function kv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fd),this.state=Be.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Be.DOLLY;break;case fs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Be.ROTATE}break;case fs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(th)}function Gv(i){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Wv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(i.preventDefault(),this.dispatchEvent(th),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fd))}function Xv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function qv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Be.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Be.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(th)}function Yv(i){switch(this._trackPointer(i),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Be.NONE}}function $v(i){this.enabled!==!1&&i.preventDefault()}function Zv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ps={linha:{"input":{"targetHeight":1930},"summary":{"xTdp":28.48,"effectiveDepth":20},"reverse":[{"x":0,"z":-20,"s":0},{"x":0.463,"z":-19.538,"s":0.655},{"x":0.775,"z":-19.232,"s":1.091},{"x":1.245,"z":-18.777,"s":1.745},{"x":1.721,"z":-18.328,"s":2.4},{"x":2.201,"z":-17.882,"s":3.054},{"x":2.523,"z":-17.588,"s":3.491},{"x":3.009,"z":-17.15,"s":4.145},{"x":3.5,"z":-16.717,"s":4.8},{"x":3.829,"z":-16.43,"s":5.236},{"x":4.325,"z":-16.004,"s":5.891},{"x":4.826,"z":-15.582,"s":6.545},{"x":5.329,"z":-15.164,"s":7.2},{"x":5.667,"z":-14.887,"s":7.636},{"x":6.176,"z":-14.476,"s":8.29},{"x":6.688,"z":-14.068,"s":8.945},{"x":7.031,"z":-13.799,"s":9.381},{"x":7.548,"z":-13.397,"s":10.036},{"x":8.068,"z":-12.999,"s":10.69},{"x":8.59,"z":-12.605,"s":11.345},{"x":8.94,"z":-12.344,"s":11.781},{"x":9.467,"z":-11.956,"s":12.436},{"x":9.996,"z":-11.57,"s":13.09},{"x":10.35,"z":-11.315,"s":13.526},{"x":10.883,"z":-10.935,"s":14.181},{"x":11.418,"z":-10.558,"s":14.835},{"x":11.955,"z":-10.184,"s":15.49},{"x":12.314,"z":-9.937,"s":15.926},{"x":12.854,"z":-9.567,"s":16.581},{"x":13.396,"z":-9.201,"s":17.235},{"x":13.759,"z":-8.958,"s":17.672},{"x":14.304,"z":-8.596,"s":18.326},{"x":14.851,"z":-8.236,"s":18.981},{"x":15.216,"z":-7.997,"s":19.417},{"x":15.765,"z":-7.641,"s":20.072},{"x":16.316,"z":-7.288,"s":20.726},{"x":16.868,"z":-6.936,"s":21.381},{"x":17.237,"z":-6.703,"s":21.817},{"x":17.791,"z":-6.355,"s":22.471},{"x":18.347,"z":-6.009,"s":23.126},{"x":18.718,"z":-5.779,"s":23.562},{"x":19.275,"z":-5.436,"s":24.217},{"x":19.833,"z":-5.094,"s":24.871},{"x":20.392,"z":-4.754,"s":25.526},{"x":20.766,"z":-4.528,"s":25.962},{"x":21.327,"z":-4.191,"s":26.617},{"x":21.888,"z":-3.854,"s":27.271},{"x":22.263,"z":-3.631,"s":27.707},{"x":22.826,"z":-3.297,"s":28.362},{"x":23.389,"z":-2.963,"s":29.016},{"x":23.953,"z":-2.631,"s":29.671},{"x":24.329,"z":-2.41,"s":30.107},{"x":24.894,"z":-2.08,"s":30.762},{"x":25.459,"z":-1.75,"s":31.416},{"x":25.836,"z":-1.53,"s":31.853},{"x":26.402,"z":-1.202,"s":32.507},{"x":26.969,"z":-0.873,"s":33.162},{"x":27.535,"z":-0.546,"s":33.816},{"x":27.913,"z":-0.327,"s":34.253},{"x":28.48,"z":0,"s":34.907}],"free":[{"x":28.48,"z":0,"s":0},{"x":37.545,"z":5.253,"s":10},{"x":46.596,"z":10.534,"s":20},{"x":64.649,"z":21.18,"s":40},{"x":73.653,"z":26.545,"s":50},{"x":82.641,"z":31.938,"s":60},{"x":91.614,"z":37.358,"s":70},{"x":109.512,"z":48.281,"s":90},{"x":118.437,"z":53.783,"s":100},{"x":127.347,"z":59.312,"s":110},{"x":136.242,"z":64.868,"s":120},{"x":153.983,"z":76.06,"s":140},{"x":162.83,"z":81.696,"s":150},{"x":171.662,"z":87.358,"s":160},{"x":180.477,"z":93.047,"s":170},{"x":189.277,"z":98.761,"s":180},{"x":206.83,"z":110.267,"s":200},{"x":215.583,"z":116.059,"s":210},{"x":224.319,"z":121.876,"s":220},{"x":233.04,"z":127.719,"s":230},{"x":250.435,"z":139.48,"s":250},{"x":259.108,"z":145.398,"s":260},{"x":267.766,"z":151.34,"s":270},{"x":276.408,"z":157.308,"s":280},{"x":285.034,"z":163.3,"s":290},{"x":303.348,"z":176.117,"s":310},{"x":313.052,"z":182.917,"s":320},{"x":322.756,"z":189.718,"s":330},{"x":332.459,"z":196.519,"s":340},{"x":351.867,"z":210.121,"s":360},{"x":361.57,"z":216.922,"s":370},{"x":371.274,"z":223.723,"s":380},{"x":380.977,"z":230.525,"s":390},{"x":400.384,"z":244.128,"s":410},{"x":410.087,"z":250.929,"s":420},{"x":419.79,"z":257.731,"s":430},{"x":429.493,"z":264.533,"s":440},{"x":439.196,"z":271.335,"s":450},{"x":458.602,"z":284.939,"s":470},{"x":468.305,"z":291.741,"s":480},{"x":478.008,"z":298.543,"s":490},{"x":487.711,"z":305.346,"s":500},{"x":507.117,"z":318.951,"s":520},{"x":516.82,"z":325.753,"s":530},{"x":526.522,"z":332.556,"s":540},{"x":536.225,"z":339.359,"s":550},{"x":545.927,"z":346.162,"s":560},{"x":565.332,"z":359.768,"s":580},{"x":575.035,"z":366.571,"s":590},{"x":584.737,"z":373.375,"s":600},{"x":594.439,"z":380.178,"s":610},{"x":613.844,"z":393.785,"s":630},{"x":623.546,"z":400.589,"s":640},{"x":633.248,"z":407.392,"s":650},{"x":642.95,"z":414.196,"s":660},{"x":662.354,"z":427.804,"s":680},{"x":672.056,"z":434.608,"s":690},{"x":681.758,"z":441.413,"s":700},{"x":691.46,"z":448.217,"s":710},{"x":701.161,"z":455.021,"s":720},{"x":720.565,"z":468.63,"s":740},{"x":730.266,"z":475.435,"s":750},{"x":739.968,"z":482.24,"s":760},{"x":749.669,"z":489.045,"s":770},{"x":769.072,"z":502.655,"s":790},{"x":778.773,"z":509.46,"s":800},{"x":788.475,"z":516.265,"s":810},{"x":798.176,"z":523.07,"s":820},{"x":807.877,"z":529.876,"s":830},{"x":827.279,"z":543.487,"s":850},{"x":836.98,"z":550.293,"s":860},{"x":846.681,"z":557.098,"s":870},{"x":856.382,"z":563.904,"s":880},{"x":875.784,"z":577.516,"s":900},{"x":885.485,"z":584.323,"s":910},{"x":895.186,"z":591.129,"s":920},{"x":904.886,"z":597.935,"s":930},{"x":924.287,"z":611.548,"s":950},{"x":933.988,"z":618.355,"s":960},{"x":943.688,"z":625.161,"s":970},{"x":953.389,"z":631.968,"s":980},{"x":963.089,"z":638.775,"s":990},{"x":982.49,"z":652.389,"s":1010},{"x":992.19,"z":659.196,"s":1020},{"x":1001.89,"z":666.004,"s":1030},{"x":1011.59,"z":672.811,"s":1040},{"x":1030.99,"z":686.426,"s":1060},{"x":1040.69,"z":693.234,"s":1070},{"x":1050.39,"z":700.041,"s":1080},{"x":1060.09,"z":706.849,"s":1090},{"x":1079.49,"z":720.465,"s":1110},{"x":1089.189,"z":727.273,"s":1120},{"x":1098.889,"z":734.081,"s":1130},{"x":1108.589,"z":740.89,"s":1140},{"x":1118.288,"z":747.698,"s":1150},{"x":1137.687,"z":761.315,"s":1170},{"x":1147.387,"z":768.124,"s":1180},{"x":1157.086,"z":774.933,"s":1190},{"x":1166.785,"z":781.741,"s":1200},{"x":1186.184,"z":795.359,"s":1220},{"x":1195.883,"z":802.168,"s":1230},{"x":1205.582,"z":808.978,"s":1240},{"x":1215.281,"z":815.787,"s":1250},{"x":1224.98,"z":822.596,"s":1260},{"x":1244.378,"z":836.215,"s":1280},{"x":1254.077,"z":843.025,"s":1290},{"x":1263.776,"z":849.835,"s":1300},{"x":1273.474,"z":856.645,"s":1310},{"x":1292.872,"z":870.265,"s":1330},{"x":1302.57,"z":877.075,"s":1340},{"x":1312.269,"z":883.885,"s":1350},{"x":1321.967,"z":890.695,"s":1360},{"x":1341.364,"z":904.316,"s":1380},{"x":1351.062,"z":911.127,"s":1390},{"x":1360.761,"z":917.938,"s":1400},{"x":1370.459,"z":924.748,"s":1410},{"x":1380.157,"z":931.559,"s":1420},{"x":1399.553,"z":945.181,"s":1440},{"x":1409.251,"z":951.992,"s":1450},{"x":1418.949,"z":958.804,"s":1460},{"x":1428.647,"z":965.615,"s":1470},{"x":1448.043,"z":979.238,"s":1490},{"x":1457.741,"z":986.05,"s":1500},{"x":1467.439,"z":992.861,"s":1510},{"x":1477.136,"z":999.673,"s":1520},{"x":1486.834,"z":1006.485,"s":1530},{"x":1506.229,"z":1020.109,"s":1550},{"x":1515.926,"z":1026.921,"s":1560},{"x":1525.624,"z":1033.733,"s":1570},{"x":1535.321,"z":1040.546,"s":1580},{"x":1554.716,"z":1054.171,"s":1600},{"x":1564.413,"z":1060.983,"s":1610},{"x":1574.11,"z":1067.796,"s":1620},{"x":1583.807,"z":1074.609,"s":1630},{"x":1603.201,"z":1088.235,"s":1650},{"x":1612.898,"z":1095.048,"s":1660},{"x":1622.595,"z":1101.861,"s":1670},{"x":1632.292,"z":1108.674,"s":1680},{"x":1641.989,"z":1115.488,"s":1690},{"x":1654.908,"z":1124.568,"s":1703.75},{"x":1658.128,"z":1126.838,"s":1707.5},{"x":1661.345,"z":1129.111,"s":1711.25},{"x":1664.561,"z":1131.388,"s":1715},{"x":1683.805,"z":1145.029,"s":1734.895},{"x":1693.427,"z":1151.849,"s":1744.842},{"x":1703.049,"z":1158.67,"s":1754.79},{"x":1712.671,"z":1165.491,"s":1764.737},{"x":1722.292,"z":1172.312,"s":1774.684},{"x":1741.536,"z":1185.954,"s":1794.579},{"x":1751.157,"z":1192.775,"s":1804.526},{"x":1760.779,"z":1199.597,"s":1814.474},{"x":1770.401,"z":1206.418,"s":1824.421},{"x":1789.644,"z":1220.061,"s":1844.316},{"x":1799.265,"z":1226.883,"s":1854.263},{"x":1808.886,"z":1233.704,"s":1864.211},{"x":1818.508,"z":1240.526,"s":1874.158},{"x":1837.75,"z":1254.17,"s":1894.053},{"x":1847.371,"z":1260.992,"s":1904},{"x":1856.992,"z":1267.815,"s":1913.948},{"x":1866.613,"z":1274.637,"s":1923.895},{"x":1876.234,"z":1281.459,"s":1933.842},{"x":1895.476,"z":1295.104,"s":1953.737},{"x":1905.097,"z":1301.927,"s":1963.685},{"x":1914.718,"z":1308.75,"s":1973.632},{"x":1924.339,"z":1315.573,"s":1983.579},{"x":1943.58,"z":1329.219,"s":2003.474},{"x":1953.201,"z":1336.042,"s":2013.421},{"x":1962.821,"z":1342.865,"s":2023.369},{"x":1972.442,"z":1349.688,"s":2033.316},{"x":1991.682,"z":1363.335,"s":2053.211},{"x":2001.303,"z":1370.159,"s":2063.158},{"x":2010.923,"z":1376.982,"s":2073.106},{"x":2020.543,"z":1383.806,"s":2083.053},{"x":2030.164,"z":1390.63,"s":2093},{"x":2049.404,"z":1404.278,"s":2112.895},{"x":2059.024,"z":1411.102,"s":2122.843},{"x":2068.644,"z":1417.926,"s":2132.79},{"x":2078.264,"z":1424.75,"s":2142.737},{"x":2097.503,"z":1438.399,"s":2162.632},{"x":2107.123,"z":1445.224,"s":2172.58},{"x":2116.743,"z":1452.049,"s":2182.527},{"x":2126.363,"z":1458.873,"s":2192.474},{"x":2135.982,"z":1465.698,"s":2202.422},{"x":2155.221,"z":1479.348,"s":2222.316},{"x":2164.841,"z":1486.173,"s":2232.264},{"x":2174.46,"z":1492.998,"s":2242.211},{"x":2184.08,"z":1499.824,"s":2252.159},{"x":2203.318,"z":1513.475,"s":2272.053},{"x":2212.938,"z":1520.3,"s":2282.001},{"x":2222.557,"z":1527.126,"s":2291.948},{"x":2232.176,"z":1533.952,"s":2301.895},{"x":2251.414,"z":1547.603,"s":2321.79},{"x":2261.033,"z":1554.429,"s":2331.738},{"x":2270.652,"z":1561.255,"s":2341.685},{"x":2280.271,"z":1568.082,"s":2351.632},{"x":2289.89,"z":1574.908,"s":2361.58},{"x":2309.127,"z":1588.561,"s":2381.475},{"x":2318.746,"z":1595.387,"s":2391.422},{"x":2328.365,"z":1602.214,"s":2401.369},{"x":2337.983,"z":1609.041,"s":2411.317},{"x":2357.22,"z":1622.695,"s":2431.211},{"x":2366.839,"z":1629.522,"s":2441.159},{"x":2376.457,"z":1636.349,"s":2451.106},{"x":2386.075,"z":1643.176,"s":2461.054},{"x":2395.694,"z":1650.003,"s":2471.001},{"x":2414.93,"z":1663.658,"s":2490.896},{"x":2424.548,"z":1670.486,"s":2500.843},{"x":2434.166,"z":1677.313,"s":2510.79},{"x":2443.784,"z":1684.141,"s":2520.738},{"x":2463.02,"z":1697.797,"s":2540.633},{"x":2472.638,"z":1704.625,"s":2550.58},{"x":2482.256,"z":1711.453,"s":2560.527},{"x":2491.874,"z":1718.281,"s":2570.475},{"x":2511.109,"z":1731.938,"s":2590.37},{"x":2520.727,"z":1738.766,"s":2600.317},{"x":2530.344,"z":1745.595,"s":2610.264},{"x":2539.962,"z":1752.423,"s":2620.212},{"x":2549.579,"z":1759.252,"s":2630.159},{"x":2568.814,"z":1772.91,"s":2650.054},{"x":2578.432,"z":1779.739,"s":2660.001},{"x":2588.049,"z":1786.568,"s":2669.949},{"x":2597.666,"z":1793.397,"s":2679.896},{"x":2616.9,"z":1807.056,"s":2699.791},{"x":2626.517,"z":1813.885,"s":2709.738},{"x":2636.134,"z":1820.715,"s":2719.685},{"x":2645.751,"z":1827.544,"s":2729.633},{"x":2655.368,"z":1834.374,"s":2739.58},{"x":2674.602,"z":1848.034,"s":2759.475},{"x":2684.219,"z":1854.864,"s":2769.422},{"x":2693.836,"z":1861.694,"s":2779.37},{"x":2703.452,"z":1868.524,"s":2789.317},{"x":2722.685,"z":1882.185,"s":2809.212},{"x":2732.302,"z":1889.015,"s":2819.159},{"x":2741.918,"z":1895.846,"s":2829.107},{"x":2751.535,"z":1902.677,"s":2839.054},{"x":2770.768,"z":1916.338,"s":2858.949},{"x":2780.384,"z":1923.169,"s":2868.896},{"x":2790,"z":1930,"s":2878.844}],"segments":[{"material":"corrente","start":{"x":28.48,"z":0,"s":0},"end":{"s":300}},{"material":"poliester","start":{"x":293.644,"z":169.316,"s":300},"end":{"s":1700}},{"material":"corrente","start":{"x":1651.686,"z":1122.301,"s":1700},"end":{"s":1715}},{"material":"poliester","start":{"x":1664.561,"z":1131.388,"s":1715},"end":{"s":2878.844}}]},queda:{time:8.021,impactSpeed:27.317,points:[{t:0,s:0,v:0},{t:.01,s:0,v:.084},{t:.11,s:.051,v:.927},{t:.21,s:.186,v:1.769},{t:.31,s:.405,v:2.607},{t:.41,s:.707,v:3.44},{t:.51,s:1.092,v:4.268},{t:.61,s:1.56,v:5.087},{t:.71,s:2.11,v:5.898},{t:.81,s:2.739,v:6.698},{t:.91,s:3.449,v:7.487},{t:1.01,s:4.236,v:8.263},{t:1.11,s:5.101,v:9.025},{t:1.21,s:6.041,v:9.772},{t:1.31,s:7.055,v:10.503},{t:1.41,s:8.141,v:11.218},{t:1.51,s:9.298,v:11.915},{t:1.61,s:10.523,v:12.595},{t:1.71,s:11.816,v:13.255},{t:1.81,s:13.174,v:13.897},{t:1.91,s:14.595,v:14.52},{t:2.01,s:16.077,v:15.124},{t:2.11,s:17.619,v:15.707},{t:2.21,s:19.218,v:16.271},{t:2.31,s:20.872,v:16.815},{t:2.41,s:22.58,v:17.339},{t:2.51,s:24.34,v:17.844},{t:2.61,s:26.148,v:18.33},{t:2.71,s:28.005,v:18.796},{t:2.81,s:29.907,v:19.243},{t:2.91,s:31.853,v:19.672},{t:3.01,s:33.841,v:20.083},{t:3.11,s:35.869,v:20.476},{t:3.21,s:37.936,v:20.852},{t:3.31,s:40.039,v:21.211},{t:3.41,s:42.177,v:21.554},{t:3.51,s:44.349,v:21.88},{t:3.61,s:46.553,v:22.192},{t:3.71,s:48.787,v:22.489},{t:3.81,s:51.05,v:22.771},{t:3.91,s:53.341,v:23.04},{t:4.01,s:55.657,v:23.295},{t:4.11,s:57.999,v:23.537},{t:4.21,s:60.365,v:23.768},{t:4.31,s:62.752,v:23.986},{t:4.41,s:65.161,v:24.194},{t:4.51,s:67.591,v:24.39},{t:4.61,s:70.039,v:24.577},{t:4.71,s:72.506,v:24.753},{t:4.81,s:74.99,v:24.921},{t:4.91,s:77.49,v:25.079},{t:5.01,s:80.005,v:25.229},{t:5.11,s:82.535,v:25.371},{t:5.21,s:85.079,v:25.505},{t:5.31,s:87.636,v:25.631},{t:5.41,s:90.205,v:25.751},{t:5.51,s:92.786,v:25.864},{t:5.61,s:95.378,v:25.971},{t:5.71,s:97.98,v:26.072},{t:5.81,s:100.592,v:26.168},{t:5.91,s:103.213,v:26.258},{t:6.01,s:105.843,v:26.343},{t:6.11,s:108.482,v:26.423},{t:6.21,s:111.128,v:26.499},{t:6.31,s:113.781,v:26.57},{t:6.41,s:116.442,v:26.637},{t:6.51,s:119.109,v:26.701},{t:6.61,s:121.782,v:26.761},{t:6.71,s:124.461,v:26.817},{t:6.81,s:127.145,v:26.871},{t:6.91,s:129.835,v:26.921},{t:7.01,s:132.529,v:26.968},{t:7.11,s:135.228,v:27.013},{t:7.21,s:137.932,v:27.055},{t:7.31,s:140.639,v:27.094},{t:7.41,s:143.35,v:27.131},{t:7.51,s:146.065,v:27.167},{t:7.61,s:148.784,v:27.2},{t:7.71,s:151.505,v:27.231},{t:7.81,s:154.23,v:27.26},{t:7.91,s:156.957,v:27.288},{t:8.01,s:159.687,v:27.314},{t:8.021,s:160,v:27.317}]},cravacao:{penetration:40.98,topDepth:17.05,time:4.9207,impactSpeed:27.3168,impactEnergy:44772.4355,points:[{t:0,z:0,v:27.317},{t:.0301,z:.82,v:27.234},{t:.0602,z:1.64,v:27.143},{t:.0905,z:2.46,v:27.043},{t:.1209,z:3.28,v:26.935},{t:.1518,z:4.11,v:26.818},{t:.1824,z:4.93,v:26.692},{t:.2132,z:5.75,v:26.556},{t:.2442,z:6.57,v:26.411},{t:.2753,z:7.39,v:26.256},{t:.3066,z:8.21,v:26.09},{t:.3382,z:9.03,v:25.914},{t:.3699,z:9.85,v:25.727},{t:.4023,z:10.68,v:25.524},{t:.4346,z:11.5,v:25.313},{t:.4671,z:12.32,v:25.09},{t:.5,z:13.14,v:24.854},{t:.5331,z:13.96,v:24.604},{t:.5666,z:14.78,v:24.341},{t:.6005,z:15.6,v:24.064},{t:.6348,z:16.42,v:23.772},{t:.6695,z:17.24,v:23.465},{t:.7051,z:18.07,v:23.139},{t:.7408,z:18.89,v:22.799},{t:.7771,z:19.71,v:22.443},{t:.8139,z:20.53,v:22.068},{t:.8514,z:21.35,v:21.674},{t:.8896,z:22.17,v:21.261},{t:.9286,z:22.99,v:20.829},{t:.9684,z:23.81,v:20.377},{t:1.0096,z:24.64,v:19.898},{t:1.0514,z:25.46,v:19.404},{t:1.0942,z:26.28,v:18.889},{t:1.1382,z:27.1,v:18.351},{t:1.1836,z:27.92,v:17.79},{t:1.2305,z:28.74,v:17.204},{t:1.279,z:29.56,v:16.592},{t:1.3294,z:30.38,v:15.952},{t:1.3819,z:31.2,v:15.281},{t:1.4376,z:32.03,v:14.569},{t:1.4953,z:32.85,v:13.828},{t:1.5564,z:33.67,v:13.046},{t:1.6213,z:34.49,v:12.217},{t:1.691,z:35.31,v:11.334},{t:1.7666,z:36.13,v:10.386},{t:1.8497,z:36.95,v:9.36},{t:1.8802,z:37.23,v:8.987},{t:1.9109,z:37.5,v:8.615},{t:1.943,z:37.77,v:8.231},{t:1.978,z:38.05,v:7.817},{t:2.0135,z:38.32,v:7.399},{t:2.0511,z:38.59,v:6.963},{t:2.0928,z:38.87,v:6.487},{t:2.1361,z:39.14,v:6},{t:2.1851,z:39.42,v:5.462},{t:2.2373,z:39.69,v:4.901},{t:2.2963,z:39.96,v:4.285},{t:2.3678,z:40.24,v:3.567},{t:2.4539,z:40.51,v:2.75},{t:2.5775,z:40.78,v:1.679},{t:4.9207,z:40.99,v:0}]},t35:{penetration:34.83,topDepth:20.98}};var Ae=ps.linha.input.targetHeight,dn={L:332,B:58,pontal:31,calado:16},Xr={chain:"#6fd8cf",poly:"#a6b1ff",buried:"#f5ad69",prod:"#f2c14e",wag:"#4fb3ff",serv:"#7ee08a",umb:"#ff8fbf",oleo:"#ff8a4c",suc:"#c59bff",aco:"#c3d5db",ink:"#e8f2f3",mute:"#9db4bd",acc:"#f5ad69",amarelo:"#f2c230"},En=ps.linha,gd=En.free[En.free.length-1],xd=-En.reverse[0].z,qr=En.summary.xTdp-En.reverse[0].x,vd=gd.s+En.reverse[En.reverse.length-1].s,_d=En.segments.map(i=>({mat:i.material,de:i.start.s,ate:i.end.s})),eh=(i,t)=>{if(i.length<=t)return i.slice();let e=[];for(let n=0;n<t;n++)e.push(i[Math.round(n/(t-1)*(i.length-1))]);return e},pd=Ae-14,Kv=[{g:45,sa:1,sb:1,sg:1},{g:135,sa:-1,sb:1,sg:-1},{g:225,sa:-1,sb:-1,sg:1},{g:315,sa:1,sb:-1,sg:-1}],Qv=4.5;function nh(i){let t=i/xd,e=[];return Kv.forEach((n,s)=>{for(let r=0;r<6;r++){let o=n.g+n.sg*(r-2.5)*Qv,a=o*Math.PI/180,c=Math.cos(a),l=Math.sin(a),h=n.sa*(dn.L/2-20-r*5.5),d=n.sb*(dn.B/2+1),u=(g,x)=>{let m=gd.x-g;return[h+c*m,d+l*m,x>=0?x*pd/Ae:x*t]},p=En.segments.map(g=>({mat:g.material,pts:eh([g.start,...En.free.filter(x=>x.s>g.start.s+1e-7&&x.s<=g.end.s+1e-7)],48).map(x=>u(x.x,x.z))}));e.push({id:s*6+r,gi:s,k:r,az:(o%360+360)%360,main:s===0&&r===2,fair:[h,d,pd],anchor:u(En.reverse[0].x,En.reverse[0].z),tdp:u(En.summary.xTdp,0),rev:eh(En.reverse,40).map(g=>u(g.x,g.z)),free:eh(En.free,90).map(g=>u(g.x,g.z)),segs:p})}}),e}var yd=(()=>{let i=nh(xd);return i.reduce((t,e)=>t+Math.hypot(e.anchor[0],e.anchor[1]),0)/i.length})(),Md=(i,t)=>[t*Math.cos(i*Math.PI/180),t*Math.sin(i*Math.PI/180)],Ti=[["P1","prod",64,3300],["P2","prod",74,4300],["P3","prod",84,3100],["P4","prod",96,4500],["P5","prod",106,3400],["P6","prod",117,4100],["I1","wag",242,4e3],["I2","wag",251,5e3],["I3","wag",259,3600],["I4","wag",268,4700],["I5","wag",277,3400],["I6","wag",286,4800],["I7","wag",295,3900]].map(([i,t,e,n])=>({id:i,tipo:t,az:e,r:n,pos:Md(e,n)})),Yr=[{id:"SDU-1",az:70,r:2500,pocos:["P1","P2","P3"]},{id:"SDU-2",az:109,r:2500,pocos:["P4","P5","P6"]},{id:"SDU-3",az:254,r:2550,pocos:["I1","I2","I3","I4"]},{id:"SDU-4",az:286,r:2550,pocos:["I5","I6","I7"]}].map(i=>({...i,pos:Md(i.az,i.r)})),t_=[[0,1],[.06,.8],[.16,.55],[.27,.38],[.36,.31],[.45,.36],[.52,.4],[.62,.345],[.76,.165],[.9,.035],[1,0]],ih=[.4,.62],md=(i,t)=>{let e=Math.hypot(i,t)||1;return[i/e,t/e]};function bd(){let i=[];for(let t of Ti){let[e,n]=t.pos,s=md(-e,-n),r=[e+s[0]*45,n+s[1]*45];i.push({id:`R-${t.id}`,tipo:t.tipo==="prod"?"prod":"wag",alvo:r,poco:t,rigido:!0,dt:2e3,lado:t.tipo==="prod"?1:-1}),t.tipo==="prod"&&i.push({id:`S-${t.id}`,tipo:"serv",alvo:t.pos,poco:t,rigido:!1,dt:1500,lado:1})}for(let t of Yr)i.push({id:`U-${t.id}`,tipo:"umb",alvo:t.pos,sdu:t,rigido:!1,dt:1500,lado:t.az<180?1:-1});for(let t of[1,-1]){let e=i.filter(o=>o.lado===t).map(o=>({r:o,az:Math.atan2(o.alvo[1],o.alvo[0])*180/Math.PI}));e.sort((o,a)=>t>0?o.az-a.az:a.az-o.az);let n=e.length,s=t>0?108:100,r=2*s/Math.max(1,n-1);e.forEach(({r:o},a)=>{o.porta=[t>0?s-a*r:-s+a*r,t*(dn.B/2+4),Ae-12]})}for(let t of i){let[e,n]=t.porta,s=md(t.alvo[0]-e,t.alvo[1]-n);t.u=s,t.tdp=[e+s[0]*t.dt,n+s[1]*t.dt],t.ctrl=t_.map(([r,o])=>[e+s[0]*t.dt*r,n+s[1]*t.dt*r,r===0?t.porta[2]:o*Ae]),t.leito=[t.tdp,t.alvo]}return i}var wn={D:5,L:12,topo:1.2},oi={L:274,B:48,espia:90},Sd=[{id:"campo",n:"O campo",t:"Arranjo inspirado no Mero-1: o FPSO fica a mais de 150 km da costa do Rio de Janeiro, em 1.930 m de l\xE2mina d\u2019\xE1gua. Seis po\xE7os produtores e sete injetores s\xE3o ligados direto \xE0 unidade. O g\xE1s, com cerca de 45% de CO\u2082, volta todo para o reservat\xF3rio."},{id:"fpso",n:"FPSO",t:"A unidade processa at\xE9 180 mil barris de \xF3leo e 12 milh\xF5es de m\xB3 de g\xE1s por dia e armazena 1,4 milh\xE3o de barris. A ancoragem \xE9 espalhada: 24 linhas, seis em cada canto do casco, mant\xEAm o aproamento fixo."},{id:"ancoragem",n:"Ancoragem",t:"Cada linha desce do casco em poli\xE9ster, com trechos de corrente nas pontas, toca o leito no TDP e segue enterrada at\xE9 o olhal da estaca torpedo. As \xE2ncoras ficam a cerca de 2,9 km do centro do FPSO."},{id:"torpedo",n:"Estaca torpedo",t:""},{id:"risers",n:"Risers",t:"Produtores e injetores sobem ao FPSO por risers r\xEDgidos em lazy wave. Os flutuadores formam uma corcova que desacopla o movimento da unidade do trecho que toca o leito. Linhas de servi\xE7o e umbilicais flex\xEDveis s\xE3o presos perto do toque por estacas de 35 t."},{id:"pocos",n:"Po\xE7os",t:"Cada po\xE7o tem uma \xE1rvore de natal molhada vertical (ANM) sobre a cabe\xE7a do po\xE7o. O duto r\xEDgido termina num PLET, ligado \xE0 \xE1rvore por um jumper. As SDUs distribuem o umbilical de controle para as \xE1rvores."},{id:"succao",n:"Estaca de suc\xE7\xE3o",t:"O PLET fica sobre uma estaca de suc\xE7\xE3o: cilindro de a\xE7o aberto embaixo e fechado no topo. Ela desce pelo guindaste e afunda pelo pr\xF3prio peso, em geral 30 a 60% do comprimento. O ROV fecha a escotilha e bombeia a \xE1gua de dentro, e a diferen\xE7a de press\xE3o crava o restante."},{id:"escoamento",n:"Inje\xE7\xE3o e escoamento",t:"Os injetores alternam \xE1gua e g\xE1s (WAG) para manter a press\xE3o do reservat\xF3rio. O \xF3leo armazenado sai em navios aliviadores com posicionamento din\xE2mico, ligados \xE0 popa do FPSO por espia e mangote."}],__=ps.linha,Ed=ps.queda,sr=ps.cravacao,y_=ps.t35;var xe=(i,t,e)=>Math.max(t,Math.min(e,i)),fn=(i,t,e)=>i+(t-i)*e,kn=i=>i*i*(3-2*i),Ai=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;var re=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),rh=i=>i*Math.PI/180;function ms(i=1234567){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var on=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Ea=9e3,wa=6200,oh=`#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
`,ah=`
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
`,ch=`#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
`,lh=`
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
`,hh=`
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
`,wd={V_PARS:oh,V_FIM:ah,F_PARS:ch,F_INI:lh,F_FIM:hh},Ta=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(hash12(i), hash12(i + vec2(1., 0.)), u.x), mix(hash12(i + vec2(0., 1.)), hash12(i + vec2(1., 1.)), u.x), u.y); }
float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= .5; } return s; }
`;function Td(i,{leve:t,reduce:e}){let n=new Zo({canvas:i,antialias:!t,alpha:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});n.setClearColor(0,0),n.toneMapping=Hl,n.toneMappingExposure=1.08,n.localClippingEnabled=!0;let s=new Jo,r=new bn(40,1,.1,16e4),o=new De;o.name="campo",s.add(o);let a=new da("#dcefff","#6b5a43",1.25);s.add(a);let c=new Vr("#fff1dc",2.3);c.position.set(-.42,1,.3).multiplyScalar(1e3),s.add(c);let l=new Vr("#9fd8ff",.7);l.position.set(.6,.3,-.75).multiplyScalar(1e3),s.add(l);let h=new le().setRGB(.05,.29,.41),d=new le().setRGB(.71,.83,.89);s.fog=new jo(h.clone(),1e-5);let u=(N,G)=>{let H=document.createElement("canvas");H.width=H.height=N,G(H.getContext("2d"),N);let ot=new Ks(H);return ot.colorSpace=_n,ot},p={brilho:u(128,(N,G)=>{let H=N.createRadialGradient(G/2,G/2,0,G/2,G/2,G/2);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.22,"rgba(255,255,255,.6)"),H.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=H,N.fillRect(0,0,G,G)}),sombra:u(128,(N,G)=>{let H=N.createRadialGradient(G/2,G/2,0,G/2,G/2,G/2);H.addColorStop(0,"rgba(0,0,0,.55)"),H.addColorStop(.5,"rgba(0,0,0,.28)"),H.addColorStop(1,"rgba(0,0,0,0)"),N.fillStyle=H,N.fillRect(0,0,G,G)}),nuvem:u(128,(N,G)=>{let H=ms(77);for(let ot=0;ot<26;ot++){let pt=G/2+(H()-.5)*G*.5,gt=G/2+(H()-.5)*G*.5,St=G*(.12+H()*.22),It=N.createRadialGradient(pt,gt,0,pt,gt,St);It.addColorStop(0,"rgba(255,255,255,.22)"),It.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=It,N.fillRect(0,0,G,G)}})},g=[0,1,2,3].map(()=>new hn(new R(1,0,0),1e7)),x=new ln({uniforms:wi.merge([Ut.fog,{uCorA:{value:new le("#a99d7f")},uCorB:{value:new le("#8c8063")},uCorC:{value:new le("#c2b795")},uLuz:{value:new le("#ffffff")},uOpac:{value:1},uGrade:{value:1},uR0:{value:wa},uR1:{value:Ea},uCam:{value:new R},uDist:{value:1e3}}]),vertexShader:oh+`
      varying vec3 vW;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp; gl_Position = projectionMatrix * mvPosition;
        ${ah}
      }`,fragmentShader:ch+Ta+`
      uniform vec3 uCorA, uCorB, uCorC, uLuz, uCam; uniform float uOpac, uGrade, uR0, uR1, uDist;
      varying vec3 vW;
      float grade(vec2 p, float passo, float px) { vec2 q = p / passo; vec2 g = abs(fract(q - .5) - .5) / max(fwidth(q), 1e-6); return 1. - min(min(g.x, g.y) / px, 1.); }
      void main() {
        ${lh}
        vec2 p = vW.xz; float r = length(p);
        // cor do sedimento: manchas largas, ondula\xE7\xF5es m\xE9dias e gr\xE3o fino (que some de longe)
        float n1 = fbm(p / 900.), n2 = fbm(p / 120. + 3.7), n3 = vnoise(p / 6.);
        float fino = 1. - smoothstep(.25, 1.2, fwidth(p.x / 6.));
        vec3 cor = mix(uCorB, uCorA, .3 + .45 * smoothstep(.2, .8, n1));
        cor = mix(cor, uCorC, smoothstep(.55, .9, n2) * .22);
        cor *= .92 + .16 * mix(.5, n3, fino);
        // relevo falso: derivada do ru\xEDdo m\xE9dio d\xE1 luz e sombra suaves
        float hx = fbm((p + vec2(4., 0.)) / 120. + 3.7) - n2, hz = fbm((p + vec2(0., 4.)) / 120. + 3.7) - n2;
        cor *= 1. + clamp((hx * -.8 + hz * .5) * 5., -.08, .08);
        // grade de levantamento (100 m e 1 km) e an\xE9is de 500 m a partir do FPSO
        float g1 = grade(p, 100., 1.) * (1. - smoothstep(.04, .12, fwidth(p.x / 100.)));
        float g2 = grade(p, 1000., 1.3);
        vec2 rq = vec2(r / 500.); float an = 1. - min(abs(fract(rq.x - .5) - .5) / max(fwidth(rq.x), 1e-6) / 1.2, 1.);
        float kmAn = step(.5, fract(r / 1000. + .25));
        cor = mix(cor, vec3(.96, .92, .82), (g1 * .10 + g2 * .16) * uGrade);
        cor = mix(cor, vec3(1., .86, .62), an * (kmAn > .5 ? .14 : .26) * uGrade * (1. - smoothstep(5200., 6000., r)));
        // luz do ambiente (o leito \xE9 plano, a ilumina\xE7\xE3o \xE9 praticamente constante)
        vec3 col = cor * uLuz;
        float a = uOpac * (1. - smoothstep(uR0, uR1, r));
        gl_FragColor = vec4(col, a);
        ${hh}
      }`,fog:!0,transparent:!0,depthWrite:!0,clipping:!0,clipIntersection:!0});x.clippingPlanes=g;let m=new $t(new Fr(Ea,160).rotateX(-Math.PI/2),x);m.renderOrder=-10,m.name="leito",o.add(m);let f=new ln({uniforms:wi.merge([Ut.fog,{uT:{value:0},uR0:{value:wa},uR1:{value:Ea},uSol:{value:new R(-.42,1,.3).normalize()}}]),vertexShader:oh+`
      varying vec3 vW; varying vec3 vV;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; vV = cameraPosition - wp.xyz;
        vec4 mvPosition = viewMatrix * wp; gl_Position = projectionMatrix * mvPosition; ${ah} }`,fragmentShader:ch+Ta+`
      uniform float uT, uR0, uR1; uniform vec3 uSol; varying vec3 vW; varying vec3 vV;
      void main() {
        ${lh}
        vec2 p = vW.xz; float r = length(p);
        // ondas em duas escalas; as menores somem quando ficam menores que o pixel
        float px = max(fwidth(p.x), 1e-3);
        float k1 = 1. - smoothstep(3., 24., px), k2 = 1. - smoothstep(18., 140., px);
        vec2 d = vec2(cos(p.x * .011 + p.y * .004 + uT * .6), sin(p.y * .009 - p.x * .003 + uT * .5)) * .35 * k2;
        d += vec2(sin((p.x + p.y) * .05 - uT * 1.2), cos((p.x - p.y) * .043 + uT * 1.0)) * .35 * k1;
        vec3 n = normalize(vec3(d.x * .12, 1., d.y * .12));
        vec3 v = normalize(vV); bool cima = gl_FrontFacing; if (!cima) n = -n;
        float fr = pow(1. - clamp(abs(dot(n, v)), 0., 1.), 3.);
        vec3 col; float a;
        if (cima) {
          vec3 h = normalize(uSol + v); float sp = pow(max(dot(n, h), 0.), 90.) * .9 * (.3 + .7 * k2);
          col = mix(vec3(.07, .34, .46), vec3(.36, .62, .76), fr) + sp; a = .06 + fr * .3 + sp * .25;
        } else {
          // vista de baixo: janela clara sobre a cabe\xE7a, quase transparente no resto
          float jan = smoothstep(.6, .95, abs(v.y));
          col = mix(vec3(.1, .42, .55), vec3(.7, .92, .98), jan) + pow(max(dot(n, -uSol), 0.), 40.) * .35;
          a = mix(.28, .4, jan) + fr * .3;
        }
        a *= 1. - smoothstep(uR0, uR1, r);
        gl_FragColor = vec4(col, a);
        ${hh}
      }`,fog:!0,transparent:!0,depthWrite:!1,side:un}),S=new $t(new Fr(Ea,128).rotateX(-Math.PI/2),f);S.position.y=Ae,S.renderOrder=20,S.name="mar",o.add(S);let y=(N,G,H)=>{let ot=Array.from({length:257},(gt,St)=>{let It=St/256*Math.PI*2;return new R(Math.cos(It)*wa*1.04,N,Math.sin(It)*wa*1.04)}),pt=new as(new Re().setFromPoints(ot),new Si({color:G,transparent:!0,opacity:H,depthWrite:!1}));return o.add(pt),pt};y(Ae,"#9fe6ff",.28),y(1,"#e8d6b0",.18);let _=new ln({uniforms:{uAr:{value:0}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
varying vec3 vD; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vD = wp.xyz - cameraPosition; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uAr; varying vec3 vD;
void main(){
#include <logdepthbuf_fragment>
 vec3 d = normalize(vD); float y = d.y;
 vec3 ceu = mix(vec3(.71, .83, .89), vec3(.24, .5, .68), pow(clamp(y, 0., 1.), .55));
 vec3 marLonge = mix(vec3(.37, .58, .68), vec3(.05, .27, .39), pow(clamp(-y, 0., 1.), .35));
 vec3 acima = y > 0. ? ceu : marLonge;
 vec3 sob = y > 0. ? mix(vec3(.05, .29, .41), vec3(.22, .62, .76), pow(clamp(y, 0., 1.), 1.6)) : mix(vec3(.05, .29, .41), vec3(.012, .07, .1), pow(clamp(-y, 0., 1.), .7));
 gl_FragColor = vec4(mix(sob, acima, uAr), 1.);
#include <colorspace_fragment>
}`,side:Qe,depthWrite:!1,depthTest:!1}),z=new $t(new tr(9e4,48,24),_);z.renderOrder=-100,z.frustumCulled=!1,s.add(z);let E=t?260:520,w=160,I=new Float32Array(E*3),T=ms(4242);for(let N=0;N<E;N++)I[N*3]=(T()-.5)*w,I[N*3+1]=(T()-.5)*w,I[N*3+2]=(T()-.5)*w;let b=new Re;b.setAttribute("position",new ke(I,3));let U=new $n({color:"#dff4fb",size:1.6,sizeAttenuation:!1,map:p.brilho,transparent:!0,opacity:0,depthWrite:!1,blending:Bn,fog:!1}),Y=new si(b,U);Y.frustumCulled=!1,s.add(Y);let W=new R,X={x:0,y:0,ax:0,ay:0},st=1,$=1,V=40;function Q(){let N=Math.round(X.x),G=Math.round(X.y);if(!N&&!G){r.clearViewOffset(),r.aspect=st/$,r.fov=V,r.updateProjectionMatrix();return}let H=st+2*Math.abs(N),ot=$+2*Math.abs(G);r.aspect=H/ot,r.fov=2*Math.atan(Math.tan(V*Math.PI/360)*ot/$)*180/Math.PI,r.setViewOffset(H,ot,N>0?2*N:0,G>0?2*G:0,st,$)}function At(N,G){st=Math.max(1,N),$=Math.max(1,G),Q()}function rt(N,G){X.ax=N,X.ay=G}let vt=new R,tt=!1;function ct(N,G,H,ot){let pt=e?1:Math.min(1,N*9),gt=fn(X.x,X.ax,pt),St=fn(X.y,X.ay,pt);(Math.abs(gt-X.x)>.01||Math.abs(St-X.y)>.01||Math.round(gt)!==Math.round(X.x)||Math.round(St)!==Math.round(X.y))&&(X.x=Math.abs(gt-X.ax)<.5?X.ax:gt,X.y=Math.abs(St-X.ay)<.5?X.ay:St,Q());let It=Math.max(1,r.position.distanceTo(H)),j=o.worldToLocal(vt.copy(r.position)).y,yt=kn(xe((j-Ae+5)/60,0,1));s.fog.color.copy(h).lerp(d,yt),z.position.copy(r.position),_.uniforms.uAr.value=yt,s.fog.density=fn(.16,.06,yt)/Math.max(It,60),yt>.5!==tt&&(tt=yt>.5,ot&&ot(tt));let D=(1-kn(xe((It-60)/260,0,1)))*(1-yt);if(U.opacity=D*.5,Y.visible=D>.01,Y.visible){W.copy(r.position);let Vt=b.attributes.position.array,bt=w/2;for(let Tt=0;Tt<E;Tt++){let Rt=Vt[Tt*3],Zt=Vt[Tt*3+1],Ot=Vt[Tt*3+2];e||(Zt-=N*(.15+Tt%7*.04));let C=((Rt-W.x)%w+w*1.5)%w-bt,M=((Zt-W.y)%w+w*1.5)%w-bt,q=((Ot-W.z)%w+w*1.5)%w-bt;Vt[Tt*3]=W.x+C,Vt[Tt*3+1]=W.y+M,Vt[Tt*3+2]=W.z+q}b.attributes.position.needsUpdate=!0}return f.uniforms.uT.value=e?0:G,x.uniforms.uDist.value=It,{dist:It,kAr:yt}}return{renderer:n,scene:s,camera:r,campo:o,leito:m,leitoMat:x,mar:S,marMat:f,planosCorte:g,TX:p,luzes:{hemi:a,sol:c,contra:l},tamanho:At,deslocar:rt,atualizar:ct,get offset(){return{x:X.x,y:X.y}},set fovBase(N){V=N,Q()},get fovBase(){return V}}}var Ad=new Rn,Aa=new R,rr=class extends fa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Me(t,3)),this.setAttribute("uv",new Me(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ds(e,6,1);return this.setAttribute("instanceStart",new Nn(n,3,0)),this.setAttribute("instanceEnd",new Nn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ds(e,6,1);return this.setAttribute("instanceColorStart",new Nn(n,3,0)),this.setAttribute("instanceColorEnd",new Nn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new la(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ad.setFromBufferAttribute(e),this.boundingBox.union(Ad))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Aa.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Aa)),Aa.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Aa));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};Ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new wt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Sn.line={uniforms:wi.merge([Ut.common,Ut.fog,Ut.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var or=class extends ln{static get type(){return"LineMaterial"}constructor(t){super({uniforms:wi.clone(Sn.line.uniforms),vertexShader:Sn.line.vertexShader,fragmentShader:Sn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var gs=2463534242,e_=()=>(gs^=gs<<13,gs^=gs>>>17,gs^=gs<<5,(gs>>>0)/4294967296),uh=new Fe,Rd=new R,Cd=new R,pn=new Fe,mn=new Fe,ai=new Fe,dh=new R,fh=new de,gn=new ma,Pd=new R,Ra=new Rn,Ca=new zn,ci=new Fe,li,xs;function Id(i,t,e){return ci.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=xs/e.width,ci.y=xs/e.height,ci.applyMatrix4(i.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}function n_(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){gn.start.fromBufferAttribute(s,a),gn.end.fromBufferAttribute(r,a),gn.applyMatrix4(e);let l=new R,h=new R;li.distanceSqToSegment(gn.start,gn.end,h,l),h.distanceTo(l)<xs*.5&&t.push({point:h,pointOnLine:l,distance:li.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function i_(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),d=-t.near;li.at(1,ai),ai.w=1,ai.applyMatrix4(t.matrixWorldInverse),ai.applyMatrix4(n),ai.multiplyScalar(1/ai.w),ai.x*=r.x/2,ai.y*=r.y/2,ai.z=0,dh.copy(ai),fh.multiplyMatrices(t.matrixWorldInverse,o);for(let u=0,p=h;u<p;u++){if(pn.fromBufferAttribute(c,u),mn.fromBufferAttribute(l,u),pn.w=1,mn.w=1,pn.applyMatrix4(fh),mn.applyMatrix4(fh),pn.z>d&&mn.z>d)continue;if(pn.z>d){let y=pn.z-mn.z,_=(pn.z-d)/y;pn.lerp(mn,_)}else if(mn.z>d){let y=mn.z-pn.z,_=(mn.z-d)/y;mn.lerp(pn,_)}pn.applyMatrix4(n),mn.applyMatrix4(n),pn.multiplyScalar(1/pn.w),mn.multiplyScalar(1/mn.w),pn.x*=r.x/2,pn.y*=r.y/2,mn.x*=r.x/2,mn.y*=r.y/2,gn.start.copy(pn),gn.start.z=0,gn.end.copy(mn),gn.end.z=0;let x=gn.closestPointToPointParameter(dh,!0);gn.at(x,Pd);let m=_a.lerp(pn.z,mn.z,x),f=m>=-1&&m<=1,S=dh.distanceTo(Pd)<xs*.5;if(f&&S){gn.start.fromBufferAttribute(c,u),gn.end.fromBufferAttribute(l,u),gn.start.applyMatrix4(o),gn.end.applyMatrix4(o);let y=new R,_=new R;li.distanceSqToSegment(gn.start,gn.end,_,y),e.push({point:_,pointOnLine:y,distance:li.origin.distanceTo(_),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var Pa=class extends $t{constructor(t=new rr,e=new or({color:e_()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Rd.fromBufferAttribute(e,o),Cd.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Rd.distanceTo(Cd);let r=new ds(s,2,1);return t.setAttribute("instanceDistanceStart",new Nn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Nn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;li=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;xs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ca.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=xs*.5;else{let d=Math.max(s.near,Ca.distanceToPoint(li.origin));l=Id(s,d,c.resolution)}if(Ca.radius+=l,li.intersectsSphere(Ca)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ra.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=xs*.5;else{let d=Math.max(s.near,Ra.distanceToPoint(li.origin));h=Id(s,d,c.resolution)}Ra.expandByScalar(h),li.intersectsBox(Ra)!==!1&&(n?n_(this,e):i_(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(uh),this.material.uniforms.resolution.value.set(uh.z,uh.w))}};function $r(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Re,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Dd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][u]);let g=Dd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Dd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ke(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+d,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var s_=ms(97531),ph=new Map;function Qt(i,t={}){let e=i+JSON.stringify({...t,map:t.map?t.map.uuid:0,emap:t.emap?t.emap.uuid:0,matSaia:0});if(!t.unico&&ph.has(e))return ph.get(e);let n=new Xi({color:i,metalness:t.m??.35,roughness:t.r??.6,emissive:t.e||"#000000",emissiveIntensity:t.ei??1,side:t.lados?un:t.dentro?Qe:ti,map:t.map||null,emissiveMap:t.emap||null,flatShading:!!t.flat});return t.unico||ph.set(e,n),n}var Xe={casco:"#2e3a45",fundo:"#7a2c24",faixa:"#15191d",conves:"#5b6a62",aco:"#9aa7b0",aco2:"#7f8d97",aco3:"#5f6d77",branco:"#e4eaee",laranja:"#ff6a1a",amarelo:"#f2b51c",amareloEsc:"#c98f12",cinza:"#3d4a52",preto:"#1d2328",creme:"#e9dcbc"};function Ri(i){i.updateMatrixWorld(!0);let t=new Map,e=[];i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.userData.manter)return;let s=n.geometry.clone().applyMatrix4(n.matrixWorld.clone().premultiply(new de().copy(i.matrixWorld).invert())),r=n.material.uuid;t.has(r)||t.set(r,{m:n.material,gs:[]}),t.get(r).gs.push(s.index?s.toNonIndexed():s),e.push(n)});for(let n of e)n.parent.remove(n);for(let{m:n,gs:s}of t.values()){let r=s.map(a=>{for(let c of Object.keys(a.attributes))["position","normal","uv"].includes(c)||a.deleteAttribute(c);return a.attributes.uv||a.setAttribute("uv",new ke(new Float32Array(a.attributes.position.count*2),2)),a}),o=$r(r,!1);o&&i.add(new $t(o,n))}return i}var mh=(i,t,e,n)=>(i.position.set(t,e,n),i),Ie=(i,t,e,n,s,r,o,a,c=0)=>{let l=new $t(new We(t,e,n),a);return l.position.set(s,r+e/2,o),l.rotation.y=c,i.add(l),l},In=(i,t,e,n,s,r,o,a,c=16,l="y")=>{let h=new $t(new sn(t,e,n,c),a);return h.position.set(s,r,o),l==="x"&&(h.rotation.z=Math.PI/2),l==="z"&&(h.rotation.x=Math.PI/2),i.add(h),h},xh=(i,t,e)=>{let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Ks(n);return s.colorSpace=_n,s.anisotropy=4,s},Ld,Ud,Ia=()=>Ld||(Ld=(()=>{let i=xh(256,256,(t,e,n)=>{t.fillStyle="#e4eaee",t.fillRect(0,0,e,n);for(let s=8;s<n;s+=32)for(let r=6;r<e;r+=16)t.fillStyle=s_()<.65?"#ffd58a":"#2f3b44",t.fillRect(r,s,10,12)});return i.wrapS=i.wrapT=Rr,i})()),r_=()=>Ud||(Ud=xh(256,256,(i,t)=>{i.fillStyle="#2d6b4b",i.beginPath(),i.arc(t/2,t/2,t/2,0,6.283),i.fill(),i.strokeStyle="#f4f4f4",i.lineWidth=9,i.beginPath(),i.arc(t/2,t/2,t/2-14,0,6.283),i.stroke(),i.strokeStyle="#f2c230",i.lineWidth=6,i.beginPath(),i.arc(t/2,t/2,t*.3,0,6.283),i.stroke(),i.fillStyle="#f4f4f4",i.font="700 120px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("H",t/2,t/2+6)})),gh=new Map,o_=i=>gh.get(i)||(gh.set(i,xh(1024,768,(t,e,n)=>{t.fillStyle=Xe.amarelo,t.fillRect(0,0,e,n);let s=n/i;t.fillStyle="rgba(0,0,0,.18)";for(let r=0;r<e;r+=e/4)t.fillRect(r,0,4,n);for(let r=0;r<=i;r++){let o=n-r*s;if(t.fillStyle="#16181a",t.fillRect(0,o-(r%2?2:4),e,r%2?4:8),r%2===0&&r>0&&r<i){t.font=`700 ${Math.round(s*.52)}px sans-serif`,t.textAlign="center",t.textBaseline="middle";for(let a of[e*.125,e*.375,e*.625,e*.875])t.fillText(String(r),a,o+s*.5)}}})),gh.get(i));function zd({L:i,B:t,pontal:e,calado:n}){let s=new De,r=i/2,o=t/2,a=new Wi;a.moveTo(-r,-o+3),a.quadraticCurveTo(-r,-o,-r+4,-o),a.lineTo(r-46,-o),a.bezierCurveTo(r-14,-o,r,-o*.55,r,0),a.bezierCurveTo(r,o*.55,r-14,o,r-46,o),a.lineTo(-r+4,o),a.quadraticCurveTo(-r,o,-r,o-3),a.closePath();let c=(w,I,T)=>{let b=new ls(a,{depth:w,bevelEnabled:!1,curveSegments:18});b.rotateX(-Math.PI/2);let U=new $t(b,T);return U.position.y=I,s.add(U),U},l=e-n;c(n-1.2,-n,Qt(Xe.fundo,{r:.75,m:.15})),c(2.4,-1.2,Qt(Xe.faixa,{r:.7})),c(l-1.2,1.2,Qt(Xe.casco,{r:.55,m:.3})),c(.5,l,Qt(Xe.conves,{r:.9,m:.05}));let h=l+.5,d=[Qt("#9aa7b0",{m:.5,r:.45}),Qt("#7f8d97",{m:.5,r:.5}),Qt("#b9a77f",{m:.35,r:.55}),Qt("#8796a0",{m:.55,r:.4}),Qt("#a7b3ba",{m:.45,r:.5})],u=Qt(Xe.aco3,{r:.7}),p=Qt("#c9d3d8",{m:.7,r:.3}),g=Qt("#5d7f99",{m:.4,r:.5});Ie(s,236,3,52,-6,h,0,u);let x=-118,m=[[22,15,0],[22,18,1],[24,21,3],[24,21,3],[22,16,2],[22,14,0],[20,17,4],[22,13,1],[20,12,2]];for(let[w,I,T]of m){for(let b of[-13.5,13.5]){let U=I+(b>0?2:-1);if(Ie(s,w-1.5,U,22,x+w/2,h+3,b,d[(T+(b>0?1:0))%d.length]),(T===0||T===2)&&(In(s,1.6,1.6,w-6,x+w/2,h+3+U+1.6,b+5,p,16,"x"),In(s,1.3,1.3,w-8,x+w/2,h+3+U+1.3,b-5,p,16,"x")),T===3)for(let Y of[-6,0,6])In(s,1.1,1.1,7,x+w/2+Y/3,h+3+U+3.5,b+Y,g,12)}x+=w+2}Ie(s,230,2.2,5,-6,h+14,0,Qt("#c9a35a",{m:.6,r:.4}));for(let w of[-10,-4,4,10])In(s,1.2,1.4,12,-96,h+3+21+6,w,Qt("#6c7780",{m:.5}),12);let f=new $t(new We(22,26,42),Qt("#ffffff",{map:Ia(),emap:Ia(),e:"#ffcf80",ei:.22,r:.6,m:.05}));f.position.set(-r+18,h+13,0),s.add(f);let S=new $t(new sn(13.5,13.5,1,40),Qt("#ffffff",{map:r_(),r:.8,m:0}));S.position.set(-r+9,h+28,0),s.add(S),Ie(s,3,2,3,-r+9,h+26,0,u);for(let w of[-23,23])for(let I of[-r+12,-r+24]){let T=new $t(new oa(1.6,6,4,10),Qt(Xe.laranja,{r:.5}));T.rotation.z=Math.PI/2,T.position.set(I,h+7,w),s.add(T)}let y=Qt(Xe.amarelo,{m:.4,r:.45});for(let[w,I,T]of[[-40,25,.6],[50,-25,-.5],[118,22,2.4]]){In(s,1.6,2,16,w,h+8,I,y,12),Ie(s,6,4,5,w,h+16,I,y);let b=new $t(new We(44,1.4,1.4),y);b.position.set(w+Math.cos(T)*20,h+26,I-Math.sin(T)*20),b.rotation.y=T,b.rotation.z=.42*Math.sign(Math.cos(T)||1),s.add(b)}let _=Qt("#9aa7b0",{m:.6,r:.4}),z=r-26;for(let[w,I]of[[-3,-3],[3,-3],[-3,3],[3,3]]){let T=new $t(new sn(.35,.5,92,6),_);T.position.set(z+w*.6+6,h+46,I*.6),T.rotation.z=-.12,s.add(T)}for(let w=0;w<9;w++){let I=h+6+w*10;Ie(s,4.6-w*.18,.3,4.6-w*.18,z+1+w*1.2,I,0,_)}s.userData.ponta=new R(z+12,h+94,0);let E=Qt(Xe.aco3,{r:.6,m:.4});for(let w of[1,-1]){Ie(s,232,4,6,0,-3,-w*(o+3),E);for(let I=-6;I<=6;I++)Ie(s,1.2,9,1.2,I*18,-6,-w*(o+1),E)}In(s,3,3,8,-r+6,h+4,11,Qt("#d24b2a",{r:.6}),16,"z");for(let w of[r-33.75,-r+33.75])for(let I of[o+.5,-o-.5])Ie(s,32,3,2.2,w,-14,-I,Qt(Xe.preto,{r:.6}));return Ri(s),s}function Nd({L:i,B:t}){let e=new De,n=i/2,s=t/2,r=new Wi;r.moveTo(-n,-s+4),r.quadraticCurveTo(-n,-s,-n+6,-s),r.lineTo(n-40,-s),r.bezierCurveTo(n-10,-s,n,-s*.5,n,0),r.bezierCurveTo(n,s*.5,n-10,s,n-40,s),r.lineTo(-n+6,s),r.quadraticCurveTo(-n,s,-n,s-4),r.closePath();let o=(c,l,h)=>{let d=new ls(r,{depth:c,bevelEnabled:!1,curveSegments:14});d.rotateX(-Math.PI/2);let u=new $t(d,h);u.position.y=l,e.add(u)};o(15,-16,Qt(Xe.fundo,{r:.75,m:.15})),o(2,-1,Qt(Xe.faixa)),o(9,1,Qt("#24344d",{r:.55,m:.3})),o(.4,10,Qt("#5d6d63",{r:.9,m:.05}));let a=new $t(new We(16,20,36),Qt("#ffffff",{map:Ia(),r:.6,m:.05}));return a.position.set(-n+20,20.4,0),e.add(a),Ie(e,10,2,44,-n+20,30.4,0,Qt(Xe.branco)),Ie(e,6,12,7,-n+8,10.4,0,Qt("#c4372d",{r:.6})),Ie(e,i*.6,1.4,3,6,10.4,0,Qt("#c9a35a",{m:.5})),Ie(e,6,3,30,10,10.4,0,Qt("#8a98a2",{m:.5})),Ie(e,10,8,14,n-18,10.4,0,Qt("#b0bcc3",{m:.5})),Ri(e),e}function Od(){let i=new De,t=130,e=30,n=t/2,s=new Wi;s.moveTo(-n,-e/2),s.lineTo(n-22,-e/2),s.quadraticCurveTo(n,-e/2,n,0),s.quadraticCurveTo(n,e/2,n-22,e/2),s.lineTo(-n,e/2),s.closePath();let r=new ls(s,{depth:14,bevelEnabled:!1});r.rotateX(-Math.PI/2);let o=new $t(r,Qt("#2b4d73",{r:.55}));o.position.y=-7,i.add(o);let a=r.clone(),c=new $t(a,Qt(Xe.fundo));c.scale.y=.45,c.position.y=-7.2,i.add(c),Ie(i,26,14,26,n-30,7,0,Qt("#ffffff",{map:Ia(),r:.6,m:.05})),Ie(i,70,.5,28,-18,7,0,Qt("#5d6d63",{r:.9}));let l=Qt(Xe.amarelo,{m:.4,r:.45});In(i,3,3.6,14,-10,14,-9,l,14);let h=new $t(new We(70,2.2,2.2),l);return h.position.set(-30,40,-20),h.rotation.y=.7,h.rotation.z=.55,i.add(h),i.userData.gancho=new R(-56,56,-38),Ri(i),i}function Fd(){let i=new De,t=Qt(Xe.amarelo,{r:.45,m:.2,e:"#3a2a05",ei:.3}),e=Qt(Xe.preto,{r:.6,m:.4});Ie(i,3.2,.7,2,0,1.25,0,t),Ie(i,3.2,1.25,2,0,0,0,e);for(let[r,o]of[[1.4,.8],[1.4,-.8],[-1.4,.8],[-1.4,-.8]])In(i,.22,.22,.5,r,.6,o,Qt("#6d7a83"),10,"x");for(let r of[.55,-.55]){let o=new $t(new We(1.4,.12,.12),Qt("#bfc8cc",{m:.7}));o.position.set(1.9,.25,r),o.rotation.z=-.4,i.add(o)}let n=new $t(new tr(.12,8,6),new Cn({color:"#fff6c8"}));n.position.set(1.65,.95,.6),n.userData.manter=!0,i.add(n);let s=n.clone();return s.position.z=-.6,i.add(s),i}function Da(i,t={}){let e=new De,n=i.D/2,s=[[0,0],[n*.55,i.nose*.45],[n*.92,i.nose*.85],[n,i.nose],[n,i.L-.2],[n*.9,i.L],[n*.2,i.L+.05],[0,i.L+.05]].map(([c,l])=>new wt(c,l)),r=new $t(new Or(s,24),Qt(t.corpo||"#93a7b1",{m:.75,r:.32}));e.add(r);let o=Qt("#7d8f99",{m:.7,r:.35});if(i.E>0){let c=new $t(new We(i.D*.18,i.E,i.D*.5),o);c.position.y=i.L+i.E/2,e.add(c)}let a=new $t(new Zn(i.D*.26,i.D*.08,8,18),o);if(a.position.y=i.L+i.E+i.D*.2,e.add(a),i.fins){let c=new Wi,l=1.4*i.w,h=.5*i.w;c.moveTo(0,i.z1),c.lineTo(i.w,i.z1+l),c.lineTo(i.w,i.z2-h),c.lineTo(0,i.z2),c.closePath();let d=new ls(c,{depth:.08,bevelEnabled:!1});d.translate(n-.02,0,-.04);let u=Qt(t.aleta||"#f08a3c",{r:.5,m:.3});for(let p=0;p<i.fins;p++){let g=new $t(d,u);g.rotation.y=p*Math.PI*2/i.fins,e.add(g)}}return e.userData.olhal=i.L+i.E+i.D*.2,e}function La({D:i,L:t,topo:e},n={}){let s=new De,r=i/2,o=new $t(new sn(r,r,t,40,1,!0),n.matSaia||Qt("#ffffff",{map:o_(t),r:.55,m:.2}));o.position.y=e-t/2,s.add(o);let a=new $t(o.geometry,n.matDentro||Qt("#626b72",{r:.7,m:.35,dentro:!0}));a.position.y=o.position.y,s.add(a);let c=Qt("#4c565d",{r:.55,m:.5}),l=Qt("#7f8d97",{r:.45,m:.6}),h=Qt(Xe.amarelo,{r:.5,m:.2}),d=new $t(new sn(r,r,.3,40),c);d.position.y=e+.15,s.add(d);let u=new $t(new Zn(r,.12,6,40),h);u.rotation.x=Math.PI/2,u.position.y=e+.32,s.add(u);for(let S of[0,Math.PI/2]){let y=new $t(new We(i*.96,.45,.35),l);y.position.y=e+.5,y.rotation.y=S,s.add(y)}let p=new De;p.position.set(r*.45,e+.3,r*.45),p.add(mh(new $t(new sn(.55,.55,.35,20),l),0,.17,0));let g=new De;g.position.set(-.55,.36,0);let x=new $t(new sn(.58,.58,.1,20),Qt("#d23c2a",{r:.5}));x.position.x=.55,g.add(x);let m=new $t(new Zn(.18,.04,6,12,Math.PI),Qt("#d9e1e4",{m:.7}));m.position.set(.55,.08,0),g.add(m),p.add(g),s.add(p);let f=new De;f.position.set(-r*.5,e+.3,-r*.35),f.add(mh(new $t(new sn(.18,.18,.8,12),l),0,.4,0)),f.add(mh(new $t(new We(.7,.55,.7),Qt(Xe.laranja,{r:.5})),0,.95,0)),s.add(f);for(let S=0;S<4;S++){let y=Math.PI/4+S*Math.PI/2,_=new $t(new We(.12,.7,.5),l);_.position.set(Math.cos(y)*r*.72,e+.65,Math.sin(y)*r*.72),_.rotation.y=-y,s.add(_)}for(let S=0;S<6;S++){let y=S*Math.PI/3+.3,_=new $t(new Zn(.22,.04,6,10,Math.PI),Qt("#d9e1e4",{m:.7}));_.position.set(Math.cos(y)*(r+.05),e-.3,Math.sin(y)*(r+.05)),_.rotation.y=-y+Math.PI/2,s.add(_)}return s.userData={saia:o,saiaIn:a,tampa:d,lid:g,esc:p,porta:f,R:r,L:t,topo:e,olhais:[0,1,2,3].map(S=>{let y=Math.PI/4+S*Math.PI/2;return new R(Math.cos(y)*r*.72,e+1,Math.sin(y)*r*.72)})},s}function Bd(i){let t=new De,e=Qt(Xe.amarelo,{r:.45,m:.25}),n=Qt(Xe.cinza,{r:.65,m:.3}),s=Qt("#9fb0b8",{m:.7,r:.35});Ie(t,6.5,.6,6.5,0,0,0,n),In(t,.5,.55,2,0,1.6,0,s,16);for(let[r,o]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]])Ie(t,.25,4.2,.25,r,.6,o,e);return Ie(t,4.2,.25,4.2,0,4.8,0,e),Ie(t,4.2,.25,4.2,0,2.4,0,e),Ie(t,1.6,2.6,1.6,0,2.3,0,s),In(t,.32,.32,2.4,1.1,3.4,0,s,12,"x"),Ie(t,.25,1.4,1.6,-2.05,2.8,0,Qt("#26313a",{r:.5})),In(t,.75,.75,.8,0,5.4,0,Qt(i,{r:.4,m:.3,e:i,ei:.25}),18),Ri(t)}function Hd(){let i=new De,t=Qt(Xe.amarelo,{r:.45,m:.25}),e=Qt("#9fb0b8",{m:.7,r:.35}),n=Qt(Xe.cinza);Ie(i,9,.5,5,0,0,0,n);for(let[s,r]of[[-4.3,-2.3],[4.3,-2.3],[-4.3,2.3],[4.3,2.3]])Ie(i,.22,3,.22,s,.5,r,t);return Ie(i,9,.22,.22,0,3.3,-2.3,t),Ie(i,9,.22,.22,0,3.3,2.3,t),Ie(i,.22,.22,5,-4.3,3.3,0,t),Ie(i,.22,.22,5,4.3,3.3,0,t),In(i,.3,.3,9.5,0,1.4,0,e,12,"x"),In(i,.55,.55,1.2,4.6,1.4,0,e,14,"x"),Ie(i,1.2,1.2,1.2,-1.5,.5,0,Qt("#d23c2a",{r:.5})),Ri(i)}function kd(){let i=new De,t=Qt(Xe.amarelo,{r:.45,m:.25}),e=Qt(Xe.cinza);Ie(i,9,.5,7,0,0,0,e),Ie(i,6,3,4,0,.5,0,t);for(let n=0;n<6;n++)In(i,.2,.2,.9,-2.5+n,3.9,1.4,Qt("#1d2328"),8);return Ri(i)}var ee=(i,t,e)=>new R(i,e,-t),On=i=>ee(i[0],i[1],i[2]),vh=(i,t)=>{let e=Math.hypot(i,t)||1;return[i/e,t/e]};function Gd(i){try{if(window.Torpedo&&window.Lab&&window.Lab.MODELS&&window.Lab.MODELS[i]){let e=window.Torpedo.geometry(i);if(e&&e.L>0)return e}}catch{}let t={120:{D:1.219,L:20.93,E:3,fins:4},35:{D:.762,L:13.85,E:0,fins:4}}[i]||{D:1.219,L:20.93,E:3,fins:4};return{...t,R:t.D/2,nose:Math.min(1.8*t.D,.12*t.L),w:.56*t.D,z1:.4*t.L,z2:.97*t.L}}function vs(i,t){let e=[i[0].clone()],n=0;for(let s=1;s<i.length;s++){let r=i[s-1],o=i[s],a=r.distanceTo(o);if(a<1e-9)continue;let c=t-n;for(;c<=a;)e.push(r.clone().lerp(o,c/a)),c+=t;n=a-(c-t)}return e}var ar=i=>i.reduce((t,e,n)=>n?t+e.distanceTo(i[n-1]):0,0);function a_(i,t){let e=0;for(let n=1;n<i.length;n++){let s=i[n].distanceTo(i[n-1]);if(e+s>=t){let r=i[n-1].clone().lerp(i[n],(t-e)/Math.max(s,1e-9));return[[...i.slice(0,n),r],[r.clone(),...i.slice(n)]]}e+=s}return[i.slice(),[i[i.length-1].clone()]]}function c_(i,t,e){let n=1,s=1e6;for(let o=0;o<80;o++){let a=(n+s)/2;a*(Math.cosh(i/a)-1)>t?n=a:s=a}let r=(n+s)/2;return Array.from({length:e},(o,a)=>{let c=i*(1-a/(e-1));return[i-c,r*(Math.cosh(c/r)-1)]})}function Wd(i,t){let{campo:e,TX:n}=i,{reduce:s}=t,r=[],o=[],a=[],c=[],l=[],h=[],d={},u=v=>{if(!d[v]){let L=new De;L.name="cat-"+v,e.add(L),d[v]={k:v,g:L,mats:new Set,on:!0,foco:1,alvo:1}}return d[v]};["fpso","moor","prod","inj","umb","fund","nav","inst"].forEach(u);let p=(v,L)=>(L.userData.op==null&&(L.userData.op=L.opacity),u(v).mats.add(L),L),g=(v,L)=>{let B=new or({color:L.cor,linewidth:L.w??2,transparent:!0,opacity:L.op??1,dashed:!!L.dash,dashSize:L.dash?L.dash[0]:1,gapSize:L.dash?L.dash[1]:1,depthWrite:!1,depthTest:L.depthTest??!0,worldUnits:!1,fog:!0});return B.userData.op=B.opacity,r.push(B),v&&p(v,B),B},x=(v,L,B)=>{let J=[],et=[];for(let{pts:xt,id:Jt}of v)for(let kt=0;kt<xt.length-1;kt++)J.push(xt[kt].x,xt[kt].y,xt[kt].z,xt[kt+1].x,xt[kt+1].y,xt[kt+1].z),et.push(Jt);let Mt=new rr;Mt.setPositions(J);let dt=new Pa(Mt,L);return dt.computeLineDistances(),B&&(dt.userData.owner=et,c.push(dt)),dt},m=(v,L,B,J=6)=>{let et=v.filter(dt=>dt.length>1).map(dt=>{let xt=new Ei(dt,!1,"centripetal");return new ca(xt,Math.max(4,Math.min(400,Math.round(dt.length*1.6))),L,J,!1)}),Mt=et.length?$r(et,!1):new Re;return et.forEach(dt=>dt.dispose()),new $t(Mt,B)},f=v=>(v.idx=o.length,v.pos=v.pos||new R,o.push(v),v),S=(v,L,B,J,et={})=>{let Mt={pos:v,texto:L,cor:B,cat:J,prio:et.prio??1,caps:et.caps||null,faixa:et.faixa||[0,1e9],item:et.item||null};return a.push(Mt),Mt},y=(v,L={})=>new Xi({color:v,metalness:L.m??.35,roughness:L.r??.6,emissive:L.e||"#000000",emissiveIntensity:L.ei??1,transparent:!!L.t,opacity:L.op??1}),_=(v,L=1.006)=>(v.onBeforeCompile=B=>{B.fragmentShader=B.fragmentShader.replace("#include <logdepthbuf_fragment>",`#if defined( USE_LOGDEPTHBUF )
 gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth * ${L.toFixed(4)} ) * logDepthBufFC * 0.5;
#endif`)},v.customProgramCacheKey=()=>"atras"+L,v),z=new Cn({map:n.sombra,transparent:!0,depthWrite:!1,opacity:.9}),E=(v,L,B,J,et,Mt=0)=>{let dt=new $t(new Js(J,et).rotateX(-Math.PI/2),z);return dt.position.set(L,.08,B),dt.rotation.y=Mt,dt.renderOrder=-9,u(v).g.add(dt),dt},w=Xr,I=zd(dn);I.position.y=Ae,u("fpso").g.add(I);let T=dn.pontal-dn.calado,b=new os(new Gi({map:n.brilho,color:"#ff8a2c",transparent:!0,blending:Bn,depthWrite:!1}));b.scale.set(12,17,1);let U=new os(new Gi({map:n.brilho,color:"#ffd27a",transparent:!0,blending:Bn,depthWrite:!1}));U.scale.set(5,5,1);let Y=I.userData.ponta||new R(140,110,0);b.position.copy(Y).add(new R(0,9,0)),U.position.copy(Y).add(new R(0,4,0)),I.add(b,U);{let v=[];for(let B=0;B<34;B++){let J=-160+B*9.6;v.push(J,T+1.2,-dn.B/2+.5,J,T+1.2,dn.B/2-.5)}let L=new Re;L.setAttribute("position",new Me(v,3)),I.add(new si(L,new $n({color:"#ffd59a",size:2.6,sizeAttenuation:!1,map:n.brilho,transparent:!0,blending:Bn,depthWrite:!1})))}let W=new $t(new We(dn.L,dn.pontal+40,dn.B+8),new Cn({visible:!1}));W.position.set(0,Ae+8,0),e.add(W);let X=f({kind:"fpso",grupo:"Superf\xEDcie",t:"FPSO",sub:"unidade de produ\xE7\xE3o, armazenamento e transfer\xEAncia",c:w.ink,cat:"fpso",pos:ee(0,0,Ae+30),raio:170,marcador:!0,prio:9,d:"Produz, processa, armazena e transfere o \xF3leo. A ancoragem espalhada mant\xE9m o aproamento fixo; os risers ficam pendurados nos dois bordos.",stats:[["Comprimento",`${dn.L} m`],["Boca",`${dn.B} m`],["Processamento de \xF3leo","180 mil bbl/d"],["G\xE1s","12 milh\xF5es m\xB3/d"],["Armazenamento","1,4 milh\xE3o bbl"],["Ancoragem","24 linhas em 4 \xD7 6"],["L\xE2mina d\u2019\xE1gua",`${re(Ae)} m`]]});W.userData.item=X,c.push(W),S(ee(0,0,Ae+60),"FPSO",w.ink,"fpso",{prio:9,item:X}),S(ee(Y.x,0,Ae+Y.y+20),"Tocha","#ffb36b","fpso",{prio:3,caps:["fpso"],faixa:[0,2500]}),S(ee(-dn.L/2+12,0,Ae+52),"Acomoda\xE7\xF5es e heliponto",w.ink,"fpso",{prio:3,caps:["fpso"],faixa:[0,2500]}),S(ee(30,0,Ae+46),"Plantas de processo",w.ink,"fpso",{prio:2,caps:["fpso"],faixa:[0,2e3]});let st=Gd(120),$=Gd(35),V={eye:t.eye??17.05,tip:t.tip??40.98,eye35:t.eye35??20.98,tip35:t.tip35??34.83};function Q(v){let L=Da(v);L.updateMatrixWorld(!0);let B=new Map;return L.traverse(J=>{if(!J.isMesh)return;let et=J.material.uuid;B.has(et)||B.set(et,{m:J.material,gs:[]});let Mt=J.geometry.clone().applyMatrix4(J.matrixWorld);B.get(et).gs.push(Mt.index?Mt.toNonIndexed():Mt)}),[...B.values()].map(({m:J,gs:et})=>(et.forEach(Mt=>{for(let dt of Object.keys(Mt.attributes))["position","normal"].includes(dt)||Mt.deleteAttribute(dt)}),{m:J,g:$r(et,!1)}))}let At=Q(st),rt=Q($),vt=(()=>{let v=new Zn(.14,.058,5,12);return v.scale(2.14,1,1),v})(),tt=y("#5b636a",{m:.75,r:.42}),ct={g:null,linhas:[],mats:{},elos:[],perto:null},N=[],G=[],H=250,ot=70;function pt(){let v=u("moor");if(ct.g){v.g.remove(ct.g),ct.g.traverse(qt=>{qt.geometry&&qt.geometry!==vt&&!At.some(Kt=>Kt.g===qt.geometry)&&qt.geometry.dispose()});for(let qt of[ct.lc,ct.lp,ct.lr,ct.ln]){let Kt=c.indexOf(qt);Kt>=0&&c.splice(Kt,1)}}let L=new De;ct.g=L,v.g.add(L);let B=nh(V.eye);ct.linhas=B;let J=[],et=[],Mt=[],dt=[],xt=[],Jt=[];ct.elos=[];for(let qt of B){qt.revV=qt.rev.map(On),qt.freeV=qt.free.map(On);let Kt=qt.segs.map(Ge=>({mat:Ge.mat,pts:Ge.pts.map(On)})),pe=Kt.findIndex(Ge=>Ge.mat!=="poliester"),He=qt.main?H:ot,Le=[];if(pe>=0){let[Ge,ef]=a_(Kt[pe].pts,He);Le=Ge,Kt[pe].pts=ef}for(let Ge of Kt)Ge.pts.length<2||(Ge.mat==="poliester"?(et.push({pts:Ge.pts,id:qt.id}),Jt.push(Ge.pts)):(J.push({pts:Ge.pts,id:qt.id}),xt.push(Ge.pts)));Mt.push({pts:qt.revV,id:qt.id}),dt.push({pts:Le,id:qt.id});let $e=[...qt.revV,...Le.slice(1)],Ve=vs($e,.48),hi=Math.max(1,Ve.length-1),ui=new ii(vt,tt,hi);ui.frustumCulled=!0;let lr=new tn,za=new tn,jr=new de,Ci=new R(1,0,0),Pi=new R,Ii=new R(1,1,1),tf=ar(qt.revV),yh=0,Mh=0;for(let Ge=0;Ge<Ve.length-1;Ge++)Pi.subVectors(Ve[Ge+1],Ve[Ge]).normalize(),lr.setFromUnitVectors(Ci,Pi),Ge%2&&lr.multiply(za.setFromAxisAngle(Ci,Math.PI/2)),jr.compose(Ve[Ge].clone().lerp(Ve[Ge+1],.5),lr,Ii),ui.setMatrixAt(hi-1-Ge,jr),yh+=Ve[Ge].distanceTo(Ve[Ge+1]),yh<=tf+60&&(Mh=Ge+1);ui.instanceMatrix.needsUpdate=!0,ui.computeBoundingSphere(),ui.visible=!1,L.add(ui),ct.elos.push({im:ui,ref:On(qt.anchor),L:qt,n:hi,nIni:Mh,oculto:!1,parcial:!1}),qt.meio=qt.freeV[Math.round(qt.freeV.length*.55)]}let kt=ct.mats.ch?ct.mats:{ch:g("moor",{cor:w.chain,w:1.6,op:.95}),po:g("moor",{cor:w.poly,w:1.6,op:.9}),rev:g("moor",{cor:w.buried,w:2,op:.95,dash:[2.4,1.6]}),pe:g("moor",{cor:w.chain,w:1.8,op:.95}),tch:_(y("#4e565c",{m:.7,r:.45})),tpo:_(y("#d8d0bb",{m:0,r:.92}))};ct.mats=kt,p("moor",kt.tch),p("moor",kt.tpo),ct.lc=x(J,kt.ch,!0),ct.lp=x(et,kt.po,!0),ct.lr=x(Mt,kt.rev,!0),ct.ln=x(dt,kt.pe,!0),ct.lr.renderOrder=2,L.add(ct.lc,ct.lp,ct.lr,ct.ln),L.add(m(xt,.2,kt.tch,6),m(Jt,.13,kt.tpo,6));let fe=new de,Se=new tn,ut=new R(1,1,1),Ft=new R(0,1,0),ae=st.L+st.E+st.D*.2;ct.pilhas=At.map(({m:qt,g:Kt})=>{let pe=new ii(Kt,qt,B.length);return B.forEach((He,Le)=>{let $e=On(He.anchor);Se.setFromAxisAngle(Ft,(He.az+45)*Math.PI/180),fe.compose(new R($e.x,$e.y-ae,$e.z),Se,ut),pe.setMatrixAt(Le,fe)}),pe.instanceMatrix.needsUpdate=!0,pe.computeBoundingSphere(),L.add(pe),pe});let Bt=new Float32Array(B.length*3);B.forEach((qt,Kt)=>{let pe=On(qt.tdp);Bt[Kt*3]=pe.x,Bt[Kt*3+1]=.6,Bt[Kt*3+2]=pe.z});let _e=new Re;_e.setAttribute("position",new ke(Bt,3)),L.add(new si(_e,p("moor",ct.mats.tdp||(ct.mats.tdp=new $n({color:w.chain,size:5,sizeAttenuation:!1,map:n.brilho,transparent:!0,depthWrite:!1,blending:Bn})))));let Ee=vd,me=_d.map(qt=>qt.mat==="poliester"?"poli\xE9ster":"corrente").join(" \u2192 ");B.forEach((qt,Kt)=>{let pe=`${qt.gi+1}.${qt.k+1}`,He=Math.hypot(qt.anchor[0],qt.anchor[1]),Le={kind:"linha",grupo:"Ancoragem",t:`Linha de ancoragem ${pe}`,c:w.chain,cat:"moor",linha:qt,raio:1300,marcador:!1,prio:2,d:"Sai do olhal da estaca torpedo dentro do solo, sobe em curva at\xE9 o ponto de toque (TDP) e segue suspensa em corrente e poli\xE9ster at\xE9 a buzina no casco do FPSO.",stats:[["Grupo",`${qt.gi+1} de 4`],["Azimute no FPSO",`${re(qt.az,1)}\xB0`],["Raio de ancoragem",`${re(He)} m`],["Comprimento",`${re(Ee)} m`],["Trechos",me],["Olhal \u2192 TDP",`${re(qr,1)} m`]]},$e={kind:"torpedo",grupo:"Ancoragem",t:`Estaca torpedo ${pe}`,sub:"T-120",c:w.acc,cat:"moor",linha:qt,raio:12,marcador:!0,prio:qt.main?6:3,acoes:["cravar"],d:"Lan\xE7ada de cerca de 160 m acima do leito, ganha velocidade na \xE1gua e crava pelo pr\xF3prio peso. O olhal fica abaixo do leito; a linha sai dele em curva dentro do solo.",stats:[]};N[Kt]?(Object.assign(N[Kt],Le),Object.assign(G[Kt],$e)):(N[Kt]=f(Le),G[Kt]=f($e)),N[Kt].pos.copy(qt.meio),G[Kt].pos.copy(On(qt.anchor)).setY(0)}),gt(),ct.lc.userData.itens=N,ct.lp.userData.itens=N,ct.lr.userData.itens=N,ct.ln.userData.itens=N}function gt(){let v=V.calc||{};for(let L of G)L.stats=[["Modelo","T-120 \xB7 120 t"],["Comprimento",`${re(st.L,2)} m`],["Di\xE2metro",`${re(st.D,3)} m`],["Aletas",`${st.fins}`],["Olhal abaixo do leito",`${re(V.eye,1)} m`],["Ponta abaixo do leito",`${re(V.tip,1)} m`],...v.v?[["Velocidade no leito",`${re(v.v,1)} m/s`]]:[]]}pt();let St=()=>ct.linhas.find(v=>v.main);S(On(St().free[Math.round(St().free.length*.5)]),"Linhas de ancoragem",w.chain,"moor",{prio:5,faixa:[1500,1e9]});let It=S(new R,"Poli\xE9ster",w.poly,"moor",{prio:3,caps:["ancoragem"],faixa:[0,6e3]}),j=S(new R,"Corrente",w.chain,"moor",{prio:3,caps:["ancoragem","torpedo"],faixa:[0,3e3]}),yt=S(new R,"TDP \xB7 toque no leito",w.chain,"moor",{prio:4,caps:["ancoragem","torpedo"],faixa:[0,2500]}),D=S(new R,"Trecho enterrado",w.buried,"moor",{prio:4,caps:["ancoragem","torpedo"],faixa:[0,900]}),Vt=S(new R,"Estaca torpedo T-120",w.acc,"moor",{prio:6,faixa:[0,1e9],caps:["campo","ancoragem","torpedo",null]});function bt(){let v=St(),L=v.segs.find(J=>J.mat==="poliester"),B=v.segs.find(J=>J.mat!=="poliester");It.pos.copy(On(L.pts[Math.round(L.pts.length*.4)])),j.pos.copy(On(B.pts[Math.round(B.pts.length*.5)])),yt.pos.copy(On(v.tdp)).setY(1),D.pos.copy(v.revV[Math.round(v.revV.length*.5)]),Vt.pos.copy(On(v.anchor)).setY(0)}bt();let Tt=bd(),Rt={prod:w.prod,wag:w.wag,serv:w.serv,umb:w.umb},Zt={prod:"prod",wag:"inj",serv:"prod",umb:"umb"},Ot={prod:"Riser r\xEDgido de produ\xE7\xE3o",wag:"Riser r\xEDgido de inje\xE7\xE3o (WAG)",serv:"Linha de servi\xE7o flex\xEDvel",umb:"Umbilical de controle"},C=wn.topo+1.9,M=C+1.4,q={prod:[],wag:[],serv:[],umb:[]},lt={prod:[],wag:[],serv:[],umb:[]},ft=[],ht=[];for(let v of Tt){let[L,B]=v.porta,J=v.u,et;v.rigido?et=new Ei(v.ctrl.map(On),!1,"centripetal",.5).getSpacedPoints(180):et=c_(v.dt,v.porta[2],70).map(([me,qt])=>ee(L+J[0]*me,B+J[1]*me,qt));let[Mt,dt]=v.tdp,[xt,Jt]=v.alvo,kt,fe=[-J[1],J[0]];v.rigido?kt=[xt-J[0]*4.75,Jt-J[1]*4.75]:v.tipo==="serv"?kt=[xt-J[0]*3+fe[0]*4.5,Jt-J[1]*3+fe[1]*4.5]:kt=[xt-J[0]*5.5,Jt-J[1]*5.5];let Se=Math.hypot(kt[0]-Mt,kt[1]-dt),ut=v.rigido?40:12,Ft=v.rigido?M:1.9,ae=[];for(let Ee=120;Ee<Se-ut;Ee+=120)ae.push(Ee);for(let Ee of[1,.75,.5,.3,.15,0])Se-ut*Ee>0&&ae.push(Se-ut*Ee);let Bt=ae.map(Ee=>{let me=Ee/Se,qt=Se-Ee,Kt=qt<ut?.35+(Ft-.35)*kn(1-qt/ut):.35;return ee(Mt+(kt[0]-Mt)*me,dt+(kt[1]-dt)*me,Kt)}),_e=[...et,...Bt];if(v.pts=_e,v.susp=et,q[v.tipo].push({pts:_e,id:v.id}),lt[v.tipo].push(_e),v.rigido){let Ee=ih[0]*v.dt,me=ih[1]*v.dt,qt=He=>Math.hypot(He.x-L,-He.z-B),Kt=et.filter(He=>qt(He)>=Ee&&qt(He)<=me),pe=vs(Kt,7.5);for(let He=0;He<pe.length-1;He++)ft.push([pe[He],pe[He+1]]);v.boiaMeio=pe[Math.round(pe.length/2)]||et[90]}v.meio=et[Math.round(et.length*.3)]}let Ct={},Dt={},Wt={prod:_(y("#2b2f33",{m:.2,r:.55})),wag:_(y("#2b2f33",{m:.2,r:.55})),serv:_(y("#1f2326",{m:.1,r:.7})),umb:_(y("#d8a21e",{m:.1,r:.55}))};for(let v of Object.keys(q))Dt[v]=g(Zt[v],{cor:Rt[v],w:v==="prod"||v==="wag"?2.2:1.6,op:.95}),Ct[v]=x(q[v],Dt[v],!0),u(Zt[v]).g.add(Ct[v]),p(Zt[v],Wt[v]),u(Zt[v]).g.add(m(lt[v],v==="umb"?.1:v==="serv"?.15:.2,Wt[v],6));let jt=p("prod",y("#e8b84a",{m:.05,r:.55})),_t=new ii(new sn(1.15,1.15,2.1,14),jt,Math.max(1,ft.length));{let v=new tn,L=new de,B=new R(0,1,0),J=new R(1,1,1),et=new R;ft.forEach(([Mt,dt],xt)=>{et.subVectors(dt,Mt).normalize(),v.setFromUnitVectors(B,et),L.compose(Mt,v,J),_t.setMatrixAt(xt,L)}),_t.instanceMatrix.needsUpdate=!0,_t.computeBoundingSphere()}u("prod").g.add(_t);{let v=new De,L=y("#68747c",{m:.6,r:.45}),B=y("#1e2226",{r:.7});for(let J of Tt){let[et,Mt]=J.porta,dt=et,xt=-Mt,Jt=new $t(new sn(.42,.42,T+12,10),L);Jt.position.set(dt,(T-12)/2,xt),v.add(Jt);let kt=new $t(new sn(.7,.25,6,10),B);kt.position.set(dt,-15,xt),v.add(kt)}for(let J of[1,-1]){let et=Tt.filter(Jt=>Math.sign(Jt.porta[1])===J).map(Jt=>Jt.porta[0]);if(!et.length)continue;let Mt=Math.min(...et)-6,dt=Math.max(...et)+6,xt=new $t(new We(dt-Mt,2.2,5),L);xt.position.set((Mt+dt)/2,T-1.5,-J*(dn.B/2+3.5)),v.add(xt)}I.add(Ri(v))}Tt.forEach(v=>{let L=f({kind:"riser",grupo:v.tipo==="wag"?"Inje\xE7\xE3o":v.tipo==="umb"?"Controle":"Produ\xE7\xE3o",t:`${Ot[v.tipo]} ${v.poco?v.poco.id:v.sdu.id}`,c:Rt[v.tipo],cat:Zt[v.tipo],pos:v.meio.clone(),raio:900,marcador:!1,prio:2,riser:v,d:v.rigido?"Duto de a\xE7o que sobe do leito ao FPSO em lazy wave: os flutuadores formam uma corcova que separa o movimento da unidade do trecho que toca o leito.":v.tipo==="umb"?"Leva energia el\xE9trica, sinais e fluido hidr\xE1ulico do FPSO \xE0 SDU, que distribui o controle para as \xE1rvores.":"Linha flex\xEDvel ligada ao anular do po\xE7o produtor, usada em partida, despressuriza\xE7\xE3o e inje\xE7\xE3o de produtos qu\xEDmicos.",stats:[["Configura\xE7\xE3o",v.rigido?"lazy wave (r\xEDgido)":"caten\xE1ria livre (flex\xEDvel)"],["Sa\xEDda no FPSO",v.porta[1]>0?"bombordo":"boreste"],["At\xE9 o toque no leito",`${re(v.dt)} m`],["Comprimento no leito",`${re(Math.hypot(v.alvo[0]-v.tdp[0],v.alvo[1]-v.tdp[1]))} m`],...v.rigido?[["Flutuadores",`${Math.round(ft.length/Tt.filter(B=>B.rigido).length)} m\xF3dulos`]]:[["Ancoragem no leito","estaca torpedo T-35"]]]});ht.push(L),v.item=L});for(let v of Object.keys(Ct))Ct[v].userData.itens=Tt.filter(L=>L.tipo===v).map(L=>L.item);for(let v of Object.keys(Ct)){let L=Tt.filter(B=>B.tipo===v).map(B=>B.id);Ct[v].userData.owner=Ct[v].userData.owner.map(B=>L.indexOf(B))}let Pt=Tt.find(v=>v.tipo==="prod"&&v.poco.id==="P3")||Tt[0];S(Pt.boiaMeio.clone(),"Flutuadores (corcova)","#e8b84a","prod",{prio:4,caps:["risers"],faixa:[0,5e3]}),S(Pt.meio.clone(),"Risers r\xEDgidos em lazy wave",w.prod,"prod",{prio:5,faixa:[1200,1e9],caps:["campo","risers","escoamento",null]});{let v=Tt.find(B=>B.tipo==="serv"),L=Tt.find(B=>B.tipo==="umb");S(v.susp[30].clone(),"Linhas de servi\xE7o",w.serv,"prod",{prio:3,caps:["risers"],faixa:[0,8e3]}),S(L.susp[40].clone(),"Umbilicais",w.umb,"umb",{prio:3,caps:["risers","pocos"],faixa:[0,8e3]})}{let v=Tt.find(L=>L.tipo==="wag");S(v.meio.clone(),"Risers de inje\xE7\xE3o WAG",w.wag,"inj",{prio:4,caps:["campo","escoamento",null],faixa:[1200,1e9]})}let te=[],ie=[],Gt=[],ue=[],oe=[],be=[],k=new sn(.46,.46,60,14),zt=y("#8c979e",{m:.7,r:.4}),it=new ii(k,zt,Ti.length),mt=[];Ti.forEach((v,L)=>{let B=v.tipo==="prod"?"prod":"inj",J=v.tipo==="prod"?w.prod:w.wag,et=vh(-v.pos[0],-v.pos[1]),Mt=[-et[0],-et[1]],dt=Tt.find(Le=>Le.rigido&&Le.poco===v),xt=Bd(J);xt.position.copy(ee(v.pos[0],v.pos[1],0)),xt.rotation.y=Math.atan2(et[1],et[0]),u(B).g.add(xt),E(B,xt.position.x,xt.position.z,11,11);let Jt=f({kind:"anm",grupo:B==="prod"?"Produ\xE7\xE3o":"Inje\xE7\xE3o",t:`ANM ${v.id}`,sub:B==="prod"?"po\xE7o produtor":"po\xE7o injetor WAG",c:J,cat:B,pos:ee(v.pos[0],v.pos[1],3),raio:4,marcador:!0,prio:4,poco:v,d:B==="prod"?"\xC1rvore de natal molhada vertical sobre a cabe\xE7a do po\xE7o produtor: v\xE1lvulas que controlam o fluxo de \xF3leo e g\xE1s para o PLET.":"\xC1rvore de natal molhada do injetor: alterna \xE1gua e g\xE1s (WAG) para manter a press\xE3o do reservat\xF3rio.",stats:[["Po\xE7o",v.id],["Tipo",B==="prod"?"produtor":"injetor WAG"],["Dist\xE2ncia ao FPSO",`${re(v.r)} m`],["L\xE2mina d\u2019\xE1gua",`${re(Ae)} m`],["Condutor","\xD8 36\u2033 no solo"]]});te.push(Jt),it.setMatrixAt(L,new de().makeTranslation(xt.position.x,-30,xt.position.z)),mt.push({pts:[ee(v.pos[0],v.pos[1],-60),ee(v.pos[0],v.pos[1],-400)],id:L});let[kt,fe]=dt.alvo,Se=Hd();Se.position.copy(ee(kt,fe,C)),Se.rotation.y=Math.atan2(Mt[1],Mt[0]),u(B).g.add(Se);let ut=La(wn);ut.position.copy(ee(kt,fe,0)),ut.rotation.y=Se.rotation.y,u("fund").g.add(ut),E("fund",ut.position.x,ut.position.z,12,9,Se.rotation.y);let Ft=f({kind:"plet",grupo:B==="prod"?"Produ\xE7\xE3o":"Inje\xE7\xE3o",t:`PLET ${v.id}`,sub:"termina\xE7\xE3o do duto",c:J,cat:B,pos:ee(kt,fe,C+2),raio:5,marcador:!0,prio:3,poco:v,d:"Termina\xE7\xE3o do duto r\xEDgido no leito. Recebe o riser pelo trecho apoiado e se liga \xE0 \xE1rvore por um jumper r\xEDgido em M.",stats:[["Po\xE7o",v.id],["Dist\xE2ncia \xE0 \xE1rvore","45 m"],["Funda\xE7\xE3o",`estaca de suc\xE7\xE3o \xD8 ${re(wn.D)} m`],["Conex\xE3o","jumper r\xEDgido"]]});ie.push(Ft);let ae=f({kind:"succao",grupo:"Funda\xE7\xF5es",t:`Estaca de suc\xE7\xE3o \xB7 PLET ${v.id}`,c:w.suc,cat:"fund",pos:ee(kt,fe,1),raio:4,marcador:!1,prio:3,acoes:["instalar"],poco:v,suc:ut,d:"Cilindro de a\xE7o aberto embaixo e fechado em cima. Afunda pelo peso pr\xF3prio; depois o ROV fecha a escotilha e bombeia a \xE1gua de dentro, e a diferen\xE7a de press\xE3o crava o restante.",stats:[["Di\xE2metro",`${re(wn.D,1)} m`],["Comprimento",`${re(wn.L,1)} m`],["L/D",re(wn.L/wn.D,1)],["Topo acima do leito",`${re(wn.topo,1)} m`],["Crava\xE7\xE3o","peso pr\xF3prio + suc\xE7\xE3o"],["Retirada","bombeando \xE1gua para dentro"]]});Gt.push(ae),be.push({suc:ut,pl:Se,item:ae,plet:Ft,pos:[kt,fe],ry:Se.rotation.y,k:B,u:Mt,poco:v});let Bt=ee(kt+Mt[0]*5.2,fe+Mt[1]*5.2,M),_e=ee(v.pos[0]-Mt[0]*2.3,v.pos[1]-Mt[1]*2.3,3.4),Ee=new R(0,1,0),me=Bt.clone().lerp(_e,.5),qt=[Bt,Bt.clone().lerp(_e,.06).addScaledVector(Ee,5.5),Bt.clone().lerp(_e,.3).addScaledVector(Ee,6),me.clone().addScaledVector(Ee,3.2),Bt.clone().lerp(_e,.7).addScaledVector(Ee,6),Bt.clone().lerp(_e,.94).addScaledVector(Ee,5.5),_e],Kt=new Ei(qt,!1,"centripetal").getPoints(40);q[v.tipo==="prod"?"prod":"wag"].push({pts:Kt,id:dt.id}),u(B).g.add(m([Kt],.2,Wt[v.tipo==="prod"?"prod":"wag"],8));let pe=new De,He=y("#4c565d",{r:.55,m:.5});for(let[Le,$e]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]]){let Ve=new $t(new We(.35,C-wn.topo-.3,.35),He);Ve.position.set(Le,(C+wn.topo+.3)/2,$e),pe.add(Ve)}pe.position.copy(ee(kt,fe,0)),pe.rotation.y=Se.rotation.y,u(B).g.add(Ri(pe))}),it.instanceMatrix.needsUpdate=!0,it.computeBoundingSphere(),u("prod").g.add(it),p("prod",zt);{let v=x(mt,g("prod",{cor:"#d9e4e8",w:1.4,op:.7,dash:[6,5]}),!1);u("prod").g.add(v)}{let v=Ti.find(et=>et.id==="P3"),L=Ti.find(et=>et.id==="I3");S(ee(v.pos[0],v.pos[1],8),"Po\xE7os produtores",w.prod,"prod",{prio:5,faixa:[1500,1e9]}),S(ee(L.pos[0],L.pos[1],8),"Po\xE7os injetores WAG",w.wag,"inj",{prio:5,faixa:[1500,1e9]}),S(ee(v.pos[0],v.pos[1],7),"ANM",w.prod,"prod",{prio:4,caps:["pocos"],faixa:[0,900]});let B=ie.find(et=>et.poco===v);S(B.pos.clone().setY(C+4),"PLET sobre estaca de suc\xE7\xE3o",w.prod,"prod",{prio:4,caps:["pocos","succao"],faixa:[0,900]});let J=vh(-v.pos[0],-v.pos[1]);S(ee(v.pos[0]+J[0]*22,v.pos[1]+J[1]*22,8),"Jumper",w.prod,"prod",{prio:3,caps:["pocos"],faixa:[0,500]}),S(ee(v.pos[0],v.pos[1],-40),"Condutor do po\xE7o","#d9e4e8","prod",{prio:2,caps:["pocos"],faixa:[0,400]})}let Ht=[];for(let v of Yr){let L=vh(-v.pos[0],-v.pos[1]),B=kd();B.position.copy(ee(v.pos[0],v.pos[1],0)),B.rotation.y=Math.atan2(L[1],L[0]),u("umb").g.add(B),E("umb",B.position.x,B.position.z,13,11,B.rotation.y);for(let J of v.pocos){let et=Ti.find(kt=>kt.id===J),Mt=ee(v.pos[0],v.pos[1],.9),dt=ee(et.pos[0],et.pos[1],.9),xt=Mt.clone().lerp(dt,.5),Jt=new R(-(dt.z-Mt.z),0,dt.x-Mt.x).normalize().multiplyScalar(Mt.distanceTo(dt)*.06);xt.add(Jt),Ht.push({pts:new Qs(Mt,xt,dt).getPoints(24),id:0})}ue.push(f({kind:"sdu",grupo:"Controle",t:v.id,sub:"unidade de distribui\xE7\xE3o submarina",c:w.umb,cat:"umb",pos:ee(v.pos[0],v.pos[1],4),raio:5,marcador:!0,prio:3,sdu:v,d:"Recebe o umbilical do FPSO e distribui energia, sinais e fluido hidr\xE1ulico para as \xE1rvores dos po\xE7os pelos umbilicais de campo.",stats:[["Po\xE7os atendidos",v.pocos.join(", ")],["Dist\xE2ncia ao FPSO",`${re(v.r)} m`]]}))}u("umb").g.add(x(Ht,g("umb",{cor:w.umb,w:1.1,op:.75}),!1)),S(ee(Yr[0].pos[0],Yr[0].pos[1],6),"SDU",w.umb,"umb",{prio:3,caps:["pocos"],faixa:[0,3e3]});let Lt=[],se=rt.map(({m:v,g:L})=>({m:v,g:L,mt:[]}));for(let v of Tt.filter(L=>!L.rigido)){let[L,B]=v.tdp,J=v.u,et=[-J[1],J[0]],Mt=[L+J[0]*60,B+J[1]*60],dt=[Mt[0]+et[0]*16,Mt[1]+et[1]*16],xt=ee(dt[0],dt[1],-V.eye35),Jt=xt.clone().setY(-V.eye35-$.L-$.E);se.forEach(kt=>kt.mt.push(new de().makeTranslation(Jt.x,Jt.y,Jt.z))),Lt.push({pts:[ee(Mt[0],Mt[1],.4),ee(dt[0],dt[1],0),xt],id:0}),oe.push(f({kind:"estaca35",grupo:"Funda\xE7\xF5es",t:`Estaca T-35 \xB7 ${v.poco?v.poco.id:v.sdu.id}`,sub:v.tipo==="umb"?"segura o umbilical":"segura a linha de servi\xE7o",c:"#ffd29a",cat:"fund",pos:ee(dt[0],dt[1],0),raio:6,marcador:!0,prio:2,riser:v,d:"Estaca torpedo menor que prende a linha flex\xEDvel logo depois do ponto de toque, para que o trecho apoiado n\xE3o se arraste com o movimento da unidade.",stats:[["Modelo","T-35 \xB7 35 t"],["Comprimento",`${re($.L,2)} m`],["Di\xE2metro",`${re($.D,3)} m`],["Olhal abaixo do leito",`${re(V.eye35,1)} m`],["Ponta abaixo do leito",`${re(V.tip35,1)} m`]]}))}se.forEach(({m:v,g:L,mt:B})=>{let J=new ii(L,v,B.length);B.forEach((et,Mt)=>J.setMatrixAt(Mt,et)),J.instanceMatrix.needsUpdate=!0,J.computeBoundingSphere(),u("fund").g.add(J)}),u("fund").g.add(x(Lt,g("fund",{cor:w.acc,w:1.3,op:.9,dash:[2,1.5]}),!1));{let v=oe[0];S(v.pos.clone().setY(2),"Estacas T-35 das linhas flex\xEDveis",w.acc,"fund",{prio:3,caps:["risers"],faixa:[0,3e3]})}{let v=be[2];S(ee(v.pos[0],v.pos[1],2),"Estaca de suc\xE7\xE3o",w.suc,"fund",{prio:4,caps:["succao","pocos"],faixa:[0,900]})}for(let v of["prod","wag"]){let L=Ct[v],B=Tt.filter(et=>et.tipo===v).map(et=>et.id),J=x(q[v],Dt[v],!0);J.userData.owner=J.userData.owner.map(et=>B.indexOf(et)),J.userData.itens=L.userData.itens,L.parent.add(J),L.parent.remove(L),L.geometry.dispose(),c.splice(c.indexOf(L),1),Ct[v]=J}let Te=Nd(oi),ze=-dn.L/2,P=ze-oi.espia;Te.position.copy(ee(P-oi.L/2,0,Ae)),u("nav").g.add(Te);let at=[ee(ze-1,0,Ae+T-2),ee(ze-oi.espia*.5,0,Ae+2),ee(P+2,0,Ae+9)],Et=new Ei(at).getPoints(20),Xt=[ee(ze-2,-11,Ae+T-3),ee(ze-30,-34,Ae+.4),ee(ze-120,-66,Ae+.4),ee(P-40,-40,Ae+.4),ee(P-6,-4,Ae+6)],ne=new Ei(Xt,!1,"centripetal").getPoints(60);u("nav").g.add(x([{pts:Et,id:0}],g("nav",{cor:"#f4efe2",w:1.4,op:.95}),!1));let we=x([{pts:ne,id:0}],g("nav",{cor:w.oleo,w:2.2,op:.95}),!0);u("nav").g.add(we,m([ne],.4,p("nav",_(y("#c4372d",{r:.5}))),8),m([Et],.11,p("nav",_(y("#efe6cf",{r:.9,m:0}))),5));let ve=new $t(new We(oi.L,30,oi.B),new Cn({visible:!1}));ve.position.copy(Te.position).setY(Ae+4),u("nav").g.add(ve);let Ce=f({kind:"aliviador",grupo:"Superf\xEDcie",t:"Navio aliviador",sub:"Suezmax com posicionamento din\xE2mico",c:w.oleo,cat:"nav",pos:Te.position.clone().setY(Ae+25),raio:140,marcador:!0,prio:6,d:"Recebe o \xF3leo armazenado no FPSO pela popa, preso por uma espia e ligado por um mangote. Mant\xE9m a posi\xE7\xE3o com propulsores (posicionamento din\xE2mico) durante a transfer\xEAncia.",stats:[["Comprimento",`${oi.L} m`],["Boca",`${oi.B} m`],["Capacidade","cerca de 1 milh\xE3o bbl"],["Arranjo","tandem pela popa"],["Espia",`${oi.espia} m`]]});ve.userData.item=Ce,c.push(ve),we.userData.itens=[f({kind:"mangote",grupo:"Superf\xEDcie",t:"Mangote de transfer\xEAncia",c:w.oleo,cat:"nav",pos:ne[30].clone(),raio:60,marcador:!1,prio:2,d:"Mangote flutuante que leva o \xF3leo da popa do FPSO ao sistema de carregamento na proa do navio aliviador.",stats:[["Comprimento",`${re(ar(ne))} m`],["Bombeio","pelo FPSO"]]})],we.userData.owner=we.userData.owner.map(()=>0),S(Ce.pos.clone(),"Navio aliviador",w.oleo,"nav",{prio:6,item:Ce}),S(ne[34].clone(),"Mangote e espia",w.oleo,"nav",{prio:3,caps:["escoamento"],faixa:[0,3e3]});let Ne=Od();Ne.visible=!1,u("inst").g.add(Ne);let Tn=Fd();Tn.visible=!1,u("inst").g.add(Tn);let Vn=(v,L,B)=>{let J=xe(L,0,1)*(v.length-1),et=Math.min(v.length-2,Math.floor(J));return B.copy(v[et]).lerp(v[et+1],J-et)};function O(v,L,B,J,et,Mt=5){let dt=vs(v,6),xt=ar(dt),Jt=Math.max(3,Math.round(xt/et)),kt=new Re;kt.setAttribute("position",new ke(new Float32Array(Jt*3),3));let fe=p(B,new $n({color:L,size:Mt,sizeAttenuation:!1,map:n.brilho,transparent:!0,depthWrite:!1,blending:Bn,opacity:.95})),Se=new si(kt,fe);Se.frustumCulled=!1,u(B).g.add(Se);let ut={arr:dt,len:xt,n:Jt,vel:J,p:Se,k:B,off:0,tmp:new R};return l.push(ut),ut}for(let v of Tt)v.tipo==="prod"?O(v.pts.slice().reverse(),w.prod,"prod",55,150):v.tipo==="wag"&&O(v.pts,w.wag,"inj",55,150);let nt=O(ne,w.oleo,"nav",9,14,6);nt.so=!0,nt.ativo=!1;function Nt(v){for(let L of l){let B=d[L.k].on&&d[L.k].foco>.3&&!s&&(!L.so||L.ativo);if(L.p.visible=B,!B)continue;L.off=(L.off+v*L.vel/L.len)%1;let J=L.p.geometry.attributes.position.array;for(let et=0;et<L.n;et++)Vn(L.arr,(et/L.n+L.off)%1,L.tmp),L.tmp.toArray(J,et*3);L.p.geometry.attributes.position.needsUpdate=!0}}let he=new R,Yt=new R;function ce(v,L,B,J){if(!s){let dt=1+Math.sin(L*13)*.1+Math.sin(L*7.3)*.07;b.scale.set(12*dt,17*dt,1),U.scale.setScalar(5*(2-dt))}e.worldToLocal(Yt.copy(B.position));let et=1e9;for(let dt of ct.elos){let xt=Yt.distanceTo(dt.ref);et=Math.min(et,xt),dt.im.visible=!dt.oculto&&d.moor.on&&xt<700+(dt.L.main?300:0),dt.im.count=dt.parcial?dt.n-dt.nIni:dt.n}let Mt=kn(xe((et-140)/360,0,1));ct.mats.pe.opacity=ct.mats.pe.userData.op*Mt*d.moor.foco,ct.ln.visible=Mt>.02;for(let dt of h)dt(v,L,B,J);Nt(v)}function A(v){for(let L of Object.values(d))L.alvo=!v||!v.length||v.includes(L.k)||L.k==="fpso"||L.k==="inst"?1:.32}function F(v){for(let L of Object.values(d)){if(Math.abs(L.foco-L.alvo)<.003){if(L.foco===L.alvo)continue;L.foco=L.alvo}else L.foco+=(L.alvo-L.foco)*Math.min(1,v*5);for(let B of L.mats){B.opacity=B.userData.op*L.foco;let J=B.opacity<.999||B.userData.sempreT;!B.isLineMaterial&&!B.isPointsMaterial&&B.transparent!==J&&(B.transparent=J,B.depthWrite=!J,B.needsUpdate=!0)}}}for(let v of Object.values(d))for(let L of v.mats)L.transparent&&(L.userData.sempreT=!0);function Z(v,L){d[v]&&(d[v].on=L,d[v].g.visible=L)}function K(v){if(!v)return;let L=Math.abs((v.eye??V.eye)-V.eye)>.05;if(Object.assign(V,{eye:v.eye??V.eye,tip:v.tip??V.tip,calc:v}),v.eye35&&(V.eye35=v.eye35,V.tip35=v.tip35??V.tip35),L){pt(),bt();for(let B of r)B.resolution.copy(r[0].resolution)}gt();for(let B of oe)B.stats=B.stats.map(([J,et])=>J==="Olhal abaixo do leito"?[J,`${re(V.eye35,1)} m`]:J==="Ponta abaixo do leito"?[J,`${re(V.tip35,1)} m`]:[J,et])}return{V:ee,items:o,rotulos:a,pick:c,cats:d,linhaMats:r,fpso:I,fpsoAlt:T,ali:Te,inst:Ne,rov:Tn,sucs:be,est:V,T120:st,T35:$,RS:Tt,mangote:ne,get linhas(){return ct.linhas},get mainL(){return St()},get pilhas(){return ct.pilhas},get ancor(){return ct},itens:{fpso:X,linhas:N,estacas:G,risers:ht,anm:te,plet:ie,suc:Gt,sdu:ue,t35:oe,ali:Ce},atualizar:ce,focar:A,animarFoco:F,camada:Z,definirCravacao:K,porQuadro:h,fluxoOleo:nt,LM:g,segmentos:x,tubos:m,reg:p,std:y}}function Xd(i,{reduce:t}){let{campo:e,planosCorte:n,leitoMat:s}=i,{V_PARS:r,V_FIM:o,F_PARS:a,F_INI:c,F_FIM:l}=wd,h=(tt={})=>new ln({uniforms:wi.merge([Ut.fog,{uTopo:{value:new le("#8a7756")},uMeio:{value:new le("#6d5c45")},uFundo:{value:new le("#4f4336")},uTam:{value:new R(1e4,1e4,1e4)},uOpac:{value:1},uCotas:{value:tt.cotas??1}}]),vertexShader:r+`
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); vL = position;
        vec4 mvPosition = viewMatrix * wp; gl_Position = projectionMatrix * mvPosition; ${o} }`,fragmentShader:a+Ta+`
      uniform vec3 uTopo, uMeio, uFundo, uTam; uniform float uOpac, uCotas;
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main() {
        ${c}
        float z = max(-vW.y, 0.);
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        float k = clamp(z / 45., 0., 1.);
        vec3 c = mix(uTopo, uMeio, smoothstep(0., .35, k)); c = mix(c, uFundo, smoothstep(.35, 1., k));
        vec2 h = vW.xz + vW.zx * .37;
        float lam = sin(z * 4.7 + vnoise(h * .21 + z * .6) * 5.) * .5 + .5;
        c *= .9 + .13 * lam;
        c *= .9 + .2 * vnoise(h * 2.7 + vec2(z * 3.3, z));
        c = mix(c, c * vec3(1.08, 1.02, .9), smoothstep(.6, .9, vnoise(h * .05 + z * .09)) * .5);
        // cotas: linha fina a cada 5 m e mais forte a cada 10 m
        float q = z / 5.; float l5 = 1. - min(abs(fract(q - .5) - .5) / max(fwidth(q), 1e-4) / 1.2, 1.);
        float q2 = z / 10.; float l10 = 1. - min(abs(fract(q2 - .5) - .5) / max(fwidth(q2), 1e-4) / 1.6, 1.);
        c = mix(c, vec3(1., .93, .78), max(l5 * .1, l10 * .24) * step(1., z) * uCotas);
        // cantos mais escuros
        vec3 d = vec3((.5 - abs(vL.x)) * uTam.x, (vL.y + 1.) * uTam.y, (.5 - abs(vL.z)) * uTam.z);
        float m1 = min(d.x, min(d.y, d.z)), m3 = max(d.x, max(d.y, d.z)), m2 = d.x + d.y + d.z - m1 - m3;
        float ao = mix(.6, 1., smoothstep(0., 3.5, m2));
        float luz = .5 + .5 * max(dot(n, normalize(vec3(-.35, .85, .4))), 0.) + .12 * max(dot(n, normalize(vec3(.5, .2, -.8))), 0.);
        gl_FragColor = vec4(c * luz * ao, uOpac);
        ${l}
      }`,fog:!0,side:tt.lado??Qe,transparent:!1}),d=new De;d.name="corte",d.visible=!1,e.add(d);let u=h(),p=new $t(new We(1,1,1).translate(0,-.5,0),u);p.renderOrder=-12,d.add(p);let g=new ta(new Re().setFromPoints([[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].map(([tt,ct])=>new R(tt,0,ct))),new Si({color:"#ffe2b0",transparent:!0,opacity:.85,depthWrite:!1}));g.position.y=.12,d.add(g);let x={c:new R,ang:0,hx:20,hz:12,prof:55},m={c:new R,ang:0,hx:.01,hz:.01,prof:55},f=0,S=0,y=!1,_=!1,z=null,E=new R,w=new R,I=new R,T=new de,b=new hn(new R(1,0,0),1e7);function U(){let tt=m.hx*f,ct=m.hz*f;if(f<.002||tt<.01){for(let ot of n)ot.normal.set(1,0,0),ot.constant=1e7;d.visible=!1;return}d.visible=!0,E.set(Math.cos(m.ang),0,-Math.sin(m.ang)),w.set(Math.sin(m.ang),0,Math.cos(m.ang));let N=m.c,G=E.dot(N),H=w.dot(N);n[0].set(E.clone(),-G-tt),n[1].set(E.clone().negate(),G-tt),n[2].set(w.clone(),-H-ct),n[3].set(w.clone().negate(),H-ct),T.copy(e.matrixWorld);for(let ot of n)ot.applyMatrix4(T);p.position.set(N.x,0,N.z),p.rotation.y=m.ang,p.scale.set(2*tt,m.prof,2*ct),g.position.set(N.x,.12,N.z),g.rotation.y=m.ang,g.scale.set(2*tt,1,2*ct),u.uniforms.uTam.value.set(2*tt,m.prof,2*ct)}let Y=tt=>{let ct=tt*Math.PI/180;return new R(Math.cos(ct),0,-Math.sin(ct))};function W(tt,ct){if(tt.az!=null){let N=Y(tt.az),G=tt.tras??3,H=tt.frente??150;ct.ang=Math.atan2(N.x,N.z),ct.c.set(tt.centro.x,0,tt.centro.z).addScaledVector(N,(H-G)/2),ct.hx=(tt.larg??60)/2,ct.hz=(H+G)/2}else tt.centro&&ct.c.set(tt.centro.x,0,tt.centro.z),tt.ang!=null&&(ct.ang=tt.ang),tt.larg&&(ct.hx=tt.larg/2),tt.comp&&(ct.hz=tt.comp/2);tt.prof&&(ct.prof=tt.prof)}function X(tt){tt.centro&&W(tt,x),y=!!tt.seguir,S=1,z=tt.seguir?null:tt,(tt.instantaneo||t||f<.01)&&(m.c.copy(x.c),m.ang=x.ang,m.hx=x.hx,m.hz=x.hz,m.prof=x.prof),(tt.instantaneo||t)&&(f=1),U()}function st(tt){S=0,y=!1,(tt||t)&&(f=0,U())}function $(tt){_=tt,s.uniforms.uOpac.value=tt?.3:1,s.depthWrite=!tt}let V=new R;function Q(tt,ct,N,G){if(y){e.worldToLocal(I.copy(N)),e.worldToLocal(V.copy(ct.position));let gt=Math.atan2(-(V.z-I.z),V.x-I.x)*180/Math.PI,St=xe(G*.5,24,1200);W({centro:I,az:gt,larg:St,tras:xe(G*.04,3,60),frente:xe(G*1.2,60,3e3),prof:55},x)}let H=t?1:Math.min(1,tt*4.5),ot=x.ang-m.ang;for(;ot>Math.PI;)ot-=2*Math.PI;for(;ot<-Math.PI;)ot+=2*Math.PI;m.ang+=ot*H,m.c.lerp(x.c,H),m.hx=fn(m.hx,x.hx,H),m.hz=fn(m.hz,x.hz,H),m.prof=fn(m.prof,x.prof,H);let pt=t?100:1.6;return f!==S&&(f=S>f?Math.min(S,f+tt*pt):Math.max(S,f-tt*pt*1.4)),U(),f}let At=new R,rt=new de;function vt(tt,ct,N){if(f<.6)return[];let G=m.hx*f,H=m.hz*f;e.worldToLocal(V.copy(tt.position));let ot=w.dot(V.clone().sub(m.c))>0?-1:1;At.setFromMatrixColumn(tt.matrixWorld,0),rt.copy(e.matrixWorld).invert(),At.transformDirection(rt);let pt=E.dot(At)>0?-1:1,gt=m.c.clone().addScaledVector(w,ot*H).addScaledVector(E,pt*G*.92),St=[],It=m.prof>80?20:10;for(let j=It;j<m.prof-1;j+=It)St.push({pos:new R(gt.x,-j,gt.z),texto:`${j} m`,sub:Number.isFinite(ct)?`Su ${re(ct+N*j,1)} kPa`:""});return St}return{abrir:X,fechar:st,transparente:$,atualizar:Q,rotulos:vt,estrato:h,planoMeio:b,get aberto(){return S>0},get k(){return f},get seguindo(){return y},get transp(){return _},get eixo(){return{c:m.c.clone(),e1:E.clone(),e2:w.clone(),hx:m.hx,hz:m.hz,prof:m.prof}},set seguir(tt){y=tt,tt&&(S=1)}}}var qd=(i,t,e)=>{if(!i.length)return null;if(e<=i[0][t])return i[0];let n=i[i.length-1];if(e>=n[t])return n;let s=0,r=i.length-1;for(;r-s>1;){let h=s+r>>1;i[h][t]<=e?s=h:r=h}let o=i[s],a=i[r],c=(e-o[t])/Math.max(1e-9,a[t]-o[t]),l={};for(let h of Object.keys(o))l[h]=typeof o[h]=="number"?fn(o[h],a[h],c):o[h];return l};function Yd(i,t,e,{reduce:n}){let{TX:s}=i,r=ms(31337),o=new De;o.name="animacoes",i.campo.add(o);let a=(()=>{let g=new Zn(.14,.058,5,12);return g.scale(2.14,1,1),g})(),c=new Xi({color:"#5b636a",metalness:.75,roughness:.42});function l(g){let x=new ii(a,c,g);x.count=0,x.frustumCulled=!1,o.add(x);let m=new tn,f=new tn,S=new de,y=new R(1,0,0),_=new R,z=new R(1,1,1),E=new R;return{im:x,por(w){let I=vs(w,.48),T=Math.min(g,I.length-1);for(let b=0;b<T;b++)_.subVectors(I[b+1],I[b]),_.lengthSq()<1e-10&&_.set(1,0,0),_.normalize(),m.setFromUnitVectors(y,_),b%2&&m.multiply(f.setFromAxisAngle(y,Math.PI/2)),E.copy(I[b]).lerp(I[b+1],.5),S.compose(E,m,z),x.setMatrixAt(b,S);x.count=Math.max(0,T),x.instanceMatrix.needsUpdate=!0}}}let h=(g,x=.9)=>{let m=new Re;m.setAttribute("position",new ke(new Float32Array(6),3));let f=new as(m,new Si({color:g,transparent:!0,opacity:x,depthWrite:!1}));return f.frustumCulled=!1,o.add(f),{l:f,de(S,y){let _=m.attributes.position.array;S.toArray(_,0),y.toArray(_,3),m.attributes.position.needsUpdate=!0}}};function d(g,x){let m=[];for(let _=0;_<g;_++){let z=new os(new Gi({map:s.nuvem,color:x,transparent:!0,opacity:0,depthWrite:!1}));z.visible=!1,o.add(z),m.push({s:z,p:new R,v:new R,t:0,vida:1,tam:1})}let f=new $t(new aa(.8,1,48).rotateX(-Math.PI/2),new Cn({color:"#d8c49c",transparent:!0,opacity:0,depthWrite:!1,side:un}));f.visible=!1,o.add(f);let S=-1,y=new R;return{disparar(_,z=1){y.copy(_),S=0,f.visible=!0,f.position.copy(_).setY(.15);for(let E of m){let w=r()*Math.PI*2,I=.6+r()*1.2,T=(2+r()*5)*z;E.p.set(_.x+Math.cos(w)*I,.3+r()*.8,_.z+Math.sin(w)*I),E.v.set(Math.cos(w)*T,(.8+r()*2.6)*z,Math.sin(w)*T),E.t=0,E.vida=4+r()*4,E.tam=1.5+r()*2.5,E.s.visible=!0}},atualizar(_){if(S<0)return;S+=_;let z=xe(S/2.4,0,1);f.scale.setScalar(2+Ai(z)*22),f.material.opacity=.5*(1-z),f.visible=z<1;let E=0;for(let w of m){if(!w.s.visible)continue;w.t+=_;let I=w.t/w.vida;if(I>=1){w.s.visible=!1;continue}E++;let T=Math.exp(-_*1.6);w.v.multiplyScalar(T),w.v.y-=_*.25,w.p.addScaledVector(w.v,_),w.p.y<.2&&(w.p.y=.2,w.v.y=Math.abs(w.v.y)*.2),w.s.position.copy(w.p);let b=w.tam*(1+I*3.2);w.s.scale.set(b,b,1),w.s.material.opacity=.42*Math.sin(Math.min(1,I*4)*Math.PI/2)*(1-I)}!E&&!f.visible&&(S=-1)},parar(){S=-1,f.visible=!1;for(let _ of m)_.s.visible=!1}}}let u=(()=>{let g=t.T120,x=g.L+g.E+g.D*.2,m=Da(g);m.visible=!1,o.add(m);let f=l(620),S=h("#e9f3f5",.85),y=h("#ffffff",.35),_=d(n?0:46,"#8f7a58"),z={queda:Ed,crav:{points:sr.points,time:sr.time,tip:sr.penetration,eye:sr.topDepth,vImp:sr.impactSpeed}},E={ativo:!1,fase:"",t:0,L:null,i:0,eixo:new R,dl:new R,tipY:0,v:0,tSim:0,kTens:0,hist:[],pausa:!1,vel:1},w=2.6,I=1.6,T=2.8,b=()=>{let rt=z.queda.points;return rt[rt.length-1].s},U=()=>{let rt=z.queda.time??z.queda.points[z.queda.points.length-1].t;return{a:w,b:w+rt}},Y=rt=>rt<1.7?.42:1.5;function W(rt,vt){let tt=t.linhas;rt=rt||t.mainL,E.L=rt,E.i=tt.indexOf(rt);let ct=ee(...rt.anchor);E.eixo.set(ct.x,0,ct.z);let N=ee(...rt.tdp);E.dl.set(N.x-ct.x,0,N.z-ct.z).normalize(),E.ativo=!0,E.fase="posicionada",E.t=0,E.tSim=0,E.kTens=0,E.hist=[],E.impacto=!1,m.visible=!0,m.rotation.y=(rt.az+45)*Math.PI/180,X(!0);let G=t.inst,H=G.userData.gancho;G.visible=!0,G.rotation.y=0,G.position.set(E.eixo.x-H.x,Ae,E.eixo.z-H.z);let ot=E.eixo.clone().addScaledVector(E.dl,9);vt==null&&(vt=Math.atan2(E.dl.x,E.dl.z)*180/Math.PI),e.abrir({centro:ot,az:vt,larg:64,tras:6,prof:55}),V(0)}function X(rt){let vt=E.i;if(vt<0)return;let tt=new de;for(let N of t.pilhas)N.userData.orig||(N.userData.orig=[]),rt?(N.getMatrixAt(vt,tt),N.userData.orig[vt]=tt.clone(),N.setMatrixAt(vt,new de().makeScale(0,0,0))):N.userData.orig[vt]&&N.setMatrixAt(vt,N.userData.orig[vt]),N.instanceMatrix.needsUpdate=!0;let ct=t.ancor.elos[vt];ct&&(ct.parcial=rt);for(let N of[t.ancor.lr,t.ancor.ln])N&&(N.visible=!rt)}function st(){E.ativo&&(E.ativo=!1,m.visible=!1,f.im.count=0,S.l.visible=!1,y.l.visible=!1,_.parar(),X(!1),t.inst.visible=!1)}function $(rt){let vt=E.eixo,tt=E.dl,ct=[],N=(G,H)=>{for(let ot=3;ot<=H;ot+=3)ct.push(G.clone().addScaledVector(tt,ot))};if(rt.y>.3){let G=rt.y,H=xe(G*.32,2.5,48),ot=vt.clone().addScaledVector(tt,H).setY(.3),pt=vt.clone().setY(.3);for(let gt=0;gt<=24;gt++){let St=gt/24,It=rt.clone().lerp(pt,St),j=pt.clone().lerp(ot,St);ct.push(It.lerp(j,St))}N(ot,70+qr-H)}else{let G=[rt.clone()];for(let j=1;j<=10;j++)G.push(vt.clone().setY(fn(rt.y,.3,j/10)));for(let j=3;j<=70+qr;j+=3)G.push(vt.clone().setY(.3).addScaledVector(tt,j));let H=ee(...E.L.tdp).setY(.3),ot=E.L.revV.map(j=>j.clone());for(let j=3;j<=70;j+=3)ot.push(H.clone().addScaledVector(tt,j));if(E.kTens<=0)return G;let pt=vs(G,ar(G)/90),gt=vs(ot,ar(ot)/90),St=Math.min(pt.length,gt.length),It=kn(E.kTens);for(let j=0;j<St;j++)ct.push(pt[j].clone().lerp(gt[j],It))}return ct}function V(rt){if(!E.ativo)return;E.pausa||(E.t+=rt*E.vel);let{a:vt,b:tt}=U(),ct=b(),N=z.crav,G,H=0;if(E.t<vt)G=ct+Math.sin(E.t*1.3)*.15,E.fase="posicionada";else if(E.t<tt){let St=qd(z.queda.points,"t",E.t-vt);G=ct-St.s,H=St.v,E.fase="queda"}else{E.impacto||(E.impacto=!0,_.disparar(E.eixo,xe((N.vImp||27)/27,.6,1.4))),E.fase!=="cravada"&&E.fase!=="tensionada"&&(E.tSim+=(E.pausa?0:rt*E.vel)*Y(E.tSim));let St=N.points[N.points.length-1];if(E.tSim<St.t){let It=qd(N.points,"t",E.tSim);G=-It.z,H=It.v,E.fase="cravacao",E.tFim=E.t}else{G=-St.z,H=0;let It=E.t-(E.tFim??E.t);It<I?E.fase="cravada":(E.fase="tensionada",E.kTens=xe((It-I)/T,0,1)),It>I+T+.6&&(E.fim=!0)}}E.tipY=G,E.v=H,m.position.set(E.eixo.x,G,E.eixo.z);let ot=new R(E.eixo.x,G+x,E.eixo.z);f.por($(ot));let pt=t.inst.position.clone().add(t.inst.userData.gancho);if(E.fase==="posicionada")S.l.visible=!0,S.de(pt,ot);else{let St=xe((E.t-vt)/2.2,0,1);S.l.visible=St<1,S.de(pt,ot.clone().setY(fn(ct+x,Ae-60,Ai(St))))}y.l.visible=E.fase==="posicionada"||E.fase==="queda";let gt=new R(-E.dl.z,0,E.dl.x).multiplyScalar(9);if(y.de(E.eixo.clone().add(gt),E.eixo.clone().add(gt).setY(ct)),!E.pausa&&(E.fase==="queda"||E.fase==="cravacao")){let St=E.hist[E.hist.length-1];(!St||Math.abs(St[0]-G)>.25)&&E.hist.push([G,H])}_.atualizar(rt)}function Q(rt){!rt||!rt.queda||!rt.crav||(z.queda=rt.queda,z.crav=rt.crav)}let At={posicionada:"Posicionada para o lan\xE7amento",queda:"Queda livre",cravacao:"Crava\xE7\xE3o",cravada:"Cravada",tensionada:"Linha tensionada"};return{iniciar:W,parar:st,atualizar:V,definirDados:Q,st:E,dados:z,get ativo(){return E.ativo},get fim(){return!!E.fim},duracao(){let{b:rt}=U(),vt=z.crav.points[z.crav.points.length-1],tt=0,ct=0;for(;tt<vt.t;)tt+=.02*Y(tt),ct+=.02;return rt+ct+I+T+.6},telemetria(){if(!E.ativo)return null;let rt=b(),vt=z.crav;return{titulo:"Estaca torpedo T-120",fase:At[E.fase],hist:E.hist,hrel:rt,prof:vt.tip,itens:[["Velocidade",`${re(E.v,1)} m/s`],E.tipY>=0?["Ponta acima do leito",`${re(E.tipY,1)} m`]:["Ponta no solo",`${re(-E.tipY,1)} m`],["Impacto",`${re(vt.vImp||z.queda.impactSpeed||0,1)} m/s`]],lento:E.fase==="cravacao"&&Y(E.tSim)<1}},rotulos(){if(!E.ativo)return[];let rt=[],vt=E.eixo,tt=z.crav,ct=b(),N=new R(-E.dl.z,0,E.dl.x).multiplyScalar(9);if((E.fase==="posicionada"||E.fase==="queda")&&rt.push({pos:vt.clone().add(N).setY(ct*.5),texto:`${re(ct)} m at\xE9 o leito`,cor:"#e8f2f3",prio:8}),E.fase==="posicionada"&&rt.push({pos:vt.clone().setY(E.tipY+x+4),texto:"Libera\xE7\xE3o do torpedo",cor:"#f5ad69",prio:9}),(E.fase==="cravada"||E.fase==="tensionada")&&(rt.push({pos:vt.clone().setY(-tt.eye),texto:`Olhal a ${re(tt.eye,1)} m`,cor:"#f5ad69",prio:9}),rt.push({pos:vt.clone().setY(-tt.tip),texto:`Ponta a ${re(tt.tip,1)} m`,cor:"#f5ad69",prio:9}),E.fase==="tensionada"&&E.kTens>.6)){let G=E.L;rt.push({pos:G.revV[Math.round(G.revV.length*.55)].clone(),texto:"Trecho enterrado em curva",cor:Xr.buried,prio:7}),rt.push({pos:ee(...G.tdp).setY(.5),texto:"TDP",cor:Xr.chain,prio:7})}return rt},foco(){return new R(E.eixo.x,E.tipY+x*.5,E.eixo.z)}}})(),p=(()=>{let g=wn,x=g.D/2,m=[e.planoMeio,new hn(new R(1,0,0),1e7)],f=pt=>{let gt=pt.clone();return gt.clippingPlanes=m,gt.clipIntersection=!0,gt.clipShadows=!1,gt},S=La(g,{});S.visible=!1,o.add(S),S.traverse(pt=>{pt.isMesh&&(pt.material=f(pt.material))});let y=S.userData,_=e.estrato({lado:un,cotas:0});_.clippingPlanes=m,_.clipIntersection=!0,_.clipping=!0,_.uniforms.uTopo.value.set("#9a8460"),_.uniforms.uMeio.value.set("#80694c");let z=new $t(new sn(x-.05,x-.05,1,40,1,!1).translate(0,-.5,0),_);S.add(z);let E=new Cn({color:"#5fd0ff",transparent:!0,opacity:.3,side:un,depthWrite:!1,clippingPlanes:m,clipIntersection:!0}),w=new $t(new sn(x-.07,x-.07,1,40,1,!0).translate(0,.5,0),E);S.add(w);let I=new Cn({color:"#ffb347"}),T=[0,1].map(()=>{let pt=new $t(new We(.14,1,.14),I);return pt.visible=!1,o.add(pt),pt}),b=h("#e9f3f5",.85),U=[0,1,2,3].map(()=>h("#e9f3f5",.9)),Y=t.rov,W=h("#f2c230",.9),X=n?0:36,st=new si(new Re().setAttribute("position",new ke(new Float32Array(Math.max(1,X)*3),3)),new $n({color:"#c9f1ff",size:.35,map:s.brilho,transparent:!0,depthWrite:!1,blending:Bn}));st.frustumCulled=!1,st.visible=!1,o.add(st);let $=d(n?0:24,"#8f7a58"),V={ativo:!1,fase:"",t:0,alvo:null,pos:new R,ry:0,pen:0,tipY:0,pausa:!1,vel:1},Q=g.L-g.topo,At=g.L*.4,rt={descida:4.2,peso:3.6,rov:4.6,succao:8,saida:2.6},vt=(()=>{let pt=0,gt={};for(let[St,It]of Object.entries(rt))gt[St]=[pt,pt+It],pt+=It;return gt.total=pt,gt})(),tt=!1;function ct(pt,gt){let St=pt||t.sucs[2];V.alvo=St;let It=St.u,j=[-It[1],It[0]],yt=[St.pos[0]+j[0]*22-It[0]*6,St.pos[1]+j[1]*22-It[1]*6];V.pos.copy(ee(yt[0],yt[1],0)),V.ry=St.ry,S.position.copy(V.pos),S.rotation.y=V.ry,S.visible=!0,V.ativo=!0,V.t=0,V.fim=!1,tt=!1,t.inst.visible=!0;let D=t.inst.userData.gancho;t.inst.rotation.y=0,t.inst.position.set(V.pos.x-D.x,Ae,V.pos.z-D.z),Y.visible=!1,gt==null&&(gt=Math.atan2(It[1],It[0])*180/Math.PI+90),e.abrir({centro:V.pos.clone(),az:gt,larg:24,tras:x+1.2,frente:70,prof:20}),H(0)}function N(){if(V.ativo){V.ativo=!1,S.visible=!1,T.forEach(pt=>{pt.visible=!1}),Y.visible=!1,t.inst.visible=!1,b.l.visible=!1,W.l.visible=!1,st.visible=!1,U.forEach(pt=>{pt.l.visible=!1}),$.parar();for(let pt of m)pt.normal.set(1,0,0),pt.constant=1e7}}let G=st.geometry.attributes.position.array;function H(pt){if(!V.ativo)return;V.pausa||(V.t+=pt*V.vel);let gt=V.t,St=vt,It,j,yt=1,D=!1,Vt=0,bt=0;if(gt<St.descida[1]){let jt=Ai(xe(gt/rt.descida,0,1));It=fn(26,0,jt),j="descida"}else if(gt<St.peso[1]){let jt=xe((gt-St.peso[0])/rt.peso,0,1);It=-At*(1-Math.pow(1-jt,2.2)),j="peso",tt||(tt=!0,$.disparar(V.pos,.45))}else if(gt<St.rov[1]){let jt=xe((gt-St.rov[0])/rt.rov,0,1);It=-At,j="rov",Vt=Ai(xe(jt/.7,0,1)),yt=1-kn(xe((jt-.55)/.3,0,1))}else if(gt<St.succao[1]){let jt=xe((gt-St.succao[0])/rt.succao,0,1);It=fn(-At,-Q,kn(jt)),j="succao",Vt=1,yt=0,D=!0}else{let jt=xe((gt-St.saida[0])/rt.saida,0,1);It=-Q,j="cravada",Vt=1,bt=Ai(jt),yt=0,jt>=1&&(V.fim=!0)}V.fase=j,V.tipY=It,V.pen=Math.max(0,-It),V.bomba=D,V.tampa=yt>.5;let Tt=It-(g.topo-g.L);S.position.set(V.pos.x,Tt,V.pos.z),y.lid.rotation.z=yt*1.9;let Rt=V.pen;z.visible=Rt>.05,z.scale.set(1,Math.max(.01,Rt),1),z.position.y=-Tt;let Zt=g.L-Rt-.05;w.visible=Zt>.05,w.scale.set(1,Math.max(.01,Zt),1),w.position.y=-Tt;let Ot=i.campo.worldToLocal(i.camera.position.clone()),C=Ot.sub(V.pos).setY(0);C.lengthSq()<1e-6&&C.set(1,0,0),C.normalize();let M=new R(0,1,0);[Math.PI/4,-Math.PI/4].forEach((jt,_t)=>{let Pt=C.clone().applyAxisAngle(M,jt).negate(),te=m[_t];te.normal.copy(Pt),te.constant=-Pt.dot(V.pos),te.applyMatrix4(i.campo.matrixWorld);let ie=C.clone().applyAxisAngle(M,jt).multiplyScalar(x-.02),Gt=T[_t];Gt.visible=!0,Gt.scale.y=g.L,Gt.position.set(V.pos.x+ie.x,S.position.y+g.topo-g.L/2,V.pos.z+ie.z)});let q=t.inst.position.clone().add(t.inst.userData.gancho),lt=y.olhais.map(jt=>jt.clone().applyAxisAngle(new R(0,1,0),V.ry).add(S.position)),ft=V.pos.clone().setY(S.position.y+g.topo+7),ht=j==="descida"||j==="peso"&&gt<St.peso[0]+1.2;b.l.visible=ht,U.forEach((jt,_t)=>{jt.l.visible=ht,jt.de(ft,lt[_t])}),ht&&b.de(q,ft);let Ct=y.porta.position.clone().applyAxisAngle(new R(0,1,0),V.ry).add(S.position),Dt=Ct.clone().add(new R(-V.pos.x+Ct.x,0,-V.pos.z+Ct.z).normalize().multiplyScalar(24)).setY(Ct.y+9);Y.visible=Vt>0&&bt<1;let Wt=Ct.clone().add(new R(0,1.2,0));Y.position.copy(Dt).lerp(Wt,Vt).lerp(Dt,bt);{let jt=Ct.x-Y.position.x,_t=Ct.z-Y.position.z;Y.rotation.set(0,Math.atan2(-_t,jt),0)}if(W.l.visible=Y.visible,W.de(Y.position.clone().add(new R(0,1.6,0)),Y.position.clone().add(new R(-6,60,4))),st.visible=X>0&&(j==="peso"||D),st.visible){let jt=y.esc.position.clone().applyAxisAngle(new R(0,1,0),V.ry).add(S.position),_t=D?Y.position.clone().add(new R(0,1.8,0)):jt.add(new R(0,.6,0));for(let Pt=0;Pt<X;Pt++){let te=(gt*(D?1.4:.9)+Pt/X)%1,ie=Pt*2.39;G[Pt*3]=_t.x+Math.cos(ie)*te*(D?1.2:.6),G[Pt*3+1]=_t.y+te*(D?9:4),G[Pt*3+2]=_t.z+Math.sin(ie)*te*(D?1.2:.6)}st.geometry.attributes.position.needsUpdate=!0,st.material.opacity=D?.9:.6}$.atualizar(pt)}let ot={descida:"Descida pelo guindaste",peso:"Crava\xE7\xE3o pelo peso pr\xF3prio",rov:"ROV fecha a escotilha",succao:"Suc\xE7\xE3o",cravada:"Cravada"};return{iniciar:ct,parar:N,atualizar:H,st:V,get ativo(){return V.ativo},get fim(){return!!V.fim},duracao:()=>vt.total+.4,telemetria(){return V.ativo?{titulo:"Estaca de suc\xE7\xE3o",fase:ot[V.fase],barra:V.pen/Q,marca:At/Q,itens:[["Penetra\xE7\xE3o",`${re(V.pen,1)} m`],["Escotilha",V.tampa?"aberta":"fechada"],["Bomba do ROV",V.bomba?"ligada":"desligada"]],legenda:[`peso pr\xF3prio at\xE9 ${re(At,1)} m`,`final ${re(Q,1)} m`]}:null},rotulos(){if(!V.ativo)return[];let pt=[],gt=V.pos;return(V.fase==="peso"||V.fase==="descida")&&pt.push({pos:gt.clone().setY(S.position.y+g.topo+3),texto:"Escotilha aberta: a \xE1gua escapa",cor:"#c9f1ff",prio:8}),V.fase==="succao"&&(pt.push({pos:Y.position.clone().add(new R(0,2.5,0)),texto:"ROV bombeando a \xE1gua de dentro",cor:"#f2c230",prio:9}),pt.push({pos:gt.clone().setY(-V.pen*.5),texto:"Solo dentro da saia",cor:"#d8c49c",prio:7})),V.fase==="cravada"&&pt.push({pos:gt.clone().setY(-Q),texto:`Ponta a ${re(Q,1)} m`,cor:"#c59bff",prio:8}),pt},foco(){return V.pos.clone().setY(-2)}}})();return{torpedo:u,succao:p,atualizar(g){u.atualizar(g),p.atualizar(g)},parar(){u.parar(),p.parar()},get ativa(){return u.ativo?u:p.ativo?p:null}}}function $d(i,t){let{camera:e,campo:n}=i,s=new R,r=new R;function o(){let d=n.worldToLocal(s.copy(t.target)),p=n.worldToLocal(r.copy(e.position)).clone().sub(d),g=Math.max(.5,p.length());return{alvo:d.clone(),dist:g,az:Math.atan2(-p.z,p.x)*180/Math.PI,el:Math.asin(xe(p.y/g,-1,1))*180/Math.PI}}let a=(d,u=new R)=>{let p=rh(d.az),g=rh(d.el);return u.set(d.alvo.x+d.dist*Math.cos(g)*Math.cos(p),d.alvo.y+d.dist*Math.sin(g),d.alvo.z-d.dist*Math.cos(g)*Math.sin(p))};function c(d){t.target.copy(n.localToWorld(d.alvo.clone())),e.position.copy(n.localToWorld(a(d)))}let l=d=>typeof d=="function"?d():d.isVector3?d:new R(d[0],d[2],-d[1]);function h(d,u,p){let g=u.az-d.az;for(;g>180;)g-=360;for(;g<-180;)g+=360;return{alvo:l(d.alvo).clone().lerp(l(u.alvo),p),dist:Math.exp(fn(Math.log(d.dist),Math.log(u.dist),p)),az:d.az+g*p,el:fn(d.el,u.el,p)}}return{estado:o,aplicar:c,misturar:h,resolve:l,posDe:a}}function Zd(i,{reduce:t}){let e=[],n=0,s=!1,r=!1,o=null,a=0,c=-1;function l(u,p){let g=i.estado();e=[],u.forEach((x,m)=>e.push({...x,de:x.de==="atual"||m===0&&!x.de?g:x.de||u[m-1].para})),t&&(e=e.map(x=>({...x,corte:!0}))),a=e.reduce((x,m)=>x+m.dur,0),n=0,s=!0,r=!1,o=p||null,c=-1}function h(){if(!s)return;r=!1;let u=0,p=0;for(;p<e.length&&!(n<u+e[p].dur);p++)u+=e[p].dur;if(p>=e.length)return;let g=e[p],x=xe((n-u)/g.dur,0,1),m=g.corte?1:(g.curva||Ai)(x),f=i.misturar(g.de,g.para,m),S={dur:t?.01:1.6,de:i.estado(),para:{...f,alvo:f.alvo.clone()},retomada:!0},y={...g,de:{...f,alvo:f.alvo.clone()},dur:Math.max(.05,(1-x)*g.dur),curva:_=>_,iniciou:!0};e.splice(p,1,S,y),a=e.reduce((_,z)=>_+z.dur,0),n=u,c=p}function d(u){if(!s||r)return null;n+=u;let p=0;for(let m=0;m<e.length;m++){let f=e[m];if(n<p+f.dur){m!==c&&(c=m,f.ini&&!f.retomada&&!f.iniciou&&(f.iniciou=!0,f.ini()));let S=xe((n-p)/f.dur,0,1),y=f.corte?1:(f.curva||Ai)(S);return i.aplicar(i.misturar(f.de,f.para,y)),{k:n/a,t:n}}p+=f.dur}let g=e[e.length-1];g&&i.aplicar(i.misturar(g.de,g.para,1)),s=!1;let x=o;return o=null,x&&x(),{k:1,t:n}}return{tocar:l,retomar:h,atualizar:d,parar(){s=!1,r=!1,o=null},pausar(){s&&(r=!0)},get ativo(){return s},get pausado(){return r},get t(){return n},get dur(){return a}}}var l_={camadas:'<path d="M8 2 1.5 5.5 8 9l6.5-3.5zM1.5 8.5 8 12l6.5-3.5M1.5 11 8 14.5 14.5 11"/>',equip:'<path d="M2.5 3.5h11M2.5 8h11M2.5 12.5h11"/><circle cx="5" cy="3.5" r="1.3"/><circle cx="10" cy="8" r="1.3"/><circle cx="6.5" cy="12.5" r="1.3"/>',vistas:'<path d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z"/><circle cx="8" cy="8" r="2"/>',corte:'<path d="M1.5 6.5h13"/><path d="M4 6.5v7h8v-7"/><path d="M4 9.5h8M4 11.8h8" stroke-dasharray="1.4 1.3"/><path d="M8 1.5v3"/>',ajuda:'<circle cx="8" cy="8" r="6.5"/><path d="M6.2 6.2a1.9 1.9 0 1 1 2.6 1.8c-.5.2-.8.6-.8 1.1v.4"/><path d="M8 11.6v.2"/>',foco:'<circle cx="8" cy="8" r="2.4"/><path d="M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3"/>',voltar:'<path d="M10 3 5 8l5 5"/>',prox:'<path d="m6 3 5 5-5 5"/>',x:'<path d="M4 4l8 8M12 4l-8 8"/>',foto:'<path d="M2 5h2.5L6 3h4l1.5 2H14v8H2z"/><circle cx="8" cy="9" r="2.4"/>',link:'<path d="M6.5 9.5 9.5 6.5M7 4.5l1.2-1.2a2.6 2.6 0 0 1 3.7 3.7L10.7 8.2M9 11.5l-1.2 1.2a2.6 2.6 0 0 1-3.7-3.7L5.3 7.8"/>',busca:'<circle cx="7" cy="7" r="4.2"/><path d="m10.2 10.2 3.3 3.3"/>',play:'<path d="M5 3.2v9.6L13 8z"/>',pausa:'<path d="M5 3h2.2v10H5zM8.8 3H11v10H8.8z"/>',repetir:'<path d="M2.8 8a5.2 5.2 0 1 0 1.6-3.8"/><path d="M2.5 1.8v3h3"/>'},Ze=(i,t="")=>`<svg viewBox="0 0 16 16" class="${t}" aria-hidden="true">${l_[i]}</svg>`,_h=(i,t)=>{let e=parseInt(i.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`},cr='"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',jd='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',Jd=[{k:"moor",n:"Ancoragem",s:"linhas e estacas T-120",c:"#6fd8cf"},{k:"prod",n:"Produ\xE7\xE3o",s:"risers, \xE1rvores, PLETs e linhas de servi\xE7o",c:"#f2c14e"},{k:"inj",n:"Inje\xE7\xE3o WAG",s:"risers e po\xE7os injetores",c:"#4fb3ff"},{k:"umb",n:"Controle",s:"umbilicais e SDUs",c:"#ff8fbf"},{k:"fund",n:"Funda\xE7\xF5es",s:"estacas de suc\xE7\xE3o e T-35",c:"#c59bff"},{k:"nav",n:"Navio aliviador",s:"espia e mangote",c:"#ff8a4c"},{k:"mar",n:"Superf\xEDcie do mar",s:"",c:"#8fe3ff"},{k:"lbl",n:"R\xF3tulos",s:"",c:"#e8f2f3"}],h_=["Superf\xEDcie","Ancoragem","Produ\xE7\xE3o","Inje\xE7\xE3o","Controle","Funda\xE7\xF5es"];function Kd(i){let{stage:t,cv:e,amb:n,C:s,corte:r,capitulos:o,reduce:a,coarse:c,acoes:l}=i,h=O=>document.getElementById(O),d=matchMedia("(max-width: 820px)"),u=()=>d.matches,p=s.items,g=document.createElement("canvas");g.className="c3-ov",g.setAttribute("aria-hidden","true"),e.after(g);let x=g.getContext("2d"),m=document.createElement("div");m.className="c3-ui",m.innerHTML=`
    <nav class="c3-trilho" aria-label="Pain\xE9is do campo">
      <button type="button" data-sec="camadas" aria-label="Camadas" title="Camadas">${Ze("camadas")}<span>Camadas</span></button>
      <button type="button" data-sec="equip" aria-label="Equipamentos" title="Equipamentos">${Ze("equip")}<span>Equipamentos</span></button>
      <button type="button" data-sec="vistas" aria-label="Vistas" title="Vistas">${Ze("vistas")}<span>Vistas</span></button>
      <button type="button" data-sec="corte" aria-label="Corte do solo" title="Corte do solo (raio X)">${Ze("corte")}<span>Corte</span></button>
      <button type="button" data-sec="ajuda" aria-label="Ajuda" title="Ajuda" class="c3-so-mouse">${Ze("ajuda")}<span>Ajuda</span></button>
    </nav>
    <aside class="c3-gaveta" aria-label="Painel" hidden>
      <header class="c3-g-topo"><span class="c3-pega" aria-hidden="true"></span><h3 class="c3-g-tit"></h3><button type="button" class="c3-g-x" aria-label="Fechar painel">${Ze("x")}</button></header>
      <div class="c3-g-corpo">
        <section data-sec="camadas">
          <div class="c3-camadas" role="group" aria-label="Camadas">${Jd.map(O=>`<button type="button" data-camada="${O.k}" aria-pressed="true"><i style="--c:${O.c}"></i><span><b>${O.n}</b>${O.s?`<small>${O.s}</small>`:""}</span><em class="c3-sw" aria-hidden="true"></em></button>`).join("")}</div>
          <div class="c3-aprox"></div>
        </section>
        <section data-sec="equip" hidden>
          <label class="c3-busca">${Ze("busca")}<input type="search" placeholder="Buscar: P3, T-35, SDU\u2026" aria-label="Buscar equipamento" autocomplete="off"></label>
          <div class="c3-lista" role="list"></div>
        </section>
        <section data-sec="vistas" hidden>
          <div class="c3-vistas">
            <button type="button" data-vista="geral"><b>Geral</b><small>campo inteiro</small></button>
            <button type="button" data-vista="cima"><b>De cima</b><small>planta do arranjo</small></button>
            <button type="button" data-vista="fpso"><b>FPSO</b><small>casco, risers e buzinas</small></button>
            <button type="button" data-vista="estaca"><b>Estaca torpedo</b><small>olhal e trecho enterrado</small></button>
            <button type="button" data-vista="poco"><b>Po\xE7o</b><small>ANM, jumper e PLET</small></button>
            <button type="button" data-vista="leito"><b>Do leito</b><small>olhando para o FPSO</small></button>
            <button type="button" data-vista="mergulho" class="c3-destaque"><b>Mergulho</b><small>da superf\xEDcie at\xE9 a \xE1rvore de natal</small></button>
          </div>
          <div class="c3-acoes">
            <button type="button" data-acao="captura">${Ze("foto")}Salvar imagem</button>
            <button type="button" data-acao="link">${Ze("link")}Copiar link desta vista</button>
          </div>
        </section>
        <section data-sec="corte" hidden>
          <button type="button" class="c3-opcao" data-corte="seguir" aria-pressed="false"><span><b>Corte no centro da vista</b><small>abre uma janela no leito onde a c\xE2mera est\xE1 olhando</small></span><em class="c3-sw" aria-hidden="true"></em></button>
          <button type="button" class="c3-opcao" data-corte="transp" aria-pressed="false"><span><b>Leito transparente</b><small>todas as estacas e trechos enterrados de uma vez</small></span><em class="c3-sw" aria-hidden="true"></em></button>
          <div class="c3-solo"><div class="c3-solo-barra" aria-hidden="true"></div><div class="c3-solo-txt"></div></div>
          <div class="c3-acoes">
            <button type="button" data-anim="torpedo">${Ze("play")}Ver a crava\xE7\xE3o da estaca torpedo</button>
            <button type="button" data-anim="succao">${Ze("play")}Ver a instala\xE7\xE3o da estaca de suc\xE7\xE3o</button>
          </div>
        </section>
        <section data-sec="ajuda" hidden>
          <div class="c3-ajuda"><b>Mouse</b><p>Arrastar gira \xB7 bot\xE3o direito ou Shift move \xB7 roda aproxima (com Ctrl na p\xE1gina) \xB7 clique seleciona</p>
          <b>Toque</b><p>Um dedo gira \xB7 dois dedos aproximam e movem \xB7 toque seleciona</p>
          <b>Teclado</b><p><kbd>1</kbd>\u2013<kbd>8</kbd> cap\xEDtulos \xB7 <kbd>Espa\xE7o</kbd> tour \xB7 <kbd>F</kbd> tela cheia \xB7 <kbd>X</kbd> corte \xB7 <kbd>L</kbd> r\xF3tulos \xB7 <kbd>T</kbd> vista de cima \xB7 <kbd>Esc</kbd> fecha</p></div>
        </section>
        <section data-sec="insp" class="c3-insp" aria-live="polite" hidden></section>
      </div>
    </aside>
    <div class="c3-pilula" hidden></div>
    <div class="c3-tele" hidden aria-live="polite"></div>
    <button type="button" class="c3-chip" hidden></button>
    <button type="button" class="c3-explorar">${Ze("foco")}Explorar</button>
    <div class="c3-hud" aria-hidden="true">
      <div class="c3-prof"><div class="c3-prof-col"><i class="c3-prof-sup"></i><i class="c3-prof-leito"></i><i class="c3-prof-cam"></i><i class="c3-prof-alvo"></i></div><span class="c3-prof-t"></span></div>
      <div class="c3-escala"><i></i><span></span></div>
      <div class="c3-bussola"><svg viewBox="-20 -20 40 40"><circle r="18"/><g class="c3-n"><path d="M0-15 4 0h-8z" class="n"/><path d="M0 15 4 0h-8z" class="s"/></g><g class="c3-h"><path d="M0 0V-12"/></g></svg><span>N</span></div>
    </div>
    <div class="c3-aviso" role="status"></div>`,t.append(m);let f=O=>m.querySelector(O),S=f(".c3-gaveta"),y=f(".c3-g-tit"),_=f(".c3-lista"),z=f(".c3-busca input"),E=f(".c3-insp"),w=f(".c3-pilula"),I=f(".c3-tele"),T=f(".c3-chip"),b=f(".c3-explorar"),U=f(".c3-aviso"),Y=f(".c3-bussola svg"),W=f(".c3-escala"),X=f(".c3-prof"),st=t.querySelector(".v3-dock");if(st){f(".c3-aprox").append(st);let O=st.querySelector("small");O&&(O.textContent="ancoragem espalhada: o aproamento fica fixo")}let $=h("v3-tip");$&&t.append($);let V=h("v3-card"),Q=h("v3-steps"),At={camadas:"Camadas",equip:"Equipamentos",vistas:"Vistas",corte:"Corte do solo",ajuda:"Ajuda",insp:"Detalhes"},rt=null,vt="equip",tt=!1;function ct(O){rt=O,y.textContent=At[O]||"",S.querySelectorAll("[data-sec]").forEach(nt=>{nt.tagName==="SECTION"&&(nt.hidden=nt.dataset.sec!==O)}),m.querySelectorAll(".c3-trilho [data-sec]").forEach(nt=>nt.setAttribute("aria-pressed",String(nt.dataset.sec===O))),O!=="insp"&&(vt=O)}function N(O){ct(O),S.hidden=!1,t.classList.add("c3-gaveta-on"),requestAnimationFrame(()=>S.classList.add("on")),P()}function G(){S.classList.remove("on"),S.hidden=!0,t.classList.remove("c3-gaveta-on"),m.querySelectorAll(".c3-trilho [data-sec]").forEach(O=>O.setAttribute("aria-pressed","false")),rt==="insp"&&l.selecionar(null,!0),rt=null,P()}m.querySelectorAll(".c3-trilho [data-sec]").forEach(O=>O.addEventListener("click",()=>{let nt=O.dataset.sec;!S.hidden&&rt===nt?G():N(nt)})),f(".c3-g-x").addEventListener("click",()=>G());{let O=f(".c3-g-topo"),nt=null;O.addEventListener("pointerdown",Nt=>{u()&&(nt=Nt.clientY,O.setPointerCapture(Nt.pointerId))}),O.addEventListener("pointerup",Nt=>{nt!=null&&Nt.clientY-nt>50&&G(),nt=null})}let H=Object.fromEntries(Jd.map(O=>[O.k,!0]));m.querySelectorAll("[data-camada]").forEach(O=>O.addEventListener("click",()=>{let nt=O.dataset.camada,Nt=O.getAttribute("aria-pressed")!=="true";O.setAttribute("aria-pressed",String(Nt)),H[nt]=Nt,l.camada(nt,Nt)}));function ot(O,nt){let Nt=m.querySelector(`[data-camada="${O}"]`);Nt&&Nt.setAttribute("aria-pressed",String(nt)),H[O]=nt,l.camada(O,nt)}let pt=()=>p.filter(O=>!O.oculto),gt=O=>({linha:"Linhas de ancoragem",torpedo:"Estacas torpedo T-120",succao:"Estacas de suc\xE7\xE3o",estaca35:"Estacas T-35",sdu:"SDUs",anm:O.cat==="prod"?"\xC1rvores de natal \xB7 produtores":"\xC1rvores de natal \xB7 injetores",plet:O.cat==="prod"?"PLETs \xB7 produ\xE7\xE3o":"PLETs \xB7 inje\xE7\xE3o",riser:O.riser?{prod:"Risers r\xEDgidos de produ\xE7\xE3o",wag:"Risers r\xEDgidos de inje\xE7\xE3o",serv:"Linhas de servi\xE7o flex\xEDveis",umb:"Umbilicais de controle"}[O.riser.tipo]:null})[O.kind]||null;function St(O=""){let nt=O.trim().toLowerCase(),Nt="";for(let he of h_){let Yt=pt().filter(F=>F.grupo===he);if(nt&&(Yt=Yt.filter(F=>(F.t+" "+(F.sub||"")+" "+F.kind+" "+(gt(F)||"")).toLowerCase().includes(nt))),!Yt.length)continue;let ce=[],A=new Set;for(let F of Yt){let Z=nt?null:gt(F);if(Z){if(A.has(Z))continue;A.add(Z),ce.push([F,on(Z),Yt.filter(K=>gt(K)===Z).length])}else ce.push([F,on(F.t)+(F.sub?` <small>${on(F.sub)}</small>`:""),0])}Nt+=`<div class="c3-grupo">${he}</div>`+ce.map(([F,Z,K])=>`<button type="button" role="listitem" data-item="${F.idx}"><i style="--c:${F.c}"></i><span>${Z}</span>${K>1?`<em>${K}</em>`:""}${Ze("prox","c3-seta")}</button>`).join("")}_.innerHTML=Nt||'<p class="c3-vazio">Nada encontrado.</p>'}St(),z.addEventListener("input",()=>St(z.value)),_.addEventListener("click",O=>{let nt=O.target.closest("[data-item]");if(!nt)return;let Nt=p[+nt.dataset.item];l.selecionar(Nt),l.focar(Nt)}),m.querySelectorAll("[data-vista]").forEach(O=>O.addEventListener("click",()=>{l.vista(O.dataset.vista),u()&&G()})),f('[data-acao="captura"]').addEventListener("click",()=>l.captura()),f('[data-acao="link"]').addEventListener("click",()=>l.link());let It=f('[data-corte="seguir"]'),j=f('[data-corte="transp"]');It.addEventListener("click",()=>{let O=It.getAttribute("aria-pressed")!=="true";l.corte("seguir",O)}),j.addEventListener("click",()=>{let O=j.getAttribute("aria-pressed")!=="true";l.corte("transp",O)}),m.querySelectorAll("[data-anim]").forEach(O=>O.addEventListener("click",()=>{l.animar(O.dataset.anim),u()&&G()}));function yt(O,nt){It.setAttribute("aria-pressed",String(!!O)),j.setAttribute("aria-pressed",String(!!nt)),m.querySelector('.c3-trilho [data-sec="corte"]').classList.toggle("ativo",!!(O||nt))}function D(O,nt){f(".c3-solo-txt").innerHTML=`<b>Solo do projeto</b><span>Argila mole: S<sub>u</sub> = ${re(O,1)} + ${re(nt,2)}\xB7z kPa</span><span>${[10,20,30,40].map(Nt=>`${Nt} m \xB7 ${re(O+nt*Nt,1)} kPa`).join("<br>")}</span>`}let Vt=null;function bt(O){if(Vt=O,!O){rt==="insp"&&(u()&&!tt?G():ct(vt||"equip")),T.hidden=!0,P();return}let nt=pt().filter(Yt=>Yt.kind===O.kind&&gt(Yt)===gt(O)),Nt=nt.indexOf(O),he=(O.acoes||[]).map(Yt=>Yt==="cravar"?`<button type="button" class="c3-anim" data-anim-it="torpedo">${Ze("play")}Ver a crava\xE7\xE3o</button>`:Yt==="instalar"?`<button type="button" class="c3-anim" data-anim-it="succao">${Ze("play")}Ver a instala\xE7\xE3o</button>`:"").join("");if(E.innerHTML=`
      <header><button type="button" class="c3-volta" aria-label="Voltar \xE0 lista">${Ze("voltar")}</button><i style="--c:${O.c}"></i><div><small>${on(O.grupo)}</small><h4>${on(O.t)}</h4>${O.sub?`<p class="c3-sub">${on(O.sub)}</p>`:""}</div></header>
      <p>${on(O.d||"")}</p>
      ${O.stats&&O.stats.length?`<dl>${O.stats.map(([Yt,ce])=>`<div><dt>${on(Yt)}</dt><dd>${on(ce)}</dd></div>`).join("")}</dl>`:""}
      <div class="c3-insp-acoes"><button type="button" class="c3-focar">${Ze("foco")}Aproximar</button>${he}
      ${nt.length>1?`<div class="c3-nav"><button type="button" data-d="-1" aria-label="Anterior">${Ze("voltar")}</button><span>${Nt+1} / ${nt.length}</span><button type="button" data-d="1" aria-label="Pr\xF3ximo">${Ze("prox")}</button></div>`:""}</div>`,E.querySelector(".c3-volta").addEventListener("click",()=>{l.selecionar(null),ct("equip")}),E.querySelector(".c3-focar").addEventListener("click",()=>l.focar(O)),E.querySelectorAll("[data-anim-it]").forEach(Yt=>Yt.addEventListener("click",()=>{l.animar(Yt.dataset.animIt,O),u()&&G()})),E.querySelectorAll("[data-d]").forEach(Yt=>Yt.addEventListener("click",()=>{let ce=nt[(Nt+ +Yt.dataset.d+nt.length)%nt.length];l.selecionar(ce),l.focar(ce)})),u()&&!tt){T.hidden=!1,T.innerHTML=`<i style="--c:${O.c}"></i><span>${on(O.t)}</span><b>Detalhes</b>`,P();return}N("insp")}T.addEventListener("click",()=>{let O=Vt;it(!0),O&&setTimeout(()=>bt(O),60)}),b.addEventListener("click",()=>it(!0));function Tt(O,nt,Nt){if(!$)return;if(!O){$.classList.remove("on"),e.classList.remove("pointing");return}$.innerHTML=`<b style="--c:${O.c}"><i></i>${on(O.t)}</b>${O.sub?`<p>${on(O.sub)}</p>`:""}<code>clique para detalhes</code>`,$.classList.add("on"),e.classList.add("pointing");let he=$.offsetWidth,Yt=$.offsetHeight,ce=e.clientWidth,A=e.clientHeight;$.style.left=(nt+18+he>ce-8?nt-he-18:nt+18)+"px",$.style.top=Math.max(8,Math.min(A-Yt-8,Nt-Yt/2))+e.offsetTop+"px"}let Rt=0,Zt=O=>{U.textContent=O,U.classList.add("on"),clearTimeout(Rt),Rt=setTimeout(()=>U.classList.remove("on"),2400)},Ot=h("v3-play"),C=h("v3-spin"),M=h("v3-top"),q=0,lt=!1,ft=document.createElement("button");ft.type="button",ft.className="c3-repetir",ft.hidden=!0,ft.innerHTML=`${Ze("repetir")}<span>Repetir</span>`,V.querySelector(".v3-card-top").insertBefore(ft,V.querySelector(".v3-nav")),ft.addEventListener("click",O=>{O.stopPropagation(),l.repetir()});function ht(O,nt){q=O;let Nt=o[O];Q.innerHTML=o.map((Yt,ce)=>`<button type="button" role="tab" aria-selected="${ce===O}" class="${ce<O?"done":""}" data-step="${ce}"><b>${String(ce+1).padStart(2,"0")}</b><span>${on(Yt.n)}</span></button>`).join(""),h("v3-count").textContent=`${String(O+1).padStart(2,"0")} / ${String(o.length).padStart(2,"0")}`,h("v3-step-title").textContent=Nt.n,h("v3-step-text").textContent=nt||Nt.t,ft.hidden=!Nt.anim;let he=Q.querySelector('[aria-selected="true"]');he&&Q.scrollWidth>Q.clientWidth+4&&Q.scrollTo({left:Math.max(0,he.offsetLeft-16),behavior:a?"auto":"smooth"}),P()}Q.addEventListener("click",O=>{let nt=O.target.closest("[data-step]");nt&&l.capitulo(+nt.dataset.step)}),h("v3-prev").addEventListener("click",O=>{O.stopPropagation(),l.capitulo(q-1)}),h("v3-next").addEventListener("click",O=>{O.stopPropagation(),l.capitulo(q+1)}),Ot.addEventListener("click",()=>l.tour(!lt));let Ct=!a,Dt=()=>{C.setAttribute("aria-pressed",String(Ct)),C.textContent=Ct?"Girando":"Parado"};C.addEventListener("click",()=>{Ct=!Ct,Dt(),l.girar(Ct)}),Dt(),M.addEventListener("click",()=>{let O=M.getAttribute("aria-pressed")!=="true";l.vista(O?"cima":"geral")}),h("v3-reset").addEventListener("click",()=>l.vista("geral"));let Wt=h("v3-heading");Wt&&Wt.addEventListener("change",()=>l.aproamento()),V.addEventListener("click",O=>{!tt||!u()||O.target.closest("button")||(V.classList.toggle("aberto"),P())});function jt(O){if(!O){w.hidden=!0,P();return}w.hidden=!1,w.innerHTML=`<span>${on(O.texto)}</span>${O.continuar?`<button type="button" data-p="cont">${Ze("play")}Continuar</button>`:""}${O.sair?`<button type="button" data-p="sair" aria-label="Sair do cap\xEDtulo">${Ze("x")}</button>`:""}`,w.querySelector('[data-p="cont"]')?.addEventListener("click",()=>l.continuar()),w.querySelector('[data-p="sair"]')?.addEventListener("click",()=>l.sairCapitulo()),P()}let _t="",Pt=document.createElement("canvas");Pt.width=440,Pt.height=132,Pt.className="c3-tele-graf";function te(O){if(!O){I.hidden||(I.hidden=!0,_t="",P());return}let nt=O.titulo;nt!==_t&&(_t=nt,I.hidden=!1,I.innerHTML=`<div class="c3-tele-topo"><b>${on(O.titulo)}</b><span class="c3-tele-fase"></span><em class="c3-tele-lento" hidden>c\xE2mera lenta</em></div><dl class="c3-tele-n"></dl><div class="c3-tele-barra" hidden><i></i><u></u></div>${O.legenda?`<div class="c3-tele-leg">${O.legenda.map(ce=>`<span>${on(ce)}</span>`).join("")}</div>`:""}`,O.hist&&I.append(Pt),P()),I.querySelector(".c3-tele-fase").textContent=O.fase||"",I.querySelector(".c3-tele-lento").hidden=!O.lento;let Nt=I.querySelector(".c3-tele-n"),he=O.itens.map(([ce,A])=>`<div><dt>${on(ce)}</dt><dd>${on(A)}</dd></div>`).join("");Nt.innerHTML!==he&&(Nt.innerHTML=he);let Yt=I.querySelector(".c3-tele-barra");O.barra!=null?(Yt.hidden=!1,Yt.querySelector("i").style.width=`${xe(O.barra,0,1)*100}%`,Yt.querySelector("u").style.left=`${xe(O.marca||0,0,1)*100}%`):Yt.hidden=!0,O.hist&&ie(O)}function ie(O){let nt=Pt.getContext("2d"),Nt=Pt.width,he=Pt.height,Yt=34,ce=10,A=10,F=26;nt.clearRect(0,0,Nt,he);let Z=-O.prof-2,K=O.hrel,v=30,L=J=>Yt+(K-J)/(K-Z)*(Nt-Yt-ce),B=J=>A+(1-J/v)*(he-A-F);if(nt.fillStyle="rgba(214,190,140,.13)",nt.fillRect(L(0),A,L(Z)-L(0),he-A-F),nt.strokeStyle="rgba(232,242,243,.25)",nt.lineWidth=1,nt.beginPath(),nt.moveTo(L(0),A),nt.lineTo(L(0),he-F),nt.stroke(),nt.font=`600 18px ${cr}`,nt.fillStyle="rgba(232,242,243,.6)",nt.textAlign="center",nt.fillText("\xE1gua",(L(K)+L(0))/2,he-6),nt.fillText("solo",(L(0)+L(Z))/2,he-6),nt.textAlign="right",nt.fillText("30",Yt-5,B(30)+6),nt.fillText("0",Yt-5,B(0)),O.hist.length>1){nt.strokeStyle="#f5ad69",nt.lineWidth=3,nt.beginPath(),O.hist.forEach(([Mt,dt],xt)=>{let Jt=L(Mt),kt=B(dt);xt?nt.lineTo(Jt,kt):nt.moveTo(Jt,kt)}),nt.stroke();let[J,et]=O.hist[O.hist.length-1];nt.fillStyle="#fff",nt.beginPath(),nt.arc(L(J),B(et),5,0,6.283),nt.fill()}nt.save(),nt.translate(12,(A+he-F)/2),nt.rotate(-Math.PI/2),nt.textAlign="center",nt.font=`600 16px ${cr}`,nt.fillStyle="rgba(232,242,243,.6)",nt.fillText("m/s",0,0),nt.restore()}let Gt=h("v3-full"),ue=h("v3-sair"),oe=!1,be=!1,k=()=>document.fullscreenElement||document.webkitFullscreenElement,zt=()=>{e.style.touchAction=tt||!c?"none":"pan-y"};function it(O,nt){if(O!==tt){if(tt=O,t.classList.toggle("imersivo",O),document.documentElement.classList.toggle("v3-imersivo",O),Gt.setAttribute("aria-pressed",String(O)),Gt.setAttribute("aria-label",O?"Sair da tela cheia":"Tela cheia"),zt(),T.hidden=!0,O){try{let Nt=(t.requestFullscreen||t.webkitRequestFullscreen)?.call(t,{navigationUI:"hide"});Nt&&Nt.catch&&Nt.catch(()=>{})}catch{}try{history.pushState({v3:1},""),oe=!0}catch{}t.classList.remove("dica"),t.offsetWidth,t.classList.add("dica"),ue&&ue.focus({preventScroll:!0})}else{if(k())try{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}catch{}if(oe&&!nt){oe=!1;try{history.back()}catch{}}else oe=!1;u()&&G(),Gt.focus({preventScroll:!0})}setTimeout(P,90)}}Gt.addEventListener("click",()=>it(!tt)),ue&&ue.addEventListener("click",()=>it(!1)),addEventListener("popstate",()=>{tt&&it(!1,!0)}),["fullscreenchange","webkitfullscreenchange"].forEach(O=>document.addEventListener(O,()=>{!k()&&tt&&be&&it(!1),be=!!k(),setTimeout(P,60)})),zt(),d.addEventListener("change",()=>{!u()&&!tt&&(T.hidden=!0),P()});let mt=!1;t.addEventListener("wheel",O=>{if(O.target===e){if(tt||mt||O.ctrlKey||O.metaKey){O.preventDefault(),l.interagiu();return}O.stopPropagation(),Zt("Clique na cena ou use Ctrl + rolagem para aproximar")}},{capture:!0,passive:!1}),e.addEventListener("pointerdown",()=>{mt=!0}),t.addEventListener("pointerleave",()=>{mt=!1}),t.addEventListener("keydown",O=>{if(/INPUT|TEXTAREA/.test(O.target.tagName))return;let nt=O.key.toLowerCase(),Nt=!0;nt>="1"&&nt<="8"?l.capitulo(+nt-1):nt===" "?Ot.click():nt==="f"?it(!tt):nt==="x"?l.corte("seguir",It.getAttribute("aria-pressed")!=="true"):nt==="l"?m.querySelector('[data-camada="lbl"]').click():nt==="t"?M.click():nt==="?"?N("ajuda"):nt==="escape"?Vt?l.selecionar(null):S.hidden?tt?it(!1):Nt=!1:G():Nt=!1,Nt&&O.preventDefault()});let Ht=[],Lt=1,se=1,Te=1,ze={x:0,y:0};function P(){requestAnimationFrame(()=>{let O=e.getBoundingClientRect(),nt=[...t.querySelectorAll(".v3-meta, .c3-trilho, .c3-gaveta:not([hidden]), .c3-pilula:not([hidden]), .c3-tele:not([hidden]), .c3-chip:not([hidden]), .c3-explorar, .v3-sair, .c3-bussola, .c3-escala")];(tt||!u())&&nt.push(V),Ht=nt.map(Yt=>{let ce=Yt.getBoundingClientRect();return{x:ce.left-O.left,y:ce.top-O.top,w:ce.width,h:ce.height}}).filter(Yt=>Yt.w&&Yt.h&&Yt.y<O.height&&Yt.y+Yt.h>0&&Yt.x<O.width&&Yt.x+Yt.w>0);let Nt=0,he=0;if(S.hidden){if(!u()){let Yt=f(".c3-trilho").getBoundingClientRect();Nt=Math.max(0,O.right-Yt.left)/2*.6}}else{let Yt=S.getBoundingClientRect();u()?he=Math.max(0,O.bottom-Yt.top)/2:Nt=Math.max(0,O.right-Yt.left)/2}!I.hidden&&!u()&&(he=Math.min(he,0)),ze={x:Nt,y:he},l.deslocar(Nt,he)})}addEventListener("resize",()=>setTimeout(P,80));let at=new R,Et=new R,Xt=new Map,ne=0,we=[];function ve(O,nt,Nt){at.copy(O),Nt.localToWorld(at);let he=at.distanceTo(nt.position);return at.project(nt),at.z>1||at.z<-1?null:[(at.x+1)/2*Lt,(1-at.y)/2*se,he]}function Ce(O,nt,Nt,he,Yt,ce,A,F,Z){x.globalAlpha=ce,x.fillStyle=Z?"rgba(4,16,24,.92)":"rgba(4,18,28,.84)",x.beginPath(),x.roundRect?x.roundRect(O,nt,Nt,he,7):x.rect(O,nt,Nt,he),x.fill(),x.strokeStyle=_h(Yt,.5),x.lineWidth=1,x.stroke(),x.fillStyle=Yt,x.fillRect(O+7,nt+7,3,he-14),x.fillStyle="#e8f2f3",x.font=`600 11.5px ${jd}`,x.fillText(A,O+16,nt+(F?15:he/2+4)),F&&(x.fillStyle="rgba(200,220,226,.75)",x.font=`500 10px ${cr}`,x.fillText(F,O+16,nt+29)),x.globalAlpha=1}function Ne(O){let{camera:nt,campo:Nt,dist:he,cap:Yt,sel:ce,hover:A,extras:F,cotas:Z,kAr:K}=O;ne++;let v=Math.round(Lt*Te),L=Math.round(se*Te);(g.width!==v||g.height!==L)&&(g.width=v,g.height=L),g.style.top=e.offsetTop+"px",g.style.width=Lt+"px",g.style.height=se+"px",x.setTransform(Te,0,0,Te,0,0),x.clearRect(0,0,Lt,se),x.textBaseline="alphabetic";let B=se/(2*Math.tan(n.fovBase*Math.PI/360)),J=ut=>Math.exp(-Math.pow(.16*ut/Math.max(he,60),2));we=[];let et=new Set,Mt=p.filter(ut=>ut.marcador&&!ut.oculto&&(ut.cat==="fpso"||H[ut.cat==="inj"?"inj":ut.cat]!==!1&&s.cats[ut.cat]&&s.cats[ut.cat].on)).sort((ut,Ft)=>Ft.prio-ut.prio);for(let ut of Mt){let Ft=ve(ut.pos,nt,Nt);if(!Ft)continue;let[ae,Bt,_e]=Ft;if(ae<-10||Bt<-10||ae>Lt+10||Bt>se+10)continue;let Ee=ut.raio*B/_e,me=(1-kn(xe((Ee-5)/9,0,1)))*J(_e)*(s.cats[ut.cat]?s.cats[ut.cat].foco:1);if(me<.05)continue;let qt=`${Math.round(ae/9)},${Math.round(Bt/9)}`;if(et.has(qt)&&ut!==ce&&ut!==A)continue;et.add(qt),we.push({it:ut,x:ae,y:Bt});let Kt=ut===A||ut===ce?6:ut.prio>=6?4.6:3.6;x.globalAlpha=me,x.beginPath(),x.arc(ae,Bt,Kt+2.2,0,6.283),x.fillStyle="rgba(3,14,22,.75)",x.fill(),x.beginPath(),x.arc(ae,Bt,Kt,0,6.283),x.fillStyle=ut.c,x.fill(),(ut===A||ut===ce)&&(x.strokeStyle="#fff",x.lineWidth=1.5,x.beginPath(),x.arc(ae,Bt,Kt+4,0,6.283),x.stroke()),x.globalAlpha=1}let dt=Ht.slice(),xt=u()&&!tt,Jt=xt?5:u()?8:13,kt=[];if(H.lbl)for(let ut of s.rotulos)ut.caps&&!ut.caps.includes(Yt)||he<ut.faixa[0]||he>ut.faixa[1]||s.cats[ut.cat]&&!s.cats[ut.cat].on||kt.push({...ut,chave:ut});for(let ut of F)kt.push({...ut,chave:ut.texto,anim:!0});kt.sort((ut,Ft)=>(Ft.anim?100:0)+Ft.prio-(ut.anim?100:0)-ut.prio);let fe=0,Se=new Set;for(let ut of kt){if(fe>=Jt&&!ut.anim)break;let Ft=ve(ut.pos,nt,Nt);if(!Ft)continue;let[ae,Bt,_e]=Ft;if(ae<-20||Bt<-20||ae>Lt+20||Bt>se+20)continue;let Ee=ut.anim?1:J(_e);if(Ee<.2)continue;x.font=`600 11.5px ${jd}`;let me=Math.max(x.measureText(ut.texto).width,ut.sub?(x.font=`500 10px ${cr}`,x.measureText(ut.sub).width):0)+24,qt=ut.sub?38:24,Kt=[[16,-42],[16,16],[-me-16,-42],[-me-16,16],[26,-70],[-me-26,-70],[26,44],[-me/2,-62],[-me-26,44]],pe=null;for(let[za,jr]of Kt){let Ci=ae+za,Pi=Bt+jr;if(!(Ci<8||Pi<8||Ci+me>Lt-8||Pi+qt>se-8)&&!dt.some(Ii=>Ci<Ii.x+Ii.w+6&&Ci+me+6>Ii.x&&Pi<Ii.y+Ii.h+6&&Pi+qt+6>Ii.y)){pe={x:Ci,y:Pi};break}}if(!pe)continue;dt.push({...pe,w:me,h:qt}),fe++,Se.add(ut.chave);let He=Xt.get(ut.chave)??0,Le=a?1:Math.min(1,He+.08);Xt.set(ut.chave,Le);let $e=Le*Ee,Ve=pe.x,hi=pe.y,ui=Ve+me/2<ae?Ve+me:Ve,lr=hi+qt/2;x.globalAlpha=$e,x.strokeStyle=_h(ut.cor,.75),x.lineWidth=1,x.beginPath(),x.moveTo(ae,Bt),x.lineTo(ui,lr),x.stroke(),x.beginPath(),x.arc(ae,Bt,3,0,6.283),x.fillStyle=ut.cor,x.fill(),x.beginPath(),x.arc(ae,Bt,6.5,0,6.283),x.strokeStyle=_h(ut.cor,.45),x.stroke(),x.globalAlpha=1,Ce(Ve,hi,me,qt,ut.cor,$e,ut.texto,ut.sub,ut.anim)}for(let ut of Xt.keys())Se.has(ut)||Xt.delete(ut);if(Z&&Z.length){x.font=`600 10.5px ${cr}`;for(let ut of Z){let Ft=ve(ut.pos,nt,Nt);if(!Ft)continue;let[ae,Bt]=Ft;if(ae<0||Bt<0||ae>Lt||Bt>se)continue;x.strokeStyle="rgba(255,236,200,.85)",x.lineWidth=1.2,x.beginPath(),x.moveTo(ae-7,Bt),x.lineTo(ae+3,Bt),x.stroke();let _e=ut.texto,Ee=ut.sub,me=x.measureText(_e).width,qt=Ee?x.measureText(Ee).width:0,Kt=Math.max(me,qt)+12;x.fillStyle="rgba(4,16,24,.78)",x.beginPath(),x.roundRect?x.roundRect(ae+6,Bt-9,Kt,Ee?28:17,5):x.rect(ae+6,Bt-9,Kt,Ee?28:17),x.fill(),x.fillStyle="#ffe9c4",x.fillText(_e,ae+12,Bt+3),Ee&&(x.fillStyle="rgba(214,226,230,.8)",x.fillText(Ee,ae+12,Bt+15))}}if(ce){let ut=ve(ce.pos,nt,Nt);if(ut){let Ft=performance.now()/1e3,ae=15+(a?0:Math.sin(Ft*4)*3);x.strokeStyle=ce.c||"#fff",x.lineWidth=2,x.beginPath(),x.arc(ut[0],ut[1],ae,0,6.283),x.stroke(),x.globalAlpha=.35,x.beginPath(),x.arc(ut[0],ut[1],ae+9,0,6.283),x.stroke(),x.globalAlpha=1}}if(he>2500&&K>.5){let ut=Nt.worldToLocal(Et.copy(nt.position)),Ft=Math.atan2(ut.z,ut.x);x.font=`600 10px ${cr}`,x.fillStyle="rgba(255,230,190,.7)",x.textAlign="center";for(let ae of[1e3,2e3,3e3,4e3,5e3]){let Bt=ve(new R(Math.cos(Ft)*ae,1,Math.sin(Ft)*ae),nt,Nt);Bt&&Bt[0]>20&&Bt[0]<Lt-20&&Bt[1]>20&&Bt[1]<se-20&&!Ht.some(_e=>Bt[0]>_e.x&&Bt[0]<_e.x+_e.w&&Bt[1]>_e.y&&Bt[1]<_e.y+_e.h)&&x.fillText(`${ae/1e3} km`,Bt[0],Bt[1]+14)}x.textAlign="left"}ne%2===0&&Tn(O)}function Tn(O){let{camera:nt,campo:Nt,alvo:he,H:Yt}=O,ce=he;at.copy(ce).project(nt);let A=[at.x,-at.y];Et.copy(ce).add(new R(0,0,-100)).project(nt);let F=Math.atan2(-Et.y-A[1],Et.x-A[0])*180/Math.PI+90,Z=Nt.rotation.y;Et.copy(ce).add(new R(Math.cos(Z)*100,0,-Math.sin(Z)*100)).project(nt);let K=Math.atan2(-Et.y-A[1],Et.x-A[0])*180/Math.PI+90;Y.querySelector(".c3-n").setAttribute("transform",`rotate(${F.toFixed(1)})`),Y.querySelector(".c3-h").setAttribute("transform",`rotate(${K.toFixed(1)})`);let v=new R().setFromMatrixColumn(nt.matrixWorld,0);at.copy(ce).project(nt);let L=at.x;Et.copy(ce).addScaledVector(v,100).project(nt);let B=Math.abs(Et.x-L)/2*Lt;if(B>0){let dt=11e3/B,xt=[1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].find(Jt=>Jt>=dt*.6)||5e3;W.querySelector("i").style.width=(xt/100*B).toFixed(0)+"px",W.querySelector("span").textContent=xt>=1e3?`${re(xt/1e3)} km`:`${re(xt)} m`}let J=Nt.worldToLocal(at.copy(nt.position)).y,et=Nt.worldToLocal(at.copy(he)).y,Mt=dt=>dt>=0?(1-Math.min(dt,Yt*1.15)/Yt)*85:85+Math.min(1,-dt/60)*15;X.querySelector(".c3-prof-cam").style.top=`${xe(Mt(J),-4,100)}%`,X.querySelector(".c3-prof-alvo").style.top=`${xe(Mt(et),-4,100)}%`,X.querySelector(".c3-prof-t").textContent=J>Yt?`c\xE2mera ${re(J-Yt)} m acima do mar`:`c\xE2mera a ${re(Yt-J)} m de profundidade`}function Vn(O,nt){let Nt=c?22:14,he=null,Yt=Nt;for(let ce of we){let A=Math.hypot(ce.x-O,ce.y-nt);A<Yt&&(Yt=A,he=ce.it)}return he}return{overlay:g,capitulo:ht,inspecionar:bt,dica:Tt,aviso:Zt,telemetria:te,pilula:jt,solo:D,estadoCorte:yt,definirCamada:ot,acertarMarca:Vn,abrir:N,fechar:G,setImersivo:it,tour(O){lt=O,Ot.setAttribute("aria-pressed",String(O)),Ot.querySelector("span").textContent=O?"Pausar tour":"Tour guiado",O||(h("v3-prog").style.width="0%"),t.classList.toggle("c3-tour",O)},progresso(O){h("v3-prog").style.width=`${xe(O,0,1)*100}%`},girar(O){Ct=O,Dt()},vista(O){m.querySelectorAll("[data-vista]").forEach(nt=>nt.classList.toggle("on",nt.dataset.vista===O)),M.setAttribute("aria-pressed",String(O==="cima"))},tamanho(O,nt,Nt){Lt=O,se=nt,Te=Nt,t.style.setProperty("--c3-cvh",nt+"px"),P()},quadro:Ne,medir:P,get imersivo(){return tt},get camadas(){return H},get ocupado(){return ze},pronto(){t.classList.add("c3-pronto"),P()}}}var Zr=i=>document.getElementById(i),_s=Zr("v3-stage"),Ua=Zr("v3-canvas"),u_="assets/js/catenaria-vista3d.js?v=20261020-4";function Qd(){if(document.querySelector("script[data-v3-2d]"))return;let i=document.createElement("script");i.src=u_,i.setAttribute("data-v3-2d",""),document.body.append(i)}function d_(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}if(_s&&Ua)if(!d_())Qd();else{let i=document.createElement("canvas");try{f_(i)}catch(t){console.error(t),i.isConnected&&i.replaceWith(Ua),_s.classList.remove("c3"),Qd()}}function f_(i){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=matchMedia("(pointer: coarse)").matches,n=e||(navigator.hardwareConcurrency||8)<=4;i.id="v3-canvas",i.tabIndex=0,i.setAttribute("aria-label",Ua.getAttribute("aria-label")||"Vista tridimensional do campo");let s=Td(i,{leve:n,reduce:t});Ua.replaceWith(i),_s.classList.add("c3");let{renderer:r,scene:o,camera:a,campo:c}=s,l=()=>window.Lab&&window.Lab.project||{},h=Zr("v3-heading");{let P=Number(l().heading);Number.isFinite(P)&&h&&(h.value=String(P).replace(".",","))}let d=()=>{let P=Number(String(h?h.value:"35").replace(",","."));return Number.isFinite(P)?P:35};c.rotation.y=Math.PI/2-d()*Math.PI/180,c.updateMatrixWorld(!0);let u=Wd(s,{reduce:t,leve:n}),p=Xd(s,{reduce:t}),g=Yd(s,u,p,{reduce:t}),x=Math.min(devicePixelRatio||1,n?1.5:2),m=x;r.setPixelRatio(m);let f=new Sa(a,i);f.enableDamping=!t,f.dampingFactor=.085,f.rotateSpeed=.6,f.zoomSpeed=1,f.panSpeed=.9,f.minDistance=3,f.maxDistance=32e3,f.maxPolarAngle=Math.PI-.04,f.screenSpacePanning=!0,f.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN};let S=$d(s,f),y=Zd(S,{reduce:t}),_=Ae,z=P=>P*180/Math.PI,E=()=>10500*Math.max(1,1.5/Math.max(.3,a.aspect)),w=(P=215,at=31,Et=1)=>({alvo:new R(0,360,0),dist:E()*Et,az:P,el:at}),I=()=>u.mainL,T=P=>{let at=ee(...P.anchor),Et=ee(...P.tdp),Xt=new R(Et.x-at.x,0,Et.z-at.z).normalize();return{anc:at.setY(0),dl:Xt,lado:z(Math.atan2(Xt.x,Xt.z))}},b=u.RS.find(P=>P.tipo==="prod"&&P.poco.id==="P3"),U=z(Math.atan2(b.u[1],b.u[0])),Y=Ti.find(P=>P.id==="P3"),W=ee(Y.pos[0],Y.pos[1],3),X=ee(b.alvo[0],b.alvo[1],4),st=u.RS.find(P=>P.tipo==="wag"&&P.poco.id==="I3"),$=z(Math.atan2(st.u[1],st.u[0])),V=u.RS.find(P=>P.tipo==="serv"&&P.poco.id==="P3"),Q=u.itens.t35.find(P=>P.riser===V),At=(P,at)=>{let Et=P-at;for(;Et>180;)Et-=360;for(;Et<-180;)Et+=360;return Math.abs(Et)>90?P+180:P},rt=ee(b.porta[0],b.porta[1],b.porta[2]),vt=()=>{let P=g.torpedo.dados.crav,at=g.torpedo.dados.queda.points.slice(-1)[0].s;return`A estaca T-120, de 120 t, \xE9 posicionada pelo navio de instala\xE7\xE3o a ${re(at)} m do leito e solta. Chega ao leito a ${re(P.vImp||27.3,1)} m/s e crava ${re(P.tip,1)} m pelo pr\xF3prio peso. O olhal fica a ${re(P.eye,1)} m de profundidade; depois do tensionamento, a linha sai dele em curva dentro do solo at\xE9 o ponto de toque.`};function tt(P){let{anc:at,dl:Et,lado:Xt}=T(P),ne=g.torpedo,we=S.estado(),ve=At(Xt,we.az),Ce=ne.dados.queda,Ne=Ce.time??Ce.points[Ce.points.length-1].t,Tn=ne.duracao(),Vn=Math.max(3,Tn-2.6-Ne-5),O=()=>{let Nt=ne.ativo?ne.foco():at.clone().setY(80);return Nt.y=Math.max(Nt.y,10),Nt},nt=at.clone().addScaledVector(Et,9).setY(-15);return[{dur:2.6,para:{alvo:at.clone().setY(92),dist:235,az:ve,el:5},ini:()=>ne.iniciar(P,ve)},{dur:Ne,de:{alvo:O,dist:235,az:ve,el:5},para:{alvo:O,dist:118,az:ve+6,el:9},curva:Nt=>Nt},{dur:Vn,de:{alvo:O,dist:118,az:ve+6,el:9},para:{alvo:nt,dist:86,az:ve+10,el:17}},{dur:5,para:{alvo:nt,dist:92,az:ve+34,el:22}}]}function ct(P){let at=g.succao,Et=S.estado(),Xt=At(U+90,Et.az),ne=we=>()=>(at.ativo?at.st.pos.clone():ee(P.pos[0],P.pos[1],0)).setY(we);return[{dur:4.2,para:{alvo:ne(7),dist:64,az:Xt+22,el:11},ini:()=>at.iniciar(P,Xt)},{dur:3.6,para:{alvo:ne(-3),dist:47,az:Xt+16,el:15}},{dur:4.6,para:{alvo:ne(-2),dist:41,az:Xt+7,el:17}},{dur:8,para:{alvo:ne(-5),dist:38,az:Xt-6,el:20}},{dur:3,para:{alvo:ne(-4),dist:48,az:Xt-15,el:24}}]}let N=Sd.map(P=>({...P})),G={campo:{foco:null,tomadas:()=>[{dur:3,para:w(196,34,1.06)},{dur:11,para:w(236,29,1)}]},fpso:{foco:["fpso","moor","prod","inj","umb"],tomadas:()=>[{dur:3.2,para:{alvo:new R(0,_+6,0),dist:660,az:128,el:13}},{dur:6,para:{alvo:new R(0,_+2,0),dist:470,az:102,el:7}},{dur:6,para:{alvo:new R(20,_-45,0),dist:360,az:70,el:-11}}]},ancoragem:{foco:["moor"],tomadas:()=>{let P=I(),{anc:at,dl:Et,lado:Xt}=T(P),ne=ee(...P.fair),we=ee(...P.tdp),ve=ne.clone().lerp(at,.5).setY(Ae*.42),Ce=At(Xt,S.estado().az);return[{dur:3.4,para:{alvo:ve,dist:4300,az:Ce+6,el:6}},{dur:5.5,para:{alvo:ve.clone().lerp(we,.35),dist:3300,az:Ce+14,el:4}},{dur:5,para:{alvo:we.clone().setY(14),dist:260,az:Ce+10,el:9}},{dur:5,para:{alvo:at.clone().addScaledVector(Et,9).setY(-14),dist:98,az:Ce,el:18},ini:()=>p.abrir({centro:at.clone().addScaledVector(Et,9),az:Ce,larg:64,tras:6,prof:55})}]}},torpedo:{foco:["moor"],anim:"torpedo",tomadas:()=>tt(I()),texto:vt},risers:{foco:["prod","inj","umb","fund"],tomadas:()=>{let P=Q.pos.clone(),at=z(Math.atan2(V.u[1],V.u[0]));return[{dur:3.2,para:{alvo:rt.clone().setY(_-320),dist:1050,az:U+100,el:4}},{dur:6,para:{alvo:b.boiaMeio.clone(),dist:430,az:U+112,el:3}},{dur:5,para:{alvo:b.boiaMeio.clone(),dist:165,az:U+142,el:9}},{dur:5,para:{alvo:P.clone().setY(-6),dist:110,az:at+120,el:17},ini:()=>p.abrir({centro:P,az:at+120,larg:30,tras:4,prof:45})}]}},pocos:{foco:["prod","inj","umb","fund"],tomadas:()=>[{dur:3.2,para:{alvo:X.clone().lerp(W,.5),dist:150,az:U+120,el:24}},{dur:5,para:{alvo:W.clone(),dist:55,az:U+150,el:18}},{dur:5,para:{alvo:W.clone().setY(-9),dist:66,az:U+112,el:21},ini:()=>p.abrir({centro:W,az:U+112,larg:30,tras:3,prof:50})}]},succao:{foco:["fund","prod"],anim:"succao",tomadas:()=>ct(u.sucs[2])},escoamento:{foco:["inj","nav","fpso"],ini:()=>{u.fluxoOleo.ativo=!0},tomadas:()=>[{dur:3.5,para:{alvo:st.meio.clone(),dist:2600,az:$+100,el:10}},{dur:6,para:{alvo:st.susp[120].clone(),dist:1700,az:$+118,el:7}},{dur:6.5,para:{alvo:ee(-230,-20,_+4),dist:780,az:204,el:16}},{dur:5,para:{alvo:ee(-230,-20,_+4),dist:560,az:232,el:10}}]}};N.forEach(P=>Object.assign(P,G[P.id]));let H={cap:0,modo:null,spin:!t,idleAte:0,sel:null,hover:null,vista:null},ot=N.length;function pt(){g.parar(),p.fechar(),u.fluxoOleo.ativo=!1,u.focar(null),M.telemetria(null)}function gt(P,at){P=(P+ot)%ot,y.parar(),pt(),C.seguir&&p.abrir({seguir:!0}),H.cap=P,H.modo=at?"tour":"cap",H.vista=null,M.vista(null);let Et=N[P];Et.ini&&Et.ini(),u.focar(Et.foco);let Xt=Et.tomadas();M.capitulo(P,Et.texto?Et.texto():Et.t),y.tocar(Xt,()=>St(P)),j()}function St(P){H.modo==="tour"?P<ot-1?gt(P+1,!0):(It(!1),gt(0)):j()}function It(P){M.tour(P),P?(H.spin=!1,M.girar(!1),gt(H.modo==="cap"&&H.cap<ot-1?H.cap:0,!0)):(H.modo==="tour"&&(H.modo="cap"),y.parar(),j())}function j(){let P=N[H.cap];H.modo==="tour"?M.pilula(y.pausado?{texto:`Tour pausado \xB7 ${P.n}`,continuar:!0,sair:!0}:null):H.modo==="cap"&&H.cap>0?M.pilula(y.pausado?{texto:`${P.n} \xB7 pausado`,continuar:!0,sair:!0}:P.anim||p.aberto?{texto:P.n,sair:!0}:null):H.modo==="anim"?M.pilula({texto:H.animTexto,sair:!0}):M.pilula(null)}function yt(){y.parar(),pt(),H.modo==="tour"&&M.tour(!1),H.modo=null,M.capitulo(0),H.cap=0,j(),D("geral")}function D(P){y.parar(),H.modo==="tour"&&M.tour(!1),H.modo&&(pt(),H.modo=null,M.capitulo(0),H.cap=0),H.vista=P,M.vista(P);let at=S.estado();if(P==="geral")y.tocar([{dur:2.2,para:w(at.az>160&&at.az<270?at.az:215,31)}]);else if(P==="cima")y.tocar([{dur:2.2,para:{alvo:new R(0,0,0),dist:E()*1.12,az:at.az,el:89.5}}]);else if(P==="fpso")y.tocar([{dur:2.2,para:{alvo:new R(0,_-10,0),dist:560,az:116,el:9}}]);else if(P==="leito")y.tocar([{dur:2.6,para:{alvo:new R(0,_*.58,0),dist:1550,az:160,el:-36}}]);else if(P==="estaca"){let{anc:Et,dl:Xt,lado:ne}=T(I());y.tocar([{dur:2.6,para:{alvo:Et.clone().addScaledVector(Xt,11).setY(-14),dist:90,az:ne+16,el:19}}]),p.abrir({centro:Et.clone().addScaledVector(Xt,9),az:ne,larg:64,tras:6,prof:55})}else P==="poco"?y.tocar([{dur:2.6,para:{alvo:W.clone().lerp(X,.35),dist:70,az:U+150,el:20}}]):P==="mergulho"&&y.tocar([{dur:2.6,para:{alvo:new R(0,_,0),dist:950,az:U+70,el:26}},{dur:3.8,para:{alvo:rt.clone().setY(_-70),dist:280,az:U+95,el:4}},{dur:4.4,para:{alvo:b.boiaMeio.clone(),dist:330,az:U+120,el:3}},{dur:4,para:{alvo:ee(b.tdp[0],b.tdp[1],3),dist:170,az:U+140,el:11}},{dur:4,para:{alvo:W.clone(),dist:48,az:U+160,el:19}}],()=>M.vista(null))}function Vt(P){return{fpso:620,aliviador:720,mangote:520,linha:2300,torpedo:92,anm:42,plet:46,succao:46,sdu:46,estaca35:72,riser:1700}[P.kind]||Math.max(40,P.raio*6)}let bt=P=>P.kind==="torpedo"||P.kind==="estaca35"||P.kind==="succao";function Tt(P){if(!P)return;y.parar(),H.modo==="tour"&&It(!1);let at=S.estado(),Et=Vt(P),Xt=xe(at.el,14,38),ne=P.pos.clone();if(P.kind==="torpedo"?ne.y=-14:P.kind==="estaca35"&&(ne.y=-10),y.tocar([{dur:1.7,para:{alvo:ne,dist:Et,az:at.az,el:Xt}}]),bt(P)){let we=P.pos.clone().setY(0),ve=at.az;if(P.kind==="torpedo"){let{dl:Ce,lado:Ne}=T(P.linha);we.addScaledVector(Ce,9),ve=At(Ne,at.az),y.tocar([{dur:1.7,para:{alvo:we.clone().setY(-14),dist:Et,az:ve,el:Xt}}])}p.abrir({centro:we,az:ve,larg:P.kind==="succao"?22:P.kind==="torpedo"?64:34,tras:P.kind==="succao"?wn.D/2+1.2:P.kind==="torpedo"?6:4,prof:P.kind==="succao"?20:55})}H.idleAte=performance.now()+12e3}function Rt(P,at){if(y.parar(),H.modo==="tour"&&M.tour(!1),pt(),H.modo="anim",H.cap=P==="torpedo"?3:6,M.capitulo(H.cap,P==="torpedo"?vt():N[6].t),u.focar(N[H.cap].foco),P==="torpedo"){let Et=at&&at.linha?at.linha:I();H.animTexto=`Crava\xE7\xE3o \xB7 estaca ${Et.gi+1}.${Et.k+1}`,y.tocar(tt(Et),j)}else{let Et=at&&at.kind==="succao"?u.sucs.find(Xt=>Xt.item===at):u.sucs[2];H.animTexto=`Instala\xE7\xE3o \xB7 estaca de suc\xE7\xE3o ${Et.poco?"do PLET "+Et.poco.id:""}`,y.tocar(ct(Et),j)}j()}let Zt=new De;c.add(Zt);function Ot(P,at){H.sel=P,M.inspecionar(P),Zt.clear();let Et=P&&(P.linha?[...P.linha.revV.slice().reverse(),...P.linha.freeV]:P.riser?P.riser.pts:null);if(Et){let Xt=u.LM(null,{cor:"#ffffff",w:3.4,op:.95});Xt.resolution.copy(u.linhaMats[0].resolution),Zt.add(u.segmentos([{pts:Et,id:0}],Xt,!1))}}let C={seguir:!1,transp:!1},M=Kd({stage:_s,cv:i,amb:s,C:u,corte:p,capitulos:N,reduce:t,coarse:e,acoes:{capitulo:P=>gt(P,!1),tour:P=>It(P),girar:P=>{H.spin=P,H.idleAte=0},vista:D,focar:Tt,selecionar:Ot,animar:Rt,captura:()=>Wt(),link:()=>jt(),repetir:()=>{H.modo==="anim"?Rt(H.cap===3?"torpedo":"succao"):gt(H.cap,H.modo==="tour")},continuar:()=>{y.retomar(),j()},sairCapitulo:yt,camada:(P,at)=>{P==="mar"?s.mar.visible=at:P==="lbl"||u.camada(P,at)},corte:(P,at)=>{C[P]=at,P==="seguir"?at?p.abrir({seguir:!0}):p.fechar():p.transparente(at),M.estadoCorte(C.seguir,C.transp),j()},aproamento:()=>{c.rotation.y=Math.PI/2-d()*Math.PI/180,c.updateMatrixWorld(!0);try{window.Lab&&window.Lab.saveProject&&window.Lab.saveProject({heading:d()})}catch{}},deslocar:(P,at)=>s.deslocar(P,at),interagiu:()=>q()}});{let P=l();M.solo(Number.isFinite(+P.su0)?+P.su0:1,Number.isFinite(+P.suGradient)?+P.suGradient:1.15)}function q(){H.idleAte=performance.now()+9e3,y.ativo&&!y.pausado&&(y.pausar(),j())}let lt=new pa;lt.params.Line2={threshold:e?10:6},lt.params.Points={threshold:0};let ft=new wt;function ht(P,at){let Et=i.getBoundingClientRect(),Xt=P-Et.left,ne=at-Et.top,we=M.acertarMarca(Xt,ne);if(we)return we;ft.set(Xt/Et.width*2-1,-ne/Et.height*2+1),lt.setFromCamera(ft,a),lt.camera=a;let ve=u.pick.filter(Ce=>{let Ne=Ce;for(;Ne;){if(!Ne.visible)return!1;Ne=Ne.parent}return!0});for(let Ce of lt.intersectObjects(ve,!1)){let Ne=Ce.object;if(Ne.userData.owner&&Ne.userData.itens){let Tn=Ne.userData.owner[Ce.faceIndex],Vn=Ne.userData.itens[Tn];if(Vn)return Vn;continue}if(Ne.userData.item)return Ne.userData.item}return null}let Ct=null;i.addEventListener("pointerdown",P=>{Ct={x:P.clientX,y:P.clientY,t:performance.now()},q()}),i.addEventListener("pointerup",P=>{if(!Ct)return;let at=Math.hypot(P.clientX-Ct.x,P.clientY-Ct.y),Et=performance.now()-Ct.t;if(Ct=null,at<7&&Et<600){let Xt=ht(P.clientX,P.clientY);if(Ot(Xt),Xt&&e&&navigator.vibrate)try{navigator.vibrate(8)}catch{}}});let Dt=null;i.addEventListener("pointermove",P=>{P.pointerType!=="mouse"||Ct||(Dt=[P.clientX,P.clientY])}),i.addEventListener("pointerleave",()=>{H.hover=null,M.dica(null)}),f.addEventListener("start",()=>q());function Wt(){se(performance.now(),!0);let P=document.createElement("canvas");P.width=i.width,P.height=i.height;let at=P.getContext("2d"),Et=at.createLinearGradient(0,0,0,P.height);Et.addColorStop(0,"#14607f"),Et.addColorStop(1,"#041722"),at.fillStyle=Et,at.fillRect(0,0,P.width,P.height),at.drawImage(i,0,0),at.drawImage(M.overlay,0,0,P.width,P.height),at.fillStyle="rgba(232,242,243,.8)",at.font=`600 ${Math.round(13*m)}px Inter, sans-serif`,at.fillText("EngenhaLab \xB7 Laborat\xF3rio offshore \xB7 arranjo representativo",16*m,P.height-16*m),P.toBlob(Xt=>{if(!Xt)return;let ne=document.createElement("a");ne.href=URL.createObjectURL(Xt),ne.download="campo-offshore.png",ne.click(),setTimeout(()=>URL.revokeObjectURL(ne.href),4e3),M.aviso("Imagem salva")})}function jt(){let P=S.estado(),at=`vista=${[P.alvo.x,P.alvo.y,P.alvo.z].map(Xt=>Math.round(Xt)).join(",")},${Math.round(P.dist)},${P.az.toFixed(1)},${P.el.toFixed(1)}${H.sel?","+H.sel.idx:""}`,Et=location.href.split("#")[0]+"#"+at;try{history.replaceState(null,"","#"+at)}catch{}(navigator.clipboard?navigator.clipboard.writeText(Et):Promise.reject()).then(()=>M.aviso("Link desta vista copiado"),()=>M.aviso("Link na barra de endere\xE7o"))}function _t(){let P=location.hash.match(/vista=(-?\d+),(-?\d+),(-?\d+),(\d+),(-?[\d.]+),(-?[\d.]+)(?:,(\d+))?/);if(!P)return!1;let[at,Et,Xt,ne,we,ve,Ce]=P.slice(1).map(Number);return[at,Et,Xt,ne,we,ve].every(Number.isFinite)?(S.aplicar({alvo:new R(xe(at,-9e3,9e3),xe(Et,-80,6e3),xe(Xt,-9e3,9e3)),dist:xe(ne,3,32e3),az:we,el:xe(ve,-89,89.5)}),H.spin=!1,M.girar(!1),Number.isInteger(Ce)&&u.items[Ce]&&setTimeout(()=>Ot(u.items[Ce]),300),!0):!1}let Pt=0,te=0,ie=()=>{let P=i.clientWidth||1,at=i.clientHeight||1;if(!(P===Pt&&at===te)){Pt=P,te=at,r.setSize(P,at,!1),s.tamanho(P,at);for(let Et of u.linhaMats)Et.resolution.set(P*m,at*m);M.tamanho(P,at,m)}};new ResizeObserver(ie).observe(i),ie();let Gt=!0,ue=0,oe=0,be=0,k=0,zt=0;new IntersectionObserver(P=>{Gt=P[0].isIntersecting},{rootMargin:"160px"}).observe(_s);let it=new R;function mt(P){oe+=P;let at=y.atualizar(P);at&&(H.modo==="tour"||H.modo==="cap")&&M.progresso(at.k);let Et=H.spin&&!y.ativo&&!g.ativa&&performance.now()>H.idleAte&&!Ct&&(H.modo===null||H.cap===0)&&!H.sel;f.autoRotate=Et,f.autoRotateSpeed=-.22,y.ativo?f.update(0):f.update(P||1/60),c.worldToLocal(it.copy(a.position)),it.y<1.5&&(it.y=1.5,a.position.copy(c.localToWorld(it)));let Xt=s.atualizar(P,oe,f.target,ne=>_s.classList.toggle("c3-ar",ne));return p.atualizar(P,a,f.target,Xt.dist),g.atualizar(P),u.animarFoco(P),u.atualizar(P,oe,a,Xt.dist),Xt}let Ht=!1;function Lt({dist:P,kAr:at}){let Et=g.ativa;M.telemetria(Et?Et.telemetria():null);let Xt=!!(H.modo&&(H.cap!==0||H.modo==="anim"));if(Xt!==Ht&&(Ht=Xt,_s.classList.toggle("c3-foco",Xt)),r.render(o,a),Dt){let[we,ve]=Dt;Dt=null;let Ce=ht(we,ve);H.hover=Ce;let Ne=i.getBoundingClientRect();M.dica(Ce,we-Ne.left,ve-Ne.top)}let ne=l();M.quadro({camera:a,campo:c,dist:P,kAr:at,cap:H.modo==="anim"?"anim":H.modo?N[H.cap].id:null,sel:H.sel,hover:H.hover,alvo:f.target,H:_,extras:Et?Et.rotulos():[],cotas:p.rotulos(a,Number.isFinite(+ne.su0)?+ne.su0:1,Number.isFinite(+ne.suGradient)?+ne.suGradient:1.15)})}function se(P,at){let Et=ue?Math.min(.05,(P-ue)/1e3):0;if(ue=P,!at&&(!Gt||document.hidden||H.congelado))return;let Xt=Ct||y.ativo||g.ativa;if(!at&&n&&!Xt&&P-be<31)return;let ne=be?Math.min(.05,(P-be)/1e3):0;be=P,ie();let we=mt(ne);if(ne>0&&(k+=ne,zt++,zt>=50)){let ve=k/zt;k=zt=0,ve>(n?.045:.03)&&m>.75?(m=Math.max(.75,m-.25),r.setPixelRatio(m),Pt=0):ve<.019&&m<x&&(m=Math.min(x,m+.25),r.setPixelRatio(m),Pt=0)}Lt(we)}let Te=P=>{se(P),requestAnimationFrame(Te)};async function ze(){try{if(!window.Calc||typeof window.Calc.lancamento!="function")return;let P={...l(),model:120},at=await window.Calc.lancamento({projeto:P,excluir:[24,35,66]}),Et=at&&at.cravacao&&at.cravacao.tr;if(!Et||!at.queda||!Array.isArray(Et.points)||!Et.points.length)return;g.torpedo.definirDados({queda:at.queda,crav:{points:Et.points.map(ne=>({t:+ne.t,z:+ne.z,v:+ne.v})),time:Et.time,tip:+Et.penetration,eye:+Et.topDepth,vImp:+at.queda.impactSpeed}});let Xt=null;try{typeof window.Calc.resumo=="function"&&(Xt=await window.Calc.resumo({projeto:{...P,model:35}}))}catch{}u.definirCravacao({eye:+Et.topDepth,tip:+Et.penetration,v:+at.queda.impactSpeed,eye35:Xt&&+Xt.topDepth,tip35:Xt&&+Xt.penetration}),H.cap===3&&H.modo&&M.capitulo(3,vt())}catch{}}{let P=Zr("v3-r");P&&(P.innerHTML=`${re(yd)} <small>m</small>`);let at=Zr("v3-h");at&&(at.innerHTML=`${re(_)} <small>m</small>`)}M.capitulo(0),_t()||(S.aplicar(w(178,40,1.35)),y.tocar([{dur:t?.01:2.8,para:w(212,31)}])),f.update(),M.pronto(),requestAnimationFrame(Te),ze(),window.__campo3d={amb:s,C:u,corte:p,anim:g,controls:f,camera:a,cam:S,diretor:y,CAP:N,irCapitulo:gt,vista:D,selecionar:Ot,focar:Tt,animar:Rt,est:H,render:()=>se(performance.now(),!0),cam2(P,at){a.position.copy(c.localToWorld(ee(...P))),f.target.copy(c.localToWorld(ee(...at))),f.update(),se(performance.now(),!0)},avancar(P){let at=null,Et=Math.round(P*30);for(let Xt=0;Xt<Et;Xt++)at=mt(1/30);be=performance.now(),at=at||mt(0);for(let Xt=0;Xt<14;Xt++)Lt(at)},get dpr(){return m}}}
