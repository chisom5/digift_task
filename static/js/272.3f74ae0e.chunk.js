"use strict";(self.webpackChunkdigift_task=self.webpackChunkdigift_task||[]).push([[272],{349:function(e,n,a){a(2791);n.Z=a.p+"static/media/Avatar.e9e559aaaebc7e073b6f6ed2a74965b7.svg"},2073:function(e,n,a){a(2791);n.Z=a.p+"static/media/amazon.a22fbafc3d31ba63eae1809427f542ca.svg"},6566:function(e,n,a){a(2791);n.Z=a.p+"static/media/atm.9ce853588f3361e9278eab6ea01ee09d.svg"},384:function(e,n,a){a(2791);n.Z=a.p+"static/media/aws_logo.39cb2982684fee8ef588f7605e0150c9.svg"},4207:function(e,n,a){a(2791);n.Z=a.p+"static/media/float-left-zig.571ceb6801ef4f2b257dbc96d8d3f01a.svg"},4331:function(e,n,a){a(2791);n.Z=a.p+"static/media/float-right-zig.0ca2d8df8eb58ab625e444c815b7ec98.svg"},3487:function(e,n,a){a(2791);n.Z=a.p+"static/media/information.3bca18db7b865cde2db172ebc3390454.svg"},3272:function(e,n,a){a.r(n),a.d(n,{default:function(){return M}});var t=a(1413),s=a(9439),i=a(2791),r=a(7022),o=a(3360),c=a(9743),l=a(1938),d=a(7250),f=a(4942),h=a(7462),u=a(1694),m=a.n(u),p=a(5987),g=a(5671),v=a(3144),b=a(136),x=a(1129),y=function(e){(0,b.Z)(a,e);var n=(0,x.Z)(a);function a(e){var s;(0,g.Z)(this,a),(s=n.call(this,e)).handleChange=function(e){var n=s.props,a=n.disabled,i=n.onChange;a||("checked"in s.props||s.setState({checked:e.target.checked}),i&&i({target:(0,t.Z)((0,t.Z)({},s.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},s.saveInput=function(e){s.input=e};var i="checked"in e?e.checked:e.defaultChecked;return s.state={checked:i},s}return(0,v.Z)(a,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,a=n.prefixCls,t=n.className,s=n.style,r=n.name,o=n.id,c=n.type,l=n.disabled,d=n.readOnly,u=n.tabIndex,g=n.onClick,v=n.onFocus,b=n.onBlur,x=n.onKeyDown,y=n.onKeyPress,j=n.onKeyUp,C=n.autoFocus,k=n.value,_=n.required,Z=(0,p.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),z=Object.keys(Z).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=Z[n]),e}),{}),N=this.state.checked,A=m()(a,t,(e={},(0,f.Z)(e,"".concat(a,"-checked"),N),(0,f.Z)(e,"".concat(a,"-disabled"),l),e));return i.createElement("span",{className:A,style:s},i.createElement("input",(0,h.Z)({name:r,id:o,type:c,required:_,readOnly:d,disabled:l,tabIndex:u,className:"".concat(a,"-input"),checked:!!N,onClick:g,onFocus:v,onBlur:b,onKeyUp:j,onKeyDown:x,onKeyPress:y,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},z)),i.createElement("span",{className:"".concat(a,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,t.Z)((0,t.Z)({},n),{},{checked:e.checked}):null}}]),a}(i.Component);y.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var j=y,C=a(8850),k=a(3433),_=a(1818),Z=a(699),z=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]])}return a},N=i.createContext(null),A=function(e,n){var a=e.defaultValue,t=e.children,r=e.options,o=void 0===r?[]:r,c=e.prefixCls,l=e.className,d=e.style,u=e.onChange,p=z(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),g=i.useContext(Z.E_),v=g.getPrefixCls,b=g.direction,x=i.useState(p.value||a||[]),y=(0,s.Z)(x,2),j=y[0],C=y[1],A=i.useState([]),w=(0,s.Z)(A,2),G=w[0],O=w[1];i.useEffect((function(){"value"in p&&C(p.value||[])}),[p.value]);var F=function(){return o.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},E=v("checkbox",c),T="".concat(E,"-group"),$=(0,_.Z)(p,["value","disabled"]);o&&o.length>0&&(t=F().map((function(e){return i.createElement(P,{prefixCls:E,key:e.value.toString(),disabled:"disabled"in e?e.disabled:p.disabled,value:e.value,checked:-1!==j.indexOf(e.value),onChange:e.onChange,className:"".concat(T,"-item"),style:e.style},e.label)})));var S={toggleOption:function(e){var n=j.indexOf(e.value),a=(0,k.Z)(j);-1===n?a.push(e.value):a.splice(n,1),"value"in p||C(a);var t=F();null===u||void 0===u||u(a.filter((function(e){return-1!==G.indexOf(e)})).sort((function(e,n){return t.findIndex((function(n){return n.value===e}))-t.findIndex((function(e){return e.value===n}))})))},value:j,disabled:p.disabled,name:p.name,registerValue:function(e){O((function(n){return[].concat((0,k.Z)(n),[e])}))},cancelValue:function(e){O((function(n){return n.filter((function(n){return n!==e}))}))}},I=m()(T,(0,f.Z)({},"".concat(T,"-rtl"),"rtl"===b),l);return i.createElement("div",(0,h.Z)({className:I,style:d},$,{ref:n}),i.createElement(N.Provider,{value:S},t))},w=i.forwardRef(A),G=i.memo(w),O=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(a[t[s]]=e[t[s]])}return a},F=function(e,n){var a,t=e.prefixCls,s=e.className,r=e.children,o=e.indeterminate,c=void 0!==o&&o,l=e.style,d=e.onMouseEnter,u=e.onMouseLeave,p=e.skipGroup,g=void 0!==p&&p,v=O(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),b=i.useContext(Z.E_),x=b.getPrefixCls,y=b.direction,k=i.useContext(N),_=(0,i.useContext)(C.aM).isFormItemInput,z=i.useRef(v.value);i.useEffect((function(){null===k||void 0===k||k.registerValue(v.value)}),[]),i.useEffect((function(){if(!g)return v.value!==z.current&&(null===k||void 0===k||k.cancelValue(z.current),null===k||void 0===k||k.registerValue(v.value),z.current=v.value),function(){return null===k||void 0===k?void 0:k.cancelValue(v.value)}}),[v.value]);var A=x("checkbox",t),w=(0,h.Z)({},v);k&&!g&&(w.onChange=function(){v.onChange&&v.onChange.apply(v,arguments),k.toggleOption&&k.toggleOption({label:r,value:v.value})},w.name=k.name,w.checked=-1!==k.value.indexOf(v.value),w.disabled=v.disabled||k.disabled);var G=m()((a={},(0,f.Z)(a,"".concat(A,"-wrapper"),!0),(0,f.Z)(a,"".concat(A,"-rtl"),"rtl"===y),(0,f.Z)(a,"".concat(A,"-wrapper-checked"),w.checked),(0,f.Z)(a,"".concat(A,"-wrapper-disabled"),w.disabled),(0,f.Z)(a,"".concat(A,"-wrapper-in-form-item"),_),a),s),F=m()((0,f.Z)({},"".concat(A,"-indeterminate"),c)),E=c?"mixed":void 0;return i.createElement("label",{className:G,style:l,onMouseEnter:d,onMouseLeave:u},i.createElement(j,(0,h.Z)({"aria-checked":E},w,{prefixCls:A,className:F,ref:n})),void 0!==r&&i.createElement("span",null,r))},E=i.forwardRef(F);E.displayName="Checkbox";var P=E,T=P;T.Group=G,T.__ANT_CHECKBOX=!0;var $=T,S=a(184),I=function(e){var n;return(0,S.jsxs)("div",{className:"filter_container",children:[(0,S.jsxs)("div",{className:"filter_header",children:[(0,S.jsx)("p",{className:"filter_title",children:"Filter"}),(0,S.jsx)("span",{children:"Reset"})]}),(0,S.jsxs)("section",{className:"filter_content",children:[(0,S.jsx)("p",{className:"filter_title",children:"Categories"}),e.filterLabels&&(null===(n=e.filterLabels)||void 0===n?void 0:n.map((function(n){return(0,S.jsxs)("div",{className:"filter_content_item",children:[(0,S.jsx)($,{onChange:function(a){return e.handleCheckboxChange(a,n)},checked:!(n.id!==e.checkedObj.checkedId||!e.checkedObj.checked)}),(0,S.jsx)("p",{children:n.name})]},n.id)})))]})]})},D=function(e){return(0,S.jsx)("div",{className:"filter_content_container",children:e.component})},K=function(e){return(0,S.jsxs)("div",{className:"card_container",children:[(0,S.jsx)("div",{children:(0,S.jsx)("div",{className:"gift_tag",children:"Giftcards"})}),(0,S.jsxs)("div",{className:"card_content_middle",children:[(0,S.jsxs)("div",{className:"d-flex card_content_top",children:[(0,S.jsx)("span",{children:(0,S.jsx)("img",{src:a(384).Z,alt:"aws"})}),(0,S.jsx)("p",{children:e.content.label})]}),(0,S.jsx)("p",{className:"card_content_desc mt-3",children:e.content.description})]}),(0,S.jsxs)("div",{className:"card_content_bottom",children:[(0,S.jsxs)("span",{className:"d-flex",children:[(0,S.jsx)("img",{src:a(3487).Z,alt:"information"}),(0,S.jsx)("p",{className:"card_content_desc",style:{marginLeft:"0.45rem"},children:e.content.cardFee})]}),(0,S.jsxs)(o.Z,{className:"w-100 mt-2",children:["Purchase card ",(0,S.jsx)(l.Z,{})]})]})]})},L=function(e){return(0,S.jsxs)("div",{className:"happy_customers_cols",children:[(0,S.jsx)("div",{children:(0,S.jsx)("p",{className:"cols_text",children:e.comment})}),(0,S.jsxs)("div",{className:"happy_customers_cols_bottom",children:[(0,S.jsx)("span",{className:"avatar",children:(0,S.jsx)("img",{src:a(349).Z,alt:"avatar"})}),(0,S.jsxs)("div",{children:[(0,S.jsx)("p",{children:"Osemwengie Benjamin"}),(0,S.jsx)("span",{id:"position",children:"Product Designer at Digift"})]})]})]})},V=a(6281),M=function(){var e=(0,i.useState)([{id:1,name:"Ecommerce",giftcards:[{id:0,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n          for 20-somethings, selling all the freshest styles \n          complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:1,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n        for 20-somethings, selling all the freshest styles \n        complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:2,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n      for 20-somethings, selling all the freshest styles \n      complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"}]},{id:2,name:"Popular",giftcards:[]},{id:3,name:"Airtime & Electricity",giftcards:[{id:0,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n          for 20-somethings, selling all the freshest styles \n          complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:1,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n        for 20-somethings, selling all the freshest styles \n        complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:2,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n      for 20-somethings, selling all the freshest styles \n      complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"}]},{id:4,name:"Gaming",giftcards:[{id:0,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n          for 20-somethings, selling all the freshest styles \n          complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:1,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n        for 20-somethings, selling all the freshest styles \n        complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:2,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n      for 20-somethings, selling all the freshest styles \n      complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"}]},{id:5,name:"Electronics",giftcards:[{id:0,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n          for 20-somethings, selling all the freshest styles \n          complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:1,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n        for 20-somethings, selling all the freshest styles \n        complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:2,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n      for 20-somethings, selling all the freshest styles \n      complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"}]},{id:6,name:"Clothes and Fashion",giftcards:[{id:0,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n          for 20-somethings, selling all the freshest styles \n          complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:1,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n        for 20-somethings, selling all the freshest styles \n        complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:2,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n      for 20-somethings, selling all the freshest styles \n      complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"}]},{id:7,name:"Jewelry & Watches",giftcards:[]},{id:8,name:"Home and furnitures",giftcards:[{id:0,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n          for 20-somethings, selling all the freshest styles \n          complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:1,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n        for 20-somethings, selling all the freshest styles \n        complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"},{id:2,label:"Amazon Gift Card",description:"Amazon Gift Card is a global fashion destination \n      for 20-somethings, selling all the freshest styles \n      complemented by exclusive content....",cardFee:"This card has a fee of $ 0.99"}]},{id:9,name:"Sports & Entertainment",giftcards:[]}]),n=(0,s.Z)(e,1)[0],f=(0,i.useState)(n[0]&&void 0!==n[0].giftcards&&n[0].giftcards.slice(0,2)),h=(0,s.Z)(f,2),u=h[0],m=h[1],p=(0,i.useState)({checked:!0,checkedId:1}),g=(0,s.Z)(p,2),v=g[0],b=g[1];return(0,S.jsxs)(r.Z,{fluid:!0,children:[(0,S.jsxs)("header",{children:[(0,S.jsx)(d.Z,{}),(0,S.jsxs)("section",{className:"header_section",children:[(0,S.jsxs)("div",{className:"header_section_inner",children:[(0,S.jsx)("h2",{children:"Eliminate bank restrictions with our unique gift cards."}),(0,S.jsx)("span",{id:"header_section_desc",children:"Shop on Amazon, ASOS, 1800 flowers, Whilst paying for utilities and even more."}),(0,S.jsx)(o.Z,{children:"Start shopping"}),(0,S.jsx)("span",{id:"header_zigzag_left",children:(0,S.jsx)("img",{src:a(4207).Z,alt:"zig-left",loading:"lazy"})}),(0,S.jsx)("span",{id:"header_zigzag_right",children:(0,S.jsx)("img",{src:a(4331).Z,alt:"zig-right",loading:"lazy"})})]}),(0,S.jsxs)("div",{className:"header_bottom_imgWrapper",children:[(0,S.jsx)("span",{children:(0,S.jsx)("img",{src:a(2073).Z,alt:"",loading:"lazy"})}),(0,S.jsx)("span",{children:(0,S.jsx)("img",{src:a(6566).Z,alt:"",loading:"lazy"})})]})]})]}),(0,S.jsxs)("section",{className:"arrivals_container",children:[(0,S.jsx)("h2",{className:"title",children:"Latest Arrivals"}),(0,S.jsxs)("div",{className:"d-flex",children:[(0,S.jsx)(I,{filterLabels:n,checkedObj:v,handleCheckboxChange:function(e,a){b((0,t.Z)((0,t.Z)({},v),{},{checked:e.target.checked,checkedId:a.id}));var s=n.filter((function(e){return e.id===a.id}));m(s[0].giftcards.slice(0,2))}}),(0,S.jsxs)("main",{children:[(0,S.jsx)(D,{component:null===u||void 0===u?void 0:u.map((function(e){return(0,S.jsx)(K,{content:e},e.id)}))}),(0,S.jsx)(D,{component:null===u||void 0===u?void 0:u.map((function(e){return(0,S.jsx)(K,{content:e},e.id)}))}),(0,S.jsx)(D,{component:null===u||void 0===u?void 0:u.map((function(e){return(0,S.jsx)(K,{content:e},e.id)}))})]})]}),(0,S.jsx)("div",{className:"d-flex justify-content-center align-items-center mt-5",children:(0,S.jsxs)(o.Z,{className:"btn_loadProducts",onClick:function(){var e=n.filter((function(e){return e.id===v.checkedId}));m(e[0].giftcards)},children:["Load more products",(0,S.jsx)(l.Z,{})]})})]}),(0,S.jsxs)("section",{className:"happy_customers_container",children:[(0,S.jsx)("h2",{id:"title",children:"\u201cHear what happy customers are saying about Digift\u201d"}),(0,S.jsxs)(c.Z,{className:"happy_customers_row",children:[(0,S.jsx)(L,{comment:"\u201cDigift stood out from the crowd with an impressive team and even more\n          impressive mission: harnessing the power of giftcards enterprises to\n          support people who are restricted by banks in Nigeria.\u201d"}),(0,S.jsx)(L,{comment:"\u201cDigift stood\n          out from the crowd with an impressive team and even more impressive\n          mission: harnessing the power of giftcards enterprises to support\n          people who are restricted by banks in Nigeria. Digift stood out from\n          the crowd with an impressive team and even more impressive mission \u201d"}),(0,S.jsx)(L,{comment:"\u201cDigift stood out from the crowd with an impressive team and even more\n          impressive mission: harnessing the power of giftcards enterprises to\n          support people who are restricted by banks in Nigeria.\u201d"})]})]}),(0,S.jsx)("section",{className:"buying_cards_container",children:(0,S.jsx)("div",{className:"buying_cards_container_inner",children:(0,S.jsxs)("div",{id:"text_content",children:[(0,S.jsx)("h2",{children:"Create happiness from buying a gift card today."}),(0,S.jsx)("span",{id:"zigzag_icon",children:(0,S.jsx)("img",{src:a(4207).Z,alt:"",loading:"lazy"})})]})})}),(0,S.jsx)(V.Z,{})]})}}}]);
//# sourceMappingURL=272.3f74ae0e.chunk.js.map