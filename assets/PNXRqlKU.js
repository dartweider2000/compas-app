import{d as S,ao as b,y as A,J as I,$ as k,O,P,L,k as B,o as C,u as x,w as M}from"./DhoZzYos.js";import{_ as V}from"./6X4RCJqN.js";const W=e=>(O("data-v-e0022e5f"),e=e(),P(),e),j=W(()=>L("span",null,null,-1)),T=[j],D=S({__name:"UIBurger",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const r=b(e,"modelValue");return(s,n)=>(A(),I("button",{class:k(["burger",{burger_active:r.value}])},T,2))}}),R=V(D,[["__scopeId","data-v-e0022e5f"]]);function G(e){return B()?(C(e),!0):!1}function y(e){return typeof e=="function"?e():x(e)}const g=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const N=Object.prototype.toString,$=e=>N.call(e)==="[object Object]",w=()=>{},q=z();function z(){var e,r;return g&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((r=window==null?void 0:window.navigator)==null?void 0:r.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function p(e){var r;const s=y(e);return(r=s==null?void 0:s.$el)!=null?r:s}const E=g?window:void 0;function h(...e){let r,s,n,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,n,l]=e,r=E):[r,s,n,l]=e,!r)return w;Array.isArray(s)||(s=[s]),Array.isArray(n)||(n=[n]);const d=[],f=()=>{d.forEach(a=>a()),d.length=0},u=(a,c,t,o)=>(a.addEventListener(c,t,o),()=>a.removeEventListener(c,t,o)),m=M(()=>[p(r),y(l)],([a,c])=>{if(f(),!a)return;const t=$(c)?{...c}:c;d.push(...s.flatMap(o=>n.map(i=>u(a,o,i,t))))},{immediate:!0,flush:"post"}),_=()=>{m(),f()};return G(_),_}let v=!1;function U(e,r,s={}){const{window:n=E,ignore:l=[],capture:d=!0,detectIframe:f=!1}=s;if(!n)return w;q&&!v&&(v=!0,Array.from(n.document.body.children).forEach(t=>t.addEventListener("click",w)),n.document.documentElement.addEventListener("click",w));let u=!0;const m=t=>l.some(o=>{if(typeof o=="string")return Array.from(n.document.querySelectorAll(o)).some(i=>i===t.target||t.composedPath().includes(i));{const i=p(o);return i&&(t.target===i||t.composedPath().includes(i))}}),a=[h(n,"click",t=>{const o=p(e);if(!(!o||o===t.target||t.composedPath().includes(o))){if(t.detail===0&&(u=!m(t)),!u){u=!0;return}r(t)}},{passive:!0,capture:d}),h(n,"pointerdown",t=>{const o=p(e);u=!m(t)&&!!(o&&!t.composedPath().includes(o))},{passive:!0}),f&&h(n,"blur",t=>{setTimeout(()=>{var o;const i=p(e);((o=n.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(i!=null&&i.contains(n.document.activeElement))&&r(t)},0)})].filter(Boolean);return()=>a.forEach(t=>t())}export{R as _,U as o};