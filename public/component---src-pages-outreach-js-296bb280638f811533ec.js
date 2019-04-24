(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{202:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(23),o=t(221),l=t(223),c=t(217),s=t(1),d=(t(2),{Color:{Background:"OrangeRed",Primary:"OrangeRed",Secondary:s.b.Color.White,Tertiary:"OrangeRed"}}),u=function(){return i.a.createElement(l.b,null)},g=function(){return i.a.createElement(c.a,null)};e.default=function(n){n.data;return i.a.createElement(o.a,{BgColor:d.Color.Background,PrimaryColor:d.Color.Primary,SecondaryColor:d.Color.Secondary,TertiaryColor:d.Color.Tertiary},i.a.createElement(a.a,{Query:"Desktop"},i.a.createElement(u,null)),i.a.createElement(a.a,{Query:"Mobile"},i.a.createElement(g,null)))}},214:function(n,e,t){"use strict";var r=t(5),i=t.n(r),a=(t(36),t(0)),o=t.n(a),l=t(212),c=t.n(l),s=t(211),d=(t(9),t(216)),u=t(76),g=t(75),S=t(1),f=t(4),m=t.n(f),p=t(3),b=t.n(p),h=(t(2),t(213));function v(){var n=m()(["\n  display: flex;\n\n  .btn {\n    background-color: rgba(0, 0, 0, 0);\n    color: ",";\n\n    svg {\n      fill: ",";\n      border: ",";\n    }\n\n    i {\n      color: ",";\n    }\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n  }\n"]);return v=function(){return n},n}function C(){var n=m()(["\n  display: flex;\n  font-weight: 800;\n  font-size: 1.5rem;\n  color: ","\n  transition: all ","\n    ",";\n  i {\n    margin-right: ",";\n    transition: all ","\n      ",";\n  }\n"]);return C=function(){return n},n}function w(){var n=m()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: calc("," / 2);\n  padding-bottom: calc("," / 4);\n"]);return w=function(){return n},n}function x(){var n=m()(["\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-direction: column;\n\n  .widget {\n    padding: calc("," / 6);\n    height: ",";\n  }\n"]);return x=function(){return n},n}function y(){var n=m()(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n"]);return y=function(){return n},n}function z(){var n=m()(["\n  width: 100%;\n  overflow: visible;\n\n  /* Slick styles */\n  .slick-slider {\n    padding-bottom: ",";\n    margin-bottom: ",";\n\n    .slick-slide {\n      &:first-child {\n        .widget {\n          padding-left: 0;\n        }\n      }\n    }\n    .slick-list {\n      overflow: visible;\n    }\n\n    /* Arrows */\n    .slick-arrow {\n      top: calc((",") * -1);\n      transform: none;\n      right: 0;\n      left: unset;\n      width: calc("," * 0.75);\n      height: calc("," * 0.75);\n      border-radius: 50%;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      z-index: 400;\n      background: rgba(0, 0, 0, 0);\n\n      &.slick-prev {\n        transform: rotate(180deg);\n        right: calc(("," * 0.75) + ("," * 0.25));\n      }\n\n      &.slick-next {\n        right: 0;\n      }\n\n      &.slick-disabled {\n        opacity: 0.4;\n        .ico {\n          opacity: .5;\n        }\n        &:hover {\n          background: rgba(0, 0, 0, 0);\n          border: 1px solid rgba(0, 0, 0, 0.1);\n        }\n      }\n\n      &:hover {\n        background: rgba(0, 0, 0, 0.03);\n        border: 1px solid rgba(0, 0, 0, 0.03);\n      }\n\n      .ico {\n        position: absolute;\n        left: 54%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n      }\n\n      &:before {\n        content: '';\n      }\n    }\n\n    .slick-dots {\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: auto;\n      padding: 0;\n      margin: 0;\n\n      li {\n        margin: 0;\n        padding: 0;\n        width: 10px;\n        height: 10px;\n        margin-right: 5px;\n\n        button {\n          margin: 0;\n          padding: 0;\n          position: relative;\n          width: 10px;\n          height: 10px;\n          margin-right: 5px;\n\n          &:before {\n            content: '';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            width: 7px;\n            height: 7px;\n            border: 1px solid ",";\n            border-radius: 50%;\n          }\n        }\n      }\n    }\n  }\n"]);return z=function(){return n},n}var k=b.a.div(z(),S.b.Base.Size.Sm,S.b.Base.Size.Sm,S.a.Size,S.a.Size,S.a.Size,S.a.Size,S.a.Size,S.b.Color.Black);k.Inner=b()(h.b)(y(),S.a.Size,S.a.Size),k.Content=b()(h.a)(x(),S.a.Size,function(n){return n.SectionSize?"calc("+S.a.Size+"*"+n.SectionSize+")":"calc("+S.a.Size+"* 3)"}),k.SectionHeader=b.a.div(w(),S.a.Size,S.a.Size),k.Headline=b.a.div(C(),function(n){return n.TextColor?n.TextColor:null},S.b.Base.Transition.Duration,S.b.Base.Transition.CssEase,S.b.Base.Size.Sm,S.b.Base.Transition.Duration,S.b.Base.Transition.CssEase),k.CallToAction=b.a.div(v(),S.b.Color.Black,S.b.Color.Black,S.b.Color.Black,S.b.Color.Black);var T=k;function B(n){var e=n.className,t=n.style,r=n.onClick;return o.a.createElement("div",{className:e,style:Object.assign({},t),onClick:r,onKeyPress:r,role:"button",tabIndex:"0"},o.a.createElement(g.a,{className:"svg-carat",Name:"carat"}))}function E(n){var e=n.className,t=n.style,r=n.onClick;return o.a.createElement("div",{className:e,style:Object.assign({},t),onClick:r,onKeyPress:r,role:"button",tabIndex:"0"},o.a.createElement(g.a,{className:"svg-carat",Name:"carat"}))}var I=function(n){function e(e){return n.call(this,e)||this}return i()(e,n),e.prototype.render=function(){var n,e=this,t=(this.props.ArrowColor,this.props.SliderSettings.slidesToShow?this.props.SliderSettings.slidesToShow:1),r=this.props.SliderSettings.slidesToScroll?this.props.SliderSettings.slidesToScroll:1,i=!!this.props.SliderSettings.autoplay&&this.props.SliderSettings.autoplay,a=!!this.props.SliderSettings.arrows&&this.props.SliderSettings.arrows,l=((n={dots:!0,speed:550,arrows:!1,autoplaySpeed:4e3,slidesToShow:t,slidesToScroll:r,autoplay:i,infinite:!1,draggable:!0}).arrows=a,n.nextArrow=o.a.createElement(B,null),n.prevArrow=o.a.createElement(E,null),n);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Helmet,null,o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick.min.css"}),o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick-theme.min.css"})),o.a.createElement(c.a,Object.assign({ref:function(n){return e.slider=n}},l),this.props.children))},e}(o.a.Component);e.a=function(n){var e=n.Widgets,t=n.SectionSize,r=n.SliderSettings,i=n.Header,a=n.Icon,l=n.ViewAll,c=n.Theme;return o.a.createElement(T,null,o.a.createElement(T.Inner,null,o.a.createElement(T.Content,{SectionSize:t},o.a.createElement(T.SectionHeader,null,o.a.createElement(T.Headline,{TextColor:c.TextColor},a?o.a.createElement("i",{className:"fas fa-"+a}):null,o.a.createElement("h2",null,i)),l?o.a.createElement(T.CallToAction,null,o.a.createElement(u.a,{Destination:l[0],BgColor:"inherit",Label:l[1],IconClass:"carat"})):null),o.a.createElement(I,{SliderSettings:r,ArrowColor:c.TextColr},e.map(function(n,e){return o.a.createElement(d.a,{key:e,WidgetContent:n.WidgetContent,Flex:n.Flex?n.Flex:null})})))))}},217:function(n,e,t){"use strict";var r=t(4),i=t.n(r),a=t(0),o=t.n(a),l=(t(212),t(211),t(51),t(1)),c=t(2),s=t(214),d=t(3),u=t.n(d),g=t(14);function S(){var n=i()(["\n  width: 100%;\n  padding: 0;\n\n  .widget {\n    ",";\n  }\n"]);return S=function(){return n},n}function f(){var n=i()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: calc("," + ",");\n  padding-bottom: calc("," + ",");\n"]);return f=function(){return n},n}var m=u.a.div(f(),l.a.Nav.Size,l.b.Base.Size.Sm,l.a.Nav.Size,l.b.Base.Size.Sm);m.Inner=u.a.div(S(),g.a);var p=m;t(106);function b(){var n=i()(["\n  .wrapper {\n    @media (min-width: ",") {\n      overflow: hidden;\n    }\n    @media (max-width: ",") {\n      overflow-y: scroll !important; /* has to be scroll, not auto */\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n"]);return b=function(){return n},n}var h=[{Flex:1,WidgetContent:[{Destination:"/learn/recreational/",Style:"Generic",Meta:{Generic:{BgColor:l.b.Color.Mint,BgImage:"",Subhead:"",Headline:"Out of State",TextColor:l.b.Color.Black,IconColor:l.b.Color.Black,IconName:"leaf",TintColor:"",TintOpacity:"",IconSize:""}}}]},{Flex:1,WidgetContent:[{Destination:"/learn/recreational/",Style:"Generic",Meta:{Generic:{BgColor:l.b.Color.Mint,BgImage:"",Subhead:"",Headline:"Growing",TextColor:l.b.Color.Black,IconColor:l.b.Color.Black,IconName:"leaf",TintColor:"",TintOpacity:"",IconSize:""}}}]},{Flex:1,WidgetContent:[{Destination:"/learn/recreational/",Style:"Generic",Meta:{Generic:{BgColor:l.b.Color.Mint,BgImage:"",Subhead:"",Headline:"Purchase",TextColor:l.b.Color.Black,IconColor:l.b.Color.Black,IconName:"leaf",TintColor:"",TintOpacity:"",IconSize:""}}}]}],v=Object(d.createGlobalStyle)(b(),c.a.Media.Width.Md+1+"px",c.a.Media.Width.Md+"px");e.a=function(n){n.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement(p,null,o.a.createElement(p.Inner,null,o.a.createElement(s.a,{Widgets:h,SectionSize:7,Header:"Headline",Theme:{TextColor:l.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}),o.a.createElement(s.a,{Widgets:h,SectionSize:7,Header:"Headline",Theme:{TextColor:l.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}),o.a.createElement(s.a,{Widgets:h,SectionSize:7,Header:"Headline",Theme:{TextColor:l.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}),o.a.createElement(s.a,{Widgets:h,SectionSize:7,Header:"Headline",Theme:{TextColor:l.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}))))}},218:function(n,e,t){"use strict";var r=t(4),i=t.n(r),a=t(3),o=t.n(a),l=t(1),c=t(2),s=t(14);function d(){var n=i()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  .widget {\n    &:first-child {\n      padding-top: 0;\n    }\n  }\n\n  ","\n"]);return d=function(){return n},n}function u(){var n=i()(["\n  padding: "," "," "," 0;\n  height: calc(100vh - ("," * 2 + ","));\n  display: flex;\n  flex-direction: column;\n  flex: ",";\n  width: ",";\n"]);return u=function(){return n},n}function g(){var n=i()(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: visible;\n  padding-bottom: ",";\n  height: calc(100vh - ("," * 2 + ","));\n"]);return g=function(){return n},n}function S(){var n=i()(["\n  width: 100%;\n  padding: 0;\n  overflow: visible;\n  height: calc(100vh - ("," * 2 + ","));\n"]);return S=function(){return n},n}function f(){var n=i()(["\n  width: 100%;\n  padding: 0;\n\n  /* Padding on first slide */\n  .slick-slide {\n    padding: 0;\n    overflow: visible;\n    div {\n      outline: 0;\n      &:focus {\n        outline: 0;\n      }\n      .col {\n        &:first-child {\n          padding-left: ",";\n        }\n      }\n    }\n    &:first-child {\n      padding: 0 0 0 ",";\n      .col {\n        &:first-child {\n          padding-left: 0;\n        }\n      }\n    }\n  }\n\n  .widget {\n    ",";\n  }\n"]);return f=function(){return n},n}function m(){var n=i()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: ",";\n  overflow: visible;\n\n  .slick-list {\n    overflow: visible;\n  }\n"]);return m=function(){return n},n}var p=o.a.div(m(),l.a.Footer.Size);p.Inner=o.a.div(f(),l.b.Base.Size.Sm,l.b.Base.Size.Sm,s.a),p.Slide=o.a.div(S(),l.a.Nav.Size,l.a.Footer.Size),p.Slide.Inner=o.a.div(g(),l.b.Base.Size.Sm,l.a.Nav.Size,l.a.Footer.Size),p.Column=o.a.div(u(),l.b.Base.Size.Sm,l.b.Base.Size.Sm,l.b.Base.Size.Sm,l.a.Nav.Size,l.a.Footer.Size,function(n){return n.Divider?"unset":"1"},function(n){return n.ColWidth?n.ColWidth:n.Divider?l.b.Base.Size.Md:"auto"}),p.Column.Inner=o.a.div(d(),function(n){if(n.Divider)return"\n        width: "+l.b.Base.Size.Md+";\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          // left: calc(50% - "+c.a.Size.Sm/2+"px);\n          left: 50%;\n          width: 1px;\n          opacity: .05;\n          background-color: { Theme.Color.Indigo };\n        }\n    "}),e.a=p},223:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(0),i=t.n(r),a=t(218),o=function(n){var e=n.children;return i.a.createElement(a.a,null,i.a.createElement(a.a.Inner,null,e))};e.b=o}}]);
//# sourceMappingURL=component---src-pages-outreach-js-296bb280638f811533ec.js.map