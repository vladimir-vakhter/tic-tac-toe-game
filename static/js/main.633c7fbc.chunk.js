(this["webpackJsonptic-tac-toe-game"]=this["webpackJsonptic-tac-toe-game"]||[]).push([[0],{14:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var r=s(8),a=s(3),n=s(4),i=s(6),c=s(5),u=s(1),l=s.n(u),d=s(7),h=s.n(d),j=(s(14),s(0));function o(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).state={squares:Array(9).fill(null),squaresFilled:0,xIsNext:!0},r}return Object(n.a)(s,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();if(!x(t)&&!t[e]){var s=this.state.squaresFilled+1;t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,squaresFilled:s,xIsNext:!this.state.xIsNext})}}},{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(o,{value:this.state.squares[e],onClick:function(){t.handleClick(e)}})}},{key:"render",value:function(){var e,t=x(this.state.squares);return e=t?"Winner: "+t:9===this.state.squaresFilled?"Draw!":"Next player: "+(this.state.xIsNext?"X":"O"),Object(j.jsxs)("div",{children:[Object(j.jsx)("h",{children:"Tic-Tac-Toe Game"}),Object(j.jsx)("div",{className:"status",children:e}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),s}(l.a.Component),v=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{}),Object(j.jsx)("ol",{})]})]})}}]),s}(l.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var a=Object(r.a)(t[s],3),n=a[0],i=a[1],c=a[2];if(e[n]&&e[n]===e[i]&&e[n]===e[c])return e[n]}return null}h.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.633c7fbc.chunk.js.map