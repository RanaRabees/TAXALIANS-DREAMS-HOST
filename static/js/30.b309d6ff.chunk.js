(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "2uLe": function(e, t, a) {
            "use strict";
            var n = a("mj2O"),
                c = a.n(n),
                r = a("7SM1"),
                i = a("s8DI"),
                s = a("VkHq"),
                o = a("Hvhg"),
                u = a("ERkP"),
                l = a("uDfI"),
                f = a("vTYT"),
                b = a("7oto"),
                O = a("hEj5");
            t.a = function useSetPreviewHeight() {
                var e = Object(O.a)(),
                    t = Object(i.a)(e, 2),
                    a = t[0],
                    n = t[1],
                    d = Object(l.c)(function(e) {
                        return !!e.conversations.activeConversation
                    }),
                    j = Object(l.c)(o.c).showBranding,
                    h = void 0 !== j && j,
                    v = Object(s.a)().noPolicy,
                    m = Object(l.c)(function(e) {
                        return e.session.gdpr
                    }),
                    p = m.hasConsent,
                    g = m.declinedConsent,
                    w = Object(u.useCallback)(function() {
                        var e = 0,
                            t = !h && v;
                        return g && (e += 40), t && (e += 18), p || (e += t ? 14 : 7), e
                    }, [g, p, v, h]),
                    E = Object(u.useCallback)(function() {
                        return a ? a.height : 200
                    }, [a]);
                return {
                    setChatHeight: Object(u.useCallback)(function() {
                        var e = Object(r.a)(c.a.mark(function _callee(e) {
                            var t, a, n, r, i = arguments;
                            return c.a.wrap(function _callee$(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        if (t = i.length > 1 && void 0 !== i[1] && i[1], !d || !p) {
                                            c.next = 3;
                                            break
                                        }
                                        return c.abrupt("return");
                                    case 3:
                                        if (a = w(), n = E(), "205px" !== (r = e ? "".concat(n + 155 - a, "px") : "0px")) {
                                            c.next = 8;
                                            break
                                        }
                                        return c.abrupt("return");
                                    case 8:
                                        Object(b.a)({
                                            topic: "set-frame-height",
                                            message: {
                                                height: r,
                                                name: f.c.CHAT,
                                                transition: !0,
                                                transitionHeight: t
                                            }
                                        });
                                    case 9:
                                    case "end":
                                        return c.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [d, p, w, E]),
                    setPreviewRef: n,
                    setSliderHeight: Object(u.useCallback)(Object(r.a)(c.a.mark(function _callee2() {
                        var e;
                        return c.a.wrap(function _callee2$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = E(), Object(b.a)({
                                        topic: "set-frame-height",
                                        message: {
                                            height: "".concat(e + 80, "px"),
                                            name: f.c.SLIDER,
                                            transition: !0,
                                            transitionHeight: !1
                                        }
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2)
                    })), [E]),
                    setEmailCaptureHeight: Object(u.useCallback)(Object(r.a)(c.a.mark(function _callee3() {
                        var e;
                        return c.a.wrap(function _callee3$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = E(), Object(b.a)({
                                        topic: "set-frame-height",
                                        message: {
                                            height: "".concat(e + 35, "px"),
                                            name: f.c.EMAIL_CAPTURE,
                                            transition: !0,
                                            transitionHeight: !1
                                        }
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee3)
                    })), [E])
                }
            }
        },
        G5CQ: function(e, t, a) {},
        Gxm1: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return s
            }), a.d(t, "b", function() {
                return o
            });
            var n = a("QtlZ"),
                c = a("LVcX"),
                r = a("0lfv"),
                i = a("CYoe"),
                s = function markTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    n.a.dispatch(Object(i.c)(e, t))
                },
                o = function measureTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                        a = Object(c.a)(null, ["metrics", "timeByName", e], Object(n.b)());
                    return a ? (n.a.dispatch(Object(i.a)(e)), t - a) : (Object(r.n)({
                        type: "warn",
                        data: ['Tried to measure "'.concat(e, '" without mark')]
                    }), null)
                }
        },
        SrLZ: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("jm9a"),
                c = a("mj2O"),
                r = a.n(c),
                i = a("7SM1"),
                s = a("s8DI"),
                o = a("OE2q"),
                u = a("O94r"),
                l = a.n(u),
                f = a("Rqwx"),
                b = a("fTFZ"),
                O = a("vkRn"),
                d = a("CwrG"),
                j = a("HXmn"),
                h = a("8eKL"),
                v = a("slYP"),
                m = a("BY8A"),
                p = a("+/Je"),
                g = a("Y0wo"),
                w = a("fw6E"),
                E = a("1b8i"),
                _ = a("gRD2"),
                C = a("+qGC"),
                k = a("fpJs"),
                S = a("Sn8X"),
                A = a("fJrp"),
                y = a("ERkP"),
                T = a.n(y),
                L = a("7oto");
            var H = a("VkHq"),
                R = a("lE29"),
                x = a("swFs"),
                N = a("+Kbs"),
                I = a("nQD+"),
                B = a("sxX9"),
                D = a("2uLe"),
                P = a("g6eD"),
                V = a("2XY6"),
                F = a("uDfI"),
                G = (a("SwvN"), function HeaderLayout(e) {
                    var t = e.chatHidden,
                        a = Object(F.b)(),
                        n = Object(R.a)(),
                        c = n.backgroundStyles,
                        r = n.conversationHeaderTextStyles,
                        i = Object(F.c)(function(e) {
                            return e.session.gdpr
                        }).hasConsent,
                        o = Object(D.a)(),
                        u = o.setChatHeight,
                        f = o.setPreviewRef,
                        b = Object(F.c)(function(e) {
                            return e.view
                        }).chatOpen,
                        O = Object(y.useState)(Object(F.c)(V.a)),
                        d = Object(s.a)(O, 2),
                        j = d[0],
                        h = d[1],
                        v = Object(A.a)(j),
                        m = j !== v;
                    Object(y.useLayoutEffect)(function() {
                        b && !t && u(b, m)
                    }, [b, t, u, m]);
                    var p = Object(F.c)(V.a);
                    Object(y.useEffect)(function() {
                        p !== j && h(p)
                    }, [p, j]);
                    var g = B.a[j],
                        w = j !== B.b.CONVERSATION;
                    return T.a.createElement("header", {
                        className: l()("drift-widget-header", {
                            "drift-widget-header--collapsed": w,
                            "drift-widget-header--gdpr-consent": !i
                        })
                    }, T.a.createElement(x.a, {
                        style: c
                    }), T.a.createElement("div", {
                        className: "drift-widget-header--content"
                    }, T.a.createElement(g, {
                        previewRef: f,
                        resetChatHeight: function resetChatHeight() {
                            u(b, !0)
                        }
                    })), T.a.createElement(I.a, {
                        onClick: function doToggleChat() {
                            a(Object(P.e)({
                                chatOpen: !1
                            }))
                        },
                        className: "drift-widget-close",
                        "aria-label": "Close Drift Widget messenger",
                        style: r
                    }, T.a.createElement(N.j, {
                        width: 16,
                        height: 16
                    })))
                }),
                M = a("K7i0"),
                X = a("bYXQ"),
                Y = a("Hvhg"),
                U = a("pu/X"),
                q = a("da4L"),
                J = a("Gxm1"),
                Q = a("LVcX"),
                $ = a("TbSn"),
                K = a("kNJ0"),
                Z = a("oPI6"),
                z = a("ADGC"),
                W = a("0lfv"),
                ee = a("VpmR"),
                te = a("4c+F"),
                ae = a("HSQL"),
                ne = (a("sXTY"), null),
                ce = function ChatLayout() {
                    var e = Object(F.b)(),
                        t = Object(z.a)(),
                        a = function useReflowFrameClassName() {
                            var e = Object(y.useState)(""),
                                t = Object(s.a)(e, 2),
                                a = t[0],
                                n = t[1];
                            return Object(y.useEffect)(function() {
                                Object(L.c)({
                                    topic: "CONDUCTOR:reflowFrame",
                                    handler: function handler(e) {
                                        var t = e.data;
                                        n(function() {
                                            return t.isXSScreenSize ? "widget--xs" : ""
                                        })
                                    }
                                })
                            }, []), a
                        }(),
                        c = Object(y.useState)(!0),
                        u = Object(s.a)(c, 2),
                        f = u[0],
                        x = u[1];
                    Object(S.a)();
                    var N = Object(F.c)(function(e) {
                            return e.view
                        }),
                        I = N.chatOpen,
                        B = N.isChatTakeover,
                        D = Object(F.c)(Y.c).showBranding,
                        P = void 0 !== D && D,
                        V = Object(H.a)().noPolicy,
                        Z = !P && V;
                    Object(y.useLayoutEffect)(function() {
                        B && I && Object(L.a)({
                            topic: "set-frame-width-and-height",
                            message: {
                                className: g.a,
                                height: "100%",
                                max: !0,
                                name: "chat",
                                width: "100%"
                            }
                        })
                    }, [B, I]);
                    var ee = Object(F.c)(function(e) {
                            return e.conversations.activeConversation
                        }),
                        ce = Object(_.a)().fetchMessages,
                        re = Object(A.a)(ee),
                        ie = Object(F.c)(function(e) {
                            return e.conversations.conversations
                        }),
                        se = Object(F.c)(function(e) {
                            return e.conversations.messages
                        }),
                        oe = Object(F.c)(function(e) {
                            return Object(Q.a)({}, ["conversations", "messages", e.conversations.activeConversation], e)
                        }),
                        ue = Object(F.c)(function(e) {
                            return Object(Q.a)(!1, ["conversations", "conversationStatus", e.conversations.activeConversation, "permaclosed"], e)
                        }),
                        le = Object(y.useMemo)(function() {
                            return Object(q.q)(oe)
                        }, [oe]),
                        fe = Object(F.c)(function(e) {
                            return e.campaigns.activeCampaign
                        }),
                        be = Object(F.c)(function(e) {
                            return e.session.gdpr
                        }).hasConsent,
                        Oe = Object(F.c)(function(e) {
                            return Object(Q.a)(!1, ["conversations", "conversationStatus", ee, "endUserResponded"], e)
                        }),
                        de = Object(w.a)(),
                        je = de.conversationHistoryOpen,
                        he = de.conversationHistoryEnabled,
                        ve = Object(R.a)().widgetBackgroundStyles;
                    Object(y.useEffect)(function() {
                        (function() {
                            var t = Object(i.a)(r.a.mark(function _callee() {
                                var t, a, n, c, i;
                                return r.a.wrap(function _callee$(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (t = !ee || ee === p.a, a = re === ee, n = !!ie[ee] && !!se[ee], !(t || a || n || Object(X.e)(ee))) {
                                                r.next = 5;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 5:
                                            return r.prev = 5, r.next = 8, Object(o.h)(ee);
                                        case 8:
                                            c = r.sent, i = c.data, e(Object(M.h)({
                                                conversation: i
                                            })), ce({}), r.next = 17;
                                            break;
                                        case 14:
                                            r.prev = 14, r.t0 = r.catch(5), Object(W.f)(U.a.MESSAGE.FETCH_MESSAGE_OR_ACTIVE_CONVO, r.t0, !0);
                                        case 17:
                                        case "end":
                                            return r.stop()
                                    }
                                }, _callee, null, [
                                    [5, 14]
                                ])
                            }));
                            return function fetchInfoForActiveConversation() {
                                return t.apply(this, arguments)
                            }
                        })()()
                    }, [ee, e, ce, re, ie, se]), Object(y.useEffect)(function() {
                        I ? (function() {
                            var e = Object(i.a)(r.a.mark(function _callee2() {
                                return r.a.wrap(function _callee2$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(L.a)({
                                                topic: "focus-frame",
                                                message: {
                                                    name: "chat"
                                                }
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee2)
                            }));
                            return function focus() {
                                return e.apply(this, arguments)
                            }
                        }()(), ne && clearTimeout(ne), x(!1)) : ne = setTimeout(function delaySetReflowHidden() {
                            x(!0)
                        }, 350)
                    }, [I]);
                    var me = Object(y.useMemo)(function() {
                        if (!be || !I) return !1;
                        if (fe && fe.id && !ee) {
                            var e = !!Object(Q.a)(null, ["attributes", "cta"], fe),
                                t = "CHAT_RESPONSE" !== Object(Q.a)(null, ["attributes", "cta", "CtaType"], fe);
                            if (e && t) return !1
                        }
                        var a = le.length > 0 && le.length <= 2 && !Object(q.e)(le[0]);
                        return !B || a || le.length > 2
                    }, [fe, ee, be, B, le, I]);
                    Object(y.useEffect)(function() {
                        Object(ae.b)("WIDGET_CHAT_FRAME.start")
                    }, []);
                    var pe = Object(y.useRef)(!1);
                    Object(y.useEffect)(function() {
                        if (!pe.current && B && le.length > 0) {
                            var e = Object(J.b)("post_form_takeover_tti"),
                                t = Object(J.b)("post_form_takeover_show");
                            e && Object(te.d)("Post Form Takeover TTI", e), t && Object(te.d)("Post Form Takeover Show", t), pe.current = !0
                        }
                    }, [B, le]);
                    var ge = Object(y.useMemo)(function() {
                            if (ue) return b.a.UNAVAILABLE;
                            var e = Object($.a)(le);
                            if (!e) return b.a.AVAILABLE;
                            var t = Object(K.a)(-2, le),
                                a = Object(q.e)(t) && Object(q.h)(e);
                            return Object(q.e)(e) || a || Object(q.i)(e) ? b.a.UNAVAILABLE_BUTTONS : Object(q.n)(e) || Object(q.n)(t) && Object(q.h)(e) ? b.a.AVAILABLE_BUTTONS : b.a.AVAILABLE
                        }, [le, ue]),
                        we = ge === b.a.AVAILABLE || ge === b.a.AVAILABLE_BUTTONS,
                        Ee = Object(E.a)(le, ee),
                        _e = Object(y.useMemo)(function() {
                            return Object(q.c)(Ee)
                        }, [Ee]),
                        Ce = Object(C.a)(Ee),
                        ke = Object(y.useMemo)(function() {
                            return T.a.createElement(h.a, {
                                messageGroups: _e,
                                messages: Ee,
                                reflowHidden: f,
                                disabled: je
                            })
                        }, [_e, Ee, f, je]),
                        Se = Object(k.a)(),
                        Ae = be && (!!ee || B),
                        ye = !me || !we;
                    return T.a.createElement("main", {
                        className: l()("drift-widget-chat-layout", Object(n.a)({
                            "drift-widget-chat-layout__takeover": B && !t,
                            "drift-widget-chat-layout__takeover--noResponse": B && !t && !Oe
                        }, a, !!a)),
                        "aria-live": "polite"
                    }, T.a.createElement(m.a, null), T.a.createElement("div", {
                        className: l()("drift-widget-chat-wrapper", {
                            "drift-widget-chat-wrapper__open": I,
                            "drift-widget-chat-wrapper__closed": !I,
                            "drift-widget-chat-wrapper__reflow-hidden": f,
                            "drift-widget-chat-wrapper__active-conversation": Ae,
                            "drift-widget-chat-wrapper__no-footer-content": Z && ye,
                            "drift-widget-chat-wrapper__mobile": t,
                            "drift-widget-chat-wrapper__conversation-history": je
                        }),
                        tabIndex: 0
                    }, T.a.createElement(G, {
                        chatHidden: f
                    }), !B && he && T.a.createElement(O.a, null), Ae && T.a.createElement("div", {
                        className: l()("drift-widget-message-history", {
                            "drift-widget-message-history--with-footer": Se,
                            "drift-widget-message-history--no-composer": ye
                        }),
                        style: ve
                    }, ke, 0 === le.length && T.a.createElement(j.a, {
                        titleId: "ChatLayoutLoading"
                    })), T.a.createElement("div", {
                        className: "drift-widget-chat-bottom"
                    }, me && T.a.createElement(b.b, {
                        chatHidden: f,
                        disabled: je
                    }), !je && T.a.createElement(d.a, null)), ee && !!Ce && T.a.createElement(v.a, {
                        message: Ce
                    })))
                };
            t.default = function(e) {
                var t = Object(y.useState)(!1),
                    a = Object(s.a)(t, 2),
                    n = a[0],
                    c = a[1],
                    o = Object(F.c)(function(e) {
                        return e.view.initComplete
                    }),
                    u = Object(F.c)(function(e) {
                        return Object(Q.a)("en", ["embed", "configuration", "locale"], e)
                    });
                return Object(y.useEffect)(function() {
                    o && !n && function() {
                        var e = Object(i.a)(r.a.mark(function _callee3() {
                            return r.a.wrap(function _callee3$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(ee.b)(u);
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Object(W.n)({
                                            data: ["i18n failed to load - ".concat(e.t0.message), e.t0],
                                            type: "warn",
                                            internal: !0
                                        });
                                    case 8:
                                        c(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee3, null, [
                                [0, 5]
                            ])
                        }));
                        return function runAsync() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }, [o, n, u]), T.a.createElement(Z.a, null, o && n ? T.a.createElement(ce, e) : T.a.createElement(f.a, null))
            }
        },
        SwvN: function(e, t, a) {},
        hEj5: function(e, t, a) {
            "use strict";
            var n = a("s8DI"),
                c = a("ERkP"),
                r = a("LaGA");
            t.a = function useResizeObserver() {
                var e = Object(c.useState)(),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    i = t[1],
                    s = Object(c.useState)(null),
                    o = Object(n.a)(s, 2),
                    u = o[0],
                    l = o[1],
                    f = Object(c.useRef)(null),
                    b = Object(c.useCallback)(function() {
                        return f.current && f.current.disconnect()
                    }, []),
                    O = Object(c.useCallback)(function() {
                        u && (f.current = new r.a(function() {
                            return i(function getRectForRef(e) {
                                return e && e.getBoundingClientRect()
                            }(u))
                        }), f.current.observe(u))
                    }, [u]);
                return Object(c.useLayoutEffect)(function() {
                    return O(),
                        function() {
                            return b()
                        }
                }, [b, O]), [a, l]
            }
        },
        sXTY: function(e, t, a) {},
        swFs: function(e, t, a) {
            "use strict";
            var n = a("ERkP"),
                c = a.n(n);
            a("G5CQ");
            t.a = function TopLine(e) {
                var t = e.style;
                return c.a.createElement("div", {
                    className: "drift-widget-header-top-line",
                    style: t
                })
            }
        }
    }
]);