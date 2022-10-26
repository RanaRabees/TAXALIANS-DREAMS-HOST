(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        "+GZi": function(e, t, a) {},
        "+qGC": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return useGetConversationRatingMessage
            });
            var n = a("da4L"),
                r = a("TbSn"),
                i = a("ERkP"),
                c = a("0lfv");

            function useGetConversationRatingMessage(e) {
                return Object(i.useMemo)(function() {
                    if (e && e.length) {
                        var t = Object(r.a)(e);
                        if (!Object(c.m)(t)) {
                            if (Object(n.k)(t)) return t;
                            if (Object(n.j)(t)) {
                                var a = e[e.length - 2];
                                if (Object(n.k)(a)) return a
                            }
                        }
                    }
                    return null
                }, [e])
            }
        },
        "1b8i": function(e, t, a) {
            "use strict";
            var n = a("s8DI"),
                r = a("da4L"),
                i = a("ERkP");
            t.a = function useTimedMessages(e, t) {
                var a = Object(i.useState)(function() {
                        return e
                    }),
                    c = Object(n.a)(a, 2),
                    o = c[0],
                    s = c[1],
                    l = Object(i.useRef)(t),
                    u = Object(i.useRef)(null);
                return Object(i.useEffect)(function() {
                    if (t) {
                        if (e !== o) {
                            var a = o.length;
                            if (0 === e.length && a > 0) s([]);
                            else {
                                if (l.current !== t || a === e.length) return l.current = t, void s(e);
                                var n = function pushMessage() {
                                        return s(e.slice(0, a + 1))
                                    },
                                    i = e[a] || e[0];
                                if (!(Date.now() - i.createdAt > 6e4 || Object(r.h)(i) || Object(r.i)(i))) return u.current = window.setTimeout(function() {
                                        u.current = null, n()
                                    }, 600),
                                    function() {
                                        u.current && window.clearTimeout(u.current)
                                    };
                                n()
                            }
                        }
                    } else o.length > 0 && s([])
                }, [e, o, t]), o
            }
        },
        "2VrW": function(e, t, a) {},
        "7IKl": function(e, t, a) {
            "use strict";
            var n = a("ERkP"),
                r = a("Tr4L"),
                i = a("uDfI"),
                c = a("F8vJ");
            t.a = function useAgentName(e) {
                var t = Object(i.c)(function(e) {
                        return e.embed.configuration
                    }).team,
                    a = void 0 === t ? [] : t,
                    o = Object(r.a)().t;
                return Object(n.useMemo)(function() {
                    var t = a.find(function(t) {
                        return t.id === e
                    });
                    return t && !Object(c.a)(t.name) ? t.name : o("agent")
                }, [a, e, o])
            }
        },
        "8eKL": function(e, t, a) {
            "use strict";
            var n = a("mj2O"),
                r = a.n(n),
                i = a("7SM1"),
                c = a("s8DI"),
                o = a("O94r"),
                s = a.n(o),
                l = a("7IKl"),
                u = a("lE29"),
                d = a("ERkP"),
                f = a.n(d),
                m = a("Tr4L"),
                b = a("uDfI"),
                g = (a("I4Wp"), function AgentTypingIndicator() {
                    var e = Object(m.a)().t,
                        t = Object(u.a)().messageAuthorTheme,
                        a = Object(b.c)(function(e) {
                            return e.conversations.typingIndicators[e.conversations.activeConversation] || {}
                        }),
                        n = a.isTyping,
                        r = void 0 !== n && n,
                        i = a.userId,
                        c = Object(l.a)(i);
                    return r ? f.a.createElement("p", {
                        "aria-live": "polite",
                        style: t,
                        className: "agent-typing-indicator"
                    }, e("status.agentTyping", {
                        agent: c
                    })) : null
                }),
                v = a("HXmn"),
                p = a("NJA7"),
                h = a("fw6E"),
                O = a("K7i0"),
                j = a("+oIK"),
                E = a("+f1A"),
                w = a("0lfv"),
                y = (a("yAze"), function AgentRequestedOptions(e) {
                    var t = e.message,
                        a = t.attributes,
                        n = t.id,
                        o = t.conversationId,
                        s = Object(b.b)(),
                        l = Object(b.c)(function(e) {
                            return e.session
                        }).endUser,
                        u = Object(h.a)().conversationHistoryOpen,
                        m = Object(b.c)(function(e) {
                            return e.view
                        }).chatOpen,
                        g = Object(d.useState)(!m),
                        v = Object(c.a)(g, 2),
                        y = v[0],
                        A = v[1],
                        C = Object(b.c)(E.i),
                        k = function doSendMessage(e) {
                            var a = e.label;
                            return function() {
                                var e = Object(j.a)({
                                    message: a,
                                    activeConversation: o,
                                    authorId: l.id,
                                    attributes: {
                                        buttonClicked: !0,
                                        questionId: t.attributes.questionId,
                                        instanceId: C
                                    }
                                });
                                s(Object(O.n)({
                                    message: e
                                }))
                            }
                        };
                    Object(d.useLayoutEffect)(function() {
                        function _delayButtons() {
                            return (_delayButtons = Object(i.a)(r.a.mark(function _callee() {
                                return r.a.wrap(function _callee$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!m || y) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 3, Object(w.q)(500);
                                        case 3:
                                            A(!0);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee)
                            }))).apply(this, arguments)
                        }! function delayButtons() {
                            return _delayButtons.apply(this, arguments)
                        }()
                    }, [y, m]);
                    var N = y ? "visible" : "hidden";
                    return f.a.createElement("ul", {
                        className: "drift-widget-message-group drift-widget-message-group-type--END_USER drift-bot-buttons--set drift-bot-buttons--".concat(N)
                    }, a.buttons.map(function(e, a) {
                        return f.a.createElement("li", {
                            className: "drift-widget-button--list-item",
                            "aria-posinset": a + 1,
                            key: "bot-button-".concat(n, "-").concat(a)
                        }, f.a.createElement(p.a, {
                            onClick: k(e),
                            invertOnHover: !0,
                            disabled: u,
                            "aria-label": "".concat(e.label, " - Reply as a response to ").concat(t.attributes.preview),
                            forceFocus: m && y && 0 === a
                        }, e.label))
                    }))
                }),
                A = a("nfbA"),
                C = a("efbE"),
                k = a("rAc1"),
                N = a("l6A5"),
                T = function urlIdentity(e) {
                    return Object(k.a)(e)
                },
                S = (Object(N.a)(T, function(e) {
                    return C.k.get("/", {
                        params: {
                            url: encodeURI(e)
                        }
                    })
                }), Object(N.a)(T, function(e) {
                    return C.j.get("/", {
                        params: {
                            url: e,
                            iframe: 1,
                            omit_script: 1,
                            media: 1
                        }
                    })
                })),
                L = function Retry(e) {
                    var t = e.height,
                        a = void 0 === t ? 24 : t,
                        n = e.width,
                        r = void 0 === n ? 24 : n;
                    return f.a.createElement("svg", {
                        className: "drift-default-icon drift-default-icon--retry",
                        width: r,
                        height: a,
                        viewBox: "0 0 28 24"
                    }, f.a.createElement("path", {
                        d: "M27.82 19.074c-0.17 0.085-0.353 0.126-0.53 0.126-0.436 0-0.854-0.244-1.063-0.664l-0.994-2.010c-1.762 4.469-5.996 7.474-11.002 7.474-5.438 0-10.298-3.548-11.82-8.628-0.19-0.635 0.164-1.304 0.792-1.496 0.624-0.193 1.29 0.166 1.48 0.8 1.222 4.076 5.148 6.924 9.548 6.924 4.128 0 7.481-2.436 8.838-6.126l-2.372 1.199c-0.588 0.298-1.3 0.056-1.592-0.536s-0.055-1.313 0.53-1.609l4.748-2.401c0.589-0.296 1.301-0.055 1.594 0.538l2.374 4.8c0.294 0.593 0.055 1.314-0.53 1.61zM25.259 10.126c-0.626 0.191-1.291-0.167-1.481-0.802-1.223-4.076-5.148-6.924-9.547-6.924-4.132 0-7.486 2.437-8.842 6.127l2.375-1.201c0.588-0.296 1.301-0.055 1.592 0.538 0.294 0.593 0.056 1.314-0.53 1.61l-4.748 2.399c-0.17 0.086-0.352 0.127-0.529 0.127-0.437 0-0.856-0.242-1.063-0.662l-2.375-4.801c-0.293-0.593-0.055-1.314 0.532-1.61 0.589-0.296 1.3-0.055 1.592 0.538l0.994 2.008c1.759-4.468 5.994-7.471 11.003-7.471 5.436 0 10.296 3.548 11.819 8.628 0.191 0.635-0.164 1.304-0.791 1.498z"
                    }))
                },
                I = a("YYte"),
                M = a("nQD+"),
                R = a("+Kbs"),
                x = a("fsHk"),
                D = function MessageFooter(e) {
                    var t = e.message,
                        a = e.isLastGroup,
                        n = e.isLastMessage,
                        r = e.delivered,
                        i = e.generated,
                        o = e.messageTimedOut,
                        l = e.deliveryFailed,
                        u = e.resolveMessageHeight,
                        b = Object(m.a)().t,
                        g = Object(d.useState)(!1),
                        p = Object(c.a)(g, 2),
                        h = p[0],
                        O = p[1];
                    if (Object(d.useEffect)(function() {
                            return (o || r) && Object(w.e)(function() {
                                    return O(!1)
                                }, 500), r || l || h || O(!0),
                                function() {
                                    return O(!1)
                                }
                        }, [r, o, h, l]), Object(d.useLayoutEffect)(function() {
                            u()
                        }, [u, r, h, a, n, l]), !r || h) return f.a.createElement("li", {
                        key: "".concat(i, "-message-status"),
                        className: s()("drift-widget-message drift-widget-message--meta-date drift-no-op", {
                            "drift-widget-message-failed-status": l
                        })
                    }, f.a.createElement("span", {
                        "aria-live": l ? "polite" : "off",
                        className: "drift-widget-message--meta-status"
                    }, !h && l ? b("status.sendMessageFailed") : f.a.createElement(v.a, {
                        size: "small",
                        className: "drift-widget-message--meta-status__sending",
                        titleId: "MessageLoading-".concat(t.id)
                    })));
                    if (!a && !r) return f.a.createElement("li", {
                        key: "".concat(i, "-message-status"),
                        className: "drift-widget-message drift-widget-message--meta-date drift-no-op"
                    });
                    if (n && a) {
                        var j = x.a.unixFormatDateTime(r, b("dt.format.time.short"));
                        return f.a.createElement("li", {
                            key: "".concat(t.createdAt, "-message-status"),
                            className: "drift-widget-message--meta-date drift-widget-message"
                        }, f.a.createElement("div", {
                            className: "drift-widget-message--meta-status"
                        }, f.a.createElement(R.i, {
                            className: "drift-widget-message-sent",
                            height: 12,
                            width: 12,
                            title: "Message successfully delivered"
                        }), f.a.createElement("span", {
                            className: "drift-widget-message--meta-date-stamp"
                        }, j)))
                    }
                    return null
                },
                B = a("QtlZ"),
                F = a("mZ4K"),
                P = a("58kB"),
                G = a("da4L"),
                U = a("g6eD"),
                _ = a("LVcX"),
                V = a("mfas"),
                H = a("PjZB"),
                z = 60;

            function process(e) {
                var t = null,
                    a = null,
                    n = !1,
                    r = e.getAttribute("data-giffer-alt"),
                    i = document.createElement("canvas"),
                    c = e.getAttribute("data-giffer-duration"),
                    o = e.getAttribute("data-giffer");
                e.style.display = "block", e.onload = function() {
                    if (i.getContext && i.getContext("2d")) {
                        var s = e.width,
                            l = e.height,
                            u = function createContainer(e, t) {
                                var a = document.createElement("button"),
                                    n = e.getAttribute("class"),
                                    r = e.getAttribute("id"),
                                    i = ["width:" + z + "px", "height:" + z + "px", "border-radius:" + z / 2 + "px", "background:rgba(0, 0, 0, 0.3)", "position:absolute", "top:50%", "left:50%", "margin:-" + z / 2 + "px"].join(";"),
                                    c = ["width: 0", "height: 0", "border-top: 14px solid transparent", "border-bottom: 14px solid transparent", "border-left: 14px solid rgba(0, 0, 0, 0.5)", "position: absolute", "left: 26px", "top: 16px"].join(";");
                                n && a.setAttribute("class", e.getAttribute("class")), r && a.setAttribute("id", e.getAttribute("id")), a.setAttribute("style", "position: relative; cursor: pointer; background: none; border: none; padding: 0;"), a.setAttribute("aria-label", "Play or pause GIF animation for ".concat(t));
                                var o = document.createElement("div");
                                o.setAttribute("class", "giffer-play-button"), o.setAttribute("style", i);
                                var s = document.createElement("div");
                                return s.setAttribute("style", c), o.appendChild(s), a.appendChild(o), e.parentNode.replaceChild(a, e), {
                                    c: a,
                                    p: o
                                }
                            }(e, r),
                            d = u.c,
                            f = u.p,
                            m = function calculatePercentageDim(e, t, a, n, r) {
                                var i = e.parentNode.offsetWidth,
                                    c = n / r;
                                return t.toString().indexOf("%") > 0 ? a = (t = (t = parseInt(t.toString().replace("%", ""))) / 100 * i) / c : a.toString().indexOf("%") > 0 && (t = (a = (a = parseInt(a.toString().replace("%", ""))) / 100 * i) * c), {
                                    w: t,
                                    h: a
                                }
                            }(d, s, l, e.width, e.height);
                        d.addEventListener("click", function() {
                            clearTimeout(t), n ? (n = !1, d.appendChild(f), d.removeChild(a), d.appendChild(i), a = null) : (n = !0, (a = document.createElement("img")).setAttribute("style", "width:100%;height:100%;"), a.setAttribute("data-uri", "".concat(Math.floor(1e5 * Math.random()) + 1)), setTimeout(function() {
                                a.src = o
                            }, 0), d.removeChild(f), d.removeChild(i), d.appendChild(a), parseInt(c) > 0 && (t = setTimeout(function() {
                                n = !1, d.appendChild(f), d.removeChild(a), d.appendChild(i), a = null
                            }, c)))
                        }), i.width = m.w, i.height = m.h, i.getContext("2d").drawImage(e, 0, 0, m.w, m.h), d.appendChild(i), d.setAttribute("style", "position:relative;cursor:pointer;width:" + m.w + "px;height:" + m.h + "px;background:none;border:none;padding:0;"), i.style.width = "100%", i.style.height = "100%", s.toString().indexOf("%") > 0 && l.toString().indexOf("%") > 0 ? (d.style.width = s, d.style.height = l) : s.toString().indexOf("%") > 0 ? (d.style.width = s, d.style.height = "inherit") : l.toString().indexOf("%") > 0 ? (d.style.width = "inherit", d.style.height = l) : (d.style.width = m.w + "px", d.style.height = m.h + "px")
                    }
                }, e.src = o
            }
            var K = a("EQxi"),
                Z = function LazyCard(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.a;
                    return function(a) {
                        return f.a.createElement(d.Suspense, {
                            fallback: f.a.createElement(t, {
                                titleId: "LazyCardLoadingFallback"
                            })
                        }, f.a.createElement(e, a))
                    }
                },
                Q = function() {
                    return f.a.createElement("div", {
                        className: "drift-widget-message--box--loader"
                    }, f.a.createElement(v.a, {
                        titleId: "Loading"
                    }))
                },
                X = a("q+cq"),
                W = (a("CHQR"), function DefaultMessage(e) {
                    var t = e.body;
                    return f.a.createElement("div", {
                        className: "drift-widget-message--box drift-widget-message--STRING"
                    }, t)
                }),
                q = a("9Xg1"),
                Y = {
                    BOT: Z(Object(d.lazy)(function() {
                        return a.e(39).then(a.bind(null, "qfyu"))
                    }), Q),
                    CONVO_RATING: Z(Object(d.lazy)(function() {
                        return a.e(40).then(a.bind(null, "6lGB"))
                    }), Q),
                    EMAIL_CAPTURE: Z(Object(d.lazy)(function() {
                        return a.e(33).then(a.bind(null, "ZJQa"))
                    }), Q),
                    HTML: q.default,
                    LEGACY: Z(Object(d.lazy)(function() {
                        return Promise.resolve().then(a.bind(null, "9Xg1"))
                    }), Q),
                    MEETING: Z(Object(d.lazy)(function() {
                        return a.e(31).then(a.bind(null, "c+1e"))
                    }), function() {
                        return f.a.createElement(X.a, {
                            loadingFrame: !0
                        }, f.a.createElement(v.a, {
                            titleId: "MeetingLoader"
                        }))
                    }),
                    SMS_CAPTURE: Z(Object(d.lazy)(function() {
                        return a.e(41).then(a.bind(null, "vYZB"))
                    }), Q),
                    SMS_SUCCESS: Z(Object(d.lazy)(function() {
                        return a.e(36).then(a.bind(null, "oqPC"))
                    }), Q),
                    STRING: W
                },
                J = a("UXBQ"),
                $ = a("vDqi"),
                ee = a.n($),
                te = a("nJ3u"),
                ae = a("z24s"),
                ne = function FileAttachmentMessage(e) {
                    var t = e.attachment,
                        a = void 0 === t ? {} : t,
                        n = e.multi,
                        r = e.senderType,
                        i = void 0 === r ? H.d.END_USER : r,
                        c = Object(u.a)(),
                        o = c.activeColor,
                        l = c.agentIconTheme,
                        m = c.buttonStyles,
                        b = c.svgStyles,
                        g = Object(d.useRef)(null),
                        v = Object(ae.a)(g);
                    if (!a.fileName) return null;
                    var p = i === H.d.END_USER ? b : l;
                    return f.a.createElement("a", {
                        href: a.publicUrl,
                        target: "_blank",
                        rel: "nofollow noopener noreferrer",
                        className: s()("drift-widget-message--file", {
                            "keyboard-focused": v
                        }),
                        style: n ? m : {},
                        "aria-label": "Download file: ".concat(a.fileName),
                        ref: g
                    }, f.a.createElement("style", null, "\n          .drift-widget-message--file.keyboard-focused {\n            ".concat(Object(te.a)(o, !1), "\n          }\n        ")), f.a.createElement(R.k, {
                        fill: p.fill,
                        width: 16,
                        height: 16
                    }), f.a.createElement("span", {
                        className: "drift-widget-attachment--filename",
                        title: a.fileName
                    }, a.fileName))
                },
                re = function ImageAttachmentMessage(e) {
                    var t = e.attachment,
                        a = void 0 === t ? {} : t,
                        n = e.resolveMessageHeight,
                        r = void 0 === n ? function() {} : n,
                        i = Object(d.useState)(!1),
                        o = Object(c.a)(i, 2),
                        l = o[0],
                        m = o[1],
                        b = Object(u.a)().activeColor,
                        g = Object(d.useRef)(null),
                        v = Object(ae.a)(g);
                    return f.a.createElement("a", {
                        href: a.publicUrl,
                        className: s()("drift-widget-attachment--img", {
                            "keyboard-focused": v
                        }),
                        target: "_blank",
                        ref: g,
                        rel: "nofollow noopener noreferrer",
                        "aria-label": "Download image: ".concat(a.fileName)
                    }, f.a.createElement("style", null, "\n          .drift-widget-attachment--img.keyboard-focused {\n            ".concat(Object(te.a)(b, !1), "\n          }\n        ")), f.a.createElement("img", {
                        src: a.publicUrl,
                        alt: a.fileName,
                        onLoad: function onLoad() {
                            !l && r(), !l && m(!0)
                        }
                    }))
                },
                ie = (a("Qp3a"), function AttachmentMessage(e) {
                    var t = e.attachmentIds,
                        a = void 0 === t ? [] : t,
                        n = e.resolveMessageHeight,
                        c = e.sentFrom,
                        o = void 0 === c ? H.d.END_USER : c,
                        l = Object(b.b)(),
                        m = Object(b.c)(function(e) {
                            return e.conversations.attachments
                        }),
                        g = ee.a.CancelToken.source(),
                        v = Object(u.a)(),
                        p = v.agentMessageTheme,
                        h = v.endUserMessageTheme,
                        j = o === H.d.END_USER ? h : p;
                    Object(d.useEffect)(function() {
                        var e = a.filter(function(e) {
                                return !m[e]
                            }),
                            t = function() {
                                var t = Object(i.a)(r.a.mark(function _callee() {
                                    var t, a;
                                    return r.a.wrap(function _callee$(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 3, Object(J.a)(e, g.token);
                                            case 3:
                                                t = n.sent, a = t.data, l(Object(O.e)({
                                                    attachments: a
                                                })), n.next = 10;
                                                break;
                                            case 8:
                                                n.prev = 8, n.t0 = n.catch(0);
                                            case 10:
                                            case "end":
                                                return n.stop()
                                        }
                                    }, _callee, null, [
                                        [0, 8]
                                    ])
                                }));
                                return function fetchAttachmentsForMessage() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return e.length && t(),
                            function() {
                                g.cancel()
                            }
                    }, [m, a, g, l]);
                    var E = Object(d.useMemo)(function() {
                        return a && a.map(function(e) {
                            return m[e] ? function isImage(e) {
                                var t = e.mimeType;
                                return /image/.test(t) && "image/svg+xml" !== t
                            }(m[e]) ? f.a.createElement(re, {
                                attachment: m[e],
                                key: "drift-widget-attachment--".concat(e),
                                resolveMessageHeight: n
                            }) : f.a.createElement(ne, {
                                multi: a.length > 1,
                                attachment: m[e],
                                key: "drift-widget-attachment--".concat(e),
                                senderType: o
                            }) : null
                        })
                    }, [a, m, n, o]);
                    return f.a.createElement("div", {
                        style: j,
                        className: s()("drift-widget-attachment drift-widget-message--box", {
                            "drift-widget-attachment--multi": a && a.length > 1
                        })
                    }, E)
                }),
                ce = (a("mQ2C"), function UnfurlMessage(e) {
                    var t = e.unfurlData,
                        a = e.style,
                        n = void 0 === a ? {} : a,
                        r = e.resolveMessageHeight,
                        i = void 0 === r ? function() {} : r,
                        c = e.sender,
                        o = t.html,
                        l = t.meta,
                        u = void 0 === l ? {} : l,
                        m = t.links,
                        g = void 0 === m ? {} : m,
                        v = t.url,
                        p = void 0 === v ? "" : v,
                        h = t.rel,
                        O = void 0 === h ? [] : h,
                        j = Object(b.b)();
                    Object(d.useLayoutEffect)(function() {
                        i(), j(Object(U.a)(!0))
                    }, [i, o, j]);
                    var E = !!p && !!u.title,
                        w = !!u.description || !!u.site,
                        y = E && w,
                        A = Object(_.a)(null, ["thumbnail", 0], g),
                        C = Object(_.a)(p, ["site"], u),
                        k = "player" === O[0],
                        N = !k && A;
                    return Object(d.useMemo)(function() {
                        return N || k || y
                    }, [N, k, y]) ? f.a.createElement("li", {
                        className: "drift-widget-message drift-widget-message--unfurl drift-widget-message-sender--".concat(c)
                    }, f.a.createElement("div", {
                        className: s()("drift-widget-message--box drift-widget-message--unfurl-container"),
                        style: n
                    }, k && f.a.createElement("div", {
                        className: "drift-widget-message--unfurl-video",
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }), N && f.a.createElement("div", {
                        className: "drift-widget-message--unfurl-image"
                    }, f.a.createElement("a", {
                        href: p,
                        target: "_blank",
                        rel: "nofollow noopener noreferrer",
                        "aria-label": "Go to ".concat(p)
                    }, f.a.createElement("img", {
                        alt: "".concat(C, " - thumbnail"),
                        src: A.href,
                        onLoad: function onLoad() {
                            j(Object(U.a)(!0))
                        }
                    }))), y && f.a.createElement("div", {
                        className: "drift-widget-message--unfurl_meta"
                    }, u.title && f.a.createElement("h3", {
                        className: "drift-widget-message--unfurl_title"
                    }, f.a.createElement("a", {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: p,
                        title: u.title
                    }, u.title)), u.description && f.a.createElement("p", {
                        className: "drift-widget-message--unfurl_description"
                    }, u.description), u.site && f.a.createElement("p", {
                        className: "drift-widget-message--unfurl_site"
                    }, u.site)))) : null
                }),
                oe = (a("ZP32"), function MessageSentTimestamp(e) {
                    var t = e.sender,
                        a = e.deliveredAt,
                        n = Object(m.a)().t;
                    return f.a.createElement("span", {
                        className: "drift-widget-message-timestamp drift-widget-message-timestamp--".concat(t)
                    }, x.a.unixFormatDateTime(a, n("dt.format.time.short")))
                }),
                se = function MessageComponent(e) {
                    var t, a = e.message,
                        n = e.nextMessage,
                        r = e.isLastGroup,
                        i = e.isLastMessage,
                        o = e.resolveMessageHeight,
                        l = Object(d.useState)([]),
                        m = Object(c.a)(l, 2),
                        g = m[0],
                        v = m[1],
                        p = Object(d.useState)(null),
                        h = Object(c.a)(p, 2),
                        j = h[0],
                        E = h[1],
                        y = Object(b.b)(),
                        C = Object(d.useRef)(),
                        k = Object(F.a)(),
                        N = Object(P.a)(k).recipient,
                        T = Object(b.c)(function(e) {
                            return Object(_.a)(!1, ["embed", "configuration", "theme", "showUnfurl"], e)
                        }),
                        R = Object(u.a)(),
                        z = R.borderStyles,
                        Z = R.endUserMessageTheme,
                        Q = R.agentMessageTheme,
                        X = function resolveMessageComponent(e) {
                            var t = e.attributes,
                                a = t.isBot,
                                n = void 0 !== a && a,
                                r = t.show_email_capture_card,
                                i = t.conversationRating;
                            return r ? Y.EMAIL_CAPTURE : Object(G.i)(e) ? Y.MEETING : n ? Y.BOT : i ? Y.CONVO_RATING : Object(G.l)(e) ? Y.SMS_CAPTURE : Object(G.m)(e) ? Y.SMS_SUCCESS : Y.HTML
                        }(a),
                        W = Object(G.h)(a) ? H.d.END_USER : H.d.AGENT;
                    Object(d.useEffect)(function() {
                        ! function processGifsForAnimationControl(e) {
                            if (e)
                                for (var t = e.querySelectorAll("[data-giffer]"), a = 0; a < t.length; ++a) process(t[a])
                        }(null === C || void 0 === C ? void 0 : C.current)
                    }, [C]), Object(d.useEffect)(function() {
                        if (!Object(G.d)(a, "instantMeeting")) {
                            var e = Object(K.a)(a.body);
                            e.length && v(e)
                        }
                    }, [a]), Object(d.useEffect)(function() {
                        if (g.length > 0) {
                            var e = document.createElement("textarea");
                            e.innerHTML = g[0], S(e.value.replace("#61;", "")).then(function(e) {
                                var t = e.data;
                                E(Object(A.a)(Object(A.a)({}, t), {}, {
                                    url: g[0]
                                }))
                            }).catch(function(e) {
                                return Object(w.n)({
                                    data: ["Failed to unfurl url: ".concat(g[0]), e]
                                })
                            })
                        }
                    }, [g]), Object(d.useLayoutEffect)(function() {
                        o(), B.a.dispatch(Object(U.a)(!0))
                    }, [o, r]);
                    var q = !!a.attributes.appointmentInfo || !!a.attributes.conversationRating || a.type === H.e.EMAIL_CAPTURE_CARD || a.contentType === H.c.SMS_NUMBER_REQUESTED || a.contentType === H.c.SMS_NUMBER_SUCCESS,
                        J = !!a.body || q,
                        $ = T && j,
                        ee = a.attachments && a.attachments.length > 0;
                    if (!J && !$ && !ee) return null;
                    var te = Object(_.a)(null, ["createdAt"])(a),
                        ae = Object(_.a)(null, ["attributes", "generatedAt"])(a),
                        ne = Object(_.a)(!1, ["failedToSend"])(a),
                        re = !te && x.a.isTimeAfterSeconds(x.a.getCurrentTimeEpoch(), ae, 30),
                        se = !te && ne,
                        le = W === H.d.END_USER ? "Sent by: You" : "Sent by: ".concat(N.name);
                    return f.a.createElement(f.a.Fragment, null, J && f.a.createElement("li", {
                        className: s()("drift-widget-message drift-widget-message-sender--".concat(W), {
                            "drift-widget-message-failed": se
                        }),
                        ref: C
                    }, f.a.createElement(X, Object.assign({}, a, {
                        isLastGroup: r,
                        isLastMessage: i,
                        nextMessage: n,
                        resolveMessageHeight: o,
                        style: W === H.d.END_USER ? Z : Q
                    })), f.a.createElement(I.a, {
                        content: le
                    }), !q && te && f.a.createElement(oe, {
                        sender: W,
                        deliveredAt: te
                    }), se && f.a.createElement(M.a, {
                        "aria-label": 'Retry uploading message "'.concat(null !== (t = null === a || void 0 === a ? void 0 : a.body) && void 0 !== t ? t : "", '"'),
                        onClick: function doSendMessage() {
                            y(Object(O.n)({
                                message: Object(A.a)(Object(A.a)({}, Object(V.a)(["failedToSend"], a)), {}, {
                                    attributes: Object(A.a)(Object(A.a)({}, a.attributes), {}, {
                                        generatedAt: (new Date).valueOf()
                                    })
                                })
                            }))
                        }
                    }, f.a.createElement(L, {
                        height: 12,
                        width: 12
                    }))), $ && f.a.createElement(ce, {
                        unfurlData: j,
                        resolveMessageHeight: o,
                        style: W === H.d.END_USER ? Object(A.a)({}, z) : {},
                        sender: W
                    }), ee && f.a.createElement("li", {
                        className: "drift-widget-message drift-widget-message-sender--".concat(W)
                    }, f.a.createElement(ie, {
                        attachmentIds: a.attachments,
                        resolveMessageHeight: o,
                        sentFrom: W
                    }), f.a.createElement(oe, {
                        sender: W,
                        deliveredAt: te
                    })), f.a.createElement(D, {
                        message: a,
                        isLastGroup: r,
                        isLastMessage: i,
                        delivered: te,
                        generated: ae,
                        messageTimedOut: re,
                        deliveryFailed: se,
                        resolveMessageHeight: o
                    }))
                },
                le = a("yEsl"),
                ue = (a("UwV1"), function getAvatarPositionClassName(e) {
                    var t = Object(G.i)(e),
                        a = e.attributes.show_email_capture_card;
                    return "message-group-avatar-".concat(void 0 !== a && a || t ? "top" : "bottom")
                }),
                de = function MessageGroupHeader(e) {
                    var t = e.senderType,
                        a = e.senderId,
                        n = Object(l.a)(a),
                        r = Object(u.a)().messageAuthorTheme;
                    return t !== H.d.AGENT ? null : f.a.createElement("li", {
                        className: "drift-widget-message-sender"
                    }, f.a.createElement("span", {
                        className: "drift-widget-message--meta-author",
                        style: r
                    }, n))
                },
                fe = function MessageGroup(e) {
                    var t = e.messages,
                        a = void 0 === t ? [] : t,
                        n = e.isLastGroup,
                        r = void 0 !== n && n,
                        i = e.showTimestamp,
                        o = void 0 !== i && i,
                        l = e.role,
                        b = void 0 === l ? "cell" : l,
                        g = e.resolveMessageHeight,
                        v = void 0 === g ? function() {} : g,
                        p = Object(m.a)().t,
                        h = Object(u.a)().messageTimestampTheme;
                    Object(d.useLayoutEffect)(function() {
                        v()
                    }, [v, r, o]);
                    var O = Object(c.a)(a, 1)[0],
                        j = Object(G.h)(O) ? H.d.END_USER : H.d.AGENT,
                        E = O.authorId,
                        w = a[a.length - 1],
                        A = r && Object(G.d)(w, "buttons");
                    return f.a.createElement("div", {
                        role: b,
                        className: s()("drift-widget-message-group-wrapper", {
                            "drift-widget-message-group-wrapper--last": r
                        })
                    }, o && f.a.createElement("p", {
                        className: "drift-widget-message-group-timestamp",
                        style: h
                    }, function formatTimestamp(e, t) {
                        return e > 0 ? x.a.isTimeSame(e, "date") ? "".concat(t("dt.today"), " ").concat(x.a.unixFormatDateTime(e, t("dt.format.time.short"))) : x.a.unixFormatDateTime(e, t("dt.format.datetime.short")) : ""
                    }(a[0].createdAt, p)), f.a.createElement("ul", {
                        className: "drift-widget-message-group drift-widget-message-group-type--".concat(j)
                    }, f.a.createElement(de, {
                        senderType: j,
                        senderId: E
                    }), a.map(function(e, t) {
                        var n = t === a.length - 1,
                            i = n ? null : a[t + 1];
                        return f.a.createElement(d.Fragment, {
                            key: e.attributes.generatedAt || e.id || e.attributes.widgetGuid
                        }, n && j === H.d.AGENT && f.a.createElement("li", {
                            className: s()("drift-widget-message-group-avatar", ue(e))
                        }, f.a.createElement(le.a, {
                            id: E,
                            size: "SMALL"
                        })), f.a.createElement(se, {
                            resolveMessageHeight: v,
                            message: e,
                            nextMessage: i,
                            isLastMessage: n,
                            isLastGroup: r
                        }))
                    })), A && f.a.createElement(y, {
                        message: w
                    }))
                },
                me = a("gRD2"),
                be = a("fJrp"),
                ge = a("7VeV"),
                ve = function useScroll(e, t) {
                    var a = Object(d.useRef)(),
                        n = Object(d.useMemo)(function() {
                            return Object(ge.throttle)(250, !1, function(e) {
                                a.current && a.current(e)
                            })
                        }, [a]);
                    Object(d.useEffect)(function() {
                        a.current = e
                    }, [e]), Object(d.useEffect)(function() {
                        var e = t.current;
                        if (e) return e.addEventListener("scroll", n),
                            function() {
                                e && e.removeEventListener("scroll", n)
                            }
                    }, [t, n])
                },
                pe = a("qixE"),
                he = a("xwTo"),
                Oe = a("TbSn"),
                je = a("XuDI"),
                Ee = a("ADGC"),
                we = (a("P6Di"), function shouldShowTimestamp(e, t) {
                    var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (!e && !a) return !1;
                    if (!e) return !0;
                    var n = e ? e[e.length - 1].createdAt : 0;
                    return x.a.isTimeAfterHours(t[0].createdAt, n, 2)
                }),
                ye = function setScrollTop(e, t, a) {
                    if (e.scrollTop !== t) {
                        var n = e.style;
                        a && (n["-webkit-overflow-scrolling"] = "auto", n.overflow = "hidden"), e.scrollTop = t, a && (n.overflow = "scroll", n["-webkit-overflow-scrolling"] = "touch")
                    }
                };
            t.a = function MessageGroupList(e) {
                var t = e.reflowHidden,
                    a = e.messageGroups,
                    n = e.messages,
                    o = e.disabled,
                    l = void 0 !== o && o,
                    m = e.inheritBackgroundStyle,
                    p = void 0 !== m && m,
                    h = e.showTimestampForFirstGroup,
                    O = void 0 === h || h,
                    j = Object(b.b)(),
                    E = Object(u.a)().widgetBackgroundStyles,
                    y = Object(b.c)(he.a),
                    A = Object(me.a)().fetchMessages,
                    C = Object(b.c)(function(e) {
                        return e.view
                    }),
                    k = C.chatOpen,
                    N = C.shouldAutoScrollChatToBottom,
                    T = Object(b.c)(function(e) {
                        return Object(_.a)({}, ["conversations", "conversations", y], e)
                    }),
                    S = T.hasMoreMessages,
                    L = T.nextPageMessageId,
                    I = Object(Ee.a)(),
                    M = Object(d.useState)(!0),
                    R = Object(c.a)(M, 2),
                    x = R[0],
                    D = R[1],
                    B = Object(d.useState)(!1),
                    F = Object(c.a)(B, 2),
                    P = F[0],
                    z = F[1],
                    K = Object(d.useState)(!1),
                    Z = Object(c.a)(K, 2),
                    Q = Z[0],
                    X = Z[1],
                    W = Object(d.useState)(!1),
                    q = Object(c.a)(W, 2),
                    Y = q[0],
                    J = q[1],
                    $ = Object(d.useRef)(null),
                    ee = Object(d.useRef)(0),
                    te = Object(d.useRef)(!1),
                    ae = Object(d.useMemo)(function() {
                        return Object(Oe.a)(n)
                    }, [n]),
                    ne = Object(be.a)(ae),
                    re = !!ne && ae !== ne,
                    ie = a.length,
                    ce = !P && S && k,
                    oe = Object(d.useMemo)(function() {
                        return a.map(function(e, t) {
                            var n = t === a.length - 1,
                                r = t > 0 ? a[t - 1] : null,
                                i = e[0].attributes.widgetGuid || e[0].id;
                            return f.a.createElement(f.a.Fragment, {
                                key: "messageGroup-".concat(i)
                            }, f.a.createElement(fe, {
                                role: "listitem",
                                messages: e,
                                isLastGroup: n,
                                showTimestamp: we(r, e, O)
                            }), n && f.a.createElement(g, null))
                        })
                    }, [a, O]),
                    se = Object(d.useCallback)(function() {
                        var e = Object(i.a)(r.a.mark(function _callee(e) {
                            return r.a.wrap(function _callee$(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return z(!0), X(!0), t.next = 4, A({
                                            from: e
                                        });
                                    case 4:
                                        J(!0), z(!1), Object(w.e)(function() {
                                            return X(!1)
                                        }, 1e3);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [A]),
                    le = Object(d.useCallback)(function(e) {
                        e.target.scrollTop <= 200 && ce && !Y && se(L)
                    }, [se, L, ce, Y]),
                    ue = p ? {} : E;
                ve(le, $), Object(d.useLayoutEffect)(function() {
                    if (!(ie < 1)) {
                        if (!k || P || t) !k && re && (te.current = !0);
                        else {
                            var e = Object(_.a)(0, ["current", "scrollHeight"], $),
                                a = ee.current,
                                n = re || x || te.current || N;
                            $.current && (n ? (ye($.current, e, I), te.current = !1) : Y && ye($.current, e - a, I)), (n || Y) && (ee.current = e), D(!1), J(!1)
                        }
                        N && j(Object(U.a)(!1))
                    }
                }, [ie, k, x, P, re, Y, t, I, a, N, j]), Object(d.useEffect)(function() {
                    J(!1), D(!0)
                }, [y]), Object(d.useEffect)(function() {
                    ae && k && ae.viewerRecipientStatus !== H.f.READ && !Object(G.h)(ae) && Object(pe.c)(y)
                }, [ae, y, k]);
                return f.a.createElement("div", {
                    className: "drift-widget-message-group-list-container",
                    "aria-hidden": l
                }, f.a.createElement("div", {
                    style: ue,
                    className: s()("drift-widget-message-group-list-loader", {
                        "drift-widget-message-group-list-loader--loading": Q
                    })
                }, f.a.createElement(v.a, {
                    visible: Q,
                    titleId: "MessageGroupListLoading"
                })), f.a.createElement(je.Scrollbars, {
                    ref: function setScrollContainerRef(e) {
                        e && $ && ($.current = e.view)
                    },
                    hideTracksWhenNotNeeded: !0,
                    renderView: function renderScrollbarsView(e) {
                        var a = Object(V.a)(["WebkitOverflowScrolling"], e.style);
                        return f.a.createElement("div", Object.assign({}, e, {
                            role: "list",
                            style: a,
                            className: s()("drift-widget-message-group-list", {
                                "drift-widget-message-group-list--hidden": t
                            })
                        }))
                    }
                }, oe))
            }
        },
        "97O6": function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWCAYAAACFbNPBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABa9JREFUeNrsWy1z40gQla8EDAwEDAQCDAIMAgwCDA0XBgYGBu5PyM84aLgw8KDBAoMDBgsEAgQEBAQEBARclZ2uepPrne2WRrbls7PqKpWc0UxPz0y//pIyen9/Dwa6LhqNRjNzmwmPcnOl5kzrYZdOQ+GwBVcDirG5LXGNG7rWpu/O3DcuUEz7ytxW7gDT76WtjzYXAdJcW8MjFWR+EoBMAF4ra3wRmmkdG/Psq/kdac8Vfg/mtpAMiRnzt88C/xpU7yrAEZvbMxR33NLdAukZ4/okmmturicz1yNA3Be9Ku0rM2+keNlFR14DQK4UHE+K9Wwi6v94RlHnfc4HD5Uojx8826zHyQeAfJ6w6tHDa2jhz7czizwzMi969iK1Mu/cCRMjJbTa9JKDSG7M0N5MWDn9iOeUHWpl+hTs2UQZF6HvnrVNIGMFfpq8ltdEUhQeiyvr+FgLm1Pl0WVvWtb8sT6+bkZL5aBJli1ZVLKGmN+GFDM8X3exlB6UCh4qUmTe9eRFKL96VTzVF/MshZ6sjg2tDknSF4pyECoTduALl69pr3CYpDB3aP7OnhOgqP3NXBkbeocFU9/bhjBj1yJjwpRFs3Al+IjzGB6Z4fHWdW+wJlpHaP7eWqBBqRdQ5n8VvksFHL8ov/ltZd8ZvkskwvmJlXMteLdnYa96zXtI1wCEmQDYZSBX9zqHVodWsSocuCVSphiKUDNFIcAU4B9D6DkUocCYqfUs8Dh2czN2AHQVZF3N3y4YXLms98hx2fXRvHMzvmBWmvf5sPgK6EiGG7pIhgaQuDxv2XoSgGTO+N7avZK8B5JMKbT6p+mgzbPtOWIpWPNdh4rXqUOtZ2F/NFnSrqHVoQDZw1rZQ3wDKCLwCq3bZ0qXQtljeIoMijMFWDhAJtQXVta2Fc7BlIq15uEQlzEDQCfwEr/1URSAP6cw5h4gyZRwy503tyAgQ0AApTUh6R5DnqxBDs0SJk6s3aagaln1RFWsQ/KUlyPBWRoepPBfPHOx10PnOvY9CB8/gfC5Yl1JMSZQlg8AADQhlDdCuwXR3uUHyypVODSaCB4iEviULaDJ4AHGSqIYO7lIBABUTLGXAE0Y/PcOoQvll/ISsKGMehb5yFMiMZ+1dN20GcNTAmTMFCtk8WbeUoasBcDMAI4pU6B7KFoBxc49LWuqKKpNgksnQZYSzJR5GNF7dtiniAExpBAKYaINtYh+KIl50GEfzwkIX6ufnDnU+triPY8KOTsDxFHQGiEVxaN7mzsIVi5ylCwHHwuQCjwKgO5GCq9gOXxjSQuOTLDUaYvXkWjqYd1TVqy4gww3dn54z0AArC/FweXT9lwTsVBrderQ6lCA0MFqJbwCSnSLqpEFTMhAVbAEr2IHnrHnFiA1S+K7hiEpqxJFx26S4XUDuWpPd73HAR3zZrlWPHjMwk4C3sYzUT2LRfeoFNVKZBB4hEsSSDbIxX6rbB4TWp0qB+GC2no8KdK9+V2Cv03g3Y/obEzPgWPzk7HkPaCsUtz7pliXBHMsqOLCQppYeHdR8QoVm8d6Ihr7o8m6C6Fd0BK2NSbXSjslpmuWe6XO/vwfAClRXUs8Ddj6yDDubOFo2HETqhaQJCwBj9m4TPAGBZ6VTiyeYbxrZdpCkj341Q5oQyZP5qGwlfB3hTXUDXvjjtkrVarSYy1W9lLwgJS7PZjnr4KC9fktVKq05Z7AuEryBkhDaCVVlFKPfqRAO6E9C359WWjb3zymb+XXtg7PeQ7am659ET5J3xQtUCxJmEGImUfuI95fB38gDZ+7XzARmPBmPFYqZctLrnx9Bho+Vrx8WjcktT7g2AxbOADkM3uRGiDpGucTqE79weIQYg10sSD5xt5ezwL9K1/K/xIl1yk98kOfPl1A6tPWVAjwqQIeOq6VRsP/pF8vOZ/L5MP/ovewxwNABhpIp58CDAChjQWETVMlnAAAAABJRU5ErkJggg=="
        },
        "9Xg1": function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("nfbA"),
                r = a("O94r"),
                i = a.n(r),
                c = a("58kB"),
                o = a("4bA0"),
                s = a.n(o),
                l = a("da4L"),
                u = a("ERkP"),
                d = a.n(u),
                f = a("oPI6"),
                m = a("PjZB"),
                b = a("y0on"),
                g = a("EQxi"),
                v = /[/.](gif)$/i,
                p = function HtmlMessage(e) {
                    var t = e.body,
                        a = e.attributes,
                        r = e.isLastMessage,
                        l = e.authorId,
                        p = e.isLastGroup,
                        h = e.style,
                        O = void 0 === h ? {} : h,
                        j = e.resolveMessageHeight,
                        E = void 0 === j ? function() {} : j,
                        w = e.className,
                        y = e.viewerRecipientStatus,
                        A = e.authorType;
                    Object(u.useLayoutEffect)(function() {
                        E()
                    }, [E, t]);
                    var C = Object(c.a)(l).recipient,
                        k = Object(u.useMemo)(function() {
                            return {
                                parsedBody: s()(t, {
                                    replace: function replace(e) {
                                        if ("img" === e.name) {
                                            var t, a, r, i, c = null !== (t = null === (a = e.attribs) || void 0 === a ? void 0 : a.alt) && void 0 !== t ? t : "",
                                                l = null !== (r = null === (i = e.attribs) || void 0 === i ? void 0 : i.src) && void 0 !== r ? r : "",
                                                f = new RegExp(v).test(l),
                                                m = Object(n.a)(Object(n.a)({}, Object(o.attributesToProps)(e.attribs)), {}, {
                                                    onLoad: E
                                                });
                                            return f && (m["data-giffer"] = l, m["data-giffer-alt"] = c), d.a.createElement("img", m)
                                        }
                                        if ("text" === e.type) {
                                            var b, p;
                                            if (e.parentNode && "a" !== e.parentNode.name) {
                                                var h = Object(g.e)(e.data);
                                                return d.a.createElement(d.a.Fragment, null, s()(h))
                                            }
                                            var O = null !== (b = null === (p = e.data) || void 0 === p ? void 0 : p.split(/[\r\n]+/)) && void 0 !== b ? b : [];
                                            if (O.length > 1) return d.a.createElement(d.a.Fragment, null, O.filter(Boolean).map(function(e, t) {
                                                return d.a.createElement(u.Fragment, {
                                                    key: t
                                                }, e, d.a.createElement("br", null))
                                            }))
                                        } else if ("a" === e.name) {
                                            var j = {
                                                href: e.attribs.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                            };
                                            return d.a.createElement("a", j, Object(o.domToReact)(e.children))
                                        }
                                    }
                                })
                            }
                        }, [t, E]).parsedBody,
                        N = r && p && A === m.b.USER && y !== m.f.READ,
                        T = N ? Object(b.a)(C.name, a && "" !== a.preview ? a.preview : t) : null;
                    return d.a.createElement("div", {
                        className: i()("drift-widget-message--box drift-widget-message--HTML", w),
                        style: O
                    }, N && d.a.createElement(f.b, {
                        message: T,
                        "aria-live": "polite",
                        clearOnUnmount: !0
                    }), d.a.createElement("div", null, k))
                };
            t.default = function(e) {
                return Object(l.g)(e.body) ? null : d.a.createElement(p, e)
            }
        },
        "9wXn": function(e, t, a) {},
        Adtm: function(e, t, a) {},
        "BA/U": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = function onKeyDownSubmit(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return function(a) {
                    (function isEnter(e) {
                        return "Enter" === e.key || 13 === e.keyCode
                    }(a) || t && function isSpace(e) {
                        return "Space" === e.key || 32 === e.keyCode
                    }(a)) && (a.preventDefault(), e())
                }
            }
        },
        BNKP: function(e, t, a) {},
        BY8A: function(e, t, a) {
            "use strict";
            var n = a("s8DI"),
                r = a("QtlZ"),
                i = a("Hvhg"),
                c = a("ERkP"),
                o = a.n(c),
                s = a("rTkt");
            a("zoZM");
            t.a = function ThemeStyleSheets() {
                var e = Object(c.useState)(!1),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    l = t[1],
                    u = Object(i.b)(Object(r.b)());
                return Object(c.useEffect)(function() {
                    a || (Object(s.a)(u), Object(s.b)(u), l(!0))
                }, [u, a]), o.a.createElement("div", {
                    className: "drift-widget-preload-fonts",
                    "aria-hidden": "true"
                }, o.a.createElement("span", null, "A"), o.a.createElement("strong", null, "B"))
            }
        },
        CHQR: function(e, t, a) {},
        CwrG: function(e, t, a) {
            "use strict";
            var n = a("O94r"),
                r = a.n(n),
                i = a("+Kbs"),
                c = a("lE29"),
                o = a("SFoa"),
                s = a("LVcX"),
                l = a("ERkP"),
                u = a.n(l),
                d = a("TVEO"),
                f = a("uDfI"),
                m = (a("p0+K"), function Drift() {
                    var e = Object(c.a)().footerTextColor,
                        t = Object(s.a)("", ["context", "page", "hostname"], Object(f.c)(function(e) {
                            return e.session
                        })),
                        a = Object(l.useMemo)(function() {
                            return Object(o.h)() <= 1 ? "" : "?utm_source=".concat(t, "&utm_medium=web-widget&utm_campaign=widget-referral&utm_version=v2")
                        }, [t]);
                    return u.a.createElement("a", {
                        href: "https://www.drift.com/powered-by".concat(a),
                        className: "drift-widget-power",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        style: e
                    }, u.a.createElement(d.a, {
                        i18nKey: "composer.footer.poweredByDrift",
                        components: [u.a.createElement(i.c, {
                            height: 12,
                            width: 12
                        }), u.a.createElement("span", {
                            className: "drift-widget-power-brand"
                        }, "Drift")]
                    }))
                }),
                b = a("VkHq"),
                g = a("Hvhg");
            a("2VrW"), t.a = function Footer() {
                var e = Object(f.c)(g.c).showBranding,
                    t = void 0 !== e && e,
                    a = Object(b.a)(),
                    n = a.privacyPolicyLink,
                    i = a.privacyPolicyLinkText,
                    o = a.noPolicy,
                    s = Object(c.a)().footerTextColor;
                return !t && o ? null : u.a.createElement("div", {
                    className: r()("drift-widget-footer", {
                        "drift-widget-footer--with-branding": t
                    })
                }, t && u.a.createElement(m, null), t && !o && u.a.createElement("span", {
                    className: "drift-widget-footer-privacy-spacer",
                    "aria-hidden": "true",
                    style: s
                }, "|"), !o && u.a.createElement("a", {
                    href: n,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    title: i,
                    className: "drift-widget-footer-privacy-link",
                    style: s
                }, i))
            }
        },
        I4Wp: function(e, t, a) {},
        IuzP: function(e, t, a) {},
        JhcM: function(e, t, a) {},
        Jrg8: function(e, t, a) {},
        Lzfp: function(e, t, a) {
            "use strict";
            var n = a("jm9a"),
                r = a("O94r"),
                i = a.n(r),
                c = a("+Kbs"),
                o = a("ERkP"),
                s = a.n(o),
                l = (a("eSyn"), function SearchLabel(e) {
                    var t = e.ariaLabel,
                        a = void 0 === t ? "" : t,
                        r = e.ariaLabelledBy,
                        o = void 0 === r ? "" : r,
                        l = e.className,
                        u = void 0 === l ? "" : l,
                        d = e.htmlFor,
                        f = void 0 === d ? "" : d;
                    return s.a.createElement("label", {
                        "aria-label": a,
                        "aria-labelledby": o,
                        className: i()("drift-widget--search-label", Object(n.a)({}, u, !!u)),
                        htmlFor: f,
                        id: "driftWidgetSearchLabel"
                    }, s.a.createElement(c.o, {
                        titleId: o,
                        title: a,
                        width: 12,
                        height: 12
                    }))
                });
            a.d(t, "a", function() {
                return l
            })
        },
        Mur8: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = [{
                emoji: "\ud83d\ude20",
                value: 1
            }, {
                emoji: "\ud83d\ude41",
                value: 2
            }, {
                emoji: "\ud83d\ude10",
                value: 3
            }, {
                emoji: "\ud83d\ude0a",
                value: 4
            }, {
                emoji: "\ud83e\udd29",
                value: 5
            }]
        },
        P6Di: function(e, t, a) {},
        "PGb/": function(e, t, a) {},
        Q80r: function(e, t, a) {},
        Qp3a: function(e, t, a) {},
        RJSH: function(e, t, a) {},
        Sn8X: function(e, t, a) {
            "use strict";
            var n = a("LVcX"),
                r = a("ERkP"),
                i = a("Tr4L"),
                c = a("uDfI"),
                o = a("0lfv"),
                s = a("VpmR");
            t.a = function useLanguageSwitcher() {
                var e = Object(i.a)().i18n,
                    t = Object(c.c)(function(e) {
                        return Object(n.a)("en", ["embed", "configuration", "locale"], e)
                    });
                Object(r.useEffect)(function() {
                    e && Object(o.l)(e.changeLanguage) && e.changeLanguage(Object(s.c)(t))
                }, [e, t])
            }
        },
        UXBQ: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return r
            }), a.d(t, "a", function() {
                return i
            });
            var n = a("efbE"),
                r = function uploadAttachment(e, t) {
                    var a = new FormData;
                    return a.append("conversationId", t), a.append("file", e), n.a.post("/attachments", a)
                },
                i = function fetchAttachments(e, t) {
                    return n.a.get("/attachments", {
                        params: {
                            id: e
                        },
                        cancelToken: t
                    })
                }
        },
        UwV1: function(e, t, a) {},
        YYte: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return InvisibleContent
            });
            var n = a("hX/4"),
                r = a("ERkP"),
                i = a.n(r),
                c = (a("fpMl"), {
                    label: function label(e) {
                        return i.a.createElement("label", Object.assign({
                            htmlFor: e.htmlFor
                        }, e))
                    },
                    span: function span(e) {
                        return i.a.createElement("span", e)
                    }
                });

            function InvisibleContent(e) {
                var t = e.content,
                    a = void 0 === t ? "" : t,
                    r = e.type,
                    o = void 0 === r ? "span" : r,
                    s = Object(n.a)(e, ["content", "type"]),
                    l = c[o];
                return i.a.createElement(l, Object.assign({
                    className: "visually-hidden"
                }, s), a)
            }
        },
        ZGTz: function(e, t, a) {
            "use strict";
            var n = a("mj2O"),
                r = a.n(n),
                i = a("7SM1"),
                c = a("s8DI"),
                o = a("O94r"),
                s = a.n(o),
                l = a("HXmn"),
                u = a("LVcX"),
                d = a("ERkP"),
                f = a.n(d),
                m = a("Tr4L"),
                b = a("uDfI"),
                g = a("oFTC"),
                v = (a("uqJV"), a("Q80r"), Object(d.lazy)(function() {
                    return Promise.all([a.e(9), a.e(43)]).then(a.bind(null, "tBak"))
                })),
                p = function EmojiPickerLoader(e) {
                    var t = e.loadingText;
                    return f.a.createElement("div", {
                        className: "drift-widget-emoji-picker--loader"
                    }, f.a.createElement("p", null, t), f.a.createElement(l.a, {
                        titleId: "EmojiPicker"
                    }))
                };
            t.a = function EmojiPicker(e) {
                var t = e.open,
                    n = e.onAddEmoji,
                    o = e.onClickOutside,
                    l = Object(m.a)().t,
                    h = Object(b.c)(function(e) {
                        return e.conversations
                    }).activeConversation,
                    O = "en" !== Object(b.c)(function(e) {
                        return Object(u.a)("en", ["embed", "configuration", "locale"], e)
                    }),
                    j = Object(d.useMemo)(function() {
                        return function createEmojiMartI18nProp(e) {
                            return {
                                search: e("emoji.search"),
                                clear: e("emoji.clear"),
                                notfound: e("emoji.notfound"),
                                skintext: e("emoji.skintext"),
                                categories: {
                                    search: e("emoji.category.search"),
                                    recent: e("emoji.category.recent"),
                                    smileys: e("emoji.category.smileys"),
                                    people: e("emoji.category.smileys"),
                                    nature: e("emoji.category.nature"),
                                    foods: e("emoji.category.foods"),
                                    activity: e("emoji.category.activity"),
                                    places: e("emoji.category.places"),
                                    objects: e("emoji.category.objects"),
                                    symbols: e("emoji.category.symbols"),
                                    flags: e("emoji.category.flags"),
                                    custom: e("emoji.category.custom")
                                },
                                categorieslabel: e("emoji.categorieslabel"),
                                skintones: {
                                    1: e("emoji.skintone1"),
                                    2: e("emoji.skintone2"),
                                    3: e("emoji.skintone3"),
                                    4: e("emoji.skintone4"),
                                    5: e("emoji.skintone5"),
                                    6: e("emoji.skintone6")
                                }
                            }
                        }(l)
                    }, [l]),
                    E = Object(d.useRef)(null),
                    w = Object(d.useState)(null),
                    y = Object(c.a)(w, 2),
                    A = y[0],
                    C = y[1];
                Object(d.useEffect)(function() {
                    t && !A && function() {
                        var e = Object(i.a)(r.a.mark(function _callee() {
                            return r.a.wrap(function _callee$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a.e(46).then(a.t.bind(null, "8ozv", 3)).then(function(e) {
                                            return C(e.default)
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee)
                        }));
                        return function fetchEmojiData() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }, [t, A]), Object(g.a)(E, function(e) {
                    o(e)
                });
                return f.a.createElement("div", {
                    ref: E,
                    className: s()("drift-widget-composer-emoji-picker", {
                        "drift-widget-composer-emoji-picker--open": t,
                        "drift-widget-composer-emoji-picker--full": h,
                        "drift-widget-composer-emoji-picker--mini": !h,
                        "drift-widget-composer-emoji-picker--hide-search": O
                    })
                }, f.a.createElement(d.Suspense, {
                    fallback: f.a.createElement(p, {
                        loadingText: l("status.loading")
                    })
                }, !!A && f.a.createElement(v, {
                    darkMode: !1,
                    hideSearch: O,
                    onSelect: function addEmojiToMessage(e) {
                        var t = e.native;
                        n(function(e) {
                            return "".concat(e, " ").concat(t)
                        })
                    },
                    sheetSize: 64,
                    set: "apple",
                    data: A,
                    exclude: ["flags", "symbols", "objects"],
                    perLine: 6,
                    emojiTooltip: !O,
                    i18n: j,
                    showPreview: !1,
                    showSkinTones: !1,
                    onClickOutside: o
                })))
            }
        },
        ZP32: function(e, t, a) {},
        alO1: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return FileAttachmentErrorBanner
            });
            var n = a("+Kbs"),
                r = a("nQD+"),
                i = a("ERkP"),
                c = a.n(i),
                o = a("Tr4L"),
                s = a("vwUF");

            function FileAttachmentErrorBanner(e) {
                var t = e.attachmentState,
                    a = e.clearFiles,
                    l = e.disabled,
                    u = e.reset,
                    d = Object(i.useRef)(null),
                    f = Object(o.a)().t;
                Object(i.useEffect)(function() {
                    d.current && d.current.focus()
                }, [d]);
                return c.a.createElement("div", {
                    className: "drift-widget-attachment-send-status drift-widget-attachment-send-status--failed"
                }, c.a.createElement("span", {
                    ref: d,
                    tabIndex: -1,
                    "aria-live": "assertive",
                    className: "drift-widget-attachment-send-status--text"
                }, f(t === s.b.SIZE_ERROR ? "attachment.errorSize" : "attachment.error")), c.a.createElement(r.a, {
                    "aria-label": "Failed to upload attachment. Close error message.",
                    onClick: function handleOnClick() {
                        u(), a()
                    },
                    className: "drift-widget-attachment-send-status--close",
                    disabled: l
                }, c.a.createElement(n.j, {
                    width: 10,
                    height: 10
                })))
            }
        },
        eSyn: function(e, t, a) {},
        ey6Y: function(e, t, a) {
            "use strict";
            var n = a("7IKl"),
                r = a("Tr4L");
            t.a = function useMeetingRecipients() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    a = Object(r.a)().t,
                    i = Object(n.a)(e);
                return t.length ? a("meeting.recipients", {
                    name: i,
                    others: t.length
                }) : "".concat(i)
            }
        },
        fTFZ: function(e, t, a) {
            "use strict";
            var n = a("nfbA"),
                r = a("WwEg"),
                i = a("s8DI"),
                c = a("O94r"),
                o = a.n(c),
                s = a("ZGTz"),
                l = a("Lzfp"),
                u = a("+Kbs"),
                d = a("zJmF"),
                f = a("jm9a"),
                m = a("ERkP"),
                b = a.n(m);

            function NotFound(e) {
                var t = e.className,
                    a = void 0 === t ? "" : t,
                    n = e.copy,
                    r = void 0 === n ? "" : n;
                return b.a.createElement("span", {
                    "aria-live": "polite",
                    className: o()("not-found", Object(f.a)({}, a, !!a))
                }, r)
            }
            var g = a("HXmn"),
                v = a("mj2O"),
                p = a.n(v),
                h = a("7SM1"),
                O = a("efbE"),
                j = ["en", "es", "pt", "id", "fr", "ar", "tr", "th", "vi", "de", "it", "ja", "zh-CN", "zh-TW", "ru", "ko", "pl", "nl", "ro", "hu", "sv", "cs", "hi", "bn", "da", "fa", "tl", "fi", "iw", "ms", "no", "uk"],
                E = function localeToGiphyLang(e) {
                    switch (e) {
                        case "de-DE-formal":
                            return "de";
                        case "zh":
                            return "zh-CN";
                        case "zh-HK":
                            return "zh-TW";
                        case "pt-BR":
                            return "pt"
                    }
                    return j.includes(e) ? e : "en"
                },
                w = function fetchTrendingGifs(e) {
                    return O.h.get("/trending", {
                        params: {
                            limit: e,
                            rating: "pg"
                        }
                    })
                },
                y = function fetchGifs(e, t) {
                    var a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).locale;
                    return O.h.get("/search", {
                        params: {
                            limit: t,
                            q: e,
                            lang: E(a),
                            rating: "pg"
                        }
                    })
                },
                A = a("khuT"),
                C = a("LVcX"),
                k = a("0lfv"),
                N = a("uDfI"),
                T = function useEmbedLocale() {
                    return Object(N.c)(function(e) {
                        return Object(C.a)("en", ["embed", "configuration", "locale"], e)
                    })
                },
                S = 51,
                L = [],
                I = {};

            function filterBrokenGifLinks(e) {
                return e.filter(function filterBrokenGif(e) {
                    var t = Object(C.a)(null, ["images", "preview_gif", "url"], e),
                        a = Object(C.a)(null, ["images", "original_still", "url"], e);
                    return !(!t || !a)
                })
            }
            var M = a("nvPd"),
                R = a("jITz"),
                x = a("97O6"),
                D = a.n(x),
                B = a("Tr4L"),
                F = a("ADGC"),
                P = a("oFTC");

            function resetFocus(e) {
                Object(k.m)(e) || e.focus()
            }
            a("Adtm");

            function GiphyPreview(e) {
                var t, a, n, r, i, c = e.addGiphyToMessage,
                    o = e.giphy,
                    s = null !== (t = null === o || void 0 === o ? void 0 : o.title) && void 0 !== t ? t : "Gif from Giphy";
                return b.a.createElement("li", {
                    className: "drift-widget-composer-giphy-list-item"
                }, b.a.createElement("button", {
                    "aria-label": s,
                    className: "giphy-button",
                    onClick: function handleOnClick() {
                        return c(o)
                    }
                }, b.a.createElement("img", {
                    alt: s,
                    "aria-label": s,
                    className: "giphy-animated",
                    src: null === o || void 0 === o ? void 0 : null === (a = o.images) || void 0 === a ? void 0 : null === (n = a.preview_gif) || void 0 === n ? void 0 : n.url
                }), b.a.createElement("img", {
                    alt: s,
                    "aria-label": s,
                    className: "giphy-still",
                    src: null === o || void 0 === o ? void 0 : null === (r = o.images) || void 0 === r ? void 0 : null === (i = r.original_still) || void 0 === i ? void 0 : i.url
                })))
            }
            a("RJSH");
            var G = function GiphyPicker(e) {
                    var t = e.onAddGiphy,
                        a = e.disabled,
                        n = void 0 !== a && a,
                        r = Object(B.a)().t,
                        c = Object(m.useState)(!1),
                        s = Object(i.a)(c, 2),
                        f = s[0],
                        v = s[1],
                        O = Object(m.useState)(!1),
                        j = Object(i.a)(O, 2),
                        E = j[0],
                        C = j[1],
                        N = Object(m.useRef)(null),
                        x = Object(m.useRef)(null),
                        G = Object(M.a)(""),
                        U = G.value,
                        _ = G.onChange,
                        V = Object(R.a)({
                            targetKey: "Escape"
                        }),
                        H = Object(F.a)(),
                        z = function useFetchTrendingGifs(e) {
                            var t = Object(m.useState)(!1),
                                a = Object(i.a)(t, 2),
                                n = a[0],
                                r = a[1];
                            return Object(m.useEffect)(function() {
                                function _fetchTrending() {
                                    return (_fetchTrending = Object(h.a)(p.a.mark(function _callee() {
                                        var e, t, a;
                                        return p.a.wrap(function _callee$(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.prev = 0, r(!0), n.next = 4, w(S);
                                                case 4:
                                                    t = n.sent, a = t.data, L = filterBrokenGifLinks(null !== (e = null === a || void 0 === a ? void 0 : a.data) && void 0 !== e ? e : []), n.next = 12;
                                                    break;
                                                case 9:
                                                    n.prev = 9, n.t0 = n.catch(0), Object(k.w)(["Could not search trending gifs", n.t0]);
                                                case 12:
                                                    return n.prev = 12, r(!1), n.finish(12);
                                                case 15:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }, _callee, null, [
                                            [0, 9, 12, 15]
                                        ])
                                    }))).apply(this, arguments)
                                }
                                e && Object(k.m)(L) && function fetchTrending() {
                                    return _fetchTrending.apply(this, arguments)
                                }()
                            }, [e]), {
                                isLoading: n,
                                trendingGiphys: L
                            }
                        }(f),
                        K = z.isLoading,
                        Z = z.trendingGiphys,
                        Q = function useFetchGifsByKeyword(e, t) {
                            var a, n = T(),
                                r = Object(A.a)(e, 500),
                                c = Object(m.useState)(!1),
                                o = Object(i.a)(c, 2),
                                s = o[0],
                                l = o[1];
                            return Object(m.useEffect)(function() {
                                function _searchGifs() {
                                    return (_searchGifs = Object(h.a)(p.a.mark(function _callee2() {
                                        var e, t;
                                        return p.a.wrap(function _callee2$(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    return a.prev = 0, l(!0), a.next = 4, y(r, S, {
                                                        locale: n
                                                    });
                                                case 4:
                                                    e = a.sent, t = e.data, I[r] = filterBrokenGifLinks(t.data), a.next = 12;
                                                    break;
                                                case 9:
                                                    a.prev = 9, a.t0 = a.catch(0), Object(k.w)(["Could not search gifs by keyword", a.t0]);
                                                case 12:
                                                    return a.prev = 12, l(!1), a.finish(12);
                                                case 15:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, _callee2, null, [
                                            [0, 9, 12, 15]
                                        ])
                                    }))).apply(this, arguments)
                                }
                                t && r && !I[r] && function searchGifs() {
                                    return _searchGifs.apply(this, arguments)
                                }()
                            }, [n, r, t]), {
                                debouncedValue: r,
                                isSearchLoading: s,
                                searchedGiphys: null !== (a = null === I || void 0 === I ? void 0 : I[r]) && void 0 !== a ? a : []
                            }
                        }(U, f),
                        X = Q.debouncedValue,
                        W = Q.isSearchLoading,
                        q = Q.searchedGiphys,
                        Y = Object(k.m)(X) ? Z : q;
                    Object(P.a)(N, function() {
                        f && (v(!1), resetFocus(null === x || void 0 === x ? void 0 : x.current), C(!0))
                    }), Object(m.useEffect)(function() {
                        f && V && v(!1)
                    }, [V, f]), Object(m.useEffect)(function() {
                        if (E) {
                            var e = window.setTimeout(function() {
                                C(!1)
                            }, 200);
                            return function() {
                                window.clearTimeout(e)
                            }
                        }
                    }, [E]);
                    var J = Object(m.useCallback)(function(e) {
                            var a, n = e.images,
                                r = e.title;
                            t("\n      <img\n        alt=".concat(void 0 === r ? "gif" : r, '\n        src="').concat(null === n || void 0 === n ? void 0 : null === (a = n.original) || void 0 === a ? void 0 : a.url, '"\n      />\n    ')), v(!1), resetFocus(null === x || void 0 === x ? void 0 : x.current)
                        }, [t]),
                        $ = K || W,
                        ee = !$ && !!X && Object(k.m)(q),
                        te = !$ && !Object(k.m)(Y);
                    return b.a.createElement(b.a.Fragment, null, b.a.createElement("button", {
                        className: "drift-widget-composer-giphy-toggle",
                        onClick: function openGiphy(e) {
                            if (E) return e.preventDefault();
                            v(function(e) {
                                return !e
                            })
                        },
                        "aria-label": "".concat(f ? "close" : "open", " GIF picker"),
                        "aria-pressed": f,
                        disabled: n
                    }, b.a.createElement(u.m, null)), b.a.createElement("div", {
                        "aria-expanded": f,
                        tabIndex: -1,
                        className: o()("drift-widget-composer-giphy-picker", {
                            "drift-widget-composer-giphy-picker--show": f,
                            "drift-widget-composer-giphy-picker--mobile": H
                        }),
                        ref: N
                    }, b.a.createElement("div", {
                        className: "drift-widget-composer-giphy-picker-search"
                    }, b.a.createElement(l.a, {
                        ariaLabel: "Search for a GIF",
                        ariaLabelledBy: "searchGIF",
                        className: "drift-widget--giphy-picker-search-label",
                        htmlFor: "giphy-picker-search"
                    }), b.a.createElement(d.a, {
                        type: "search",
                        placeholder: r("gifPicker.searchPlaceholder"),
                        value: U,
                        onChange: _,
                        onFocus: function onInputFocus(e) {
                            H && e.stopPropagation()
                        },
                        "aria-label": "Search GIFs",
                        "aria-live": "polite",
                        id: "giphy-picker-search",
                        shouldFocus: f && !H
                    }), !!U && b.a.createElement("button", {
                        "aria-label": "Clear GIF search field",
                        className: "drift-widget--giphy-picker-search-clear",
                        onClick: function clearInput() {
                            _(null)
                        }
                    }, b.a.createElement(u.j, null))), b.a.createElement("div", {
                        className: "drift-widget-composer-giphy-picker-list-wrapper"
                    }, $ && b.a.createElement(g.a, {
                        titleId: "GiphyPicker"
                    }), ee && b.a.createElement(NotFound, {
                        className: "not-found--giphys",
                        copy: "No gifs found"
                    }), te && b.a.createElement("ul", {
                        className: "drift-widget-composer-giphy-list"
                    }, Y.map(function(e, t) {
                        return b.a.createElement(GiphyPreview, {
                            addGiphyToMessage: J,
                            giphy: e,
                            key: "".concat(e.id, "-").concat(t)
                        })
                    }))), b.a.createElement("span", {
                        className: "drift-widget-composer-giphy-picker-power"
                    }, b.a.createElement("img", {
                        src: D.a,
                        alt: r("gifPicker.poweredBy")
                    }))))
                },
                U = a("908p"),
                _ = a("YYte"),
                V = a("mZ4K"),
                H = a("UXBQ"),
                z = a("K7i0"),
                K = a("vwUF"),
                Z = function useAttachmentUpload(e) {
                    var t = e.onAttachmentUploadComplete,
                        a = e.activeConversation,
                        n = Object(N.b)(),
                        r = Object(m.useState)(K.b.NONE),
                        c = Object(i.a)(r, 2),
                        o = c[0],
                        s = c[1],
                        l = Object(N.c)(function(e) {
                            return Object(C.a)(!1, ["embed", "configuration", "theme"], e)
                        }).allowEndUserFileUpload,
                        u = Object(m.useCallback)(function() {
                            var e = Object(h.a)(p.a.mark(function _callee(e) {
                                var r, i, c, u;
                                return p.a.wrap(function _callee$(d) {
                                    for (;;) switch (d.prev = d.next) {
                                        case 0:
                                            if (l) {
                                                d.next = 2;
                                                break
                                            }
                                            return d.abrupt("return");
                                        case 2:
                                            if (o !== K.b.ERROR) {
                                                d.next = 4;
                                                break
                                            }
                                            return d.abrupt("return");
                                        case 4:
                                            return s(K.b.PENDING), r = e.filter(function(e) {
                                                return e.size < K.a.DEFAULT
                                            }).map(function(e) {
                                                return Object(H.b)(e, a)
                                            }), d.prev = 6, d.next = 9, Promise.all(r);
                                        case 9:
                                            i = d.sent, c = i.map(function(e) {
                                                return e.data
                                            }), u = c.map(function(e) {
                                                return e.id
                                            }), n(Object(z.e)({
                                                attachments: c
                                            })), t(u), s(K.b.NONE), d.next = 20;
                                            break;
                                        case 17:
                                            d.prev = 17, d.t0 = d.catch(6), s(K.b.ERROR);
                                        case 20:
                                        case "end":
                                            return d.stop()
                                    }
                                }, _callee, null, [
                                    [6, 17]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [a, l, o, n, t]);
                    return {
                        attachmentState: o,
                        uploadAttachments: u,
                        resetAttachmentState: function resetAttachmentState() {
                            s(K.b.NONE)
                        }
                    }
                },
                Q = a("xwTo"),
                X = a("da4L"),
                W = a("i9gz"),
                q = a("TbSn"),
                Y = a("kNJ0"),
                J = function useComposerState() {
                    var e = Object(N.c)(Q.f),
                        t = Object(N.c)(Q.g);
                    return Object(m.useMemo)(function() {
                        if (e) return ye.UNAVAILABLE;
                        if (Object(W.a)(t)) return ye.AVAILABLE;
                        var a = Object(q.a)(t),
                            n = Object(Y.a)(-2, t),
                            r = Object(X.e)(n) && Object(X.h)(a);
                        return Object(X.e)(a) || r || Object(X.i)(a) ? ye.UNAVAILABLE_BUTTONS : Object(X.n)(a) || Object(X.n)(n) && Object(X.h)(a) ? ye.AVAILABLE_BUTTONS : ye.AVAILABLE
                    }, [e, t])
                },
                $ = a("SFoa"),
                ee = a("iJtH"),
                te = a("t8ds");

            function isJapaneseWidget() {
                var e, t, a;
                return (null === (e = Object($.f)()) || void 0 === e ? void 0 : e.indexOf("ja")) > -1 || (null === (t = navigator) || void 0 === t ? void 0 : null === (a = t.language) || void 0 === a ? void 0 : a.indexOf("ja")) > -1
            }
            var ae = a("Za8o"),
                ne = a("z24s"),
                re = a("0B8E"),
                ie = function usePasteFiles(e) {
                    var t = e.inputRef,
                        a = Object(m.useState)([]),
                        n = Object(i.a)(a, 2),
                        c = n[0],
                        o = n[1],
                        s = Object(m.useState)(null),
                        l = Object(i.a)(s, 2),
                        u = l[0],
                        d = l[1],
                        f = Object(m.useCallback)(function(e) {
                            if (e.clipboardData && e.clipboardData.files) {
                                var t = Object(r.a)(e.clipboardData.files);
                                t.length && o(Object(re.a)([].concat(Object(r.a)(c), Object(r.a)(t)))), t.length && d(e.clipboardData.getData("Text"))
                            }
                        }, [c]);
                    return Object(m.useEffect)(function() {
                        t && (t.current.onpaste = f)
                    }, [t, f]), {
                        pastedTextFromFiles: u,
                        pastedFiles: c,
                        clearFiles: function clearFiles() {
                            o([]), d(null)
                        }
                    }
                },
                ce = a("58kB"),
                oe = a("vjCh"),
                se = a("0HCW"),
                le = a("qixE"),
                ue = a("2XY6"),
                de = a("6lNa"),
                fe = function useSendMessage() {
                    var e = Object(N.b)(),
                        t = Object(N.c)(Q.h),
                        a = Object(N.c)(se.i),
                        n = Object(N.c)(se.a),
                        r = Object(N.c)(se.b),
                        i = Object(N.c)(se.f),
                        c = Object(N.c)(ue.d);
                    return Object(m.useCallback)(function() {
                        var o = Object(h.a)(p.a.mark(function _callee(o) {
                            var s;
                            return p.a.wrap(function _callee$(l) {
                                for (;;) switch (l.prev = l.next) {
                                    case 0:
                                        if (!a && !c || t) {
                                            l.next = 7;
                                            break
                                        }
                                        if (!i) {
                                            l.next = 6;
                                            break
                                        }
                                        return l.next = 4, Object(le.a)(de.b.SUBMITTED);
                                    case 4:
                                        (null === (s = l.sent) || void 0 === s ? void 0 : s.conversationId) && (null === o || void 0 === o ? void 0 : o.message) && !o.message.conversationId && (o.message.conversationId = s.conversationId);
                                    case 6:
                                        Object(oe.l)(n, r);
                                    case 7:
                                        e(Object(z.n)(o));
                                    case 8:
                                    case "end":
                                        return l.stop()
                                }
                            }, _callee)
                        }));
                        return function(e) {
                            return o.apply(this, arguments)
                        }
                    }(), [i, n, r, e, c, t, a])
                },
                me = a("lE29"),
                be = a("qwiD"),
                ge = a("7VeV"),
                ve = function useTypingIndicators(e) {
                    var t = e.activeConversationId,
                        a = Object(N.b)(),
                        n = Object(m.useRef)(),
                        r = Object(N.c)(function(e) {
                            return e.session.endUser.type
                        }),
                        i = Object(N.c)(function(e) {
                            return e.session.endUser.id
                        }),
                        c = Object(m.useCallback)(function(e) {
                            a(Object(be.e)("chat", "user", "typing:".concat(e), {
                                userId: i,
                                userType: r,
                                conversationId: t,
                                participants: []
                            }))
                        }, [t, a, i, r]),
                        o = Object(m.useMemo)(function() {
                            return Object(ge.throttle)(5e3, !1, function() {
                                return c("started")
                            })
                        }, [c]);
                    return {
                        sendTypingStarted: function sendTypingStarted() {
                            o(), n.current && window.clearTimeout(n.current), n.current = window.setTimeout(function() {
                                return c("finished")
                            }, 5e3)
                        },
                        sendTypingFinished: function sendTypingFinished() {
                            n.current && (window.clearTimeout(n.current), n.current = null), c("finished")
                        }
                    }
                },
                pe = a("bYXQ"),
                he = a("Hvhg"),
                Oe = a("+oIK"),
                je = a("ovDp");

            function _extends() {
                return (_extends = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Ee = m.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.0645 9.4955L14.4025 9.713C14.2785 10.143 14.1065 10.558 13.889 10.953L14.906 12.2865C15.058 12.485 15.0395 12.765 14.8635 12.9425L13.4845 14.3305C13.3105 14.506 13.0335 14.528 12.8335 14.3805L11.4705 13.3785C11.0725 13.5985 10.653 13.773 10.2175 13.9L9.9955 15.566C9.9625 15.8145 9.7505 16 9.5 16H7.5C7.2485 16 7.0365 15.813 7.004 15.5645L6.79 13.9045C6.361 13.7815 5.947 13.611 5.553 13.3955L4.2125 14.4075C4.0135 14.5575 3.7355 14.538 3.559 14.3635L2.1695 12.985C1.9945 12.811 1.9725 12.535 2.118 12.335L3.113 10.973C2.8875 10.567 2.711 10.141 2.5845 9.7005L0.938 9.496C0.688 9.465 0.5 9.2525 0.5 9V7C0.5 6.748 0.687 6.5355 0.937 6.5045L2.595 6.2935C2.7235 5.854 2.901 5.432 3.125 5.0315L2.098 3.7185C1.9425 3.5195 1.9595 3.2365 2.137 3.058L3.5165 1.6695C3.693 1.492 3.974 1.472 4.174 1.624L5.521 2.6485C5.9225 2.4265 6.3455 2.251 6.7845 2.124L7.004 0.4355C7.0365 0.1865 7.249 0 7.5 0H9.5C9.7525 0 9.9655 0.1885 9.9965 0.439L10.202 2.1225C10.627 2.245 11.0375 2.414 11.4295 2.627L12.787 1.5935C12.9865 1.4425 13.2655 1.4605 13.4425 1.6365L14.8305 3.016C15.0075 3.192 15.028 3.472 14.8775 3.6715L13.861 5.0215C14.086 5.4225 14.2645 5.8455 14.394 6.2855L16.065 6.5045C16.3135 6.537 16.5 6.7485 16.5 7V9C16.5 9.251 16.3135 9.4635 16.0645 9.4955ZM15.5 7.4385L13.9305 7.233C13.724 7.2065 13.5555 7.0535 13.5085 6.8505C13.3775 6.2855 13.152 5.75 12.8375 5.2595C12.725 5.0835 12.7335 4.856 12.8595 4.689L13.8165 3.418L13.0465 2.653L11.7705 3.6245C11.605 3.75 11.38 3.761 11.2045 3.652C10.716 3.35 10.1885 3.134 9.637 3.009C9.431 2.963 9.2765 2.792 9.2505 2.5825L9.0575 1H7.939L7.7325 2.588C7.7055 2.796 7.552 2.9645 7.3475 3.011C6.7825 3.1395 6.246 3.3625 5.7525 3.6735C5.576 3.7845 5.3495 3.7745 5.183 3.648L3.917 2.6855L3.157 3.4495L4.124 4.686C4.2545 4.8535 4.2655 5.0845 4.1515 5.263C3.837 5.7555 3.6115 6.2925 3.48 6.8595C3.433 7.0635 3.264 7.2165 3.056 7.2425L1.5 7.4405V8.5585L3.046 8.7505C3.2555 8.7765 3.426 8.9315 3.472 9.1375C3.598 9.7 3.821 10.2375 4.134 10.7355C4.2425 10.909 4.235 11.1315 4.114 11.297L3.179 12.5775L3.956 13.348L5.2165 12.397C5.3815 12.2725 5.606 12.2625 5.781 12.3715C6.2695 12.6745 6.798 12.892 7.3525 13.017C7.557 13.0635 7.711 13.2325 7.738 13.441L7.9395 15H9.062L9.2705 13.4345C9.298 13.228 9.451 13.0595 9.6545 13.013C10.214 12.8845 10.746 12.6635 11.235 12.3565C11.4085 12.247 11.632 12.255 11.7975 12.3775L13.079 13.3195L13.847 12.5465L12.8905 11.293C12.764 11.1275 12.754 10.901 12.8645 10.7245C13.17 10.2355 13.3895 9.7055 13.5155 9.1505C13.562 8.946 13.7305 8.792 13.938 8.7655L15.5 8.561V7.4385ZM8.5 11.009C6.8455 11.009 5.5 9.6635 5.5 8.009C5.5 6.355 6.8455 5.009 8.5 5.009C10.1545 5.009 11.5 6.355 11.5 8.009C11.5 9.6635 10.1545 11.009 8.5 11.009ZM8.5 6.009C7.397 6.009 6.5 6.9065 6.5 8.009C6.5 9.1115 7.397 10.009 8.5 10.009C9.603 10.009 10.5 9.1115 10.5 8.009C10.5 6.9065 9.603 6.009 8.5 6.009Z",
                fill: "#687882"
            });

            function SvgGearWheel(e, t) {
                return m.createElement("svg", _extends({
                    width: 17,
                    height: 16,
                    viewBox: "0 0 17 16",
                    fill: "none",
                    ref: t
                }, e), Ee)
            }
            var we = m.forwardRef(SvgGearWheel);
            a.p, a("iaVW");

            function AdditionalSettings(e) {
                var t = e.disabled,
                    a = e.setUseEnter,
                    n = e.useEnter,
                    r = Object(m.useRef)(),
                    c = Object(m.useRef)(),
                    o = function useToggleState() {
                        var e = Object(m.useState)(!1),
                            t = Object(i.a)(e, 2),
                            a = t[0],
                            n = t[1];
                        return [a, function() {
                            n(function(e) {
                                return !e
                            })
                        }]
                    }(),
                    s = Object(i.a)(o, 2),
                    l = s[0],
                    u = s[1],
                    d = Object(R.a)({
                        targetKey: "Escape"
                    });
                Object(P.a)(c, u), Object(m.useEffect)(function() {
                    l && d && u()
                }, [d, u, l]);
                var f = function handleOnChange(e) {
                    Object(k.n)({
                        type: "log",
                        data: ["AdditionalSettings", "ModifiedEnterBehaviour:" + e],
                        internal: !0
                    }), a()
                };
                return b.a.createElement(b.a.Fragment, null, b.a.createElement("button", {
                    "aria-hidden": t,
                    "aria-label": "".concat(l ? "close" : "open", " composer settings"),
                    className: "drift-widget-composer-additional-settings",
                    disabled: t,
                    onClick: function handleSettingsGearClicked() {
                        Object(k.n)({
                            type: "log",
                            data: ["AdditionalSettings", "SettingsGearClicked"],
                            internal: !0
                        }), u()
                    },
                    ref: r
                }, b.a.createElement(we, null)), l && b.a.createElement("div", {
                    className: "drift-widget-composer-additional-settings--overlay",
                    ref: c
                }, b.a.createElement("span", null, "Press ", b.a.createElement("span", {
                    className: "keyboard-key"
                }, "Enter"), " to\u2026"), b.a.createElement("label", {
                    htmlFor: "sendIt"
                }, b.a.createElement("input", {
                    id: "sendIt",
                    type: "radio",
                    onChange: function onChange() {
                        return f("sendMessage")
                    },
                    checked: n
                }), "Send the message"), b.a.createElement("label", {
                    htmlFor: "newLine"
                }, b.a.createElement("input", {
                    id: "newLine",
                    type: "radio",
                    onChange: function onChange() {
                        return f("newLine")
                    },
                    checked: !n
                }), "Start a new line")))
            }

            function AttachmentIconButton(e) {
                var t = e.isDisabled,
                    a = e.open;
                return b.a.createElement("button", {
                    "aria-label": "Add an attachment",
                    className: "drift-widget-composer-file-attachment",
                    disabled: t,
                    onClick: a
                }, b.a.createElement(u.a, null))
            }
            a("alO1"), a("IuzP");
            a.d(t, "a", function() {
                return ye
            });
            var ye, Ae = "GIF",
                Ce = "TEXT",
                ke = function validateMessageText(e) {
                    return !Object(k.m)(e) && e.trim().length > 0
                };
            ! function(e) {
                e[e.AVAILABLE = 0] = "AVAILABLE", e[e.AVAILABLE_BUTTONS = 1] = "AVAILABLE_BUTTONS", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.UNAVAILABLE_BUTTONS = 3] = "UNAVAILABLE_BUTTONS"
            }(ye || (ye = {}));
            t.b = b.a.memo(function Composer(e) {
                var t = e.disabled,
                    c = void 0 !== t && t,
                    l = e.chatHidden,
                    d = e.alwaysShowSendAction,
                    f = void 0 !== d && d,
                    v = e.useGifPicker,
                    O = void 0 === v || v,
                    j = e.alwaysShow,
                    E = void 0 !== j && j,
                    w = Object(F.a)(!0),
                    y = Object(m.useRef)(null),
                    A = Object(m.useRef)(null),
                    T = J(),
                    S = fe(),
                    L = function useEnterToSubmit() {
                        var e = Object(m.useState)(!0),
                            t = Object(i.a)(e, 2),
                            a = t[0],
                            n = t[1],
                            r = Object(F.a)();
                        return Object(m.useEffect)(function() {
                            function _initialStateFromStorage() {
                                return (_initialStateFromStorage = Object(h.a)(p.a.mark(function _callee() {
                                    var e, t;
                                    return p.a.wrap(function _callee$(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                return a.prev = 0, a.next = 3, te.a.get(ee.c);
                                            case 3:
                                                e = a.sent, t = e.data, n(Object(k.m)(t) ? !isJapaneseWidget() : t), a.next = 11;
                                                break;
                                            case 8:
                                                a.prev = 8, a.t0 = a.catch(0), console.warn(a.t0);
                                            case 11:
                                            case "end":
                                                return a.stop()
                                        }
                                    }, _callee, null, [
                                        [0, 8]
                                    ])
                                }))).apply(this, arguments)
                            }
                            r || function initialStateFromStorage() {
                                return _initialStateFromStorage.apply(this, arguments)
                            }()
                        }, [r]), [a, function() {
                            n(function(e) {
                                return te.a.set(ee.c, !e), !e
                            })
                        }]
                    }(),
                    I = Object(i.a)(L, 2),
                    M = I[0],
                    R = I[1],
                    x = Object(m.useState)(""),
                    D = Object(i.a)(x, 2),
                    P = D[0],
                    H = D[1],
                    z = Object(m.useState)(!1),
                    Q = Object(i.a)(z, 2),
                    X = Q[0],
                    W = Q[1],
                    q = Object(ne.a)(y),
                    Y = Object(m.useState)([]),
                    $ = Object(i.a)(Y, 2),
                    re = $[0],
                    oe = $[1],
                    se = Object(N.c)(function(e) {
                        return e.view
                    }),
                    le = se.matchedHours,
                    ue = se.chatOpen,
                    de = Object(N.c)(function(e) {
                        return e.conversations.attachments
                    }),
                    be = Object(N.c)(function(e) {
                        return e.conversations.activeConversation
                    }),
                    ge = Object(N.c)(function(e) {
                        return e.session.endUser.id
                    }),
                    Ee = Object(N.c)(function(e) {
                        return Object(C.a)(!1, ["embed", "configuration", "theme"], e)
                    }).allowEndUserFileUpload,
                    we = Object(N.c)(he.h),
                    Ne = O && we,
                    Te = Object(B.a)().t,
                    Se = Object(V.a)(),
                    Le = Object(me.a)(),
                    Ie = Le.activeColor,
                    Me = Le.composerTheme,
                    Re = Le.composerButtonHoverColor,
                    xe = Object(ce.a)(Se).recipient,
                    De = ie({
                        inputRef: y
                    }),
                    Be = De.pastedFiles,
                    Fe = De.clearFiles,
                    Pe = ve({
                        activeConversationId: be
                    }),
                    Ge = Pe.sendTypingStarted,
                    Ue = Pe.sendTypingFinished,
                    _e = Z({
                        activeConversation: be,
                        onAttachmentUploadComplete: Object(m.useCallback)(function onAttachmentUploadComplete(e) {
                            oe(function(t) {
                                return [].concat(Object(r.a)(t), Object(r.a)(e))
                            }), Fe()
                        }, [])
                    }),
                    Ve = _e.attachmentState,
                    He = _e.uploadAttachments,
                    ze = _e.resetAttachmentState,
                    Ke = T === ye.AVAILABLE || T === ye.AVAILABLE_BUTTONS,
                    Ze = Object(m.useMemo)(function() {
                        return !E && (c || !Ke)
                    }, [E, c, Ke]),
                    Qe = Object(je.a)({
                        onDrop: He,
                        disabled: c || !Ke || !Ee
                    }),
                    Xe = Qe.getRootProps,
                    We = Qe.getInputProps,
                    qe = Qe.open,
                    Ye = ke(P) || !Object(k.m)(re),
                    Je = Ve === K.b.PENDING,
                    $e = Ve === K.b.ERROR || Ve === K.b.SIZE_ERROR,
                    et = c || !Ke || !!Be.length;
                var tt = Object(m.useCallback)(function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ce,
                        a = re ? {
                            attachments: re
                        } : {},
                        r = be ? {} : {
                            sentWelcomeMessage: le
                        };
                    Ue();
                    var i = t === Ce ? Object(k.r)(e) : e;
                    S({
                            message: Object(Oe.a)(Object(n.a)({
                                message: i,
                                activeConversation: be || null,
                                authorId: ge,
                                attributes: r
                            }, a))
                        }), H(""), oe([]), ze(),
                        function setFocusOnComposer() {
                            y.current.focus(), y.current.classList.remove("focus-visible")
                        }()
                }, [be, ge, le, ze, S, Ue, re]);
                Object(m.useEffect)(function() {
                    Ee ? Be.length && !Je && He(Be) : Fe()
                }, [Ee, Je, Fe, Be, He]), Object(m.useEffect)(function() {
                    be && H("")
                }, [be]), Object(ae.a)(y, ue && Ke && !l && T === ye.AVAILABLE);
                var at = Object(m.useMemo)(function() {
                        return Ke ? Te("composer.replyToPlaceholder", {
                            name: xe.name
                        }) : Te(T === ye.UNAVAILABLE_BUTTONS ? "composer.chooseOptionAbove" : "composer.replyDisabled")
                    }, [Ke, xe.name, T, Te]),
                    nt = Ee && !Object(pe.c)(be),
                    rt = Ne && !Ye && !!be,
                    it = f || !Ne || Ye,
                    ct = nt || it || rt,
                    ot = c || !Ye || Je,
                    st = Object(m.lazy)(function() {
                        return a.e(38).then(a.bind(null, "B2YN"))
                    });
                return b.a.createElement(b.a.Fragment, null, (re.length || Je || $e) && b.a.createElement(m.Suspense, {
                    fallback: b.a.createElement(g.a, {
                        titleId: "AttachmentPreviews"
                    })
                }, b.a.createElement(st, {
                    activeColor: Ie,
                    attachments: de,
                    attachmentError: $e,
                    attachmentState: Ve,
                    attachmentUploadPending: Je,
                    clearFiles: Fe,
                    composerDisabled: c,
                    resetAttachmentState: ze,
                    setUploadedAttachments: oe,
                    uploadedAttachments: re
                })), b.a.createElement("style", null, "\n          .drift-widget-composer--default button:hover > svg path {\n            fill: ".concat(Re, "\n          }\n        ")), b.a.createElement("div", Object.assign({}, Xe({
                    onClick: function onClick(e) {
                        return e.stopPropagation()
                    }
                }), {
                    className: o()("drift-widget-composer--default", {
                        "drift-widget-composer--mobile": w,
                        "drift-widget-composer--hidden": Ze
                    }),
                    tabIndex: void 0
                }), Ee && b.a.createElement("input", We()), b.a.createElement("div", {
                    className: "drift-widget-composer--text-area"
                }, b.a.createElement("pre", null, Ke && P.length ? P : " "), b.a.createElement(_.a, {
                    content: at,
                    htmlFor: "drift-widget-composer-input",
                    type: "label"
                }), b.a.createElement("textarea", {
                    className: o()("drift-widget-input js-focus-visible--controlled", {
                        "keyboard-focused--outlined": q
                    }),
                    ref: y,
                    placeholder: at,
                    value: Ke ? P : "",
                    onChange: function onTextareaChange(e) {
                        Be.length || (H(e.target.value), Ge())
                    },
                    onKeyDown: function handleTextareaKeydown(e) {
                        (M && ("Enter" === e.key || 13 === e.keyCode) || !M && e.shiftKey && "Enter" === e.key) && (e.preventDefault(), (ke(P) || re.length) && (tt(P, Ce), H("")))
                    },
                    "aria-label": "message composer",
                    maxLength: 4096,
                    disabled: et,
                    id: "drift-widget-composer-input",
                    style: Me
                }), Ke && !w && b.a.createElement("button", {
                    className: "drift-widget-composer-emoji-toggle",
                    onClick: function onEmojiButtonClick() {
                        et || W(!X)
                    },
                    disabled: c,
                    "aria-pressed": X,
                    "aria-label": "".concat(X ? "close" : "open", " emoji picker")
                }, b.a.createElement(u.l, null))), Ke && !w && b.a.createElement(s.a, {
                    open: X,
                    onAddEmoji: function onAddEmoji(e) {
                        W(!X), Ke && !c && (H(e), y.current && y.current.focus())
                    },
                    onClickOutside: function onEmojiPickerClickOutside() {
                        W(!1)
                    }
                }), Ke && ct && b.a.createElement("div", {
                    className: o()("drift-widget-composer-actions", {
                        "drift-widget-composer-actions-expanded": nt && (rt || it)
                    })
                }, rt && b.a.createElement(G, {
                    onAddGiphy: function onAddGiphy(e) {
                        return tt(e, Ae)
                    },
                    disabled: c
                }), nt && b.a.createElement(AttachmentIconButton, {
                    isDisabled: c,
                    open: qe
                }), !w && b.a.createElement(AdditionalSettings, {
                    disabled: c,
                    setUseEnter: R,
                    useEnter: M
                }), it && b.a.createElement("button", {
                    className: o()("drift-widget-composer-send-button", {
                        "drift-widget-composer-send-button--disabled": ot
                    }),
                    "aria-label": "send message",
                    onClick: function onClick() {
                        return tt(P, Ce)
                    },
                    disabled: ot || Je,
                    ref: A
                }, b.a.createElement(U.a, {
                    color: "#".concat(Ie)
                })))))
            })
        },
        fpJs: function(e, t, a) {
            "use strict";
            var n = a("uDfI"),
                r = a("VkHq"),
                i = function showBrandingSelector(e) {
                    return e.embed.configuration.showBranding || !1
                };
            t.a = function useHasFooter() {
                var e = Object(n.c)(i),
                    t = Object(r.a)().noPolicy;
                return e || !t
            }
        },
        fpMl: function(e, t, a) {},
        gRD2: function(e, t, a) {
            "use strict";
            var n = a("mj2O"),
                r = a.n(n),
                i = a("7SM1"),
                c = a("mssF"),
                o = a("K7i0"),
                s = a("xwTo"),
                l = a("pu/X"),
                u = a("LVcX"),
                d = a("ERkP"),
                f = a("uDfI"),
                m = a("0lfv");
            t.a = function useFetchActiveConverationMessages() {
                var e = Object(f.b)(),
                    t = Object(f.c)(s.a),
                    a = Object(f.c)(s.e);
                return {
                    fetchMessages: Object(d.useCallback)(function() {
                        var n = Object(i.a)(r.a.mark(function _callee(n) {
                            var i, s, d, f, b, g;
                            return r.a.wrap(function _callee$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (i = n.limit, s = void 0 === i ? 30 : i, d = n.from, f = void 0 === d ? null : d, !a) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return r.prev = 3, r.next = 6, Object(c.d)({
                                            conversationId: t,
                                            limit: s,
                                            from: f
                                        });
                                    case 6:
                                        return b = r.sent, g = b.data, e(Object(o.k)({
                                            messages: g.data,
                                            hasMoreMessages: Object(u.a)(!1, ["pagination", "more"], g),
                                            nextPageMessageId: Object(u.a)(null, ["pagination", "next"], g),
                                            conversationId: t
                                        })), r.abrupt("return", g);
                                    case 12:
                                        r.prev = 12, r.t0 = r.catch(3), Object(m.f)([l.a.MESSAGE.FETCH_MESSAGES, " convoId:" + t], r.t0, !0);
                                    case 15:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee, null, [
                                [3, 12]
                            ])
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(), [t, e, a])
                }
            }
        },
        hhdZ: function(e, t, a) {
            "use strict";
            var n = a("da4L"),
                r = a("LVcX"),
                i = a("i9gz"),
                c = a("TbSn"),
                o = a("uDfI");
            t.a = function useLastMessage(e) {
                var t = Object(o.c)(function(t) {
                        return Object(r.a)(null, ["conversations", "conversations", e, "lastMessage"], t)
                    }),
                    a = Object(o.c)(function(t) {
                        var a = Object(r.a)({}, ["conversations", "messages", e], t);
                        if (!Object(i.a)(a)) {
                            var o = Object(n.q)(a);
                            if (o.length) return Object(c.a)(o)
                        }
                        return null
                    });
                return t || a || {}
            }
        },
        iaVW: function(e, t, a) {},
        jITz: function(e, t, a) {
            "use strict";
            var n = a("s8DI"),
                r = a("ERkP"),
                i = function useEventListener(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                        n = Object(r.useRef)();
                    Object(r.useEffect)(function() {
                        n.current = t
                    }, [t]), Object(r.useEffect)(function() {
                        if (a && a.addEventListener) {
                            var t = function eventListener(e) {
                                return n.current(e)
                            };
                            return a.addEventListener(e, t),
                                function() {
                                    a.removeEventListener(e, t)
                                }
                        }
                    }, [e, a])
                };
            t.a = function useKeyPress(e) {
                var t = e.element,
                    a = void 0 === t ? window : t,
                    c = e.targetKey,
                    o = e.onKeyDown,
                    s = void 0 === o ? function() {} : o,
                    l = e.onKeyUp,
                    u = void 0 === l ? function() {} : l,
                    d = Object(r.useState)(!1),
                    f = Object(n.a)(d, 2),
                    m = f[0],
                    b = f[1],
                    g = Object(r.useCallback)(function(e) {
                        e.key === c && (b(!0), s(e))
                    }, [c, s]),
                    v = Object(r.useCallback)(function(e) {
                        e.key === c && (b(!1), u(e))
                    }, [c, u]);
                return i("keydown", g, a), i("keyup", v, a), m
            }
        },
        khuT: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return useDebounce
            });
            var n = a("s8DI"),
                r = a("ERkP");

            function useDebounce(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 750,
                    a = Object(r.useState)(e),
                    i = Object(n.a)(a, 2),
                    c = i[0],
                    o = i[1];
                return Object(r.useEffect)(function() {
                    var a = setTimeout(function() {
                        o(e)
                    }, t);
                    return function() {
                        clearTimeout(a)
                    }
                }, [e, t]), c
            }
        },
        mQ2C: function(e, t, a) {},
        nvPd: function(e, t, a) {
            "use strict";
            var n = a("s8DI"),
                r = a("ERkP");
            t.a = function useInputValue(e) {
                var t = Object(r.useState)(e),
                    a = Object(n.a)(t, 2),
                    i = a[0],
                    c = a[1];
                return {
                    value: i,
                    onChange: Object(r.useCallback)(function(e) {
                        var t, a;
                        c(null !== (t = null === e || void 0 === e ? void 0 : null === (a = e.currentTarget) || void 0 === a ? void 0 : a.value) && void 0 !== t ? t : "")
                    }, [])
                }
            }
        },
        "p0+K": function(e, t, a) {},
        pYxh: function(e, t, a) {
            "use strict";
            var n = a("O94r"),
                r = a.n(n),
                i = a("ERkP"),
                c = a.n(i);
            a("vYbd");
            t.a = function Card(e) {
                return c.a.createElement("div", Object.assign({}, e, {
                    className: r()("drift-widget-card", e.className),
                    tabIndex: -1
                }), e.children)
            }
        },
        "q+cq": function(e, t, a) {
            "use strict";
            var n = a("O94r"),
                r = a.n(n),
                i = a("pYxh"),
                c = a("rmQ0"),
                o = a("ey6Y"),
                s = a("ERkP"),
                l = a.n(s),
                u = a("Tr4L");
            t.a = function MeetingSchedulerCard(e) {
                var t = e.agentId,
                    a = e.additionalAgents,
                    n = void 0 === a ? [] : a,
                    s = e.children,
                    d = e.duration,
                    f = e.showRecipients,
                    m = void 0 !== f && f,
                    b = e.loadingFrame,
                    g = void 0 !== b && b,
                    v = Object(u.a)().t,
                    p = Object(o.a)(t, n),
                    h = v("meeting.scheduleAMeeting");
                m && (h = t ? "".concat(h, " with ").concat(p) : h);
                var O = g ? {} : {
                    minHeight: "350px"
                };
                return l.a.createElement(i.a, {
                    "aria-label": h,
                    "aria-hidden": "true",
                    className: r()("drift-meeting-scheduler", {
                        "drift-meeting-scheduler--loader": g
                    }),
                    style: O
                }, l.a.createElement(c.a, {
                    className: "drift-meeting-scheduler--header"
                }, l.a.createElement("span", null, h), d && l.a.createElement("span", null, v("meeting.duration", {
                    duration: d
                }))), l.a.createElement("div", {
                    className: "drift-meeting-scheduler--content"
                }, s))
            }
        },
        rmQ0: function(e, t, a) {
            "use strict";
            var n = a("nfbA"),
                r = a("O94r"),
                i = a.n(r),
                c = a("lE29"),
                o = a("ERkP"),
                s = a.n(o);
            a("9wXn");
            t.a = function CardHeader(e) {
                var t = Object(c.a)().cardHeaderTheme;
                return s.a.createElement("header", Object.assign({}, e, {
                    className: i()("drift-widget-card-header", e.className),
                    style: Object(n.a)(Object(n.a)({}, t), e.style)
                }), s.a.createElement("div", {
                    className: "drift-widget-card-header--content"
                }, e.children))
            }
        },
        slYP: function(e, t, a) {
            "use strict";
            var n = a("s8DI"),
                r = a("O94r"),
                i = a.n(r),
                c = a("rmQ0"),
                o = a("+Kbs"),
                s = a("nQD+"),
                l = a("hX/4"),
                u = a("ZGTz"),
                d = a("ERkP"),
                f = a.n(d),
                m = a("ADGC"),
                b = (a("+GZi"), function TextArea(e) {
                    var t = e.value,
                        a = e.onValueChange,
                        r = Object(l.a)(e, ["value", "onValueChange"]),
                        c = Object(m.a)(!0),
                        b = Object(d.useState)(!1),
                        g = Object(n.a)(b, 2),
                        v = g[0],
                        p = g[1],
                        h = Object(d.useRef)(null),
                        O = Object(d.useRef)(null);
                    return f.a.createElement(f.a.Fragment, null, !c && f.a.createElement(u.a, {
                        open: v,
                        onAddEmoji: function onAddEmoji(e) {
                            p(!v), r.disabled || (a && a(e), O.current && O.current.focus())
                        },
                        onClickOutside: function onEmojiPickerClickOutside(e) {
                            h.current && h.current.contains(e.target) || p(!1)
                        }
                    }), f.a.createElement("div", {
                        className: "drift-widget-textarea"
                    }, f.a.createElement("pre", null, t && t.length ? t : " "), f.a.createElement("textarea", Object.assign({}, r, {
                        className: i()("drift-widget-input", r.className),
                        value: t,
                        ref: O,
                        onChange: function onTextAreaChange(e) {
                            a && a(e.target.value), r.onChange && r.onChange(e)
                        },
                        disabled: r.disabled
                    })), !r.disabled && !c && f.a.createElement(s.a, {
                        ref: h,
                        className: "drift-widget-textarea--emoji-toggle",
                        onClick: function onEmojiButtonClick() {
                            r.disabled || p(!v)
                        },
                        disabled: r.disabled,
                        "aria-expanded": v,
                        "aria-label": "emojis"
                    }, f.a.createElement(o.l, null))))
                }),
                g = a("Mur8"),
                v = a("jITz"),
                p = a("fJrp"),
                h = a("lE29"),
                O = a("K7i0"),
                j = a("+oIK"),
                E = a("da4L"),
                w = a("Tr4L"),
                y = a("uDfI"),
                A = a("PjZB");
            a("Jrg8"), t.a = function RateConversation(e) {
                var t = e.message,
                    a = Object(w.a)().t,
                    r = Object(h.a)(),
                    l = r.activeColor,
                    u = r.conversationRatingCloseButtonTheme,
                    m = r.conversationRatingHeaderTheme,
                    C = r.conversationRatingBodyTheme,
                    k = r.composerTheme,
                    N = Object(p.a)(t),
                    T = Object(y.b)(),
                    S = Object(y.c)(function(e) {
                        return e.session
                    }).endUser,
                    L = Object(d.useState)(!0),
                    I = Object(n.a)(L, 2),
                    M = I[0],
                    R = I[1],
                    x = Object(d.useState)(""),
                    D = Object(n.a)(x, 2),
                    B = D[0],
                    F = D[1],
                    P = Object(d.useState)(0),
                    G = Object(n.a)(P, 2),
                    U = G[0],
                    _ = G[1],
                    V = Object(d.useMemo)(function() {
                        return Object(E.a)(t, "ratingPrompt")
                    }, [t]),
                    H = V.ratingPromptMessage,
                    z = V.ratingAcknowledgement,
                    K = Object(v.a)({
                        targetKey: "Enter"
                    }),
                    Z = Object(d.useCallback)(function() {
                        var e = Object(j.a)({
                            message: "",
                            activeConversation: t.conversationId,
                            authorId: S.id,
                            attributes: {
                                conversationRating: {
                                    ratingPrompt: {
                                        ratingAcknowledgement: z,
                                        ratingPromptMessage: H.trim()
                                    },
                                    ratingValue: U,
                                    ratingText: B
                                }
                            },
                            contentType: A.c.BOT_CONVERSATION_RATING,
                            type: A.e.BOT_CONVERSATION_RATING
                        });
                        T(Object(O.n)({
                            message: e
                        })), R(!1)
                    }, [t, T, S.id, z, H, B, U]);
                Object(d.useEffect)(function() {
                    K && function isValidMessage(e) {
                        return e && e.trim().length > 0
                    }(B) && Z()
                }, [K, B, Z]), Object(d.useEffect)(function() {
                    N && N !== t && !M && R(!0)
                }, [t, N, M]);
                var Q = Object(d.useMemo)(function() {
                    return g.a.map(function(e) {
                        var t = e.emoji,
                            a = e.value;
                        return f.a.createElement(s.a, {
                            className: i()("drift-widget-rate-conversation--rating", {
                                "drift-widget-rate-conversation--rating--selected": a === U
                            }),
                            key: "rating_".concat(a),
                            "aria-label": "rate ".concat(a),
                            onClick: function onClick() {
                                return _(a)
                            }
                        }, t)
                    })
                }, [U]);
                if (!M) return null;
                return f.a.createElement(f.a.Fragment, null, f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--cover"
                }), f.a.createElement("div", {
                    className: "drift-widget-rate-conversation"
                }, f.a.createElement(c.a, {
                    style: m
                }, f.a.createElement("span", null, H), f.a.createElement(s.a, {
                    className: "drift-widget-rate-conversation--close-button",
                    "aria-label": "close rating",
                    onClick: function onClick() {
                        return R(!1)
                    }
                }, f.a.createElement(o.j, {
                    width: 20,
                    height: 20,
                    fill: u.color
                }))), f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--body",
                    style: C
                }, f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--ratings"
                }, Q), !!U && f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--composer"
                }, f.a.createElement("div", {
                    className: "drift-widget-rate-conversation--actions"
                }, f.a.createElement(s.a, {
                    className: "drift-widget-rate-conversation--send-button",
                    onClick: Z
                }, f.a.createElement(o.p, {
                    color: "#".concat(l)
                }))), f.a.createElement(b, {
                    "aria-label": "rating input",
                    maxLength: 4096,
                    placeholder: a("form.placeholder.tellUsMore"),
                    onValueChange: function onTextAreaValueChange(e) {
                        K || F(e)
                    },
                    value: B,
                    style: k
                })))))
            }
        },
        vYbd: function(e, t, a) {},
        vkRn: function(e, t, a) {
            "use strict";
            var n = a("O94r"),
                r = a.n(n),
                i = a("BA/U"),
                c = a("noex"),
                o = a("yEsl"),
                s = a("MQZS"),
                l = a("fw6E"),
                u = a("hhdZ"),
                d = a("58kB"),
                f = a("kXeL"),
                m = a.n(f),
                b = a("LVcX"),
                g = a("ERkP"),
                v = a.n(g),
                p = a("Tr4L"),
                h = a("uDfI"),
                O = function useUserResolution() {
                    var e = Object(p.a)().t,
                        t = Object(h.c)(function(e) {
                            return e.session.endUser
                        });
                    return Object(g.useMemo)(function() {
                        return {
                            id: t.id,
                            name: Object(b.a)(e("user.self"), ["name"], t),
                            avatar: Object(b.a)(m.a, ["socialProfile", "avatar"], t),
                            email: Object(b.a)(null, ["socialProfile", "email"], t)
                        }
                    }, [t, e])
                },
                j = a("SsZN"),
                E = a("Wjfv"),
                w = a("K7i0"),
                y = a("fsHk"),
                A = a("da4L"),
                C = a("i9gz"),
                k = (a("JhcM"), /\r?\n|\r/g),
                N = function ConversationHistoryListItem(e) {
                    var t, a, n = e.conversation,
                        r = void 0 === n ? {} : n,
                        f = Object(l.a)().onToggleConversationHistory,
                        m = Object(p.a)().t,
                        N = Object(h.b)(),
                        T = O(),
                        S = Object(g.useMemo)(function() {
                            return Object(b.a)(null, ["conversation", "id"], r)
                        }, [r]),
                        L = Object(u.a)(S),
                        I = Object(g.useMemo)(function() {
                            return Object(b.a)(null, ["authorId"], L)
                        }, [L]),
                        M = Object(d.a)(I).recipient,
                        R = Object(A.h)(L),
                        x = Object(s.a)(I, M.bot, R),
                        D = function toggleConversation(e) {
                            return function() {
                                e && (f(!1), N(Object(E.a)()), N(Object(w.o)({
                                    conversationId: e
                                })), Object(j.f)(e))
                            }
                        };
                    if (Object(C.a)(L)) return null;
                    var B = L.createdAt,
                        F = L.attributes,
                        P = void 0 === F ? {} : F,
                        G = B || (null === P || void 0 === P ? void 0 : P.generatedAt),
                        U = y.a.isTimeToday(G),
                        _ = U ? y.a.unixFormatDateTime(G, m("dt.format.time.short")) : y.a.unixFormatDateTime(G, m("dt.format.date.short")),
                        V = R ? T.name : M.name,
                        H = !!(null === P || void 0 === P ? void 0 : null === (t = P.preview) || void 0 === t ? void 0 : null === (a = t.replace(k, "")) || void 0 === a ? void 0 : a.trim()),
                        z = "".concat(U ? "today at ".concat(_) : "on ".concat(_)),
                        K = "".concat(H ? "Conversation preview: ".concat(P.preview, ".") : ""),
                        Z = "Agent ".concat(V, " is currently ").concat(x, ". "),
                        Q = "".concat(Z, " Click to open conversation with ").concat(V, " ").concat(z, ". ").concat(K);
                    return v.a.createElement("li", {
                        className: "drift-widget-conversation-list-item"
                    }, v.a.createElement("div", {
                        "aria-label": Q,
                        className: "drift-widget-conversation-list-item-body",
                        onClick: D(r.conversation.id),
                        onKeyDown: Object(i.a)(D(r.conversation.id)),
                        role: "button",
                        tabIndex: 0
                    }, R ? v.a.createElement(o.a, {
                        size: "SMALL",
                        className: "drift-widget-conversation-list-item-avatar",
                        image: T.avatar
                    }) : v.a.createElement(c.a, {
                        size: "SMALL",
                        className: "drift-widget-conversation-list-item-avatar",
                        image: M.avatarUrl,
                        id: I,
                        keyPrefix: S
                    }), v.a.createElement("div", {
                        className: "drift-widget-conversation-list-item-content"
                    }, v.a.createElement("h2", null, V), v.a.createElement("span", {
                        className: "drift-widget-conversation-list-item-time"
                    }, _), v.a.createElement("p", {
                        className: "drift-widget-conversation-list-item-last-message"
                    }, P.preview))))
                },
                T = a("DboL"),
                S = a("9xv8");
            a("PGb/"), t.a = function ConversationHistory() {
                var e = Object(l.a)().conversationHistoryOpen,
                    t = Object(h.c)(function(e) {
                        return e.conversations.conversations
                    }),
                    a = Object(g.useMemo)(function() {
                        var e;
                        return null !== (e = Object(S.d)(Object(T.a)(t), "updatedAt")) && void 0 !== e ? e : []
                    }, [t]),
                    n = Object(g.useMemo)(function() {
                        return v.a.createElement("ul", {
                            className: "drift-widget-conversation-history-list"
                        }, a.map(function(e) {
                            return v.a.createElement(N, {
                                key: e.conversation.id,
                                conversation: e
                            })
                        }))
                    }, [a]);
                return v.a.createElement("div", {
                    className: r()("drift-widget-conversation-history", {
                        "drift-widget-conversation-history--open": e
                    }),
                    "aria-hidden": !e
                }, e && n)
            }
        },
        vwUF: function(e, t, a) {
            "use strict";
            var n, r;
            a.d(t, "b", function() {
                    return n
                }), a.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.NONE = "NONE", e.PENDING = "PENDING", e.ERROR = "ERROR", e.SIZE_ERROR = "SIZE_ERROR"
                }(n || (n = {})),
                function(e) {
                    e[e.DEFAULT = 26214400] = "DEFAULT"
                }(r || (r = {}))
        },
        y0on: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a("0lfv"),
                r = function getNewMessageAriaLabel(e, t) {
                    return Object(n.m)(t) ? null : "Chat message".concat(e ? " from " + e : "", ': "').concat(t, '"')
                }
        },
        yAze: function(e, t, a) {},
        z24s: function(e, t, a) {
            "use strict";
            var n = a("s8DI"),
                r = a("ERkP");
            t.a = function useKeyboardNavigation(e) {
                var t = Object(r.useState)(!1),
                    a = Object(n.a)(t, 2),
                    i = a[0],
                    c = a[1],
                    o = Object(r.useCallback)(function(t) {
                        "Tab" === t.key && t.target === e.current && c(!0)
                    }, [e]),
                    s = Object(r.useCallback)(function(t) {
                        t.target === e.current && c(!1)
                    }, [e]);
                return Object(r.useEffect)(function() {
                    return window.addEventListener("keyup", o), window.addEventListener("focusout", s),
                        function() {
                            window.removeEventListener("keyup", o), window.removeEventListener("focusout", s)
                        }
                }, [s, o]), i
            }
        },
        zJmF: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return Input
            });
            var n = a("jm9a"),
                r = a("hX/4"),
                i = a("O94r"),
                c = a.n(i),
                o = a("z24s"),
                s = a("ERkP"),
                l = a.n(s);
            a("BNKP");

            function Input(e) {
                var t, a = e.className,
                    i = void 0 === a ? "" : a,
                    u = e.shouldFocus,
                    d = void 0 === u || u,
                    f = Object(r.a)(e, ["className", "shouldFocus"]),
                    m = Object(s.useRef)(),
                    b = Object(o.a)(m);
                return Object(s.useEffect)(function() {
                    m.current && d && m.current.focus()
                }, [d]), l.a.createElement("input", Object.assign({
                    className: c()("drift-widget-input js-focus-visible--controlled", (t = {}, Object(n.a)(t, i, !!i), Object(n.a)(t, "keyboard-focused", b), t)),
                    ref: m
                }, f))
            }
        },
        zoZM: function(e, t, a) {}
    }
]);