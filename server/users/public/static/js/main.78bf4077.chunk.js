(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{17:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(9),r=a.n(n),A=a(7),d=a(18),c=a(42),s=a.n(c);function u(e){return o.apply(this,arguments)}function o(){return(o=Object(d.a)(r.a.mark((function e(t){var a,n,d,c,u,o,l,i,f,E=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E.length>1&&void 0!==E[1]?E[1]:"GET",n=E.length>2?E[2]:void 0,d=E.length>3?E[3]:void 0,c=s.a.CancelToken,u=c.source(),e.prev=5,e.next=8,s()({url:"".concat("https://bs-testapp.herokuapp.com/api").concat(t),method:a,params:Object(A.a)({},d),cancelToken:u.token,data:n});case 8:if(o=e.sent,l=o.data,i=l.status,f=l.message,!i){e.next=12;break}return e.abrupt("return",{status:!0,data:o.data.data,message:f});case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(5),e.abrupt("return",{status:!1,message:e.t0.response?e.t0.response.data.message:e.t0.message,err:e.t0});case 17:case"end":return e.stop()}}),e,null,[[5,14]])})))).apply(this,arguments)}},19:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return A}));var n=a(29),r=function(e){e.status?n.a.success(e.message):n.a.error(e.message)},A=function(e,t,a){return 0===e.length?[]:e&&e.length&&e.filter((function(e){return e[t]===a}))}},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return A})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a(17),r=function(e){return Object(n.a)("/tasks/create","POST",e)},A=function(e){return Object(n.a)("/tasks/".concat(e._id),"PATCH",e)},d=function(e){return Object(n.a)("/tasks/".concat(e._id),"DELETE")},c=function(){return Object(n.a)("/tasks/all","GET")}},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return A})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a(17),r=function(e){return Object(n.a)("/users/create","POST",e)},A=function(e){return Object(n.a)("/users/".concat(e._id),"PATCH",e)},d=function(e){return Object(n.a)("/users/".concat(e._id),"DELETE")},c=function(){return Object(n.a)("/users/all","GET")}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return m}));var n=a(9),r=a.n(n),A=a(18),d=a(21),c=a(7),s=a(36),u=a(0),o=a(19),l=a(37),i=a(26),f=Object(s.a)((function(e,t){switch(t.type){case"ADD_NEW_TASK":return Object(c.a)(Object(c.a)({},e),{},{tasks:[].concat(Object(d.a)(e.tasks),[t.payload])});case"EDIT_A_TASK":return Object(c.a)(Object(c.a)({},e),{},{tasks:[].concat(Object(d.a)(e.tasks.filter((function(e){return e._id!==t.payload._id}))),[t.payload])});case"FETCH_TASKS_SUCCESFULLY":return t.payload;case"REMOVE_TASK":return Object(c.a)(Object(c.a)({},e),{},{tasks:Object(d.a)(e.tasks.filter((function(e){return e._id!==t.payload._id})))});default:return e}}),{addNewTask:function(e){return function(t){e({type:"ADD_NEW_TASK",payload:t.task})}},fetchAllTasks:function(e){return Object(A.a)(r.a.mark((function t(){var a,n,A,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object(l.a)(i.d),n=a.status,A=a.data,d=a.message,Object(u.useMemo)((function(){!n&&Object(o.b)({status:n,message:d}),A&&e({type:"FETCH_TASKS_SUCCESFULLY",payload:A})}),[A,n]);case 2:case"end":return t.stop()}}),t)})))},editATask:function(e){return function(t){e({type:"EDIT_A_TASK",payload:t.task})}},removeTaskFromTaskList:function(e){return function(t){e({type:"REMOVE_TASK",payload:t})}}},{tasks:[]}),E=f.Context,m=f.Provider},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return m}));var n=a(9),r=a.n(n),A=a(18),d=a(21),c=a(7),s=a(36),u=a(0),o=a(19),l=a(37),i=a(32),f=Object(s.a)((function(e,t){switch(t.type){case"ADD_NEW_USER":return Object(c.a)(Object(c.a)({},e),{},{users:[].concat(Object(d.a)(e.users),[t.payload])});case"EDIT_A_USER":return Object(c.a)(Object(c.a)({},e),{},{users:[].concat(Object(d.a)(e.users.filter((function(e){return e._id!==t.payload._id}))),[t.payload])});case"FETCH_USERS_SUCCESFULLY":return t.payload;case"REMOVE_USER":return Object(c.a)(Object(c.a)({},e),{},{users:Object(d.a)(e.users.filter((function(e){return e._id!==t.payload._id})))});default:return e}}),{editAUser:function(e){return function(t){e({type:"EDIT_A_USER",payload:t.user})}},addNewUser:function(e){return function(t){e({type:"ADD_NEW_USER",payload:t.user})}},fetchAllUsers:function(e){return Object(A.a)(r.a.mark((function t(){var a,n,A,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object(l.a)(i.d),n=a.status,A=a.data,d=a.message,Object(u.useMemo)((function(){!n&&Object(o.b)({status:n,message:d}),A&&e({type:"FETCH_USERS_SUCCESFULLY",payload:A})}),[A,n]);case 2:case"end":return t.stop()}}),t)})))},removeUserFromUsersList:function(e){return function(t){e({type:"REMOVE_USER",payload:t})}}},{users:[]}),E=f.Context,m=f.Provider},36:function(e,t,a){"use strict";var n=a(7),r=a(15),A=a(0),d=a.n(A);t.a=function(e,t,a){var c=Object(A.createContext)();return{Context:c,Provider:function(s){var u=s.children,o=Object(A.useReducer)(e,a),l=Object(r.a)(o,2),i=l[0],f=l[1],E=Object(A.useMemo)((function(){var e=function(e){var a={};for(var n in t)a[n]=t[n](e);return a}(f);return Object(n.a)({state:i},e)}),[i]);return d.a.createElement(c.Provider,{value:E},u)}}}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n=a(15),r=a(0),A=function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),A=a[0],d=a[1];return Object(r.useEffect)((function(){e().then((function(e){return d(e)}))}),[]),A}},59:function(e,t,a){e.exports=a.p+"static/media/completed.875af53a.png"},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAFiQAABYkBbWid+gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABufSURBVHic7Z15lB9Vlcc/6U7SkM4ChF0hUXaCbIJCEFFENgUFBBlAFEkcRR2HRUBARxDEZdTBcc4Rl1EWZZGgUQHZhn0RE0mAQCCEkAhqMAlJgOzp3/xxu0wn6e7fffWreq/eq/s5551OzvlV1b316nur6tV99w3AiJ0hwOjutjWwGTAS2GSdvx1AOzC8e7uO7m0BlgDLu/+9GFjd/f/5wILuv9m//wG8DMwGXuze1oiUAaENMFQMBnYBxgBvA3YERnW3TQPaBRIQZne354AngWnAdGBFQLsMBRYAqscQYF9gP2BvYDdgB2BQSKNysBIJCE8BjwOPAJOwJ4ZKYQEgPNsCByKC3x/YAxgY1KLyWAVMQYLBo8D9wEtBLao5FgD8MwQYCxzS3d4e1pzgvADc1d1uR8YgDE9YAPDDaOA44EjgAGQAzlifZcCDwK3ABGBOWHMMIz+jgC8gF3QX0LDm3KYBX0UGPQ2j8mwBnANMJrx4Umt/As4CNlf3hmF4oA15l78R+ewVWiipt1XAncDxpDtYakTAaOAyJCkmtCjq2l7q7oNR/XeV0Rc2COjO/sCZwLFIZl0VWIYMmM1BRPEKMA/J3Mva68BryB0UYCEiIpDrYKPufw8EhgFDkSzCLJNwJPL4vQ3y6XJbqjOYuQq4Gfge8nnRUGIBQMdAZBT/TOCdgWzoAmYhA2NZm4GI/u+BbNoKCQTbIwlLY7rbaOTVKASPIIHgZiSl2TByMxj4NJLz7vPRtgt4FrgaOAPYhzV5+zGQZTN+FvHhWfy/HswCxhNfBqVRAQYDn8Kf8FcDjwFfB45AHrtTYySSB3E5khK8Gn+BYBwWCAwFg5CLZRZ+LswfIaPZI304VzE2BU4AfoyfQPsC8EksEBh9cAgycaXMi3AmcAXwLmz8ZV3GIEk/kyi3D55Fgq5hALAncDflXXBTgS8BO/lyKAF2AS5AphaX1S93Arv7csioHpsid+NVFH9xvQpcidzpjdYYA3wD+bRZdD+tRgYpt/TmjRGcNuBzwCKKv5huBT5Cdb6Pp0QH8uh+G8XPrVgIfIZwny4NT+wGPEyxF89ryN1+V49+1J3tkaeCVym2Lx9CnjiMxBgEnIdkzBV1sczs3meKn+xiYTjyuXY6xfXrCiS4bODRD6NE9qfYRJSngZOpThqwIZmaH6PYQDAdqdJkRMpA5A5d1Ay9acCpmPCrTBtwFFKDsIg+X4k8DVjuQGTsgEwKKepOcDw2QBQTbcBHKe7J72FgO68eGLk5FRmYa7XT5yFPEIP9mm8UyCBkjGAurV8PbyAVnoyKMhS4ntY7einy2DfCr/lGiWwEfAvp21avj18AnX7NN5qxE8Wk8U5AprcaaTIa+A2tXydPIK+ZRgU4ita/B7+MJPAY9eAoWp+AtBipEWEEoh15VG8lK2wl8F3k9cGoF8OQwiGtpIJ3ISXJ7MuQZ4YCv6O1CD4V2Mu34Ubl2Bt5pG/lWpqIjQt4YytamzLahUwCsnx9I2MQMhW5laeBqcCbPdtdO3ZDVqHN20kvAu/xbLMRD2OB58l/fb2ETC83SuAwWpvB93Mkd9ww+mMEMkU473W2EHi/d6sT5yRkwC5PhywBPuHdYiN2Tid/3sAK4ET/JqfJePIXkJyNVKc1jDzsSf5XglVIEDFa4Azyi/93wMb+TTYSYziyxkCea7ALWUvCyMEF5D/pF2FFN43iGAB8hfw5J1/yb3LcfI18J3opUmraMMrgRPKPC1wSwN4ouZB8J3gecGAAe416sR/5ZxdeEMDeqPg8+U7sDGxyhuGPtyKVofJcq+cEsDcKxpHvHesBbLDP8M8mSBHRPGNU4wPYW2lOIt9o/x1YDrYRjk7gLtyv29XINW8gGX55knwmYvn8Rng2AH6L+/W7HHhvAHsrxRjyzeW/HivUaFSHduAq3K/jRdR4ebKtgTm4n7SfYfOvjerRjlybrtfzbEQLtWIo8GfcT9Z1mPiN6tKOXKOu1/WfqVFRmnbyFfOYiD32G9VnEPnqDk6gJtmr38D95NyJLdVkxMNg4Bbcr/MLQxjrk2Nw/9b/ADAkhLGG0QJDgAdxu9ZXA0eGMNYHOyLFElxOyDNYko8RLyNxX69wEbBLCGPLZCjudfvnAm8JYaxhFMh2uM8deBLYMISxZeG6Ys8SbGVWIx3eiSwt5qKBHwaxtATG4+Z4Fzal10iPY3BPd49+4ZEdcF+oM/mRUKO2fBU3LSwg4qXqBuK+RPdEavIt1KglbbjPG3gA0VJ0XIybozOQVVwNI2WGAdNw08b5QSxtgf1xm+G3BNgjiKWG4Z+dkcVFtfpYSkSfBjtwr5ZyWhBLDSMcH8VNI48SyTyYS3Fz7GdhzDSM4LiuQFT5cmK7IauiaB16AVuuy6gvw5CxL5dX5R2DWKqgDXgEvTOrsSq+hrEPUh1Iq5vbw5jZHNeKvpeHMdMwKsdFuGmncglCW+K2cu8UrJ6fYWQMwq1AzhwqVgz3J+iNXwnsFcZMw6gse+A2flaZJ+g9kZVQtYZ/J4yZRuR0kn5FKJfkueVUZEDwbvRGz6ZGtc+MlhmMLKc1izUDxw8ipeRTZDBuWYI3hTFzDR/GbfDi6DBmGhEyDLiX3q+jLuC8YJaVy4G4Vc0aG8ZMeRx7TmFg1iaEMdOIkE7gHppfU18OZWDJ/BK9ru4PZKPTPP+lwKgwZhqRoRV/ykFgS9zK5x3l28DBrHkv07TKjFgalcZV/CkHgXPQ+/8UkojnjX91MO4VYIRP44woySv+VIPAYOB59P5/xJdhg5Acfq1hZ/gyzIiWVsWfahA4Cb3vU/BUTOfTDkZNJ/1vt0ZrFCX+FIPAAGASet9LHwsYCLzoYJC3xxIjSooWf4pB4P3o/X6sbGNcihh4H5gwoqIs8acYBO5C7/ehZRriUuTzo2UaYkRN2eJPLQi8B73Pt5VlxFgHI57G7v5G7/gSf2pB4H50/nZRUv3AXykNaCCjl4axLnnFvwr4GO4ltFIKAoei9/d/ij74aPRVfmcSSfFCwyutiP/k7n20U+8g8Ed0vr5GwSX2L1MeuAGcWeSBjSQoQvwZdQ4Cx6H39eyiDjoQeFl50MVY1p+xNkWKP6OuQaAdfRLedApKDPqg8oAN4PtFHNBIhjLEn1HXIHAuej/3L+KAv1YerAvYqYgDGklQpvgz6hgENgZeR+fjj1o92Bbo65Td2urBjGTwIf6MOgaBK9H5t4gWi4e6TEm0tF8D/Io/o25BYB/0/n28lQNpSxXPx8p8G2HEn1G3IDAFnW935D3AW5QHaGCDf0ZY8WfUKQicic6vlcBmeQ5wnvIADWDv/H4YCVAF8WfUJQiMBJah82tcngM8ptz51BacMOKnSuLPqEsQmIDOJ+f1BEejL018fms+GBFTRfFn1CEInIDOH+fXgLOVO25g3/7rSpXFn5F6EOgE3kDnz2kuO9au9vNkAU4Y8RGD+DNSDwI3ofPlBu0OO9EPLlxckBNGPMQk/oyUg8CJ6PxYgMzracqRyh02kIVBjfoQo/gzUg0CQ9HfsN+l2eEVyp3NKtAJo/oMAx7AXTwrqU55uHbgF+QLAlUe7L4DnQ+Xanb2jHJnLU80MKIhBfFn5A0CXcARAezVcBY6HyY129G2yh01gOMLdsKoJimJPyNvEPhjCGMV7ILO/tU0qddxssOONi3eD6NipCj+jDxBoAt5564iM9H5sNZTzLqVe/dTHmwyMK8FY1NkAHAIcAnwbeBURECxMgyZ4q0aOOrBKuAUHD47BWI1EgBcGABsWIItRXCX8nf99qd2GaKv5zYzTbYGHmL98/QK1X1v7I+U7/wZhyHL1rv4NxdP6+/l4BR0Ptzf1w460Vf+PbwkJ2JkG/p//FpJXLUSTPxx3vhGo/NhGbBBbzs4SLmDLmQmktFc/LEFARN/320yMCSAvS7MQedLr6/65ys3frZMDyJiG9zWb19FtRdMiTnJR8uh5BP/FOIY9NYOan6mt42vV258dZkeRIKr+KseBEz88Ysf4HPofOo1h2eacuNeo0eNyCv+qgYBE38a4gf9+p3rLSPegb767z4lO1FlWhV/1YKAiT8d8YP05yqa+7aUdSYG7a7YqIF8O636QEhZFCX+qgQBE39a4s/QpvLv1nMjbQbg8z48qCBFiz90EDDxpyl+0A8ErpXK/3XlRhN9eFAxyhJ/qCBg4k9X/KAv5ntBz420xQUv8+FBhShb/L6DgIk/bfEDHIvO35/13EibAlyFgStfaJN81m2LkKQR1+3KThYaiiX5pC5+kHd7jc8P9tzoH8qN3uHDgwqQ986/CMmy6gTuzbF9WU8Cduevh/hB0nxX09zvudkGnYofZ20LT06EpFXxZ1QlCJj46yP+jFno/B8OsKvyx0up7kyooihK/Bmhg4CJv37iB5karDkHO4O+CGjqcwCKFn9GqCBg4q+n+AF+ju48HAwwXvnjOz064JuyxJ/hOwiY+OsrftB/1j8F9LMAf+rTA4+ULf4MX0HAxF9v8QN8Ft35+CLAfyp/fLlPDzzhS/wZZQcBE7+JH+DD6M7JdwH+V/njc3164AHf4s8oKwiY+E38GfuhOy/XAvxW+ePTfXpQMqHEn1F0EDDxm/h7sjO6czMRei9m2Vv7sE8PSiS0+DOKCgImfhP/umyF7vzcA/pCIAf59KAkqiL+jFaDgInfxN8bQ9Cdo8kALyh/vIdPD0qgldz+MsSfMRx4OIddK5Hl2fNsZ7n96aMp8DMD4CXFDxvI8kOxUrU7/7rkfRJwbXbnrw/zaH6u/g6yeIXmxL7Vq/nFUXXxZ5QdBEz89eJvND9fCwAWKn7YAN7s1fxiiEX8GWUFARN//fgLuuucJYofNoDNvZrfOrGJP6PoIGDiryeasb3XQVdFtAFs5NX81ohV/BlFBQETf315jubnbgnoA8DGXs3Pz8bIzMVYxZ+R9+tA1my0v95oPu8vB/0rQCzFQH5A/OLPaOUToYm/3syg+TlcAfpBwG28mp+PduBV0hB/hmsQMPEboFsodDHoPwNu59X8fGyB24XURRwZjtogYOI3MubS/Fy+AmklAnWiK4jYs92KLI1WdZoFARO/0RPNk/1s0KcC7+nV/Pzcj/uFFUsQGIqs/NLF2vb/FTg8oF0umPj9oDnH0yG9yUDvRv9lI8YgAFLI9fPI6i7HABuGNUeNid8PHejPq3qxiGN9etAi41n/LplaEIgNE78/tkZ3bu8DKQqg+fE4nx4UwOm4jwc0gD8giysYxWFJPn7Rrg50cxswX7nTTYq3s1R+CnwKeRJw4TDgN1gQKIpDkZuM6/mcChyCzGoz3NBqdZ5LABiZ05iQWBAIi4k/DNqs3QUuAWCznMaExoJAGEz84dha+TunJ4AYMgH7woKAX0z8YdFqdR7AEegGDJ4r3Ez/2MBg+diAX3iuRXfODwb94qDLSGNxUAsC5WHirwbaZLjtwG158C09OlEmFgSKx8RfHTTZvavpkfOinRD0Dl8eeMCCQHGY+KtDB7pM2Jd7bjRJsUGDeKrLaLEg0Dp5xT8VE38ZvA3d+X+o50Y3KTdKcYFQCwL5MfFXj+PR9cE1AG3dG2lH+Hct0tKKYJ8I85H3U98TwPuwT31loZ22/3TP/5yELmrMLMzM6mFPAnrszl9dfomuLz7Uc6PdlRutRr4apIoFgeaY+KvN0+j6Y/ueGw1Gt5ZYA9jXgxMhsSDQNyb+ajMM3bW7FKmfuRZPKTZsAJ8t2YkqYEFgfUz81ecgdH3yeG8bX6/c+OoyPagQFgTWYOKPg3PQ9cuPetv4POXGKcwJ0GJBwMQfE9eh65tP9bbxu5Ubd1Gvjq1zEDDxx8VsdP2zR28bb4h+IPDIEp2oInUMAib+uNgOXf+8AQzsayd/Uu4kxYzAZuQNArcTXxAw8cfHJ9H10YP97eT7yp1MKsODCKhDEDDxx8lV6PrpW/3t5F+UO1lNfTs75SBg4o8X7fv/Ef3tZBvlThrACSU4EQspBgETf7zsgq6vViCrS/WLNpXwxwU7ERspBQETf9yci66/HuprBz35nnJnLxboQKykEARM/PFzH7o+u1SzM22R0Aawd4FOxErMQcDEHz+bICtDa/rtYM0Oh6C/KL5WnB9RE2MQMPGngXYq/0JgkHandyl3Oq0gJ1IgpiBg4k+HX6Pru1+67PRM5U4b6CuQ1IEYgoCJPx1GoO/Lk1x2vA365bUvbN2PpKhyEDDxp8Un0PXfSvTrBf6TR5U7f7I1H5KkikHAxJ8et6Hrw//Ls3Pt3OIGsE8LTqRKlYKAiT89NkM/+v+ZPAcYjf414L9zu5E2VQgCJv40ORv94//meQ+inR04nx7LDBlrETIImPjTZRq6vvx9Kwc5S3mQBrIggdE7IYKAiT9dtMV7GrS4mtfmwHLlgW5r5UA1wGcQMPGnzTXo+vN1FJN/mjFBebAuYKdWD5Y4PoKAiT9tRqLv36uKOOAHlAdrAD8o4oCJU2YQMPGnz0Xo+3VsEQdsB+YoD/gGMjnB6J8ygoCJP306gL+i69en+9hHLi5THrSBDBwazSkyCJj468Fp6Pv280UeeBT6pIMX6KfqqLEWRQQBE389GID0maZvlwAbFW3ADcqDN4CPFX3whMmWJncV8G3A0Zj468Jh6Pv3J2UYsK+DAc/Ry+KDRp/kfRLI00z8cfIAuv7tAsaUZcTDSiMaSIVhQ4+PIGDijxOXKl23lGnI8Q6GPA20lWlMgpQZBEz88aKdmdtAWfYrLwOBWQ7G1Ll0eF7KCAIm/nhxycPpddnvohnvYNCzONQhM/5JkUHAxB8vbcAU9H3t5bV7EPKpT2tUod8ja0QRQcDEHzeno+/raXh85R7nYNgCLDswL60EARN/3AxFn/XXwPPr9iBgpoNx3/RpXGLkCQIm/vi5GH1/P0WAAXftcsQNJFlltG8DE8IlCJj44+dNyFRerb6OC2HkIGC6g5G/CWFkQmiCgIk/DX6FXleTkDThIHxQYWDP9qEwZibDOPqekzEZE38KHI6bpt4Xxsw13I7e2DnAsDBmJsNY4A5kqefsnF6CLOlmxM0Q3MbWbg5j5trsin6mYAP4bhgzk6MN6AxthFEo30SvoxXAjmHMXJ8r0Ru+Cnh7GDMNo7LsyZqnOk37rzBm9s4WyOqjWuOfwMqIG0ZGB6IJrX7mUsHcmjNwG7z4dhgzDaNyuDz6N4BTwpjZP23o5yw3kE9a7w1iqWFUh/2R12Ktbu4l4Ge/ZoxBv45AA3gRWeLYMOrIEGAGer0spUIDf31xCW6PM1eHMdMwgvMfuGnlK2HMdKMDtwzBBpLlZhh1w+Wb/xRgcBgz3dkPt9yApcDeQSw1jDC0oy8GuwzYPYyZ+XF9vJkJbBzEUsMIg/bT+fmhDGyFgbgVEW0Av8PqCBr14Uaaa+JhIq6wvR2wmAQHOgyjAMYgy+n1pYWFwA7BrCsIl+WMGsh70YlBLDUM/xwKzGd9HfwdeFdAuwrlWtyCwFLggCCWGoZ/NgG+gHwSvwrJqh0e1KKC2RD4M25BYB4JPP4YhiFsD7yKWxB4HityYRjJ8CHcF8J8CJv3bhjJcBluAaAB3M2a5bANw4iYdmAi7kHgt9gqQ4aRBBvituBh1iYgCUaGUVVOQJJ3lnW3+4Cjg1pUUbYCZuMeBH5OxJlRRtJcQd/X7WUB7aosu+L+ZaAB3IC9DhjV4gSaX7dHBLOuwrwft2KIWZuI1RU0qoNm3ssfgllXcY7Dbfpw1u5BFlE0jJAMQFcJa34oA2Pgk7jnCGR5AiMD2GsYGQOQ9PVm1+o/QhkYC5/DPQA0kIzBytdKM5LmPppfp78PZl1EnEm+IDCPhGZPGdFxNP1fn11YFWw1roVFs/YGcEwAew0D4FL6Fv+XAtoVJeeRLwh0Ad/AKgsZYTgcWTB3HvAK8thvd/6cnIEsIJInENwCbOTfZMMwimQ8+YPAc0jZJcMwIuYk3FYc6tkWA6f6N9lIgMouwVVH3ku+tOGsXQMM8261ERudwFeRT8vZDeRG7EmyEowh3wSirM0A9vFutRELB7BG+Ou2JUgBTyMwW+NeX7BnWw58GZtMZKyhA1miu9kqvfOxrNNKMBSpDZA3CDSAx4E9fRtuVI69gCfRXzf/HsZMY10GABeS/wtBA5mFeAkRLbpoFMYQ5K7vOhP1mhDGGn1zJK0NDjaAacDBvg03gvEBYBb5rpWrAthrNGEH3B7j+mrXAW/ybLvhjzcDN9HaNXKGd6sNFRsCP6T1ILAYOAd7LUiJocDF9L8On6b9jcRW7EmR44AFtB4IZiIJSJYMEi9twOnAX2n9eliIzTaNhm2BB2i90xvAZKRsmREXHwSmUMw18DC2TF10DATOR1epRdPuAg7y6oGRhyOBxyimz5cDF2BVqKNmF+ARirkgGsD9WEZY1RiAVNzNs9ZEX+0JLE8kGdqRgb0lFHeB/BEZb7C7Qzg6gNMQsRbVr0uBi7BB4CTZASnWUNTF0kDmJpyLrPFu+GEkkgT2N4rty3uw2pK14CPAHIq9eN4ArsQmG5XFAGQM5lqKG9fJ2itIVWr74lMjOoHLyV9noL/2BJIzvqk3b9Jlc+BsYDrF99MK4DtY5ahasyOSHZZnTYJmbTkyaekEJOAYOkYAn0BW0smzYIym3QLs5MkfIwL2Q0b4y7jYGsgA5ATgRGw1o97YBDgZ+DWyqm5Z/fAYcIgnn4wIOQp4ivIuwAZygd8JnIV8pqwrOwNfRBbVaDYXv9X2NHAs9p5vKGhDBgqLyiRr1mYhA4inAKM8+BeKtyKf7a4CXsTPuX0GqQlpn2sNZwYgK74UlVmmbX8BfoEslTaWOMcPhgHvRgbwrqP4ry7N2mQkiNv6EP1gj0N6DkWWLTsM/+etCylx/jgwtfvfM7rbcs+2rEsHMpC6MzKotiuwR/f/fYuvAdyNjOzbUtwKLAC4sxPwb8hjZejBvC7kzjoTeBl4CUmO+QswFymUsgiZ4rzEcd8dyMDcJsDG3X/fBGzT3UYh8+u3Jfzj9RIkP+D7SHEXQ4kFgPxshEw1HYfc7arOSuD1Hn8zulhzpx7R/e8OpGRW1XkW+Gl3WxDYFqPGvB24Aqka6/M9t45tKVKn/xDsBmZUjE7g48AdlJfAUse2EnmnPw1b3MWIhJHI68HtWDDI01YB9wKfBjZzO/WGUS1GInevGymmXFmq7VXgBiQfwuZReMDeofwzEEk7PgL5pLgX9f1WvQrJsbgH+Xz3IPK0ZHjCAkB4RiBr0h0AHAjsC2wQ1KLyWIIk6DyKPN4/ALwW0qC6YwGgenQgTwV7ISWp9gZ2I76gsBTJv38CmISI/gnkrm9UBAsAcTAQmTS0M1LVqGfbPKBdIIlHM3u0Z5BFWp5Hlm0zKowFgPgZhmTkbYlk6mV/N0cWsRiOvGYMZ+3CF8OQwAKSTpxlCnYh2YMLkQzCRd1tPpJp+Er337lIOTTXDEOjQvw/0h+ZGr4Xn5oAAAAASUVORK5CYII="},61:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB0VBMVEUAAAA1e/83d/83d/83d/83d/83d/82dv84d/8udP9AgP83d/83d/83d/82eP83gP84d/82dv8AAP83d/83dv83d/83d/83dv83d/84eP83eP83d/8AgP82d/83d/80ev84d/82d/82eP82d/85d/83eP82dv87dv82d/83dv83d/83dv83d/83d/83d/82eP85ef82d/82d/82ef80dv83d/83d/83dP83dv83df83d/83dv84d/84eP83d/9VVf83d/83d/83eP9AgP84dv83dv8zgP83d/83eP83dv83d/84dv85cf83d/82d/83d/83ev83d/83ef84d/82d/83d/81dv84eP82d/83d/83d/88eP85df82d/83d/83d/82eP8zd/83d/84eP82d/89ef82d/83d/83eP83d/82d/8zc/83d/82eP83dv9Jbf82eP83eP82ef81d/83d/83d/81eP82d/83d/84d/83d/83d/84d/83eP85eP83d/84dv83d/84eP87dv8wcP85eP8zev83d/83d/83d/84d/83eP83d/86dP82dv83d/9AgP84dv83d/83eP83d/82ef83dv84d/84df83d/8AAADhBrbOAAAAmXRSTlMAHX7I6frlt2kLBIf351kOvIgBx5nBmsb7s5X8AsXsLI6WwOothpsNjYxcxHTm41Uo+FomJ1jkLnkl9hxWgO4Dv8PCDFtUCr5TXb1SCaySTxedKomp9UNEdvnMET96tPFRD9Jk3BVLn6LZZxT+hH0HQtE5K+/NIl7VrjxvqpEkutP9oBoQSBmD8rtNM/MWNOgIbt1m9BOmbTJzhb9mAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QKCQosMGTGessAAANaSURBVHja7dv3VxNBEAfwUWpoEYgSpFhAIwZEBEVRrCgWQAQVRREbRcUKigqIKDbs3f1vJUTudu927+49buZ+cOfHPd5+vjO3ycsLFwD8WrY8JTUtPSMzRGBJKis7hyUrNy8IP7yCmZVfQO8XMr4i1AlCKxkLMoHNZ2wVZQKJT5pA6hMmUPhkCZQ+UYJwEU9Gi4UEq/ETiP2X5EE27QxsPlgTlFL7pAmkPmEChU+WIFwmOOVrzEtrhSvrcE5iaL3lVV9RaV7cIFzZiDGDWBmzVio3g03ClSoS3ynBZr992/xd7kJFjKD/BUg1g0waX5wBnyDDVz/Ok9HqGlWCKnN5C55fC1uVCYqN1Tr/fPH8lWybX6pPlyeojRqLuXj9J6pBOoPtJeZaHLH/RNXvEBI0WvpnbCeuD7DLlkDwm3ajzH8Pd6nBcg74+TPWjO5bT+Jewc/Yhzt/2V3gK+7PG3Fov6OvTkDlqxLQ+fIElL4sAa1vT+CTHzvg8PoTq1rwDx7C6L/F4U+F9z+k+WtfXYe1r33ta1/781WmfQTf6fsV7SP4R4L2W7Xv1U/Tvva1H5R/VPu8H9a+9rX/v/pF2kfwj2mf2D+ufY/+CQy/zfv3Dyj9l7YH2z90BNs/nAy4/84Kr/3j+HAq2P6hi/+3dje9D6f5bc+cJfc7hX1ZUw+xD+eYWIoZiH6hfz6kMC8J8Py289YAsrsg+r0X/PPhImPuCRB96GPuCTB9uMRcE6D6BeXGzv2KBJfF83fFVx+6zK0br0oToPYPcM3Y+joMCAnqBil8GDL2HgZZgsE6XB9uGJvfBEkCdP/WiHkEwJag6bYw/xSfz1+izM9C/cmny8QEDLl/gG5j+8WHXJUJUHwwn8a7s7ikSIDj380xgHvG4sB9Mh8eGECUe8BpdMzmY5y/RJlPWT38t/JoPPJ4hKp/gCcG0QEQejoxWc5kheZDrmEMTfVGmaKw5g/wjHmpaR8/f1lq3IsfyULzIeLOj7UsnVHXczd+5sVLTH92xplPa69cOuJUr5z0aG/fa1we4I0Kf/uueW4WW5+vVhleMznxHvf3cEZlfbBNfar2I429UJ94/HNxc88XQjxRXxfxb8PfR+l/mZ38YuJHPH/uZwD2QsV//f6D+DbrWn8B4clXI0kw6/cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMDlUMTA6NDQ6NDgrMDA6MDAnGCF5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTA5VDEwOjQ0OjQ4KzAwOjAwVkWZxQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACKFBMVEUAAAAAAP81d/83dv83d/83d/83d/83d/83d/83d/83d/85d/83eP83d/83dv85df9AgP82dv83dv9Jbf83d/82d/83d/83eP83d/83d/83d/83d/82d/81e/9VVf84eP82dv84d/83d/82dv83d/8udP83gP83d/84dv84d/82d/9AgP83d/83d/83d/85eP83dv83d/8zc/83d/85cf82d/81d/83d/82dv84d/84dv83eP83eP84d/83d/82dv82eP83dv8rgP83d/83d/83d/8zev89ef83d/81df85eP83d/85ef8zgP83d/83d/83dv84eP83d/8wcP83d/84dv83d/83d/83d/83d/84dv82d/84d/83d/83d/83d/82eP83d/83df85e/80dv83d/82df82eP83d/83d/83d/83d/82d/83eP81df84d/88eP82d/83d/83d/83d/84d/84eP83d/83d/82eP82ef84df85d/82eP82df83d/86df83d/84eP82eP83dv83d/84d/85cf82d/82dv80ev8zd/83d/82d/84d/83d/84eP83d/82d/83dv83ef8zZv82dv82d/83d/83eP83d/83dv83d/83d/83dv83d/83dv83d/83dv83eP8AgP82ef83d/83d/83d/83d/82d/86c/84dv83eP83eP86dP82d/81eP82dv82eP83d/83d/83d/8AAADJ9ObGAAAAtnRSTlMAAT6Ky+X6+eTIhzpGzMY/BIiZB7qympFcT9/dZx0DIGzh1V+wCw64Uq7OCNeh80hU5xTwCfgr0jTKKVNmheZ/UTgG9PKrGRXpMDHvKArb1oyz8RD8e/3ta/5bXqqtn95V1CUbJ+tMWdC2tMGpcxiJEZL1kPa8oL73hBMyLUI9wyO7gHV9gXISdlAsD+ONTftEyXqmSgWb6o/R2rWL2HCjXX7EsQImr5S9nksfTqKGFsUiY6Tuz9epp58AAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AoJCxgRkkfzVQAAA8pJREFUeNrtm2dXE0EUhhMEgoAaAQnShQAqRdQoikSKShUUQUJEASlKkSKCRhRsKDbsqIiKBQTsdX6fyZ0c2MjZ7GSZ+YL3frzzzn2fM7s7O9nMaDRKofVa5u3jS2RD57fcP0CxivoIXEEYYuUqQfb61Sz2jgjSi/APDmH1J2SNCIJQdn9CDPz9wzzxJ2Qt9wsQTgtHREZFy6v0MbHrqC4umr02U8TTusYEJWFiElWu5wywAapuTFZWJqSANJWvvzYNqm5i0aaDdDNfgC1QdKueRWvaBmKGwfIgtkPNDDZxBIhjuALsgJo72cRxIM5EgEXYBQfsynINM9QMz2KK3SDO/iebk5vHaO9l3OPZtMsae/flMtjnJ4lxd86kBUr+uYUi/QnxKXLvX1wi1p+Qwv3u/EvLRPsTcsDdFHnQKSoxBnGP8kPO4tny/hX09q88bFL5/LqNBHMVlLeUykqqQWA9IsLeEZF0CGpkBUeh/Zgof42GrmtrZdvroJ3ppa8u6sHguGw7vU3yxQE0gIGfbDtdSTSKA2gCg2bZdrqSOCEO4CQYtMi2t0J7mziAdjA4JdseSx+TLFH+HbR+vKygU0cngq5EEfbdp6l/T4W85oxztuztq+U9E589Z3MWP+8Gst9H/Muozu3wXugV7Z920f2FGhC8ILAMKt0qmZdE+vddVr5ZtfVXqsS4V7ayfjW4Cvo2tkU4S9C34DXmJ3YI9NeZ9YpBV1o3EAABEGDRAMM3DbdcM8X+5tsuCW29oeOOKICCu/bsiDRz7z4hugfSTJBdErHghc8JAL5SWKVrVvgW8lCSoKvOR4IAjJAOnE9Ew0ujRyLJAcljQQDlkH4ynxiFhE4iob88Fqw6EQABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEGCpADyFtHRj8DNHIlySGATJc0EAA1Z7dkwvyRgcOrMkkfzCnqhasIOb17/nYWW2cZdzCyaDpfmly571hhDbq/QFHZfM/oH/B+A16EeY9YoRCgWrmfV07+kEPwC68+ANs34A9GP8AOh2XcWdfHPR6HjgiZXbDme6n7mym71HBvR4ywuA3oPvPOjRBT0sw3z88+mpgSEPuhTBNSDvtTz8J/voFZjypNMH6EOmJxfvr68lKh6qYjoEZHzRR9amZoiKAdBopmk30jv7MWpUrXnep89fdM5CXz3sa/ImXKOd9ZzXXHSm8PRv6fd8/L595+c/063qCpp9+djbhtSeAW6a0HGwn/2h0t4R/T9/tfy2qvW2Wv6k1lSwu/0FWdWQv3gT4XEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMDlUMTE6MjQ6MTcrMDA6MDCsk0wyAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTA5VDExOjI0OjE3KzAwOjAw3c70jgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},65:function(e,t,a){e.exports=a(99)},70:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),A=a(16),d=a.n(A),c=a(15),s=a(40),u=a(5),o=a(102),l=a(103),i=a(104),f=a(106);var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"50px",width:"100%",textAlign:"center"}},"The page ",r.a.createElement("code",null,e.location.pathname)," could not be found."),r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{className:"m-auto",md:4},r.a.createElement(f.a,{onClick:function(){return e.history.goBack()},className:"btn-block",variant:"dark"},"Go Back")))))},m=a(105),g=(a(70),function(e){var t=e.showModal,a=e.setShowModal,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"pb-4 custom-modal",show:t.show,onHide:function(){return a({show:!1})}},r.a.createElement(m.a.Body,null,n)))}),B=(a(74),a(63)),v=a(59),w=a.n(v),P=a(60),D=a.n(P),h=(a(75),a(61)),b=a.n(h),M=a(62),O=a.n(M),p=function(e){var t=e.data,a=e.tableType,A=e.setShowModal,d=e.handleRemoveData,s=e.handleMarkingTasks,u=e.handleRowClick,o=t.state,l=t.description,f=t.name,E=Object(n.useState)(!1),m=Object(c.a)(E,2),g=m[0],v=m[1];return r.a.createElement(i.a,{md:12},r.a.createElement("div",{className:"data"},"tasks"===a&&r.a.createElement("span",null,r.a.createElement("img",{className:"task__status-icon",onClick:function(){return s(t,v)},src:"done"===o?w.a:D.a,alt:"Task Status Icon"})),r.a.createElement("div",{onClick:function(){return u(t,a)}},g?r.a.createElement(B.a,{animation:"border",size:"sm",role:"status","aria-hidden":!0,className:"align-baseline",variant:"primary"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(r.a.Fragment,null,"users"===a?r.a.createElement("p",null," ",f," "):r.a.createElement("p",null," ",l.length>60?"".concat(l.slice(0,59)," ..."):l," "))),r.a.createElement("span",null,r.a.createElement("img",{onClick:function(){return A({modalId:"users"===a?"USER_MODAL":"TASK_MODAL",data:{editData:t,edit:!0},show:!0})},src:b.a,className:"action-icon",alt:"Edit Icon"}),r.a.createElement("img",{onClick:function(){return d(t,v)},src:O.a,className:"action-icon",alt:"Delete Icon"}))))},C=a(9),y=a.n(C),R=a(18),k=a(19),I=a(26),T=a(32),j=function(){var e=Object(R.a)(y.a.mark((function e(t,a,n,r){var A;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure ?")){e.next=16;break}if(a(!0),"users"!==n){e.next=8;break}return e.next=5,Object(T.b)(t);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,Object(I.b)(t);case 10:e.t0=e.sent;case 11:return(A=e.t0)&&a(!1),A&&Object(k.b)(A),A.status&&r(t),e.abrupt("return",!0);case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(R.a)(y.a.mark((function e(t,a,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure ?")){e.next=9;break}return a(!0),e.next=4,Object(I.c)({_id:t._id,state:"done"===t.state?"todo":"done"});case 4:return(r=e.sent)&&r.status&&n(r.data),r&&a(!1),r&&Object(k.b)(r),e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),F=function(e){var t=e.setShowModal,a=e.tableType,n=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"text-center p-5"},r.a.createElement("span",{onClick:function(){return t({show:!0,modalId:"users"===a?"USER_MODAL":"TASK_MODAL",data:{user:n}})},className:"data-table-section__get-started"},"No ",a," yet ! Add ",a," here !")))},Y=function(e){var t=e.setShowModal,a=e.data,n=e.tableType,A=e.user,d=e.editData,c=e.removeData,s=Object(u.f)(),o=function(e,a){return"users"===a?s.push("/users/".concat(e._id)):t({modalId:"VIEW_TASK",show:!0,data:{task:e}})},i=function(e,t){return j(e,t,n,c)},f=function(e,t){return G(e,t,d)};return r.a.createElement("section",{className:"data-table-section "},r.a.createElement(l.a,null,a&&0===a.length?r.a.createElement(F,{setShowModal:t,tableType:n,user:A}):r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(p,{tableType:n,setShowModal:t,data:e,key:e._id,handleRowClick:o,handleMarkingTasks:f,handleRemoveData:i})})))))},K=(a(97),function(e){var t=e.pageTitle,a=e.setShowModal,n=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"page-header",md:"12"},r.a.createElement("h6",null," ",t),r.a.createElement(f.a,{onClick:function(){return a({show:!0,modalId:"users"===t?"USER_MODAL":"TASK_MODAL",data:{user:n}})},className:"btn-sm",variant:"dark"},"+ Add")))}),S=a(33),L=function(e){var t=e.setShowModal,a=e.match.params.userId,A=Object(n.useState)([]),d=Object(c.a)(A,2),s=d[0],u=d[1],f=Object(n.useContext)(S.a),E=f.state.tasks,m=f.fetchAllTasks,g=f.editATask,B=f.removeTaskFromTaskList;return m(),Object(n.useEffect)((function(){u(Object(k.a)(E,"user_id",a))}),[a,E]),r.a.createElement(o.a,null,r.a.createElement(l.a,{className:"p-3"},r.a.createElement(K,{setShowModal:t,pageTitle:"tasks",user:a}),r.a.createElement(i.a,null,r.a.createElement(Y,{data:s,tableType:"tasks",setShowModal:t,user:a,editData:g,removeData:B}))))},U=a(34),H=function(e){var t=e.setShowModal,a=Object(n.useContext)(U.a),A=a.state.users,d=a.fetchAllUsers,c=a.editAUser,s=a.removeUserFromUsersList;return d(),r.a.createElement(o.a,null,r.a.createElement(l.a,{className:"p-3"},r.a.createElement(K,{setShowModal:t,pageTitle:"users"}),r.a.createElement(i.a,null,r.a.createElement(Y,{data:A,tableType:"users",setShowModal:t,editData:c,removeData:s}))))};var x,N=function(e){return r.a.createElement("section",{style:{height:"400px"},className:" py-5 position-relative bg-white d-flex justify-content-center align-items-center"},r.a.createElement("div",null,r.a.createElement(B.a,{animation:"border",variant:"primary"})))},Q=a(24),J=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,109))})),z=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,110))})),X=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,111))})),Z=(x={},Object(Q.a)(x,"TASK_MODAL",(function(e,t){return r.a.createElement(J,{setShowModal:e,data:t})})),Object(Q.a)(x,"USER_MODAL",(function(e,t){return r.a.createElement(z,{setShowModal:e,data:t})})),Object(Q.a)(x,"VIEW_TASK",(function(e,t){return r.a.createElement(X,{setShowModal:e,data:t})})),x),W=function(e){var t=e.children;return r.a.createElement(U.b,null,r.a.createElement(S.b,null,t))};a(29).a.configure({autoClose:3e3,hideProgressBar:!0});var V=function(){var e=Object(n.useState)({modalId:" ",show:!1,data:{}}),t=Object(c.a)(e,2),a=t[0],A=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null,a.show&&r.a.createElement(g,{showModal:a,setShowModal:A},r.a.createElement(n.Suspense,{fallback:r.a.createElement(N,null)},Z[a.modalId](A,null===a||void 0===a?void 0:a.data))),r.a.createElement(s.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/users/:userId",render:function(e){return r.a.createElement(L,Object.assign({},e,{setShowModal:A}))}}),r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return r.a.createElement(H,{setShowModal:A})}}),r.a.createElement(u.a,{component:E})))))};a(98),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,2,3]]]);
//# sourceMappingURL=main.78bf4077.chunk.js.map