(self.webpackChunktoy=self.webpackChunktoy||[]).push([[9782,7928,6276,7387,9238],{514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(9713),a=n.n(r),o=n(3038),l=n.n(o),c=n(7294),i=n(5697),m=n.n(i),u=n(9502),s=n(7428),d=n(3944),f=n(4210),p=n(1382),g=n(5779),y=n(8222),v=n(7049),h=n(8835),E=n(5498),I=n(7359),Z=n(7387),b=(n(6946),n(7928)),j=n(438),k=n(8316);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=u.Z.Option,w=s.Z.TabPane,A={0:"请先先进行登录",1:"已登录",2:"登录态过期"},O=["秒","分","时","日"],D=function(e){return e.map((function(e,t){return c.createElement(P,{key:t,value:e},e)}))};function F(e,t){for(var n=[],r=0;r<t;r++)n.push(Z.deviceApi.getGenerateId(e));return new Promise((function(e){Promise.all(n).then((function(t){e(t.map((function(e){return e.data})))}))}))}const C=function(){var e=d.Z.useForm(),t=l()(e,1)[0],n=(0,c.useState)(""),r=l()(n,2),a=r[0],o=r[1],i=(0,c.useState)({}),m=l()(i,2),u=m[0],h=m[1],E=(0,c.useState)(0),j=l()(E,2),k=j[0],T=j[1],S=(0,c.useState)(!1),P=l()(S,2),O=P[0],D=P[1];function F(){Z.deviceApi.getBaseTerminals().then((function(e){var t=e.data;h(t)})).catch((function(e){T(0),f.ZP.error(e.message)}))}return(0,c.useEffect)((function(){I.default.getToken()&&(T(1),F())}),[]),c.createElement(p.Z,{spinning:O},c.createElement("div",{className:b.default.wrap},c.createElement(d.Z,{form:t,onFinish:function(e){I.default.setToken(e.token),T(1),o(e.projectId),I.default.getToken()&&F()},layout:"inline"},c.createElement(d.Z.Item,{label:"token",name:"token",rules:[{required:!0,message:"token"}]},c.createElement(g.Z,{style:{width:300},placeholder:"token"})),c.createElement(d.Z.Item,{label:"项目ID",name:"projectId",rules:[{required:!0,message:"请输入projectId"}]},c.createElement(g.Z,{placeholder:"项目ID"})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"设置配置项")),c.createElement(d.Z.Item,null,"当前登录状态: ",c.createElement("strong",{style:{color:1===k?"black":"red"}},A[k])),c.createElement(d.Z.Item,null,"当前项目ID: ",c.createElement("strong",{style:{color:a?"black":"red"}},a||"需设置项目id"))),c.createElement(v.Z,null),c.createElement(s.Z,{defaultActiveKey:"1"},c.createElement(w,{tab:"添加终端",key:"1"},c.createElement(q,{setLoading:D,projectId:a,baseTerminals:u})),c.createElement(w,{tab:"添加传感器",key:"2"},c.createElement(x,{setLoading:D,projectId:a})),c.createElement(w,{tab:"添加测点",key:"3"},c.createElement(M,{setLoading:D,projectId:a})))))};function q(e){var t=e.setLoading,n=e.projectId,r=e.baseTerminals,a=d.Z.useForm(),o=l()(a,1)[0],i=(0,c.useState)({factory:[],device:[],model:[]}),m=l()(i,2),s=m[0],p=m[1],I=(0,c.useState)({params:[],overView:[]}),b=l()(I,2),j=b[0],k=b[1];function T(e,t){if("factory"===e&&(o.resetFields(["device","model"]),p((function(e){return S(S({},e),{},{device:Object.keys(r[t])})}))),"device"===e){o.resetFields(["model"]);var n=o.getFieldValue("factory");p((function(e){return S(S({},e),{},{model:Object.keys(r[n][t])})}))}}function w(e){t(!0);var a=e.factory,o=e.device,l=e.model,c=e.collectInterval,i=e.number,m=e.frequencyUnit,u=r[a][o][l],s=[],d=[];return new Promise((function(e){F("terminal",i).then((function(r){r.forEach((function(e){s.push({baseTerminalId:u,collectInterval:c,customName:o,frequencyUnit:m,projectId:n,terminalId:e}),d.push({factory:a,device:o,model:l,terminalId:e,collectInterval:c,frequencyUnit:m})})),t(!1),e({params:s,overView:d})}))}))}(0,c.useEffect)((function(){Object.keys(r).length>0&&p((function(e){return S(S({},e),{},{factory:Object.keys(r)})}))}),[r]);var A={width:160};return c.createElement("div",null,c.createElement(d.Z,{form:o,onFinish:function(e){t(!0),new Promise((function(t){j.params.length>0?t(j.params):w(e).then((function(e){t(e.params)}))})).then((function(e){return Z.deviceApi.addTerminals(e).then((function(){t(!1),f.ZP.success("操作成功")}))})).catch((function(e){t(!1),f.ZP.error(e.message)}))},layout:"inline"},c.createElement(d.Z.Item,{label:"设备厂家",name:"factory",rules:[{required:!0,message:"请选择设备厂家"}]},c.createElement(u.Z,{style:A,onSelect:function(e){return T("factory",e)},placeholder:"请选择设备厂家"},D(s.factory))),c.createElement(d.Z.Item,{label:"设备名称",name:"device",rules:[{required:!0,message:"请选择设备名称"}]},c.createElement(u.Z,{style:A,onSelect:function(e){return T("device",e)},placeholder:"请选择设备名称"},D(s.device))),c.createElement(d.Z.Item,{label:"设备型号",name:"model",rules:[{required:!0,message:"请选择设备型号"}]},c.createElement(u.Z,{style:A,placeholder:"请选择设备型号"},D(s.model))),c.createElement(d.Z.Item,{label:"采集间隔",name:"collectInterval",initialValue:10,rules:[{pattern:/^\d*$/g,message:"请输入整数"},{required:!0,message:"请输入采集间隔!"}]},c.createElement(g.Z,{addonAfter:c.createElement(d.Z.Item,{name:"frequencyUnit",initialValue:1,noStyle:!0},c.createElement(u.Z,{style:{width:60}},O.map((function(e,t){return c.createElement(P,{key:t,value:t},e)})))),style:A})),c.createElement(d.Z.Item,{label:"数量",name:"number"},c.createElement(h.Z,{style:A,min:1,max:20})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"添加终端")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){o.validateFields().then((function(e){w(e).then((function(e){k(e)})).catch((function(){t(!1)}))}))},type:"primary"},"预览")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){o.resetFields(),p((function(e){return S(S({},e),{},{device:[],model:[]})})),k({params:[],overView:[]})},danger:!0,type:"primary"},"重置"))),c.createElement(v.Z,null),c.createElement(E.Z,{rowKey:"terminalId",size:"small",pagination:!1,columns:[{title:"设备厂家",dataIndex:"factory"},{title:"设备名称",dataIndex:"device"},{title:"设备型号",dataIndex:"model"},{title:"设备编号",dataIndex:"terminalId"},{title:"采集间隔",render:function(e,t){var n=t.collectInterval,r=t.frequencyUnit;return"".concat(n," ").concat(O[r])}}],dataSource:j.overView}))}function x(e){var t=e.projectId,n=e.setLoading,r=d.Z.useForm(),a=l()(r,1)[0],o=d.Z.useForm(),i=l()(o,1)[0],m=(0,c.useState)(""),s=l()(m,2),p=s[0],I=s[1],b=(0,c.useState)({}),j=l()(b,2),k=j[0],T=j[1],P=(0,c.useState)({factory:[],device:[],model:[]}),w=l()(P,2),A=w[0],O=w[1],C=(0,c.useState)({params:[],overView:[]}),q=l()(C,2),x=q[0],M=q[1];function B(e){var n=e.factory,r=e.device,a=e.model,o=e.number,l=e.terminalChannel,c=e.sensorAddr,i=e.timingFactor,m=k[n][r][a],u=[],s=[];return new Promise((function(e){F("sensor",o).then((function(o){o.forEach((function(e){var o,d;u.push({baseSensorId:m,customName:r,terminalId:p,projectId:t,sensorId:e,sensorAddr:(o=c,d=o,(d=Number(d).toString(16).toLocaleUpperCase()).length%2==1&&(d="0".concat(d)),d),terminalChannel:l,timingFactor:i}),s.push({factory:n,device:r,model:a,sensorId:e,terminalChannel:l,sensorAddr:c,timingFactor:i})})),e({params:u,overView:s})}))}))}function N(e,t){if("factory"===e&&(a.resetFields(["device","model"]),O((function(e){return S(S({},e),{},{device:Object.keys(k[t])})}))),"device"===e){a.resetFields(["model"]);var n=a.getFieldValue("factory");O((function(e){return S(S({},e),{},{model:Object.keys(k[n][t])})}))}}var V={width:160};return c.createElement("div",null,c.createElement(d.Z,{form:i,onFinish:function(e){var t,n=e.terminalId;I(n),t=n,Z.deviceApi.getTerminalDetail(t).then((function(e){var t;t=e.data.baseTerminalId,Z.deviceApi.getBaseSensor(t).then((function(e){var t=e.data;O((function(e){return S(S({},e),{},{factory:Object.keys(t)})})),T(t)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},layout:"inline"},c.createElement(d.Z.Item,{label:"终端编号",name:"terminalId",rules:[{required:!0,message:"请输入projectId"}]},c.createElement(g.Z,{placeholder:"终端编号"})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"设置配置项")),c.createElement(d.Z.Item,null,"当前终端编号:",c.createElement("strong",{style:{color:p?"black":"red"}},p||"需设置终端编号"))),c.createElement(v.Z,null),c.createElement(d.Z,{form:a,onFinish:function(e){n(!0),new Promise((function(t){x.params.length>0?t(x.params):B(e).then((function(e){t(e.params)}))})).then((function(e){return Z.deviceApi.addSensors(e).then((function(){n(!1),f.ZP.success("操作成功")}))})).catch((function(e){n(!1),f.ZP.error(e.message)}))},layout:"inline"},c.createElement(d.Z.Item,{label:"设备厂家",name:"factory",rules:[{required:!0,message:"请选择设备厂家"}]},c.createElement(u.Z,{style:V,onSelect:function(e){return N("factory",e)},placeholder:"请选择设备厂家"},D(A.factory))),c.createElement(d.Z.Item,{label:"设备名称",name:"device",rules:[{required:!0,message:"请选择设备名称"}]},c.createElement(u.Z,{style:V,onSelect:function(e){return N("device",e)},placeholder:"请选择设备名称"},D(A.device))),c.createElement(d.Z.Item,{label:"设备型号",name:"model",rules:[{required:!0,message:"请选择设备型号"}]},c.createElement(u.Z,{style:V,placeholder:"请选择设备型号"},D(A.model))),c.createElement(v.Z,null),c.createElement(d.Z.Item,{label:"通道号",name:"terminalChannel",rules:[{required:!0,message:"请输入通道号"},{pattern:/^[0-9]{1,2}$/g,message:"请输入长度小于2的整数"}],initialValue:1},c.createElement(g.Z,{placeholder:"请输入通道号"})),c.createElement(d.Z.Item,{label:"传感器地址",name:"sensorAddr",rules:[{pattern:/^[0-9]+$/g,message:"请输入长度小于2的整数"}],initialValue:1},c.createElement(g.Z,{style:V,placeholder:"示例:1234"})),c.createElement(d.Z.Item,{label:"标定系数",name:"timingFactor",rules:[{required:!0,message:"请输入标定系数"},{pattern:/^([0-9]$)|(^[0-9]\.[0-9]{1,8})$/g,message:"请输入小于10的数字"}],initialValue:1},c.createElement(g.Z,{style:V,placeholder:"请输入标定系数"})),c.createElement(d.Z.Item,{label:"数量",name:"number"},c.createElement(h.Z,{style:V,min:1,max:20})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"添加传感器")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){a.validateFields().then((function(e){n(!0),B(e).then((function(e){M(e),n(!1)})).catch((function(){n(!1)}))}))},type:"primary"},"预览")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){a.resetFields(),M({params:[],overView:[]}),O((function(e){return S(S({},e),{},{device:[],model:[]})}))},danger:!0,type:"primary"},"重置"))),c.createElement(v.Z,null),c.createElement(E.Z,{rowKey:"sensorId",size:"small",pagination:!1,columns:[{title:"设备厂家",dataIndex:"factory"},{title:"设备名称",dataIndex:"device"},{title:"设备型号",dataIndex:"model"},{title:"设备编号",dataIndex:"sensorId"},{title:"通道号",dataIndex:"terminalChannel"},{title:"传感器地址",dataIndex:"sensorAddr"},{title:"传感器标定系数",dataIndex:"timingFactor"}],dataSource:x.overView}))}function M(e){var t=e.projectId,n=e.setLoading,r=d.Z.useForm(),a=l()(r,1)[0],o=(0,c.useState)([]),i=l()(o,2),m=i[0],s=i[1],p=(0,c.useState)([]),h=l()(p,2),E=h[0],I=h[1],b=(0,c.useState)([]),T=l()(b,2),S=T[0],w=T[1],A=(0,k.debounce)((function(e){var t=e.split(",");s(t)}),500);(0,c.useEffect)((function(){t?Z.monitorItemPoint.getMonitorItems(t).then((function(e){var t=e.data;I(t)})).catch((function(e){console.log(e)})):f.ZP.error("请设置项目id")}),[t]);var O={width:160};return c.createElement("div",null,c.createElement("div",null,c.createElement("div",null,c.createElement("strong",null,"方式一:")," 读取",c.createElement("strong",{style:{color:"red"}},"Excel表格第一行"),"的数据作为测点名称 ",c.createElement("br",null),c.createElement(j.default,{onChange:function(e){e[0]&&s(e[0])}})),c.createElement(v.Z,null),c.createElement("strong",null,"方式二:")," 手动输入,各测点名称用逗号分隔(例: 测点名1,测点名2,测点名3)",c.createElement(g.Z,{onChange:function(e){return A(e.target.value)}}),c.createElement(v.Z,null),c.createElement("div",{style:{padding:24,backgroundColor:"#fff"}},c.createElement("strong",{style:{color:"red"}},"将添加的测点名称:")," ",m.join(","))),c.createElement(v.Z,null),c.createElement(d.Z,{form:a,onFinish:function(e){if(m.length<1)f.ZP.error("请录入测点");else{var r=e.collectionType,a=e.groupName,o=e.monitorItemId,c=l()(a,2);!function(e){var r=e.monitorItemId,a=e.groupId,o=e.groupName,l=e.collectionType;n(!0),new Promise((function(e,n){Z.monitorItemPoint.getSensorByMonitorItem({projectId:t,monitorItemId:r}).then((function(c){var i=c.data;i.length<m.length&&n(new Error("设备数少于测点数;设备数为".concat(i.length,";要添加的测点数为").concat(m.length,";")));var u=[];m.forEach((function(e,n){var c=JSON.stringify([{deviceId:i[n].sensorId}]),m=new FormData;m.append("pointName",e),m.append("groupId",a),m.append("groupName",o),m.append("monitorItem",r),m.append("collectionType",l),m.append("projectId",t),m.append("deviceVOs",c),u.push(Z.monitorItemPoint.addPoint(m))})),e(u)})).catch((function(e){n(e)}))})).then((function(e){return Promise.all(e).then((function(){f.ZP.success("操作成功"),n(!1)}))})).catch((function(e){f.ZP.error(e.message),n(!1)}))}({monitorItemId:o,groupName:c[0],groupId:c[1],collectionType:r})}},layout:"inline"},c.createElement(d.Z.Item,{label:"监测测项",name:"monitorItemId",rules:[{required:!0,message:"请选择监测测项"}]},c.createElement(u.Z,{onSelect:function(e){return n=e,void Z.monitorItemPoint.getGroupNameByMonitorItem({projectId:t,itemId:n}).then((function(e){var t=e.data;w(t)})).catch((function(e){console.log(e)}));var n},style:O,placeholder:"请选择监测测项"},E.map((function(e){var t=e.itemName,n=e.monitorItemId;return c.createElement(P,{key:n,value:n},t)})))),c.createElement(d.Z.Item,{label:"数据采集方式",name:"collectionType",rules:[{required:!0,message:"请选择数据采集方式"}],initialValue:"设备采集"},c.createElement(u.Z,{style:O,placeholder:"请选择数据采集方式"},c.createElement(P,{value:"设备采集"},"设备采集"),"))")),c.createElement(d.Z.Item,{label:"分组名称",name:"groupName",rules:[{required:!0,message:"请选择分组"}]},c.createElement(u.Z,{style:O,placeholder:"请选择分组"},S.map((function(e){var t=e.mgId,n=e.groupName;return c.createElement(P,{key:t,value:[n,t]},n)})))),c.createElement(v.Z,null),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"添加测点")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){},type:"primary"},"预览")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){},danger:!0,type:"primary"},"重置"))))}q.propTypes={setLoading:m().bool,projectId:m().string,baseTerminals:m().object},x.propTypes={setLoading:m().bool,projectId:m().string},M.propTypes={setLoading:m().bool,projectId:m().string}},438:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(7294),a=n(7869);const o=function(e){var t=e.onChange;return r.createElement("input",{type:"file",accept:".xlsx, .xls",onChange:function(e){var n=e.target.files,r=new FileReader;r.onload=function(e){try{var n=e.target.result,r=a.read(n,{type:"binary"}),o=[];for(var l in r.Sheets)if(r.Sheets.hasOwnProperty(l)){o=o.concat(a.utils.sheet_to_json(r.Sheets[l],{header:1}));break}t(o)}catch(e){return void console.log("文件类型不正确")}},r.readAsBinaryString(n[0])}})}},7387:(e,t,n)=>{"use strict";n.r(t),n.d(t,{accountLogin:()=>a,deviceApi:()=>o,monitorItemPoint:()=>l});var r=n(9238);function a(e){return r.login.post("/monitor/oauth/oauth/token",null,{params:e})}var o={getBaseTerminals:function(){return(0,r.default)({url:"/monitor/project/terminal/baseTerminals",method:"get"})},getGenerateId:function(e){return(0,r.default)({url:"/monitor/project/terminal/generate/usableNumber",method:"get",params:{deviceType:e}})},addTerminals:function(e){return(0,r.default)({url:"/monitor/project/terminal/addTerminals",method:"post",data:e})},getTerminalDetail:function(e){return(0,r.default)({url:"/monitor/project/terminal/detail",method:"get",params:{terminalId:e}})},getBaseSensor:function(e){return(0,r.default)({url:"/monitor/project/sensor/baseSensors",method:"get",params:{baseTerminalId:e}})},addSensors:function(e){return(0,r.default)({url:"/monitor/project/sensor/addSensors",method:"post",data:e})}},l={getMonitorItems:function(e){return(0,r.default)({url:"/monitor/project/v2/pointManage/item/".concat(e),method:"get"})},getGroupNameByMonitorItem:function(e){return(0,r.default)({url:"/monitor/project/v2/pointManage/groupName",method:"get",params:e})},getSensorByMonitorItem:function(e){return(0,r.default)({url:"/monitor/project/formula/sensorInfo",method:"get",params:e})},addPoint:function(e){return(0,r.default)({url:"/monitor/project/v2/pointManage/point",method:"post",data:e})}}},9238:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i,login:()=>m});var r=n(9669),a=n.n(r),o=n(7359),l={BASIC_AUTH_HEADER:"Basic dGVzdF9jbGllbnQ6c2NyaXQ=",API_BASE_URL:"http://gateway.zdjcyun.com"},c=a().create({baseURL:l.API_BASE_URL});c.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(o.default.getToken()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data,n=t.code,r=t.msg;if(console.log(n,r),"401"==="".concat(n))return Promise.reject(new Error("登录过期"));if("403"==="".concat(n))return Promise.reject(new Error("无权限访问"));if("200"!=="".concat(n)){var a=new Error(r||"请求错误");return a.response=e,Promise.reject(a)}return e.data}),(function(e){return Promise.reject(e)}));const i=c;var m=a().create({baseURL:l.API_BASE_URL,headers:{Authorization:l.BASIC_AUTH_HEADER}});m.interceptors.response.use((function(e){var t=e.data.code;return"401"==="".concat(t)?(o.default.removeToken(),Promise.reject(new Error("登录过期"))):e.data}),(function(e){return Promise.reject(e)}))},7359:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(4575),a=n.n(r),o=n(3913),l=n.n(o),c="zy_token";const i=function(){function e(){a()(this,e)}return l()(e,null,[{key:"getToken",value:function(){return sessionStorage.getItem(c)}},{key:"setToken",value:function(e){sessionStorage.setItem(c,e)}},{key:"removeToken",value:function(){sessionStorage.removeItem(c)}}]),e}()},8316:(e,t,n)=>{"use strict";n.r(t),n.d(t,{changeThemeColor:()=>s,formatDate:()=>d,renderTime:()=>p,getRemainingDate:()=>g,keyBy:()=>v,debounce:()=>h,throttle:()=>E});var r=n(319),a=n.n(r),o=n(7484),l=n.n(o),c=n(2997);l().extend(c);var i=n(5183);l().extend(i);var m=n(1869),u=n(423);function s(e){document.getElementById("theme").innerHTML=":root{--bgColor:".concat(e,";}")}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return l()(e).format(t)}l().extend(m),l().extend(u);var f=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];function p(){var e=l()(),t=[];return t[0]=e.format("YYYY"),t[1]=e.format("MM"),t[2]=e.format("DD"),t[3]=e.format("HH:mm:ss"),t[4]=f[e.get("day")],t}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=l()(),n=[{title:"周五",endDate:t.day(5)},{title:t.add(1,"month").format("MM 月"),endDate:t.endOf("month")},{title:t.add(1,"year").format("YYYY 年"),endDate:t.endOf("year")}];return[].concat(n,a()(e)).map((function(e){return y(e,t)}))}function y(e,t){var n=e.title,r=e.endDate;r instanceof l()||(r=l()(r));var a={};return a.remainingDays=r.diff(t,"day"),a.unit="days",0===a.remainingDays&&(a.remainingDays=r.diff(t,"hour"),a.unit="hours"),a.remainingDays<0&&(a.remainingDays="",a.unit="TIMEOUT"),a.title=n,a.endTime={week:f[r.get("day")],date:r.format("YYYY-MM-DD")},a}function v(e,t,n){var r={};return e.forEach((function(e){r[e[t]]||(r[e[t]]=n?e[n]:e)})),r}function h(e,t){var n=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){e.apply(void 0,a)}),t)}}function E(e,t){var n=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];n||(n=setTimeout((function(){e.apply(void 0,a),clearTimeout(n),n=null}),t))}}},9405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"",""]);const o=a},7928:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(3379),a=n.n(r),o=n(9405);a()(o.Z,{insert:"head",singleton:!1});const l=o.Z.locals||{}},3906:()=>{},2993:()=>{},791:()=>{}}]);