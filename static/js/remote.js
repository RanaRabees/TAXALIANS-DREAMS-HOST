(function(g) {
    var window = this;
    'use strict';
    var f1a = function(a, b) {
            this.u = a >>> 0;
            this.j = b >>> 0
        },
        h1a = function(a) {
            if (!a) return g1a || (g1a = new f1a(0, 0));
            if (!/^\d+$/.test(a)) return null;
            g.Xaa(a);
            return new f1a(g.Kd, g.Ld)
        },
        i1a = function(a, b, c) {
            null != c && ("string" === typeof c && h1a(c), g.de(a, b, 1), "number" === typeof c ? (a = a.j, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, g.Kd = b, g.Ld = c, g.be(a, g.Kd), g.be(a, g.Ld)) : (c = h1a(c), a = a.j, b = c.j, g.be(a, c.u), g.be(a, b)))
        },
        j1a = function(a, b, c) {
            b = g.kd(b, c);
            null != b && (g.de(a, c, 0), a.j.j.push(b ? 1 : 0))
        },
        k1a = function(a, b) {
            b = b instanceof g.Df ? b : g.Hf(b, /^data:image\//i.test(b));
            a.src = g.Ef(b)
        },
        m1a = function(a) {
            g.F.call(this, a, -1, l1a)
        },
        n1a = function(a) {
            g.F.call(this, a)
        },
        o1a = function(a) {
            g.F.call(this, a)
        },
        p1a = function(a) {
            g.F.call(this, a)
        },
        q1a = function(a) {
            g.F.call(this, a)
        },
        m6 = function(a) {
            g.$i(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ua()).toString(36));
            return a
        },
        n6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.nfa(a.u, b, c)
        },
        r1a = function(a) {
            if (a instanceof g.Yl) return a;
            if ("function" == typeof a.Qi) return a.Qi(!1);
            if (g.Oa(a)) {
                var b = 0,
                    c = new g.Yl;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.$Z;
                        if (b in a) return g.Zl(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        s1a = function(a, b, c) {
            if (g.Oa(a)) g.qc(a, b, c);
            else
                for (a = r1a(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        t1a = function(a, b) {
            var c = [];
            s1a(b, function(d) {
                try {
                    var e = g.Do.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Yja(e) && c.push(d)
            }, a);
            return c
        },
        u1a = function(a, b) {
            t1a(a, b).forEach(function(c) {
                g.Do.prototype.remove.call(this, c)
            }, a)
        },
        v1a = function(a) {
            if (a.Y) {
                if (a.Y.locationOverrideToken) return {
                    locationOverrideToken: a.Y.locationOverrideToken
                };
                if (null != a.Y.latitudeE7 && null != a.Y.longitudeE7) return {
                    latitudeE7: a.Y.latitudeE7,
                    longitudeE7: a.Y.longitudeE7
                }
            }
            return null
        },
        w1a = function(a, b) {
            g.Xb(a, b) || a.push(b)
        },
        o6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        x1a = function(a, b) {
            return g.Qe(a, b)
        },
        y1a = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        p6 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return y1a(a)
        },
        z1a = function(a, b, c, d) {
            var e = new g.Si(null);
            a && g.Ti(e, a);
            b && g.Ui(e, b);
            c && g.Vi(e, c);
            d && (e.J = d);
            return e
        },
        q6 = function(a, b) {
            g.Bt[a] = !0;
            var c = g.zt();
            c && c.publish.apply(c, arguments);
            g.Bt[a] = !1
        },
        r6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.mo;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", A1a(this, a.capabilities || ""), B1a(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        A1a = function(a, b) {
            a.capabilities.clear();
            g.cm(b.split(","), g.Ta(x1a, C1a)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        B1a = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        s6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        t6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        D1a = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        E1a = function(a) {
            return new s6(a)
        },
        F1a = function(a) {
            return Array.isArray(a) ? g.kk(a, E1a) : []
        },
        u6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        v6 = function(a) {
            return Array.isArray(a) ? "[" + g.kk(a, u6).join(",") + "]" : "null"
        },
        w6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        G1a = function(a) {
            return g.kk(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        x6 = function(a, b) {
            return g.Ub(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        y6 = function(a, b) {
            return g.Ub(a, function(c) {
                return t6(c, b)
            })
        },
        H1a = function() {
            var a = (0, g.Xu)();
            a && u1a(a, a.j.Qi(!0))
        },
        z6 = function() {
            var a = g.$u("yt-remote-connected-devices") || [];
            g.mc(a);
            return a
        },
        I1a = function(a) {
            if (g.Yb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.kk(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        J1a = function(a) {
            g.Zu("yt-remote-connected-devices", a, 86400)
        },
        B6 = function() {
            if (A6) return A6;
            var a = g.$u("yt-remote-device-id");
            a || (a = w6(), g.Zu("yt-remote-device-id", a, 31536E3));
            for (var b = z6(), c = 1, d = a; g.Xb(b, d);) c++, d = a + "#" + c;
            return A6 = d
        },
        C6 = function() {
            var a = z6(),
                b = B6();
            g.bv() && g.pc(a, b);
            a = I1a(a);
            if (g.Yb(a)) try {
                g.dla("remote_sid")
            } catch (c) {} else try {
                g.yq("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        K1a = function() {
            return g.$u("yt-remote-session-browser-channel")
        },
        L1a = function() {
            return g.$u("yt-remote-local-screens") || []
        },
        M1a = function() {
            g.Zu("yt-remote-lounge-token-expiration", !0, 86400)
        },
        N1a = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.kk(L1a(), function(d) {
                    return d.loungeToken
                }),
                c = g.kk(a, function(d) {
                    return d.loungeToken
                });
            g.lk(c, function(d) {
                return !g.Xb(b, d)
            }) && M1a();
            g.Zu("yt-remote-local-screens", a, 31536E3)
        },
        D6 = function(a) {
            a || (g.av("yt-remote-session-screen-id"), g.av("yt-remote-session-video-id"));
            C6();
            a = z6();
            g.bc(a, B6());
            J1a(a)
        },
        O1a = function() {
            if (!E6) {
                var a = g.Oo();
                a && (E6 = new g.Ao(a))
            }
        },
        P1a = function() {
            O1a();
            return E6 ? !!E6.get("yt-remote-use-staging-server") : !1
        },
        F6 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Q1a = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        R1a = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        G6 = function(a) {
            a.length ? S1a(a.shift(), function() {
                G6(a)
            }) : H6()
        },
        T1a = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        S1a = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.ui(d, g.Bf(a));
            (document.head || document.documentElement).appendChild(d)
        },
        U1a = function() {
            var a = F6(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        H6 = function() {
            var a = R1a();
            a && a(!1, "No cast extension found")
        },
        I6 = function() {
            if (V1a) {
                var a = 2,
                    b = R1a(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                S1a("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", H6, c)
            }
        },
        W1a = function() {
            I6();
            var a = U1a();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            G6(a)
        },
        Y1a = function() {
            I6();
            var a = U1a();
            a.push.apply(a, g.v(X1a.map(T1a)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            G6(a)
        },
        Z1a = function() {
            this.j = J6();
            this.j.Qo("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Ch: 3,
                Bh: "channel_type"
            })
        },
        $1a = function(a, b) {
            a.j.Fq("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        a2a = function() {
            this.j = J6();
            this.j.Qo("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Ch: 3,
                Bh: "channel_type"
            })
        },
        b2a = function(a, b) {
            a.j.Fq("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        c2a = function() {
            this.j = J6();
            this.j.Qo("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Ch: 3,
                Bh: "channel_type"
            })
        },
        d2a = function(a, b) {
            a.j.Fq("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        e2a = function() {
            this.j = J6();
            this.j.Qo("/client_streamz/youtube/living_room/mdx/channel/error", {
                Ch: 3,
                Bh: "channel_type"
            })
        },
        f2a = function(a, b) {
            a.j.Fq("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        g2a = function() {
            this.j = J6();
            this.j.Qo("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        h2a = function() {
            this.j = J6();
            this.j.Qo("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        K6 = function(a, b, c) {
            g.I.call(this);
            this.I = null != c ? (0, g.Sa)(a, c) : a;
            this.ah = b;
            this.D = (0, g.Sa)(this.RS, this);
            this.j = !1;
            this.u = 0;
            this.B = this.pc = null;
            this.C = []
        },
        L6 = function(a, b, c) {
            g.I.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.ah = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.pc = null
        },
        M6 = function(a) {
            a.pc = g.$g(function() {
                a.pc = null;
                a.j && !a.u && (a.j = !1, M6(a))
            }, a.ah);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        N6 = function() {},
        O6 = function() {
            g.Ce.call(this, "p")
        },
        P6 = function() {
            g.Ce.call(this, "o")
        },
        i2a = function() {
            var a = new g.C.TextEncoder;
            return new g.C.ReadableStream({
                start: function(b) {
                    for (var c = g.r(["test\r\n", "test\r\n"]), d = c.next(); !d.done; d = c.next()) b.enqueue(a.encode(d.value));
                    b.close()
                }
            })
        },
        j2a = function(a) {
            return (a = /\/\/([^\/]+)\//.exec(a)) ? a[1].endsWith("google.com") : !1
        },
        l2a = function(a, b) {
            if (!k2a) {
                k2a = !0;
                var c;
                a: {
                    if (c = g.C.navigator)
                        if (c = c.userAgent) break a;c = ""
                }(-1 == c.indexOf("Chrome") || -1 != c.indexOf("Edg") ? 0 : 90 <= parseInt(/Chrome\/(\d+)/.exec(c)[1], 10)) && j2a(a) && window && window.document && j2a(window.document.URL) && (c = document.createElement("meta"), c.httpEquiv = "origin-trial", c.content = "A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
                    document.head.appendChild(c), (new Request("", {
                        body: new ReadableStream,
                        method: "POST"
                    })).headers.has("Content-Type") || (g.C.fetch(a + "?ot=1", {
                        method: "POST",
                        body: "test\r\n"
                    }).catch(b), g.C.fetch(a + "?ot=2", {
                        method: "POST",
                        body: i2a(),
                        kV: !1
                    }).catch(b), g.C.fetch(a + "?ot=3", {
                        method: "POST",
                        body: i2a(),
                        kV: !0
                    }).catch(b)))
            }
        },
        Q6 = function() {
            return m2a = m2a || new g.kf
        },
        n2a = function(a) {
            g.Ce.call(this, "serverreachability", a)
        },
        R6 = function(a) {
            var b = Q6();
            b.dispatchEvent(new n2a(b, a))
        },
        o2a = function(a, b) {
            g.Ce.call(this, "statevent", a);
            this.stat = b
        },
        S6 = function(a) {
            var b = Q6();
            b.dispatchEvent(new o2a(b, a))
        },
        p2a = function(a, b, c, d) {
            g.Ce.call(this, "timingevent", a);
            this.size = b;
            this.Mv = d
        },
        T6 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        U6 = function() {},
        V6 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.Jc = c;
            this.Hc = d || 1;
            this.bb = new g.ej(this);
            this.qb = 45E3;
            a = g.YB ? 125 : void 0;
            this.eb = new g.Zg(a);
            this.Ga = null;
            this.B = !1;
            this.N = this.Ta = this.J = this.Ia = this.oa = this.Ib = this.V = null;
            this.Y = [];
            this.j = null;
            this.W = 0;
            this.I = this.ma = null;
            this.Kb = -1;
            this.Da = !1;
            this.kb = 0;
            this.Sa = null;
            this.qc = this.Pa = this.Zb = this.va = !1;
            this.u = new q2a
        },
        q2a = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        W6 = function(a, b, c) {
            a.Ia = 1;
            a.J = m6(b.clone());
            a.N = c;
            a.va = !0;
            r2a(a, null)
        },
        r2a = function(a, b) {
            a.oa = Date.now();
            X6(a);
            a.Ta = a.J.clone();
            n6(a.Ta, "t", a.Hc);
            a.W = 0;
            var c = a.D.Ia;
            a.u = new q2a;
            a.j = s2a(a.D, c ? b : null, !a.N);
            0 < a.kb && (a.Sa = new L6((0, g.Sa)(a.HK, a, a.j), a.kb));
            a.bb.Ma(a.j, "readystatechange", a.VS);
            b = a.Ga ? g.We(a.Ga) : {};
            a.N ? (a.ma || (a.ma = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Ta, a.ma, a.N, b)) : (a.ma = "GET", a.j.send(a.Ta, a.ma, null, b));
            R6(1)
        },
        t2a = function(a) {
            return a.j ? "GET" == a.ma && 2 != a.Ia && a.D.ze : !1
        },
        v2a = function(a, b, c) {
            for (var d = !0, e; !a.Da && a.W < c.length;)
                if (e = u2a(a, c), e == Y6) {
                    4 == b &&
                        (a.I = 4, S6(14), d = !1);
                    break
                } else if (e == Z6) {
                a.I = 4;
                S6(15);
                d = !1;
                break
            } else $6(a, e);
            t2a(a) && e != Y6 && e != Z6 && (a.u.j = "", a.W = 0);
            4 != b || 0 != c.length || a.u.u || (a.I = 1, S6(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.qc && (a.qc = !0, a.D.mI(a)) : (a7(a), b7(a))
        },
        u2a = function(a, b) {
            var c = a.W,
                d = b.indexOf("\n", c);
            if (-1 == d) return Y6;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Z6;
            d += 1;
            if (d + c > b.length) return Y6;
            b = b.slice(d, d + c);
            a.W = d + c;
            return b
        },
        X6 = function(a) {
            a.Ib = Date.now() + a.qb;
            w2a(a, a.qb)
        },
        w2a = function(a, b) {
            if (null != a.V) throw Error("WatchDog timer not null");
            a.V = T6((0, g.Sa)(a.SS, a), b)
        },
        c7 = function(a) {
            a.V && (g.C.clearTimeout(a.V), a.V = null)
        },
        b7 = function(a) {
            a.D.Kf() || a.Da || x2a(a.D, a)
        },
        a7 = function(a) {
            c7(a);
            g.ze(a.Sa);
            a.Sa = null;
            a.eb.stop();
            g.fj(a.bb);
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        $6 = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.Xf && (c.j == a || d7(c.u, a)))
                    if (!a.Pa && d7(c.u, a) && 3 == c.Xf) {
                        try {
                            var d = c.Ug.j.parse(b)
                        } catch (y) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.N) {
                                    if (c.j)
                                        if (c.j.oa + 3E3 < a.oa) e7(c), f7(c);
                                        else break a;
                                    g7(c);
                                    S6(18)
                                }
                            }
                            else c.Ad = e[1], 0 < c.Ad - c.Pa && 37500 > e[2] && c.eb && 0 == c.Y && !c.W && (c.W = T6((0, g.Sa)(c.WS, c), 6E3));
                            if (1 >= h7(c.u) && c.Yc) {
                                try {
                                    c.Yc()
                                } catch (y) {}
                                c.Yc = void 0
                            }
                        } else i7(c, 11)
                    } else if ((a.Pa || c.j == a) && e7(c), !g.lb(b))
                    for (e = c.Ug.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Pa = f[0];
                        f = f[1];
                        if (2 == c.Xf)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.qc = f[2];
                                var h = f[3];
                                null != h && (c.IK = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.Ta = 1.5 * l);
                                d = c;
                                var m = a.j;
                                if (m) {
                                    var n = g.Xh(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.ob(n, "spdy") || g.ob(n, "quic") || g.ob(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (j7(p, p.u), p.u = null))
                                    }
                                    if (d.va) {
                                        var q = g.Xh(m, "X-HTTP-Session-Id");
                                        q && (d.ye = q, g.$i(d.Ga, d.va, q))
                                    }
                                }
                                c.Xf = 3;
                                c.D && c.D.OK();
                                c.Nc && (c.Zc = Date.now() - a.oa);
                                d = c;
                                var t = a;
                                d.md = y2a(d, d.Ia ? d.qc : null, d.Hc);
                                if (t.Pa) {
                                    z2a(d.u, t);
                                    var u =
                                        t,
                                        x = d.Ta;
                                    x && u.setTimeout(x);
                                    u.V && (c7(u), X6(u));
                                    d.j = t
                                } else A2a(d);
                                0 < c.B.length && k7(c)
                            } else "stop" != f[0] && "close" != f[0] || i7(c, 7);
                        else 3 == c.Xf && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? i7(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.NK(f), c.Y = 0)
                    }
                R6(4)
            } catch (y) {}
        },
        B2a = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        C2a = function(a) {
            this.D = a || 10;
            g.C.PerformanceNavigationTiming ? (a = g.C.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.C.chrome && g.C.chrome.loadTimes && g.C.chrome.loadTimes() && g.C.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        D2a = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        h7 = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        d7 = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        j7 = function(a,
            b) {
            a.j ? a.j.add(b) : a.u = b
        },
        z2a = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        l7 = function(a) {
            if (null != a.u) return a.B.concat(a.u.Y);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.r(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.Y);
                return b
            }
            return g.ec(a.B)
        },
        E2a = function(a, b) {
            var c = new U6;
            if (g.C.Image) {
                var d = new Image;
                d.onload = g.Ta(m7, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Ta(m7, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Ta(m7, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Ta(m7, c, d, "TestLoadImage: timeout", !1, b);
                g.C.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        m7 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        F2a = function() {
            this.j = new N6
        },
        G2a = function(a, b, c) {
            var d = c || "";
            try {
                g.Ri(a, function(e, f) {
                    var h = e;
                    g.Pa(e) && (h = g.zh(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        n7 = function(a, b, c) {
            return c && c.XW ? c.XW[a] || b : b
        },
        H2a = function(a) {
            this.B = [];
            this.qc = this.md = this.Ga = this.Hc = this.j = this.ye = this.va = this.Da = this.J = this.Ib = this.V = null;
            this.Me = this.Sa = 0;
            this.Ke = n7("failFast", !1, a);
            this.eb = this.W = this.N = this.I = this.D = null;
            this.Jc = !0;
            this.Kd = this.Ad = this.Pa = -1;
            this.Zb = this.Y = this.oa = 0;
            this.Je = n7("baseRetryDelayMs", 5E3, a);
            this.Ye = n7("retryDelaySeedMs", 1E4, a);
            this.Le = n7("forwardChannelMaxRetries", 2, a);
            this.qd = n7("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ge = a && a.Yka || void 0;
            this.ze = a && a.Wka || !1;
            this.Ta = void 0;
            this.Ia = a && a.L0 || !1;
            this.C = "";
            this.u =
                new C2a(a && a.Nja);
            this.Ug = new F2a;
            this.qb = a && a.cka || !1;
            this.kb = a && a.Uja || !1;
            this.qb && this.kb && (this.kb = !1);
            this.Ze = a && a.Ija || !1;
            a && a.fka && (this.Jc = !1);
            this.Nc = !this.qb && this.Jc && a && a.Rja || !1;
            this.Yc = void 0;
            this.Zc = 0;
            this.bb = !1;
            this.ma = null;
            this.bf = !a || !1 !== a.Tja;
            this.Kb = null
        },
        f7 = function(a) {
            a.j && (o7(a), a.j.cancel(), a.j = null)
        },
        I2a = function(a) {
            f7(a);
            a.N && (g.C.clearTimeout(a.N), a.N = null);
            e7(a);
            a.u.cancel();
            a.I && ("number" === typeof a.I && g.C.clearTimeout(a.I), a.I = null)
        },
        k7 = function(a) {
            D2a(a.u) || a.I || (a.I = !0, g.Qg(a.KK, a), a.oa = 0)
        },
        K2a = function(a, b) {
            if (h7(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
            if (a.I) return a.B = b.Y.concat(a.B), !0;
            if (1 == a.Xf || 2 == a.Xf || a.oa >= (a.Ke ? 0 : a.Le)) return !1;
            a.I = T6((0, g.Sa)(a.KK, a, b), J2a(a, a.oa));
            a.oa++;
            return !0
        },
        M2a = function(a, b) {
            var c;
            b ? c = b.Jc : c = a.Sa++;
            var d = a.Ga.clone();
            g.$i(d, "SID", a.C);
            g.$i(d, "RID", c);
            g.$i(d, "AID", a.Pa);
            p7(a, d);
            a.J && a.V && g.dj(d, a.J, a.V);
            c = new V6(a, a.C, c, a.oa + 1);
            null === a.J && (c.Ga = a.V);
            b && (a.B = b.Y.concat(a.B));
            b = L2a(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.qd) + Math.round(.5 * a.qd * Math.random()));
            j7(a.u, c);
            W6(c, d, b)
        },
        p7 = function(a, b) {
            a.Da && g.Ie(a.Da, function(c, d) {
                g.$i(b, d, c)
            });
            a.D && g.Ri({}, function(c, d) {
                g.$i(b, d, c)
            })
        },
        L2a = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Sa)(a.D.XS, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        G2a(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.Y = a;
            return d
        },
        A2a = function(a) {
            a.j || a.N || (a.Zb = 1, g.Qg(a.JK, a), a.Y = 0)
        },
        g7 = function(a) {
            if (a.j || a.N || 3 <= a.Y) return !1;
            a.Zb++;
            a.N = T6((0, g.Sa)(a.JK, a), J2a(a, a.Y));
            a.Y++;
            return !0
        },
        o7 = function(a) {
            null != a.ma && (g.C.clearTimeout(a.ma), a.ma = null)
        },
        N2a = function(a) {
            a.j = new V6(a, a.C, "rpc", a.Zb);
            null === a.J && (a.j.Ga = a.V);
            a.j.kb = 0;
            var b = a.md.clone();
            g.$i(b, "RID", "rpc");
            g.$i(b, "SID", a.C);
            g.$i(b, "CI", a.eb ? "0" : "1");
            g.$i(b, "AID", a.Pa);
            g.$i(b, "TYPE", "xmlhttp");
            p7(a, b);
            a.J && a.V && g.dj(b, a.J, a.V);
            a.Ta && a.j.setTimeout(a.Ta);
            var c = a.j;
            a = a.qc;
            c.Ia = 1;
            c.J = m6(b.clone());
            c.N = null;
            c.va = !0;
            r2a(c, a)
        },
        e7 = function(a) {
            null != a.W && (g.C.clearTimeout(a.W), a.W = null)
        },
        x2a = function(a, b) {
            var c = null;
            if (a.j == b) {
                e7(a);
                o7(a);
                a.j = null;
                var d = 2
            } else if (d7(a.u, b)) c = b.Y, z2a(a.u, b), d = 1;
            else return;
            if (0 != a.Xf)
                if (a.Kd = b.Kb, b.B)
                    if (1 == d) {
                        c = b.N ? b.N.length : 0;
                        b = Date.now() - b.oa;
                        var e = a.oa;
                        d = Q6();
                        d.dispatchEvent(new p2a(d, c, b, e));
                        k7(a)
                    } else A2a(a);
            else if (e = b.getLastError(), 3 == e || 0 == e && 0 < a.Kd || !(1 == d && K2a(a, b) || 2 == d && g7(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                case 1:
                    i7(a, 5);
                    break;
                case 4:
                    i7(a, 10);
                    break;
                case 3:
                    i7(a, 6);
                    break;
                default:
                    i7(a, 2)
            }
        },
        J2a = function(a, b) {
            var c = a.Je + Math.floor(Math.random() * a.Ye);
            a.isActive() || (c *= 2);
            return c * b
        },
        i7 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Sa)(a.R0, a);
                c || (c = new g.Si("//www.google.com/images/cleardot.gif"), g.C.location && "http" == g.C.location.protocol || g.Ti(c, "https"), m6(c));
                E2a(c.toString(), d)
            } else S6(2);
            a.Xf = 0;
            a.D && a.D.MK(b);
            O2a(a);
            I2a(a)
        },
        O2a = function(a) {
            a.Xf = 0;
            a.Kb = [];
            if (a.D) {
                var b = l7(a.u);
                if (0 != b.length || 0 != a.B.length) g.fc(a.Kb, b), g.fc(a.Kb, a.B), a.u.B.length = 0, g.ec(a.B), a.B.length = 0;
                a.D.LK()
            }
        },
        P2a = function(a) {
            if (0 == a.Xf) return a.Kb;
            var b = [];
            g.fc(b, l7(a.u));
            g.fc(b, a.B);
            return b
        },
        y2a = function(a, b, c) {
            var d = g.aj(c);
            "" != d.j ? (b && g.Ui(d, b + "." + d.j), g.Vi(d, d.B)) : (d = g.C.location, d = z1a(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.va;
            c = a.ye;
            b && c && g.$i(d, b, c);
            g.$i(d, "VER", a.IK);
            p7(a, d);
            return d
        },
        s2a = function(a, b, c) {
            if (b && !a.Ia) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.ze && !a.ge ? new g.Qh(new g.Ni({
                vR: !0
            })) : new g.Qh(a.ge);
            b.J = a.Ia;
            return b
        },
        Q2a = function() {},
        R2a = function() {
            if (g.Gc && !g.zc(10)) throw Error("Environmental error: no available transport.");
        },
        r7 = function(a, b) {
            g.kf.call(this);
            this.j = new H2a(b);
            this.I = a;
            this.u = b && b.zX || null;
            a = b && b.yX || null;
            b && b.Mja && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.V = a;
            a = b && b.ika || null;
            b && b.hP && (a ? a["X-WebChannel-Content-Type"] = b.hP : a = {
                "X-WebChannel-Content-Type": b.hP
            });
            b && b.bN && (a ? a["X-WebChannel-Client-Profile"] = b.bN : a = {
                "X-WebChannel-Client-Profile": b.bN
            });
            this.j.Ib = a;
            (a = b && b.gka) && !g.lb(a) && (this.j.J = a);
            this.J = b && b.L0 || !1;
            this.D = b && b.Lka || !1;
            (b = b && b.TW) && !g.lb(b) && (this.j.va = b, g.Pe(this.u, b) && g.Te(this.u,
                b));
            this.C = new q7(this)
        },
        S2a = function(a) {
            O6.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.metadataKey = g.Me(b)) ? g.Ue(b, this.metadataKey) : b : this.data = a
        },
        T2a = function(a) {
            P6.call(this);
            this.status = 1;
            this.errorCode = a
        },
        q7 = function(a) {
            this.j = a
        },
        U2a = function(a, b) {
            this.u = a;
            this.j = b
        },
        V2a = function(a) {
            return P2a(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.D ? y1a(b) : b);
                return b
            })
        },
        s7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        u7 = function(a) {
            t7.dispatchEvent(new W2a(t7, a))
        },
        W2a = function(a, b) {
            g.Ce.call(this, "statevent", a);
            this.stat = b
        },
        v7 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.J = c;
            this.I = d || 1;
            this.u = 45E3;
            this.B = new g.ej(this);
            this.D = new g.Zg;
            this.D.setInterval(250)
        },
        Y2a = function(a, b, c) {
            a.Ft = 1;
            a.Ho = m6(b.clone());
            a.Cq = c;
            a.va = !0;
            X2a(a, null)
        },
        w7 = function(a, b, c, d, e) {
            a.Ft = 1;
            a.Ho = m6(b.clone());
            a.Cq = null;
            a.va = c;
            e && (a.hR = !1);
            X2a(a, d)
        },
        X2a = function(a, b) {
            a.Et = Date.now();
            x7(a);
            a.Jo = a.Ho.clone();
            n6(a.Jo, "t", a.I);
            a.kA = 0;
            a.oh = a.j.qE(a.j.Dw() ? b : null);
            0 < a.oE && (a.iA = new L6((0, g.Sa)(a.PK, a, a.oh), a.oE));
            a.B.Ma(a.oh, "readystatechange", a.ZS);
            b = a.Bq ? g.We(a.Bq) : {};
            a.Cq ? (a.jA = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.oh.send(a.Jo, a.jA, a.Cq, b)) : (a.jA = "GET", a.hR && !g.Ee && (b.Connection = "close"), a.oh.send(a.Jo, a.jA, null, b));
            a.j.Sk(1)
        },
        $2a = function(a, b) {
            var c = a.kA,
                d = b.indexOf("\n", c);
            if (-1 == d) return y7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Z2a;
            d += 1;
            if (d + c > b.length) return y7;
            b = b.slice(d, d + c);
            a.kA = d + c;
            return b
        },
        b3a = function(a, b) {
            a.Et = Date.now();
            x7(a);
            var c = b ? window.location.hostname : "";
            a.Jo = a.Ho.clone();
            g.$i(a.Jo, "DOMAIN", c);
            g.$i(a.Jo, "t", a.I);
            try {
                a.ol = new ActiveXObject("htmlfile")
            } catch (m) {
                z7(a);
                a.Io = 7;
                u7(22);
                A7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in B7) f = B7[f];
                        else if (f in a3a) f = B7[f] = a3a[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                B7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.Tf(g.yf("b/12014412"), d);
            a.ol.open();
            a.ol.write(g.Qf(c));
            a.ol.close();
            a.ol.parentWindow.m = (0, g.Sa)(a.C_, a);
            a.ol.parentWindow.d = (0, g.Sa)(a.lQ, a, !0);
            a.ol.parentWindow.rpcClose = (0, g.Sa)(a.lQ, a, !1);
            c = a.ol.createElement("DIV");
            a.ol.parentWindow.document.body.appendChild(c);
            d = g.Gf(a.Jo.toString());
            d = g.hg(g.Ef(d));
            d = g.Tf(g.yf("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.Kca(c, d);
            a.j.Sk(1)
        },
        x7 = function(a) {
            a.pE =
                Date.now() + a.u;
            c3a(a, a.u)
        },
        c3a = function(a, b) {
            if (null != a.Gt) throw Error("WatchDog timer not null");
            a.Gt = s7((0, g.Sa)(a.YS, a), b)
        },
        C7 = function(a) {
            a.Gt && (g.C.clearTimeout(a.Gt), a.Gt = null)
        },
        A7 = function(a) {
            a.j.Kf() || a.Aq || a.j.lA(a)
        },
        z7 = function(a) {
            C7(a);
            g.ze(a.iA);
            a.iA = null;
            a.D.stop();
            g.fj(a.B);
            if (a.oh) {
                var b = a.oh;
                a.oh = null;
                b.abort();
                b.dispose()
            }
            a.ol && (a.ol = null)
        },
        D7 = function(a, b) {
            try {
                a.j.QK(a, b), a.j.Sk(4)
            } catch (c) {}
        },
        e3a = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                d3a(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        e3a(a, b, c, d, f)
                    }, f)
                })
            }
        },
        d3a = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    E7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    E7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    E7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    E7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            k1a(d, a)
        },
        E7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        f3a = function(a) {
            this.j = a;
            this.u = new N6
        },
        g3a = function(a) {
            var b = F7(a.j, a.lx, "/mail/images/cleardot.gif");
            m6(b);
            e3a(b.toString(), 5E3, (0, g.Sa)(a.rV, a), 3, 2E3);
            a.Sk(1)
        },
        H7 = function(a) {
            var b = a.j.V;
            if (null != b) u7(5), b ? (u7(11), G7(a.j, a, !1)) : (u7(12), G7(a.j, a, !0));
            else if (a.Qh = new v7(a), a.Qh.Bq = a.rE, b = a.j, b = F7(b, b.Dw() ? a.Cw : null, a.sE), u7(5), !g.Gc || g.zc(10)) n6(b, "TYPE", "xmlhttp"), w7(a.Qh, b, !1, a.Cw, !1);
            else {
                n6(b, "TYPE", "html");
                var c = a.Qh;
                a = !!a.Cw;
                c.Ft = 3;
                c.Ho = m6(b.clone());
                b3a(c, a)
            }
        },
        I7 = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new N6;
            this.N = a || null;
            this.V = null != b ? b : null;
            this.J = c || !1
        },
        h3a = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        i3a = function(a, b, c, d) {
            g.Ce.call(this, "timingevent", a);
            this.size = b;
            this.Mv = d
        },
        j3a = function(a) {
            g.Ce.call(this, "serverreachability", a)
        },
        k3a = function(a) {
            a.aT(1, 0);
            a.mA = F7(a, null, a.tE);
            J7(a)
        },
        l3a = function(a) {
            a.Xo && (a.Xo.abort(), a.Xo = null);
            a.xf && (a.xf.cancel(), a.xf = null);
            a.Tm && (g.C.clearTimeout(a.Tm), a.Tm = null);
            K7(a);
            a.ji && (a.ji.cancel(), a.ji = null);
            a.Ko && (g.C.clearTimeout(a.Ko), a.Ko = null)
        },
        m3a = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new h3a(a.bT++, b));
            2 != a.j && 3 != a.j || J7(a)
        },
        n3a = function(a) {
            var b = 0;
            a.xf && b++;
            a.ji && b++;
            return b
        },
        J7 = function(a) {
            a.ji || a.Ko || (a.Ko = s7((0, g.Sa)(a.UK, a), 0), a.It = 0)
        },
        p3a = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.Fw = Math.floor(1E5 * Math.random());
                    b = a.Fw++;
                    var c = new v7(a, "", b);
                    c.Bq = a.Hl;
                    var d = L7(a),
                        e = a.mA.clone();
                    g.$i(e, "RID", b);
                    g.$i(e, "CVER", "1");
                    M7(a, e);
                    Y2a(c, e, d);
                    a.ji = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? o3a(a, b) : 0 == a.u.length || a.ji || o3a(a))
        },
        o3a = function(a, b) {
            if (b)
                if (6 < a.Dq) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.Fw - 1;
                    b = L7(a)
                } else c = b.J, b = b.Cq;
            else c = a.Fw++, b = L7(a);
            var d = a.mA.clone();
            g.$i(d, "SID", a.C);
            g.$i(d, "RID", c);
            g.$i(d, "AID", a.Jt);
            M7(a, d);
            c = new v7(a, a.C, c, a.It + 1);
            c.Bq = a.Hl;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.ji = c;
            Y2a(c, d, b)
        },
        M7 = function(a, b) {
            a.Tg && (a = a.Tg.YK()) && g.Ie(a, function(c, d) {
                g.$i(b, d, c)
            })
        },
        L7 = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Dq && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    qt: e.qt
                }, f++) {
                e.qt = a.u[f].j;
                var h = a.u[f].map;
                e.qt = 6 >= a.Dq ? f : e.qt - d;
                try {
                    g.Ie(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.qt + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.qt + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        q3a = function(a) {
            a.xf || a.Tm || (a.I = 1, a.Tm = s7((0, g.Sa)(a.TK, a), 0), a.Ht = 0)
        },
        N7 = function(a) {
            if (a.xf || a.Tm || 3 <= a.Ht) return !1;
            a.I++;
            a.Tm = s7((0, g.Sa)(a.TK, a), r3a(a, a.Ht));
            a.Ht++;
            return !0
        },
        G7 = function(a, b, c) {
            a.ND = c;
            a.Il = b.Sm;
            a.J || k3a(a)
        },
        K7 = function(a) {
            null != a.Eq && (g.C.clearTimeout(a.Eq), a.Eq = null)
        },
        r3a = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        O7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Tg && (c = null);
                var d = (0, g.Sa)(a.Q0, a);
                c || (c = new g.Si("//www.google.com/images/cleardot.gif"), m6(c));
                d3a(c.toString(), 1E4, d)
            } else u7(2);
            s3a(a, b)
        },
        s3a = function(a, b) {
            a.j = 0;
            a.Tg && a.Tg.VK(b);
            t3a(a);
            l3a(a)
        },
        t3a = function(a) {
            a.j = 0;
            a.Il = -1;
            if (a.Tg)
                if (0 == a.B.length && 0 == a.u.length) a.Tg.uE();
                else {
                    var b = g.ec(a.B),
                        c = g.ec(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.Tg.uE(b, c)
                }
        },
        F7 = function(a, b, c) {
            var d = g.aj(c);
            if ("" != d.j) b && g.Ui(d, b + "." + d.j), g.Vi(d, d.B);
            else {
                var e = window.location;
                d = z1a(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Ew && g.Ie(a.Ew, function(f, h) {
                g.$i(d, h, f)
            });
            g.$i(d, "VER", a.Dq);
            M7(a, d);
            return d
        },
        u3a = function() {},
        v3a = function() {
            this.j = [];
            this.u = []
        },
        w3a = function() {},
        J6 = function() {
            if (!P7) {
                P7 = new g.bh(new w3a);
                var a = g.Rp("client_streamz_web_flush_count", -1); - 1 !== a && (P7.C = a)
            }
            return P7
        },
        Q7 = function(a) {
            g.Ce.call(this, "channelMessage");
            this.message = a
        },
        R7 = function(a) {
            g.Ce.call(this, "channelError");
            this.error = a
        },
        x3a = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        S7 = function(a, b) {
            g.I.call(this);
            this.j = new g.K(this.u_, 0, this);
            g.J(this, this.j);
            this.ah = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Sa)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Sa)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        T7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.oa = a;
            this.J = b;
            this.B = new g.zo;
            this.u = new S7(this.u0, this);
            this.j = null;
            this.W = !1;
            this.I = null;
            this.V = "";
            this.N = this.D = 0;
            this.C = [];
            this.Ia = c;
            this.Y = d;
            this.Pa = e;
            this.Ga = new Z1a;
            this.ma = new a2a;
            this.Da = new c2a;
            this.va = new e2a;
            this.Sa = new g2a;
            this.Ta = new h2a
        },
        U7 = function(a) {
            if (a.j) {
                var b = a.Y(),
                    c = a.j.Hl || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Hl = c
            }
        },
        V7 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Fh(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Gh(a) || "";
            a = g.tb();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.sb(a, "10.0") && (this.u = !1))
        },
        W7 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.Mh(c + b, {})
        },
        X7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Ta(a.C, d, !0),
                onError: g.Ta(a.B, e),
                onTimeout: g.Ta(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.pq(b, a)
        },
        Y7 = function(a, b) {
            g.kf.call(this);
            var c = this;
            this.Oc = a();
            this.Oc.subscribe("handlerOpened", this.fT, this);
            this.Oc.subscribe("handlerClosed", this.dT, this);
            this.Oc.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Oc.subscribe("handlerMessage", this.eT, this);
            this.j = b
        },
        y3a = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new R2a : e;
            var f = void 0 === f ? new g.zo : f;
            this.pathPrefix = a;
            this.j = b;
            this.ma = c;
            this.D = f;
            this.N = null;
            this.V = this.J = 0;
            this.channel = null;
            this.I = 0;
            this.B = new S7(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : h7((new U2a(h, h.j)).j.u)) && d.connect(d.N, d.J)
            });
            this.C = {};
            this.u = {};
            this.W = !1;
            this.logger = null;
            this.oa = [];
            this.Y = void 0;
            this.Ia = new Z1a;
            this.va = new a2a;
            this.Ga = new c2a;
            this.Da = new e2a
        },
        z3a = function(a) {
            g.cf(a.channel, "m", function() {
                a.I = 3;
                a.B.reset();
                a.N = null;
                a.J = 0;
                for (var b = g.r(a.oa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.oa = [];
                a.X("webChannelOpened");
                $1a(a.Ia, "WEB_CHANNEL")
            });
            g.cf(a.channel, "n", function() {
                a.I = 0;
                a.B.isActive() || a.X("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : V2a(new U2a(b, b.j));
                c && (a.oa = [].concat(g.v(c)));
                b2a(a.va, "WEB_CHANNEL")
            });
            g.cf(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.X("webChannelMessage", new x3a(c[0], c[1]));
                a.Y = b.statusCode;
                d2a(a.Ga, "WEB_CHANNEL")
            });
            g.cf(a.channel, "o", function() {
                401 === a.Y || a.B.start();
                a.X("webChannelError");
                f2a(a.Da, "WEB_CHANNEL")
            })
        },
        Z7 = function(a) {
            var b = a.ma();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        $7 = function(a) {
            g.kf.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.iT, this);
            this.j.subscribe("webChannelClosed", this.gT, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.hT, this)
        },
        A3a = function(a, b, c, d, e) {
            function f() {
                return new T7(W7(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.Q("enable_mdx_web_channel_desktop") ? new $7(function() {
                return new y3a(W7(a, "/wc"), b, c)
            }) : new Y7(f, e)
        },
        E3a = function() {
            var a = B3a;
            C3a();
            a8.push(a);
            D3a()
        },
        b8 = function(a, b) {
            C3a();
            var c = F3a(a, String(b));
            g.Yb(a8) ? G3a(c) : (D3a(), g.qc(a8, function(d) {
                d(c)
            }))
        },
        c8 = function(a) {
            b8("CP", a)
        },
        C3a = function() {
            a8 || (a8 = g.La("yt.mdx.remote.debug.handlers_") || [], g.Ka("yt.mdx.remote.debug.handlers_", a8))
        },
        G3a = function(a) {
            var b = (d8 + 1) % 50;
            d8 = b;
            e8[b] = a;
            f8 || (f8 = 49 == b)
        },
        D3a = function() {
            var a = a8;
            if (e8[0]) {
                var b = f8 ? d8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e8[b];
                    g.qc(a, function(d) {
                        d(c)
                    })
                } while (b != d8);
                e8 = Array(50);
                d8 = -1;
                f8 = !1
            }
        },
        F3a = function(a, b) {
            var c = (Date.now() - H3a) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g8 = function(a) {
            g.iu.call(this);
            this.I = a;
            this.screens = []
        },
        I3a = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        J3a = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.cm(a.screens, function(f) {
                return !!x6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = I3a(a, b[d]) || c;
            return c
        },
        K3a = function(a, b) {
            var c = a.screens.length;
            a.screens = g.cm(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        h8 = function(a, b, c, d, e) {
            g.iu.call(this);
            this.B = a;
            this.J = b;
            this.C = c;
            this.I = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.pc = NaN
        },
        j8 = function(a) {
            g8.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            i8(this);
            this.info("Initializing with " + v6(this.screens))
        },
        L3a = function(a) {
            if (a.screens.length) {
                var b = g.kk(a.screens, function(d) {
                        return d.id
                    }),
                    c = W7(a.u, "/pairing/get_lounge_token_batch");
                X7(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Sa)(a.rW, a), (0, g.Sa)(a.qW, a))
            }
        },
        i8 = function(a) {
            if (g.Q("deprecate_pair_servlet_enabled")) return J3a(a, []);
            var b = F1a(L1a());
            b = g.cm(b, function(c) {
                return !c.uuid
            });
            return J3a(a, b)
        },
        k8 = function(a, b) {
            N1a(g.kk(a.screens, D1a));
            b && M1a()
        },
        m8 = function(a, b) {
            g.iu.call(this);
            this.I = b;
            b = (b = g.$u("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.Xb(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            l8("Initialized with " + g.zh(this.j))
        },
        n8 = function(a, b, c) {
            var d = W7(a.D, "/pairing/get_screen_availability");
            X7(a.D, d, {
                lounge_token: b.token
            }, (0, g.Sa)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Sa)(function() {
                c(!1)
            }, a))
        },
        o8 = function(a, b) {
            a: if (o6(b) != o6(a.j)) var c = !1;
                else {
                    c = g.Oe(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.j[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (l8("Updated online screens: " + g.zh(a.j)), a.j = b, a.X("screenChange"));M3a(a)
        },
        p8 = function(a) {
            isNaN(a.B) || g.mq(a.B);
            a.B = g.kq((0, g.Sa)(a.cJ, a), 0 < a.C && a.C < g.Ua() ? 2E4 : 1E4)
        },
        l8 = function(a) {
            b8("OnlineScreenService", a)
        },
        N3a = function(a) {
            var b = {};
            g.qc(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.Xe("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        M3a = function(a) {
            a = g.Oe(g.Je(a.j, function(b) {
                return b
            }));
            g.mc(a);
            a.length ? g.Zu("yt-remote-online-screen-ids", a.join(","), 60) : g.av("yt-remote-online-screen-ids")
        },
        q8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g8.call(this, "ScreenService");
            this.C = a;
            this.J = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            O3a(this)
        },
        Q3a = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Wi(),
                l = c ? y6(h, c) : null;
            c && (a.J || l) || (l = y6(h, b));
            if (l) {
                l.uuid = b;
                var m = r8(a, l);
                n8(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? P3a(a, c, (0, g.Sa)(function(n) {
                var p = r8(this, new s6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                n8(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        R3a = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        S3a = function(a, b, c) {
            n8(a.j, b, c)
        },
        P3a = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.pq(W7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        T3a = function(a) {
            a.screens = a.u.Wi();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + v6(a.screens))
        },
        O3a = function(a) {
            s8(a);
            a.u = new j8(a.C);
            a.u.subscribe("screenChange", (0, g.Sa)(a.BW, a));
            T3a(a);
            a.J || (a.B = F1a(g.$u("yt-remote-automatic-screen-cache") || []));
            s8(a);
            a.info("Initializing automatic screens: " + v6(a.B));
            a.j = new m8(a.C, (0, g.Sa)(a.Wi, a, !0));
            a.j.subscribe("screenChange", (0, g.Sa)(function() {
                this.X("onlineScreenChange")
            }, a))
        },
        r8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = y6(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.J || U3a(a));
            s8(a);
            a.D[b.uuid] = b.id;
            g.Zu("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        U3a = function(a) {
            a = g.cm(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.Zu("yt-remote-automatic-screen-cache", g.kk(a, D1a))
        },
        s8 = function(a) {
            a.D = g.$u("yt-remote-device-id-map") || {}
        },
        t8 = function(a, b, c) {
            g.iu.call(this);
            this.va = c;
            this.B = a;
            this.j = b;
            this.C = null
        },
        u8 = function(a, b) {
            a.C = b;
            a.X("sessionScreen", a.C)
        },
        V3a = function(a, b) {
            a.C && (a.C.token = b, r8(a.B, a.C));
            a.X("sessionScreen", a.C)
        },
        v8 = function(a, b) {
            b8(a.va, b)
        },
        w8 = function(a, b, c) {
            t8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.Y = (0, g.Sa)(this.nT, this);
            this.ma = (0, g.Sa)(this.M_, this);
            this.W = g.kq(function() {
                W3a(d, null)
            }, 12E4);
            this.J = this.D = this.I = this.N = 0;
            this.oa = !1;
            this.V = "unknown"
        },
        x8 = function(a, b) {
            g.mq(a.J);
            a.J = 0;
            0 == b ? X3a(a) : a.J = g.kq(function() {
                X3a(a)
            }, b)
        },
        X3a = function(a) {
            Y3a(a, "getLoungeToken");
            g.mq(a.D);
            a.D = g.kq(function() {
                Z3a(a, null)
            }, 3E4)
        },
        Y3a = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.zh());
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Sa)(function() {
                v8(this, "Failed to send message: " + b + ".")
            }, a)) : v8(a, "Sending yt message without session: " + g.zh(c))
        },
        y8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.UN(b, function(c) {
                u8(a, c)
            }, function() {
                return a.Hh()
            }, 5)) : a.Hh(Error("Waiting for session status timed out."))
        },
        a4a = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " +
                JSON.stringify(b));
            var d = new s6(b);
            $3a(a, d, function(e) {
                e ? (a.oa = !0, r8(a.B, d), u8(a, d), a.V = "unknown", x8(a, c)) : (g.Vp(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Hh())
            }, 5)
        },
        W3a = function(a, b) {
            g.mq(a.W);
            a.W = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? a4a(a, {
                name: a.j.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.Vp(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), y8(a, b.screenId))) : (g.Vp(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), y8(a, b.screenId)) : y8(a, b.screenId) : a.Hh(Error("Waiting for session status timed out."))
        },
        Z3a = function(a, b) {
            g.mq(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.V = c, x8(a, 3E4)) : (V3a(a, b.loungeToken), a.oa = !1, a.V = "unknown", x8(a, b.loungeTokenRefreshIntervalMs))
        },
        $3a = function(a, b, c, d) {
            g.mq(a.I);
            a.I = 0;
            S3a(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.kq(function() {
                    $3a(a, b, c, d - 1)
                }, 300)
            })
        },
        b4a = function(a) {
            g.mq(a.N);
            a.N = 0;
            g.mq(a.I);
            a.I = 0;
            g.mq(a.W);
            a.W = 0;
            g.mq(a.D);
            a.D = 0;
            g.mq(a.J);
            a.J = 0
        },
        z8 = function(a, b, c, d) {
            t8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.N = null;
            this.ma = "";
            this.Ia = c;
            this.Ga = null;
            this.W = function() {};
            this.V = NaN;
            this.Da = (0, g.Sa)(this.oT, this);
            this.D = function() {};
            this.J = this.I = 0;
            this.Y = !1;
            this.oa = "unknown"
        },
        A8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        c4a = function(a) {
            a.D = a.B.aL(a.ma, a.j.label, a.j.friendlyName, A8(a), function(b, c) {
                a.D = function() {};
                a.Y = !0;
                u8(a, b);
                "shortLived" == b.idType && 0 < c && B8(a, c)
            }, function(b) {
                a.D = function() {};
                a.Hh(b)
            })
        },
        d4a = function(a) {
            var b = {};
            b.pairingCode = a.ma;
            b.theme = a.Ia;
            P1a() && (b.env_useStageMdx = 1);
            return g.Kh(b)
        },
        C8 = function(a) {
            return new Promise(function(b) {
                a.ma = w6();
                if (a.Ga) {
                    var c = new chrome.cast.DialLaunchResponse(!0, d4a(a));
                    b(c);
                    c4a(a)
                } else a.W = function() {
                    g.mq(a.V);
                    a.W = function() {};
                    a.V = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, d4a(a));
                    b(d);
                    c4a(a)
                }, a.V = g.kq(function() {
                    a.W()
                }, 100)
            })
        },
        f4a = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new s6(b);
            return (new Promise(function(e) {
                e4a(a, d, function(f) {
                    f ? (a.Y = !0, r8(a.B, d), u8(a, d), B8(a, c)) : g.Vp(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        g4a = function(a, b) {
            var c = a.N.receiver.label,
                d = a.j.friendlyName;
            return (new Promise(function(e) {
                Q3a(a.B, c, b, d, function(f) {
                    f && f.token && u8(a, f);
                    e(f)
                }, function(f) {
                    v8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        e4a = function(a, b, c, d) {
            g.mq(a.I);
            a.I = 0;
            S3a(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.kq(function() {
                    e4a(a, b, c, d - 1)
                }, 300)
            })
        },
        B8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            A8(a) && (g.mq(a.J), a.J = 0, 0 == b ? h4a(a) : a.J = g.kq(function() {
                h4a(a)
            }, b))
        },
        h4a = function(a) {
            A8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.oa = c, B8(a, 3E4)) : (a.Y = !1, a.oa = "unknown", V3a(a, b.loungeToken), B8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.oa = "noLoungeTokenResponse";
                B8(a, 3E4)
            })
        },
        i4a = function(a) {
            g.mq(a.I);
            a.I = 0;
            g.mq(a.J);
            a.J = 0;
            a.D();
            a.D = function() {};
            g.mq(a.V)
        },
        D8 = function(a, b) {
            t8.call(this, a, b, "ManualSession");
            this.u = g.kq((0, g.Sa)(this.fv, this, null), 150)
        },
        E8 = function(a, b) {
            g.iu.call(this);
            this.config_ = b;
            this.u = a;
            this.N = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.V = b.disableCastApi || !1;
            this.I = b.forceMirroring || !1;
            this.j = null;
            this.J = !1;
            this.B = [];
            this.D = (0, g.Sa)(this.IZ, this)
        },
        j4a = function(a, b) {
            return b ? g.Ub(a.B, function(c) {
                return t6(b, c.label)
            }, a) : null
        },
        F8 = function(a) {
            b8("Controller", a)
        },
        B3a = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        G8 = function(a) {
            return a.J || !!a.B.length || !!a.j
        },
        H8 = function(a, b, c) {
            b != a.j && (g.ze(a.j), (a.j = b) ? (c ? a.X("yt-remote-cast2-receiver-resumed",
                b.j) : a.X("yt-remote-cast2-receiver-selected", b.j), b.subscribe("sessionScreen", (0, g.Sa)(a.jQ, a, b)), b.subscribe("sessionFailed", function() {
                return k4a(a, b)
            }), b.getScreen() ? a.X("yt-remote-cast2-session-change", b.getScreen()) : c && a.j.fv(null)) : a.X("yt-remote-cast2-session-change", null))
        },
        k4a = function(a, b) {
            a.j == b && a.X("yt-remote-cast2-session-failed")
        },
        l4a = function(a) {
            var b = a.u.ZK(),
                c = a.j && a.j.j;
            a = g.kk(b, function(d) {
                c && t6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = j4a(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        q4a = function(a, b, c, d) {
            d.disableCastApi ? I8("Cannot initialize because disabled by Mdx config.") : m4a() ? n4a(b, d) && (J8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? o4a(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? o4a(a, c) : (K8("Failed to load cast API: " + f), L8(!1), J8(!1), g.av("yt-remote-cast-available"), g.av("yt-remote-cast-receiver"),
                    p4a(), c(!1))
            }, d.loadCastApiSetupScript ? g.cv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= F6() && W1a() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? H6() : 89 <= F6() ? Y1a() : (I6(), G6(X1a.map(T1a))))) : I8("Cannot initialize because not running Chrome")
        },
        p4a = function() {
            I8("dispose");
            var a = M8();
            a && a.dispose();
            g.Ka("yt.mdx.remote.cloudview.instance_", null);
            r4a(!1);
            g.Et(N8);
            N8.length = 0
        },
        O8 = function() {
            return !!g.$u("yt-remote-cast-installed")
        },
        s4a = function() {
            var a = g.$u("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        t4a = function() {
            I8("clearCurrentReceiver");
            g.av("yt-remote-cast-receiver")
        },
        u4a = function() {
            return O8() ? M8() ? M8().getCastSession() : (K8("getCastSelector: Cast is not initialized."), null) : (K8("getCastSelector: Cast API is not installed!"), null)
        },
        Q8 = function() {
            O8() ? M8() ? P8() ? (I8("Requesting cast selector."), M8().requestSession()) : (I8("Wait for cast API to be ready to request the session."), N8.push(g.Dt("yt-remote-cast2-api-ready", Q8))) : K8("requestCastSelector: Cast is not initialized.") : K8("requestCastSelector: Cast API is not installed!")
        },
        R8 =
        function(a, b) {
            P8() ? M8().setConnectedScreenStatus(a, b) : K8("setConnectedScreenStatus called before ready.")
        },
        m4a = function() {
            var a = 0 <= g.tb().search(/ (CrMo|Chrome|CriOS)\//);
            return g.oz || a
        },
        v4a = function(a, b) {
            M8().init(a, b)
        },
        n4a = function(a, b) {
            var c = !1;
            M8() || (a = new E8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Zu("yt-remote-cast-available", d);
                q6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                I8("onReceiverSelected: " + d.friendlyName);
                g.Zu("yt-remote-cast-receiver", d);
                q6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                I8("onReceiverResumed: " + d.friendlyName);
                g.Zu("yt-remote-cast-receiver", d);
                q6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                I8("onSessionChange: " + u6(d));
                d || g.av("yt-remote-cast-receiver");
                q6("yt-remote-cast2-session-change", d)
            }), g.Ka("yt.mdx.remote.cloudview.instance_", a), c = !0);
            I8("cloudview.createSingleton_: " + c);
            return c
        },
        M8 = function() {
            return g.La("yt.mdx.remote.cloudview.instance_")
        },
        o4a = function(a, b) {
            L8(!0);
            J8(!1);
            v4a(a, function(c) {
                c ? (r4a(!0), g.Ft("yt-remote-cast2-api-ready")) : (K8("Failed to initialize cast API."), L8(!1), g.av("yt-remote-cast-available"), g.av("yt-remote-cast-receiver"), p4a());
                b(c)
            })
        },
        I8 = function(a) {
            b8("cloudview", a)
        },
        K8 = function(a) {
            b8("cloudview", a)
        },
        L8 = function(a) {
            I8("setCastInstalled_ " + a);
            g.Zu("yt-remote-cast-installed", a)
        },
        P8 = function() {
            return !!g.La("yt.mdx.remote.cloudview.apiReady_")
        },
        r4a = function(a) {
            I8("setApiReady_ " + a);
            g.Ka("yt.mdx.remote.cloudview.apiReady_", a)
        },
        J8 = function(a) {
            g.Ka("yt.mdx.remote.cloudview.initializing_", a)
        },
        S8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.hasNext = this.tm = !1;
            this.N = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        T8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.tm = !1;
            a.hasNext = !1;
            a.J = 0;
            a.I = g.Ua();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.N = 0;
            a.B = NaN;
            a.u = !1
        },
        U8 = function(a) {
            return a.Kc() ? (g.Ua() - a.I) / 1E3 : 0
        },
        V8 = function(a, b) {
            a.J = b;
            a.I = g.Ua()
        },
        W8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Ua() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        X8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && T8(a)
        },
        Y8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Xe(a.trackData);
            b.hasPrevious = a.tm;
            b.hasNext = a.hasNext;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.N;
            b.liveIngestionTime = a.B;
            return b
        },
        $8 = function(a, b) {
            g.iu.call(this);
            this.B = 0;
            this.C = a;
            this.I = [];
            this.D = new v3a;
            this.u = this.j = null;
            this.V = (0, g.Sa)(this.uY, this);
            this.J = (0, g.Sa)(this.Ty, this);
            this.N = (0, g.Sa)(this.tY, this);
            this.W = (0, g.Sa)(this.xY, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.vJ, this), w4a(this))) : c = 3;
            0 != c && (b ? this.vJ(c) : g.kq((0, g.Sa)(function() {
                this.vJ(c)
            }, this), 0));
            (a = u4a()) && Z8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.W)
        },
        a9 = function(a) {
            return new S8(a.C.getPlayerContextData())
        },
        w4a = function(a) {
            g.qc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.I.push(this.C.subscribe(b, g.Ta(this.GZ, b), this))
            }, a)
        },
        x4a = function(a) {
            g.qc(a.I, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.I.length = 0
        },
        b9 = function(a) {
            return 1 == a.getState()
        },
        c9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.enqueue(b)
        },
        e9 = function(a, b, c) {
            var d = a9(a);
            V8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            d9(a, d)
        },
        f9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        d9 = function(a, b) {
            x4a(a);
            a.C.setPlayerContextData(Y8(b));
            w4a(a)
        },
        Z8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.V), a.u.removeMediaListener(a.J), a.Ty(null));
            a.u = b;
            a.u && (c8("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.V), a.u.addMediaListener(a.J), a.u.media.length && a.Ty(a.u.media[0]))
        },
        y4a = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = a9(a);
                b.contentId != d.videoId && c8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                V8(d, a.j.getEstimatedTime());
                d9(a, d)
            } else c8("No cast media video. Ignoring state update.")
        },
        g9 = function(a, b, c) {
            return (0, g.Sa)(function(d) {
                this.Xe("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Xe("Retrying " + b + " using MDx browser channel."), f9(this, b, c))
            }, a)
        },
        j9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.iu.call(this);
            var e = this;
            this.I = NaN;
            this.ma = !1;
            this.V = this.N = this.Y = this.oa = NaN;
            this.W = [];
            this.D = this.J = this.C = this.j = this.u = null;
            this.Ga = a;
            this.Da = d;
            this.W.push(g.ht(window, "beforeunload", function() {
                e.xu(2)
            }));
            this.B = [];
            this.j = new S8;
            this.Ia = b.id;
            this.va = b.idType;
            this.u = A3a(this.Ga, c, this.eL, "shortLived" == this.va, this.Ia);
            this.u.Ma("channelOpened", function() {
                z4a(e)
            });
            this.u.Ma("channelClosed", function() {
                h9("Channel closed");
                isNaN(e.I) ? D6(!0) : D6();
                e.dispose()
            });
            this.u.Ma("channelError", function(f) {
                D6();
                isNaN(e.Xx()) ? (1 == f && "shortLived" == e.va && e.X("browserChannelAuthError", f), h9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.ma = !0, h9("Channel error: " + f + " with reconnection in " + e.Xx() + " ms"), i9(e, 2))
            });
            this.u.Ma("channelMessage", function(f) {
                A4a(e, f)
            });
            this.u.xo(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.bv() && g.Zu("yt-remote-session-video-id", f)
            })
        },
        B4a = function(a) {
            return g.Ub(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        h9 = function(a) {
            b8("conn", a)
        },
        i9 = function(a, b) {
            a.X("proxyStateChange", b)
        },
        C4a = function(a) {
            a.I = g.kq(function() {
                h9("Connecting timeout");
                a.xu(1)
            }, 2E4)
        },
        k9 = function(a) {
            g.mq(a.I);
            a.I = NaN
        },
        l9 = function(a) {
            g.mq(a.oa);
            a.oa = NaN
        },
        D4a = function(a) {
            m9(a);
            a.Y = g.kq(function() {
                n9(a, "getNowPlaying")
            }, 2E4)
        },
        m9 = function(a) {
            g.mq(a.Y);
            a.Y = NaN
        },
        z4a = function(a) {
            h9("Channel opened");
            a.ma && (a.ma = !1, l9(a), a.oa = g.kq(function() {
                h9("Timing out waiting for a screen.");
                a.xu(1)
            }, 15E3))
        },
        F4a = function(a, b) {
            var c = null;
            if (b) {
                var d = B4a(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ka("yt.mdx.remote.remoteClient_", c);
            b && (k9(a), l9(a));
            c = a.u.Tu() && isNaN(a.I);
            b == c ? b && (i9(a, 1), n9(a, "getSubtitlesTrack")) : b ? (a.TN() && a.j.reset(), i9(a, 1), n9(a, "getNowPlaying"), E4a(a)) : a.xu(1)
        },
        G4a = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Se(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.X("remotePlayerChange"))
        },
        H4a = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            X8(a.j, d, e);
            a.X("remoteQueueChange", c)
        },
        J4a = function(a, b) {
            b.params = b.params || {};
            H4a(a, b, "NOW_PLAYING_MAY_CHANGE");
            I4a(a, b);
            a.X("autoplayDismissed")
        },
        I4a = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            V8(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.N = isNaN(c) ? 0 : c;
            a.j.bl(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? D4a(a) : m9(a);
            a.X("remotePlayerChange")
        },
        K4a = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c = 1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                V8(a.j, isNaN(b) ? 0 : b);
                a.X("remotePlayerChange")
            }
        },
        L4a = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.X("remotePlayerChange")
        },
        M4a = function(a, b) {
            a.J = b.params.videoId;
            a.X("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        N4a = function(a, b) {
            a.J = b.params.videoId || null;
            a.X("autoplayUpNext", a.J)
        },
        O4a = function(a, b) {
            a.D = b.params.autoplayMode;
            a.X("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.X("autoplayDismissed")
        },
        P4a = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.tm = "true" == b.params.hasPrevious;
            a.j.hasNext = c;
            a.X("previousNextChange")
        },
        A4a = function(a, b) {
            b = b.message;
            b.params ? h9("Received: action=" + b.action + ", params=" + g.zh(b.params)) : h9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = p6(b.params.devices);
                    a.B = g.kk(b, function(d) {
                        return new r6(d)
                    });
                    b = !!g.Ub(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    F4a(a, b);
                    b = a.BO("mlm");
                    a.X("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.cc(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    F4a(a, !1);
                    break;
                case "remoteConnected":
                    var c = new r6(p6(b.params.device));
                    g.Ub(a.B, function(d) {
                        return d.equals(c)
                    }) || w1a(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new r6(p6(b.params.device));
                    g.cc(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    H4a(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    J4a(a, b);
                    break;
                case "onStateChange":
                    I4a(a, b);
                    break;
                case "onAdStateChange":
                    K4a(a, b);
                    break;
                case "onVolumeChanged":
                    L4a(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    G4a(a, b);
                    break;
                case "nowAutoplaying":
                    M4a(a, b);
                    break;
                case "autoplayDismissed":
                    a.X("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    N4a(a, b);
                    break;
                case "onAutoplayModeChanged":
                    O4a(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    P4a(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.X("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.X("loopModeChange", b.params.loopMode);
                    break;
                default:
                    h9("Unrecognized action: " + b.action)
            }
        },
        E4a = function(a) {
            g.mq(a.V);
            a.V = g.kq(function() {
                a.xu(1)
            }, 864E5)
        },
        n9 = function(a, b, c) {
            c ? h9("Sending: action=" + b + ", params=" + g.zh(c)) : h9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        o9 = function(a) {
            g8.call(this, "ScreenServiceProxy");
            this.If = a;
            this.j = [];
            this.j.push(this.If.$_s("screenChange", (0, g.Sa)(this.sT, this)));
            this.j.push(this.If.$_s("onlineScreenChange", (0, g.Sa)(this.oZ, this)))
        },
        T4a = function(a, b) {
            O1a();
            if (!E6 || !E6.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                H1a();
                C6();
                p9 || (p9 = new V7(b ? b.loungeApiHost : void 0), P1a() && (p9.j = "/api/loungedev"));
                q9 || (q9 = g.La("yt.mdx.remote.deferredProxies_") || [], g.Ka("yt.mdx.remote.deferredProxies_", q9));
                Q4a();
                var c = r9();
                if (!c) {
                    var d = new q8(p9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ka("yt.mdx.remote.screenService_", d);
                    c = r9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ka("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    q4a(a, d, function(f) {
                        f ? s9() && R8(s9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            q6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.La("yt.mdx.remote.initialized_") && (g.Ka("yt.mdx.remote.initialized_", !0), t9("Initializing: " + g.zh(b)),
                    u9.push(g.Dt("yt-remote-cast2-api-ready", function() {
                        q6("yt-remote-api-ready")
                    })), u9.push(g.Dt("yt-remote-cast2-availability-change", function() {
                        q6("yt-remote-receiver-availability-change")
                    })), u9.push(g.Dt("yt-remote-cast2-receiver-selected", function() {
                        v9(null);
                        q6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), u9.push(g.Dt("yt-remote-cast2-receiver-resumed", function() {
                        q6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), u9.push(g.Dt("yt-remote-cast2-session-change", R4a)), u9.push(g.Dt("yt-remote-connection-change", function(f) {
                        f ? R8(s9(), "YouTube TV") : w9() || (R8(null, null), t4a())
                    })), u9.push(g.Dt("yt-remote-cast2-session-failed", function() {
                        q6("yt-remote-connection-failed")
                    })), a = x9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Q("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), t9(" -- with channel params: " + g.zh(a)), a ? (g.Zu("yt-remote-session-app", a.app), g.Zu("yt-remote-session-name", a.name)) : (g.av("yt-remote-session-app"), g.av("yt-remote-session-name")), g.Ka("yt.mdx.remote.channelParams_", a), c.start(), s9() || S4a())
            }
        },
        U4a = function() {
            var a = r9().If.$_gos();
            var b = y9();
            b && z9() && (x6(a, b) || a.push(b));
            return G1a(a)
        },
        A9 = function() {
            var a = V4a();
            !a && O8() && s4a() && (a = {
                key: "cast-selector-receiver",
                name: s4a()
            });
            return a
        },
        V4a = function() {
            var a = U4a(),
                b = y9();
            b || (b = w9());
            return g.Ub(a, function(c) {
                return b && t6(b, c.key) ? !0 : !1
            })
        },
        y9 = function() {
            var a = s9();
            if (!a) return null;
            var b = r9().Wi();
            return y6(b, a)
        },
        R4a = function(a) {
            t9("remote.onCastSessionChange_: " + u6(a));
            if (a) {
                var b = y9();
                if (b && b.id == a.id) {
                    if (R8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) B9 && (B9.token = a), (b = z9()) && b.xo(a)
                } else b && C9(), D9(a, 1)
            } else z9() && C9()
        },
        C9 = function() {
            P8() ? M8().stopSession() : K8("stopSession called before API ready.");
            var a = z9();
            a && (a.disconnect(1), E9(null))
        },
        F9 = function() {
            var a = z9();
            return !!a && 3 != a.getProxyState()
        },
        t9 = function(a) {
            b8("remote", a)
        },
        r9 = function() {
            if (!G9) {
                var a = g.La("yt.mdx.remote.screenService_");
                G9 = a ? new o9(a) : null
            }
            return G9
        },
        s9 = function() {
            return g.La("yt.mdx.remote.currentScreenId_")
        },
        W4a = function(a) {
            g.Ka("yt.mdx.remote.currentScreenId_", a)
        },
        X4a = function() {
            return g.La("yt.mdx.remote.connectData_")
        },
        v9 = function(a) {
            g.Ka("yt.mdx.remote.connectData_", a)
        },
        z9 = function() {
            return g.La("yt.mdx.remote.connection_")
        },
        E9 = function(a) {
            var b = z9();
            v9(null);
            a || W4a("");
            g.Ka("yt.mdx.remote.connection_", a);
            q9 && (g.qc(q9, function(c) {
                c(a)
            }), q9.length = 0);
            b && !a ? q6("yt-remote-connection-change", !1) : !b && a && q6("yt-remote-connection-change", !0)
        },
        w9 = function() {
            var a = g.bv();
            if (!a) return null;
            var b = r9();
            if (!b) return null;
            b = b.Wi();
            return y6(b, a)
        },
        D9 = function(a, b) {
            s9();
            y9() && y9();
            if (H9) B9 = a;
            else {
                W4a(a.id);
                var c = g.La("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new j9(p9, a, x9(), c);
                a.connect(b, X4a());
                a.subscribe("beforeDisconnect", function(d) {
                    q6("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    z9() && (z9(), E9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = y9();
                    d && "shortLived" == d.idType && (P8() ? M8().handleBrowserChannelAuthError() : K8("refreshLoungeToken called before API ready."))
                });
                E9(a)
            }
        },
        S4a = function() {
            var a = w9();
            a ? (t9("Resume connection to: " + u6(a)), D9(a, 0)) : (D6(), t4a(), t9("Skipping connecting because no session screen found."))
        },
        Q4a = function() {
            var a = x9();
            if (g.Se(a)) {
                a = B6();
                var b = g.$u("yt-remote-session-name") || "",
                    c = g.$u("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ka("yt.mdx.remote.channelParams_", a)
            }
        },
        x9 = function() {
            return g.La("yt.mdx.remote.channelParams_") || {}
        },
        I9 = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.u = a;
            this.G = b;
            this.Wb = c;
            this.events = new g.kz(this);
            this.W = this.events.P(this.G, "onVolumeChange", function(e) {
                Y4a(d, e)
            });
            this.D = !1;
            this.I = new g.zF(64);
            this.j = new g.K(this.sR, 500, this);
            this.B = new g.K(this.tR, 1E3, this);
            this.N = new K6(this.o1, 0, this);
            this.C = {};
            this.V = new g.K(this.cS, 1E3, this);
            this.J = new L6(this.seekTo, 1E3, this);
            g.J(this, this.events);
            this.events.P(b, "onCaptionsTrackListChanged", this.ZY);
            this.events.P(b, "captionschanged", this.rY);
            this.events.P(b, "captionssettingschanged", this.AR);
            this.events.P(b, "videoplayerreset", this.KC);
            this.events.P(b, "mdxautoplaycancel", function() {
                d.Wb.oN()
            });
            a = this.Wb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.gQ, this);
            a.subscribe("remotePlayerChange", this.Yy, this);
            a.subscribe("remoteQueueChange", this.KC, this);
            a.subscribe("previousNextChange", this.dQ, this);
            a.subscribe("nowAutoplaying", this.XP, this);
            a.subscribe("autoplayDismissed", this.BP, this);
            g.J(this, this.j);
            g.J(this, this.B);
            g.J(this, this.N);
            g.J(this, this.V);
            g.J(this, this.J);
            this.AR();
            this.KC();
            this.Yy()
        },
        Y4a = function(a, b) {
            if (J9(a)) {
                a.Wb.unsubscribe("remotePlayerChange", a.Yy, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = a9(a.Wb);
                if (c !== d.volume || b !== d.muted) a.Wb.setVolume(c, b), a.V.start();
                a.Wb.subscribe("remotePlayerChange", a.Yy, a)
            }
        },
        Z4a = function(a) {
            a.Sb(0);
            a.j.stop();
            a.Rb(new g.zF(64))
        },
        K9 = function(a, b) {
            if (J9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.G.getSubtitlesUserSettings()
                }, g.Ye(c, b));
                a.Wb.dL(a.G.getVideoData(1).videoId, c);
                a.C = a9(a.Wb).trackData
            }
        },
        L9 = function(a, b) {
            var c = a.G.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.G.getVideoData(1);
            a.Wb.playVideo(c.videoId, b, d, e, c.playerParams, c.ma, v1a(c));
            a.Rb(new g.zF(1))
        },
        $4a = function(a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", {
                    tO: 1
                });
                c && c.length ? (a.G.setOption("captions", "track", b), a.D = !1) : (a.G.loadModule("captions"), a.D = !0)
            } else a.G.setOption("captions", "track", {})
        },
        J9 = function(a) {
            return a9(a.Wb).videoId === a.G.getVideoData(1).videoId
        },
        M9 = function() {
            g.W.call(this, {
                F: "div",
                L: "ytp-mdx-popup-dialog",
                T: {
                    role: "dialog"
                },
                R: [{
                    F: "div",
                    L: "ytp-mdx-popup-dialog-inner-content",
                    R: [{
                        F: "div",
                        L: "ytp-mdx-popup-title",
                        Z: "You're signed out"
                    }, {
                        F: "div",
                        L: "ytp-mdx-popup-description",
                        Z: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        F: "div",
                        L: "ytp-mdx-privacy-popup-buttons",
                        R: [{
                            F: "button",
                            Ba: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            Z: "Cancel"
                        }, {
                            F: "button",
                            Ba: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                            Z: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.hH(this, 250);
            this.cancelButton = this.ya("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.ya("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.j);
            this.P(this.cancelButton, "click", this.u);
            this.P(this.confirmButton, "click", this.B)
        },
        N9 = function(a) {
            g.W.call(this, {
                F: "div",
                L: "ytp-remote",
                R: [{
                    F: "div",
                    L: "ytp-remote-display-status",
                    R: [{
                        F: "div",
                        L: "ytp-remote-display-status-icon",
                        R: [g.TAa()]
                    }, {
                        F: "div",
                        L: "ytp-remote-display-status-text",
                        Z: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.hH(this, 250);
            g.J(this, this.j);
            this.P(a, "presentingplayerstatechange", this.onStateChange);
            a5a(this, a.xb())
        },
        a5a = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.V(b, 128) ? g.gF("Error on $RECEIVER_NAME", c) : b.Kc() || g.V(b, 4) ? g.gF("Playing on $RECEIVER_NAME", c) : g.gF("Connected to $RECEIVER_NAME", c);
                a.Ha("statustext", b);
                a.j.show()
            } else a.j.hide()
        },
        O9 = function(a, b) {
            g.sM.call(this, "Play on", 0, a, b);
            this.G = a;
            this.gq = {};
            this.P(a, "onMdxReceiversChange", this.D);
            this.P(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        P9 = function(a) {
            g.WI.call(this, a);
            this.Dm = {
                key: w6(),
                name: "This computer"
            };
            this.wj = null;
            this.subscriptions = [];
            this.NI = this.Wb = null;
            this.gq = [this.Dm];
            this.ap = this.Dm;
            this.Rd = new g.zF(64);
            this.OO = 0;
            this.hg = -1;
            this.jz = !1;
            this.gz = this.Gv = null;
            if (!g.fB(this.player.S()) && !g.gB(this.player.S())) {
                a = this.player;
                var b = g.yI(a);
                b && (b = b.Bp()) && (b = new O9(a, b), g.J(this, b));
                b = new N9(a);
                g.J(this, b);
                g.II(a, b.element, 4);
                this.Gv = new M9;
                g.J(this, this.Gv);
                g.II(a, this.Gv.element, 4);
                this.jz = !!w9()
            }
        },
        Q9 = function(a) {
            a.gz && (a.player.removeEventListener("presentingplayerstatechange",
                a.gz), a.gz = null)
        },
        b5a = function(a, b, c) {
            a.Rd = c;
            a.player.X("presentingplayerstatechange", new g.TE(c, b))
        },
        R9 = function(a, b) {
            if (b.key !== a.ap.key)
                if (b.key === a.Dm.key) C9();
                else {
                    var c;
                    (c = !a.player.S().K("mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.jz || !a.Gv);
                    (c ? 0 : g.SB(a.player.S()) || g.VB(a.player.S())) && c5a(a);
                    a.ap = b;
                    if (!a.player.S().K("disable_mdx_connection_in_mdx_module_for_music_web") || !g.gB(a.player.S())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.S().K("should_clear_video_data_on_player_cued_unstarted")) a =
                            null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = g.RI(f, l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.ma,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = v1a(c)) && (a.locationInfo = c)
                        }
                        t9("Connecting to: " + g.zh(b));
                        "cast-selector-receiver" == b.key ? (v9(a || null), b = a || null, P8() ? M8().setLaunchParams(b) : K8("setLaunchParams called before ready.")) : !a && F9() &&
                            s9() == b.key ? q6("yt-remote-connection-change", !0) : (C9(), v9(a || null), a = r9().Wi(), (b = y6(a, b.key)) && D9(b, 1))
                    }
                }
        },
        c5a = function(a) {
            a.player.xb().Kc() ? a.player.pauseVideo() : (a.gz = function(b) {
                !a.jz && g.VE(b, 8) && (a.player.pauseVideo(), Q9(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.gz));
            a.Gv && a.Gv.td();
            z9() || (H9 = !0)
        };
    g.ap.prototype.tp = g.ea(1, function() {
        return g.kd(this, 6)
    });
    g.Md.prototype.pA = g.ea(0, function() {
        var a = g.Qd(this);
        return 4294967296 * g.Qd(this) + (a >>> 0)
    });
    var g1a, d5a = g.ne(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.E(b, c, g.Rd(a.j));
            return !0
        }, g.qe),
        e5a = g.ne(function(a, b, c, d) {
            if (1 !== a.u) return !1;
            g.td(b, c, d, g.Rd(a.j));
            return !0
        }, g.qe),
        f5a = g.ne(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.E(b, c, g.Od(a.j));
            return !0
        }, g.re),
        g5a = g.ne(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.td(b, c, d, g.Od(a.j));
            return !0
        }, g.re),
        h5a = g.ne(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.E(b, c, g.Pd(a.j));
            return !0
        }, g.se),
        i5a = g.ne(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.td(b, c, d, g.Pd(a.j));
            return !0
        }, g.se),
        j5a = g.ne(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.E(b, c, a.j.pA());
            return !0
        }, function(a, b, c) {
            i1a(a, c, g.kd(b, c))
        }),
        k5a = g.ne(function(a, b, c) {
            if (1 !== a.u && 2 !== a.u) return !1;
            b = g.md(b, c);
            if (2 == a.u) {
                c = g.Md.prototype.pA;
                var d = g.Pd(a.j) >>> 0;
                for (d = a.j.j + d; a.j.j < d;) b.push(c.call(a.j))
            } else b.push(a.j.pA());
            return !0
        }, function(a, b, c) {
            b = g.md(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) i1a(a, c, b[d])
        }),
        l5a = g.ne(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.E(b, c, g.Sd(a.j));
            return !0
        }, j1a),
        m5a = g.ne(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.td(b, c, d, g.Sd(a.j));
            return !0
        }, j1a),
        n5a = g.ne(function(a, b, c) {
            if (2 !== a.u) return !1;
            a = g.Zd(a);
            g.rd(b, c, a);
            return !0
        }, function(a, b, c) {
            b = g.md(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && g.ee(a, c, g.eb(e))
                }
        }),
        o5a = g.ne(function(a, b, c, d) {
            if (2 !== a.u) return !1;
            g.td(b, c, d, g.Zd(a));
            return !0
        }, g.Hba),
        p5a = g.ne(function(a, b, c, d, e) {
            if (2 !== a.u) return !1;
            g.Wd(a, g.Paa(b, d, c), e);
            return !0
        }, g.Iba),
        l1a = [1];
    g.w(m1a, g.F);
    g.w(n1a, g.F);
    var q5a = [m1a, 1, g.PZ, [n1a, 1, d5a, 2, f5a]];
    g.w(o1a, g.F);
    g.w(p1a, g.F);
    g.w(q1a, g.F);
    var r5a = [1, 2],
        s5a = [g.ch, 1, g.OZ, 5, j5a, 2, p5a, [o1a, 1, g.QZ, [p1a, 1, g.OZ, 2, g.OZ, 3, l5a], r5a, 2, g.QZ, [q1a, 1, g.OZ, 2, g.OZ, 3, h5a, 4, l5a], r5a], 3, n5a, 6, k5a, 4, g.PZ, [g.dh, 1, g.PZ, [g.eh, 1, o5a, g.hh, 2, i5a, g.hh, 3, m5a, g.hh], 2, p5a, [g.fh, 1, g5a, g.gh, 2, e5a, g.gh, 3, g.QZ, q5a, g.gh]]],
        a3a = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        B7 = {
            "'": "\\'"
        },
        C1a = {
            b3: "atp",
            xga: "ska",
            Oea: "que",
            ica: "mus",
            wga: "sus",
            C8: "dsp",
            sfa: "seq",
            Kba: "mic",
            r7: "dpa",
            v3: "cds",
            gca: "mlm",
            o7: "dsdtr",
            fda: "ntb"
        };
    r6.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var E6, A6 = "",
        V1a = Q1a("loadCastFramework") || Q1a("loadCastApplicationFramework"),
        X1a = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Va(K6, g.I);
    g.k = K6.prototype;
    g.k.QS = function(a) {
        this.C = arguments;
        this.j = !1;
        this.pc ? this.B = g.Ua() + this.ah : this.pc = g.$g(this.D, this.ah)
    };
    g.k.stop = function() {
        this.pc && (g.C.clearTimeout(this.pc), this.pc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.I.apply(null, this.C)))
    };
    g.k.ea = function() {
        this.stop();
        K6.He.ea.call(this)
    };
    g.k.RS = function() {
        this.pc && (g.C.clearTimeout(this.pc), this.pc = null);
        this.B ? (this.pc = g.$g(this.D, this.B - g.Ua()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.I.apply(null, this.C))
    };
    g.w(L6, g.I);
    g.k = L6.prototype;
    g.k.nE = function(a) {
        this.B = arguments;
        this.pc || this.u ? this.j = !0 : M6(this)
    };
    g.k.stop = function() {
        this.pc && (g.C.clearTimeout(this.pc), this.pc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.pc || (this.j = !1, M6(this))
    };
    g.k.ea = function() {
        g.I.prototype.ea.call(this);
        this.stop()
    };
    N6.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    N6.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    g.Va(O6, g.Ce);
    g.Va(P6, g.Ce);
    var k2a = !1;
    var m2a = null;
    g.Va(n2a, g.Ce);
    g.Va(o2a, g.Ce);
    g.Va(p2a, g.Ce);
    U6.prototype.info = function() {};
    U6.prototype.warning = function() {};
    var Z6 = {},
        Y6 = {};
    g.k = V6.prototype;
    g.k.setTimeout = function(a) {
        this.qb = a
    };
    g.k.VS = function(a) {
        a = a.target;
        var b = this.Sa;
        b && 3 == g.Th(a) ? b.nE() : this.HK(a)
    };
    g.k.HK = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Th(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.YB || this.j && (this.u.u || g.Vh(this.j) || g.Wh(this.j)))) {
                    this.Da || 4 != b || 7 == c || (8 == c || 0 >= d ? R6(3) : R6(2));
                    c7(this);
                    var e = this.j.getStatus();
                    this.Kb = e;
                    b: if (t2a(this)) {
                        var f = g.Wh(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Th(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                a7(this);
                                b7(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.C.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.W = 0;
                        m = this.u.j
                    } else m = g.Vh(this.j);
                    if (this.B = 200 == e) {
                        if (this.Zb && !this.Pa) {
                            b: {
                                if (this.j) {
                                    var n = g.Xh(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.lb(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Pa = !0,
                            $6(this, e);
                            else {
                                this.B = !1;
                                this.I = 3;
                                S6(12);
                                a7(this);
                                b7(this);
                                break a
                            }
                        }
                        this.va ? (v2a(this, b, m), g.YB && this.B && 3 == b && (this.bb.Ma(this.eb, "tick", this.US), this.eb.start())) : $6(this, m);
                        4 == b && a7(this);
                        this.B && !this.Da && (4 == b ? x2a(this.D, this) : (this.B = !1, X6(this)))
                    } else 400 == e && 0 <
                        m.indexOf("Unknown SID") ? (this.I = 3, S6(12)) : (this.I = 0, S6(13)), a7(this), b7(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.US = function() {
        if (this.j) {
            var a = g.Th(this.j),
                b = g.Vh(this.j);
            this.W < b.length && (c7(this), v2a(this, a, b), this.B && 4 != a && X6(this))
        }
    };
    g.k.cancel = function() {
        this.Da = !0;
        a7(this)
    };
    g.k.SS = function() {
        this.V = null;
        var a = Date.now();
        0 <= a - this.Ib ? (2 != this.Ia && (R6(3), S6(17)), a7(this), this.I = 2, b7(this)) : w2a(this, this.Ib - a)
    };
    g.k.getLastError = function() {
        return this.I
    };
    C2a.prototype.cancel = function() {
        this.B = l7(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.r(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = H2a.prototype;
    g.k.IK = 8;
    g.k.Xf = 1;
    g.k.connect = function(a, b, c, d) {
        this.bf && g.Qg((0, g.Sa)(this.s0, this, a));
        S6(0);
        this.Hc = a;
        this.Da = b || {};
        c && void 0 !== d && (this.Da.OSID = c, this.Da.OAID = d);
        this.eb = this.Jc;
        this.Ga = y2a(this, null, this.Hc);
        k7(this)
    };
    g.k.disconnect = function() {
        I2a(this);
        if (3 == this.Xf) {
            var a = this.Sa++,
                b = this.Ga.clone();
            g.$i(b, "SID", this.C);
            g.$i(b, "RID", a);
            g.$i(b, "TYPE", "terminate");
            p7(this, b);
            a = new V6(this, this.C, a);
            a.Ia = 2;
            a.J = m6(b.clone());
            b = !1;
            g.C.navigator && g.C.navigator.sendBeacon && (b = g.C.navigator.sendBeacon(a.J.toString(), ""));
            !b && g.C.Image && ((new Image).src = a.J, b = !0);
            b || (a.j = s2a(a.D, null), a.j.send(a.J));
            a.oa = Date.now();
            X6(a)
        }
        O2a(this)
    };
    g.k.s0 = function(a) {
        try {
            l2a(a, function() {})
        } catch (b) {}
    };
    g.k.Kf = function() {
        return 0 == this.Xf
    };
    g.k.getState = function() {
        return this.Xf
    };
    g.k.KK = function(a) {
        if (this.I)
            if (this.I = null, 1 == this.Xf) {
                if (!a) {
                    this.Sa = Math.floor(1E5 * Math.random());
                    a = this.Sa++;
                    var b = new V6(this, "", a),
                        c = this.V;
                    this.Ib && (c ? (c = g.We(c), g.Ye(c, this.Ib)) : c = this.Ib);
                    null !== this.J || this.kb || (b.Ga = c, c = null);
                    var d;
                    if (this.qb) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = L2a(this, b, d);
                    e = this.Ga.clone();
                    g.$i(e, "RID", a);
                    g.$i(e, "CVER", 22);
                    this.va && g.$i(e, "X-HTTP-Session-Id", this.va);
                    p7(this, e);
                    c && (this.kb ? d = "headers=" + g.fg(g.ofa(c)) + "&" + d : this.J && g.dj(e, this.J, c));
                    j7(this.u, b);
                    this.Ze && g.$i(e, "TYPE", "init");
                    this.qb ? (g.$i(e, "$req", d), g.$i(e, "SID", "null"), b.Zb = !0, W6(b, e, null)) : W6(b, e, d);
                    this.Xf = 2
                }
            } else 3 == this.Xf && (a ? M2a(this, a) : 0 == this.B.length || D2a(this.u) || M2a(this))
    };
    g.k.JK = function() {
        this.N = null;
        N2a(this);
        if (this.Nc && !(this.bb || null == this.j || 0 >= this.Zc)) {
            var a = 2 * this.Zc;
            this.ma = T6((0, g.Sa)(this.qY, this), a)
        }
    };
    g.k.qY = function() {
        this.ma && (this.ma = null, this.eb = !1, this.bb = !0, S6(10), f7(this), N2a(this))
    };
    g.k.mI = function(a) {
        this.j == a && this.Nc && !this.bb && (o7(this), this.bb = !0, S6(11))
    };
    g.k.WS = function() {
        null != this.W && (this.W = null, f7(this), g7(this), S6(19))
    };
    g.k.R0 = function(a) {
        a ? S6(2) : S6(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = Q2a.prototype;
    g.k.OK = function() {};
    g.k.NK = function() {};
    g.k.MK = function() {};
    g.k.LK = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.XS = function() {};
    g.Va(r7, g.kf);
    r7.prototype.open = function() {
        this.j.D = this.C;
        this.J && (this.j.Ia = !0);
        this.j.connect(this.I, this.u || void 0)
    };
    r7.prototype.close = function() {
        this.j.disconnect()
    };
    r7.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.zh(a), a = c);
        b.B.push(new B2a(b.Me++, a));
        3 == b.Xf && k7(b)
    };
    r7.prototype.ea = function() {
        this.j.D = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        r7.He.ea.call(this)
    };
    g.Va(S2a, O6);
    g.Va(T2a, P6);
    g.Va(q7, Q2a);
    q7.prototype.OK = function() {
        this.j.dispatchEvent("m")
    };
    q7.prototype.NK = function(a) {
        this.j.dispatchEvent(new S2a(a))
    };
    q7.prototype.MK = function(a) {
        this.j.dispatchEvent(new T2a(a))
    };
    q7.prototype.LK = function() {
        this.j.dispatchEvent("n")
    };
    var t7 = new g.kf;
    g.w(W2a, g.Ce);
    g.k = v7.prototype;
    g.k.Bq = null;
    g.k.Rm = !1;
    g.k.Gt = null;
    g.k.pE = null;
    g.k.Et = null;
    g.k.Ft = null;
    g.k.Ho = null;
    g.k.Jo = null;
    g.k.Cq = null;
    g.k.oh = null;
    g.k.kA = 0;
    g.k.ol = null;
    g.k.jA = null;
    g.k.Io = null;
    g.k.Bw = -1;
    g.k.hR = !0;
    g.k.Aq = !1;
    g.k.oE = 0;
    g.k.iA = null;
    var Z2a = {},
        y7 = {};
    g.k = v7.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.ZS = function(a) {
        a = a.target;
        var b = this.iA;
        b && 3 == g.Th(a) ? b.nE() : this.PK(a)
    };
    g.k.PK = function(a) {
        try {
            if (a == this.oh) a: {
                var b = g.Th(this.oh),
                    c = this.oh.u,
                    d = this.oh.getStatus();
                if (g.Gc && !g.zc(10) || g.Ee && !g.yc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Vh(this.oh)) break a;this.Aq || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Sk(3) : this.j.Sk(2));C7(this);
                var e = this.oh.getStatus();this.Bw = e;
                var f = g.Vh(this.oh);
                if (this.Rm = 200 == e) {
                    4 == b && z7(this);
                    if (this.va) {
                        for (a = !0; !this.Aq && this.kA < f.length;) {
                            var h = $2a(this, f);
                            if (h == y7) {
                                4 == b && (this.Io = 4, u7(15), a = !1);
                                break
                            } else if (h == Z2a) {
                                this.Io = 4;
                                u7(16);
                                a = !1;
                                break
                            } else D7(this, h)
                        }
                        4 == b && 0 == f.length && (this.Io = 1, u7(17), a = !1);
                        this.Rm = this.Rm && a;
                        a || (z7(this), A7(this))
                    } else D7(this, f);
                    this.Rm && !this.Aq && (4 == b ? this.j.lA(this) : (this.Rm = !1, x7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Io = 3, u7(13)) : (this.Io = 0, u7(14)),
                z7(this),
                A7(this)
            }
        } catch (l) {} finally {}
    };
    g.k.C_ = function(a) {
        s7((0, g.Sa)(this.B_, this, a), 0)
    };
    g.k.B_ = function(a) {
        this.Aq || (C7(this), D7(this, a), x7(this))
    };
    g.k.lQ = function(a) {
        s7((0, g.Sa)(this.A_, this, a), 0)
    };
    g.k.A_ = function(a) {
        this.Aq || (z7(this), this.Rm = a, this.j.lA(this), this.j.Sk(4))
    };
    g.k.cancel = function() {
        this.Aq = !0;
        z7(this)
    };
    g.k.YS = function() {
        this.Gt = null;
        var a = Date.now();
        0 <= a - this.pE ? (2 != this.Ft && this.j.Sk(3), z7(this), this.Io = 2, u7(18), A7(this)) : c3a(this, this.pE - a)
    };
    g.k.getLastError = function() {
        return this.Io
    };
    g.k = f3a.prototype;
    g.k.rE = null;
    g.k.Qh = null;
    g.k.eD = !1;
    g.k.uR = null;
    g.k.rB = null;
    g.k.FH = null;
    g.k.sE = null;
    g.k.rj = null;
    g.k.Sm = -1;
    g.k.Cw = null;
    g.k.lx = null;
    g.k.connect = function(a) {
        this.sE = a;
        a = F7(this.j, null, this.sE);
        u7(3);
        this.uR = Date.now();
        var b = this.j.N;
        null != b ? (this.Cw = b[0], (this.lx = b[1]) ? (this.rj = 1, g3a(this)) : (this.rj = 2, H7(this))) : (n6(a, "MODE", "init"), this.Qh = new v7(this), this.Qh.Bq = this.rE, w7(this.Qh, a, !1, null, !0), this.rj = 0)
    };
    g.k.rV = function(a) {
        if (a) this.rj = 2, H7(this);
        else {
            u7(4);
            var b = this.j;
            b.Il = b.Xo.Sm;
            O7(b, 9)
        }
        a && this.Sk(2)
    };
    g.k.qE = function(a) {
        return this.j.qE(a)
    };
    g.k.abort = function() {
        this.Qh && (this.Qh.cancel(), this.Qh = null);
        this.Sm = -1
    };
    g.k.Kf = function() {
        return !1
    };
    g.k.QK = function(a, b) {
        this.Sm = a.Bw;
        if (0 == this.rj)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Il = this.Sm;
                    O7(a, 2);
                    return
                }
                this.Cw = c[0];
                this.lx = c[1]
            } else a = this.j, a.Il = this.Sm, O7(a, 2);
        else if (2 == this.rj)
            if (this.eD) u7(7), this.FH = Date.now();
            else if ("11111" == b) {
            if (u7(6), this.eD = !0, this.rB = Date.now(), a = this.rB - this.uR, !g.Gc || g.zc(10) || 500 > a) this.Sm = 200, this.Qh.cancel(), u7(12), G7(this.j, this, !0)
        } else u7(8), this.rB = this.FH = Date.now(), this.eD = !1
    };
    g.k.lA = function() {
        this.Sm = this.Qh.Bw;
        if (this.Qh.Rm) 0 == this.rj ? this.lx ? (this.rj = 1, g3a(this)) : (this.rj = 2, H7(this)) : 2 == this.rj && ((!g.Gc || g.zc(10) ? !this.eD : 200 > this.FH - this.rB) ? (u7(11), G7(this.j, this, !1)) : (u7(12), G7(this.j, this, !0)));
        else {
            0 == this.rj ? u7(9) : 2 == this.rj && u7(10);
            var a = this.j;
            this.Qh.getLastError();
            a.Il = this.Sm;
            O7(a, 2)
        }
    };
    g.k.Dw = function() {
        return this.j.Dw()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Sk = function(a) {
        this.j.Sk(a)
    };
    g.k = I7.prototype;
    g.k.Hl = null;
    g.k.Ew = null;
    g.k.ji = null;
    g.k.xf = null;
    g.k.tE = null;
    g.k.mA = null;
    g.k.RK = null;
    g.k.nA = null;
    g.k.Fw = 0;
    g.k.bT = 0;
    g.k.Tg = null;
    g.k.Ko = null;
    g.k.Tm = null;
    g.k.Eq = null;
    g.k.Xo = null;
    g.k.ND = null;
    g.k.Jt = -1;
    g.k.SK = -1;
    g.k.Il = -1;
    g.k.It = 0;
    g.k.Ht = 0;
    g.k.Dq = 8;
    g.Va(i3a, g.Ce);
    g.Va(j3a, g.Ce);
    g.k = I7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        u7(0);
        this.tE = b;
        this.Ew = c || {};
        d && void 0 !== e && (this.Ew.OSID = d, this.Ew.OAID = e);
        this.J ? (s7((0, g.Sa)(this.cN, this, a), 100), k3a(this)) : this.cN(a)
    };
    g.k.disconnect = function() {
        l3a(this);
        if (3 == this.j) {
            var a = this.Fw++,
                b = this.mA.clone();
            g.$i(b, "SID", this.C);
            g.$i(b, "RID", a);
            g.$i(b, "TYPE", "terminate");
            M7(this, b);
            a = new v7(this, this.C, a);
            a.Ft = 2;
            a.Ho = m6(b.clone());
            k1a(new Image, a.Ho.toString());
            a.Et = Date.now();
            x7(a)
        }
        t3a(this)
    };
    g.k.cN = function(a) {
        this.Xo = new f3a(this);
        this.Xo.rE = this.Hl;
        this.Xo.u = this.D;
        this.Xo.connect(a)
    };
    g.k.Kf = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.UK = function(a) {
        this.Ko = null;
        p3a(this, a)
    };
    g.k.TK = function() {
        this.Tm = null;
        this.xf = new v7(this, this.C, "rpc", this.I);
        this.xf.Bq = this.Hl;
        this.xf.oE = 0;
        var a = this.RK.clone();
        g.$i(a, "RID", "rpc");
        g.$i(a, "SID", this.C);
        g.$i(a, "CI", this.ND ? "0" : "1");
        g.$i(a, "AID", this.Jt);
        M7(this, a);
        if (!g.Gc || g.zc(10)) g.$i(a, "TYPE", "xmlhttp"), w7(this.xf, a, !0, this.nA, !1);
        else {
            g.$i(a, "TYPE", "html");
            var b = this.xf,
                c = !!this.nA;
            b.Ft = 3;
            b.Ho = m6(a.clone());
            b3a(b, c)
        }
    };
    g.k.QK = function(a, b) {
        if (0 != this.j && (this.xf == a || this.ji == a))
            if (this.Il = a.Bw, this.ji == a && 3 == this.j)
                if (7 < this.Dq) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Tm) {
                                if (this.xf)
                                    if (this.xf.Et + 3E3 < this.ji.Et) K7(this), this.xf.cancel(), this.xf = null;
                                    else break a;
                                N7(this);
                                u7(19)
                            }
                        }
                    else this.SK = a[1], 0 < this.SK - this.Jt && 37500 > a[2] && this.ND && 0 == this.Ht && !this.Eq && (this.Eq = s7((0, g.Sa)(this.cT, this), 6E3));
                    else O7(this, 11)
                } else null != b && O7(this, 11);
        else if (this.xf ==
            a && K7(this), !g.lb(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Jt = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.nA = c[2], c = c[3], null != c ? this.Dq = c : this.Dq = 6, this.j = 3, this.Tg && this.Tg.XK(), this.RK = F7(this, this.Dw() ? this.nA : null, this.tE), q3a(this)) : "stop" == c[0] && O7(this, 7) : 3 == this.j && ("stop" == c[0] ? O7(this, 7) : "noop" != c[0] && this.Tg && this.Tg.WK(c), this.Ht = 0)
    };
    g.k.cT = function() {
        null != this.Eq && (this.Eq = null, this.xf.cancel(), this.xf = null, N7(this), u7(20))
    };
    g.k.lA = function(a) {
        if (this.xf == a) {
            K7(this);
            this.xf = null;
            var b = 2
        } else if (this.ji == a) this.ji = null, b = 1;
        else return;
        this.Il = a.Bw;
        if (0 != this.j)
            if (a.Rm)
                if (1 == b) {
                    b = Date.now() - a.Et;
                    var c = t7;
                    c.dispatchEvent(new i3a(c, a.Cq ? a.Cq.length : 0, b, this.It));
                    J7(this);
                    this.B.length = 0
                } else q3a(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Il)) {
                if (d = 1 == b) this.ji || this.Ko || 1 == this.j || 2 <= this.It ? d = !1 : (this.Ko = s7((0, g.Sa)(this.UK, this, a), r3a(this, this.It)), this.It++, d = !0);
                d = !(d || 2 == b && N7(this))
            }
            if (d) switch (c) {
                case 1:
                    O7(this,
                        5);
                    break;
                case 4:
                    O7(this, 10);
                    break;
                case 3:
                    O7(this, 6);
                    break;
                case 7:
                    O7(this, 12);
                    break;
                default:
                    O7(this, 2)
            }
        }
    };
    g.k.aT = function(a) {
        if (!g.Xb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.Q0 = function(a) {
        a ? u7(2) : (u7(1), s3a(this, 8))
    };
    g.k.qE = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Qh;
        a.J = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Tg && this.Tg.isActive(this)
    };
    g.k.Sk = function(a) {
        var b = t7;
        b.dispatchEvent(new j3a(b, a))
    };
    g.k.Dw = function() {
        return !(!g.Gc || g.zc(10))
    };
    g.k = u3a.prototype;
    g.k.XK = function() {};
    g.k.WK = function() {};
    g.k.VK = function() {};
    g.k.uE = function() {};
    g.k.YK = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = v3a.prototype;
    g.k.enqueue = function(a) {
        this.u.push(a)
    };
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.Xb(this.j, a) || g.Xb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.eTa)(b, a);
        0 <= c ? (g.ac(b, c), b = !0) : b = !1;
        return b || g.bc(this.u, a)
    };
    g.k.Cj = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    w3a.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.Q("enable_client_streamz_web")) {
            a = g.r(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Dda(c.value), c = {
                serializedIncrementBatch: g.Cc(g.me(c, s5a))
            }, g.vr("streamzIncremented", c, {
                pJ: b
            })
        }
    };
    var P7;
    g.w(Q7, g.Ce);
    g.w(R7, g.Ce);
    g.Va(S7, g.I);
    g.k = S7.prototype;
    g.k.u_ = function() {
        this.ah = Math.min(3E5, 2 * this.ah);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.ah + 15E3 * Math.random();
        g.Fn(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.ah = 5E3
    };
    g.Va(T7, u3a);
    g.k = T7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.wg = function(a) {
        return this.B.wg(a)
    };
    g.k.X = function(a, b) {
        return this.B.X.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.W || (this.W = !0, g.ze(this.B), this.disconnect(), g.ze(this.u), this.u = null, this.Y = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.W
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.V = "";
            this.u.stop();
            this.I = a || null;
            this.D = b || 0;
            a = this.oa + "/test";
            b = this.oa + "/bind";
            var d = new I7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ia),
                e = this.j;
            e && (e.Tg = null);
            d.Tg = this;
            this.j = d;
            U7(this);
            if (this.j) {
                d = g.P("ID_TOKEN");
                var f = this.j.Hl || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Hl = f
            }
            e ? (3 != e.getState() && 0 == n3a(e) || e.getState(), this.j.connect(a, b, this.J, e.C, e.Jt)) : c ? this.j.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.j.connect(a, b, this.J)
        }
    };
    g.k.disconnect = function(a) {
        this.N = a || 0;
        this.u.stop();
        U7(this);
        this.j && (3 == this.j.getState() && p3a(this.j), this.j.disconnect());
        this.N = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Ye(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.Tu() && (U7(this), m3a(this.j, a))
    };
    g.k.XK = function() {
        this.u.reset();
        this.I = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) m3a(this.j, a[b])
        }
        this.X("handlerOpened");
        $1a(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.VK = function(a) {
        var b = 2 == a && 401 == this.j.Il;
        4 == a || b || this.u.start();
        this.X("handlerError", a, b);
        f2a(this.va, "BROWSER_CHANNEL")
    };
    g.k.uE = function(a, b) {
        if (!this.u.isActive()) this.X("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        b2a(this.ma, "BROWSER_CHANNEL");
        a && this.Sa.j.xE("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Ta.j.xE("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.YK = function() {
        var a = {
            v: 2
        };
        this.V && (a.gsessionid = this.V);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.N && (a.ui = "" + this.N);
        this.I && g.Ye(a, this.I);
        return a
    };
    g.k.WK = function(a) {
        "S" == a[0] ? this.V = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.X("handlerMessage", new x3a(a[0], a[1]));
        d2a(this.Da, "BROWSER_CHANNEL")
    };
    g.k.Tu = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.xo = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Pa && this.j) {
            var b = this.j.Hl || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Hl = b
        }
    };
    g.k.tp = function() {
        return this.J.id
    };
    g.k.Ap = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.Fs = function() {
        var a = this.u;
        g.Gn(a.j);
        a.start()
    };
    g.k.u0 = function() {
        this.u.isActive();
        0 == n3a(this.j) && this.connect(this.I, this.D)
    };
    V7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    V7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    V7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.w(Y7, g.kf);
    g.k = Y7.prototype;
    g.k.connect = function(a, b, c) {
        this.Oc.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Oc.disconnect(a)
    };
    g.k.Fs = function() {
        this.Oc.Fs()
    };
    g.k.tp = function() {
        return this.Oc.tp()
    };
    g.k.Ap = function() {
        return this.Oc.Ap()
    };
    g.k.Tu = function() {
        return this.Oc.Tu()
    };
    g.k.fT = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Oc,
            b = this.j;
        g.Zu("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.ND,
            sessionId: a.j.C,
            arrayId: a.j.Jt
        });
        g.Zu("yt-remote-session-screen-id", b);
        a = z6();
        b = B6();
        g.Xb(a, b) || a.push(b);
        J1a(a);
        C6()
    };
    g.k.dT = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.eT = function(a) {
        this.dispatchEvent(new Q7(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new R7(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Oc.sendMessage(a, b)
    };
    g.k.xo = function(a) {
        this.Oc.xo(a)
    };
    g.k.dispose = function() {
        this.Oc.dispose()
    };
    g.k = y3a.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.I && (this.B.stop(), this.N = a, this.J = b, Z7(this), (a = g.P("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.vX && (this.u.mdxVersion = "" + this.j.vX), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities)), 0 !== this.J ? this.u.ui = "" + this.J : delete this.u.ui,
            Object.assign(this.u, this.N), this.channel = new r7(this.pathPrefix, {
                TW: "gsessionid",
                yX: this.C,
                zX: this.u
            }), this.channel.open(), this.I = 2, z3a(this))
    };
    g.k.disconnect = function(a) {
        this.V = void 0 === a ? 0 : a;
        this.B.stop();
        Z7(this);
        this.channel && (0 !== this.V ? this.u.ui = "" + this.V : delete this.u.ui, this.channel.close());
        this.V = 0
    };
    g.k.Ap = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.Fs = function() {
        var a = this.B;
        g.Gn(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Z7(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.xo = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.tp = function() {
        return this.j ? this.j.id : ""
    };
    g.k.X = function(a) {
        return this.D.X.apply(this.D, [a].concat(g.v(g.Ea.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.wg = function(a) {
        return this.D.wg(a)
    };
    g.k.dispose = function() {
        this.W || (this.W = !0, g.ze(this.D), this.disconnect(), g.ze(this.B), this.ma = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.W
    };
    g.w($7, g.kf);
    g.k = $7.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Fs = function() {
        this.j.Fs()
    };
    g.k.tp = function() {
        return this.j.tp()
    };
    g.k.Ap = function() {
        return this.j.Ap()
    };
    g.k.Tu = function() {
        return 3 === this.j.I
    };
    g.k.iT = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.gT = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.hT = function(a) {
        this.dispatchEvent(new Q7(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new R7(401 === this.j.Y ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.xo = function(a) {
        this.j.xo(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var H3a = Date.now(),
        a8 = null,
        e8 = Array(50),
        d8 = -1,
        f8 = !1;
    g.Va(g8, g.iu);
    g8.prototype.Wi = function() {
        return this.screens
    };
    g8.prototype.contains = function(a) {
        return !!x6(this.screens, a)
    };
    g8.prototype.get = function(a) {
        return a ? y6(this.screens, a) : null
    };
    g8.prototype.info = function(a) {
        b8(this.I, a)
    };
    g.w(h8, g.iu);
    g.k = h8.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.pc) && this.yQ()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.pc) || (g.mq(this.pc), this.pc = NaN)
    };
    g.k.ea = function() {
        this.stop();
        g.iu.prototype.ea.call(this)
    };
    g.k.yQ = function() {
        this.pc = NaN;
        this.j = g.pq(W7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.Sa)(this.kT, this),
            onError: (0, g.Sa)(this.jT, this),
            onTimeout: (0, g.Sa)(this.lT, this)
        })
    };
    g.k.kT = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.I;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.X("pairingComplete", new s6(a), b)
    };
    g.k.jT = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= t5a.length ? this.X("pairingFailed", Error("DIAL polling timed out")) : (a = t5a[this.u], this.pc = g.kq((0, g.Sa)(this.yQ, this), a), this.u++) : this.X("pairingFailed", Error("Server error " + a.status))
    };
    g.k.lT = function() {
        this.j = null;
        this.X("pairingFailed", Error("Server not responding"))
    };
    var t5a = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Va(j8, g8);
    g.k = j8.prototype;
    g.k.start = function() {
        i8(this) && this.X("screenChange");
        !g.$u("yt-remote-lounge-token-expiration") && L3a(this);
        g.mq(this.j);
        this.j = g.kq((0, g.Sa)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        i8(this);
        I3a(this, a);
        k8(this, !1);
        this.X("screenChange");
        b(a);
        a.token || L3a(this)
    };
    g.k.remove = function(a, b) {
        var c = i8(this);
        K3a(this, a) && (k8(this, !1), c = !0);
        b(a);
        c && this.X("screenChange")
    };
    g.k.LD = function(a, b, c, d) {
        var e = i8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.X("screenChange")
    };
    g.k.ea = function() {
        g.mq(this.j);
        j8.He.ea.call(this)
    };
    g.k.rW = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k8(this, !b);
        b && b8(this.I, "Missed " + b + " lounge tokens.")
    };
    g.k.qW = function(a) {
        b8(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.w(m8, g.iu);
    g.k = m8.prototype;
    g.k.start = function() {
        var a = parseInt(g.$u("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Ua() - 144E5 < a ? 0 : a) ? p8(this): (this.C = g.Ua() + 3E5, g.Zu("yt-remote-fast-check-period", this.C), this.cJ())
    };
    g.k.isEmpty = function() {
        return g.Se(this.j)
    };
    g.k.update = function() {
        l8("Updating availability on schedule.");
        var a = this.I(),
            b = g.Je(this.j, function(c, d) {
                return c && !!y6(a, d)
            }, this);
        o8(this, b)
    };
    g.k.ea = function() {
        g.mq(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.iu.prototype.ea.call(this)
    };
    g.k.cJ = function() {
        g.mq(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = N3a(this);
        if (o6(a)) {
            var b = W7(this.D, "/pairing/get_screen_availability");
            this.u = X7(this.D, b, {
                lounge_token: g.Oe(a).join(",")
            }, (0, g.Sa)(this.a_, this, a), (0, g.Sa)(this.ZZ, this))
        } else o8(this, {}), p8(this)
    };
    g.k.a_ = function(a, b) {
        this.u = null;
        var c = g.Oe(N3a(this));
        if (g.nc(c, g.Oe(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            o8(this, c);
            p8(this)
        } else this.Xe("Changing Screen set during request."), this.cJ()
    };
    g.k.ZZ = function(a) {
        this.Xe("Screen availability failed: " + a);
        this.u = null;
        p8(this)
    };
    g.k.Xe = function(a) {
        b8("OnlineScreenService", a)
    };
    g.Va(q8, g8);
    g.k = q8.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.X("screenChange"), this.j.isEmpty() || this.X("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.LD = function(a, b, c, d) {
        this.u.contains(a) ? this.u.LD(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b8(this.I, a), d(Error(a)))
    };
    g.k.Wi = function(a) {
        return a ? this.screens : g.dc(this.screens, g.cm(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.ZK = function() {
        return g.cm(this.Wi(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.aL = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new h8(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ze(l);
            e(r8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ze(l);
            f(m)
        });
        l.start();
        return (0, g.Sa)(l.stop, l)
    };
    g.k.mT = function(a, b, c, d) {
        g.pq(W7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Sa)(function(e, f) {
                e = new s6(f.screen || {});
                if (!e.name || R3a(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); R3a(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(r8(this, e))
            }, this),
            onError: (0, g.Sa)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Sa)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ea = function() {
        g.ze(this.u);
        g.ze(this.j);
        q8.He.ea.call(this)
    };
    g.k.BW = function() {
        T3a(this);
        this.X("screenChange");
        this.j.update()
    };
    q8.prototype.dispose = q8.prototype.dispose;
    g.Va(t8, g.iu);
    g.k = t8.prototype;
    g.k.getScreen = function() {
        return this.C
    };
    g.k.Hh = function(a) {
        this.isDisposed() || (a && (v8(this, "" + a), this.X("sessionFailed")), this.C = null, this.X("sessionScreen", null))
    };
    g.k.info = function(a) {
        b8(this.va, a)
    };
    g.k.bL = function() {
        return null
    };
    g.k.uJ = function(a) {
        var b = this.j;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Sa)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Sa)(function() {
            v8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ea = function() {
        this.uJ("");
        t8.He.ea.call(this)
    };
    g.w(w8, t8);
    g.k = w8.prototype;
    g.k.tJ = function(a) {
        if (this.u) {
            if (this.u == a) return;
            v8(this, "Overriding cast session with new session object");
            b4a(this);
            this.oa = !1;
            this.V = "unknown";
            this.u.removeUpdateListener(this.Y);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ma)
        }
        this.u = a;
        this.u.addUpdateListener(this.Y);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ma);
        Y3a(this, "getMdxSessionStatus")
    };
    g.k.fv = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.zh(a))
    };
    g.k.stop = function() {
        this.u ? this.u.stop((0, g.Sa)(function() {
            this.Hh()
        }, this), (0, g.Sa)(function() {
            this.Hh(Error("Failed to stop receiver app."))
        }, this)) : this.Hh(Error("Stopping cast device without session."))
    };
    g.k.uJ = function() {};
    g.k.ea = function() {
        this.info("disposeInternal");
        b4a(this);
        this.u && (this.u.removeUpdateListener(this.Y), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ma));
        this.u = null;
        t8.prototype.ea.call(this)
    };
    g.k.M_ = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = p6(b), g.Pa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.zh(b)), a) {
                    case "mdxSessionStatus":
                        W3a(this, b);
                        break;
                    case "loungeToken":
                        Z3a(this, b);
                        break;
                    default:
                        v8(this, "Unknown youtube message: " + a)
                } else v8(this, "Unable to parse message.");
                else v8(this, "No data in message.")
    };
    g.k.UN = function(a, b, c, d) {
        g.mq(this.N);
        this.N = 0;
        Q3a(this.B, this.j.label, a, this.j.friendlyName, (0, g.Sa)(function(e) {
            e ? b(e) : 0 <= d ? (v8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.N = g.kq((0, g.Sa)(this.UN, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.bL = function() {
        return this.u
    };
    g.k.nT = function(a) {
        this.isDisposed() || a || (v8(this, "Cast session died."), this.Hh())
    };
    g.w(z8, t8);
    g.k = z8.prototype;
    g.k.tJ = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Da)
    };
    g.k.fv = function(a) {
        this.Ga = a;
        this.W()
    };
    g.k.stop = function() {
        i4a(this);
        this.u ? this.u.stop((0, g.Sa)(this.Hh, this, null), (0, g.Sa)(this.Hh, this, "Failed to stop DIAL device.")) : this.Hh()
    };
    g.k.ea = function() {
        i4a(this);
        this.u && this.u.removeUpdateListener(this.Da);
        this.u = null;
        t8.prototype.ea.call(this)
    };
    g.k.oT = function(a) {
        this.isDisposed() || a || (v8(this, "DIAL session died."), this.D(), this.D = function() {}, this.Hh())
    };
    g.w(D8, t8);
    D8.prototype.stop = function() {
        this.Hh()
    };
    D8.prototype.tJ = function() {};
    D8.prototype.fv = function() {
        g.mq(this.u);
        this.u = NaN;
        var a = y6(this.B.Wi(), this.j.label);
        a ? u8(this, a) : this.Hh(Error("No such screen"))
    };
    D8.prototype.ea = function() {
        g.mq(this.u);
        this.u = NaN;
        t8.prototype.ea.call(this)
    };
    g.w(E8, g.iu);
    g.k = E8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.N, [chrome.cast.Capability.AUDIO_OUT]);
        this.V || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Sa)(this.LZ, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Sa)(this.hQ, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Sa)(this.GY, this);
        chrome.cast.initialize(c, (0, g.Sa)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), E3a(), this.u.subscribe("onlineScreenChange", (0, g.Sa)(this.cL, this)), this.B = l4a(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Sa)(function(f) {
                this.Xe("Failed to set initial custom receivers: " + g.zh(f))
            }, this)), this.X("yt-remote-cast2-availability-change", G8(this)), b(!0))
        }, this), (0, g.Sa)(function(f) {
            this.Xe("Failed to initialize API: " + g.zh(f));
            b(!1)
        }, this))
    };
    g.k.y0 = function(a, b) {
        F8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.getScreen();
            if (!a || c && c.id != a) F8("Unsetting old screen status: " + this.j.j.friendlyName), H8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = y6(this.u.Wi(), a);
                if (!c) {
                    F8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    F8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = j4a(this, c);
                a || (F8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Sa)(function(d) {
                    this.Xe("Failed to set initial custom receivers: " + g.zh(d))
                }, this)));
                F8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                H8(this, new D8(this.u, a), !0)
            }
            this.j.uJ(b)
        } else F8("setConnectedScreenStatus: no screen.")
    };
    g.k.z0 = function(a) {
        this.isDisposed() ? this.Xe("Setting connection data on disposed cast v2") : this.j ? this.j.fv(a) : this.Xe("Setting connection data without a session")
    };
    g.k.qT = function() {
        this.isDisposed() ? this.Xe("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), H8(this, null)) : F8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Sa)(this.hQ, this), (0, g.Sa)(this.d_, this))
    };
    g.k.ea = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Sa)(this.cL, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = B3a,
            b = g.La("yt.mdx.remote.debug.handlers_");
        g.bc(b || [], a);
        g.ze(this.j);
        g.iu.prototype.ea.call(this)
    };
    g.k.Xe = function(a) {
        b8("Controller", a)
    };
    g.k.jQ = function(a, b) {
        this.j == a && (b || H8(this, null), this.X("yt-remote-cast2-session-change", b))
    };
    g.k.IZ = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), F8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.j.label != a.label) F8("onReceiverAction_: Stopping active receiver: " + this.j.j.friendlyName), this.j.stop();
                        else {
                            F8("onReceiverAction_: Casting to active receiver.");
                            this.j.getScreen() && this.X("yt-remote-cast2-session-change", this.j.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            H8(this,
                                new D8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            H8(this, new z8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            H8(this, new w8(this.u, a, this.config_));
                            break;
                        default:
                            this.Xe("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.j.label == a.label ? this.j.stop() : this.Xe("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Xe("onReceiverAction_ called without receiver.")
    };
    g.k.GY = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Xe("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.j : null;
        if (!c || c.label != b.label) return this.Xe("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.getScreen()) return F8("Reselecting dial screen."),
                this.X("yt-remote-cast2-session-change", this.j.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Xe('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            H8(this, new z8(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.N = a;
        b.N.appState == chrome.cast.DialAppState.RUNNING ? (a = b.N.extraData || {}, c = a.screenId || null, A8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = f4a(b, {
            name: b.j.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.N.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Vp(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = g4a(b, c)) : a = g4a(b, c)) : a = C8(b);
        return a
    };
    g.k.hQ = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.I) {
            F8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) F8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), H8(this, new w8(this.u, c, this.config_), !0);
                    else {
                        this.Xe("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.j,
                    e = y6(this.u.Wi(),
                        d.label);
                e && t6(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (F8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.ze(this.j), this.j = new w8(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Sa)(this.jQ, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return k4a(b, b.j)
                }), this.j.fv(null));
                this.j.tJ(a)
            }
        }
    };
    g.k.pT = function() {
        return this.j ? this.j.bL() : null
    };
    g.k.d_ = function(a) {
        this.isDisposed() || (this.Xe("Failed to estabilish a session: " + g.zh(a)), a.code != chrome.cast.ErrorCode.CANCEL && H8(this, null), this.X("yt-remote-cast2-session-failed"))
    };
    g.k.LZ = function(a) {
        F8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = G8(this);
            this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            G8(this) != b && this.X("yt-remote-cast2-availability-change", G8(this))
        }
    };
    g.k.cL = function() {
        this.isDisposed() || (this.B = l4a(this), F8("Updating custom receivers: " + g.zh(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Sa)(function() {
            this.Xe("Failed to set custom receivers.")
        }, this)), this.X("yt-remote-cast2-availability-change", G8(this)))
    };
    E8.prototype.setLaunchParams = E8.prototype.z0;
    E8.prototype.setConnectedScreenStatus = E8.prototype.y0;
    E8.prototype.stopSession = E8.prototype.qT;
    E8.prototype.getCastSession = E8.prototype.pT;
    E8.prototype.requestSession = E8.prototype.requestSession;
    E8.prototype.init = E8.prototype.init;
    E8.prototype.dispose = E8.prototype.dispose;
    var N8 = [];
    g.k = S8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        T8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.tm = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.N = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.Kc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.bl = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + U8(this) : this.D
    };
    g.k.clone = function() {
        return new S8(Y8(this))
    };
    g.w($8, g.iu);
    g.k = $8.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.Ap = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.Fs = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        b9(this) ? (this.j ? this.j.play(null, g.of, g9(this, "play")) : f9(this, "play"), e9(this, 1, W8(a9(this))), this.X("remotePlayerChange")) : c9(this, this.play)
    };
    g.k.pause = function() {
        b9(this) ? (this.j ? this.j.pause(null, g.of, g9(this, "pause")) : f9(this, "pause"), e9(this, 2, W8(a9(this))), this.X("remotePlayerChange")) : c9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (b9(this)) {
            if (this.j) {
                var b = a9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.Kc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.of, g9(this, "seekTo", {
                    newTime: a
                }))
            } else f9(this, "seekTo", {
                newTime: a
            });
            e9(this, 3, a);
            this.X("remotePlayerChange")
        } else c9(this, g.Ta(this.seekTo, a))
    };
    g.k.stop = function() {
        if (b9(this)) {
            this.j ? this.j.stop(null, g.of, g9(this, "stopVideo")) : f9(this, "stopVideo");
            var a = a9(this);
            a.index = -1;
            a.videoId = "";
            T8(a);
            d9(this, a);
            this.X("remotePlayerChange")
        } else c9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Sa)(function() {
                        c8("set receiver volume: " + d)
                    }, this), (0, g.Sa)(function() {
                        this.Xe("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Sa)(function() {
                    c8("set receiver muted: " + b)
                }, this), (0, g.Sa)(function() {
                    this.Xe("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                f9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            d9(this, c)
        } else c9(this, g.Ta(this.setVolume, a, b))
    };
    g.k.dL = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.zh(b.style), g.Ye(a, c.trackData));
            f9(this, "setSubtitlesTrack", a);
            d9(this, c)
        } else c9(this, g.Ta(this.dL, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        b9(this) ? (b = b.getLanguageInfo().getId(), f9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = a9(this), a.audioTrackId = b, d9(this, a)) : c9(this, g.Ta(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = a9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        X8(l, a, c || 0);
        void 0 !== b && (V8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.zh(h));
        f9(this, "setPlaylist", m);
        d || d9(this, l)
    };
    g.k.XC = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "previous")
        } else c9(this, g.Ta(this.XC, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "next")
        } else c9(this, g.Ta(this.nextVideo, a, b))
    };
    g.k.ju = function() {
        if (b9(this)) {
            f9(this, "clearPlaylist");
            var a = a9(this);
            a.reset();
            d9(this, a);
            this.X("remotePlayerChange")
        } else c9(this, this.ju)
    };
    g.k.oN = function() {
        b9(this) ? f9(this, "dismissAutoplay") : c9(this, this.oN)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.X("proxyStateChange", a, this.B)
        }
        g.iu.prototype.dispose.call(this)
    };
    g.k.ea = function() {
        x4a(this);
        this.C = null;
        this.D.clear();
        Z8(this, null);
        g.iu.prototype.ea.call(this)
    };
    g.k.vJ = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.X("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.GZ = function(a, b) {
        this.X(a, b)
    };
    g.k.uY = function(a) {
        if (!a) this.Ty(null), Z8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = a9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, d9(this, b)
        }
    };
    g.k.Ty = function(a) {
        c8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.N);
        if (this.j = a) this.j.addUpdateListener(this.N), y4a(this), this.X("remotePlayerChange")
    };
    g.k.tY = function(a) {
        a ? (y4a(this), this.X("remotePlayerChange")) : this.Ty(null)
    };
    g.k.RJ = function() {
        f9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.xY = function() {
        var a = u4a();
        a && Z8(this, a)
    };
    g.k.Xe = function(a) {
        b8("CP", a)
    };
    g.w(j9, g.iu);
    g.k = j9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Da && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            V8(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Da ? "setInitialState" : "setPlaylist";
            h9("Connecting with " + c + " and params: " + g.zh(m));
            this.u.connect({
                method: c,
                params: g.zh(m)
            }, a, K1a())
        } else h9("Connecting without params"), this.u.connect({}, a, K1a());
        C4a(this)
    };
    g.k.xo = function(a) {
        this.u.xo(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ka("yt.mdx.remote.remoteClient_", null), this.X("beforeDispose"), i9(this, 3));
        g.iu.prototype.dispose.call(this)
    };
    g.k.ea = function() {
        k9(this);
        m9(this);
        l9(this);
        g.mq(this.N);
        this.N = NaN;
        g.mq(this.V);
        this.V = NaN;
        this.C = null;
        g.jt(this.W);
        this.W.length = 0;
        this.u.dispose();
        g.iu.prototype.ea.call(this);
        this.D = this.J = this.B = this.j = this.u = null
    };
    g.k.BO = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.r(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.kW = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.Xx()) ? this.u.Tu() && isNaN(this.I) && (a = 1) : a = 2);
        return a
    };
    g.k.xu = function(a) {
        h9("Disconnecting with " + a);
        g.Ka("yt.mdx.remote.remoteClient_", null);
        k9(this);
        this.X("beforeDisconnect", a);
        1 == a && D6();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.iW = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), X8(a, this.C, a.index));
        return Y8(a)
    };
    g.k.A0 = function(a) {
        var b = this,
            c = new S8(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.mq(this.N), this.N = g.kq(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && n9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && W8(this.j) == W8(c) && g.zh(this.j.trackData) == g.zh(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.qc(d, function(e) {
            this.X(e)
        }, this)
    };
    g.k.TN = function() {
        var a = this.u.tp(),
            b = g.Ub(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.Xx = function() {
        return this.u.Ap()
    };
    g.k.fW = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.gW = function() {
        return this.J || ""
    };
    g.k.rT = function() {
        !isNaN(this.Xx()) && this.u.Fs()
    };
    g.k.x0 = function(a, b) {
        n9(this, a, b);
        E4a(this)
    };
    g.k.eL = function() {
        var a = g.zq("SID", "") || "",
            b = g.zq("SAPISID", "") || "",
            c = g.zq("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.Cc(g.gb(a), 2);
        b = g.Cc(g.gb(b), 2);
        c = g.Cc(g.gb(c), 2);
        return g.Cc(g.gb(a + "," + b + "," + c), 2)
    };
    j9.prototype.subscribe = j9.prototype.subscribe;
    j9.prototype.unsubscribeByKey = j9.prototype.wg;
    j9.prototype.getProxyState = j9.prototype.kW;
    j9.prototype.disconnect = j9.prototype.xu;
    j9.prototype.getPlayerContextData = j9.prototype.iW;
    j9.prototype.setPlayerContextData = j9.prototype.A0;
    j9.prototype.getOtherConnectedRemoteId = j9.prototype.TN;
    j9.prototype.getReconnectTimeout = j9.prototype.Xx;
    j9.prototype.getAutoplayMode = j9.prototype.fW;
    j9.prototype.getAutoplayVideoId = j9.prototype.gW;
    j9.prototype.reconnect = j9.prototype.rT;
    j9.prototype.sendMessage = j9.prototype.x0;
    j9.prototype.getXsrfToken = j9.prototype.eL;
    j9.prototype.isCapabilitySupportedOnConnectedDevices = j9.prototype.BO;
    g.w(o9, g8);
    g.k = o9.prototype;
    g.k.Wi = function(a) {
        return this.If.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.If.$_c(a)
    };
    g.k.get = function(a) {
        return this.If.$_g(a)
    };
    g.k.start = function() {
        this.If.$_st()
    };
    g.k.add = function(a, b, c) {
        this.If.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.If.$_r(a, b, c)
    };
    g.k.LD = function(a, b, c, d) {
        this.If.$_un(a, b, c, d)
    };
    g.k.ea = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.If.$_ubk(this.j[a]);
        this.j.length = 0;
        this.If = null;
        g8.prototype.ea.call(this)
    };
    g.k.sT = function() {
        this.X("screenChange")
    };
    g.k.oZ = function() {
        this.X("onlineScreenChange")
    };
    q8.prototype.$_st = q8.prototype.start;
    q8.prototype.$_gspc = q8.prototype.mT;
    q8.prototype.$_gsppc = q8.prototype.aL;
    q8.prototype.$_c = q8.prototype.contains;
    q8.prototype.$_g = q8.prototype.get;
    q8.prototype.$_a = q8.prototype.add;
    q8.prototype.$_un = q8.prototype.LD;
    q8.prototype.$_r = q8.prototype.remove;
    q8.prototype.$_gs = q8.prototype.Wi;
    q8.prototype.$_gos = q8.prototype.ZK;
    q8.prototype.$_s = q8.prototype.subscribe;
    q8.prototype.$_ubk = q8.prototype.wg;
    var B9 = null,
        H9 = !1,
        p9 = null,
        q9 = null,
        G9 = null,
        u9 = [];
    g.w(I9, g.I);
    g.k = I9.prototype;
    g.k.ea = function() {
        g.I.prototype.ea.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Wb;
        a.unsubscribe("proxyStateChange", this.gQ, this);
        a.unsubscribe("remotePlayerChange", this.Yy, this);
        a.unsubscribe("remoteQueueChange", this.KC, this);
        a.unsubscribe("previousNextChange", this.dQ, this);
        a.unsubscribe("nowAutoplaying", this.XP, this);
        a.unsubscribe("autoplayDismissed", this.BP, this);
        this.Wb = this.u = null
    };
    g.k.Lk = function(a) {
        var b = g.Ea.apply(1, arguments);
        if (2 != this.Wb.B)
            if (J9(this)) {
                if (!a9(this.Wb).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        a9(this.Wb).Kc() ? this.Wb.pause() : this.Wb.play();
                        break;
                    case "control_play":
                        this.Wb.play();
                        break;
                    case "control_pause":
                        this.Wb.pause();
                        break;
                    case "control_seek":
                        this.J.nE(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        K9(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.G.getCurrentTime();
                    L9(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    L9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    K9(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.rY = function(a) {
        this.N.QS(a)
    };
    g.k.o1 = function(a) {
        this.Lk("control_subtitles_set_track", g.Se(a) ? null : a)
    };
    g.k.AR = function() {
        var a = this.G.getOption("captions", "track");
        g.Se(a) || K9(this, a)
    };
    g.k.Sb = function(a) {
        this.u.Sb(a, this.G.getVideoData().lengthSeconds)
    };
    g.k.ZY = function() {
        g.Se(this.C) || $4a(this, this.C);
        this.D = !1
    };
    g.k.gQ = function(a, b) {
        this.B.stop();
        2 === b && this.tR()
    };
    g.k.Yy = function() {
        if (J9(this)) {
            this.j.stop();
            var a = a9(this.Wb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.hg = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.hg = 0;
                    break;
                default:
                    this.u.hg = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Rb(new g.zF(8));
                    this.sR();
                    break;
                case 1085:
                case 3:
                    this.Rb(new g.zF(9));
                    break;
                case 1083:
                case 0:
                    this.Rb(new g.zF(2));
                    this.J.stop();
                    this.Sb(this.G.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Rb(new g.zF(4));
                    break;
                case 2:
                    this.Rb(new g.zF(4));
                    this.Sb(W8(a));
                    break;
                case -1:
                    this.Rb(new g.zF(64));
                    break;
                case -1E3:
                    this.Rb(new g.zF(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        mB: 2
                    }))
            }
            a = a9(this.Wb).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, $4a(this, a));
            a = a9(this.Wb); - 1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.V.isActive() || this.cS()
        } else Z4a(this)
    };
    g.k.dQ = function() {
        this.G.X("mdxpreviousnextchange")
    };
    g.k.KC = function() {
        J9(this) || Z4a(this)
    };
    g.k.XP = function(a) {
        isNaN(a) || this.G.X("mdxnowautoplaying", a)
    };
    g.k.BP = function() {
        this.G.X("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        J9(this) && this.Wb.setAudioTrack(this.G.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === a9(this.Wb).playerState ? L9(this, a) : b && this.Wb.seekTo(a)
    };
    g.k.cS = function() {
        var a = this;
        if (J9(this)) {
            var b = a9(this.Wb);
            this.events.vc(this.W);
            b.muted ? this.G.mute() : this.G.unMute();
            this.G.setVolume(b.volume);
            this.W = this.events.P(this.G, "onVolumeChange", function(c) {
                Y4a(a, c)
            })
        }
    };
    g.k.sR = function() {
        this.j.stop();
        if (!this.Wb.isDisposed()) {
            var a = a9(this.Wb);
            a.Kc() && this.Rb(new g.zF(8));
            this.Sb(W8(a));
            this.j.start()
        }
    };
    g.k.tR = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Wb.Ap();
        2 == this.Wb.B && !isNaN(a) && this.B.start()
    };
    g.k.Rb = function(a) {
        this.B.stop();
        var b = this.I;
        if (!g.EF(b, a)) {
            var c = g.V(a, 2);
            c !== g.V(this.I, 2) && this.G.Sv(c);
            this.I = a;
            b5a(this.u, b, a)
        }
    };
    g.w(M9, g.W);
    M9.prototype.td = function() {
        this.j.show()
    };
    M9.prototype.Gb = function() {
        this.j.hide()
    };
    M9.prototype.u = function() {
        q6("mdx-privacy-popup-cancel");
        this.Gb()
    };
    M9.prototype.B = function() {
        q6("mdx-privacy-popup-confirm");
        this.Gb()
    };
    g.w(N9, g.W);
    N9.prototype.onStateChange = function(a) {
        a5a(this, a.state)
    };
    g.w(O9, g.sM);
    O9.prototype.D = function() {
        var a = this.G.getOption("remote", "receivers");
        a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.gq = g.rc(a, this.j, this), g.tM(this, g.kk(a, this.j)), a = this.G.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.tj(a), this.enable(!0)) : this.enable(!1)
    };
    O9.prototype.j = function(a) {
        return a.key
    };
    O9.prototype.xk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.gq[a].name
    };
    O9.prototype.yg = function(a) {
        g.sM.prototype.yg.call(this, a);
        this.G.setOption("remote", "currentReceiver", this.gq[a]);
        this.jb.Gb()
    };
    g.w(P9, g.WI);
    g.k = P9.prototype;
    g.k.create = function() {
        var a = this.player.S(),
            b = g.dB(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.K("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.K("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.K("enable_cast_short_lived_lounge_token")
        };
        T4a(b, a);
        this.subscriptions.push(g.Dt("yt-remote-before-disconnect", this.pY, this));
        this.subscriptions.push(g.Dt("yt-remote-connection-change", this.MZ, this));
        this.subscriptions.push(g.Dt("yt-remote-receiver-availability-change", this.fQ,
            this));
        this.subscriptions.push(g.Dt("yt-remote-auto-connect", this.KZ, this));
        this.subscriptions.push(g.Dt("yt-remote-receiver-resumed", this.JZ, this));
        this.subscriptions.push(g.Dt("mdx-privacy-popup-confirm", this.Z_, this));
        this.subscriptions.push(g.Dt("mdx-privacy-popup-cancel", this.Y_, this));
        this.fQ()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.WI.prototype.load.call(this);
        this.wj = new I9(this, this.player, this.Wb);
        var a = (a = X4a()) ? a.currentTime : 0;
        var b = F9() ? new $8(z9(), void 0) : null;
        0 == a && b && (a = W8(a9(b)));
        0 !== a && this.Sb(a);
        b5a(this, this.Rd, this.Rd);
        this.player.Km(6)
    };
    g.k.unload = function() {
        this.player.X("mdxautoplaycanceled");
        this.ap = this.Dm;
        g.Ae(this.wj, this.Wb);
        this.Wb = this.wj = null;
        g.WI.prototype.unload.call(this);
        this.player.Km(5);
        Q9(this)
    };
    g.k.ea = function() {
        g.Et(this.subscriptions);
        g.WI.prototype.ea.call(this)
    };
    g.k.Em = function(a) {
        var b = g.Ea.apply(1, arguments);
        this.loaded && this.wj.Lk.apply(this.wj, [a].concat(g.v(b)))
    };
    g.k.getAdState = function() {
        return this.hg
    };
    g.k.tm = function() {
        return this.Wb ? a9(this.Wb).tm : !1
    };
    g.k.hasNext = function() {
        return this.Wb ? a9(this.Wb).hasNext : !1
    };
    g.k.Sb = function(a, b) {
        this.OO = a || 0;
        this.player.X("progresssync", a, b);
        this.player.La("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.OO
    };
    g.k.getProgressState = function() {
        var a = a9(this.Wb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.S().K("web_player_mdx_allow_seeking_change_killswitch") ? this.player.Qf() : !a.isAdPlaying() && this.player.Qf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + U8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + U8(a) : a.j) - this.getCurrentTime(),
            loaded: a.N,
            seekableEnd: a.u ? a.j + U8(a) : a.j,
            seekableStart: 0 <
                a.C ? a.C + U8(a) : a.C
        }
    };
    g.k.nextVideo = function() {
        this.Wb && this.Wb.nextVideo()
    };
    g.k.XC = function() {
        this.Wb && this.Wb.XC()
    };
    g.k.pY = function(a) {
        1 === a && (this.NI = this.Wb ? a9(this.Wb) : null)
    };
    g.k.MZ = function() {
        var a = F9() ? new $8(z9(), void 0) : null;
        if (a) {
            var b = this.ap;
            this.loaded && this.unload();
            this.Wb = a;
            this.NI = null;
            b.key !== this.Dm.key && (this.ap = b, this.load())
        } else g.ze(this.Wb), this.Wb = null, this.loaded && (this.unload(), (a = this.NI) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, W8(a)));
        this.player.X("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.fQ = function() {
        var a = [this.Dm],
            b = a.concat,
            c = U4a();
        O8() && g.$u("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.gq = b.call(a, c);
        a = A9() || this.Dm;
        R9(this, a);
        this.player.La("onMdxReceiversChange")
    };
    g.k.KZ = function() {
        var a = A9();
        R9(this, a)
    };
    g.k.JZ = function() {
        this.ap = A9()
    };
    g.k.Z_ = function() {
        this.jz = !0;
        Q9(this);
        H9 = !1;
        B9 && D9(B9, 1);
        B9 = null
    };
    g.k.Y_ = function() {
        this.jz = !1;
        Q9(this);
        R9(this, this.Dm);
        this.ap = this.Dm;
        H9 = !1;
        B9 = null;
        this.player.playVideo()
    };
    g.k.Zf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.gq;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Q8() : R9(this, b)), this.loaded ? this.ap : this.Dm;
            case "quickCast":
                return 2 === this.gq.length && "cast-selector-receiver" === this.gq[1].key ? (b && Q8(), !0) : !1
        }
    };
    g.k.RJ = function() {
        this.Wb.RJ()
    };
    g.k.hj = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.VI("remote", P9);
})(_yt_player);