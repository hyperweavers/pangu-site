import{Ba as i,Ca as a,Yb as t,Zb as l,m as s,ma as u,ta as c}from"./chunk-PPE7DTG5.js";function v(d,n){!n?.injector&&c(v);let r=n?.injector??u(i),e=new s(1),b=l(()=>{let o;try{o=d()}catch(f){t(()=>e.error(f));return}t(()=>e.next(o))},{injector:r,manualCleanup:!0});return r.get(a).onDestroy(()=>{b.destroy(),e.complete()}),e.asObservable()}export{v as a};