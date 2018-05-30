module.exports=__NEXT_REGISTER_PAGE("/styles/colors",function(){var e=webpackJsonp([10],{592:function(e,t,l){e.exports=l(593)},593:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,l,a){l&&e(t.prototype,l);a&&e(t,a);return t}}();var n=l(1);var u=g(n);var r=l(29);var i=g(r);var o=l(5);var d=l(30);var m=g(d);var c=l(31);var s=g(c);var f=l(32);var p=l(18);var E=g(p);var h=l(44);function g(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var A=function e(t){return{grid:{background:"transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAIAAAC3eAIWAAAAEklEQVR4AWP4fvkRw69fv3BhAG+IFy/ne6sFAAAAAElFTkSuQmCC)"}}};var w=function(e){b(t,e);function t(){y(this,t);return v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,[{key:"render",value:function e(){var t=this.props.classes;return u.default.createElement(i.default,null,u.default.createElement("h1",null,"Colors"),u.default.createElement("p",null,"In order to keep a sane amount of type styles, we use the default set of typography defined by the ",u.default.createElement("a",{href:"https://material.io/design/typography/the-type-system.html",target:"_new"},"Material Design spec")," with slight customizations. Customizations include using the Bryant font face for accent text, color customizations, etc. Specific instances of typography may be further customized using ",u.default.createElement("em",null,"withStyles")," or style attributes but this should be rare."),u.default.createElement(h.Row,null,u.default.createElement(h.Col,{md:12},u.default.createElement("h2",null,"Headings")),u.default.createElement(h.Col,{md:6},u.default.createElement("p",null,u.default.createElement("b",null,"Material Design Typography")," (",u.default.createElement("a",{href:"https://material.io/design/typography/the-type-system.html",target:"_new"},"MD spec")," - ",u.default.createElement("a",{href:"https://material-ui.com/style/typography/",target:"_new"},"MUI doc"),")"),u.default.createElement("div",{className:t.grid},u.default.createElement(E.default,{variant:"display3",gutterBottom:true,component:"h1"},"Display 3"),u.default.createElement(E.default,{variant:"display2",gutterBottom:true,component:"h2"},"Display 2"),u.default.createElement(E.default,{variant:"display1",gutterBottom:true,component:"h3"},"Display 1"),u.default.createElement(E.default,{variant:"headline",gutterBottom:true},"Headline"),u.default.createElement(E.default,{variant:"title",gutterBottom:true},"Title"),u.default.createElement(E.default,{variant:"subheading",gutterBottom:true},"Subheading"),u.default.createElement(E.default,{variant:"body2",gutterBottom:true},"Body 2"),u.default.createElement(E.default,{variant:"body1",gutterBottom:true},"Body 1"),u.default.createElement(E.default,{variant:"caption",gutterBottom:true},"Caption with ",u.default.createElement("a",{href:"#"},"link")),u.default.createElement(E.default,{variant:"button",gutterBottom:true},"Button"))),u.default.createElement(h.Col,{md:6},u.default.createElement("p",null,u.default.createElement("b",null,"Semantic HTML Tags")),u.default.createElement("div",{className:t.grid},u.default.createElement("h1",null,"Heading 1 <h1>"),u.default.createElement("h2",null,"Heading 2 <h2>"),u.default.createElement("h3",null,"Heading 3 <h3> "),u.default.createElement("h4",null,"Heading 4 <h4> "),u.default.createElement("h5",null,"Heading 5 <h5> "),u.default.createElement("small",null,"Small <small> "),u.default.createElement("p",null,"\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Default Paragraph Styles.\n                  ")))),u.default.createElement(h.Row,null,u.default.createElement(h.Col,{md:12},u.default.createElement("h2",null,"Additional Typography")),u.default.createElement(h.Col,{md:6},u.default.createElement("p",null,u.default.createElement("b",null,"Bullet Lists")),u.default.createElement("div",{className:t.grid},u.default.createElement("ul",null,u.default.createElement("li",null,"List Item 1"),u.default.createElement("li",null,"List Item 2",u.default.createElement("ul",null,u.default.createElement("li",null,"List Item 2.1"),u.default.createElement("li",null,"List Item 2.2"))),u.default.createElement("li",null,"List Item 3")),u.default.createElement("ol",null,u.default.createElement("li",null,"List Item 1"),u.default.createElement("li",null,"List Item 2",u.default.createElement("ol",null,u.default.createElement("li",null,"List Item 2.1"),u.default.createElement("li",null,"List Item 2.2"))),u.default.createElement("li",null,"List Item 3")))),u.default.createElement(h.Col,{md:6},u.default.createElement("p",null,u.default.createElement("b",null,"Inline Styles")),u.default.createElement("div",{className:t.grid},u.default.createElement("p",null,"Lorem ipsum ",u.default.createElement("b",null,"dolor sit amet"),", consectetur ",u.default.createElement("em",null,"adipiscing elit"),". Aenean congue ",u.default.createElement("a",{href:"#"},"nulla id")," arcu molestie, vitae dapibus neque scelerisque. ",u.default.createElement("b",null,u.default.createElement("em",null,"Mauris et eleifend ligula")),", in faucibus purus. Duis vel tempus felis, non consequat ligula. Ut dolor tellus, dapibus at turpis rutrum, viverra placerat est. Vivamus eget pellentesque enim. Sed lacinia arcu dolor, vitae semper magna molestie vitae. Proin vitae ipsum sodales, dictum quam eu, posuere risus.")))))}}]);return t}(u.default.Component);t.default=(0,s.default)(f.initStore,null,{})((0,m.default)((0,o.withStyles)(A)(w)))}},[592]);return{page:e.default}});