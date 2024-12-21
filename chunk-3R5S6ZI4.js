import{b as F}from"./chunk-MRBFV4MS.js";import"./chunk-GNGLHN23.js";import{Cb as C,Db as S,Eb as _,Fb as r,Hb as I,Ua as c,Ub as M,Va as h,bb as w,e as y,gb as v,oc as E,pb as b,qb as k,tb as e,ub as t,va as s,vb as p,wa as m,wb as f,xa as d,xb as g,ya as u,yb as x}from"./chunk-PPE7DTG5.js";var T=["importFileInput"];function R(a,P){a&1&&(e(0,"div",18),d(),e(1,"svg",19),p(2,"path",20)(3,"path",21),t(),r(4," Importing... "),t())}function Z(a,P){if(a&1){let i=f();d(),e(0,"svg",22),p(1,"path",23),t(),u(),e(2,"h3",24),r(3),t(),e(4,"button",25),g("click",function(){s(i);let o=x();return m(o.closeStatusModal())}),r(5," Ok "),t()}if(a&2){let i=x();c(3),I(" ",i.statusMessage," ")}}var z=(()=>{class a{constructor(i,n){this.cdr=i,this.storageService=n,this.importFile=null}handleFileInput(i){this.importFile=i.target.files.item(0)}import(){return y(this,null,function*(){this.importFile?(this.statusMessage="",this.showStatusModal=!0,this.showImportProgress=!0,this.cdr.markForCheck(),yield this.storageService.importDb(this.importFile,this.progressCallback.bind(this))):(this.statusMessage="Please select a file to import!",this.showStatusModal=!0)})}closeStatusModal(){this.showStatusModal=!1}progressCallback(i){return i.done&&(this.statusMessage="Data imported successfully!",this.showImportProgress=!1,this.importFile=null,this.importFileInputRef&&(this.importFileInputRef.nativeElement.value="")),this.cdr.markForCheck(),!0}static{this.\u0275fac=function(n){return new(n||a)(h(M),h(F))}}static{this.\u0275cmp=w({type:a,selectors:[["app-import"]],viewQuery:function(n,o){if(n&1&&C(T,7),n&2){let l;S(l=_())&&(o.importFileInputRef=l.first)}},decls:28,vars:3,consts:[["importFileInput",""],[1,"p-4"],[1,"text-xl","font-semibold","text-gray-900","sm:text-2xl","dark:text-white"],[1,"my-4","text-gray-500","dark:text-gray-400"],["role","alert",1,"flex","items-center","p-4","mb-4","text-sm","text-yellow-800","border","border-yellow-300","rounded-lg","bg-yellow-50","dark:bg-gray-800","dark:text-yellow-300","dark:border-yellow-800"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"flex-shrink-0","inline","w-4","h-4","me-3"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"],[1,"sr-only"],[1,"font-semibold"],[1,"flex","flex-col","w-full","items-center","mt-8"],[1,"mb-8","w-4/5","max-w-96"],["for","file",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","file","type","file","accept","application/json",1,"block","w-full","text-sm","text-gray-900","border","border-gray-300","rounded-lg","cursor-pointer","bg-gray-50","dark:text-gray-400","focus:outline-none","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400",3,"change"],["type","button",1,"w-36","text-white","bg-primary-700","hover:bg-primary-800","focus:ring-4","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","dark:bg-primary-600","dark:hover:bg-primary-700","focus:outline-none","dark:focus:ring-primary-800",3,"click"],["tabindex","-1",1,"flex","bg-gray-900","bg-opacity-50","dark:bg-opacity-80","overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","z-50","justify-center","items-center","w-full","md:inset-0","h-[calc(100%-1rem)]","max-h-full"],[1,"relative","p-4","w-full","max-w-md","max-h-full"],[1,"relative","bg-white","rounded-lg","shadow","dark:bg-gray-700"],[1,"p-4","md:p-5","text-center"],["role","status"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-8","h-8","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"mx-auto","mb-4","text-gray-400","w-12","h-12","dark:text-gray-200"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"mb-5","text-lg","font-normal","text-gray-500","dark:text-gray-400"],["type","button",1,"py-2.5","px-5","ms-3","text-sm","font-medium","text-gray-900","focus:outline-none","bg-white","rounded-lg","border","border-gray-200","hover:bg-gray-100","hover:text-blue-700","focus:z-10","focus:ring-4","focus:ring-gray-100","dark:focus:ring-gray-700","dark:bg-gray-800","dark:text-gray-400","dark:border-gray-600","dark:hover:text-white","dark:hover:bg-gray-700",3,"click"]],template:function(n,o){if(n&1){let l=f();e(0,"div",1)(1,"h1",2),r(2," Import Data "),t(),e(3,"p",3),r(4," You can import your data exported from another device. "),t(),e(5,"div",4),d(),e(6,"svg",5),p(7,"path",6),t(),u(),e(8,"span",7),r(9,"Info"),t(),e(10,"div")(11,"span",8),r(12,"Warning:"),t(),r(13," Importing data will clear any existing data! "),t()(),e(14,"div",9)(15,"div",10)(16,"label",11),r(17,"Upload File"),t(),e(18,"input",12,0),g("change",function(D){return s(l),m(o.handleFileInput(D))}),t()(),e(20,"button",13),g("click",function(){return s(l),m(o.import())}),r(21," Import "),t()(),e(22,"div",14)(23,"div",15)(24,"div",16)(25,"div",17),v(26,R,5,0,"div",18)(27,Z,6,1),t()()()()()}n&2&&(c(22),b("hidden",!o.showStatusModal),c(4),k(o.showImportProgress?26:27))},dependencies:[E],encapsulation:2,changeDetection:0})}}return a})();export{z as ImportPage};