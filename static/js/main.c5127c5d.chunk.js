(this["webpackJsonpmelody-home"]=this["webpackJsonpmelody-home"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var o,i,a,r,c,l,s,d,b,p,x,h,f,m,j,u,g,O,w,v,y,k,A,F,z,S,R,C,B,E,D,N,U,H,M,G,T,L,P,X,q,Y,W,J,I,Q,V,Z,K,$,_,nn,en,tn,on,an,rn=t(3),cn=t.n(rn),ln=t(10),sn=t.n(ln),dn=t(1),bn=t(2),pn=Object(bn.a)(o||(o=Object(dn.a)(["\n    @font-face {\n        font-family: \"Bebas Neue\";\n        src: local(\"BebasNeueRegular\"), url(\"../fonts/BebasNeueRegular.woff2\") format(\"woff2\"),\n            url(\"../fonts/BebasNeueRegular.woff\") format(\"woff\");\n        font-weight: normal;\n        font-style: normal;\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: 'Roboto';\n        src: local('Roboto'), local('Roboto-Regular'), url('../fonts/Roboto.woff2') format('woff2'),\n            url('../fonts/Roboto.woff') format('woff'), url('../fonts/Roboto.ttf') format('truetype');\n        font-weight: 400;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'Roboto';\n        src: local('Roboto Bold'), local('Roboto-Bold'), url('../fonts/Robotobold.woff2') format('woff2'),\n            url('../fonts/Robotobold.woff') format('woff'), url('../fonts/Robotobold.ttf') format('truetype');\n        font-weight: 700;\n        font-style: normal;\n    }\n\n    :root {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n\n    }\n\n    * {\n        padding: 0;\n        margin: 0;\n        border: 0;\n    }\n\n    *, *::before, *::after {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    :focus, :active {\n        outline: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        -webkit-tap-highlight-color: transparent;\n        -moz-tap-highlight-color: transparent;\n    }\n\n    a:focus, a:active {\n        outline: none;\n    }\n\n    nav, footer, header, aside {\n        display: block;\n    }\n\n    html, body {\n        height: 100%;\n        width: 100%;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n        line-height: 1;\n        font-size: 16px;\n        font-family: \"Bebas Neue\", Arial, sans-serif;\n        font-weight: 400;\n        color: black;\n        -ms-text-size-adjust: 100%;\n        -moz-text-size-adjust: 100%;\n        -webkit-text-size-adjust: 100%;\n\n    }\n    #root {\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n\n    input, button, textarea, optgroup, select {\n        font: inherit;\n        cursor: pointer;\n        margin: 0;\n        padding: 0;\n    }\n\n    input:-ms-clear {\n        display: none;\n    }\n\n    button::-moz-focus-inner {\n        padding: 0;\n        border: 0;\n    }\n\n    a, a:visited {\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    a:hover {\n        text-decoration: none;\n    }\n\n    ul li {\n        list-style: none;\n    }\n\n    img {\n        vertical-align: top;\n        max-width: 100%;\n        height: auto;\n    }\n\n    h1, h2, h3, h4, h5, h6, p, ul, ol, figure, figcaption {\n        font-size: inherit;\n        font-weight: inherit;\n        padding: 0;\n        margin: 0;\n    }\n\n    body {\n        overflow-y: auto;\n    }\n\n    .show-floor>path, .show-apts>path {\n        opacity: 0;\n        cursor: pointer;\n    }\n    .show-floor>path:hover, .show-apts>path:hover {\n        opacity: 1;\n    }\n    path.active-path {\n        opacity: 1;\n    }\n    .logo-img:hover {\n        fill: #3595F6;\n    }\n    div.is-open {\n        opacity: 1;\n        transform: scale(1);\n    }\n    a.active-link {\n        color: #3596F5;\n        text-decoration: underline;\n    }\n"]))),xn=cn.a.createContext(),hn=bn.b.div(i||(i=Object(dn.a)(["\n    /* width: 1280px; */\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 10px;\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    align-items: center;\n"]))),fn=t.p+"static/media/icons.cff901d6.svg",mn=t(0),jn=function(n){var e=n.name,t=n.fill,o=n.stroke,i=n.width,a=n.height,r=n.className,c=void 0===r?"":r;return Object(mn.jsx)("svg",{className:"icon icon-".concat(e," ").concat(c),fill:t,stroke:o,width:i,height:a,children:Object(mn.jsx)("use",{xlinkHref:"".concat(fn,"#").concat(e)})})},un=(t.p,bn.b.svg(a||(a=Object(dn.a)(["\n    width: 100%;\n    height: 100%;\n\n"]))),bn.b.a(r||(r=Object(dn.a)(["\n    grid-column: 1/span 2;\n    align-self: center;\n    width: 120px;\n    height: 33px;\n    background-color: transparent;\n\n    @media (max-width: 768px) {\n        grid-column: 1/span 4;\n        grid-row: 1;\n    }\n"])))),gn=Object(bn.b)(jn)(c||(c=Object(dn.a)(["\n    width: 100%;\n    height: 100%;\n    :hover {\n        fill: #3595F6;\n    }\n"]))),On=function(){return Object(mn.jsx)(un,{children:Object(mn.jsx)(gn,{name:"logo",fill:"#fff"})})},wn=bn.b.li(l||(l=Object(dn.a)(["\ntext-align: center;\n"]))),vn=bn.b.a(s||(s=Object(dn.a)(["\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n"]))),yn=Object(bn.b)(vn)(d||(d=Object(dn.a)(["\nfont-size: 16px;\nline-height: 19px;\n\n:hover {\n    color: #3595F6;\n}\n@media (max-width: 768px) {\n    font-size: 14px;\n    line-height: 16px;\n}\n"]))),kn=bn.b.ul(b||(b=Object(dn.a)(["\n    grid-column: 3/span 8;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    justify-content: space-evenly;\n    padding: 0 10px;\n    @media (max-width: 768px) {\n        grid-column: 1/span 12;\n        grid-row: 2;\n        justify-content: space-between;\n        padding: 0;\n    }\n"]))),An=Object(bn.b)(vn)(p||(p=Object(dn.a)(["\n    font-size: 16px;\n    line-height: 19px;\n    color: #FFFFFF;\n    :hover {\n        color: #3595F6;\n    }\n    @media (max-width: 768px) {\n        font-size: 14px;\n        line-height: 16px;\n    }\n"]))),Fn=function(n){return Object(mn.jsx)(wn,{children:Object(mn.jsxs)(An,{href:n.link,children:[n.name1,Object(mn.jsx)("br",{}),n.name2]})})},zn=function(){return Object(mn.jsxs)(kn,{children:[Object(mn.jsx)(Fn,{link:"#",name1:"\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c",name2:"\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0443"}),Object(mn.jsx)(Fn,{link:"#",name1:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c",name2:"\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0443"}),Object(mn.jsx)(Fn,{link:"#",name1:"\u0425\u043e\u0434",name2:"\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430"}),Object(mn.jsx)(Fn,{link:"#",name1:"\u041f\u0440\u043e\u0435\u043a\u0442\u043d\u0430\u044f",name2:"\u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f"})]})},Sn=bn.b.div(x||(x=Object(dn.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n    min-width: 145px;\n\n    @media (max-width: 768px) {\n        flex-direction: row;\n        justify-content: flex-end;\n        align-items: center;\n    }\n"]))),Rn=bn.b.div(h||(h=Object(dn.a)(["\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 16px;\n    color: inherit;\n    text-align: center;\n    margin-bottom: 4px;\n    width: fit-content;\n\n    @media (max-width: 768px) {\n        margin-bottom: 0;\n    }\n\n    @media (max-width: 480px) {\n        display: none;\n    }\n"]))),Cn=Object(bn.b)(vn)(f||(f=Object(dn.a)(["\n    font-weight: 700;\n    font-size: 17px;\n    line-height: 20px;\n    :hover {\n        color: #3595F6 !important;\n    }\n    @media (max-width: 768px) {\n        margin-left: 10px;\n    }\n"]))),Bn=function(n){var e=n.color,t=n.pos;return Object(mn.jsxs)(Sn,{style:{alignItems:"".concat(t)},children:[Object(mn.jsx)(Rn,{style:{color:"".concat(e)},children:"\u0417\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u0437\u0432\u043e\u043d\u043e\u043a:"}),Object(mn.jsx)(Cn,{href:"tel: +784312345-67",style:{color:"".concat(e)},children:"8 (843) 123-45-67"})]})},En=bn.b.header(m||(m=Object(dn.a)(["\n    background-color: #635854;\n    padding: 12px 0;\n    border-bottom: 4px solid #3596F5;\n    @media (max-width: 768px) {\n        padding: 6px 0;\n    }\n"]))),Dn=Object(bn.b)(hn)(j||(j=Object(dn.a)(["\n    @media (max-width: 768px) {\n        grid-template-rows: repeat(2, 1fr);\n        row-gap: 6px\n    }\n"]))),Nn=bn.b.div(u||(u=Object(dn.a)(["\n    grid-column: 11/span 2;\n    justify-self: end;\n    @media (max-width: 768px) {\n        grid-column: 5/span 8;\n        grid-row: 1;\n    }\n"]))),Un=function(){return Object(mn.jsx)(En,{children:Object(mn.jsxs)(Dn,{children:[Object(mn.jsx)(On,{}),Object(mn.jsx)(zn,{}),Object(mn.jsx)(Nn,{children:Object(mn.jsx)(Bn,{color:"#fff",pos:"flex-end"})})]})})},Hn=t.p+"static/media/home.7fdb2dd8.png",Mn=bn.b.div(g||(g=Object(dn.a)(["\n    height: auto;\n    background-size: contain;\n    background-repeat: no-repeat;\n"]))),Gn=bn.b.svg(O||(O=Object(dn.a)(["\n    width: 100%;\n    height: 100%;\n    fill: none;\n"]))),Tn=bn.b.path(w||(w=Object(dn.a)(["\n    fill: #3595F6;\n    fill-opacity: 0.75;\n"]))),Ln=function(n){var e=n.coord,t=n.elem,o=n.handleField,i=n.showResult,a=n.active;return Object(mn.jsx)(Tn,{d:e,"data-elem":t,className:a&&"active-path",onPointerOver:function(n){return o(n.target.dataset.elem)},onClick:function(){return i(t)}})},Pn=function(n){var e=n.viewBox,t=n.className,o=n.elemCoords,i=n.handleField,a=n.showResult;return Object(mn.jsx)(Gn,{viewBox:e,className:t,xmlns:"http://www.w3.org/2000/svg",children:null===o||void 0===o?void 0:o.map((function(n){return Object(mn.jsx)(Ln,{coord:n.d,elem:n.id,handleField:i,showResult:a,active:n.active},n.id)}))})},Xn=bn.b.div(v||(v=Object(dn.a)(["\n    grid-column: 1/span 7;\n    @media (max-width: 768px) {\n        grid-column: 1/span 12;\n    }\n"]))),qn=Object(bn.b)(Mn)(y||(y=Object(dn.a)(["\n    max-width: 740px;\n    background-image: url(",");\n"])),Hn),Yn=function(n){var e=n.showResult,t=n.handleFloorSelect,o=Object(rn.useContext)(xn).coordsHome.floorCoords;return Object(mn.jsx)(Xn,{children:Object(mn.jsx)(qn,{children:Object(mn.jsx)(Pn,{viewBox:"0 0 734 640",className:"show-floor",elemCoords:o,handleField:t,showResult:e})})})},Wn=bn.b.div(k||(k=Object(dn.a)(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    @media (max-width: 768px) {\n        -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    }\n"]))),Jn=bn.b.button(A||(A=Object(dn.a)(["\n    background-color: transparent;\n    outline: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n"]))),In=Object(bn.b)(Jn)(F||(F=Object(dn.a)(["\n    -webkit-transform: rotateX(180deg);\n        transform: rotateX(180deg);\n"]))),Qn=bn.b.span(z||(z=Object(dn.a)(['\n    font-size: 95px;\n    font-family: "Bebas Neue", sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    text-transform: uppercase;\n    color: #635854;\n    margin-top: 25px;\n    margin-bottom: 25px;\n    padding: 10px 10px;\n    @media (max-width: 768px) {\n        margin: 0 15px;\n        font-size: 70px;\n    }\n']))),Vn=function(n){var e=n.handleFloor,t=Object(rn.useContext)(xn).selectFloor.selectedFloor,o=function(n){return n>=2&&n<=18&&e(n.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}))};return Object(mn.jsxs)(Wn,{children:[Object(mn.jsx)(Jn,{onClick:function(){return o(+t+1)},children:Object(mn.jsx)(jn,{name:"arrow-up",width:32,height:19})}),Object(mn.jsx)(Qn,{children:t}),Object(mn.jsx)(In,{onClick:function(){return o(+t-1)},children:Object(mn.jsx)(jn,{name:"arrow-up",width:32,height:19})})]})},Zn=bn.b.button(S||(S=Object(dn.a)(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    padding: 16px 36px;\n    background-color: #3596F5;\n    border-radius: 6px;\n    font-size: 16px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    color: #FFF;\n    line-height: 19px;\n    text-align: center;\n    box-sizing: border-box;\n    :hover {\n        background-color: #635854;\n        color:  #3596F5;\n        box-sizing: border-box;\n    }\n"]))),Kn=bn.b.h2(R||(R=Object(dn.a)(['\nfont-family: "Bebas Neue", sans-serif;\nfont-style: normal;\nfont-weight: normal;\ntext-transform: uppercase;\n']))),$n=bn.b.div(C||(C=Object(dn.a)(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n"]))),_n=Object(bn.b)($n)(B||(B=Object(dn.a)(["\n    grid-column: 8/span 5;\n    text-align: center;\n    height: 100%;\n    padding-bottom: 5px;\n    @media (max-width: 768px) {\n        padding: 20px 0;\n        grid-column: 1/span 12;\n    }\n"]))),ne=Object(bn.b)(Kn)(E||(E=Object(dn.a)(["\n    font-size: 37px;\n    color: #635854;\n    line-height: 43px;\n    @media (max-width: 768px) {\n        font-size: 30px;\n        line-height: 34px;\n    }\n"]))),ee=function(n){var e=n.showResult,t=n.handleFloorSelect;return Object(mn.jsxs)(_n,{children:[Object(mn.jsx)(ne,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u044d\u0442\u0430\u0436"}),Object(mn.jsx)(Vn,{handleFloor:t}),Object(mn.jsx)(Zn,{onClick:e,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b \u043d\u0430 \u044d\u0442\u0430\u0436\u0435"})]})},te=function(n,e){return e.map((function(n){return n.active&&(n.active=!n.active),n})).map((function(e){return e.id===n&&(e.active=!e.active),e}))},oe=bn.b.div(D||(D=Object(dn.a)(["\n"]))),ie=Object(bn.b)(hn)(N||(N=Object(dn.a)(["\n    padding-top: 50px;\n    padding-bottom: 100px;\n    flex-grow: 1;\n    @media (max-width: 768px) {\n        padding-top: 37px;\n        padding-bottom: 75px;\n    }\n    @media (max-width: 576px) {\n        padding-top: 25px;\n        padding-bottom: 50px;\n    }\n"]))),ae=function(){var n=Object(rn.useContext)(xn),e=n.selectFloor,t=e.selectedFloor,o=e.setSelectedFloor,i=n.modalOpen.setOpenModal,a=n.coordsHome,r=a.floorCoords,c=a.setFloorCoords,l=a.handleApts,s=function(n){o(n),c(te(n,r))},d=function(){l(t),i("is-open")};return Object(mn.jsx)(oe,{children:Object(mn.jsxs)(ie,{children:[Object(mn.jsx)(Yn,{showResult:d,handleFloorSelect:s}),Object(mn.jsx)(ee,{showResult:d,handleFloorSelect:s})]})})},re=bn.b.ul(U||(U=Object(dn.a)(["\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 10px;\n    @media (max-width: 768px) {\n        width: 100%;\n        justify-content: space-evenly;\n        padding: 0;\n    }\n"]))),ce=Object(bn.b)(yn)(H||(H=Object(dn.a)(["\n    color: #635854;\n    text-decoration: underline;\n    margin-left: 20px;\n    text-align: center;\n    @media (max-width: 768px) {\n        margin-left: 0;\n    }\n"]))),le=function(n){return Object(mn.jsx)(wn,{children:Object(mn.jsx)(ce,{href:n.link,children:n.name})})},se=function(){return Object(mn.jsxs)(re,{children:[Object(mn.jsx)(le,{link:"#",name:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),Object(mn.jsx)(le,{link:"#",name:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"}),Object(mn.jsx)(le,{link:"#",name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})},de=bn.b.ul(M||(M=Object(dn.a)(["\n    width: 125px;\n    margin-left: clamp(5px, 5%, 60px);\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    justify-content: space-between;\n    @media (max-width: 576px) {\n        margin-left: 5px;\n    }\n"]))),be=Object(bn.b)(vn)(G||(G=Object(dn.a)(["\n    width: 20px;\n    height: 20px;\n    display: flex;\n    align-items: center;\n    background-position-y: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n"]))),pe=Object(bn.b)(jn)(T||(T=Object(dn.a)(["\n    width: 100%;\n    height: 100%;\n    :hover {\n        fill: #3595F6;\n    }\n"]))),xe=function(){return Object(mn.jsx)(de,{children:["facebook","instagram","twitter","youtube"].map((function(n){return Object(mn.jsx)(be,{href:"#",children:Object(mn.jsx)(pe,{name:n,fill:"#635854"})},n)}))})},he=bn.b.footer(L||(L=Object(dn.a)(["\n    background-color: #D7D7D7;\n    padding: 50px 0;\n    height: 170px;\n    border-top: 4px solid #3596F5;\n\n    @media (max-width: 768px) {\n        padding: 20px 0;\n    }\n"]))),fe=bn.b.div(P||(P=Object(dn.a)(["\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    line-height: 16px;\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),me=bn.b.div(X||(X=Object(dn.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 768px) {\n        width: 100%;\n        justify-content: space-between;\n        margin-bottom: 20px;\n    }\n"]))),je=bn.b.a(q||(q=Object(dn.a)(["\n    width: 80px;\n    height: 65px;\n    background-color: transparent;\n    background-image: url(",");\n    margin-right: clamp(10px, 3%, 37px);\n    background-size: cover;\n    @media (max-width: 576px) {\n        margin-right: 5px;\n    }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABC3SURBVHgB7Vp5eFXVtV9rn3PPzU0ISQAljCLWyqOKVhRRCA2tFSgK9FPU1qGigTCor1J8fBVbeU9f9bX9npbKFJBBiyiDPIEPUVDiY0YQy1iQFgwiIhggCUnuvWfv1d+5Ychwb3JvAqF/8Pu+c4dz9rD22mveh+gSLuESToPpIqJHzqQsy/bfc8q4L23Jyz1MFwkXhQld75yanNTO/iUZM5JEdjOr1kb4qXV5j31AFwEWNTKycmd0tpvSDCVynSh6LFwWyrNtWzPLH9p1HZDWtlfvDV9ueN+lRoSiRoNw1ojp/YXdVfjzFTnWQCXcy0n2r3UVrSUxP4VcDrZOpS6+bfjky6kR0SjqkD14YpNwhv/3iuUu1nqMUv6/uuy+KkS92dsIoRAp86LYoTwO+8eBrPtFqSFrJx9cSjTe0AXGBVeH7jkT/41TnKWiON24fBfb5kphmoNHXfjMJrBHB2eLttoLyQuGeZdF8t/tu6Zd0a5Nj/UH96wM0QXEBZOEwYMHW4cz7hiOn7/BJBOC5cGp/kDSi1jkA7iXTLEp+oaNydXa2qpsMxWC0tEVdf+GvEc/pQuECyIJWU/MuOykc+VcxTTIIuvhILsbHJ/vXTy6E5evju4p4MR9bFORLtPPsc0tLJb/bN91QOktHZM+27Vrl9B5xnmXhJ4507LFkplKaBuF7RxxdD9QPQ0TOZQweKe2aJAi3Y6NmilGNpeTDEdMcYzOI84bE/o9McFfFA6Mg99/lFi95KfwopA4zxOZIdQwhMDEkSpkLTaOnkLMN5LRD63Ny11D5wnnRR26PzK5g+akN/HzNjF0N7E+atheBreYTQ2HhZ3qD+nqUFScnBvwuceEeUaHmweKc+vtmws3vaepgWhgnADfP2xqf9uxN4mY/WViuihFfRRZa+D2rqDzB48R96Wllv5VM+1lI92NMQ+2CiV/3GvIxHbUQNRbHbKHTW3hMv8OQ2RBZ8e5ruxVtu8VMOZHdGFRwsLPWyHrde2Ex0E9BkFdxrUq/GDO/Pnz6yUV9WJCj0cnXUOObwF2u5hD6kHL1tdoxVPwqD01HpYqskdrDndjg81gWmEH7TH5s4acoASREBO+02+C//L2ScMQ7sL3m2nGDU1U/sBTxsiT9bP+DcYhSMGvLE3bjCUThVSqcmnU6tdyNiUySNyG0RP/QJozSZG6Xyt5VFxrnfLZb0Ea7uGLkIgBZSKUwUwDjSInbPtH2MZNxba+2P7Gu6Tg0yUb4x0oDkmA8Rs6rRfC3omw/PvKS0xOUhr3gTSA85RGjQEmL6v8BgzfyyTrDfEqCqud7DO3496f8Dwd39vKw+GfBhS3EMtehAz1k3Bp8LFNrz/+bd3D14IeA/4nlTPTnyWlHgQZvza2u1yJ9Wd0u5su3O57xq2ADH1GLJ9jlzeRpTYHw/oogqTS6o2zhk/vJiKgibrhOgF3N0aJeddVagIkpRspGb128tAloDlmpBmTCb1yp1xtyJ4AzrfUluQyPiAVM/H/WjqfEPmGmXcgp/ibiNqElHoz2+5XayaPPB7vELcOnhdQzU56hvlBLEiQgM12XHkurOhnUJfRTDw5VFL6ysY5TxZF6x+VCb2GTf0FjMwLWtHbsP7/y44ZJsSPs0hzagDAxZMYYzuJWouAagtC4T3BUPDQptmjCuHq4s4JsrPH2yVXXt7ecfwtYaAzWNF9kbhEqCedllAsfp9oGaEs9S0M9zTcKDKih67Ly/179fGqMKHz+HlOxuGiqRCpbEMyyvLRbgnTqxCrfmiZoDuVMjDuH+i2jthsEJd3KWW+gDwfg1iH4xnBy0QPNv9hO1t8nfD3elDwPdByBRbYFv9b4Hchs3kfZis3xhDHWak/umLPVqZ8jGJrkGHzrO9vX72dnz/ercGErBHTuoCTs4zIcejYMNT9OmJz/oIJ6q7ysLjoux+/tqL9/wurjb49Bz+rPFFt6Np1qs93s2mjXLsjW3wjNuF7UI+bQF0njGvH6gcmH6iDCWcIXBW0gj93wr5epBgqTgsQ3Y4/k4hFJoD+9zJCCxB0vJhU7rweTHZ/C80ahcFjGD/ehWsNQuXdinm7pUIb8yeNKqE6kD1+vF3+VasuPuEuYnEHSEkHMPx6rKYzVMSpEGQhObfK8wTp7dfOdjDgIRb9fWJrYUCpD8mTLjrNBEf4QFDIx7ZaEEoK5WLyJyuNUABa1pORXRCtrdqltetfyymkBNFjWN4C9zD3t5mSxJM/qbTcxql5t8CMc6GOnZNE3sOUPz7zIMKElXm5BSDyELn6AcX6/2Bb/ssjzbbsrvmThnwWbcTsnGltwyzXKYvawsBdAb/cBrt6NRaUJsb0R6pbUKWDUtfAEyTRRQVv2ZJ3+EjP4W0GgpY3ztw9p2+wB7Cy/a2g/xU3yd2A/z3IlMfUaW2pX8Ey/1K8HWU5J7r4tmyVUmN68XYi8jwPvnsJVOFl9P0ONWRJLA6LSpE49caQWZY1os21UP0OsH3vn7l/lgns2KshCc+EUnRL5SIiI+lhlNMaj3ZQojDUCp+7q9+GCB7TZf7fqKTysZCcI7j1pXcfS2iNZzslUnwVH1Zng0Hf4l5H3NuO73IwrRMW67U/iO9sJlUAyTuJqzsG3uC1wbNMXJ1iUBUWSy0GbX0xx562x1d+XoMJtpTtdMnZTyFzB0rj83Aa8gzC5HrVBIyWNtHui7fo1PLWpHk0jNRynUQPcIlpr5QaicV8jp16DosboIhTDbn5qE+iMKvHQt2+hjqNwABNjTIrlOFdYoWWGnGCrCXDYr68lPXiJKXGQeKeoeiT7z55tGlBRrOiwRDduZXT7rNFFc+6Y4CFIOiucMqpfZ7LM2Ku7vbwq8294KTyeN0ent0cz66iGMAut6Q6OSV9ucwMwHyT0WMgRPtUWaj0IFQSxLk4jOEDFe1UERgwMvKb6bvKyH6oX0SCLJFnIQGlmG+mT5nLYzKAIir7RnrTou96Ea9i96PKz6r6YMUrEdH9hzqVchnEDwaSnnYC/hHuNW2Ke3aa9kXENRpvwNDdXEvyxOa0/lcloyk+vlbaSPW0A3POw91jASc5M7Juow7ibLLEQjPlukU4rQqgTxHS5HEovN5QqaeK04+GIWmLlE19vDVkFn64p8qyK/9xA0XbscYCiGRf0DkXw3uHHk1wtcJc3SuKqPIo15E9IgZoGuW2d9bQtqyQD8BF/hqBztZKPYrgfouw+EisAem4X1n6Wuz8Pu3nIObeiUUccP2mDOs+WqnfYgPLCJpsqpUg2nZH68P78f0ztF5dvQJVhQnrXx5dBnFZwYr7l2mzDYuu13E5xsiI8ahFoLl6WmmBUZJyS9RtYGimYXUXDlza+Wy5AyLdFc9usNjqDul42zbIDxTvAaU7lUb+gg1gZX0/Mpqmckvx415UaYnVtxaSlqwoaJcJEe2iwvJW9Yc1OCgaamDJO+TttlLvgBFPUaIwtUiK0DjUJqgiXpJbvVuR34rzqki2UB9kly8LmX/Hw9bY7Rm4+3DkMgak2W+iAj0G9cZyiZzn8eQYM2LXzXLlSH9021KmTA2vVaPa7HNCiP/lWBKrXkgJVoGuuJKdKmDOqG5M6wOObIAgM5SOYMoLlZ9hs95GpttMFLLS2kfZkVwW2AFGIs3mT6MlbzWY4HkJcHapgv7bQf8KMLkeKgGbcNllZ6PD7JEzM88SX3GYsv20vak/OA4PFGmn55fQKS+gupnDeka0JlHPHWzFi9G7hxsoC+CgYyElDGlenGFHCZFRmYR1D2saCLsRVzEUzPozi3kCi65sEItwb6xmGYKjud/BvfZFuz9E6R7UmldxQA3Axh76tqTZvmhzRBXZEm22QB2Cyvh+BA6uxC0voUqgnCbpqUbVZAKrvUHtIji19sLPYlzuF7nNuosRtQ9m/iTmm4gF4zRbmqDNS/jGiZO6Gc28wumdpwcKWcfDk1bPP5u5FvTImWZA4dNVqGA6SCfSt1JG0VjEJYt2zb83qvRFlQSvloedWop0+icmudh7s6SAEgL7g8I1mSASsiykzBU1gusrmlJfxATYWd2CQu5hYTNVRDeDq24FN7oQ7noTDnny4Akr72KyzrBTqyxEmRrRLVR5mZtyNA2ScgsYPYdiIOYxnDI0A4anDx8LYDL1CSUIZbvpZ36HWPujNGmFKk8mGHLLaZJba1s7WPhxBBrt2eUUMO24YfrS5yvdW61vslstVhGjOlRrExLXXoAS3EBPfW5v9XVMAxqbCb7wNoiTayXbtyKmfxNimtBrM4j308+RY87EDQEVplLyxJQpWLm9KAVXZ6OsiVAJuoxdQMGYnXVTcnbokNOn+vgWq8dvyXmlZddhU5N/MOK1flCFX1Sj4IsjgeJNKMXdAb2YN3587Nd+YjKhIpeA3uKszykMfQjR+jslAFSdohVlr4JBaFJmDMpmvFgZc/bUqtyY6azMEfS7D4WMpaKtJYgSe2ePnNhEkS8rylijHCvlTwFWv9fG4AQ8Unc8CxjO99OC/mZgdhbWUOsxfq2+HLq0GCnthGDToGOR44W5V1OcQFQXLWCyReslIBz1SHMdylxedOil67Phhh5AFj0K/682GsGNLV64nulqHxZgmknNN1yOQTrXY6bno82v2cxPJss7kyi2C0P1Z4IVLPk47KT4fJx6A059/gIC76U4gawtM/oD8hbd+nRNLZJjwPg9AvH3eQw43ajzuQ58fYwZlp1+lhop8jJdeW4KOvmNE9qYGUyeBUa9lT+/9vpnre8n5M966gRC12UITweVifYKk8UUL4TPMkFZnF5HYxhHvpESAHKMIs/6I054BrlFlZNoRIZzWp7i5tiI3jiI+aiusep8SQMq8R4stuefk8GQuF+7hUE6JwnR3GUDgdgBeQTfgvS/MxhxQ+VnsDVz2OeDqnmhot5c11h1MiFUXL4C8uVPZq80XjMDi00ltTwf+UMtEzSFqI+BNDxY7WDoRLhJyVYj9kPYiY9QRD5Z10h1MsE7v0OGB27afa2gvRT6VkpxAO61Sv7QWIAhX9onrSiovBqpNgvi6RPfO0tGvwMrOzh/1pBydFgSTxdsTfqZ/AFMbLS36cH8dz881PrH3nG+0sfXxdMnLib4jrsLIVr+7NwpN+GMMj+ePpCYZo4ykUhRuTq+jK/hOHGiMG0xqsqP4PfytTPGxmXI42JCxMWIfBIW9XPEcfNE6k6DsfXJVtDxU6PCIEnahXNR+YFoejfeXnG/wgeBngfvcK93BIfk6p14+rjkplMjQoy9vOfQ1j+EGDYvDvo/jrdf3EwoFePZghY9PJVgE5ertG1uRo2H4+XsLoI792oH87a98fCpeDvGzQSk1yfhidawWIMcy/9ePAmVURVBklHUGF6i4i145RVsYqfN0ZDQG61G9AxweUD+pEeOILlaXVd7nBRVlN4vQLBUA5pe8yuVBbqaJ5cm10lbZSTGBG0tx1ennjnTb4Tbm1tne5ZW1AiAET75pXtoEdLwnyBUXvlBAqrgISEmVBhFzsdRx0Cf0QvhBgthhE7EvJgrqj8s5bW2a+AF1Vx986mdYTHmHsvIfEoQCYe1KLAssYSH5ufl/rbfAxOuLLssNSYjA0eLI3bDF/TNonSKP+ROFKFStyCt9w02KtDGcpcl2Dvxd0RuGzX9Cg7LXkXmj/U6k7hAYLZuglSUr87LuYcSRMKSsG5izhc9c6e/jDOgq+hfCFCJEpwz5tElXMIlNAT/BFxXX0X3HHD3AAAAAElFTkSuQmCC"),ue=function(){return Object(mn.jsx)(he,{children:Object(mn.jsxs)(fe,{children:[Object(mn.jsxs)(me,{children:[Object(mn.jsx)(je,{}),Object(mn.jsx)(Bn,{color:"#635854",pos:"flex-start"}),Object(mn.jsx)(xe,{})]}),Object(mn.jsx)(se,{})]})})},ge=bn.b.div(Y||(Y=Object(dn.a)(["\nwidth: 100vw;\nheight: 100vh;\nposition: fixed;\nleft: 0;\ntop: 0;\nz-index: 100;\nbackground-color: rgba(0, 0, 0, 0.8);\n"]))),Oe=bn.b.li(W||(W=Object(dn.a)(["\n    margin-bottom: 10px;\n"]))),we=Object(bn.b)(vn)(J||(J=Object(dn.a)(["\n    font-size: 16px;\n    line-height: 19px;\n    color: #635854;\n    :hover {\n        color: #3596F5;\n        text-decoration: underline;\n    }\n"]))),ve=function(n){var e=n.num,t=n.area,o=n.rooms,i=n.active,a=n.handle,r=n.show;return Object(mn.jsx)(Oe,{children:Object(mn.jsxs)(we,{href:"#",className:i&&"active-link","data-apt":e,onPointerOver:function(n){return a(n.target.dataset.apt)},onClick:function(){return r(e)},children:["K\u0432. # ",e,", ",o," \u043a\u043e\u043c\u043d. ",t," \u043a\u0432. \u043c."]})})},ye=Object(bn.b)($n)(I||(I=Object(dn.a)(["\n    width: 40%;\n    padding: 50px 46px;\n    align-items: flex-start;\n    @media (max-width: 576px) {\n        width: 100vw;\n        padding: 20px;\n        align-items: center;\n    }\n"]))),ke=Object(bn.b)(Kn)(Q||(Q=Object(dn.a)(["\n    font-size: 24px;\n    line-height: 29px;\n    color: #000;\n    @media (max-width: 576px) {\n        margin-bottom: 10px;\n    }\n"]))),Ae=bn.b.ul(V||(V=Object(dn.a)(["\n    @media (max-width: 576px) {\n        display: grid;\n        justify-content: space-evenly;\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: clamp(10px, 5vw, 30px);\n        margin-bottom: 20px;\n    }\n"]))),Fe=bn.b.p(Z||(Z=Object(dn.a)(["\n    font-family: Roboto;\n    font-style: italic;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    color: #635854;\n    max-width: 250px;\n    @media (max-width: 576px) {\n        text-align: center;\n        max-width: 100vw;\n    }\n"]))),ze=function(n){var e=n.handleAptSelect,t=n.showSelectedApt,o=Object(rn.useContext)(xn).coordsHome.aptsCoords;return Object(mn.jsxs)(ye,{children:[Object(mn.jsx)(ke,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0443"}),Object(mn.jsx)(Ae,{children:null===o||void 0===o?void 0:o.apts.map((function(n){return Object(mn.jsx)(ve,{num:n.id,area:n.area,rooms:n.rooms,active:n.active,handle:e,show:t},n.id)}))}),Object(mn.jsx)(Fe,{children:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u044b, \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u044b\u043c, \u0443\u0436\u0435 \u0432\u044b\u043a\u0443\u043f\u043b\u0435\u043d\u044b"})]})},Se=t.p+"static/media/floor.03547ca6.png",Re=bn.b.div(K||(K=Object(dn.a)(["\n    width: 60%;\n    background-color: #EBEBEB;\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    padding: 50px;\n    @media (max-width: 576px) {\n        width: 100vw;\n        padding: 20px;\n    }\n"]))),Ce=Object(bn.b)(Kn)($||($=Object(dn.a)(["\n    font-size: 24px;\n    line-height: 29px;\n    color: #000;\n    /* display: block; */\n    margin-bottom: 25px;\n\n"]))),Be=bn.b.div(_||(_=Object(dn.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),Ee=Object(bn.b)(Mn)(nn||(nn=Object(dn.a)(["\n    /* align-self: center; */\n    background-image: url(",");\n    background-position-y: center;\n    width: 377px;\n    height: 379px;\n"])),Se),De=function(n){var e=n.handleAptSelect,t=n.showSelectedApt,o=Object(rn.useContext)(xn),i=o.selectFloor.selectedFloor,a=o.coordsHome.aptsCoords;return Object(mn.jsxs)(Re,{children:[Object(mn.jsxs)(Ce,{children:["\u042d\u0442\u0430\u0436 ",i]}),Object(mn.jsx)(Be,{children:Object(mn.jsx)(Ee,{children:Object(mn.jsx)(Pn,{viewBox:"0 0 377 379",className:"show-apts",elemCoords:null===a||void 0===a?void 0:a.apts,handleField:e,showResult:t})})})]})},Ne=Object(bn.b)(ge)(en||(en=Object(dn.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    transform: scale(0);\n    transition: opacity 0.5s;\n\n"]))),Ue=bn.b.div(tn||(tn=Object(dn.a)(["\n    max-width: 1003px;\n    min-height: 565px;\n    flex-grow: 1;\n    background-color: #fff;\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    @media (max-width: 576px) {\n        width: 100vw;\n        height: 100vh;\n        margin: 2vh auto;\n        flex-direction: column;\n        overflow-y: auto;\n    }\n"]))),He=bn.b.button(on||(on=Object(dn.a)(["\n    background-color: transparent;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 38px;\n    right: 27px;\n"]))),Me=function(){var n=Object(rn.useContext)(xn),e=n.modalOpen,t=e.openModal,o=e.setOpenModal,i=n.selectApt.setSelectedApt,a=n.coordsHome,r=a.aptsCoords,c=a.handleShowApt,l=function(n){return(n.target.closest("#modal-close")||"modal-overlay"===n.target.id)&&o("")},s=function(n){i(n);var e=r.apts;c(te(n,e))},d=function(n){i(n),console.log("\u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430: ",n)};return Object(mn.jsx)(Ne,{className:t,id:"modal-overlay",onClick:function(n){return l(n)},children:Object(mn.jsxs)(Ue,{children:[Object(mn.jsx)(He,{id:"modal-close",children:Object(mn.jsx)(jn,{name:"close",width:28,height:28,onClick:function(n){return l(n)}})}),Object(mn.jsx)(De,{handleAptSelect:s,showSelectedApt:d}),Object(mn.jsx)(ze,{handleAptSelect:s,showSelectedApt:d})]})})},Ge=Object(bn.b)(ge)(an||(an=Object(dn.a)(["\n    display: flex;\n    justify-content: center;\n    padding-top: 10vh;\n    font-size: 36px;\n    color: #ec0f59;\n    text-align: center;\n"]))),Te=t(4),Le=t(14),Pe=t(8),Xe=t.n(Pe);var qe=function(){var n=function(){var n=Object(rn.useState)(),e=Object(Te.a)(n,2),t=e[0],o=e[1];return Object(rn.useEffect)((function(){return o("02")}),[]),{selectedFloor:t,setSelectedFloor:o}}(),e=function(){var n=Object(rn.useState)(),e=Object(Te.a)(n,2),t=e[0],o=e[1];return Object(rn.useEffect)((function(){return o("")}),[]),{openModal:t,setOpenModal:o}}(),t=function(){var n=Object(rn.useState)(null),e=Object(Te.a)(n,2),t=e[0],o=e[1],i=Object(rn.useState)(null),a=Object(Te.a)(i,2),r=a[0],c=a[1],l=Object(rn.useState)(null),s=Object(Te.a)(l,2),d=s[0],b=s[1],p=Object(rn.useState)(null),x=Object(Te.a)(p,2),h=x[0],f=x[1],m=Object(rn.useCallback)(Object(Le.a)(Xe.a.mark((function n(){var e,t;return Xe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("db/homeCoords.json");case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,o(t),c(t[0]),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),f(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])}))),[]);return Object(rn.useEffect)((function(){return m()}),[m]),{floorCoords:t,setFloorCoords:o,aptsCoords:r,setAptsCoords:c,handleApts:function(n){c(t[n-2])},currentApt:d,handleShowApt:function(n){b(r[n])},error:h}}(),o=function(){var n=Object(rn.useState)(),e=Object(Te.a)(n,2);return{selectedApt:e[0],setSelectedApt:e[1]}}();return Object(mn.jsxs)(xn.Provider,{value:{selectFloor:n,modalOpen:e,coordsHome:t,selectApt:o},children:[Object(mn.jsx)(pn,{}),Object(mn.jsx)(Un,{}),Object(mn.jsx)(ae,{}),Object(mn.jsx)(ue,{}),Object(mn.jsx)(Me,{}),t.error&&Object(mn.jsx)(Ge,{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"})]})};sn.a.render(Object(mn.jsx)(cn.a.StrictMode,{children:Object(mn.jsx)(qe,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c5127c5d.chunk.js.map