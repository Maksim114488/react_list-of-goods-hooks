(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c,s=n(5),o=n.n(s),a=n(4),r=(n(10),n(11),n(1)),i=n(2),u=n.n(i),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.ALPHABETICALLY="Sort alphabetically",t.BY_LENGTH="Sort by length",t.Default=""}(c||(c={}));var h=function(){var t=Object(r.useState)(c.Default),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(!1),i=Object(a.a)(o,2),h=i[0],j=i[1],d=function(t,e){var n=b.map((function(t,e){return{id:e,name:t}}));switch(t){case c.ALPHABETICALLY:n.sort((function(t,e){return t.name.localeCompare(e.name)}));break;case c.BY_LENGTH:n.sort((function(t,e){return t.name.length-e.name.length}));case c.Default:}return e&&n.reverse(),n}(n,h);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()({"is-light":n!==c.ALPHABETICALLY},"button","is-info"),onClick:function(){return s(c.ALPHABETICALLY)},children:c.ALPHABETICALLY}),Object(l.jsx)("button",{type:"button",className:u()({"is-light":n!==c.BY_LENGTH},"button","is-success"),onClick:function(){return s(c.BY_LENGTH)},children:c.BY_LENGTH}),Object(l.jsx)("button",{type:"button",className:u()({"is-light":!h},"button","is-warning"),onClick:function(){return j((function(t){return!t}))},children:"Reverse"}),(n||h)&&Object(l.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){s(c.Default),j(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:d.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t.name},t.id)}))})]})};o.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.66b50b33.chunk.js.map