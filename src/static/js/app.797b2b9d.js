(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0319":function(t,e,a){"use strict";var i=a("0f4c"),n=a.n(i);n.a},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"085f":function(t,e,a){},"0f4c":function(t,e,a){},1:function(t,e){},"11c8":function(t,e,a){},1455:function(t,e,a){"use strict";var i=a("2014"),n=a.n(i);n.a},1976:function(t,e,a){"use strict";var i=a("9bea"),n=a.n(i);n.a},"1ce0":function(t,e,a){},2014:function(t,e,a){},3079:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAAEcBAMAAADdJmvlAAAAG1BMVEWpqakAAAAqKiqTk5NUVFQVFRV+fn5paWk/Pz/exVl0AAABQklEQVR4nO3WwUoCURQG4KOj6dKR2hdG60GFXIoatDQiaylB+6hFW0OEHrs7E1EvYMH4fTAD96zmv5dz7kQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7l+e9eH+IGOY/tZeTbUxuBhGd3v992J9I+Vrz8TS7/1U7Hs3iPJtFPB1A+maRLbvP5SJbRrkL02ikeiOy2wNI30jv9q5fpNVbZ1pVH2PxuohhUff0eb8o0zfW49O06nar4tEqhrtBDKLu6WO8rNJHVibN5lXteh0XMUsTMa97/KxX9n27iGV8n32niKrvo+5n31xfbtLM37S2Vcd/9f3HqEgz/zpqn75zlu768r6/Sk8581dR/gPkMbnbRu3TAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB79AknfxrmAbpP0wAAAABJRU5ErkJggg=="},4176:function(t,e,a){"use strict";var i=a("f501"),n=a.n(i);n.a},"4bc9":function(t,e,a){"use strict";var i=a("6f2e"),n=a.n(i);n.a},"53e4":function(t,e,a){"use strict";var i=a("d39f"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.isCreateComputed?t._e():a("NavBar"),t.isCreateComputed?t._e():a("router-view"),t.isCreateComputed?t._e():a("Footer"),t.isCreateComputed?a("CreatePost"):t._e()],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg",attrs:{id:"navbar"}},[a("div",{staticClass:"container-fluid mr-8 justify-content-between align-items-center"},[a("a",{staticClass:"navbar-brand ml-4 mx-0 py-3 text-white col-8 col-lg-2 justify-content-flex",attrs:{href:"#"}}),t._m(0),a("div",{staticClass:"collapse navbar-collapse col-12 col-lg-9 p-0 justify-content-between align-items-center",attrs:{id:"nav"}},[a("div",{staticClass:"col-5 col-lg-9"},[a("ul",{staticClass:"row p-4 justify-content-between p-0 m-0 "},t._l(t.items,(function(e,i){return a("li",{key:i,staticClass:"nav-item nav-item-link p-0 py-2",on:{click:function(e){t.activeIndex=!1}}},[a("router-link",{class:"nav-link link text-left px-0 "+(i===t.activeIndex?"active":""),attrs:{to:e.path}},[t._v(t._s(e.name))])],1)})),0)]),a("SocialMedia",{staticClass:"col-12 col-lg-2"})],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler navbar-dark",attrs:{type:"button ","data-toggle":"collapse","data-target":"#nav"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"row justify-content-center align-items-center p-0 m-0 text-muted",attrs:{id:"socialMedia"}},t._l(t.media,(function(e,i){return a("li",{key:i,staticClass:"px-1 m-0"},[a("a",{attrs:{href:e.url}},[a("i",{class:"fab fa-"+e.icon,on:{mouseover:function(a){return t.alterColor(a,e.color,!0)},mouseout:function(a){return t.alterColor(a,e.color,!1)}}})])])})),0)},c=[],u={name:"SocialMedia",methods:{alterColor:function(t,e,a){a?t.target.setAttribute("style","color: ".concat(e,";")):t.target.removeAttribute("style")}},data:function(){return{media:[{icon:"facebook",url:"https://pt-br.facebook.com/",color:"#4064ad"},{icon:"twitter",url:"https://twitter.com/login?lang=pt",color:"#29A4DA"},{icon:"youtube",url:"https://www.youtube.com/?hl=pt&gl=BR",color:"#F70019"},{icon:"instagram",url:"https://www.instagram.com/?hl=pt-br",color:"#CF3587"}]}}},d=u,m=(a("1976"),a("2877")),p=Object(m["a"])(d,l,c,!1,null,"1d94646d",null),f=p.exports,g={name:"NavBar",components:{SocialMedia:f},data:function(){return{activeIndex:0,items:[{name:"home".toUpperCase(),path:"/",active:!0},{name:"games".toUpperCase(),path:"/games/1",active:!1},{name:"filmes".toUpperCase(),path:"/movie/2",active:!1},{name:"nostalgia".toUpperCase(),path:"/nostalgia/3",active:!1},{name:"especial".toUpperCase(),path:"/specials/4",active:!1}]}}},v=g,h=(a("9c5f"),Object(m["a"])(v,r,o,!1,null,"30980965",null)),C=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:" container-fluid d-flex flex-column justify-content-center align-items-center py-4 text-white-50",attrs:{id:"footer"}},[t._m(0),a("SocialMedia",{staticClass:"footer my-2"})],1)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container text-center"},[a("small",[t._v("Copyright © Renan Website Project")])])}],y={name:"Footer",components:{SocialMedia:f}},A=y,w=(a("53e4"),Object(m["a"])(A,b,_,!1,null,"a5966126",null)),x=w.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"createdPost"}},[a("h1",{staticClass:"text-center text-white font-weight-bold p-5"},[t._v("GERADOR DE CONTEÚDO")]),a("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addPost()}}},[a("div",{staticClass:"input-group container-fluid d-flex justify-content-between"},[a("InputSimple",{attrs:{titleInput:"Titulo",type:"text",col:3},on:{previewValueEmit:t.previewTitle}}),a("InputSimple",{attrs:{titleInput:"Data",type:"date",col:3},on:{previewValueEmit:t.previewDate}}),a("SelectCategory",{attrs:{titleInput:"Categoria",col:6},on:{previewCategoryEmit:t.previewCategory}})],1),a("div",{staticClass:"file-img input-group container-fluid d-flex justify-content-between col-12 mb-5"},[a("InputSimple",{attrs:{titleInput:"Imagem Card",col:6,type:"url"},on:{previewValueEmit:t.previewImgCard}},[a("Card",{ref:"img_card",attrs:{items:[t.itemAlterComputed]}})],1),a("InputSimple",{attrs:{titleInput:"Imagem Card",col:6,type:"url"},on:{previewValueEmit:t.previewImgBanner}},[a("Banner",{ref:"img_banner",attrs:{item:t.itemAlterComputed}})],1)],1),a("vue-simplemde",{ref:"markdownEditor",staticClass:"markdownEditor",model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._m(0)],1)])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-primary col-3 my-5 mx-5",attrs:{type:"submit"}},[t._v("Adicionar")])])}],j=(a("b0c0"),a("623c")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"card"}},t._l(t.items,(function(e,i){return a("router-link",{key:i,staticClass:"card-router media container justify-content-center align-items-center text-dark my-3 p-0 col-12 col-md-8",attrs:{to:e.path||"#"}},[e.scale?t._e():a("div",{staticClass:"row col-12 p-0 d-flex flex-column flex-md-row"},[a("div",{staticClass:"card-div-small col-12 col-md-6 d-flex justify-content-between align-items-center p-0"},[a("a",{staticClass:"p-0 m-0 col-12",attrs:{href:"#"}},[a("img",{staticClass:"image w-100 img-fluid img-scale-small p-0 m-0 align-self-center d-flex",attrs:{src:e.img_card,alt:e.title}})])]),a("div",{staticClass:"col-12 col-md-6 py-1 d-flex flex-column justify-content-between align-items-start"},[a("p",{staticClass:"pb-2 p-md-0 m-0 text-muted"},[t._v(t._s(e.date))]),a("h3",{staticClass:"pb-2 p-md-0 m-0"},[t._v(t._s(e.title))]),a("p",{staticClass:"p-0 m-0"},[t._v(t._s(e.category))])])]),e.scale?a("div",{staticClass:"row"},[a("div",{staticClass:"card-div-medium col-12 d-flex justify-content-center align-items-center p-0"},[a("img",{staticClass:"img-fluid img-scale-medium p-0 m-0 col-12 align-self-center d-flex",attrs:{src:e.img_card,alt:e.title}}),a("div",{staticClass:"row col-12 p-0 img-text-scale-medium position-absolute d-flex flex-column justify-content-center align-items-end text-white"},[a("p",{staticClass:"date text-white"},[t._v(t._s(e.date))]),a("h3",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.category))])])])]):t._e()])})),1)},O=[],$={name:"Card",props:{items:Array}},N=$,T=(a("4bc9"),Object(m["a"])(N,k,O,!1,null,"97e2e016",null)),I=T.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-flex flex-column justify-content-end banner"},[a("div",{staticClass:"banner-img"},[a("img",{attrs:{src:t.item.img_banner,height:"100%",width:"100%",alt:""}})]),a("div",{staticClass:"banner-text d-flex flex-column h-100 col-12 justify-content-end "},[a("h1",{staticClass:"mb-5 pb-5"},[t._v(t._s(t.item.title))]),a("div",{staticClass:"d-flex justify-content-start mb-3"},[a("i",{staticClass:"far fa-clock mr-5"},[t._v(" "+t._s(t.item.date))]),a("i",{staticClass:"far fa-bookmark ml-5"},[t._v(" "+t._s(t.item.category))])])])])},U=[],D={name:"Banner",props:{item:Object}},L=D,B=(a("e6db"),Object(m["a"])(L,P,U,!1,null,"6f020d18",null)),R=B.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"input-group mb-3 col-"+t.col},[a("div",[a("span",{staticClass:"input-group-text"},[t._v(t._s(t.titleInput))])]),"checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"form-control",attrs:{required:"",placeholder:t.placeholder||"",type:"checkbox"},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{input:function(e){return t.previewValueEmit()},change:function(e){var a=t.model,i=e.target,n=!!i.checked;if(Array.isArray(a)){var s=null,r=t._i(a,s);i.checked?r<0&&(t.model=a.concat([s])):r>-1&&(t.model=a.slice(0,r).concat(a.slice(r+1)))}else t.model=n}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"form-control",attrs:{required:"",placeholder:t.placeholder||"",type:"radio"},domProps:{checked:t._q(t.model,null)},on:{input:function(e){return t.previewValueEmit()},change:function(e){t.model=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"form-control",attrs:{required:"",placeholder:t.placeholder||"",type:t.type},domProps:{value:t.model},on:{input:[function(e){e.target.composing||(t.model=e.target.value)},function(e){return t.previewValueEmit()}]}}),a("div",{staticClass:"d-flex col-12 p-0"},[t._t("default")],2)])},V=[],q=(a("a9e3"),{name:"InputSimple",props:{titleInput:String,type:String,placeholder:String,value:String,col:Number},methods:{previewValueEmit:function(){this.$emit("previewValueEmit",this.model)},istypeDate:function(){var t=(new Date).toLocaleDateString(),e=t.substring(6)+"-"+t.substring(3,5)+"-"+t.substring(0,2);return"date"===this.type?e:""}},computed:{},data:function(){return{model:this.istypeDate()}}}),G=q,H=(a("5d85"),Object(m["a"])(G,M,V,!1,null,"382431d6",null)),X=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"input-group mb-3 col-"+t.col},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v(t._s(t.titleInput))])]),t.isAddOrEditCategoryComputed?t._e():a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"custom-select col-6",attrs:{required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category=e.target.multiple?a:a[0]},function(e){return t.previewCategoryEmit(e)}]}},[t._v("> "),t._l(t.loadCategoriesComputed,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.name))])}))],2),t.isAddOrEditCategoryComputed?a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],ref:"inputCategoryText",staticClass:"form-control col-6",attrs:{type:"text"},domProps:{value:t.category},on:{input:[function(e){e.target.composing||(t.category=e.target.value)},function(e){return t.previewCategoryEmit(e)}]}}):t._e(),a("div",{staticClass:"input-group-prepend"},t._l(t.alterbuttonsComputed,(function(t,e){return a("button",{key:e,class:"btn btn-"+t.class,attrs:{type:"button"},on:{click:function(e){return t.action()}}},[a("i",{class:"fas fa-"+t.icon})])})),0),t._m(0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.group,expression:"group"}],staticClass:"custom-select col-6",attrs:{disabled:!t.isAddOrEditCategoryComputed,required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.group=e.target.multiple?a:a[0]}}},t._l(t.groups,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Grupo")])])}],J=(a("4de4"),a("c975"),a("498a"),a("bc3a")),W=a.n(J),K=a("f121"),Q={name:"SelectCategory",props:{titleInput:String,col:Number},methods:{previewCategoryEmit:function(t){"change"===t.type&&this.alterButtonsAction(["edit","delete","add"]),this.group=this.category.id_group,this.$emit("previewCategoryEmit",this.category)},loadCategories:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;W.a.get(K["config"].URL+"/sample/database/getGroup").then((function(a){t.groups=a.data,W.a.get(K["config"].URL+"/sample/database/getCategories").then((function(a){t.categories=a.data,e&&(t.category=t.categories.filter((function(t){return String(t.name).toUpperCase()===String(e).toUpperCase()}))[0])}))}))},alterButtonsAction:function(t){this.buttonsAction=this.buttons.filter((function(e){return-1!=t.indexOf(e.name)}))},validateCategory:function(){var t=this,e=this.categories.filter((function(e){return String(e.name).toUpperCase()===String(t.category).toUpperCase()}));return this.category&&""!=String(this.category).trim()?e.length>0?(this.message={text:"A Categoria "+this.category+" já existe!",type:"danger",success:!1},!1):(this.message={text:"A Categoria "+this.category+" foi adicionada com sucesso!",type:"success",success:!0},!0):(this.message={text:"A Categoria não pode estar vazia!",type:"danger",success:!1},!1)},add:function(){var t=this;this.alterButtonsAction(["save","undo"]),this.category="",this.isAddOrEdit=!0,this.$nextTick((function(){return t.$refs.inputCategoryText.focus()}))},edit:function(){var t=this;this.alterButtonsAction(["save","undo"]),this.idEdit=this.category.id,this.category=this.category.name,this.isAddOrEdit=!0,this.$nextTick((function(){return t.$refs.inputCategoryText.focus()}))},undo:function(){this.alterButtonsAction(["add"]),this.isAddOrEdit=!1},delete:function(){var t=this;this.isAddOrEdit=!1,W.a.post(K["config"].URL+"/sample/database/deleteCategory",{id:this.category.id}).then((function(){t.alterButtonsAction(["add"]),t.isAddOrEdit=!1,t.loadCategories()}))},save:function(){var t=this,e=this.validateCategory(),a={};this.idEdit?(a.url="updateCategory",a.data={id:this.idEdit,name:this.category,id_group:this.group},this.idEdit=!1):(a.url="insertCategory",a.data={name:this.category,id_group:this.group}),e?W.a.post(K["config"].URL+"/sample/database/"+a.url,a.data).then((function(){t.alterButtonsAction(["edit","add","delete"]),t.isAddOrEdit=!1,t.loadCategories(t.category),alert("Categoria adicionada/Editada com sucesso!")})).catch((function(){alert("Erro no servidor favor contactar o Administrador.")})):(this.category="",alert(this.message.text),this.$nextTick((function(){return t.$refs.inputCategoryText.focus()})))}},computed:{isAddOrEditCategoryComputed:function(){return this.isAddOrEdit},alterbuttonsComputed:function(){return this.buttonsAction},loadCategoriesComputed:function(){return this.categories}},mounted:function(){this.loadCategories()},data:function(){return{isAddOrEdit:!1,categories:[],category:null,groups:[],group:null,message:{},idEdit:null,buttons:[{name:"edit",icon:"edit",class:"warning",action:this.edit},{name:"save",icon:"save",class:"primary",action:this.save},{name:"delete",icon:"trash-alt",class:"danger",action:this.delete},{name:"add",icon:"plus",class:"success",action:this.add},{name:"undo",icon:"undo-alt",class:"dark",action:this.undo}],buttonsAction:[{name:"add",icon:"plus",class:"success",action:this.add}]}}},Y=Q,Z=(a("e85f"),Object(m["a"])(Y,z,F,!1,null,"065571d5",null)),tt=Z.exports,et={name:"CreatePost",methods:{previewTitle:function(t){this.item.title=t},previewImgCard:function(t){this.item.img_card=t},previewImgBanner:function(t){this.item.img_banner=t},previewDate:function(t){var e=new Date(t),a=function(t){return t<9?"0".concat(t<31?t+1:t):t<31?t+1:t};this.item.date=a(e.getDate())+"/"+a(e.getMonth())+"/"+e.getFullYear()},previewCategory:function(t){this.item.category=t.name,this.item.idCategory=t.id},addPost:function(){var t=this;this.item.content=this.$refs.markdownEditor.simplemde.options.previewRender(this.content),W.a.post("http://stategames1-com-br.umbler.net/sample/database/savePost",{item:this.item}).then((function(e){e&&(window.alert("Post salvo com sucesso!!!"),t.title=null,t.category=null,t.date=(new Date).toLocaleDateString(),t.content=null,t.item={id:2,date:(new Date).toLocaleDateString(),img_card:a("3079"),img_banner:a("3079"),title:"Titulo",category:"Categoria",idCategory:null,content:null,path:"#"})})).catch((function(t){console.log(t)}))}},computed:{itemAlterComputed:function(){return this.item}},mounted:function(){},data:function(){return{title:null,category:null,date:(new Date).toLocaleDateString(),content:null,item:{id:2,date:(new Date).toLocaleDateString(),img_card:a("3079"),img_banner:a("3079"),title:"Titulo",category:"Categoria",idCategory:null,content:null,path:"#"}}},components:{VueSimplemde:j["a"],Card:I,Banner:R,InputSimple:X,SelectCategory:tt}},at=et,it=(a("4176"),Object(m["a"])(at,E,S,!1,null,null,null)),nt=it.exports,st={name:"app",data:function(){return{isCreate:!1}},methods:{alterCreate:function(){this.isCreate=!this.isCreate}},computed:{isCreateComputed:function(){return this.isCreate}},components:{NavBar:C,Footer:x,CreatePost:nt}},rt=st,ot=(a("034f"),Object(m["a"])(rt,n,s,!1,null,null,null)),lt=ot.exports,ct=(a("4989"),a("ab8b"),a("15f5"),a("8c4f")),ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-0",attrs:{id:"home"}},[a("Carousel",{attrs:{id_group:this.$route.params.id||null}}),a("NewsSection",{attrs:{id_group:this.$route.params.id||null}}),a("Trailers")],1)},dt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel slide",attrs:{id:"carousel","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},t._l(t.items,(function(t,e){return a("li",{key:e,class:t.class,attrs:{"data-target":"#carousel","data-slide-to":e}})})),0),a("div",{staticClass:"carousel-inner h-100"},t._l(t.items,(function(e,i){return a("div",{key:i,class:"carousel-item h-100 "+e.class},[a("div",{staticClass:"h-100 w-100 d-flex justify-content-center align-content-center"},[a("img",{staticClass:"img-main",attrs:{src:e.src}}),a("img",{staticClass:"img-shadown h-100 w-100 position-absolute",attrs:{src:e.src}}),a("div",{staticClass:"carousel-content-title carousel-caption d-none d-md-block "},[a("h3",[t._v(t._s(e.title))])])])])})),0),t._m(0),t._m(1)])},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-prev ",attrs:{href:"#carousel",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon"}),a("span",{staticClass:"sr-only"},[t._v("Anterior")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon"}),a("span",{staticClass:"sr-only"},[t._v("avançar")])])}],ft=(a("159b"),{name:"Carousel",props:{id_group:String},data:function(){return{items:[]}},mounted:function(){var t=this;W.a.get(K["config"].URL+"/sample/database/getBanner/"+this.id_group).then((function(e){e.data.forEach((function(e,a){e.class="",0===a&&(e.class="active"),t.items.push(e)}))}))}}),gt=ft,vt=(a("82e8"),Object(m["a"])(gt,mt,pt,!1,null,"daf3e070",null)),ht=vt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid d-flex flex-row justify-content-center aling-content-center ",attrs:{id:"newsection"}},[a("div",{staticClass:"col-12 d-flex flex-row justify-content-between aling-content-center p-0"},[a("div",{staticClass:"col-12 col-lg-8 mt-5 mb-3 p-0"},[t._m(0),a("Card",{staticClass:"col-12",attrs:{items:t.items}})],1),a("div",{staticClass:"d-none d-lg-block col-4 mt-5 mb-3"},[a("LastNews",{staticClass:"d-none d-lg-block col-12",attrs:{id_group:this.id_group}})],1)])])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-flex flex-row justify-content-center aling-content-center m-0"},[a("span",{staticClass:"d-inline news-link-cards text-uppercase font-weight-bold text-dark h4 align-bottom"},[t._v(" novidade ")])])}],_t=(a("d81d"),a("8ba4"),a("e25e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"px-0 pb-3",attrs:{id:"lastnews"}},[t._m(0),a("CardLastNews",{attrs:{items:t.items}})],1)}),yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title d-flex justify-content-center py-2"},[a("h5",{staticClass:"text-uppercase text-white m-0 d-inline align-bottom font-weight-bold"},[t._v("mais lidas")])])}],At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cardlastnews"}},t._l(t.items,(function(e,i){return a("router-link",{key:i,staticClass:"card-router media container justify-content-center align-items-center text-dark my-3",attrs:{to:e.path}},[a("div",{staticClass:"card-div-small col-6 d-flex justify-content-center align-items-center p-0"},[a("a",{staticClass:" p-0 m-0",attrs:{href:"#"}},[a("img",{staticClass:"img-fluid img-scale-small p-0 m-0 col-md-10 col-lg-12 col-sm-5 align-self-center d-flex",attrs:{src:e.img_card,alt:e.title}})])]),a("div",{staticClass:"col-6 py-1 d-flex flex-column justify-content-between align-items-start"},[a("span",{staticClass:"title p-0 m-0 text-white"},[t._v(t._s(e.title))])])])})),1)},wt=[],xt={name:"CardLastNews",props:{items:Array}},Et=xt,St=(a("eddb"),Object(m["a"])(Et,At,wt,!1,null,"5ecd0666",null)),jt=St.exports,kt={name:"LastNews",props:{id_group:Number},data:function(){return{items:[]}},mounted:function(){var t=this;W.a.get(K["config"].URL+"/sample/database/getPostsView/"+this.id_group).then((function(e){t.items=e.data.map((function(t){return{id:t.id,date:new Date(t.reg_date).toLocaleDateString(),img_card:t.img_card,title:t.title,path:"/content/"+t.id}}))}))},components:{CardLastNews:jt}},Ot=kt,$t=(a("a36e"),Object(m["a"])(Ot,_t,yt,!1,null,"3e7ef778",null)),Nt=$t.exports,Tt={name:"NewsSection",props:{id_group:Number},components:{Card:I,LastNews:Nt},methods:{load:function(){var t=this,e=this.items;e.forEach((function(e,a){a<4&&t.items.push(e)}))},scaleCards:function(){this.items.forEach((function(t,e){var a=Number.isInteger(e/3);t.scale=!!(e>2&&a)}))}},created:function(){this.scaleCards()},mounted:function(){var t=this,e=this.id_group?parseInt(this.id_group):null;W.a.get(K["config"].URL+"/sample/database/getPosts/"+e).then((function(e){t.items=e.data.map((function(t){return{id:t.id,date:new Date(t.reg_date).toLocaleDateString(),img_card:t.img_card,title:t.title,category:t.category,path:"/content/"+t.id}}))}))},data:function(){return{items:[]}}},It=Tt,Pt=Object(m["a"])(It,Ct,bt,!1,null,"dd009042",null),Ut=Pt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"trailers"}},[t._m(0),a("div",{staticClass:"r row col-12 d-flex"},[a("div",{staticClass:"e embed-responsive embed-responsive-16by9 col-lg-8 px-2"},[a("iframe",{staticClass:"embed-responsive-item",attrs:{src:this.itemSelected.src,allowfullscreen:""}})]),a("div",{staticClass:"col-md-4 text-white"},[a("h3",{staticClass:"my-4 "},[t._v(t._s(this.itemSelected.title))]),a("p",[t._v(t._s(this.itemSelected.text))]),a("h3",{staticClass:"my-3"},[t._v("Detalhes")]),a("ul",t._l(this.itemSelected.details,(function(e,i){return a("li",{key:i},[t._v(t._s(e))])})),0)])]),t._m(1),a("div",{staticClass:"col-12 row d-flex"},t._l(this.items,(function(t,e){return a("div",{key:e,staticClass:"trailer-mini  col-md-3 col-sm-6 mb-5"},[a("div",{staticClass:"embed-responsive embed-responsive-4by3"},[a("iframe",{staticClass:"border border-dark embed-responsive-item",attrs:{src:t.src}})])])})),0)])},Lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("h1",{staticClass:"text-center text-white"},[t._v("Trailers ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-flex justify-content-center"},[a("h3",{staticClass:"my-5 text-white"},[t._v("Assista Tambem...")])])}],Bt={name:"Trailers",methods:{selectVideo:function(){var t=parseInt(Math.random()*(this.items.length-1)+1);this.itemSelected=this.items.filter((function(e){return e.id===t?e:null}))[0],this.items=this.items.filter((function(e){if(e.id!==t)return e}))}},created:function(){this.selectVideo()},data:function(){return{itemSelected:{},items:[{id:1,src:"https://www.youtube.com/embed/2TR0gaG01do",title:"Hellblade 2",text:"Lançado em 2017, Hellblade: Senuas Sacrifice foi um dos títulos mais surpreendentes do ano, levando diversos prêmios para casa e gerando uma imensa hype para uma possível sequência. Após a compra da Ninja Theory pela Microsoft, integrando o Xbox Studios, o segundo jogo da franquia foi anunciado e Senuas Saga: Hellblade 2 ganhou um tenso teaser mostrando um grande avanço visual e uma excelente perspectiva para qual seria o primeiro título anunciado para a nova geração do Xbox,",details:["95% gostaram desse","lançamento: 8 de agosto de 2017","Motor: Unreal Engine"]},{id:2,src:"https://www.youtube.com/embed/5vX-257ns6g",title:"Godfall 2",text:"Godfall é uma franquia de jogos inédita para PS5 da Counterplay Games publicada pela Gearbox Software, empresa conhecida pela franquia Borderlands. Anunciado durante o The Game Awards 2019 na noite desta quinta-feira (12), o jogo segue o formato de RPG de ação em terceira pessoa e é um dos primeiros títulos confirmados para a nova geração de consoles. ",details:["85% gostaram desse","lançamento: 1 de abril de 2019","Motor: Unreal Engine"]},{id:3,src:"https://www.youtube.com/embed/h0KlMmIyefo",title:"Halo Wars 2",text:"Halo Wars 2 é um jogo de estratégia em tempo real desenvolvido pela 343 industries e Creative Assembly, e publicado pela Xbox Game Studios Exclusivamente para Xbox One e Windows 10 para o dia 21 de Fevereiro de 2017.",details:["99% gostaram desse","lançamento: 28 de março de 2016","Motor: Unreal Engine"]},{id:4,src:"https://www.youtube.com/embed/0tUqIHwHDEc",title:"Xbox Scarlet",text:"A Microsoft realizou o evento X019 durante o último final de semana e Phil Spencer, comandante da divisão Xbox, revelou mais detalhes sobre a próxima geração do console, chamado atualmente de Projeto Scarlett. De acordo com o executivo, a empresa está trabalhando para não repetir os erros de lançamento do Xbox One e promete que o dispositivo chegará ao mercado com um preço competitivo.",details:["70% gostaram desse","lançamento: 16 de dezembro de 2015","Motor: Unreal Engine"]},{id:5,src:"https://www.youtube.com/embed/9LrLM4Hvr9U",title:"Resident Evil 3: Nemesis",text:"DescriçãoResident Evil 3: Nemesis, conhecido no Japão como Biohazard 3: Last Escape, é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom, lançado originalmente para o PlayStation em 1999. É o terceiro jogo da franquia Resident Evil, e ocorre antes e após os acontecimentos de Resident Evil 2.",details:["50% gostaram desse","lançamento: 25 de fevereiro de 2020","Motor: Unreal Engine"]}]}}},Rt=Bt,Mt=(a("1455"),Object(m["a"])(Rt,Dt,Lt,!1,null,"e1415f9e",null)),Vt=Mt.exports,qt={name:"Home",components:{Carousel:ht,NewsSection:Ut,Trailers:Vt}},Gt=qt,Ht=Object(m["a"])(Gt,ut,dt,!1,null,null,null),Xt=Ht.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"games"}},[a("Carousel",{attrs:{id_group:this.$route.params.id||null}}),a("NewsSection",{attrs:{id_group:parseInt(this.$route.params.id)}}),a("Trailers")],1)},Ft=[],Jt={name:"Games",components:{Carousel:ht,NewsSection:Ut,Trailers:Vt}},Wt=Jt,Kt=Object(m["a"])(Wt,zt,Ft,!1,null,null,null),Qt=Kt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"games"}},[a("Carousel",{attrs:{id_group:this.$route.params.id||null}}),a("NewsSection",{attrs:{id_group:parseInt(this.$route.params.id)}}),a("Trailers")],1)},Zt=[],te={name:"Games",components:{Carousel:ht,NewsSection:Ut,Trailers:Vt}},ee=te,ae=Object(m["a"])(ee,Yt,Zt,!1,null,null,null),ie=ae.exports,ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"games"}},[a("Carousel",{attrs:{id_group:this.$route.params.id||null}}),a("NewsSection",{attrs:{id_group:parseInt(this.$route.params.id)}}),a("Trailers")],1)},se=[],re={name:"Games",components:{Carousel:ht,NewsSection:Ut,Trailers:Vt}},oe=re,le=Object(m["a"])(oe,ne,se,!1,null,null,null),ce=le.exports,ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"games"}},[a("Carousel",{attrs:{id_group:this.$route.params.id||null}}),a("NewsSection",{attrs:{id_group:parseInt(this.$route.params.id)}}),a("Trailers")],1)},de=[],me={name:"Games",components:{Carousel:ht,NewsSection:Ut,Trailers:Vt}},pe=me,fe=Object(m["a"])(pe,ue,de,!1,null,null,null),ge=fe.exports,ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"banner"},[a("Banner",{attrs:{item:t.item}})],1),a("div",{staticClass:"container py-5"},[a("h2",{staticClass:"h3 font-weight-bold"},[t._v(t._s(t.item.title))]),a("p",{staticClass:"font-italic"},[t._v(t._s(t.item.date))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10 mb-4",domProps:{innerHTML:t._s(t.item.content)}})])])])},he=[],Ce={name:"Content",components:{Banner:R},computed:{itemComputed:function(){return this.item}},mounted:function(){var t=this;W.a.get(K["config"].URL+"/sample/database/getPost/"+this.$route.params.id).then((function(e){t.item=e.data[0];var a={id:parseInt(t.$route.params.id),qtd_view:t.item.qtd_view+1};W.a.post(K["config"].URL+"/sample/database/addView",a).then((function(){})).catch((function(t){console.log(t)}))}))},data:function(){return{item:{}}}},be=Ce,_e=(a("0319"),Object(m["a"])(be,ve,he,!1,null,"8647b752",null)),ye=_e.exports;i["a"].use(ct["a"]);var Ae=[{params:{id:null},path:"/",name:"home",component:Xt},{params:{id:1},path:"/games/:id",name:"games",component:Qt},{params:{id:2},path:"/movie/:id",name:"movie",component:ie},{params:{id:3},path:"/nostalgia/:id",name:"nostalgia",component:ce},{params:{id:4},path:"/specials/:id",name:"specials",component:ge},{params:{id:null},path:"/content/:id",name:"content",component:ye}],we=new ct["a"]({mode:"history",base:"/",routes:Ae}),xe=we,Ee=(a("b116"),a("a7fe")),Se=a.n(Ee),je="http://localhost:8080";i["a"].use(Se.a,W.a),i["a"].config.productionTip=!1,new i["a"]({router:xe,URL_BASE:je,render:function(t){return t(lt)}}).$mount("#app")},"5a8c":function(t,e,a){},"5d85":function(t,e,a){"use strict";var i=a("6cd0"),n=a.n(i);n.a},"6cd0":function(t,e,a){},"6f2e":function(t,e,a){},"82e8":function(t,e,a){"use strict";var i=a("1ce0"),n=a.n(i);n.a},"85ec":function(t,e,a){},"9bea":function(t,e,a){},"9c5f":function(t,e,a){"use strict";var i=a("d548"),n=a.n(i);n.a},a36e:function(t,e,a){"use strict";var i=a("5a8c"),n=a.n(i);n.a},d39f:function(t,e,a){},d4c3:function(t,e,a){},d548:function(t,e,a){},e6db:function(t,e,a){"use strict";var i=a("d4c3"),n=a.n(i);n.a},e85f:function(t,e,a){"use strict";var i=a("11c8"),n=a.n(i);n.a},eddb:function(t,e,a){"use strict";var i=a("085f"),n=a.n(i);n.a},f121:function(t,e){var a={URL:"http://stategames1-com-br.umbler.net"};t.exports={config:a}},f501:function(t,e,a){}});
//# sourceMappingURL=app.797b2b9d.js.map