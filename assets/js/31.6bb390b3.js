(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{304:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"session-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-cookie"}},[s._v("#")]),s._v(" session-cookie")]),s._v(" "),t("h2",{attrs:{id:"cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[s._v("#")]),s._v(" Cookie")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("需要理解http协议是无状态的")]),s._v(" "),t("ul",[t("li",[s._v("每次请求是独立的，请求中不能直接体现状态信息")]),s._v(" "),t("li",[s._v("在一次会话中我们希望服务器与客户端认识彼此")])])]),s._v(" "),t("li",[t("p",[s._v("internet 中 Cokie 指的是小量的数据信息， 有web服务器创建存储在客户机上面")])]),s._v(" "),t("li",[t("p",[s._v("网站通过为了辨别用户身份，需要进行session跟踪")])]),s._v(" "),t("li",[t("p",[s._v("把这个能跟踪的数据存储在客户端，就能当做钥匙让服务器知道是谁的请求，通常cookie是加密后的")])])]),s._v(" "),t("h2",{attrs:{id:"cookie-的机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的机制"}},[s._v("#")]),s._v(" Cookie 的机制")]),s._v(" "),t("ul",[t("li",[s._v("cookie 工作流程\n"),t("ul",[t("li",[s._v("服务器验证等操作成功后创建cookie")]),s._v(" "),t("li",[s._v("服务器将cookie 发送给客户端 user-agent(一般指浏览器或app)")]),s._v(" "),t("li",[s._v("浏览器将 cookie 的 key/value存储到用户本地")]),s._v(" "),t("li",[s._v("以后浏览器就可以携带cookie，来证明自己是谁")])])]),s._v(" "),t("li",[s._v("特点\n"),t("ul",[t("li",[s._v("浏览器请求一个站点时会自动把该站点的cookie一并发送给服务器")]),s._v(" "),t("li",[s._v("服务端设置cookie并加密， 可以验证客户端是否更改过cookie")]),s._v(" "),t("li",[s._v("cookie针对的是单域名，不用域名之间独立")]),s._v(" "),t("li",[s._v("cookie 可以配置过期时间，过期的自动被删除")])])])]),s._v(" "),t("h2",{attrs:{id:"golang操作cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang操作cookie"}},[s._v("#")]),s._v(" golang操作cookie 💯")]),s._v(" "),t("ul",[t("li",[s._v("标准库net/http中定义了Cookie，\n"),t("ul",[t("li",[s._v("表示 http响应里面的 "),t("code",[s._v("Set-Cookie")]),s._v(" 参数")]),s._v(" "),t("li",[s._v("或者是 http请求里面的 "),t("code",[s._v("Cookie")]),s._v(" 参数它")])])])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Cookie "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Name       "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Value      "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Path       "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Domain     "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Expires    time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Time\n    RawExpires "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MaxAge=0表示未设置Max-Age属性")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// MaxAge<0表示立刻删除该cookie，等价于"Max-Age: 0"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MaxAge>0表示存在Max-Age属性，单位是秒")]),s._v("\n    MaxAge   "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n    Secure   "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n    HttpOnly "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n    Raw      "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    Unparsed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 未解析的“属性-值”对的原始文本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"go标准库设置cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go标准库设置cookie"}},[s._v("#")]),s._v(" go标准库设置Cookie")]),s._v(" "),t("ul",[t("li",[s._v("net/http中提供了如下SetCookie函数，它在w的头域中添加Set-Cookie头，该HTTP头的值为cookie。")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetCookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("w ResponseWriter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cookie "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cookie"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("也可以通过 Request 对象来设置Cookie")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddCookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cookie"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"go标准库获取cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go标准库获取cookie"}},[s._v("#")]),s._v(" go标准库获取Cookie")]),s._v(" "),t("ul",[t("li",[s._v("通过 Request 对象获 Cookie")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析并返回该请求的所有Cookie")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Cookies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("Cookie\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取名字为name的Cookie, 没找到则会返回 nil, ErrNoCookie")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Requset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Cookie"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"gin框架中cookie的操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gin框架中cookie的操作"}},[s._v("#")]),s._v(" gin框架中Cookie的操作 💯")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/withcookie"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取Cookie")]),s._v("\n        cookie"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cookie_gin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            cookie "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"notSet"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这一串设置一个cookie就挺突然地")]),s._v("\n            c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetCookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gin_cookie"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n## Session相关\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" session 由来\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 思考一下，如果有很多信息存储在cookie中，每次访问都要携带"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("实际上cookie限制最长"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("字节了\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 而且cookie信息被篡改怎么办，客户端说自己是张三你就是张三吗？\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 这种情况下能存储更多信息Session并且存储在服务端\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Session工作流程：\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 为每个用户创建特定存储信息的session，并且每个用户的session有其唯一 ID\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" session 是存储在服务器的一个数据结构，用来跟踪用户状态，可以保存在集群、数据库、文件中\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 唯一 ID 通常是 Session ID "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 会写入用户的Cookie中\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 服务端将带有session id的cookie发送给客户端\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 使用加密技术确保cookie没有被修改过（保证安全）\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" cookie中仅含有session_id 就可以实现功能了（提高网络性能）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);