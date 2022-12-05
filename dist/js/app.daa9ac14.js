(function(){"use strict";var t={2978:function(t,e,i){var a=i(144),o=function(){var t=this,e=t._self._c;return e("div",{class:1==t.$store.state.dark?"bg-dark":"bg-light",attrs:{id:"app"}},[e("b-navbar",{staticClass:"navbar-router sticky-top",attrs:{toggleable:"md"}},[e("b-container",{attrs:{fluid:"lg"}},[e("b-navbar-brand",{staticClass:"m-0",attrs:{href:"#"}},[e("figure",{staticClass:"m-0",staticStyle:{width:"50px","aspect-ratio":"1 / 1"}},[e("img",{attrs:{src:i(7584),alt:""}})])]),e("b-navbar-toggle",{staticClass:"text-warning order-1",attrs:{target:"nav-collapse"},on:{click:function(e){t.$store.state.navbarIcon=!t.$store.state.navbarIcon}}},[t.$store.state.navbarIcon?e("span",[e("b-icon",{attrs:{scale:"1.5",icon:"list"}})],1):e("span",[e("b-icon",{attrs:{icon:"x-lg"}})],1)]),e("b-collapse",{staticClass:"d-xl-flex justify-content-end justify-content-center order-1 order-md-0",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy:nav-scroller",arg:"nav-scroller"}],staticClass:"container-link text-warning text-center overflow-hidden",on:{click:function(e){t.$store.state.navbarIcon=!0}}},[t._l(t.NavbarRouter,(function(i,a){return e("b-nav-item",{key:a,attrs:{to:i.to},on:{click:t.scrollTop}},[e("span",{class:t.$store.state.dark?"color-nav-light":"color-nav-dark"},[t._v(t._s(i.text))])])})),"/"===t.$router.history.current["path"]?e("b-container",{staticClass:"d-flex flex-column flex-md-row p-0",attrs:{fluid:""}},[t._l(t.NavbarLink,(function(i,a){return e("b-nav-item",{key:a,attrs:{href:i.href}},[e("span",{class:t.$store.state.dark?"color-nav-light":"color-nav-dark"},[t._v(" "+t._s(i.text)+" ")])])})),e("b-nav-item",{on:{click:t.installPWA}},[e("span",{class:t.$store.state.dark?"color-nav-light":"color-nav-dark"},[t._v(" Installa ")])])],2):t._e()],2)],1),e("b-navbar-nav",{attrs:{title:"dark/light mode"}},[e("b-nav-item",{on:{click:function(e){t.$store.state.dark=!t.$store.state.dark}}},[e("div",{staticClass:"ball btn rounded-circle",class:t.$store.state.dark?"active":""})])],1)],1)],1),e("router-view")],1)},s=[],n=i(629),r={name:"App",data(){return{NavbarRouter:[{to:"/",text:"Home"},{to:"/contactMe",text:"Contattami"}],NavbarLink:[{href:"#chi-sono",text:"Chi sono?"},{href:"#esperienze",text:"Esperienze"},{href:"#progetti",text:"Progetti"}]}},methods:{...(0,n.OI)(["darkMode","scrollTop"]),installPWA(){this.installEvent.prompt()}},mounted(){window.addEventListener("DOMContentLoaded",this.darkMode),window.addEventListener("DOMContentLoaded",this.scrollTop),window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),this.installEvent=t}))}},l=r,c=i(1001),d=(0,c.Z)(l,o,s,!1,null,null,null),m=d.exports,u=i(5205);(0,u.z)("/portfolio/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var p=i(8345),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home",staticStyle:{"overflow-x":"hidden"},attrs:{id:"nav-scroller"}},[e("main",[e("jumbotron"),e("presentation",{attrs:{id:"chi-sono"}}),e("trainingTime",{attrs:{id:"esperienze"}}),e("allProjects",{attrs:{id:"progetti"}})],1),e("footer")])},f=[],b=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"container-jumbotron position-relative",attrs:{fluid:""}},[e("b-row",{staticClass:"container-circle rounded-circle d-flex flex-column flex-wrap align-content-center justify-content-end"},[e("b-col",{staticClass:"presentation-container d-flex justify-content-center text-center",attrs:{cols:"9",md:"6"}},[e("div",{staticClass:"d-flex flex-column align-items-center"},[e("h1",{staticClass:"mb-5 user-select-none",class:t.$store.state.dark?"text-light":"text-dark"},[t._v(" Ciao sono Giuseppe Dicosmo "),e("span",[t._v("Jr. Full Stack Web Developer")])]),e("figure",{directives:[{name:"motion-pop",rawName:"v-motion-pop"}],staticClass:"img-profail-container col-10 col-md-8 col-lg-5 rounded-circle overflow-hidden user-select-none",attrs:{delay:800}},[e("img",{attrs:{src:i(9180),alt:""}})])]),e("div",{staticClass:"circle bg-light rounded-circle d-flex justify-content-center align-items-center",class:1==t.$store.state.dark?"bg-dark":"bg-light",style:`--n: ${t.iconsProgramming.length}; --t: ${t.time}s`},[e("ul",{staticClass:"d-flex justify-content-center"},t._l(t.iconsProgramming,(function(t,i){return e("li",{key:i,staticClass:"item col-7 col-lg-7 d-flex justify-content-center",style:`animation-delay: calc(${t.position} * var(--t) / var(--n))`},[e("figure",{staticClass:"col-2 col-sm-1"},[e("img",{attrs:{src:t.img,alt:""}})])])})),0)])])],1)],1)},v=[],h={name:"jumboTron",data(){return{time:30,iconsProgramming:[{img:i(2951),position:-0},{img:i(2532),position:-1},{img:i(2893),position:-2},{img:i(5754),position:-3},{img:i(3629),position:-4},{img:i(214),position:-5},{img:i(1331),position:-6},{img:i(600),position:-7},{img:i(5450),position:-8},{img:i(2100),position:-9},{img:i(8442),position:-10},{img:i(7889),position:-11},{img:i(4952),position:-12}]}}},x=h,A=(0,c.Z)(x,b,v,!1,null,"1c021142",null),C=A.exports,y=function(){var t=this,e=t._self._c;return e("b-container",{directives:[{name:"motion",rawName:"v-motion",value:"custom1",expression:"'custom1'"}],staticClass:"container-presentation d-flex justify-content-center align-items-center",attrs:{initial:{opacity:0,x:100},visibleOnce:{opacity:1,x:0},delay:500,fluid:"lg"}},[e("b-row",{staticClass:"row-presentation"},[e("b-col",{directives:[{name:"motion",rawName:"v-motion",value:"custom2",expression:"'custom2'"}],staticClass:"p-3 d-flex justify-content-center align-items-center",attrs:{initial:{opacity:0,x:100},visibleOnce:{opacity:1,x:0},delay:800,cols:"12",md:"4"}},[e("figure",{staticClass:"img-presentation p-0 m-0 col-12 overflow-hidden"},[e("img",{attrs:{src:i(1291),alt:""}})])]),e("b-col",{directives:[{name:"motion",rawName:"v-motion",value:"custom3",expression:"'custom3'"}],staticClass:"p-3 d-flex flex-column justify-content-center align-items-center align-items-md-start",attrs:{initial:{opacity:0,x:100},visibleOnce:{opacity:1,x:0},delay:1100,cols:"12",md:"8"}},[e("h2",{staticClass:"title-presentation"},[t._v("salve mi presento")]),e("p",{staticClass:"text-dark"},[t._v(" Sono un ragazzo empatico e capace di ascoltare e comprendere rapidamente il problema da affrontare."),e("br"),t._v("L'ambizione e la determinazione non mi mancano e mi aiutano certamente a perseguire gli obiettivi che mi prefiggo o che mi vengono dati."),e("br"),t._v("La relazione con le altre persone è un ottimo carburante per me e spiega la mia propensione al lavoro in team."),e("br"),t._v("Ho deciso di investire su di me come sviluppatore per trasformare in lavoro la mia passione per la tecnologia e per la logica unita al desiderio e al benessere che provo nell'aiutare il prossimo. ")]),e("b-container",{staticClass:"d-flex justify-content-center justify-content-md-start p-0",attrs:{fluid:""}},[e("b-button",{staticClass:"btn-linkedin px-4 py-2 me-3",attrs:{href:"https://www.linkedin.com/in/giuseppe-dicosmo-20b4a223a/",target:"_blank",variant:"primary"}},[e("b-icon",{staticClass:"me-1",attrs:{icon:"linkedin"}}),t._v(" Linkedin ")],1),e("b-button",{staticClass:"btn-linkedin px-4 py-2",attrs:{href:"GiuseppeDicosmoCv.pdf",download:"",variant:"primary"}},[e("b-icon",{staticClass:"me-1",attrs:{icon:"download"}}),t._v(" Scarica CV ")],1)],1)],1)],1)],1)},k=[],w=i(2165);const{custom1:S}=(0,w.wV)(),{custom2:j}=(0,w.wV)(),{custom3:_}=(0,w.wV)();var $={name:"generalPresentation",methods:{customEvent(){S.variant.value="custom",j.variant.value="custom",_.variant.value="custom"}}},z=$,L=(0,c.Z)(z,y,k,!1,null,"9e3939ba",null),G=L.exports,E=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"container-experience-training my-5",attrs:{fluid:"lg"}},[e("div",{directives:[{name:"motion-slide-visible-once-left",rawName:"v-motion-slide-visible-once-left"}],attrs:{delay:800}},[e("h2",{staticClass:"text-center mb-5"},[t._v("esperienze")]),e("article",{staticStyle:{"margin-bottom":"130px"}},t._l(t.trainingArray,(function(i,a){return e("section",{key:a,staticClass:"flex-sm-row",class:a===t.changeSlide?t.slideActive:t.slide,style:`background: ${i.background}; border-radius: 50px;`},[e("span",{staticClass:"p-4 d-flex justify-content-center align-items-center",on:{click:function(e){t.changeSlide>0?t.changeSlide--:t.changeSlide=t.trainingArray.length-1}}},[e("b-icon",{staticClass:"text-light d-none d-sm-block",staticStyle:{cursor:"pointer"},attrs:{icon:"chevron-left",scale:"3"}}),e("b-icon",{staticClass:"text-light d-block d-sm-none",staticStyle:{cursor:"pointer"},attrs:{icon:"chevron-up",scale:"3"}})],1),e("div",{staticClass:"p-4 text-light text-center d-flex flex-grow-1 flex-column justify-content-center align-items-center",staticStyle:{"text-shadow":"0px 0px 2px #000"}},[e("h3",[t._v(t._s(i.qualifica))]),e("h4",[t._v(t._s(i.azienda))]),e("time",[t._v(t._s(i.tempo))]),e("p",{domProps:{innerHTML:t._s(i.descrizione)}})]),e("span",{staticClass:"p-4 d-flex justify-content-center align-items-center",on:{click:function(e){t.changeSlide<t.trainingArray.length-1?t.changeSlide++:t.changeSlide=0}}},[e("b-icon",{staticClass:"text-light d-none d-sm-block",staticStyle:{cursor:"pointer"},attrs:{icon:"chevron-right",scale:"3"}}),e("b-icon",{staticClass:"text-light d-block d-sm-none",staticStyle:{cursor:"pointer"},attrs:{icon:"chevron-down",scale:"3"}})],1)])})),0)])])},N=[],M={name:"trainingTime",data(){return{changeSlide:0,slide:"slide",slideActive:"slide slide-active",trainingArray:[{background:"linear-gradient(-229deg, #fbd52d, #ef3a7b)",qualifica:"FRONTEND WEB DEVELOPER",azienda:"BC Soft Srl",tempo:"06/2022 - 09/2022",descrizione:"Academy Front-End di 240 ore di teoria e pratica, dove ho imparato questi linguaggi di programmazione:<br />Html, Css, Boostrap, Javascript, typescript, MySQL, react, angular, node js"},{background:"linear-gradient(-229deg, #ef3a7b, #993ea8)",qualifica:"JR. FULL STACK WEBDEVELOPERTRAINING",azienda:"Boolean Careers",tempo:"12/2021 - 06/2022",descrizione:"Academy di 700 ore durante la quale ho realizzato progetti a difficoltà crescente sia per task logiche che grafiche.<br />I progetti realizzati sono stati svolti sia in autonomia che in team ed erano ispirati a noti siti web e web app come il sito playstation whatsapp spotify.<br />Il percorso si è concluso con la realizzazione di un sito web completo di backend e frontend di Deliveroo che prevedeva l'implementazione di funzionalità quali: pagamenti, filtraggio ristoranti, registrazione utente con validazioni, invio di email.<br />E dove ho imparato questi linguaggi di programmazione:<br />Html, Css, Boostrap, Javascript, Vue, Sass, MySQL, php, laravel."},{background:"linear-gradient(-229deg, #993ea8, #004aad)",qualifica:"O.S.S.",azienda:"Salute & Misericordia",tempo:"06/2019 - 08/2019",descrizione:"Fornivo un supporto infermieristico nell'assistenza di base, e mi occupavo nell'igiene della persona mi occupavo del suo benessere psicofisico Per poi diventare un lavoratore autonomo da Settembre 2019 a Dicembre 2021"},{background:"linear-gradient(-229deg, #004aad, #ff5757)",qualifica:"CAREGIVER",azienda:"Sterlicchio Viaggi Di Michele Antonio Sterlicchio & C - Margherita di Savoia",tempo:"09/2018 - 05/2019",descrizione:'Accompagnatore per disabili preso il presidio di riabilitazione "A. Quarto di Palo e Mons. G.Di Donna"'}]}}},D=M,P=(0,c.Z)(D,E,N,!1,null,"4e1c53de",null),V=P.exports,O=function(){var t=this,e=t._self._c;return e("b-container",{directives:[{name:"motion-fade-visible-once",rawName:"v-motion-fade-visible-once"}],attrs:{fluid:"lg",delay:500}},[e("h2",{staticClass:"text-center"},[t._v("progetti")]),e("b-input-group-append",{staticClass:"d-flex justify-content-center justify-content-around my-3"},[e("b-button",{staticClass:"btn-github px-4 py-2",attrs:{href:"https://github.com/Giuseppe-Dicosmo",target:"_blank"}},[e("b-icon",{attrs:{icon:"github"}}),t._v(" GitHub ")],1)],1),e("b-input-group-append",{staticClass:"d-flex justify-content-center flex-wrap"},t._l(t.buttonProjects,(function(i,a){return e("b-button",{key:a,staticClass:"btn btn-projects px-4 py-2 m-2 text-white",style:`background: ${i.backgroundColor}`,on:{click:function(e){return t.filterButton(i.text)}}},[t._v(" "+t._s(i.text)+" ")])})),1),e("b-container",{staticClass:"my-2",attrs:{fluid:""}},[e("b-row",{staticClass:"d-flex justify-content-center",attrs:{cols:"1","cols-lg":"2","cols-xl":"3","align-h":"center"}},t._l(t.filterCard,(function(a,o){return e("b-col",{key:o,staticClass:"p-4"},[e("b-card",{staticClass:"text-light text-center",attrs:{tag:"article"}},[e("figure",{staticClass:"rounded overflow-hidden",staticStyle:{"max-width":"100%",height:"200px"}},[e("img",{attrs:{src:a.img?a.img:i(5562),alt:""}})]),e("b-container",{staticClass:"p-0",attrs:{fluid:""}},[e("h4",[t._v(t._s(a.title))])]),e("b-container",{staticClass:"mb-4 p-0",attrs:{fluid:""}},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:`modal-${o}`,expression:"`modal-${i}`"}],attrs:{variant:"outline-warning"}},[t._v(" Informazioni sul progetto ")]),e("b-modal",{attrs:{id:`modal-${o}`,"header-bg-variant":t.$store.state.dark?"dark border-0 rounded-top":"light border-0 rounded-top","header-text-variant":t.$store.state.dark?"light":"dark","body-bg-variant":t.$store.state.dark?"dark rounded-bottom":"light rounded-bottom","body-text-variant":t.$store.state.dark?"light":"dark","hide-footer":"",centered:""},scopedSlots:t._u([{key:"modal-header",fn:function({close:i}){return[e("h3",{staticClass:"m-0"},[t._v(t._s(a.title))]),e("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return i()}}},[e("b-icon",{attrs:{scale:"0.7",icon:"x-lg"}})],1)]}},{key:"default",fn:function(){return[e("p",{domProps:{innerHTML:t._s(a.description)}}),e("h4",[t._v("Cosa ho utilizzato:")]),e("b-input-group-append",{staticClass:"d-flex justify-content-center justify-content-sm-start flex-wrap",staticStyle:{gap:"10px"}},t._l(a.languages,(function(i,a){return e("b-button",{key:a,staticClass:"text-light",attrs:{variant:"warning"}},[t._v(" "+t._s(i)+" ")])})),1)]},proxy:!0}],null,!0)})],1),e("b-container",{staticClass:"d-flex justify-content-center p-0",attrs:{fluid:""}},[e("b-button",{staticClass:"me-3",attrs:{href:a.linkGithub,target:"_blank",variant:"outline-warning"}},[e("b-icon",{attrs:{icon:"code-slash"}}),t._v(" Code GitHub ")],1),e("b-button",{attrs:{href:a.linkWeb,target:"_blank",variant:"outline-warning",disabled:a.disabled}},[e("b-icon",{attrs:{icon:"globe"}}),t._v(" Web Demo ")],1)],1)],1)],1)})),1)],1)],1)},q=[],B={name:"allProjects",data(){return{languageSelection:"all",pippo:!1,buttonProjects:[{text:"All",backgroundColor:"linear-gradient(150deg, #004aad, #ff5757, #ffcc00)"},{text:"Html Css",backgroundColor:"linear-gradient(90deg, #f16529, #214ce5)"},{text:"Sass",backgroundColor:"#cf649a"},{text:"Bootstrap",backgroundColor:"#7952b3"},{text:"JavaScript",backgroundColor:"#f7d138"},{text:"Typescript",backgroundColor:"#0074c3"},{text:"Vue",backgroundColor:"#3fb27f"},{text:"React",backgroundColor:"#5ccfee"},{text:"Php",backgroundColor:"#7175aa"},{text:"Laravel",backgroundColor:"#f22a1d"}],cardProjects:[{img:i(5583),title:"Deliverboo",description:"Una riproduzione simile a Glovo, il ristoratore può accedere alla sua area riservata dove può aggiungere i suoi nouvi piatti, controllare gli ordini ricevuti dai clienti.<br />Invece lato cliente può scegliere un ristorante qualsiasi quali pietanze comprare per poi procedere l'acquisto",linkGithub:"https://github.com/Difelice-e/deliverboo-team5.git",linkWeb:"",gender:"php, laravel, sass, bootstrap",languages:["Html Css","Sass","Bootstrap","Javascript","Vue","Vue Router","Vuex","phpMyAdmin","php","Laravel"],disabled:"disabled"},{img:i(7881),title:"Card Shop",description:'Questo sito mostra delle card con vari articoli ho può filtrare il singolo articolo in base al suo ID grazie a delle chiamate API del sito "DummyJSON"',linkGithub:"https://github.com/Giuseppe-Dicosmo/esercizio-react.git",linkWeb:"",gender:"react, bootstrap",languages:["Html Css","Bootstrap","Javascript","React"],disabled:"disabled"},{img:i(115),title:"Boolflix",description:'Una riproduzione simile a Netflix, dove grazie alle chiamate API del sito "The Movie Database" e della barra di ricerca possiamo filtrare tutti i Film e serie TV con quel determinato nome, inoltre ci verra mostrato di che nazionalità è il film la sua trama e il suo voto.',linkGithub:"https://github.com/Giuseppe-Dicosmo/vue-boolflix.git",linkWeb:"https://giuseppe-dicosmo.github.io/vue-boolflix/",gender:"vue, sass",languages:["Html Css","Sass","Javascript","Vue"]},{img:i(5601),title:"Whatsapp",description:"Whatsapp web, Una web app di messaggistica dove scegliendo il contatto desiderato potremmo inviare un messaggio è un bot ci rispondera dopo un paio di secondi e nella chat verrà salvato l'ultimo messaggio, possiamo filtrare anche i nostri contatti scrivendo il loro nome",linkGithub:"https://github.com/Giuseppe-Dicosmo/js-html-css-boolzap.git",linkWeb:"https://giuseppe-dicosmo.github.io/js-html-css-boolzap/",gender:"vue",languages:["Html Css","Javascript","Vue"]},{img:"",title:"Conto Bancario",description:"Questo progetto conto bancario, creato con classi di tipo oggetto dove ho creando degli utenti fittizi utilizzando il costruttore inserendo il loro codice bancario correttamente possiamo vedere tutti i loro movimenti, acquisti, bonifici e stipendio",linkGithub:"https://github.com/Giuseppe-Dicosmo/conto-bancario.git",linkWeb:"",gender:"typescript",languages:["Typescript"],disabled:"disabled"},{img:i(4692),title:"Sasso carta e forbici",description:"Sasso carta e forbice, spopolato nel 1920 in america ed europa.<br />Ora convertita in chiave moderna si può giocare con un bot che randomicamente buttera un sasso una carta o una forbice, il primo che arrivera a 10 punti vincera e verra resettata la partita.",linkGithub:"https://github.com/Giuseppe-Dicosmo/sasso-carta-forbice",linkWeb:"https://giuseppe-dicosmo.github.io/sasso-carta-forbice/",gender:"javascript",languages:["Html Css","Javascript"]},{img:i(4515),title:"Campo minato",description:"Campo minato un videogioco rompicapo, diffuso negli anni 90 da Microsoft è creato con vari livelli di difficoltà.",linkGithub:"https://github.com/Giuseppe-Dicosmo/js-campominato-grid.git",linkWeb:"https://giuseppe-dicosmo.github.io/js-campominato-grid/",gender:"javascript",languages:["Html Css","Javascript"]},{img:i(9949),title:"Playstation",description:"Una riproduzione della schermata home del sito web Playstation con l'aggiunta di boostrap e responsive.",linkGithub:"https://github.com/Giuseppe-Dicosmo/htmlcss-playstation",linkWeb:"https://giuseppe-dicosmo.github.io/htmlcss-playstation/",gender:"html css, bootstrap",languages:["Html Css","Bootstrap"]},{img:i(5124),title:"Spotify",description:"Una riproduzione della schermata home dell'app Spotify e responsive.",linkGithub:"https://github.com/Giuseppe-Dicosmo/html-css-spotifyweb",linkWeb:"https://giuseppe-dicosmo.github.io/html-css-spotifyweb/",gender:"html css",languages:["Html Css"]}]}},methods:{filterButton(t){this.languageSelection=t.toLowerCase()}},computed:{filterCard(){return"all"===this.languageSelection?this.cardProjects:this.cardProjects.filter((t=>t.gender.includes(this.languageSelection)))}}},F=B,I=(0,c.Z)(F,O,q,!1,null,"6a410aa4",null),T=I.exports,W={name:"HomeView",components:{jumbotron:C,presentation:G,trainingTime:V,allProjects:T}},Z=W,R=(0,c.Z)(Z,g,f,!1,null,"43a998bc",null),J=R.exports,H=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex justify-content-center align-items-center",attrs:{fluid:"lg"}},[e("b-form",{ref:"form",staticClass:"p-4 p-sm-5 col-12 col-sm-9 col-lg-7 text-light d-flex flex-column container-input",staticStyle:{gap:"20px 0"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"focus-within d-flex flex-column"},[e("label",[e("b-icon",{attrs:{icon:"person-fill"}}),t._v(" Nome")],1),e("b-form-input",{attrs:{state:t.validateState("name"),"aria-describedby":"input-name-error",name:"rom_name",placeholder:"Mario",trim:""},model:{value:t.$v.form.name.$model,callback:function(e){t.$set(t.$v.form.name,"$model",e)},expression:"$v.form.name.$model"}}),e("b-form-invalid-feedback",{staticClass:"fw-bold",attrs:{id:"input-name-error"}},[t._v(" "+t._s(0==t.$v.form.name.$model.length?"inserisci il tuo nome":t.$v.form.name.$model.length<2?"questo campo deve avere almeno 2 caratteri":t.$v.form.name.$model.length>50?"puoi inserire un massimo 50 caratteri":null)+" ")])],1),e("div",{staticClass:"focus-within d-flex flex-column"},[e("label",[e("b-icon",{attrs:{icon:"person-fill"}}),t._v(" Cognome")],1),e("b-form-input",{attrs:{state:t.validateState("lastName"),"aria-describedby":"input-lastName-error",name:"rom_lastName",placeholder:"Rossi",trim:""},model:{value:t.$v.form.lastName.$model,callback:function(e){t.$set(t.$v.form.lastName,"$model",e)},expression:"$v.form.lastName.$model"}}),e("b-form-invalid-feedback",{staticClass:"fw-bold",attrs:{id:"input-lastName-error"}},[t._v(" "+t._s(0==t.$v.form.lastName.$model.length?"inserisci il tuo cognome":t.$v.form.lastName.$model.length<2?"questo campo deve avere almeno 2 caratteri":t.$v.form.lastName.$model.length>50?"puoi inserire un massimo 50 caratteri":null)+" ")])],1),e("div",{staticClass:"focus-within d-flex flex-column text-light"},[e("label",[e("b-icon",{attrs:{icon:"envelope-fill"}}),t._v(" Email")],1),e("b-form-input",{attrs:{type:"email",state:t.validateState("email"),"aria-describedby":"input-email-error",name:"email",placeholder:"mariorossi@gmail.com",trim:""},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),e("b-form-invalid-feedback",{staticClass:"fw-bold",attrs:{id:"input-email-error"}},[t._v(" inserisci la tua email ")])],1),e("div",{staticClass:"focus-within d-flex flex-column"},[e("label",[e("b-icon",{attrs:{icon:"chat-right-text-fill"}}),t._v(" Messaggio")],1),e("b-form-textarea",{attrs:{state:t.validateState("message"),"aria-describedby":"input-message-error",rows:"2",name:"message",placeholder:"Scrivimi di cosa vuoi parlare",trim:""},model:{value:t.$v.form.message.$model,callback:function(e){t.$set(t.$v.form.message,"$model",e)},expression:"$v.form.message.$model"}}),e("b-form-invalid-feedback",{staticClass:"fw-bold",attrs:{id:"input-message-error"}},[t._v(" È obbligatorio compilare questo campo ")])],1),e("div",{staticClass:"d-flex justify-content-center"},[e("input",{staticClass:"text-light send border-0 py-2 px-4 rounded",attrs:{type:"submit",value:"invia"}})])]),e("b-modal",{staticClass:"p-5",attrs:{"body-bg-variant":t.$store.state.dark?"dark rounded":"light rounded","hide-footer":"","hide-header":"",centered:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("b-container",{staticClass:"p-3 d-flex flex-column align-items-center"},[e("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{gap:"0 30px"}},[e("h4",{staticClass:"m-0 d-inline text-success text-uppercase",class:t.errorEmailjs?"text-danger":"text-success"},[t._v(" "+t._s(t.reply)+" ")]),t.errorEmailjs?e("b-icon",{attrs:{scale:"2",variant:"danger",icon:"exclamation-triangle-fill"}}):e("b-icon",{attrs:{scale:"2",variant:"success",icon:"check-circle-fill"}})],1),t.errorEmailjs?e("b-button",{staticClass:"mt-4",attrs:{variant:"danger",href:"mailto:giuseppedicosmo530@gmail.com"}},[t._v(" Scrivimi una mail ")]):t._e()],1)]},proxy:!0}]),model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}})],1)},Q=[],U=i(5247),Y=i(8620),K=i(379),X={name:"contactMe",mixins:[Y.oE],data(){return{form:{name:"",lastName:"",email:"",message:""},errorEmailjs:!1,modalShow:!1}},validations:{form:{name:{required:K.C1,minLength:(0,K.Ei)(2),maxLength:(0,K.BS)(50)},lastName:{required:K.C1,minLength:(0,K.Ei)(2),maxLength:(0,K.BS)(50)},email:{required:K.C1,email:K.Do},message:{required:K.C1}}},methods:{validateState(t){const{$dirty:e,$error:i}=this.$v.form[t];return e?!i:null},onSubmit(){this.$v.form.$touch(),this.$v.form.$anyError||this.sendEmail()},resetForm(){this.form={name:"",lastName:"",email:"",message:""},this.$nextTick((()=>{this.$v.$reset()}))},sendEmail(){U.ZP.sendForm("service_j9raeac","template_46xzqxy",this.$refs.form,"oBuCuyyrE4XLIg57P").then((t=>{this.modalShow=!0,this.reply="inviato con successo",this.resetForm(),console.log("SUCCESS!",t.text)}),(t=>{this.errorEmailjs=!0,this.modalShow=!0,this.reply="mi dispiace c'è qualcosa che è andato storto",console.error("FAILED...",t.text)}))}}},tt=X,et=(0,c.Z)(tt,H,Q,!1,null,"296e1323",null),it=et.exports,at=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex justify-content-center flex-column align-items-center",attrs:{fluid:"lg"}},[e("h1",{staticClass:"fw-bold"},[t._v("Oops!")]),e("h2",{staticClass:"text-uppercase",class:t.$store.state.dark?"text-light":"text-dark"},[t._v(" 404 - page not found ")]),e("p",{staticClass:"text-center",class:t.$store.state.dark?"text-light":"text-dark"},[t._v(" La pagina che stai cercando potrebbe essere stata rimossa ha cambiato nome o è temporaneamente non disponibile si prega di tornare alla home ")]),e("router-link",{attrs:{to:"/"}},[e("b-button",{staticClass:"px-4 button-error"},[t._v("Home")])],1),e("router-view")],1)},ot=[],st={},nt=(0,c.Z)(st,at,ot,!1,null,"02eff720",null),rt=nt.exports;a["default"].use(p.ZP);const lt=[{path:"/",name:"home",component:J,meta:{title:"Giuseppe Dicosmo | Full Stack Web Developer"}},{path:"/contactMe",name:"contactMe",component:it,meta:{title:"Contattami"}},{path:"/*",name:"Error404",component:rt,meta:{title:"ERROR 404"}}],ct=new p.ZP({mode:"history",base:"/portfolio/",routes:lt});ct.beforeEach(((t,e,i)=>{document.title=t.meta.title,i()}));var dt=ct;a["default"].use(n.ZP);var mt=new n.ZP.Store({state:{dark:"",navbarIcon:!0},getters:{},mutations:{scrollTop:()=>{window.scrollTo({top:0})},darkMode(t){const e=document.querySelector(".ball"),i=document.querySelector("#app"),a=window.matchMedia("(prefers-color-scheme: dark)");function o(t,e,i){e.classList.toggle("bg-dark",t),i.classList.toggle("active",t)}t.dark=a.matches,o(a.matches,i,e)}},actions:{},modules:{}}),ut=i(5069),pt=i(3017);i(7024);a["default"].use(ut.XG7),a["default"].use(pt.A7),a["default"].use(w.tc),a["default"].config.productionTip=!1,new a["default"]({router:dt,store:mt,render:t=>t(m)}).$mount("#app")},2100:function(t,e,i){t.exports=i.p+"img/angular.74e49f8c.svg"},2893:function(t,e,i){t.exports=i.p+"img/bootstrap.86295ace.svg"},2532:function(t,e,i){t.exports=i.p+"img/css.892d68fc.svg"},2951:function(t,e,i){t.exports=i.p+"img/html.1758920c.svg"},3629:function(t,e,i){t.exports=i.p+"img/javascript.891f8ffc.svg"},4952:function(t,e,i){t.exports=i.p+"img/laravel.575758c4.svg"},8442:function(t,e,i){t.exports=i.p+"img/mysql.8d3b9d09.svg"},1331:function(t,e,i){t.exports=i.p+"img/node-js.ef2a17de.svg"},7889:function(t,e,i){t.exports=i.p+"img/php.117dfae3.svg"},5450:function(t,e,i){t.exports=i.p+"img/react.92d1d45f.svg"},5754:function(t,e,i){t.exports=i.p+"img/sass.cf69f2d1.svg"},214:function(t,e,i){t.exports=i.p+"img/typescript.a70cac4f.svg"},600:function(t,e,i){t.exports=i.p+"img/vue.68af69e9.svg"},115:function(t,e,i){t.exports=i.p+"img/img-boolflix.486b487b.jpeg"},7584:function(t,e,i){t.exports=i.p+"img/img-brand.c99f8189.png"},4515:function(t,e,i){t.exports=i.p+"img/img-campo-minato.75171a4a.jpg"},5562:function(t){t.exports="data:image/png;base64,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"},5583:function(t,e,i){t.exports=i.p+"img/img-deliverboo.2edf2c88.jpg"},4692:function(t,e,i){t.exports=i.p+"img/img-morra-cinese.e004ec1e.jpeg"},9949:function(t,e,i){t.exports=i.p+"img/img-playstation.45b18b3c.jpeg"},9180:function(t,e,i){t.exports=i.p+"img/img-profail-1.169378e5.png"},1291:function(t,e,i){t.exports=i.p+"img/img-profail-2.51559e59.png"},7881:function(t,e,i){t.exports=i.p+"img/img-react-shop-card.8367d604.jpg"},5124:function(t,e,i){t.exports=i.p+"img/img-spotify.aa2fc784.jpeg"},5601:function(t,e,i){t.exports=i.p+"img/img-whatsapp.3736dbfc.jpeg"}},e={};function i(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,o,s){if(!a){var n=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],s=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||n>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(r=!1,s<n&&(n=s));if(r){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,o,s]}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/portfolio/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,n=a[0],r=a[1],l=a[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(l)var d=l(i)}for(e&&e(a);c<n.length;c++)s=n[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(2978)}));a=i.O(a)})();
//# sourceMappingURL=app.daa9ac14.js.map