(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210096"],{b5d1:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["e"])("div",{class:"provider"},null,-1);function r(e,t,c,r,a,l){var i=Object(n["w"])("logout"),s=Object(n["w"])("provider",!0);return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(i),Object(n["g"])(s),o],64)}var a=c("1da1"),l=c("5530"),i=(c("96cf"),c("d3b7"),c("90f3")),s=Object(n["e"])("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},[Object(n["e"])("div",{class:"container-fluid"},[Object(n["e"])("a",{class:"navbar-brand",href:"#"}),Object(n["e"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["e"])("span",{class:"navbar-toggler-icon"})]),Object(n["e"])("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[Object(n["e"])("ul",{class:"navbar-nav"},[Object(n["e"])("a",{class:"nav-link active","aria-current":"page",role:"button",href:"http://localhost:8080/manager"},"Regresar"),Object(n["e"])("li",{class:"nav-item dropdown"},[Object(n["e"])("a",{class:"nav-link dropdown-toggle",href:"#",id:"configuracionDropdown",role:"button","aria-expanded":"false"},"Configuracion"),Object(n["e"])("ul",{class:"dropdown-menu","aria-labelledby":"configuracionDropdown"},[Object(n["e"])("li",null,[Object(n["e"])("a",{class:"dropdown-item",href:"#"},"Usuarios")]),Object(n["e"])("li",null,[Object(n["e"])("a",{class:"dropdown-item",href:"#"},"Acerca de")])])])])])])],-1),d={class:"container-fluid"},b={class:"col-md-12 col-sm-12 mt-4 mb-4"},u={id:"search-reservation",class:"card","data-select2-id":"search-reservation"},p={class:"card-status-top bg-green"},j={class:"card-body"},O=Object(n["e"])("h5",null,"CREAR PROVEEDOR",-1),v=Object(n["e"])("hr",null,null,-1),m={class:"row"},h={class:"col-md-4 col-sm-8 col-xs-4 mb-6"},f={class:"form-group"},g=Object(n["e"])("label",{for:"nombre"},"Nombre",-1),k={class:"col-md-4 col-sm-8 col-xs-4 mb-6"},y={class:"form-group"},w=Object(n["e"])("label",{for:"alias"},"Alias",-1),x={class:"col-md-4 col-sm-8 col-xs-12 mb-3"},C={class:"form-group"},P=Object(n["e"])("label",{for:"direccion"},"Direccion",-1),D={class:"col-md-4 col-sm-4 col-xs-12 mb-3"},A={class:"form-group"},E=Object(n["e"])("label",{for:"email"},"Correo",-1),R={class:"col-md-4 col-sm-4 col-xs-12 mb-3"},S={class:"form-group"},V=Object(n["e"])("label",{for:"contact"},"Contacto",-1),U=Object(n["e"])("div",{class:"content mt-4",align:"left"},[Object(n["e"])("button",{class:"btn btn-primary"},"Guardar")],-1),B={class:"container-fluid"},L={class:"row"},T={class:"col-sm-12 mt-4"},N={id:"search-reservation",class:"card","data-select2-id":"search-reservation"},J={class:"card-block"},_={class:"card-body"},G=Object(n["e"])("h5",null,"LISTADO PROVEEDORES",-1),I=Object(n["e"])("hr",null,null,-1),q={class:"table-responsive"},z={class:"table table-striped table-condensed table-hover"},F=Object(n["e"])("thead",null,[Object(n["e"])("tr",null,[Object(n["e"])("th",null,"Nombre"),Object(n["e"])("th",null,"Alias"),Object(n["e"])("th",null,"Direccion"),Object(n["e"])("th",null,"Correo"),Object(n["e"])("th",null,"Contacto"),Object(n["e"])("th"),Object(n["e"])("th")])],-1),H=["onClick"],K=["onClick"];function M(e,t,c,o,r,a){return Object(n["p"])(),Object(n["d"])("div",null,[s,Object(n["e"])("div",d,[Object(n["e"])("div",b,[Object(n["e"])("div",u,[Object(n["e"])("div",p,[Object(n["e"])("div",j,[O,v,Object(n["e"])("form",{onSubmit:t[5]||(t[5]=Object(n["E"])((function(){return a.AddProvider&&a.AddProvider.apply(a,arguments)}),["prevent"]))},[Object(n["e"])("div",m,[Object(n["e"])("div",h,[Object(n["e"])("div",f,[g,Object(n["D"])(Object(n["e"])("input",{name:"fullname",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.provider.fullname=e}),class:"form-control",placeholder:"-Nombre-",autofocus:""},null,512),[[n["B"],r.provider.fullname]])])]),Object(n["e"])("div",k,[Object(n["e"])("div",y,[w,Object(n["D"])(Object(n["e"])("input",{name:"nickname",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.provider.nickname=e}),class:"form-control",placeholder:"-Alias-",autofocus:""},null,512),[[n["B"],r.provider.nickname]])])]),Object(n["e"])("div",x,[Object(n["e"])("div",C,[P,Object(n["D"])(Object(n["e"])("input",{name:"address",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.provider.address=e}),class:"form-control",placeholder:"-Direccion-"},null,512),[[n["B"],r.provider.address]])])]),Object(n["e"])("div",D,[Object(n["e"])("div",A,[E,Object(n["D"])(Object(n["e"])("input",{name:"email",type:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.provider.email=e}),class:"form-control",placeholder:"-Correo-"},null,512),[[n["B"],r.provider.email]])])]),Object(n["e"])("div",R,[Object(n["e"])("div",S,[V,Object(n["D"])(Object(n["e"])("input",{name:"contact",type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.provider.contact=e}),class:"form-control",placeholder:"-Contacto-"},null,512),[[n["B"],r.provider.contact]])])]),U])],32)])])])])]),Object(n["e"])("div",B,[Object(n["e"])("div",L,[Object(n["e"])("div",T,[Object(n["e"])("div",N,[Object(n["e"])("div",J,[Object(n["e"])("div",_,[G,I,Object(n["e"])("div",q,[Object(n["e"])("table",z,[F,Object(n["e"])("tbody",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.providerList,(function(t){return Object(n["p"])(),Object(n["d"])("tr",{key:t._id},[Object(n["e"])("td",null,Object(n["y"])(t.fullname),1),Object(n["e"])("td",null,Object(n["y"])(t.nickname),1),Object(n["e"])("td",null,Object(n["y"])(t.address),1),Object(n["e"])("td",null,Object(n["y"])(t.email),1),Object(n["e"])("td",null,Object(n["y"])(t.contact),1),Object(n["e"])("td",null,[Object(n["e"])("button",{onClick:function(c){return e.editProvider(t._id)},class:"btn btn-warning"},"Editar",8,H)]),Object(n["e"])("td",null,[Object(n["e"])("button",{onClick:function(e){return a.deleteProvider(t._id)},class:"btn btn-danger"},"Eliminar",8,K)])])})),128))])])])])])])])])])])}var Q={name:"AddProvider",data:function(){return{provider:{fullname:"",nickname:"",address:"",email:"",contact:""},providerList:[]}},created:function(){this.getProvider()},methods:{AddProvider:function(){var e=this;fetch("http://localhost:3000/proveedor",{method:"POST",body:JSON.stringify(this.provider),headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.getProvider()})),this.provider.fullname="",this.provider.nickname="",this.provider.address="",this.provider.email="",this.provider.contact=""},deleteProvider:function(e){var t=this;fetch("http://localhost:3000/proveedor/"+e,{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json","x-access-token":this.token}}).then((function(e){t.getProvider(e)}))},getProvider:function(){var e=this;fetch("http://localhost:3000/proveedor/").then((function(e){return e.json()})).then((function(t){e.providerList=t}))}}},W=c("6b0d"),X=c.n(W);const Y=X()(Q,[["render",M]]);var Z=Y,$=c("5502"),ee={components:{logout:i["a"],provider:Z},computed:Object(l["a"])({},Object($["c"])(["token"])),methods:{dateProtected:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/proveedor",{headers:{"Content-Type":"application/json","x-access-token":e.token}});case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,console.log(n),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},created:function(){this.dateProtected()}};const te=X()(ee,[["render",r]]);t["default"]=te}}]);
//# sourceMappingURL=chunk-2d210096.039f9a93.js.map