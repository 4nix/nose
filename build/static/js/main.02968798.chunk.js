(window.webpackJsonpnose=window.webpackJsonpnose||[]).push([[0],{144:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},178:function(e,t,a){e.exports=a(362)},183:function(e,t,a){},184:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=(a(183),a(144)),c=a.n(l),s=(a(184),a(57)),u=a(42),p=a(78),m=a(32),d=a(33),h=a(37),f=a(34),g=a(39),b=a(365),O=a(41),v=a(364),E=(a(66),a(363)),w=a(366),y=a(24),j=a.n(y),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).handleOK=function(){console.log(a.state.groupName);var e=new FormData;e.append("name",a.state.groupName),e.append("config",a.state.config),j.a.post("https://golang.wall-e.club/admin/group",e).then(function(e){a.props.refresh()})},a.handleCancle=function(){a.setState({visible:!1})},a.show=function(){a.setState({visible:!0})},a.state={visible:!1,groupName:"",config:""},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{title:"Edit",visible:this.state.visible,onCancel:this.handleCancle,onOk:this.handleOK},r.a.createElement(E.a,{labelCol:{span:8},wrapperCol:{span:16}},r.a.createElement(E.a.Item,{label:"Group Name:"},r.a.createElement(w.a,{onChange:function(t){e.setState({groupName:t.target.value})}})),r.a.createElement(E.a.Item,{label:"Config:"},r.a.createElement(w.a.TextArea,{onChange:function(t){e.setState({config:t.target.value})},autoSize:{minRows:2}}))))}}]),t}(r.a.Component);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={data:[],pagination:{pageSize:20}},a.url="https://golang.wall-e.club/admin/list",a.groupUrl="https://golang.wall-e.club/admin/group",a.editLayer=void 0,a.onRef=function(e){a.editLayer=e},a.handleCreate=function(){a.editLayer.show()},a.handleDelete=function(e){b.a.confirm({title:"\u786e\u5b9a\u8981\u5220\u9664",content:"ID: "+e.id+", Name: "+e.name,onOk:function(){j.a.delete(a.groupUrl+"/"+e.id).then(function(e){a.fetchData()})}})},a.fetchData=function(){j.a.get(a.url).then(function(e){a.setState({data:e.data,pagination:k({},a.state.pagination,{total:e.data.length})})})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{margin:"auto",padding:"5px",width:"90%",border:"1px solid #eee"}},r.a.createElement("h3",null,"Test nose !"),r.a.createElement(O.a,{onClick:this.handleCreate},"\u65b0\u589e"),r.a.createElement(D,{ref:this.onRef,refresh:this.fetchData}),r.a.createElement(v.b,{size:"small",dataSource:this.state.data,renderItem:function(t){return r.a.createElement(v.b.Item,{actions:[r.a.createElement(s.b,{to:"list/"+t.id,key:"list-loadmore-edit"},"view"),r.a.createElement("a",{key:"list-loadmore-edit"},"edit"),r.a.createElement("a",{key:"list-loadmore-del",onClick:function(a){e.handleDelete(t)}},"delete")]},t.name)},pagination:this.state.pagination}))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={visible:!1,groupName:"",config:"",modeID:"0",content:""},a.handleOK=function(){console.log(a.state.groupName);var e=new FormData;e.append("name",a.state.groupName),e.append("config",a.state.config),e.append("gid",a.props.groupID||"0"),e.append("rid",a.props.relateID||"0"),e.append("content",a.state.content),e.append("mid",a.state.modeID),j.a.post("https://golang.wall-e.club/admin/item",e).then(function(e){a.props.refresh()})},a.handleCancle=function(){a.setState({visible:!1})},a.show=function(){a.setState({visible:!0})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{title:"Edit",visible:this.state.visible,onCancel:this.handleCancle,onOk:this.handleOK},r.a.createElement(E.a,{labelCol:{span:8},wrapperCol:{span:16}},r.a.createElement(E.a.Item,{label:"Groupd ID:"},this.props.groupID),r.a.createElement(E.a.Item,{label:"Relate ID:"},this.props.relateID),r.a.createElement(E.a.Item,{label:"Item Name:"},r.a.createElement(w.a,{onChange:function(t){e.setState({groupName:t.target.value})}})),r.a.createElement(E.a.Item,{label:"Config:"},r.a.createElement(w.a.TextArea,{onChange:function(t){e.setState({config:t.target.value})},autoSize:{minRows:2}})),r.a.createElement(E.a.Item,{label:"content:"},r.a.createElement(w.a.TextArea,{onChange:function(t){e.setState({content:t.target.value})},autoSize:{minRows:3}})),r.a.createElement(E.a.Item,{label:"mode:"},r.a.createElement(w.a,{onChange:function(t){e.setState({modeID:t.target.value})}}))))}}]),t}(r.a.Component);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={data:[],pagination:{pageSize:20}},a.url="https://golang.wall-e.club/admin/list",a.itemUrl="https://golang.wall-e.club/admin/item",a.editLayer=void 0,a.onRef=function(e){a.editLayer=e},a.handleCreate=function(){a.editLayer.show()},a.fetchData=function(){var e=a.props.match.params,t=e.gid,n=e.rid,r=a.url;t&&(r+="/"+t),t&&n&&(r+="/"+n),j.a.get(r).then(function(e){a.setState({data:e.data,pagination:P({},a.state.pagination,{total:e.data.length})})})},a.handleDelete=function(e){b.a.confirm({title:"\u786e\u5b9a\u8981\u5220\u9664",content:"ID: "+e.id+", Name: "+e.name,onOk:function(){j.a.delete(a.itemUrl+"/"+e.id).then(function(e){a.fetchData()})}})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.gid,a=e.rid;this.setState({gid:t,rid:a}),this.fetchData()}},{key:"render",value:function(){var e=this,t=this.props.match.params,a=t.gid,n=t.rid;return r.a.createElement("div",null,r.a.createElement("h3",null,"Test item! ",a," ",n," | ",this.state.gid," ",this.state.rid),r.a.createElement(O.a,{onClick:this.handleCreate},"\u65b0\u589e"),r.a.createElement(S,{ref:this.onRef,groupID:a,relateID:n,refresh:this.fetchData}),r.a.createElement(v.b,{size:"small",dataSource:this.state.data,renderItem:function(t){return r.a.createElement(v.b.Item,{actions:[r.a.createElement(s.b,{to:"/list/"+t.group_id+"/"+t.id,key:"list-loadmore-edit"},"view"),r.a.createElement("a",{key:"list-loadmore-edit"},"edit"),r.a.createElement("a",{key:"list-loadmore-del",onClick:function(a){e.handleDelete(t)}},"delete")]},t.name)},pagination:this.state.pagination}))}}]),t}(r.a.Component),R=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.tsx")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))},A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:R}),r.a.createElement(u.a,{exact:!0,path:"/list",component:I}),r.a.createElement(u.a,{exact:!0,path:"/list/:gid",component:x}),r.a.createElement(u.a,{exact:!0,path:"/list/:gid/:rid",component:Object(u.f)(x)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(359).config(),i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,1,2]]]);
//# sourceMappingURL=main.02968798.chunk.js.map