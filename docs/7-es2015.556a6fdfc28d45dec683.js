(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VUlT:function(t,e,o){"use strict";o.r(e),o.d(e,"NotesModule",(function(){return X}));var i=o("0IaG"),n=o("ofXK"),a=o("3Pt+"),s=o("M0ag"),c=o("tyNb"),r=o("fXoL");let l=(()=>{class t{constructor(t,e){this.dialog=t,this.dialogRef=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(i.b),r.Nb(i.i))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-edit-notes-dialog"]],decls:7,vars:0,consts:[["fxLayout","row","fxLayoutAlign","space-between center"],["mat-dialog-title",""],["mat-dialog-title","","type","button","mat-icon-button","","mat-dialog-close",""],["title","Close"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"h2",1),r.yc(2,"Edit Note"),r.Rb(),r.Sb(3,"button",2),r.Sb(4,"mat-icon",3),r.yc(5,"close"),r.Rb(),r.Rb(),r.Rb(),r.Ob(6,"app-add-edit-notes"))},styles:[""]}),t})();var b=o("XiUz"),u=o("Wp6s"),d=o("kmnG"),f=o("qFsG"),p=o("d3UM"),g=o("bTqV"),m=o("FKr1");function h(t,e){if(1&t&&(r.Sb(0,"mat-option",7),r.yc(1),r.Rb()),2&t){const t=e.$implicit;r.kc("value",t.name),r.Bb(1),r.Ac(" ",t.name," ")}}let y=(()=>{class t{constructor(t,e,o,i,n){this.formBuilder=t,this.noteService=e,this.commonService=o,this.router=i,this.dialogRef=n,this.notesListCallBack=new r.n}ngOnInit(){this.createLoginForm();const t=this.noteService.getNoteData();t&&this.setNoteDataToForm(t)}setNoteDataToForm(t){this.notesForm.patchValue({description:t.description,category:t.category,id:t.index})}createLoginForm(){this.notesForm=this.formBuilder.group({id:[],description:[""],category:[""]})}saveNote(){if(!this.noteAndCategoryIsEmpty())if(this.notesForm.value.id||0==this.notesForm.value.id)this.updateNote();else{let t=[];t=this.noteService.getAllNotes();const e={created:new Date,description:this.notesForm.value.description,category:this.notesForm.value.category};t||(t=[]),t.push(e),this.noteService.saveNoteToLocalStorage(t),this.notesListCallBack.emit(!0),this.notesForm.reset()}}noteAndCategoryIsEmpty(){return!(this.notesForm.value.description&&this.notesForm.value.description.trimLeft()||this.notesForm.value.category)}updateNote(){const t=this.noteService.getNoteData().description;let e=this.noteService.getAllNotes();for(let o=0;o<e.length;o++)e[o].description==t&&(e[o].description=this.notesForm.value.description,e[o].category=this.notesForm.value.category);this.noteService.saveNoteToLocalStorage(e),this.commonService.redirectToUrl(this.router.url),this.dialogRef.close()}ngOnDestroy(){this.noteService.sendNoteData(null)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(a.f),r.Nb(s.d),r.Nb(s.a),r.Nb(c.b),r.Nb(i.i))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-add-edit-notes"]],outputs:{notesListCallBack:"notesListCallBack"},decls:14,vars:2,consts:[[3,"formGroup"],["fxLayout","column","appearance","outline"],["matInput","","placeholder","Write a note","rows","1","formControlName","description"],["fxLayout","","appearance","outline"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(t,e){1&t&&(r.Sb(0,"form",0),r.Sb(1,"mat-card-content"),r.Sb(2,"mat-form-field",1),r.Sb(3,"mat-label"),r.yc(4,"Write a Note"),r.Rb(),r.Ob(5,"textarea",2),r.Rb(),r.Sb(6,"mat-form-field",3),r.Sb(7,"mat-label"),r.yc(8,"Category"),r.Rb(),r.Sb(9,"mat-select",4),r.wc(10,h,2,2,"mat-option",5),r.Rb(),r.Rb(),r.Sb(11,"div"),r.Sb(12,"button",6),r.ac("click",(function(){return e.saveNote()})),r.yc(13," Save "),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.kc("formGroup",e.notesForm),r.Bb(10),r.kc("ngForOf",e.noteService.categories))},directives:[a.E,a.q,a.i,u.d,d.c,b.f,d.g,f.a,a.c,a.p,a.h,p.a,n.s,g.b,m.h],styles:[""]}),t})();var v=o("Xa2L"),S=o("NFeN");function x(t,e){1&t&&(r.Qb(0),r.Ob(1,"mat-spinner",6),r.Pb()),2&t&&(r.Bb(1),r.kc("diameter",40))}function N(t,e){1&t&&(r.Sb(0,"p"),r.yc(1,"No Data Found"),r.Rb())}function F(t,e){if(1&t){const t=r.Tb();r.Sb(0,"mat-card",9),r.Sb(1,"div",10),r.Sb(2,"div",11),r.ac("click",(function(){r.pc(t);const o=e.$implicit,i=e.index;return r.ec(3).openEditDialog(o,i)})),r.yc(3),r.Rb(),r.Sb(4,"div",12),r.Sb(5,"button",13),r.ac("click",(function(){r.pc(t);const o=e.index;return r.ec(3).deleteNote(o)})),r.Sb(6,"mat-icon"),r.yc(7,"delete"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(8,"div",14),r.yc(9),r.fc(10,"date"),r.fc(11,"date"),r.Rb(),r.Rb()}if(2&t){const t=e.$implicit;r.vc("background-color",t.category),r.Bb(3),r.Ac(" ",t.description," "),r.Bb(6),r.Bc(" ",r.gc(10,5,t.created)," ",r.hc(11,7,t.created,"shortTime")," ")}}function L(t,e){if(1&t&&r.wc(0,F,12,10,"mat-card",8),2&t){const t=r.ec(2);r.kc("ngForOf",t.notes)}}function w(t,e){if(1&t&&(r.wc(0,N,2,0,"p",4),r.wc(1,L,1,1,"ng-template",null,7,r.xc)),2&t){const t=r.oc(2),e=r.ec();r.kc("ngIf",!e.notes||!e.notes.length)("ngIfElse",t)}}let k=(()=>{class t{constructor(t,e,o,i,n){this.commonService=t,this.noteService=e,this.dialog=o,this.router=i,this.route=n,this.allSubscribers=[],this.isLoading=!0,this.notes=[],this.categoryFilter="all"}ngOnInit(){"/application/notes?category=all"!==this.router.url&&this.commonService.appendURLParameters("category","all"),this.allSubscribers.push(this.route.queryParams.subscribe(t=>{this.categoryFilter=t.category||"all",this.getAllNotes()}))}getAllNotes(t){this.notes=this.noteService.getAllNotes(),"all"!==this.categoryFilter&&(this.notes=this.notes.filter(t=>t.category==this.categoryFilter)),this.isLoading=!1}deleteNote(t){const e=new i.e;e.disableClose=!1,e.autoFocus=!1,e.data={title:"Delete Note",body:"Are you sure you want to delete this note?",okButton:!0,cancelButton:!0};const o=this.dialog.open(s.b,e);this.allSubscribers.push(o.afterClosed().subscribe(e=>{e&&(this.notes.splice(t,1),this.noteService.saveNoteToLocalStorage(this.notes),this.isLoading=!1)}))}openEditDialog(t,e){this.dialog.open(l,{width:"50%",autoFocus:!1}),t.index=e,this.noteService.sendNoteData(t)}ngOnDestroy(){this.allSubscribers.map(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(s.a),r.Nb(s.d),r.Nb(i.b),r.Nb(c.b),r.Nb(c.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-notes"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutGap","10px","fxFlex","100"],["fxFlex","100"],[3,"notesListCallBack"],["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutGap","10px","fxLayoutAlign","flex-start"],[4,"ngIf","ngIfElse"],["showNotes",""],[1,"spinner-center",3,"diameter"],["showNotesList",""],["fxFlex","20","fxLayoutGap","10px","class","mrg8-B",3,"backgroundColor",4,"ngFor","ngForOf"],["fxFlex","20","fxLayoutGap","10px",1,"mrg8-B"],["fxLayout","row","fxLayoutAlign","space-between none","fxLayoutGap","10px"],["fxFlex","80",1,"edit-link",3,"click"],["fxFlex",""],["mat-mini-fab","","color","none","aria-label","Delete",3,"click"],["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","10px",1,"mrg4-T"]],template:function(t,e){if(1&t&&(r.Sb(0,"div",0),r.Sb(1,"mat-card",1),r.Sb(2,"app-add-edit-notes",2),r.ac("notesListCallBack",(function(t){return e.getAllNotes(t)})),r.Rb(),r.Rb(),r.Sb(3,"div",3),r.wc(4,x,2,1,"ng-container",4),r.wc(5,w,3,2,"ng-template",null,5,r.xc),r.Rb(),r.Rb(),r.Ob(7,"router-outlet")),2&t){const t=r.oc(6);r.Bb(4),r.kc("ngIf",e.isLoading)("ngIfElse",t)}},directives:[b.f,b.g,b.b,u.a,y,b.e,n.t,c.g,v.c,n.s,g.b,S.a],pipes:[n.f],styles:[".text-white[_ngcontent-%COMP%]{color:#fff}.mrg8-B[_ngcontent-%COMP%]{margin-bottom:10px}.spinner-center[_ngcontent-%COMP%]{position:relative;margin-left:50%}.edit-link[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();const R=[{path:"",component:k}];let C=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[c.f.forChild(R)],c.f]}),t})();var B=o("aZ8m"),A=o("BAfr"),O=o("CMmr"),D=o("cH1L"),I=o("vxfF"),G=o("XhcP"),T=o("STbY"),E=o("/t3+"),M=o("MutI"),P=o("f0Cb"),j=o("ihCf"),q=o("bv9b"),z=o("dNgK"),K=o("znSr"),U=o("zpSk");let X=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},providers:[{provide:i.i,useValue:{}}],imports:[[n.c,a.k,a.z,C,s.e]]}),t})();r.rc(l,[n.q,n.r,n.s,n.t,n.A,n.w,n.x,n.y,n.z,n.u,n.v,a.E,a.u,a.D,a.c,a.v,a.y,a.a,a.B,a.C,a.x,a.p,a.q,a.A,a.m,a.l,a.w,a.b,a.d,a.s,a.t,a.r,a.g,a.i,a.h,a.j,a.e,c.g,c.c,c.e,c.d,c.h,B.a,A.a,O.a,u.a,u.f,u.n,u.d,u.m,u.l,u.b,u.e,u.k,u.i,u.h,u.g,u.o,u.c,D.b,I.a,G.a,G.b,G.c,G.d,G.e,G.f,T.e,T.b,T.d,T.a,E.a,E.c,M.a,M.h,M.d,M.b,m.e,M.c,M.g,m.j,M.i,M.f,P.a,S.a,i.f,i.d,i.j,i.g,i.c,d.b,d.c,d.f,d.g,d.h,d.i,d.j,p.a,p.c,m.h,m.g,j.b,j.c,f.a,f.c,g.b,g.a,q.a,z.b,v.a,v.c,b.f,b.g,b.e,b.d,b.c,b.h,b.a,b.b,K.c,K.a,K.d,K.b,U.e,U.f,U.g,U.h,U.i,U.j,U.k,U.l,U.b,U.c,U.d,k,l,y],[n.b,n.G,n.p,n.k,n.E,n.g,n.C,n.F,n.d,n.f,n.i,n.j,n.l])}}]);