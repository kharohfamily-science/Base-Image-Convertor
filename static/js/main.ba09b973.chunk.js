(window["webpackJsonpbinary-image"]=window["webpackJsonpbinary-image"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),r=n.n(l),c=n(7),s=n(2),u=n(3),o=n(6),h=n(4),d=n(1),b=n(5),m=(n(15),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=void 0;return"bigint"===typeof this.props.value&&(e=new String(this.props.value).replace(/\B(?=(\d{3})+(?!\d))/g," ")),i.a.createElement("div",{id:"Input"},i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{id:"numberInput",type:"text",placeholder:"Number to convert",value:e,onChange:this.props.handleInputChange})),i.a.createElement("div",{className:"base-input-container"},i.a.createElement("input",{id:"baseInput",type:"text",placeholder:"Base",defaultValue:"2"})),i.a.createElement("div",{className:"buttons-container"},i.a.createElement("button",{className:"removeline",onClick:this.props.handleRemoveLineClick},"-"),i.a.createElement("button",{className:"addline",onClick:this.props.handleAddLineClick},"+"),i.a.createElement("button",{className:"togglebitlines ".concat("on"===this.props.line?"on":"off"),onClick:this.props.handleDisplayLineClick},"|")),i.a.createElement("button",{className:"render",onClick:this.props.handleRenderClick},"render"))}}]),t}(a.Component)),p=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(h.a)(t).call(this,e))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"Square",style:{backgroundColor:this.props.color},onClick:function(){e.props.onClick(e.props.identifier)},onPointerLeave:function(t){t.pressure>0&&e.props.onClick(e.props.identifier)}})}}]),t}(a.Component),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(h.a)(t).call(this))).state={decNumber:void 0,binNumber:new Array(16).fill(0),line:"off",base:2},e.state.binNumber.unshift(2),e.handleRenderClick=e.handleRenderClick.bind(Object(d.a)(e)),e.handleInputChange=e.handleInputChange.bind(Object(d.a)(e)),e.handleSquareClick=e.handleSquareClick.bind(Object(d.a)(e)),e.handleAddLineClick=e.handleAddLineClick.bind(Object(d.a)(e)),e.handleRemoveLineClick=e.handleRemoveLineClick.bind(Object(d.a)(e)),e.handleDisplayLineClick=e.handleDisplayLineClick.bind(Object(d.a)(e)),e.convertNumberInBase=e.convertNumberInBase.bind(Object(d.a)(e)),e.getNumberArrayDecimalValue=e.getNumberArrayDecimalValue.bind(Object(d.a)(e)),e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"convertNumberInBase",value:function(e,t){for(var n=[];e>=t;)n.push(BigInt(e)%BigInt(t)),e=BigInt(e)/BigInt(t);return n.push(BigInt(e)),n.reverse(),n.unshift(t),n}},{key:"getNumberArrayDecimalValue",value:function(e){var t=(e=e.slice()).shift(),n=BigInt(0),a=0;return e.reverse(),e.forEach((function(e){n+=BigInt(BigInt(e)*Math.pow(BigInt(t),BigInt(a))),a++})),n}},{key:"handleRenderClick",value:function(){var e=this,t=parseInt(document.getElementById("baseInput").value,10);t<=1&&(t=this.state.base),this.setState({base:t},(function(){var t,n;e.state.decNumber?(n=t=e.convertNumberInBase(e.state.decNumber,e.state.base)).splice.apply(n,[1,0].concat(Object(c.a)(new Array(17-t.length%16).fill(0)))):(t=new Array(16).fill(0)).unshift(e.state.base);e.setState({binNumber:t})}))}},{key:"handleInputChange",value:function(e){this.setState({decNumber:e.target.value.replace(/\s/g,"")})}},{key:"handleSquareClick",value:function(e){var t=this.state.binNumber;t[e+1]==this.state.base-1?t[e+1]=0:t[e+1]++;var n=this.getNumberArrayDecimalValue(t);this.setState({decNumber:n,binNumber:t})}},{key:"handleAddLineClick",value:function(){var e=new Array(16).fill(0),t=this.state.binNumber.slice();t.splice.apply(t,[1,0].concat(Object(c.a)(e))),this.setState({binNumber:t})}},{key:"handleRemoveLineClick",value:function(){var e=this;if(this.state.binNumber.length>17){var t=this.state.binNumber;t.splice(1,16),this.setState({binNumber:t},(function(){var t=e.getNumberArrayDecimalValue(e.state.binNumber);e.setState({decNumber:t})}))}}},{key:"handleDisplayLineClick",value:function(){"off"===this.state.line?this.setState({line:"on"}):this.setState({line:"off"})}},{key:"render",value:function(){for(var e=[],t=0,n=[],a=0;a<this.state.base;a++)n.push("rgb(".concat(Math.round(256/(this.state.base-1)*a),", ").concat(Math.trunc(256/(this.state.base-1)*a),", ").concat(Math.trunc(256/(this.state.base-1)*a),")"));var l=!0,r=!1,c=void 0;try{for(var s,u=this.state.binNumber.slice(1,this.state.binNumber.length)[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var o=s.value;e.push(i.a.createElement(p,{key:t,identifier:t,color:n[o],onClick:this.handleSquareClick})),t++}}catch(h){r=!0,c=h}finally{try{l||null==u.return||u.return()}finally{if(r)throw c}}return i.a.createElement("div",{id:"App"},i.a.createElement("header",null,i.a.createElement("h1",null,"Base Image Convertor"),i.a.createElement("p",null,"Here is the kfs number convertor into image in any base.")),i.a.createElement(m,{handleRenderClick:this.handleRenderClick,value:this.state.decNumber,handleInputChange:this.handleInputChange,handleAddLineClick:this.handleAddLineClick,handleRemoveLineClick:this.handleRemoveLineClick,handleDisplayLineClick:this.handleDisplayLineClick,line:this.state.line}),i.a.createElement("div",{id:"Display"},i.a.createElement("div",{id:"line1",className:"line ".concat(this.state.line)}),i.a.createElement("div",{id:"line2",className:"line ".concat(this.state.line)}),i.a.createElement("div",{id:"line3",className:"line ".concat(this.state.line)}),e||i.a.createElement("div",null)))}}]),t}(a.Component);r.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ba09b973.chunk.js.map