(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),i=a.n(s),o=(a(16),a(5)),r=a(6),l=a(7),d=a(11),u=a(10),b=a(8),j=a.n(b),h=a(0),m=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e,t){return Object(h.jsx)("button",{className:j.a.btn,type:"button",onClick:function(){return a(e)},children:e},t)}))})},O=function(e){var t=e.title,a=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:t}),a]})},f=a(9),v=a.n(f),x=function(e){var t=e.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{className:v.a.message,children:t})})},_=a(2),k=a.n(_),p=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positiveFeedBack;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:k.a.statisticlist,children:[Object(h.jsxs)("li",{className:k.a.statistic__item,children:["good: ",t]}),Object(h.jsxs)("li",{className:k.a.statistic__item,children:["neutral: ",a]}),Object(h.jsxs)("li",{className:k.a.statistic__item,children:["bad: ",c]}),Object(h.jsxs)("li",{className:k.a.statistic__item,children:["Positive Feedback: ",s,"%"]}),Object(h.jsxs)("li",{className:k.a.statistic__item,children:["Total: ",n]})]})})},g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedBack=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedBack=function(){return Math.round(e.state.good/e.countTotalFeedBack()*100)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad,n=this.countTotalFeedBack(),s=this.countPositiveFeedBack(),i=Object.keys(this.state);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{title:"Please, Leave your feedback",children:Object(h.jsx)(m,{options:i,onLeaveFeedback:this.onLeaveFeedback})}),0===n?Object(h.jsx)(x,{message:"No feedback given"}):Object(h.jsx)(p,{good:t,neutral:a,bad:c,total:n,positiveFeedBack:s})]})}}]),a}(c.Component),F=g;i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={statistic__item:"Statistics_statistic__item__23VbX"}},8:function(e,t,a){e.exports={btn:"FeedBackOption_btn__14Aho"}},9:function(e,t,a){e.exports={message:"Notification_message__3Xje4"}}},[[18,1,2]]]);
//# sourceMappingURL=main.f7f53ff5.chunk.js.map