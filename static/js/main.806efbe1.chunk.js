(this.webpackJsonpmyportfolio03=this.webpackJsonpmyportfolio03||[]).push([[0],{35:function(A,e,t){},49:function(A,e,t){"use strict";t.r(e);var a=t(0),c=t(1),i=t.n(c),n=t(14),o=t.n(n),s=(t(35),t(4)),l=t(11),d=t(2),r=function(A){return Object(a.jsxs)("div",{className:"top-div",children:[Object(a.jsx)("button",{onClick:function(e){A.aboutMe(e)},className:"button",children:"About Me"}),Object(a.jsx)("button",{onClick:function(e){A.myCv(e)},className:"button",children:"My CV"}),Object(a.jsx)("button",{onClick:function(e){A.contactMe(e)},className:"button",children:"Contact Me"})]})},h=t.p+"static/media/window.00906329.png",g=function(){return Object(a.jsx)("div",{className:"img-div",children:Object(a.jsx)("img",{className:"window-image",alt:"window",src:h})})},m=t(8),j=function(){return Object(a.jsxs)("div",{className:"right-div",children:[Object(a.jsx)("h2",{className:"mywork-label",children:"My Work:"}),Object(a.jsx)(m.Link,{activeClass:"active",to:"div2",spy:!0,smooth:!0,offset:0,duration:700,children:Object(a.jsx)("button",{className:"button",children:"API Calls"})}),Object(a.jsx)(m.Link,{activeClass:"active",to:"div3",spy:!0,smooth:!0,offset:0,duration:700,children:Object(a.jsx)("button",{className:"button",children:"E-shop template"})}),Object(a.jsx)(m.Link,{activeClass:"active",to:"div4",spy:!0,smooth:!0,offset:0,duration:700,children:Object(a.jsx)("button",{className:"button",children:"Tic-Tac-Toe"})})]})},b=t.p+"static/media/CVen.7ec6f22a.pdf",p=t.p+"static/media/CVsk.baa37468.pdf",k=t(28),u=t.n(k),S=function(A){var e=Object(c.useState)(1),t=Object(s.a)(e,2),i=t[0],n=t[1],o=Object(c.useState)("none"),d=Object(s.a)(o,2),r=d[0],h=d[1];return Object(a.jsx)("div",{className:"myname-main-div",children:Object(a.jsxs)("div",{className:"content-div",style:{display:A.display},children:[Object(a.jsx)("h1",{style:{marginTop:A.margin},className:"heading1",children:A.name}),Object(a.jsx)("h2",{className:"heading2",children:A.defaultText}),Object(a.jsx)("h2",{className:"heading2",children:A.heading}),Object(a.jsx)("h3",{className:"heading3",children:A.text}),Object(a.jsx)("h3",{className:"heading3",children:A.text2}),Object(a.jsx)("h3",{className:"heading3",children:A.text3}),Object(a.jsx)("h3",{className:"heading3",children:A.text4}),Object(a.jsx)(l.b,{style:{display:A.downloadDisplay,marginBottom:"5vh"},to:b,target:"_blank",download:!0,children:Object(a.jsx)("button",{className:"button",children:"Download (EN)"})}),Object(a.jsx)(l.b,{style:{display:A.downloadDisplay},to:p,target:"_blank",download:!0,children:Object(a.jsx)("button",{className:"button",children:"Stiahnut (SK)"})}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(0),h("flex"),u.a.sendForm("service_xhpiebu","template_n2xgap7",e.target,"user_3mYfrOcpDiD2jB1VinkuJ").then((function(e){n("1"),h("none"),A.emailSent()}),(function(e){n("1"),h("none"),A.emailError()})),e.target.reset()},className:"contact-form",style:{display:A.formDisplay,opacity:i},children:[Object(a.jsx)("input",{className:"contact-input",type:"textbox",name:"name",placeholder:"Name/Company"}),Object(a.jsx)("input",{className:"contact-input",type:"textbox",name:"email",placeholder:"Email"}),Object(a.jsx)("input",{className:"contact-input",type:"textbox",name:"subject",placeholder:"Subject"}),Object(a.jsx)("textarea",{className:"contact-textarea",name:"text",placeholder:"Text"}),Object(a.jsx)("button",{className:"button",children:"Send"})]}),Object(a.jsx)("div",{className:"sending-div",style:{display:r},children:Object(a.jsx)("p",{children:"Sending..."})})]})})},E=t.p+"static/media/apicloud.82dc48fa.png",I=t.p+"static/media/api.bfa0f224.png",C=function(){return Object(a.jsx)("div",{className:"project1-main-div",children:Object(a.jsxs)("div",{className:"border-div",children:[Object(a.jsx)("h1",{className:"project1-heading",children:"API Calls"}),Object(a.jsx)("p",{className:"project1-text",children:"When I started to learn web development I had no idea what API calls are, but after diving deeper I found out how powerful they can be and decided it will probably be a good idea to include one in my portfolio. So I started to look around for some nice API to use and I stumbled upon this Fortnite one with good looking pictures and not too much data to handle. Well, yeah.. Fortnite.. Don't play Fortnite? Me neither, but this is about ReactJS and API calls so I went ahead and used it. Feel free to click the button below and check out the webpage fully created with data from fetching API."}),Object(a.jsx)("p",{className:"project1-label",children:"Check out my API Project"}),Object(a.jsx)("a",{href:"https://simonugor.github.io/FortniteApiCall/",children:Object(a.jsx)("button",{className:"button",children:"Click Me!"})}),Object(a.jsx)("p",{className:"project1-or",children:"or"}),Object(a.jsx)(m.Link,{activeClass:"active",to:"div1",spy:!0,smooth:!0,offset:0,duration:700,children:Object(a.jsx)("button",{className:"button",children:"Back to the Top"})}),Object(a.jsx)("img",{alt:"cloud",src:E,className:"cloud-img"}),Object(a.jsx)("img",{alt:"api",src:I,className:"api-img"})]})})},w=t.p+"static/media/shirt.e507cb0c.png",O=function(){return Object(a.jsx)("div",{className:"project1-main-div",children:Object(a.jsxs)("div",{className:"border-div",children:[Object(a.jsx)("h1",{className:"project1-heading",children:"E-Shop Template"}),Object(a.jsx)("p",{className:"project1-text",children:"Sometimes it can get difficult and time consuming to look online for a company that needs an e-shop built. So I decided not to wait, rather build an universal e-shop template basically for any product and company. Please note this is only front-end version of e-shop, so some features are not implemented. I am currently working on my full-stack (MERN) skills to implement a log in option as well as learning what are the checkout possibilities. If you are interested in viewing my e-shop temlpate, simply click the button below."}),Object(a.jsx)("p",{className:"project1-label",children:"Check out my E-Shop Project"}),Object(a.jsx)("a",{href:"https://simonugor.github.io/eshoptemplate/",children:Object(a.jsx)("button",{className:"button",children:"Click Me!"})}),Object(a.jsx)("p",{className:"project1-or",children:"or"}),Object(a.jsx)(m.Link,{activeClass:"active",to:"div1",spy:!0,smooth:!0,offset:0,duration:700,children:Object(a.jsx)("button",{className:"button",children:"Back to the Top"})}),Object(a.jsx)("img",{alt:"cart",src:"data:image/png;base64,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",className:"cart-img"}),Object(a.jsx)("img",{alt:"shirt",src:w,className:"shirt-img"})]})})},D=t.p+"static/media/tictactoe.1269a82a.png",x=function(){return Object(a.jsx)("div",{className:"project1-main-div",children:Object(a.jsxs)("div",{className:"border-div",children:[Object(a.jsx)("h1",{className:"project1-heading",children:"Tic-Tac-Toe"}),Object(a.jsx)("p",{className:"project1-text",children:"Good old Tic-Tac-Toe. I did this well-known game in Vanilla Javascript multiple times but ReactJS opened so many new possibilities that I really wanted to create a smoother version. And that is exactly what I did. In near future I'm also planning to dive deeper in some Tic-Tac-Toe AI so the CPU is not that easy to beat. But for now it is pretty simple to win so go ahead and click the button below to have some fun while testing my version of Tic-Tac-Toe."}),Object(a.jsx)("p",{className:"project1-label",children:"Check out my Tic-Tac-Toe"}),Object(a.jsx)("a",{href:"https://simonugor.github.io/tictactoe/",children:Object(a.jsx)("button",{className:"button",children:"Click Me!"})}),Object(a.jsx)("p",{className:"project1-or",children:"or"}),Object(a.jsx)(m.Link,{activeClass:"active",to:"div1",spy:!0,smooth:!0,offset:0,duration:700,children:Object(a.jsx)("button",{className:"button",children:"Back to the Top"})}),Object(a.jsx)("img",{alt:"tictactoe",src:D,className:"tictactoe-img"}),Object(a.jsx)("img",{alt:"xo",src:"data:image/png;base64,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",className:"xo-img"})]})})};var B=function(){var A=Object(c.useState)("\u0160imon Ugor"),e=Object(s.a)(A,2),t=e[0],i=e[1],n=Object(c.useState)("Front-end engineer and MERN stack developer"),o=Object(s.a)(n,2),h=o[0],m=o[1],b=Object(c.useState)(""),p=Object(s.a)(b,2),k=p[0],u=p[1],E=Object(c.useState)(""),I=Object(s.a)(E,2),w=I[0],D=(I[1],Object(c.useState)("")),B=Object(s.a)(D,2),y=B[0],f=B[1],Q=Object(c.useState)(""),J=Object(s.a)(Q,2),M=J[0],v=J[1],N=Object(c.useState)(""),P=Object(s.a)(N,2),R=P[0],T=P[1],L=Object(c.useState)(""),H=Object(s.a)(L,2),U=H[0],G=H[1],Y=Object(c.useState)("none"),V=Object(s.a)(Y,2),F=V[0],Z=V[1],W=Object(c.useState)("none"),X=Object(s.a)(W,2),K=X[0],z=X[1],q=Object(c.useState)("6vh"),_=Object(s.a)(q,2),$=_[0],AA=_[1];return Object(a.jsx)(l.a,{children:Object(a.jsx)(d.b,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"div1",children:[Object(a.jsx)(r,{aboutMe:function(A){A.preventDefault(),i(""),m(""),u("About Me"),f("My name is \u0160imon Ugor and I am currently studying Informatics in Krems and der Donau, Austria. Since the beginning of Covid19 I study from home, Slovakia, meaning I have a lot more time for self-studies. I decided to focus on Web Development simply because that was what I enjoyed the most. Started with the basics of HTML, CSS and Javascript, ended up diving into ReactJS framework and really enjoying it."),T("I am currently looking for a real-world working experience and trying my best to find a job in this field. You can find more information about me in my CV which you can download in My CV section. I created this website fully from scratch using ReactJS and some more really interesting technologies. If you are interested in looking into the code of my portfolio or any other app included, feel free to contact me and I will provide anything you need."),Z("none"),z("none"),AA("0vh")},myCv:function(A){A.preventDefault(),i(""),m(""),u("Download my CV:"),f(""),v(""),T(""),G(""),Z("block"),z("none"),AA("0vh")},contactMe:function(A){A.preventDefault(),i(""),m(""),u("Send me an E-mail:"),f(""),v(""),T(""),G(""),Z("none"),z("flex"),AA("0vh")}}),Object(a.jsx)(g,{}),Object(a.jsx)(j,{}),Object(a.jsx)(S,{name:t,defaultText:h,heading:k,display:w,text:y,text2:M,text3:R,text4:U,downloadDisplay:F,formDisplay:K,emailSent:function(){i(""),m(""),u("Thank you for reaching out! I will get back to your email as soon as possible."),f(""),v(""),T(""),G(""),Z("none"),z("none")},emailError:function(){i(""),m(""),u("An error has occurred, please try again later."),f(""),v(""),T(""),G(""),Z("none"),z("none")},margin:$})]}),Object(a.jsx)("div",{className:"div2",children:Object(a.jsx)(C,{})}),Object(a.jsx)("div",{className:"div3",children:Object(a.jsx)(O,{})}),Object(a.jsx)("div",{className:"div4",children:Object(a.jsx)(x,{})})]})})})},y=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,n=e.getTTFB;t(A),a(A),c(A),i(A),n(A)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.806efbe1.chunk.js.map