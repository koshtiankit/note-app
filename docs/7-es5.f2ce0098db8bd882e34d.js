function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VUlT:function(e,t,o){"use strict";o.r(t),o.d(t,"NotesModule",(function(){return $}));var n,i=o("0IaG"),a=o("ofXK"),r=o("3Pt+"),c=o("M0ag"),s=o("tyNb"),l=o("fXoL"),u=((n=function(){function e(t,o){_classCallCheck(this,e),this.dialog=t,this.dialogRef=o}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||n)(l.Nb(i.b),l.Nb(i.i))},n.\u0275cmp=l.Hb({type:n,selectors:[["app-edit-notes-dialog"]],decls:7,vars:0,consts:[["fxLayout","row","fxLayoutAlign","space-between center"],["mat-dialog-title",""],["mat-dialog-title","","type","button","mat-icon-button","","mat-dialog-close",""],["title","Close"]],template:function(e,t){1&e&&(l.Sb(0,"div",0),l.Sb(1,"h2",1),l.yc(2,"Edit Note"),l.Rb(),l.Sb(3,"button",2),l.Sb(4,"mat-icon",3),l.yc(5,"close"),l.Rb(),l.Rb(),l.Rb(),l.Ob(6,"app-add-edit-notes"))},styles:[""]}),n),b=o("XiUz"),f=o("Wp6s"),d=o("kmnG"),p=o("qFsG"),g=o("d3UM"),h=o("bTqV"),m=o("FKr1");function v(e,t){if(1&e&&(l.Sb(0,"mat-option",7),l.yc(1),l.Rb()),2&e){var o=t.$implicit;l.kc("value",o.name),l.Bb(1),l.Ac(" ",o.name," ")}}var y,S=((y=function(){function e(t,o,n,i,a){_classCallCheck(this,e),this.formBuilder=t,this.noteService=o,this.commonService=n,this.router=i,this.dialogRef=a,this.notesListCallBack=new l.n}return _createClass(e,[{key:"ngOnInit",value:function(){this.createLoginForm();var e=this.noteService.getNoteData();e&&this.setNoteDataToForm(e)}},{key:"setNoteDataToForm",value:function(e){this.notesForm.patchValue({description:e.description,category:e.category,id:e.index})}},{key:"createLoginForm",value:function(){this.notesForm=this.formBuilder.group({id:[],description:[""],category:[""]})}},{key:"saveNote",value:function(){if(!this.noteAndCategoryIsEmpty())if(this.notesForm.value.id||0==this.notesForm.value.id)this.updateNote();else{var e=[];e=this.noteService.getAllNotes();var t={created:new Date,description:this.notesForm.value.description,category:this.notesForm.value.category};e||(e=[]),e.push(t),this.noteService.saveNoteToLocalStorage(e),this.notesListCallBack.emit(!0),this.notesForm.reset()}}},{key:"noteAndCategoryIsEmpty",value:function(){return!(this.notesForm.value.description&&this.notesForm.value.description.trimLeft()||this.notesForm.value.category)}},{key:"updateNote",value:function(){for(var e=this.noteService.getNoteData().description,t=this.noteService.getAllNotes(),o=0;o<t.length;o++)t[o].description==e&&(t[o].description=this.notesForm.value.description,t[o].category=this.notesForm.value.category);this.noteService.saveNoteToLocalStorage(t),this.commonService.redirectToUrl(this.router.url),this.dialogRef.close()}},{key:"ngOnDestroy",value:function(){this.noteService.sendNoteData(null)}}]),e}()).\u0275fac=function(e){return new(e||y)(l.Nb(r.f),l.Nb(c.d),l.Nb(c.a),l.Nb(s.b),l.Nb(i.i))},y.\u0275cmp=l.Hb({type:y,selectors:[["app-add-edit-notes"]],outputs:{notesListCallBack:"notesListCallBack"},decls:14,vars:2,consts:[[3,"formGroup"],["fxLayout","column","appearance","outline"],["matInput","","placeholder","Write a note","rows","1","formControlName","description"],["fxLayout","","appearance","outline"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(e,t){1&e&&(l.Sb(0,"form",0),l.Sb(1,"mat-card-content"),l.Sb(2,"mat-form-field",1),l.Sb(3,"mat-label"),l.yc(4,"Write a Note"),l.Rb(),l.Ob(5,"textarea",2),l.Rb(),l.Sb(6,"mat-form-field",3),l.Sb(7,"mat-label"),l.yc(8,"Category"),l.Rb(),l.Sb(9,"mat-select",4),l.wc(10,v,2,2,"mat-option",5),l.Rb(),l.Rb(),l.Sb(11,"div"),l.Sb(12,"button",6),l.ac("click",(function(){return t.saveNote()})),l.yc(13," Save "),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.kc("formGroup",t.notesForm),l.Bb(10),l.kc("ngForOf",t.noteService.categories))},directives:[r.E,r.q,r.i,f.d,d.c,b.f,d.g,p.a,r.c,r.p,r.h,g.a,a.s,h.b,m.h],styles:[""]}),y),k=o("Xa2L"),x=o("NFeN");function N(e,t){1&e&&(l.Qb(0),l.Ob(1,"mat-spinner",6),l.Pb()),2&e&&(l.Bb(1),l.kc("diameter",40))}function C(e,t){1&e&&(l.Sb(0,"p"),l.yc(1,"No Data Found"),l.Rb())}function F(e,t){if(1&e){var o=l.Tb();l.Sb(0,"mat-card",9),l.Sb(1,"div",10),l.Sb(2,"div",11),l.ac("click",(function(){l.pc(o);var e=t.$implicit,n=t.index;return l.ec(3).openEditDialog(e,n)})),l.yc(3),l.Rb(),l.Sb(4,"div",12),l.Sb(5,"button",13),l.ac("click",(function(){l.pc(o);var e=t.index;return l.ec(3).deleteNote(e)})),l.Sb(6,"mat-icon"),l.yc(7,"delete"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(8,"div",14),l.yc(9),l.fc(10,"date"),l.fc(11,"date"),l.Rb(),l.Rb()}if(2&e){var n=t.$implicit;l.vc("background-color",n.category),l.Bb(3),l.Ac(" ",n.description," "),l.Bb(6),l.Bc(" ",l.gc(10,5,n.created)," ",l.hc(11,7,n.created,"shortTime")," ")}}function L(e,t){if(1&e&&l.wc(0,F,12,10,"mat-card",8),2&e){var o=l.ec(2);l.kc("ngForOf",o.notes)}}function w(e,t){if(1&e&&(l.wc(0,C,2,0,"p",4),l.wc(1,L,1,1,"ng-template",null,7,l.xc)),2&e){var o=l.oc(2),n=l.ec();l.kc("ngIf",!n.notes||!n.notes.length)("ngIfElse",o)}}var R,B,A,O=((R=function(){function e(t,o,n,i,a){_classCallCheck(this,e),this.commonService=t,this.noteService=o,this.dialog=n,this.router=i,this.route=a,this.allSubscribers=[],this.isLoading=!0,this.notes=[],this.categoryFilter="all"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;"/application/notes?category=all"!==this.router.url&&this.commonService.appendURLParameters("category","all"),this.allSubscribers.push(this.route.queryParams.subscribe((function(t){e.categoryFilter=t.category||"all",e.getAllNotes()})))}},{key:"getAllNotes",value:function(e){var t=this;this.notes=this.noteService.getAllNotes(),"all"!==this.categoryFilter&&(this.notes=this.notes&&this.notes.filter((function(e){return e.category==t.categoryFilter}))),this.isLoading=!1}},{key:"deleteNote",value:function(e){var t=this,o=new i.e;o.disableClose=!1,o.autoFocus=!1,o.data={title:"Delete Note",body:"Are you sure you want to delete this note?",okButton:!0,cancelButton:!0};var n=this.dialog.open(c.b,o);this.allSubscribers.push(n.afterClosed().subscribe((function(o){o&&(t.notes.splice(e,1),t.noteService.saveNoteToLocalStorage(t.notes),t.isLoading=!1)})))}},{key:"openEditDialog",value:function(e,t){this.dialog.open(u,{width:"50%",autoFocus:!1}),e.index=t,this.noteService.sendNoteData(e)}},{key:"ngOnDestroy",value:function(){this.allSubscribers.map((function(e){return e.unsubscribe()}))}}]),e}()).\u0275fac=function(e){return new(e||R)(l.Nb(c.a),l.Nb(c.d),l.Nb(i.b),l.Nb(s.b),l.Nb(s.a))},R.\u0275cmp=l.Hb({type:R,selectors:[["app-notes"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutGap","10px","fxFlex","100"],["fxFlex","100"],[3,"notesListCallBack"],["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutGap","10px","fxLayoutAlign","flex-start"],[4,"ngIf","ngIfElse"],["showNotes",""],[1,"spinner-center",3,"diameter"],["showNotesList",""],["fxFlex","20","fxLayoutGap","10px","class","mrg8-B",3,"backgroundColor",4,"ngFor","ngForOf"],["fxFlex","20","fxLayoutGap","10px",1,"mrg8-B"],["fxLayout","row","fxLayoutAlign","space-between none","fxLayoutGap","10px"],["fxFlex","80",1,"edit-link",3,"click"],["fxFlex",""],["mat-mini-fab","","color","none","aria-label","Delete",3,"click"],["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","10px",1,"mrg4-T"]],template:function(e,t){if(1&e&&(l.Sb(0,"div",0),l.Sb(1,"mat-card",1),l.Sb(2,"app-add-edit-notes",2),l.ac("notesListCallBack",(function(e){return t.getAllNotes(e)})),l.Rb(),l.Rb(),l.Sb(3,"div",3),l.wc(4,N,2,1,"ng-container",4),l.wc(5,w,3,2,"ng-template",null,5,l.xc),l.Rb(),l.Rb(),l.Ob(7,"router-outlet")),2&e){var o=l.oc(6);l.Bb(4),l.kc("ngIf",t.isLoading)("ngIfElse",o)}},directives:[b.f,b.g,b.b,f.a,S,b.e,a.t,s.g,k.c,a.s,h.b,x.a],pipes:[a.f],styles:[".text-white[_ngcontent-%COMP%]{color:#fff}.mrg8-B[_ngcontent-%COMP%]{margin-bottom:10px}.spinner-center[_ngcontent-%COMP%]{position:relative;margin-left:50%}.edit-link[_ngcontent-%COMP%]{cursor:pointer}"]}),R),_=[{path:"",component:O}],D=((B=function e(){_classCallCheck(this,e)}).\u0275mod=l.Lb({type:B}),B.\u0275inj=l.Kb({factory:function(e){return new(e||B)},imports:[[s.f.forChild(_)],s.f]}),B),I=o("aZ8m"),P=o("BAfr"),T=o("CMmr"),E=o("cH1L"),G=o("vxfF"),j=o("XhcP"),M=o("STbY"),q=o("/t3+"),z=o("MutI"),K=o("f0Cb"),U=o("ihCf"),X=o("bv9b"),H=o("dNgK"),V=o("znSr"),W=o("zpSk"),$=((A=function e(){_classCallCheck(this,e)}).\u0275mod=l.Lb({type:A}),A.\u0275inj=l.Kb({factory:function(e){return new(e||A)},providers:[{provide:i.i,useValue:{}}],imports:[[a.c,r.k,r.z,D,c.e]]}),A);l.rc(u,[a.q,a.r,a.s,a.t,a.A,a.w,a.x,a.y,a.z,a.u,a.v,r.E,r.u,r.D,r.c,r.v,r.y,r.a,r.B,r.C,r.x,r.p,r.q,r.A,r.m,r.l,r.w,r.b,r.d,r.s,r.t,r.r,r.g,r.i,r.h,r.j,r.e,s.g,s.c,s.e,s.d,s.h,I.a,P.a,T.a,f.a,f.f,f.n,f.d,f.m,f.l,f.b,f.e,f.k,f.i,f.h,f.g,f.o,f.c,E.b,G.a,j.a,j.b,j.c,j.d,j.e,j.f,M.e,M.b,M.d,M.a,q.a,q.c,z.a,z.h,z.d,z.b,m.e,z.c,z.g,m.j,z.i,z.f,K.a,x.a,i.f,i.d,i.j,i.g,i.c,d.b,d.c,d.f,d.g,d.h,d.i,d.j,g.a,g.c,m.h,m.g,U.b,U.c,p.a,p.c,h.b,h.a,X.a,H.b,k.a,k.c,b.f,b.g,b.e,b.d,b.c,b.h,b.a,b.b,V.c,V.a,V.d,V.b,W.e,W.f,W.g,W.h,W.i,W.j,W.k,W.l,W.b,W.c,W.d,O,u,S],[a.b,a.G,a.p,a.k,a.E,a.g,a.C,a.F,a.d,a.f,a.i,a.j,a.l])}}]);