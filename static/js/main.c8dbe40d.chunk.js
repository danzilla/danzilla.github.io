(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{191:function(e,t,a){e.exports=a(522)},522:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(187),s=a(17),m=(a(200),a(189)),u=a(65),d=a(66),p=a(68),E=a(67),g=(a(30),a(5)),b=(a(523),a(188)),h=(a(209),a(74)),v=function(e){return r.a.createElement("div",{className:"user-info"},r.a.createElement("p",null," ",JSON.stringify(e)," "))};var f=function(e){return r.a.createElement("div",{className:"user-info"},r.a.createElement(h.a,{message:"Success Text",type:"success"}),r.a.createElement(h.a,{message:"Info Text",type:"info"}),r.a.createElement(h.a,{message:"Warning Text",type:"warning"}),r.a.createElement(h.a,{message:"Error Text",type:"error"}),r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:e.user.avatar_url,alt:"avatar",width:"250px"})),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,e.user.name),r.a.createElement(v,{user:e.user})))},y=a(55),S=a(172),k=a(173),O=a(174),w={userData:{},isFetching:!1,isError:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return Object.assign({},e,{isFetching:!0,userData:t.data,isError:!1});case"FETCHED_USER":return Object.assign({},e,{userData:t.data,isFetching:!1,isError:!1});case"RECEIVE_ERROR":return Object.assign({},e,{userData:t.data,isError:!0,isFetching:!1});default:return e}},C={active_session:null,active_fannyPack:null,active_account:null,user:null,user_fannyPack:null,user_accounts:null,user_account_type:null,user_account_category:null,user_account_transaction:null,isFetching:!1,isError:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVE_Session":return Object.assign({},e,{active_session:t.data,isError:!1});case"ACTIVE_FannyPack":return Object.assign({},e,{active_fannyPack:t.data,isError:!1});case"ACTIVE_Account":return Object.assign({},e,{active_account:t.data,isError:!1});case"FETCH":return Object.assign({},e,{isFetching:!0,isError:!0});case"FETCHED":return Object.assign({},e,{isFetching:!1,isError:!1});case"RECEIVE_ERROR":return Object.assign({},e,{error:t.data,isError:!1});case"FETCHED_USER":return Object.assign({},e,{user:t.data,isError:!1});case"FETCHED_USER_FANNYPACKS":return Object.assign({},e,{user_fannyPack:t.data,isError:!1});case"FETCHED_USER_ACCOUNTS":return Object.assign({},e,{user_accounts:t.data,isError:!1});case"FETCHED_USER_ACCOUNTS_TYPES":return Object.assign({},e,{user_account_type:t.data,isError:!1});case"FETCHED_USER_ACCOUNTS_CATEGORY":return Object.assign({},e,{user_account_category:t.data,isError:!1});case"FETCHED_USER_ACCOUNTS_TRANSACTION":return Object.assign({},e,{user_account_transaction:t.data,isError:!1});case"LOG_OUT":return Object.assign({},e,{active_session:null,active_fannyPack:null,active_account:null,user:null,user_fannyPack:null,user_accounts:null,user_account_type:null,user_account_category:null,user_account_transaction:null,isFetching:!1,isError:!1});default:return e}},x=Object(y.combineReducers)({fetchReducers:I,sessionReducers:j,router:O.routerReducer}),A=Object(y.createStore)(x,Object(k.composeWithDevTools)(Object(y.applyMiddleware)(S.a))),T=function(e){return{type:"FETCHED_USER",data:e}},R=function(e){var t=e.replace(/\s/g,"");return A.dispatch({type:"FETCH_USER",data:"loooodin"}),function(e,a){return fetch("https://api.github.com/users/".concat(t)).then((function(e){return e.json()})).then((function(t){if("Not Found"===t.message)throw new Error("No such user found!!");e(T(t))})).catch((function(t){return e({type:"RECEIVE_ERROR",data:"eeeeeero"})}))}},M=function(){return A.dispatch({type:"FETCH_USER",data:"loooodin"}),function(e,t){console.log("dispatch: "+JSON.stringify(e)),console.log("getState: "+JSON.stringify(t)),e(T("Clear")),e({type:"RECEIVE_ERROR",data:"eeeeeero"}),console.log("Cleaned"),console.log(JSON.stringify(t))}},N=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=e.getUsername.value;e.props.dispatch(R(a)),e.getUsername.value="",console.log(e.props)},e.cleanSearch=function(t){t.preventDefault(),e.props.dispatch(M()),e.getUsername.value="",console.log(e.props)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},r.a.createElement("h2",{className:"title"},"Enter the Github Username"),r.a.createElement("input",{type:"text",placeholder:"Enter Github Username",required:!0,ref:function(t){return e.getUsername=t}}),r.a.createElement("button",{onClick:this.cleanSearch,className:"button"},"Reset"),r.a.createElement("button",{className:"button"},"Submit"))}}]),a}(n.Component),_=Object(o.b)((function(e){return{data:e}}))(N),D=(b.a.Option,g.a.Title,function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{labelCol:{span:8},wrapperCol:{span:8}},this.props?r.a.createElement("p",null," ",JSON.stringify(this.props)," "):r.a.createElement("p",null,"connect not working"),r.a.createElement(_,null),this.props.data.fetchReducers.isFetching?r.a.createElement("h3",null,"Loading..."):null,this.props.data.fetchReducers.isError?r.a.createElement("h3",{className:"error"},"No such User exists."):null,Object.keys(this.props.data.fetchReducers.userData).length>0?r.a.createElement(f,{user:this.props.data.fetchReducers.userData}):null))}}]),a}(n.Component)),F=Object(o.b)((function(e){return{data:e}}))(D),L=(a(82),a(53)),B=(a(83),a(28)),P=(a(143),a(49)),z=(a(43),a(10)),U=a(22),J=a(48),H=(a(350),a(185)),V=a.n(H);g.a.Text,g.a.Link,g.a.Title,P.a.Header,P.a.Footer,P.a.Sider,P.a.Content;var W=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=(t[0],t[1],Object(n.useRef)(null)),l=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(n.useRef)(null),Object(n.useEffect)((function(){c.current=Object(J.a)({targets:".svg1 path",d:"m-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z",easing:"easeOutQuad",duration:9e3,loop:!0,direction:"alternate"});var e=document.querySelector(".c1");e.innerHTML=e.textContent.replace(/\S/g,"<span class='el' style='display:inline-block;'>$&</span>"),l.current=J.a.timeline({loop:!1}).add({targets:".c1 .el",translateY:["1.1em",0],translateZ:0,duration:1750,delay:function(e,t){return 200*t}}).add({targets:".c1 .el",direction:"alternate",scale:{value:"1.2",delay:function(e,t,a){return 200*t},duration:200}}).add({targets:".c1",direction:"alternate",scale:{value:"0.8",delay:function(e,t,a){return 100*t},duration:1e3}}).add({targets:".c1 .el",scale:[0,1],duration:1500,elasticity:300,delay:function(e,t){return 45*(t+1)}}),a.current=J.a.timeline({targets:".el1",easing:"easeOutExpo",direction:"alternate",loop:!1,duration:500,delay:function(e,t){return 200*t}}).add({translateX:200,easing:"spring"}).add({targets:".el1",rotate:180,easing:"spring"}).add({targets:".el1",rotate:360,easing:"spring"}).add({translateX:260,scale:1,easing:"spring"}).add({translateX:0,easing:"spring"})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"",style:{position:"relative"}},r.a.createElement("div",{style:{position:"absolute",height:"100vh",width:"100vh"}},r.a.createElement(V.a,{params:{particles:{number:{value:30},line_linked:{enable:!0,opacity:.06},move:{direction:"",speed:.35},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.1}}},interactivity:{events:{onclick:{enable:!0,mode:"push"},onhover:{enable:!0,mode:"repulse"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}))),r.a.createElement(L.a,{style:{height:"100%",width:"100%",overflow:"hidden"},type:"flex",justify:"center",align:"middle"},r.a.createElement(B.a,{className:"card-4 p-2"},r.a.createElement("h1",{class:"c1",style:{overflow:"hidden",color:"white"}}," Danustan Alphonza"),r.a.createElement(z.a,{type:"link",danger:!0,size:"large"},r.a.createElement("a",{href:"http://github.com/danzilla/"}," Github")),r.a.createElement(z.a,{type:"link",danger:!0,size:"large"},r.a.createElement("a",{href:"http://linkedin.com/in/danzilla/"}," Linkedin")),r.a.createElement(z.a,{type:"link",danger:!0,size:"large"},r.a.createElement("a",{href:"http://instagram.com/danzilla07/"}," Instagram")))))})),G=(a(40),a(4)),Y=g.a.Text;g.a.Link,g.a.Title;var Q=Object(o.b)((function(e){return{data:e}}))((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{mode:"alternate"},r.a.createElement(G.a.Item,{color:"green"},"Microsoft Certified: Azure Fundamentals (H413-5481)",r.a.createElement("br",null)," ",r.a.createElement(Y,{type:"danger"},"2020 - 2022")),r.a.createElement(G.a.Item,{color:"green"},"Ontario Tech University",r.a.createElement("br",null)," Bachelor of Information Technology (Honours) - Networking and IT Security",r.a.createElement("br",null)," ",r.a.createElement(Y,{type:"danger"},"2014 - 2018")),r.a.createElement(G.a.Item,{color:"green"},"Georgian College",r.a.createElement("br",null)," Diploma - Computer System Technician \u2013 Networking",r.a.createElement("br",null)," ",r.a.createElement(Y,{type:"danger"},"2012 - 2014"))))})),q=a(525),X=a(524),K=g.a.Text;g.a.Link,g.a.Title;var $=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"Yorkville University",r.a.createElement("br",null)," IT Operations specialist - LMS lead",r.a.createElement("br",null)," ",r.a.createElement(K,{type:"danger"},"April 2020 - Present"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}}," ",r.a.createElement(q.a,null)):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}}," ",r.a.createElement(X.a,null)," ")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"blue"},"Collaborate and Administrate with diverse teams to investigate and audit tickets and provide TSA support and expertise to Yorkville University clients",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Monitor, Report, and Debug code, service-logs, external reports, using Datadog and Splunk to make judgements on sources of bugs"),r.a.createElement("li",null,"Support and provide service for Blackboard, Canvas clients")))):"")})),Z=g.a.Text;g.a.Link,g.a.Title;var ee=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"Carleton Immersive Media Studio \u2013 Carleton University",r.a.createElement("br",null)," System Administrator",r.a.createElement("br",null)," ",r.a.createElement(Z,{type:"danger"},"Jan 2018 \u2013 Aug 2019"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}},r.a.createElement(q.a,null)):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}},r.a.createElement(X.a,null))),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,null,"Administrate \u2013 G Suite, PDQ Deployment and Inventory, Microsoft Deployment Toolkit (MDT), Active Directory, GPO, Hyper-V, Tomcat and Apache web servers, SAN/NAS Storages, Cisco ASA firewall, coordinate with vendors to purchase equipment, license renewal and technical expertise",r.a.createElement("ul",null,r.a.createElement("li",null,"Introduced and containerized hosted web applications from standalone Virtual Machines, improved application development productivity by use of Docker \u2013 Docker-compose, Portainer"),r.a.createElement("li",null,"Migrated legacy application to AWS EC2 and AWS RDS Instances"),r.a.createElement("li",null,"Secured front facing Web traffic using Reverse proxy, SSL, Errors management \u2013 Nginx"),r.a.createElement("li",null,"Support developers with configure and maintains dev-prod environments (Ubuntu and Window Server), participate in code reviews, brainstorm sessions and application development"))),r.a.createElement(G.a.Item,null,"Introduce and implemented self-hosted web application (SaaS) to manage CIMS Lab workflow and assets",r.a.createElement("ul",null,r.a.createElement("li",null,"NextCloud \u2013 File sharing web client"),r.a.createElement("li",null,"Gogs \u2013 A GIT web client to manage code repository"),r.a.createElement("li",null,"SnipeIt \u2013 An Inventory client to manage CIMS Lab digital and physical assets"),r.a.createElement("li",null,"Guacamole \u2013 Clientless remote desktop"),r.a.createElement("li",null,"pgAdmin \u2013 A web clinent to manage SQL Databases"))),r.a.createElement(G.a.Item,null,"Project (Web App) - Ontario East Economic Development (OE3D)",r.a.createElement("ul",null,r.a.createElement("li",null,"A 3D Geospatial Map of Ontario East. Using GIS and BIM technologies to 3D map Ontario east agriculture and food production industry and connect the business owners with the county\u2019s farmers and manufactures - A web app, which allows a user to explore industry buildings, inside and out, while help the user to learn more about industries production processes"),r.a.createElement("li",null,"Responsible for designing REST API using ExpressJS, integrate social login using PassportJS, designed UI using React, Redux"),r.a.createElement("li",null,"Node.js \u2013 Express, CesiumJS, React, Redux, PassportJS, ThreeJs, chartJS, Bootstrap and PostgreSQL"))),r.a.createElement(G.a.Item,null,"Project (Web App) - CIMS Lab \u2013 Showcase",r.a.createElement("ul",null,r.a.createElement("li",null,"A web application to display CIMS Lab private demos and prototypes - A Node.js app that ask for Invite code and redirect to appropriate demo application for visitor to review, comment and critic project demos and progress"),r.a.createElement("li",null,"Node.js \u2013 Express, EJS, Bootstrap, PostgreSQL"))),r.a.createElement(G.a.Item,null,"Project (Web App) - CIMS Lab \u2013 Assets",r.a.createElement("ul",null,r.a.createElement("li",null,"A web application to manage CIMS Lab Users and Computers. Visualize, users and computer login times, which projects and teams they are part of - Using Node.js library AD and powershell to create a web application where a user can create a user add the user to a group as well as visualize user group membership and user login history and time using chartJS."),r.a.createElement("li",null,"Node.js, Express, ad (Active directory JS), powershell(JS), chartJS, PostgreSQL, React")))):"")})),te=g.a.Text;g.a.Link,g.a.Title;var ae=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"Faculty of Business and IT \u2013 Ontario Tech University",r.a.createElement("br",null)," Developer - Research Assistant",r.a.createElement("br",null)," ",r.a.createElement(te,{type:"danger"},"Sep 2017 - Dec 2017"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}}," ",r.a.createElement(q.a,null)," "):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}}," ",r.a.createElement(X.a,null)," ")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"blue"},"FlexIt - A decision making web app, a web app which help users to Pick, Reserve, Follow-Up and Organize a group outgoing from the user\u2019s recommended list of activities or events",r.a.createElement("ul",null,r.a.createElement("li",null,"Designed a web application using Node.js. The interface designed using Bootstrap, the server side ExpressJS, template engine EJS and the Database MariaDB (SQL Database)"),r.a.createElement("li",null,"Node.js, ExpressJS, MariaDB, Bootstrap")))):"")})),ne=g.a.Text;g.a.Link,g.a.Title;var re=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"Faculty of Social Science \u2013 Ontario Tech University",r.a.createElement("br",null)," Web Developer - Research Assistant",r.a.createElement("br",null)," ",r.a.createElement(ne,{type:"danger"},"Sep 2016 \u2013 Apr 2017"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}}," ",r.a.createElement(q.a,null)," "):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}}," ",r.a.createElement(X.a,null)," ")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"blue"},"Redesigned faculty web page. Landing page, contact form and generic CMS to manage Overall update of the website content",r.a.createElement("ul",null,r.a.createElement("li",null,"Designed a web application using Node.js. The interface designed using Bootstrap, the server side ExpressJS, template engine EJS and the Database MariaDB (SQL Database)"),r.a.createElement("li",null,"JQuery, Bootstrap, PHP and PostgreSQL")))):"")})),le=g.a.Text;g.a.Link,g.a.Title;var ce=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"Aim Health Group \u2013 McKesson Canada",r.a.createElement("br",null)," Jr. System Administrator",r.a.createElement("br",null)," ",r.a.createElement(le,{type:"danger"},"May 2013 \u2013 Aug 2013"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}}," ",r.a.createElement(q.a,null)," "):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}}," ",r.a.createElement(X.a,null)," ")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"blue"},"Level 1 and level 2 support and IT requests during and after hours: maintained, managed, troubleshoot and exchange email, networking devices, backups, patch management, printer, desktop, laptop, media, Windows servers, VOIP technology and AV components both remotely (Remote Desktop/Sonic Wall NetExtender, TeamViewer) and on-premises",r.a.createElement("ul",null,r.a.createElement("li",null,"Provided support through phone calls and emails as well as adding necessary levels of access according to established compliance standards and policies for first time setup of AHG issued mobile devices (iPhone, iPad and Blackberry) using Air Watch, Blackberry Enterprise Server, SMARSH and Mobile Guard"),r.a.createElement("li",null,"Coordinate with third party vendors and service suppliers to provide technical support for AHG Clinics")))):"")})),oe=g.a.Text;g.a.Link,g.a.Title;var ie=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"Intria - Global Infrastructure - CIBC",r.a.createElement("br",null)," Wintel Engineer",r.a.createElement("br",null)," ",r.a.createElement(oe,{type:"danger"},"Jan 2014 \u2013 May 2014"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}}," ",r.a.createElement(q.a,null)," "):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}}," ",r.a.createElement(X.a,null)," ")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"blue"},"Create and configure virtual host in both dev and pre-prod environments using VMWare appliances",r.a.createElement("ul",null,r.a.createElement("li",null,"Coordinated, reported and maintained database of cross-departmental projects, change requests via SharePoint"),r.a.createElement("li",null,"Incident management, workorder and troubleshooting experience (IMACD) using Remedy and ServiceNow"),r.a.createElement("li",null,"Created resource management tool using macros and VBA, to automate template creation for the team"),r.a.createElement("li",null,"Created required documentation for all new processes and systems to help assist future employees")))):"")})),se=g.a.Text;g.a.Link,g.a.Title;var me=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"Global Cloud and Virtualization - RBC",r.a.createElement("br",null)," Virtualization Analyst",r.a.createElement("br",null)," ",r.a.createElement(se,{type:"danger"},"May 2016 \u2013 Aug 2016"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}}," ",r.a.createElement(q.a,null)," "):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}}," ",r.a.createElement(X.a,null)," ")),a?r.a.createElement(G.a.Item,null,"Use of VMWare appliance to maintain and manage VMWare ESXi Hosts, virtual machines as per requests (ServiceNow \u2013 Ticket)",r.a.createElement("ul",null,r.a.createElement("li",null,"vSphere appliance and templates for VM configuration, migration and upgrade"),r.a.createElement("li",null,"Allocating SAN disk spaces to a robust, scalable solution"),r.a.createElement("li",null,"Server migration, upgrade, ESXI host installation and patching."),r.a.createElement("li",null,"Automated scheduled processes for generating inventory and performance reports using PowerCLI scripting"),r.a.createElement("li",null,"As a part of team, designed dashboard to monitor Cluster and Hosts performance using Logstash and Grafana"))):"")})),ue=g.a.Text;g.a.Link,g.a.Title;var de=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"green"},"PC Corner Inc",r.a.createElement("br",null),"IT Technician",r.a.createElement("br",null),r.a.createElement(ue,{type:"danger"},"Sep 2009 \u2013 Aug 2012"),a?r.a.createElement(z.a,{type:"link",onClick:function(){return l(!1)}}," ",r.a.createElement(q.a,null)," "):r.a.createElement(z.a,{type:"link",onClick:function(){return l(!0)}}," ",r.a.createElement(X.a,null)," ")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Item,{color:"blue"},"Provides on-site and on-phone IT services",r.a.createElement("ul",null,r.a.createElement("li",null,"Troubleshoots desktop and laptop (virus removal, back-ups and data recovery)"),r.a.createElement("li",null,"Operating systems installation, upgrade, troubleshooting"),r.a.createElement("li",null,"Handled cash during peak hours and pay heed to customer preferences")))):"")})),pe=g.a.Text,Ee=(g.a.Link,g.a.Title,function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{style:{height:"auto"},type:"flex",justify:"center",align:"middle"},r.a.createElement(B.a,{span:8},r.a.createElement(G.a,{mode:"right"},r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Languages")},r.a.createElement(pe,{type:"danger"},"HTML, CSS, SASS")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"JavaScript")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"JSON, XML")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"PHP")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Python")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Bash")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"PowerShell")))),r.a.createElement(B.a,{span:8},r.a.createElement(G.a,{mode:"left"},r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"PostgreSQL")),r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Databases ")},r.a.createElement(pe,{type:"danger"},"MySQL")," "),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"MariaDB")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"MongoDB"))),r.a.createElement(G.a,{mode:"right"},r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Web Servers")},r.a.createElement(pe,{type:"danger"},"Nginx")," "),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Apache")))),r.a.createElement(B.a,{span:8},r.a.createElement(G.a,{mode:"right"},r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Framework, Library, Enginez")},r.a.createElement(pe,{type:"danger"},"Python flask")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Node.JS")),r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Backend")},r.a.createElement(pe,{type:"danger"},"Expres.JS, Passport.JS")),r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Frontend")},r.a.createElement(pe,{type:"danger"},"React.JS, Redux.JS, Chart.JS, Three.Js, Cesium.JS ")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"jQuery, LeapMotion, Flexbox Grid, Bootstrap, Materialize, Ant.d"))))),r.a.createElement(L.a,{style:{height:"auto"},type:"flex",justify:"center",align:"middle"},r.a.createElement(B.a,{span:8},r.a.createElement(G.a,{mode:"right"},r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Cloud services")},r.a.createElement(pe,{type:"danger"},"Amazon Web Services (Beanstalk, EC2)")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Microsoft Azure (VM, App and Web services)")))),r.a.createElement(B.a,{span:8},r.a.createElement(G.a,{mode:"right"},r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"DevOps")},r.a.createElement(pe,{type:"danger"},"Docker Container")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Git"))),r.a.createElement(G.a,{mode:"right"},r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"Hypervisor")},r.a.createElement(pe,{type:"danger"},"VMware (ESXi, vSphere, VMware workstation, player)")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Hyper-V")))),r.a.createElement(B.a,{span:8},r.a.createElement(G.a,{mode:"right"},r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Windows Server (2003, 2008, 2012 R2, 2016 Server and Core)")),r.a.createElement(G.a.Item,{color:"green",label:r.a.createElement("p",null,"OS and Server")},r.a.createElement(pe,{type:"danger"},"Linux (Ubuntu, Kali, SUSE)")),r.a.createElement(G.a.Item,{color:"red"},r.a.createElement(pe,{type:"danger"},"Mac"))))))}}]),a}(n.Component)),ge=Object(o.b)((function(e){return{data:e}}))(Ee);g.a.Text,g.a.Link,g.a.Title;var be=Object(o.b)((function(e){return{data:e}}))((function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.current=Object(J.a)({targets:".svg1 path",d:"m-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z",easing:"easeInOutSine",duration:4e3,delay:function(e,t){return 50*t},loop:!0,direction:"alternate"}),t.current=J.a.timeline({targets:".svg12 path",fill:["rgba(0,0,200,0)","#ff3d00"],easing:"easeInOutSine",duration:2e3}).add({targets:".svg12 path",strokeDashoffset:[J.a.setDashoffset,0],easing:"easeInOutSine",duration:2e3,delay:function(e,t){return 250*t},direction:"alternate"}),a.current=Object(J.a)({targets:".path",strokeDashoffset:[J.a.setDashoffset,0],fill:["rgba(0,0,0,0)","#fff"],easing:"easeInOutSine",duration:62e3,delay:function(e,t){return 250*t},direction:"linear",loop:!0,complete:function(){console.log("show the rest of the webpage")}})}),[]),r.a.createElement(L.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(B.a,{className:"p-2",span:24},r.a.createElement("div",{className:"card-2",style:{position:"relative",overflow:"hidden"}},r.a.createElement("svg",{className:"svg1",width:"100%",style:{position:"absolute",transform:"rotate(180deg)"},viewBox:"10 100 400 200",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{id:"svg_4",stroke:"rgba(136, 225, 252, 0.35)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(136, 225, 252, 0.1)"}))),r.a.createElement("svg",{className:"svg1",width:"100%",style:{position:"absolute",transform:"rotate(180deg)"},viewBox:"110 100 300 200",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{id:"svg_4",stroke:"rgba(136, 225, 252, 0.35)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(136, 225, 252, 0.1)"}))),r.a.createElement("svg",{className:"svg1",width:"100%",style:{position:"absolute",transform:"rotate(180deg)"},viewBox:"1 120 300 200",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null," ",r.a.createElement("path",{d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",stroke:"rgba(136, 225, 252, 0.35)",fill:"rgba(136, 225, 252, 0.1)"}))),r.a.createElement("div",{className:"p-2"},r.a.createElement(Q,null))),r.a.createElement("div",{className:"my-3 card-2",style:{position:"relative",overflow:"hidden"}},r.a.createElement("svg",{className:"svg1",style:{position:"absolute",transform:"rotate(360deg)"},viewBox:"100 150 300 250",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{id:"svg_4",stroke:"rgba(252, 136, 136, 0.05)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(252, 136, 136, 0.1)"}))),r.a.createElement("svg",{className:"svg1",style:{position:"absolute",transform:"rotate(360deg)"},viewBox:"1 150 300 250",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{id:"svg_4",stroke:"rgba(252, 136, 136, 0.1)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(252, 136, 136, 0.1)"}))),r.a.createElement("svg",{className:"svg1",style:{position:"absolute",transform:"rotate(360deg)"},viewBox:"60 150 500 150",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{stroke:"rgba(252, 136, 136, 0.15)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(252, 136, 136, 0.1)"}))),r.a.createElement("svg",{className:"svg1",style:{position:"absolute",transform:"rotate(360deg)"},viewBox:"110 190 500 350",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{stroke:"rgba(252, 136, 136, 0.15)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(252, 136, 136, 0.1)"}))),r.a.createElement("div",{className:"p-3",style:{position:"relative",zIndex:"100"}},r.a.createElement(G.a,null,r.a.createElement($,null),r.a.createElement(ee,null),r.a.createElement(ae,null),r.a.createElement(re,null),r.a.createElement(me,null),r.a.createElement(ie,null),r.a.createElement(ce,null),r.a.createElement(de,null))),r.a.createElement("div",{style:{position:"relative",zIndex:"10"}},r.a.createElement("svg",{className:"svg1",width:"100%",style:{bottom:"0",position:"absolute",transform:"rotate(180deg)"},viewBox:"10 110 310 200",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null," ",r.a.createElement("path",{d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",stroke:"rgba(136, 225, 252, 0.35)",fill:"rgba(136, 225, 252, 0.1)"}))),r.a.createElement("svg",{className:"svg1",width:"100%",style:{bottom:"0",position:"absolute",transform:"rotate(180deg)"},viewBox:"20 120 320 200",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null," ",r.a.createElement("path",{d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",stroke:"rgba(136, 225, 252, 0.35)",fill:"rgba(136, 225, 252, 0.1)"}))),r.a.createElement("svg",{className:"svg1",width:"100%",style:{bottom:"0",position:"absolute",transform:"rotate(180deg)"},viewBox:"30 130 330 200",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null," ",r.a.createElement("path",{d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",stroke:"rgba(136, 225, 252, 0.35)",fill:"rgba(136, 225, 252, 0.1)"}))),r.a.createElement("svg",{className:"svg1",width:"100%",style:{bottom:"0",position:"absolute",transform:"rotate(180deg)"},viewBox:"40 140 340 200",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null," ",r.a.createElement("path",{d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",stroke:"rgba(136, 225, 252, 0.35)",fill:"rgba(136, 225, 252, 0.1)"}))))),r.a.createElement("div",{className:"card-2",style:{position:"relative",overflow:"hidden"}},r.a.createElement("svg",{className:"svg1",style:{bottom:0,position:"absolute",transform:"rotate(180deg)"},viewBox:"101 40 500 250",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{id:"svg_4",stroke:"rgba(81, 137, 251, 0.05)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(81, 137, 251, 0.1)"}))),r.a.createElement("svg",{className:"svg1",style:{bottom:0,position:"absolute",transform:"rotate(180deg)"},viewBox:"20 30 500 300",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{stroke:"rgba(81, 137, 251, 0.1)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(81, 137, 251, 0.1)"}))),r.a.createElement("svg",{className:"svg1",style:{bottom:0,position:"absolute",transform:"rotate(180deg)"},viewBox:"50 130 400 300",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{stroke:"rgba(81, 137, 251, 0.15)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(81, 137, 251, 0.1)"}))),r.a.createElement("svg",{className:"svg1",style:{bottom:0,position:"absolute",transform:"rotate(180deg)"},viewBox:"110 190 500 350",preserveAspectRatio:"xMidYMid meet"},r.a.createElement("g",null,r.a.createElement("path",{id:"svg_4",stroke:"rgba(81, 137, 251, 0.05)",d:"m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z",fill:"rgba(81, 137, 251, 0.1)"}))),r.a.createElement("div",{className:"p-3"},r.a.createElement(ge,null)))))}));P.a.Header,P.a.Footer,P.a.Sider,P.a.Content;var he=Object(o.b)((function(e){return{data:e}}))((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{style:{height:"100vh"}},r.a.createElement(B.a,{style:{height:"100%",overflow:"hidden"},className:"card-4 bodyNiceBlack2",xs:22,sm:22,md:8,lg:8},r.a.createElement(W,null)),r.a.createElement(B.a,{style:{height:"100%",overflow:"auto",backgroundColor:"#"},className:"bodyNiceWhite",xs:22,sm:22,md:16,lg:16},r.a.createElement(be,null))))})),ve=function(e){return r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:he}),r.a.createElement(s.b,{path:"/test",exact:!0,component:F}),r.a.createElement(s.a,{from:"*",to:"/"})))};c.a.render(r.a.createElement(o.a,{store:A}," ",r.a.createElement(ve,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[191,1,2]]]);
//# sourceMappingURL=main.c8dbe40d.chunk.js.map