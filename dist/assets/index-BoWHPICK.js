const __vite__fileDeps=["assets/TestView-GKG0nLKP.js","assets/TestView-CUWPIqjz.css","assets/HtmlView-mEDUmIIL.js","assets/HtmlView-lzVVc5Rn.css","assets/Index-Be2Gf5E_.js","assets/Index-eMIHJcTD.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $a(n,t){const e=new Set(n.split(","));return i=>e.has(i)}const ie={},Zi=[],ke=()=>{},Td=()=>!1,ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ja=n=>n.startsWith("onUpdate:"),ye=Object.assign,Ka=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},bd=Object.prototype.hasOwnProperty,qt=(n,t)=>bd.call(n,t),Dt=Array.isArray,Ar=n=>lo(n)==="[object Map]",Ad=n=>lo(n)==="[object Set]",Ht=n=>typeof n=="function",ge=n=>typeof n=="string",Qr=n=>typeof n=="symbol",ae=n=>n!==null&&typeof n=="object",mh=n=>(ae(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),wd=Object.prototype.toString,lo=n=>wd.call(n),Rd=n=>lo(n).slice(8,-1),Cd=n=>lo(n)==="[object Object]",Za=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,wr=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),co=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Pd=/-(\w)/g,rr=co(n=>n.replace(Pd,(t,e)=>e?e.toUpperCase():"")),Ld=/\B([A-Z])/g,fr=co(n=>n.replace(Ld,"-$1").toLowerCase()),gh=co(n=>n.charAt(0).toUpperCase()+n.slice(1)),Po=co(n=>n?`on${gh(n)}`:""),Zn=(n,t)=>!Object.is(n,t),Lo=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},_h=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},Id=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ol;const vh=()=>Ol||(Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ja(n){if(Dt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ge(i)?Od(i):Ja(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ge(n)||ae(n))return n}const Dd=/;(?![^(]*\))/g,Ud=/:([^]+)/,Nd=/\/\*[^]*?\*\//g;function Od(n){const t={};return n.replace(Nd,"").split(Dd).forEach(e=>{if(e){const i=e.split(Ud);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Qa(n){let t="";if(ge(n))t=n;else if(Dt(n))for(let e=0;e<n.length;e++){const i=Qa(n[e]);i&&(t+=i+" ")}else if(ae(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Fd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bd=$a(Fd);function xh(n){return!!n||n===""}/**
* @vue/reactivity v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class yh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Ye;try{return Ye=this,t()}finally{Ye=e}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function zd(n){return new yh(n)}function Hd(n,t=Ye){t&&t.active&&t.effects.push(n)}function Vd(){return Ye}let Si;class tl{constructor(t,e,i,r){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hd(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ti();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(kd(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ei()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=qn,e=Si;try{return qn=!0,Si=this,this._runnings++,Fl(this),this.fn()}finally{Bl(this),this._runnings--,Si=e,qn=t}}stop(){var t;this.active&&(Fl(this),Bl(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function kd(n){return n.value}function Fl(n){n._trackId++,n._depsLength=0}function Bl(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)Sh(n.deps[t],n);n.deps.length=n._depsLength}}function Sh(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let qn=!0,Ea=0;const Mh=[];function ti(){Mh.push(qn),qn=!1}function ei(){const n=Mh.pop();qn=n===void 0?!0:n}function el(){Ea++}function nl(){for(Ea--;!Ea&&Ta.length;)Ta.shift()()}function Eh(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const i=n.deps[n._depsLength];i!==t?(i&&Sh(i,n),n.deps[n._depsLength++]=t):n._depsLength++}}const Ta=[];function Th(n,t,e){el();for(const i of n.keys()){let r;i._dirtyLevel<t&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Ta.push(i.scheduler)))}nl()}const bh=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},ba=new WeakMap,Mi=Symbol(""),Aa=Symbol("");function Ue(n,t,e){if(qn&&Si){let i=ba.get(n);i||ba.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=bh(()=>i.delete(e))),Eh(Si,r)}}function Rn(n,t,e,i,r,s){const o=ba.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Dt(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Qr(u)&&u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Dt(n)?Za(e)&&a.push(o.get("length")):(a.push(o.get(Mi)),Ar(n)&&a.push(o.get(Aa)));break;case"delete":Dt(n)||(a.push(o.get(Mi)),Ar(n)&&a.push(o.get(Aa)));break;case"set":Ar(n)&&a.push(o.get(Mi));break}el();for(const l of a)l&&Th(l,4);nl()}const Gd=$a("__proto__,__v_isRef,__isVue"),Ah=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qr)),zl=Wd();function Wd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=$t(this);for(let s=0,o=this.length;s<o;s++)Ue(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map($t)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){ti(),el();const i=$t(this)[t].apply(this,e);return nl(),ei(),i}}),n}function Xd(n){Qr(n)||(n=String(n));const t=$t(this);return Ue(t,"has",n),t.hasOwnProperty(n)}class wh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?rp:Lh:s?Ph:Ch).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Dt(t);if(!r){if(o&&qt(zl,e))return Reflect.get(zl,e,i);if(e==="hasOwnProperty")return Xd}const a=Reflect.get(t,e,i);return(Qr(e)?Ah.has(e):Gd(e))||(r||Ue(t,"get",e),s)?a:Ne(a)?o&&Za(e)?a:a.value:ae(a)?r?Dh(a):ho(a):a}}class Rh extends wh{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=Hr(s);if(!js(i)&&!Hr(i)&&(s=$t(s),i=$t(i)),!Dt(t)&&Ne(s)&&!Ne(i))return l?!1:(s.value=i,!0)}const o=Dt(t)&&Za(e)?Number(e)<t.length:qt(t,e),a=Reflect.set(t,e,i,r);return t===$t(r)&&(o?Zn(i,s)&&Rn(t,"set",e,i):Rn(t,"add",e,i)),a}deleteProperty(t,e){const i=qt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Rn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Qr(e)||!Ah.has(e))&&Ue(t,"has",e),i}ownKeys(t){return Ue(t,"iterate",Dt(t)?"length":Mi),Reflect.ownKeys(t)}}class qd extends wh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Yd=new Rh,$d=new qd,jd=new Rh(!0),il=n=>n,uo=n=>Reflect.getPrototypeOf(n);function as(n,t,e=!1,i=!1){n=n.__v_raw;const r=$t(n),s=$t(t);e||(Zn(t,s)&&Ue(r,"get",t),Ue(r,"get",s));const{has:o}=uo(r),a=i?il:e?ol:Vr;if(o.call(r,t))return a(n.get(t));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(t)}function ls(n,t=!1){const e=this.__v_raw,i=$t(e),r=$t(n);return t||(Zn(n,r)&&Ue(i,"has",n),Ue(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function cs(n,t=!1){return n=n.__v_raw,!t&&Ue($t(n),"iterate",Mi),Reflect.get(n,"size",n)}function Hl(n){n=$t(n);const t=$t(this);return uo(t).has.call(t,n)||(t.add(n),Rn(t,"add",n,n)),this}function Vl(n,t){t=$t(t);const e=$t(this),{has:i,get:r}=uo(e);let s=i.call(e,n);s||(n=$t(n),s=i.call(e,n));const o=r.call(e,n);return e.set(n,t),s?Zn(t,o)&&Rn(e,"set",n,t):Rn(e,"add",n,t),this}function kl(n){const t=$t(this),{has:e,get:i}=uo(t);let r=e.call(t,n);r||(n=$t(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&Rn(t,"delete",n,void 0),s}function Gl(){const n=$t(this),t=n.size!==0,e=n.clear();return t&&Rn(n,"clear",void 0,void 0),e}function us(n,t){return function(i,r){const s=this,o=s.__v_raw,a=$t(o),l=t?il:n?ol:Vr;return!n&&Ue(a,"iterate",Mi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function hs(n,t,e){return function(...i){const r=this.__v_raw,s=$t(r),o=Ar(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?il:t?ol:Vr;return!t&&Ue(s,"iterate",l?Aa:Mi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function In(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Kd(){const n={get(s){return as(this,s)},get size(){return cs(this)},has:ls,add:Hl,set:Vl,delete:kl,clear:Gl,forEach:us(!1,!1)},t={get(s){return as(this,s,!1,!0)},get size(){return cs(this)},has:ls,add:Hl,set:Vl,delete:kl,clear:Gl,forEach:us(!1,!0)},e={get(s){return as(this,s,!0)},get size(){return cs(this,!0)},has(s){return ls.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:us(!0,!1)},i={get(s){return as(this,s,!0,!0)},get size(){return cs(this,!0)},has(s){return ls.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:us(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hs(s,!1,!1),e[s]=hs(s,!0,!1),t[s]=hs(s,!1,!0),i[s]=hs(s,!0,!0)}),[n,e,t,i]}const[Zd,Jd,Qd,tp]=Kd();function rl(n,t){const e=t?n?tp:Qd:n?Jd:Zd;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(qt(e,r)&&r in i?e:i,r,s)}const ep={get:rl(!1,!1)},np={get:rl(!1,!0)},ip={get:rl(!0,!1)},Ch=new WeakMap,Ph=new WeakMap,Lh=new WeakMap,rp=new WeakMap;function sp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function op(n){return n.__v_skip||!Object.isExtensible(n)?0:sp(Rd(n))}function ho(n){return Hr(n)?n:sl(n,!1,Yd,ep,Ch)}function Ih(n){return sl(n,!1,jd,np,Ph)}function Dh(n){return sl(n,!0,$d,ip,Lh)}function sl(n,t,e,i,r){if(!ae(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=op(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function Rr(n){return Hr(n)?Rr(n.__v_raw):!!(n&&n.__v_isReactive)}function Hr(n){return!!(n&&n.__v_isReadonly)}function js(n){return!!(n&&n.__v_isShallow)}function Uh(n){return n?!!n.__v_raw:!1}function $t(n){const t=n&&n.__v_raw;return t?$t(t):n}function Nh(n){return Object.isExtensible(n)&&_h(n,"__v_skip",!0),n}const Vr=n=>ae(n)?ho(n):n,ol=n=>ae(n)?Dh(n):n;class Oh{constructor(t,e,i,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new tl(()=>t(this._value),()=>Hs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=$t(this);return(!t._cacheable||t.effect.dirty)&&Zn(t._value,t._value=t.effect.run())&&Hs(t,4),Fh(t),t.effect._dirtyLevel>=2&&Hs(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ap(n,t,e=!1){let i,r;const s=Ht(n);return s?(i=n,r=ke):(i=n.get,r=n.set),new Oh(i,r,s||!r,e)}function Fh(n){var t;qn&&Si&&(n=$t(n),Eh(Si,(t=n.dep)!=null?t:n.dep=bh(()=>n.dep=void 0,n instanceof Oh?n:void 0)))}function Hs(n,t=4,e){n=$t(n);const i=n.dep;i&&Th(i,t)}function Ne(n){return!!(n&&n.__v_isRef===!0)}function Bh(n){return zh(n,!1)}function lp(n){return zh(n,!0)}function zh(n,t){return Ne(n)?n:new cp(n,t)}class cp{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:$t(t),this._value=e?t:Vr(t)}get value(){return Fh(this),this._value}set value(t){const e=this.__v_isShallow||js(t)||Hr(t);t=e?t:$t(t),Zn(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Vr(t),Hs(this,4))}}function Ei(n){return Ne(n)?n.value:n}const up={get:(n,t,e)=>Ei(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Ne(r)&&!Ne(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Hh(n){return Rr(n)?n:new Proxy(n,up)}/**
* @vue/runtime-core v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yn(n,t,e,i){try{return i?n(...i):n()}catch(r){fo(r,t,e)}}function Qe(n,t,e,i){if(Ht(n)){const r=Yn(n,t,e,i);return r&&mh(r)&&r.catch(s=>{fo(s,t,e)}),r}if(Dt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Qe(n[s],t,e,i));return r}}function fo(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){ti(),Yn(l,null,10,[n,o,a]),ei();return}}hp(n,e,r,i)}function hp(n,t,e,i=!0){console.error(n)}let kr=!1,wa=!1;const be=[];let un=0;const Ji=[];let Hn=null,gi=0;const Vh=Promise.resolve();let al=null;function kh(n){const t=al||Vh;return n?t.then(this?n.bind(this):n):t}function fp(n){let t=un+1,e=be.length;for(;t<e;){const i=t+e>>>1,r=be[i],s=Gr(r);s<n||s===n&&r.pre?t=i+1:e=i}return t}function ll(n){(!be.length||!be.includes(n,kr&&n.allowRecurse?un+1:un))&&(n.id==null?be.push(n):be.splice(fp(n.id),0,n),Gh())}function Gh(){!kr&&!wa&&(wa=!0,al=Vh.then(Xh))}function dp(n){const t=be.indexOf(n);t>un&&be.splice(t,1)}function pp(n){Dt(n)?Ji.push(...n):(!Hn||!Hn.includes(n,n.allowRecurse?gi+1:gi))&&Ji.push(n),Gh()}function Wl(n,t,e=kr?un+1:0){for(;e<be.length;e++){const i=be[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;be.splice(e,1),e--,i()}}}function Wh(n){if(Ji.length){const t=[...new Set(Ji)].sort((e,i)=>Gr(e)-Gr(i));if(Ji.length=0,Hn){Hn.push(...t);return}for(Hn=t,gi=0;gi<Hn.length;gi++)Hn[gi]();Hn=null,gi=0}}const Gr=n=>n.id==null?1/0:n.id,mp=(n,t)=>{const e=Gr(n)-Gr(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Xh(n){wa=!1,kr=!0,be.sort(mp);try{for(un=0;un<be.length;un++){const t=be[un];t&&t.active!==!1&&Yn(t,null,14)}}finally{un=0,be.length=0,Wh(),kr=!1,al=null,(be.length||Ji.length)&&Xh()}}function gp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ie;let r=e;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||ie;f&&(r=e.map(m=>ge(m)?m.trim():m)),h&&(r=e.map(Id))}let a,l=i[a=Po(t)]||i[a=Po(rr(t))];!l&&s&&(l=i[a=Po(fr(t))]),l&&Qe(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qe(c,n,6,r)}}function qh(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ht(n)){const l=c=>{const u=qh(c,t,!0);u&&(a=!0,ye(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ae(n)&&i.set(n,null),null):(Dt(s)?s.forEach(l=>o[l]=null):ye(o,s),ae(n)&&i.set(n,o),o)}function po(n,t){return!n||!ao(t)?!1:(t=t.slice(2).replace(/Once$/,""),qt(n,t[0].toLowerCase()+t.slice(1))||qt(n,fr(t))||qt(n,t))}let fn=null,mo=null;function Ks(n){const t=fn;return fn=n,mo=n&&n.type.__scopeId||null,t}function _p(n){mo=n}function vp(){mo=null}function xp(n,t=fn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&tc(-1);const s=Ks(t);let o;try{o=n(...r)}finally{Ks(s),i._d&&tc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Io(n){const{type:t,vnode:e,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:x,inheritAttrs:v}=n;let d,p;const w=Ks(n);try{if(e.shapeFlag&4){const A=r||i,H=A;d=ln(u.call(H,A,h,s,m,f,x)),p=l}else{const A=t;d=ln(A.length>1?A(s,{attrs:l,slots:a,emit:c}):A(s,null)),p=t.props?l:yp(l)}}catch(A){Lr.length=0,fo(A,n,1),d=Le(Wr)}let _=d;if(p&&v!==!1){const A=Object.keys(p),{shapeFlag:H}=_;A.length&&H&7&&(o&&A.some(ja)&&(p=Sp(p,o)),_=sr(_,p))}return e.dirs&&(_=sr(_),_.dirs=_.dirs?_.dirs.concat(e.dirs):e.dirs),e.transition&&(_.transition=e.transition),d=_,Ks(w),d}const yp=n=>{let t;for(const e in n)(e==="class"||e==="style"||ao(e))&&((t||(t={}))[e]=n[e]);return t},Sp=(n,t)=>{const e={};for(const i in n)(!ja(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Mp(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Xl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!po(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xl(i,o,c):!0:!!o;return!1}function Xl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!po(e,s))return!0}return!1}function Ep({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Tp=Symbol.for("v-ndc"),bp=n=>n.__isSuspense;function Ap(n,t){t&&t.pendingBranch?Dt(n)?t.effects.push(...n):t.effects.push(n):pp(n)}const wp=Symbol.for("v-scx"),Rp=()=>Cn(wp),fs={};function Vs(n,t,e){return Yh(n,t,e)}function Yh(n,t,{immediate:e,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=ie){if(t&&s){const L=t;t=(...U)=>{L(...U),H()}}const l=Ce,c=L=>i===!0?L:Yi(L,i===!1?1:void 0);let u,h=!1,f=!1;if(Ne(n)?(u=()=>n.value,h=js(n)):Rr(n)?(u=()=>c(n),h=!0):Dt(n)?(f=!0,h=n.some(L=>Rr(L)||js(L)),u=()=>n.map(L=>{if(Ne(L))return L.value;if(Rr(L))return c(L);if(Ht(L))return Yn(L,l,2)})):Ht(n)?t?u=()=>Yn(n,l,2):u=()=>(m&&m(),Qe(n,l,3,[x])):u=ke,t&&i){const L=u;u=()=>Yi(L())}let m,x=L=>{m=_.onStop=()=>{Yn(L,l,4),m=_.onStop=void 0}},v;if(xo)if(x=ke,t?e&&Qe(t,l,3,[u(),f?[]:void 0,x]):u(),r==="sync"){const L=Rp();v=L.__watcherHandles||(L.__watcherHandles=[])}else return ke;let d=f?new Array(n.length).fill(fs):fs;const p=()=>{if(!(!_.active||!_.dirty))if(t){const L=_.run();(i||h||(f?L.some((U,Y)=>Zn(U,d[Y])):Zn(L,d)))&&(m&&m(),Qe(t,l,3,[L,d===fs?void 0:f&&d[0]===fs?[]:d,x]),d=L)}else _.run()};p.allowRecurse=!!t;let w;r==="sync"?w=p:r==="post"?w=()=>Pe(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),w=()=>ll(p));const _=new tl(u,ke,w),A=Vd(),H=()=>{_.stop(),A&&Ka(A.effects,_)};return t?e?p():d=_.run():r==="post"?Pe(_.run.bind(_),l&&l.suspense):_.run(),v&&v.push(H),H}function Cp(n,t,e){const i=this.proxy,r=ge(n)?n.includes(".")?$h(i,n):()=>i[n]:n.bind(i,i);let s;Ht(t)?s=t:(s=t.handler,e=t);const o=es(this),a=Yh(r,s.bind(i),e);return o(),a}function $h(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Yi(n,t,e=0,i){if(!ae(n)||n.__v_skip)return n;if(t&&t>0){if(e>=t)return n;e++}if(i=i||new Set,i.has(n))return n;if(i.add(n),Ne(n))Yi(n.value,t,e,i);else if(Dt(n))for(let r=0;r<n.length;r++)Yi(n[r],t,e,i);else if(Ad(n)||Ar(n))n.forEach(r=>{Yi(r,t,e,i)});else if(Cd(n))for(const r in n)Yi(n[r],t,e,i);return n}function si(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ti(),Qe(l,e,8,[n.el,a,n,t]),ei())}}/*! #__NO_SIDE_EFFECTS__ */function ts(n,t){return Ht(n)?ye({name:n.name},t,{setup:n}):n}const ks=n=>!!n.type.__asyncLoader,jh=n=>n.type.__isKeepAlive;function Pp(n,t){Kh(n,"a",t)}function Lp(n,t){Kh(n,"da",t)}function Kh(n,t,e=Ce){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(go(t,i,e),e){let r=e.parent;for(;r&&r.parent;)jh(r.parent.vnode)&&Ip(i,t,e,r),r=r.parent}}function Ip(n,t,e,i){const r=go(t,n,i,!0);Jh(()=>{Ka(i[t],r)},e)}function go(n,t,e=Ce,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;ti();const a=es(e),l=Qe(t,e,n,o);return a(),ei(),l});return i?r.unshift(s):r.push(s),s}}const Pn=n=>(t,e=Ce)=>(!xo||n==="sp")&&go(n,(...i)=>t(...i),e),Dp=Pn("bm"),Zh=Pn("m"),Up=Pn("bu"),Np=Pn("u"),Op=Pn("bum"),Jh=Pn("um"),Fp=Pn("sp"),Bp=Pn("rtg"),zp=Pn("rtc");function Hp(n,t=Ce){go("ec",n,t)}function $E(n,t,e,i){let r;const s=e;if(Dt(n)||ge(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=t(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=t(o+1,o,void 0,s)}else if(ae(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>t(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(n[c],c,a,s)}}else r=[];return r}const Ra=n=>n?pf(n)?dl(n)||n.proxy:Ra(n.parent):null,Cr=ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ra(n.parent),$root:n=>Ra(n.root),$emit:n=>n.emit,$options:n=>cl(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,ll(n.update)}),$nextTick:n=>n.n||(n.n=kh.bind(n.proxy)),$watch:n=>Cp.bind(n)}),Do=(n,t)=>n!==ie&&!n.__isScriptSetup&&qt(n,t),Vp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Do(i,t))return o[t]=1,i[t];if(r!==ie&&qt(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&qt(c,t))return o[t]=3,s[t];if(e!==ie&&qt(e,t))return o[t]=4,e[t];Ca&&(o[t]=0)}}const u=Cr[t];let h,f;if(u)return t==="$attrs"&&Ue(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==ie&&qt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,qt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Do(r,t)?(r[t]=e,!0):i!==ie&&qt(i,t)?(i[t]=e,!0):qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==ie&&qt(n,o)||Do(t,o)||(a=s[0])&&qt(a,o)||qt(i,o)||qt(Cr,o)||qt(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function ql(n){return Dt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ca=!0;function kp(n){const t=cl(n),e=n.proxy,i=n.ctx;Ca=!1,t.beforeCreate&&Yl(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:x,activated:v,deactivated:d,beforeDestroy:p,beforeUnmount:w,destroyed:_,unmounted:A,render:H,renderTracked:L,renderTriggered:U,errorCaptured:Y,serverPrefetch:R,expose:T,inheritAttrs:Z,components:K,directives:W,filters:tt}=t;if(c&&Gp(c,i,null),o)for(const nt in o){const B=o[nt];Ht(B)&&(i[nt]=B.bind(e))}if(r){const nt=r.call(e,e);ae(nt)&&(n.data=ho(nt))}if(Ca=!0,s)for(const nt in s){const B=s[nt],ft=Ht(B)?B.bind(e,e):Ht(B.get)?B.get.bind(e,e):ke,ht=!Ht(B)&&Ht(B.set)?B.set.bind(e):ke,vt=je({get:ft,set:ht});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>vt.value,set:bt=>vt.value=bt})}if(a)for(const nt in a)Qh(a[nt],i,e,nt);if(l){const nt=Ht(l)?l.call(e):l;Reflect.ownKeys(nt).forEach(B=>{Gs(B,nt[B])})}u&&Yl(u,n,"c");function st(nt,B){Dt(B)?B.forEach(ft=>nt(ft.bind(e))):B&&nt(B.bind(e))}if(st(Dp,h),st(Zh,f),st(Up,m),st(Np,x),st(Pp,v),st(Lp,d),st(Hp,Y),st(zp,L),st(Bp,U),st(Op,w),st(Jh,A),st(Fp,R),Dt(T))if(T.length){const nt=n.exposed||(n.exposed={});T.forEach(B=>{Object.defineProperty(nt,B,{get:()=>e[B],set:ft=>e[B]=ft})})}else n.exposed||(n.exposed={});H&&n.render===ke&&(n.render=H),Z!=null&&(n.inheritAttrs=Z),K&&(n.components=K),W&&(n.directives=W)}function Gp(n,t,e=ke){Dt(n)&&(n=Pa(n));for(const i in n){const r=n[i];let s;ae(r)?"default"in r?s=Cn(r.from||i,r.default,!0):s=Cn(r.from||i):s=Cn(r),Ne(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Yl(n,t,e){Qe(Dt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Qh(n,t,e,i){const r=i.includes(".")?$h(e,i):()=>e[i];if(ge(n)){const s=t[n];Ht(s)&&Vs(r,s)}else if(Ht(n))Vs(r,n.bind(e));else if(ae(n))if(Dt(n))n.forEach(s=>Qh(s,t,e,i));else{const s=Ht(n.handler)?n.handler.bind(e):t[n.handler];Ht(s)&&Vs(r,s,n)}}function cl(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Zs(l,c,o,!0)),Zs(l,t,o)),ae(t)&&s.set(t,l),l}function Zs(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Zs(n,s,e,!0),r&&r.forEach(o=>Zs(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Wp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Wp={data:$l,props:jl,emits:jl,methods:Tr,computed:Tr,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Tr,directives:Tr,watch:qp,provide:$l,inject:Xp};function $l(n,t){return t?n?function(){return ye(Ht(n)?n.call(this,this):n,Ht(t)?t.call(this,this):t)}:t:n}function Xp(n,t){return Tr(Pa(n),Pa(t))}function Pa(n){if(Dt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ae(n,t){return n?[...new Set([].concat(n,t))]:t}function Tr(n,t){return n?ye(Object.create(null),n,t):t}function jl(n,t){return n?Dt(n)&&Dt(t)?[...new Set([...n,...t])]:ye(Object.create(null),ql(n),ql(t??{})):t}function qp(n,t){if(!n)return t;if(!t)return n;const e=ye(Object.create(null),n);for(const i in t)e[i]=Ae(n[i],t[i]);return e}function tf(){return{app:null,config:{isNativeTag:Td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yp=0;function $p(n,t){return function(i,r=null){Ht(i)||(i=ye({},i)),r!=null&&!ae(r)&&(r=null);const s=tf(),o=new WeakSet;let a=!1;const l=s.app={_uid:Yp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:xm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ht(c.install)?(o.add(c),c.install(l,...u)):Ht(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Le(i,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,dl(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Pr;Pr=l;try{return c()}finally{Pr=u}}};return l}}let Pr=null;function Gs(n,t){if(Ce){let e=Ce.provides;const i=Ce.parent&&Ce.parent.provides;i===e&&(e=Ce.provides=Object.create(i)),e[n]=t}}function Cn(n,t,e=!1){const i=Ce||fn;if(i||Pr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Pr._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Ht(t)?t.call(i&&i.proxy):t}}const ef=Object.create(null),La=()=>Object.create(ef),nf=n=>Object.getPrototypeOf(n)===ef;function jp(n,t,e,i=!1){const r={},s=La();n.propsDefaults=Object.create(null),rf(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Ih(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Kp(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=$t(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(po(n.emitsOptions,f))continue;const m=t[f];if(l)if(qt(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const x=rr(f);r[x]=Ia(l,a,x,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{rf(n,t,r,s)&&(c=!0);let u;for(const h in a)(!t||!qt(t,h)&&((u=fr(h))===h||!qt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(r[h]=Ia(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!qt(t,h))&&(delete s[h],c=!0)}c&&Rn(n.attrs,"set","")}function rf(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(wr(l))continue;const c=t[l];let u;r&&qt(r,u=rr(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:po(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=$t(e),c=a||ie;for(let u=0;u<s.length;u++){const h=s[u];e[h]=Ia(r,l,h,c[h],n,!qt(c,h))}}return o}function Ia(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=qt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ht(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=es(r);i=c[e]=l.call(null,t),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===fr(e))&&(i=!0))}return i}function sf(n,t,e=!1){const i=t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ht(n)){const u=h=>{l=!0;const[f,m]=sf(h,t,!0);ye(o,f),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ae(n)&&i.set(n,Zi),Zi;if(Dt(s))for(let u=0;u<s.length;u++){const h=rr(s[u]);Kl(h)&&(o[h]=ie)}else if(s)for(const u in s){const h=rr(u);if(Kl(h)){const f=s[u],m=o[h]=Dt(f)||Ht(f)?{type:f}:ye({},f);if(m){const x=Ql(Boolean,m.type),v=Ql(String,m.type);m[0]=x>-1,m[1]=v<0||x<v,(x>-1||qt(m,"default"))&&a.push(h)}}}const c=[o,a];return ae(n)&&i.set(n,c),c}function Kl(n){return n[0]!=="$"&&!wr(n)}function Zl(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Jl(n,t){return Zl(n)===Zl(t)}function Ql(n,t){return Dt(t)?t.findIndex(e=>Jl(e,n)):Ht(t)&&Jl(t,n)?0:-1}const of=n=>n[0]==="_"||n==="$stable",ul=n=>Dt(n)?n.map(ln):[ln(n)],Zp=(n,t,e)=>{if(t._n)return t;const i=xp((...r)=>ul(t(...r)),e);return i._c=!1,i},af=(n,t,e)=>{const i=n._ctx;for(const r in n){if(of(r))continue;const s=n[r];if(Ht(s))t[r]=Zp(r,s,i);else if(s!=null){const o=ul(s);t[r]=()=>o}}},lf=(n,t)=>{const e=ul(t);n.slots.default=()=>e},Jp=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=$t(t),_h(n.slots,"_",e)):af(t,n.slots=La())}else n.slots=La(),t&&lf(n,t)},Qp=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:(ye(r,t),!e&&a===1&&delete r._):(s=!t.$stable,af(t,r)),o=t}else t&&(lf(n,t),o={default:1});if(s)for(const a in r)!of(a)&&o[a]==null&&delete r[a]};function Da(n,t,e,i,r=!1){if(Dt(n)){n.forEach((f,m)=>Da(f,t&&(Dt(t)?t[m]:t),e,i,r));return}if(ks(i)&&!r)return;const s=i.shapeFlag&4?dl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ge(c)?(u[c]=null,qt(h,c)&&(h[c]=null)):Ne(c)&&(c.value=null)),Ht(l))Yn(l,a,12,[o,u]);else{const f=ge(l),m=Ne(l);if(f||m){const x=()=>{if(n.f){const v=f?qt(h,l)?h[l]:u[l]:l.value;r?Dt(v)&&Ka(v,s):Dt(v)?v.includes(s)||v.push(s):f?(u[l]=[s],qt(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,qt(h,l)&&(h[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(x.id=-1,Pe(x,e)):x()}}}const Pe=Ap;function tm(n){return em(n)}function em(n,t){const e=vh();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=ke,insertStaticContent:x}=n,v=(E,b,I,q=null,M=null,g=null,S=void 0,F=null,G=!!b.dynamicChildren)=>{if(E===b)return;E&&!vr(E,b)&&(q=y(E),bt(E,M,g,!0),E=null),b.patchFlag===-2&&(G=!1,b.dynamicChildren=null);const{type:X,ref:at,shapeFlag:Q}=b;switch(X){case _o:d(E,b,I,q);break;case Wr:p(E,b,I,q);break;case Ws:E==null&&w(b,I,q,S);break;case An:K(E,b,I,q,M,g,S,F,G);break;default:Q&1?H(E,b,I,q,M,g,S,F,G):Q&6?W(E,b,I,q,M,g,S,F,G):(Q&64||Q&128)&&X.process(E,b,I,q,M,g,S,F,G,V)}at!=null&&M&&Da(at,E&&E.ref,g,b||E,!b)},d=(E,b,I,q)=>{if(E==null)i(b.el=a(b.children),I,q);else{const M=b.el=E.el;b.children!==E.children&&c(M,b.children)}},p=(E,b,I,q)=>{E==null?i(b.el=l(b.children||""),I,q):b.el=E.el},w=(E,b,I,q)=>{[E.el,E.anchor]=x(E.children,b,I,q,E.el,E.anchor)},_=({el:E,anchor:b},I,q)=>{let M;for(;E&&E!==b;)M=f(E),i(E,I,q),E=M;i(b,I,q)},A=({el:E,anchor:b})=>{let I;for(;E&&E!==b;)I=f(E),r(E),E=I;r(b)},H=(E,b,I,q,M,g,S,F,G)=>{b.type==="svg"?S="svg":b.type==="math"&&(S="mathml"),E==null?L(b,I,q,M,g,S,F,G):R(E,b,M,g,S,F,G)},L=(E,b,I,q,M,g,S,F)=>{let G,X;const{props:at,shapeFlag:Q,transition:ct,dirs:dt}=E;if(G=E.el=o(E.type,g,at&&at.is,at),Q&8?u(G,E.children):Q&16&&Y(E.children,G,null,q,M,Uo(E,g),S,F),dt&&si(E,null,q,"created"),U(G,E,E.scopeId,S,q),at){for(const pt in at)pt!=="value"&&!wr(pt)&&s(G,pt,null,at[pt],g,E.children,q,M,C);"value"in at&&s(G,"value",null,at.value,g),(X=at.onVnodeBeforeMount)&&sn(X,q,E)}dt&&si(E,null,q,"beforeMount");const ut=nm(M,ct);ut&&ct.beforeEnter(G),i(G,b,I),((X=at&&at.onVnodeMounted)||ut||dt)&&Pe(()=>{X&&sn(X,q,E),ut&&ct.enter(G),dt&&si(E,null,q,"mounted")},M)},U=(E,b,I,q,M)=>{if(I&&m(E,I),q)for(let g=0;g<q.length;g++)m(E,q[g]);if(M){let g=M.subTree;if(b===g){const S=M.vnode;U(E,S,S.scopeId,S.slotScopeIds,M.parent)}}},Y=(E,b,I,q,M,g,S,F,G=0)=>{for(let X=G;X<E.length;X++){const at=E[X]=F?Vn(E[X]):ln(E[X]);v(null,at,b,I,q,M,g,S,F)}},R=(E,b,I,q,M,g,S)=>{const F=b.el=E.el;let{patchFlag:G,dynamicChildren:X,dirs:at}=b;G|=E.patchFlag&16;const Q=E.props||ie,ct=b.props||ie;let dt;if(I&&oi(I,!1),(dt=ct.onVnodeBeforeUpdate)&&sn(dt,I,b,E),at&&si(b,E,I,"beforeUpdate"),I&&oi(I,!0),X?T(E.dynamicChildren,X,F,I,q,Uo(b,M),g):S||B(E,b,F,null,I,q,Uo(b,M),g,!1),G>0){if(G&16)Z(F,b,Q,ct,I,q,M);else if(G&2&&Q.class!==ct.class&&s(F,"class",null,ct.class,M),G&4&&s(F,"style",Q.style,ct.style,M),G&8){const ut=b.dynamicProps;for(let pt=0;pt<ut.length;pt++){const St=ut[pt],gt=Q[St],Mt=ct[St];(Mt!==gt||St==="value")&&s(F,St,gt,Mt,M,E.children,I,q,C)}}G&1&&E.children!==b.children&&u(F,b.children)}else!S&&X==null&&Z(F,b,Q,ct,I,q,M);((dt=ct.onVnodeUpdated)||at)&&Pe(()=>{dt&&sn(dt,I,b,E),at&&si(b,E,I,"updated")},q)},T=(E,b,I,q,M,g,S)=>{for(let F=0;F<b.length;F++){const G=E[F],X=b[F],at=G.el&&(G.type===An||!vr(G,X)||G.shapeFlag&70)?h(G.el):I;v(G,X,at,null,q,M,g,S,!0)}},Z=(E,b,I,q,M,g,S)=>{if(I!==q){if(I!==ie)for(const F in I)!wr(F)&&!(F in q)&&s(E,F,I[F],null,S,b.children,M,g,C);for(const F in q){if(wr(F))continue;const G=q[F],X=I[F];G!==X&&F!=="value"&&s(E,F,X,G,S,b.children,M,g,C)}"value"in q&&s(E,"value",I.value,q.value,S)}},K=(E,b,I,q,M,g,S,F,G)=>{const X=b.el=E?E.el:a(""),at=b.anchor=E?E.anchor:a("");let{patchFlag:Q,dynamicChildren:ct,slotScopeIds:dt}=b;dt&&(F=F?F.concat(dt):dt),E==null?(i(X,I,q),i(at,I,q),Y(b.children||[],I,at,M,g,S,F,G)):Q>0&&Q&64&&ct&&E.dynamicChildren?(T(E.dynamicChildren,ct,I,M,g,S,F),(b.key!=null||M&&b===M.subTree)&&cf(E,b,!0)):B(E,b,I,at,M,g,S,F,G)},W=(E,b,I,q,M,g,S,F,G)=>{b.slotScopeIds=F,E==null?b.shapeFlag&512?M.ctx.activate(b,I,q,S,G):tt(b,I,q,M,g,S,G):ot(E,b,G)},tt=(E,b,I,q,M,g,S)=>{const F=E.component=dm(E,q,M);if(jh(E)&&(F.ctx.renderer=V),pm(F),F.asyncDep){if(M&&M.registerDep(F,st),!E.el){const G=F.subTree=Le(Wr);p(null,G,b,I)}}else st(F,E,b,I,M,g,S)},ot=(E,b,I)=>{const q=b.component=E.component;if(Mp(E,b,I))if(q.asyncDep&&!q.asyncResolved){nt(q,b,I);return}else q.next=b,dp(q.update),q.effect.dirty=!0,q.update();else b.el=E.el,q.vnode=b},st=(E,b,I,q,M,g,S)=>{const F=()=>{if(E.isMounted){let{next:at,bu:Q,u:ct,parent:dt,vnode:ut}=E;{const It=uf(E);if(It){at&&(at.el=ut.el,nt(E,at,S)),It.asyncDep.then(()=>{E.isUnmounted||F()});return}}let pt=at,St;oi(E,!1),at?(at.el=ut.el,nt(E,at,S)):at=ut,Q&&Lo(Q),(St=at.props&&at.props.onVnodeBeforeUpdate)&&sn(St,dt,at,ut),oi(E,!0);const gt=Io(E),Mt=E.subTree;E.subTree=gt,v(Mt,gt,h(Mt.el),y(Mt),E,M,g),at.el=gt.el,pt===null&&Ep(E,gt.el),ct&&Pe(ct,M),(St=at.props&&at.props.onVnodeUpdated)&&Pe(()=>sn(St,dt,at,ut),M)}else{let at;const{el:Q,props:ct}=b,{bm:dt,m:ut,parent:pt}=E,St=ks(b);if(oi(E,!1),dt&&Lo(dt),!St&&(at=ct&&ct.onVnodeBeforeMount)&&sn(at,pt,b),oi(E,!0),Q&&lt){const gt=()=>{E.subTree=Io(E),lt(Q,E.subTree,E,M,null)};St?b.type.__asyncLoader().then(()=>!E.isUnmounted&&gt()):gt()}else{const gt=E.subTree=Io(E);v(null,gt,I,q,E,M,g),b.el=gt.el}if(ut&&Pe(ut,M),!St&&(at=ct&&ct.onVnodeMounted)){const gt=b;Pe(()=>sn(at,pt,gt),M)}(b.shapeFlag&256||pt&&ks(pt.vnode)&&pt.vnode.shapeFlag&256)&&E.a&&Pe(E.a,M),E.isMounted=!0,b=I=q=null}},G=E.effect=new tl(F,ke,()=>ll(X),E.scope),X=E.update=()=>{G.dirty&&G.run()};X.id=E.uid,oi(E,!0),X()},nt=(E,b,I)=>{b.component=E;const q=E.vnode.props;E.vnode=b,E.next=null,Kp(E,b.props,q,I),Qp(E,b.children,I),ti(),Wl(E),ei()},B=(E,b,I,q,M,g,S,F,G=!1)=>{const X=E&&E.children,at=E?E.shapeFlag:0,Q=b.children,{patchFlag:ct,shapeFlag:dt}=b;if(ct>0){if(ct&128){ht(X,Q,I,q,M,g,S,F,G);return}else if(ct&256){ft(X,Q,I,q,M,g,S,F,G);return}}dt&8?(at&16&&C(X,M,g),Q!==X&&u(I,Q)):at&16?dt&16?ht(X,Q,I,q,M,g,S,F,G):C(X,M,g,!0):(at&8&&u(I,""),dt&16&&Y(Q,I,q,M,g,S,F,G))},ft=(E,b,I,q,M,g,S,F,G)=>{E=E||Zi,b=b||Zi;const X=E.length,at=b.length,Q=Math.min(X,at);let ct;for(ct=0;ct<Q;ct++){const dt=b[ct]=G?Vn(b[ct]):ln(b[ct]);v(E[ct],dt,I,null,M,g,S,F,G)}X>at?C(E,M,g,!0,!1,Q):Y(b,I,q,M,g,S,F,G,Q)},ht=(E,b,I,q,M,g,S,F,G)=>{let X=0;const at=b.length;let Q=E.length-1,ct=at-1;for(;X<=Q&&X<=ct;){const dt=E[X],ut=b[X]=G?Vn(b[X]):ln(b[X]);if(vr(dt,ut))v(dt,ut,I,null,M,g,S,F,G);else break;X++}for(;X<=Q&&X<=ct;){const dt=E[Q],ut=b[ct]=G?Vn(b[ct]):ln(b[ct]);if(vr(dt,ut))v(dt,ut,I,null,M,g,S,F,G);else break;Q--,ct--}if(X>Q){if(X<=ct){const dt=ct+1,ut=dt<at?b[dt].el:q;for(;X<=ct;)v(null,b[X]=G?Vn(b[X]):ln(b[X]),I,ut,M,g,S,F,G),X++}}else if(X>ct)for(;X<=Q;)bt(E[X],M,g,!0),X++;else{const dt=X,ut=X,pt=new Map;for(X=ut;X<=ct;X++){const kt=b[X]=G?Vn(b[X]):ln(b[X]);kt.key!=null&&pt.set(kt.key,X)}let St,gt=0;const Mt=ct-ut+1;let It=!1,Vt=0;const Wt=new Array(Mt);for(X=0;X<Mt;X++)Wt[X]=0;for(X=dt;X<=Q;X++){const kt=E[X];if(gt>=Mt){bt(kt,M,g,!0);continue}let Tt;if(kt.key!=null)Tt=pt.get(kt.key);else for(St=ut;St<=ct;St++)if(Wt[St-ut]===0&&vr(kt,b[St])){Tt=St;break}Tt===void 0?bt(kt,M,g,!0):(Wt[Tt-ut]=X+1,Tt>=Vt?Vt=Tt:It=!0,v(kt,b[Tt],I,null,M,g,S,F,G),gt++)}const Xt=It?im(Wt):Zi;for(St=Xt.length-1,X=Mt-1;X>=0;X--){const kt=ut+X,Tt=b[kt],z=kt+1<at?b[kt+1].el:q;Wt[X]===0?v(null,Tt,I,z,M,g,S,F,G):It&&(St<0||X!==Xt[St]?vt(Tt,I,z,2):St--)}}},vt=(E,b,I,q,M=null)=>{const{el:g,type:S,transition:F,children:G,shapeFlag:X}=E;if(X&6){vt(E.component.subTree,b,I,q);return}if(X&128){E.suspense.move(b,I,q);return}if(X&64){S.move(E,b,I,V);return}if(S===An){i(g,b,I);for(let Q=0;Q<G.length;Q++)vt(G[Q],b,I,q);i(E.anchor,b,I);return}if(S===Ws){_(E,b,I);return}if(q!==2&&X&1&&F)if(q===0)F.beforeEnter(g),i(g,b,I),Pe(()=>F.enter(g),M);else{const{leave:Q,delayLeave:ct,afterLeave:dt}=F,ut=()=>i(g,b,I),pt=()=>{Q(g,()=>{ut(),dt&&dt()})};ct?ct(g,ut,pt):pt()}else i(g,b,I)},bt=(E,b,I,q=!1,M=!1)=>{const{type:g,props:S,ref:F,children:G,dynamicChildren:X,shapeFlag:at,patchFlag:Q,dirs:ct}=E;if(F!=null&&Da(F,null,I,E,!0),at&256){b.ctx.deactivate(E);return}const dt=at&1&&ct,ut=!ks(E);let pt;if(ut&&(pt=S&&S.onVnodeBeforeUnmount)&&sn(pt,b,E),at&6)D(E.component,I,q);else{if(at&128){E.suspense.unmount(I,q);return}dt&&si(E,null,b,"beforeUnmount"),at&64?E.type.remove(E,b,I,M,V,q):X&&(g!==An||Q>0&&Q&64)?C(X,b,I,!1,!0):(g===An&&Q&384||!M&&at&16)&&C(G,b,I),q&&Gt(E)}(ut&&(pt=S&&S.onVnodeUnmounted)||dt)&&Pe(()=>{pt&&sn(pt,b,E),dt&&si(E,null,b,"unmounted")},I)},Gt=E=>{const{type:b,el:I,anchor:q,transition:M}=E;if(b===An){N(I,q);return}if(b===Ws){A(E);return}const g=()=>{r(I),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:S,delayLeave:F}=M,G=()=>S(I,g);F?F(E.el,g,G):G()}else g()},N=(E,b)=>{let I;for(;E!==b;)I=f(E),r(E),E=I;r(b)},D=(E,b,I)=>{const{bum:q,scope:M,update:g,subTree:S,um:F}=E;q&&Lo(q),M.stop(),g&&(g.active=!1,bt(S,E,b,I)),F&&Pe(F,b),Pe(()=>{E.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},C=(E,b,I,q=!1,M=!1,g=0)=>{for(let S=g;S<E.length;S++)bt(E[S],b,I,q,M)},y=E=>E.shapeFlag&6?y(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el);let k=!1;const $=(E,b,I)=>{E==null?b._vnode&&bt(b._vnode,null,null,!0):v(b._vnode||null,E,b,null,null,null,I),k||(k=!0,Wl(),Wh(),k=!1),b._vnode=E},V={p:v,um:bt,m:vt,r:Gt,mt:tt,mc:Y,pc:B,pbc:T,n:y,o:n};let O,lt;return{render:$,hydrate:O,createApp:$p($,O)}}function Uo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function oi({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function nm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function cf(n,t,e=!1){const i=n.children,r=t.children;if(Dt(i)&&Dt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vn(r[s]),a.el=o.el),e||cf(o,a)),a.type===_o&&(a.el=o.el)}}function im(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function uf(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:uf(t)}const rm=n=>n.__isTeleport,An=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),Wr=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),Lr=[];let Je=null;function hl(n=!1){Lr.push(Je=n?null:[])}function sm(){Lr.pop(),Je=Lr[Lr.length-1]||null}let Xr=1;function tc(n){Xr+=n}function hf(n){return n.dynamicChildren=Xr>0?Je||Zi:null,sm(),Xr>0&&Je&&Je.push(n),n}function ff(n,t,e,i,r,s){return hf(vo(n,t,e,i,r,s,!0))}function om(n,t,e,i,r){return hf(Le(n,t,e,i,r,!0))}function Ua(n){return n?n.__v_isVNode===!0:!1}function vr(n,t){return n.type===t.type&&n.key===t.key}const df=({key:n})=>n??null,Xs=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||Ne(n)||Ht(n)?{i:fn,r:n,k:t,f:!!e}:n:null);function vo(n,t=null,e=null,i=0,r=null,s=n===An?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&df(t),ref:t&&Xs(t),scopeId:mo,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return a?(fl(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),Xr>0&&!o&&Je&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Je.push(l),l}const Le=am;function am(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Tp)&&(n=Wr),Ua(n)){const a=sr(n,t,!0);return e&&fl(a,e),Xr>0&&!s&&Je&&(a.shapeFlag&6?Je[Je.indexOf(n)]=a:Je.push(a)),a.patchFlag|=-2,a}if(vm(n)&&(n=n.__vccOpts),t){t=lm(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=Qa(a)),ae(l)&&(Uh(l)&&!Dt(l)&&(l=ye({},l)),t.style=Ja(l))}const o=ge(n)?1:bp(n)?128:rm(n)?64:ae(n)?4:Ht(n)?2:0;return vo(n,t,e,i,r,o,s,!0)}function lm(n){return n?Uh(n)||nf(n)?ye({},n):n:null}function sr(n,t,e=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=t?um(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&df(a),ref:t&&t.ref?e&&r?Dt(r)?r.concat(Xs(t)):[r,Xs(t)]:Xs(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==An?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&sr(n.ssContent),ssFallback:n.ssFallback&&sr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function cm(n=" ",t=0){return Le(_o,null,n,t)}function jE(n,t){const e=Le(Ws,null,n);return e.staticCount=t,e}function ln(n){return n==null||typeof n=="boolean"?Le(Wr):Dt(n)?Le(An,null,n.slice()):typeof n=="object"?Vn(n):Le(_o,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:sr(n)}function fl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Dt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),fl(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!nf(t)?t._ctx=fn:r===3&&fn&&(fn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ht(t)?(t={default:t,_ctx:fn},e=32):(t=String(t),i&64?(e=16,t=[cm(t)]):e=8);n.children=t,n.shapeFlag|=e}function um(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Qa([t.class,i.class]));else if(r==="style")t.style=Ja([t.style,i.style]);else if(ao(r)){const s=t[r],o=i[r];o&&s!==o&&!(Dt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function sn(n,t,e,i=null){Qe(n,t,7,[e,i])}const hm=tf();let fm=0;function dm(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||hm,s={uid:fm++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(i,r),emitsOptions:qh(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=gp.bind(null,s),n.ce&&n.ce(s),s}let Ce=null,Js,Na;{const n=vh(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Js=t("__VUE_INSTANCE_SETTERS__",e=>Ce=e),Na=t("__VUE_SSR_SETTERS__",e=>xo=e)}const es=n=>{const t=Ce;return Js(n),n.scope.on(),()=>{n.scope.off(),Js(t)}},ec=()=>{Ce&&Ce.scope.off(),Js(null)};function pf(n){return n.vnode.shapeFlag&4}let xo=!1;function pm(n,t=!1){t&&Na(t);const{props:e,children:i}=n.vnode,r=pf(n);jp(n,e,r,t),Jp(n,i);const s=r?mm(n,t):void 0;return t&&Na(!1),s}function mm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vp);const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?_m(n):null,s=es(n);ti();const o=Yn(i,n,0,[n.props,r]);if(ei(),s(),mh(o)){if(o.then(ec,ec),t)return o.then(a=>{nc(n,a,t)}).catch(a=>{fo(a,n,0)});n.asyncDep=o}else nc(n,o,t)}else mf(n,t)}function nc(n,t,e){Ht(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ae(t)&&(n.setupState=Hh(t)),mf(n,e)}let ic;function mf(n,t,e){const i=n.type;if(!n.render){if(!t&&ic&&!i.render){const r=i.template||cl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ye(ye({isCustomElement:s,delimiters:a},o),l);i.render=ic(r,c)}}n.render=i.render||ke}{const r=es(n);ti();try{kp(n)}finally{ei(),r()}}}const gm={get(n,t){return Ue(n,"get",""),n[t]}};function _m(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,gm),slots:n.slots,emit:n.emit,expose:t}}function dl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Hh(Nh(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Cr)return Cr[e](n)},has(t,e){return e in t||e in Cr}}))}function vm(n){return Ht(n)&&"__vccOpts"in n}const je=(n,t)=>ap(n,t,xo);function gf(n,t,e){const i=arguments.length;return i===2?ae(t)&&!Dt(t)?Ua(t)?Le(n,null,[t]):Le(n,t):Le(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ua(e)&&(e=[e]),Le(n,t,e))}const xm="3.4.23";/**
* @vue/runtime-dom v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ym="http://www.w3.org/2000/svg",Sm="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,rc=kn&&kn.createElement("template"),Mm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?kn.createElementNS(ym,n):t==="mathml"?kn.createElementNS(Sm,n):kn.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>kn.createTextNode(n),createComment:n=>kn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>kn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{rc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=rc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Em=Symbol("_vtc");function Tm(n,t,e){const i=n[Em];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const sc=Symbol("_vod"),bm=Symbol("_vsh"),Am=Symbol(""),wm=/(^|;)\s*display\s*:/;function Rm(n,t,e){const i=n.style,r=ge(e);let s=!1;if(e&&!r){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&qs(i,a,"")}else for(const o in t)e[o]==null&&qs(i,o,"");for(const o in e)o==="display"&&(s=!0),qs(i,o,e[o])}else if(r){if(t!==e){const o=i[Am];o&&(e+=";"+o),i.cssText=e,s=wm.test(e)}}else t&&n.removeAttribute("style");sc in n&&(n[sc]=s?i.display:"",n[bm]&&(i.display="none"))}const oc=/\s*!important$/;function qs(n,t,e){if(Dt(e))e.forEach(i=>qs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Cm(n,t);oc.test(e)?n.setProperty(fr(i),e.replace(oc,""),"important"):n[i]=e}}const ac=["Webkit","Moz","ms"],No={};function Cm(n,t){const e=No[t];if(e)return e;let i=rr(t);if(i!=="filter"&&i in n)return No[t]=i;i=gh(i);for(let r=0;r<ac.length;r++){const s=ac[r]+i;if(s in n)return No[t]=s}return t}const lc="http://www.w3.org/1999/xlink";function Pm(n,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(lc,t.slice(6,t.length)):n.setAttributeNS(lc,t,e);else{const s=Bd(t);e==null||s&&!xh(e)?n.removeAttribute(t):n.setAttribute(t,s?"":e)}}function Lm(n,t,e,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),n[t]=e??"";return}const a=n.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=e??"";(c!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=xh(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}function Im(n,t,e,i){n.addEventListener(t,e,i)}function Dm(n,t,e,i){n.removeEventListener(t,e,i)}const cc=Symbol("_vei");function Um(n,t,e,i,r=null){const s=n[cc]||(n[cc]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Nm(t);if(i){const c=s[t]=Bm(i,r);Im(n,a,c,l)}else o&&(Dm(n,a,o,l),s[t]=void 0)}}const uc=/(?:Once|Passive|Capture)$/;function Nm(n){let t;if(uc.test(n)){t={};let i;for(;i=n.match(uc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fr(n.slice(2)),t]}let Oo=0;const Om=Promise.resolve(),Fm=()=>Oo||(Om.then(()=>Oo=0),Oo=Date.now());function Bm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Qe(zm(i,e.value),t,5,[i])};return e.value=n,e.attached=Fm(),e}function zm(n,t){if(Dt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const hc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hm=(n,t,e,i,r,s,o,a,l)=>{const c=r==="svg";t==="class"?Tm(n,i,c):t==="style"?Rm(n,e,i):ao(t)?ja(t)||Um(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vm(n,t,i,c))?Lm(n,t,i,s,o,a,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Pm(n,t,i,c))};function Vm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&hc(t)&&Ht(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return hc(t)&&ge(e)?!1:t in n}const km=ye({patchProp:Hm},Mm);let fc;function Gm(){return fc||(fc=tm(km))}const Wm=(...n)=>{const t=Gm().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=qm(i);if(!r)return;const s=t._component;!Ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,Xm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Xm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function qm(n){return ge(n)?document.querySelector(n):n}var Ym=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const $m=Symbol();var dc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(dc||(dc={}));function jm(){const n=zd(!0),t=n.run(()=>Bh({}));let e=[],i=[];const r=Nh({install(s){r._a=s,s.provide($m,r),s.config.globalProperties.$pinia=r,i.forEach(o=>e.push(o)),i=[]},use(s){return!this._a&&!Ym?i.push(s):e.push(s),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return r}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Xi=typeof document<"u";function Km(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const jt=Object.assign;function Fo(n,t){const e={};for(const i in t){const r=t[i];e[i]=tn(r)?r.map(n):n(r)}return e}const Ir=()=>{},tn=Array.isArray,_f=/#/g,Zm=/&/g,Jm=/\//g,Qm=/=/g,tg=/\?/g,vf=/\+/g,eg=/%5B/g,ng=/%5D/g,xf=/%5E/g,ig=/%60/g,yf=/%7B/g,rg=/%7C/g,Sf=/%7D/g,sg=/%20/g;function pl(n){return encodeURI(""+n).replace(rg,"|").replace(eg,"[").replace(ng,"]")}function og(n){return pl(n).replace(yf,"{").replace(Sf,"}").replace(xf,"^")}function Oa(n){return pl(n).replace(vf,"%2B").replace(sg,"+").replace(_f,"%23").replace(Zm,"%26").replace(ig,"`").replace(yf,"{").replace(Sf,"}").replace(xf,"^")}function ag(n){return Oa(n).replace(Qm,"%3D")}function lg(n){return pl(n).replace(_f,"%23").replace(tg,"%3F")}function cg(n){return n==null?"":lg(n).replace(Jm,"%2F")}function qr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const ug=/\/$/,hg=n=>n.replace(ug,"");function Bo(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=n(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=mg(i??t,e),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:qr(o)}}function fg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function pc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function dg(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&or(t.matched[i],e.matched[r])&&Mf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function or(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Mf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!pg(n[e],t[e]))return!1;return!0}function pg(n,t){return tn(n)?mc(n,t):tn(t)?mc(t,n):n===t}function mc(n,t){return tn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function mg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Yr;(function(n){n.pop="pop",n.push="push"})(Yr||(Yr={}));var Dr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Dr||(Dr={}));function gg(n){if(!n)if(Xi){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),hg(n)}const _g=/^[^#]+#/;function vg(n,t){return n.replace(_g,"#")+t}function xg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const yo=()=>({left:window.scrollX,top:window.scrollY});function yg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=xg(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function gc(n,t){return(history.state?history.state.position-t:-1)+n}const Fa=new Map;function Sg(n,t){Fa.set(n,t)}function Mg(n){const t=Fa.get(n);return Fa.delete(n),t}let Eg=()=>location.protocol+"//"+location.host;function Ef(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),pc(l,"")}return pc(e,n)+i+r}function Tg(n,t,e,i){let r=[],s=[],o=null;const a=({state:f})=>{const m=Ef(n,location),x=e.value,v=t.value;let d=0;if(f){if(e.value=m,t.value=f,o&&o===x){o=null;return}d=v?f.position-v.position:0}else i(m);r.forEach(p=>{p(e.value,x,{delta:d,type:Yr.pop,direction:d?d>0?Dr.forward:Dr.back:Dr.unknown})})};function l(){o=e.value}function c(f){r.push(f);const m=()=>{const x=r.indexOf(f);x>-1&&r.splice(x,1)};return s.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(jt({},f.state,{scroll:yo()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function _c(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?yo():null}}function bg(n){const{history:t,location:e}=window,i={value:Ef(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:Eg()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(m){console.error(m),e[u?"replace":"assign"](f)}}function o(l,c){const u=jt({},t.state,_c(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=jt({},r.value,t.state,{forward:l,scroll:yo()});s(u.current,u,!0);const h=jt({},_c(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Ag(n){n=gg(n);const t=bg(n),e=Tg(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=jt({location:"",base:n,go:i,createHref:vg.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function wg(n){return typeof n=="string"||n&&typeof n=="object"}function Tf(n){return typeof n=="string"||typeof n=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bf=Symbol("");var vc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(vc||(vc={}));function ar(n,t){return jt(new Error,{type:n,[bf]:!0},t)}function xn(n,t){return n instanceof Error&&bf in n&&(t==null||!!(n.type&t))}const xc="[^/]+?",Rg={sensitive:!1,strict:!1,start:!0,end:!0},Cg=/[.+*?^${}()[\]/\\]/g;function Pg(n,t){const e=jt({},Rg,t),i=[];let r=e.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let m=40+(e.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Cg,"\\$&"),m+=40;else if(f.type===1){const{value:x,repeatable:v,optional:d,regexp:p}=f;s.push({name:x,repeatable:v,optional:d});const w=p||xc;if(w!==xc){m+=10;try{new RegExp(`(${w})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${x}" (${w}): `+A.message)}}let _=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(_=d&&c.length<2?`(?:/${_})`:"/"+_),d&&(_+="?"),r+=_,m+=20,d&&(m+=-8),v&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",x=s[f-1];h[x.name]=m&&x.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:x,repeatable:v,optional:d}=m,p=x in c?c[x]:"";if(tn(p)&&!v)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const w=tn(p)?p.join("/"):p;if(!w)if(d)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Lg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ig(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=Lg(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(yc(i))return 1;if(yc(r))return-1}return r.length-i.length}function yc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Dg={type:0,value:""},Ug=/[a-zA-Z0-9_]/;function Ng(n){if(!n)return[[]];if(n==="/")return[[Dg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(m){throw new Error(`ERR (${e})/"${c}": ${m}`)}let e=0,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(e===0?s.push({type:0,value:c}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:Ug.test(l)?f():(h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Og(n,t,e){const i=Pg(Ng(n.path),e),r=jt(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Fg(n,t){const e=[],i=new Map;t=Ec({strict:!1,end:!0,sensitive:!1},t);function r(u){return i.get(u)}function s(u,h,f){const m=!f,x=Bg(u);x.aliasOf=f&&f.record;const v=Ec(t,u),d=[x];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of _)d.push(jt({},x,{components:f?f.record.components:x.components,path:A,aliasOf:f?f.record:x}))}let p,w;for(const _ of d){const{path:A}=_;if(h&&A[0]!=="/"){const H=h.record.path,L=H[H.length-1]==="/"?"":"/";_.path=h.record.path+(A&&L+A)}if(p=Og(_,h,v),f?f.alias.push(p):(w=w||p,w!==p&&w.alias.push(p),m&&u.name&&!Mc(p)&&o(u.name)),x.children){const H=x.children;for(let L=0;L<H.length;L++)s(H[L],p,f&&f.children[L])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return w?()=>{o(w)}:Ir}function o(u){if(Tf(u)){const h=i.get(u);h&&(i.delete(u),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(u);h>-1&&(e.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){let h=0;for(;h<e.length&&Ig(u,e[h])>=0&&(u.record.path!==e[h].record.path||!Af(u,e[h]));)h++;e.splice(h,0,u),u.record.name&&!Mc(u)&&i.set(u.record.name,u)}function c(u,h){let f,m={},x,v;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw ar(1,{location:u});v=f.record.name,m=jt(Sc(h.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),u.params&&Sc(u.params,f.keys.map(w=>w.name))),x=f.stringify(m)}else if(u.path!=null)x=u.path,f=e.find(w=>w.re.test(x)),f&&(m=f.parse(x),v=f.record.name);else{if(f=h.name?i.get(h.name):e.find(w=>w.re.test(h.path)),!f)throw ar(1,{location:u,currentLocation:h});v=f.record.name,m=jt({},h.params,u.params),x=f.stringify(m)}const d=[];let p=f;for(;p;)d.unshift(p.record),p=p.parent;return{name:v,path:x,params:m,matched:d,meta:Hg(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Sc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Bg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:zg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function zg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Mc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Hg(n){return n.reduce((t,e)=>jt(t,e.meta),{})}function Ec(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function Af(n,t){return t.children.some(e=>e===n||Af(n,e))}function Vg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(vf," "),o=s.indexOf("="),a=qr(o<0?s:s.slice(0,o)),l=o<0?null:qr(s.slice(o+1));if(a in t){let c=t[a];tn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Tc(n){let t="";for(let e in n){const i=n[e];if(e=ag(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(tn(i)?i.map(s=>s&&Oa(s)):[i&&Oa(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function kg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=tn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const Gg=Symbol(""),bc=Symbol(""),ml=Symbol(""),wf=Symbol(""),Ba=Symbol("");function xr(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Gn(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(ar(4,{from:e,to:t})):f instanceof Error?l(f):wg(f)?l(ar(2,{from:t,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],t,e,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function zo(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Wg(l)){const u=(l.__vccOpts||l)[t];u&&s.push(Gn(u,e,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Km(u)?u.default:u;o.components[a]=h;const m=(h.__vccOpts||h)[t];return m&&Gn(m,e,i,o,a,r)()}))}}return s}function Wg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ac(n){const t=Cn(ml),e=Cn(wf),i=je(()=>{const l=Ei(n.to);return t.resolve(l)}),r=je(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(or.bind(null,u));if(f>-1)return f;const m=wc(l[c-2]);return c>1&&wc(u)===m&&h[h.length-1].path!==m?h.findIndex(or.bind(null,l[c-2])):f}),s=je(()=>r.value>-1&&$g(e.params,i.value.params)),o=je(()=>r.value>-1&&r.value===e.matched.length-1&&Mf(e.params,i.value.params));function a(l={}){return Yg(l)?t[Ei(n.replace)?"replace":"push"](Ei(n.to)).catch(Ir):Promise.resolve()}return{route:i,href:je(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Xg=ts({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ac,setup(n,{slots:t}){const e=ho(Ac(n)),{options:i}=Cn(ml),r=je(()=>({[Rc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Rc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&t.default(e);return n.custom?s:gf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),qg=Xg;function Yg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function $g(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!tn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function wc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Rc=(n,t,e)=>n??t??e,jg=ts({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Cn(Ba),r=je(()=>n.route||i.value),s=Cn(bc,0),o=je(()=>{let c=Ei(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=je(()=>r.value.matched[o.value]);Gs(bc,je(()=>o.value+1)),Gs(Gg,a),Gs(Ba,r);const l=Bh();return Vs(()=>[l.value,a.value,n.name],([c,u,h],[f,m,x])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!or(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Cc(e.default,{Component:f,route:c});const m=h.props[u],x=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=gf(f,jt({},x,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Cc(e.default,{Component:d,route:c})||d}}});function Cc(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Rf=jg;function Kg(n){const t=Fg(n.routes,n),e=n.parseQuery||Vg,i=n.stringifyQuery||Tc,r=n.history,s=xr(),o=xr(),a=xr(),l=lp(Dn);let c=Dn;Xi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fo.bind(null,y=>""+y),h=Fo.bind(null,cg),f=Fo.bind(null,qr);function m(y,k){let $,V;return Tf(y)?($=t.getRecordMatcher(y),V=k):V=y,t.addRoute(V,$)}function x(y){const k=t.getRecordMatcher(y);k&&t.removeRoute(k)}function v(){return t.getRoutes().map(y=>y.record)}function d(y){return!!t.getRecordMatcher(y)}function p(y,k){if(k=jt({},k||l.value),typeof y=="string"){const b=Bo(e,y,k.path),I=t.resolve({path:b.path},k),q=r.createHref(b.fullPath);return jt(b,I,{params:f(I.params),hash:qr(b.hash),redirectedFrom:void 0,href:q})}let $;if(y.path!=null)$=jt({},y,{path:Bo(e,y.path,k.path).path});else{const b=jt({},y.params);for(const I in b)b[I]==null&&delete b[I];$=jt({},y,{params:h(b)}),k.params=h(k.params)}const V=t.resolve($,k),O=y.hash||"";V.params=u(f(V.params));const lt=fg(i,jt({},y,{hash:og(O),path:V.path})),E=r.createHref(lt);return jt({fullPath:lt,hash:O,query:i===Tc?kg(y.query):y.query||{}},V,{redirectedFrom:void 0,href:E})}function w(y){return typeof y=="string"?Bo(e,y,l.value.path):jt({},y)}function _(y,k){if(c!==y)return ar(8,{from:k,to:y})}function A(y){return U(y)}function H(y){return A(jt(w(y),{replace:!0}))}function L(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:$}=k;let V=typeof $=="function"?$(y):$;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=w(V):{path:V},V.params={}),jt({query:y.query,hash:y.hash,params:V.path!=null?{}:y.params},V)}}function U(y,k){const $=c=p(y),V=l.value,O=y.state,lt=y.force,E=y.replace===!0,b=L($);if(b)return U(jt(w(b),{state:typeof b=="object"?jt({},O,b.state):O,force:lt,replace:E}),k||$);const I=$;I.redirectedFrom=k;let q;return!lt&&dg(i,V,$)&&(q=ar(16,{to:I,from:V}),vt(V,V,!0,!1)),(q?Promise.resolve(q):T(I,V)).catch(M=>xn(M)?xn(M,2)?M:ht(M):B(M,I,V)).then(M=>{if(M){if(xn(M,2))return U(jt({replace:E},w(M.to),{state:typeof M.to=="object"?jt({},O,M.to.state):O,force:lt}),k||I)}else M=K(I,V,!0,E,O);return Z(I,V,M),M})}function Y(y,k){const $=_(y,k);return $?Promise.reject($):Promise.resolve()}function R(y){const k=N.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function T(y,k){let $;const[V,O,lt]=Zg(y,k);$=zo(V.reverse(),"beforeRouteLeave",y,k);for(const b of V)b.leaveGuards.forEach(I=>{$.push(Gn(I,y,k))});const E=Y.bind(null,y,k);return $.push(E),C($).then(()=>{$=[];for(const b of s.list())$.push(Gn(b,y,k));return $.push(E),C($)}).then(()=>{$=zo(O,"beforeRouteUpdate",y,k);for(const b of O)b.updateGuards.forEach(I=>{$.push(Gn(I,y,k))});return $.push(E),C($)}).then(()=>{$=[];for(const b of lt)if(b.beforeEnter)if(tn(b.beforeEnter))for(const I of b.beforeEnter)$.push(Gn(I,y,k));else $.push(Gn(b.beforeEnter,y,k));return $.push(E),C($)}).then(()=>(y.matched.forEach(b=>b.enterCallbacks={}),$=zo(lt,"beforeRouteEnter",y,k,R),$.push(E),C($))).then(()=>{$=[];for(const b of o.list())$.push(Gn(b,y,k));return $.push(E),C($)}).catch(b=>xn(b,8)?b:Promise.reject(b))}function Z(y,k,$){a.list().forEach(V=>R(()=>V(y,k,$)))}function K(y,k,$,V,O){const lt=_(y,k);if(lt)return lt;const E=k===Dn,b=Xi?history.state:{};$&&(V||E?r.replace(y.fullPath,jt({scroll:E&&b&&b.scroll},O)):r.push(y.fullPath,O)),l.value=y,vt(y,k,$,E),ht()}let W;function tt(){W||(W=r.listen((y,k,$)=>{if(!D.listening)return;const V=p(y),O=L(V);if(O){U(jt(O,{replace:!0}),V).catch(Ir);return}c=V;const lt=l.value;Xi&&Sg(gc(lt.fullPath,$.delta),yo()),T(V,lt).catch(E=>xn(E,12)?E:xn(E,2)?(U(E.to,V).then(b=>{xn(b,20)&&!$.delta&&$.type===Yr.pop&&r.go(-1,!1)}).catch(Ir),Promise.reject()):($.delta&&r.go(-$.delta,!1),B(E,V,lt))).then(E=>{E=E||K(V,lt,!1),E&&($.delta&&!xn(E,8)?r.go(-$.delta,!1):$.type===Yr.pop&&xn(E,20)&&r.go(-1,!1)),Z(V,lt,E)}).catch(Ir)}))}let ot=xr(),st=xr(),nt;function B(y,k,$){ht(y);const V=st.list();return V.length?V.forEach(O=>O(y,k,$)):console.error(y),Promise.reject(y)}function ft(){return nt&&l.value!==Dn?Promise.resolve():new Promise((y,k)=>{ot.add([y,k])})}function ht(y){return nt||(nt=!y,tt(),ot.list().forEach(([k,$])=>y?$(y):k()),ot.reset()),y}function vt(y,k,$,V){const{scrollBehavior:O}=n;if(!Xi||!O)return Promise.resolve();const lt=!$&&Mg(gc(y.fullPath,0))||(V||!$)&&history.state&&history.state.scroll||null;return kh().then(()=>O(y,k,lt)).then(E=>E&&yg(E)).catch(E=>B(E,y,k))}const bt=y=>r.go(y);let Gt;const N=new Set,D={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,hasRoute:d,getRoutes:v,resolve:p,options:n,push:A,replace:H,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:st.add,isReady:ft,install(y){const k=this;y.component("RouterLink",qg),y.component("RouterView",Rf),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ei(l)}),Xi&&!Gt&&l.value===Dn&&(Gt=!0,A(r.location).catch(O=>{}));const $={};for(const O in Dn)Object.defineProperty($,O,{get:()=>l.value[O],enumerable:!0});y.provide(ml,k),y.provide(wf,Ih($)),y.provide(Ba,l);const V=y.unmount;N.add(y),y.unmount=function(){N.delete(y),N.size<1&&(c=Dn,W&&W(),W=null,l.value=Dn,Gt=!1,nt=!1),V()}}};function C(y){return y.reduce((k,$)=>k.then(()=>R($)),Promise.resolve())}return D}function Zg(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(c=>or(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>or(c,l))||r.push(l))}return[e,i,r]}const Jg={class:"main-box"},Qg=ts({__name:"App",setup(n){return(t,e)=>(hl(),ff("div",Jg,[Le(Ei(Rf))]))}}),Cf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},t_=Cf(Qg,[["__scopeId","data-v-957ae1a6"]]),e_="modulepreload",n_=function(n){return"/"+n},Pc={},Ho=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(a=>{if(a=n_(a),a in Pc)return;Pc[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":e_,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="163",KE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},i_=0,Lc=1,r_=2,Pf=1,s_=2,an=3,Jn=0,Ie=1,Ke=2,$n=0,Qi=1,Ic=2,Dc=3,Uc=4,o_=5,_i=100,a_=101,l_=102,c_=103,u_=104,h_=200,f_=201,d_=202,p_=203,za=204,Ha=205,m_=206,g_=207,__=208,v_=209,x_=210,y_=211,S_=212,M_=213,E_=214,T_=0,b_=1,A_=2,Qs=3,w_=4,R_=5,C_=6,P_=7,_l=0,L_=1,I_=2,jn=0,D_=1,U_=2,N_=3,Lf=4,O_=5,F_=6,B_=7,If=300,lr=301,cr=302,Va=303,ka=304,So=306,Ga=1e3,xi=1001,Wa=1002,Ge=1003,z_=1004,ds=1005,Ze=1006,Vo=1007,yi=1008,Kn=1009,H_=1010,V_=1011,Df=1012,Uf=1013,ur=1014,Xn=1015,to=1016,Nf=1017,Of=1018,ns=1020,k_=35902,G_=1021,W_=1022,dn=1023,X_=1024,q_=1025,tr=1026,$r=1027,Y_=1028,Ff=1029,$_=1030,Bf=1031,zf=1033,ko=33776,Go=33777,Wo=33778,Xo=33779,Nc=35840,Oc=35841,Fc=35842,Bc=35843,Hf=36196,zc=37492,Hc=37496,Vc=37808,kc=37809,Gc=37810,Wc=37811,Xc=37812,qc=37813,Yc=37814,$c=37815,jc=37816,Kc=37817,Zc=37818,Jc=37819,Qc=37820,tu=37821,qo=36492,eu=36494,nu=36495,j_=36283,iu=36284,ru=36285,su=36286,K_=3200,Z_=3201,Vf=0,J_=1,Wn="",$e="srgb",ni="srgb-linear",vl="display-p3",Mo="display-p3-linear",eo="linear",Qt="srgb",no="rec709",io="p3",Ri=7680,ou=519,Q_=512,t0=513,e0=514,kf=515,n0=516,i0=517,r0=518,s0=519,au=35044,lu="300 es",wn=2e3,ro=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const Ur=Math.PI/180,jr=180/Math.PI;function wi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function xl(n,t){return(n%t+t)%t}function o0(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function a0(n,t,e){return n!==t?(e-n)/(t-n):0}function Nr(n,t,e){return(1-e)*n+e*t}function l0(n,t,e,i){return Nr(n,t,1-Math.exp(-e*i))}function c0(n,t=1){return t-Math.abs(xl(n,t*2)-t)}function u0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function h0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function f0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function d0(n,t){return n+Math.random()*(t-n)}function p0(n){return n*(.5-Math.random())}function m0(n){n!==void 0&&(cu=n);let t=cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g0(n){return n*Ur}function _0(n){return n*jr}function v0(n){return(n&n-1)===0&&n!==0}function x0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function y0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S0(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),m=s((i-t)/2),x=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*x,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*x,a*c);break;case"ZYZ":n.set(l*x,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function we(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ZE={DEG2RAD:Ur,RAD2DEG:jr,generateUUID:wi,clamp:_e,euclideanModulo:xl,mapLinear:o0,inverseLerp:a0,lerp:Nr,damp:l0,pingpong:c0,smoothstep:u0,smootherstep:h0,randInt:f0,randFloat:d0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:v0,ceilPowerOfTwo:x0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:S0,normalize:we,denormalize:qi};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,i,r,s,o,a,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],x=i[8],v=r[0],d=r[3],p=r[6],w=r[1],_=r[4],A=r[7],H=r[2],L=r[5],U=r[8];return s[0]=o*v+a*w+l*H,s[3]=o*d+a*_+l*L,s[6]=o*p+a*A+l*U,s[1]=c*v+u*w+h*H,s[4]=c*d+u*_+h*L,s[7]=c*p+u*A+h*U,s[2]=f*v+m*w+x*H,s[5]=f*d+m*_+x*L,s[8]=f*p+m*A+x*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=e*h+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=h*v,t[1]=(r*c-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=f*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-a*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new Pt;function Gf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M0(){const n=so("canvas");return n.style.display="block",n}const uu={};function E0(n){n in uu||(uu[n]=!0,console.warn(n))}const hu=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fu=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[ni]:{transfer:eo,primaries:no,toReference:n=>n,fromReference:n=>n},[$e]:{transfer:Qt,primaries:no,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Mo]:{transfer:eo,primaries:io,toReference:n=>n.applyMatrix3(fu),fromReference:n=>n.applyMatrix3(hu)},[vl]:{transfer:Qt,primaries:io,toReference:n=>n.convertSRGBToLinear().applyMatrix3(fu),fromReference:n=>n.applyMatrix3(hu).convertLinearToSRGB()}},T0=new Set([ni,Mo]),Kt={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!T0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=ps[t].toReference,r=ps[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ps[n].primaries},getTransfer:function(n){return n===Wn?eo:ps[n].transfer}};function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class b0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=so("canvas")),Ci.width=t.width,Ci.height=t.height;const i=Ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=so("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(er(e[i]/255)*255):e[i]=er(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A0=0;class Wf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jo(r[o].image)):s.push(jo(r[o]))}else s=jo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w0=0;class De extends dr{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=xi,r=xi,s=Ze,o=yi,a=dn,l=Kn,c=De.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=wi(),this.name="",this.source=new Wf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=If;De.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,r=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],v=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,A=(m+1)/2,H=(p+1)/2,L=(u+f)/4,U=(h+v)/4,Y=(x+d)/4;return _>A&&_>H?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=L/i,s=U/i):A>H?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=L/r,s=Y/r):H<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),i=U/s,r=Y/s),this.set(i,r,s,e),this}let w=Math.sqrt((d-x)*(d-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-x)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends dr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new De(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends R0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Xf extends De{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C0 extends De{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=v;return}if(h!==v||l!==f||c!==m||u!==x){let d=1-a;const p=l*f+c*m+u*x+h*v,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const H=Math.sqrt(_),L=Math.atan2(H,p*w);d=Math.sin(d*L)/H,a=Math.sin(a*L)/H}const A=a*w;if(l=l*d+f*A,c=c*d+m*A,u=u*d+x*A,h=h*d+v*A,d===1-a){const H=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=H,c*=H,u*=H,h*=H}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return t[e]=a*x+u*h+l*m-c*f,t[e+1]=l*x+u*f+c*h-a*m,t[e+2]=c*x+u*m+a*f-l*h,t[e+3]=u*x-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,i=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new j,du=new pr;class is{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(s,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),gs.subVectors(this.max,yr),Pi.subVectors(t.a,yr),Li.subVectors(t.b,yr),Ii.subVectors(t.c,yr),Un.subVectors(Li,Pi),Nn.subVectors(Ii,Li),ai.subVectors(Pi,Ii);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-ai.z,ai.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,ai.z,0,-ai.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-ai.y,ai.x,0];return!Zo(e,Pi,Li,Ii,gs)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,Pi,Li,Ii,gs))?!1:(_s.crossVectors(Un,Nn),e=[_s.x,_s.y,_s.z],Zo(e,Pi,Li,Ii,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new j,new j,new j,new j,new j,new j,new j,new j],We=new j,ms=new is,Pi=new j,Li=new j,Ii=new j,Un=new j,Nn=new j,ai=new j,yr=new j,gs=new j,_s=new j,li=new j;function Zo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){li.fromArray(n,s);const a=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),u=i.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const P0=new is,Sr=new j,Jo=new j;class Eo{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):P0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Jo)),this.expandByPoint(Sr.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new j,Qo=new j,vs=new j,On=new j,ta=new j,xs=new j,ea=new j;class qf{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Qo.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Qo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(vs),a=On.dot(this.direction),l=-On.dot(vs),c=On.lengthSq(),u=Math.abs(1-o*o);let h,f,m,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const v=1/u;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qo).addScaledVector(vs,f),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,i,r,s){ta.subVectors(e,t),xs.subVectors(i,t),ea.crossVectors(ta,xs);let o=this.direction.dot(ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(xs.crossVectors(On,xs));if(l<0)return null;const c=a*this.direction.dot(ta.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(ea);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,i,r,s,o,a,l,c,u,h,f,m,x,v,d){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,f,m,x,v,d)}set(t,e,i,r,s,o,a,l,c,u,h,f,m,x,v,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=x,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,m=o*h,x=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+x*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=x+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,x=c*u,v=c*h;e[0]=f+v*a,e[4]=x*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,x=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*h,x=a*u,v=a*h;e[0]=l*u,e[4]=x*c-m,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=m*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=x*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+x,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,m=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=m*h-x,e[2]=x*h-m,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,I0)}lookAt(t,e,i){const r=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Fn.crossVectors(i,Fe),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Fn.crossVectors(i,Fe)),Fn.normalize(),ys.crossVectors(Fe,Fn),r[0]=Fn.x,r[4]=ys.x,r[8]=Fe.x,r[1]=Fn.y,r[5]=ys.y,r[9]=Fe.y,r[2]=Fn.z,r[6]=ys.z,r[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],x=i[2],v=i[6],d=i[10],p=i[14],w=i[3],_=i[7],A=i[11],H=i[15],L=r[0],U=r[4],Y=r[8],R=r[12],T=r[1],Z=r[5],K=r[9],W=r[13],tt=r[2],ot=r[6],st=r[10],nt=r[14],B=r[3],ft=r[7],ht=r[11],vt=r[15];return s[0]=o*L+a*T+l*tt+c*B,s[4]=o*U+a*Z+l*ot+c*ft,s[8]=o*Y+a*K+l*st+c*ht,s[12]=o*R+a*W+l*nt+c*vt,s[1]=u*L+h*T+f*tt+m*B,s[5]=u*U+h*Z+f*ot+m*ft,s[9]=u*Y+h*K+f*st+m*ht,s[13]=u*R+h*W+f*nt+m*vt,s[2]=x*L+v*T+d*tt+p*B,s[6]=x*U+v*Z+d*ot+p*ft,s[10]=x*Y+v*K+d*st+p*ht,s[14]=x*R+v*W+d*nt+p*vt,s[3]=w*L+_*T+A*tt+H*B,s[7]=w*U+_*Z+A*ot+H*ft,s[11]=w*Y+_*K+A*st+H*ht,s[15]=w*R+_*W+A*nt+H*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],x=t[3],v=t[7],d=t[11],p=t[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+v*(+e*l*m-e*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+d*(+e*c*h-e*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+p*(-r*a*u-e*l*h+e*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],x=t[12],v=t[13],d=t[14],p=t[15],w=h*d*c-v*f*c+v*l*m-a*d*m-h*l*p+a*f*p,_=x*f*c-u*d*c-x*l*m+o*d*m+u*l*p-o*f*p,A=u*v*c-x*h*c+x*a*m-o*v*m-u*a*p+o*h*p,H=x*h*l-u*v*l-x*a*f+o*v*f+u*a*d-o*h*d,L=e*w+i*_+r*A+s*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return t[0]=w*U,t[1]=(v*f*s-h*d*s-v*r*m+i*d*m+h*r*p-i*f*p)*U,t[2]=(a*d*s-v*l*s+v*r*c-i*d*c-a*r*p+i*l*p)*U,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*U,t[4]=_*U,t[5]=(u*d*s-x*f*s+x*r*m-e*d*m-u*r*p+e*f*p)*U,t[6]=(x*l*s-o*d*s-x*r*c+e*d*c+o*r*p-e*l*p)*U,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*m+e*l*m)*U,t[8]=A*U,t[9]=(x*h*s-u*v*s-x*i*m+e*v*m+u*i*p-e*h*p)*U,t[10]=(o*v*s-x*a*s+x*i*c-e*v*c-o*i*p+e*a*p)*U,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*m-e*a*m)*U,t[12]=H*U,t[13]=(u*v*r-x*h*r+x*i*f-e*v*f-u*i*d+e*h*d)*U,t[14]=(x*a*r-o*v*r-x*i*l+e*v*l+o*i*d-e*a*d)*U,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*f+e*a*f)*U,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,x=s*h,v=o*u,d=o*h,p=a*h,w=l*c,_=l*u,A=l*h,H=i.x,L=i.y,U=i.z;return r[0]=(1-(v+p))*H,r[1]=(m+A)*H,r[2]=(x-_)*H,r[3]=0,r[4]=(m-A)*L,r[5]=(1-(f+p))*L,r[6]=(d+w)*L,r[7]=0,r[8]=(x+_)*U,r[9]=(d-w)*U,r[10]=(1-(f+v))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Xe.copy(this);const c=1/s,u=1/o,h=1/a;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=u,Xe.elements[5]*=u,Xe.elements[6]*=u,Xe.elements[8]*=h,Xe.elements[9]*=h,Xe.elements[10]*=h,e.setFromRotationMatrix(Xe),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=wn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let m,x;if(a===wn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ro)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=wn){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*c,m=(i+r)*u;let x,v;if(a===wn)x=(o+s)*h,v=-2*h;else if(a===ro)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Di=new j,Xe=new te,L0=new j(0,0,0),I0=new j(1,1,1),Fn=new j,ys=new j,Fe=new j,pu=new te,mu=new pr;class gn{constructor(t=0,e=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Yf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let D0=0;const gu=new j,Ui=new pr,Mn=new te,Ss=new j,Mr=new j,U0=new j,N0=new pr,_u=new j(1,0,0),vu=new j(0,1,0),xu=new j(0,0,1),yu={type:"added"},O0={type:"removed"},Ni={type:"childadded",child:null},na={type:"childremoved",child:null};class ue extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new j,e=new gn,i=new pr,r=new j(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new te},normalMatrix:{value:new Pt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(vu,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(vu,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ss.copy(t):Ss.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Mr,Ss,this.up):Mn.lookAt(Ss,Mr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O0),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,U0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,N0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ue.DEFAULT_UP=new j(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new j,En=new j,ia=new j,Tn=new j,Oi=new j,Fi=new j,Su=new j,ra=new j,sa=new j,oa=new j;class hn{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),qe.subVectors(t,e),r.cross(qe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){qe.subVectors(r,e),En.subVectors(i,e),ia.subVectors(t,e);const o=qe.dot(qe),a=qe.dot(En),l=qe.dot(ia),c=En.dot(En),u=En.dot(ia),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static isFrontFacing(t,e,i,r){return qe.subVectors(i,e),En.subVectors(t,e),qe.cross(En).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),En.subVectors(this.a,this.b),qe.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Oi.subVectors(r,i),Fi.subVectors(s,i),ra.subVectors(t,i);const l=Oi.dot(ra),c=Fi.dot(ra);if(l<=0&&c<=0)return e.copy(i);sa.subVectors(t,r);const u=Oi.dot(sa),h=Fi.dot(sa);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Oi,o);oa.subVectors(t,s);const m=Oi.dot(oa),x=Fi.dot(oa);if(x>=0&&m<=x)return e.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(Fi,a);const d=u*x-m*h;if(d<=0&&h-u>=0&&m-x>=0)return Su.subVectors(s,r),a=(h-u)/(h-u+(m-x)),e.copy(r).addScaledVector(Su,a);const p=1/(d+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(Oi,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function aa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ft{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Kt.workingColorSpace){if(t=xl(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=aa(o,s,t+1/3),this.g=aa(o,s,t),this.b=aa(o,s,t-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(t,e=$e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=$f[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Kt.fromWorkingColorSpace(Te.copy(this),t),Math.round(_e(Te.r*255,0,255))*65536+Math.round(_e(Te.g*255,0,255))*256+Math.round(_e(Te.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,r=Te.g,s=Te.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=$e){Kt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,r=Te.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Ms);const i=Nr(Bn.h,Ms.h,e),r=Nr(Bn.s,Ms.s,e),s=Nr(Bn.l,Ms.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ft;Ft.NAMES=$f;let F0=0;class mr extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Qi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oo extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new j,Es=new mt;class pn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return E0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),r=we(r,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==au&&(t.usage=this.usage),t}}class jf extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Kf extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let B0=0;const He=new te,la=new ue,Bi=new j,Be=new is,Er=new is,pe=new j;class en extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gf(t)?Kf:jf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,i){return He.makeTranslation(t,e,i),this.applyMatrix4(He),this}scale(t,e,i){return He.makeScale(t,e,i),this.applyMatrix4(He),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Be.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const i=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Be.min,Er.min),Be.expandByPoint(pe),pe.addVectors(Be.max,Er.max),Be.expandByPoint(pe)):(Be.expandByPoint(Er.min),Be.expandByPoint(Er.max))}Be.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pe.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),pe.add(Bi)),r=Math.max(r,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let Y=0;Y<i.count;Y++)a[Y]=new j,l[Y]=new j;const c=new j,u=new j,h=new j,f=new mt,m=new mt,x=new mt,v=new j,d=new j;function p(Y,R,T){c.fromBufferAttribute(i,Y),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,T),f.fromBufferAttribute(s,Y),m.fromBufferAttribute(s,R),x.fromBufferAttribute(s,T),u.sub(c),h.sub(c),m.sub(f),x.sub(f);const Z=1/(m.x*x.y-x.x*m.y);isFinite(Z)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(Z),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(Z),a[Y].add(v),a[R].add(v),a[T].add(v),l[Y].add(d),l[R].add(d),l[T].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let Y=0,R=w.length;Y<R;++Y){const T=w[Y],Z=T.start,K=T.count;for(let W=Z,tt=Z+K;W<tt;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const _=new j,A=new j,H=new j,L=new j;function U(Y){H.fromBufferAttribute(r,Y),L.copy(H);const R=a[Y];_.copy(R),_.sub(H.multiplyScalar(H.dot(R))).normalize(),A.crossVectors(L,R);const Z=A.dot(l[Y])<0?-1:1;o.setXYZW(Y,_.x,_.y,_.z,Z)}for(let Y=0,R=w.length;Y<R;++Y){const T=w[Y],Z=T.start,K=T.count;for(let W=Z,tt=Z+K;W<tt;W+=3)U(t.getX(W+0)),U(t.getX(W+1)),U(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,h=new j;if(t)for(let f=0,m=t.count;f<m;f+=3){const x=t.getX(f+0),v=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,d=l.length;v<d;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let p=0;p<u;p++)f[x++]=c[m++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mu=new te,ci=new qf,Ts=new Eo,Eu=new j,zi=new j,Hi=new j,Vi=new j,ca=new j,bs=new j,As=new mt,ws=new mt,Rs=new mt,Tu=new j,bu=new j,Au=new j,Cs=new j,Ps=new j;class ve extends ue{constructor(t=new en,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ca.fromBufferAttribute(h,t),o?bs.addScaledVector(ca,u):bs.addScaledVector(ca.sub(e),u))}e.add(bs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(Ts.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ts,Eu)===null||ci.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Mu.copy(s).invert(),ci.copy(t.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const d=f[x],p=o[d.materialIndex],w=Math.max(d.start,m.start),_=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let A=w,H=_;A<H;A+=3){const L=a.getX(A),U=a.getX(A+1),Y=a.getX(A+2);r=Ls(this,p,t,i,c,u,h,L,U,Y),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let d=x,p=v;d<p;d+=3){const w=a.getX(d),_=a.getX(d+1),A=a.getX(d+2);r=Ls(this,o,t,i,c,u,h,w,_,A),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const d=f[x],p=o[d.materialIndex],w=Math.max(d.start,m.start),_=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let A=w,H=_;A<H;A+=3){const L=A,U=A+1,Y=A+2;r=Ls(this,p,t,i,c,u,h,L,U,Y),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=x,p=v;d<p;d+=3){const w=d,_=d+1,A=d+2;r=Ls(this,o,t,i,c,u,h,w,_,A),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function z0(n,t,e,i,r,s,o,a){let l;if(t.side===Ie?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Jn,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:n}}function Ls(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,zi),n.getVertexPosition(l,Hi),n.getVertexPosition(c,Vi);const u=z0(n,t,e,i,zi,Hi,Vi,Cs);if(u){r&&(As.fromBufferAttribute(r,a),ws.fromBufferAttribute(r,l),Rs.fromBufferAttribute(r,c),u.uv=hn.getInterpolation(Cs,zi,Hi,Vi,As,ws,Rs,new mt)),s&&(As.fromBufferAttribute(s,a),ws.fromBufferAttribute(s,l),Rs.fromBufferAttribute(s,c),u.uv1=hn.getInterpolation(Cs,zi,Hi,Vi,As,ws,Rs,new mt)),o&&(Tu.fromBufferAttribute(o,a),bu.fromBufferAttribute(o,l),Au.fromBufferAttribute(o,c),u.normal=hn.getInterpolation(Cs,zi,Hi,Vi,Tu,bu,Au,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};hn.getNormal(zi,Hi,Vi,h.normal),u.face=h}return u}class rs extends en{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,e,t,o,s,0),x("z","y","x",1,-1,i,e,-t,o,s,1),x("x","z","y",1,1,t,i,e,r,o,2),x("x","z","y",1,-1,t,i,-e,r,o,3),x("x","y","z",1,-1,t,e,i,r,s,4),x("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(h,2));function x(v,d,p,w,_,A,H,L,U,Y,R){const T=A/U,Z=H/Y,K=A/2,W=H/2,tt=L/2,ot=U+1,st=Y+1;let nt=0,B=0;const ft=new j;for(let ht=0;ht<st;ht++){const vt=ht*Z-W;for(let bt=0;bt<ot;bt++){const Gt=bt*T-K;ft[v]=Gt*w,ft[d]=vt*_,ft[p]=tt,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[d]=0,ft[p]=L>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(bt/U),h.push(1-ht/Y),nt+=1}}for(let ht=0;ht<Y;ht++)for(let vt=0;vt<U;vt++){const bt=f+vt+ot*ht,Gt=f+vt+ot*(ht+1),N=f+(vt+1)+ot*(ht+1),D=f+(vt+1)+ot*ht;l.push(bt,Gt,D),l.push(Gt,N,D),B+=6}a.addGroup(m,B,R),m+=B,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Re(n){const t={};for(let e=0;e<n.length;e++){const i=hr(n[e]);for(const r in i)t[r]=i[r]}return t}function H0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const V0={clone:hr,merge:Re};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=H0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jf extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new j,wu=new mt,Ru=new mt;class Ve extends Jf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Ru),e.subVectors(Ru,wu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Gi=1;class W0 extends ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ve(ki,Gi,t,e);r.layers=this.layers,this.add(r);const s=new Ve(ki,Gi,t,e);s.layers=this.layers,this.add(s);const o=new Ve(ki,Gi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(ki,Gi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(ki,Gi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(ki,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Qf extends De{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:lr,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class X0 extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Qf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rs(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:$n});s.uniforms.tEquirect.value=e;const o=new ve(r,s),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Ze),new W0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ua=new j,q0=new j,Y0=new Pt;class pi{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ua.subVectors(i,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Y0.getNormalMatrix(t),r=this.coplanarPoint(ua).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Eo,Is=new j;class yl{constructor(t=new pi,e=new pi,i=new pi,r=new pi,s=new pi,o=new pi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],x=r[9],v=r[10],d=r[11],p=r[12],w=r[13],_=r[14],A=r[15];if(i[0].setComponents(l-s,f-c,d-m,A-p).normalize(),i[1].setComponents(l+s,f+c,d+m,A+p).normalize(),i[2].setComponents(l+o,f+u,d+x,A+w).normalize(),i[3].setComponents(l-o,f-u,d-x,A-w).normalize(),i[4].setComponents(l-a,f-h,d-v,A-_).normalize(),e===wn)i[5].setComponents(l+a,f+h,d+v,A+_).normalize();else if(e===ro)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Is.x=r.normal.x>0?t.max.x:t.min.x,Is.y=r.normal.y>0?t.max.y:t.min.y,Is.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function td(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function $0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let m=0,x=f.length;m<x;m++){const v=f[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class mn extends en{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,m=[],x=[],v=[],d=[];for(let p=0;p<u;p++){const w=p*f-o;for(let _=0;_<c;_++){const A=_*h-s;x.push(A,-w,0),v.push(0,0,1),d.push(_/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const _=w+c*p,A=w+c*(p+1),H=w+1+c*(p+1),L=w+1+c*p;m.push(_,A,L),m.push(A,H,L)}this.setIndex(m),this.setAttribute("position",new xe(x,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ev=`#ifdef USE_AOMAP
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
#endif`,nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lv=`#ifdef USE_IRIDESCENCE
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
#endif`,cv=`#ifdef USE_BUMPMAP
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vv=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Av=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wv=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ov=`#ifdef USE_GRADIENTMAP
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
}`,Fv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vv=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yv=`PhysicalMaterial material;
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
#endif`,$v=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,jv=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sx=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
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
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
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
}`,ny=`#if DEPTH_PACKING == 3200
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
	#endif
}`,iy=`#define DISTANCE
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
}`,ry=`#define DISTANCE
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,uy=`uniform vec3 diffuse;
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
}`,hy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,dy=`#define MATCAP
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
}`,py=`#define MATCAP
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
}`,my=`#define NORMAL
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
}`,gy=`#define NORMAL
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
}`,_y=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,xy=`#define STANDARD
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
}`,yy=`#define STANDARD
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
}`,Sy=`#define TOON
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
}`,My=`#define TOON
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
}`,Ey=`uniform float size;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,wy=`uniform float rotation;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:j0,alphahash_pars_fragment:K0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:Q0,alphatest_pars_fragment:tv,aomap_fragment:ev,aomap_pars_fragment:nv,batching_pars_vertex:iv,batching_vertex:rv,begin_vertex:sv,beginnormal_vertex:ov,bsdfs:av,iridescence_fragment:lv,bumpmap_pars_fragment:cv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:hv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:dv,color_fragment:pv,color_pars_fragment:mv,color_pars_vertex:gv,color_vertex:_v,common:vv,cube_uv_reflection_fragment:xv,defaultnormal_vertex:yv,displacementmap_pars_vertex:Sv,displacementmap_vertex:Mv,emissivemap_fragment:Ev,emissivemap_pars_fragment:Tv,colorspace_fragment:bv,colorspace_pars_fragment:Av,envmap_fragment:wv,envmap_common_pars_fragment:Rv,envmap_pars_fragment:Cv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:kv,envmap_vertex:Lv,fog_vertex:Iv,fog_pars_vertex:Dv,fog_fragment:Uv,fog_pars_fragment:Nv,gradientmap_pars_fragment:Ov,lightmap_fragment:Fv,lightmap_pars_fragment:Bv,lights_lambert_fragment:zv,lights_lambert_pars_fragment:Hv,lights_pars_begin:Vv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Wv,lights_phong_fragment:Xv,lights_phong_pars_fragment:qv,lights_physical_fragment:Yv,lights_physical_pars_fragment:$v,lights_fragment_begin:jv,lights_fragment_maps:Kv,lights_fragment_end:Zv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:rx,map_particle_pars_fragment:sx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:ax,morphinstance_vertex:lx,morphcolor_vertex:cx,morphnormal_vertex:ux,morphtarget_pars_vertex:hx,morphtarget_vertex:fx,normal_fragment_begin:dx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:_x,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:Mx,opaque_fragment:Ex,packing:Tx,premultiplied_alpha_fragment:bx,project_vertex:Ax,dithering_fragment:wx,dithering_pars_fragment:Rx,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Dx,shadowmask_pars_fragment:Ux,skinbase_vertex:Nx,skinning_pars_vertex:Ox,skinning_vertex:Fx,skinnormal_vertex:Bx,specularmap_fragment:zx,specularmap_pars_fragment:Hx,tonemapping_fragment:Vx,tonemapping_pars_fragment:kx,transmission_fragment:Gx,transmission_pars_fragment:Wx,uv_pars_fragment:Xx,uv_pars_vertex:qx,uv_vertex:Yx,worldpos_vertex:$x,background_vert:jx,background_frag:Kx,backgroundCube_vert:Zx,backgroundCube_frag:Jx,cube_vert:Qx,cube_frag:ty,depth_vert:ey,depth_frag:ny,distanceRGBA_vert:iy,distanceRGBA_frag:ry,equirect_vert:sy,equirect_frag:oy,linedashed_vert:ay,linedashed_frag:ly,meshbasic_vert:cy,meshbasic_frag:uy,meshlambert_vert:hy,meshlambert_frag:fy,meshmatcap_vert:dy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:_y,meshphong_frag:vy,meshphysical_vert:xy,meshphysical_frag:yy,meshtoon_vert:Sy,meshtoon_frag:My,points_vert:Ey,points_frag:Ty,shadow_vert:by,shadow_frag:Ay,sprite_vert:wy,sprite_frag:Ry},yt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},cn={basic:{uniforms:Re([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([yt.points,yt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([yt.common,yt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([yt.sprite,yt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([yt.common,yt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([yt.lights,yt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};cn.physical={uniforms:Re([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ds={r:0,b:0,g:0},hi=new gn,Cy=new te;function Py(n,t,e,i,r,s,o){const a=new Ft(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function x(d,p){let w=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),w=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===So)?(u===void 0&&(u=new ve(new rs(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:hr(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hi.copy(p.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(hi)),u.material.toneMapped=Kt.getTransfer(_.colorSpace)!==Qt,(h!==_||f!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ve(new mn(2,2),new Qn({name:"BackgroundMaterial",uniforms:hr(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(_.colorSpace)!==Qt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function v(d,p){d.getRGB(Ds,Zf(n)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,v(a,l)},render:x}}function Ly(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(T,Z,K,W,tt){let ot=!1;const st=h(W,K,Z);s!==st&&(s=st,c(s.object)),ot=m(T,W,K,tt),ot&&x(T,W,K,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,A(T,Z,K,W),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function h(T,Z,K){const W=K.wireframe===!0;let tt=i[T.id];tt===void 0&&(tt={},i[T.id]=tt);let ot=tt[Z.id];ot===void 0&&(ot={},tt[Z.id]=ot);let st=ot[W];return st===void 0&&(st=f(l()),ot[W]=st),st}function f(T){const Z=[],K=[],W=[];for(let tt=0;tt<e;tt++)Z[tt]=0,K[tt]=0,W[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:K,attributeDivisors:W,object:T,attributes:{},index:null}}function m(T,Z,K,W){const tt=s.attributes,ot=Z.attributes;let st=0;const nt=K.getAttributes();for(const B in nt)if(nt[B].location>=0){const ht=tt[B];let vt=ot[B];if(vt===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(vt=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(vt=T.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;st++}return s.attributesNum!==st||s.index!==W}function x(T,Z,K,W){const tt={},ot=Z.attributes;let st=0;const nt=K.getAttributes();for(const B in nt)if(nt[B].location>=0){let ht=ot[B];ht===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ht=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ht=T.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),tt[B]=vt,st++}s.attributes=tt,s.attributesNum=st,s.index=W}function v(){const T=s.newAttributes;for(let Z=0,K=T.length;Z<K;Z++)T[Z]=0}function d(T){p(T,0)}function p(T,Z){const K=s.newAttributes,W=s.enabledAttributes,tt=s.attributeDivisors;K[T]=1,W[T]===0&&(n.enableVertexAttribArray(T),W[T]=1),tt[T]!==Z&&(n.vertexAttribDivisor(T,Z),tt[T]=Z)}function w(){const T=s.newAttributes,Z=s.enabledAttributes;for(let K=0,W=Z.length;K<W;K++)Z[K]!==T[K]&&(n.disableVertexAttribArray(K),Z[K]=0)}function _(T,Z,K,W,tt,ot,st){st===!0?n.vertexAttribIPointer(T,Z,K,tt,ot):n.vertexAttribPointer(T,Z,K,W,tt,ot)}function A(T,Z,K,W){v();const tt=W.attributes,ot=K.getAttributes(),st=Z.defaultAttributeValues;for(const nt in ot){const B=ot[nt];if(B.location>=0){let ft=tt[nt];if(ft===void 0&&(nt==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),nt==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const ht=ft.normalized,vt=ft.itemSize,bt=t.get(ft);if(bt===void 0)continue;const Gt=bt.buffer,N=bt.type,D=bt.bytesPerElement,C=N===n.INT||N===n.UNSIGNED_INT||ft.gpuType===Uf;if(ft.isInterleavedBufferAttribute){const y=ft.data,k=y.stride,$=ft.offset;if(y.isInstancedInterleavedBuffer){for(let V=0;V<B.locationSize;V++)p(B.location+V,y.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=y.meshPerAttribute*y.count)}else for(let V=0;V<B.locationSize;V++)d(B.location+V);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let V=0;V<B.locationSize;V++)_(B.location+V,vt/B.locationSize,N,ht,k*D,($+vt/B.locationSize*V)*D,C)}else{if(ft.isInstancedBufferAttribute){for(let y=0;y<B.locationSize;y++)p(B.location+y,ft.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let y=0;y<B.locationSize;y++)d(B.location+y);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let y=0;y<B.locationSize;y++)_(B.location+y,vt/B.locationSize,N,ht,vt*D,vt/B.locationSize*y*D,C)}}else if(st!==void 0){const ht=st[nt];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(B.location,ht);break;case 3:n.vertexAttrib3fv(B.location,ht);break;case 4:n.vertexAttrib4fv(B.location,ht);break;default:n.vertexAttrib1fv(B.location,ht)}}}}w()}function H(){Y();for(const T in i){const Z=i[T];for(const K in Z){const W=Z[K];for(const tt in W)u(W[tt].object),delete W[tt];delete Z[K]}delete i[T]}}function L(T){if(i[T.id]===void 0)return;const Z=i[T.id];for(const K in Z){const W=Z[K];for(const tt in W)u(W[tt].object),delete W[tt];delete Z[K]}delete i[T.id]}function U(T){for(const Z in i){const K=i[Z];if(K[T.id]===void 0)continue;const W=K[T.id];for(const tt in W)u(W[tt].object),delete W[tt];delete K[T.id]}}function Y(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:Y,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:d,disableUnusedAttributes:w}}function Iy(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Dy(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=e.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),d=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:d,vertexTextures:p,maxSamples:w}}function Uy(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new pi,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,v=h.clipIntersection,d=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||s&&!d)s?u(null):c();else{const w=s?0:i,_=w*4;let A=p.clippingState||null;l.value=A,A=u(x,f,_,m);for(let H=0;H!==_;++H)A[H]=e[H];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,x){const v=h!==null?h.length:0;let d=null;if(v!==0){if(d=l.value,x!==!0||d===null){const p=m+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<p)&&(d=new Float32Array(p));for(let _=0,A=m;_!==v;++_,A+=4)o.copy(h[_]).applyMatrix4(w,a),o.normal.toArray(d,A),d[A+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function Ny(n){let t=new WeakMap;function e(o,a){return a===Va?o.mapping=lr:a===ka&&(o.mapping=cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new X0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ed extends Jf{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,Cu=[.125,.215,.35,.446,.526,.582],vi=20,ha=new ed,Pu=new Ft;let fa=null,da=0,pa=0,ma=!1;const mi=(1+Math.sqrt(5))/2,Wi=1/mi,Lu=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,mi,Wi),new j(0,mi,-Wi),new j(Wi,0,mi),new j(-Wi,0,mi),new j(mi,Wi,0),new j(-mi,Wi,0)];class Iu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,da,pa),this._renderer.xr.enabled=ma,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:to,format:dn,colorSpace:ni,depthBuffer:!1},r=Du(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Oy(s)),this._blurMaterial=Fy(s,t,e)}return r}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,i,r){const a=new Ve(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pu),u.toneMapping=jn,u.autoClear=!1;const m=new oo({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),x=new ve(new rs,m);let v=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,v=!0):(m.color.copy(Pu),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Us(r,w*_,p>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===lr||t.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Us(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ha)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lu[(r-1)%Lu.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ve(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vi-1),v=s/x,d=isFinite(s)?1+Math.floor(u*v):vi;d>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${vi}`);const p=[];let w=0;for(let U=0;U<vi;++U){const Y=U/v,R=Math.exp(-Y*Y/2);p.push(R),U===0?w+=R:U<d&&(w+=2*R)}for(let U=0;U<p.length;U++)p[U]=p[U]/w;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const A=this._sizeLods[r],H=3*A*(r>_-$i?r-_+$i:0),L=4*(this._cubeSize-A);Us(e,H,L,3*A,2*A),l.setRenderTarget(e),l.render(h,ha)}}function Oy(n){const t=[],e=[],i=[];let r=n;const s=n-$i+1+Cu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-$i?l=Cu[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,v=3,d=2,p=1,w=new Float32Array(v*x*m),_=new Float32Array(d*x*m),A=new Float32Array(p*x*m);for(let L=0;L<m;L++){const U=L%3*2/3-1,Y=L>2?0:-1,R=[U,Y,0,U+2/3,Y,0,U+2/3,Y+1,0,U,Y,0,U+2/3,Y+1,0,U,Y+1,0];w.set(R,v*x*L),_.set(f,d*x*L);const T=[L,L,L,L,L,L];A.set(T,p*x*L)}const H=new en;H.setAttribute("position",new pn(w,v)),H.setAttribute("uv",new pn(_,d)),H.setAttribute("faceIndex",new pn(A,p)),t.push(H),r>$i&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Du(n,t,e){const i=new bi(n,t,e);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Fy(n,t,e){const i=new Float32Array(vi),r=new j(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Uu(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Nu(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function By(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===ka,u=l===lr||l===cr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Iu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Iu(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hy(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);for(const x in f.morphAttributes){const v=f.morphAttributes[x];for(let d=0,p=v.length;d<p;d++)t.remove(v[d])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)t.update(f[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let d=0,p=v.length;d<p;d++)t.update(v[d],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let _=0,A=w.length;_<A;_+=3){const H=w[_+0],L=w[_+1],U=w[_+2];f.push(H,L,L,U,U,H)}}else if(x!==void 0){const w=x.array;v=x.version;for(let _=0,A=w.length/3-1;_<A;_+=3){const H=_+0,L=_+1,U=_+2;f.push(H,L,L,U,U,H)}}else return;const d=new(Gf(f)?Kf:jf)(f,1);d.version=v;const p=s.get(h);p&&t.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Vy(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),e.update(f,i,1)}function c(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,h*o,m),e.update(f,i,m))}function u(h,f,m){if(m===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<m;v++)this.render(h[v]/o,f[v]);else{x.multiDrawElementsWEBGL(i,f,0,s,h,0,m);let v=0;for(let d=0;d<m;d++)v+=f[d];e.update(v,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ky(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Gy(n,t,e){const i=new WeakMap,r=new me;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let R=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),v===!0&&(_=3);let A=a.attributes.position.count*_,H=1;A>t.maxTextureSize&&(H=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const L=new Float32Array(A*H*4*h),U=new Xf(L,A,H,h);U.type=Xn,U.needsUpdate=!0;const Y=_*4;for(let T=0;T<h;T++){const Z=d[T],K=p[T],W=w[T],tt=A*H*4*T;for(let ot=0;ot<Z.count;ot++){const st=ot*Y;m===!0&&(r.fromBufferAttribute(Z,ot),L[tt+st+0]=r.x,L[tt+st+1]=r.y,L[tt+st+2]=r.z,L[tt+st+3]=0),x===!0&&(r.fromBufferAttribute(K,ot),L[tt+st+4]=r.x,L[tt+st+5]=r.y,L[tt+st+6]=r.z,L[tt+st+7]=0),v===!0&&(r.fromBufferAttribute(W,ot),L[tt+st+8]=r.x,L[tt+st+9]=r.y,L[tt+st+10]=r.z,L[tt+st+11]=W.itemSize===4?r.w:1)}}f={count:h,texture:U,size:new mt(A,H)},i.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Wy(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class nd extends De{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:tr,u!==tr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===tr&&(i=ur),i===void 0&&u===$r&&(i=ns),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const id=new De,rd=new nd(1,1);rd.compareFunction=kf;const sd=new Xf,od=new C0,ad=new Qf,Ou=[],Fu=[],Bu=new Float32Array(16),zu=new Float32Array(9),Hu=new Float32Array(4);function gr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ou[r];if(s===void 0&&(s=new Float32Array(r),Ou[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function he(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function To(n,t){let e=Fu[t];e===void 0&&(e=new Int32Array(t),Fu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2fv(this.addr,t),fe(e,t)}}function Yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;n.uniform3fv(this.addr,t),fe(e,t)}}function $y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4fv(this.addr,t),fe(e,t)}}function jy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),fe(e,i)}}function Ky(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;zu.set(i),n.uniformMatrix3fv(this.addr,!1,zu),fe(e,i)}}function Zy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Bu.set(i),n.uniformMatrix4fv(this.addr,!1,Bu),fe(e,i)}}function Jy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2iv(this.addr,t),fe(e,t)}}function tS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3iv(this.addr,t),fe(e,t)}}function eS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4iv(this.addr,t),fe(e,t)}}function nS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function iS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2uiv(this.addr,t),fe(e,t)}}function rS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3uiv(this.addr,t),fe(e,t)}}function sS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4uiv(this.addr,t),fe(e,t)}}function oS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?rd:id;e.setTexture2D(t||s,r)}function aS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||od,r)}function lS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ad,r)}function cS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||sd,r)}function uS(n){switch(n){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return $y;case 35674:return jy;case 35675:return Ky;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return Qy;case 35668:case 35672:return tS;case 35669:case 35673:return eS;case 5125:return nS;case 36294:return iS;case 36295:return rS;case 36296:return sS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}function hS(n,t){n.uniform1fv(this.addr,t)}function fS(n,t){const e=gr(t,this.size,2);n.uniform2fv(this.addr,e)}function dS(n,t){const e=gr(t,this.size,3);n.uniform3fv(this.addr,e)}function pS(n,t){const e=gr(t,this.size,4);n.uniform4fv(this.addr,e)}function mS(n,t){const e=gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gS(n,t){const e=gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _S(n,t){const e=gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vS(n,t){n.uniform1iv(this.addr,t)}function xS(n,t){n.uniform2iv(this.addr,t)}function yS(n,t){n.uniform3iv(this.addr,t)}function SS(n,t){n.uniform4iv(this.addr,t)}function MS(n,t){n.uniform1uiv(this.addr,t)}function ES(n,t){n.uniform2uiv(this.addr,t)}function TS(n,t){n.uniform3uiv(this.addr,t)}function bS(n,t){n.uniform4uiv(this.addr,t)}function AS(n,t,e){const i=this.cache,r=t.length,s=To(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||id,s[o])}function wS(n,t,e){const i=this.cache,r=t.length,s=To(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||od,s[o])}function RS(n,t,e){const i=this.cache,r=t.length,s=To(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ad,s[o])}function CS(n,t,e){const i=this.cache,r=t.length,s=To(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||sd,s[o])}function PS(n){switch(n){case 5126:return hS;case 35664:return fS;case 35665:return dS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return SS;case 5125:return MS;case 36294:return ES;case 36295:return TS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}class LS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uS(e.type)}}class IS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=PS(e.type)}}class DS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Vu(n,t){n.seq.push(t),n.map[t.id]=t}function US(n,t,e){const i=n.name,r=i.length;for(ga.lastIndex=0;;){const s=ga.exec(i),o=ga.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vu(e,c===void 0?new LS(a,n,t):new IS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new DS(a),Vu(e,h)),e=h}}}class Ys{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);US(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ku(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const NS=37297;let OS=0;function FS(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function BS(n){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(n);let i;switch(t===e?i="":t===io&&e===no?i="LinearDisplayP3ToLinearSRGB":t===no&&e===io&&(i="LinearSRGBToLinearDisplayP3"),n){case ni:case Mo:return[i,"LinearTransferOETF"];case $e:case vl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+FS(n.getShaderSource(t),o)}else return r}function zS(n,t){const e=BS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function HS(n,t){let e;switch(t){case D_:e="Linear";break;case U_:e="Reinhard";break;case N_:e="OptimizedCineon";break;case Lf:e="ACESFilmic";break;case F_:e="AgX";break;case B_:e="Neutral";break;case O_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function VS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function kS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function GS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function br(n){return n!==""}function Wu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const WS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(n){return n.replace(WS,qS)}const XS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qS(n,t){let e=zt[t];if(e===void 0){const i=XS.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xa(e)}const YS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(n){return n.replace(YS,$S)}function $S(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===s_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function KS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case cr:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ZS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:t="ENVMAP_MODE_REFRACTION";break}return t}function JS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _l:t="ENVMAP_BLENDING_MULTIPLY";break;case L_:t="ENVMAP_BLENDING_MIX";break;case I_:t="ENVMAP_BLENDING_ADD";break}return t}function QS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function tM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=jS(e),c=KS(e),u=ZS(e),h=JS(e),f=QS(e),m=VS(e),x=kS(s),v=r.createProgram();let d,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(br).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(br).join(`
`),p.length>0&&(p+=`
`)):(d=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?zt.tonemapping_pars_fragment:"",e.toneMapping!==jn?HS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,zS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=Xa(o),o=Wu(o,e),o=Xu(o,e),a=Xa(a),a=Wu(a,e),a=Xu(a,e),o=qu(o),a=qu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=w+d+o,A=w+p+a,H=ku(r,r.VERTEX_SHADER,_),L=ku(r,r.FRAGMENT_SHADER,A);r.attachShader(v,H),r.attachShader(v,L),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function U(Z){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(v).trim(),W=r.getShaderInfoLog(H).trim(),tt=r.getShaderInfoLog(L).trim();let ot=!0,st=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,H,L);else{const nt=Gu(r,H,"vertex"),B=Gu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+K+`
`+nt+`
`+B)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||tt==="")&&(st=!1);st&&(Z.diagnostics={runnable:ot,programLog:K,vertexShader:{log:W,prefix:d},fragmentShader:{log:tt,prefix:p}})}r.deleteShader(H),r.deleteShader(L),Y=new Ys(r,v),R=GS(r,v)}let Y;this.getUniforms=function(){return Y===void 0&&U(this),Y};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,NS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=L,this}let eM=0;class nM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new iM(t),e.set(t,i)),i}}class iM{constructor(t){this.id=eM++,this.code=t,this.usedTimes=0}}function rM(n,t,e,i,r,s,o){const a=new Yf,l=new nM,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(R){return c.add(R),R===0?"uv":`uv${R}`}function d(R,T,Z,K,W){const tt=K.fog,ot=W.geometry,st=R.isMeshStandardMaterial?K.environment:null,nt=(R.isMeshStandardMaterial?e:t).get(R.envMap||st),B=nt&&nt.mapping===So?nt.image.height:null,ft=x[R.type];R.precision!==null&&(m=r.getMaxPrecision(R.precision),m!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",m,"instead."));const ht=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,vt=ht!==void 0?ht.length:0;let bt=0;ot.morphAttributes.position!==void 0&&(bt=1),ot.morphAttributes.normal!==void 0&&(bt=2),ot.morphAttributes.color!==void 0&&(bt=3);let Gt,N,D,C;if(ft){const Se=cn[ft];Gt=Se.vertexShader,N=Se.fragmentShader}else Gt=R.vertexShader,N=R.fragmentShader,l.update(R),D=l.getVertexShaderID(R),C=l.getFragmentShaderID(R);const y=n.getRenderTarget(),k=W.isInstancedMesh===!0,$=W.isBatchedMesh===!0,V=!!R.map,O=!!R.matcap,lt=!!nt,E=!!R.aoMap,b=!!R.lightMap,I=!!R.bumpMap,q=!!R.normalMap,M=!!R.displacementMap,g=!!R.emissiveMap,S=!!R.metalnessMap,F=!!R.roughnessMap,G=R.anisotropy>0,X=R.clearcoat>0,at=R.iridescence>0,Q=R.sheen>0,ct=R.transmission>0,dt=G&&!!R.anisotropyMap,ut=X&&!!R.clearcoatMap,pt=X&&!!R.clearcoatNormalMap,St=X&&!!R.clearcoatRoughnessMap,gt=at&&!!R.iridescenceMap,Mt=at&&!!R.iridescenceThicknessMap,It=Q&&!!R.sheenColorMap,Vt=Q&&!!R.sheenRoughnessMap,Wt=!!R.specularMap,Xt=!!R.specularColorMap,kt=!!R.specularIntensityMap,Tt=ct&&!!R.transmissionMap,z=ct&&!!R.thicknessMap,xt=!!R.gradientMap,_t=!!R.alphaMap,wt=R.alphaTest>0,Rt=!!R.alphaHash,Zt=!!R.extensions;let ee=jn;R.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ee=n.toneMapping);const re={shaderID:ft,shaderType:R.type,shaderName:R.name,vertexShader:Gt,fragmentShader:N,defines:R.defines,customVertexShaderID:D,customFragmentShaderID:C,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:m,batching:$,instancing:k,instancingColor:k&&W.instanceColor!==null,instancingMorph:k&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:y===null?n.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:ni,alphaToCoverage:!!R.alphaToCoverage,map:V,matcap:O,envMap:lt,envMapMode:lt&&nt.mapping,envMapCubeUVHeight:B,aoMap:E,lightMap:b,bumpMap:I,normalMap:q,displacementMap:f&&M,emissiveMap:g,normalMapObjectSpace:q&&R.normalMapType===J_,normalMapTangentSpace:q&&R.normalMapType===Vf,metalnessMap:S,roughnessMap:F,anisotropy:G,anisotropyMap:dt,clearcoat:X,clearcoatMap:ut,clearcoatNormalMap:pt,clearcoatRoughnessMap:St,iridescence:at,iridescenceMap:gt,iridescenceThicknessMap:Mt,sheen:Q,sheenColorMap:It,sheenRoughnessMap:Vt,specularMap:Wt,specularColorMap:Xt,specularIntensityMap:kt,transmission:ct,transmissionMap:Tt,thicknessMap:z,gradientMap:xt,opaque:R.transparent===!1&&R.blending===Qi&&R.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Rt,combine:R.combine,mapUv:V&&v(R.map.channel),aoMapUv:E&&v(R.aoMap.channel),lightMapUv:b&&v(R.lightMap.channel),bumpMapUv:I&&v(R.bumpMap.channel),normalMapUv:q&&v(R.normalMap.channel),displacementMapUv:M&&v(R.displacementMap.channel),emissiveMapUv:g&&v(R.emissiveMap.channel),metalnessMapUv:S&&v(R.metalnessMap.channel),roughnessMapUv:F&&v(R.roughnessMap.channel),anisotropyMapUv:dt&&v(R.anisotropyMap.channel),clearcoatMapUv:ut&&v(R.clearcoatMap.channel),clearcoatNormalMapUv:pt&&v(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&v(R.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(R.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&v(R.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(R.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&v(R.sheenRoughnessMap.channel),specularMapUv:Wt&&v(R.specularMap.channel),specularColorMapUv:Xt&&v(R.specularColorMap.channel),specularIntensityMapUv:kt&&v(R.specularIntensityMap.channel),transmissionMapUv:Tt&&v(R.transmissionMap.channel),thicknessMapUv:z&&v(R.thicknessMap.channel),alphaMapUv:_t&&v(R.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(q||G),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ot.attributes.uv&&(V||_t),fog:!!tt,useFog:R.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:bt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,useLegacyLights:n._useLegacyLights,decodeVideoTexture:V&&R.map.isVideoTexture===!0&&Kt.getTransfer(R.map.colorSpace)===Qt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ke,flipSided:R.side===Ie,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Zt&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Zt&&R.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function p(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const Z in R.defines)T.push(Z),T.push(R.defines[Z]);return R.isRawShaderMaterial===!1&&(w(T,R),_(T,R),T.push(n.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function w(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function _(R,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),R.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),R.push(a.mask)}function A(R){const T=x[R.type];let Z;if(T){const K=cn[T];Z=V0.clone(K.uniforms)}else Z=R.uniforms;return Z}function H(R,T){let Z;for(let K=0,W=u.length;K<W;K++){const tt=u[K];if(tt.cacheKey===T){Z=tt,++Z.usedTimes;break}}return Z===void 0&&(Z=new tM(n,T,R,s),u.push(Z)),Z}function L(R){if(--R.usedTimes===0){const T=u.indexOf(R);u[T]=u[u.length-1],u.pop(),R.destroy()}}function U(R){l.remove(R)}function Y(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:A,acquireProgram:H,releaseProgram:L,releaseShaderCache:U,programs:u,dispose:Y}}function sM(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function oM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ju(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,m,x,v,d){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:d},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=v,p.group=d),t++,p}function a(h,f,m,x,v,d){const p=o(h,f,m,x,v,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(h,f,m,x,v,d){const p=o(h,f,m,x,v,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||oM),i.length>1&&i.sort(f||$u),r.length>1&&r.sort(f||$u)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function aM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new ju,n.set(i,[o])):r>=s.length?(o=new ju,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function lM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new Ft};break;case"SpotLight":e={position:new j,direction:new j,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function cM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let uM=0;function hM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fM(n){const t=new lM,e=cM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new te,o=new te;function a(c,u){let h=0,f=0,m=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let x=0,v=0,d=0,p=0,w=0,_=0,A=0,H=0,L=0,U=0,Y=0;c.sort(hM);const R=u===!0?Math.PI:1;for(let Z=0,K=c.length;Z<K;Z++){const W=c[Z],tt=W.color,ot=W.intensity,st=W.distance,nt=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)h+=tt.r*ot*R,f+=tt.g*ot*R,m+=tt.b*ot*R;else if(W.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(W.sh.coefficients[B],ot);Y++}else if(W.isDirectionalLight){const B=t.get(W);if(B.color.copy(W.color).multiplyScalar(W.intensity*R),W.castShadow){const ft=W.shadow,ht=e.get(W);ht.shadowBias=ft.bias,ht.shadowNormalBias=ft.normalBias,ht.shadowRadius=ft.radius,ht.shadowMapSize=ft.mapSize,i.directionalShadow[x]=ht,i.directionalShadowMap[x]=nt,i.directionalShadowMatrix[x]=W.shadow.matrix,_++}i.directional[x]=B,x++}else if(W.isSpotLight){const B=t.get(W);B.position.setFromMatrixPosition(W.matrixWorld),B.color.copy(tt).multiplyScalar(ot*R),B.distance=st,B.coneCos=Math.cos(W.angle),B.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),B.decay=W.decay,i.spot[d]=B;const ft=W.shadow;if(W.map&&(i.spotLightMap[L]=W.map,L++,ft.updateMatrices(W),W.castShadow&&U++),i.spotLightMatrix[d]=ft.matrix,W.castShadow){const ht=e.get(W);ht.shadowBias=ft.bias,ht.shadowNormalBias=ft.normalBias,ht.shadowRadius=ft.radius,ht.shadowMapSize=ft.mapSize,i.spotShadow[d]=ht,i.spotShadowMap[d]=nt,H++}d++}else if(W.isRectAreaLight){const B=t.get(W);B.color.copy(tt).multiplyScalar(ot),B.halfWidth.set(W.width*.5,0,0),B.halfHeight.set(0,W.height*.5,0),i.rectArea[p]=B,p++}else if(W.isPointLight){const B=t.get(W);if(B.color.copy(W.color).multiplyScalar(W.intensity*R),B.distance=W.distance,B.decay=W.decay,W.castShadow){const ft=W.shadow,ht=e.get(W);ht.shadowBias=ft.bias,ht.shadowNormalBias=ft.normalBias,ht.shadowRadius=ft.radius,ht.shadowMapSize=ft.mapSize,ht.shadowCameraNear=ft.camera.near,ht.shadowCameraFar=ft.camera.far,i.pointShadow[v]=ht,i.pointShadowMap[v]=nt,i.pointShadowMatrix[v]=W.shadow.matrix,A++}i.point[v]=B,v++}else if(W.isHemisphereLight){const B=t.get(W);B.skyColor.copy(W.color).multiplyScalar(ot*R),B.groundColor.copy(W.groundColor).multiplyScalar(ot*R),i.hemi[w]=B,w++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=m;const T=i.hash;(T.directionalLength!==x||T.pointLength!==v||T.spotLength!==d||T.rectAreaLength!==p||T.hemiLength!==w||T.numDirectionalShadows!==_||T.numPointShadows!==A||T.numSpotShadows!==H||T.numSpotMaps!==L||T.numLightProbes!==Y)&&(i.directional.length=x,i.spot.length=d,i.rectArea.length=p,i.point.length=v,i.hemi.length=w,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=H,i.spotShadowMap.length=H,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=H+L-U,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=Y,T.directionalLength=x,T.pointLength=v,T.spotLength=d,T.rectAreaLength=p,T.hemiLength=w,T.numDirectionalShadows=_,T.numPointShadows=A,T.numSpotShadows=H,T.numSpotMaps=L,T.numLightProbes=Y,i.version=uM++)}function l(c,u){let h=0,f=0,m=0,x=0,v=0;const d=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const _=c[p];if(_.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),h++}else if(_.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),m++}else if(_.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),o.identity(),s.copy(_.matrixWorld),s.premultiply(d),o.extractRotation(s),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),f++}else if(_.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(d),v++}}}return{setup:a,setupView:l,state:i}}function Ku(n){const t=new fM(n),e=[],i=[];function r(){e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:r,state:{lightsArray:e,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dM(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ku(n),t.set(r,[a])):s>=o.length?(a=new Ku(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class pM extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mM extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
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
}`;function vM(n,t,e){let i=new yl;const r=new mt,s=new mt,o=new me,a=new pM({depthPacking:Z_}),l=new mM,c={},u=e.maxTextureSize,h={[Jn]:Ie,[Ie]:Jn,[Ke]:Ke},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:gM,fragmentShader:_M}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new en;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ve(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf;let p=this.type;this.render=function(L,U,Y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||L.length===0)return;const R=n.getRenderTarget(),T=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),K=n.state;K.setBlending($n),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=p!==an&&this.type===an,tt=p===an&&this.type!==an;for(let ot=0,st=L.length;ot<st;ot++){const nt=L[ot],B=nt.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ft=B.getFrameExtents();if(r.multiply(ft),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ft.x),r.x=s.x*ft.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ft.y),r.y=s.y*ft.y,B.mapSize.y=s.y)),B.map===null||W===!0||tt===!0){const vt=this.type!==an?{minFilter:Ge,magFilter:Ge}:{};B.map!==null&&B.map.dispose(),B.map=new bi(r.x,r.y,vt),B.map.texture.name=nt.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ht=B.getViewportCount();for(let vt=0;vt<ht;vt++){const bt=B.getViewport(vt);o.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),K.viewport(o),B.updateMatrices(nt,vt),i=B.getFrustum(),A(U,Y,B.camera,nt,this.type)}B.isPointLightShadow!==!0&&this.type===an&&w(B,Y),B.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(R,T,Z)};function w(L,U){const Y=t.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(U,null,Y,f,v,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(U,null,Y,m,v,null)}function _(L,U,Y,R){let T=null;const Z=Y.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Z!==void 0)T=Z;else if(T=Y.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const K=T.uuid,W=U.uuid;let tt=c[K];tt===void 0&&(tt={},c[K]=tt);let ot=tt[W];ot===void 0&&(ot=T.clone(),tt[W]=ot,U.addEventListener("dispose",H)),T=ot}if(T.visible=U.visible,T.wireframe=U.wireframe,R===an?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:h[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,Y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=n.properties.get(T);K.light=Y}return T}function A(L,U,Y,R,T){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===an)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld);const W=t.update(L),tt=L.material;if(Array.isArray(tt)){const ot=W.groups;for(let st=0,nt=ot.length;st<nt;st++){const B=ot[st],ft=tt[B.materialIndex];if(ft&&ft.visible){const ht=_(L,ft,R,T);L.onBeforeShadow(n,L,U,Y,W,ht,B),n.renderBufferDirect(Y,null,W,ht,L,B),L.onAfterShadow(n,L,U,Y,W,ht,B)}}}else if(tt.visible){const ot=_(L,tt,R,T);L.onBeforeShadow(n,L,U,Y,W,ot,null),n.renderBufferDirect(Y,null,W,ot,L,null),L.onAfterShadow(n,L,U,Y,W,ot,null)}}const K=L.children;for(let W=0,tt=K.length;W<tt;W++)A(K[W],U,Y,R,T)}function H(L){L.target.removeEventListener("dispose",H);for(const Y in c){const R=c[Y],T=L.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function xM(n){function t(){let z=!1;const xt=new me;let _t=null;const wt=new me(0,0,0,0);return{setMask:function(Rt){_t!==Rt&&!z&&(n.colorMask(Rt,Rt,Rt,Rt),_t=Rt)},setLocked:function(Rt){z=Rt},setClear:function(Rt,Zt,ee,re,Se){Se===!0&&(Rt*=re,Zt*=re,ee*=re),xt.set(Rt,Zt,ee,re),wt.equals(xt)===!1&&(n.clearColor(Rt,Zt,ee,re),wt.copy(xt))},reset:function(){z=!1,_t=null,wt.set(-1,0,0,0)}}}function e(){let z=!1,xt=null,_t=null,wt=null;return{setTest:function(Rt){Rt?C(n.DEPTH_TEST):y(n.DEPTH_TEST)},setMask:function(Rt){xt!==Rt&&!z&&(n.depthMask(Rt),xt=Rt)},setFunc:function(Rt){if(_t!==Rt){switch(Rt){case T_:n.depthFunc(n.NEVER);break;case b_:n.depthFunc(n.ALWAYS);break;case A_:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case w_:n.depthFunc(n.EQUAL);break;case R_:n.depthFunc(n.GEQUAL);break;case C_:n.depthFunc(n.GREATER);break;case P_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Rt}},setLocked:function(Rt){z=Rt},setClear:function(Rt){wt!==Rt&&(n.clearDepth(Rt),wt=Rt)},reset:function(){z=!1,xt=null,_t=null,wt=null}}}function i(){let z=!1,xt=null,_t=null,wt=null,Rt=null,Zt=null,ee=null,re=null,Se=null;return{setTest:function(Jt){z||(Jt?C(n.STENCIL_TEST):y(n.STENCIL_TEST))},setMask:function(Jt){xt!==Jt&&!z&&(n.stencilMask(Jt),xt=Jt)},setFunc:function(Jt,nn,rn){(_t!==Jt||wt!==nn||Rt!==rn)&&(n.stencilFunc(Jt,nn,rn),_t=Jt,wt=nn,Rt=rn)},setOp:function(Jt,nn,rn){(Zt!==Jt||ee!==nn||re!==rn)&&(n.stencilOp(Jt,nn,rn),Zt=Jt,ee=nn,re=rn)},setLocked:function(Jt){z=Jt},setClear:function(Jt){Se!==Jt&&(n.clearStencil(Jt),Se=Jt)},reset:function(){z=!1,xt=null,_t=null,wt=null,Rt=null,Zt=null,ee=null,re=null,Se=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,x=!1,v=null,d=null,p=null,w=null,_=null,A=null,H=null,L=new Ft(0,0,0),U=0,Y=!1,R=null,T=null,Z=null,K=null,W=null;const tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,st=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(nt)[1]),ot=st>=1):nt.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),ot=st>=2);let B=null,ft={};const ht=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),bt=new me().fromArray(ht),Gt=new me().fromArray(vt);function N(z,xt,_t,wt){const Rt=new Uint8Array(4),Zt=n.createTexture();n.bindTexture(z,Zt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<_t;ee++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(xt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Zt}const D={};D[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),D[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),D[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),C(n.DEPTH_TEST),s.setFunc(Qs),I(!1),q(Lc),C(n.CULL_FACE),E($n);function C(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function y(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function k(z,xt){return u[z]!==xt?(n.bindFramebuffer(z,xt),u[z]=xt,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=xt),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function $(z,xt){let _t=f,wt=!1;if(z){_t=h.get(xt),_t===void 0&&(_t=[],h.set(xt,_t));const Rt=z.textures;if(_t.length!==Rt.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let Zt=0,ee=Rt.length;Zt<ee;Zt++)_t[Zt]=n.COLOR_ATTACHMENT0+Zt;_t.length=Rt.length,wt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,wt=!0);wt&&n.drawBuffers(_t)}function V(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const O={[_i]:n.FUNC_ADD,[a_]:n.FUNC_SUBTRACT,[l_]:n.FUNC_REVERSE_SUBTRACT};O[c_]=n.MIN,O[u_]=n.MAX;const lt={[h_]:n.ZERO,[f_]:n.ONE,[d_]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[x_]:n.SRC_ALPHA_SATURATE,[__]:n.DST_COLOR,[m_]:n.DST_ALPHA,[p_]:n.ONE_MINUS_SRC_COLOR,[Ha]:n.ONE_MINUS_SRC_ALPHA,[v_]:n.ONE_MINUS_DST_COLOR,[g_]:n.ONE_MINUS_DST_ALPHA,[y_]:n.CONSTANT_COLOR,[S_]:n.ONE_MINUS_CONSTANT_COLOR,[M_]:n.CONSTANT_ALPHA,[E_]:n.ONE_MINUS_CONSTANT_ALPHA};function E(z,xt,_t,wt,Rt,Zt,ee,re,Se,Jt){if(z===$n){x===!0&&(y(n.BLEND),x=!1);return}if(x===!1&&(C(n.BLEND),x=!0),z!==o_){if(z!==v||Jt!==Y){if((d!==_i||_!==_i)&&(n.blendEquation(n.FUNC_ADD),d=_i,_=_i),Jt)switch(z){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ic:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ic:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,w=null,A=null,H=null,L.set(0,0,0),U=0,v=z,Y=Jt}return}Rt=Rt||xt,Zt=Zt||_t,ee=ee||wt,(xt!==d||Rt!==_)&&(n.blendEquationSeparate(O[xt],O[Rt]),d=xt,_=Rt),(_t!==p||wt!==w||Zt!==A||ee!==H)&&(n.blendFuncSeparate(lt[_t],lt[wt],lt[Zt],lt[ee]),p=_t,w=wt,A=Zt,H=ee),(re.equals(L)===!1||Se!==U)&&(n.blendColor(re.r,re.g,re.b,Se),L.copy(re),U=Se),v=z,Y=!1}function b(z,xt){z.side===Ke?y(n.CULL_FACE):C(n.CULL_FACE);let _t=z.side===Ie;xt&&(_t=!_t),I(_t),z.blending===Qi&&z.transparent===!1?E($n):E(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const wt=z.stencilWrite;o.setTest(wt),wt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),g(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?C(n.SAMPLE_ALPHA_TO_COVERAGE):y(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(z){R!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),R=z)}function q(z){z!==i_?(C(n.CULL_FACE),z!==T&&(z===Lc?n.cullFace(n.BACK):z===r_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):y(n.CULL_FACE),T=z}function M(z){z!==Z&&(ot&&n.lineWidth(z),Z=z)}function g(z,xt,_t){z?(C(n.POLYGON_OFFSET_FILL),(K!==xt||W!==_t)&&(n.polygonOffset(xt,_t),K=xt,W=_t)):y(n.POLYGON_OFFSET_FILL)}function S(z){z?C(n.SCISSOR_TEST):y(n.SCISSOR_TEST)}function F(z){z===void 0&&(z=n.TEXTURE0+tt-1),B!==z&&(n.activeTexture(z),B=z)}function G(z,xt,_t){_t===void 0&&(B===null?_t=n.TEXTURE0+tt-1:_t=B);let wt=ft[_t];wt===void 0&&(wt={type:void 0,texture:void 0},ft[_t]=wt),(wt.type!==z||wt.texture!==xt)&&(B!==_t&&(n.activeTexture(_t),B=_t),n.bindTexture(z,xt||D[z]),wt.type=z,wt.texture=xt)}function X(){const z=ft[B];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function at(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(z){bt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),bt.copy(z))}function Wt(z){Gt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Gt.copy(z))}function Xt(z,xt){let _t=l.get(xt);_t===void 0&&(_t=new WeakMap,l.set(xt,_t));let wt=_t.get(z);wt===void 0&&(wt=n.getUniformBlockIndex(xt,z.name),_t.set(z,wt))}function kt(z,xt){const wt=l.get(xt).get(z);a.get(xt)!==wt&&(n.uniformBlockBinding(xt,wt,z.__bindingPointIndex),a.set(xt,wt))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},B=null,ft={},u={},h=new WeakMap,f=[],m=null,x=!1,v=null,d=null,p=null,w=null,_=null,A=null,H=null,L=new Ft(0,0,0),U=0,Y=!1,R=null,T=null,Z=null,K=null,W=null,bt.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:C,disable:y,bindFramebuffer:k,drawBuffers:$,useProgram:V,setBlending:E,setMaterial:b,setFlipSided:I,setCullFace:q,setLineWidth:M,setPolygonOffset:g,setScissorTest:S,activeTexture:F,bindTexture:G,unbindTexture:X,compressedTexImage2D:at,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:It,updateUBOMapping:Xt,uniformBlockBinding:kt,texStorage2D:St,texStorage3D:gt,texSubImage2D:ct,texSubImage3D:dt,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:Vt,viewport:Wt,reset:Tt}}function yM(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,g){return m?new OffscreenCanvas(M,g):so("canvas")}function v(M,g,S){let F=1;const G=q(M);if((G.width>S||G.height>S)&&(F=S/Math.max(G.width,G.height)),F<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const X=Math.floor(F*G.width),at=Math.floor(F*G.height);h===void 0&&(h=x(X,at));const Q=g?x(X,at):h;return Q.width=X,Q.height=at,Q.getContext("2d").drawImage(M,0,0,X,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+X+"x"+at+")."),Q}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),M;return M}function d(M){return M.generateMipmaps&&M.minFilter!==Ge&&M.minFilter!==Ze}function p(M){n.generateMipmap(M)}function w(M,g,S,F,G=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===n.RED&&(S===n.FLOAT&&(X=n.R32F),S===n.HALF_FLOAT&&(X=n.R16F),S===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(S===n.UNSIGNED_BYTE&&(X=n.R8UI),S===n.UNSIGNED_SHORT&&(X=n.R16UI),S===n.UNSIGNED_INT&&(X=n.R32UI),S===n.BYTE&&(X=n.R8I),S===n.SHORT&&(X=n.R16I),S===n.INT&&(X=n.R32I)),g===n.RG&&(S===n.FLOAT&&(X=n.RG32F),S===n.HALF_FLOAT&&(X=n.RG16F),S===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(S===n.UNSIGNED_BYTE&&(X=n.RG8UI),S===n.UNSIGNED_SHORT&&(X=n.RG16UI),S===n.UNSIGNED_INT&&(X=n.RG32UI),S===n.BYTE&&(X=n.RG8I),S===n.SHORT&&(X=n.RG16I),S===n.INT&&(X=n.RG32I)),g===n.RGB&&S===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const at=G?eo:Kt.getTransfer(F);S===n.FLOAT&&(X=n.RGBA32F),S===n.HALF_FLOAT&&(X=n.RGBA16F),S===n.UNSIGNED_BYTE&&(X=at===Qt?n.SRGB8_ALPHA8:n.RGBA8),S===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),S===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(M,g){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ge&&M.minFilter!==Ze?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function A(M){const g=M.target;g.removeEventListener("dispose",A),L(g),g.isVideoTexture&&u.delete(g)}function H(M){const g=M.target;g.removeEventListener("dispose",H),Y(g)}function L(M){const g=i.get(M);if(g.__webglInit===void 0)return;const S=M.source,F=f.get(S);if(F){const G=F[g.__cacheKey];G.usedTimes--,G.usedTimes===0&&U(M),Object.keys(F).length===0&&f.delete(S)}i.remove(M)}function U(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const S=M.source,F=f.get(S);delete F[g.__cacheKey],o.memory.textures--}function Y(M){const g=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(g.__webglFramebuffer[F]))for(let G=0;G<g.__webglFramebuffer[F].length;G++)n.deleteFramebuffer(g.__webglFramebuffer[F][G]);else n.deleteFramebuffer(g.__webglFramebuffer[F]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[F])}else{if(Array.isArray(g.__webglFramebuffer))for(let F=0;F<g.__webglFramebuffer.length;F++)n.deleteFramebuffer(g.__webglFramebuffer[F]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let F=0;F<g.__webglColorRenderbuffer.length;F++)g.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[F]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const S=M.textures;for(let F=0,G=S.length;F<G;F++){const X=i.get(S[F]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(S[F])}i.remove(M)}let R=0;function T(){R=0}function Z(){const M=R;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),R+=1,M}function K(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function W(M,g){const S=i.get(M);if(M.isVideoTexture&&b(M),M.isRenderTargetTexture===!1&&M.version>0&&S.__version!==M.version){const F=M.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(S,M,g);return}}e.bindTexture(n.TEXTURE_2D,S.__webglTexture,n.TEXTURE0+g)}function tt(M,g){const S=i.get(M);if(M.version>0&&S.__version!==M.version){bt(S,M,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,S.__webglTexture,n.TEXTURE0+g)}function ot(M,g){const S=i.get(M);if(M.version>0&&S.__version!==M.version){bt(S,M,g);return}e.bindTexture(n.TEXTURE_3D,S.__webglTexture,n.TEXTURE0+g)}function st(M,g){const S=i.get(M);if(M.version>0&&S.__version!==M.version){Gt(S,M,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+g)}const nt={[Ga]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},B={[Ge]:n.NEAREST,[z_]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},ft={[Q_]:n.NEVER,[s0]:n.ALWAYS,[t0]:n.LESS,[kf]:n.LEQUAL,[e0]:n.EQUAL,[r0]:n.GEQUAL,[n0]:n.GREATER,[i0]:n.NOTEQUAL};function ht(M,g){if(g.type===Xn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ze||g.magFilter===Vo||g.magFilter===ds||g.magFilter===yi||g.minFilter===Ze||g.minFilter===Vo||g.minFilter===ds||g.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,nt[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,nt[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,nt[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,B[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,B[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ft[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ge||g.minFilter!==ds&&g.minFilter!==yi||g.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const S=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function vt(M,g){let S=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",A));const F=g.source;let G=f.get(F);G===void 0&&(G={},f.set(F,G));const X=K(g);if(X!==M.__cacheKey){G[X]===void 0&&(G[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,S=!0),G[X].usedTimes++;const at=G[M.__cacheKey];at!==void 0&&(G[M.__cacheKey].usedTimes--,at.usedTimes===0&&U(g)),M.__cacheKey=X,M.__webglTexture=G[X].texture}return S}function bt(M,g,S){let F=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(F=n.TEXTURE_3D);const G=vt(M,g),X=g.source;e.bindTexture(F,M.__webglTexture,n.TEXTURE0+S);const at=i.get(X);if(X.version!==at.__version||G===!0){e.activeTexture(n.TEXTURE0+S);const Q=Kt.getPrimaries(Kt.workingColorSpace),ct=g.colorSpace===Wn?null:Kt.getPrimaries(g.colorSpace),dt=g.colorSpace===Wn||Q===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let ut=v(g.image,!1,r.maxTextureSize);ut=I(g,ut);const pt=s.convert(g.format,g.colorSpace),St=s.convert(g.type);let gt=w(g.internalFormat,pt,St,g.colorSpace,g.isVideoTexture);ht(F,g);let Mt;const It=g.mipmaps,Vt=g.isVideoTexture!==!0&&gt!==Hf,Wt=at.__version===void 0||G===!0,Xt=X.dataReady,kt=_(g,ut);if(g.isDepthTexture)gt=n.DEPTH_COMPONENT16,g.type===Xn?gt=n.DEPTH_COMPONENT32F:g.type===ur?gt=n.DEPTH_COMPONENT24:g.type===ns&&(gt=n.DEPTH24_STENCIL8),Wt&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,gt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,gt,ut.width,ut.height,0,pt,St,null));else if(g.isDataTexture)if(It.length>0){Vt&&Wt&&e.texStorage2D(n.TEXTURE_2D,kt,gt,It[0].width,It[0].height);for(let Tt=0,z=It.length;Tt<z;Tt++)Mt=It[Tt],Vt?Xt&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,Mt.width,Mt.height,pt,St,Mt.data):e.texImage2D(n.TEXTURE_2D,Tt,gt,Mt.width,Mt.height,0,pt,St,Mt.data);g.generateMipmaps=!1}else Vt?(Wt&&e.texStorage2D(n.TEXTURE_2D,kt,gt,ut.width,ut.height),Xt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,pt,St,ut.data)):e.texImage2D(n.TEXTURE_2D,0,gt,ut.width,ut.height,0,pt,St,ut.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Vt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,gt,It[0].width,It[0].height,ut.depth);for(let Tt=0,z=It.length;Tt<z;Tt++)Mt=It[Tt],g.format!==dn?pt!==null?Vt?Xt&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,0,Mt.width,Mt.height,ut.depth,pt,Mt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Tt,gt,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Xt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Tt,0,0,0,Mt.width,Mt.height,ut.depth,pt,St,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Tt,gt,Mt.width,Mt.height,ut.depth,0,pt,St,Mt.data)}else{Vt&&Wt&&e.texStorage2D(n.TEXTURE_2D,kt,gt,It[0].width,It[0].height);for(let Tt=0,z=It.length;Tt<z;Tt++)Mt=It[Tt],g.format!==dn?pt!==null?Vt?Xt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Tt,0,0,Mt.width,Mt.height,pt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,Tt,gt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Xt&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,Mt.width,Mt.height,pt,St,Mt.data):e.texImage2D(n.TEXTURE_2D,Tt,gt,Mt.width,Mt.height,0,pt,St,Mt.data)}else if(g.isDataArrayTexture)Vt?(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,gt,ut.width,ut.height,ut.depth),Xt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,pt,St,ut.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,ut.width,ut.height,ut.depth,0,pt,St,ut.data);else if(g.isData3DTexture)Vt?(Wt&&e.texStorage3D(n.TEXTURE_3D,kt,gt,ut.width,ut.height,ut.depth),Xt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,pt,St,ut.data)):e.texImage3D(n.TEXTURE_3D,0,gt,ut.width,ut.height,ut.depth,0,pt,St,ut.data);else if(g.isFramebufferTexture){if(Wt)if(Vt)e.texStorage2D(n.TEXTURE_2D,kt,gt,ut.width,ut.height);else{let Tt=ut.width,z=ut.height;for(let xt=0;xt<kt;xt++)e.texImage2D(n.TEXTURE_2D,xt,gt,Tt,z,0,pt,St,null),Tt>>=1,z>>=1}}else if(It.length>0){if(Vt&&Wt){const Tt=q(It[0]);e.texStorage2D(n.TEXTURE_2D,kt,gt,Tt.width,Tt.height)}for(let Tt=0,z=It.length;Tt<z;Tt++)Mt=It[Tt],Vt?Xt&&e.texSubImage2D(n.TEXTURE_2D,Tt,0,0,pt,St,Mt):e.texImage2D(n.TEXTURE_2D,Tt,gt,pt,St,Mt);g.generateMipmaps=!1}else if(Vt){if(Wt){const Tt=q(ut);e.texStorage2D(n.TEXTURE_2D,kt,gt,Tt.width,Tt.height)}Xt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,St,ut)}else e.texImage2D(n.TEXTURE_2D,0,gt,pt,St,ut);d(g)&&p(F),at.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Gt(M,g,S){if(g.image.length!==6)return;const F=vt(M,g),G=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+S);const X=i.get(G);if(G.version!==X.__version||F===!0){e.activeTexture(n.TEXTURE0+S);const at=Kt.getPrimaries(Kt.workingColorSpace),Q=g.colorSpace===Wn?null:Kt.getPrimaries(g.colorSpace),ct=g.colorSpace===Wn||at===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const dt=g.isCompressedTexture||g.image[0].isCompressedTexture,ut=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let z=0;z<6;z++)!dt&&!ut?pt[z]=v(g.image[z],!0,r.maxCubemapSize):pt[z]=ut?g.image[z].image:g.image[z],pt[z]=I(g,pt[z]);const St=pt[0],gt=s.convert(g.format,g.colorSpace),Mt=s.convert(g.type),It=w(g.internalFormat,gt,Mt,g.colorSpace),Vt=g.isVideoTexture!==!0,Wt=X.__version===void 0||F===!0,Xt=G.dataReady;let kt=_(g,St);ht(n.TEXTURE_CUBE_MAP,g);let Tt;if(dt){Vt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,It,St.width,St.height);for(let z=0;z<6;z++){Tt=pt[z].mipmaps;for(let xt=0;xt<Tt.length;xt++){const _t=Tt[xt];g.format!==dn?gt!==null?Vt?Xt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?Xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt,0,0,_t.width,_t.height,gt,Mt,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt,It,_t.width,_t.height,0,gt,Mt,_t.data)}}}else{if(Tt=g.mipmaps,Vt&&Wt){Tt.length>0&&kt++;const z=q(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,It,z.width,z.height)}for(let z=0;z<6;z++)if(ut){Vt?Xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,pt[z].width,pt[z].height,gt,Mt,pt[z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,It,pt[z].width,pt[z].height,0,gt,Mt,pt[z].data);for(let xt=0;xt<Tt.length;xt++){const wt=Tt[xt].image[z].image;Vt?Xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt+1,0,0,wt.width,wt.height,gt,Mt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt+1,It,wt.width,wt.height,0,gt,Mt,wt.data)}}else{Vt?Xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,gt,Mt,pt[z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,It,gt,Mt,pt[z]);for(let xt=0;xt<Tt.length;xt++){const _t=Tt[xt];Vt?Xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt+1,0,0,gt,Mt,_t.image[z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt+1,It,gt,Mt,_t.image[z])}}}d(g)&&p(n.TEXTURE_CUBE_MAP),X.__version=G.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function N(M,g,S,F,G,X){const at=s.convert(S.format,S.colorSpace),Q=s.convert(S.type),ct=w(S.internalFormat,at,Q,S.colorSpace);if(!i.get(g).__hasExternalTextures){const ut=Math.max(1,g.width>>X),pt=Math.max(1,g.height>>X);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,X,ct,ut,pt,g.depth,0,at,Q,null):e.texImage2D(G,X,ct,ut,pt,0,at,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),E(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,G,i.get(S).__webglTexture,0,lt(g)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,G,i.get(S).__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function D(M,g,S){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let F=n.DEPTH_COMPONENT24;if(S||E(g)){const G=g.depthTexture;G&&G.isDepthTexture&&(G.type===Xn?F=n.DEPTH_COMPONENT32F:G.type===ur&&(F=n.DEPTH_COMPONENT24));const X=lt(g);E(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,F,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,F,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,F,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const F=lt(g);S&&E(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,g.width,g.height):E(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const F=g.textures;for(let G=0;G<F.length;G++){const X=F[G],at=s.convert(X.format,X.colorSpace),Q=s.convert(X.type),ct=w(X.internalFormat,at,Q,X.colorSpace),dt=lt(g);S&&E(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,ct,g.width,g.height):E(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,ct,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ct,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const F=i.get(g.depthTexture).__webglTexture,G=lt(g);if(g.depthTexture.format===tr)E(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(g.depthTexture.format===$r)E(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function y(M){const g=i.get(M),S=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");C(g.__webglFramebuffer,M)}else if(S){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]=n.createRenderbuffer(),D(g.__webglDepthbuffer[F],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),D(g.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function k(M,g,S){const F=i.get(M);g!==void 0&&N(F.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),S!==void 0&&y(M)}function $(M){const g=M.texture,S=i.get(M),F=i.get(g);M.addEventListener("dispose",H);const G=M.textures,X=M.isWebGLCubeRenderTarget===!0,at=G.length>1;if(at||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=g.version,o.memory.textures++),X){S.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){S.__webglFramebuffer[Q]=[];for(let ct=0;ct<g.mipmaps.length;ct++)S.__webglFramebuffer[Q][ct]=n.createFramebuffer()}else S.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){S.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)S.__webglFramebuffer[Q]=n.createFramebuffer()}else S.__webglFramebuffer=n.createFramebuffer();if(at)for(let Q=0,ct=G.length;Q<ct;Q++){const dt=i.get(G[Q]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&E(M)===!1){S.__webglMultisampledFramebuffer=n.createFramebuffer(),S.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let Q=0;Q<G.length;Q++){const ct=G[Q];S.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,S.__webglColorRenderbuffer[Q]);const dt=s.convert(ct.format,ct.colorSpace),ut=s.convert(ct.type),pt=w(ct.internalFormat,dt,ut,ct.colorSpace,M.isXRRenderTarget===!0),St=lt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,pt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,S.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(S.__webglDepthRenderbuffer=n.createRenderbuffer(),D(S.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),ht(n.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)N(S.__webglFramebuffer[Q][ct],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ct);else N(S.__webglFramebuffer[Q],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Q=0,ct=G.length;Q<ct;Q++){const dt=G[Q],ut=i.get(dt);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),ht(n.TEXTURE_2D,dt),N(S.__webglFramebuffer,M,dt,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),d(dt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Q=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,F.__webglTexture),ht(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)N(S.__webglFramebuffer[ct],M,g,n.COLOR_ATTACHMENT0,Q,ct);else N(S.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,Q,0);d(g)&&p(Q),e.unbindTexture()}M.depthBuffer&&y(M)}function V(M){const g=M.textures;for(let S=0,F=g.length;S<F;S++){const G=g[S];if(d(G)){const X=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(G).__webglTexture;e.bindTexture(X,at),p(X),e.unbindTexture()}}}function O(M){if(M.samples>0&&E(M)===!1){const g=M.textures,S=M.width,F=M.height;let G=n.COLOR_BUFFER_BIT;const X=[],at=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=i.get(M),ct=g.length>1;if(ct)for(let dt=0;dt<g.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let dt=0;dt<g.length;dt++){X.push(n.COLOR_ATTACHMENT0+dt),M.depthBuffer&&X.push(at);const ut=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(ut===!1&&(M.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&Q.__isTransmissionRenderTarget!==!0&&(G|=n.STENCIL_BUFFER_BIT)),ct&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Q.__webglColorRenderbuffer[dt]),ut===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[at]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[at])),ct){const pt=i.get(g[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,S,F,0,0,S,F,G,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let dt=0;dt<g.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,Q.__webglColorRenderbuffer[dt]);const ut=i.get(g[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function lt(M){return Math.min(r.maxSamples,M.samples)}function E(M){const g=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function b(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function I(M,g){const S=M.colorSpace,F=M.format,G=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||S!==ni&&S!==Wn&&(Kt.getTransfer(S)===Qt?(F!==dn||G!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",S)),g}function q(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=tt,this.setTexture3D=ot,this.setTextureCube=st,this.rebindTextures=k,this.setupRenderTarget=$,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=N,this.useMultisampledRTT=E}function SM(n,t){function e(i,r=Wn){let s;const o=Kt.getTransfer(r);if(i===Kn)return n.UNSIGNED_BYTE;if(i===Nf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Of)return n.UNSIGNED_SHORT_5_5_5_1;if(i===k_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===H_)return n.BYTE;if(i===V_)return n.SHORT;if(i===Df)return n.UNSIGNED_SHORT;if(i===Uf)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===to)return n.HALF_FLOAT;if(i===G_)return n.ALPHA;if(i===W_)return n.RGB;if(i===dn)return n.RGBA;if(i===X_)return n.LUMINANCE;if(i===q_)return n.LUMINANCE_ALPHA;if(i===tr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===Y_)return n.RED;if(i===Ff)return n.RED_INTEGER;if(i===$_)return n.RG;if(i===Bf)return n.RG_INTEGER;if(i===zf)return n.RGBA_INTEGER;if(i===ko||i===Go||i===Wo||i===Xo)if(o===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Oc||i===Fc||i===Bc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hf)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===zc||i===Hc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zc)return o===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vc||i===kc||i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===jc||i===Kc||i===Zc||i===Jc||i===Qc||i===tu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tu)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qo||i===eu||i===nu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===qo)return o===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===j_||i===iu||i===ru||i===su)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===qo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class MM extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ji extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EM={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,i),p=this._getHandJoint(c,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const TM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
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

}`;class AM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new De,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new Qn({vertexShader:TM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ve(new mn(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class wM extends dr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,x=null;const v=new AM,d=e.getContextAttributes();let p=null,w=null;const _=[],A=[],H=new mt;let L=null;const U=new Ve;U.layers.enable(1),U.viewport=new me;const Y=new Ve;Y.layers.enable(2),Y.viewport=new me;const R=[U,Y],T=new MM;T.layers.enable(1),T.layers.enable(2);let Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let D=_[N];return D===void 0&&(D=new _a,_[N]=D),D.getTargetRaySpace()},this.getControllerGrip=function(N){let D=_[N];return D===void 0&&(D=new _a,_[N]=D),D.getGripSpace()},this.getHand=function(N){let D=_[N];return D===void 0&&(D=new _a,_[N]=D),D.getHandSpace()};function W(N){const D=A.indexOf(N.inputSource);if(D===-1)return;const C=_[D];C!==void 0&&(C.update(N.inputSource,N.frame,c||o),C.dispatchEvent({type:N.type,data:N.inputSource}))}function tt(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",ot);for(let N=0;N<_.length;N++){const D=A[N];D!==null&&(A[N]=null,_[N].disconnect(D))}Z=null,K=null,v.reset(),t.setRenderTarget(p),m=null,f=null,h=null,r=null,w=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",ot),d.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(H),r.renderState.layers===void 0){const D={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,D),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new bi(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let D=null,C=null,y=null;d.depth&&(y=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=d.stencil?$r:tr,C=d.stencil?ns:ur);const k={colorFormat:e.RGBA8,depthFormat:y,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(k),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new bi(f.textureWidth,f.textureHeight,{format:dn,type:Kn,depthTexture:new nd(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0});const $=t.properties.get(w);$.__ignoreDepthValues=f.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Gt.setContext(r),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ot(N){for(let D=0;D<N.removed.length;D++){const C=N.removed[D],y=A.indexOf(C);y>=0&&(A[y]=null,_[y].disconnect(C))}for(let D=0;D<N.added.length;D++){const C=N.added[D];let y=A.indexOf(C);if(y===-1){for(let $=0;$<_.length;$++)if($>=A.length){A.push(C),y=$;break}else if(A[$]===null){A[$]=C,y=$;break}if(y===-1)break}const k=_[y];k&&k.connect(C)}}const st=new j,nt=new j;function B(N,D,C){st.setFromMatrixPosition(D.matrixWorld),nt.setFromMatrixPosition(C.matrixWorld);const y=st.distanceTo(nt),k=D.projectionMatrix.elements,$=C.projectionMatrix.elements,V=k[14]/(k[10]-1),O=k[14]/(k[10]+1),lt=(k[9]+1)/k[5],E=(k[9]-1)/k[5],b=(k[8]-1)/k[0],I=($[8]+1)/$[0],q=V*b,M=V*I,g=y/(-b+I),S=g*-b;D.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(S),N.translateZ(g),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const F=V+g,G=O+g,X=q-S,at=M+(y-S),Q=lt*O/G*F,ct=E*O/G*F;N.projectionMatrix.makePerspective(X,at,Q,ct,F,G),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function ft(N,D){D===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(D.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;v.texture!==null&&(N.near=v.depthNear,N.far=v.depthFar),T.near=Y.near=U.near=N.near,T.far=Y.far=U.far=N.far,(Z!==T.near||K!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),Z=T.near,K=T.far,U.near=Z,U.far=K,Y.near=Z,Y.far=K,U.updateProjectionMatrix(),Y.updateProjectionMatrix(),N.updateProjectionMatrix());const D=N.parent,C=T.cameras;ft(T,D);for(let y=0;y<C.length;y++)ft(C[y],D);C.length===2?B(T,U,Y):T.projectionMatrix.copy(U.projectionMatrix),ht(N,T,D)};function ht(N,D,C){C===null?N.matrix.copy(D.matrixWorld):(N.matrix.copy(C.matrixWorld),N.matrix.invert(),N.matrix.multiply(D.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(D.projectionMatrix),N.projectionMatrixInverse.copy(D.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=jr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.hasDepthSensing=function(){return v.texture!==null};let vt=null;function bt(N,D){if(u=D.getViewerPose(c||o),x=D,u!==null){const C=u.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let y=!1;C.length!==T.cameras.length&&(T.cameras.length=0,y=!0);for(let $=0;$<C.length;$++){const V=C[$];let O=null;if(m!==null)O=m.getViewport(V);else{const E=h.getViewSubImage(f,V);O=E.viewport,$===0&&(t.setRenderTargetTextures(w,E.colorTexture,f.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(w))}let lt=R[$];lt===void 0&&(lt=new Ve,lt.layers.enable($),lt.viewport=new me,R[$]=lt),lt.matrix.fromArray(V.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(V.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(O.x,O.y,O.width,O.height),$===0&&(T.matrix.copy(lt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),y===!0&&T.cameras.push(lt)}const k=r.enabledFeatures;if(k&&k.includes("depth-sensing")){const $=h.getDepthInformation(C[0]);$&&$.isValid&&$.texture&&v.init(t,$,r.renderState)}}for(let C=0;C<_.length;C++){const y=A[C],k=_[C];y!==null&&k!==void 0&&k.update(y,D,c||o)}v.render(t,T),vt&&vt(N,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),x=null}const Gt=new td;Gt.setAnimationLoop(bt),this.setAnimationLoop=function(N){vt=N},this.dispose=function(){}}}const fi=new gn,RM=new te;function CM(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Zf(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,w,_,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,A)):p.isMeshMatcapMaterial?(s(d,p),x(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),v(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,w,_):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ie&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ie&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const w=t.get(p),_=w.envMap,A=w.envMapRotation;if(_&&(d.envMap.value=_,fi.copy(A),fi.x*=-1,fi.y*=-1,fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),d.envMapRotation.value.setFromMatrix4(RM.makeRotationFromEuler(fi)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const H=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*H,e(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,w,_){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*w,d.scale.value=_*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,w){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){const w=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PM(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){const A=_.program;i.uniformBlockBinding(w,A)}function c(w,_){let A=r[w.id];A===void 0&&(x(w),A=u(w),r[w.id]=A,w.addEventListener("dispose",d));const H=_.program;i.updateUBOMapping(w,H);const L=t.render.frame;s[w.id]!==L&&(f(w),s[w.id]=L)}function u(w){const _=h();w.__bindingPointIndex=_;const A=n.createBuffer(),H=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,H,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,A),A}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const _=r[w.id],A=w.uniforms,H=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let L=0,U=A.length;L<U;L++){const Y=Array.isArray(A[L])?A[L]:[A[L]];for(let R=0,T=Y.length;R<T;R++){const Z=Y[R];if(m(Z,L,R,H)===!0){const K=Z.__offset,W=Array.isArray(Z.value)?Z.value:[Z.value];let tt=0;for(let ot=0;ot<W.length;ot++){const st=W[ot],nt=v(st);typeof st=="number"||typeof st=="boolean"?(Z.__data[0]=st,n.bufferSubData(n.UNIFORM_BUFFER,K+tt,Z.__data)):st.isMatrix3?(Z.__data[0]=st.elements[0],Z.__data[1]=st.elements[1],Z.__data[2]=st.elements[2],Z.__data[3]=0,Z.__data[4]=st.elements[3],Z.__data[5]=st.elements[4],Z.__data[6]=st.elements[5],Z.__data[7]=0,Z.__data[8]=st.elements[6],Z.__data[9]=st.elements[7],Z.__data[10]=st.elements[8],Z.__data[11]=0):(st.toArray(Z.__data,tt),tt+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,Z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,_,A,H){const L=w.value,U=_+"_"+A;if(H[U]===void 0)return typeof L=="number"||typeof L=="boolean"?H[U]=L:H[U]=L.clone(),!0;{const Y=H[U];if(typeof L=="number"||typeof L=="boolean"){if(Y!==L)return H[U]=L,!0}else if(Y.equals(L)===!1)return Y.copy(L),!0}return!1}function x(w){const _=w.uniforms;let A=0;const H=16;for(let U=0,Y=_.length;U<Y;U++){const R=Array.isArray(_[U])?_[U]:[_[U]];for(let T=0,Z=R.length;T<Z;T++){const K=R[T],W=Array.isArray(K.value)?K.value:[K.value];for(let tt=0,ot=W.length;tt<ot;tt++){const st=W[tt],nt=v(st),B=A%H;B!==0&&H-B<nt.boundary&&(A+=H-B),K.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=nt.storage}}}const L=A%H;return L>0&&(A+=H-L),w.__size=A,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function d(w){const _=w.target;_.removeEventListener("dispose",d);const A=o.indexOf(_.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class LM{constructor(t={}){const{canvas:e=M0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,d=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const _=this;let A=!1,H=0,L=0,U=null,Y=-1,R=null;const T=new me,Z=new me;let K=null;const W=new Ft(0);let tt=0,ot=e.width,st=e.height,nt=1,B=null,ft=null;const ht=new me(0,0,ot,st),vt=new me(0,0,ot,st);let bt=!1;const Gt=new yl;let N=!1,D=!1;const C=new te,y=new mt,k=new j,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return U===null?nt:1}let O=i;function lt(P,J){const it=e.getContext(P,J);return it!==null?it:null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",wt,!1),O===null){const J="webgl2";if(O=lt(J,P),O===null)throw lt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let E,b,I,q,M,g,S,F,G,X,at,Q,ct,dt,ut,pt,St,gt,Mt,It,Vt,Wt,Xt,kt;function Tt(){E=new zy(O),E.init(),b=new Dy(O,E,t),Wt=new SM(O,E),I=new xM(O),q=new ky(O),M=new sM,g=new yM(O,E,I,M,b,Wt,q),S=new Ny(_),F=new By(_),G=new $0(O),Xt=new Ly(O,G),X=new Hy(O,G,q,Xt),at=new Wy(O,X,G,q),Mt=new Gy(O,b,g),pt=new Uy(M),Q=new rM(_,S,F,E,b,Xt,pt),ct=new CM(_,M),dt=new aM,ut=new dM(E),gt=new Py(_,S,F,I,at,f,l),St=new vM(_,at,b),kt=new PM(O,q,b,I),It=new Iy(O,E,q),Vt=new Vy(O,E,q),q.programs=Q.programs,_.capabilities=b,_.extensions=E,_.properties=M,_.renderLists=dt,_.shadowMap=St,_.state=I,_.info=q}Tt();const z=new wM(_,O);this.xr=z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=E.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=E.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(P){P!==void 0&&(nt=P,this.setSize(ot,st,!1))},this.getSize=function(P){return P.set(ot,st)},this.setSize=function(P,J,it=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=P,st=J,e.width=Math.floor(P*nt),e.height=Math.floor(J*nt),it===!0&&(e.style.width=P+"px",e.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(ot*nt,st*nt).floor()},this.setDrawingBufferSize=function(P,J,it){ot=P,st=J,nt=it,e.width=Math.floor(P*it),e.height=Math.floor(J*it),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(ht)},this.setViewport=function(P,J,it,rt){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,J,it,rt),I.viewport(T.copy(ht).multiplyScalar(nt).round())},this.getScissor=function(P){return P.copy(vt)},this.setScissor=function(P,J,it,rt){P.isVector4?vt.set(P.x,P.y,P.z,P.w):vt.set(P,J,it,rt),I.scissor(Z.copy(vt).multiplyScalar(nt).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(P){I.setScissorTest(bt=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(P=!0,J=!0,it=!0){let rt=0;if(P){let et=!1;if(U!==null){const Et=U.texture.format;et=Et===zf||Et===Bf||Et===Ff}if(et){const Et=U.texture.type,At=Et===Kn||Et===ur||Et===Df||Et===ns||Et===Nf||Et===Of,Ct=gt.getClearColor(),Lt=gt.getClearAlpha(),Nt=Ct.r,Ut=Ct.g,Ot=Ct.b;At?(m[0]=Nt,m[1]=Ut,m[2]=Ot,m[3]=Lt,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=Nt,x[1]=Ut,x[2]=Ot,x[3]=Lt,O.clearBufferiv(O.COLOR,0,x))}else rt|=O.COLOR_BUFFER_BIT}J&&(rt|=O.DEPTH_BUFFER_BIT),it&&(rt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),dt.dispose(),ut.dispose(),M.dispose(),S.dispose(),F.dispose(),at.dispose(),Xt.dispose(),kt.dispose(),Q.dispose(),z.dispose(),z.removeEventListener("sessionstart",nn),z.removeEventListener("sessionend",rn),ii.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=q.autoReset,J=St.enabled,it=St.autoUpdate,rt=St.needsUpdate,et=St.type;Tt(),q.autoReset=P,St.enabled=J,St.autoUpdate=it,St.needsUpdate=rt,St.type=et}function wt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Rt(P){const J=P.target;J.removeEventListener("dispose",Rt),Zt(J)}function Zt(P){ee(P),M.remove(P)}function ee(P){const J=M.get(P).programs;J!==void 0&&(J.forEach(function(it){Q.releaseProgram(it)}),P.isShaderMaterial&&Q.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,it,rt,et,Et){J===null&&(J=$);const At=et.isMesh&&et.matrixWorld.determinant()<0,Ct=yd(P,J,it,rt,et);I.setMaterial(rt,At);let Lt=it.index,Nt=1;if(rt.wireframe===!0){if(Lt=X.getWireframeAttribute(it),Lt===void 0)return;Nt=2}const Ut=it.drawRange,Ot=it.attributes.position;let le=Ut.start*Nt,Oe=(Ut.start+Ut.count)*Nt;Et!==null&&(le=Math.max(le,Et.start*Nt),Oe=Math.min(Oe,(Et.start+Et.count)*Nt)),Lt!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Lt.count)):Ot!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,Ot.count));const de=Oe-le;if(de<0||de===1/0)return;Xt.setup(et,rt,Ct,it,Lt);let vn,se=It;if(Lt!==null&&(vn=G.get(Lt),se=Vt,se.setIndex(vn)),et.isMesh)rt.wireframe===!0?(I.setLineWidth(rt.wireframeLinewidth*V()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(et.isLine){let Bt=rt.linewidth;Bt===void 0&&(Bt=1),I.setLineWidth(Bt*V()),et.isLineSegments?se.setMode(O.LINES):et.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else et.isPoints?se.setMode(O.POINTS):et.isSprite&&se.setMode(O.TRIANGLES);if(et.isBatchedMesh)se.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)se.renderInstances(le,de,et.count);else if(it.isInstancedBufferGeometry){const Bt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ao=Math.min(it.instanceCount,Bt);se.renderInstances(le,de,Ao)}else se.render(le,de)};function re(P,J,it){P.transparent===!0&&P.side===Ke&&P.forceSinglePass===!1?(P.side=Ie,P.needsUpdate=!0,os(P,J,it),P.side=Jn,P.needsUpdate=!0,os(P,J,it),P.side=Ke):os(P,J,it)}this.compile=function(P,J,it=null){it===null&&(it=P),d=ut.get(it),d.init(),w.push(d),it.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(d.pushLight(et),et.castShadow&&d.pushShadow(et))}),P!==it&&P.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(d.pushLight(et),et.castShadow&&d.pushShadow(et))}),d.setupLights(_._useLegacyLights);const rt=new Set;return P.traverse(function(et){const Et=et.material;if(Et)if(Array.isArray(Et))for(let At=0;At<Et.length;At++){const Ct=Et[At];re(Ct,it,et),rt.add(Ct)}else re(Et,it,et),rt.add(Et)}),w.pop(),d=null,rt},this.compileAsync=function(P,J,it=null){const rt=this.compile(P,J,it);return new Promise(et=>{function Et(){if(rt.forEach(function(At){M.get(At).currentProgram.isReady()&&rt.delete(At)}),rt.size===0){et(P);return}setTimeout(Et,10)}E.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Se=null;function Jt(P){Se&&Se(P)}function nn(){ii.stop()}function rn(){ii.start()}const ii=new td;ii.setAnimationLoop(Jt),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(P){Se=P,z.setAnimationLoop(P),P===null?ii.stop():ii.start()},z.addEventListener("sessionstart",nn),z.addEventListener("sessionend",rn),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(J),J=z.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,J,U),d=ut.get(P,w.length),d.init(),w.push(d),C.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Gt.setFromProjectionMatrix(C),D=this.localClippingEnabled,N=pt.init(this.clippingPlanes,D),v=dt.get(P,p.length),v.init(),p.push(v),Cl(P,J,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(B,ft),this.info.render.frame++,N===!0&&pt.beginShadows();const it=d.state.shadowsArray;if(St.render(it,P,J),N===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1)&&gt.render(v,P),d.setupLights(_._useLegacyLights),J.isArrayCamera){const rt=J.cameras;for(let et=0,Et=rt.length;et<Et;et++){const At=rt[et];Pl(v,P,At,At.viewport)}}else Pl(v,P,J);U!==null&&(g.updateMultisampleRenderTarget(U),g.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(_,P,J),Xt.resetDefaultState(),Y=-1,R=null,w.pop(),w.length>0?d=w[w.length-1]:d=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Cl(P,J,it,rt){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Gt.intersectsSprite(P)){rt&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(C);const At=at.update(P),Ct=P.material;Ct.visible&&v.push(P,At,Ct,it,k.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Gt.intersectsObject(P))){const At=at.update(P),Ct=P.material;if(rt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),k.copy(P.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),k.copy(At.boundingSphere.center)),k.applyMatrix4(P.matrixWorld).applyMatrix4(C)),Array.isArray(Ct)){const Lt=At.groups;for(let Nt=0,Ut=Lt.length;Nt<Ut;Nt++){const Ot=Lt[Nt],le=Ct[Ot.materialIndex];le&&le.visible&&v.push(P,At,le,it,k.z,Ot)}}else Ct.visible&&v.push(P,At,Ct,it,k.z,null)}}const Et=P.children;for(let At=0,Ct=Et.length;At<Ct;At++)Cl(Et[At],J,it,rt)}function Pl(P,J,it,rt){const et=P.opaque,Et=P.transmissive,At=P.transparent;d.setupLightsView(it),N===!0&&pt.setGlobalState(_.clippingPlanes,it),Et.length>0&&xd(et,Et,J,it),rt&&I.viewport(T.copy(rt)),et.length>0&&ss(et,J,it),Et.length>0&&ss(Et,J,it),At.length>0&&ss(At,J,it),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function xd(P,J,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(d.state.transmissionRenderTarget===null){d.state.transmissionRenderTarget=new bi(1,1,{generateMipmaps:!0,type:E.has("EXT_color_buffer_half_float")||E.has("EXT_color_buffer_float")?to:Kn,minFilter:yi,samples:4,stencilBuffer:s});const Nt=M.get(d.state.transmissionRenderTarget);Nt.__isTransmissionRenderTarget=!0}const Et=d.state.transmissionRenderTarget;_.getDrawingBufferSize(y),Et.setSize(y.x,y.y);const At=_.getRenderTarget();_.setRenderTarget(Et),_.getClearColor(W),tt=_.getClearAlpha(),tt<1&&_.setClearColor(16777215,.5),_.clear();const Ct=_.toneMapping;_.toneMapping=jn,ss(P,it,rt),g.updateMultisampleRenderTarget(Et),g.updateRenderTargetMipmap(Et);let Lt=!1;for(let Nt=0,Ut=J.length;Nt<Ut;Nt++){const Ot=J[Nt],le=Ot.object,Oe=Ot.geometry,de=Ot.material,vn=Ot.group;if(de.side===Ke&&le.layers.test(rt.layers)){const se=de.side;de.side=Ie,de.needsUpdate=!0,Ll(le,it,rt,Oe,de,vn),de.side=se,de.needsUpdate=!0,Lt=!0}}Lt===!0&&(g.updateMultisampleRenderTarget(Et),g.updateRenderTargetMipmap(Et)),_.setRenderTarget(At),_.setClearColor(W,tt),_.toneMapping=Ct}function ss(P,J,it){const rt=J.isScene===!0?J.overrideMaterial:null;for(let et=0,Et=P.length;et<Et;et++){const At=P[et],Ct=At.object,Lt=At.geometry,Nt=rt===null?At.material:rt,Ut=At.group;Ct.layers.test(it.layers)&&Ll(Ct,J,it,Lt,Nt,Ut)}}function Ll(P,J,it,rt,et,Et){P.onBeforeRender(_,J,it,rt,et,Et),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),et.onBeforeRender(_,J,it,rt,P,Et),et.transparent===!0&&et.side===Ke&&et.forceSinglePass===!1?(et.side=Ie,et.needsUpdate=!0,_.renderBufferDirect(it,J,rt,et,P,Et),et.side=Jn,et.needsUpdate=!0,_.renderBufferDirect(it,J,rt,et,P,Et),et.side=Ke):_.renderBufferDirect(it,J,rt,et,P,Et),P.onAfterRender(_,J,it,rt,et,Et)}function os(P,J,it){J.isScene!==!0&&(J=$);const rt=M.get(P),et=d.state.lights,Et=d.state.shadowsArray,At=et.state.version,Ct=Q.getParameters(P,et.state,Et,J,it),Lt=Q.getProgramCacheKey(Ct);let Nt=rt.programs;rt.environment=P.isMeshStandardMaterial?J.environment:null,rt.fog=J.fog,rt.envMap=(P.isMeshStandardMaterial?F:S).get(P.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Nt===void 0&&(P.addEventListener("dispose",Rt),Nt=new Map,rt.programs=Nt);let Ut=Nt.get(Lt);if(Ut!==void 0){if(rt.currentProgram===Ut&&rt.lightsStateVersion===At)return Dl(P,Ct),Ut}else Ct.uniforms=Q.getUniforms(P),P.onBuild(it,Ct,_),P.onBeforeCompile(Ct,_),Ut=Q.acquireProgram(Ct,Lt),Nt.set(Lt,Ut),rt.uniforms=Ct.uniforms;const Ot=rt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ot.clippingPlanes=pt.uniform),Dl(P,Ct),rt.needsLights=Md(P),rt.lightsStateVersion=At,rt.needsLights&&(Ot.ambientLightColor.value=et.state.ambient,Ot.lightProbe.value=et.state.probe,Ot.directionalLights.value=et.state.directional,Ot.directionalLightShadows.value=et.state.directionalShadow,Ot.spotLights.value=et.state.spot,Ot.spotLightShadows.value=et.state.spotShadow,Ot.rectAreaLights.value=et.state.rectArea,Ot.ltc_1.value=et.state.rectAreaLTC1,Ot.ltc_2.value=et.state.rectAreaLTC2,Ot.pointLights.value=et.state.point,Ot.pointLightShadows.value=et.state.pointShadow,Ot.hemisphereLights.value=et.state.hemi,Ot.directionalShadowMap.value=et.state.directionalShadowMap,Ot.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ot.spotShadowMap.value=et.state.spotShadowMap,Ot.spotLightMatrix.value=et.state.spotLightMatrix,Ot.spotLightMap.value=et.state.spotLightMap,Ot.pointShadowMap.value=et.state.pointShadowMap,Ot.pointShadowMatrix.value=et.state.pointShadowMatrix),rt.currentProgram=Ut,rt.uniformsList=null,Ut}function Il(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=Ys.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function Dl(P,J){const it=M.get(P);it.outputColorSpace=J.outputColorSpace,it.batching=J.batching,it.instancing=J.instancing,it.instancingColor=J.instancingColor,it.instancingMorph=J.instancingMorph,it.skinning=J.skinning,it.morphTargets=J.morphTargets,it.morphNormals=J.morphNormals,it.morphColors=J.morphColors,it.morphTargetsCount=J.morphTargetsCount,it.numClippingPlanes=J.numClippingPlanes,it.numIntersection=J.numClipIntersection,it.vertexAlphas=J.vertexAlphas,it.vertexTangents=J.vertexTangents,it.toneMapping=J.toneMapping}function yd(P,J,it,rt,et){J.isScene!==!0&&(J=$),g.resetTextureUnits();const Et=J.fog,At=rt.isMeshStandardMaterial?J.environment:null,Ct=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ni,Lt=(rt.isMeshStandardMaterial?F:S).get(rt.envMap||At),Nt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ut=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ot=!!it.morphAttributes.position,le=!!it.morphAttributes.normal,Oe=!!it.morphAttributes.color;let de=jn;rt.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(de=_.toneMapping);const vn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,se=vn!==void 0?vn.length:0,Bt=M.get(rt),Ao=d.state.lights;if(N===!0&&(D===!0||P!==R)){const ze=P===R&&rt.id===Y;pt.setState(rt,P,ze)}let ne=!1;rt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Ao.state.version||Bt.outputColorSpace!==Ct||et.isBatchedMesh&&Bt.batching===!1||!et.isBatchedMesh&&Bt.batching===!0||et.isInstancedMesh&&Bt.instancing===!1||!et.isInstancedMesh&&Bt.instancing===!0||et.isSkinnedMesh&&Bt.skinning===!1||!et.isSkinnedMesh&&Bt.skinning===!0||et.isInstancedMesh&&Bt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Bt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Bt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Bt.instancingMorph===!1&&et.morphTexture!==null||Bt.envMap!==Lt||rt.fog===!0&&Bt.fog!==Et||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==pt.numPlanes||Bt.numIntersection!==pt.numIntersection)||Bt.vertexAlphas!==Nt||Bt.vertexTangents!==Ut||Bt.morphTargets!==Ot||Bt.morphNormals!==le||Bt.morphColors!==Oe||Bt.toneMapping!==de||Bt.morphTargetsCount!==se)&&(ne=!0):(ne=!0,Bt.__version=rt.version);let ri=Bt.currentProgram;ne===!0&&(ri=os(rt,J,et));let Ul=!1,_r=!1,wo=!1;const Me=ri.getUniforms(),Ln=Bt.uniforms;if(I.useProgram(ri.program)&&(Ul=!0,_r=!0,wo=!0),rt.id!==Y&&(Y=rt.id,_r=!0),Ul||R!==P){Me.setValue(O,"projectionMatrix",P.projectionMatrix),Me.setValue(O,"viewMatrix",P.matrixWorldInverse);const ze=Me.map.cameraPosition;ze!==void 0&&ze.setValue(O,k.setFromMatrixPosition(P.matrixWorld)),b.logarithmicDepthBuffer&&Me.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Me.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,_r=!0,wo=!0)}if(et.isSkinnedMesh){Me.setOptional(O,et,"bindMatrix"),Me.setOptional(O,et,"bindMatrixInverse");const ze=et.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Me.setValue(O,"boneTexture",ze.boneTexture,g))}et.isBatchedMesh&&(Me.setOptional(O,et,"batchingTexture"),Me.setValue(O,"batchingTexture",et._matricesTexture,g));const Ro=it.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0)&&Mt.update(et,it,ri),(_r||Bt.receiveShadow!==et.receiveShadow)&&(Bt.receiveShadow=et.receiveShadow,Me.setValue(O,"receiveShadow",et.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ln.envMap.value=Lt,Ln.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&J.environment!==null&&(Ln.envMapIntensity.value=J.environmentIntensity),_r&&(Me.setValue(O,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&Sd(Ln,wo),Et&&rt.fog===!0&&ct.refreshFogUniforms(Ln,Et),ct.refreshMaterialUniforms(Ln,rt,nt,st,d.state.transmissionRenderTarget),Ys.upload(O,Il(Bt),Ln,g)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ys.upload(O,Il(Bt),Ln,g),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Me.setValue(O,"center",et.center),Me.setValue(O,"modelViewMatrix",et.modelViewMatrix),Me.setValue(O,"normalMatrix",et.normalMatrix),Me.setValue(O,"modelMatrix",et.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const ze=rt.uniformsGroups;for(let Co=0,Ed=ze.length;Co<Ed;Co++){const Nl=ze[Co];kt.update(Nl,ri),kt.bind(Nl,ri)}}return ri}function Sd(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function Md(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,J,it){M.get(P.texture).__webglTexture=J,M.get(P.depthTexture).__webglTexture=it;const rt=M.get(P);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||E.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,J){const it=M.get(P);it.__webglFramebuffer=J,it.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,it=0){U=P,H=J,L=it;let rt=!0,et=null,Et=!1,At=!1;if(P){const Lt=M.get(P);Lt.__useDefaultFramebuffer!==void 0?(I.bindFramebuffer(O.FRAMEBUFFER,null),rt=!1):Lt.__webglFramebuffer===void 0?g.setupRenderTarget(P):Lt.__hasExternalTextures&&g.rebindTextures(P,M.get(P.texture).__webglTexture,M.get(P.depthTexture).__webglTexture);const Nt=P.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);const Ut=M.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ut[J])?et=Ut[J][it]:et=Ut[J],Et=!0):P.samples>0&&g.useMultisampledRTT(P)===!1?et=M.get(P).__webglMultisampledFramebuffer:Array.isArray(Ut)?et=Ut[it]:et=Ut,T.copy(P.viewport),Z.copy(P.scissor),K=P.scissorTest}else T.copy(ht).multiplyScalar(nt).floor(),Z.copy(vt).multiplyScalar(nt).floor(),K=bt;if(I.bindFramebuffer(O.FRAMEBUFFER,et)&&rt&&I.drawBuffers(P,et),I.viewport(T),I.scissor(Z),I.setScissorTest(K),Et){const Lt=M.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt.__webglTexture,it)}else if(At){const Lt=M.get(P.texture),Nt=J||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,it||0,Nt)}Y=-1},this.readRenderTargetPixels=function(P,J,it,rt,et,Et,At){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=M.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){I.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Lt=P.texture,Nt=Lt.format,Ut=Lt.type;if(Nt!==dn&&Wt.convert(Nt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Ut===to&&(E.has("EXT_color_buffer_half_float")||E.has("EXT_color_buffer_float"));if(Ut!==Kn&&Wt.convert(Ut)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&Ut!==Xn&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-rt&&it>=0&&it<=P.height-et&&O.readPixels(J,it,rt,et,Wt.convert(Nt),Wt.convert(Ut),Et)}finally{const Lt=U!==null?M.get(U).__webglFramebuffer:null;I.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(P,J,it=0){const rt=Math.pow(2,-it),et=Math.floor(J.image.width*rt),Et=Math.floor(J.image.height*rt);g.setTexture2D(J,0),O.copyTexSubImage2D(O.TEXTURE_2D,it,0,0,P.x,P.y,et,Et),I.unbindTexture()},this.copyTextureToTexture=function(P,J,it,rt=0){const et=J.image.width,Et=J.image.height,At=Wt.convert(it.format),Ct=Wt.convert(it.type);g.setTexture2D(it,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,it.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,it.unpackAlignment),J.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,rt,P.x,P.y,et,Et,At,Ct,J.image.data):J.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,rt,P.x,P.y,J.mipmaps[0].width,J.mipmaps[0].height,At,J.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,rt,P.x,P.y,At,Ct,J.image),rt===0&&it.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(P,J,it,rt,et=0){const Et=Math.round(P.max.x-P.min.x),At=Math.round(P.max.y-P.min.y),Ct=P.max.z-P.min.z+1,Lt=Wt.convert(rt.format),Nt=Wt.convert(rt.type);let Ut;if(rt.isData3DTexture)g.setTexture3D(rt,0),Ut=O.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)g.setTexture2DArray(rt,0),Ut=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,rt.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,rt.unpackAlignment);const Ot=O.getParameter(O.UNPACK_ROW_LENGTH),le=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Oe=O.getParameter(O.UNPACK_SKIP_PIXELS),de=O.getParameter(O.UNPACK_SKIP_ROWS),vn=O.getParameter(O.UNPACK_SKIP_IMAGES),se=it.isCompressedTexture?it.mipmaps[et]:it.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,se.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,P.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,P.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,P.min.z),it.isDataTexture||it.isData3DTexture?O.texSubImage3D(Ut,et,J.x,J.y,J.z,Et,At,Ct,Lt,Nt,se.data):rt.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,et,J.x,J.y,J.z,Et,At,Ct,Lt,se.data):O.texSubImage3D(Ut,et,J.x,J.y,J.z,Et,At,Ct,Lt,Nt,se),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ot),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),O.pixelStorei(O.UNPACK_SKIP_ROWS,de),O.pixelStorei(O.UNPACK_SKIP_IMAGES,vn),et===0&&rt.generateMipmaps&&O.generateMipmap(Ut),I.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?g.setTextureCube(P,0):P.isData3DTexture?g.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?g.setTexture2DArray(P,0):g.setTexture2D(P,0),I.unbindTexture()},this.resetState=function(){H=0,L=0,U=null,I.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vl?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Mo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ml{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=i}clone(){return new Ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class IM extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ld extends mr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zu=new j,Ju=new j,Qu=new te,va=new qf,Ns=new Eo;class DM extends ue{constructor(t=new en,e=new ld){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Zu.fromBufferAttribute(e,r-1),Ju.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Zu.distanceTo(Ju);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;Qu.copy(r).invert(),va.copy(t.ray).applyMatrix4(Qu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new j,u=new j,h=new j,f=new j,m=this.isLineSegments?2:1,x=i.index,d=i.attributes.position;if(x!==null){const p=Math.max(0,o.start),w=Math.min(x.count,o.start+o.count);for(let _=p,A=w-1;_<A;_+=m){const H=x.getX(_),L=x.getX(_+1);if(c.fromBufferAttribute(d,H),u.fromBufferAttribute(d,L),va.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const Y=t.ray.origin.distanceTo(f);Y<t.near||Y>t.far||e.push({distance:Y,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let _=p,A=w-1;_<A;_+=m){if(c.fromBufferAttribute(d,_),u.fromBufferAttribute(d,_+1),va.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const th=new j,eh=new j;class UM extends DM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)th.fromBufferAttribute(e,r),eh.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+th.distanceTo(eh);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new mt:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new j,r=[],s=[],o=[],a=new j,l=new te;for(let m=0;m<=t;m++){const x=m/t;r[m]=this.getTangentAt(x,new j)}s[0]=new j,o[0]=new j;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(_e(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(_e(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class El extends _n{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class NM extends El{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Os=new j,xa=new Tl,ya=new Tl,Sa=new Tl;class OM extends _n{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new j){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Os.subVectors(r[0],r[1]).add(r[0]),c=Os);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Os.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Os),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),x<1e-4&&(x=v),d<1e-4&&(d=v),xa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,x,v,d),ya.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,x,v,d),Sa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,x,v,d)}else this.curveType==="catmullrom"&&(xa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ya.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Sa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(xa.calc(l),ya.calc(l),Sa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new j().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nh(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function FM(n,t){const e=1-n;return e*e*t}function BM(n,t){return 2*(1-n)*n*t}function zM(n,t){return n*n*t}function Or(n,t,e,i){return FM(n,t)+BM(n,e)+zM(n,i)}function HM(n,t){const e=1-n;return e*e*e*t}function VM(n,t){const e=1-n;return 3*e*e*n*t}function kM(n,t){return 3*(1-n)*n*n*t}function GM(n,t){return n*n*n*t}function Fr(n,t,e,i,r){return HM(n,t)+VM(n,e)+kM(n,i)+GM(n,r)}class cd extends _n{constructor(t=new mt,e=new mt,i=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new mt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fr(t,r.x,s.x,o.x,a.x),Fr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WM extends _n{constructor(t=new j,e=new j,i=new j,r=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new j){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fr(t,r.x,s.x,o.x,a.x),Fr(t,r.y,s.y,o.y,a.y),Fr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ud extends _n{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class XM extends _n{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends _n{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Or(t,r.x,s.x,o.x),Or(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qM extends _n{constructor(t=new j,e=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new j){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Or(t,r.x,s.x,o.x),Or(t,r.y,s.y,o.y),Or(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fd extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(nh(a,l.x,c.x,u.x,h.x),nh(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new mt().fromArray(r))}return this}}var ih=Object.freeze({__proto__:null,ArcCurve:NM,CatmullRomCurve3:OM,CubicBezierCurve:cd,CubicBezierCurve3:WM,EllipseCurve:El,LineCurve:ud,LineCurve3:XM,QuadraticBezierCurve:hd,QuadraticBezierCurve3:qM,SplineCurve:fd});class YM extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new ih[r.type]().fromJSON(r))}return this}}class nr extends YM{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ud(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new hd(this.currentPoint.clone(),new mt(t,e),new mt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new cd(this.currentPoint.clone(),new mt(t,e),new mt(i,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new fd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new El(t,e,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Br extends nr{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new nr().fromJSON(r))}return this}}const $M={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=dd(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(i&&(s=QM(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let x=e;x<r;x+=e)h=n[x],f=n[x+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return Kr(s,o,e,a,l,m,0),o}};function dd(n,t,e,i,r){let s,o;if(r===uE(n,t,e,i)>0)for(s=t;s<e;s+=i)o=rh(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=rh(s,n[s],n[s+1],o);return o&&bo(o,o.next)&&(Jr(o),o=o.next),o}function Ai(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(bo(e,e.next)||oe(e.prev,e,e.next)===0)){if(Jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Kr(n,t,e,i,r,s,o){if(!n)return;!o&&s&&rE(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?KM(n,i,r,s):jM(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ZM(Ai(n),t,e),Kr(n,t,e,i,r,s,2)):o===2&&JM(n,t,e,i,r,s):Kr(Ai(n),t,e,i,r,s,1);break}}}function jM(n){const t=n.prev,e=n,i=n.next;if(oe(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let x=i.next;for(;x!==t;){if(x.x>=u&&x.x<=f&&x.y>=h&&x.y<=m&&Ki(r,a,s,l,o,c,x.x,x.y)&&oe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function KM(n,t,e,i){const r=n.prev,s=n,o=n.next;if(oe(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,x=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,p=qa(m,x,t,e,i),w=qa(v,d,t,e,i);let _=n.prevZ,A=n.nextZ;for(;_&&_.z>=p&&A&&A.z<=w;){if(_.x>=m&&_.x<=v&&_.y>=x&&_.y<=d&&_!==r&&_!==o&&Ki(a,u,l,h,c,f,_.x,_.y)&&oe(_.prev,_,_.next)>=0||(_=_.prevZ,A.x>=m&&A.x<=v&&A.y>=x&&A.y<=d&&A!==r&&A!==o&&Ki(a,u,l,h,c,f,A.x,A.y)&&oe(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=v&&_.y>=x&&_.y<=d&&_!==r&&_!==o&&Ki(a,u,l,h,c,f,_.x,_.y)&&oe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;A&&A.z<=w;){if(A.x>=m&&A.x<=v&&A.y>=x&&A.y<=d&&A!==r&&A!==o&&Ki(a,u,l,h,c,f,A.x,A.y)&&oe(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function ZM(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!bo(r,s)&&pd(r,i,i.next,s)&&Zr(r,s)&&Zr(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Jr(i),Jr(i.next),i=n=s),i=i.next}while(i!==n);return Ai(i)}function JM(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&aE(o,a)){let l=md(o,a);o=Ai(o,o.next),l=Ai(l,l.next),Kr(o,t,e,i,r,s,0),Kr(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function QM(n,t,e,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=dd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(oE(c));for(r.sort(tE),s=0;s<r.length;s++)e=eE(r[s],e);return e}function tE(n,t){return n.x-t.x}function eE(n,t){const e=nE(n,t);if(!e)return t;const i=md(e,n);return Ai(i,i.next),Ai(e,e.next)}function nE(n,t){let e=t,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Ki(o<c?s:i,o,l,c,o<c?i:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Zr(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&iE(r,e)))&&(r=e,u=h)),e=e.next;while(e!==a);return r}function iE(n,t){return oe(n.prev,n,t.prev)<0&&oe(t.next,n,n.next)<0}function rE(n,t,e,i){let r=n;do r.z===0&&(r.z=qa(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,sE(r)}function sE(n){let t,e,i,r,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(o>1);return n}function qa(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function oE(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ki(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function aE(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!lE(n,t)&&(Zr(n,t)&&Zr(t,n)&&cE(n,t)&&(oe(n.prev,n,t.prev)||oe(n,t.prev,t))||bo(n,t)&&oe(n.prev,n,n.next)>0&&oe(t.prev,t,t.next)>0)}function oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function bo(n,t){return n.x===t.x&&n.y===t.y}function pd(n,t,e,i){const r=Bs(oe(n,t,e)),s=Bs(oe(n,t,i)),o=Bs(oe(e,i,n)),a=Bs(oe(e,i,t));return!!(r!==s&&o!==a||r===0&&Fs(n,e,t)||s===0&&Fs(n,i,t)||o===0&&Fs(e,n,i)||a===0&&Fs(e,t,i))}function Fs(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Bs(n){return n>0?1:n<0?-1:0}function lE(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&pd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Zr(n,t){return oe(n.prev,n,n.next)<0?oe(n,t,n.next)>=0&&oe(n,n.prev,t)>=0:oe(n,t,n.prev)<0||oe(n,n.next,t)<0}function cE(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function md(n,t){const e=new Ya(n.i,n.x,n.y),i=new Ya(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function rh(n,t,e,i){const r=new Ya(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ya(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uE(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ti{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Ti.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];sh(t),oh(i,t);let o=t.length;e.forEach(sh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,oh(i,e[l]);const a=$M.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function sh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function oh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class bl extends en{constructor(t=new Br([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(s,3)),this.setAttribute("uv",new xe(o,2));function c(u){const h=r.length/3,f=u.extractPoints(e);let m=f.shape;const x=f.holes;Ti.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,p=x.length;d<p;d++){const w=x[d];Ti.isClockWise(w)===!0&&(x[d]=w.reverse())}const v=Ti.triangulateShape(m,x);for(let d=0,p=x.length;d<p;d++){const w=x[d];m=m.concat(w)}for(let d=0,p=m.length;d<p;d++){const w=m[d];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let d=0,p=v.length;d<p;d++){const w=v[d],_=w[0]+h,A=w[1]+h,H=w[2]+h;i.push(_,A,H),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return hE(e,t)}static fromJSON(t,e){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];i.push(o)}return new bl(i,t.curveSegments)}}function hE(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}class ir extends mr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vf,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ah={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fE{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const dE=new fE;class Al{constructor(t){this.manager=t!==void 0?t:dE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Al.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class pE extends Error{constructor(t,e){super(t),this.response=e}}class mE extends Al{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ah.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(bn[t]!==void 0){bn[t].push({onLoad:e,onProgress:i,onError:r});return}bn[t]=[],bn[t].push({onLoad:e,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bn[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,x=m!==0;let v=0;const d=new ReadableStream({start(p){w();function w(){h.read().then(({done:_,value:A})=>{if(_)p.close();else{v+=A.byteLength;const H=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:m});for(let L=0,U=u.length;L<U;L++){const Y=u[L];Y.onProgress&&Y.onProgress(H)}p.enqueue(A),w()}})}}});return new Response(d)}else throw new pE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{ah.add(t,c);const u=bn[t];delete bn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=bn[t];if(u===void 0)throw this.manager.itemError(t),c;delete bn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class gd extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class gE extends gd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new te,lh=new j,ch=new j;class _E{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vE extends _E{constructor(){super(new ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xE extends gd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new vE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uh(){return(typeof performance>"u"?Date:performance).now()}const hh=new mt;class SE{constructor(t=new mt(1/0,1/0),e=new mt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class $s extends UM{constructor(t=10,e=10,i=4473924,r=8947848){i=new Ft(i),r=new Ft(r);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,m=0,x=-a;f<=e;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const v=f===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new en;u.setAttribute("position",new xe(l,3)),u.setAttribute("color",new xe(c,3));const h=new ld({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class di{constructor(){this.type="ShapePath",this.color=new Ft,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new nr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,r){return this.currentPath.quadraticCurveTo(t,e,i,r),this}bezierCurveTo(t,e,i,r,s,o){return this.currentPath.bezierCurveTo(t,e,i,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const w=[];for(let _=0,A=p.length;_<A;_++){const H=p[_],L=new Br;L.curves=H.curves,w.push(L)}return w}function i(p,w){const _=w.length;let A=!1;for(let H=_-1,L=0;L<_;H=L++){let U=w[H],Y=w[L],R=Y.x-U.x,T=Y.y-U.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(U=w[L],R=-R,Y=w[H],T=-T),p.y<U.y||p.y>Y.y)continue;if(p.y===U.y){if(p.x===U.x)return!0}else{const Z=T*(p.x-U.x)-R*(p.y-U.y);if(Z===0)return!0;if(Z<0)continue;A=!A}}else{if(p.y!==U.y)continue;if(Y.x<=p.x&&p.x<=U.x||U.x<=p.x&&p.x<=Y.x)return!0}}return A}const r=Ti.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Br,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],x=0,v;f[x]=void 0,m[x]=[];for(let p=0,w=s.length;p<w;p++)a=s[p],v=a.getPoints(),o=r(v),o=t?!o:o,o?(!u&&f[x]&&x++,f[x]={s:new Br,p:v},f[x].s.curves=a.curves,u&&x++,m[x]=[]):m[x].push({h:a,p:v[0]});if(!f[0])return e(s);if(f.length>1){let p=!1,w=0;for(let _=0,A=f.length;_<A;_++)h[_]=[];for(let _=0,A=f.length;_<A;_++){const H=m[_];for(let L=0;L<H.length;L++){const U=H[L];let Y=!0;for(let R=0;R<f.length;R++)i(U.p,f[R].p)&&(_!==R&&w++,Y?(Y=!1,h[R].push(U)):p=!0);Y&&h[_].push(U)}}w>0&&p===!1&&(m=h)}let d;for(let p=0,w=f.length;p<w;p++){l=f[p].s,c.push(l),d=m[p];for(let _=0,A=d.length;_<A;_++)l.holes.push(d[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);class wl{constructor(t=new j(0,0,0),e=new j(0,1,0),i=1){this.start=t,this.end=e,this.radius=i}clone(){return new wl(this.start.clone(),this.end.clone(),this.radius)}set(t,e,i){this.start.copy(t),this.end.copy(e),this.radius=i}copy(t){this.start.copy(t.start),this.end.copy(t.end),this.radius=t.radius}getCenter(t){return t.copy(this.end).add(this.start).multiplyScalar(.5)}translate(t){this.start.add(t),this.end.add(t)}checkAABBAxis(t,e,i,r,s,o,a,l,c){return(s-t<c||s-i<c)&&(t-o<c||i-o<c)&&(a-e<c||a-r<c)&&(e-l<c||r-l<c)}intersectsBox(t){return this.checkAABBAxis(this.start.x,this.start.y,this.end.x,this.end.y,t.min.x,t.max.x,t.min.y,t.max.y,this.radius)&&this.checkAABBAxis(this.start.x,this.start.z,this.end.x,this.end.z,t.min.x,t.max.x,t.min.z,t.max.z,this.radius)&&this.checkAABBAxis(this.start.y,this.start.z,this.end.y,this.end.z,t.min.y,t.max.y,t.min.z,t.max.z,this.radius)}}const _d={roomR:3};let ME=40;new j;new j;new j;const EE=()=>{const n=new LM({antialias:!0});return n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=an,n.toneMapping=Lf,n},TE=(n,t,e)=>{document.addEventListener("keydown",i=>{n[i.code]=!0}),document.addEventListener("keyup",i=>{n[i.code]=!1}),t.addEventListener("mousedown",()=>{document.body.requestPointerLock()}),document.body.addEventListener("mousemove",i=>{document.pointerLockElement===document.body&&(e.rotation.y-=i.movementX/500,e.rotation.x-=i.movementY/500)})},bE=(n,t,e,i)=>{let r=Math.exp(-4*n)-1;t.addScaledVector(t,r);const s=t.clone().multiplyScalar(n);e.translate(s),i.position.copy(e.end)},AE=(n,t,e,i,r)=>{const s=()=>(i.getWorldDirection(e),e.y=0,e.normalize(),e),o=()=>(i.getWorldDirection(e),e.y=0,e.normalize(),e.cross(i.up),e),a=n*25;r.KeyW&&t.add(s().multiplyScalar(a)),r.KeyS&&t.add(s().multiplyScalar(-a)),r.KeyA&&t.add(o().multiplyScalar(-a)),r.KeyD&&t.add(o().multiplyScalar(a))},wE=(n,t)=>{const e=ME-.15;(t.position.z<=-e||t.position.z>=e||t.position.x<=-e||t.position.x>=e)&&(n.start.set(0,.35,0),n.end.set(0,1,0),n.radius=.35,t.position.copy(n.end),t.rotation.set(0,0,0))},RE=$e;class zr extends Al{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,i,r){const s=this,o=new mE(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},i,r)}parse(t){const e=this;function i(N,D){if(N.nodeType!==1)return;const C=A(N);let y=!1,k=null;switch(N.nodeName){case"svg":D=x(N,D);break;case"style":s(N);break;case"g":D=x(N,D);break;case"path":D=x(N,D),N.hasAttribute("d")&&(k=r(N));break;case"rect":D=x(N,D),k=l(N);break;case"polygon":D=x(N,D),k=c(N);break;case"polyline":D=x(N,D),k=u(N);break;case"circle":D=x(N,D),k=h(N);break;case"ellipse":D=x(N,D),k=f(N);break;case"line":D=x(N,D),k=m(N);break;case"defs":y=!0;break;case"use":D=x(N,D);const O=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),lt=N.viewportElement.getElementById(O);lt?i(lt,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+O);break}k&&(D.fill!==void 0&&D.fill!=="none"&&k.color.setStyle(D.fill,RE),L(k,vt),K.push(k),k.userData={node:N,style:D});const $=N.childNodes;for(let V=0;V<$.length;V++){const O=$[V];y&&O.nodeName!=="style"&&O.nodeName!=="defs"||i(O,D)}C&&(tt.pop(),tt.length>0?vt.copy(tt[tt.length-1]):vt.identity())}function r(N){const D=new di,C=new mt,y=new mt,k=new mt;let $=!0,V=!1;const O=N.getAttribute("d");if(O===""||O==="none")return null;const lt=O.match(/[a-df-z][^a-df-z]*/ig);for(let E=0,b=lt.length;E<b;E++){const I=lt[E],q=I.charAt(0),M=I.slice(1).trim();$===!0&&(V=!0,$=!1);let g;switch(q){case"M":g=d(M);for(let S=0,F=g.length;S<F;S+=2)C.x=g[S+0],C.y=g[S+1],y.x=C.x,y.y=C.y,S===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),S===0&&k.copy(C);break;case"H":g=d(M);for(let S=0,F=g.length;S<F;S++)C.x=g[S],y.x=C.x,y.y=C.y,D.lineTo(C.x,C.y),S===0&&V===!0&&k.copy(C);break;case"V":g=d(M);for(let S=0,F=g.length;S<F;S++)C.y=g[S],y.x=C.x,y.y=C.y,D.lineTo(C.x,C.y),S===0&&V===!0&&k.copy(C);break;case"L":g=d(M);for(let S=0,F=g.length;S<F;S+=2)C.x=g[S+0],C.y=g[S+1],y.x=C.x,y.y=C.y,D.lineTo(C.x,C.y),S===0&&V===!0&&k.copy(C);break;case"C":g=d(M);for(let S=0,F=g.length;S<F;S+=6)D.bezierCurveTo(g[S+0],g[S+1],g[S+2],g[S+3],g[S+4],g[S+5]),y.x=g[S+2],y.y=g[S+3],C.x=g[S+4],C.y=g[S+5],S===0&&V===!0&&k.copy(C);break;case"S":g=d(M);for(let S=0,F=g.length;S<F;S+=4)D.bezierCurveTo(v(C.x,y.x),v(C.y,y.y),g[S+0],g[S+1],g[S+2],g[S+3]),y.x=g[S+0],y.y=g[S+1],C.x=g[S+2],C.y=g[S+3],S===0&&V===!0&&k.copy(C);break;case"Q":g=d(M);for(let S=0,F=g.length;S<F;S+=4)D.quadraticCurveTo(g[S+0],g[S+1],g[S+2],g[S+3]),y.x=g[S+0],y.y=g[S+1],C.x=g[S+2],C.y=g[S+3],S===0&&V===!0&&k.copy(C);break;case"T":g=d(M);for(let S=0,F=g.length;S<F;S+=2){const G=v(C.x,y.x),X=v(C.y,y.y);D.quadraticCurveTo(G,X,g[S+0],g[S+1]),y.x=G,y.y=X,C.x=g[S+0],C.y=g[S+1],S===0&&V===!0&&k.copy(C)}break;case"A":g=d(M,[3,4],7);for(let S=0,F=g.length;S<F;S+=7){if(g[S+5]==C.x&&g[S+6]==C.y)continue;const G=C.clone();C.x=g[S+5],C.y=g[S+6],y.x=C.x,y.y=C.y,o(D,g[S],g[S+1],g[S+2],g[S+3],g[S+4],G,C),S===0&&V===!0&&k.copy(C)}break;case"m":g=d(M);for(let S=0,F=g.length;S<F;S+=2)C.x+=g[S+0],C.y+=g[S+1],y.x=C.x,y.y=C.y,S===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),S===0&&k.copy(C);break;case"h":g=d(M);for(let S=0,F=g.length;S<F;S++)C.x+=g[S],y.x=C.x,y.y=C.y,D.lineTo(C.x,C.y),S===0&&V===!0&&k.copy(C);break;case"v":g=d(M);for(let S=0,F=g.length;S<F;S++)C.y+=g[S],y.x=C.x,y.y=C.y,D.lineTo(C.x,C.y),S===0&&V===!0&&k.copy(C);break;case"l":g=d(M);for(let S=0,F=g.length;S<F;S+=2)C.x+=g[S+0],C.y+=g[S+1],y.x=C.x,y.y=C.y,D.lineTo(C.x,C.y),S===0&&V===!0&&k.copy(C);break;case"c":g=d(M);for(let S=0,F=g.length;S<F;S+=6)D.bezierCurveTo(C.x+g[S+0],C.y+g[S+1],C.x+g[S+2],C.y+g[S+3],C.x+g[S+4],C.y+g[S+5]),y.x=C.x+g[S+2],y.y=C.y+g[S+3],C.x+=g[S+4],C.y+=g[S+5],S===0&&V===!0&&k.copy(C);break;case"s":g=d(M);for(let S=0,F=g.length;S<F;S+=4)D.bezierCurveTo(v(C.x,y.x),v(C.y,y.y),C.x+g[S+0],C.y+g[S+1],C.x+g[S+2],C.y+g[S+3]),y.x=C.x+g[S+0],y.y=C.y+g[S+1],C.x+=g[S+2],C.y+=g[S+3],S===0&&V===!0&&k.copy(C);break;case"q":g=d(M);for(let S=0,F=g.length;S<F;S+=4)D.quadraticCurveTo(C.x+g[S+0],C.y+g[S+1],C.x+g[S+2],C.y+g[S+3]),y.x=C.x+g[S+0],y.y=C.y+g[S+1],C.x+=g[S+2],C.y+=g[S+3],S===0&&V===!0&&k.copy(C);break;case"t":g=d(M);for(let S=0,F=g.length;S<F;S+=2){const G=v(C.x,y.x),X=v(C.y,y.y);D.quadraticCurveTo(G,X,C.x+g[S+0],C.y+g[S+1]),y.x=G,y.y=X,C.x=C.x+g[S+0],C.y=C.y+g[S+1],S===0&&V===!0&&k.copy(C)}break;case"a":g=d(M,[3,4],7);for(let S=0,F=g.length;S<F;S+=7){if(g[S+5]==0&&g[S+6]==0)continue;const G=C.clone();C.x+=g[S+5],C.y+=g[S+6],y.x=C.x,y.y=C.y,o(D,g[S],g[S+1],g[S+2],g[S+3],g[S+4],G,C),S===0&&V===!0&&k.copy(C)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(C.copy(k),D.currentPath.currentPoint.copy(C),$=!0);break;default:console.warn(I)}V=!1}return D}function s(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let D=0;D<N.sheet.cssRules.length;D++){const C=N.sheet.cssRules[D];if(C.type!==1)continue;const y=C.selectorText.split(/,/gm).filter(Boolean).map(k=>k.trim());for(let k=0;k<y.length;k++){const $=Object.fromEntries(Object.entries(C.style).filter(([,V])=>V!==""));W[y[k]]=Object.assign(W[y[k]]||{},$)}}}function o(N,D,C,y,k,$,V,O){if(D==0||C==0){N.lineTo(O.x,O.y);return}y=y*Math.PI/180,D=Math.abs(D),C=Math.abs(C);const lt=(V.x-O.x)/2,E=(V.y-O.y)/2,b=Math.cos(y)*lt+Math.sin(y)*E,I=-Math.sin(y)*lt+Math.cos(y)*E;let q=D*D,M=C*C;const g=b*b,S=I*I,F=g/q+S/M;if(F>1){const gt=Math.sqrt(F);D=gt*D,C=gt*C,q=D*D,M=C*C}const G=q*S+M*g,X=(q*M-G)/G;let at=Math.sqrt(Math.max(0,X));k===$&&(at=-at);const Q=at*D*I/C,ct=-at*C*b/D,dt=Math.cos(y)*Q-Math.sin(y)*ct+(V.x+O.x)/2,ut=Math.sin(y)*Q+Math.cos(y)*ct+(V.y+O.y)/2,pt=a(1,0,(b-Q)/D,(I-ct)/C),St=a((b-Q)/D,(I-ct)/C,(-b-Q)/D,(-I-ct)/C)%(Math.PI*2);N.currentPath.absellipse(dt,ut,D,C,pt,pt+St,$===0,y)}function a(N,D,C,y){const k=N*C+D*y,$=Math.sqrt(N*N+D*D)*Math.sqrt(C*C+y*y);let V=Math.acos(Math.max(-1,Math.min(1,k/$)));return N*y-D*C<0&&(V=-V),V}function l(N){const D=_(N.getAttribute("x")||0),C=_(N.getAttribute("y")||0),y=_(N.getAttribute("rx")||N.getAttribute("ry")||0),k=_(N.getAttribute("ry")||N.getAttribute("rx")||0),$=_(N.getAttribute("width")),V=_(N.getAttribute("height")),O=1-.551915024494,lt=new di;return lt.moveTo(D+y,C),lt.lineTo(D+$-y,C),(y!==0||k!==0)&&lt.bezierCurveTo(D+$-y*O,C,D+$,C+k*O,D+$,C+k),lt.lineTo(D+$,C+V-k),(y!==0||k!==0)&&lt.bezierCurveTo(D+$,C+V-k*O,D+$-y*O,C+V,D+$-y,C+V),lt.lineTo(D+y,C+V),(y!==0||k!==0)&&lt.bezierCurveTo(D+y*O,C+V,D,C+V-k*O,D,C+V-k),lt.lineTo(D,C+k),(y!==0||k!==0)&&lt.bezierCurveTo(D,C+k*O,D+y*O,C,D+y,C),lt}function c(N){function D($,V,O){const lt=_(V),E=_(O);k===0?y.moveTo(lt,E):y.lineTo(lt,E),k++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,y=new di;let k=0;return N.getAttribute("points").replace(C,D),y.currentPath.autoClose=!0,y}function u(N){function D($,V,O){const lt=_(V),E=_(O);k===0?y.moveTo(lt,E):y.lineTo(lt,E),k++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,y=new di;let k=0;return N.getAttribute("points").replace(C,D),y.currentPath.autoClose=!1,y}function h(N){const D=_(N.getAttribute("cx")||0),C=_(N.getAttribute("cy")||0),y=_(N.getAttribute("r")||0),k=new nr;k.absarc(D,C,y,0,Math.PI*2);const $=new di;return $.subPaths.push(k),$}function f(N){const D=_(N.getAttribute("cx")||0),C=_(N.getAttribute("cy")||0),y=_(N.getAttribute("rx")||0),k=_(N.getAttribute("ry")||0),$=new nr;$.absellipse(D,C,y,k,0,Math.PI*2);const V=new di;return V.subPaths.push($),V}function m(N){const D=_(N.getAttribute("x1")||0),C=_(N.getAttribute("y1")||0),y=_(N.getAttribute("x2")||0),k=_(N.getAttribute("y2")||0),$=new di;return $.moveTo(D,C),$.lineTo(y,k),$.currentPath.autoClose=!1,$}function x(N,D){D=Object.assign({},D);let C={};if(N.hasAttribute("class")){const V=N.getAttribute("class").split(/\s/).filter(Boolean).map(O=>O.trim());for(let O=0;O<V.length;O++)C=Object.assign(C,W["."+V[O]])}N.hasAttribute("id")&&(C=Object.assign(C,W["#"+N.getAttribute("id")]));function y(V,O,lt){lt===void 0&&(lt=function(b){return b.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),b}),N.hasAttribute(V)&&(D[O]=lt(N.getAttribute(V))),C[V]&&(D[O]=lt(C[V])),N.style&&N.style[V]!==""&&(D[O]=lt(N.style[V]))}function k(V){return Math.max(0,Math.min(1,_(V)))}function $(V){return Math.max(0,_(V))}return y("fill","fill"),y("fill-opacity","fillOpacity",k),y("fill-rule","fillRule"),y("opacity","opacity",k),y("stroke","stroke"),y("stroke-opacity","strokeOpacity",k),y("stroke-width","strokeWidth",$),y("stroke-linejoin","strokeLineJoin"),y("stroke-linecap","strokeLineCap"),y("stroke-miterlimit","strokeMiterLimit",$),y("visibility","visibility"),D}function v(N,D){return N-(D-N)}function d(N,D,C){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const y={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},k=0,$=1,V=2,O=3;let lt=k,E=!0,b="",I="";const q=[];function M(G,X,at){const Q=new SyntaxError('Unexpected character "'+G+'" at index '+X+".");throw Q.partial=at,Q}function g(){b!==""&&(I===""?q.push(Number(b)):q.push(Number(b)*Math.pow(10,Number(I)))),b="",I=""}let S;const F=N.length;for(let G=0;G<F;G++){if(S=N[G],Array.isArray(D)&&D.includes(q.length%C)&&y.FLAGS.test(S)){lt=$,b=S,g();continue}if(lt===k){if(y.WHITESPACE.test(S))continue;if(y.DIGIT.test(S)||y.SIGN.test(S)){lt=$,b=S;continue}if(y.POINT.test(S)){lt=V,b=S;continue}y.COMMA.test(S)&&(E&&M(S,G,q),E=!0)}if(lt===$){if(y.DIGIT.test(S)){b+=S;continue}if(y.POINT.test(S)){b+=S,lt=V;continue}if(y.EXP.test(S)){lt=O;continue}y.SIGN.test(S)&&b.length===1&&y.SIGN.test(b[0])&&M(S,G,q)}if(lt===V){if(y.DIGIT.test(S)){b+=S;continue}if(y.EXP.test(S)){lt=O;continue}y.POINT.test(S)&&b[b.length-1]==="."&&M(S,G,q)}if(lt===O){if(y.DIGIT.test(S)){I+=S;continue}if(y.SIGN.test(S)){if(I===""){I+=S;continue}I.length===1&&y.SIGN.test(I)&&M(S,G,q)}}y.WHITESPACE.test(S)?(g(),lt=k,E=!1):y.COMMA.test(S)?(g(),lt=k,E=!0):y.SIGN.test(S)?(g(),lt=$,b=S):y.POINT.test(S)?(g(),lt=V,b=S):M(S,G,q)}return g(),q}const p=["mm","cm","in","pt","pc","px"],w={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(N){let D="px";if(typeof N=="string"||N instanceof String)for(let y=0,k=p.length;y<k;y++){const $=p[y];if(N.endsWith($)){D=$,N=N.substring(0,N.length-$.length);break}}let C;return D==="px"&&e.defaultUnit!=="px"?C=w.in[e.defaultUnit]/e.defaultDPI:(C=w[D][e.defaultUnit],C<0&&(C=w[D].in*e.defaultDPI)),C*parseFloat(N)}function A(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const D=H(N);return tt.length>0&&D.premultiply(tt[tt.length-1]),vt.copy(D),tt.push(D),D}function H(N){const D=new Pt,C=ot;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const y=_(N.getAttribute("x")),k=_(N.getAttribute("y"));D.translate(y,k)}if(N.hasAttribute("transform")){const y=N.getAttribute("transform").split(")");for(let k=y.length-1;k>=0;k--){const $=y[k].trim();if($==="")continue;const V=$.indexOf("("),O=$.length;if(V>0&&V<O){const lt=$.slice(0,V),E=d($.slice(V+1));switch(C.identity(),lt){case"translate":if(E.length>=1){const b=E[0];let I=0;E.length>=2&&(I=E[1]),C.translate(b,I)}break;case"rotate":if(E.length>=1){let b=0,I=0,q=0;b=E[0]*Math.PI/180,E.length>=3&&(I=E[1],q=E[2]),st.makeTranslation(-I,-q),nt.makeRotation(b),B.multiplyMatrices(nt,st),st.makeTranslation(I,q),C.multiplyMatrices(st,B)}break;case"scale":if(E.length>=1){const b=E[0];let I=b;E.length>=2&&(I=E[1]),C.scale(b,I)}break;case"skewX":E.length===1&&C.set(1,Math.tan(E[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":E.length===1&&C.set(1,0,0,Math.tan(E[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":E.length===6&&C.set(E[0],E[2],E[4],E[1],E[3],E[5],0,0,1);break}}D.premultiply(C)}}return D}function L(N,D){function C(V){ht.set(V.x,V.y,1).applyMatrix3(D),V.set(ht.x,ht.y)}function y(V){const O=V.xRadius,lt=V.yRadius,E=Math.cos(V.aRotation),b=Math.sin(V.aRotation),I=new j(O*E,O*b,0),q=new j(-lt*b,lt*E,0),M=I.applyMatrix3(D),g=q.applyMatrix3(D),S=ot.set(M.x,g.x,0,M.y,g.y,0,0,0,1),F=st.copy(S).invert(),at=nt.copy(F).transpose().multiply(F).elements,Q=Z(at[0],at[1],at[4]),ct=Math.sqrt(Q.rt1),dt=Math.sqrt(Q.rt2);if(V.xRadius=1/ct,V.yRadius=1/dt,V.aRotation=Math.atan2(Q.sn,Q.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const pt=st.set(ct,0,0,0,dt,0,0,0,1),St=nt.set(Q.cs,Q.sn,0,-Q.sn,Q.cs,0,0,0,1),gt=pt.multiply(St).multiply(S),Mt=It=>{const{x:Vt,y:Wt}=new j(Math.cos(It),Math.sin(It),0).applyMatrix3(gt);return Math.atan2(Wt,Vt)};V.aStartAngle=Mt(V.aStartAngle),V.aEndAngle=Mt(V.aEndAngle),U(D)&&(V.aClockwise=!V.aClockwise)}}function k(V){const O=R(D),lt=T(D);V.xRadius*=O,V.yRadius*=lt;const E=O>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);V.aRotation+=E,U(D)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const $=N.subPaths;for(let V=0,O=$.length;V<O;V++){const E=$[V].curves;for(let b=0;b<E.length;b++){const I=E[b];I.isLineCurve?(C(I.v1),C(I.v2)):I.isCubicBezierCurve?(C(I.v0),C(I.v1),C(I.v2),C(I.v3)):I.isQuadraticBezierCurve?(C(I.v0),C(I.v1),C(I.v2)):I.isEllipseCurve&&(ft.set(I.aX,I.aY),C(ft),I.aX=ft.x,I.aY=ft.y,Y(D)?y(I):k(I))}}}function U(N){const D=N.elements;return D[0]*D[4]-D[1]*D[3]<0}function Y(N){const D=N.elements,C=D[0]*D[3]+D[1]*D[4];if(C===0)return!1;const y=R(N),k=T(N);return Math.abs(C/(y*k))>Number.EPSILON}function R(N){const D=N.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function T(N){const D=N.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function Z(N,D,C){let y,k,$,V,O;const lt=N+C,E=N-C,b=Math.sqrt(E*E+4*D*D);return lt>0?(y=.5*(lt+b),O=1/y,k=N*O*C-D*O*D):lt<0?k=.5*(lt-b):(y=.5*b,k=-.5*b),E>0?$=E+b:$=E-b,Math.abs($)>2*Math.abs(D)?(O=-2*D/$,V=1/Math.sqrt(1+O*O),$=O*V):Math.abs(D)===0?($=1,V=0):(O=-.5*$/D,$=1/Math.sqrt(1+O*O),V=O*$),E>0&&(O=$,$=-V,V=O),{rt1:y,rt2:k,cs:$,sn:V}}const K=[],W={},tt=[],ot=new Pt,st=new Pt,nt=new Pt,B=new Pt,ft=new mt,ht=new j,vt=new Pt,bt=new DOMParser().parseFromString(t,"image/svg+xml");return i(bt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:K,xml:bt.documentElement}}static createShapes(t){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(v,d,p,w){const _=v.x,A=d.x,H=p.x,L=w.x,U=v.y,Y=d.y,R=p.y,T=w.y,Z=(L-H)*(U-R)-(T-R)*(_-H),K=(A-_)*(U-R)-(Y-U)*(_-H),W=(T-R)*(A-_)-(L-H)*(Y-U),tt=Z/W,ot=K/W;if(W===0&&Z!==0||tt<=0||tt>=1||ot<0||ot>1)return null;if(Z===0&&W===0){for(let st=0;st<2;st++)if(o(st===0?p:w,v,d),r.loc==i.ORIGIN){const nt=st===0?p:w;return{x:nt.x,y:nt.y,t:r.t}}else if(r.loc==i.BETWEEN){const nt=+(_+r.t*(A-_)).toPrecision(10),B=+(U+r.t*(Y-U)).toPrecision(10);return{x:nt,y:B,t:r.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?p:w,v,d),r.loc==i.ORIGIN){const ft=B===0?p:w;return{x:ft.x,y:ft.y,t:r.t}}const st=+(_+tt*(A-_)).toPrecision(10),nt=+(U+tt*(Y-U)).toPrecision(10);return{x:st,y:nt,t:tt}}}function o(v,d,p){const w=p.x-d.x,_=p.y-d.y,A=v.x-d.x,H=v.y-d.y,L=w*H-A*_;if(v.x===d.x&&v.y===d.y){r.loc=i.ORIGIN,r.t=0;return}if(v.x===p.x&&v.y===p.y){r.loc=i.DESTINATION,r.t=1;return}if(L<-Number.EPSILON){r.loc=i.LEFT;return}if(L>Number.EPSILON){r.loc=i.RIGHT;return}if(w*A<0||_*H<0){r.loc=i.BEHIND;return}if(Math.sqrt(w*w+_*_)<Math.sqrt(A*A+H*H)){r.loc=i.BEYOND;return}let U;w!==0?U=A/w:U=H/_,r.loc=i.BETWEEN,r.t=U}function a(v,d){const p=[],w=[];for(let _=1;_<v.length;_++){const A=v[_-1],H=v[_];for(let L=1;L<d.length;L++){const U=d[L-1],Y=d[L],R=s(A,H,U,Y);R!==null&&p.find(T=>T.t<=R.t+Number.EPSILON&&T.t>=R.t-Number.EPSILON)===void 0&&(p.push(R),w.push(new mt(R.x,R.y)))}}return w}function l(v,d,p){const w=new mt;d.getCenter(w);const _=[];return p.forEach(A=>{A.boundingBox.containsPoint(w)&&a(v,A.points).forEach(L=>{_.push({identifier:A.identifier,isCW:A.isCW,point:L})})}),_.sort((A,H)=>A.point.x-H.point.x),_}function c(v,d,p,w,_){(_==null||_==="")&&(_="nonzero");const A=new mt;v.boundingBox.getCenter(A);const H=[new mt(p,A.y),new mt(w,A.y)],L=l(H,v.boundingBox,d);L.sort((K,W)=>K.point.x-W.point.x);const U=[],Y=[];L.forEach(K=>{K.identifier===v.identifier?U.push(K):Y.push(K)});const R=U[0].point.x,T=[];let Z=0;for(;Z<Y.length&&Y[Z].point.x<R;)T.length>0&&T[T.length-1]===Y[Z].identifier?T.pop():T.push(Y[Z].identifier),Z++;if(T.push(v.identifier),_==="evenodd"){const K=T.length%2===0,W=T[T.length-2];return{identifier:v.identifier,isHole:K,for:W}}else if(_==="nonzero"){let K=!0,W=null,tt=null;for(let ot=0;ot<T.length;ot++){const st=T[ot];K?(tt=d[st].isCW,K=!1,W=st):tt!==d[st].isCW&&(tt=d[st].isCW,K=!0)}return{identifier:v.identifier,isHole:K,for:W}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(v=>{const d=v.getPoints();let p=-999999999,w=999999999,_=-999999999,A=999999999;for(let H=0;H<d.length;H++){const L=d[H];L.y>p&&(p=L.y),L.y<w&&(w=L.y),L.x>_&&(_=L.x),L.x<A&&(A=L.x)}return h<=_&&(h=_+1),u>=A&&(u=A-1),{curves:v.curves,points:d,isCW:Ti.isClockWise(d),identifier:-1,boundingBox:new SE(new mt(A,w),new mt(_,p))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const m=f.map(v=>c(v,f,u,h,t.userData?t.userData.style.fillRule:void 0)),x=[];return f.forEach(v=>{if(!m[v.identifier].isHole){const p=new Br;p.curves=v.curves,m.filter(_=>_.isHole&&_.for===v.identifier).forEach(_=>{const A=f[_.identifier],H=new nr;H.curves=A.curves,p.holes.push(H)}),x.push(p)}}),x}static getStrokeStyle(t,e,i,r,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(t,e,i,r){const s=[],o=[],a=[];if(zr.pointsToStrokeWithBuffers(t,e,i,r,s,o,a)===0)return null;const l=new en;return l.setAttribute("position",new xe(s,3)),l.setAttribute("normal",new xe(o,3)),l.setAttribute("uv",new xe(a,2)),l}static pointsToStrokeWithBuffers(t,e,i,r,s,o,a,l){const c=new mt,u=new mt,h=new mt,f=new mt,m=new mt,x=new mt,v=new mt,d=new mt,p=new mt,w=new mt,_=new mt,A=new mt,H=new mt,L=new mt,U=new mt,Y=new mt,R=new mt;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,t=E(t);const T=t.length;if(T<2)return 0;const Z=t[0].equals(t[T-1]);let K,W=t[0],tt;const ot=e.strokeWidth/2,st=1/(T-1);let nt=0,B,ft,ht,vt,bt=!1,Gt=0,N=l*3,D=l*2;C(t[0],t[1],c).multiplyScalar(ot),d.copy(t[0]).sub(c),p.copy(t[0]).add(c),w.copy(d),_.copy(p);for(let b=1;b<T;b++){K=t[b],b===T-1?Z?tt=t[1]:tt=void 0:tt=t[b+1];const I=c;if(C(W,K,I),h.copy(I).multiplyScalar(ot),A.copy(K).sub(h),H.copy(K).add(h),B=nt+st,ft=!1,tt!==void 0){C(K,tt,u),h.copy(u).multiplyScalar(ot),L.copy(K).sub(h),U.copy(K).add(h),ht=!0,h.subVectors(tt,W),I.dot(h)<0&&(ht=!1),b===1&&(bt=ht),h.subVectors(tt,K),h.normalize();const q=Math.abs(I.dot(h));if(q>Number.EPSILON){const M=ot/q;h.multiplyScalar(-M),f.subVectors(K,W),m.copy(f).setLength(M).add(h),Y.copy(m).negate();const g=m.length(),S=f.length();f.divideScalar(S),x.subVectors(tt,K);const F=x.length();switch(x.divideScalar(F),f.dot(Y)<S&&x.dot(Y)<F&&(ft=!0),R.copy(m).add(K),Y.add(K),vt=!1,ft?ht?(U.copy(Y),H.copy(Y)):(L.copy(Y),A.copy(Y)):$(),e.strokeLineJoin){case"bevel":V(ht,ft,B);break;case"round":O(ht,ft),ht?k(K,A,L,B,0):k(K,U,H,B,1);break;case"miter":case"miter-clip":default:const G=ot*e.strokeMiterLimit/g;if(G<1)if(e.strokeLineJoin!=="miter-clip"){V(ht,ft,B);break}else O(ht,ft),ht?(x.subVectors(R,A).multiplyScalar(G).add(A),v.subVectors(R,L).multiplyScalar(G).add(L),y(A,B,0),y(x,B,0),y(K,B,.5),y(K,B,.5),y(x,B,0),y(v,B,0),y(K,B,.5),y(v,B,0),y(L,B,0)):(x.subVectors(R,H).multiplyScalar(G).add(H),v.subVectors(R,U).multiplyScalar(G).add(U),y(H,B,1),y(x,B,1),y(K,B,.5),y(K,B,.5),y(x,B,1),y(v,B,1),y(K,B,.5),y(v,B,1),y(U,B,1));else ft?(ht?(y(p,nt,1),y(d,nt,0),y(R,B,0),y(p,nt,1),y(R,B,0),y(Y,B,1)):(y(p,nt,1),y(d,nt,0),y(R,B,1),y(d,nt,0),y(Y,B,0),y(R,B,1)),ht?L.copy(R):U.copy(R)):ht?(y(A,B,0),y(R,B,0),y(K,B,.5),y(K,B,.5),y(R,B,0),y(L,B,0)):(y(H,B,1),y(R,B,1),y(K,B,.5),y(K,B,.5),y(R,B,1),y(U,B,1)),vt=!0;break}}else $()}else $();!Z&&b===T-1&&lt(t[0],w,_,ht,!0,nt),nt=B,W=K,d.copy(L),p.copy(U)}if(!Z)lt(K,A,H,ht,!1,B);else if(ft&&s){let b=R,I=Y;bt!==ht&&(b=Y,I=R),ht?(vt||bt)&&(I.toArray(s,0*3),I.toArray(s,3*3),vt&&b.toArray(s,1*3)):(vt||!bt)&&(I.toArray(s,1*3),I.toArray(s,3*3),vt&&b.toArray(s,0*3))}return Gt;function C(b,I,q){return q.subVectors(I,b),q.set(-q.y,q.x).normalize()}function y(b,I,q){s&&(s[N]=b.x,s[N+1]=b.y,s[N+2]=0,o&&(o[N]=0,o[N+1]=0,o[N+2]=1),N+=3,a&&(a[D]=I,a[D+1]=q,D+=2)),Gt+=3}function k(b,I,q,M,g){c.copy(I).sub(b).normalize(),u.copy(q).sub(b).normalize();let S=Math.PI;const F=c.dot(u);Math.abs(F)<1&&(S=Math.abs(Math.acos(F))),S/=i,h.copy(I);for(let G=0,X=i-1;G<X;G++)f.copy(h).rotateAround(b,S),y(h,M,g),y(f,M,g),y(b,M,.5),h.copy(f);y(f,M,g),y(q,M,g),y(b,M,.5)}function $(){y(p,nt,1),y(d,nt,0),y(A,B,0),y(p,nt,1),y(A,B,0),y(H,B,1)}function V(b,I,q){I?b?(y(p,nt,1),y(d,nt,0),y(A,B,0),y(p,nt,1),y(A,B,0),y(Y,B,1),y(A,q,0),y(L,q,0),y(Y,q,.5)):(y(p,nt,1),y(d,nt,0),y(H,B,1),y(d,nt,0),y(Y,B,0),y(H,B,1),y(H,q,1),y(Y,q,0),y(U,q,1)):b?(y(A,q,0),y(L,q,0),y(K,q,.5)):(y(H,q,1),y(U,q,0),y(K,q,.5))}function O(b,I){I&&(b?(y(p,nt,1),y(d,nt,0),y(A,B,0),y(p,nt,1),y(A,B,0),y(Y,B,1),y(A,nt,0),y(K,B,.5),y(Y,B,1),y(K,B,.5),y(L,nt,0),y(Y,B,1)):(y(p,nt,1),y(d,nt,0),y(H,B,1),y(d,nt,0),y(Y,B,0),y(H,B,1),y(H,nt,1),y(Y,B,0),y(K,B,.5),y(K,B,.5),y(Y,B,0),y(U,nt,1)))}function lt(b,I,q,M,g,S){switch(e.strokeLineCap){case"round":g?k(b,q,I,S,.5):k(b,I,q,S,.5);break;case"square":if(g)c.subVectors(I,b),u.set(c.y,-c.x),h.addVectors(c,u).add(b),f.subVectors(u,c).add(b),M?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),a[3*2+1]===1?f.toArray(s,3*3):h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(q,b),u.set(c.y,-c.x),h.addVectors(c,u).add(b),f.subVectors(u,c).add(b);const F=s.length;M?(h.toArray(s,F-1*3),f.toArray(s,F-2*3),f.toArray(s,F-4*3)):(f.toArray(s,F-2*3),h.toArray(s,F-1*3),f.toArray(s,F-4*3))}break}}function E(b){let I=!1;for(let M=1,g=b.length-1;M<g;M++)if(b[M].distanceTo(b[M+1])<r){I=!0;break}if(!I)return b;const q=[];q.push(b[0]);for(let M=1,g=b.length-1;M<g;M++)b[M].distanceTo(b[M+1])>=r&&q.push(b[M]);return q.push(b[b.length-1]),q}}}const fh=new j,CE=new pr,dh=new j;class PE extends ue{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const on=new te,LE=new te;class JE{constructor(t={}){const e=this;let i,r,s,o;const a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:r}},this.render=function(v,d){const p=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(i/d.view.width)}px, ${-d.view.offsetY*(r/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let w,_;d.isOrthographicCamera&&(w=-(d.right+d.left)/2,_=(d.top+d.bottom)/2);const A=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,H=d.isOrthographicCamera?`scale( ${A} )scale(`+p+")translate("+h(w)+"px,"+h(_)+"px)"+f(d.matrixWorldInverse):`scale( ${A} )translateZ(`+p+"px)"+f(d.matrixWorldInverse),U=(d.isPerspectiveCamera?"perspective("+p+"px) ":"")+H+"translate("+s+"px,"+o+"px)";a.camera.style!==U&&(u.style.transform=U,a.camera.style=U),x(v,v,d)},this.setSize=function(v,d){i=v,r=d,s=i/2,o=r/2,l.style.width=v+"px",l.style.height=d+"px",c.style.width=v+"px",c.style.height=d+"px",u.style.width=v+"px",u.style.height=d+"px"};function h(v){return Math.abs(v)<1e-10?0:v}function f(v){const d=v.elements;return"matrix3d("+h(d[0])+","+h(-d[1])+","+h(d[2])+","+h(d[3])+","+h(d[4])+","+h(-d[5])+","+h(d[6])+","+h(d[7])+","+h(d[8])+","+h(-d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(-d[13])+","+h(d[14])+","+h(d[15])+")"}function m(v){const d=v.elements;return"translate(-50%,-50%)"+("matrix3d("+h(d[0])+","+h(d[1])+","+h(d[2])+","+h(d[3])+","+h(-d[4])+","+h(-d[5])+","+h(-d[6])+","+h(-d[7])+","+h(d[8])+","+h(d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(d[13])+","+h(d[14])+","+h(d[15])+")")}function x(v,d,p,w){if(v.isCSS3DObject){const _=v.visible===!0&&v.layers.test(p.layers)===!0;if(v.element.style.display=_===!0?"":"none",_===!0){v.onBeforeRender(e,d,p);let A;v.isCSS3DSprite?(on.copy(p.matrixWorldInverse),on.transpose(),v.rotation2D!==0&&on.multiply(LE.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(fh,CE,dh),on.setPosition(fh),on.scale(dh),on.elements[3]=0,on.elements[7]=0,on.elements[11]=0,on.elements[15]=1,A=m(on)):A=m(v.matrixWorld);const H=v.element,L=a.objects.get(v);if(L===void 0||L.style!==A){H.style.transform=A;const U={style:A};a.objects.set(v,U)}H.parentNode!==u&&u.appendChild(H),v.onAfterRender(e,d,p)}}for(let _=0,A=v.children.length;_<A;_++)x(v.children[_],d,p)}}}let zs=_d.roomR;const IE=(n,t,e,i,r)=>{const s=document.createElement("div");s.style.width="480px",s.style.height="360px",s.style.backgroundColor="#000";const o=document.createElement("iframe");o.style.width="480px",o.style.height="360px",o.style.border="0px",o.src=["https://www.youtube.com/embed/",n,"?rel=0"].join(""),s.appendChild(o);const a=new PE(s);return a.position.set(t,e,i),a.rotation.y=r,a},DE=n=>{const t=new ve(new mn(2*zs,2*zs),new ir({color:"red",depthWrite:!1}));t.rotation.y=0,t.position.set(0,zs,-zs),t.receiveShadow=!0,n.add(t);const e=new ji;e.add(IE("SJOz3qjfQXU",0,0,2,0)),n.add(e)};let Yt=_d.roomR;const UE=n=>{n.background=new Ft(16777215),n.fog=new Ml(16777215,0,50);const t=new gE(16777215,16777215,1.5);t.position.set(2,1,1),n.add(t);const e=new xE(16777215,2.5);e.position.set(1,10,1),e.castShadow=!0,e.shadow.camera.near=.01,e.shadow.camera.far=500,e.shadow.camera.right=30,e.shadow.camera.left=-30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.radius=4,e.shadow.bias=-6e-5,n.add(e)},NE=n=>{OE(n),FE(n),BE(n)},OE=n=>{const t=new ve(new mn(2*Yt,2*Yt),new ir({color:12303291,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const e=new $s(2*Yt,4*Yt,0,0);e.material.opacity=1,e.material.transparent=!0,n.add(e)},FE=n=>{const t=new ve(new mn(2*Yt,2*Yt),new ir({color:"green",depthWrite:!1}));t.rotation.y=Math.PI/2,t.position.set(-Yt,Yt,0),t.receiveShadow=!0,n.add(t);const e=new $s(2*Yt,4*Yt,0,0);e.material.opacity=1,e.rotateZ(Math.PI/2),e.position.set(-Yt,Yt,0),e.material.transparent=!0,n.add(e);const i=new ve(new mn(2*Yt,2*Yt),new ir({color:"yellow",depthWrite:!1}));i.rotation.y=-Math.PI/2,i.position.set(Yt,Yt,0),i.receiveShadow=!0,n.add(i);const r=new $s(2*Yt,4*Yt,0,0);r.material.opacity=1,r.rotateZ(Math.PI/2),r.position.set(Yt,Yt,0),r.material.transparent=!0,n.add(r);const s=new ve(new mn(2*Yt,2*Yt),new ir({color:"blue",depthWrite:!1}));s.rotation.y=Math.PI,s.position.set(0,Yt,Yt),s.receiveShadow=!0,n.add(s);const o=new $s(2*Yt,4*Yt,0,0);o.material.opacity=1,o.rotateX(Math.PI/2),o.position.set(0,Yt,Yt),o.material.transparent=!0,n.add(o),DE(n)},BE=n=>{const t=new ve(new mn(2*Yt,2*Yt),new ir({color:16777215,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.set(0,2*Yt,0),t.receiveShadow=!0,n.add(t);const e=new zr;let i={currentURL:"/public/models/tiger.svg",drawFillShapes:!0,drawStrokes:!0,fillShapesWireframe:!1,strokesWireframe:!1};e.load(i.currentURL,function(r){var a,l,c,u,h;const s=new ji;s.scale.multiplyScalar(.01),s.position.x=-3,s.position.y=6,s.position.z=3,s.rotateX(Math.PI/2),s.scale.y*=-1;let o=0;for(const f of r.paths){const m=(a=f==null?void 0:f.userData)==null?void 0:a.style.fill;if(m!==void 0&&m!=="none"){const v=new oo({color:new Ft().setStyle(m),opacity:(l=f==null?void 0:f.userData)==null?void 0:l.style.fillOpacity,transparent:!0,side:Ke,depthWrite:!1,wireframe:i.fillShapesWireframe}),d=zr.createShapes(f);for(const p of d){const w=new bl(p),_=new ve(w,v);_.renderOrder=o++,s.add(_)}}const x=(c=f==null?void 0:f.userData)==null?void 0:c.style.stroke;if(x!==void 0&&x!=="none"){const v=new oo({color:new Ft().setStyle(x),opacity:(u=f==null?void 0:f.userData)==null?void 0:u.style.strokeOpacity,transparent:!0,side:Ke,depthWrite:!1,wireframe:i.strokesWireframe});for(const d of f.subPaths){const p=zr.pointsToStroke(d.getPoints(),(h=f==null?void 0:f.userData)==null?void 0:h.style);if(p){const w=new ve(p,v);w.renderOrder=o++,s.add(w)}}}}n.add(s)})},zE=()=>{const n=new Ve(70,window.innerWidth/window.innerHeight,.1,1e3);return n.rotation.order="YXZ",n},vd=n=>(_p("data-v-2ef67041"),n=n(),vp(),n),HE={class:"home-box"},VE=vd(()=>vo("div",{id:"container",class:"box-3d"},null,-1)),kE=vd(()=>vo("div",{style:{border:"1px greenyellow solid"},id:"blocker"},null,-1)),GE=[VE,kE],ph=5,WE=ts({__name:"TheWorld",setup(n){const t=new yE,e=new IM;UE(e);const i=zE();let r;const s=new wl(new j(0,.35,0),new j(0,1,0),.35),o=new j,a=new j,l={};let c;const u=()=>{r=document.getElementById("container"),c=EE(),r.appendChild(c.domElement),NE(e),TE(l,r,i);function h(){const f=Math.min(.05,t.getDelta())/ph;for(let m=0;m<ph;m++)AE(f,o,a,i,l),bE(f,o,s,i),wE(s,i);c.render(e,i),requestAnimationFrame(h)}h()};return Zh(()=>{u()}),(h,f)=>(hl(),ff("div",HE,GE))}}),XE=Cf(WE,[["__scopeId","data-v-2ef67041"]]),qE=ts({__name:"HomeView",setup(n){return(t,e)=>(hl(),om(XE))}}),YE=Kg({history:Ag("/"),routes:[{path:"/home",name:"home",component:qE},{path:"/test1",name:"test",component:()=>Ho(()=>import("./TestView-GKG0nLKP.js"),__vite__mapDeps([0,1]))},{path:"/html",name:"html",component:()=>Ho(()=>import("./HtmlView-mEDUmIIL.js"),__vite__mapDeps([2,3]))},{path:"/",name:"index",component:()=>Ho(()=>import("./Index-Be2Gf5E_.js"),__vite__mapDeps([4,5]))}]}),Rl=Wm(t_);Rl.use(jm());Rl.use(YE);Rl.mount("#app");export{JE as C,dr as E,An as F,ji as G,KE as M,Ve as P,pr as Q,IM as S,j as V,Cf as _,ZE as a,mt as b,ff as c,ts as d,hl as e,PE as f,vp as g,vo as h,wl as i,yE as j,om as k,cm as l,jE as m,$E as n,Zh as o,_p as p,Ja as q,Bh as r,Le as s,Ei as u};
