(window.webpackJsonp = window.webpackJsonp || []).push([
    [17], {
        "/l56": function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                o = n("xKh3"),
                i = n("QtlZ"),
                s = n("K7i0"),
                u = n("1tbh"),
                l = n("qwiD"),
                d = n("NFvl"),
                b = "emailCapture",
                f = n("goRb"),
                p = {
                    topic: "data:sentMessage",
                    event: function event(e) {
                        i.a.dispatch(Object(s.j)(e))
                    }
                },
                v = {
                    topic: "typing:started",
                    event: function event(e) {
                        window.fallbackTimeout && window.clearTimeout(window.fallbackTimeout), i.a.dispatch(Object(s.s)({
                            conversationId: e.conversationId,
                            userId: e.userId,
                            isTyping: !0
                        })), window.fallbackTimeout = window.setTimeout(function() {
                            i.a.dispatch(Object(s.s)({
                                conversationId: e.conversationId,
                                userId: e.userId,
                                isTyping: !1
                            }))
                        }, 5e3)
                    }
                },
                h = {
                    topic: "typing:finished",
                    event: function event(e) {
                        i.a.dispatch(Object(s.s)({
                            conversationId: e.conversationId,
                            isTyping: !1
                        }))
                    }
                },
                O = function sendRoundTripEventForLocalMessages(e) {
                    !!Object(d.a)(["body", "data", "attributes", "widgetGuid"], e) && e.body.data && Object(u.a)({
                        message: e.body.data,
                        timedOut: !1
                    })
                },
                g = function() {
                    var e = Object(c.a)(r.a.mark(function _callee(e) {
                        return r.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    O(e), "CREATE" === e.body.type && "MESSAGE" === e.body.object.type && Object(f.a)(e);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function onUserChangeEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(c.a)(r.a.mark(function _callee2(e) {
                        var t, n, a;
                        return r.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    t = e.body, n = t.type, a = t.data, n === b && i.a.dispatch(Object(l.d)({
                                        email: a.email
                                    }));
                                case 2:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2)
                    }));
                    return function onUserTriggeredEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = [p],
                _ = [v, h, {
                    topic: "change",
                    event: g
                }, {
                    topic: "conversationPermaclose",
                    event: function() {
                        var e = Object(c.a)(r.a.mark(function _callee3(e) {
                            var t;
                            return r.a.wrap(function _callee3$(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        t = e.conversationId, i.a.dispatch(Object(s.b)({
                                            conversationId: t
                                        }));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }, _callee3)
                        }));
                        return function onUserPermacloseEvent(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    topic: "event",
                    event: j
                }],
                y = [],
                k = n("0lfv");
            n.d(t, "c", function() {
                return w
            }), n.d(t, "b", function() {
                return x
            }), n.d(t, "a", function() {
                return I
            }), n.d(t, "e", function() {
                return C
            }), n.d(t, "d", function() {
                return E
            });
            var w = Object.freeze({
                    CHAT: "chat",
                    USER: "user",
                    PRESENCE: "presence",
                    VISITOR_PRESENCE: "visitor_presence"
                }),
                x = Object.freeze({
                    CHAT: "chat",
                    USER: "user",
                    ORG_PUBLIC: "live",
                    LIVE: "live"
                }),
                I = Object.freeze({
                    CHAT: "chat",
                    USER: "user",
                    PRESENCE: "presence"
                }),
                C = function() {
                    var e = Object(c.a)(r.a.mark(function _callee2(e) {
                        var t, n, a, i, s;
                        return r.a.wrap(function _callee2$(u) {
                            for (;;) switch (u.prev = u.next) {
                                case 0:
                                    return t = e.session_token, n = e.org_id, a = e.socketCluster, i = e.ip, s = new Promise(function() {
                                        var e = Object(c.a)(r.a.mark(function _callee(e, c) {
                                            var s;
                                            return r.a.wrap(function _callee$(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        return r.next = 2, Object(o.b)({
                                                            session_token: t,
                                                            org_id: n,
                                                            socketCluster: a,
                                                            ip: i
                                                        });
                                                    case 2:
                                                        if (!(s = r.sent)) {
                                                            r.next = 7;
                                                            break
                                                        }
                                                        return r.abrupt("return", e(s));
                                                    case 7:
                                                        return r.abrupt("return", c("could not connect"));
                                                    case 8:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }, _callee)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), u.abrupt("return", s);
                                case 3:
                                case "end":
                                    return u.stop()
                            }
                        }, _callee2)
                    }));
                    return function connectToSocket(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = Object(c.a)(r.a.mark(function _callee3(e) {
                        var t, n, a, c, i, s;
                        return r.a.wrap(function _callee3$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return t = e.socket, n = e.socketAuth, a = e.channelEvents, c = e.channelName, i = e.orgId, r.prev = 1, r.next = 4, Object(o.a)({
                                        channelName: S(c, n.user_id, i),
                                        socket: t,
                                        events: A(a)
                                    });
                                case 4:
                                    return s = r.sent, r.abrupt("return", s);
                                case 8:
                                    r.prev = 8, r.t0 = r.catch(1), Object(k.f)(new Error(r.t0));
                                case 11:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee3, null, [
                            [1, 8]
                        ])
                    }));
                    return function connectToChannel(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function _resolveChannelName(e, t, n) {
                    switch (e) {
                        case x.USER:
                        case x.CHAT:
                            return "".concat(e, ":").concat(t);
                        case x.LIVE:
                            return "".concat(e, ":").concat(n);
                        default:
                            return ""
                    }
                },
                A = function _resolveChannelEvents(e) {
                    switch (e) {
                        case I.CHAT:
                            return m;
                        case I.USER:
                            return _;
                        case I.PRESENCE:
                            return y;
                        default:
                            return []
                    }
                }
        },
        "0LtH": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return O
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("nfbA"),
                o = n("7SM1"),
                i = n("OE2q"),
                s = n("QtlZ"),
                u = n("vjCh"),
                l = n("Wjfv"),
                d = n("K7i0"),
                b = n("SFoa"),
                f = n("LVcX"),
                p = n("0lfv"),
                v = n("HPUV"),
                h = {
                    isFromConversationalLandingPage: !1
                },
                O = function() {
                    var e = Object(o.a)(r.a.mark(function _callee(e) {
                        var t, n, a, o, i, u, l, d;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (t = Object(f.a)({}, ["embed", "configuration"], Object(s.b)()), n = t.interactionSlugMap, a = void 0 === n ? {} : n, o = t.interactionTestingSlugMap, i = void 0 === o ? {} : o, u = e ? e.substring(1).toLowerCase() : null) {
                                        r.next = 4;
                                        break
                                    }
                                    return r.abrupt("return", !1);
                                case 4:
                                    if (!(l = Object(p.t)(i))[u]) {
                                        r.next = 9;
                                        break
                                    }
                                    return r.next = 8, g(e, l[u], Object(c.a)(Object(c.a)({}, h), {}, {
                                        isTestingConversation: !0
                                    }));
                                case 8:
                                    return r.abrupt("return", !0);
                                case 9:
                                    if (!(d = Object(p.t)(a))[u]) {
                                        r.next = 14;
                                        break
                                    }
                                    return r.next = 13, g(e, d[u], h);
                                case 13:
                                    return r.abrupt("return", !0);
                                case 14:
                                    return r.abrupt("return", !1);
                                case 15:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function fireByDriftlink(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = Object(o.a)(r.a.mark(function _callee2(e, t, n) {
                        var a;
                        return r.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return a = Object(b.f)(), r.prev = 1, s.a.dispatch(Object(d.p)(e)), s.a.dispatch(Object(l.a)()), Object(u.h)(t), r.next = 7, Object(v.a)();
                                case 7:
                                    return r.next = 9, Object(i.b)(t, Object(c.a)(Object(c.a)({}, n), {}, {
                                        locale: a,
                                        goToConversation: !0
                                    }), e);
                                case 9:
                                    r.next = 14;
                                    break;
                                case 11:
                                    r.prev = 11, r.t0 = r.catch(1), Object(p.n)({
                                        data: ["Failed to activate drift link ".concat(e, ":").concat(t), r.t0]
                                    });
                                case 14:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2, null, [
                            [1, 11]
                        ])
                    }));
                    return function activateDriftLink(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        "1kux": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                o = n("QtlZ"),
                i = n("2XY6"),
                s = n("LVcX"),
                u = n("7oto"),
                l = function() {
                    var e = Object(c.a)(r.a.mark(function _callee() {
                        var e, t, n;
                        return r.a.wrap(function _callee$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (e = Object(o.b)(), t = Object(s.a)(!1, ["embed", "configuration", "theme", "soundNotificationEnabled"], e), n = Object(i.c)(e), !t) {
                                        a.next = 6;
                                        break
                                    }
                                    return a.next = 6, Object(u.a)({
                                        topic: "play-host-notification",
                                        message: {
                                            chatOpen: n
                                        }
                                    });
                                case 6:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee)
                    }));
                    return function playSoundNotification() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        "3DW5": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return c
            });
            var a = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gim,
                r = function extractPhoneNumbers(e) {
                    return e ? e.match(a) : null
                },
                c = function formatPhoneForDisplay(e) {
                    if (!e) return "";
                    if (e.length < 10) return e;
                    var t = "".concat(e).replace(/\D/g, "").substr(-10).match(/^(\d{3})(\d{3})(\d{4})$/);
                    return t ? "+1-".concat(t[1], "-").concat(t[2], "-").concat(t[3]) : e
                }
        },
        "7fJ7": function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("mj2O"),
                c = n.n(r),
                o = n("7SM1"),
                i = n("s8DI"),
                s = n("QtlZ"),
                u = n("Wjfv"),
                l = n("7oto"),
                d = function UseRemoveActiveCampaign() {
                    Object(l.c)({
                        topic: "CONDUCTOR:remove-active-campaign",
                        handler: function handler(e) {
                            s.a.dispatch(Object(u.a)())
                        }
                    })
                },
                b = n("nfbA"),
                f = n("mfas"),
                p = function UseStateSnapShot() {
                    return Object(l.c)({
                        topic: "CONDUCTOR:request-state-from-controller",
                        handler: function handler(e) {
                            var t = e.data,
                                n = Object(s.b)();
                            Object(l.a)({
                                topic: "".concat(t.name, ":state-snap-shot"),
                                message: {
                                    state: Object(b.a)(Object(b.a)({}, Object(f.a)(["session"], n)), {}, {
                                        session: Object(f.a)(["sockets"], n.session)
                                    })
                                }
                            })
                        }
                    }), s.a
                },
                v = n("My8U"),
                h = n("dT9Q"),
                O = n("BY8A"),
                g = n("yXOZ"),
                j = n("qATS"),
                m = n("Sn8X"),
                _ = n("ERkP"),
                y = n.n(_),
                k = n("oPI6"),
                w = function ControllerLayout() {
                    return Object(m.a)(), y.a.createElement("main", {
                        role: "main",
                        "aria-label": "Drift Widget messenger icon"
                    }, y.a.createElement(O.a, null), y.a.createElement(k.a, null, y.a.createElement(h.a, null), y.a.createElement(g.a, null)))
                },
                x = function() {
                    var e = Object(j.a)();
                    return y.a.createElement(y.a.Fragment, null, e && y.a.createElement(w, null))
                },
                I = n("WwEg"),
                C = n("OE2q"),
                E = n("LqZ+"),
                S = n("vjCh"),
                A = n("La++"),
                T = n("K7i0"),
                R = n("xwTo"),
                D = n("5ZR4"),
                M = n("B8JY"),
                P = n("SFoa"),
                L = n("PCkZ"),
                N = n("TDUE"),
                V = n("Gxm1"),
                U = n("SHZQ"),
                B = n("Hvhg"),
                F = n("BAMi"),
                H = n("FAmh"),
                $ = n("4Vr+"),
                G = n("yzXs"),
                W = n("42TE"),
                q = n("gG69"),
                J = n("0lfv"),
                Y = n("76KI"),
                Q = n("4c+F"),
                Z = Object($.a)(Object(G.a)(W.a, J.m)),
                K = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r, o, i, u;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = e.formData, n = e.campaignId, Object(Y.a)("has_form_submission_fast_lane") && n) {
                                        c.next = 3;
                                        break
                                    }
                                    return c.abrupt("return", {
                                        success: !1
                                    });
                                case 3:
                                    if (t = t ? Z(t) : null, !Object(J.m)(t)) {
                                        c.next = 7;
                                        break
                                    }
                                    return Object(Q.c)("Sent Empty Form Data", {
                                        campaignId: n
                                    }, !0), c.abrupt("return", {
                                        success: !1
                                    });
                                case 7:
                                    return a = Object(B.e)(Object(s.b)()), r = Object(H.b)(), c.prev = 9, c.next = 12, Object(U.g)({
                                        embedId: a,
                                        mappingId: n,
                                        campaignIds: [n],
                                        formData: t,
                                        clientSideContext: r
                                    });
                                case 12:
                                    if (o = c.sent, i = o.data, !(u = !Object(J.m)(i.campaignTargetingResults) && i.campaignTargetingResults[0].evaluationMatchOutcome === q.a.MATCH)) {
                                        c.next = 18;
                                        break
                                    }
                                    return c.next = 18, Object(F.a)({
                                        conditions: i.campaignTargetingResults
                                    });
                                case 18:
                                    return c.abrupt("return", {
                                        success: !0,
                                        campaignMatched: u
                                    });
                                case 21:
                                    c.prev = 21, c.t0 = c.catch(9), Object(J.n)({
                                        data: [c.t0],
                                        type: "warn"
                                    });
                                case 24:
                                    return c.abrupt("return", {
                                        success: !1
                                    });
                                case 25:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee, null, [
                            [9, 21]
                        ])
                    }));
                    return function collectAndQualify(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                X = n("9EWH"),
                z = n("fsHk"),
                ee = n("LVcX"),
                te = n("iJtH"),
                ne = n("YvIt"),
                ae = n("Nlet"),
                re = n("t8ds"),
                ce = n("qwiD"),
                oe = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a, r, o, i, u, d, b;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2, Object(l.a)({
                                        topic: "access-host-window",
                                        message: {
                                            key: "location"
                                        }
                                    });
                                case 2:
                                    return e = c.sent, t = e.data, n = void 0 === t ? {} : t, c.next = 7, re.a.get(te.a);
                                case 7:
                                    return a = c.sent, r = a.data, c.next = 11, re.b.get(ne.b);
                                case 11:
                                    o = c.sent, i = o.data, u = r || {}, d = function getSessionCount(e) {
                                        return e.lastSessionId ? e.lastSessionId !== i ? e.total + 1 : e.total : 1
                                    }, b = Object(X.a)(u, function(e) {
                                        var t = z.a.getCurrentTimeEpoch();
                                        e.total = d(e), e.daysSinceLastVisit = z.a.getCurrentTimeDifferenceInDays(e.lastVisit), e.lastVisit = t, e.firstVisit = e.firstVisit || t, e.lastSessionId = i, e[n.pathname] = (e[n.pathname] || 0) + 1;
                                        var a = z.a.getTime(u.lastVisit).diff(t, "minute");
                                        (!u.currentSessionStartedAt || a > 30) && (e.currentSessionStartedAt = t, re.a.removeItem(ne.a))
                                    }), re.a.set(te.a, b), s.a.dispatch(Object(ce.v)(b));
                                case 18:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function countSiteVisit() {
                        return e.apply(this, arguments)
                    }
                }(),
                ie = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e) {
                        var t, n;
                        return c.a.wrap(function _callee2$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, se();
                                case 2:
                                    t = a.sent, n = {
                                        url: Object(ee.a)("", ["page", "href"], t),
                                        referrer: Object(ee.a)("", ["page", "referrer"], t),
                                        title: Object(ee.a)("", ["page", "title"], t),
                                        pageName: e || ""
                                    }, Object(E.b)(n);
                                case 5:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee2)
                    }));
                    return function trackPageLoadEvent(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                se = function() {
                    var e = Object(o.a)(c.a.mark(function _callee3() {
                        var e;
                        return c.a.wrap(function _callee3$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(ae.a)();
                                case 2:
                                    return e = t.sent, s.a.dispatch(Object(ce.i)(e)), t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee3)
                    }));
                    return function hydrateWindowContext() {
                        return e.apply(this, arguments)
                    }
                }(),
                ue = n("+f1A"),
                le = n("g6eD"),
                de = n("2XY6"),
                be = n("pqMu"),
                fe = n("LelF"),
                pe = n("VYE+"),
                ve = n("HPUV"),
                he = n("uIJS"),
                Oe = n("wQh9"),
                ge = function() {
                    function SyncCallbackRunner() {
                        Object(he.a)(this, SyncCallbackRunner), this._running = !1, this._callbacks = []
                    }
                    return Object(Oe.a)(SyncCallbackRunner, [{
                        key: "execute",
                        value: function execute(e) {
                            this._callbacks.push(e), this.run()
                        }
                    }, {
                        key: "run",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee() {
                                var e, t;
                                return c.a.wrap(function _callee$(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!this._running && 0 !== this._callbacks.length) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            this._running = !0;
                                        case 3:
                                            if (!(this._callbacks.length > 0)) {
                                                n.next = 11;
                                                break
                                            }
                                            if (e = this._callbacks.shift(), !(t = e()) || !t.then) {
                                                n.next = 9;
                                                break
                                            }
                                            return n.next = 9, t;
                                        case 9:
                                            n.next = 3;
                                            break;
                                        case 11:
                                            this._running = !1;
                                        case 12:
                                        case "end":
                                            return n.stop()
                                    }
                                }, _callee, this)
                            }));
                            return function run() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), SyncCallbackRunner
                }(),
                je = n("HSQL"),
                me = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a, r, o, i;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = Object(B.e)(Object(s.b)()), t = Object(S.g)(), n = Object(H.b)(), c.next = 5, Object(U.d)(Object(b.a)(Object(b.a)({
                                        embedId: e
                                    }, n), {}, {
                                        followingCampaignIds: t,
                                        excludedCampaignIds: []
                                    }), !0);
                                case 5:
                                    return a = c.sent, r = a.data, c.next = 9, Object(F.a)({
                                        conditions: r.campaignTargetingResults
                                    });
                                case 9:
                                    o = c.sent, i = o.TAL, console.log("PLAYBOOK_TARGETING_RESULTS: ".concat(JSON.stringify(i, null, 2)));
                                case 12:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function PlaybookDebugTargetingCommand() {
                        return e.apply(this, arguments)
                    }
                }(),
                _e = n("goRb"),
                ye = function ReceiveMessageSDKCall(e) {
                    Object(_e.a)({
                        body: {
                            data: e
                        }
                    })
                },
                ke = {
                    PLAYBOOKS: "playbooks",
                    RECEIVE_MESSAGE: "receiveMessage",
                    HELP: "help"
                },
                we = function DebugSDKCall() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke.HELP,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e) {
                        case ke.RECEIVE_MESSAGE:
                            ye(t);
                            break;
                        case ke.PLAYBOOKS:
                            me();
                            break;
                        case ke.HELP:
                        default:
                            console.info("All debug commands: ".concat(Object.keys(ke).join(", ")))
                    }
                },
                xe = n("SsZN"),
                Ie = n("hm8b"),
                Ce = n("3kqR"),
                Ee = n("8saY"),
                Se = Object.freeze({
                    welcomeMessage: "welcomeMessage",
                    awayMessage: "awayMessage",
                    emailCaptureMessage: "emailCaptureMessage",
                    thankYouMessage: "confirmationMessage"
                }),
                Ae = function apiWarning() {
                    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return (e = console).warn.apply(e, ["Drift API -"].concat(n))
                },
                Te = function apiError() {
                    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return (e = console).error.apply(e, ["Drift API -"].concat(n))
                },
                Re = n("F8vJ"),
                De = function areAttributesValid(e, t, n, a) {
                    if (Object(Ie.a)(a)) return n;
                    if ("function" !== typeof a && Object(be.a)(Object, a)) {
                        for (var r = 0, c = Object.keys(a); r < c.length; r++) {
                            var o = c[r],
                                i = a[o];
                            if (Object(Ie.a)(i)) return !0;
                            if (!Object(be.a)(Number, i) && !Object(be.a)(String, i) && !Object(be.a)(Boolean, i)) return Te("".concat(e, '(...) "').concat(o, '" in ').concat(t, " must be number, string, or boolean but instead we got ").concat(typeof i, ".")), !1;
                            if ("email" === o && (!Object(be.a)(String, i) || !Object(Re.a)(i))) return Te("".concat(e, "(...) email in ").concat(t, " is invalid:"), i), !1
                        }
                        return !0
                    }
                    return !1
                },
                Me = function param(e, t, n) {
                    return {
                        name: e,
                        type: t,
                        optional: n
                    }
                },
                Pe = {
                    config: [Me("options", Object)],
                    collectFormData: [Me("data", Object, !0), Me("options", Object, !0)],
                    debug: [Me("namespace", String, !0)],
                    goToConversation: [Me("Conversation ID", Number)],
                    goToNewConversation: [Me("Message", String)],
                    identify: [Me("User ID", String), Me("attributes", De, !0), Me("options", Object, !0)],
                    off: [Me("Event name", String), Me("handler", Function)],
                    on: [Me("Event name", String), Me("handler", Function)],
                    page: [Me("Page name", String, !0)],
                    setUserAttributes: [Me("attributes", De)],
                    setUserJwt: [Me("User JWT", String)],
                    scheduleMeeting: [Me("Agent ID", Number), Me("options", Object, !0)],
                    showAwayMessage: [Me("Message", String, !0)],
                    showWelcomeMessage: [Me("Message", String, !0)],
                    startInteraction: [Me("params", function areStartInteractionParamsValid(e, t, n, a) {
                        return Object(Ie.a)(a) && !n || !Object(be.a)(Object, a) ? (Te("".concat(e, "({ ... }) must be called with ").concat(t, " { interactionId: number, goToConversation: boolean } (goToConversation is optional.)")), !1) : a.interactionId && !Object(Ie.a)(a.interactionId) && Object(be.a)(Number, a.interactionId) ? !(a.goToConversation && !Object(be.a)(Boolean, a.goToConversation)) || (Te("".concat(e, '({ ... }) "goToConversation" parameter should be boolean but we got ').concat(typeof a.goToConversation, ".")), !1) : (Te("".concat(e, "({ ... }) requires ").concat(t, ' object with numeric "interactionId" but we got ').concat(typeof a.interactionId, ".")), !1)
                    })],
                    toggleHoursAndTargeting: [Me("enabled", Boolean)],
                    track: [Me("Event name", String), Me("attributes", De, !0)]
                },
                Le = function getTypeName(e) {
                    return e === String || Object(be.a)(String, e) ? "string" : e === Boolean || Object(be.a)(Boolean, e) ? "boolean" : e === Number || Object(be.a)(Number, e) ? "number" : e === Object || Object(be.a)(Object, e) ? "object" : e === Function || Object(be.a)(Function, e) ? "function" : Object(Ie.a)(e) ? "null" : "unknown"
                },
                Ne = function validateMethod(e, t) {
                    return Pe[e] ? function areArgsValid(e, t, n) {
                        var a = t.length,
                            r = n.filter(function(e) {
                                return !e.optional
                            }).length;
                        return n.reduce(function(n, c, o) {
                            var i = c.name,
                                s = c.type,
                                u = c.optional,
                                l = void 0 !== u && u;
                            if (o >= a) return l || Te("Invalid ".concat(e, "(...) call! It requires ").concat(r, " argument(s) and it's missing ").concat(i, " ").concat(Le(s), ".")), n && l && a >= r;
                            var d = t[o],
                                b = !1;
                            return l && Object(Ie.a)(d) ? b = !0 : s === Function || s === Object || s === String || s === Number || s === Boolean ? (b = "function" === typeof d ? s === Function : Object(be.a)(s, d)) || Te("Invalid ".concat(e, "(...) call! ").concat(i, " (arg ").concat(o, ") should be ").concat(Le(s), " instead of ").concat(Le(d), ".")) : b = s(e, i, l, d), n && b
                        }, !0)
                    }(e, t, Pe[e]) : (!Object(Ie.a)(t) && Object(be.a)(Array, t) && !!t.length && Ae("".concat(e, "() should ideally be called without arguments.")), !0)
                },
                Ve = function debouncedAPIMethod(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                    return Object(J.d)(e, t, !0)
                },
                Ue = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        return c.a.wrap(function _callee$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return He(), e.next = 3, Object(pe.b)(fe.d);
                                case 3:
                                    Object(l.a)({
                                        topic: "reload-all-frames",
                                        message: {}
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee)
                    }));
                    return function reset() {
                        return e.apply(this, arguments)
                    }
                }(),
                Be = function toggleChatTakeoverModal() {
                    Ye(), s.a.dispatch(Object(le.e)({
                        chatOpen: !0,
                        isChatTakeover: !0
                    }))
                },
                Fe = function openChat() {
                    Ye(), s.a.dispatch(Object(le.e)({
                        chatOpen: !0
                    }))
                },
                He = function hideChat() {
                    s.a.dispatch(Object(le.e)({
                        chatOpen: !1
                    }))
                },
                $e = function showController() {
                    s.a.dispatch(Object(le.i)({
                        controllerOpen: !0
                    }))
                },
                Ge = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e) {
                        var t;
                        return c.a.wrap(function _callee2$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return Object(D.b)(), n.next = 3, ie(e);
                                case 3:
                                    return n.next = 5, Object(l.a)({
                                        topic: "reset-page-view"
                                    });
                                case 5:
                                    return s.a.dispatch(Object(ce.x)(Object(J.v)())), (t = Object(S.i)()) || Object(S.c)(), n.next = 10, oe();
                                case 10:
                                    Object(H.a)({
                                        skipCampaignTargeting: t,
                                        onDidMatch: He
                                    });
                                case 11:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee2)
                    }));
                    return function page(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                We = Ve(function() {
                    var e = Object(o.a)(c.a.mark(function _callee3(e) {
                        var t, n, a, r, o, i, u, l, d, b, f, p, v, h, O, g, j, m;
                        return c.a.wrap(function _callee3$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (t = Object(R.a)(Object(s.b)()), a = (n = e || {}).interactionId, r = n.goToConversation, o = void 0 === r || r, i = n.replaceActiveConversation, u = void 0 === i || i, l = n.hideChatIcon, d = void 0 !== l && l, b = n.isFromConversationalLandingPage, f = void 0 !== b && b, p = Object(P.f)(), v = !a || !Object(be.a)(Number, a), h = !!t && !u, !v) {
                                        c.next = 7;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 7:
                                    if (!h) {
                                        c.next = 10;
                                        break
                                    }
                                    return o && Fe(), c.abrupt("return");
                                case 10:
                                    return c.next = 12, Object(ve.a)();
                                case 12:
                                    return s.a.dispatch(Object(le.e)({
                                        chatOpen: !1
                                    })), d && s.a.dispatch(Object(le.b)(!0)), Object(S.c)(), Object(S.h)(a), c.next = 18, Object(C.b)(a, {
                                        isTriggeredFromAPI: !0,
                                        locale: p,
                                        goToConversation: o,
                                        isFromConversationalLandingPage: f
                                    });
                                case 18:
                                    return O = c.sent, g = O.data, c.next = 22, Object(C.h)(g.conversationId);
                                case 22:
                                    j = c.sent, m = j.data, s.a.dispatch(Object(T.h)({
                                        conversation: m
                                    }));
                                case 25:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee3)
                    }));
                    return function _startInteraction(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                qe = function goToConversation(e) {
                    re.a.set(te.b, !0), s.a.dispatch(Object(T.o)({
                        conversationId: e
                    })), Fe()
                },
                Je = function() {
                    var e = Object(o.a)(c.a.mark(function _callee4() {
                        var e, t, n, a, r, o, i = arguments;
                        return c.a.wrap(function _callee4$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return e = i.length > 0 && void 0 !== i[0] ? i[0] : "", t = Object(P.f)(), c.prev = 2, c.next = 5, Object(C.d)(e, {
                                        isTriggeredFromAPI: !0,
                                        locale: t
                                    });
                                case 5:
                                    return n = c.sent, a = n.data, c.next = 9, Object(C.h)(a.conversationId);
                                case 9:
                                    r = c.sent, o = r.data, s.a.dispatch(Object(T.h)({
                                        conversation: o
                                    })), s.a.dispatch(Object(T.o)({
                                        conversationId: a.conversationId
                                    })), c.next = 17;
                                    break;
                                case 15:
                                    c.prev = 15, c.t0 = c.catch(2);
                                case 17:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee4, null, [
                            [2, 15]
                        ])
                    }));
                    return function goToNewConversation() {
                        return e.apply(this, arguments)
                    }
                }(),
                Ye = function show() {
                    s.a.dispatch(Object(le.n)({
                        matchedTargeting: !0
                    })), $e()
                },
                Qe = function() {
                    var e = Object(o.a)(c.a.mark(function _callee5(e, t) {
                        var n, a, r, o;
                        return c.a.wrap(function _callee5$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return n = Object(ee.a)(null, ["session", "endUser", "email"], Object(s.b)()), a = Object(P.f)(), Fe(), c.prev = 3, c.next = 6, Object(C.e)(n, e, a, t);
                                case 6:
                                    r = c.sent, o = r.data.conversationId, s.a.dispatch(Object(T.o)({
                                        conversationId: o
                                    })), Object(xe.i)(e), Object(N.d)(q.c.CALENDAR_DROP), c.next = 16;
                                    break;
                                case 13:
                                    c.prev = 13, c.t0 = c.catch(3), Object(J.n)({
                                        data: [c.t0],
                                        type: "warn"
                                    });
                                case 16:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee5, null, [
                            [3, 13]
                        ])
                    }));
                    return function scheduleMeeting(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ze = function() {
                    var e = Object(o.a)(c.a.mark(function _callee6(e) {
                        var t, n, a, r, o = arguments;
                        return c.a.wrap(function _callee6$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = o.length > 1 && void 0 !== o[1] ? o[1] : {}, n = o.length > 2 && void 0 !== o[2] ? o[2] : {}, a = o.length > 3 && void 0 !== o[3] && o[3], c.prev = 3, c.next = 6, Object(L.c)(t, e, n);
                                case 6:
                                    t.email && (r = t.email, s.a.dispatch(Object(ce.k)({
                                        endUser: {
                                            email: r
                                        }
                                    }))), a || Object(Q.c)("OnReadyIdentify"), c.next = 13;
                                    break;
                                case 10:
                                    c.prev = 10, c.t0 = c.catch(3), Object(J.n)({
                                        data: [c.t0],
                                        type: "warn"
                                    });
                                case 13:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee6, null, [
                            [3, 10]
                        ])
                    }));
                    return function identify(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ke = function() {
                    var e = Object(o.a)(c.a.mark(function _callee7(e) {
                        var t, n;
                        return c.a.wrap(function _callee7$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return t = Object(ue.m)(), n = t.externalId, a.next = 4, Object(L.c)(e, n);
                                case 4:
                                    Object(xe.r)();
                                case 5:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee7)
                    }));
                    return function setUserAttributes(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Xe = Ve(function() {
                    var e = Object(o.a)(c.a.mark(function _callee8(e, t) {
                        var n, a, r, o, i, u, d, b, f, p, v, h, O;
                        return c.a.wrap(function _callee8$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return n = t && "number" === typeof t.campaignId ? t.campaignId : null, a = t && "string" === typeof t.followupUrl ? t.followupUrl : null, r = Object(P.b)(n), o = Object(s.b)(), i = Object(ee.a)(null, ["attributes", "playbookId"], r), u = Object(ee.a)(null, ["session", "endUser", "id"], o), Object(V.a)("post_form_takeover_tti"), c.next = 9, K({
                                        campaignId: n,
                                        formData: e
                                    });
                                case 9:
                                    if (d = c.sent, b = d.success, f = d.campaignMatched, b && Object(Q.c)("Form Data Submitted", {
                                            campaignId: n,
                                            playbookId: i,
                                            endUserId: u
                                        }), !f) {
                                        c.next = 33;
                                        break
                                    }
                                    if (Object(je.a)("post_form_takeover_enroll"), p = Object(de.c)(Object(s.b)()), v = Object(P.b)(n), h = Object(ee.a)(null, ["attributes", "playbookId"], v), !p) {
                                        c.next = 22;
                                        break
                                    }
                                    return He(), c.next = 22, Object(J.q)(400);
                                case 22:
                                    return Object(S.c)(), Object(J.m)(a) || s.a.dispatch(Object(le.c)(t.followupUrl)), Be(), Object(V.a)("meeting_scheduler_rtt"), c.next = 28, Object(A.c)({
                                        campaignId: n,
                                        playbookId: h
                                    });
                                case 28:
                                    return (O = Object(je.b)("post_form_takeover_enroll")) && Object(Q.d)("Post Form Takeover Enroll", O), Object(V.a)("post_form_takeover_show"), Object(Q.c)("Fast Lane Campaign Sent", {
                                        campaignId: n,
                                        playbookId: h,
                                        endUserId: u
                                    }), c.abrupt("return");
                                case 33:
                                    if (Object(J.m)(a)) {
                                        c.next = 36;
                                        break
                                    }
                                    return c.next = 36, Object(l.a)({
                                        topic: "redirect-to-url",
                                        message: {
                                            url: t.followupUrl
                                        }
                                    });
                                case 36:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee8)
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(), 15e3),
                ze = {
                    identify: Ze,
                    config: function config(e) {
                        if (!Object(be.a)(Object, e)) return !1;
                        var t = function configOptionsToEmbedConfiguration(e) {
                            var t = {
                                theme: {}
                            };
                            if (Object(Ie.a)(e)) return t;
                            var n = e.locale,
                                a = e.enableWelcomeMessage,
                                r = e.enableCampaigns,
                                c = e.enableChatTargeting,
                                o = e.enableSoundNotifications,
                                i = e.backgroundColor,
                                s = e.foregroundColor,
                                u = e.activeColor,
                                l = e.textColor,
                                d = e.widgetBackgroundColor,
                                b = e.autoAssigneeId,
                                f = e.autoAssignee,
                                p = e.inboxId,
                                v = e.enabled,
                                h = e.profileMode,
                                O = e.messages,
                                g = e.cookieDomain,
                                j = e.verticalOffset,
                                m = e.horizontalOffset,
                                _ = e.landingPageConfig,
                                y = e.showDriftBranding,
                                k = e.messageAttributes;
                            return n && (t.locale = n), Object(Ie.a)(a) || (t.theme.showWelcomeMessage = !!a), Object(Ie.a)(r) || (t.campaignsEnabled = r), !1 === c && (t.theme.audience = Ee.a.EVERYONE, t.theme.conditions = []), Object(Ie.a)(o) || (t.theme.soundNotificationEnabled = o), i && (t.theme.backgroundColor = i.replace("#", "")), s && (t.theme.foregroundColor = s.replace("#", "")), u && (t.theme.activeColor = u.replace("#", "")), l && (t.theme.textColor = l.replace("#", "")), d && (t.theme.widgetBackgroundColor = d.replace("#", "")), Object(Ie.a)(b) || (t.autoAssigneeId = b), Object(Ie.a)(f) || (t.autoAssignee = f), p && (t.inboxId = p), Object(Ie.a)(j) || (t.verticalOffset = j), Object(Ie.a)(m) || (t.horizontalOffset = m), Object(Ie.a)(v) || (t.enabled = !!v), Object(Ie.a)(h) || (t.profileMode = !!h), Object(Ie.a)(_) || (t.landingPageConfig = _), Object(Ie.a)(y) || (t.showBranding = y), Object(Ie.a)(k) || (t.messageAttributes = k), Object(Ie.a)(O) || Object(Ce.a)(function(e, n) {
                                O[n] && (t.theme[e] = O[n])
                            }, Se), Object(Ie.a)(g) || (t.theme.cookieDomains = [g]), t
                        }(e);
                        s.a.dispatch(Object(M.c)(t))
                    },
                    track: function track(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        try {
                            Object(E.a)(e, t)
                        } catch (n) {
                            Object(J.w)(["Failed to send track event" + n])
                        }
                    },
                    reset: Ue,
                    debug: function debug() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        we(e, t)
                    },
                    show: Ye,
                    ping: function ping() {
                        Ae("drift.ping is not supported in this release.")
                    },
                    page: Ge,
                    hide: function hide() {
                        He(),
                            function hideController() {
                                s.a.dispatch(Object(le.i)({
                                    controllerOpen: !1
                                }))
                            }()
                    },
                    off: function off() {},
                    on: function on() {},
                    collectFormData: Xe,
                    goToConversation: qe,
                    goToConversationList: function goToConversationList() {
                        Object(R.j)(Object(s.b)()) && (Fe(), s.a.dispatch(Object(le.l)({
                            conversationHistoryOpen: !0
                        })))
                    },
                    goToNewConversation: Je,
                    hideAwayMessage: function hideAwayMessage() {
                        return He()
                    },
                    hideChat: He,
                    hideWelcomeMessage: function hideWelcomeMessage() {
                        return He()
                    },
                    openChat: Fe,
                    scheduleMeeting: Qe,
                    setUserAttributes: Ke,
                    showAwayMessage: function showAwayMessage(e) {
                        s.a.dispatch(Object(le.n)({
                            matchedHours: !1,
                            matchedTargeting: !0
                        })), Object(S.c)(), e && "string" === typeof e && e.length && s.a.dispatch(Object(M.a)({
                            message: e
                        })), $e(), s.a.dispatch(Object(le.e)({
                            chatOpen: !0,
                            displayGreeting: !0
                        }))
                    },
                    showWelcomeMessage: function showWelcomeMessage(e) {
                        s.a.dispatch(Object(le.n)({
                            matchedHours: !0,
                            matchedTargeting: !0
                        })), Object(S.c)(), e && "string" === typeof e && e.length && s.a.dispatch(Object(M.e)({
                            message: e
                        })), $e(), s.a.dispatch(Object(le.e)({
                            chatOpen: !0,
                            displayGreeting: !0
                        }))
                    },
                    showWelcomeOrAwayMessage: function showWelcomeOrAwayMessage() {
                        s.a.dispatch(Object(T.a)()), Fe()
                    },
                    startInteraction: We,
                    startVideoGreeting: function startVideoGreeting() {
                        Ae("drift.startVideoGreeting is not supported in this release.")
                    },
                    toggleChat: function toggleChat() {
                        Object(de.c)(Object(s.b)()) ? He() : Fe()
                    },
                    toggleChatTakeoverModal: Be,
                    evaluateCampaignTargeting: function evaluateCampaignTargeting() {
                        Object(H.a)()
                    },
                    toggleHoursAndTargeting: function toggleHoursAndTargeting() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        s.a.dispatch(Object(le.n)({
                            matchedHours: e,
                            matchedTargeting: !0
                        }))
                    },
                    waitForUserJwt: function waitForUserJwt() {
                        try {
                            s.a.dispatch(Object(ce.y)())
                        } catch (e) {
                            Object(J.n)({
                                data: [e],
                                type: "warn"
                            })
                        }
                    },
                    setUserJwt: function setUserJwt(e) {
                        try {
                            s.a.dispatch(Object(ce.o)(e))
                        } catch (t) {
                            Object(J.n)({
                                data: [t],
                                type: "warn"
                            })
                        }
                    }
                },
                et = new ge,
                tt = function handleApiEvent(e) {
                    var t = e.data,
                        n = t.method,
                        a = t.args;
                    ze[n] ? Ne(n, a) && et.execute(function() {
                        return Object(Q.c)("API Event Fired", {
                            method: n
                        }), ze[n].apply(ze, Object(I.a)(a))
                    }) : Te("".concat(n, "(...) does not exist."))
                },
                nt = n("g3yi"),
                at = n("yKvL"),
                rt = n("LvsC"),
                ct = n("qytN"),
                ot = n("7jL2"),
                it = n("acD3"),
                st = n("IpSJ"),
                ut = n("JBtm"),
                lt = n.n(ut),
                dt = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB"],
                bt = ["CA"],
                ft = {
                    EU: dt,
                    CANADA: bt,
                    EU_CANADA: [].concat(bt, dt),
                    NONE: "NONE",
                    ALL: "ALL"
                },
                pt = n("H/qh");
            ! function(e) {
                e.EU = "EU", e.CANADA = "CANADA", e.EU_CANADA = "EU_CANADA", e.NONE = "NONE", e.ALL = "ALL"
            }(a || (a = {}));
            var vt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a, r, o;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    if (e = Object(s.b)(), t = Object(B.d)(e, "dataProtection", null), n = Object(ue.o)(e), a = Object(ue.h)(e), t) {
                                        c.next = 7;
                                        break
                                    }
                                    return Ot({
                                        needsConsent: !0,
                                        hasConsent: !1
                                    }), c.abrupt("return");
                                case 7:
                                    r = ht(t.targeting, n), o = !r || a.hasConsent, Ot({
                                        needsConsent: r,
                                        hasConsent: o
                                    });
                                case 10:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function checkGdprConsentEligibility() {
                        return e.apply(this, arguments)
                    }
                }(),
                ht = function resolveVisitorNeedsConsent(e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).country;
                    return e === ft.ALL || !(e === ft.NONE || !e) && (!t || Object(pt.a)(t, ft[e]))
                },
                Ot = function dispatchGdprEligbility(e) {
                    var t = e.needsConsent,
                        n = e.hasConsent;
                    s.a.dispatch(Object(ce.p)({
                        hasConsent: n,
                        needsConsent: t
                    }))
                },
                gt = {
                    googleAnalyticsSettings: !0
                },
                jt = function attachWidgetIntegrations() {
                    var e = Object(B.d)(Object(s.b)(), "integrations", {});
                    Object.keys(e).forEach(function(t) {
                        var n;
                        gt[t] && (null === (n = e[t]) || void 0 === n ? void 0 : n.enabled) && Object(l.a)({
                            topic: "handle-host-integration",
                            message: {
                                config: e[t],
                                type: t
                            }
                        })
                    })
                },
                mt = n("Cpup"),
                _t = function receiveSentryConfig(e) {
                    return Object(mt.a)({
                        type: "RECEIVE_SENTRY_CONFIG",
                        payload: e
                    })
                },
                yt = n("pvgo"),
                kt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee() {
                        var e, t, n, a;
                        return c.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e = Object(s.b)(), t = e.session, n = e.conversations, a = Object(f.a)(["href"], t.context.page), r.abrupt("return", {
                                        engagement: {
                                            activeConversation: n.endUserEngaged
                                        },
                                        page: a,
                                        location: xt(t.geo),
                                        session: wt(t.context, t.visitInformation)
                                    });
                                case 3:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function generatePresenceContext() {
                        return e.apply(this, arguments)
                    }
                }(),
                wt = function _hydrateSessionPresenceData() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        numPageViews: Object(ee.a)(0, ["total"], t),
                        numSessions: Object(ee.a)(0, ["total"], t),
                        currentSessionStartedAt: e.currentSessionStartedAt,
                        currentPageViewStartedAt: e.currentPageViewStartedAt,
                        previousSessionStartedAt: Object(ee.a)(null, ["lastVisit"], t),
                        previousSessionEndedAt: null,
                        firstSessionAt: Object(ee.a)(null, ["firstVisit"], t),
                        activeSessionStartedAt: e.activeSessionStartedAt
                    }
                },
                xt = function _hydrateGeoPresenceData() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(Ie.a)(e) ? {} : {
                        ip: e.ip,
                        city: e.city,
                        subdivision: e.subdivision,
                        country: e.country,
                        countryCode: e.countryCode,
                        gdprApplicable: e.gdprApplicable,
                        metroCode: e.metroCode,
                        postalCode: e.postalCode,
                        latLong: {
                            lat: e.latitude,
                            lon: e.longitude
                        }
                    }
                },
                It = n("7VeV"),
                Ct = n("/l56"),
                Et = 5e3,
                St = function() {
                    function SocketManager() {
                        Object(he.a)(this, SocketManager), this._fireChannelConnectedEvent = function(e, t, n) {
                            s.a.dispatch(Object(ce.g)(Object(b.a)({
                                key: e,
                                cluster: t
                            }, n)))
                        }
                    }
                    return Object(Oe.a)(SocketManager, [{
                        key: "_fireSocketConnectedEvent",
                        value: function _fireSocketConnectedEvent(e) {
                            s.a.dispatch(Object(ce.u)({
                                cluster: e
                            }))
                        }
                    }]), SocketManager
                }();

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(ot.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var a = Object(ot.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(ct.a)(this, t)
                }
            }
            var At = new(function(e) {
                Object(rt.a)(ChatSocketManager, e);
                var t = _createSuper2(ChatSocketManager);

                function ChatSocketManager() {
                    var e;
                    return Object(he.a)(this, ChatSocketManager), (e = t.call(this))._heartbeatInterval = void 0, e._socket = void 0, e._channel = void 0, e._sendPresencePing = Object(o.a)(c.a.mark(function _callee() {
                        var t, n;
                        return c.a.wrap(function _callee$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (e._channel) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.next = 4, kt();
                                case 4:
                                    t = a.sent, n = t.page, e._channel.channel.push("presence:send_update", {
                                        page: n
                                    });
                                case 7:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee)
                    })), e.throttledPresencePing = Object(It.throttle)(Et, !1, e._sendPresencePing), e._socket = null, e._channel = null, e._heartbeatInterval = null, e
                }
                return Object(Oe.a)(ChatSocketManager, [{
                    key: "connect",
                    value: function() {
                        var e = Object(o.a)(c.a.mark(function _callee2(e) {
                            var t, n, a = this;
                            return c.a.wrap(function _callee2$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return t = e.orgId, r.next = 3, Object(ue.a)(Object(s.b)(), Ct.c.CHAT);
                                    case 3:
                                        if (n = r.sent, !Object(J.m)(n)) {
                                            r.next = 7;
                                            break
                                        }
                                        return Object(J.f)("Failed to connect to chat socket: no authentication information provided by server"), r.abrupt("return");
                                    case 7:
                                        return r.next = 9, Object(Ct.e)({
                                            ip: n.remote_ip,
                                            org_id: t,
                                            session_token: n.session_token,
                                            socketCluster: Ct.c.CHAT
                                        });
                                    case 9:
                                        return this._socket = r.sent, this._fireSocketConnectedEvent(Ct.c.CHAT), r.next = 13, Object(Ct.d)({
                                            socket: this._socket,
                                            channelEvents: Ct.a.USER,
                                            channelName: Ct.b.USER,
                                            orgId: t,
                                            socketAuth: n
                                        });
                                    case 13:
                                        this._channel = r.sent, this._fireChannelConnectedEvent("user", Ct.c.CHAT, this._channel), this._channel && (this._sendPresencePing(), this._channel.channel.on("presence:request_update", function() {
                                            a.throttledPresencePing()
                                        }));
                                    case 16:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee2, this)
                        }));
                        return function connect(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), ChatSocketManager
            }(St));

            function visitorPresence_createSuper2(e) {
                return function() {
                    var t, n = Object(ot.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var a = Object(ot.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(ct.a)(this, t)
                }
            }
            var Tt = new(function(e) {
                    Object(rt.a)(VisitorPresenceSocketManager, e);
                    var t = visitorPresence_createSuper2(VisitorPresenceSocketManager);

                    function VisitorPresenceSocketManager() {
                        var e;
                        return Object(he.a)(this, VisitorPresenceSocketManager), (e = t.call(this))._heartbeatInterval = void 0, e._socket = void 0, e._channel = void 0, e._socket = null, e._channel = null, e._heartbeatInterval = null, e
                    }
                    return Object(Oe.a)(VisitorPresenceSocketManager, [{
                        key: "connect",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee(e) {
                                var t, n;
                                return c.a.wrap(function _callee$(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (t = e.orgId, !Object(Y.a)("has_presence_disabled")) {
                                                a.next = 3;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 3:
                                            return a.next = 5, Object(ue.a)(Object(s.b)(), Ct.c.VISITOR_PRESENCE);
                                        case 5:
                                            if (n = a.sent, !Object(J.m)(n)) {
                                                a.next = 8;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 8:
                                            return a.next = 10, Object(Ct.e)({
                                                ip: n.remote_ip,
                                                org_id: t,
                                                session_token: n.session_token,
                                                socketCluster: Ct.c.VISITOR_PRESENCE
                                            });
                                        case 10:
                                            return this._socket = a.sent, this._fireSocketConnectedEvent(Ct.c.VISITOR_PRESENCE), a.next = 14, Object(Ct.d)({
                                                socket: this._socket,
                                                channelEvents: Ct.a.PRESENCE,
                                                channelName: Ct.b.LIVE,
                                                orgId: t,
                                                socketAuth: n
                                            });
                                        case 14:
                                            this._channel = a.sent, this._fireChannelConnectedEvent("user", Ct.c.VISITOR_PRESENCE, this._channel), this._channel && (this._updatePresence(), this.startPresenceUpdateHeartbeat());
                                        case 17:
                                        case "end":
                                            return a.stop()
                                    }
                                }, _callee, this)
                            }));
                            return function connect(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "startPresenceUpdateHeartbeat",
                        value: function startPresenceUpdateHeartbeat() {
                            this._heartbeatInterval = window.setInterval(this._updatePresence.bind(this), 6e4)
                        }
                    }, {
                        key: "_updatePresence",
                        value: function() {
                            var e = Object(o.a)(c.a.mark(function _callee2() {
                                var e;
                                return c.a.wrap(function _callee2$(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (this._channel) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return t.next = 4, kt();
                                        case 4:
                                            e = t.sent, this._channel.channel.push("heartbeat", e);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }, _callee2, this)
                            }));
                            return function _updatePresence() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stopPresenceUpdateHeartbeat",
                        value: function stopPresenceUpdateHeartbeat() {
                            window.clearInterval(this._heartbeatInterval)
                        }
                    }]), VisitorPresenceSocketManager
                }(St)),
                Rt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t;
                        return c.a.wrap(function _callee$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return t = e.orgId, n.prev = 1, n.next = 4, At.connect({
                                        orgId: t
                                    });
                                case 4:
                                    Tt.connect({
                                        orgId: t
                                    }), n.next = 10;
                                    break;
                                case 7:
                                    n.prev = 7, n.t0 = n.catch(1), Object(J.f)(new at.a("Failed to connect to sockets - ".concat(n.t0.message)));
                                case 10:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee, null, [
                            [1, 7]
                        ])
                    }));
                    return function connectToWidgetSockets(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Dt = n("EoDD"),
                Mt = n("SWQ0"),
                Pt = n("wNJw"),
                Lt = function BootstrapBase(e) {
                    var t = this,
                        n = e.embedId,
                        a = e.params;
                    Object(he.a)(this, BootstrapBase), this._state = void 0, this._params = void 0, this._embedId = void 0, this._preReqData = void 0, this._dispatch = void 0, this._instanceId = void 0, this._sessionId = void 0, this._orgId = void 0, this._identityMap = void 0, this._accessToken = void 0, this._currentPageUrl = void 0, this._currentPageSearch = void 0, this._bootstrapResponse = void 0, this.init = Object(o.a)(c.a.mark(function _callee() {
                        return c.a.wrap(function _callee$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t._init().catch(function(e) {
                                        return Object(J.w)([e])
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee)
                    })), this._init = Object(o.a)(c.a.mark(function _callee2() {
                        var e, n, a, r;
                        return c.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.prev = 0, a = t._getTimingParamValueOrDefault("pageLoadStartTime", 0), Object(yt.a)(a, t._instanceId), t._receiveSessionFromParams(), c.next = 6, se();
                                case 6:
                                    return r = c.sent, t._currentPageUrl = null === (e = r.page) || void 0 === e ? void 0 : e.href, t._currentPageSearch = null === (n = r.page) || void 0 === n ? void 0 : n.search, c.next = 11, t._preBootstrap();
                                case 11:
                                    return c.next = 13, t._initializeAfterPing();
                                case 13:
                                    return c.next = 15, t._handleServerBootstrap();
                                case 15:
                                    return c.next = 17, Rt({
                                        orgId: t._orgId
                                    });
                                case 17:
                                    return ie(), vt(), jt(), Object(yt.b)(), c.next = 23, t.onBootstrapComplete();
                                case 23:
                                    t._dispatch(Object(le.m)({
                                        initComplete: !0
                                    })), Object(Q.a)("bootstrap.complete"), c.next = 31;
                                    break;
                                case 27:
                                    c.prev = 27, c.t0 = c.catch(0), c.t0 instanceof at.a && (Object(Pt.a)(Mt.b.BOOTSTRAP_FAILED), Object(Q.a)("bootstrap.failure")), Object(J.f)(c.t0);
                                case 31:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2, null, [
                            [0, 27]
                        ])
                    })), this.onBootstrapComplete = function() {
                        new Error("You must implement the onBootstrapComplete method in your extension of BootstrapBase")
                    }, this._preBootstrap = Object(o.a)(c.a.mark(function _callee3() {
                        var e;
                        return c.a.wrap(function _callee3$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, Ut({
                                        embedId: t._embedId,
                                        pageUrl: t._currentPageUrl
                                    });
                                case 2:
                                    e = n.sent, t._embedId = e.embedId, window.drift = window.drift || {}, window.drift.embedId = t._embedId, t._preReqData = e;
                                case 7:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee3)
                    })), this._initializeAfterPing = Object(o.a)(c.a.mark(function _callee4() {
                        var e;
                        return c.a.wrap(function _callee4$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return t._dispatch(Object(M.c)({
                                        id: t._embedId,
                                        theme: {
                                            signedIdentityRequiredStatus: t._preReqData.signedIdentityStatus,
                                            cookieDomains: t._preReqData.cookieDomains || []
                                        }
                                    })), n.next = 3, Object(D.a)();
                                case 3:
                                    return n.next = 5, Object(D.b)({
                                        demandbaseToken: null === (e = t._preReqData) || void 0 === e ? void 0 : e.demandBaseToken
                                    });
                                case 5:
                                    return n.next = 7, oe();
                                case 7:
                                    return n.next = 9, t._generateAuthenticationIdentity();
                                case 9:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee4)
                    })), this._handleServerBootstrap = Object(o.a)(c.a.mark(function _callee6() {
                        var e, n, a, r, i, s, l, d, p, v, h, O, g, j, m, _, y, k, w, x;
                        return c.a.wrap(function _callee6$(I) {
                            for (;;) switch (I.prev = I.next) {
                                case 0:
                                    return I.next = 2, Object(je.c)(Object(o.a)(c.a.mark(function _callee5() {
                                        return c.a.wrap(function _callee5$(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t._getServerBootstrapResponse();
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, _callee5)
                                    })), "widget_core:bootstrap_api");
                                case 2:
                                    if (e = t._bootstrapResponse, n = e.embed, a = e.tokenResult, r = e.location, i = void 0 === r ? {} : r, s = e.chatAuth, l = void 0 === s ? null : s, d = e.presenceAuth, p = void 0 === d ? null : d, v = e.sentryConfig, h = void 0 === v ? null : v, O = e.widgetChatBootstrapResponse, g = void 0 === O ? null : O, j = e.welcomeMessageUsers, m = void 0 === j ? null : j, a) {
                                        I.next = 5;
                                        break
                                    }
                                    throw new at.a("Received null access token from widget auth");
                                case 5:
                                    t._orgId = null === n || void 0 === n ? void 0 : n.orgId, t._dispatch(Object(M.b)(Object(b.a)(Object(b.a)({}, n), {}, {
                                        welcomeMessageUsers: m
                                    }))), t._dispatch(Object(ce.q)(i)), t._dispatch(Object(ce.h)(l)), t._dispatch(Object(ce.s)(p)), h && t._dispatch(_t({
                                        forceLog: Object(Dt.a)(t._orgId, h.allowListOrgIds),
                                        limit: h.limit
                                    })), g && (Object(S.d)(g.campaignConversations), (_ = Object.keys(g.campaignEnrollment)).length && t._dispatch(Object(u.f)(_)), g.conversations.length && t._dispatch(Object(T.f)({
                                        conversations: g.conversations
                                    }))), y = a.accessToken, k = a.didConsentToRequestedConsentId, w = a.assignedAgentId, t._accessToken = y, x = Object(f.a)(["didConsentToRequestedConsentId", "accessToken", "assignedAgentId"], a), t._dispatch(Object(ce.k)({
                                        endUser: x,
                                        assignedAgentId: w
                                    })), t._dispatch(Object(ce.f)({
                                        accessToken: y
                                    })), t._dispatch(Object(ce.p)({
                                        hasConsent: k || !1
                                    }));
                                case 18:
                                case "end":
                                    return I.stop()
                            }
                        }, _callee6)
                    })), this._getServerBootstrapResponse = Object(o.a)(c.a.mark(function _callee7() {
                        var e, n, a, r, o, i, s, u, l, d, f, p;
                        return c.a.wrap(function _callee7$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.prev = 0, e = t._state(), n = e.session, a = Object(ee.a)("", ["context", "page", "href"], n), r = Object(ee.a)(0, ["visitInformation", "total"], n), o = n.campaignRefreshToken, i = Object(ee.a)("CHAT", ["mode"], t._params), s = Math.floor((null === n || void 0 === n ? void 0 : n.sessionStarted) || Date.now() / 1e3), u = {
                                        sessionId: o,
                                        pageUrl: a,
                                        hasHadConversations: !1,
                                        followingCampaignIds: [],
                                        excludedCampaignIds: [],
                                        siteVisits: r
                                    }, l = Object(b.a)(Object(b.a)({}, t._identityMap), {}, {
                                        embed_id: t._embedId,
                                        sessionStarted: s,
                                        targeting_context: u,
                                        useActiveConvo: "CHAT" === i
                                    }), c.next = 11, Object(nt.b)(i, l);
                                case 11:
                                    d = c.sent, f = d.data, p = d.responseTime, t._bootstrapResponse = f, Object(Q.d)("enduser_bootstrap", p), c.next = 21;
                                    break;
                                case 18:
                                    c.prev = 18, c.t0 = c.catch(0), Object(J.f)(new at.a("Failed to get bootstrap-api response - ".concat(c.t0.message)));
                                case 21:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee7, null, [
                            [0, 18]
                        ])
                    })), this._receiveSessionFromParams = function() {
                        t._dispatch(Object(ce.t)({
                            session: t._params.session
                        }))
                    }, this._generateAuthenticationIdentity = Object(o.a)(c.a.mark(function _callee8() {
                        var e, n, a;
                        return c.a.wrap(function _callee8$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e = t._state(), n = e.session, a = (void 0 === n ? {} : n).externalIdentity, r.next = 4, Object(L.a)(t._preReqData.signedIdentityStatus);
                                case 4:
                                    if (t._identityMap = r.sent, !a.externalId) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.next = 8, Ze(a.externalId, a.attributes, a.options, !0);
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee8)
                    })), this._getTimingParamValueOrDefault = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        return Object(ee.a)(n, ["timing", e], t._params)
                    }, this._getSessionParamValueOrDefault = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        return Object(ee.a)(n, ["session", e], t._params)
                    }, this._dispatch = s.a.dispatch, this._state = s.a.getState, this._embedId = n, this._params = a, this._sessionId = this._getSessionParamValueOrDefault("sessionId", null), this._instanceId = this._getSessionParamValueOrDefault("instanceId", null)
                };

            function chat_createSuper2(e) {
                return function() {
                    var t, n = Object(ot.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var a = Object(ot.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(ct.a)(this, t)
                }
            }
            var Nt = function(e) {
                Object(rt.a)(ChatBootstrap, e);
                var t = chat_createSuper2(ChatBootstrap);

                function ChatBootstrap() {
                    var e;
                    Object(he.a)(this, ChatBootstrap);
                    for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(a))).onBootstrapComplete = Object(o.a)(c.a.mark(function _callee() {
                        var t, n, a, r, o, i, s;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = e._bootstrapResponse.activeConversation, n = e._bootstrapResponse.activeMessages, a = e._bootstrapResponse.widgetChatBootstrapResponse, c.next = 5, Object(st.c)();
                                case 5:
                                    r = c.sent, o = e.tryFireFallbackConversation(), (i = !Object(J.m)(t)) && !r && e.evaluateActiveConversationData(t, n), s = e._params.skipCampaigns || r || o || i, e.executeWidgetTargeting(null === a || void 0 === a ? void 0 : a.campaignConversations, s);
                                case 11:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    })), e.tryFireFallbackConversation = function() {
                        var t = lt.a.parse(e._currentPageSearch),
                            n = Object(be.a)(Array, t[it.a.FALLBACK_CONVERSATION]) ? t[it.a.FALLBACK_CONVERSATION][0] : t[it.a.FALLBACK_CONVERSATION];
                        return !!n && (qe(n), !0)
                    }, e.executeWidgetTargeting = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = Object(S.f)(t);
                        Object(H.a)({
                            evaluatedConditionsResults: e._bootstrapResponse.evaluatedConditionsResults,
                            unreadCampaignIds: a,
                            skipCampaignTargeting: n
                        })
                    }, e.evaluateActiveConversationData = function() {
                        var t = Object(o.a)(c.a.mark(function _callee2(t, n) {
                            var a, r;
                            return c.a.wrap(function _callee2$(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        if (t && !Object(J.m)(null === n || void 0 === n ? void 0 : n.data)) {
                                            c.next = 2;
                                            break
                                        }
                                        return c.abrupt("return");
                                    case 2:
                                        return e._dispatch(Object(T.o)({
                                            conversationId: Number(t)
                                        })), e._dispatch(Object(T.k)({
                                            messages: n.data,
                                            hasMoreMessages: Object(ee.a)(!1, ["more"], n.pagination),
                                            nextPageMessageId: Object(ee.a)(null, ["next"], n.pagination),
                                            conversationId: t
                                        })), c.next = 6, re.a.get(te.b);
                                    case 6:
                                        a = c.sent, r = a.data, e._dispatch(Object(le.e)({
                                            chatOpen: null !== r && void 0 !== r && r
                                        }));
                                    case 9:
                                    case "end":
                                        return c.stop()
                                }
                            }, _callee2)
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }(), e
                }
                return ChatBootstrap
            }(Lt);

            function landingPage_createSuper2(e) {
                return function() {
                    var t, n = Object(ot.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var a = Object(ot.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(ct.a)(this, t)
                }
            }
            var Vt = function(e) {
                    Object(rt.a)(LandingPageBootstrap, e);
                    var t = landingPage_createSuper2(LandingPageBootstrap);

                    function LandingPageBootstrap() {
                        var e;
                        Object(he.a)(this, LandingPageBootstrap);
                        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(a))).onBootstrapComplete = function() {
                            e._dispatch(Object(le.d)(!1))
                        }, e
                    }
                    return LandingPageBootstrap
                }(Lt),
                Ut = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n;
                        return c.a.wrap(function _callee$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0, a.next = 3, Object(nt.a)(e);
                                case 3:
                                    return t = a.sent, n = t.data, a.abrupt("return", n);
                                case 8:
                                    a.prev = 8, a.t0 = a.catch(0), Object(J.f)(new at.a("Failed to get ping information from bootstrap - ".concat(a.t0.message)), a.t0);
                                case 11:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee, null, [
                            [0, 8]
                        ])
                    }));
                    return function fetchPrerequisiteChatBootstrapData(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Bt = function() {
                    var e = Object(o.a)(c.a.mark(function _callee2(e) {
                        return c.a.wrap(function _callee2$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    t.t0 = e.params.mode, t.next = "LANDING_PAGE" === t.t0 ? 3 : (t.t0, 6);
                                    break;
                                case 3:
                                    return t.next = 5, new Vt(e).init();
                                case 5:
                                    return t.abrupt("return", t.sent);
                                case 6:
                                    return t.next = 8, new Nt(e).init();
                                case 8:
                                    return t.abrupt("return", t.sent);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2)
                    }));
                    return function init(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ft = n("OA1u"),
                Ht = n("uDfI"),
                $t = n("uiOv"),
                Gt = n("0LtH"),
                Wt = n("EQxi");
            n("z8n0");
            s.a.name = "controller";
            t.default = Object($t.a)(function WidgetControllerPage(e) {
                var t = e.location,
                    n = Object(_.useState)(!1),
                    a = Object(i.a)(n, 2),
                    r = a[0],
                    u = a[1],
                    b = Object(Wt.f)(lt.a.parse(t.search)),
                    f = Object(J.v)();
                return Object(_.useEffect)(function() {
                    if (r) {
                        var e = Object(je.b)("widget_core:widget_loaded");
                        e && (Object(Q.d)("loaded", e), Object(Q.a)("widget.v2.load", !1))
                    } else Object(v.a)({
                        name: "controller",
                        syncWith: "chat",
                        store: s.a
                    }), p(), d(), Object(l.c)({
                        topic: "CONDUCTOR:send-usage-metric-event",
                        handler: function() {
                            var e = Object(o.a)(c.a.mark(function _callee(e) {
                                var t;
                                return c.a.wrap(function _callee$(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return t = e.data, n.next = 3, Object(Q.c)(t.name, t.attributes, t.publishImmediately);
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }, _callee)
                            }));
                            return function handler(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }), Object(l.c)({
                        topic: "trigger-api-event",
                        handler: tt
                    }), Object(l.c)({
                        topic: "log-conductor-error",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            return Object(J.f)(new Error("WIDGET_CONDUCTOR: ".concat(n.message)))
                        }
                    }), Object(l.c)({
                        topic: "get-ready-payload",
                        handler: yt.c
                    }), Object(l.c)({
                        topic: "identity-provided-email",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(ce.l)(n.email))
                        }
                    }), Object(l.c)({
                        topic: "identity-provided",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(ce.n)(n))
                        }
                    }), Object(l.c)({
                        topic: "hide-widget-on-ready",
                        handler: function handler() {
                            s.a.dispatch(Object(Ft.d)(!0))
                        }
                    }), Object(l.c)({
                        topic: "show-widget-on-ready",
                        handler: function handler(e) {
                            e.data, s.a.dispatch(Object(Ft.b)(!0))
                        }
                    }), Object(l.c)({
                        topic: "identity-provided-id",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(ce.m)(n.externalId))
                        }
                    }), Object(l.c)({
                        topic: "identity-provided-jwt",
                        handler: function handler(e) {
                            var t = e.data,
                                n = void 0 === t ? {} : t;
                            s.a.dispatch(Object(ce.o)(n.userJwt))
                        }
                    }), Object(l.c)({
                        topic: "host-hash-change",
                        handler: function handler(e) {
                            var t = e.data;
                            return Object(Gt.a)(t.hash)
                        }
                    }), Object(l.c)({
                        topic: "init-ready",
                        handler: function() {
                            var e = Object(o.a)(c.a.mark(function _callee2() {
                                return c.a.wrap(function _callee2$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, e.t0 = !r, !e.t0) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 5, Bt({
                                                embedId: b.embedId,
                                                params: {
                                                    skipCampaigns: b.skipCampaigns,
                                                    forceShow: b.forceShow,
                                                    session: {
                                                        sessionId: b.sessionId,
                                                        sessionStarted: b.sessionStarted,
                                                        campaignRefreshToken: b.campaignRefreshToken,
                                                        instanceId: f
                                                    },
                                                    timing: {
                                                        pageLoadStartTime: b.pageLoadStartTime
                                                    },
                                                    mode: b.mode
                                                }
                                            });
                                        case 5:
                                            u(!0), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t1 = e.catch(0), console.warn(e.t1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, _callee2, null, [
                                    [0, 8]
                                ])
                            }));
                            return function handler() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }), Object(l.c)({
                        topic: "get-cookie-domains",
                        handler: function handler() {
                            return Object(pe.c)()
                        }
                    }), Object(Pt.a)(Mt.b.API_READY)
                }, [b.embedId, b.forceShow, b.skipCampaigns, r, b.sessionId, b.sessionStarted, b.campaignRefreshToken, f, b.pageLoadStartTime, b.mode]), y.a.createElement(Ht.a, {
                    store: s.a
                }, !b.hideController && r && y.a.createElement(x, null))
            })
        },
        B8JY: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return s
            });
            var a = n("Cpup"),
                r = function receiveEmbedConfiguration(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_CONFIGURATION",
                        payload: e
                    })
                },
                c = function receiveEmbedConfigurationOverride(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_CONFIGURATION_OVERRIDE",
                        payload: e
                    })
                },
                o = function receiveEmbedWelcomeMessage(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_WELCOME_MESSAGE",
                        payload: e
                    })
                },
                i = function receiveEmbedAwayMessage(e) {
                    return Object(a.a)({
                        type: "RECIEVE_EMBED_AWAY_MESSAGE",
                        payload: e
                    })
                },
                s = function receiveEmbedTeam(e) {
                    return Object(a.a)({
                        type: "RECEIVE_EMBED_TEAM",
                        payload: e
                    })
                }
        },
        BAMi: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("WwEg"),
                c = n("nfbA"),
                o = n("mj2O"),
                i = n.n(o),
                s = n("7SM1"),
                u = n("QtlZ"),
                l = n("K0Zh"),
                d = n("Maj3"),
                b = n("gG69"),
                f = n("0lfv"),
                p = n("7oto"),
                v = n("OA1u"),
                h = n("LVcX"),
                O = n("Jstd"),
                g = n("4Zd6"),
                j = n("EQxi"),
                m = function transformNumericConditionValues(e) {
                    return "string" === typeof e ? Object(f.u)(e) : "object" === typeof e && e.min && e.max ? {
                        min: Object(f.u)(e.min),
                        max: Object(f.u)(e.max)
                    } : e
                },
                _ = function getSecondsOnPage(e) {
                    var t = Object(h.a)(0, ["_window", "drift_page_view_started"])(e);
                    return (new Date).getTime() / 1e3 - t
                },
                y = function isAnyOf(e, t) {
                    return Object(O.a)(function(e) {
                        return t === e
                    })(e)
                },
                k = function notIsAnyOf(e, t) {
                    return !y(e, t)
                },
                w = function is(e, t) {
                    return e === t
                },
                x = function notIs(e, t) {
                    return e !== t
                },
                I = function lessThan(e, t) {
                    return t < e
                },
                C = function greaterThan(e, t) {
                    return t > e
                },
                E = function isBetween(e, t) {
                    return !!e.min && !!e.max && t >= e.min && t <= e.max
                },
                S = function includesAnyOf(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return Object(O.a)(function(e) {
                        return -1 !== t.indexOf(e)
                    })(e)
                },
                A = function notIncludesAnyOf(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return Object(g.a)(function(e) {
                        return -1 === t.indexOf(e)
                    })(e)
                },
                T = {
                    device: {
                        async: !1,
                        selector: function selector(e) {
                            return function resolveDeviceType(e) {
                                var t = e.toLowerCase();
                                return t.match(/(mobi|phone|ipod|blackberry|docomo|iphone|android)/i) ? "mobile" : t.match(/(ipad|kindle)/i) ? "tablet" : "desktop"
                            }(Object(h.a)("", ["_window", "userAgent"])(e))
                        },
                        operands: {
                            isAnyOf: y,
                            notIsAnyOf: k
                        }
                    },
                    daysSinceLastVisit: {
                        async: !1,
                        selector: function selector(e) {
                            return Object(h.a)(0, ["visitInformation", "daysSinceLastVisit"])(e)
                        },
                        transformValueFn: function transformValueFn(e) {
                            return m(e)
                        },
                        operands: {
                            is: w,
                            notIs: x,
                            lessThan: I,
                            greaterThan: C,
                            isBetween: E
                        }
                    },
                    referrer: {
                        async: !1,
                        transformValueFn: function transformValueFn(e) {
                            return e.map(function(e) {
                                return Object(j.c)(e)
                            })
                        },
                        selector: function selector(e) {
                            return Object(j.c)(Object(h.a)("", ["referrer"])(e))
                        },
                        operands: {
                            is: w,
                            notIs: x,
                            isAnyOf: y,
                            notIsAnyOf: k,
                            includesAnyOf: S,
                            notIncludesAnyOf: A
                        }
                    },
                    cookie: {
                        async: !1,
                        selector: function selector(e) {
                            return Object.entries(Object(h.a)({}, ["cookies"])(e)).map(function(e) {
                                return e.join("=")
                            })
                        },
                        operands: {
                            is: S,
                            notIs: A,
                            isAnyOf: S,
                            notIsAnyOf: A,
                            includesAnyOf: S,
                            notIncludesAnyOf: A
                        }
                    },
                    scrollPct: {
                        async: !0,
                        eventType: "scroll",
                        transformValueFn: function transformValueFn(e) {
                            return m(e)
                        },
                        selector: function selector(e) {
                            var t = Object(h.a)(0, ["_window", "scrollY"])(e);
                            return (Object(h.a)(0, ["_window", "innerHeight"])(e) + t) / Object(h.a)(0, ["scrollableHeight"])(e) * 100
                        },
                        operands: {
                            lessThan: I,
                            greaterThan: C,
                            isBetween: E
                        }
                    },
                    secondsOnPage: {
                        async: !0,
                        timer: !0,
                        eventType: "timer",
                        selector: function selector(e) {
                            return _(e)
                        },
                        transformValueFn: function transformValueFn(e) {
                            return m(e)
                        },
                        operands: {
                            lessThan: I,
                            greaterThan: C,
                            isBetween: E
                        }
                    },
                    secondsOnSite: {
                        async: !0,
                        timer: !0,
                        eventType: "timer",
                        transformValueFn: function transformValueFn(e) {
                            return m(e)
                        },
                        selector: function selector(e) {
                            var t = Object(h.a)(0, ["_window", "drift_session_started"])(e);
                            return (new Date).getTime() / 1e3 - t
                        },
                        operands: {
                            lessThan: I,
                            greaterThan: C,
                            isBetween: E
                        }
                    },
                    exitIntent: {
                        async: !0,
                        eventType: "mouseleave",
                        eventProperties: ["clientY"],
                        selector: function selector() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (Object(h.a)(!1, ["hasExitIntent"])(e)) return !0;
                            var t = Object(h.a)(0, ["_window", "innerHeight"])(e),
                                n = Object(h.a)(t, ["eventContext", "clientY"])(e),
                                a = _(e);
                            return n / t < .5 && a > 5
                        },
                        operands: {
                            is: w,
                            notIs: x
                        }
                    },
                    autoAssigneeId: {
                        async: !1,
                        selector: function selector(e) {
                            return Object(h.a)("", ["autoAssigneeId"])(e)
                        },
                        operands: {
                            is: w,
                            notIs: x,
                            isAnyOf: y,
                            notIsAnyOf: k
                        }
                    },
                    inboxId: {
                        async: !1,
                        selector: function selector(e) {
                            return Object(h.a)("", ["embed", "configuration", "inboxId"])(e)
                        },
                        operands: {
                            isAnyOf: y,
                            notIsAnyOf: k
                        }
                    }
                },
                R = function isUnsupportedConditionOrOperator(e) {
                    return !T[e.field] || !T[e.field].operands[e.operator]
                },
                D = function() {
                    var e = Object(s.a)(i.a.mark(function _callee(e, t) {
                        var n, a, r, c, o, s;
                        return i.a.wrap(function _callee$(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (!R(e)) {
                                        i.next = 2;
                                        break
                                    }
                                    return i.abrupt("return", Promise.resolve({
                                        conditionEvaluation: !0,
                                        conditionEvalDetail: {
                                            evaluatedCondition: e,
                                            matched: !0,
                                            status: "EVALUATED"
                                        }
                                    }));
                                case 2:
                                    return n = T[e.field], a = n.operands[e.operator], r = n.transformValueFn ? n.transformValueFn(e.value) : e.value, i.next = 7, n.selector(t, e);
                                case 7:
                                    return c = i.sent, o = a(r, c), s = {
                                        evaluatedCondition: e,
                                        matched: o,
                                        actualValue: c,
                                        status: n.async ? o ? "EVALUATED" : "PENDING" : "EVALUATED"
                                    }, i.abrupt("return", Promise.resolve({
                                        conditionEvaluation: o,
                                        conditionEvalDetail: s
                                    }));
                                case 11:
                                case "end":
                                    return i.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateSingleCondition(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function conditionEvaluator(e) {
                    return function(t) {
                        return D(e, t)
                    }
                },
                P = function() {
                    var e = Object(s.a)(i.a.mark(function _callee3(e) {
                        var t, n, a, r, c, o, u, l, d, b, f, p, v, h, O;
                        return i.a.wrap(function _callee3$(g) {
                            for (;;) switch (g.prev = g.next) {
                                case 0:
                                    t = e.context, n = e.conditions, a = !1, r = [], c = [], o = function() {
                                        var e = Object(s.a)(i.a.mark(function _callee2(e) {
                                            var n, a, c, o, s, u, l, d, b, f, p, v, h, O, g, j, m;
                                            return i.a.wrap(function _callee2$(_) {
                                                for (;;) switch (_.prev = _.next) {
                                                    case 0:
                                                        n = !0, a = [], _.t0 = i.a.keys(e);
                                                    case 3:
                                                        if ((_.t1 = _.t0()).done) {
                                                            _.next = 23;
                                                            break
                                                        }
                                                        return c = _.t1.value, o = e[c], _.next = 8, D(o, t);
                                                    case 8:
                                                        if (s = _.sent, u = s.conditionEvalDetail, l = s.conditionEvaluation, a.push(u), l || R(u.evaluatedCondition)) {
                                                            _.next = 21;
                                                            break
                                                        }
                                                        if (d = T[o.field], b = d.async, f = void 0 !== b && b, p = d.eventType, v = void 0 === p ? null : p, h = d.timer, O = void 0 !== h && h, g = d.selector, j = d.eventProperties, m = void 0 === j ? [] : j, n = !1, !f) {
                                                            _.next = 19;
                                                            break
                                                        }
                                                        r.push({
                                                            conditionDefinition: o,
                                                            selector: g,
                                                            eventType: v,
                                                            timer: O,
                                                            eventProperties: m,
                                                            type: o.field,
                                                            evaluator: M(o)
                                                        }), _.next = 21;
                                                        break;
                                                    case 19:
                                                        return r = [], _.abrupt("break", 23);
                                                    case 21:
                                                        _.next = 3;
                                                        break;
                                                    case 23:
                                                        return _.abrupt("return", Promise.resolve({
                                                            fullGroupMatch: n,
                                                            groupEval: {
                                                                targetingConditions: a,
                                                                status: r.length ? "PENDING" : "EVALUATED"
                                                            }
                                                        }));
                                                    case 24:
                                                    case "end":
                                                        return _.stop()
                                                }
                                            }, _callee2)
                                        }));
                                        return function evaluateConditions(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), u = !0, l = !1, d = void 0, g.prev = 8, b = n[Symbol.iterator]();
                                case 10:
                                    if (u = (f = b.next()).done) {
                                        g.next = 25;
                                        break
                                    }
                                    return p = f.value, g.next = 14, o(p);
                                case 14:
                                    if (v = g.sent, h = v.fullGroupMatch, O = v.groupEval, c.push(O), !h) {
                                        g.next = 22;
                                        break
                                    }
                                    return a = !0, r = [], g.abrupt("break", 25);
                                case 22:
                                    u = !0, g.next = 10;
                                    break;
                                case 25:
                                    g.next = 31;
                                    break;
                                case 27:
                                    g.prev = 27, g.t0 = g.catch(8), l = !0, d = g.t0;
                                case 31:
                                    g.prev = 31, g.prev = 32, u || null == b.return || b.return();
                                case 34:
                                    if (g.prev = 34, !l) {
                                        g.next = 37;
                                        break
                                    }
                                    throw d;
                                case 37:
                                    return g.finish(34);
                                case 38:
                                    return g.finish(31);
                                case 39:
                                    return g.abrupt("return", Promise.resolve({
                                        matched: a,
                                        asyncConditionListeners: r,
                                        evalLog: c
                                    }));
                                case 40:
                                case "end":
                                    return g.stop()
                            }
                        }, _callee3, null, [
                            [8, 27, 31, 39],
                            [32, , 34, 38]
                        ])
                    }));
                    return function evaluateTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                L = n("IpSJ"),
                N = n("SHZQ"),
                V = n("Wjfv"),
                U = n("weY7"),
                B = n("FAmh"),
                F = function AddEvaluationResultToAuditLog(e) {
                    var t = e.auditLog,
                        n = e.isServerGenerated,
                        a = void 0 === n || n,
                        r = e.evaluationResults,
                        c = e.didMatch,
                        o = e.campaignId,
                        i = e.priority,
                        s = e.status,
                        u = void 0 === s ? b.b.EVALUATED : s;
                    if (t.conditionGroups) {
                        var l = a ? H(r) : r;
                        t.conditionGroups.push({
                            status: u,
                            matched: c,
                            conditionSets: l,
                            key: o,
                            priority: i
                        })
                    }
                },
                H = function _generateAuditLogForServerEvaluationResults(e) {
                    return Object(U.a)(function(e) {
                        return $(e)
                    }, e)
                },
                $ = function _generateAuditLogResultForConditionSet(e) {
                    var t = Object(U.a)(function(e) {
                        return {
                            evaluatedCondition: Object(h.a)(null, ["evaluatedTargetCondition", "condition"], e),
                            matched: Object(h.a)(!1, ["evaluatedTargetCondition", "matched"], e),
                            actualValue: Object(h.a)(null, ["evaluatedTargetCondition", "actualValue"], e),
                            status: b.b.EVALUATED,
                            meta: {}
                        }
                    }, e.evaluatedTargetConditionSet);
                    return {
                        status: b.b.EVALUATED,
                        targetingConditions: t
                    }
                },
                G = function() {
                    var e = Object(s.a)(i.a.mark(function _callee(e) {
                        var t, n;
                        return i.a.wrap(function _callee$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (e && e.conditionGroups.length) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.prev = 2, a.next = 5, Object(N.e)(Object(c.a)(Object(c.a)({}, e), Object(B.c)()));
                                case 5:
                                    t = a.sent, n = t.data, u.a.dispatch(Object(V.c)({
                                        campaignEvalId: n.targetingEvaluationUUID
                                    })), a.next = 13;
                                    break;
                                case 10:
                                    a.prev = 10, a.t0 = a.catch(2), Object(f.w)(["Failed to persist targeting audit log", a.t0]);
                                case 13:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee, null, [
                            [2, 10]
                        ])
                    }));
                    return function SaveAuditLog(t) {
                        return e.apply(this, arguments)
                    }
                }();
            n.d(t, "b", function() {
                return Y
            }), n.d(t, "c", function() {
                return Q
            }), n.d(t, "a", function() {
                return Z
            });
            var W = ["secondsOnSite", "secondsOnPage", "scrollPct", "exitIntent"],
                q = function() {
                    var e = Object(s.a)(i.a.mark(function _callee(e) {
                        var t, n, a, r;
                        return i.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = e.filter(function(e) {
                                        return !e.allConditionsFullyEvaluated && e.allConditionsPotentiallyMatched
                                    }), n = t.map(function(e) {
                                        return e.evaluatedTargetConditionSet
                                    }), a = n.map(function(e) {
                                        return e.map(function(e) {
                                            return e.evaluatedTargetCondition
                                        }).map(function(e) {
                                            return e.condition
                                        })
                                    }), c.next = 5, Object(L.b)();
                                case 5:
                                    return r = c.sent, c.next = 8, P({
                                        conditions: a,
                                        context: r
                                    });
                                case 8:
                                    return c.abrupt("return", c.sent);
                                case 9:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function _evaluateTargetingForEvaluationResults(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                J = function() {
                    var e = Object(s.a)(i.a.mark(function _callee3(e) {
                        var t, n, a, r, o, l, d = arguments;
                        return i.a.wrap(function _callee3$(b) {
                            for (;;) switch (b.prev = b.next) {
                                case 0:
                                    if (t = d.length > 1 && void 0 !== d[1] ? d[1] : function() {}, n = Object(f.v)(), a = function() {
                                            var a = Object(s.a)(i.a.mark(function _callee2() {
                                                var a, r, o = arguments;
                                                return i.a.wrap(function _callee2$(i) {
                                                    for (;;) switch (i.prev = i.next) {
                                                        case 0:
                                                            return a = o.length > 0 && void 0 !== o[0] ? o[0] : {}, i.next = 3, Object(L.b)();
                                                        case 3:
                                                            return r = i.sent, i.next = 6, e.evaluator(Object(c.a)(Object(c.a)({}, r), {}, {
                                                                eventContext: a
                                                            }));
                                                        case 6:
                                                            if (i.sent.conditionEvaluation) {
                                                                i.next = 9;
                                                                break
                                                            }
                                                            return i.abrupt("return");
                                                        case 9:
                                                            e.eventType && ("exitIntent" === e.type && u.a.dispatch(Object(v.a)()), Object(p.a)({
                                                                topic: "remove-host-event-listener",
                                                                message: {
                                                                    id: n,
                                                                    event: e.eventType
                                                                }
                                                            }), t());
                                                        case 10:
                                                        case "end":
                                                            return i.stop()
                                                    }
                                                }, _callee2)
                                            }));
                                            return function asyncConditionHandler() {
                                                return a.apply(this, arguments)
                                            }
                                        }(), !e.timer) {
                                        b.next = 12;
                                        break
                                    }
                                    return b.next = 6, Object(L.b)();
                                case 6:
                                    r = b.sent, o = e.conditionDefinition.value, (l = o - e.selector(r)) > 0 && setTimeout(a, 1e3 * l + 1e3), b.next = 13;
                                    break;
                                case 12:
                                    Object(p.a)({
                                        topic: "add-host-event-listener",
                                        message: {
                                            id: n,
                                            event: e.eventType,
                                            handler: a,
                                            eventProperties: e.eventProperties || []
                                        }
                                    });
                                case 13:
                                case "end":
                                    return b.stop()
                            }
                        }, _callee3)
                    }));
                    return function _waitForCondition(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = function() {
                    var e = Object(s.a)(i.a.mark(function _callee4(e) {
                        var t, n, a, o, s, u, d, f, p, v, h, O, g, j, m;
                        return i.a.wrap(function _callee4$(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (e && e.length) {
                                        i.next = 2;
                                        break
                                    }
                                    return i.abrupt("return", null);
                                case 2:
                                    t = Object(c.a)({
                                        conditionGroups: []
                                    }, Object(B.c)()), n = !0, a = !1, o = void 0, i.prev = 6, s = e[Symbol.iterator]();
                                case 8:
                                    if (n = (u = s.next()).done) {
                                        i.next = 32;
                                        break
                                    }
                                    if ((d = u.value).status !== b.b.EVALUATED || !d.matched) {
                                        i.next = 14;
                                        break
                                    }
                                    t.conditionGroups.push(d), i.next = 29;
                                    break;
                                case 14:
                                    if (d.status !== b.b.PENDING) {
                                        i.next = 29;
                                        break
                                    }
                                    return f = d.conditionSets.filter(function(e) {
                                        return e.status === b.b.PENDING
                                    }).map(function(e) {
                                        return e.targetingConditions
                                    }), p = f.map(function(e) {
                                        return e.filter(function(e) {
                                            return e.status === b.b.PENDING
                                        }).map(function(e) {
                                            return e.evaluatedCondition
                                        })
                                    }), v = f.map(function(e) {
                                        return e.filter(function(e) {
                                            return e.status === b.b.EVALUATED
                                        })
                                    }), h = Object(l.a)(v), i.next = 21, Object(L.b)();
                                case 21:
                                    return O = i.sent, i.next = 24, P({
                                        conditions: p,
                                        context: O
                                    });
                                case 24:
                                    g = i.sent, j = g.matched, m = g.evalLog, h.length && (m[0].targetingConditions = [].concat(Object(r.a)(m[0].targetingConditions), Object(r.a)(h))), t.conditionGroups.push({
                                        status: b.b.EVALUATED,
                                        matched: j,
                                        conditionSets: m,
                                        key: d.key,
                                        priority: d.priority
                                    });
                                case 29:
                                    n = !0, i.next = 8;
                                    break;
                                case 32:
                                    i.next = 38;
                                    break;
                                case 34:
                                    i.prev = 34, i.t0 = i.catch(6), a = !0, o = i.t0;
                                case 38:
                                    i.prev = 38, i.prev = 39, n || null == s.return || s.return();
                                case 41:
                                    if (i.prev = 41, !a) {
                                        i.next = 44;
                                        break
                                    }
                                    throw o;
                                case 44:
                                    return i.finish(41);
                                case 45:
                                    return i.finish(38);
                                case 46:
                                    return i.abrupt("return", t);
                                case 47:
                                case "end":
                                    return i.stop()
                            }
                        }, _callee4, null, [
                            [6, 34, 38, 46],
                            [39, , 41, 45]
                        ])
                    }));
                    return function evaluateConditionalSkillTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Q = function() {
                    var e = Object(s.a)(i.a.mark(function _callee5(e) {
                        var t, n, a, c, o, s, u, l, d, f, p;
                        return i.a.wrap(function _callee5$(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (t = e.evaluationMatchOutcome, n = e.evaluationResults, a = void 0 === n ? [] : n, c = e.onMatched, o = void 0 === c ? function() {} : c, s = e.onDidNotMatch, u = void 0 === s ? function() {} : s, l = [], t !== b.a.MATCH) {
                                        i.next = 4;
                                        break
                                    }
                                    return i.abrupt("return", o());
                                case 4:
                                    if (t !== b.a.NO_MATCH) {
                                        i.next = 6;
                                        break
                                    }
                                    return i.abrupt("return", u());
                                case 6:
                                    if (t !== b.a.POTENTIAL_MATCH) {
                                        i.next = 17;
                                        break
                                    }
                                    return i.next = 9, q(a);
                                case 9:
                                    if (d = i.sent, f = d.matched, p = d.asyncConditionListeners, !f) {
                                        i.next = 16;
                                        break
                                    }
                                    return i.abrupt("return", o());
                                case 16:
                                    l = [].concat(Object(r.a)(l), Object(r.a)(p));
                                case 17:
                                    if (l.forEach(function(e) {
                                            return J(e, function() {
                                                return o()
                                            })
                                        }), l.length) {
                                        i.next = 20;
                                        break
                                    }
                                    return i.abrupt("return", u());
                                case 20:
                                    return i.abrupt("return", u());
                                case 21:
                                case "end":
                                    return i.stop()
                            }
                        }, _callee5)
                    }));
                    return function evaluateWidgetDisplayTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function() {
                    var e = Object(s.a)(i.a.mark(function _callee8(e) {
                        var t, n, c, o, u, l, f, p, v, h, O, g, j, m, _, y, k, w, x, I, C, E, S, A, T, R, D, M, P, L, N;
                        return i.a.wrap(function _callee8$(V) {
                            for (;;) switch (V.prev = V.next) {
                                case 0:
                                    g = function _ref16(e) {
                                        return Object(d.a)(function(e) {
                                            return e.evaluatedTargetConditionSet
                                        }, e.filter(function(e) {
                                            return e.fullyEvaluatedAndMatched
                                        })).filter(function(e) {
                                            return e.fullyEvaluated
                                        }).map(function(e) {
                                            return e.evaluatedTargetCondition
                                        }).filter(function(e) {
                                            return e.matched
                                        }).map(function(e) {
                                            return e.condition
                                        })
                                    }, O = function _ref15(e) {
                                        var t = e.filter(function(e) {
                                            return "EVALUATED" === e.status
                                        }).map(function(e) {
                                            return e.targetingConditions
                                        }).filter(function(e) {
                                            return e.filter(function(e) {
                                                return e.matched
                                            })
                                        });
                                        return Object(d.a)(function(e) {
                                            return e.map(function(e) {
                                                return e.evaluatedCondition
                                            })
                                        }, t)
                                    }, t = e.conditions, n = void 0 === t ? [] : t, c = e.onMatched, o = void 0 === c ? function() {} : c, u = e.onDidNotMatch, l = void 0 === u ? function() {} : u, f = {
                                        conditionGroups: []
                                    }, p = [], v = function() {
                                        var e = Object(s.a)(i.a.mark(function _callee6(e) {
                                            var t, n, a;
                                            return i.a.wrap(function _callee6$(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        return t = e.campaignId, n = e.matchedConditions, a = (void 0 === n ? [] : n).map(function(e) {
                                                            return e.field
                                                        }).filter(function(e) {
                                                            return W.includes(e)
                                                        }).length > 0, r.next = 4, G(f);
                                                    case 4:
                                                        return o && o(t, a), r.abrupt("return", Promise.resolve({
                                                            TAL: f,
                                                            matched: !0
                                                        }));
                                                    case 6:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }, _callee6)
                                        }));
                                        return function onConditionMatched(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), h = function() {
                                        var e = Object(s.a)(i.a.mark(function _callee7() {
                                            return i.a.wrap(function _callee7$(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, G(f);
                                                    case 2:
                                                        return l && l(), e.abrupt("return", Promise.resolve({
                                                            TAL: f,
                                                            matched: !1
                                                        }));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, _callee7)
                                        }));
                                        return function onNoConditionMatched() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), j = !0, m = !1, _ = void 0, V.prev = 10, y = n.entries()[Symbol.iterator]();
                                case 12:
                                    if (j = (k = y.next()).done) {
                                        V.next = 47;
                                        break
                                    }
                                    if (w = Object(a.a)(k.value, 2), x = w[0], I = w[1], C = I.campaignId, E = I.evaluationMatchOutcome, S = I.evaluationResults, A = void 0 === S ? [] : S, E !== b.a.NO_MATCH) {
                                        V.next = 19;
                                        break
                                    }
                                    F({
                                        evaluationResults: A,
                                        auditLog: f,
                                        didMatch: !1,
                                        campaignId: C,
                                        priority: x + 1
                                    }), V.next = 40;
                                    break;
                                case 19:
                                    if (E !== b.a.MATCH) {
                                        V.next = 25;
                                        break
                                    }
                                    return F({
                                        evaluationResults: A,
                                        auditLog: f,
                                        didMatch: !0,
                                        campaignId: C,
                                        priority: x + 1
                                    }), T = g(A), V.abrupt("return", v({
                                        campaignId: C,
                                        matchedConditions: T
                                    }));
                                case 25:
                                    if (E !== b.a.POTENTIAL_MATCH) {
                                        V.next = 40;
                                        break
                                    }
                                    return V.next = 28, q(A);
                                case 28:
                                    if (R = V.sent, D = R.matched, M = R.asyncConditionListeners, P = R.evalLog, F({
                                            auditLog: f,
                                            evaluationResults: L = void 0 === P ? [] : P,
                                            didMatch: D,
                                            campaignId: C,
                                            priority: x + 1,
                                            isServerGenerated: !1,
                                            status: M.length ? b.b.PENDING : b.b.EVALUATED
                                        }), !D) {
                                        V.next = 39;
                                        break
                                    }
                                    return N = O(L), V.abrupt("return", v({
                                        campaignId: C,
                                        matchedConditions: N
                                    }));
                                case 39:
                                    p = [].concat(Object(r.a)(p), Object(r.a)(M));
                                case 40:
                                    if (x !== n.length - 1) {
                                        V.next = 44;
                                        break
                                    }
                                    if (p.forEach(function(e) {
                                            return J(e, function() {
                                                return Z({
                                                    conditions: n,
                                                    onMatched: o,
                                                    onDidNotMatch: l
                                                })
                                            })
                                        }), p.length) {
                                        V.next = 44;
                                        break
                                    }
                                    return V.abrupt("return", h());
                                case 44:
                                    j = !0, V.next = 12;
                                    break;
                                case 47:
                                    V.next = 53;
                                    break;
                                case 49:
                                    V.prev = 49, V.t0 = V.catch(10), m = !0, _ = V.t0;
                                case 53:
                                    V.prev = 53, V.prev = 54, j || null == y.return || y.return();
                                case 56:
                                    if (V.prev = 56, !m) {
                                        V.next = 59;
                                        break
                                    }
                                    throw _;
                                case 59:
                                    return V.finish(56);
                                case 60:
                                    return V.finish(53);
                                case 61:
                                    return V.abrupt("return", h());
                                case 62:
                                case "end":
                                    return V.stop()
                            }
                        }, _callee8, null, [
                            [10, 49, 53, 61],
                            [54, , 56, 60]
                        ])
                    }));
                    return function evaluateCampaignTargetingConditions(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        Erxq: function(e, t, n) {
            "use strict";
            var a = n("LVcX"),
                r = n("ERkP");
            t.a = function useIsBotMessage(e) {
                return Object(r.useMemo)(function() {
                    return Object(a.a)(!1, ["attributes", "isBot"], e)
                }, [e])
            }
        },
        FAmh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return k
            }), n.d(t, "c", function() {
                return w
            }), n.d(t, "b", function() {
                return x
            });
            var a = n("nfbA"),
                r = n("mj2O"),
                c = n.n(r),
                o = n("7SM1"),
                i = n("SHZQ"),
                s = n("QtlZ"),
                u = n("vjCh"),
                l = n("La++"),
                d = n("Hvhg"),
                b = n("SFoa"),
                f = n("+f1A"),
                p = n("BAMi"),
                v = n("awwx"),
                h = n("g6eD"),
                O = n("2XY6"),
                g = n("i9gz"),
                j = n("LVcX"),
                m = n("0lfv"),
                _ = n("ws1h"),
                y = function() {
                    var e = Object(o.a)(c.a.mark(function _callee(e) {
                        var t, n, a, r, o, i, u;
                        return c.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = e.forceShow, n = void 0 !== t && t, a = e.targetingResults, r = void 0 === a ? {} : a, o = Object(v.c)(Object(s.b)()), i = function dispatchWidgetTargetingResult(e, t) {
                                        s.a.dispatch(Object(h.n)({
                                            matchedTargeting: t,
                                            matchedHours: e
                                        }))
                                    }, c.next = 5, Object(_.a)();
                                case 5:
                                    if (u = c.sent, !o) {
                                        c.next = 9;
                                        break
                                    }
                                    return i(u, !1), c.abrupt("return");
                                case 9:
                                    n ? i(!0, !0) : Object(p.c)({
                                        evaluationMatchOutcome: r.evaluationMatchOutcome,
                                        evaluationResults: r.evaluationResults,
                                        onMatched: function onMatched() {
                                            i(u, !0)
                                        },
                                        onDidNotMatch: function onDidNotMatch() {
                                            return i(u, !1)
                                        }
                                    });
                                case 10:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateWidgetTargeting(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = Object(o.a)(c.a.mark(function _callee4() {
                        var e, t, n, r, b, f, h, j, _, k, w, I, C, E, S, A, T, R, D, M = arguments;
                        return c.a.wrap(function _callee4$(P) {
                            for (;;) switch (P.prev = P.next) {
                                case 0:
                                    if (e = M.length > 0 && void 0 !== M[0] ? M[0] : {}, t = e.onDidNotMatch, n = void 0 === t ? function() {} : t, r = e.onDidMatch, b = void 0 === r ? function() {} : r, f = e.unreadCampaignIds, h = void 0 === f ? [] : f, j = e.evaluatedConditionsResults, _ = e.skipCampaignTargeting, k = void 0 !== _ && _, w = Object(s.b)(), I = Object(v.a)(["skipCampaigns"], w), C = !!Object(v.a)(["forceShowWidget"], w), E = Object(d.e)(w), S = k || I, A = function() {
                                            var e = Object(o.a)(c.a.mark(function _callee3(e) {
                                                var t;
                                                return c.a.wrap(function _callee3$(a) {
                                                    for (;;) switch (a.prev = a.next) {
                                                        case 0:
                                                            return a.next = 2, y({
                                                                forceShow: C,
                                                                targetingResults: e.widgetTargetingResults
                                                            });
                                                        case 2:
                                                            if (!S) {
                                                                a.next = 4;
                                                                break
                                                            }
                                                            return a.abrupt("return");
                                                        case 4:
                                                            return t = function() {
                                                                var e = Object(o.a)(c.a.mark(function _callee2(e, t) {
                                                                    var n, a;
                                                                    return c.a.wrap(function _callee2$(r) {
                                                                        for (;;) switch (r.prev = r.next) {
                                                                            case 0:
                                                                                return r.next = 2, b();
                                                                            case 2:
                                                                                if (!Object(O.c)(Object(s.b)())) {
                                                                                    r.next = 4;
                                                                                    break
                                                                                }
                                                                                return r.abrupt("return");
                                                                            case 4:
                                                                                if (!h.includes(e)) {
                                                                                    r.next = 7;
                                                                                    break
                                                                                }
                                                                                return r.abrupt("return", Object(u.k)(e));
                                                                            case 7:
                                                                                n = Object(u.e)(e) || {}, "BOT" !== n.type ? Object(l.b)(e, t) : Object(l.c)({
                                                                                    campaignId: e,
                                                                                    isDelayed: t,
                                                                                    playbookId: null === n || void 0 === n ? void 0 : null === (a = n.attributes) || void 0 === a ? void 0 : a.playbookId
                                                                                });
                                                                            case 10:
                                                                            case "end":
                                                                                return r.stop()
                                                                        }
                                                                    }, _callee2)
                                                                }));
                                                                return function onCampaignMatch(t, n) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }(), a.next = 7, Object(p.a)({
                                                                conditions: e.campaignTargetingResults,
                                                                onMatched: t,
                                                                onDidNotMatch: n
                                                            });
                                                        case 7:
                                                        case "end":
                                                            return a.stop()
                                                    }
                                                }, _callee3)
                                            }));
                                            return function evaluateTargetingConditions(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), P.prev = 8, j && !Object(g.a)(j)) {
                                        P.next = 21;
                                        break
                                    }
                                    return T = x(), P.next = 13, Object(i.d)(Object(a.a)(Object(a.a)({
                                        embedId: E
                                    }, T), {}, {
                                        followingCampaignIds: h,
                                        excludedCampaignIds: []
                                    }));
                                case 13:
                                    if (R = P.sent, D = R.data) {
                                        P.next = 18;
                                        break
                                    }
                                    return Object(m.n)({
                                        data: ["Empty payload returned for campaign targeting"],
                                        type: "warn"
                                    }), P.abrupt("return");
                                case 18:
                                    A(D), P.next = 22;
                                    break;
                                case 21:
                                    A(j);
                                case 22:
                                    P.next = 27;
                                    break;
                                case 24:
                                    P.prev = 24, P.t0 = P.catch(8), Object(m.f)(new Error("Failed to evaluate campaign targeting - ".concat(P.t0.message)), P.t0);
                                case 27:
                                case "end":
                                    return P.stop()
                            }
                        }, _callee4, null, [
                            [8, 24]
                        ])
                    }));
                    return function evalTargetingAndEnrollment() {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function getTargetingEvaluationMetadata() {
                    var e = Object(s.b)();
                    return {
                        targetingContext: {
                            endUserId: Object(j.a)(void 0, ["endUser", "id"], e.session),
                            orgId: Object(b.h)()
                        },
                        evaluationOptions: {
                            ignoreUnknowns: !1
                        }
                    }
                },
                x = function getTargetingEvaluationContext() {
                    var e = Object(s.b)(),
                        t = e.session,
                        n = e.conversations,
                        a = e.embed,
                        r = t.campaignRefreshToken,
                        c = t.geo,
                        o = t.context,
                        i = t.assignedAgentId,
                        u = Object(g.a)(c) ? void 0 : c,
                        l = Object(j.a)("", ["page", "href"], o),
                        d = Object(j.a)({}, ["conversations"], n);
                    return {
                        sessionId: r,
                        location: u,
                        pageUrl: l,
                        assignedAgentId: i,
                        hasHadConversations: !Object(g.a)(d),
                        inboxId: Object(j.a)(void 0, ["configuration", "inboxId"], a),
                        siteVisits: Object(f.q)(e)
                    }
                }
        },
        Gxm1: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("QtlZ"),
                r = n("LVcX"),
                c = n("0lfv"),
                o = n("CYoe"),
                i = function markTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    a.a.dispatch(Object(o.c)(e, t))
                },
                s = function measureTime(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                        n = Object(r.a)(null, ["metrics", "timeByName", e], Object(a.b)());
                    return n ? (a.a.dispatch(Object(o.a)(e)), t - n) : (Object(c.n)({
                        type: "warn",
                        data: ['Tried to measure "'.concat(e, '" without mark')]
                    }), null)
                }
        },
        HPUV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                o = n("7oto"),
                i = function() {
                    var e = Object(c.a)(r.a.mark(function _callee() {
                        return r.a.wrap(function _callee$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(o.a)({
                                        topic: "kill-announcement-frames",
                                        message: {}
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee)
                    }));
                    return function requestKillAnnouncementFrames() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        Hnjx: function(e, t, n) {
            "use strict";
            var a = n("uDfI"),
                r = n("8saY");
            t.a = function useWidgetIconShape() {
                return Object(a.c)(function(e) {
                    return e.embed.configuration.theme.widgetIconShape
                }) || r.b.SQUARE
            }
        },
        IJKc: function(e, t, n) {
            "use strict";
            var a = n("da4L"),
                r = n("LVcX"),
                c = n("i9gz"),
                o = n("DboL"),
                i = n("ERkP"),
                s = n("uDfI");
            t.a = function useUnreadMessagesForActiveConversation() {
                var e = Object(s.c)(function(e) {
                        return e.conversations
                    }).activeConversation,
                    t = Object(s.c)(function(t) {
                        return Object(r.a)({}, ["conversations", "messages", e], t)
                    }),
                    n = Object(s.c)(function(t) {
                        return Object(r.a)([], ["conversations", "unreadAgentMessages", e], t)
                    });
                return Object(i.useMemo)(function() {
                    if (Object(c.a)(t)) return [];
                    var e = Object(a.o)(Object(o.a)(t));
                    return e.filter(function(e) {
                        return function messageHasBody(e) {
                            return !!e.body && !!e.body.length
                        }(e) && function messageIsNotRatingPrompt(e) {
                            return !Object(a.d)(e, "ratingPrompt")
                        }(e) && function messageIsUnread(e) {
                            return n.includes(e.id)
                        }(e)
                    })
                }, [t, n])
            }
        },
        IpSJ: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return g
            }), n.d(t, "a", function() {
                return j
            }), n.d(t, "c", function() {
                return m
            });
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                o = n("SHZQ"),
                i = n("QtlZ"),
                s = n("Hvhg"),
                u = n("mfas"),
                l = n("LVcX"),
                d = n("0lfv"),
                b = n("7oto"),
                f = n("0LtH"),
                p = n("BAMi"),
                v = n("awwx"),
                h = n("FAmh"),
                O = function omitPropertyFromConditionSetList(e, t) {
                    return e.map(function(e) {
                        return e.map(function(e) {
                            return Object(u.a)([t], e)
                        })
                    })
                },
                g = function() {
                    var e = Object(c.a)(r.a.mark(function _callee() {
                        var e, t, n, a, c, o, s, u, l, d, f, p, h, O, g, j, m, _;
                        return r.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e = Object(i.b)(), t = e.embed, n = e.session, a = e.targeting, c = void 0 === a ? {} : a, o = Object(v.b)(e), r.next = 5, Object(b.a)({
                                        topic: "get-window-context"
                                    });
                                case 5:
                                    return s = r.sent, u = s.data, l = void 0 === u ? {} : u, r.next = 10, Object(b.a)({
                                        topic: "get-host-cookies"
                                    });
                                case 10:
                                    return d = r.sent, f = d.data, p = void 0 === f ? {} : f, r.next = 15, Object(b.a)({
                                        topic: "get-host-referrer"
                                    });
                                case 15:
                                    return h = r.sent, O = h.data, g = void 0 === O ? "" : O, r.next = 20, Object(b.a)({
                                        topic: "get-scrollable-height"
                                    });
                                case 20:
                                    return j = r.sent, m = j.data, _ = {
                                        _window: l,
                                        visitInformation: n.visitInformation,
                                        cookies: p,
                                        geo: n.geo,
                                        embed: t,
                                        referrer: g,
                                        autoAssigneeId: o,
                                        scrollableHeight: m,
                                        hasExitIntent: c.hasExitIntent
                                    }, r.abrupt("return", Promise.resolve(_));
                                case 24:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function generateTargetingContext() {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(c.a)(r.a.mark(function _callee2() {
                        var e, t, n, a, c, u, l = arguments;
                        return r.a.wrap(function _callee2$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e = l.length > 0 && void 0 !== l[0] ? l[0] : [], t = e.map(function(e) {
                                        var t = O(e.conditionSets, "mapValue");
                                        return {
                                            key: "".concat(e.outputKey, "-").concat(e.label),
                                            priority: e.priority,
                                            conditionSets: t
                                        }
                                    }), n = Object(s.e)(Object(i.b)()), a = Object(h.b)(), r.prev = 4, r.next = 7, Object(o.b)(n, {
                                        clientSideContext: a,
                                        conditionGroups: t
                                    });
                                case 7:
                                    return c = r.sent, u = c.data, r.next = 11, Object(p.b)(u);
                                case 11:
                                    return r.abrupt("return", r.sent);
                                case 14:
                                    r.prev = 14, r.t0 = r.catch(4), Object(d.n)({
                                        data: ["Failed to evaluate conditional skill", r.t0]
                                    });
                                case 17:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee2, null, [
                            [4, 14]
                        ])
                    }));
                    return function evaluateTargetingForConditionalSets() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = Object(c.a)(r.a.mark(function _callee3() {
                        var e, t, n, a, c;
                        return r.a.wrap(function _callee3$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, Object(b.a)({
                                        topic: "get-window-context"
                                    });
                                case 2:
                                    return e = r.sent, t = e.data, n = void 0 === t ? {} : t, a = Object(l.a)("", ["location", "hash"], n), r.next = 8, Object(f.a)(a);
                                case 8:
                                    return c = r.sent, r.abrupt("return", c);
                                case 10:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee3)
                    }));
                    return function tryFireDriftLink() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        LwEI: function(e, t, n) {
            "use strict";
            var a = n("LVcX"),
                r = n("uDfI"),
                c = n("vTYT");
            t.a = function useWidgetAlignment() {
                return Object(r.c)(function(e) {
                    return Object(a.a)(c.a.RIGHT, ["embed", "configuration", "theme", "alignment"], e)
                })
            }
        },
        My8U: function(e, t, n) {
            "use strict";
            var a = n("nfbA"),
                r = n("SWQ0"),
                c = n("wNJw"),
                o = n("7oto");
            t.a = function UseStoreSync(e) {
                var t = e.store,
                    n = e.syncWith,
                    i = e.name;
                return Object(o.c)({
                    topic: "CONDUCTOR:action-from-".concat(n),
                    handler: function handler(e) {
                        t.dispatch(Object(a.a)(Object(a.a)({}, e.data.action), {}, {
                            _foreignDispatch: !0
                        }))
                    }
                }), Object(c.a)(r.a["".concat(i.toUpperCase(), "_READY")]), t
            }
        },
        Sn8X: function(e, t, n) {
            "use strict";
            var a = n("LVcX"),
                r = n("ERkP"),
                c = n("Tr4L"),
                o = n("uDfI"),
                i = n("0lfv"),
                s = n("VpmR");
            t.a = function useLanguageSwitcher() {
                var e = Object(c.a)().i18n,
                    t = Object(o.c)(function(e) {
                        return Object(a.a)("en", ["embed", "configuration", "locale"], e)
                    });
                Object(r.useEffect)(function() {
                    e && Object(i.l)(e.changeLanguage) && e.changeLanguage(Object(s.c)(t))
                }, [e, t])
            }
        },
        UvQv: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return useDisableWidgetIcon
            });
            var a = n("s8DI"),
                r = n("ERkP"),
                c = n("7oto");

            function useDisableWidgetIcon() {
                var e = Object(r.useState)(!1),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    o = t[1];
                return Object(r.useEffect)(function() {
                    Object(c.c)({
                        topic: "CONDUCTOR:disableWidgetIcon",
                        handler: function handler() {
                            return o(!0)
                        }
                    })
                }, []), {
                    isDisabled: n,
                    setIsDisabled: o
                }
            }
        },
        cwuI: function(e, t, n) {
            "use strict";
            var a = n("+Kbs"),
                r = n("ERkP"),
                c = n.n(r),
                o = n("uDfI");
            t.a = function useThemeIcon() {
                var e = Object(o.c)(function(e) {
                        return e.embed.configuration
                    }).theme,
                    t = e.iconStyle,
                    n = e.iconUrl,
                    r = e.foregroundColor,
                    i = {
                        SOLID1: c.a.createElement(a.h, {
                            fill: "#".concat(r)
                        }),
                        SOLID2: c.a.createElement(a.g, {
                            fill: "#".concat(r)
                        }),
                        OUTLINE1: c.a.createElement(a.e, {
                            fill: "#".concat(r)
                        }),
                        OUTLINE2: c.a.createElement(a.f, {
                            fill: "#".concat(r)
                        }),
                        BOLT: a.c
                    };
                return {
                    customIcon: n ? {
                        backgroundImage: "url(".concat(n, ")"),
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    } : {},
                    hasCustomIcon: !!n,
                    Icon: i[t] || null
                }
            }
        },
        goRb: function(e, t, n) {
            "use strict";
            var a = n("QtlZ"),
                r = n("SsZN"),
                c = n("vjCh"),
                o = n("0HCW"),
                i = n("qixE"),
                s = n("K7i0"),
                u = n("y0Ar"),
                l = n("da4L"),
                d = n("+f1A"),
                b = n("g6eD"),
                f = n("NFvl"),
                p = n("LVcX"),
                v = n("PjZB"),
                h = n("0lfv"),
                O = n("mj2O"),
                g = n.n(O),
                j = n("7SM1"),
                m = n("nfbA"),
                _ = n("B8JY"),
                y = n("Hvhg"),
                k = n("SFoa"),
                w = n("TDUE"),
                x = n("gG69"),
                I = n("3DW5"),
                C = n("uIJS"),
                E = n("LvsC"),
                S = n("qytN"),
                A = n("7jL2"),
                T = n("xwTo"),
                R = n("7BJg");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(A.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var a = Object(A.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return Object(S.a)(this, t)
                }
            }
            var D = 1e3,
                M = new(function(e) {
                    Object(E.a)(AgentMessageEventBuffer, e);
                    var t = _createSuper2(AgentMessageEventBuffer);

                    function AgentMessageEventBuffer() {
                        var e;
                        return Object(C.a)(this, AgentMessageEventBuffer), (e = t.call(this, D))._publishBuffer = Object(j.a)(g.a.mark(function _callee() {
                            return g.a.wrap(function _callee$(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e._events.length) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        Object(l.o)(e._events).forEach(function(t) {
                                            e._dispatchAgentMessage(t), a.a.dispatch(Object(s.t)({
                                                message: t
                                            }))
                                        }), e._resetBuffer();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, _callee)
                        })), e._shouldPublishImmediately = function(e) {
                            return Object(l.i)(e)
                        }, e._openChatIfClosed = function() {
                            Object(a.b)().view.chatOpen || a.a.dispatch(Object(b.e)({
                                chatOpen: !0
                            }))
                        }, e._dispatchAgentMessage = function(e) {
                            var t = Object(a.b)(),
                                n = Object(T.h)(t),
                                r = Object(T.a)(t);
                            n && r !== e.conversationId && (a.a.dispatch(Object(s.q)()), a.a.dispatch(Object(s.o)({
                                conversationId: e.conversationId
                            }))), a.a.dispatch(Object(s.c)({
                                message: e
                            }))
                        }, e
                    }
                    return AgentMessageEventBuffer
                }(R.a)),
                P = function isUserComplete(e) {
                    return !!e && !!e.id && !!e.avatarUrl && !!e.name && !!e.status
                },
                L = function dispatchUser(e) {
                    a.a.dispatch(Object(_.d)({
                        user: Object(m.a)(Object(m.a)({}, e), {}, {
                            bot: !1
                        })
                    }))
                },
                N = function() {
                    var e = Object(j.a)(g.a.mark(function _callee(e, t) {
                        var n, a;
                        return g.a.wrap(function _callee$(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (n = Object(y.f)([], ["configuration", "team"]), -1 !== n.findIndex(function(t) {
                                            return t.id === e
                                        })) {
                                        r.next = 8;
                                        break
                                    }
                                    return Object(h.n)({
                                        data: [t],
                                        internal: !0
                                    }), r.next = 6, Object(k.j)(e);
                                case 6:
                                    a = r.sent, P(a) && L(a);
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }, _callee)
                    }));
                    return function fetchAgentIfMissing(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                V = function evaluateChatMessage(e, t) {
                    if (M.push(e), Object(r.k)(e), Object(l.d)(e, "isBot") || function updateEmbedTeam(e, t) {
                            if (P(e)) L(e);
                            else {
                                var n = t.authorId,
                                    a = t.id,
                                    r = t.conversationId;
                                N(n, "fetching data for missing user ".concat(n, ", message ").concat(a, " in conversation ").concat(r))
                            }
                        }(t, e), Object(l.d)(e, "isBot")) return U(e)
                },
                U = function evaluateBotChatMessage(e) {
                    if (Object(l.d)(e, "offerSchedule") || Object(l.d)(e, "presentSchedule")) {
                        var t = e.attributes.offerSchedule || e.attributes.presentSchedule,
                            n = e.id,
                            a = e.conversationId;
                        N(t, "fetching data for scheduling target user ".concat(t, ", message ").concat(n, " in conversation ").concat(a)), Object(r.i)(t), Object(w.d)(x.c.CALENDAR_DROP)
                    }
                },
                B = n("SHZQ"),
                F = n("IpSJ"),
                H = n("QX29"),
                $ = n("4c+F"),
                G = function() {
                    var e = Object(j.a)(g.a.mark(function _callee(e) {
                        var t, n, a, r;
                        return g.a.wrap(function _callee$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return t = Object(p.a)([], ["attributes", "conditionSetsToEvaluate"], e), n = Object(f.a)(["attributes", "playbookId"], e), c.next = 4, Object(F.a)(t);
                                case 4:
                                    a = c.sent, r = {
                                        requestingMessageId: e.id,
                                        conversationId: e.conversationId,
                                        targetingRequestPayload: a
                                    }, Object($.c)("conditional_evaluated", {
                                        playbookId: n,
                                        conditionalSkillPayload: r
                                    });
                                    try {
                                        Object(B.a)(r)
                                    } catch (o) {
                                        Object(H.a)(new Error("Failed to evaluate conditional skill"))
                                    }
                                case 8:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateConditionalMessage(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                W = n("Wjfv"),
                q = n("HPUV"),
                J = function() {
                    var e = Object(j.a)(g.a.mark(function _callee(e) {
                        var t, n, c, o, i, u;
                        return g.a.wrap(function _callee$(l) {
                            for (;;) switch (l.prev = l.next) {
                                case 0:
                                    if (t = e.id, n = void 0 === t ? null : t, c = e.conversationId, (o = void 0 === c ? null : c) && n) {
                                        l.next = 3;
                                        break
                                    }
                                    return l.abrupt("return");
                                case 3:
                                    return i = Object(m.a)(Object(m.a)({}, e.attributes), {}, {
                                        senderId: e.authorId
                                    }), u = Object(m.a)(Object(m.a)({}, e), {}, {
                                        attributes: i
                                    }), Object(r.k)(e), l.next = 8, Object(q.a)();
                                case 8:
                                    a.a.dispatch(Object(W.a)()), a.a.dispatch(Object(s.o)({
                                        conversationId: o
                                    })), a.a.dispatch(Object(s.q)()), a.a.dispatch(Object(s.c)({
                                        message: u
                                    }));
                                case 12:
                                case "end":
                                    return l.stop()
                            }
                        }, _callee)
                    }));
                    return function evaluateDirectAgentMessage(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = n("JBtm"),
                Q = n.n(Y),
                Z = n("EoDD"),
                K = n("EQxi"),
                X = Object(K.f)(Q.a.parse(document.location.search)),
                z = null === X || void 0 === X ? void 0 : X.mode;
            n.d(t, "a", function() {
                return ee
            });
            var ee = function evaluateNewMessage(e) {
                var t = Object(f.a)(["body", "data"], e),
                    n = Object(f.a)(["body", "user"], e),
                    O = Object(a.b)();
                if (t) {
                    var g = Object(d.i)(O),
                        j = Object(l.a)(t, "instanceId"),
                        m = Object(h.m)(j) || g === j,
                        _ = Object(l.d)(t, "widgetGuid"),
                        k = function isFromSameMode(e, t) {
                            var n = "LANDING_PAGE" === z || Object(y.m)(t);
                            if (Object(l.d)(e, "isFromConversationalLandingPage") && Object(l.a)(e, "isFromConversationalLandingPage")) return n;
                            if (n) {
                                var a = e.conversationId,
                                    r = Object(T.a)(t);
                                if (r && a !== r) return !1
                            }
                            var c = Object(T.d)(t);
                            return !Object(Z.a)(e.conversationId, c)
                        }(t, O);
                    if (!k) return a.a.dispatch(Object(s.r)(t.conversationId)), void Object(h.n)({
                        data: ["message ".concat(t.id, " for convo ").concat(t.conversationId, " was ignored coming from different widget modes")],
                        internal: !0
                    });
                    if (_ && m) return function evaluateEndUserResponseChatMessage(e) {
                        if ([v.b.LEAD, v.b.END_USER].includes(e.authorType) && (Object(l.d)(e, "buttonClicked") && Object(r.b)(e), e.body)) {
                            var t, n, c = Object(a.b)().conversations,
                                o = null !== (t = null === e || void 0 === e ? void 0 : e.conversationId) && void 0 !== t ? t : null,
                                i = e.attributes.widgetGuid,
                                s = Object(p.a)(null, [o, i], null !== (n = null === c || void 0 === c ? void 0 : c.messages) && void 0 !== n ? n : {});
                            if (s) {
                                var u = Object(I.a)(e.body);
                                u && u.length && u.forEach(function(t) {
                                    Object(r.m)(e, t)
                                })
                            }
                            s || M.push(e)
                        }
                    }(t);
                    var w = Object(o.d)(O),
                        x = Object(o.e)(O),
                        C = Object(l.d)(t, "startInteraction"),
                        E = Object(l.a)(t, "playbookId"),
                        S = Object(l.a)(t, "campaignId"),
                        A = Object(l.a)(t, "interactionId"),
                        R = Object(l.a)(t, "isExperiment"),
                        D = Object(l.a)(t, "playbookVersion"),
                        P = t.conversationId,
                        L = (w.includes(S) || x.includes(A)) && C && k,
                        N = Object(l.f)(t),
                        U = t.contentType === v.c.BOT_NODE_CONDITION_EVALUATION && Object(l.d)(t, "conditionSetsToEvaluate"),
                        B = Object(p.a)(!1, ["contentType", v.c.CHAT], t) && !t.body.length;
                    if (L)
                        if (Object(r.p)(t), Object(c.b)(t), a.a.dispatch(Object(s.o)({
                                conversationId: P
                            })), Object(u.a)({
                                playbookId: E,
                                interactionId: A,
                                conversationId: P,
                                isVirtual: !1,
                                isExperiment: R,
                                playbookVersion: D
                            }), Object(l.a)(t, "goToConversation")) return a.a.dispatch(Object(s.q)()), void a.a.dispatch(Object(b.e)({
                            chatOpen: !0,
                            isDriftLink: !0
                        }));
                    return N ? J(t) : U ? G(t) : Object(l.p)(t) ? V(t, n) : void(B && Object(i.d)(t.conversationId, t.id))
                }
                Object(h.n)({
                    data: ["no message sent over 'changed' topic in user channel"],
                    internal: !0
                })
            }
        },
        hEj5: function(e, t, n) {
            "use strict";
            var a = n("s8DI"),
                r = n("ERkP"),
                c = n("LaGA");
            t.a = function useResizeObserver() {
                var e = Object(r.useState)(),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    o = t[1],
                    i = Object(r.useState)(null),
                    s = Object(a.a)(i, 2),
                    u = s[0],
                    l = s[1],
                    d = Object(r.useRef)(null),
                    b = Object(r.useCallback)(function() {
                        return d.current && d.current.disconnect()
                    }, []),
                    f = Object(r.useCallback)(function() {
                        u && (d.current = new c.a(function() {
                            return o(function getRectForRef(e) {
                                return e && e.getBoundingClientRect()
                            }(u))
                        }), d.current.observe(u))
                    }, [u]);
                return Object(r.useLayoutEffect)(function() {
                    return f(),
                        function() {
                            return b()
                        }
                }, [b, f]), [n, l]
            }
        },
        hhdZ: function(e, t, n) {
            "use strict";
            var a = n("da4L"),
                r = n("LVcX"),
                c = n("i9gz"),
                o = n("TbSn"),
                i = n("uDfI");
            t.a = function useLastMessage(e) {
                var t = Object(i.c)(function(t) {
                        return Object(r.a)(null, ["conversations", "conversations", e, "lastMessage"], t)
                    }),
                    n = Object(i.c)(function(t) {
                        var n = Object(r.a)({}, ["conversations", "messages", e], t);
                        if (!Object(c.a)(n)) {
                            var i = Object(a.q)(n);
                            if (i.length) return Object(o.a)(i)
                        }
                        return null
                    });
                return t || n || {}
            }
        },
        qATS: function(e, t, n) {
            "use strict";
            var a = n("mj2O"),
                r = n.n(a),
                c = n("7SM1"),
                o = n("s8DI"),
                i = n("Hvhg"),
                s = n("2XY6"),
                u = n("ERkP"),
                l = n("uDfI"),
                d = n("0lfv"),
                b = n("VpmR");
            t.a = function useInitializeI18n() {
                var e = Object(u.useState)(!1),
                    t = Object(o.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    f = Object(l.c)(s.b),
                    p = Object(l.c)(function(e) {
                        return Object(i.d)(e, "locale")
                    });
                return Object(u.useEffect)(function() {
                    f && !n && function() {
                        var e = Object(c.a)(r.a.mark(function _callee() {
                            return r.a.wrap(function _callee$(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(b.b)(p);
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Object(d.n)({
                                            data: ["i18n failed to load - ".concat(e.t0.message), e.t0],
                                            type: "warn"
                                        });
                                    case 8:
                                        a(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, _callee, null, [
                                [0, 5]
                            ])
                        }));
                        return function runAsync() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }, [f, n, p]), n && f
            }
        },
        y0on: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("0lfv"),
                r = function getNewMessageAriaLabel(e, t) {
                    return Object(a.m)(t) ? null : "Chat message".concat(e ? " from " + e : "", ': "').concat(t, '"')
                }
        },
        z8n0: function(e, t, n) {}
    }
]);