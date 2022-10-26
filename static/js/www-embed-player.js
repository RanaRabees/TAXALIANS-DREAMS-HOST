(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var l;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this);

    function n(a, b) {
        if (b) a: {
            var c = ea;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    n("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.i = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.i
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    n("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });

    function fa(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function p(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ha(a) {
        if (!(a instanceof Array)) {
            a = p(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function ia(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ja = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ia(d, e) && (a[e] = d[e])
        }
        return a
    };
    n("Object.assign", function(a) {
        return a || ja
    });
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if ("undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = ka(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function r(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Z = b.prototype
    }

    function ra() {
        this.C = !1;
        this.o = null;
        this.j = void 0;
        this.i = 1;
        this.m = this.s = 0;
        this.v = this.l = null
    }

    function sa(a) {
        if (a.C) throw new TypeError("Generator is already running");
        a.C = !0
    }
    ra.prototype.O = function(a) {
        this.j = a
    };

    function ta(a, b) {
        a.l = {
            Qb: b,
            Wb: !0
        };
        a.i = a.s || a.m
    }
    ra.prototype.return = function(a) {
        this.l = {
            return: a
        };
        this.i = this.m
    };

    function v(a, b, c) {
        a.i = c;
        return {
            value: b
        }
    }
    ra.prototype.u = function(a) {
        this.i = a
    };

    function ua(a, b, c) {
        a.s = b;
        void 0 != c && (a.m = c)
    }

    function va(a, b) {
        a.i = b;
        a.s = 0
    }

    function wa(a) {
        a.s = 0;
        var b = a.l.Qb;
        a.l = null;
        return b
    }

    function xa(a) {
        a.v = [a.l];
        a.s = 0;
        a.m = 0
    }

    function Aa(a) {
        var b = a.v.splice(0)[0];
        (b = a.l = a.l || b) ? b.Wb ? a.i = a.s || a.m : void 0 != b.u && a.m < b.u ? (a.i = b.u, a.l = null) : a.i = a.m: a.i = 0
    }

    function Ba(a) {
        this.i = new ra;
        this.j = a
    }

    function Ca(a, b) {
        sa(a.i);
        var c = a.i.o;
        if (c) return Da(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.i.return);
        a.i.return(b);
        return Ea(a)
    }

    function Da(a, b, c, d) {
        try {
            var e = b.call(a.i.o, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.i.C = !1, e;
            var f = e.value
        } catch (g) {
            return a.i.o = null, ta(a.i, g), Ea(a)
        }
        a.i.o = null;
        d.call(a.i, f);
        return Ea(a)
    }

    function Ea(a) {
        for (; a.i.i;) try {
            var b = a.j(a.i);
            if (b) return a.i.C = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.i.j = void 0, ta(a.i, c)
        }
        a.i.C = !1;
        if (a.i.l) {
            b = a.i.l;
            a.i.l = null;
            if (b.Wb) throw b.Qb;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ga(a) {
        this.next = function(b) {
            sa(a.i);
            a.i.o ? b = Da(a, a.i.o.next, b, a.i.O) : (a.i.O(b), b = Ea(a));
            return b
        };
        this.throw = function(b) {
            sa(a.i);
            a.i.o ? b = Da(a, a.i.o["throw"], b, a.i.O) : (ta(a.i, b), b = Ea(a));
            return b
        };
        this.return = function(b) {
            return Ca(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Ha(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function w(a) {
        return Ha(new Ga(new Ba(a)))
    }

    function Ia() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    n("Reflect", function(a) {
        return a ? a : {}
    });
    n("Reflect.construct", function() {
        return la
    });
    n("Reflect.setPrototypeOf", function(a) {
        return a ? a : qa ? function(b, c) {
            try {
                return qa(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    n("Promise", function(a) {
        function b(g) {
            this.i = 0;
            this.l = void 0;
            this.j = [];
            this.C = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.i = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.j = function(g) {
            if (null == this.i) {
                this.i = [];
                var h = this;
                this.l(function() {
                    h.m()
                })
            }
            this.i.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.l = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.i && this.i.length;) {
                var g = this.i;
                this.i = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.o(m)
                    }
                }
            }
            this.i = null
        };
        c.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        b.prototype.o = function() {
            function g(m) {
                return function(q) {
                    k || (k = !0, m.call(h, q))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.K),
                reject: g(this.m)
            }
        };
        b.prototype.K = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.R(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.G(g) : this.s(g)
            }
        };
        b.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.T(h, g) : this.s(g)
        };
        b.prototype.m = function(g) {
            this.O(2, g)
        };
        b.prototype.s = function(g) {
            this.O(1, g)
        };
        b.prototype.O = function(g, h) {
            if (0 != this.i) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.i);
            this.i = g;
            this.l = h;
            2 === this.i && this.P();
            this.v()
        };
        b.prototype.P = function() {
            var g = this;
            e(function() {
                if (g.B()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        };
        b.prototype.B = function() {
            if (this.C) return !1;
            var g = ea.CustomEvent,
                h = ea.Event,
                k = ea.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        b.prototype.v = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
                this.j = null
            }
        };
        var f = new c;
        b.prototype.R = function(g) {
            var h = this.o();
            g.Ua(h.resolve, h.reject)
        };
        b.prototype.T = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        };
        b.prototype.then = function(g, h) {
            function k(x, u) {
                return "function" == typeof x ? function(A) {
                    try {
                        m(x(A))
                    } catch (D) {
                        q(D)
                    }
                } : u
            }
            var m, q, t = new b(function(x, u) {
                m = x;
                q = u
            });
            this.Ua(k(g, m), k(h, q));
            return t
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Ua = function(g, h) {
            function k() {
                switch (m.i) {
                    case 1:
                        g(m.l);
                        break;
                    case 2:
                        h(m.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.i);
                }
            }
            var m = this;
            null == this.j ? f.j(k) : this.j.push(k);
            this.C = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var m = p(g), q = m.next(); !q.done; q = m.next()) d(q.value).Ua(h, k)
            })
        };
        b.all = function(g) {
            var h = p(g),
                k = h.next();
            return k.done ? d([]) : new b(function(m, q) {
                function t(A) {
                    return function(D) {
                        x[A] = D;
                        u--;
                        0 == u && m(x)
                    }
                }
                var x = [],
                    u = 0;
                do x.push(void 0), u++, d(k.value).Ua(t(x.length - 1), q), k = h.next(); while (!k.done)
            })
        };
        return b
    });
    n("WeakMap", function(a) {
        function b(k) {
            this.i = (h += Math.random() + 1).toString();
            if (k) {
                k = p(k);
                for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {}

        function d(k) {
            var m = typeof k;
            return "object" === m && null !== k || "function" === m
        }

        function e(k) {
            if (!ia(k, g)) {
                var m = new c;
                ba(k, g, {
                    value: m
                })
            }
        }

        function f(k) {
            var m = Object[k];
            m && (Object[k] = function(q) {
                if (q instanceof c) return q;
                Object.isExtensible(q) && e(q);
                return m(q)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        m = Object.seal({}),
                        q = new a([
                            [k, 2],
                            [m, 3]
                        ]);
                    if (2 != q.get(k) || 3 != q.get(m)) return !1;
                    q.delete(k);
                    q.set(m, 4);
                    return !q.has(k) && 4 == q.get(m)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, m) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!ia(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.i] = m;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && ia(k, g) ? k[g][this.i] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && ia(k, g) && ia(k[g], this.i)
        };
        b.prototype.delete = function(k) {
            return d(k) && ia(k, g) && ia(k[g], this.i) ? delete k[g][this.i] : !1
        };
        return b
    });
    n("Map", function(a) {
        function b() {
            var h = {};
            return h.previous = h.next = h.head = h
        }

        function c(h, k) {
            var m = h.i;
            return fa(function() {
                if (m) {
                    for (; m.head != h.i;) m = m.previous;
                    for (; m.next != m.head;) return m = m.next, {
                        done: !1,
                        value: k(m)
                    };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var m = k && typeof k;
            "object" == m || "function" == m ? f.has(k) ? m = f.get(k) : (m = "" + ++g, f.set(k, m)) : m = "p_" + k;
            var q = h.data_[m];
            if (q && ia(h.data_, m))
                for (h = 0; h < q.length; h++) {
                    var t = q[h];
                    if (k !== k && t.key !== t.key || k === t.key) return {
                        id: m,
                        list: q,
                        index: h,
                        entry: t
                    }
                }
            return {
                id: m,
                list: q,
                index: -1,
                entry: void 0
            }
        }

        function e(h) {
            this.data_ = {};
            this.i = b();
            this.size = 0;
            if (h) {
                h = p(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(p([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var m = k.entries(),
                        q = m.next();
                    if (q.done || q.value[0] != h || "s" != q.value[1]) return !1;
                    q = m.next();
                    return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this.data_[m.id] = []);
            m.entry ? m.entry.value = k : (m.entry = {
                next: this.i,
                previous: this.i.previous,
                head: this.i,
                key: h,
                value: k
            }, m.list.push(m.entry), this.i.previous.next = m.entry, this.i.previous = m.entry, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.data_ = {};
            this.i = this.i.previous = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).entry
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).entry) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var m = this.entries(), q; !(q = m.next()).done;) q = q.value, h.call(k, q[1], q[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });

    function Ja(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    n("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ja(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    n("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    n("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ja(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    n("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    n("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    n("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });

    function Ka(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    n("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ka(this, function(b, c) {
                return [b, c]
            })
        }
    });
    n("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    n("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ka(this, function(b) {
                return b
            })
        }
    });
    n("Set", function(a) {
        function b(c) {
            this.i = new Map;
            if (c) {
                c = p(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.i.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(p([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.i.set(c, c);
            this.size = this.i.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.i.delete(c);
            this.size = this.i.size;
            return c
        };
        b.prototype.clear = function() {
            this.i.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.i.has(c)
        };
        b.prototype.entries = function() {
            return this.i.entries()
        };
        b.prototype.values = function() {
            return this.i.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.i.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    n("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ka(this, function(b, c) {
                return c
            })
        }
    });
    n("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    n("Object.setPrototypeOf", function(a) {
        return a || qa
    });
    n("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    n("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    n("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ja(this, b, "includes").indexOf(b, c || 0)
        }
    });
    n("globalThis", function(a) {
        return a || ea
    });
    n("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    n("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push(b[d]);
            return c
        }
    });
    var La = La || {},
        y = this || self;

    function z(a, b, c) {
        a = a.split(".");
        c = c || y;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function B(a, b) {
        a = a.split(".");
        b = b || y;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Ma(a) {
        a.sb = void 0;
        a.getInstance = function() {
            return a.sb ? a.sb : a.sb = new a
        }
    }

    function Na(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Oa(a) {
        var b = Na(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Pa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Qa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ra) && a[Ra] || (a[Ra] = ++Sa)
    }
    var Ra = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Sa = 0;

    function Ua(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Va(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Wa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Wa = Ua : Wa = Va;
        return Wa.apply(null, arguments)
    }

    function Xa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ya(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Z = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.aq = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Za(a) {
        return a
    };

    function $a(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, $a);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.zc = b)
    }
    Ya($a, Error);
    $a.prototype.name = "CustomError";

    function ab(a) {
        a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.l = !b && /[?&]ae=1(&|$)/.test(a);
        this.o = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.i = /[?&]adurl=([^&]*)/.exec(a)) && this.i[1]) {
            try {
                var c = decodeURIComponent(this.i[1])
            } catch (d) {
                c = null
            }
            this.j = c
        }
    };

    function bb() {}

    function cb(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var db = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        eb = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        fb = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        gb = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        hb = Array.prototype.reduce ? function(a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c) {
            var d = c;
            eb(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        };

    function ib(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function jb(a, b) {
        b = db(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function kb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Oa(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    };

    function lb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function mb(a) {
        var b = nb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function ob(a) {
        for (var b in a) return !1;
        return !0
    }

    function pb(a, b) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = !0
    }

    function qb(a) {
        return null !== a && "privembed" in a ? a.privembed : !1
    }

    function rb(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    }

    function sb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }

    function tb(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = tb(a[c]);
        return b
    }
    var ub = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function vb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ub.length; f++) c = ub[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var wb;

    function xb() {
        if (void 0 === wb) {
            var a = null,
                b = y.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Za,
                        createScript: Za,
                        createScriptURL: Za
                    })
                } catch (c) {
                    y.console && y.console.error(c.message)
                }
                wb = a
            } else wb = a
        }
        return wb
    };

    function yb(a, b) {
        this.l = a === zb && b || ""
    }
    yb.prototype.j = !0;
    yb.prototype.i = function() {
        return this.l
    };

    function Cb(a) {
        return new yb(zb, a)
    }
    var zb = {};
    Cb("");
    var Db = {};

    function Eb(a) {
        this.l = Db === Db ? a : "";
        this.j = !0
    }
    Eb.prototype.toString = function() {
        return this.l.toString()
    };
    Eb.prototype.i = function() {
        return this.l.toString()
    };

    function Fb(a, b) {
        this.l = b === Gb ? a : ""
    }
    Fb.prototype.toString = function() {
        return this.l + ""
    };
    Fb.prototype.j = !0;
    Fb.prototype.i = function() {
        return this.l.toString()
    };

    function Hb(a) {
        if (a instanceof Fb && a.constructor === Fb) return a.l;
        Na(a);
        return "type_error:TrustedResourceUrl"
    }
    var Gb = {};

    function Ib(a) {
        var b = xb();
        a = b ? b.createScriptURL(a) : a;
        return new Fb(a, Gb)
    };
    var Jb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function Kb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Lb(a, b) {
        this.l = b === Mb ? a : ""
    }
    Lb.prototype.toString = function() {
        return this.l.toString()
    };
    Lb.prototype.j = !0;
    Lb.prototype.i = function() {
        return this.l.toString()
    };

    function Nb(a) {
        if (a instanceof Lb && a.constructor === Lb) return a.l;
        Na(a);
        return "type_error:SafeUrl"
    }
    var Ob = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Mb = {},
        Pb = new Lb("about:invalid#zClosurez", Mb);

    function Qb() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function C(a) {
        return -1 != Qb().indexOf(a)
    };

    function Rb() {
        return C("Trident") || C("MSIE")
    }

    function Sb() {
        return C("Firefox") || C("FxiOS")
    }

    function Tb() {
        return C("Safari") && !(Ub() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || Sb() || C("Silk") || C("Android"))
    }

    function Ub() {
        return (C("Chrome") || C("CriOS")) && !C("Edge") || C("Silk")
    }

    function Vb() {
        return C("Android") && !(Ub() || Sb() || C("Opera") || C("Silk"))
    }

    function Wb(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[c.find(function(d) {
                return d in b
            })] || ""
        }
    }

    function Zb(a) {
        var b = Qb();
        if ("Internet Explorer" === a) {
            if (Rb())
                if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
                else {
                    a = "";
                    var c = /MSIE +([\d\.]+)/.exec(b);
                    if (c && c[1])
                        if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == c[1])
                            if (b && b[1]) switch (b[1]) {
                                case "4.0":
                                    a = "8.0";
                                    break;
                                case "5.0":
                                    a = "9.0";
                                    break;
                                case "6.0":
                                    a = "10.0";
                                    break;
                                case "7.0":
                                    a = "11.0"
                            } else a = "7.0";
                            else a = c[1];
                    b = a
                }
            else b = "";
            return b
        }
        var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        c = [];
        for (var e; e = d.exec(b);) c.push([e[1], e[2], e[3] || void 0]);
        b = Wb(c);
        switch (a) {
            case "Opera":
                if (C("Opera")) return b(["Version", "Opera"]);
                if (C("OPR")) return b(["OPR"]);
                break;
            case "Microsoft Edge":
                if (C("Edge")) return b(["Edge"]);
                if (C("Edg/")) return b(["Edg"]);
                break;
            case "Chromium":
                if (Ub()) return b(["Chrome", "CriOS", "HeadlessChrome"])
        }
        return "Firefox" === a && Sb() || "Safari" === a && Tb() || "Android Browser" === a && Vb() || "Silk" === a && C("Silk") ? (b = c[2]) && b[1] || "" : ""
    }

    function $b(a) {
        a = Zb(a);
        if ("" === a) return NaN;
        a = a.split(".");
        return 0 === a.length ? NaN : Number(a[0])
    };
    var ac = {};

    function bc(a) {
        this.l = ac === ac ? a : "";
        this.j = !0
    }
    bc.prototype.i = function() {
        return this.l.toString()
    };
    bc.prototype.toString = function() {
        return this.l.toString()
    };

    function cc(a, b) {
        b instanceof Lb || b instanceof Lb || (b = "object" == typeof b && b.j ? b.i() : String(b), Ob.test(b) || (b = "about:invalid#zClosurez"), b = new Lb(b, Mb));
        a.href = Nb(b)
    }

    function dc(a, b) {
        a.rel = "stylesheet";
        a.href = Hb(b).toString();
        (b = ec('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    }

    function fc() {
        return ec("script[nonce]")
    }
    var gc = /^[\w+/_-]+[=]{0,2}$/;

    function ec(a, b) {
        b = (b || y).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && gc.test(a) ? a : "" : ""
    };

    function hc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    };
    var ic = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function jc(a) {
        return a ? decodeURI(a) : a
    }

    function kc(a, b) {
        return b.match(ic)[a] || null
    }

    function lc(a) {
        return jc(kc(3, a))
    }

    function mc(a) {
        var b = a.match(ic);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function nc(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function oc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) oc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function pc(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) oc(a[b], a[b + 1], c);
        return c.join("&")
    }

    function qc(a) {
        var b = [],
            c;
        for (c in a) oc(c, a[c], b);
        return b.join("&")
    }

    function rc(a, b) {
        var c = 2 == arguments.length ? pc(arguments[1], 0) : pc(arguments, 1);
        return nc(a, c)
    }

    function sc(a, b) {
        b = qc(b);
        return nc(a, b)
    }

    function wc(a, b, c) {
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        return nc(a, b + c)
    }

    function xc(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var yc = /#|$/,
        zc = /[?&]($|#)/;

    function Ac(a, b) {
        for (var c = a.search(yc), d = 0, e, f = []; 0 <= (e = xc(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.slice(d));
        return f.join("").replace(zc, "$1")
    };
    var Bc = {};

    function Cc(a) {
        if (a !== Bc) throw Error("requires a valid immutable API token");
    };

    function Dc() {
        return C("iPhone") && !C("iPod") && !C("iPad")
    }

    function Ec() {
        var a = Qb();
        if (C("Windows")) {
            var b = /Windows (?:NT|Phone) ([0-9.]+)/;
            b.exec(a)
        } else Dc() || C("iPad") || C("iPod") ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, (a = b.exec(a)) && a[1].replace(/_/g, ".")) : C("Macintosh") ? (b = /Mac OS X ([0-9_.]+)/, (a = b.exec(a)) && a[1].replace(/_/g, ".")) : -1 != Qb().toLowerCase().indexOf("kaios") ? (b = /(?:KaiOS)\/(\S+)/i, b.exec(a)) : C("Android") ? (b = /Android\s+([^\);]+)(\)|;)/, b.exec(a)) : C("CrOS") && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b.exec(a))
    };

    function Fc(a) {
        Fc[" "](a);
        return a
    }
    Fc[" "] = function() {};

    function Gc(a) {
        var b = Hc;
        return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
    };
    var Ic = C("Opera"),
        Jc = Rb(),
        Kc = C("Edge"),
        Lc = C("Gecko") && !(-1 != Qb().toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        Mc = -1 != Qb().toLowerCase().indexOf("webkit") && !C("Edge"),
        Nc = C("Android");

    function Oc() {
        var a = y.document;
        return a ? a.documentMode : void 0
    }
    var Pc;
    a: {
        var Qc = "",
            Rc = function() {
                var a = Qb();
                if (Lc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Kc) return /Edge\/([\d\.]+)/.exec(a);
                if (Jc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Mc) return /WebKit\/(\S+)/.exec(a);
                if (Ic) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Rc && (Qc = Rc ? Rc[1] : "");
        if (Jc) {
            var Sc = Oc();
            if (null != Sc && Sc > parseFloat(Qc)) {
                Pc = String(Sc);
                break a
            }
        }
        Pc = Qc
    }
    var Tc = Pc,
        Hc = {};

    function Uc() {
        return Gc(function() {
            for (var a = 0, b = Jb(String(Tc)).split("."), c = Jb("9").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                var f = b[e] || "",
                    g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    a = Kb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Kb(0 == f[2].length, 0 == g[2].length) || Kb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == a)
            }
            return 0 <= a
        })
    }
    var Vc;
    if (y.document && Jc) {
        var Wc = Oc();
        Vc = Wc ? Wc : parseInt(Tc, 10) || void 0
    } else Vc = void 0;
    var Xc = Vc;
    var Yc = Dc() || C("iPod"),
        Zc = C("iPad");
    Vb();
    Ub();
    var $c = Tb() && !(Dc() || C("iPad") || C("iPod"));
    var ad = {},
        bd = null;

    function cd(a, b) {
        Oa(a);
        void 0 === b && (b = 0);
        if (!bd) {
            bd = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                ad[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === bd[h] && (bd[h] = g)
                }
            }
        }
        b = ad[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                m = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | m >> 4];
            m = b[(m & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = "" + g + k + m + h
        }
        g = 0;
        h = d;
        switch (a.length -
            f) {
            case 2:
                g = a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var dd = "undefined" !== typeof Uint8Array,
        ed = {};
    var fd;

    function gd(a) {
        if (ed !== ed) throw Error("illegal external caller");
        this.ka = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    gd.prototype.isEmpty = function() {
        return null == this.ka
    };
    var hd = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function id(a, b) {
        Object.isFrozen(a) || (hd ? a[hd] |= b : void 0 !== a.va ? a.va |= b : Object.defineProperties(a, {
            va: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function jd(a) {
        var b;
        hd ? b = a[hd] : b = a.va;
        return null == b ? 0 : b
    }

    function kd(a) {
        return Array.isArray(a) ? !!(jd(a) & 1) : !1
    }

    function ld(a) {
        id(a, 1);
        return a
    }

    function pd(a) {
        return Array.isArray(a) ? !!(jd(a) & 2) : !1
    }

    function qd(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        id(a, 2)
    }

    function rd(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? id(a, 8) : Object.isFrozen(a) || (hd ? a[hd] &= -9 : void 0 !== a.va && (a.va &= -9))
    };

    function sd(a) {
        return pd(a.J)
    }

    function td(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ud, vd = Object.freeze(ld([]));

    function wd(a) {
        if (sd(a)) throw Error("Cannot mutate an immutable Message");
    }
    var xd = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

    function yd(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function zd(a) {
        y.setTimeout(function() {
            throw a;
        }, 0)
    };

    function Ad(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Bd(a, b) {
        a instanceof b || zd(Error("Expected instanceof " + Ad(b) + " but got " + (a && Ad(a.constructor))));
        return a
    }

    function Cd(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };

    function Dd(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (dd && null != a && a instanceof Uint8Array) return cd(a);
                    if (a instanceof gd) {
                        var b = a.ka;
                        null != b && "string" !== typeof b && (dd && b instanceof Uint8Array ? b = cd(b) : (Na(b), b = null));
                        return null == b ? "" : a.ka = b
                    }
                }
        }
        return a
    };

    function Ed(a, b) {
        b = void 0 === b ? Fd : b;
        return Gd(a, b)
    }

    function Hd(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Gd(a, b);
            else if (td(a)) {
                var c = {},
                    d;
                for (d in a) c[d] = Hd(a[d], b);
                a = c
            } else a = b(a);
            return a
        }
    }

    function Gd(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Hd(c[d], b);
        kd(a) && ld(c);
        return c
    }

    function Id(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Dd(a);
        return Array.isArray(a) ? Ed(a, Id) : a
    }

    function Fd(a) {
        return dd && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };

    function Jd(a) {
        return a.j || (a.j = a.J[a.l + a.sa] = {})
    }

    function Kd(a, b, c) {
        return -1 === b ? null : b >= a.l ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.J[b + a.sa]
    }

    function E(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || wd(a);
        b < a.l && !d ? a.J[b + a.sa] = c : Jd(a)[b] = c;
        return a
    }

    function Ld(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        var e = Kd(a, b, d);
        Array.isArray(e) || (e = vd);
        if (sd(a)) c && (qd(e), Object.freeze(e));
        else if (e === vd || pd(e)) e = ld(e.slice()), E(a, b, e, d);
        return e
    }

    function Md(a, b, c) {
        a = Kd(a, b);
        return null == a ? c : a
    }

    function Nd(a, b, c) {
        null == c ? c = vd : ld(c);
        return E(a, b, c)
    }

    function Od(a, b, c, d) {
        wd(a);
        (c = Pd(a, c)) && c !== b && null != d && (a.i && c in a.i && (a.i[c] = void 0), E(a, c));
        return E(a, b, d)
    }

    function Pd(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != Kd(a, e) && (0 !== c && E(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function Qd(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = e;
        if (-1 === c) d = null;
        else {
            a.i || (a.i = {});
            var g = a.i[c];
            if (g) d = g;
            else {
                var h = Kd(a, c, f);
                b = Cd(h, b, d);
                void 0 == b ? d = g : (d && b.J !== h && E(a, c, b.J, f, !0), a.i[c] = b, sd(a) && qd(b.J), d = b)
            }
        }
        if (null == d) return d;
        sd(d) && !sd(a) && (d = d.Ab(Bc), E(a, c, d.J, e), a.i[c] = d);
        return d
    }

    function Rd(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        a.i || (a.i = {});
        var f = sd(a),
            g = a.i[c];
        d = Ld(a, c, !0, d);
        var h = f || pd(d);
        if (!g) {
            g = [];
            f = f || h;
            for (var k = 0; k < d.length; k++) {
                var m = d[k];
                f = f || pd(m);
                m = Cd(m, b);
                void 0 !== m && (g.push(m), h && qd(m.J))
            }
            a.i[c] = g;
            rd(d, !f)
        }
        b = h || e;
        e = pd(g);
        b && !e && (Object.isFrozen(g) && (a.i[c] = g = g.slice()), qd(g), Object.freeze(g));
        !b && e && (a.i[c] = g = g.slice());
        return g
    }

    function Sd(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = sd(a);
        b = Rd(a, b, c, d, e);
        a = Ld(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
            c = !(jd(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && sd(d) && !e && (b[c] = b[c].Ab(Bc), a[c] = b[c].J);
            rd(a, !0)
        }
        return b
    }

    function G(a, b, c, d) {
        wd(a);
        a.i || (a.i = {});
        b = null != d ? Bd(d, b).J : d;
        a.i[c] = d;
        return E(a, c, b)
    }

    function Td(a, b, c, d, e) {
        wd(a);
        a.i || (a.i = {});
        b = null != e ? Bd(e, b).J : e;
        a.i[c] = e;
        Od(a, c, d, b)
    }

    function Ud(a, b, c, d) {
        wd(a);
        if (null != d) {
            var e = ld([]);
            for (var f = !1, g = 0; g < d.length; g++) e[g] = Bd(d[g], b).J, f = f || pd(e[g]);
            a.i || (a.i = {});
            a.i[c] = d;
            rd(e, !f)
        } else a.i && (a.i[c] = void 0), e = vd;
        return E(a, c, e)
    }

    function Vd(a, b, c, d) {
        wd(a);
        var e = Rd(a, c, b, void 0, !1);
        c = null != d ? Bd(d, c) : new c;
        a = Ld(a, b);
        e.push(c);
        a.push(c.J);
        Cc(Bc);
        sd(c) && rd(a, !1)
    };

    function Wd(a, b, c) {
        a || (a = Xd);
        Xd = null;
        var d = this.constructor.j;
        a || (a = d ? [d] : []);
        this.sa = (d ? 0 : -1) - (this.constructor.i || 0);
        this.i = void 0;
        this.J = a;
        a: {
            d = this.J.length;a = d - 1;
            if (d && (d = this.J[a], td(d))) {
                this.l = a - this.sa;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.sa), this.j = void 0) : this.l = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.l) a += this.sa, (d = this.J[a]) ? Array.isArray(d) && ld(d) : this.J[a] = vd;
                else {
                    d = Jd(this);
                    var e = d[a];
                    e ? Array.isArray(e) && ld(e) : d[a] = vd
                }
    }
    Wd.prototype.toJSON = function() {
        var a = this.J;
        return ud ? a : Ed(a, Id)
    };

    function Yd(a) {
        ud = !0;
        try {
            return JSON.stringify(a.toJSON(), Zd)
        } finally {
            ud = !1
        }
    }
    Wd.prototype.clone = function() {
        var a = Ed(this.J);
        Xd = a;
        a = new this.constructor(a);
        Xd = null;
        $d(a, this);
        return a
    };
    Wd.prototype.isMutable = function(a) {
        Cc(a);
        return !sd(this)
    };
    Wd.prototype.toString = function() {
        return this.J.toString()
    };

    function Zd(a, b) {
        return Dd(b)
    }

    function $d(a, b) {
        b.Ia && (a.Ia = b.Ia.slice());
        var c = b.i;
        if (c) {
            b = b.j;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]),
                        g = +d;
                    if (Array.isArray(e)) {
                        if (e.length)
                            for (f = Sd(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) $d(f[g], e[g])
                    } else(f = Qd(a, e.constructor, g, void 0, f)) && $d(f, e)
                }
            }
        }
    }
    var Xd;

    function ae() {
        Wd.apply(this, arguments)
    }
    r(ae, Wd);
    ae.prototype.Ab = function() {
        return this
    };
    if (xd) {
        var be = {};
        Object.defineProperties(ae, (be[Symbol.hasInstance] = yd(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), be))
    };

    function ce(a) {
        var b = this.i,
            c = this.j;
        return this.isRepeated ? Sd(a, b, c, !0) : Qd(a, b, c, void 0, !0)
    };

    function de(a, b, c, d, e, f) {
        (a = a.i && a.i[c]) ? Array.isArray(a) ? (e = f.jb ? ld(a.slice()) : a, Ud(b, 0 < e.length ? e[0].constructor : void 0, c, e)) : G(b, a.constructor, c, a): (dd && d instanceof Uint8Array ? e = d.length ? new gd(new Uint8Array(d)) : fd || (fd = new gd(null)) : (Array.isArray(d) && (e ? qd(d) : kd(d) && f.jb && (d = d.slice())), e = d), E(b, c, e))
    };

    function I() {
        ae.apply(this, arguments)
    }
    r(I, ae);
    I.prototype.Ab = function(a) {
        Cc(a);
        if (sd(this)) {
            a = {
                jb: !0
            };
            var b = sd(this);
            if (b && !a.jb) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            this.Ia && (c.Ia = this.Ia.slice());
            for (var d = this.J, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && td(f))
                    for (h in f) {
                        var g = +h;
                        Number.isNaN(g) ? Jd(c)[h] = f[h] : de(this, c, g, f[h], b, a)
                    } else de(this, c, e - this.sa, f, b, a)
            }
            var h = c
        } else h = this;
        return h
    };
    if (xd) {
        var ee = {};
        Object.defineProperties(I, (ee[Symbol.hasInstance] = yd(Object[Symbol.hasInstance]), ee))
    };

    function fe(a) {
        this.Jb = a
    };

    function ge(a, b, c) {
        this.j = a;
        this.o = b;
        this.i = c || [];
        this.ya = new Map
    }
    l = ge.prototype;
    l.vc = function(a) {
        var b = Ia.apply(1, arguments),
            c = this.mb(b);
        c ? c.push(new fe(a)) : this.kc(a, b)
    };
    l.kc = function(a) {
        this.ya.set(this.Rb(Ia.apply(1, arguments)), [new fe(a)])
    };
    l.mb = function() {
        var a = this.Rb(Ia.apply(0, arguments));
        return this.ya.has(a) ? this.ya.get(a) : void 0
    };
    l.Ic = function() {
        var a = this.mb(Ia.apply(0, arguments));
        return a && a.length ? a[0] : void 0
    };
    l.clear = function() {
        this.ya.clear()
    };
    l.Rb = function() {
        var a = Ia.apply(0, arguments);
        return a ? a.join(",") : "key"
    };

    function he(a, b) {
        ge.call(this, a, 3, b)
    }
    r(he, ge);
    he.prototype.l = function(a) {
        var b = Ia.apply(1, arguments),
            c = 0,
            d = this.Ic(b);
        d && (c = d.Jb);
        this.kc(c + a, b)
    };

    function ie(a, b) {
        ge.call(this, a, 2, b)
    }
    r(ie, ge);
    ie.prototype.l = function(a) {
        this.vc(a, Ia.apply(1, arguments))
    };

    function je(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };

    function ke(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            Oa(d) ? ke.apply(null, d) : je(d)
        }
    };

    function J() {
        this.O = this.O;
        this.C = this.C
    }
    J.prototype.O = !1;
    J.prototype.i = function() {
        return this.O
    };
    J.prototype.dispose = function() {
        this.O || (this.O = !0, this.D())
    };

    function le(a, b) {
        me(a, Xa(je, b))
    }

    function me(a, b) {
        a.O ? b() : (a.C || (a.C = []), a.C.push(b))
    }
    J.prototype.D = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };

    function ne(a, b) {
        this.type = a;
        this.i = this.target = b;
        this.defaultPrevented = this.l = !1
    }
    ne.prototype.stopPropagation = function() {
        this.l = !0
    };
    ne.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };

    function oe(a) {
        var b = B("window.location.href");
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c = !1;
        try {
            var d = a.lineNumber || a.line || "Not available"
        } catch (g) {
            d = "Not available", c = !0
        }
        try {
            var e = a.fileName || a.filename || a.sourceURL || y.$googDebugFname || b
        } catch (g) {
            e = "Not available", c = !0
        }
        b = pe(a);
        if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
            c = a.message;
            if (null ==
                c) {
                if (a.constructor && a.constructor instanceof Function) {
                    if (a.constructor.name) c = a.constructor.name;
                    else if (c = a.constructor, qe[c]) c = qe[c];
                    else {
                        c = String(c);
                        if (!qe[c]) {
                            var f = /function\s+([^\(]+)/m.exec(c);
                            qe[c] = f ? f[1] : "[Anonymous]"
                        }
                        c = qe[c]
                    }
                    c = 'Unknown Error of type "' + c + '"'
                } else c = "Unknown Error of unknown type";
                "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
            }
            return {
                message: c,
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: b || "Not available"
            }
        }
        a.stack =
            b;
        return {
            message: a.message,
            name: a.name,
            lineNumber: a.lineNumber,
            fileName: a.fileName,
            stack: a.stack
        }
    }

    function pe(a, b) {
        b || (b = {});
        b[re(a)] = !0;
        var c = a.stack || "";
        (a = a.zc) && !b[re(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += pe(a, b));
        return c
    }

    function re(a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack
    }
    var qe = {};
    var se = function() {
        if (!y.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            y.addEventListener("test", function() {}, b), y.removeEventListener("test", function() {}, b)
        } catch (c) {}
        return a
    }();

    function te(a, b) {
        ne.call(this, a ? a.type : "");
        this.relatedTarget = this.i = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.j = null;
        a && this.init(a, b)
    }
    Ya(te, ne);
    var xe = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    te.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.i = b;
        if (b = a.relatedTarget) {
            if (Lc) {
                a: {
                    try {
                        Fc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
            0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : xe[a.pointerType] || "";
        this.state = a.state;
        this.j = a;
        a.defaultPrevented && te.Z.preventDefault.call(this)
    };
    te.prototype.stopPropagation = function() {
        te.Z.stopPropagation.call(this);
        this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = !0
    };
    te.prototype.preventDefault = function() {
        te.Z.preventDefault.call(this);
        var a = this.j;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var ye = "closure_listenable_" + (1E6 * Math.random() | 0);
    var ze = 0;

    function Ae(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Xa = e;
        this.key = ++ze;
        this.Ka = this.Ta = !1
    }

    function Be(a) {
        a.Ka = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Xa = null
    };

    function Ce(a) {
        this.src = a;
        this.listeners = {};
        this.i = 0
    }
    Ce.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.i++);
        var g = De(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ta = !1)) : (b = new Ae(b, this.src, f, !!d, e), b.Ta = c, a.push(b));
        return b
    };
    Ce.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = De(e, b, c, d);
        return -1 < b ? (Be(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.i--), !0) : !1
    };

    function Ee(a, b) {
        var c = b.type;
        c in a.listeners && jb(a.listeners[c], b) && (Be(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.i--))
    }

    function De(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ka && f.listener == b && f.capture == !!c && f.Xa == d) return e
        }
        return -1
    };
    var Fe = "closure_lm_" + (1E6 * Math.random() | 0),
        Ge = {},
        He = 0;

    function Ie(a, b, c, d, e) {
        if (d && d.once) Je(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ie(a, b[f], c, d, e);
        else c = Ke(c), a && a[ye] ? a.W(b, c, Pa(d) ? !!d.capture : !!d, e) : Le(a, b, c, !1, d, e)
    }

    function Le(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Pa(e) ? !!e.capture : !!e,
            h = Me(a);
        h || (a[Fe] = h = new Ce(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = Ne();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) se || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Oe(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            He++
        }
    }

    function Ne() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Pe;
        return a
    }

    function Je(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Je(a, b[f], c, d, e);
        else c = Ke(c), a && a[ye] ? a.o.add(String(b), c, !0, Pa(d) ? !!d.capture : !!d, e) : Le(a, b, c, !0, d, e)
    }

    function Qe(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Qe(a, b[f], c, d, e);
        else(d = Pa(d) ? !!d.capture : !!d, c = Ke(c), a && a[ye]) ? a.o.remove(String(b), c, d, e) : a && (a = Me(a)) && (b = a.listeners[b.toString()], a = -1, b && (a = De(b, c, d, e)), (c = -1 < a ? b[a] : null) && Re(c))
    }

    function Re(a) {
        if ("number" !== typeof a && a && !a.Ka) {
            var b = a.src;
            if (b && b[ye]) Ee(b.o, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Oe(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                He--;
                (c = Me(b)) ? (Ee(c, a), 0 == c.i && (c.src = null, b[Fe] = null)) : Be(a)
            }
        }
    }

    function Oe(a) {
        return a in Ge ? Ge[a] : Ge[a] = "on" + a
    }

    function Pe(a, b) {
        if (a.Ka) a = !0;
        else {
            b = new te(b, this);
            var c = a.listener,
                d = a.Xa || a.src;
            a.Ta && Re(a);
            a = c.call(d, b)
        }
        return a
    }

    function Me(a) {
        a = a[Fe];
        return a instanceof Ce ? a : null
    }
    var Se = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ke(a) {
        if ("function" === typeof a) return a;
        a[Se] || (a[Se] = function(b) {
            return a.handleEvent(b)
        });
        return a[Se]
    };

    function Te() {
        J.call(this);
        this.o = new Ce(this);
        this.sc = this;
        this.la = null
    }
    Ya(Te, J);
    Te.prototype[ye] = !0;
    Te.prototype.addEventListener = function(a, b, c, d) {
        Ie(this, a, b, c, d)
    };
    Te.prototype.removeEventListener = function(a, b, c, d) {
        Qe(this, a, b, c, d)
    };

    function Ue(a, b) {
        var c = a.la;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.la) d.push(c), ++e
        }
        a = a.sc;
        c = b.type || b;
        "string" === typeof b ? b = new ne(b, a) : b instanceof ne ? b.target = b.target || a : (e = b, b = new ne(c, a), vb(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.l && 0 <= f; f--) {
                var g = b.i = d[f];
                e = Ve(g, c, !0, b) && e
            }
        b.l || (g = b.i = a, e = Ve(g, c, !0, b) && e, b.l || (e = Ve(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.l && f < d.length; f++) g = b.i = d[f], e = Ve(g, c, !1, b) && e
    }
    Te.prototype.D = function() {
        Te.Z.D.call(this);
        if (this.o) {
            var a = this.o,
                b = 0,
                c;
            for (c in a.listeners) {
                for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, Be(d[e]);
                delete a.listeners[c];
                a.i--
            }
        }
        this.la = null
    };
    Te.prototype.W = function(a, b, c, d) {
        return this.o.add(String(a), b, !1, c, d)
    };

    function Ve(a, b, c, d) {
        b = a.o.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Ka && g.capture == c) {
                var h = g.listener,
                    k = g.Xa || g.src;
                g.Ta && Ee(a.o, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function We(a, b) {
        this.l = a;
        this.o = b;
        this.j = 0;
        this.i = null
    }
    We.prototype.get = function() {
        if (0 < this.j) {
            this.j--;
            var a = this.i;
            this.i = a.next;
            a.next = null
        } else a = this.l();
        return a
    };

    function Xe(a, b) {
        a.o(b);
        100 > a.j && (a.j++, b.next = a.i, a.i = b)
    };

    function Ye(a, b) {
        return a + Math.random() * (b - a)
    };

    function Ze(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    l = Ze.prototype;
    l.clone = function() {
        return new Ze(this.x, this.y)
    };
    l.equals = function(a) {
        return a instanceof Ze && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    l.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function $e(a, b) {
        this.width = a;
        this.height = b
    }
    l = $e.prototype;
    l.clone = function() {
        return new $e(this.width, this.height)
    };
    l.aspectRatio = function() {
        return this.width / this.height
    };
    l.isEmpty = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function af(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function bf(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    }

    function cf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    var df;

    function ef() {
        var a = y.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
            var e = bf("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Wa(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Rb()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Ib;
                    c.Ib = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Ib: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            y.setTimeout(e, 0)
        }
    };

    function ff() {
        this.j = this.i = null
    }
    ff.prototype.add = function(a, b) {
        var c = gf.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.i = c;
        this.j = c
    };
    ff.prototype.remove = function() {
        var a = null;
        this.i && (a = this.i, this.i = this.i.next, this.i || (this.j = null), a.next = null);
        return a
    };
    var gf = new We(function() {
        return new hf
    }, function(a) {
        return a.reset()
    });

    function hf() {
        this.next = this.scope = this.i = null
    }
    hf.prototype.set = function(a, b) {
        this.i = a;
        this.scope = b;
        this.next = null
    };
    hf.prototype.reset = function() {
        this.next = this.scope = this.i = null
    };
    var jf, kf = !1,
        lf = new ff;

    function mf(a, b) {
        jf || nf();
        kf || (jf(), kf = !0);
        lf.add(a, b)
    }

    function nf() {
        if (y.Promise && y.Promise.resolve) {
            var a = y.Promise.resolve(void 0);
            jf = function() {
                a.then( of )
            }
        } else jf = function() {
            var b = of ;
            "function" !== typeof y.setImmediate || y.Window && y.Window.prototype && !C("Edge") && y.Window.prototype.setImmediate == y.setImmediate ? (df || (df = ef()), df(b)) : y.setImmediate(b)
        }
    }

    function of () {
        for (var a; a = lf.remove();) {
            try {
                a.i.call(a.scope)
            } catch (b) {
                zd(b)
            }
            Xe(gf, a)
        }
        kf = !1
    };

    function pf(a) {
        this.i = 0;
        this.C = void 0;
        this.o = this.j = this.l = null;
        this.m = this.s = !1;
        if (a != bb) try {
            var b = this;
            a.call(void 0, function(c) {
                qf(b, 2, c)
            }, function(c) {
                qf(b, 3, c)
            })
        } catch (c) {
            qf(this, 3, c)
        }
    }

    function rf() {
        this.next = this.context = this.onRejected = this.j = this.i = null;
        this.l = !1
    }
    rf.prototype.reset = function() {
        this.context = this.onRejected = this.j = this.i = null;
        this.l = !1
    };
    var sf = new We(function() {
        return new rf
    }, function(a) {
        a.reset()
    });

    function tf(a, b, c) {
        var d = sf.get();
        d.j = a;
        d.onRejected = b;
        d.context = c;
        return d
    }

    function uf(a) {
        return new pf(function(b, c) {
            c(a)
        })
    }
    pf.prototype.then = function(a, b, c) {
        return vf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    pf.prototype.$goog_Thenable = !0;
    l = pf.prototype;
    l.fb = function(a, b) {
        return vf(this, null, a, b)
    };
    l.catch = pf.prototype.fb;
    l.cancel = function(a) {
        if (0 == this.i) {
            var b = new wf(a);
            mf(function() {
                xf(this, b)
            }, this)
        }
    };

    function xf(a, b) {
        if (0 == a.i)
            if (a.l) {
                var c = a.l;
                if (c.j) {
                    for (var d = 0, e = null, f = null, g = c.j; g && (g.l || (d++, g.i == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.i && 1 == d ? xf(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : yf(c), zf(c, e, 3, b)))
                }
                a.l = null
            } else qf(a, 3, b)
    }

    function Af(a, b) {
        a.j || 2 != a.i && 3 != a.i || Bf(a);
        a.o ? a.o.next = b : a.j = b;
        a.o = b
    }

    function vf(a, b, c, d) {
        var e = tf(null, null, null);
        e.i = new pf(function(f, g) {
            e.j = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.onRejected = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof wf ? g(h) : f(k)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.i.l = a;
        Af(a, e);
        return e.i
    }
    l.pd = function(a) {
        this.i = 0;
        qf(this, 2, a)
    };
    l.qd = function(a) {
        this.i = 0;
        qf(this, 3, a)
    };

    function qf(a, b, c) {
        if (0 == a.i) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.i = 1;
            a: {
                var d = c,
                    e = a.pd,
                    f = a.qd;
                if (d instanceof pf) {
                    Af(d, tf(e || bb, f || null, a));
                    var g = !0
                } else {
                    if (d) try {
                        var h = !!d.$goog_Thenable
                    } catch (m) {
                        h = !1
                    } else h = !1;
                    if (h) d.then(e, f, a), g = !0;
                    else {
                        if (Pa(d)) try {
                            var k = d.then;
                            if ("function" === typeof k) {
                                Cf(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (m) {
                            f.call(a, m);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
            }
            g || (a.C = c, a.i = b, a.l = null, Bf(a), 3 != b || c instanceof wf || Df(a, c))
        }
    }

    function Cf(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function Bf(a) {
        a.s || (a.s = !0, mf(a.Gc, a))
    }

    function yf(a) {
        var b = null;
        a.j && (b = a.j, a.j = b.next, b.next = null);
        a.j || (a.o = null);
        return b
    }
    l.Gc = function() {
        for (var a; a = yf(this);) zf(this, a, this.i, this.C);
        this.s = !1
    };

    function zf(a, b, c, d) {
        if (3 == c && b.onRejected && !b.l)
            for (; a && a.m; a = a.l) a.m = !1;
        if (b.i) b.i.l = null, Ef(b, c, d);
        else try {
            b.l ? b.j.call(b.context) : Ef(b, c, d)
        } catch (e) {
            Ff.call(null, e)
        }
        Xe(sf, b)
    }

    function Ef(a, b, c) {
        2 == b ? a.j.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    }

    function Df(a, b) {
        a.m = !0;
        mf(function() {
            a.m && Ff.call(null, b)
        })
    }
    var Ff = zd;

    function wf(a) {
        $a.call(this, a)
    }
    Ya(wf, $a);
    wf.prototype.name = "cancel";

    function Gf(a, b) {
        Te.call(this);
        this.l = a || 1;
        this.j = b || y;
        this.m = Wa(this.nd, this);
        this.s = Date.now()
    }
    Ya(Gf, Te);
    l = Gf.prototype;
    l.enabled = !1;
    l.da = null;

    function Hf(a, b) {
        a.l = b;
        a.da && a.enabled ? (a.stop(), a.start()) : a.da && a.stop()
    }
    l.nd = function() {
        if (this.enabled) {
            var a = Date.now() - this.s;
            0 < a && a < .8 * this.l ? this.da = this.j.setTimeout(this.m, this.l - a) : (this.da && (this.j.clearTimeout(this.da), this.da = null), Ue(this, "tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    l.start = function() {
        this.enabled = !0;
        this.da || (this.da = this.j.setTimeout(this.m, this.l), this.s = Date.now())
    };
    l.stop = function() {
        this.enabled = !1;
        this.da && (this.j.clearTimeout(this.da), this.da = null)
    };
    l.D = function() {
        Gf.Z.D.call(this);
        this.stop();
        delete this.j
    };

    function If(a, b, c) {
        if ("function" === typeof a) c && (a = Wa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = Wa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : y.setTimeout(a, b || 0)
    };

    function Jf(a) {
        this.C = a;
        this.i = new Map;
        this.s = new Set;
        this.l = 0;
        this.o = 100;
        this.flushInterval = 3E4;
        this.j = new Gf(this.flushInterval);
        this.j.W("tick", this.hb, !1, this);
        this.m = !1
    }
    l = Jf.prototype;
    l.ic = function(a) {
        this.m = a;
        this.o = 1
    };

    function Kf(a) {
        a.j.enabled || a.j.start();
        a.l++;
        a.l >= a.o && a.hb()
    }
    l.hb = function() {
        var a = this.i.values();
        a = [].concat(ha(a)).filter(function(b) {
            return b.ya.size
        });
        a.length && this.C.flush(a, this.m);
        Lf(a);
        this.l = 0;
        this.j.enabled && this.j.stop()
    };
    l.wc = function(a) {
        var b = Ia.apply(1, arguments);
        this.i.has(a) || this.i.set(a, new he(a, b))
    };
    l.Gb = function(a) {
        var b = Ia.apply(1, arguments);
        this.i.has(a) || this.i.set(a, new ie(a, b))
    };

    function Mf(a, b) {
        return a.s.has(b) ? void 0 : a.i.get(b)
    }
    l.Bb = function(a) {
        this.pc.apply(this, [a, 1].concat(ha(Ia.apply(1, arguments))))
    };
    l.pc = function(a, b) {
        var c = Ia.apply(2, arguments),
            d = Mf(this, a);
        d && d instanceof he && (d.l(b, c), Kf(this))
    };
    l.gb = function(a, b) {
        var c = Ia.apply(2, arguments),
            d = Mf(this, a);
        d && d instanceof ie && (d.l(b, c), Kf(this))
    };

    function Lf(a) {
        for (var b = 0; b < a.length; b++) a[b].clear()
    };

    function Nf(a) {
        this.i = a;
        this.i.Gb("/client_streamz/bg/fil", {
            lb: 3,
            kb: "rk"
        })
    }

    function Of(a) {
        this.i = a;
        this.i.wc("/client_streamz/bg/fsc", {
            lb: 3,
            kb: "rk"
        })
    }

    function Pf(a) {
        this.i = a;
        this.i.Gb("/client_streamz/bg/fsl", {
            lb: 3,
            kb: "rk"
        })
    };

    function Qf(a) {
        I.call(this, a, -1, Rf)
    }
    r(Qf, I);

    function Sf(a) {
        I.call(this, a, -1, Tf)
    }
    r(Sf, I);

    function Uf(a) {
        I.call(this, a)
    }
    r(Uf, I);

    function Vf(a) {
        I.call(this, a)
    }
    r(Vf, I);
    var Rf = [3, 6, 4],
        Tf = [1],
        Wf = [1, 2, 3],
        Xf = [1, 2, 3];

    function Yf(a) {
        I.call(this, a, -1, Zf)
    }
    r(Yf, I);
    var Zf = [1];

    function $f(a) {
        if (!a) return "";
        if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c) throw Error("URI is missing protocol: " + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
            c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
        }
        return c + "://" + b + a
    };

    function ag() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            q = m = 0
        }

        function b(t) {
            for (var x = g, u = 0; 64 > u; u += 4) x[u / 4] = t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3];
            for (u = 16; 80 > u; u++) t = x[u - 3] ^ x[u - 8] ^ x[u - 14] ^ x[u - 16], x[u] = (t << 1 | t >>> 31) & 4294967295;
            t = e[0];
            var A = e[1],
                D = e[2],
                F = e[3],
                N = e[4];
            for (u = 0; 80 > u; u++) {
                if (40 > u)
                    if (20 > u) {
                        var O = F ^ A & (D ^ F);
                        var Q = 1518500249
                    } else O = A ^ D ^ F, Q = 1859775393;
                else 60 > u ? (O = A & D | F & (A | D), Q = 2400959708) : (O = A ^ D ^ F, Q = 3395469782);
                O = ((t << 5 | t >>> 27) & 4294967295) + O + N + Q + x[u] & 4294967295;
                N = F;
                F = D;
                D = (A << 30 | A >>> 2) & 4294967295;
                A = t;
                t = O
            }
            e[0] = e[0] + t & 4294967295;
            e[1] = e[1] + A & 4294967295;
            e[2] =
                e[2] + D & 4294967295;
            e[3] = e[3] + F & 4294967295;
            e[4] = e[4] + N & 4294967295
        }

        function c(t, x) {
            if ("string" === typeof t) {
                t = unescape(encodeURIComponent(t));
                for (var u = [], A = 0, D = t.length; A < D; ++A) u.push(t.charCodeAt(A));
                t = u
            }
            x || (x = t.length);
            u = 0;
            if (0 == m)
                for (; u + 64 < x;) b(t.slice(u, u + 64)), u += 64, q += 64;
            for (; u < x;)
                if (f[m++] = t[u++], q++, 64 == m)
                    for (m = 0, b(f); u + 64 < x;) b(t.slice(u, u + 64)), u += 64, q += 64
        }

        function d() {
            var t = [],
                x = 8 * q;
            56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
            for (var u = 63; 56 <= u; u--) f[u] = x & 255, x >>>= 8;
            b(f);
            for (u = x = 0; 5 > u; u++)
                for (var A = 24; 0 <= A; A -= 8) t[x++] = e[u] >> A & 255;
            return t
        }
        for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
        var m, q;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Dc: function() {
                for (var t = d(), x = "", u = 0; u < t.length; u++) x += "0123456789ABCDEF".charAt(Math.floor(t[u] / 16)) + "0123456789ABCDEF".charAt(t[u] % 16);
                return x
            }
        }
    };

    function bg(a, b, c) {
        var d = String(y.location.href);
        return d && a && b ? [b, cg($f(d), a, c || null)].join(" ") : null
    }

    function cg(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], eb(d, function(h) {
            e.push(h)
        }), dg(e.join(" "));
        var f = [],
            g = [];
        eb(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        eb(d, function(h) {
            e.push(h)
        });
        a = dg(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    }

    function dg(a) {
        var b = ag();
        b.update(a);
        return b.Dc().toLowerCase()
    };
    var eg = {};

    function fg(a) {
        this.i = a || {
            cookie: ""
        }
    }
    l = fg.prototype;
    l.isEnabled = function() {
        if (!y.navigator.cookieEnabled) return !1;
        if (!this.isEmpty()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            Za: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.rq;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Za
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.i.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" +
            e : "")
    };
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.i.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Jb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Za: 0,
            path: b,
            domain: c
        });
        return d
    };
    l.pb = function() {
        return gg(this).keys
    };
    l.isEmpty = function() {
        return !this.i.cookie
    };
    l.clear = function() {
        for (var a = gg(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function gg(a) {
        a = (a.i.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Jb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    var hg = new fg("undefined" == typeof document ? null : document);

    function ig(a) {
        return !!eg.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }

    function jg(a) {
        a = void 0 === a ? !1 : a;
        var b = y.__SAPISID || y.__APISID || y.__3PSAPISID || y.__OVERRIDE_SID;
        ig(a) && (b = b || y.__1PSAPISID);
        if (b) return !0;
        var c = new fg(document);
        b = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID");
        ig(a) && (b = b || c.get("__Secure-1PAPISID"));
        return !!b
    }

    function kg(a, b, c, d) {
        (a = y[a]) || (a = (new fg(document)).get(b));
        return a ? bg(a, c, d) : null
    }

    function lg(a, b) {
        b = void 0 === b ? !1 : b;
        var c = $f(String(y.location.href)),
            d = [];
        if (jg(b)) {
            c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:");
            var e = c ? y.__SAPISID : y.__APISID;
            e || (e = new fg(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"));
            (e = e ? bg(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
            c && ig(b) && ((b = kg("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = kg("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a))
        }
        return 0 ==
            d.length ? null : d.join(" ")
    };

    function mg(a) {
        I.call(this, a, -1, ng)
    }
    r(mg, I);
    var ng = [2];

    function og(a) {
        this.i = this.j = this.l = a
    }
    og.prototype.reset = function() {
        this.i = this.j = this.l
    };
    og.prototype.getValue = function() {
        return this.j
    };

    function pg(a) {
        var b = [];
        qg(new rg, a, b);
        return b.join("")
    }

    function rg() {}

    function qg(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), qg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), sg(d, c), c.push(":"), qg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    sg(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) &&
                        !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var tg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\u000b"
        },
        ug = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function sg(a, b) {
        b.push('"', a.replace(ug, function(c) {
            var d = tg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), tg[c] = d);
            return d
        }), '"')
    };

    function vg() {}
    vg.prototype.i = null;
    vg.prototype.getOptions = function() {
        var a;
        (a = this.i) || (a = {}, wg(this) && (a[0] = !0, a[1] = !0), a = this.i = a);
        return a
    };
    var xg;

    function yg() {}
    Ya(yg, vg);

    function zg(a) {
        return (a = wg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function wg(a) {
        if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.j = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.j
    }
    xg = new yg;

    function Ag(a) {
        Te.call(this);
        this.headers = new Map;
        this.K = a || null;
        this.j = !1;
        this.G = this.A = null;
        this.m = this.T = "";
        this.l = this.R = this.v = this.P = !1;
        this.s = 0;
        this.B = null;
        this.ea = "";
        this.X = this.Y = !1
    }
    Ya(Ag, Te);
    var Bg = /^https?$/i,
        Cg = ["POST", "PUT"],
        Dg = [];

    function Gg(a, b, c, d, e, f, g) {
        var h = new Ag;
        Dg.push(h);
        b && h.W("complete", b);
        h.o.add("ready", h.Bc, !0, void 0, void 0);
        f && (h.s = Math.max(0, f));
        g && (h.Y = g);
        h.send(a, c, d, e)
    }
    l = Ag.prototype;
    l.Bc = function() {
        this.dispose();
        jb(Dg, this)
    };
    l.send = function(a, b, c, d) {
        if (this.A) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.T + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.T = a;
        this.m = "";
        this.P = !1;
        this.j = !0;
        this.A = this.K ? zg(this.K) : zg(xg);
        this.G = this.K ? this.K.getOptions() : xg.getOptions();
        this.A.onreadystatechange = Wa(this.Zb, this);
        try {
            this.getStatus(), this.R = !0, this.A.open(b, String(a), !0), this.R = !1
        } catch (g) {
            this.getStatus();
            Hg(this, g);
            return
        }
        a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d) c.set(e,
                    d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get) {
            e = p(d.keys());
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f))
        } else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(function(g) {
            return "content-type" == g.toLowerCase()
        });
        e = y.FormData && a instanceof y.FormData;
        !(0 <= db(Cg, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = p(c);
        for (d = b.next(); !d.done; d = b.next()) c = p(d.value), d = c.next().value, c = c.next().value, this.A.setRequestHeader(d, c);
        this.ea && (this.A.responseType = this.ea);
        "withCredentials" in this.A && this.A.withCredentials !== this.Y && (this.A.withCredentials = this.Y);
        try {
            Ig(this), 0 < this.s && (this.X = Jg(this.A), this.getStatus(), this.X ? (this.A.timeout = this.s, this.A.ontimeout = Wa(this.mc, this)) :
                this.B = If(this.mc, this.s, this)), this.getStatus(), this.v = !0, this.A.send(a), this.v = !1
        } catch (g) {
            this.getStatus(), Hg(this, g)
        }
    };

    function Jg(a) {
        return Jc && Uc() && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
    l.mc = function() {
        "undefined" != typeof La && this.A && (this.m = "Timed out after " + this.s + "ms, aborting", this.getStatus(), Ue(this, "timeout"), this.abort(8))
    };

    function Hg(a, b) {
        a.j = !1;
        a.A && (a.l = !0, a.A.abort(), a.l = !1);
        a.m = b;
        Kg(a);
        Lg(a)
    }

    function Kg(a) {
        a.P || (a.P = !0, Ue(a, "complete"), Ue(a, "error"))
    }
    l.abort = function() {
        this.A && this.j && (this.getStatus(), this.j = !1, this.l = !0, this.A.abort(), this.l = !1, Ue(this, "complete"), Ue(this, "abort"), Lg(this))
    };
    l.D = function() {
        this.A && (this.j && (this.j = !1, this.l = !0, this.A.abort(), this.l = !1), Lg(this, !0));
        Ag.Z.D.call(this)
    };
    l.Zb = function() {
        this.i() || (this.R || this.v || this.l ? Mg(this) : this.Qc())
    };
    l.Qc = function() {
        Mg(this)
    };

    function Mg(a) {
        if (a.j && "undefined" != typeof La)
            if (a.G[1] && 4 == Ng(a) && 2 == a.getStatus()) a.getStatus();
            else if (a.v && 4 == Ng(a)) If(a.Zb, 0, a);
        else if (Ue(a, "readystatechange"), a.isComplete()) {
            a.getStatus();
            a.j = !1;
            try {
                if (Og(a)) Ue(a, "complete"), Ue(a, "success");
                else {
                    try {
                        var b = 2 < Ng(a) ? a.A.statusText : ""
                    } catch (c) {
                        b = ""
                    }
                    a.m = b + " [" + a.getStatus() + "]";
                    Kg(a)
                }
            } finally {
                Lg(a)
            }
        }
    }

    function Lg(a, b) {
        if (a.A) {
            Ig(a);
            var c = a.A,
                d = a.G[0] ? function() {} : null;
            a.A = null;
            a.G = null;
            b || Ue(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function Ig(a) {
        a.A && a.X && (a.A.ontimeout = null);
        a.B && (y.clearTimeout(a.B), a.B = null)
    }
    l.isActive = function() {
        return !!this.A
    };
    l.isComplete = function() {
        return 4 == Ng(this)
    };

    function Og(a) {
        var b = a.getStatus();
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = kc(1, String(a.T)), !a && y.self && y.self.location && (a = y.self.location.protocol.slice(0, -1)), b = !Bg.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function Ng(a) {
        return a.A ? a.A.readyState : 0
    }
    l.getStatus = function() {
        try {
            return 2 < Ng(this) ? this.A.status : -1
        } catch (a) {
            return -1
        }
    };
    l.getLastError = function() {
        return "string" === typeof this.m ? this.m : String(this.m)
    };

    function Pg(a) {
        I.call(this, a)
    }
    r(Pg, I);

    function Qg(a) {
        I.call(this, a, -1, Rg)
    }
    r(Qg, I);
    var Rg = [1];
    var Sg = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
    new Qg;

    function Tg(a) {
        I.call(this, a)
    }
    r(Tg, I);

    function Ug(a) {
        I.call(this, a, 31, Vg)
    }
    r(Ug, I);
    var Vg = [3, 20, 27];

    function Wg(a) {
        I.call(this, a, 17, Xg)
    }
    r(Wg, I);
    var Xg = [3, 5];

    function Yg(a) {
        I.call(this, a, 6, Zg)
    }
    r(Yg, I);
    var Zg = [5];

    function $g(a) {
        I.call(this, a)
    }
    r($g, I);
    var ah;
    ah = new function(a, b, c) {
        this.j = a;
        this.fieldName = b;
        this.i = c;
        this.isRepeated = 0;
        this.l = ce
    }(175237375, {
        iq: 0
    }, $g);

    function bh(a, b, c, d, e, f, g, h, k, m, q) {
        Te.call(this);
        var t = this;
        this.P = "";
        this.l = [];
        this.Eb = "";
        this.Fb = this.ra = -1;
        this.Qa = !1;
        this.G = this.m = null;
        this.B = 0;
        this.tc = 1;
        this.timeoutMillis = 0;
        this.ea = !1;
        Te.call(this);
        this.Db = b || function() {};
        this.v = new ch(a, f);
        this.qc = d;
        this.Pa = q;
        this.uc = Xa(Ye, 0, 1);
        this.T = e || null;
        this.K = c || null;
        this.X = g || !1;
        this.pageId = k || null;
        this.logger = null;
        this.withCredentials = !h;
        this.Fa = f || !1;
        !this.Fa && (65 <= $b("Chromium") || 45 <= $b("Firefox") || 12 <= $b("Safari") || (Dc() || C("iPad") || C("iPod")) && Ec());
        a = E(new Tg, 1, 1);
        dh(this.v, a);
        this.s = new og(1E4);
        this.j = new Gf(this.s.getValue());
        le(this, this.j);
        m = eh(this, m);
        Ie(this.j, "tick", m, !1, this);
        this.R = new Gf(6E5);
        le(this, this.R);
        Ie(this.R, "tick", m, !1, this);
        this.X || this.R.start();
        this.Fa || (Ie(document, "visibilitychange", function() {
            "hidden" === document.visibilityState && t.Y()
        }), Ie(document, "pagehide", this.Y, !1, this))
    }
    r(bh, Te);

    function eh(a, b) {
        return b ? function() {
            b().then(function() {
                a.flush()
            })
        } : function() {
            a.flush()
        }
    }
    bh.prototype.D = function() {
        this.Y();
        Te.prototype.D.call(this)
    };

    function fh(a) {
        a.T || (a.T = .01 > a.uc() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
        return a.T
    }

    function gh(a, b) {
        a.s = new og(1 > b ? 1 : b);
        Hf(a.j, a.s.getValue())
    }
    bh.prototype.log = function(a) {
        a = a.clone();
        var b = this.tc++;
        E(a, 21, b);
        this.P && E(a, 26, this.P);
        if (!Kd(a, 1)) {
            b = a;
            var c = Date.now().toString();
            E(b, 1, c)
        }
        null != Kd(a, 15) || E(a, 15, 60 * (new Date).getTimezoneOffset());
        this.m && (b = this.m.clone(), G(a, mg, 16, b));
        for (; 1E3 <= this.l.length;) this.l.shift(), ++this.B;
        this.l.push(a);
        Ue(this, new hh(a));
        this.X || this.j.enabled || this.j.start()
    };
    bh.prototype.flush = function(a, b) {
        var c = this;
        if (0 === this.l.length) a && a();
        else if (this.ea) ih(this);
        else {
            var d = Date.now();
            if (this.Fb > d && this.ra < d) b && b("throttled");
            else {
                var e = jh(this.v, this.l, this.B);
                d = {};
                var f = this.Db();
                f && (d.Authorization = f);
                var g = fh(this);
                this.K && (d["X-Goog-AuthUser"] = this.K, g = wc(g, "authuser", this.K));
                this.pageId && (d["X-Goog-PageId"] = this.pageId, g = wc(g, "pageId", this.pageId));
                if (f && this.Eb === f) b && b("stale-auth-token");
                else {
                    this.l = [];
                    this.j.enabled && this.j.stop();
                    this.B = 0;
                    var h = Yd(e),
                        k;
                    this.G && this.G.isSupported(h.length) && (k = this.G.compress(h));
                    var m = {
                            url: g,
                            body: h,
                            yc: 1,
                            xb: d,
                            requestType: "POST",
                            withCredentials: this.withCredentials,
                            timeoutMillis: this.timeoutMillis
                        },
                        q = function(u) {
                            c.s.reset();
                            Hf(c.j, c.s.getValue());
                            if (u) {
                                var A = null;
                                try {
                                    var D = JSON.parse(u.replace(")]}'\n", ""));
                                    A = new Yg(D)
                                } catch (F) {}
                                A && (u = Number(Md(A, 1, "-1")), 0 < u && (c.ra = Date.now(), c.Fb = c.ra + u), A = ah.l(A)) && (A = Md(A, 1, -1), -1 != A && (c.Qa || gh(c, A)))
                            }
                            a && a()
                        },
                        t = function(u, A) {
                            var D = Sd(e, Ug, 3),
                                F = c.s;
                            F.i = Math.min(3E5, 2 * F.i);
                            F.j = Math.min(3E5, F.i + Math.round(.2 * (Math.random() - .5) * F.i));
                            Hf(c.j, c.s.getValue());
                            401 === u && f && (c.Eb = f);
                            void 0 === A && (A = 500 <= u && 600 > u || 401 === u || 0 === u);
                            A && (c.l = D.concat(c.l), c.X || c.j.enabled || c.j.start());
                            b && b("net-send-failed", u)
                        },
                        x = function() {
                            c.Pa ? c.Pa.send(m, q, t) : c.qc(m, q, t)
                        };
                    k ? k.then(function(u) {
                        m.xb["Content-Encoding"] = "gzip";
                        m.xb["Content-Type"] = "application/binary";
                        m.body = u;
                        m.yc = 2;
                        x()
                    }, function() {
                        x()
                    }) : x()
                }
            }
        }
    };
    bh.prototype.Y = function() {
        this.flush()
    };

    function ih(a) {
        kh(a, function(b, c) {
            b = wc(b, "format", "json");
            b = window.navigator.sendBeacon(b, Yd(c));
            a.ea && !b && (a.ea = !1);
            return b
        })
    }

    function kh(a, b) {
        if (0 !== a.l.length) {
            var c = Ac(fh(a), "format");
            c = rc(c, "auth", a.Db(), "authuser", a.K || "0");
            for (var d = 0; 10 > d && a.l.length; ++d) {
                var e = a.l.slice(0, 32),
                    f = jh(a.v, e, a.B);
                if (!b(c, f)) break;
                a.B = 0;
                a.l = a.l.slice(e.length)
            }
            a.j.enabled && a.j.stop()
        }
    }

    function hh() {
        ne.call(this, "event-logged", void 0)
    }
    r(hh, ne);

    function ch(a, b) {
        this.j = b = void 0 === b ? !1 : b;
        this.uach = this.locale = null;
        this.i = new Wg;
        E(this.i, 2, a);
        b || (this.locale = document.documentElement.getAttribute("lang"));
        dh(this, new Tg)
    }

    function dh(a, b) {
        G(a.i, Tg, 1, b);
        Kd(b, 1) || E(b, 1, 1);
        a.j || (b = lh(a), Kd(b, 5) || E(b, 5, a.locale));
        a.uach && (b = lh(a), Qd(b, Qg, 9) || G(b, Qg, 9, a.uach))
    }

    function mh(a, b) {
        var c = void 0 === c ? Sg : c;
        b(window, c).then(function(d) {
            a.uach = d;
            d = lh(a);
            G(d, Qg, 9, a.uach);
            return !0
        }).catch(function() {
            return !1
        })
    }

    function lh(a) {
        a = Qd(a.i, Tg, 1);
        var b = Qd(a, Pg, 11);
        b || (b = new Pg, G(a, Pg, 11, b));
        return b
    }

    function jh(a, b, c) {
        c = void 0 === c ? 0 : c;
        a = a.i.clone();
        var d = Date.now().toString();
        a = E(a, 4, d);
        b = Ud(a, Ug, 3, b);
        c && E(b, 14, c);
        return b
    };

    function nh(a, b, c) {
        Gg(a.url, function(d) {
            d = d.target;
            if (Og(d)) {
                try {
                    var e = d.A ? d.A.responseText : ""
                } catch (f) {
                    e = ""
                }
                b(e)
            } else c(d.getStatus())
        }, a.requestType, a.body, a.xb, a.timeoutMillis, a.withCredentials)
    };

    function oh() {
        this.l = "https://play.google.com/log?format=json&hasfast=true";
        this.o = !1;
        this.s = nh;
        this.i = ""
    };

    function ph() {
        var a = void 0 === a ? "" : a;
        var b = void 0 === b ? !1 : b;
        var c = void 0 === c ? "" : c;
        var d = new oh;
        d.i = "";
        "" != a && (d.l = a);
        b && (d.o = !0);
        c && (d.j = c);
        a = new bh(1828, d.G ? d.G : lg, "0", d.s, d.l, d.o, !1, d.R, void 0, void 0, d.C ? d.C : void 0);
        d.v && dh(a.v, d.v);
        d.j && (b = d.j, c = lh(a.v), E(c, 7, b));
        d.m && (a.G = d.m);
        d.i && (a.P = d.i);
        d.O && ((b = d.O) ? (a.m || (a.m = new mg), b = Yd(b), E(a.m, 4, b)) : a.m && E(a.m, 4, void 0, !1));
        d.K && (b = d.K, a.m || (a.m = new mg), Nd(a.m, 2, b));
        d.B && (b = d.B, a.Qa = !0, gh(a, b));
        d.P && mh(a.v, d.P);
        this.i = a
    }
    ph.prototype.flush = function(a) {
        var b = a || [];
        if (b.length) {
            a = new Yf;
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b[d],
                    f = e;
                var g = new Qf;
                g = E(g, 1, f.j);
                for (var h = f, k = [], m = 0; m < h.i.length; m++) k.push(h.i[m].kb);
                g = Nd(g, 3, k);
                h = [];
                k = [];
                m = p(f.ya.keys());
                for (var q = m.next(); !q.done; q = m.next()) k.push(q.value.split(","));
                for (m = 0; m < k.length; m++) {
                    q = k[m];
                    var t = f.o;
                    for (var x = f.mb(q) || [], u = [], A = 0; A < x.length; A++) {
                        var D = x[A];
                        D = D && D.Jb;
                        var F = new Vf;
                        switch (t) {
                            case 3:
                                Od(F, 1, Xf, Number(D));
                                break;
                            case 2:
                                Od(F, 2, Xf, Number(D))
                        }
                        u.push(F)
                    }
                    t =
                        u;
                    for (x = 0; x < t.length; x++) {
                        u = t[x];
                        A = new Sf;
                        u = G(A, Vf, 2, u);
                        A = q;
                        D = [];
                        F = f;
                        for (var N = [], O = 0; O < F.i.length; O++) N.push(F.i[O].lb);
                        F = N;
                        for (N = 0; N < F.length; N++) {
                            O = F[N];
                            var Q = A[N],
                                ca = new Uf;
                            switch (O) {
                                case 3:
                                    Od(ca, 1, Wf, String(Q));
                                    break;
                                case 2:
                                    Od(ca, 2, Wf, Number(Q));
                                    break;
                                case 1:
                                    Od(ca, 3, Wf, "true" == Q)
                            }
                            D.push(ca)
                        }
                        Ud(u, Uf, 1, D);
                        h.push(u)
                    }
                }
                Ud(g, Sf, 4, h);
                c.push(g);
                e.clear()
            }
            Ud(a, Qf, 1, c);
            b = this.i;
            a instanceof Ug ? b.log(a) : (c = new Ug, a = Yd(a), a = E(c, 8, a), b.log(a));
            this.i.flush()
        }
    };

    function qh() {
        this.m = rh();
        this.transport = new ph;
        this.i = new Jf(this.transport);
        this.o = new Nf(this.i);
        this.j = new Of(this.i);
        this.l = new Pf(this.i);
        this.Ba = window.document.location.hostname
    }

    function rh() {
        var a, b, c;
        return null != (c = null == (a = globalThis.performance) ? void 0 : null == (b = a.now) ? void 0 : b.call(a)) ? c : Date.now()
    };

    function sh() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function th(a) {
        var b = this;
        this.j = !1;
        if (a.pq) {
            var c;
            this.ta = null != (c = a.ta) ? c : new qh
        }
        c = a.program;
        a = a.globalName;
        var d = new sh;
        this.l = d.promise;
        this.o = p((0, y[a].a)(c, function(e, f) {
            Promise.resolve().then(function() {
                var g;
                if (null != (g = b.ta)) {
                    var h = rh() - g.m;
                    g.o.i.gb("/client_streamz/bg/fil", h, g.Ba)
                }
                d.resolve({
                    xc: e,
                    jd: f
                })
            })
        }, !0)).next().value;
        this.hd = d.promise.then(function() {})
    }
    th.prototype.snapshot = function(a) {
        var b = this;
        if (this.j) throw Error("Already disposed");
        var c = rh(),
            d;
        null != (d = this.ta) && d.j.i.Bb("/client_streamz/bg/fsc", d.Ba);
        return this.l.then(function(e) {
            var f = e.xc;
            return new Promise(function(g) {
                f(function(h) {
                    var k;
                    if (null != (k = b.ta)) {
                        var m = rh() - c;
                        k.l.i.gb("/client_streamz/bg/fsl", m, k.Ba)
                    }
                    g(h)
                }, [a.Lb,
                    a.kd
                ])
            })
        })
    };
    th.prototype.dispose = function() {
        var a;
        null != (a = this.ta) && a.i.hb();
        this.j = !0;
        this.l.then(function(b) {
            (b = b.jd) && b()
        })
    };
    th.prototype.i = function() {
        return this.j
    };
    var uh = window;
    Cb("csi.gstatic.com");
    Cb("googleads.g.doubleclick.net");
    Cb("partner.googleadservices.com");
    Cb("pubads.g.doubleclick.net");
    Cb("securepubads.g.doubleclick.net");
    Cb("tpc.googlesyndication.com");
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function vh(a) {
        this.isValid = a
    }

    function wh(a) {
        return new vh(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var xh = [wh("data"), wh("http"), wh("https"), wh("mailto"), wh("ftp"), new vh(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function yh(a, b) {
        a.src = Hb(b);
        var c, d;
        (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function zh(a) {
        var b = Ah;
        if (b)
            for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b)
    }

    function Bh() {
        var a = [];
        zh(function(b) {
            a.push(b)
        });
        return a
    }
    var Ah = {
            Ed: "allow-forms",
            Fd: "allow-modals",
            Gd: "allow-orientation-lock",
            Hd: "allow-pointer-lock",
            Id: "allow-popups",
            Jd: "allow-popups-to-escape-sandbox",
            Kd: "allow-presentation",
            Ld: "allow-same-origin",
            Md: "allow-scripts",
            Nd: "allow-top-navigation",
            Od: "allow-top-navigation-by-user-activation"
        },
        Ch = cb(function() {
            return Bh()
        });

    function Dh() {
        var a = Eh(),
            b = {};
        eb(Ch(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function Eh() {
        var a = void 0 === a ? document : a;
        return a.createElement("iframe")
    };

    function Fh(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    };
    var Gh = (new Date).getTime();
    var Hh = "client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");
    ha(Hh);

    function Ih(a) {
        Te.call(this);
        var b = this;
        this.v = this.l = 0;
        this.ba = null != a ? a : {
            S: function(e, f) {
                return setTimeout(e, f)
            },
            aa: function(e) {
                clearTimeout(e)
            }
        };
        var c, d;
        this.j = null != (d = null == (c = window.navigator) ? void 0 : c.onLine) ? d : !0;
        this.m = function() {
            return w(function(e) {
                return v(e, Jh(b), 0)
            })
        };
        window.addEventListener("offline", this.m);
        window.addEventListener("online", this.m);
        this.v || Kh(this)
    }
    r(Ih, Te);

    function Lh() {
        var a = Mh;
        Ih.i || (Ih.i = new Ih(a));
        return Ih.i
    }
    Ih.prototype.dispose = function() {
        window.removeEventListener("offline", this.m);
        window.removeEventListener("online", this.m);
        this.ba.aa(this.v);
        delete Ih.i
    };
    Ih.prototype.L = function() {
        return this.j
    };

    function Kh(a) {
        a.v = a.ba.S(function() {
            var b;
            return w(function(c) {
                if (1 == c.i) return a.j ? (null == (b = window.navigator) ? 0 : b.onLine) ? c.u(3) : v(c, Jh(a), 3) : v(c, Jh(a), 3);
                Kh(a);
                c.i = 0
            })
        }, 3E4)
    }

    function Jh(a, b) {
        return a.s ? a.s : a.s = new Promise(function(c) {
            var d, e, f, g;
            return w(function(h) {
                switch (h.i) {
                    case 1:
                        return d = window.AbortController ? new window.AbortController : void 0, f = null == (e = d) ? void 0 : e.signal, g = !1, ua(h, 2, 3), d && (a.l = a.ba.S(function() {
                            d.abort()
                        }, b || 2E4)), v(h, fetch("/generate_204", {
                            method: "HEAD",
                            signal: f
                        }), 5);
                    case 5:
                        g = !0;
                    case 3:
                        xa(h);
                        a.s = void 0;
                        a.l && (a.ba.aa(a.l), a.l = 0);
                        g !== a.j && (a.j = g, a.j ? Ue(a, "networkstatus-online") : Ue(a, "networkstatus-offline"));
                        c(g);
                        Aa(h);
                        break;
                    case 2:
                        wa(h), g = !1, h.u(3)
                }
            })
        })
    };
    var Nh = {
            Ih: "EMBEDDED_PLAYER_MODE_UNKNOWN",
            Fh: "EMBEDDED_PLAYER_MODE_DEFAULT",
            Hh: "EMBEDDED_PLAYER_MODE_PFP",
            Gh: "EMBEDDED_PLAYER_MODE_PFL"
        },
        Oh = {
            Kp: "WEB_DISPLAY_MODE_UNKNOWN",
            Gp: "WEB_DISPLAY_MODE_BROWSER",
            Ip: "WEB_DISPLAY_MODE_MINIMAL_UI",
            Jp: "WEB_DISPLAY_MODE_STANDALONE",
            Hp: "WEB_DISPLAY_MODE_FULLSCREEN"
        };

    function Ph() {
        this.data_ = [];
        this.i = -1
    }
    Ph.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && Number.isInteger(a) && this.data_[a] !== b && (this.data_[a] = b, this.i = -1)
    };
    Ph.prototype.get = function(a) {
        return !!this.data_[a]
    };

    function Qh(a) {
        -1 === a.i && (a.i = hb(a.data_, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.i
    };

    function Rh(a, b) {
        this.i = a[y.Symbol.iterator]();
        this.j = b
    }
    Rh.prototype[Symbol.iterator] = function() {
        return this
    };
    Rh.prototype.next = function() {
        var a = this.i.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    };

    function Sh(a, b) {
        return new Rh(a, b)
    };

    function Th() {
        this.blockSize = -1
    };

    function Uh() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.i = [];
        this.m = [];
        this.s = [];
        this.l = [];
        this.l[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.l[a] = 0;
        this.o = this.j = 0;
        this.reset()
    }
    Ya(Uh, Th);
    Uh.prototype.reset = function() {
        this.i[0] = 1732584193;
        this.i[1] = 4023233417;
        this.i[2] = 2562383102;
        this.i[3] = 271733878;
        this.i[4] = 3285377520;
        this.o = this.j = 0
    };

    function Vh(a, b, c) {
        c || (c = 0);
        var d = a.s;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.i[0];
        c = a.i[1];
        var g = a.i[2],
            h = a.i[3],
            k = a.i[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ c & (g ^ h);
                    var m = 1518500249
                } else f = c ^ g ^ h, m = 1859775393;
            else 60 > e ? (f = c & g | h & (c | g), m = 2400959708) :
                (f = c ^ g ^ h, m = 3395469782);
            f = (b << 5 | b >>> 27) + f + k + m + d[e] & 4294967295;
            k = h;
            h = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.i[0] = a.i[0] + b & 4294967295;
        a.i[1] = a.i[1] + c & 4294967295;
        a.i[2] = a.i[2] + g & 4294967295;
        a.i[3] = a.i[3] + h & 4294967295;
        a.i[4] = a.i[4] + k & 4294967295
    }
    Uh.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.m, f = this.j; d < b;) {
                if (0 == f)
                    for (; d <= c;) Vh(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            Vh(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                Vh(this, e);
                                f = 0;
                                break
                            }
            }
            this.j = f;
            this.o += b
        }
    };
    Uh.prototype.digest = function() {
        var a = [],
            b = 8 * this.o;
        56 > this.j ? this.update(this.l, 56 - this.j) : this.update(this.l, this.blockSize - (this.j - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.m[c] = b & 255, b /= 256;
        Vh(this, this.m);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.i[c] >> d & 255, ++b;
        return a
    };

    function Wh(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function Xh(a, b) {
        "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }

    function Yh(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : Wh(a).match(/\S+/g) || [], b = 0 <= db(a, b));
        return b
    }

    function Zh() {
        var a = document.body;
        a.classList ? a.classList.remove("inverted-hdpi") : Yh(a, "inverted-hdpi") && Xh(a, Array.prototype.filter.call(a.classList ? a.classList : Wh(a).match(/\S+/g) || [], function(b) {
            return "inverted-hdpi" != b
        }).join(" "))
    };

    function $h() {}
    $h.prototype.next = function() {
        return ai
    };
    var ai = {
        done: !0,
        value: void 0
    };

    function bi(a) {
        return {
            value: a,
            done: !1
        }
    }
    $h.prototype.fa = function() {
        return this
    };

    function ci(a) {
        if (a instanceof di || a instanceof ei || a instanceof fi) return a;
        if ("function" == typeof a.next) return new di(function() {
            return a
        });
        if ("function" == typeof a[Symbol.iterator]) return new di(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.fa) return new di(function() {
            return a.fa()
        });
        throw Error("Not an iterator or iterable.");
    }

    function di(a) {
        this.j = a
    }
    di.prototype.fa = function() {
        return new ei(this.j())
    };
    di.prototype[Symbol.iterator] = function() {
        return new fi(this.j())
    };
    di.prototype.i = function() {
        return new fi(this.j())
    };

    function ei(a) {
        this.j = a
    }
    r(ei, $h);
    ei.prototype.next = function() {
        return this.j.next()
    };
    ei.prototype[Symbol.iterator] = function() {
        return new fi(this.j)
    };
    ei.prototype.i = function() {
        return new fi(this.j)
    };

    function fi(a) {
        di.call(this, function() {
            return a
        });
        this.l = a
    }
    r(fi, di);
    fi.prototype.next = function() {
        return this.l.next()
    };

    function gi(a, b) {
        this.j = {};
        this.i = [];
        this.oa = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof gi)
                for (c = a.pb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    l = gi.prototype;
    l.pb = function() {
        hi(this);
        return this.i.concat()
    };
    l.has = function(a) {
        return ii(this.j, a)
    };
    l.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || ji;
        hi(this);
        for (var c, d = 0; c = this.i[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };

    function ji(a, b) {
        return a === b
    }
    l.isEmpty = function() {
        return 0 == this.size
    };
    l.clear = function() {
        this.j = {};
        this.oa = this.size = this.i.length = 0
    };
    l.remove = function(a) {
        return this.delete(a)
    };
    l.delete = function(a) {
        return ii(this.j, a) ? (delete this.j[a], --this.size, this.oa++, this.i.length > 2 * this.size && hi(this), !0) : !1
    };

    function hi(a) {
        if (a.size != a.i.length) {
            for (var b = 0, c = 0; b < a.i.length;) {
                var d = a.i[b];
                ii(a.j, d) && (a.i[c++] = d);
                b++
            }
            a.i.length = c
        }
        if (a.size != a.i.length) {
            var e = {};
            for (c = b = 0; b < a.i.length;) d = a.i[b], ii(e, d) || (a.i[c++] = d, e[d] = 1), b++;
            a.i.length = c
        }
    }
    l.get = function(a, b) {
        return ii(this.j, a) ? this.j[a] : b
    };
    l.set = function(a, b) {
        ii(this.j, a) || (this.size += 1, this.i.push(a), this.oa++);
        this.j[a] = b
    };
    l.forEach = function(a, b) {
        for (var c = this.pb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    l.clone = function() {
        return new gi(this)
    };
    l.keys = function() {
        return ci(this.fa(!0)).i()
    };
    l.values = function() {
        return ci(this.fa(!1)).i()
    };
    l.entries = function() {
        var a = this;
        return Sh(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    l.fa = function(a) {
        hi(this);
        var b = 0,
            c = this.oa,
            d = this,
            e = new $h;
        e.next = function() {
            if (c != d.oa) throw Error("The map has changed since the iterator was created");
            if (b >= d.i.length) return ai;
            var f = d.i[b++];
            return bi(a ? f : d.j[f])
        };
        return e
    };

    function ii(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function K(a) {
        J.call(this);
        this.s = 1;
        this.o = [];
        this.m = 0;
        this.j = [];
        this.l = {};
        this.v = !!a
    }
    Ya(K, J);
    l = K.prototype;
    l.subscribe = function(a, b, c) {
        var d = this.l[a];
        d || (d = this.l[a] = []);
        var e = this.s;
        this.j[e] = a;
        this.j[e + 1] = b;
        this.j[e + 2] = c;
        this.s = e + 3;
        d.push(e);
        return e
    };

    function ki(a, b, c, d) {
        if (b = a.l[b]) {
            var e = a.j;
            (b = b.find(function(f) {
                return e[f + 1] == c && e[f + 2] == d
            })) && a.Ea(b)
        }
    }
    l.Ea = function(a) {
        var b = this.j[a];
        if (b) {
            var c = this.l[b];
            0 != this.m ? (this.o.push(a), this.j[a + 1] = function() {}) : (c && jb(c, a), delete this.j[a], delete this.j[a + 1], delete this.j[a + 2])
        }
        return !!b
    };
    l.qa = function(a, b) {
        var c = this.l[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.v)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    li(this.j[g + 1], this.j[g + 2], d)
                } else {
                    this.m++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.i(); e++) g = c[e], this.j[g + 1].apply(this.j[g + 2], d)
                    } finally {
                        if (this.m--, 0 < this.o.length && 0 == this.m)
                            for (; c = this.o.pop();) this.Ea(c)
                    }
                }
            return 0 != e
        }
        return !1
    };

    function li(a, b, c) {
        mf(function() {
            a.apply(b, c)
        })
    }
    l.clear = function(a) {
        if (a) {
            var b = this.l[a];
            b && (b.forEach(this.Ea, this), delete this.l[a])
        } else this.j.length = 0, this.l = {}
    };
    l.D = function() {
        K.Z.D.call(this);
        this.clear();
        this.o.length = 0
    };

    function mi(a) {
        this.i = a
    }
    mi.prototype.set = function(a, b) {
        void 0 === b ? this.i.remove(a) : this.i.set(a, pg(b))
    };
    mi.prototype.get = function(a) {
        try {
            var b = this.i.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    mi.prototype.remove = function(a) {
        this.i.remove(a)
    };

    function ni(a) {
        this.i = a
    }
    Ya(ni, mi);

    function oi(a) {
        this.data = a
    }

    function pi(a) {
        return void 0 === a || a instanceof oi ? a : new oi(a)
    }
    ni.prototype.set = function(a, b) {
        ni.Z.set.call(this, a, pi(b))
    };
    ni.prototype.j = function(a) {
        a = ni.Z.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    ni.prototype.get = function(a) {
        if (a = this.j(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function qi(a) {
        this.i = a
    }
    Ya(qi, ni);
    qi.prototype.set = function(a, b, c) {
        if (b = pi(b)) {
            if (c) {
                if (c < Date.now()) {
                    qi.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = Date.now()
        }
        qi.Z.set.call(this, a, b)
    };
    qi.prototype.j = function(a) {
        var b = qi.Z.j.call(this, a);
        if (b) {
            var c = b.creation,
                d = b.expiration;
            if (d && d < Date.now() || c && c > Date.now()) qi.prototype.remove.call(this, a);
            else return b
        }
    };

    function ri() {};

    function si() {}
    Ya(si, ri);
    si.prototype[Symbol.iterator] = function() {
        return ci(this.fa(!0)).i()
    };
    si.prototype.clear = function() {
        var a = Array.from(this);
        a = p(a);
        for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value)
    };

    function ti(a) {
        this.i = a
    }
    Ya(ti, si);
    l = ti.prototype;
    l.isAvailable = function() {
        if (!this.i) return !1;
        try {
            return this.i.setItem("__sak", "1"), this.i.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    l.set = function(a, b) {
        try {
            this.i.setItem(a, b)
        } catch (c) {
            if (0 == this.i.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    l.get = function(a) {
        a = this.i.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    l.remove = function(a) {
        this.i.removeItem(a)
    };
    l.fa = function(a) {
        var b = 0,
            c = this.i,
            d = new $h;
        d.next = function() {
            if (b >= c.length) return ai;
            var e = c.key(b++);
            if (a) return bi(e);
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return bi(e)
        };
        return d
    };
    l.clear = function() {
        this.i.clear()
    };
    l.key = function(a) {
        return this.i.key(a)
    };

    function ui() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.i = a
    }
    Ya(ui, ti);

    function vi(a, b) {
        this.j = a;
        this.i = null;
        var c;
        if (c = Jc) c = !(9 <= Number(Xc));
        if (c) {
            wi || (wi = new gi);
            this.i = wi.get(a);
            this.i || (b ? this.i = document.getElementById(b) : (this.i = document.createElement("userdata"), this.i.addBehavior("#default#userData"), document.body.appendChild(this.i)), wi.set(a, this.i));
            try {
                this.i.load(this.j)
            } catch (d) {
                this.i = null
            }
        }
    }
    Ya(vi, si);
    var xi = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        wi = null;

    function yi(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return xi[b]
        })
    }
    l = vi.prototype;
    l.isAvailable = function() {
        return !!this.i
    };
    l.set = function(a, b) {
        this.i.setAttribute(yi(a), b);
        zi(this)
    };
    l.get = function(a) {
        a = this.i.getAttribute(yi(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    l.remove = function(a) {
        this.i.removeAttribute(yi(a));
        zi(this)
    };
    l.fa = function(a) {
        var b = 0,
            c = this.i.XMLDocument.documentElement.attributes,
            d = new $h;
        d.next = function() {
            if (b >= c.length) return ai;
            var e = c[b++];
            if (a) return bi(decodeURIComponent(e.nodeName.replace(/\./g, "%")).slice(1));
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return bi(e)
        };
        return d
    };
    l.clear = function() {
        for (var a = this.i.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        zi(this)
    };

    function zi(a) {
        try {
            a.i.save(a.j)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function Ai(a, b) {
        this.j = a;
        this.i = b + "::"
    }
    Ya(Ai, si);
    Ai.prototype.set = function(a, b) {
        this.j.set(this.i + a, b)
    };
    Ai.prototype.get = function(a) {
        return this.j.get(this.i + a)
    };
    Ai.prototype.remove = function(a) {
        this.j.remove(this.i + a)
    };
    Ai.prototype.fa = function(a) {
        var b = this.j[Symbol.iterator](),
            c = this,
            d = new $h;
        d.next = function() {
            var e = b.next();
            if (e.done) return e;
            for (e = e.value; e.slice(0, c.i.length) != c.i;) {
                e = b.next();
                if (e.done) return e;
                e = e.value
            }
            return bi(a ? e.slice(c.i.length) : c.j.get(e))
        };
        return d
    };

    function Bi(a) {
        I.call(this, a)
    }
    r(Bi, I);

    function Ci(a) {
        I.call(this, a)
    }
    r(Ci, I);
    Ci.prototype.getKey = function() {
        return Kd(this, 1)
    };
    Ci.prototype.getValue = function() {
        return Kd(this, 2 === Pd(this, Di) ? 2 : -1)
    };
    Ci.prototype.setValue = function(a) {
        return Od(this, 2, Di, a)
    };
    var Di = [2, 3, 4, 5, 6];

    function Ei(a) {
        I.call(this, a)
    }
    r(Ei, I);

    function Fi(a) {
        I.call(this, a)
    }
    r(Fi, I);

    function Gi(a) {
        I.call(this, a, -1, Hi)
    }
    r(Gi, I);
    var Hi = [2];

    function Ii(a) {
        I.call(this, a, -1, Ji)
    }
    r(Ii, I);
    Ii.prototype.getPlayerType = function() {
        return Kd(this, 36)
    };
    Ii.prototype.setHomeGroupInfo = function(a) {
        return G(this, Gi, 81, a)
    };
    var Ji = [9, 66, 24, 32, 86, 100, 101];

    function Ki(a) {
        I.call(this, a, -1, Li)
    }
    r(Ki, I);
    var Li = [15, 26, 28];

    function Mi(a) {
        I.call(this, a)
    }
    r(Mi, I);
    Mi.prototype.setToken = function(a) {
        return E(this, 2, a)
    };

    function Ni(a) {
        I.call(this, a, -1, Oi)
    }
    r(Ni, I);
    Ni.prototype.setSafetyMode = function(a) {
        return E(this, 5, a)
    };
    var Oi = [12];

    function Pi(a) {
        I.call(this, a, -1, Qi)
    }
    r(Pi, I);
    var Qi = [12];

    function Ri(a) {
        I.call(this, a, -1, Si)
    }
    r(Ri, I);

    function Ti(a) {
        I.call(this, a)
    }
    r(Ti, I);
    Ti.prototype.getKey = function() {
        return Md(this, 1, "")
    };
    Ti.prototype.getValue = function() {
        return Md(this, 2, "")
    };
    Ti.prototype.setValue = function(a) {
        return E(this, 2, a)
    };
    var Si = [4, 5];

    function Ui(a) {
        I.call(this, a)
    }
    r(Ui, I);

    function Vi(a) {
        I.call(this, a)
    }
    r(Vi, I);
    var Wi = [2, 3, 4];

    function Xi(a) {
        I.call(this, a)
    }
    r(Xi, I);
    Xi.prototype.getMessage = function() {
        return Md(this, 1, "")
    };

    function Yi(a) {
        I.call(this, a)
    }
    r(Yi, I);

    function Zi(a) {
        I.call(this, a)
    }
    r(Zi, I);

    function $i(a) {
        I.call(this, a, -1, aj)
    }
    r($i, I);
    var aj = [10, 17];

    function bj(a) {
        I.call(this, a)
    }
    r(bj, I);

    function cj(a) {
        I.call(this, a)
    }
    r(cj, I);
    cj.prototype.V = function(a) {
        E(this, 1, a)
    };

    function dj(a) {
        I.call(this, a)
    }
    r(dj, I);

    function ej(a) {
        I.call(this, a)
    }
    r(ej, I);

    function fj(a) {
        I.call(this, a)
    }
    r(fj, I);

    function gj(a) {
        I.call(this, a, -1, hj)
    }
    r(gj, I);
    gj.prototype.getVideoData = function() {
        return Qd(this, fj, 15)
    };
    var hj = [4];

    function ij(a) {
        I.call(this, a)
    }
    r(ij, I);

    function jj(a, b) {
        G(a, dj, 1, b)
    }
    ij.prototype.V = function(a) {
        E(this, 2, a)
    };

    function kj(a) {
        I.call(this, a)
    }
    r(kj, I);

    function lj(a, b) {
        G(a, dj, 1, b)
    };

    function mj(a) {
        I.call(this, a, -1, nj)
    }
    r(mj, I);
    mj.prototype.V = function(a) {
        E(this, 1, a)
    };

    function oj(a, b) {
        G(a, dj, 2, b)
    }
    var nj = [3];

    function pj(a) {
        I.call(this, a)
    }
    r(pj, I);
    pj.prototype.V = function(a) {
        E(this, 1, a)
    };

    function qj(a) {
        I.call(this, a)
    }
    r(qj, I);
    qj.prototype.V = function(a) {
        E(this, 1, a)
    };

    function rj(a) {
        I.call(this, a)
    }
    r(rj, I);
    rj.prototype.V = function(a) {
        E(this, 1, a)
    };

    function sj(a) {
        I.call(this, a)
    }
    r(sj, I);
    sj.prototype.V = function(a) {
        E(this, 1, a)
    };

    function tj(a) {
        I.call(this, a)
    }
    r(tj, I);

    function uj(a) {
        I.call(this, a)
    }
    r(uj, I);

    function vj(a) {
        I.call(this, a, -1, wj)
    }
    r(vj, I);

    function xj(a, b) {
        return E(a, 1, b)
    }
    vj.prototype.getPlayerType = function() {
        return Md(this, 7, 0)
    };
    vj.prototype.setVideoId = function(a) {
        return E(this, 19, a)
    };

    function yj(a, b) {
        return E(a, 25, b)
    }

    function zj(a, b) {
        Vd(a, 68, Aj, b)
    }

    function Aj(a) {
        I.call(this, a)
    }
    r(Aj, I);
    Aj.prototype.getId = function() {
        return Md(this, 2, "")
    };
    var wj = [83, 68];

    function Bj(a) {
        I.call(this, a)
    }
    r(Bj, I);

    function Cj(a) {
        I.call(this, a)
    }
    r(Cj, I);

    function Dj(a) {
        I.call(this, a)
    }
    r(Dj, I);

    function Ej(a) {
        I.call(this, a, 432)
    }
    r(Ej, I);
    var Fj = [23, 24, 11, 6, 7, 5, 2, 3, 20, 21, 28, 32, 37, 229, 241, 45, 59, 225, 288, 72, 73, 78, 208, 156, 202, 215, 74, 76, 79, 80, 111, 85, 91, 97, 100, 102, 105, 119, 126, 127, 136, 146, 148, 157, 158, 159, 163, 164, 168, 176, 222, 383, 177, 178, 179, 411, 184, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 201, 203, 204, 205, 206, 258, 259, 260, 261, 209, 226, 227, 232, 233, 234, 240, 247, 248, 251, 254, 255, 270, 278, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 321, 323, 324, 328, 330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373,
        374, 375, 378, 380, 381, 388, 389, 403, 412, 429, 413, 414, 415, 416, 417, 418, 430, 423, 424, 425, 426, 427, 431, 117
    ];
    var Gj = {
        Ii: 0,
        si: 1,
        zi: 2,
        Ai: 4,
        Fi: 8,
        Bi: 16,
        Ci: 32,
        Hi: 64,
        Gi: 128,
        vi: 256,
        xi: 512,
        Ei: 1024,
        wi: 2048,
        yi: 4096,
        ti: 8192,
        Di: 16384
    };

    function Hj(a) {
        I.call(this, a)
    }
    r(Hj, I);

    function Ij(a) {
        I.call(this, a)
    }
    r(Ij, I);
    Ij.prototype.setVideoId = function(a) {
        return Od(this, 1, Jj, a)
    };
    Ij.prototype.getPlaylistId = function() {
        return Kd(this, 2 === Pd(this, Jj) ? 2 : -1)
    };
    var Jj = [1, 2];

    function Kj(a) {
        I.call(this, a, -1, Lj)
    }
    r(Kj, I);
    var Lj = [3];

    function Mj(a, b) {
        1 < b.length ? a[b[0]] = b[1] : 1 === b.length && Object.assign(a, b[0])
    };
    var ik = y.window,
        jk, kk, lk = (null == ik ? void 0 : null == (jk = ik.yt) ? void 0 : jk.config_) || (null == ik ? void 0 : null == (kk = ik.ytcfg) ? void 0 : kk.data_) || {};
    z("yt.config_", lk);

    function mk() {
        Mj(lk, arguments)
    }

    function L(a, b) {
        return a in lk ? lk[a] : b
    }

    function nk() {
        var a = lk.EXPERIMENT_FLAGS;
        return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
    };

    function M(a) {
        a = ok(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function pk(a, b) {
        a = ok(a);
        return void 0 === a && void 0 !== b ? b : Number(a || 0)
    }

    function qk() {
        return L("EXPERIMENTS_TOKEN", "")
    }

    function ok(a) {
        var b = L("EXPERIMENTS_FORCED_FLAGS", {});
        return void 0 !== b[a] ? b[a] : L("EXPERIMENT_FLAGS", {})[a]
    }

    function rk() {
        var a = [],
            b = L("EXPERIMENTS_FORCED_FLAGS", {});
        for (c in b) a.push({
            key: c,
            value: String(b[c])
        });
        var c = L("EXPERIMENT_FLAGS", {});
        for (var d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
            key: d,
            value: String(c[d])
        });
        return a
    };
    var sk = [];

    function tk(a) {
        sk.forEach(function(b) {
            return b(a)
        })
    }

    function uk(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                vk(b)
            }
        } : a
    }

    function vk(a, b, c, d) {
        var e = B("yt.logging.errors.log");
        e ? e(a, "ERROR", b, c, d) : (e = L("ERRORS", []), e.push([a, "ERROR", b, c, d]), mk("ERRORS", e));
        tk(a)
    }

    function wk(a, b, c, d) {
        var e = B("yt.logging.errors.log");
        e ? e(a, "WARNING", b, c, d) : (e = L("ERRORS", []), e.push([a, "WARNING", b, c, d]), mk("ERRORS", e))
    };

    function xk() {
        var a = yk;
        B("yt.ads.biscotti.getId_") || z("yt.ads.biscotti.getId_", a)
    }

    function zk(a) {
        z("yt.ads.biscotti.lastId_", a)
    };
    var Ak = /^[\w.]*$/,
        Bk = {
            q: !0,
            search_query: !0
        };

    function Ck(a, b) {
        b = a.split(b);
        for (var c = {}, d = 0, e = b.length; d < e; d++) {
            var f = b[d].split("=");
            if (1 == f.length && f[0] || 2 == f.length) try {
                var g = Dk(f[0] || ""),
                    h = Dk(f[1] || "");
                g in c ? Array.isArray(c[g]) ? kb(c[g], h) : c[g] = [c[g], h] : c[g] = h
            } catch (t) {
                var k = t,
                    m = f[0],
                    q = String(Ck);
                k.args = [{
                    key: m,
                    value: f[1],
                    query: a,
                    method: Ek == q ? "unchanged" : q
                }];
                Bk.hasOwnProperty(m) || wk(k)
            }
        }
        return c
    }
    var Ek = String(Ck);

    function Fk(a) {
        var b = [];
        lb(a, function(c, d) {
            var e = encodeURIComponent(String(d)),
                f;
            Array.isArray(c) ? f = c : f = [c];
            eb(f, function(g) {
                "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)))
            })
        });
        return b.join("&")
    }

    function Gk(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return Ck(a, "&")
    }

    function Hk(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), Gk(1 < a.length ? a[1] : a[0])) : {}
    }

    function Ik(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = Gk(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        return sc(a, e) + d
    }

    function Jk(a) {
        if (!b) var b = window.location.href;
        var c = kc(1, a),
            d = lc(a);
        c && d ? (a = a.match(ic), b = b.match(ic), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? lc(b) == d && (Number(kc(4, b)) || null) == (Number(kc(4, a)) || null) : !0;
        return a
    }

    function Dk(a) {
        return a && a.match(Ak) ? a : decodeURIComponent(a.replace(/\+/g, " "))
    };

    function Kk(a) {
        var b = Lk;
        a = void 0 === a ? B("yt.ads.biscotti.lastId_") || "" : a;
        var c = Object,
            d = c.assign,
            e = {};
        e.dt = Gh;
        e.flash = "0";
        a: {
            try {
                var f = b.i.top.location.href
            } catch (ya) {
                f = 2;
                break a
            }
            f = f ? f === b.j.location.href ? 0 : 1 : 2
        }
        e = (e.frm = f, e);
        try {
            e.u_tz = -(new Date).getTimezoneOffset();
            var g = void 0 === g ? uh : g;
            try {
                var h = g.history.length
            } catch (ya) {
                h = 0
            }
            e.u_his = h;
            var k;
            e.u_h = null == (k = uh.screen) ? void 0 : k.height;
            var m;
            e.u_w = null == (m = uh.screen) ? void 0 : m.width;
            var q;
            e.u_ah = null == (q = uh.screen) ? void 0 : q.availHeight;
            var t;
            e.u_aw =
                null == (t = uh.screen) ? void 0 : t.availWidth;
            var x;
            e.u_cd = null == (x = uh.screen) ? void 0 : x.colorDepth
        } catch (ya) {}
        h = b.i;
        try {
            var u = h.screenX;
            var A = h.screenY
        } catch (ya) {}
        try {
            var D = h.outerWidth;
            var F = h.outerHeight
        } catch (ya) {}
        try {
            var N = h.innerWidth;
            var O = h.innerHeight
        } catch (ya) {}
        try {
            var Q = h.screenLeft;
            var ca = h.screenTop
        } catch (ya) {}
        try {
            N = h.innerWidth, O = h.innerHeight
        } catch (ya) {}
        try {
            var V = h.screen.availWidth;
            var W = h.screen.availTop
        } catch (ya) {}
        u = [Q, ca, u, A, V, W, D, F, N, O];
        try {
            var Ta = (b.i.top || window).document,
                za = "CSS1Compat" ==
                Ta.compatMode ? Ta.documentElement : Ta.body;
            var H = (new $e(za.clientWidth, za.clientHeight)).round()
        } catch (ya) {
            H = new $e(-12245933, -12245933)
        }
        Ta = H;
        H = {};
        var Fa = void 0 === Fa ? y : Fa;
        za = new Ph;
        Fa.SVGElement && Fa.document.createElementNS && za.set(0);
        A = Dh();
        A["allow-top-navigation-by-user-activation"] && za.set(1);
        A["allow-popups-to-escape-sandbox"] && za.set(2);
        Fa.crypto && Fa.crypto.subtle && za.set(3);
        Fa.TextDecoder && Fa.TextEncoder && za.set(4);
        Fa = Qh(za);
        H.bc = Fa;
        H.bih = Ta.height;
        H.biw = Ta.width;
        H.brdim = u.join();
        b = b.j;
        b = (H.vis =
            b.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0, H.wgl = !!uh.WebGLRenderingContext, H);
        c = d.call(c, e, b);
        c.ca_type = "image";
        a && (c.bid = a);
        return c
    }
    var Lk = new function() {
        var a = window.document;
        this.i = window;
        this.j = a
    };
    z("yt.ads_.signals_.getAdSignalsString", function(a) {
        return Fk(Kk(a))
    });
    Date.now();
    var Mk = "XMLHttpRequest" in y ? function() {
        return new XMLHttpRequest
    } : null;

    function Nk() {
        if (!Mk) return null;
        var a = Mk();
        return "open" in a ? a : null
    }

    function Ok(a) {
        switch (a && "status" in a ? a.status : -1) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
                return !0;
            default:
                return !1
        }
    };

    function Pk(a, b) {
        "function" === typeof a && (a = uk(a));
        return window.setTimeout(a, b)
    }

    function Qk(a) {
        window.clearTimeout(a)
    };
    var Rk = {
            Authorization: "AUTHORIZATION",
            "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
            "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
            "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
            "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
            "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
            "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
            "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
            "X-YouTube-Device": "DEVICE",
            "X-Youtube-Identity-Token": "ID_TOKEN",
            "X-YouTube-Page-CL": "PAGE_CL",
            "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
            "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
        },
        Sk = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha(Hh)),
        Tk = !1;

    function Uk(a, b) {
        b = void 0 === b ? {} : b;
        var c = Jk(a),
            d = M("web_ajax_ignore_global_headers_if_set"),
            e;
        for (e in Rk) {
            var f = L(Rk[e]);
            M("enable_visitor_header_for_vss") && "X-Goog-Visitor-Id" === e && !f && (f = L("VISITOR_DATA"));
            !f || !c && lc(a) || d && void 0 !== b[e] || !M("enable_web_eom_visitor_data") && "X-Goog-EOM-Visitor-Id" === e || (b[e] = f)
        }
        "X-Goog-EOM-Visitor-Id" in b && "X-Goog-Visitor-Id" in b && delete b["X-Goog-Visitor-Id"];
        if (c || !lc(a)) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
        if (c || !lc(a)) {
            try {
                var g =
                    (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (h) {}
            g && (b["X-YouTube-Time-Zone"] = g)
        }
        if (c || !lc(a)) b["X-YouTube-Ad-Signals"] = Fk(Kk());
        return b
    }

    function Vk(a) {
        var b = window.location.search,
            c = lc(a);
        M("debug_handle_relative_url_for_query_forward_killswitch") || c || !Jk(a) || (c = document.location.hostname);
        var d = jc(kc(5, a));
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = Gk(b),
            f = {};
        eb(Sk, function(g) {
            e[g] && (f[g] = e[g])
        });
        return Ik(a, f || {}, !1)
    }

    function Wk(a, b) {
        var c = b.format || "JSON";
        a = Xk(a, b);
        var d = Yk(a, b),
            e = !1,
            f = Zk(a, function(k) {
                    if (!e) {
                        e = !0;
                        h && Qk(h);
                        var m = Ok(k),
                            q = null,
                            t = 400 <= k.status && 500 > k.status,
                            x = 500 <= k.status && 600 > k.status;
                        if (m || t || x) q = $k(a, c, k, b.convertToSafeHtml);
                        if (m) a: if (k && 204 == k.status) m = !0;
                            else {
                                switch (c) {
                                    case "XML":
                                        m = 0 == parseInt(q && q.return_code, 10);
                                        break a;
                                    case "RAW":
                                        m = !0;
                                        break a
                                }
                                m = !!q
                            }
                        q = q || {};
                        t = b.context || y;
                        m ? b.onSuccess && b.onSuccess.call(t, k, q) : b.onError && b.onError.call(t, k, q);
                        b.onFinish && b.onFinish.call(t, k, q)
                    }
                }, b.method,
                d, b.headers, b.responseType, b.withCredentials);
        d = b.timeout || 0;
        if (b.onTimeout && 0 < d) {
            var g = b.onTimeout;
            var h = Pk(function() {
                e || (e = !0, f.abort(), Qk(h), g.call(b.context || y, f))
            }, d)
        }
        return f
    }

    function Xk(a, b) {
        b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = L("XSRF_FIELD_NAME");
        if (b = b.urlParams) b[c] && delete b[c], a = Ik(a, b || {}, !0);
        return a
    }

    function Yk(a, b) {
        var c = L("XSRF_FIELD_NAME"),
            d = L("XSRF_TOKEN"),
            e = b.postBody || "",
            f = b.postParams,
            g = L("XSRF_FIELD_NAME"),
            h;
        b.headers && (h = b.headers["Content-Type"]);
        b.excludeXsrf || lc(a) && !b.withCredentials && lc(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
        f && "string" === typeof e && (e = Gk(e), vb(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : qc(e));
        f = e || f && !ob(f);
        !Tk && f && "POST" != b.method && (Tk = !0, vk(Error("AJAX request with postData should use POST")));
        return e
    }

    function $k(a, b, c, d) {
        var e = null;
        switch (b) {
            case "JSON":
                try {
                    var f = c.responseText
                } catch (g) {
                    throw d = Error("Error reading responseText"), d.params = a, wk(d), g;
                }
                a = c.getResponseHeader("Content-Type") || "";
                f && 0 <= a.indexOf("json") && (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)), e = JSON.parse(f));
                break;
            case "XML":
                if (a = (a = c.responseXML) ? al(a) : null) e = {}, eb(a.getElementsByTagName("*"), function(g) {
                    e[g.tagName] = bl(g)
                })
        }
        d && cl(e);
        return e
    }

    function cl(a) {
        if (Pa(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5, c = 0 <= c && b.indexOf("_html", c) == c);
                if (c) {
                    c = b;
                    Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");
                    var d = a[b],
                        e = xb();
                    d = e ? e.createHTML(d) : d;
                    a[c] = new bc(d)
                } else cl(a[b])
            }
    }

    function al(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function bl(a) {
        var b = "";
        eb(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    }

    function Zk(a, b, c, d, e, f, g) {
        function h() {
            4 == (k && "readyState" in k ? k.readyState : 0) && b && uk(b)(k)
        }
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var k = Nk();
        if (!k) return null;
        "onloadend" in k ? k.addEventListener("loadend", h, !1) : k.onreadystatechange = h;
        M("debug_forward_web_query_parameters") && (a = Vk(a));
        k.open(c, a, !0);
        f && (k.responseType = f);
        g && (k.withCredentials = !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = Uk(a, e))
            for (var m in e) k.setRequestHeader(m, e[m]), "content-type" == m.toLowerCase() && (c = !1);
        c && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        k.send(d);
        return k
    };

    function dl(a) {
        var b = this;
        this.i = void 0;
        a.addEventListener("beforeinstallprompt", function(c) {
            c.preventDefault();
            b.i = c
        })
    }

    function el() {
        if (!y.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
        try {
            return y.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : y.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : y.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : y.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
        } catch (a) {
            return "WEB_DISPLAY_MODE_UNKNOWN"
        }
    };

    function fl(a, b, c, d, e) {
        hg.set("" + a, b, {
            Za: c,
            path: "/",
            domain: void 0 === d ? "youtube.com" : d,
            secure: void 0 === e ? !1 : e
        })
    }

    function gl(a) {
        return hg.get("" + a, void 0)
    }

    function hl() {
        if (!hg.isEnabled()) return !1;
        if (!hg.isEmpty()) return !0;
        hg.set("TESTCOOKIESENABLED", "1", {
            Za: 60
        });
        if ("1" !== hg.get("TESTCOOKIESENABLED")) return !1;
        hg.remove("TESTCOOKIESENABLED");
        return !0
    };
    var il = B("ytglobal.prefsUserPrefsPrefs_") || {};
    z("ytglobal.prefsUserPrefsPrefs_", il);

    function jl() {
        this.i = L("ALT_PREF_COOKIE_NAME", "PREF");
        this.j = L("ALT_PREF_COOKIE_DOMAIN", "youtube.com");
        var a = gl(this.i);
        if (a) {
            a = decodeURIComponent(a).split("&");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (il[d] = c.toString())
            }
        }
    }
    jl.prototype.get = function(a, b) {
        kl(a);
        ll(a);
        a = void 0 !== il[a] ? il[a].toString() : null;
        return null != a ? a : b ? b : ""
    };
    jl.prototype.set = function(a, b) {
        kl(a);
        ll(a);
        if (null == b) throw Error("ExpectedNotNull");
        il[a] = b.toString()
    };

    function ml(a) {
        return !!((nl("f" + (Math.floor(a / 31) + 1)) || 0) & 1 << a % 31)
    }
    jl.prototype.remove = function(a) {
        kl(a);
        ll(a);
        delete il[a]
    };
    jl.prototype.clear = function() {
        for (var a in il) delete il[a]
    };

    function ll(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw Error("ExpectedRegexMatch: " + a);
    }

    function kl(a) {
        if (!/^\w+$/.test(a)) throw Error("ExpectedRegexMismatch: " + a);
    }

    function nl(a) {
        a = void 0 !== il[a] ? il[a].toString() : null;
        return null != a && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : null
    }
    Ma(jl);
    var ol = {
            bluetooth: "CONN_DISCO",
            cellular: "CONN_CELLULAR_UNKNOWN",
            ethernet: "CONN_WIFI",
            none: "CONN_NONE",
            wifi: "CONN_WIFI",
            wimax: "CONN_CELLULAR_4G",
            other: "CONN_UNKNOWN",
            unknown: "CONN_UNKNOWN",
            "slow-2g": "CONN_CELLULAR_2G",
            "2g": "CONN_CELLULAR_2G",
            "3g": "CONN_CELLULAR_3G",
            "4g": "CONN_CELLULAR_4G"
        },
        pl = {
            CONN_DEFAULT: 0,
            CONN_UNKNOWN: 1,
            CONN_NONE: 2,
            CONN_WIFI: 3,
            CONN_CELLULAR_2G: 4,
            CONN_CELLULAR_3G: 5,
            CONN_CELLULAR_4G: 6,
            CONN_CELLULAR_UNKNOWN: 7,
            CONN_DISCO: 8,
            CONN_CELLULAR_5G: 9,
            CONN_WIFI_METERED: 10,
            CONN_CELLULAR_5G_SA: 11,
            CONN_CELLULAR_5G_NSA: 12,
            CONN_INVALID: 31
        },
        ql = {
            EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
            EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
            EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
            EFFECTIVE_CONNECTION_TYPE_2G: 3,
            EFFECTIVE_CONNECTION_TYPE_3G: 4,
            EFFECTIVE_CONNECTION_TYPE_4G: 5
        },
        rl = {
            "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
            "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
            "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
            "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
        };

    function sl() {
        var a = y.navigator;
        return a ? a.connection : void 0
    }

    function tl() {
        var a = sl();
        if (a) {
            var b = ol[a.type || "unknown"] || "CONN_UNKNOWN";
            a = ol[a.effectiveType || "unknown"] || "CONN_UNKNOWN";
            "CONN_CELLULAR_UNKNOWN" === b && "CONN_UNKNOWN" !== a && (b = a);
            if ("CONN_UNKNOWN" !== b) return b;
            if ("CONN_UNKNOWN" !== a) return a
        }
    }

    function ul() {
        var a = sl();
        if (null != a && a.effectiveType) return rl.hasOwnProperty(a.effectiveType) ? rl[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN"
    };

    function vl() {
        return "INNERTUBE_API_KEY" in lk && "INNERTUBE_API_VERSION" in lk
    }

    function wl() {
        return {
            innertubeApiKey: L("INNERTUBE_API_KEY"),
            innertubeApiVersion: L("INNERTUBE_API_VERSION"),
            rb: L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            Tb: L("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            Jc: L("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
            innertubeContextClientVersion: L("INNERTUBE_CONTEXT_CLIENT_VERSION"),
            Vb: L("INNERTUBE_CONTEXT_HL"),
            Ub: L("INNERTUBE_CONTEXT_GL"),
            Kc: L("INNERTUBE_HOST_OVERRIDE") || "",
            Mc: !!L("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
            Lc: !!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
            appInstallData: L("SERIALIZED_CLIENT_CONFIG_DATA")
        }
    }

    function xl(a) {
        var b = {
            client: {
                hl: a.Vb,
                gl: a.Ub,
                clientName: a.Tb,
                clientVersion: a.innertubeContextClientVersion,
                configInfo: a.rb
            }
        };
        navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
        var c = y.devicePixelRatio;
        c && 1 != c && (b.client.screenDensityFloat = String(c));
        c = qk();
        "" !== c && (b.client.experimentsToken = c);
        c = rk();
        0 < c.length && (b.request = {
            internalExperimentFlags: c
        });
        yl(a, void 0, b);
        zl(void 0, b);
        Al(a, void 0, b);
        Bl(void 0, b);
        L("DELEGATED_SESSION_ID") && !M("pageid_as_header_web") && (b.user = {
            onBehalfOfUser: L("DELEGATED_SESSION_ID")
        });
        a = Object;
        c = a.assign;
        for (var d = b.client, e = {}, f = p(Object.entries(Gk(L("DEVICE", "")))), g = f.next(); !g.done; g = f.next()) {
            var h = p(g.value);
            g = h.next().value;
            h = h.next().value;
            "cbrand" === g ? e.deviceMake = h : "cmodel" === g ? e.deviceModel = h : "cbr" === g ? e.browserName = h : "cbrver" === g ? e.browserVersion = h : "cos" === g ? e.osName = h : "cosver" === g ? e.osVersion = h : "cplatform" === g && (e.platform = h)
        }
        b.client = c.call(a, d, e);
        return b
    }

    function Cl(a) {
        var b = new Pi,
            c = new Ii;
        E(c, 1, a.Vb);
        E(c, 2, a.Ub);
        E(c, 16, a.Jc);
        E(c, 17, a.innertubeContextClientVersion);
        if (a.rb) {
            var d = a.rb,
                e = new Ei;
            d.coldConfigData && E(e, 1, d.coldConfigData);
            d.appInstallData && E(e, 6, d.appInstallData);
            d.coldHashData && E(e, 3, d.coldHashData);
            d.hotHashData && E(e, 5, d.hotHashData);
            G(c, Ei, 62, e)
        }(d = y.devicePixelRatio) && 1 != d && E(c, 65, d);
        d = qk();
        "" !== d && E(c, 54, d);
        d = rk();
        if (0 < d.length) {
            e = new Ki;
            for (var f = 0; f < d.length; f++) {
                var g = new Ci;
                E(g, 1, d[f].key);
                g.setValue(d[f].value);
                Vd(e, 15, Ci,
                    g)
            }
            G(b, Ki, 5, e)
        }
        yl(a, c);
        zl(c);
        Al(a, c);
        Bl(c);
        L("DELEGATED_SESSION_ID") && !M("pageid_as_header_web") && (a = new Ni, E(a, 3, L("DELEGATED_SESSION_ID")));
        a = p(Object.entries(Gk(L("DEVICE", ""))));
        for (d = a.next(); !d.done; d = a.next()) e = p(d.value), d = e.next().value, e = e.next().value, "cbrand" === d ? E(c, 12, e) : "cmodel" === d ? E(c, 13, e) : "cbr" === d ? E(c, 87, e) : "cbrver" === d ? E(c, 88, e) : "cos" === d ? E(c, 18, e) : "cosver" === d ? E(c, 19, e) : "cplatform" === d && E(c, 42, e);
        G(b, Ii, 1, c);
        return b
    }

    function yl(a, b, c) {
        a = a.Tb;
        if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
            if (b) {
                c = Qd(b, Fi, 96) || new Fi;
                var d = el();
                d = Object.keys(Oh).indexOf(d);
                d = -1 === d ? null : d;
                null !== d && E(c, 3, d);
                G(b, Fi, 96, c)
            } else c && (c.client.mainAppWebInfo = null != (d = c.client.mainAppWebInfo) ? d : {}, c.client.mainAppWebInfo.webDisplayMode = el())
    }

    function zl(a, b) {
        var c;
        if (M("web_log_memory_total_kbytes") && (null == (c = y.navigator) ? 0 : c.deviceMemory)) {
            var d;
            c = null == (d = y.navigator) ? void 0 : d.deviceMemory;
            a ? E(a, 95, 1E6 * c) : b && (b.client.memoryTotalKbytes = "" + 1E6 * c)
        }
    }

    function Al(a, b, c) {
        if (a.appInstallData)
            if (b) {
                var d;
                c = null != (d = Qd(b, Ei, 62)) ? d : new Ei;
                E(c, 6, a.appInstallData);
                G(b, Ei, 62, c)
            } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
    }

    function Bl(a, b) {
        var c = tl();
        c && (a ? E(a, 61, pl[c]) : b && (b.client.connectionType = c));
        M("web_log_effective_connection_type") && (c = ul()) && (a ? E(a, 94, ql[c]) : b && (b.client.effectiveConnectionType = c))
    }

    function Dl(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {};
        M("enable_web_eom_visitor_data") && L("EOM_VISITOR_DATA") ? d = {
            "X-Goog-EOM-Visitor-Id": L("EOM_VISITOR_DATA")
        } : d = {
            "X-Goog-Visitor-Id": c.visitorData || L("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        (b = c.Zp || L("AUTHORIZATION")) || (a ? b = "Bearer " + B("gapi.auth.getToken")().Yp : b = lg([]));
        b && (d.Authorization = b, d["X-Goog-AuthUser"] = L("SESSION_INDEX", 0), M("pageid_as_header_web") && (d["X-Goog-PageId"] = L("DELEGATED_SESSION_ID")));
        return d
    };

    function El(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = lg();
        if (b) {
            var c = new Uh;
            c.update(L("INNERTUBE_API_KEY"));
            c.update(b);
            a.hash = cd(c.digest(), 3)
        }
        return a
    };

    function Fl(a) {
        var b = new ui;
        (b = b.isAvailable() ? a ? new Ai(b, a) : b : null) || (a = new vi(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.i = (a = b) ? new qi(a) : null;
        this.j = document.domain || window.location.hostname
    }
    Fl.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.i) try {
            this.i.set(a, b, Date.now() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape(pg(b))
        } catch (f) {
            return
        } else e = escape(b);
        fl(a, e, c, this.j)
    };
    Fl.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.i;
        if (!d) try {
            c = this.i.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = gl(a)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    Fl.prototype.remove = function(a) {
        this.i && this.i.remove(a);
        var b = this.j;
        hg.remove("" + a, "/", void 0 === b ? "youtube.com" : b)
    };
    var Gl = window,
        P = Gl.ytcsi && Gl.ytcsi.now ? Gl.ytcsi.now : Gl.performance && Gl.performance.timing && Gl.performance.now && Gl.performance.timing.navigationStart ? function() {
            return Gl.performance.timing.navigationStart + Gl.performance.now()
        } : function() {
            return (new Date).getTime()
        };
    var Hl;

    function Il() {
        Hl || (Hl = new Fl("yt.innertube"));
        return Hl
    }

    function Jl(a, b, c, d) {
        if (d) return null;
        d = Il().get("nextId", !0) || 1;
        var e = Il().get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: El(c),
            requestTime: Math.round(P())
        };
        Il().set("nextId", d + 1, 86400, !0);
        Il().set("requests", e, 86400, !0);
        return d
    }

    function Kl(a) {
        var b = Il().get("requests", !0) || {};
        delete b[a];
        Il().set("requests", b, 86400, !0)
    }

    function Ll(a) {
        var b = Il().get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round(P()) - d.requestTime)) {
                    var e = d.authState,
                        f = El(Dl(!1));
                    rb(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round(P())), Ml(a, d.method, e, {}));
                    delete b[c]
                }
            }
            Il().set("requests", b, 86400, !0)
        }
    };

    function Nl() {}

    function Ol(a, b) {
        return Pl(a, 0, b)
    }
    Nl.prototype.S = function(a, b) {
        return Pl(a, 1, b)
    };

    function Ql(a, b) {
        Pl(a, 2, b)
    }

    function Rl(a) {
        var b = B("yt.scheduler.instance.addImmediateJob");
        b ? b(a) : a()
    };

    function Sl() {
        Nl.apply(this, arguments)
    }
    r(Sl, Nl);

    function Tl() {
        Sl.i || (Sl.i = new Sl);
        return Sl.i
    }

    function Pl(a, b, c) {
        void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
        var d = B("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : Pk(a, c || 0)
    }
    Sl.prototype.aa = function(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = B("yt.scheduler.instance.cancelJob");
            b ? b(a) : Qk(a)
        }
    };
    Sl.prototype.start = function() {
        var a = B("yt.scheduler.instance.start");
        a && a()
    };
    Sl.prototype.pause = function() {
        var a = B("yt.scheduler.instance.pause");
        a && a()
    };
    var Mh = Tl();
    var Ul = Yc || Zc;

    function Vl(a) {
        var b = Qb();
        return b ? 0 <= b.toLowerCase().indexOf(a) : !1
    };
    var Wl = function() {
        var a;
        return function() {
            a || (a = new Fl("ytidb"));
            return a
        }
    }();

    function Xl() {
        var a;
        return null == (a = Wl()) ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0)
    };
    var Yl = [],
        Zl, $l = !1;

    function am() {
        var a = {};
        for (Zl = new bm(void 0 === a.handleError ? cm : a.handleError, void 0 === a.logEvent ? dm : a.logEvent); 0 < Yl.length;) switch (a = Yl.shift(), a.type) {
            case "ERROR":
                Zl.handleError(a.payload);
                break;
            case "EVENT":
                Zl.logEvent(a.eventType, a.payload)
        }
    }

    function em(a) {
        $l || (Zl ? Zl.handleError(a) : (Yl.push({
            type: "ERROR",
            payload: a
        }), 10 < Yl.length && Yl.shift()))
    }

    function fm(a, b) {
        $l || (Zl ? Zl.logEvent(a, b) : (Yl.push({
            type: "EVENT",
            eventType: a,
            payload: b
        }), 10 < Yl.length && Yl.shift()))
    };

    function R(a) {
        var b = Ia.apply(1, arguments);
        var c = Error.call(this, a);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.args = [].concat(ha(b))
    }
    r(R, Error);

    function gm() {
        try {
            return hm(), !0
        } catch (a) {
            return !1
        }
    }

    function hm(a) {
        if (void 0 !== L("DATASYNC_ID")) return L("DATASYNC_ID");
        throw new R("Datasync ID not set", void 0 === a ? "unknown" : a);
    };

    function im(a) {
        if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
    }

    function jm(a) {
        return a.substr(0, a.indexOf(":")) || a
    };
    var km = {},
        lm = (km.AUTH_INVALID = "No user identifier specified.", km.EXPLICIT_ABORT = "Transaction was explicitly aborted.", km.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", km.MISSING_INDEX = "Index not created.", km.MISSING_OBJECT_STORES = "Object stores not created.", km.DB_DELETED_BY_MISSING_OBJECT_STORES = "Database is deleted because expected object stores were not created.", km.DB_REOPENED_BY_MISSING_OBJECT_STORES = "Database is reopened because expected object stores were not created.", km.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.",
            km.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.", km.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", km.EXECUTE_TRANSACTION_ON_CLOSED_DB = "Can't start a transaction on a closed database", km.INCOMPATIBLE_DB_VERSION = "The binary is incompatible with the database version", km),
        mm = {},
        nm = (mm.AUTH_INVALID = "ERROR", mm.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", mm.EXPLICIT_ABORT = "IGNORED", mm.IDB_NOT_SUPPORTED = "ERROR", mm.MISSING_INDEX =
            "WARNING", mm.MISSING_OBJECT_STORES = "ERROR", mm.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING", mm.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING", mm.QUOTA_EXCEEDED = "WARNING", mm.QUOTA_MAYBE_EXCEEDED = "WARNING", mm.UNKNOWN_ABORT = "WARNING", mm.INCOMPATIBLE_DB_VERSION = "WARNING", mm),
        om = {},
        pm = (om.AUTH_INVALID = !1, om.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1, om.EXPLICIT_ABORT = !1, om.IDB_NOT_SUPPORTED = !1, om.MISSING_INDEX = !1, om.MISSING_OBJECT_STORES = !1, om.DB_DELETED_BY_MISSING_OBJECT_STORES = !1, om.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1, om.QUOTA_EXCEEDED = !1, om.QUOTA_MAYBE_EXCEEDED = !0, om.UNKNOWN_ABORT = !0, om.INCOMPATIBLE_DB_VERSION = !1, om);

    function qm(a, b, c, d, e) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? lm[a] : c;
        d = void 0 === d ? nm[a] : d;
        e = void 0 === e ? pm[a] : e;
        R.call(this, c, Object.assign({}, {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        this.i = e;
        Object.setPrototypeOf(this, qm.prototype)
    }
    r(qm, R);

    function rm(a, b) {
        qm.call(this, "MISSING_OBJECT_STORES", {
            expectedObjectStores: b,
            foundObjectStores: a
        }, lm.MISSING_OBJECT_STORES);
        Object.setPrototypeOf(this, rm.prototype)
    }
    r(rm, qm);

    function sm(a, b) {
        var c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.index = a;
        this.objectStore = b;
        Object.setPrototypeOf(this, sm.prototype)
    }
    r(sm, Error);
    var tm = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

    function um(a, b, c, d) {
        b = jm(b);
        var e = a instanceof Error ? a : Error("Unexpected error: " + a);
        if (e instanceof qm) return e;
        a = {
            objectStoreNames: c,
            dbName: b,
            dbVersion: d
        };
        if ("QuotaExceededError" === e.name) return new qm("QUOTA_EXCEEDED", a);
        if ($c && "UnknownError" === e.name) return new qm("QUOTA_MAYBE_EXCEEDED", a);
        if (e instanceof sm) return new qm("MISSING_INDEX", Object.assign({}, a, {
            objectStore: e.objectStore,
            index: e.index
        }));
        if ("InvalidStateError" === e.name && tm.some(function(f) {
                return e.message.includes(f)
            })) return new qm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
            a);
        if ("AbortError" === e.name) return new qm("UNKNOWN_ABORT", a, e.message);
        e.args = [Object.assign({}, a, {
            name: "IdbError",
            ac: e.name
        })];
        e.level = "WARNING";
        return e
    }

    function vm(a, b, c) {
        var d = Xl();
        return new qm("IDB_NOT_SUPPORTED", {
            context: {
                caller: a,
                publicName: b,
                version: c,
                hasSucceededOnce: null == d ? void 0 : d.hasSucceededOnce
            }
        })
    };

    function wm(a) {
        if (!a) throw Error();
        throw a;
    }

    function xm(a) {
        return a
    }

    function ym(a) {
        this.i = a
    }

    function zm(a) {
        function b(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "REJECTED",
                    reason: e
                };
                e = p(d.onRejected);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }

        function c(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "FULFILLED",
                    value: e
                };
                e = p(d.i);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }
        var d = this;
        this.state = {
            status: "PENDING"
        };
        this.i = [];
        this.onRejected = [];
        a = a.i;
        try {
            a(c, b)
        } catch (e) {
            b(e)
        }
    }
    zm.all = function(a) {
        return new zm(new ym(function(b, c) {
            var d = [],
                e = a.length;
            0 === e && b(d);
            for (var f = {
                    xa: 0
                }; f.xa < a.length; f = {
                    xa: f.xa
                }, ++f.xa) zm.resolve(a[f.xa]).then(function(g) {
                return function(h) {
                    d[g.xa] = h;
                    e--;
                    0 === e && b(d)
                }
            }(f)).catch(function(g) {
                c(g)
            })
        }))
    };
    zm.resolve = function(a) {
        return new zm(new ym(function(b, c) {
            a instanceof zm ? a.then(b, c) : b(a)
        }))
    };
    zm.reject = function(a) {
        return new zm(new ym(function(b, c) {
            c(a)
        }))
    };
    zm.prototype.then = function(a, b) {
        var c = this,
            d = null != a ? a : xm,
            e = null != b ? b : wm;
        return new zm(new ym(function(f, g) {
            "PENDING" === c.state.status ? (c.i.push(function() {
                Am(c, c, d, f, g)
            }), c.onRejected.push(function() {
                Bm(c, c, e, f, g)
            })) : "FULFILLED" === c.state.status ? Am(c, c, d, f, g) : "REJECTED" === c.state.status && Bm(c, c, e, f, g)
        }))
    };
    zm.prototype.catch = function(a) {
        return this.then(void 0, a)
    };

    function Am(a, b, c, d, e) {
        try {
            if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
            var f = c(a.state.value);
            f instanceof zm ? Cm(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function Bm(a, b, c, d, e) {
        try {
            if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
            var f = c(a.state.reason);
            f instanceof zm ? Cm(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function Cm(a, b, c, d, e) {
        b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function(f) {
            f instanceof zm ? Cm(a, b, f, d, e) : d(f)
        }, function(f) {
            e(f)
        })
    };

    function Dm(a, b, c) {
        function d() {
            c(a.error);
            f()
        }

        function e() {
            b(a.result);
            f()
        }

        function f() {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", d)
            } catch (g) {}
        }
        a.addEventListener("success", e);
        a.addEventListener("error", d)
    }

    function Em(a) {
        return new Promise(function(b, c) {
            Dm(a, b, c)
        })
    }

    function Fm(a) {
        return new zm(new ym(function(b, c) {
            Dm(a, b, c)
        }))
    };

    function Gm(a, b) {
        return new zm(new ym(function(c, d) {
            function e() {
                var f = a ? b(a) : null;
                f ? f.then(function(g) {
                    a = g;
                    e()
                }, d) : c()
            }
            e()
        }))
    };

    function Hm(a, b) {
        this.i = a;
        this.options = b;
        this.transactionCount = 0;
        this.l = Math.round(P());
        this.j = !1
    }
    l = Hm.prototype;
    l.add = function(a, b, c) {
        return Im(this, [a], {
            mode: "readwrite",
            U: !0
        }, function(d) {
            return d.objectStore(a).add(b, c)
        })
    };
    l.clear = function(a) {
        return Im(this, [a], {
            mode: "readwrite",
            U: !0
        }, function(b) {
            return b.objectStore(a).clear()
        })
    };
    l.close = function() {
        this.i.close();
        var a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    };
    l.count = function(a, b) {
        return Im(this, [a], {
            mode: "readonly",
            U: !0
        }, function(c) {
            return c.objectStore(a).count(b)
        })
    };

    function Jm(a, b, c) {
        a = a.i.createObjectStore(b, c);
        return new Km(a)
    }
    l.delete = function(a, b) {
        return Im(this, [a], {
            mode: "readwrite",
            U: !0
        }, function(c) {
            return c.objectStore(a).delete(b)
        })
    };
    l.get = function(a, b) {
        return Im(this, [a], {
            mode: "readonly",
            U: !0
        }, function(c) {
            return c.objectStore(a).get(b)
        })
    };

    function Lm(a, b) {
        return Im(a, ["LogsRequestsStore"], {
            mode: "readwrite",
            U: !0
        }, function(c) {
            c = c.objectStore("LogsRequestsStore");
            return Fm(c.i.put(b, void 0))
        })
    }
    l.objectStoreNames = function() {
        return Array.from(this.i.objectStoreNames)
    };

    function Im(a, b, c, d) {
        var e, f, g, h, k, m, q, t, x, u, A, D;
        return w(function(F) {
            switch (F.i) {
                case 1:
                    var N = {
                        mode: "readonly",
                        U: !1,
                        tag: "IDB_TRANSACTION_TAG_UNKNOWN"
                    };
                    "string" === typeof c ? N.mode = c : Object.assign(N, c);
                    e = N;
                    a.transactionCount++;
                    f = e.U ? 3 : 1;
                    g = 0;
                case 2:
                    if (h) {
                        F.u(3);
                        break
                    }
                    g++;
                    k = Math.round(P());
                    ua(F, 4);
                    m = a.i.transaction(b, e.mode);
                    N = new Mm(m);
                    N = Nm(N, d);
                    return v(F, N, 6);
                case 6:
                    return q = F.j, t = Math.round(P()), Om(a, k, t, g, void 0, b.join(), e), F.return(q);
                case 4:
                    x = wa(F);
                    u = Math.round(P());
                    A = um(x, a.i.name, b.join(), a.i.version);
                    if ((D = A instanceof qm && !A.i) || g >= f) Om(a, k, u, g, A, b.join(), e), h = A;
                    F.u(2);
                    break;
                case 3:
                    return F.return(Promise.reject(h))
            }
        })
    }

    function Om(a, b, c, d, e, f, g) {
        b = c - b;
        e ? (e instanceof qm && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && fm("QUOTA_EXCEEDED", {
            dbName: jm(a.i.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode
        }), e instanceof qm && "UNKNOWN_ABORT" === e.type && (c -= a.l, 0 > c && c >= Math.pow(2, 31) && (c = 0), fm("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c
        }), a.j = !0), Pm(a, !1, d, f, b, g.tag), em(e)) : Pm(a, !0, d, f, b, g.tag)
    }

    function Pm(a, b, c, d, e, f) {
        fm("TRANSACTION_ENDED", {
            objectStoreNames: d,
            connectionHasUnknownAbortedTransaction: a.j,
            duration: e,
            isSuccessful: b,
            tryCount: c,
            tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f
        })
    }
    l.getName = function() {
        return this.i.name
    };

    function Km(a) {
        this.i = a
    }
    l = Km.prototype;
    l.add = function(a, b) {
        return Fm(this.i.add(a, b))
    };
    l.autoIncrement = function() {
        return this.i.autoIncrement
    };
    l.clear = function() {
        return Fm(this.i.clear()).then(function() {})
    };
    l.count = function(a) {
        return Fm(this.i.count(a))
    };

    function Qm(a, b) {
        return Rm(a, {
            query: b
        }, function(c) {
            return c.delete().then(function() {
                return c.continue()
            })
        }).then(function() {})
    }
    l.delete = function(a) {
        return a instanceof IDBKeyRange ? Qm(this, a) : Fm(this.i.delete(a))
    };
    l.get = function(a) {
        return Fm(this.i.get(a))
    };
    l.index = function(a) {
        try {
            return new Sm(this.i.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new sm(a, this.i.name);
            throw b;
        }
    };
    l.getName = function() {
        return this.i.name
    };
    l.keyPath = function() {
        return this.i.keyPath
    };

    function Rm(a, b, c) {
        a = a.i.openCursor(b.query, b.direction);
        return Tm(a).then(function(d) {
            return Gm(d, c)
        })
    }

    function Mm(a) {
        var b = this;
        this.i = a;
        this.l = new Map;
        this.j = !1;
        this.done = new Promise(function(c, d) {
            b.i.addEventListener("complete", function() {
                c()
            });
            b.i.addEventListener("error", function(e) {
                e.currentTarget === e.target && d(b.i.error)
            });
            b.i.addEventListener("abort", function() {
                var e = b.i.error;
                if (e) d(e);
                else if (!b.j) {
                    e = qm;
                    for (var f = b.i.objectStoreNames, g = [], h = 0; h < f.length; h++) {
                        var k = f.item(h);
                        if (null === k) throw Error("Invariant: item in DOMStringList is null");
                        g.push(k)
                    }
                    e = new e("UNKNOWN_ABORT", {
                        objectStoreNames: g.join(),
                        dbName: b.i.db.name,
                        mode: b.i.mode
                    });
                    d(e)
                }
            })
        })
    }

    function Nm(a, b) {
        var c = new Promise(function(d, e) {
            try {
                b(a).then(function(f) {
                    d(f)
                }).catch(e)
            } catch (f) {
                e(f), a.abort()
            }
        });
        return Promise.all([c, a.done]).then(function(d) {
            return p(d).next().value
        })
    }
    Mm.prototype.abort = function() {
        this.i.abort();
        this.j = !0;
        throw new qm("EXPLICIT_ABORT");
    };
    Mm.prototype.objectStore = function(a) {
        a = this.i.objectStore(a);
        var b = this.l.get(a);
        b || (b = new Km(a), this.l.set(a, b));
        return b
    };

    function Sm(a) {
        this.i = a
    }
    l = Sm.prototype;
    l.count = function(a) {
        return Fm(this.i.count(a))
    };
    l.delete = function(a) {
        return Um(this, {
            query: a
        }, function(b) {
            return b.delete().then(function() {
                return b.continue()
            })
        })
    };
    l.get = function(a) {
        return Fm(this.i.get(a))
    };
    l.getKey = function(a) {
        return Fm(this.i.getKey(a))
    };
    l.keyPath = function() {
        return this.i.keyPath
    };
    l.unique = function() {
        return this.i.unique
    };

    function Um(a, b, c) {
        a = a.i.openCursor(void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction);
        return Tm(a).then(function(d) {
            return Gm(d, c)
        })
    }

    function Vm(a, b) {
        this.request = a;
        this.cursor = b
    }

    function Tm(a) {
        return Fm(a).then(function(b) {
            return b ? new Vm(a, b) : null
        })
    }
    l = Vm.prototype;
    l.advance = function(a) {
        this.cursor.advance(a);
        return Tm(this.request)
    };
    l.continue = function(a) {
        this.cursor.continue(a);
        return Tm(this.request)
    };
    l.delete = function() {
        return Fm(this.cursor.delete()).then(function() {})
    };
    l.getKey = function() {
        return this.cursor.key
    };
    l.getValue = function() {
        return this.cursor.value
    };
    l.update = function(a) {
        return Fm(this.cursor.update(a))
    };

    function Wm(a, b, c) {
        return new Promise(function(d, e) {
            function f() {
                x || (x = new Hm(g.result, {
                    closed: t
                }));
                return x
            }
            var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
            var h = c.blocked,
                k = c.blocking,
                m = c.md,
                q = c.upgrade,
                t = c.closed,
                x;
            g.addEventListener("upgradeneeded", function(u) {
                try {
                    if (null === u.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                    if (null === g.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                    u.dataLoss && "none" !== u.dataLoss && fm("IDB_DATA_CORRUPTED", {
                        reason: u.dataLossMessage || "unknown reason",
                        dbName: jm(a)
                    });
                    var A = f(),
                        D = new Mm(g.transaction);
                    q && q(A, function(F) {
                        return u.oldVersion < F && u.newVersion >= F
                    }, D);
                    D.done.catch(function(F) {
                        e(F)
                    })
                } catch (F) {
                    e(F)
                }
            });
            g.addEventListener("success", function() {
                var u = g.result;
                k && u.addEventListener("versionchange", function() {
                    k(f())
                });
                u.addEventListener("close", function() {
                    fm("IDB_UNEXPECTEDLY_CLOSED", {
                        dbName: jm(a),
                        dbVersion: u.version
                    });
                    m && m()
                });
                d(f())
            });
            g.addEventListener("error", function() {
                e(g.error)
            });
            h && g.addEventListener("blocked", function() {
                h()
            })
        })
    }

    function Xm(a, b, c) {
        c = void 0 === c ? {} : c;
        return Wm(a, b, c)
    }

    function Ym(a, b) {
        b = void 0 === b ? {} : b;
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.i) return ua(g, 2), c = self.indexedDB.deleteDatabase(a), d = b, (e = d.blocked) && c.addEventListener("blocked", function() {
                e()
            }), v(g, Em(c), 4);
            if (2 != g.i) return va(g, 0);
            f = wa(g);
            throw um(f, a, "", -1);
        })
    };

    function Zm(a) {
        return new Promise(function(b) {
            Ql(function() {
                b()
            }, a)
        })
    }

    function $m(a, b) {
        this.name = a;
        this.options = b;
        this.o = !0;
        this.s = this.m = 0;
        this.j = 500
    }
    $m.prototype.l = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return Xm(a, b, c)
    };
    $m.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return Ym(this.name, a)
    };

    function an(a, b) {
        return new qm("INCOMPATIBLE_DB_VERSION", {
            dbName: a.name,
            oldVersion: a.options.version,
            newVersion: b
        })
    }

    function bn(a, b) {
        if (!b) throw vm("openWithToken", jm(a.name));
        return cn(a)
    }

    function cn(a) {
        function b() {
            var f, g, h, k, m, q, t, x, u, A;
            return w(function(D) {
                switch (D.i) {
                    case 1:
                        return g = null != (f = Error().stack) ? f : "", ua(D, 2), v(D, a.l(a.name, a.options.version, d), 4);
                    case 4:
                        h = D.j;
                        for (var F = a.options, N = [], O = p(Object.keys(F.Ja)), Q = O.next(); !Q.done; Q = O.next()) {
                            Q = Q.value;
                            var ca = F.Ja[Q],
                                V = void 0 === ca.Vc ? Number.MAX_VALUE : ca.Vc;
                            !(h.i.version >= ca.ib) || h.i.version >= V || h.i.objectStoreNames.contains(Q) || N.push(Q)
                        }
                        k = N;
                        if (0 === k.length) {
                            D.u(5);
                            break
                        }
                        m = Object.keys(a.options.Ja);
                        q = h.objectStoreNames();
                        if (a.s < pk("ytidb_reopen_db_retries", 0)) return a.s++, h.close(), em(new qm("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: m,
                            foundObjectStores: q
                        })), D.return(b());
                        if (!(a.m < pk("ytidb_remake_db_retries", 1))) {
                            D.u(6);
                            break
                        }
                        a.m++;
                        if (!M("ytidb_remake_db_enable_backoff_delay")) {
                            D.u(7);
                            break
                        }
                        return v(D, Zm(a.j), 8);
                    case 8:
                        a.j *= 2;
                    case 7:
                        return v(D, a.delete(), 9);
                    case 9:
                        return em(new qm("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: m,
                            foundObjectStores: q
                        })), D.return(b());
                    case 6:
                        throw new rm(q, m);
                    case 5:
                        return D.return(h);
                    case 2:
                        t = wa(D);
                        if (t instanceof DOMException ? "VersionError" !== t.name : "DOMError" in self && t instanceof DOMError ? "VersionError" !== t.name : !(t instanceof Object && "message" in t) || "An attempt was made to open a database using a lower version than the existing version." !== t.message) {
                            D.u(10);
                            break
                        }
                        return v(D, a.l(a.name, void 0, Object.assign({}, d, {
                            upgrade: void 0
                        })), 11);
                    case 11:
                        x = D.j;
                        u = x.i.version;
                        if (void 0 !== a.options.version && u > a.options.version + 1) throw x.close(),
                            a.o = !1, an(a, u);
                        return D.return(x);
                    case 10:
                        throw c(), t instanceof Error && !M("ytidb_async_stack_killswitch") && (t.stack = t.stack + "\n" + g.substring(g.indexOf("\n") + 1)), um(t, a.name, "", null != (A = a.options.version) ? A : -1);
                }
            })
        }

        function c() {
            a.i === e && (a.i = void 0)
        }
        if (!a.o) throw an(a);
        if (a.i) return a.i;
        var d = {
            blocking: function(f) {
                f.close()
            },
            closed: c,
            md: c,
            upgrade: a.options.upgrade
        };
        var e = b();
        a.i = e;
        return a.i
    };
    var dn = new $m("YtIdbMeta", {
        Ja: {
            databases: {
                ib: 1
            }
        },
        upgrade: function(a, b) {
            b(1) && Jm(a, "databases", {
                keyPath: "actualName"
            })
        }
    });

    function en(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.i) return v(d, bn(dn, b), 2);
            c = d.j;
            return d.return(Im(c, ["databases"], {
                U: !0,
                mode: "readwrite"
            }, function(e) {
                var f = e.objectStore("databases");
                return f.get(a.actualName).then(function(g) {
                    if (g ? a.actualName !== g.actualName || a.publicName !== g.publicName || a.userIdentifier !== g.userIdentifier : 1) return Fm(f.i.put(a, void 0)).then(function() {})
                })
            }))
        })
    }

    function fn(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.i) return a ? v(d, bn(dn, b), 2) : d.return();
            c = d.j;
            return d.return(c.delete("databases", a))
        })
    }

    function gn(a, b) {
        var c, d;
        return w(function(e) {
            return 1 == e.i ? (c = [], v(e, bn(dn, b), 2)) : 3 != e.i ? (d = e.j, v(e, Im(d, ["databases"], {
                U: !0,
                mode: "readonly"
            }, function(f) {
                c.length = 0;
                return Rm(f.objectStore("databases"), {}, function(g) {
                    a(g.getValue()) && c.push(g.getValue());
                    return g.continue()
                })
            }), 3)) : e.return(c)
        })
    }

    function hn(a) {
        return gn(function(b) {
            return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier
        }, a)
    }

    function jn(a, b, c) {
        return gn(function(d) {
            return c ? void 0 !== d.userIdentifier && !a.includes(d.userIdentifier) && c.includes(d.publicName) : void 0 !== d.userIdentifier && !a.includes(d.userIdentifier)
        }, b)
    }

    function kn(a) {
        var b, c;
        return w(function(d) {
            if (1 == d.i) return b = hm("YtIdbMeta hasAnyMeta other"), v(d, gn(function(e) {
                return void 0 !== e.userIdentifier && e.userIdentifier !== b
            }, a), 2);
            c = d.j;
            return d.return(0 < c.length)
        })
    };
    var ln, mn = new function() {}(new function() {});

    function nn() {
        var a, b, c, d;
        return w(function(e) {
            switch (e.i) {
                case 1:
                    a = Xl();
                    if (null == (b = a) ? 0 : b.hasSucceededOnce) return e.return(!0);
                    var f;
                    if (f = Ul) f = /WebKit\/([0-9]+)/.exec(Qb()), f = !!(f && 600 <= parseInt(f[1], 10));
                    f && (f = /WebKit\/([0-9]+)/.exec(Qb()), f = !(f && 602 <= parseInt(f[1], 10)));
                    if (f || Kc) return e.return(!1);
                    try {
                        if (c = self, !(c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore)) return e.return(!1)
                    } catch (g) {
                        return e.return(!1)
                    }
                    if (!("IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype)) return e.return(!1);
                    ua(e, 2);
                    d = {
                        actualName: "yt-idb-test-do-not-use",
                        publicName: "yt-idb-test-do-not-use",
                        userIdentifier: void 0
                    };
                    return v(e, en(d, mn), 4);
                case 4:
                    return v(e, fn("yt-idb-test-do-not-use", mn), 5);
                case 5:
                    return e.return(!0);
                case 2:
                    return wa(e), e.return(!1)
            }
        })
    }

    function on() {
        if (void 0 !== ln) return ln;
        $l = !0;
        return ln = nn().then(function(a) {
            $l = !1;
            var b;
            if (null != (b = Wl()) && b.i) {
                var c;
                b = {
                    hasSucceededOnce: (null == (c = Xl()) ? void 0 : c.hasSucceededOnce) || a
                };
                var d;
                null == (d = Wl()) || d.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0)
            }
            return a
        })
    }

    function pn() {
        return B("ytglobal.idbToken_") || void 0
    }

    function qn() {
        var a = pn();
        return a ? Promise.resolve(a) : on().then(function(b) {
            (b = b ? mn : void 0) && z("ytglobal.idbToken_", b);
            return b
        })
    };
    var rn = 0;

    function sn(a, b) {
        rn || (rn = Mh.S(function() {
            var c, d, e, f, g;
            return w(function(h) {
                switch (h.i) {
                    case 1:
                        return v(h, qn(), 2);
                    case 2:
                        c = h.j;
                        if (!c) return h.return();
                        d = !0;
                        ua(h, 3);
                        return v(h, jn(a, c, b), 5);
                    case 5:
                        e = h.j;
                        if (!e.length) {
                            d = !1;
                            h.u(6);
                            break
                        }
                        f = e[0];
                        return v(h, Ym(f.actualName), 7);
                    case 7:
                        return v(h, fn(f.actualName, c), 6);
                    case 6:
                        va(h, 4);
                        break;
                    case 3:
                        g = wa(h), em(g), d = !1;
                    case 4:
                        Mh.aa(rn), rn = 0, d && sn(a, b), h.i = 0
                }
            })
        }))
    }

    function tn() {
        var a;
        return w(function(b) {
            return 1 == b.i ? v(b, qn(), 2) : (a = b.j) ? b.return(kn(a)) : b.return(!1)
        })
    }
    new sh;

    function un(a) {
        if (!gm()) throw a = new qm("AUTH_INVALID", {
            dbName: a
        }), em(a), a;
        var b = hm();
        return {
            actualName: a + ":" + b,
            publicName: a,
            userIdentifier: b
        }
    }

    function vn(a, b, c, d) {
        var e, f, g, h, k, m;
        return w(function(q) {
            switch (q.i) {
                case 1:
                    return f = null != (e = Error().stack) ? e : "", v(q, qn(), 2);
                case 2:
                    g = q.j;
                    if (!g) throw h = vm("openDbImpl", a, b), M("ytidb_async_stack_killswitch") || (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)), em(h), h;
                    im(a);
                    k = c ? {
                        actualName: a,
                        publicName: a,
                        userIdentifier: void 0
                    } : un(a);
                    ua(q, 3);
                    return v(q, en(k, g), 5);
                case 5:
                    return v(q, Xm(k.actualName, b, d), 6);
                case 6:
                    return q.return(q.j);
                case 3:
                    return m = wa(q), ua(q, 7), v(q, fn(k.actualName, g), 9);
                case 9:
                    va(q,
                        8);
                    break;
                case 7:
                    wa(q);
                case 8:
                    throw m;
            }
        })
    }

    function wn(a, b, c) {
        c = void 0 === c ? {} : c;
        return vn(a, b, !1, c)
    }

    function xn(a, b, c) {
        c = void 0 === c ? {} : c;
        return vn(a, b, !0, c)
    }

    function yn(a, b) {
        b = void 0 === b ? {} : b;
        var c, d;
        return w(function(e) {
            if (1 == e.i) return v(e, qn(), 2);
            if (3 != e.i) {
                c = e.j;
                if (!c) return e.return();
                im(a);
                d = un(a);
                return v(e, Ym(d.actualName, b), 3)
            }
            return v(e, fn(d.actualName, c), 0)
        })
    }

    function zn(a, b, c) {
        a = a.map(function(d) {
            return w(function(e) {
                return 1 == e.i ? v(e, Ym(d.actualName, b), 2) : v(e, fn(d.actualName, c), 0)
            })
        });
        return Promise.all(a).then(function() {})
    }

    function An() {
        var a = void 0 === a ? {} : a;
        var b, c;
        return w(function(d) {
            if (1 == d.i) return v(d, qn(), 2);
            if (3 != d.i) {
                b = d.j;
                if (!b) return d.return();
                im("LogsDatabaseV2");
                return v(d, hn(b), 3)
            }
            c = d.j;
            return v(d, zn(c, a, b), 0)
        })
    }

    function Bn(a, b) {
        b = void 0 === b ? {} : b;
        var c;
        return w(function(d) {
            if (1 == d.i) return v(d, qn(), 2);
            if (3 != d.i) {
                c = d.j;
                if (!c) return d.return();
                im(a);
                return v(d, Ym(a, b), 3)
            }
            return v(d, fn(a, c), 0)
        })
    };

    function Cn(a) {
        this.Sa = this.i = !1;
        this.potentialEsfErrorCounter = this.j = 0;
        this.handleError = function() {};
        this.Aa = function() {};
        this.now = Date.now;
        this.Ha = !1;
        var b;
        this.lc = null != (b = a.lc) ? b : 100;
        var c;
        this.hc = null != (c = a.hc) ? c : 1;
        var d;
        this.ec = null != (d = a.ec) ? d : 2592E6;
        var e;
        this.cc = null != (e = a.cc) ? e : 12E4;
        var f;
        this.fc = null != (f = a.fc) ? f : 5E3;
        var g;
        this.H = null != (g = a.H) ? g : void 0;
        this.Wa = !!a.Wa;
        var h;
        this.Va = null != (h = a.Va) ? h : .1;
        var k;
        this.bb = null != (k = a.bb) ? k : 10;
        a.handleError && (this.handleError = a.handleError);
        a.Aa && (this.Aa = a.Aa);
        a.Ha && (this.Ha = a.Ha);
        a.Sa && (this.Sa = a.Sa);
        this.I = a.I;
        this.ba = a.ba;
        this.N = a.N;
        this.M = a.M;
        this.ia = a.ia;
        this.wb =
            a.wb;
        this.vb = a.vb;
        Dn(this) && (!this.I || this.I("networkless_logging")) && En(this)
    }

    function En(a) {
        Dn(a) && !a.Ha && (a.i = !0, a.Wa && Math.random() <= a.Va && a.N.Ac(a.H), Fn(a), a.M.L() && a.Ma(), a.M.W(a.wb, a.Ma.bind(a)), a.M.W(a.vb, a.Hb.bind(a)))
    }
    l = Cn.prototype;
    l.writeThenSend = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (Dn(this) && this.i) {
            var d = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.N.set(d, this.H).then(function(e) {
                d.id = e;
                c.M.L() && Gn(c, d)
            }).catch(function(e) {
                Gn(c, d);
                Hn(c, e)
            })
        } else this.ia(a, b)
    };
    l.sendThenWrite = function(a, b, c) {
        var d = this;
        b = void 0 === b ? {} : b;
        if (Dn(this) && this.i) {
            var e = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.I && this.I("nwl_skip_retry") && (e.skipRetry = c);
            if (this.M.L() || this.I && this.I("nwl_aggressive_send_then_write") && !e.skipRetry) {
                if (!e.skipRetry) {
                    var f = b.onError ? b.onError : function() {};
                    b.onError = function(g, h) {
                        return w(function(k) {
                            if (1 == k.i) return v(k, d.N.set(e, d.H).catch(function(m) {
                                Hn(d, m)
                            }), 2);
                            f(g, h);
                            k.i = 0
                        })
                    }
                }
                this.ia(a, b, e.skipRetry)
            } else this.N.set(e, this.H).catch(function(g) {
                d.ia(a, b, e.skipRetry);
                Hn(d, g)
            })
        } else this.ia(a, b, this.I && this.I("nwl_skip_retry") && c)
    };
    l.sendAndWrite = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (Dn(this) && this.i) {
            var d = {
                    url: a,
                    options: b,
                    timestamp: this.now(),
                    status: "NEW",
                    sendCount: 0
                },
                e = !1,
                f = b.onSuccess ? b.onSuccess : function() {};
            d.options.onSuccess = function(g, h) {
                void 0 !== d.id ? c.N.za(d.id, c.H) : e = !0;
                c.M.ha && c.I && c.I("vss_network_hint") && c.M.ha(!0);
                f(g, h)
            };
            this.ia(d.url, d.options);
            this.N.set(d, this.H).then(function(g) {
                d.id = g;
                e && c.N.za(d.id, c.H)
            }).catch(function(g) {
                Hn(c, g)
            })
        } else this.ia(a, b)
    };
    l.Ma = function() {
        var a = this;
        if (!Dn(this)) throw vm("throttleSend");
        this.j || (this.j = this.ba.S(function() {
            var b;
            return w(function(c) {
                if (1 == c.i) return v(c, a.N.Sb("NEW", a.H), 2);
                if (3 != c.i) return b = c.j, b ? v(c, Gn(a, b), 3) : (a.Hb(), c.return());
                a.j && (a.j = 0, a.Ma());
                c.i = 0
            })
        }, this.lc))
    };
    l.Hb = function() {
        this.ba.aa(this.j);
        this.j = 0
    };

    function Gn(a, b) {
        var c, d;
        return w(function(e) {
            switch (e.i) {
                case 1:
                    if (!Dn(a)) throw c = vm("immediateSend"), c;
                    if (void 0 === b.id) {
                        e.u(2);
                        break
                    }
                    return v(e, a.N.Nc(b.id, a.H), 3);
                case 3:
                    (d = e.j) ? b = d: a.Aa(Error("The request cannot be found in the database."));
                case 2:
                    if (In(a, b, a.ec)) {
                        e.u(4);
                        break
                    }
                    a.Aa(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === b.id) {
                        e.u(5);
                        break
                    }
                    return v(e, a.N.za(b.id, a.H), 5);
                case 5:
                    return e.return();
                case 4:
                    b.skipRetry || (b = Jn(a, b));
                    if (!b) {
                        e.u(0);
                        break
                    }
                    if (!b.skipRetry ||
                        void 0 === b.id) {
                        e.u(8);
                        break
                    }
                    return v(e, a.N.za(b.id, a.H), 8);
                case 8:
                    a.ia(b.url, b.options, !!b.skipRetry), e.i = 0
            }
        })
    }

    function Jn(a, b) {
        if (!Dn(a)) throw vm("updateRequestHandlers");
        var c = b.options.onError ? b.options.onError : function() {};
        b.options.onError = function(e, f) {
            var g, h, k;
            return w(function(m) {
                switch (m.i) {
                    case 1:
                        g = Kn(f);
                        if (!(a.I && a.I("nwl_consider_error_code") && g || a.I && !a.I("nwl_consider_error_code") && a.potentialEsfErrorCounter <= a.bb)) {
                            m.u(2);
                            break
                        }
                        if (!a.M.ja) {
                            m.u(3);
                            break
                        }
                        return v(m, a.M.ja(), 3);
                    case 3:
                        if (a.M.L()) {
                            m.u(2);
                            break
                        }
                        c(e, f);
                        if (!a.I || !a.I("nwl_consider_error_code") || void 0 === (null == (h = b) ? void 0 : h.id)) {
                            m.u(6);
                            break
                        }
                        return v(m, a.N.yb(b.id, a.H, !1), 6);
                    case 6:
                        return m.return();
                    case 2:
                        if (a.I && a.I("nwl_consider_error_code") &&
                            !g && a.potentialEsfErrorCounter > a.bb) return m.return();
                        a.potentialEsfErrorCounter++;
                        if (void 0 === (null == (k = b) ? void 0 : k.id)) {
                            m.u(8);
                            break
                        }
                        return b.sendCount < a.hc ? v(m, a.N.yb(b.id, a.H), 12) : v(m, a.N.za(b.id, a.H), 8);
                    case 12:
                        a.ba.S(function() {
                            a.M.L() && a.Ma()
                        }, a.fc);
                    case 8:
                        c(e, f), m.i = 0
                }
            })
        };
        var d = b.options.onSuccess ? b.options.onSuccess : function() {};
        b.options.onSuccess = function(e, f) {
            var g;
            return w(function(h) {
                if (1 == h.i) return void 0 === (null == (g = b) ? void 0 : g.id) ? h.u(2) : v(h, a.N.za(b.id, a.H), 2);
                a.M.ha && a.I && a.I("vss_network_hint") && a.M.ha(!0);
                d(e, f);
                h.i = 0
            })
        };
        return b
    }

    function In(a, b, c) {
        b = b.timestamp;
        return a.now() - b >= c ? !1 : !0
    }

    function Fn(a) {
        if (!Dn(a)) throw vm("retryQueuedRequests");
        a.N.Sb("QUEUED", a.H).then(function(b) {
            b && !In(a, b, a.cc) ? a.ba.S(function() {
                return w(function(c) {
                    if (1 == c.i) return void 0 === b.id ? c.u(2) : v(c, a.N.yb(b.id, a.H), 2);
                    Fn(a);
                    c.i = 0
                })
            }) : a.M.L() && a.Ma()
        })
    }

    function Hn(a, b) {
        a.oc && !a.M.L() ? a.oc(b) : a.handleError(b)
    }

    function Dn(a) {
        return !!a.H || a.Sa
    }

    function Kn(a) {
        var b;
        return (a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code) && 400 <= a && 599 >= a ? !1 : !0
    };

    function Ln(a, b) {
        this.version = a;
        this.args = b
    };

    function Mn(a, b) {
        this.topic = a;
        this.i = b
    }
    Mn.prototype.toString = function() {
        return this.topic
    };
    var Nn = B("ytPubsub2Pubsub2Instance") || new K;
    K.prototype.subscribe = K.prototype.subscribe;
    K.prototype.unsubscribeByKey = K.prototype.Ea;
    K.prototype.publish = K.prototype.qa;
    K.prototype.clear = K.prototype.clear;
    z("ytPubsub2Pubsub2Instance", Nn);
    var On = B("ytPubsub2Pubsub2SubscribedKeys") || {};
    z("ytPubsub2Pubsub2SubscribedKeys", On);
    var Pn = B("ytPubsub2Pubsub2TopicToKeys") || {};
    z("ytPubsub2Pubsub2TopicToKeys", Pn);
    var Qn = B("ytPubsub2Pubsub2IsAsync") || {};
    z("ytPubsub2Pubsub2IsAsync", Qn);
    z("ytPubsub2Pubsub2SkipSubKey", null);

    function Rn(a, b) {
        var c = Sn();
        c && c.publish.call(c, a.toString(), a, b)
    }

    function Tn(a) {
        var b = Un,
            c = Sn();
        if (!c) return 0;
        var d = c.subscribe(b.toString(), function(e, f) {
            var g = B("ytPubsub2Pubsub2SkipSubKey");
            g && g == d || (g = function() {
                if (On[d]) try {
                    if (f && b instanceof Mn && b != e) try {
                        var h = b.i,
                            k = f;
                        if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                        try {
                            if (!h.oa) {
                                var m = new h;
                                h.oa = m.version
                            }
                            var q = h.oa
                        } catch (F) {}
                        if (!q || k.version != q) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                        try {
                            q = Reflect;
                            var t = q.construct;
                            var x = k.args,
                                u = x.length;
                            if (0 < u) {
                                var A = Array(u);
                                for (k = 0; k < u; k++) A[k] = x[k];
                                var D = A
                            } else D = [];
                            f = t.call(q, h, D)
                        } catch (F) {
                            throw F.message = "yt.pubsub2.Data.deserialize(): " + F.message, F;
                        }
                    } catch (F) {
                        throw F.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + F.message, F;
                    }
                    a.call(window, f)
                } catch (F) {
                    vk(F)
                }
            }, Qn[b.toString()] ? B("yt.scheduler.instance") ? Mh.S(g) : Pk(g, 0) : g())
        });
        On[d] = !0;
        Pn[b.toString()] || (Pn[b.toString()] = []);
        Pn[b.toString()].push(d);
        return d
    }

    function Vn() {
        var a = Wn,
            b = Tn(function(c) {
                a.apply(void 0, arguments);
                Xn(b)
            });
        return b
    }

    function Xn(a) {
        var b = Sn();
        b && ("number" === typeof a && (a = [a]), eb(a, function(c) {
            b.unsubscribeByKey(c);
            delete On[c]
        }))
    }

    function Sn() {
        return B("ytPubsub2Pubsub2Instance")
    };

    function Yn(a, b) {
        $m.call(this, a, b);
        this.options = b;
        im(a)
    }
    r(Yn, $m);

    function Zn(a, b) {
        var c;
        return function() {
            c || (c = new Yn(a, b));
            return c
        }
    }
    Yn.prototype.l = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return (this.options.zb ? xn : wn)(a, b, Object.assign({}, c))
    };
    Yn.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return (this.options.zb ? Bn : yn)(this.name, a)
    };

    function $n(a, b) {
        return Zn(a, b)
    };
    var ao;

    function bo() {
        if (ao) return ao();
        var a = {};
        ao = $n("LogsDatabaseV2", {
            Ja: (a.LogsRequestsStore = {
                ib: 2
            }, a),
            zb: !1,
            upgrade: function(b, c, d) {
                c(2) && Jm(b, "LogsRequestsStore", {
                    keyPath: "id",
                    autoIncrement: !0
                });
                c(3);
                c(5) && (d = d.objectStore("LogsRequestsStore"), d.i.indexNames.contains("newRequest") && d.i.deleteIndex("newRequest"), d.i.createIndex("newRequestV2", ["status", "interface", "timestamp"], {
                    unique: !1
                }));
                c(7) && b.i.objectStoreNames.contains("sapisid") && b.i.deleteObjectStore("sapisid");
                c(9) && b.i.objectStoreNames.contains("SWHealthLog") && b.i.deleteObjectStore("SWHealthLog")
            },
            version: 9
        });
        return ao()
    };

    function co(a) {
        return bn(bo(), a)
    }

    function eo(a, b) {
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.i) return c = {
                startTime: P(),
                transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
            }, v(g, co(b), 2);
            if (3 != g.i) return d = g.j, e = Object.assign({}, a, {
                options: JSON.parse(JSON.stringify(a.options)),
                interface: L("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
            }), v(g, Lm(d, e), 3);
            f = g.j;
            c.od = P();
            fo(c);
            return g.return(f)
        })
    }

    function go(a, b) {
        var c, d, e, f, g, h, k;
        return w(function(m) {
            if (1 == m.i) return c = {
                startTime: P(),
                transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
            }, v(m, co(b), 2);
            if (3 != m.i) return d = m.j, e = L("INNERTUBE_CONTEXT_CLIENT_NAME", 0), f = [a, e, 0], g = [a, e, P()], h = IDBKeyRange.bound(f, g), k = void 0, v(m, Im(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                U: !0
            }, function(q) {
                return Um(q.objectStore("LogsRequestsStore").index("newRequestV2"), {
                    query: h,
                    direction: "prev"
                }, function(t) {
                    t.getValue() && (k = t.getValue(), "NEW" === a && (k.status = "QUEUED",
                        t.update(k)))
                })
            }), 3);
            c.od = P();
            fo(c);
            return m.return(k)
        })
    }

    function ho(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.i) return v(d, co(b), 2);
            c = d.j;
            return d.return(Im(c, ["LogsRequestsStore"], {
                mode: "readwrite",
                U: !0
            }, function(e) {
                var f = e.objectStore("LogsRequestsStore");
                return f.get(a).then(function(g) {
                    if (g) return g.status = "QUEUED", Fm(f.i.put(g, void 0)).then(function() {
                        return g
                    })
                })
            }))
        })
    }

    function io(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d;
        return w(function(e) {
            if (1 == e.i) return v(e, co(b), 2);
            d = e.j;
            return e.return(Im(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                U: !0
            }, function(f) {
                var g = f.objectStore("LogsRequestsStore");
                return g.get(a).then(function(h) {
                    return h ? (h.status = "NEW", c && (h.sendCount += 1), Fm(g.i.put(h, void 0)).then(function() {
                        return h
                    })) : zm.resolve(void 0)
                })
            }))
        })
    }

    function jo(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.i) return v(d, co(b), 2);
            c = d.j;
            return d.return(c.delete("LogsRequestsStore", a))
        })
    }

    function ko(a) {
        var b, c;
        return w(function(d) {
            if (1 == d.i) return v(d, co(a), 2);
            b = d.j;
            c = P() - 2592E6;
            return v(d, Im(b, ["LogsRequestsStore"], {
                mode: "readwrite",
                U: !0
            }, function(e) {
                return Rm(e.objectStore("LogsRequestsStore"), {}, function(f) {
                    if (f.getValue().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function lo() {
        return w(function(a) {
            return v(a, An(), 0)
        })
    }

    function fo(a) {
        M("nwl_csi_killswitch") || .01 >= Math.random() && Rn("nwl_transaction_latency_payload", a)
    };
    var mo = {},
        no = $n("ServiceWorkerLogsDatabase", {
            Ja: (mo.SWHealthLog = {
                ib: 1
            }, mo),
            zb: !0,
            upgrade: function(a, b) {
                b(1) && Jm(a, "SWHealthLog", {
                    keyPath: "id",
                    autoIncrement: !0
                }).i.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
                    unique: !1
                })
            },
            version: 1
        });

    function oo(a) {
        return bn(no(), a)
    }

    function po(a) {
        var b, c;
        return w(function(d) {
            if (1 == d.i) return v(d, oo(a), 2);
            b = d.j;
            c = P() - 2592E6;
            return v(d, Im(b, ["SWHealthLog"], {
                mode: "readwrite",
                U: !0
            }, function(e) {
                return Rm(e.objectStore("SWHealthLog"), {}, function(f) {
                    if (f.getValue().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function qo(a) {
        var b;
        return w(function(c) {
            if (1 == c.i) return v(c, oo(a), 2);
            b = c.j;
            return v(c, b.clear("SWHealthLog"), 0)
        })
    };
    var ro = {},
        so = 0;

    function to(a) {
        var b = void 0 === b ? "" : b;
        var c = void 0 === c ? !1 : c;
        if (a)
            if (b) Zk(a, void 0, "POST", b);
            else if (L("USE_NET_AJAX_FOR_PING_TRANSPORT", !1)) Zk(a, void 0, "GET", "", void 0, void 0, c);
        else {
            b: {
                try {
                    var d = new ab({
                        url: a
                    });
                    if (d.l && d.j || d.o) {
                        var e = jc(kc(5, a)),
                            f;
                        if (!(f = !e || !e.endsWith("/aclk"))) {
                            var g = a.search(yc),
                                h = xc(a, 0, "ri", g);
                            if (0 > h) var k = null;
                            else {
                                var m = a.indexOf("&", h);
                                if (0 > m || m > g) m = g;
                                k = decodeURIComponent(a.slice(h + 3, -1 !== m ? m : 0).replace(/\+/g, " "))
                            }
                            f = "1" !== k
                        }
                        var q = !f;
                        break b
                    }
                } catch (x) {}
                q = !1
            }
            if (q) {
                b: {
                    try {
                        if (window.navigator &&
                            window.navigator.sendBeacon && window.navigator.sendBeacon(a, "")) {
                            var t = !0;
                            break b
                        }
                    } catch (x) {}
                    t = !1
                }
                b = t ? !0 : !1
            }
            else b = !1;b || uo(a)
        }
    }

    function uo(a) {
        var b = new Image,
            c = "" + so++;
        ro[c] = b;
        b.onload = b.onerror = function() {
            delete ro[c]
        };
        b.src = a
    };

    function vo() {
        this.i = new Map;
        this.j = !1
    }

    function wo() {
        if (!vo.i) {
            var a = B("yt.networkRequestMonitor.instance") || new vo;
            z("yt.networkRequestMonitor.instance", a);
            vo.i = a
        }
        return vo.i
    }
    vo.prototype.requestComplete = function(a, b) {
        b && (this.j = !0);
        a = this.removeParams(a);
        this.i.get(a) || this.i.set(a, b)
    };
    vo.prototype.isEndpointCFR = function(a) {
        a = this.removeParams(a);
        return (a = this.i.get(a)) ? !1 : !1 === a && this.j ? !0 : null
    };
    vo.prototype.removeParams = function(a) {
        return a.split("?")[0]
    };
    vo.prototype.removeParams = vo.prototype.removeParams;
    vo.prototype.isEndpointCFR = vo.prototype.isEndpointCFR;
    vo.prototype.requestComplete = vo.prototype.requestComplete;
    vo.getInstance = wo;
    var xo;

    function yo() {
        xo || (xo = new Fl("yt.offline"));
        return xo
    }

    function zo(a) {
        if (M("offline_error_handling")) {
            var b = yo().get("errors", !0) || {};
            b[a.message] = {
                name: a.name,
                stack: a.stack
            };
            a.level && (b[a.message].level = a.level);
            yo().set("errors", b, 2592E3, !0)
        }
    }

    function Ao() {
        if (M("offline_error_handling")) {
            var a = yo().get("errors", !0);
            if (a) {
                for (var b in a)
                    if (a[b]) {
                        var c = new R(b, "sent via offline_errors");
                        c.name = a[b].name;
                        c.stack = a[b].stack;
                        c.level = a[b].level;
                        vk(c)
                    }
                yo().set("errors", {}, 2592E3, !0)
            }
        }
    };
    var Bo = pk("network_polling_interval", 3E4);

    function Co() {
        Te.call(this);
        var a = this;
        this.G = 0;
        this.v = this.m = !1;
        this.l = this.qb();
        M("use_shared_nsm") ? (this.j = Lh(), M("use_shared_nsm_and_keep_yt_online_updated") && (this.j.W("networkstatus-online", function() {
            a.l = !0;
            a.v && Ao()
        }), this.j.W("networkstatus-offline", function() {
            a.l = !1
        }))) : (Do(this), Eo(this))
    }
    r(Co, Te);

    function Fo() {
        if (!Co.i) {
            var a = B("yt.networkStatusManager.instance") || new Co;
            z("yt.networkStatusManager.instance", a);
            Co.i = a
        }
        return Co.i
    }
    l = Co.prototype;
    l.L = function() {
        if (M("use_shared_nsm") && this.j) {
            var a;
            return null == (a = this.j) ? void 0 : a.L()
        }
        return this.l
    };
    l.ha = function(a) {
        if (M("use_shared_nsm") && this.j) {
            var b;
            null != (b = this.j) && (b.j = a)
        } else a !== this.l && (this.l = a)
    };
    l.Oc = function(a) {
        !M("use_shared_nsm") && (this.m = !0, void 0 === a ? 0 : a) && (this.G || Go(this))
    };
    l.qb = function() {
        var a = window.navigator.onLine;
        return void 0 === a ? !0 : a
    };
    l.Ec = function() {
        this.v = !0
    };
    l.W = function(a, b) {
        return M("use_shared_nsm") && this.j ? this.j.W(a, b) : Te.prototype.W.call(this, a, b)
    };

    function Eo(a) {
        window.addEventListener("online", function() {
            return w(function(b) {
                if (1 == b.i) return v(b, a.ja(), 2);
                a.v && Ao();
                b.i = 0
            })
        })
    }

    function Do(a) {
        window.addEventListener("offline", function() {
            return w(function(b) {
                return v(b, a.ja(), 0)
            })
        })
    }

    function Go(a) {
        a.G = Ol(function() {
            return w(function(b) {
                if (1 == b.i) return a.l ? a.qb() || !a.m ? b.u(3) : v(b, a.ja(), 3) : v(b, a.ja(), 3);
                Go(a);
                b.i = 0
            })
        }, Bo)
    }
    l.ja = function(a) {
        var b = this;
        if (M("use_shared_nsm") && this.j) {
            var c = Jh(this.j, a);
            c.then(function(d) {
                M("use_cfr_monitor") && wo().requestComplete("generate_204", d)
            });
            return c
        }
        return this.s ? this.s : this.s = new Promise(function(d) {
            var e, f, g, h;
            return w(function(k) {
                switch (k.i) {
                    case 1:
                        return e = window.AbortController ? new window.AbortController : void 0, g = null == (f = e) ? void 0 : f.signal, h = !1, ua(k, 2, 3), e && (b.B = Mh.S(function() {
                            e.abort()
                        }, a || 2E4)), v(k, fetch("/generate_204", {
                            method: "HEAD",
                            signal: g
                        }), 5);
                    case 5:
                        h = !0;
                    case 3:
                        xa(k);
                        M("use_cfr_monitor") && wo().requestComplete("generate_204", h);
                        b.s = void 0;
                        b.B && Mh.aa(b.B);
                        h !== b.l && (b.l = h, b.l && b.m ? Ue(b, "ytnetworkstatus-online") : b.m && Ue(b, "ytnetworkstatus-offline"));
                        d(h);
                        Aa(k);
                        break;
                    case 2:
                        wa(k), h = !1, k.u(3)
                }
            })
        })
    };
    Co.prototype.sendNetworkCheckRequest = Co.prototype.ja;
    Co.prototype.listen = Co.prototype.W;
    Co.prototype.enableErrorFlushing = Co.prototype.Ec;
    Co.prototype.getWindowStatus = Co.prototype.qb;
    Co.prototype.monitorNetworkStatusChange = Co.prototype.Oc;
    Co.prototype.networkStatusHint = Co.prototype.ha;
    Co.prototype.isNetworkAvailable = Co.prototype.L;
    Co.getInstance = Fo;

    function Ho(a) {
        a = void 0 === a ? {} : a;
        Te.call(this);
        var b = this;
        this.l = this.B = 0;
        this.m = "ytnetworkstatus-offline";
        this.s = "ytnetworkstatus-online";
        M("use_shared_nsm") && (this.m = "networkstatus-offline", this.s = "networkstatus-online");
        this.j = Fo();
        var c = B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);
        c && c(a.Ob);
        a.Xb && (c = B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j)) && c();
        if (c = B("yt.networkStatusManager.instance.listen").bind(this.j)) a.eb ? (this.eb = a.eb, c(this.s,
            function() {
                Io(b, "publicytnetworkstatus-online")
            }), c(this.m, function() {
            Io(b, "publicytnetworkstatus-offline")
        })) : (c(this.s, function() {
            Ue(b, "publicytnetworkstatus-online")
        }), c(this.m, function() {
            Ue(b, "publicytnetworkstatus-offline")
        }))
    }
    r(Ho, Te);
    Ho.prototype.L = function() {
        var a = B("yt.networkStatusManager.instance.isNetworkAvailable");
        return a ? a.bind(this.j)() : !0
    };
    Ho.prototype.ha = function(a) {
        var b = B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);
        b && b(a)
    };
    Ho.prototype.ja = function(a) {
        var b = this,
            c;
        return w(function(d) {
            c = B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);
            return M("skip_network_check_if_cfr") && wo().isEndpointCFR("generate_204") ? d.return(new Promise(function(e) {
                var f;
                b.ha((null == (f = window.navigator) ? void 0 : f.onLine) || !0);
                e(b.L())
            })) : c ? d.return(c(a)) : d.return(!0)
        })
    };

    function Io(a, b) {
        a.eb ? a.l ? (Mh.aa(a.B), a.B = Mh.S(function() {
            a.v !== b && (Ue(a, b), a.v = b, a.l = P())
        }, a.eb - (P() - a.l))) : (Ue(a, b), a.v = b, a.l = P()) : Ue(a, b)
    };
    var Jo;

    function Ko() {
        Cn.call(this, {
            N: {
                Ac: ko,
                za: jo,
                Sb: go,
                Nc: ho,
                yb: io,
                set: eo
            },
            M: Lo(),
            handleError: vk,
            Aa: wk,
            ia: Mo,
            now: P,
            oc: zo,
            ba: Tl(),
            wb: "publicytnetworkstatus-online",
            vb: "publicytnetworkstatus-offline",
            Wa: !0,
            Va: .1,
            bb: pk("potential_esf_error_limit", 10),
            I: M,
            Ha: !(gm() && No())
        });
        this.l = new sh;
        M("networkless_immediately_drop_all_requests") && lo();
        Bn("LogsDatabaseV2")
    }
    r(Ko, Cn);

    function Oo() {
        var a = B("yt.networklessRequestController.instance");
        a || (a = new Ko, z("yt.networklessRequestController.instance", a), M("networkless_logging") && qn().then(function(b) {
            a.H = b;
            En(a);
            a.l.resolve();
            a.Wa && Math.random() <= a.Va && a.H && po(a.H);
            M("networkless_immediately_drop_sw_health_store") && Po(a)
        }));
        return a
    }
    Ko.prototype.writeThenSend = function(a, b) {
        b || (b = {});
        gm() || (this.i = !1);
        Cn.prototype.writeThenSend.call(this, a, b)
    };
    Ko.prototype.sendThenWrite = function(a, b, c) {
        b || (b = {});
        gm() || (this.i = !1);
        Cn.prototype.sendThenWrite.call(this, a, b, c)
    };
    Ko.prototype.sendAndWrite = function(a, b) {
        b || (b = {});
        gm() || (this.i = !1);
        Cn.prototype.sendAndWrite.call(this, a, b)
    };
    Ko.prototype.awaitInitialization = function() {
        return this.l.promise
    };

    function Po(a) {
        var b;
        w(function(c) {
            if (!a.H) throw b = vm("clearSWHealthLogsDb"), b;
            return c.return(qo(a.H).catch(function(d) {
                a.handleError(d)
            }))
        })
    }

    function Mo(a, b, c) {
        M("use_cfr_monitor") && Qo(a, b);
        var d;
        if (null == (d = b.postParams) ? 0 : d.requestTimeMs) b.postParams.requestTimeMs = Math.round(P());
        c && 0 === Object.keys(b).length ? to(a) : Wk(a, b)
    }

    function Lo() {
        Jo || (Jo = new Ho({
            Xb: !0,
            Ob: !0
        }));
        return Jo
    }

    function Qo(a, b) {
        var c = b.onError ? b.onError : function() {};
        b.onError = function(e, f) {
            wo().requestComplete(a, !1);
            c(e, f)
        };
        var d = b.onSuccess ? b.onSuccess : function() {};
        b.onSuccess = function(e, f) {
            wo().requestComplete(a, !0);
            d(e, f)
        }
    }

    function No() {
        return "www.youtube-nocookie.com" !== lc(document.location.toString())
    };
    var Ro = !1,
        So = 0,
        To = 0,
        Uo, Vo = y.ytNetworklessLoggingInitializationOptions || {
            isNwlInitialized: Ro,
            potentialEsfErrorCounter: To
        };
    z("ytNetworklessLoggingInitializationOptions", Vo);

    function Wo() {
        var a;
        w(function(b) {
            switch (b.i) {
                case 1:
                    return v(b, qn(), 2);
                case 2:
                    a = b.j;
                    if (!a || !gm() && !M("nwl_init_require_datasync_id_killswitch") || !No()) {
                        b.u(0);
                        break
                    }
                    Ro = !0;
                    Vo.isNwlInitialized = Ro;
                    if (!M("use_new_nwl_initialization")) {
                        b.u(4);
                        break
                    }
                    return v(b, Oo().awaitInitialization(), 5);
                case 5:
                    return b.return();
                case 4:
                    return v(b, Bn("LogsDatabaseV2"), 6);
                case 6:
                    if (!(.1 >= Math.random())) {
                        b.u(7);
                        break
                    }
                    return v(b, ko(a), 8);
                case 8:
                    return v(b, po(a), 7);
                case 7:
                    Xo();
                    Yo().L() && Zo();
                    Yo().W("publicytnetworkstatus-online",
                        Zo);
                    Yo().W("publicytnetworkstatus-offline", $o);
                    if (!M("networkless_immediately_drop_sw_health_store")) {
                        b.u(10);
                        break
                    }
                    return v(b, ap(), 10);
                case 10:
                    if (M("networkless_immediately_drop_all_requests")) return v(b, lo(), 0);
                    b.u(0)
            }
        })
    }

    function bp(a, b) {
        function c(d) {
            var e = Yo().L();
            if (!cp() || !d || e && M("vss_networkless_bypass_write")) dp(a, b);
            else {
                var f = {
                    url: a,
                    options: b,
                    timestamp: P(),
                    status: "NEW",
                    sendCount: 0
                };
                eo(f, d).then(function(g) {
                    f.id = g;
                    Yo().L() && ep(f)
                }).catch(function(g) {
                    ep(f);
                    Yo().L() ? vk(g) : zo(g)
                })
            }
        }
        b = void 0 === b ? {} : b;
        M("skip_is_supported_killswitch") ? qn().then(function(d) {
            c(d)
        }) : c(pn())
    }

    function fp(a, b) {
        function c(d) {
            if (cp() && d) {
                var e = {
                        url: a,
                        options: b,
                        timestamp: P(),
                        status: "NEW",
                        sendCount: 0
                    },
                    f = !1,
                    g = b.onSuccess ? b.onSuccess : function() {};
                e.options.onSuccess = function(k, m) {
                    M("use_cfr_monitor") && wo().requestComplete(e.url, !0);
                    void 0 !== e.id ? jo(e.id, d) : f = !0;
                    M("vss_network_hint") && Yo().ha(!0);
                    g(k, m)
                };
                if (M("use_cfr_monitor")) {
                    var h = b.onError ? b.onError : function() {};
                    e.options.onError = function(k, m) {
                        wo().requestComplete(e.url, !1);
                        h(k, m)
                    }
                }
                dp(e.url, e.options);
                eo(e, d).then(function(k) {
                    e.id = k;
                    f && jo(e.id, d)
                }).catch(function(k) {
                    Yo().L() ? vk(k) : zo(k)
                })
            } else dp(a, b)
        }
        b = void 0 === b ? {} : b;
        M("skip_is_supported_killswitch") ? qn().then(function(d) {
            c(d)
        }) : c(pn())
    }

    function Zo() {
        var a = pn();
        if (!a) throw vm("throttleSend");
        So || (So = Mh.S(function() {
            var b;
            return w(function(c) {
                if (1 == c.i) return v(c, go("NEW", a), 2);
                if (3 != c.i) return b = c.j, b ? v(c, ep(b), 3) : ($o(), c.return());
                So && (So = 0, Zo());
                c.i = 0
            })
        }, 100))
    }

    function $o() {
        Mh.aa(So);
        So = 0
    }

    function ep(a) {
        var b, c, d;
        return w(function(e) {
            switch (e.i) {
                case 1:
                    b = pn();
                    if (!b) throw c = vm("immediateSend"), c;
                    if (void 0 === a.id) {
                        e.u(2);
                        break
                    }
                    return v(e, ho(a.id, b), 3);
                case 3:
                    (d = e.j) ? a = d: wk(Error("The request cannot be found in the database."));
                case 2:
                    if (gp(a, 2592E6)) {
                        e.u(4);
                        break
                    }
                    wk(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === a.id) {
                        e.u(5);
                        break
                    }
                    return v(e, jo(a.id, b), 5);
                case 5:
                    return e.return();
                case 4:
                    a.skipRetry || (a = hp(a));
                    var f = a,
                        g, h;
                    if (null == f ? 0 : null == (g = f.options) ?
                        0 : null == (h = g.postParams) ? 0 : h.requestTimeMs) f.options.postParams.requestTimeMs = Math.round(P());
                    a = f;
                    if (!a) {
                        e.u(0);
                        break
                    }
                    if (!a.skipRetry || void 0 === a.id) {
                        e.u(8);
                        break
                    }
                    return v(e, jo(a.id, b), 8);
                case 8:
                    dp(a.url, a.options, !!a.skipRetry), e.i = 0
            }
        })
    }

    function hp(a) {
        var b = pn();
        if (!b) throw vm("updateRequestHandlers");
        var c = a.options.onError ? a.options.onError : function() {};
        a.options.onError = function(e, f) {
            var g, h, k;
            return w(function(m) {
                switch (m.i) {
                    case 1:
                        M("use_cfr_monitor") && wo().requestComplete(a.url, !1);
                        g = Kn(f);
                        if (!(M("nwl_consider_error_code") && g || !M("nwl_consider_error_code") && ip() <= pk("potential_esf_error_limit", 10))) {
                            m.u(2);
                            break
                        }
                        if (M("skip_checking_network_on_cfr_failure") && (!M("skip_checking_network_on_cfr_failure") || wo().isEndpointCFR(a.url))) {
                            m.u(3);
                            break
                        }
                        return v(m, Yo().ja(), 3);
                    case 3:
                        if (Yo().L()) {
                            m.u(2);
                            break
                        }
                        c(e, f);
                        if (!M("nwl_consider_error_code") || void 0 ===
                            (null == (h = a) ? void 0 : h.id)) {
                            m.u(6);
                            break
                        }
                        return v(m, io(a.id, b, !1), 6);
                    case 6:
                        return m.return();
                    case 2:
                        if (M("nwl_consider_error_code") && !g && ip() > pk("potential_esf_error_limit", 10)) return m.return();
                        B("ytNetworklessLoggingInitializationOptions") && Vo.potentialEsfErrorCounter++;
                        To++;
                        if (void 0 === (null == (k = a) ? void 0 : k.id)) {
                            m.u(8);
                            break
                        }
                        return 1 > a.sendCount ? v(m, io(a.id, b), 12) : v(m, jo(a.id, b), 8);
                    case 12:
                        Mh.S(function() {
                            Yo().L() && Zo()
                        }, 5E3);
                    case 8:
                        c(e, f), m.i = 0
                }
            })
        };
        var d = a.options.onSuccess ? a.options.onSuccess : function() {};
        a.options.onSuccess = function(e, f) {
            var g;
            return w(function(h) {
                if (1 == h.i) return M("use_cfr_monitor") && wo().requestComplete(a.url, !0), void 0 === (null == (g = a) ? void 0 : g.id) ? h.u(2) : v(h, jo(a.id, b), 2);
                M("vss_network_hint") && Yo().ha(!0);
                d(e, f);
                h.i = 0
            })
        };
        return a
    }

    function gp(a, b) {
        a = a.timestamp;
        return P() - a >= b ? !1 : !0
    }

    function Xo() {
        var a = pn();
        if (!a) throw vm("retryQueuedRequests");
        go("QUEUED", a).then(function(b) {
            b && !gp(b, 12E4) ? Mh.S(function() {
                return w(function(c) {
                    if (1 == c.i) return void 0 === b.id ? c.u(2) : v(c, io(b.id, a), 2);
                    Xo();
                    c.i = 0
                })
            }) : Yo().L() && Zo()
        })
    }

    function ap() {
        var a, b;
        return w(function(c) {
            a = pn();
            if (!a) throw b = vm("clearSWHealthLogsDb"), b;
            return c.return(qo(a).catch(function(d) {
                vk(d)
            }))
        })
    }

    function Yo() {
        if (M("use_new_nwl")) return Lo();
        Uo || (Uo = new Ho({
            Xb: !0,
            Ob: !0
        }));
        return Uo
    }

    function dp(a, b, c) {
        c && 0 === Object.keys(b).length ? to(a) : Wk(a, b)
    }

    function cp() {
        return B("ytNetworklessLoggingInitializationOptions") ? Vo.isNwlInitialized : Ro
    }

    function ip() {
        return B("ytNetworklessLoggingInitializationOptions") ? Vo.potentialEsfErrorCounter : To
    };

    function jp(a) {
        var b = this;
        this.config_ = null;
        a ? this.config_ = a : vl() && (this.config_ = wl());
        Ol(function() {
            Ll(b)
        }, 5E3)
    }
    jp.prototype.isReady = function() {
        !this.config_ && vl() && (this.config_ = wl());
        return !!this.config_
    };

    function Ml(a, b, c, d) {
        function e(A) {
            A = void 0 === A ? !1 : A;
            var D;
            if (d.retry && "www.youtube-nocookie.com" != h && (A || M("skip_ls_gel_retry") || "application/json" !== g.headers["Content-Type"] || (D = Jl(b, c, m, k)), D)) {
                var F = g.onSuccess,
                    N = g.onFetchSuccess;
                g.onSuccess = function(O, Q) {
                    Kl(D);
                    F(O, Q)
                };
                c.onFetchSuccess = function(O, Q) {
                    Kl(D);
                    N(O, Q)
                }
            }
            try {
                A && d.retry && !d.Yb.bypassNetworkless ? (g.method = "POST", d.Yb.writeThenSend ? M("use_new_nwl_wts") ? Oo().writeThenSend(u, g) : bp(u, g) : M("use_new_nwl_saw") ? Oo().sendAndWrite(u, g) : fp(u, g)) : (g.method = "POST", g.postParams || (g.postParams = {}), Wk(u, g))
            } catch (O) {
                if ("InvalidAccessError" == O.name) D && (Kl(D), D = 0), wk(Error("An extension is blocking network request."));
                else throw O;
            }
            D && Ol(function() {
                Ll(a)
            }, 5E3)
        }!L("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && wk(new R("Missing VISITOR_DATA when sending innertube request.", b, c, d));
        if (!a.isReady()) {
            var f = new R("innertube xhrclient not ready", b, c, d);
            vk(f);
            throw f;
        }
        var g = {
            headers: d.headers || {},
            method: "POST",
            postParams: c,
            postBody: d.postBody,
            postBodyFormat: d.postBodyFormat || "JSON",
            onTimeout: function() {
                d.onTimeout()
            },
            onFetchTimeout: d.onTimeout,
            onSuccess: function(A, D) {
                if (d.onSuccess) d.onSuccess(D)
            },
            onFetchSuccess: function(A) {
                if (d.onSuccess) d.onSuccess(A)
            },
            onError: function(A, D) {
                if (d.onError) d.onError(D)
            },
            onFetchError: function(A) {
                if (d.onError) d.onError(A)
            },
            timeout: d.timeout,
            withCredentials: !0
        };
        g.headers["Content-Type"] || (g.headers["Content-Type"] = "application/json");
        var h = "";
        (f = a.config_.Kc) && (h = f);
        var k = a.config_.Mc || !1,
            m = Dl(k, h, d);
        Object.assign(g.headers, m);
        (f = g.headers.Authorization) && !h && (g.headers["x-origin"] = window.location.origin);
        var q = "/youtubei/" + a.config_.innertubeApiVersion + "/" + b,
            t = {
                alt: "json"
            },
            x = a.config_.Lc && f;
        x = x && f.startsWith("Bearer");
        x || (t.key = a.config_.innertubeApiKey);
        var u = Ik("" + h + q, t || {}, !0);
        M("use_new_nwl") && Oo().i || !M("use_new_nwl") &&
            cp() ? on().then(function(A) {
                e(A)
            }) : e(!1)
    };
    var kp = {
            appSettingsCaptured: !0,
            visualElementAttached: !0,
            visualElementGestured: !0,
            visualElementHidden: !0,
            visualElementShown: !0,
            flowEvent: !0,
            visualElementStateChanged: !0,
            playbackAssociated: !0,
            youThere: !0,
            accountStateChangeSignedIn: !0,
            accountStateChangeSignedOut: !0
        },
        lp = {
            latencyActionBaselined: !0,
            latencyActionInfo: !0,
            latencyActionTicked: !0,
            bedrockRepetitiveActionTimed: !0,
            adsClientStateChange: !0,
            streamzIncremented: !0,
            mdxDialAdditionalDataUpdateEvent: !0,
            tvhtml5WatchKeyEvent: !0,
            tvhtml5VideoSeek: !0,
            tokenRefreshEvent: !0,
            adNotify: !0,
            adNotifyFilled: !0,
            tvhtml5LaunchUrlComponentChanged: !0,
            bedrockResourceConsumptionSnapshot: !0,
            deviceStartupMetrics: !0,
            mdxSignIn: !0,
            tvhtml5KeyboardLogging: !0,
            tvhtml5StartupSoundEvent: !0,
            tvhtml5LiveChatStatus: !0,
            tvhtml5DeviceStorageStatus: !0,
            tvhtml5LocalStorage: !0,
            directSignInEvent: !0,
            finalPayload: !0,
            tvhtml5SearchCompleted: !0,
            tvhtml5KeyboardPerformance: !0,
            adNotifyFailure: !0,
            latencyActionSpan: !0,
            tvhtml5AccountDialogOpened: !0,
            tvhtml5ApiTest: !0
        };
    var mp = 0,
        Dp = Mc ? "webkit" : Lc ? "moz" : Jc ? "ms" : Ic ? "o" : "";
    z("ytDomDomGetNextId", B("ytDomDomGetNextId") || function() {
        return ++mp
    });
    var bq = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        screenX: 1,
        screenY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };

    function cq(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.scale = 1;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in bq || (this[b] = a[b]);
                this.scale = a.scale;
                this.rotation = a.rotation;
                var c = a.target || a.srcElement;
                c && 3 == c.nodeType && (c = c.parentNode);
                this.target = c;
                var d = a.relatedTarget;
                if (d) try {
                    d = d.nodeName ? d : null
                } catch (e) {
                    d = null
                } else "mouseover" == this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement);
                this.relatedTarget = d;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.i = a.pageX;
                this.j = a.pageY
            }
        } catch (e) {}
    }

    function dq(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.i = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.j = a.clientY + b
        }
    }
    cq.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    cq.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    cq.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var nb = y.ytEventsEventsListeners || {};
    z("ytEventsEventsListeners", nb);
    var eq = y.ytEventsEventsCounter || {
        count: 0
    };
    z("ytEventsEventsCounter", eq);

    function fq(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return mb(function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                g = Pa(e[4]) && Pa(d) && rb(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
        })
    }
    var gq = cb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "capture", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function hq(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = fq(a, b, c, d);
        if (e) return e;
        e = ++eq.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var g = f ? function(h) {
            h = new cq(h);
            if (!cf(h.relatedTarget, function(k) {
                    return k == a
                })) return h.currentTarget = a, h.type = b, c.call(a, h)
        } : function(h) {
            h = new cq(h);
            h.currentTarget = a;
            return c.call(a, h)
        };
        g = uk(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), gq() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        nb[e] = [a, b, c, g, d];
        return e
    }

    function iq(a) {
        a && ("string" == typeof a && (a = [a]), eb(a, function(b) {
            if (b in nb) {
                var c = nb[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? gq() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete nb[b]
            }
        }))
    };
    var jq = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };

    function kq(a) {
        this.B = a;
        this.j = null;
        this.m = 0;
        this.v = null;
        this.s = 0;
        this.l = [];
        for (a = 0; 4 > a; a++) this.l.push(0);
        this.o = 0;
        this.K = hq(window, "mousemove", Wa(this.P, this));
        a = Wa(this.G, this);
        "function" === typeof a && (a = uk(a));
        this.R = window.setInterval(a, 25)
    }
    Ya(kq, J);
    kq.prototype.P = function(a) {
        void 0 === a.i && dq(a);
        var b = a.i;
        void 0 === a.j && dq(a);
        this.j = new Ze(b, a.j)
    };
    kq.prototype.G = function() {
        if (this.j) {
            var a = jq();
            if (0 != this.m) {
                var b = this.v,
                    c = this.j,
                    d = b.x - c.x;
                b = b.y - c.y;
                d = Math.sqrt(d * d + b * b) / (a - this.m);
                this.l[this.o] = .5 < Math.abs((d - this.s) / this.s) ? 1 : 0;
                for (c = b = 0; 4 > c; c++) b += this.l[c] || 0;
                3 <= b && this.B();
                this.s = d
            }
            this.m = a;
            this.v = this.j;
            this.o = (this.o + 1) % 4
        }
    };
    kq.prototype.D = function() {
        window.clearInterval(this.R);
        iq(this.K)
    };
    var lq = {};

    function mq(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.Sc ? !1 : b.Sc;
        b = void 0 === b.Fc ? !0 : b.Fc;
        if (null == B("_lact", window)) {
            var c = parseInt(L("LACT"), 10);
            c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
            z("_lact", c, window);
            z("_fact", c, window); - 1 == c && nq();
            hq(document, "keydown", nq);
            hq(document, "keyup", nq);
            hq(document, "mousedown", nq);
            hq(document, "mouseup", nq);
            a ? hq(window, "touchmove", function() {
                oq("touchmove", 200)
            }, {
                passive: !0
            }) : (hq(window, "resize", function() {
                oq("resize", 200)
            }), b && hq(window, "scroll", function() {
                oq("scroll", 200)
            }));
            new kq(function() {
                oq("mouse", 100)
            });
            hq(document, "touchstart", nq, {
                passive: !0
            });
            hq(document, "touchend", nq, {
                passive: !0
            })
        }
    }

    function oq(a, b) {
        lq[a] || (lq[a] = !0, Mh.S(function() {
            nq();
            lq[a] = !1
        }, b))
    }

    function nq() {
        null == B("_lact", window) && mq();
        var a = Date.now();
        z("_lact", a, window); - 1 == B("_fact", window) && z("_fact", a, window);
        (a = B("ytglobal.ytUtilActivityCallback_")) && a()
    }

    function pq() {
        var a = B("_lact", window);
        return null == a ? -1 : Math.max(Date.now() - a, 0)
    };
    var qq = y.ytPubsubPubsubInstance || new K,
        rq = y.ytPubsubPubsubSubscribedKeys || {},
        sq = y.ytPubsubPubsubTopicToKeys || {},
        tq = y.ytPubsubPubsubIsSynchronous || {};

    function uq(a, b) {
        var c = vq();
        if (c && b) {
            var d = c.subscribe(a, function() {
                var e = arguments;
                var f = function() {
                    rq[d] && b.apply && "function" == typeof b.apply && b.apply(window, e)
                };
                try {
                    tq[a] ? f() : Pk(f, 0)
                } catch (g) {
                    vk(g)
                }
            }, void 0);
            rq[d] = !0;
            sq[a] || (sq[a] = []);
            sq[a].push(d);
            return d
        }
        return 0
    }

    function wq(a) {
        var b = vq();
        b && ("number" === typeof a ? a = [a] : "string" === typeof a && (a = [parseInt(a, 10)]), eb(a, function(c) {
            b.unsubscribeByKey(c);
            delete rq[c]
        }))
    }

    function xq(a, b) {
        var c = vq();
        c && c.publish.apply(c, arguments)
    }

    function yq(a) {
        var b = vq();
        if (b)
            if (b.clear(a), a) zq(a);
            else
                for (var c in sq) zq(c)
    }

    function vq() {
        return y.ytPubsubPubsubInstance
    }

    function zq(a) {
        sq[a] && (a = sq[a], eb(a, function(b) {
            rq[b] && delete rq[b]
        }), a.length = 0)
    }
    K.prototype.subscribe = K.prototype.subscribe;
    K.prototype.unsubscribeByKey = K.prototype.Ea;
    K.prototype.publish = K.prototype.qa;
    K.prototype.clear = K.prototype.clear;
    z("ytPubsubPubsubInstance", qq);
    z("ytPubsubPubsubTopicToKeys", sq);
    z("ytPubsubPubsubIsSynchronous", tq);
    z("ytPubsubPubsubSubscribedKeys", rq);
    var Aq = y.window;
    Aq.ytExports || (Aq.ytExports = {
        logging: {
            transport: {
                leaderQueueLength: 0,
                leaderChosen: !1
            }
        }
    });
    var Bq = pk("initial_gel_batch_timeout", 2E3),
        Cq = Math.pow(2, 16) - 1,
        Dq = !1,
        Eq = void 0;

    function Fq() {
        this.l = this.i = this.j = 0
    }
    var Gq = new Fq,
        Hq = new Fq,
        Iq = !0,
        Jq = y.ytLoggingTransportGELQueue_ || new Map;
    z("ytLoggingTransportGELQueue_", Jq);
    var Kq = new Map,
        Lq = y.ytLoggingTransportGELProtoQueue_ || new Map;
    z("ytLoggingTransportGELProtoQueue_", Lq);
    var Mq = y.ytLoggingTransportTokensToCttTargetIds_ || {};
    z("ytLoggingTransportTokensToCttTargetIds_", Mq);
    var Nq = y.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
    z("ytLoggingTransportTokensToJspbCttTargetIds_", Nq);

    function Oq() {
        M("jspb_with_transport_leader") && !Aq.ytExports.logging.transport.leaderChosen && (Dq = Aq.ytExports.logging.transport.leaderChosen = !0, document.addEventListener("FLUSH_REQUEST", function() {
            Pq(void 0, void 0, !0)
        }))
    }

    function Qq(a, b) {
        Oq();
        if ("log_event" === a.endpoint) {
            var c = Rq(a),
                d = Jq.get(c) || [];
            Jq.set(c, d);
            d.push(a.payload);
            Sq(b, d, c)
        }
    }

    function Tq(a, b) {
        Oq();
        if ("log_event" === a.endpoint) {
            var c = Rq(a, !0);
            if (M("jspb_with_transport_leader") && Dq) {
                var d = Kq.get(c) || [];
                Kq.set(c, d);
                Aq.ytExports.logging.transport.leaderQueueLength++;
                d.push(a.payload);
                Sq(b, d, c, !0)
            } else d = Lq.get(c) || [], Lq.set(c, d), a = a.payload.toJSON(), d.push(a), Sq(b, d, c, !0)
        }
    }

    function Sq(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a && (Eq = new a);
        a = pk("tvhtml5_logging_max_batch") || pk("web_logging_max_batch") || 100;
        var e = P(),
            f = d ? Hq.l : Gq.l,
            g = Lq.get(c) || [];
        M("jspb_with_transport_leader") && (Dq && b.length + g.length >= a || !Dq && Aq.ytExports.logging.transport.leaderQueueLength + b.length >= a) || b.length >= a ? Pq({
            writeThenSend: !0
        }, M("flush_only_full_queue") ? c : void 0, d) : 10 <= e - f && (Uq(d), d ? Hq.l = e : Gq.l = e)
    }

    function Vq(a, b) {
        Oq();
        if ("log_event" === a.endpoint) {
            var c = Rq(a),
                d = new Map;
            d.set(c, [a.payload]);
            b && (Eq = new b);
            return new pf(function(e, f) {
                Eq && Eq.isReady() ? Wq(d, e, f, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function Xq(a, b) {
        Oq();
        if ("log_event" === a.endpoint) {
            var c = Rq(a, !0),
                d = new Map,
                e = new Map;
            M("jspb_with_transport_leader") && Dq ? e.set(c, [a.payload]) : d.set(c, [a.payload.toJSON()]);
            b && (Eq = new b);
            return new pf(function(f) {
                Eq && Eq.isReady() ? Yq(d, e, f, {
                    bypassNetworkless: !0
                }, !0) : f()
            })
        }
    }

    function Rq(a, b) {
        var c = "";
        if (a.Ga) c = "visitorOnlyApprovedKey";
        else if (a.cttAuthInfo) {
            if (void 0 === b ? 0 : b) {
                b = a.cttAuthInfo.token;
                c = a.cttAuthInfo;
                var d = new Ij;
                c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Od(d, 2, Jj, c.playlistId);
                Nq[b] = d
            } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Mq[a.cttAuthInfo.token] = c;
            c = a.cttAuthInfo.token
        }
        return c
    }

    function Pq(a, b, c) {
        a = void 0 === a ? {} : a;
        c = void 0 === c ? !1 : c;
        new pf(function(d, e) {
            c ? (Qk(Hq.j), Qk(Hq.i), Hq.i = 0) : (Qk(Gq.j), Qk(Gq.i), Gq.i = 0);
            if (M("jspb_with_transport_leader") && !Dq) document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")), d();
            else if (Eq && Eq.isReady())
                if (void 0 !== b)
                    if (c) {
                        e = new Map;
                        var f = new Map,
                            g = Lq.get(b) || [];
                        e.set(b, g);
                        M("jspb_with_transport_leader") && (g = Kq.get(b) || [], f.set(b, g));
                        Yq(e, f, d, a);
                        M("jspb_with_transport_leader") && Kq.delete(b);
                        Lq.delete(b)
                    } else f = new Map, g = Jq.get(b) || [], f.set(b,
                        g), Wq(f, d, e, a), Jq.delete(b);
            else c ? (Yq(Lq, Kq, d, a), Lq.clear()) : (Wq(Jq, d, e, a), Jq.clear());
            else Uq(c), d()
        })
    }

    function Uq(a) {
        a = void 0 === a ? !1 : a;
        if (M("web_gel_timeout_cap") && (!a && !Gq.i || a && !Hq.i)) {
            var b = Pk(function() {
                Pq({
                    writeThenSend: !0
                }, void 0, a)
            }, 6E4);
            a ? Hq.i = b : Gq.i = b
        }
        Qk(a ? Hq.j : Gq.j);
        b = L("LOGGING_BATCH_TIMEOUT", pk("web_gel_debounce_ms", 1E4));
        M("shorten_initial_gel_batch_timeout") && Iq && (b = Bq);
        b = Pk(function() {
            Pq({
                writeThenSend: !0
            }, void 0, a)
        }, b);
        a ? Hq.j = b : Gq.j = b
    }

    function Wq(a, b, c, d, e) {
        var f = Eq;
        d = void 0 === d ? {} : d;
        var g = Math.round(P()),
            h = a.size;
        a = p(a);
        for (var k = a.next(); !k.done; k = a.next()) {
            var m = p(k.value);
            k = m.next().value;
            var q = m.next().value;
            m = k;
            k = tb({
                context: xl(f.config_ || wl())
            });
            k.events = q;
            (q = Mq[m]) && Zq(k, m, q);
            delete Mq[m];
            m = "visitorOnlyApprovedKey" === m;
            $q(k, g, m);
            ar(d);
            q = function() {
                h--;
                h || b()
            };
            var t = function() {
                h--;
                h || b()
            };
            try {
                Ml(f, "log_event", k, br(d, m, q, t, e)), Iq = !1
            } catch (x) {
                vk(x), c()
            }
        }
    }

    function Yq(a, b, c, d, e) {
        var f = Eq;
        d = void 0 === d ? {} : d;
        var g = Math.round(P()),
            h = a.size + b.size,
            k = new Map([].concat(ha(a), ha(b)));
        k = p(k);
        for (var m = k.next(); !m.done; m = k.next()) {
            var q = p(m.value).next().value,
                t = a.get(q),
                x = b.get(q) || [];
            m = new Kj;
            var u = Cl(f.config_ || wl());
            G(m, Pi, 1, u);
            t = t ? cr(t) : [];
            t = p(t);
            for (u = t.next(); !u.done; u = t.next()) Vd(m, 3, Ej, u.value);
            x = p(x);
            for (t = x.next(); !t.done; t = x.next()) Vd(m, 3, Ej, t.value);
            (x = Nq[q]) && dr(m, q, x);
            delete Nq[q];
            q = "visitorOnlyApprovedKey" === q;
            er(m, g, q);
            ar(d);
            m = Yd(m);
            q = br(d, q,
                function() {
                    Aq.ytExports.logging.transport.leaderQueueLength = 0;
                    h--;
                    h || c()
                },
                function() {
                    Aq.ytExports.logging.transport.leaderQueueLength = 0;
                    h--;
                    h || c()
                }, e);
            q.headers = {
                "Content-Type": "application/json+protobuf"
            };
            q.postBodyFormat = "JSPB";
            q.postBody = m;
            Ml(f, "log_event", "", q);
            Iq = !1
        }
    }

    function ar(a) {
        M("always_send_and_write") && (a.writeThenSend = !1)
    }

    function br(a, b, c, d, e) {
        return {
            retry: !0,
            onSuccess: c,
            onError: d,
            Yb: a,
            Ga: b,
            bq: !!e,
            headers: {},
            postBodyFormat: "",
            postBody: ""
        }
    }

    function $q(a, b, c) {
        a.requestTimeMs = String(b);
        M("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
        !c && (b = L("EVENT_ID")) && (c = fr(), a.serializedClientEventId = {
            serializedEventId: b,
            clientCounter: String(c)
        })
    }

    function er(a, b, c) {
        E(a, 2, b);
        if (!c && (b = L("EVENT_ID"))) {
            c = fr();
            var d = new Hj;
            E(d, 1, b);
            E(d, 2, c);
            G(a, Hj, 5, d)
        }
    }

    function fr() {
        var a = L("BATCH_CLIENT_COUNTER") || 0;
        a || (a = Math.floor(Math.random() * Cq / 2));
        a++;
        a > Cq && (a = 1);
        mk("BATCH_CLIENT_COUNTER", a);
        return a
    }

    function Zq(a, b, c) {
        if (c.videoId) var d = "VIDEO";
        else if (c.playlistId) d = "PLAYLIST";
        else return;
        a.credentialTransferTokenTargetId = c;
        a.context = a.context || {};
        a.context.user = a.context.user || {};
        a.context.user.credentialTransferTokens = [{
            token: b,
            scope: d
        }]
    }

    function dr(a, b, c) {
        if (Kd(c, 1 === Pd(c, Jj) ? 1 : -1)) var d = 1;
        else if (c.getPlaylistId()) d = 2;
        else return;
        G(a, Ij, 4, c);
        a = Qd(a, Pi, 1) || new Pi;
        c = Qd(a, Ni, 3) || new Ni;
        var e = new Mi;
        e.setToken(b);
        E(e, 1, d);
        Vd(c, 12, Mi, e);
        G(a, Ni, 3, c)
    }

    function cr(a) {
        for (var b = [], c = 0; c < a.length; c++) try {
            b.push(new Ej(a[c]))
        } catch (d) {
            vk(new R("Transport failed to deserialize " + String(a[c])))
        }
        return b
    };
    var gr = y.ytLoggingGelSequenceIdObj_ || {};
    z("ytLoggingGelSequenceIdObj_", gr);

    function hr(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (M("lr_drop_other_and_business_payloads")) {
            if (lp[a] || kp[a]) return
        } else if (M("lr_drop_other_payloads") && lp[a]) return;
        var e = {},
            f = Math.round(d.timestamp || P());
        e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
        e[a] = b;
        a = pq();
        e.context = {
            lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
        };
        M("log_sequence_info_on_gel_web") && d.ca && (a = e.context, b = d.ca, b = {
            index: ir(b),
            groupKey: b
        }, a.sequence = b, d.Pb && delete gr[d.ca]);
        (d.ic ? Vq : Qq)({
            endpoint: "log_event",
            payload: e,
            cttAuthInfo: d.cttAuthInfo,
            Ga: d.Ga
        }, c)
    }

    function jr(a) {
        Pq(void 0, void 0, void 0 === a ? !1 : a)
    }

    function ir(a) {
        gr[a] = a in gr ? gr[a] + 1 : 0;
        return gr[a]
    };

    function dm(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = jp;
        L("ytLoggingEventsDefaultDisabled", !1) && jp == jp && (d = null);
        hr(a, b, d, c)
    };
    var kr = [{
        ub: function(a) {
            return "Cannot read property '" + a.key + "'"
        },
        ab: {
            Error: [{
                regexp: /(Permission denied) to access property "([^']+)"/,
                groups: ["reason", "key"]
            }],
            TypeError: [{
                regexp: /Cannot read property '([^']+)' of (null|undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
                groups: ["value", "key"]
            }, {
                regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
                groups: ["value", "key"]
            }, {
                regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
                groups: ["key"]
            }, {
                regexp: /Unable to get property '([^']+)' of (undefined or null) reference/,
                groups: ["key", "value"]
            }, {
                regexp: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
                groups: ["value", "base", "key"]
            }]
        }
    }, {
        ub: function(a) {
            return "Cannot call '" + a.key + "'"
        },
        ab: {
            TypeError: [{
                regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                regexp: /([^ ]+) called on (null or undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                regexp: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            }, {
                regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }]
        }
    }, {
        ub: function(a) {
            return a.key + " is not defined"
        },
        ab: {
            ReferenceError: [{
                regexp: /(.*) is not defined/,
                groups: ["key"]
            }, {
                regexp: /Can't find variable: (.*)/,
                groups: ["key"]
            }]
        }
    }];
    var mr = {
        na: [],
        ma: [{
            callback: lr,
            weight: 500
        }]
    };

    function lr(a) {
        if ("JavaException" === a.name) return !0;
        a = a.stack;
        return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
    };

    function nr() {
        this.ma = [];
        this.na = []
    }
    var or;

    function pr() {
        if (!or) {
            var a = or = new nr;
            a.na.length = 0;
            a.ma.length = 0;
            mr.na && a.na.push.apply(a.na, mr.na);
            mr.ma && a.ma.push.apply(a.ma, mr.ma)
        }
        return or
    };
    var qr = new K;

    function rr(a) {
        function b() {
            return a.charCodeAt(d++)
        }
        var c = a.length,
            d = 0;
        do {
            var e = sr(b);
            if (Infinity === e) break;
            var f = e >> 3;
            switch (e & 7) {
                case 0:
                    e = sr(b);
                    if (2 === f) return e;
                    break;
                case 1:
                    if (2 === f) return;
                    d += 8;
                    break;
                case 2:
                    e = sr(b);
                    if (2 === f) return a.substr(d, e);
                    d += e;
                    break;
                case 5:
                    if (2 === f) return;
                    d += 4;
                    break;
                default:
                    return
            }
        } while (d < c)
    }

    function sr(a) {
        var b = a(),
            c = b & 127;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 7;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 14;
        if (128 > b) return c;
        b = a();
        return 128 > b ? c | (b & 127) << 21 : Infinity
    };

    function tr(a, b, c, d) {
        if (a)
            if (Array.isArray(a)) {
                var e = d;
                for (d = 0; d < a.length && !(a[d] && (e += ur(d, a[d], b, c), 500 < e)); d++);
                d = e
            } else if ("object" === typeof a)
            for (e in a) {
                if (a[e]) {
                    var f = a[e];
                    var g = b;
                    var h = c;
                    g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = rr(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? ur(e + ".ve", f, g, h) : 0;
                    d += g;
                    d += ur(e, a[e], b, c);
                    if (500 < d) break
                }
            } else c[b] = vr(a), d += c[b].length;
        else c[b] = vr(a), d += c[b].length;
        return d
    }

    function ur(a, b, c, d) {
        c += "." + a;
        a = vr(b);
        d[c] = a;
        return c.length + a.length
    }

    function vr(a) {
        try {
            return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
        } catch (b) {
            return "unable to serialize " + typeof a + " (" + b.message + ")"
        }
    };
    var wr = y.ytLoggingGelSequenceIdObj_ || {};
    z("ytLoggingGelSequenceIdObj_", wr);

    function xr(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = Math.round(c.timestamp || P());
        E(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
        var e = pq();
        d = new Dj;
        E(d, 1, c.timestamp || !isFinite(e) ? -1 : e);
        if (M("log_sequence_info_on_gel_web") && c.ca) {
            e = c.ca;
            var f = ir(e),
                g = new Cj;
            E(g, 2, f);
            E(g, 1, e);
            G(d, Cj, 3, g);
            c.Pb && delete wr[c.ca]
        }
        G(a, Dj, 33, d);
        (c.ic ? Xq : Tq)({
            endpoint: "log_event",
            payload: a,
            cttAuthInfo: c.cttAuthInfo,
            Ga: c.Ga
        }, b)
    };

    function yr(a, b) {
        b = void 0 === b ? {} : b;
        var c = !1;
        L("ytLoggingEventsDefaultDisabled", !1) && jp === jp && (c = !0);
        xr(a, c ? null : jp, b)
    };

    function zr(a, b) {
        var c = new Ej;
        Td(c, rj, 72, Fj, a);
        yr(c, b)
    }

    function Ar(a, b, c) {
        var d = new Ej;
        Td(d, qj, 73, Fj, a);
        c ? xr(d, c, b) : yr(d, b)
    }

    function Br(a, b, c) {
        var d = new Ej;
        Td(d, pj, 78, Fj, a);
        c ? xr(d, c, b) : yr(d, b)
    }

    function Cr(a, b, c) {
        var d = new Ej;
        Td(d, sj, 208, Fj, a);
        c ? xr(d, c, b) : yr(d, b)
    }

    function Dr(a, b, c) {
        var d = new Ej;
        Td(d, ij, 156, Fj, a);
        c ? xr(d, c, b) : yr(d, b)
    }

    function Er(a, b, c) {
        var d = new Ej;
        Td(d, mj, 215, Fj, a);
        c ? xr(d, c, b) : yr(d, b)
    }

    function Fr(a, b, c) {
        var d = new Ej;
        Td(d, ej, 111, Fj, a);
        c ? xr(d, c, b) : yr(d, b)
    };
    var Gr = new Set,
        Hr = 0,
        Ir = 0,
        Jr = 0,
        Kr = [],
        Lr = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

    function cm(a) {
        Mr(a)
    }

    function Nr(a) {
        Mr(a, "WARNING")
    }

    function Mr(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        f.name = c || L("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
        f.version = d || L("INNERTUBE_CONTEXT_CLIENT_VERSION");
        var g = f || {},
            h = void 0 === b ? "ERROR" : b;
        h = void 0 === h ? "ERROR" : h;
        if (a) {
            a.hasOwnProperty("level") && a.level && (h = a.level);
            if (M("console_log_js_exceptions")) {
                var k = [];
                k.push("Name: " + a.name);
                k.push("Message: " + a.message);
                a.hasOwnProperty("params") && k.push("Error Params: " + JSON.stringify(a.params));
                a.hasOwnProperty("args") && k.push("Error args: " + JSON.stringify(a.args));
                k.push("File name: " + a.fileName);
                k.push("Stacktrace: " + a.stack);
                window.console.log(k.join("\n"), a)
            }
            if (!(5 <= Hr)) {
                var m = Kr,
                    q = oe(a),
                    t = q.message || "Unknown Error",
                    x = q.name || "UnknownError",
                    u = q.stack || a.j || "Not available";
                if (u.startsWith(x + ": " + t)) {
                    var A = u.split("\n");
                    A.shift();
                    u = A.join("\n")
                }
                var D = q.lineNumber || "Not available",
                    F = q.fileName || "Not available",
                    N = u,
                    O = 0;
                if (a.hasOwnProperty("args") && a.args && a.args.length)
                    for (var Q = 0; Q < a.args.length && !(O = tr(a.args[Q], "params." + Q, g, O), 500 <= O); Q++);
                else if (a.hasOwnProperty("params") &&
                    a.params) {
                    var ca = a.params;
                    if ("object" === typeof a.params)
                        for (var V in ca) {
                            if (ca[V]) {
                                var W = "params." + V,
                                    Ta = vr(ca[V]);
                                g[W] = Ta;
                                O += W.length + Ta.length;
                                if (500 < O) break
                            }
                        } else g.params = vr(ca)
                }
                if (m.length)
                    for (var za = 0; za < m.length && !(O = tr(m[za], "params.context." + za, g, O), 500 <= O); za++);
                navigator.vendor && !g.hasOwnProperty("vendor") && (g["device.vendor"] = navigator.vendor);
                var H = {
                        message: t,
                        name: x,
                        lineNumber: D,
                        fileName: F,
                        stack: N,
                        params: g,
                        sampleWeight: 1
                    },
                    Fa = Number(a.columnNumber);
                isNaN(Fa) || (H.lineNumber = H.lineNumber +
                    ":" + Fa);
                if ("IGNORED" === a.level) var ya = 0;
                else a: {
                    for (var np = pr(), op = p(np.na), Nj = op.next(); !Nj.done; Nj = op.next()) {
                        var pp = Nj.value;
                        if (H.message && H.message.match(pp.lq)) {
                            ya = pp.weight;
                            break a
                        }
                    }
                    for (var qp = p(np.ma), Oj = qp.next(); !Oj.done; Oj = qp.next()) {
                        var rp = Oj.value;
                        if (rp.callback(H)) {
                            ya = rp.weight;
                            break a
                        }
                    }
                    ya = 1
                }
                H.sampleWeight = ya;
                for (var sp = p(kr), Pj = sp.next(); !Pj.done; Pj = sp.next()) {
                    var Qj = Pj.value;
                    if (Qj.ab[H.name])
                        for (var tp = p(Qj.ab[H.name]), Rj = tp.next(); !Rj.done; Rj = tp.next()) {
                            var up = Rj.value,
                                Eg = H.message.match(up.regexp);
                            if (Eg) {
                                H.params["params.error.original"] = Eg[0];
                                for (var Sj = up.groups, vp = {}, md = 0; md < Sj.length; md++) vp[Sj[md]] = Eg[md + 1], H.params["params.error." + Sj[md]] = Eg[md + 1];
                                H.message = Qj.ub(vp);
                                break
                            }
                        }
                }
                H.params || (H.params = {});
                var wp = pr();
                H.params["params.errorServiceSignature"] = "msg=" + wp.na.length + "&cb=" + wp.ma.length;
                H.params["params.serviceWorker"] = "false";
                y.document && y.document.querySelectorAll && (H.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
                Cb("sample").constructor !==
                    yb && (H.params["params.fconst"] = "true");
                window.yterr && "function" === typeof window.yterr && window.yterr(H);
                if (0 !== H.sampleWeight && !Gr.has(H.message)) {
                    if ("ERROR" === h) {
                        qr.qa("handleError", H);
                        if (M("record_app_crashed_web") && 0 === Jr && 1 === H.sampleWeight)
                            if (Jr++, M("errors_via_jspb")) {
                                var Tj = new bj;
                                E(Tj, 1, 1);
                                if (!M("report_client_error_with_app_crash_ks")) {
                                    var xp = new Xi;
                                    E(xp, 1, H.message);
                                    var yp = new Yi;
                                    G(yp, Xi, 3, xp);
                                    var zp = new Zi;
                                    G(zp, Yi, 5, yp);
                                    var Ap = new $i;
                                    G(Ap, Zi, 9, zp);
                                    G(Tj, $i, 4, Ap)
                                }
                                var Bp = new Ej;
                                Td(Bp, bj, 20,
                                    Fj, Tj);
                                yr(Bp)
                            } else {
                                var Cp = {
                                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                                };
                                M("report_client_error_with_app_crash_ks") || (Cp.systemHealth = {
                                    crashData: {
                                        clientError: {
                                            logMessage: {
                                                message: H.message
                                            }
                                        }
                                    }
                                });
                                dm("appCrashed", Cp)
                            }
                        Ir++
                    } else "WARNING" === h && qr.qa("handleWarning", H);
                    if (M("kevlar_gel_error_routing")) a: {
                        var ue = h;
                        if (M("errors_via_jspb")) {
                            if (Or()) var Ep = void 0;
                            else {
                                var nd = new Ui;
                                E(nd, 1, H.stack);
                                H.fileName && E(nd, 4, H.fileName);
                                var Ab = H.lineNumber && H.lineNumber.split ? H.lineNumber.split(":") : [];
                                0 !== Ab.length && (1 !==
                                    Ab.length || isNaN(Number(Ab[0])) ? 2 !== Ab.length || isNaN(Number(Ab[0])) || isNaN(Number(Ab[1])) || (E(nd, 2, Number(Ab[0])), E(nd, 3, Number(Ab[1]))) : E(nd, 2, Number(Ab[0])));
                                var tc = new Xi;
                                E(tc, 1, H.message);
                                E(tc, 3, H.name);
                                E(tc, 6, H.sampleWeight);
                                "ERROR" === ue ? E(tc, 2, 2) : "WARNING" === ue ? E(tc, 2, 1) : E(tc, 2, 0);
                                var Uj = new Vi;
                                E(Uj, 1, !0);
                                Td(Uj, Ui, 3, Wi, nd);
                                var Xb = new Ri;
                                E(Xb, 3, window.location.href);
                                for (var Fp = L("FEXP_EXPERIMENTS", []), Vj = 0; Vj < Fp.length; Vj++) {
                                    var zv = Fp[Vj];
                                    wd(Xb);
                                    Ld(Xb, 5).push(zv)
                                }
                                var Wj = L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
                                if (!nk() && Wj)
                                    for (var Gp = p(Object.keys(Wj)), uc = Gp.next(); !uc.done; uc = Gp.next()) {
                                        var Hp = uc.value,
                                            Xj = new Ti;
                                        E(Xj, 1, Hp);
                                        Xj.setValue(String(Wj[Hp]));
                                        Vd(Xb, 4, Ti, Xj)
                                    }
                                var Yj = H.params;
                                if (Yj) {
                                    var Ip = p(Object.keys(Yj));
                                    for (uc = Ip.next(); !uc.done; uc = Ip.next()) {
                                        var Jp = uc.value,
                                            Zj = new Ti;
                                        E(Zj, 1, "client." + Jp);
                                        Zj.setValue(String(Yj[Jp]));
                                        Vd(Xb, 4, Ti, Zj)
                                    }
                                }
                                var Kp = L("SERVER_NAME"),
                                    Lp = L("SERVER_VERSION");
                                if (Kp && Lp) {
                                    var ak = new Ti;
                                    E(ak, 1, "server.name");
                                    ak.setValue(Kp);
                                    Vd(Xb, 4, Ti, ak);
                                    var bk = new Ti;
                                    E(bk, 1, "server.version");
                                    bk.setValue(Lp);
                                    Vd(Xb, 4, Ti, bk)
                                }
                                var Fg = new Yi;
                                G(Fg, Ri, 1, Xb);
                                G(Fg, Vi, 2, Uj);
                                G(Fg, Xi, 3, tc);
                                Ep = Fg
                            }
                            var Mp = Ep;
                            if (!Mp) break a;
                            var Np = new Ej;
                            Td(Np, Yi, 163, Fj, Mp);
                            yr(Np)
                        } else {
                            if (Or()) var Op = void 0;
                            else {
                                var ve = {
                                    stackTrace: H.stack
                                };
                                H.fileName && (ve.filename = H.fileName);
                                var Bb = H.lineNumber && H.lineNumber.split ? H.lineNumber.split(":") : [];
                                0 !== Bb.length && (1 !== Bb.length || isNaN(Number(Bb[0])) ? 2 !== Bb.length || isNaN(Number(Bb[0])) || isNaN(Number(Bb[1])) || (ve.lineNumber = Number(Bb[0]), ve.columnNumber = Number(Bb[1])) : ve.lineNumber =
                                    Number(Bb[0]));
                                var ck = {
                                    level: "ERROR_LEVEL_UNKNOWN",
                                    message: H.message,
                                    errorClassName: H.name,
                                    sampleWeight: H.sampleWeight
                                };
                                "ERROR" === ue ? ck.level = "ERROR_LEVEL_ERROR" : "WARNING" === ue && (ck.level = "ERROR_LEVEL_WARNNING");
                                var Av = {
                                        isObfuscated: !0,
                                        browserStackInfo: ve
                                    },
                                    od = {
                                        pageUrl: window.location.href,
                                        kvPairs: []
                                    };
                                L("FEXP_EXPERIMENTS") && (od.experimentIds = L("FEXP_EXPERIMENTS"));
                                var dk = L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
                                if (!nk() && dk)
                                    for (var Pp = p(Object.keys(dk)), vc = Pp.next(); !vc.done; vc = Pp.next()) {
                                        var Qp =
                                            vc.value;
                                        od.kvPairs.push({
                                            key: Qp,
                                            value: String(dk[Qp])
                                        })
                                    }
                                var ek = H.params;
                                if (ek) {
                                    var Rp = p(Object.keys(ek));
                                    for (vc = Rp.next(); !vc.done; vc = Rp.next()) {
                                        var Sp = vc.value;
                                        od.kvPairs.push({
                                            key: "client." + Sp,
                                            value: String(ek[Sp])
                                        })
                                    }
                                }
                                var Tp = L("SERVER_NAME"),
                                    Up = L("SERVER_VERSION");
                                Tp && Up && (od.kvPairs.push({
                                    key: "server.name",
                                    value: Tp
                                }), od.kvPairs.push({
                                    key: "server.version",
                                    value: Up
                                }));
                                Op = {
                                    errorMetadata: od,
                                    stackTrace: Av,
                                    logMessage: ck
                                }
                            }
                            var Vp = Op;
                            if (!Vp) break a;
                            dm("clientError", Vp)
                        }
                        if ("ERROR" === ue || M("errors_flush_gel_always_killswitch")) M("web_fp_via_jspb") &&
                            jr(!0),
                        jr()
                    }
                    if (!M("suppress_error_204_logging")) {
                        var we = H.params || {},
                            Yb = {
                                urlParams: {
                                    a: "logerror",
                                    t: "jserror",
                                    type: H.name,
                                    msg: H.message.substr(0, 250),
                                    line: H.lineNumber,
                                    level: h,
                                    "client.name": we.name
                                },
                                postParams: {
                                    url: L("PAGE_NAME", window.location.href),
                                    file: H.fileName
                                },
                                method: "POST"
                            };
                        we.version && (Yb["client.version"] = we.version);
                        if (Yb.postParams) {
                            H.stack && (Yb.postParams.stack = H.stack);
                            for (var Wp = p(Object.keys(we)), fk = Wp.next(); !fk.done; fk = Wp.next()) {
                                var Xp = fk.value;
                                Yb.postParams["client." + Xp] = we[Xp]
                            }
                            var gk =
                                L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
                            if (gk)
                                for (var Yp = p(Object.keys(gk)), hk = Yp.next(); !hk.done; hk = Yp.next()) {
                                    var Zp = hk.value;
                                    Yb.postParams[Zp] = gk[Zp]
                                }
                            var $p = L("SERVER_NAME"),
                                aq = L("SERVER_VERSION");
                            $p && aq && (Yb.postParams["server.name"] = $p, Yb.postParams["server.version"] = aq)
                        }
                        Wk(L("ECATCHER_REPORT_HOST", "") + "/error_204", Yb)
                    }
                    try {
                        Gr.add(H.message)
                    } catch (Yw) {}
                    Hr++
                }
            }
        }
    }

    function Or() {
        for (var a = p(Lr), b = a.next(); !b.done; b = a.next())
            if (Vl(b.value.toLowerCase())) return !0;
        return !1
    }

    function Pr(a) {
        var b = Ia.apply(1, arguments);
        a.args || (a.args = []);
        a.args.push.apply(a.args, ha(b))
    };

    function Qr() {
        this.register = new Map
    }

    function Rr(a) {
        a = p(a.register.values());
        for (var b = a.next(); !b.done; b = a.next()) b.value.oq("ABORTED")
    }
    Qr.prototype.clear = function() {
        Rr(this);
        this.register.clear()
    };
    var Sr = new Qr;
    var Tr = Date.now().toString();

    function Ur() {
        a: {
            if (window.crypto && window.crypto.getRandomValues) try {
                var a = Array(16),
                    b = new Uint8Array(16);
                window.crypto.getRandomValues(b);
                for (var c = 0; c < a.length; c++) a[c] = b[c];
                var d = a;
                break a
            } catch (e) {}
            d = Array(16);
            for (a = 0; 16 > a; a++) {
                b = Date.now();
                for (c = 0; c < b % 23; c++) d[a] = Math.random();
                d[a] = Math.floor(256 * Math.random())
            }
            if (Tr)
                for (a = 1, b = 0; b < Tr.length; b++) d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ Tr.charCodeAt(b), a++
        }
        a = [];
        for (b = 0; b < d.length; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] & 63));
        return a.join("")
    };
    var Vr = y.ytLoggingDocDocumentNonce_;
    Vr || (Vr = Ur(), z("ytLoggingDocDocumentNonce_", Vr));
    var Wr = Vr;
    var Xr = {
        uh: 0,
        he: 1,
        re: 2,
        ml: 3,
        wh: 4,
        yp: 5,
        cm: 6,
        Hn: 7,
        cn: 8,
        vn: 9,
        0: "DEFAULT",
        1: "CHAT",
        2: "CONVERSATIONS",
        3: "MINIPLAYER",
        4: "DIALOG",
        5: "VOZ",
        6: "MUSIC_WATCH_TABS",
        7: "SHARE",
        8: "PUSH_NOTIFICATIONS",
        9: "RICH_GRID_WATCH"
    };

    function Yr(a) {
        this.i = a
    }

    function Zr(a) {
        return new Yr({
            trackingParams: a
        })
    }
    Yr.prototype.getAsJson = function() {
        var a = {};
        void 0 !== this.i.trackingParams ? a.trackingParams = this.i.trackingParams : (a.veType = this.i.veType, void 0 !== this.i.veCounter && (a.veCounter = this.i.veCounter), void 0 !== this.i.elementIndex && (a.elementIndex = this.i.elementIndex));
        void 0 !== this.i.dataElement && (a.dataElement = this.i.dataElement.getAsJson());
        void 0 !== this.i.youtubeData && (a.youtubeData = this.i.youtubeData);
        return a
    };
    Yr.prototype.getAsJspb = function() {
        var a = new dj;
        void 0 !== this.i.trackingParams ? E(a, 1, this.i.trackingParams) : (void 0 !== this.i.veType && E(a, 2, this.i.veType), void 0 !== this.i.veCounter && E(a, 6, this.i.veCounter), void 0 !== this.i.elementIndex && E(a, 3, this.i.elementIndex));
        if (void 0 !== this.i.dataElement) {
            var b = this.i.dataElement.getAsJspb();
            G(a, dj, 7, b)
        }
        void 0 !== this.i.youtubeData && G(a, Bi, 8, this.i.jspbYoutubeData);
        return a
    };
    Yr.prototype.toString = function() {
        return JSON.stringify(this.getAsJson())
    };
    Yr.prototype.isClientVe = function() {
        return !this.i.trackingParams && !!this.i.veType
    };

    function $r(a) {
        a = void 0 === a ? 0 : a;
        return 0 === a ? "client-screen-nonce" : "client-screen-nonce." + a
    }

    function as(a) {
        a = void 0 === a ? 0 : a;
        return 0 === a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a
    }

    function bs(a) {
        return L(as(void 0 === a ? 0 : a))
    }
    z("yt_logging_screen.getRootVeType", bs);

    function cs(a) {
        return (a = bs(void 0 === a ? 0 : a)) ? new Yr({
            veType: a,
            youtubeData: void 0,
            jspbYoutubeData: void 0
        }) : null
    }

    function ds() {
        var a = L("csn-to-ctt-auth-info");
        a || (a = {}, mk("csn-to-ctt-auth-info", a));
        return a
    }

    function es(a) {
        a = L($r(void 0 === a ? 0 : a));
        if (!a && !L("USE_CSN_FALLBACK", !0)) return null;
        a || (a = "UNDEFINED_CSN");
        return a ? a : null
    }
    z("yt_logging_screen.getCurrentCsn", es);

    function fs(a, b, c) {
        var d = ds();
        (c = es(c)) && delete d[c];
        b && (d[a] = b)
    }

    function gs(a) {
        return ds()[a]
    }
    z("yt_logging_screen.getCttAuthInfo", gs);

    function hs(a, b, c, d) {
        c = void 0 === c ? 0 : c;
        if (a !== L($r(c)) || b !== L(as(c))) fs(a, d, c), mk($r(c), a), mk(as(c), b), b = function() {
                setTimeout(function() {
                    if (a)
                        if (M("web_time_via_jspb")) {
                            var e = new ej;
                            E(e, 1, Wr);
                            E(e, 2, a);
                            M("use_default_heartbeat_client") ? Fr(e) : Fr(e, void 0, jp)
                        } else e = {
                            clientDocumentNonce: Wr,
                            clientScreenNonce: a
                        }, M("use_default_heartbeat_client") ? dm("foregroundHeartbeatScreenAssociated", e) : hr("foregroundHeartbeatScreenAssociated", e, jp)
                }, 0)
            }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) :
            b()
    }
    z("yt_logging_screen.setCurrentScreen", hs);
    var is = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    z("yt.msgs_", is);

    function js(a) {
        Mj(is, arguments)
    };
    var ks = {
        ge: 3611,
        td: 27686,
        ud: 85013,
        vd: 23462,
        xd: 42016,
        yd: 62407,
        zd: 26926,
        wd: 43781,
        Ad: 51236,
        Bd: 79148,
        Cd: 50160,
        Dd: 77504,
        Pd: 87907,
        Qd: 18630,
        Rd: 54445,
        Sd: 80935,
        Td: 152172,
        Ud: 105675,
        Vd: 150723,
        Wd: 37521,
        Xd: 147285,
        Yd: 47786,
        Zd: 98349,
        ae: 123695,
        be: 6827,
        ce: 29434,
        de: 7282,
        ee: 124448,
        je: 32276,
        ie: 76278,
        ke: 147868,
        le: 147869,
        me: 93911,
        ne: 106531,
        oe: 27259,
        pe: 27262,
        qe: 27263,
        se: 21759,
        te: 27107,
        ue: 62936,
        we: 49568,
        xe: 38408,
        ye: 80637,
        ze: 68727,
        Ae: 68728,
        Be: 80353,
        Ce: 80356,
        De: 74610,
        Ee: 45707,
        Fe: 83962,
        Ge: 83970,
        He: 46713,
        Ie: 89711,
        Je: 74612,
        Ke: 93265,
        Le: 74611,
        Me: 131380,
        Oe: 128979,
        Pe: 139311,
        Qe: 128978,
        Ne: 131391,
        Re: 105350,
        Te: 139312,
        Ue: 134800,
        Se: 131392,
        We: 113533,
        Xe: 93252,
        Ye: 99357,
        af: 94521,
        bf: 114252,
        cf: 113532,
        df: 94522,
        Ze: 94583,
        ef: 88E3,
        ff: 139580,
        gf: 93253,
        hf: 93254,
        jf: 94387,
        kf: 94388,
        lf: 93255,
        mf: 97424,
        Ve: 72502,
        nf: 110111,
        pf: 76019,
        rf: 117092,
        sf: 117093,
        qf: 89431,
        tf: 110466,
        uf: 77240,
        vf: 60508,
        wf: 148123,
        xf: 148124,
        yf: 137401,
        zf: 137402,
        Af: 137046,
        Bf: 73393,
        Cf: 113534,
        Df: 92098,
        Ef: 131381,
        Ff: 84517,
        Gf: 83759,
        Hf: 80357,
        If: 86113,
        Jf: 72598,
        Kf: 72733,
        Lf: 107349,
        Mf: 124275,
        Nf: 118203,
        Of: 133275,
        Pf: 152569,
        Qf: 133274,
        Rf: 133272,
        Sf: 133273,
        Tf: 133276,
        Uf: 144507,
        Vf: 143247,
        Wf: 143248,
        Xf: 143249,
        Yf: 143250,
        Zf: 143251,
        ag: 144401,
        dg: 117431,
        cg: 133797,
        eg: 128572,
        fg: 133405,
        gg: 117429,
        hg: 117430,
        ig: 117432,
        jg: 120080,
        kg: 117259,
        lg: 121692,
        mg: 145656,
        ng: 145655,
        og: 145653,
        pg: 145654,
        qg: 145657,
        rg: 132972,
        sg: 133051,
        tg: 133658,
        ug: 132971,
        vg: 97615,
        xg: 143359,
        wg: 143356,
        zg: 143361,
        yg: 143358,
        Bg: 143360,
        Ag: 143357,
        Cg: 142303,
        Dg: 143353,
        Eg: 143354,
        Fg: 144479,
        Gg: 143355,
        Hg: 31402,
        Jg: 133624,
        Kg: 146477,
        Lg: 133623,
        Mg: 133622,
        Ig: 133621,
        Ng: 84774,
        Og: 95117,
        Pg: 150497,
        Qg: 98930,
        Rg: 98931,
        Sg: 98932,
        Tg: 43347,
        Ug: 129889,
        Vg: 149123,
        Wg: 45474,
        Xg: 100352,
        Yg: 84758,
        Zg: 98443,
        ah: 117985,
        bh: 74613,
        dh: 74614,
        eh: 64502,
        fh: 136032,
        gh: 74615,
        hh: 74616,
        ih: 122224,
        jh: 74617,
        kh: 77820,
        lh: 74618,
        mh: 93278,
        nh: 93274,
        oh: 93275,
        ph: 93276,
        qh: 22110,
        rh: 29433,
        sh: 133798,
        th: 132295,
        vh: 120541,
        xh: 82047,
        yh: 113550,
        zh: 75836,
        Ah: 75837,
        Bh: 42352,
        Ch: 84512,
        Dh: 76065,
        Eh: 75989,
        Jh: 16623,
        Kh: 32594,
        Lh: 27240,
        Mh: 32633,
        Nh: 74858,
        Ph: 3945,
        Oh: 16989,
        Qh: 45520,
        Rh: 25488,
        Sh: 25492,
        Th: 25494,
        Uh: 55760,
        Vh: 14057,
        Wh: 18451,
        Xh: 57204,
        Yh: 57203,
        Zh: 17897,
        ai: 57205,
        bi: 18198,
        ci: 17898,
        di: 17909,
        fi: 43980,
        gi: 46220,
        hi: 11721,
        ii: 147994,
        ji: 49954,
        ki: 96369,
        li: 3854,
        mi: 151633,
        ni: 56251,
        oi: 25624,
        ri: 152036,
        Ji: 16906,
        Ki: 99999,
        Li: 68172,
        Mi: 27068,
        Ni: 47973,
        Oi: 72773,
        Pi: 26970,
        Qi: 26971,
        Ri: 96805,
        Si: 17752,
        Ti: 73233,
        Ui: 109512,
        Vi: 22256,
        Wi: 14115,
        Xi: 22696,
        Yi: 89278,
        Zi: 89277,
        aj: 109513,
        bj: 43278,
        cj: 43459,
        dj: 43464,
        ej: 89279,
        fj: 43717,
        gj: 55764,
        hj: 22255,
        ij: 147912,
        jj: 89281,
        kj: 40963,
        lj: 43277,
        mj: 43442,
        nj: 91824,
        oj: 120137,
        pj: 96367,
        qj: 36850,
        rj: 72694,
        sj: 37414,
        tj: 36851,
        vj: 124863,
        uj: 121343,
        wj: 73491,
        xj: 54473,
        yj: 43375,
        zj: 46674,
        Aj: 143815,
        Bj: 139095,
        Cj: 144402,
        Dj: 149968,
        Ej: 149969,
        Fj: 32473,
        Gj: 72901,
        Hj: 72906,
        Ij: 50947,
        Jj: 50612,
        Kj: 50613,
        Lj: 50942,
        Mj: 84938,
        Nj: 84943,
        Oj: 84939,
        Pj: 84941,
        Qj: 84944,
        Rj: 84940,
        Sj: 84942,
        Tj: 35585,
        Uj: 51926,
        Vj: 79983,
        Wj: 63238,
        Xj: 18921,
        Yj: 63241,
        Zj: 57893,
        ak: 41182,
        bk: 135732,
        ck: 33424,
        dk: 22207,
        ek: 42993,
        fk: 36229,
        gk: 22206,
        hk: 22205,
        ik: 18993,
        jk: 19001,
        kk: 18990,
        lk: 18991,
        mk: 18997,
        nk: 18725,
        pk: 19003,
        qk: 36874,
        rk: 44763,
        sk: 33427,
        tk: 67793,
        uk: 22182,
        vk: 37091,
        wk: 34650,
        xk: 50617,
        yk: 47261,
        zk: 22287,
        Ak: 25144,
        Bk: 97917,
        Ck: 62397,
        Dk: 150871,
        Ek: 150874,
        Fk: 125598,
        Gk: 137935,
        Hk: 36961,
        Ik: 108035,
        Jk: 27426,
        Kk: 27857,
        Lk: 27846,
        Mk: 27854,
        Nk: 69692,
        Ok: 61411,
        Pk: 39299,
        Qk: 38696,
        Rk: 62520,
        Sk: 36382,
        Tk: 108701,
        Uk: 50663,
        Vk: 36387,
        Wk: 14908,
        Xk: 37533,
        Yk: 105443,
        Zk: 61635,
        al: 62274,
        bl: 133818,
        dl: 65702,
        fl: 65703,
        il: 65701,
        jl: 76256,
        kl: 37671,
        ll: 49953,
        nl: 36216,
        ol: 28237,
        pl: 39553,
        ql: 29222,
        rl: 26107,
        sl: 38050,
        ul: 26108,
        wl: 120745,
        vl: 26109,
        xl: 26110,
        yl: 66881,
        zl: 28236,
        Al: 14586,
        Bl: 57929,
        Cl: 74723,
        Dl: 44098,
        El: 44099,
        Hl: 23528,
        Il: 61699,
        Fl: 134104,
        Gl: 134103,
        Jl: 59149,
        Kl: 101951,
        Ll: 97346,
        Ml: 118051,
        Nl: 95102,
        Ol: 64882,
        Pl: 119505,
        Ql: 63595,
        Rl: 63349,
        Sl: 95101,
        Tl: 75240,
        Ul: 27039,
        Vl: 68823,
        Wl: 21537,
        Xl: 83464,
        Yl: 75707,
        Zl: 83113,
        am: 101952,
        bm: 101953,
        dm: 79610,
        em: 125755,
        fm: 24402,
        gm: 24400,
        hm: 32925,
        im: 57173,
        jm: 122502,
        km: 145268,
        lm: 138480,
        mm: 64423,
        nm: 64424,
        om: 33986,
        pm: 100828,
        qm: 129089,
        rm: 21409,
        vm: 135155,
        wm: 135156,
        xm: 135157,
        ym: 135158,
        zm: 135159,
        Am: 135160,
        Bm: 135161,
        Cm: 135162,
        Dm: 135163,
        Em: 135164,
        Fm: 135165,
        Gm: 135166,
        sm: 11070,
        tm: 11074,
        um: 17880,
        Hm: 14001,
        Jm: 30709,
        Km: 30707,
        Lm: 30711,
        Mm: 30710,
        Nm: 30708,
        Im: 26984,
        Om: 146143,
        Pm: 63648,
        Qm: 63649,
        Rm: 51879,
        Sm: 111059,
        Tm: 5754,
        Um: 20445,
        Vm: 151308,
        Wm: 151152,
        Ym: 130975,
        Xm: 130976,
        Zm: 110386,
        an: 113746,
        bn: 66557,
        dn: 17310,
        en: 28631,
        fn: 21589,
        gn: 68012,
        hn: 60480,
        jn: 138664,
        kn: 141121,
        ln: 31571,
        mn: 141978,
        nn: 150105,
        pn: 150106,
        qn: 150107,
        rn: 150108,
        sn: 76980,
        tn: 41577,
        un: 45469,
        wn: 38669,
        xn: 13768,
        yn: 13777,
        zn: 141842,
        An: 62985,
        Bn: 4724,
        Cn: 59369,
        Dn: 43927,
        En: 43928,
        Fn: 12924,
        Gn: 100355,
        Jn: 56219,
        Kn: 27669,
        Ln: 10337,
        In: 47896,
        Mn: 122629,
        On: 139723,
        Nn: 139722,
        Pn: 121258,
        Qn: 107598,
        Rn: 127991,
        Sn: 96639,
        Tn: 107536,
        Un: 130169,
        Vn: 96661,
        Wn: 145188,
        Xn: 96658,
        Yn: 116646,
        Zn: 121122,
        ao: 96660,
        bo: 127738,
        co: 127083,
        eo: 147842,
        fo: 104443,
        ho: 96659,
        jo: 147595,
        ko: 106442,
        lo: 134840,
        mo: 63667,
        no: 63668,
        oo: 63669,
        po: 130686,
        qo: 147036,
        ro: 78314,
        so: 147799,
        to: 148649,
        uo: 55761,
        vo: 127098,
        wo: 134841,
        xo: 96368,
        yo: 67374,
        zo: 48992,
        Ao: 146176,
        Bo: 49956,
        Co: 31961,
        Do: 26388,
        Eo: 23811,
        Fo: 5E4,
        Go: 126250,
        Ho: 96370,
        Io: 47355,
        Jo: 47356,
        Ko: 37935,
        Lo: 45521,
        Mo: 21760,
        No: 83769,
        Oo: 49977,
        Po: 49974,
        Qo: 93497,
        Ro: 93498,
        So: 34325,
        To: 140759,
        Uo: 115803,
        Vo: 123707,
        Wo: 100081,
        Xo: 35309,
        Yo: 68314,
        Zo: 25602,
        ap: 100339,
        bp: 143516,
        cp: 59018,
        ep: 18248,
        fp: 50625,
        gp: 9729,
        hp: 37168,
        ip: 37169,
        jp: 21667,
        kp: 16749,
        lp: 18635,
        mp: 39305,
        np: 18046,
        qp: 53969,
        rp: 8213,
        sp: 93926,
        tp: 102852,
        up: 110099,
        vp: 22678,
        wp: 69076,
        xp: 137575,
        zp: 139224,
        Ap: 100856,
        Bp: 17736,
        Cp: 3832,
        Dp: 147111,
        Ep: 55759,
        Fp: 64031,
        Lp: 93044,
        Mp: 93045,
        Np: 34388,
        Op: 17657,
        Pp: 17655,
        Qp: 39579,
        Rp: 39578,
        Sp: 77448,
        Tp: 8196,
        Up: 11357,
        Vp: 69877,
        Wp: 8197,
        Xp: 82039
    };

    function ls() {
        var a = sb(ms),
            b;
        return (new pf(function(c, d) {
            a.onSuccess = function(e) {
                Ok(e) ? c(new ns(e)) : d(new os("Request failed, status=" + (e && "status" in e ? e.status : -1), "net.badstatus", e))
            };
            a.onError = function(e) {
                d(new os("Unknown request error", "net.unknown", e))
            };
            a.onTimeout = function(e) {
                d(new os("Request timed out", "net.timeout", e))
            };
            b = Wk("//googleads.g.doubleclick.net/pagead/id", a)
        })).fb(function(c) {
            c instanceof wf && b.abort();
            return uf(c)
        })
    }

    function os(a, b, c) {
        $a.call(this, a + ", errorCode=" + b);
        this.errorCode = b;
        this.xhr = c;
        this.name = "PromiseAjaxError"
    }
    r(os, $a);

    function ns(a) {
        this.xhr = a
    };

    function ps() {
        this.i = 0;
        this.ka = null
    }
    ps.prototype.then = function(a, b, c) {
        return 1 === this.i && a ? (a = a.call(c, this.ka)) && "function" === typeof a.then ? a : qs(a) : 2 === this.i && b ? (a = b.call(c, this.ka)) && "function" === typeof a.then ? a : rs(a) : this
    };
    ps.prototype.getValue = function() {
        return this.ka
    };
    ps.prototype.$goog_Thenable = !0;

    function rs(a) {
        var b = new ps;
        a = void 0 === a ? null : a;
        b.i = 2;
        b.ka = void 0 === a ? null : a;
        return b
    }

    function qs(a) {
        var b = new ps;
        a = void 0 === a ? null : a;
        b.i = 1;
        b.ka = void 0 === a ? null : a;
        return b
    };

    function ss(a, b) {
        return {
            method: void 0 === b ? "POST" : b,
            mode: Jk(a) ? "same-origin" : "cors",
            credentials: Jk(a) ? "same-origin" : "include"
        }
    };

    function ts() {
        if (jg() || Ul && Vl("applewebkit") && !Vl("version") && (!Vl("safari") || Vl("gsa/")) || Nc && Vl("version/")) return !0;
        if (M("enable_web_eom_visitor_data")) return L("EOM_VISITOR_DATA") ? !1 : !0;
        var a = L("INNERTUBE_CLIENT_NAME");
        return !a || "WEB" !== a && "MWEB" !== a ? !0 : (a = gl("CONSENT")) ? a.startsWith("YES+") : !0
    };

    function us(a) {
        a: {
            var b = a.raw_embedded_player_response;
            if (!b && (a = a.embedded_player_response)) try {
                b = JSON.parse(a)
            } catch (d) {
                b = "EMBEDDED_PLAYER_MODE_UNKNOWN";
                break a
            }
            if (b) b: {
                for (var c in Nh)
                    if (Nh[c] == b.embeddedPlayerMode) {
                        b = Nh[c];
                        break b
                    }
                b = "EMBEDDED_PLAYER_MODE_UNKNOWN"
            }
            else b = "EMBEDDED_PLAYER_MODE_UNKNOWN"
        }
        return "EMBEDDED_PLAYER_MODE_PFL" === b
    };

    function vs(a) {
        $a.call(this, a.message || a.description || a.name);
        this.isMissing = a instanceof ws;
        this.isTimeout = a instanceof os && "net.timeout" == a.errorCode;
        this.isCanceled = a instanceof wf
    }
    r(vs, $a);
    vs.prototype.name = "BiscottiError";

    function ws() {
        $a.call(this, "Biscotti ID is missing from server")
    }
    r(ws, $a);
    ws.prototype.name = "BiscottiMissingError";
    var ms = {
            format: "RAW",
            method: "GET",
            timeout: 5E3,
            withCredentials: !0
        },
        xs = null;

    function yk() {
        if (M("disable_biscotti_fetch_entirely_for_all_web_clients")) return uf(Error("Biscotti id fetching has been disabled entirely."));
        if (!ts()) return uf(Error("User has not consented - not fetching biscotti id."));
        var a = L("PLAYER_VARS", {});
        if ("1" == qb(a)) return uf(Error("Biscotti ID is not available in private embed mode"));
        if (M("embeds_web_disable_ads_for_pfl") && us(a)) return uf(Error("Biscotti id fetching has been disabled for pfl."));
        xs || (xs = ls().then(ys).fb(function(b) {
            return zs(2, b)
        }));
        return xs
    }

    function ys(a) {
        a = a.xhr.responseText;
        if (0 != a.lastIndexOf(")]}'", 0)) throw new ws;
        a = JSON.parse(a.substr(4));
        if (1 < (a.type || 1)) throw new ws;
        a = a.id;
        zk(a);
        xs = qs(a);
        As(18E5, 2);
        return a
    }

    function zs(a, b) {
        b = new vs(b);
        zk("");
        xs = rs(b);
        0 < a && As(12E4, a - 1);
        throw b;
    }

    function As(a, b) {
        Pk(function() {
            ls().then(ys, function(c) {
                return zs(b, c)
            }).fb(bb)
        }, a)
    }

    function Bs() {
        try {
            var a = B("yt.ads.biscotti.getId_");
            return a ? a() : yk()
        } catch (b) {
            return uf(b)
        }
    };

    function Cs(a) {
        if ("1" != qb(L("PLAYER_VARS", {}))) {
            a && xk();
            try {
                Bs().then(function() {}, function() {}), Pk(Cs, 18E5)
            } catch (b) {
                vk(b)
            }
        }
    };

    function Ds() {
        this.ld = !0
    }

    function Es(a) {
        var b = {},
            c = lg([]);
        c && (b.Authorization = c, c = a = null == a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(L("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), M("voice_search_auth_header_removal") || (b["X-Goog-AuthUser"] = c), "INNERTUBE_HOST_OVERRIDE" in lk || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in lk && (b["X-Goog-PageId"] = L("DELEGATED_SESSION_ID")));
        return b
    };
    var Fs = Symbol("injectionDeps");

    function Gs(a) {
        this.name = a
    }
    Gs.prototype.toString = function() {
        return "InjectionToken(" + this.name + ")"
    };

    function Hs() {
        this.key = Is
    }

    function Js() {
        this.providers = new Map;
        this.i = new Map
    }
    Js.prototype.resolve = function(a) {
        return a instanceof Hs ? Ks(this, a.key, [], !0) : Ks(this, a, [])
    };

    function Ks(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (-1 < c.indexOf(b)) throw Error("Deps cycle for: " + b);
        if (a.i.has(b)) return a.i.get(b);
        if (!a.providers.has(b)) {
            if (d) return;
            throw Error("No provider for: " + b);
        }
        d = a.providers.get(b);
        c.push(b);
        if (d.sd) var e = d.sd;
        else if (d.rd) e = d[Fs] ? Ls(a, d[Fs], c) : [], e = d.rd.apply(d, ha(e));
        else if (d.nc) {
            e = d.nc;
            var f = e[Fs] ? Ls(a, e[Fs], c) : [];
            e = new(Function.prototype.bind.apply(e, [null].concat(ha(f))))
        } else throw Error("Could not resolve providers for: " + b);
        c.pop();
        d.tq || a.i.set(b, e);
        return e
    }

    function Ls(a, b, c) {
        return b ? b.map(function(d) {
            return d instanceof Hs ? Ks(a, d.key, c, !0) : Ks(a, d, c)
        }) : []
    };
    var Ms;
    var Ns = {
        identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
    };
    var Os = new Map([
        ["dark", "USER_INTERFACE_THEME_DARK"],
        ["light", "USER_INTERFACE_THEME_LIGHT"]
    ]);

    function Ps() {
        var a = void 0 === a ? window.location.href : a;
        if (M("kevlar_disable_theme_param")) return null;
        jc(kc(5, a));
        try {
            var b = Hk(a).theme;
            return Os.get(b) || null
        } catch (c) {}
        return null
    };

    function Qs() {
        this.i = {};
        if (this.j = hl()) {
            var a = gl("CONSISTENCY");
            a && Rs(this, {
                encryptedTokenJarContents: a
            })
        }
    }
    Qs.prototype.handleResponse = function(a, b) {
        var c, d;
        b = (null == (c = b.ga.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        var e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            e = p(b);
            for (c = e.next(); !c.done; c = e.next()) delete this.i[c.value.encryptedTokenJarContents];
            Rs(this, a)
        }
    };

    function Rs(a, b) {
        if (b.encryptedTokenJarContents && (a.i[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds)) {
            var c = Number(b.expirationSeconds);
            setTimeout(function() {
                delete a.i[b.encryptedTokenJarContents]
            }, 1E3 * c);
            a.j && fl("CONSISTENCY", b.encryptedTokenJarContents, c, void 0, !0)
        }
    };
    var Ss = window.location.hostname.split(".").slice(-2).join(".");

    function Ts() {
        var a = L("LOCATION_PLAYABILITY_TOKEN");
        "TVHTML5" === L("INNERTUBE_CLIENT_NAME") && (this.i = Us(this)) && (a = this.i.get("yt-location-playability-token"));
        a && (this.locationPlayabilityToken = a, this.j = void 0)
    }
    var Vs;
    Ts.getInstance = function() {
        Vs = B("yt.clientLocationService.instance");
        Vs || (Vs = new Ts, z("yt.clientLocationService.instance", Vs));
        return Vs
    };
    Ts.prototype.setLocationOnInnerTubeContext = function(a) {
        a.client || (a.client = {});
        this.j ? (a.client.locationInfo || (a.client.locationInfo = {}), a.client.locationInfo.latitudeE7 = Math.floor(1E7 * this.j.coords.latitude), a.client.locationInfo.longitudeE7 = Math.floor(1E7 * this.j.coords.longitude), a.client.locationInfo.horizontalAccuracyMeters = Math.round(this.j.coords.accuracy), a.client.locationInfo.forceLocationPlayabilityTokenRefresh = !0) : this.locationPlayabilityToken && (a.client.locationPlayabilityToken = this.locationPlayabilityToken)
    };
    Ts.prototype.handleResponse = function(a) {
        var b;
        a = null == (b = a.responseContext) ? void 0 : b.locationPlayabilityToken;
        void 0 !== a && (this.locationPlayabilityToken = a, this.j = void 0, "TVHTML5" === L("INNERTUBE_CLIENT_NAME") ? (this.i = Us(this)) && this.i.set("yt-location-playability-token", a, 15552E3) : fl("YT_CL", JSON.stringify({
            loctok: a
        }), 15552E3, Ss, !0))
    };

    function Us(a) {
        return void 0 === a.i ? new Fl("yt-client-location") : a.i
    }
    Ts.prototype.getCurrentPositionFromGeolocation = function() {
        var a = this;
        if (!(navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) || !M("web_enable_browser_geolocation_api") && !M("enable_handoff_location_2fa_on_mweb")) return Promise.reject(Error("Geolocation unsupported"));
        var b = !1,
            c = 1E4;
        M("enable_handoff_location_2fa_on_mweb") && (b = !0, c = 15E3);
        return new Promise(function(d, e) {
            navigator.geolocation.getCurrentPosition(function(f) {
                a.j = f;
                d(f)
            }, function(f) {
                e(f)
            }, {
                enableHighAccuracy: b,
                maximumAge: 0,
                timeout: c
            })
        })
    };
    Ts.prototype.createUnpluggedLocationInfo = function(a) {
        var b = {};
        a = a.coords;
        if (null == a ? 0 : a.latitude) b.latitudeE7 = Math.floor(1E7 * a.latitude);
        if (null == a ? 0 : a.longitude) b.longitudeE7 = Math.floor(1E7 * a.longitude);
        if (null == a ? 0 : a.accuracy) b.locationRadiusMeters = Math.round(a.accuracy);
        return b
    };

    function Ws(a, b) {
        var c;
        if ((null == (c = a.signalServiceEndpoint) ? 0 : c.signal) && b.La && (c = b.La[a.signalServiceEndpoint.signal])) return c();
        var d;
        if ((null == (d = a.continuationCommand) ? 0 : d.request) && b.Cc && (d = b.Cc[a.continuationCommand.request])) return d();
        for (var e in a)
            if (b.Kb[e] && (a = b.Kb[e])) return a()
    };

    function Xs(a) {
        return function() {
            return new a
        }
    };
    var Ys = {},
        Zs = (Ys.WEB_UNPLUGGED = "^unplugged/", Ys.WEB_UNPLUGGED_ONBOARDING = "^unplugged/", Ys.WEB_UNPLUGGED_OPS = "^unplugged/", Ys.WEB_UNPLUGGED_PUBLIC = "^unplugged/", Ys.WEB_CREATOR = "^creator/", Ys.WEB_KIDS = "^kids/", Ys.WEB_EXPERIMENTS = "^experiments/", Ys.WEB_MUSIC = "^music/", Ys.WEB_REMIX = "^music/", Ys.WEB_MUSIC_EMBEDDED_PLAYER = "^music/", Ys.WEB_MUSIC_EMBEDDED_PLAYER = "^main_app/|^sfv/", Ys);

    function $s(a) {
        var b = void 0 === b ? "UNKNOWN_INTERFACE" : b;
        if (1 === a.length) return a[0];
        var c = Zs[b];
        if (c) {
            var d = new RegExp(c),
                e = p(a);
            for (c = e.next(); !c.done; c = e.next())
                if (c = c.value, d.exec(c)) return c
        }
        var f = [];
        Object.entries(Zs).forEach(function(g) {
            var h = p(g);
            g = h.next().value;
            h = h.next().value;
            b !== g && f.push(h)
        });
        d = new RegExp(f.join("|"));
        a.sort(function(g, h) {
            return g.length - h.length
        });
        e = p(a);
        for (c = e.next(); !c.done; c = e.next())
            if (c = c.value, !d.exec(c)) return c;
        return a[0]
    };

    function at() {}
    at.prototype.m = function(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? Ns : c;
        var d = a.clickTrackingParams,
            e = this.o,
            f = !1;
        f = void 0 === f ? !1 : f;
        e = void 0 === e ? !1 : e;
        var g = L("INNERTUBE_CONTEXT");
        if (g) {
            g = tb(g);
            M("web_no_tracking_params_in_shell_killswitch") || delete g.clickTracking;
            g.client || (g.client = {});
            var h = g.client;
            "MWEB" === h.clientName && (h.clientFormFactor = L("IS_TABLET") ? "LARGE_FORM_FACTOR" : "SMALL_FORM_FACTOR");
            h.screenWidthPoints = window.innerWidth;
            h.screenHeightPoints = window.innerHeight;
            h.screenPixelDensity = Math.round(window.devicePixelRatio ||
                1);
            h.screenDensityFloat = window.devicePixelRatio || 1;
            h.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
            var k = void 0 === k ? !1 : k;
            jl.getInstance();
            var m = "USER_INTERFACE_THEME_LIGHT";
            ml(165) ? m = "USER_INTERFACE_THEME_DARK" : ml(174) ? m = "USER_INTERFACE_THEME_LIGHT" : !M("kevlar_legacy_browsers") && window.matchMedia && window.matchMedia("(prefers-color-scheme)").matches && window.matchMedia("(prefers-color-scheme: dark)").matches && (m = "USER_INTERFACE_THEME_DARK");
            k = k ? m : Ps() || m;
            h.userInterfaceTheme = k;
            if (!f) {
                if (k =
                    tl()) h.connectionType = k;
                M("web_log_effective_connection_type") && (k = ul()) && (g.client.effectiveConnectionType = k)
            }
            var q;
            if (M("web_log_memory_total_kbytes") && (null == (q = y.navigator) ? 0 : q.deviceMemory)) {
                var t;
                q = null == (t = y.navigator) ? void 0 : t.deviceMemory;
                g.client.memoryTotalKbytes = "" + 1E6 * q
            }
            t = Hk(y.location.href);
            !M("web_populate_internal_geo_killswitch") && t.internalcountrycode && (h.internalGeo = t.internalcountrycode);
            "MWEB" === h.clientName || "WEB" === h.clientName ? (h.mainAppWebInfo = {
                    graftUrl: y.location.href
                }, M("kevlar_woffle") &&
                dl.i && (h.mainAppWebInfo.pwaInstallabilityStatus = dl.i.i ? "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED" : "PWA_INSTALLABILITY_STATUS_UNKNOWN"), h.mainAppWebInfo.webDisplayMode = el(), h.mainAppWebInfo.isWebNativeShareAvailable = navigator && void 0 !== navigator.share) : "TVHTML5" === h.clientName && (!M("web_lr_app_quality_killswitch") && (t = L("LIVING_ROOM_APP_QUALITY")) && (h.tvAppInfo = Object.assign(h.tvAppInfo || {}, {
                appQuality: t
            })), t = L("LIVING_ROOM_CERTIFICATION_SCOPE")) && (h.tvAppInfo = Object.assign(h.tvAppInfo || {}, {
                certificationScope: t
            }));
            if (!M("web_populate_time_zone_itc_killswitch")) {
                b: {
                    if ("undefined" !== typeof Intl) try {
                        var x = (new Intl.DateTimeFormat).resolvedOptions().timeZone;
                        break b
                    } catch (Ta) {}
                    x = void 0
                }
                x && (h.timeZone = x)
            }(x = qk()) ? h.experimentsToken = x: delete h.experimentsToken;
            x = rk();
            Qs.i || (Qs.i = new Qs);
            h = Qs.i.i;
            t = [];
            q = 0;
            for (var u in h) t[q++] = h[u];
            g.request = Object.assign({}, g.request, {
                internalExperimentFlags: x,
                consistencyTokenJars: t
            });
            !M("web_prequest_context_killswitch") && (u = L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT")) && (g.request.externalPrequestContext =
                u);
            x = jl.getInstance();
            u = ml(58);
            x = x.get("gsml", "");
            g.user = Object.assign({}, g.user);
            u && (g.user.enableSafetyMode = u);
            x && (g.user.lockedSafetyMode = !0);
            M("warm_op_csn_cleanup") ? e && (f = es()) && (g.clientScreenNonce = f) : !f && (f = es()) && (g.clientScreenNonce = f);
            d && (g.clickTracking = {
                clickTrackingParams: d
            });
            if (d = B("yt.mdx.remote.remoteClient_")) g.remoteClient = d;
            M("web_enable_client_location_service") && Ts.getInstance().setLocationOnInnerTubeContext(g);
            try {
                var A = Kk(),
                    D = A.bid;
                delete A.bid;
                g.adSignalsInfo = {
                    params: [],
                    bid: D
                };
                var F = p(Object.entries(A));
                for (var N = F.next(); !N.done; N = F.next()) {
                    var O = p(N.value),
                        Q = O.next().value,
                        ca = O.next().value;
                    A = Q;
                    D = ca;
                    d = void 0;
                    null == (d = g.adSignalsInfo.params) || d.push({
                        key: A,
                        value: "" + D
                    })
                }
            } catch (Ta) {
                Mr(Ta)
            }
            F = g
        } else Mr(Error("Error: No InnerTubeContext shell provided in ytconfig.")), F = {};
        F = {
            context: F
        };
        if (N = this.i(a)) {
            this.j(F, N, b);
            var V;
            b = "/youtubei/v1/" + $s(this.l());
            var W;
            (a = null == (V = a.commandMetadata) ? void 0 : null == (W = V.webCommandMetadata) ? void 0 : W.apiUrl) && (b = a);
            V = b;
            (W = L("INNERTUBE_HOST_OVERRIDE")) &&
            (V = String(W) + String(mc(V)));
            W = {};
            W.key = L("INNERTUBE_API_KEY");
            M("json_condensed_response") && (W.prettyPrint = "false");
            V = Ik(V, W || {}, !1);
            V = {
                input: V,
                Ca: ss(V),
                ga: F,
                config: Object.assign({}, void 0)
            };
            V.config.Ra ? V.config.Ra.identity = c : V.config.Ra = {
                identity: c
            };
            return V
        }
        Mr(new R("Error: Failed to create Request from Command.", a))
    };
    ea.Object.defineProperties(at.prototype, {
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function bt() {}
    r(bt, at);
    bt.prototype.m = function() {
        return {
            input: "/getDatasyncIdsEndpoint",
            Ca: ss("/getDatasyncIdsEndpoint", "GET"),
            ga: {}
        }
    };
    bt.prototype.l = function() {
        return []
    };
    bt.prototype.i = function() {};
    bt.prototype.j = function() {};
    var ct = {},
        dt = (ct.GET_DATASYNC_IDS = Xs(bt), ct);

    function et(a) {
        var b = Ia.apply(1, arguments);
        if (!ft(a) || b.some(function(d) {
                return !ft(d)
            })) throw Error("Only objects may be merged.");
        b = p(b);
        for (var c = b.next(); !c.done; c = b.next()) gt(a, c.value);
        return a
    }

    function gt(a, b) {
        for (var c in b)
            if (ft(b[c])) {
                if (c in a && !ft(a[c])) throw Error("Cannot merge an object into a non-object.");
                c in a || (a[c] = {});
                gt(a[c], b[c])
            } else if (ht(b[c])) {
            if (c in a && !ht(a[c])) throw Error("Cannot merge an array into a non-array.");
            c in a || (a[c] = []);
            jt(a[c], b[c])
        } else a[c] = b[c];
        return a
    }

    function jt(a, b) {
        b = p(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, ft(c) ? a.push(gt({}, c)) : ht(c) ? a.push(jt([], c)) : a.push(c);
        return a
    }

    function ft(a) {
        return "object" === typeof a && !Array.isArray(a)
    }

    function ht(a) {
        return "object" === typeof a && Array.isArray(a)
    };

    function kt(a, b) {
        Ln.call(this, 1, arguments);
        this.timer = b
    }
    r(kt, Ln);
    var lt = new Mn("aft-recorded", kt);
    var mt = window;

    function nt() {
        this.timing = {};
        this.clearResourceTimings = function() {};
        this.webkitClearResourceTimings = function() {};
        this.mozClearResourceTimings = function() {};
        this.msClearResourceTimings = function() {};
        this.oClearResourceTimings = function() {}
    }
    var S = mt.performance || mt.mozPerformance || mt.msPerformance || mt.webkitPerformance || new nt;
    var ot = !1,
        pt = {
            'script[name="scheduler/scheduler"]': "sj",
            'script[name="player/base"]': "pj",
            'link[rel="stylesheet"][name="www-player"]': "pc",
            'link[rel="stylesheet"][name="player/www-player"]': "pc",
            'script[name="desktop_polymer/desktop_polymer"]': "dpj",
            'link[rel="import"][name="desktop_polymer"]': "dph",
            'script[name="mobile-c3"]': "mcj",
            'link[rel="stylesheet"][name="mobile-c3"]': "mcc",
            'script[name="player-plasma-ias-phone/base"]': "mcppj",
            'script[name="player-plasma-ias-tablet/base"]': "mcptj",
            'link[rel="stylesheet"][name="mobile-polymer-player-ias"]': "mcpc",
            'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]': "mcpsc",
            'script[name="mobile_blazer_core_mod"]': "mbcj",
            'link[rel="stylesheet"][name="mobile_blazer_css"]': "mbc",
            'script[name="mobile_blazer_logged_in_users_mod"]': "mbliuj",
            'script[name="mobile_blazer_logged_out_users_mod"]': "mblouj",
            'script[name="mobile_blazer_noncore_mod"]': "mbnj",
            "#player_css": "mbpc",
            'script[name="mobile_blazer_desktopplayer_mod"]': "mbpj",
            'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]': "mbtc",
            'script[name="mobile_blazer_watch_mod"]': "mbwj"
        };
    Wa(S.clearResourceTimings || S.webkitClearResourceTimings || S.mozClearResourceTimings || S.msClearResourceTimings || S.oClearResourceTimings || bb, S);

    function qt(a) {
        var b = rt(a);
        if (b.aft) return b.aft;
        a = L((a || "") + "TIMING_AFT_KEYS", ["ol"]);
        for (var c = a.length, d = 0; d < c; d++) {
            var e = b[a[d]];
            if (e) return e
        }
        return NaN
    }

    function st() {
        var a;
        if (M("csi_use_performance_navigation_timing")) {
            var b, c, d, e = null == S ? void 0 : null == (a = S.getEntriesByType) ? void 0 : null == (b = a.call(S, "navigation")) ? void 0 : null == (c = b[0]) ? void 0 : null == (d = c.toJSON) ? void 0 : d.call(c);
            e ? (e.requestStart = tt(e.requestStart), e.responseEnd = tt(e.responseEnd), e.redirectStart = tt(e.redirectStart), e.redirectEnd = tt(e.redirectEnd), e.domainLookupEnd = tt(e.domainLookupEnd), e.connectStart = tt(e.connectStart), e.connectEnd = tt(e.connectEnd), e.responseStart = tt(e.responseStart),
                e.secureConnectionStart = tt(e.secureConnectionStart), e.domainLookupStart = tt(e.domainLookupStart), e.isPerformanceNavigationTiming = !0, a = e) : a = S.timing
        } else a = S.timing;
        return a
    }

    function ut() {
        return M("csi_use_time_origin") && S.timeOrigin ? Math.floor(S.timeOrigin) : S.timing.navigationStart
    }

    function tt(a) {
        return Math.round(ut() + a)
    }

    function vt(a) {
        var b;
        (b = B("ytcsi." + (a || "") + "data_")) || (b = {
            tick: {},
            info: {}
        }, z("ytcsi." + (a || "") + "data_", b));
        return b
    }

    function wt(a) {
        a = vt(a);
        a.info || (a.info = {});
        return a.info
    }

    function rt(a) {
        a = vt(a);
        a.tick || (a.tick = {});
        return a.tick
    }

    function xt(a) {
        a = vt(a);
        if (a.gel) {
            var b = a.gel;
            b.gelInfos || (b.gelInfos = {});
            b.gelTicks || (b.gelTicks = {})
        } else a.gel = {
            gelTicks: {},
            gelInfos: {}
        };
        return a.gel
    }

    function zt(a) {
        a = xt(a);
        a.gelInfos || (a.gelInfos = {});
        return a.gelInfos
    }

    function At(a) {
        var b = vt(a).nonce;
        b || (b = Ur(), vt(a).nonce = b);
        return b
    }

    function Bt(a) {
        var b = rt(a || ""),
            c = qt(a);
        c && !ot && (Rn(lt, new kt(Math.round(c - b._start), a)), ot = !0)
    }

    function Ct(a, b) {
        for (var c = p(Object.keys(b)), d = c.next(); !d.done; d = c.next())
            if (d = d.value, !Object.keys(a).includes(d) || "object" === typeof b[d] && !Ct(a[d], b[d])) return !1;
        return !0
    };

    function Dt() {
        if (S.getEntriesByType) {
            var a = S.getEntriesByType("paint");
            if (a = ib(a, function(b) {
                    return "first-paint" === b.name
                })) return tt(a.startTime)
        }
        a = S.timing;
        return a.Pc ? Math.max(0, a.Pc) : 0
    };

    function Et() {
        var a = B("ytcsi.debug");
        a || (a = [], z("ytcsi.debug", a), z("ytcsi.reference", {}));
        return a
    }

    function Ft(a) {
        a = a || "";
        var b = B("ytcsi.reference");
        b || (Et(), b = B("ytcsi.reference"));
        if (b[a]) return b[a];
        var c = Et(),
            d = {
                timerName: a,
                info: {},
                tick: {},
                span: {},
                jspbInfo: []
            };
        c.push(d);
        return b[a] = d
    };
    var T = {},
        Gt = (T.auto_search = "LATENCY_ACTION_AUTO_SEARCH", T.ad_to_ad = "LATENCY_ACTION_AD_TO_AD", T.ad_to_video = "LATENCY_ACTION_AD_TO_VIDEO", T["analytics.explore"] = "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE", T.app_startup = "LATENCY_ACTION_APP_STARTUP", T["artist.analytics"] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS", T["artist.events"] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS", T["artist.presskit"] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE", T["song.analytics"] = "LATENCY_ACTION_CREATOR_SONG_ANALYTICS", T.browse = "LATENCY_ACTION_BROWSE",
            T.cast_splash = "LATENCY_ACTION_CAST_SPLASH", T.channels = "LATENCY_ACTION_CHANNELS", T.creator_channel_dashboard = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD", T["channel.analytics"] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS", T["channel.comments"] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS", T["channel.content"] = "LATENCY_ACTION_CREATOR_POST_LIST", T["channel.copyright"] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT", T["channel.editing"] = "LATENCY_ACTION_CREATOR_CHANNEL_EDITING", T["channel.monetization"] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
            T["channel.music"] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC", T["channel.playlists"] = "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS", T["channel.translations"] = "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS", T["channel.videos"] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS", T["channel.live_streaming"] = "LATENCY_ACTION_CREATOR_LIVE_STREAMING", T.chips = "LATENCY_ACTION_CHIPS", T["dialog.copyright_strikes"] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES", T["dialog.video_copyright"] = "LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
            T["dialog.uploads"] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS", T.direct_playback = "LATENCY_ACTION_DIRECT_PLAYBACK", T.embed = "LATENCY_ACTION_EMBED", T.entity_key_serialization_perf = "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF", T.entity_key_deserialization_perf = "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF", T.explore = "LATENCY_ACTION_EXPLORE", T.home = "LATENCY_ACTION_HOME", T.library = "LATENCY_ACTION_LIBRARY", T.live = "LATENCY_ACTION_LIVE", T.live_pagination = "LATENCY_ACTION_LIVE_PAGINATION", T.onboarding = "LATENCY_ACTION_ONBOARDING",
            T.parent_profile_settings = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS", T.parent_tools_collection = "LATENCY_ACTION_PARENT_TOOLS_COLLECTION", T.parent_tools_dashboard = "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD", T.player_att = "LATENCY_ACTION_PLAYER_ATTESTATION", T["post.comments"] = "LATENCY_ACTION_CREATOR_POST_COMMENTS", T["post.edit"] = "LATENCY_ACTION_CREATOR_POST_EDIT", T.prebuffer = "LATENCY_ACTION_PREBUFFER", T.prefetch = "LATENCY_ACTION_PREFETCH", T.profile_settings = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS", T.profile_switcher =
            "LATENCY_ACTION_LOGIN", T.reel_watch = "LATENCY_ACTION_REEL_WATCH", T.results = "LATENCY_ACTION_RESULTS", T.search_ui = "LATENCY_ACTION_SEARCH_UI", T.search_suggest = "LATENCY_ACTION_SUGGEST", T.search_zero_state = "LATENCY_ACTION_SEARCH_ZERO_STATE", T.secret_code = "LATENCY_ACTION_KIDS_SECRET_CODE", T.seek = "LATENCY_ACTION_PLAYER_SEEK", T.settings = "LATENCY_ACTION_SETTINGS", T.store = "LATENCY_ACTION_STORE", T.tenx = "LATENCY_ACTION_TENX", T.video_to_ad = "LATENCY_ACTION_VIDEO_TO_AD", T.watch = "LATENCY_ACTION_WATCH", T.watch_it_again =
            "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN", T["watch,watch7"] = "LATENCY_ACTION_WATCH", T["watch,watch7_html5"] = "LATENCY_ACTION_WATCH", T["watch,watch7ad"] = "LATENCY_ACTION_WATCH", T["watch,watch7ad_html5"] = "LATENCY_ACTION_WATCH", T.wn_comments = "LATENCY_ACTION_LOAD_COMMENTS", T.ww_rqs = "LATENCY_ACTION_WHO_IS_WATCHING", T["video.analytics"] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS", T["video.comments"] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS", T["video.edit"] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT", T["video.editor"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
            T["video.editor_async"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC", T["video.live_settings"] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS", T["video.live_streaming"] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING", T["video.monetization"] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION", T["video.translations"] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS", T.voice_assistant = "LATENCY_ACTION_VOICE_ASSISTANT", T.cast_load_by_entity_to_watch = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH", T.networkless_performance =
            "LATENCY_ACTION_NETWORKLESS_PERFORMANCE", T),
        U = {},
        Ht = (U.ad_allowed = "adTypesAllowed", U.yt_abt = "adBreakType", U.ad_cpn = "adClientPlaybackNonce", U.ad_docid = "adVideoId", U.yt_ad_an = "adNetworks", U.ad_at = "adType", U.aida = "appInstallDataAgeMs", U.browse_id = "browseId", U.p = "httpProtocol", U.t = "transportProtocol", U.cs = "commandSource", U.cpn = "clientPlaybackNonce", U.ccs = "creatorInfo.creatorCanaryState", U.ctop = "creatorInfo.topEntityType", U.csn = "clientScreenNonce", U.docid = "videoId", U.GetHome_rid = "requestIds", U.GetSearch_rid =
            "requestIds", U.GetPlayer_rid = "requestIds", U.GetWatchNext_rid = "requestIds", U.GetBrowse_rid = "requestIds", U.GetLibrary_rid = "requestIds", U.is_continuation = "isContinuation", U.is_nav = "isNavigation", U.b_p = "kabukiInfo.browseParams", U.is_prefetch = "kabukiInfo.isPrefetch", U.is_secondary_nav = "kabukiInfo.isSecondaryNav", U.nav_type = "kabukiInfo.navigationType", U.prev_browse_id = "kabukiInfo.prevBrowseId", U.query_source = "kabukiInfo.querySource", U.voz_type = "kabukiInfo.vozType", U.yt_lt = "loadType", U.mver = "creatorInfo.measurementVersion",
            U.yt_ad = "isMonetized", U.nr = "webInfo.navigationReason", U.nrsu = "navigationRequestedSameUrl", U.pnt = "performanceNavigationTiming", U.prt = "playbackRequiresTap", U.plt = "playerInfo.playbackType", U.pis = "playerInfo.playerInitializedState", U.paused = "playerInfo.isPausedOnLoad", U.yt_pt = "playerType", U.fmt = "playerInfo.itag", U.yt_pl = "watchInfo.isPlaylist", U.yt_pre = "playerInfo.preloadType", U.yt_ad_pr = "prerollAllowed", U.pa = "previousAction", U.yt_red = "isRedSubscriber", U.rce = "mwebInfo.responseContentEncoding", U.rc = "resourceInfo.resourceCache",
            U.scrh = "screenHeight", U.scrw = "screenWidth", U.st = "serverTimeMs", U.ssdm = "shellStartupDurationMs", U.br_trs = "tvInfo.bedrockTriggerState", U.kebqat = "kabukiInfo.earlyBrowseRequestInfo.abandonmentType", U.kebqa = "kabukiInfo.earlyBrowseRequestInfo.adopted", U.label = "tvInfo.label", U.is_mdx = "tvInfo.isMdx", U.preloaded = "tvInfo.isPreloaded", U.aac_type = "tvInfo.authAccessCredentialType", U.upg_player_vis = "playerInfo.visibilityState", U.query = "unpluggedInfo.query", U.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString",
            U.yt_vst = "videoStreamType", U.vph = "viewportHeight", U.vpw = "viewportWidth", U.yt_vis = "isVisible", U.rcl = "mwebInfo.responseContentLength", U.GetSettings_rid = "requestIds", U.GetTrending_rid = "requestIds", U.GetMusicSearchSuggestions_rid = "requestIds", U.REQUEST_ID = "requestIds", U),
        It = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
        Jt = {},
        Kt = (Jt.ccs = "CANARY_STATE_", Jt.mver = "MEASUREMENT_VERSION_", Jt.pis = "PLAYER_INITIALIZED_STATE_", Jt.yt_pt = "LATENCY_PLAYER_", Jt.pa = "LATENCY_ACTION_", Jt.ctop = "TOP_ENTITY_TYPE_", Jt.yt_vst = "VIDEO_STREAM_TYPE_", Jt),
        Lt = "all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");

    function Mt(a) {
        return Gt[a] || "LATENCY_ACTION_UNKNOWN"
    }

    function Nt(a, b, c) {
        c = xt(c);
        if (c.gelInfos) c.gelInfos[a] = !0;
        else {
            var d = {};
            c.gelInfos = (d[a] = !0, d)
        }
        if (a.match("_rid")) {
            var e = a.split("_rid")[0];
            a = "REQUEST_ID"
        }
        if (a in Ht) {
            c = Ht[a];
            0 <= db(It, c) && (b = !!b);
            a in Kt && "string" === typeof b && (b = Kt[a] + b.toUpperCase());
            a = b;
            b = c.split(".");
            for (var f = d = {}, g = 0; g < b.length - 1; g++) {
                var h = b[g];
                f[h] = {};
                f = f[h]
            }
            f[b[b.length - 1]] = "requestIds" === c ? [{
                id: a,
                endpoint: e
            }] : a;
            return et({}, d)
        }
        0 <= db(Lt, a) || Nr(new R("Unknown label logged with GEL CSI", a))
    };
    var X = {
        LATENCY_ACTION_KIDS_PROFILE_SWITCHER: 90,
        LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER: 100,
        LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC: 46,
        LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR: 37,
        LATENCY_ACTION_SPINNER_DISPLAYED: 14,
        LATENCY_ACTION_PLAYABILITY_CHECK: 10,
        LATENCY_ACTION_PROCESS: 9,
        LATENCY_ACTION_APP_STARTUP: 5,
        LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC: 173,
        LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC: 172,
        LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC: 171,
        LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC: 170,
        LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC: 169,
        LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC: 168,
        LATENCY_ACTION_GET_OFFERS_RPC: 167,
        LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC: 166,
        LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC: 165,
        LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC: 164,
        LATENCY_ACTION_GET_OFFER_DETAILS_RPC: 163,
        LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC: 162,
        LATENCY_ACTION_GET_TIP_MODULE_RPC: 161,
        LATENCY_ACTION_HANDLE_TRANSACTION_RPC: 160,
        LATENCY_ACTION_COMPLETE_TRANSACTION_RPC: 159,
        LATENCY_ACTION_GET_CART_RPC: 158,
        LATENCY_ACTION_THUMBNAIL_FETCH: 156,
        LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK: 154,
        LATENCY_ACTION_SHARE_VIDEO: 153,
        LATENCY_ACTION_AD_TO_VIDEO_INT: 152,
        LATENCY_ACTION_ABANDONED_BROWSE: 151,
        LATENCY_ACTION_PLAYER_ROTATION: 150,
        LATENCY_ACTION_SHOPPING_IN_APP: 124,
        LATENCY_ACTION_PLAYER_ATTESTATION: 121,
        LATENCY_ACTION_PLAYER_SEEK: 119,
        LATENCY_ACTION_SUPER_STICKER_BUY_FLOW: 114,
        LATENCY_ACTION_BLOCKS_PERFORMANCE: 148,
        LATENCY_ACTION_ASSISTANT_QUERY: 138,
        LATENCY_ACTION_ASSISTANT_SETTINGS: 137,
        LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF: 129,
        LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF: 128,
        LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE: 127,
        LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION: 123,
        LATENCY_ACTION_NETWORKLESS_PERFORMANCE: 122,
        LATENCY_ACTION_DOWNLOADS_EXPANSION: 133,
        LATENCY_ACTION_ENTITY_TRANSFORM: 131,
        LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER: 96,
        LATENCY_ACTION_EMBEDS_SET_VIDEO: 95,
        LATENCY_ACTION_SETTINGS: 93,
        LATENCY_ACTION_ABANDONED_STARTUP: 81,
        LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY: 80,
        LATENCY_ACTION_MEDIA_BROWSER_SEARCH: 79,
        LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE: 78,
        LATENCY_ACTION_WHO_IS_WATCHING: 77,
        LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH: 76,
        LATENCY_ACTION_LITE_SWITCH_ACCOUNT: 73,
        LATENCY_ACTION_ELEMENTS_PERFORMANCE: 70,
        LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION: 69,
        LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION: 65,
        LATENCY_ACTION_OFFLINE_STORE_START: 61,
        LATENCY_ACTION_REEL_EDITOR: 58,
        LATENCY_ACTION_CHANNEL_SUBSCRIBE: 56,
        LATENCY_ACTION_CHANNEL_PREVIEW: 55,
        LATENCY_ACTION_PREFETCH: 52,
        LATENCY_ACTION_ABANDONED_WATCH: 45,
        LATENCY_ACTION_LOAD_COMMENT_REPLIES: 26,
        LATENCY_ACTION_LOAD_COMMENTS: 25,
        LATENCY_ACTION_EDIT_COMMENT: 24,
        LATENCY_ACTION_NEW_COMMENT: 23,
        LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING: 19,
        LATENCY_ACTION_EMBED: 18,
        LATENCY_ACTION_MDX_LAUNCH: 15,
        LATENCY_ACTION_RESOLVE_URL: 13,
        LATENCY_ACTION_CAST_SPLASH: 149,
        LATENCY_ACTION_MDX_CAST: 120,
        LATENCY_ACTION_MDX_COMMAND: 12,
        LATENCY_ACTION_REEL_SELECT_SEGMENT: 136,
        LATENCY_ACTION_ACCELERATED_EFFECTS: 145,
        LATENCY_ACTION_UPLOAD_AUDIO_MIXER: 147,
        LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING: 157,
        LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING: 146,
        LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK: 130,
        LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD: 125,
        LATENCY_ACTION_SHORTS_VIDEO_INGESTION: 155,
        LATENCY_ACTION_SHORTS_GALLERY: 107,
        LATENCY_ACTION_SHORTS_TRIM: 105,
        LATENCY_ACTION_SHORTS_EDIT: 104,
        LATENCY_ACTION_SHORTS_CAMERA: 103,
        LATENCY_ACTION_PARENT_TOOLS_DASHBOARD: 102,
        LATENCY_ACTION_PARENT_TOOLS_COLLECTION: 101,
        LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS: 116,
        LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS: 115,
        LATENCY_ACTION_MUSIC_ALBUM_DETAIL: 72,
        LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL: 71,
        LATENCY_ACTION_STORE: 175,
        LATENCY_ACTION_CHIPS: 68,
        LATENCY_ACTION_SEARCH_ZERO_STATE: 67,
        LATENCY_ACTION_LIVE_PAGINATION: 117,
        LATENCY_ACTION_LIVE: 20,
        LATENCY_ACTION_PREBUFFER: 40,
        LATENCY_ACTION_TENX: 39,
        LATENCY_ACTION_KIDS_PROFILE_SETTINGS: 94,
        LATENCY_ACTION_KIDS_WATCH_IT_AGAIN: 92,
        LATENCY_ACTION_KIDS_SECRET_CODE: 91,
        LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS: 89,
        LATENCY_ACTION_KIDS_ONBOARDING: 88,
        LATENCY_ACTION_KIDS_VOICE_SEARCH: 82,
        LATENCY_ACTION_KIDS_CURATED_COLLECTION: 62,
        LATENCY_ACTION_KIDS_LIBRARY: 53,
        LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS: 38,
        LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION: 74,
        LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING: 141,
        LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS: 142,
        LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC: 51,
        LATENCY_ACTION_CREATOR_VIDEO_EDITOR: 50,
        LATENCY_ACTION_CREATOR_VIDEO_EDIT: 36,
        LATENCY_ACTION_CREATOR_VIDEO_COMMENTS: 34,
        LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS: 33,
        LATENCY_ACTION_CREATOR_SONG_ANALYTICS: 176,
        LATENCY_ACTION_CREATOR_POST_LIST: 112,
        LATENCY_ACTION_CREATOR_POST_EDIT: 110,
        LATENCY_ACTION_CREATOR_POST_COMMENTS: 111,
        LATENCY_ACTION_CREATOR_LIVE_STREAMING: 108,
        LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT: 174,
        LATENCY_ACTION_CREATOR_DIALOG_UPLOADS: 86,
        LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES: 87,
        LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS: 32,
        LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS: 48,
        LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS: 139,
        LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT: 177,
        LATENCY_ACTION_CREATOR_CHANNEL_MUSIC: 99,
        LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION: 43,
        LATENCY_ACTION_CREATOR_CHANNEL_EDITING: 113,
        LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD: 49,
        LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT: 44,
        LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS: 66,
        LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS: 31,
        LATENCY_ACTION_CREATOR_ARTIST_PROFILE: 85,
        LATENCY_ACTION_CREATOR_ARTIST_CONCERTS: 84,
        LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS: 83,
        LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE: 140,
        LATENCY_ACTION_STORYBOARD_THUMBNAILS: 118,
        LATENCY_ACTION_SEARCH_THUMBNAILS: 59,
        LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD: 54,
        LATENCY_ACTION_VOICE_ASSISTANT: 47,
        LATENCY_ACTION_SEARCH_UI: 35,
        LATENCY_ACTION_SUGGEST: 30,
        LATENCY_ACTION_AUTO_SEARCH: 126,
        LATENCY_ACTION_DOWNLOADS: 98,
        LATENCY_ACTION_EXPLORE: 75,
        LATENCY_ACTION_VIDEO_LIST: 63,
        LATENCY_ACTION_HOME_RESUME: 60,
        LATENCY_ACTION_SUBSCRIPTIONS_LIST: 57,
        LATENCY_ACTION_THUMBNAIL_LOAD: 42,
        LATENCY_ACTION_FIRST_THUMBNAIL_LOAD: 29,
        LATENCY_ACTION_SUBSCRIPTIONS_FEED: 109,
        LATENCY_ACTION_SUBSCRIPTIONS: 28,
        LATENCY_ACTION_TRENDING: 27,
        LATENCY_ACTION_LIBRARY: 21,
        LATENCY_ACTION_VIDEO_THUMBNAIL: 8,
        LATENCY_ACTION_SHOW_MORE: 7,
        LATENCY_ACTION_VIDEO_PREVIEW: 6,
        LATENCY_ACTION_PREBUFFER_VIDEO: 144,
        LATENCY_ACTION_PREFETCH_VIDEO: 143,
        LATENCY_ACTION_DIRECT_PLAYBACK: 132,
        LATENCY_ACTION_REEL_WATCH: 41,
        LATENCY_ACTION_AD_TO_AD: 22,
        LATENCY_ACTION_VIDEO_TO_AD: 17,
        LATENCY_ACTION_AD_TO_VIDEO: 16,
        LATENCY_ACTION_ONBOARDING: 135,
        LATENCY_ACTION_LOGIN: 97,
        LATENCY_ACTION_BROWSE: 11,
        LATENCY_ACTION_CHANNELS: 4,
        LATENCY_ACTION_WATCH: 3,
        LATENCY_ACTION_RESULTS: 2,
        LATENCY_ACTION_HOME: 1,
        LATENCY_ACTION_STARTUP: 106,
        LATENCY_ACTION_UNKNOWN: 0
    };
    X[X.LATENCY_ACTION_KIDS_PROFILE_SWITCHER] = "LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
    X[X.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER] = "LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";
    X[X.LATENCY_ACTION_SPINNER_DISPLAYED] = "LATENCY_ACTION_SPINNER_DISPLAYED";
    X[X.LATENCY_ACTION_PLAYABILITY_CHECK] = "LATENCY_ACTION_PLAYABILITY_CHECK";
    X[X.LATENCY_ACTION_PROCESS] = "LATENCY_ACTION_PROCESS";
    X[X.LATENCY_ACTION_APP_STARTUP] = "LATENCY_ACTION_APP_STARTUP";
    X[X.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC] = "LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";
    X[X.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC] = "LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
    X[X.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC] = "LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
    X[X.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC] = "LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";
    X[X.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC] = "LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
    X[X.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC] = "LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";
    X[X.LATENCY_ACTION_GET_OFFERS_RPC] = "LATENCY_ACTION_GET_OFFERS_RPC";
    X[X.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC] = "LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
    X[X.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC] = "LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
    X[X.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC] = "LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";
    X[X.LATENCY_ACTION_GET_OFFER_DETAILS_RPC] = "LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
    X[X.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC] = "LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";
    X[X.LATENCY_ACTION_GET_TIP_MODULE_RPC] = "LATENCY_ACTION_GET_TIP_MODULE_RPC";
    X[X.LATENCY_ACTION_HANDLE_TRANSACTION_RPC] = "LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
    X[X.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC] = "LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";
    X[X.LATENCY_ACTION_GET_CART_RPC] = "LATENCY_ACTION_GET_CART_RPC";
    X[X.LATENCY_ACTION_THUMBNAIL_FETCH] = "LATENCY_ACTION_THUMBNAIL_FETCH";
    X[X.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK] = "LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";
    X[X.LATENCY_ACTION_SHARE_VIDEO] = "LATENCY_ACTION_SHARE_VIDEO";
    X[X.LATENCY_ACTION_AD_TO_VIDEO_INT] = "LATENCY_ACTION_AD_TO_VIDEO_INT";
    X[X.LATENCY_ACTION_ABANDONED_BROWSE] = "LATENCY_ACTION_ABANDONED_BROWSE";
    X[X.LATENCY_ACTION_PLAYER_ROTATION] = "LATENCY_ACTION_PLAYER_ROTATION";
    X[X.LATENCY_ACTION_SHOPPING_IN_APP] = "LATENCY_ACTION_SHOPPING_IN_APP";
    X[X.LATENCY_ACTION_PLAYER_ATTESTATION] = "LATENCY_ACTION_PLAYER_ATTESTATION";
    X[X.LATENCY_ACTION_PLAYER_SEEK] = "LATENCY_ACTION_PLAYER_SEEK";
    X[X.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW] = "LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
    X[X.LATENCY_ACTION_BLOCKS_PERFORMANCE] = "LATENCY_ACTION_BLOCKS_PERFORMANCE";
    X[X.LATENCY_ACTION_ASSISTANT_QUERY] = "LATENCY_ACTION_ASSISTANT_QUERY";
    X[X.LATENCY_ACTION_ASSISTANT_SETTINGS] = "LATENCY_ACTION_ASSISTANT_SETTINGS";
    X[X.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF] = "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";
    X[X.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF] = "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
    X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE] = "LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";
    X[X.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION] = "LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
    X[X.LATENCY_ACTION_NETWORKLESS_PERFORMANCE] = "LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
    X[X.LATENCY_ACTION_DOWNLOADS_EXPANSION] = "LATENCY_ACTION_DOWNLOADS_EXPANSION";
    X[X.LATENCY_ACTION_ENTITY_TRANSFORM] = "LATENCY_ACTION_ENTITY_TRANSFORM";
    X[X.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER] = "LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
    X[X.LATENCY_ACTION_EMBEDS_SET_VIDEO] = "LATENCY_ACTION_EMBEDS_SET_VIDEO";
    X[X.LATENCY_ACTION_SETTINGS] = "LATENCY_ACTION_SETTINGS";
    X[X.LATENCY_ACTION_ABANDONED_STARTUP] = "LATENCY_ACTION_ABANDONED_STARTUP";
    X[X.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY] = "LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
    X[X.LATENCY_ACTION_MEDIA_BROWSER_SEARCH] = "LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
    X[X.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE] = "LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";
    X[X.LATENCY_ACTION_WHO_IS_WATCHING] = "LATENCY_ACTION_WHO_IS_WATCHING";
    X[X.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH] = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";
    X[X.LATENCY_ACTION_LITE_SWITCH_ACCOUNT] = "LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
    X[X.LATENCY_ACTION_ELEMENTS_PERFORMANCE] = "LATENCY_ACTION_ELEMENTS_PERFORMANCE";
    X[X.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION] = "LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
    X[X.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION] = "LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";
    X[X.LATENCY_ACTION_OFFLINE_STORE_START] = "LATENCY_ACTION_OFFLINE_STORE_START";
    X[X.LATENCY_ACTION_REEL_EDITOR] = "LATENCY_ACTION_REEL_EDITOR";
    X[X.LATENCY_ACTION_CHANNEL_SUBSCRIBE] = "LATENCY_ACTION_CHANNEL_SUBSCRIBE";
    X[X.LATENCY_ACTION_CHANNEL_PREVIEW] = "LATENCY_ACTION_CHANNEL_PREVIEW";
    X[X.LATENCY_ACTION_PREFETCH] = "LATENCY_ACTION_PREFETCH";
    X[X.LATENCY_ACTION_ABANDONED_WATCH] = "LATENCY_ACTION_ABANDONED_WATCH";
    X[X.LATENCY_ACTION_LOAD_COMMENT_REPLIES] = "LATENCY_ACTION_LOAD_COMMENT_REPLIES";
    X[X.LATENCY_ACTION_LOAD_COMMENTS] = "LATENCY_ACTION_LOAD_COMMENTS";
    X[X.LATENCY_ACTION_EDIT_COMMENT] = "LATENCY_ACTION_EDIT_COMMENT";
    X[X.LATENCY_ACTION_NEW_COMMENT] = "LATENCY_ACTION_NEW_COMMENT";
    X[X.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING] = "LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";
    X[X.LATENCY_ACTION_EMBED] = "LATENCY_ACTION_EMBED";
    X[X.LATENCY_ACTION_MDX_LAUNCH] = "LATENCY_ACTION_MDX_LAUNCH";
    X[X.LATENCY_ACTION_RESOLVE_URL] = "LATENCY_ACTION_RESOLVE_URL";
    X[X.LATENCY_ACTION_CAST_SPLASH] = "LATENCY_ACTION_CAST_SPLASH";
    X[X.LATENCY_ACTION_MDX_CAST] = "LATENCY_ACTION_MDX_CAST";
    X[X.LATENCY_ACTION_MDX_COMMAND] = "LATENCY_ACTION_MDX_COMMAND";
    X[X.LATENCY_ACTION_REEL_SELECT_SEGMENT] = "LATENCY_ACTION_REEL_SELECT_SEGMENT";
    X[X.LATENCY_ACTION_ACCELERATED_EFFECTS] = "LATENCY_ACTION_ACCELERATED_EFFECTS";
    X[X.LATENCY_ACTION_UPLOAD_AUDIO_MIXER] = "LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
    X[X.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING] = "LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";
    X[X.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING] = "LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";
    X[X.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK] = "LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
    X[X.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD] = "LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
    X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION] = "LATENCY_ACTION_SHORTS_VIDEO_INGESTION";
    X[X.LATENCY_ACTION_SHORTS_GALLERY] = "LATENCY_ACTION_SHORTS_GALLERY";
    X[X.LATENCY_ACTION_SHORTS_TRIM] = "LATENCY_ACTION_SHORTS_TRIM";
    X[X.LATENCY_ACTION_SHORTS_EDIT] = "LATENCY_ACTION_SHORTS_EDIT";
    X[X.LATENCY_ACTION_SHORTS_CAMERA] = "LATENCY_ACTION_SHORTS_CAMERA";
    X[X.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD] = "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";
    X[X.LATENCY_ACTION_PARENT_TOOLS_COLLECTION] = "LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
    X[X.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS] = "LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";
    X[X.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS] = "LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";
    X[X.LATENCY_ACTION_MUSIC_ALBUM_DETAIL] = "LATENCY_ACTION_MUSIC_ALBUM_DETAIL";
    X[X.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL] = "LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
    X[X.LATENCY_ACTION_STORE] = "LATENCY_ACTION_STORE";
    X[X.LATENCY_ACTION_CHIPS] = "LATENCY_ACTION_CHIPS";
    X[X.LATENCY_ACTION_SEARCH_ZERO_STATE] = "LATENCY_ACTION_SEARCH_ZERO_STATE";
    X[X.LATENCY_ACTION_LIVE_PAGINATION] = "LATENCY_ACTION_LIVE_PAGINATION";
    X[X.LATENCY_ACTION_LIVE] = "LATENCY_ACTION_LIVE";
    X[X.LATENCY_ACTION_PREBUFFER] = "LATENCY_ACTION_PREBUFFER";
    X[X.LATENCY_ACTION_TENX] = "LATENCY_ACTION_TENX";
    X[X.LATENCY_ACTION_KIDS_PROFILE_SETTINGS] = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
    X[X.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN] = "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
    X[X.LATENCY_ACTION_KIDS_SECRET_CODE] = "LATENCY_ACTION_KIDS_SECRET_CODE";
    X[X.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS] = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
    X[X.LATENCY_ACTION_KIDS_ONBOARDING] = "LATENCY_ACTION_KIDS_ONBOARDING";
    X[X.LATENCY_ACTION_KIDS_VOICE_SEARCH] = "LATENCY_ACTION_KIDS_VOICE_SEARCH";
    X[X.LATENCY_ACTION_KIDS_CURATED_COLLECTION] = "LATENCY_ACTION_KIDS_CURATED_COLLECTION";
    X[X.LATENCY_ACTION_KIDS_LIBRARY] = "LATENCY_ACTION_KIDS_LIBRARY";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC] = "LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR] = "LATENCY_ACTION_CREATOR_VIDEO_EDITOR";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_EDIT] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
    X[X.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";
    X[X.LATENCY_ACTION_CREATOR_SONG_ANALYTICS] = "LATENCY_ACTION_CREATOR_SONG_ANALYTICS";
    X[X.LATENCY_ACTION_CREATOR_POST_LIST] = "LATENCY_ACTION_CREATOR_POST_LIST";
    X[X.LATENCY_ACTION_CREATOR_POST_EDIT] = "LATENCY_ACTION_CREATOR_POST_EDIT";
    X[X.LATENCY_ACTION_CREATOR_POST_COMMENTS] = "LATENCY_ACTION_CREATOR_POST_COMMENTS";
    X[X.LATENCY_ACTION_CREATOR_LIVE_STREAMING] = "LATENCY_ACTION_CREATOR_LIVE_STREAMING";
    X[X.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT] = "LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";
    X[X.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
    X[X.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS] = "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS] = "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_EDITING] = "LATENCY_ACTION_CREATOR_CHANNEL_EDITING";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD] = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";
    X[X.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";
    X[X.LATENCY_ACTION_CREATOR_ARTIST_PROFILE] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
    X[X.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";
    X[X.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
    X[X.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE] = "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
    X[X.LATENCY_ACTION_STORYBOARD_THUMBNAILS] = "LATENCY_ACTION_STORYBOARD_THUMBNAILS";
    X[X.LATENCY_ACTION_SEARCH_THUMBNAILS] = "LATENCY_ACTION_SEARCH_THUMBNAILS";
    X[X.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD] = "LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
    X[X.LATENCY_ACTION_VOICE_ASSISTANT] = "LATENCY_ACTION_VOICE_ASSISTANT";
    X[X.LATENCY_ACTION_SEARCH_UI] = "LATENCY_ACTION_SEARCH_UI";
    X[X.LATENCY_ACTION_SUGGEST] = "LATENCY_ACTION_SUGGEST";
    X[X.LATENCY_ACTION_AUTO_SEARCH] = "LATENCY_ACTION_AUTO_SEARCH";
    X[X.LATENCY_ACTION_DOWNLOADS] = "LATENCY_ACTION_DOWNLOADS";
    X[X.LATENCY_ACTION_EXPLORE] = "LATENCY_ACTION_EXPLORE";
    X[X.LATENCY_ACTION_VIDEO_LIST] = "LATENCY_ACTION_VIDEO_LIST";
    X[X.LATENCY_ACTION_HOME_RESUME] = "LATENCY_ACTION_HOME_RESUME";
    X[X.LATENCY_ACTION_SUBSCRIPTIONS_LIST] = "LATENCY_ACTION_SUBSCRIPTIONS_LIST";
    X[X.LATENCY_ACTION_THUMBNAIL_LOAD] = "LATENCY_ACTION_THUMBNAIL_LOAD";
    X[X.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD] = "LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";
    X[X.LATENCY_ACTION_SUBSCRIPTIONS_FEED] = "LATENCY_ACTION_SUBSCRIPTIONS_FEED";
    X[X.LATENCY_ACTION_SUBSCRIPTIONS] = "LATENCY_ACTION_SUBSCRIPTIONS";
    X[X.LATENCY_ACTION_TRENDING] = "LATENCY_ACTION_TRENDING";
    X[X.LATENCY_ACTION_LIBRARY] = "LATENCY_ACTION_LIBRARY";
    X[X.LATENCY_ACTION_VIDEO_THUMBNAIL] = "LATENCY_ACTION_VIDEO_THUMBNAIL";
    X[X.LATENCY_ACTION_SHOW_MORE] = "LATENCY_ACTION_SHOW_MORE";
    X[X.LATENCY_ACTION_VIDEO_PREVIEW] = "LATENCY_ACTION_VIDEO_PREVIEW";
    X[X.LATENCY_ACTION_PREBUFFER_VIDEO] = "LATENCY_ACTION_PREBUFFER_VIDEO";
    X[X.LATENCY_ACTION_PREFETCH_VIDEO] = "LATENCY_ACTION_PREFETCH_VIDEO";
    X[X.LATENCY_ACTION_DIRECT_PLAYBACK] = "LATENCY_ACTION_DIRECT_PLAYBACK";
    X[X.LATENCY_ACTION_REEL_WATCH] = "LATENCY_ACTION_REEL_WATCH";
    X[X.LATENCY_ACTION_AD_TO_AD] = "LATENCY_ACTION_AD_TO_AD";
    X[X.LATENCY_ACTION_VIDEO_TO_AD] = "LATENCY_ACTION_VIDEO_TO_AD";
    X[X.LATENCY_ACTION_AD_TO_VIDEO] = "LATENCY_ACTION_AD_TO_VIDEO";
    X[X.LATENCY_ACTION_ONBOARDING] = "LATENCY_ACTION_ONBOARDING";
    X[X.LATENCY_ACTION_LOGIN] = "LATENCY_ACTION_LOGIN";
    X[X.LATENCY_ACTION_BROWSE] = "LATENCY_ACTION_BROWSE";
    X[X.LATENCY_ACTION_CHANNELS] = "LATENCY_ACTION_CHANNELS";
    X[X.LATENCY_ACTION_WATCH] = "LATENCY_ACTION_WATCH";
    X[X.LATENCY_ACTION_RESULTS] = "LATENCY_ACTION_RESULTS";
    X[X.LATENCY_ACTION_HOME] = "LATENCY_ACTION_HOME";
    X[X.LATENCY_ACTION_STARTUP] = "LATENCY_ACTION_STARTUP";
    X[X.LATENCY_ACTION_UNKNOWN] = "LATENCY_ACTION_UNKNOWN";
    var Ot = {
        LATENCY_NETWORK_MOBILE: 2,
        LATENCY_NETWORK_WIFI: 1,
        LATENCY_NETWORK_UNKNOWN: 0
    };
    Ot[Ot.LATENCY_NETWORK_MOBILE] = "LATENCY_NETWORK_MOBILE";
    Ot[Ot.LATENCY_NETWORK_WIFI] = "LATENCY_NETWORK_WIFI";
    Ot[Ot.LATENCY_NETWORK_UNKNOWN] = "LATENCY_NETWORK_UNKNOWN";
    var Y = {
        CONN_INVALID: 31,
        CONN_CELLULAR_5G_NSA: 12,
        CONN_CELLULAR_5G_SA: 11,
        CONN_WIFI_METERED: 10,
        CONN_CELLULAR_5G: 9,
        CONN_DISCO: 8,
        CONN_CELLULAR_UNKNOWN: 7,
        CONN_CELLULAR_4G: 6,
        CONN_CELLULAR_3G: 5,
        CONN_CELLULAR_2G: 4,
        CONN_WIFI: 3,
        CONN_NONE: 2,
        CONN_UNKNOWN: 1,
        CONN_DEFAULT: 0
    };
    Y[Y.CONN_INVALID] = "CONN_INVALID";
    Y[Y.CONN_CELLULAR_5G_NSA] = "CONN_CELLULAR_5G_NSA";
    Y[Y.CONN_CELLULAR_5G_SA] = "CONN_CELLULAR_5G_SA";
    Y[Y.CONN_WIFI_METERED] = "CONN_WIFI_METERED";
    Y[Y.CONN_CELLULAR_5G] = "CONN_CELLULAR_5G";
    Y[Y.CONN_DISCO] = "CONN_DISCO";
    Y[Y.CONN_CELLULAR_UNKNOWN] = "CONN_CELLULAR_UNKNOWN";
    Y[Y.CONN_CELLULAR_4G] = "CONN_CELLULAR_4G";
    Y[Y.CONN_CELLULAR_3G] = "CONN_CELLULAR_3G";
    Y[Y.CONN_CELLULAR_2G] = "CONN_CELLULAR_2G";
    Y[Y.CONN_WIFI] = "CONN_WIFI";
    Y[Y.CONN_NONE] = "CONN_NONE";
    Y[Y.CONN_UNKNOWN] = "CONN_UNKNOWN";
    Y[Y.CONN_DEFAULT] = "CONN_DEFAULT";
    var Z = {
        DETAILED_NETWORK_TYPE_NR_NSA: 126,
        DETAILED_NETWORK_TYPE_NR_SA: 125,
        DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED: 124,
        DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT: 123,
        DETAILED_NETWORK_TYPE_DISCONNECTED: 122,
        DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN: 121,
        DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN: 120,
        DETAILED_NETWORK_TYPE_WIMAX: 119,
        DETAILED_NETWORK_TYPE_ETHERNET: 118,
        DETAILED_NETWORK_TYPE_BLUETOOTH: 117,
        DETAILED_NETWORK_TYPE_WIFI: 116,
        DETAILED_NETWORK_TYPE_LTE: 115,
        DETAILED_NETWORK_TYPE_HSPAP: 114,
        DETAILED_NETWORK_TYPE_EHRPD: 113,
        DETAILED_NETWORK_TYPE_EVDO_B: 112,
        DETAILED_NETWORK_TYPE_UMTS: 111,
        DETAILED_NETWORK_TYPE_IDEN: 110,
        DETAILED_NETWORK_TYPE_HSUPA: 109,
        DETAILED_NETWORK_TYPE_HSPA: 108,
        DETAILED_NETWORK_TYPE_HSDPA: 107,
        DETAILED_NETWORK_TYPE_EVDO_A: 106,
        DETAILED_NETWORK_TYPE_EVDO_0: 105,
        DETAILED_NETWORK_TYPE_CDMA: 104,
        DETAILED_NETWORK_TYPE_1_X_RTT: 103,
        DETAILED_NETWORK_TYPE_GPRS: 102,
        DETAILED_NETWORK_TYPE_EDGE: 101,
        DETAILED_NETWORK_TYPE_UNKNOWN: 0
    };
    Z[Z.DETAILED_NETWORK_TYPE_NR_NSA] = "DETAILED_NETWORK_TYPE_NR_NSA";
    Z[Z.DETAILED_NETWORK_TYPE_NR_SA] = "DETAILED_NETWORK_TYPE_NR_SA";
    Z[Z.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED] = "DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";
    Z[Z.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT] = "DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";
    Z[Z.DETAILED_NETWORK_TYPE_DISCONNECTED] = "DETAILED_NETWORK_TYPE_DISCONNECTED";
    Z[Z.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN] = "DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";
    Z[Z.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN] = "DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
    Z[Z.DETAILED_NETWORK_TYPE_WIMAX] = "DETAILED_NETWORK_TYPE_WIMAX";
    Z[Z.DETAILED_NETWORK_TYPE_ETHERNET] = "DETAILED_NETWORK_TYPE_ETHERNET";
    Z[Z.DETAILED_NETWORK_TYPE_BLUETOOTH] = "DETAILED_NETWORK_TYPE_BLUETOOTH";
    Z[Z.DETAILED_NETWORK_TYPE_WIFI] = "DETAILED_NETWORK_TYPE_WIFI";
    Z[Z.DETAILED_NETWORK_TYPE_LTE] = "DETAILED_NETWORK_TYPE_LTE";
    Z[Z.DETAILED_NETWORK_TYPE_HSPAP] = "DETAILED_NETWORK_TYPE_HSPAP";
    Z[Z.DETAILED_NETWORK_TYPE_EHRPD] = "DETAILED_NETWORK_TYPE_EHRPD";
    Z[Z.DETAILED_NETWORK_TYPE_EVDO_B] = "DETAILED_NETWORK_TYPE_EVDO_B";
    Z[Z.DETAILED_NETWORK_TYPE_UMTS] = "DETAILED_NETWORK_TYPE_UMTS";
    Z[Z.DETAILED_NETWORK_TYPE_IDEN] = "DETAILED_NETWORK_TYPE_IDEN";
    Z[Z.DETAILED_NETWORK_TYPE_HSUPA] = "DETAILED_NETWORK_TYPE_HSUPA";
    Z[Z.DETAILED_NETWORK_TYPE_HSPA] = "DETAILED_NETWORK_TYPE_HSPA";
    Z[Z.DETAILED_NETWORK_TYPE_HSDPA] = "DETAILED_NETWORK_TYPE_HSDPA";
    Z[Z.DETAILED_NETWORK_TYPE_EVDO_A] = "DETAILED_NETWORK_TYPE_EVDO_A";
    Z[Z.DETAILED_NETWORK_TYPE_EVDO_0] = "DETAILED_NETWORK_TYPE_EVDO_0";
    Z[Z.DETAILED_NETWORK_TYPE_CDMA] = "DETAILED_NETWORK_TYPE_CDMA";
    Z[Z.DETAILED_NETWORK_TYPE_1_X_RTT] = "DETAILED_NETWORK_TYPE_1_X_RTT";
    Z[Z.DETAILED_NETWORK_TYPE_GPRS] = "DETAILED_NETWORK_TYPE_GPRS";
    Z[Z.DETAILED_NETWORK_TYPE_EDGE] = "DETAILED_NETWORK_TYPE_EDGE";
    Z[Z.DETAILED_NETWORK_TYPE_UNKNOWN] = "DETAILED_NETWORK_TYPE_UNKNOWN";
    var Pt = {
        LATENCY_PLAYER_RTSP: 7,
        LATENCY_PLAYER_HTML5_INLINE: 6,
        LATENCY_PLAYER_HTML5_FULLSCREEN: 5,
        LATENCY_PLAYER_HTML5: 4,
        LATENCY_PLAYER_FRAMEWORK: 3,
        LATENCY_PLAYER_FLASH: 2,
        LATENCY_PLAYER_EXO: 1,
        LATENCY_PLAYER_UNKNOWN: 0
    };
    Pt[Pt.LATENCY_PLAYER_RTSP] = "LATENCY_PLAYER_RTSP";
    Pt[Pt.LATENCY_PLAYER_HTML5_INLINE] = "LATENCY_PLAYER_HTML5_INLINE";
    Pt[Pt.LATENCY_PLAYER_HTML5_FULLSCREEN] = "LATENCY_PLAYER_HTML5_FULLSCREEN";
    Pt[Pt.LATENCY_PLAYER_HTML5] = "LATENCY_PLAYER_HTML5";
    Pt[Pt.LATENCY_PLAYER_FRAMEWORK] = "LATENCY_PLAYER_FRAMEWORK";
    Pt[Pt.LATENCY_PLAYER_FLASH] = "LATENCY_PLAYER_FLASH";
    Pt[Pt.LATENCY_PLAYER_EXO] = "LATENCY_PLAYER_EXO";
    Pt[Pt.LATENCY_PLAYER_UNKNOWN] = "LATENCY_PLAYER_UNKNOWN";
    var Qt = {
        LATENCY_AD_BREAK_TYPE_POSTROLL: 3,
        LATENCY_AD_BREAK_TYPE_MIDROLL: 2,
        LATENCY_AD_BREAK_TYPE_PREROLL: 1,
        LATENCY_AD_BREAK_TYPE_UNKNOWN: 0
    };
    Qt[Qt.LATENCY_AD_BREAK_TYPE_POSTROLL] = "LATENCY_AD_BREAK_TYPE_POSTROLL";
    Qt[Qt.LATENCY_AD_BREAK_TYPE_MIDROLL] = "LATENCY_AD_BREAK_TYPE_MIDROLL";
    Qt[Qt.LATENCY_AD_BREAK_TYPE_PREROLL] = "LATENCY_AD_BREAK_TYPE_PREROLL";
    Qt[Qt.LATENCY_AD_BREAK_TYPE_UNKNOWN] = "LATENCY_AD_BREAK_TYPE_UNKNOWN";
    var Rt = {
        LATENCY_ACTION_ERROR_STARTUP_TIMEOUT: 1,
        LATENCY_ACTION_ERROR_UNSPECIFIED: 0
    };
    Rt[Rt.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT] = "LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";
    Rt[Rt.LATENCY_ACTION_ERROR_UNSPECIFIED] = "LATENCY_ACTION_ERROR_UNSPECIFIED";
    var St = {
        LIVE_STREAM_MODE_WINDOW: 5,
        LIVE_STREAM_MODE_POST: 4,
        LIVE_STREAM_MODE_LP: 3,
        LIVE_STREAM_MODE_LIVE: 2,
        LIVE_STREAM_MODE_DVR: 1,
        LIVE_STREAM_MODE_UNKNOWN: 0
    };
    St[St.LIVE_STREAM_MODE_WINDOW] = "LIVE_STREAM_MODE_WINDOW";
    St[St.LIVE_STREAM_MODE_POST] = "LIVE_STREAM_MODE_POST";
    St[St.LIVE_STREAM_MODE_LP] = "LIVE_STREAM_MODE_LP";
    St[St.LIVE_STREAM_MODE_LIVE] = "LIVE_STREAM_MODE_LIVE";
    St[St.LIVE_STREAM_MODE_DVR] = "LIVE_STREAM_MODE_DVR";
    St[St.LIVE_STREAM_MODE_UNKNOWN] = "LIVE_STREAM_MODE_UNKNOWN";
    var Tt = {
        VIDEO_STREAM_TYPE_VOD: 3,
        VIDEO_STREAM_TYPE_DVR: 2,
        VIDEO_STREAM_TYPE_LIVE: 1,
        VIDEO_STREAM_TYPE_UNSPECIFIED: 0
    };
    Tt[Tt.VIDEO_STREAM_TYPE_VOD] = "VIDEO_STREAM_TYPE_VOD";
    Tt[Tt.VIDEO_STREAM_TYPE_DVR] = "VIDEO_STREAM_TYPE_DVR";
    Tt[Tt.VIDEO_STREAM_TYPE_LIVE] = "VIDEO_STREAM_TYPE_LIVE";
    Tt[Tt.VIDEO_STREAM_TYPE_UNSPECIFIED] = "VIDEO_STREAM_TYPE_UNSPECIFIED";
    var Ut = {
        YT_IDB_TRANSACTION_TYPE_READ: 2,
        YT_IDB_TRANSACTION_TYPE_WRITE: 1,
        YT_IDB_TRANSACTION_TYPE_UNKNOWN: 0
    };
    Ut[Ut.YT_IDB_TRANSACTION_TYPE_READ] = "YT_IDB_TRANSACTION_TYPE_READ";
    Ut[Ut.YT_IDB_TRANSACTION_TYPE_WRITE] = "YT_IDB_TRANSACTION_TYPE_WRITE";
    Ut[Ut.YT_IDB_TRANSACTION_TYPE_UNKNOWN] = "YT_IDB_TRANSACTION_TYPE_UNKNOWN";
    var Vt = {
        PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN: 2,
        PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT: 1,
        PLAYER_ROTATION_TYPE_UNKNOWN: 0
    };
    Vt[Vt.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN] = "PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
    Vt[Vt.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT] = "PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";
    Vt[Vt.PLAYER_ROTATION_TYPE_UNKNOWN] = "PLAYER_ROTATION_TYPE_UNKNOWN";
    var Wt = "actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");
    var Xt = y.ytLoggingLatencyUsageStats_ || {};
    z("ytLoggingLatencyUsageStats_", Xt);

    function Yt() {
        this.i = 0
    }

    function Zt() {
        Yt.i || (Yt.i = new Yt);
        return Yt.i
    }
    Yt.prototype.tick = function(a, b, c, d) {
        $t(this, "tick_" + a + "_" + b) || (c = {
            timestamp: c,
            cttAuthInfo: d
        }, M("web_csi_via_jspb") ? (d = new Bj, E(d, 1, a), E(d, 2, b), a = new Ej, Td(a, Bj, 5, Fj, d), yr(a, c)) : dm("latencyActionTicked", {
            tickName: a,
            clientActionNonce: b
        }, c))
    };
    Yt.prototype.info = function(a, b, c) {
        var d = Object.keys(a).join("");
        $t(this, "info_" + d + "_" + b) || (a = Object.assign({}, a), a.clientActionNonce = b, dm("latencyActionInfo", a, {
            cttAuthInfo: c
        }))
    };
    Yt.prototype.jspbInfo = function(a, b, c) {
        for (var d = "", e = 0; e < a.toJSON().length; e++) void 0 !== a.toJSON()[e] && (d = 0 === e ? d.concat("" + e) : d.concat("_" + e));
        $t(this, "info_" + d + "_" + b) || (E(a, 2, b), b = {
            cttAuthInfo: c
        }, c = new Ej, Td(c, vj, 7, Fj, a), yr(c, b))
    };
    Yt.prototype.span = function(a, b, c) {
        var d = Object.keys(a).join("");
        $t(this, "span_" + d + "_" + b) || (a.clientActionNonce = b, dm("latencyActionSpan", a, {
            cttAuthInfo: c
        }))
    };

    function $t(a, b) {
        Xt[b] = Xt[b] || {
            count: 0
        };
        var c = Xt[b];
        c.count++;
        c.time = P();
        a.i || (a.i = Ol(function() {
            var d = P(),
                e;
            for (e in Xt) Xt[e] && 6E4 < d - Xt[e].time && delete Xt[e];
            a && (a.i = 0)
        }, 5E3));
        return 5 < c.count ? (6 === c.count && 1 > 1E5 * Math.random() && (c = new R("CSI data exceeded logging limit with key", b.split("_")), 0 <= b.indexOf("plev") || Nr(c)), !0) : !1
    };

    function au() {
        var a = ["ol"];
        Ft("").info.actionType = "embed";
        a && mk("TIMING_AFT_KEYS", a);
        mk("TIMING_ACTION", "embed");
        bu();
        a = wt();
        var b = zt();
        if ("cold" === a.yt_lt || "cold" === b.loadType) {
            var c = rt(),
                d = xt();
            d = d.gelTicks ? d.gelTicks : d.gelTicks = {};
            for (var e in c) e in d || cu(e, c[e]);
            e = {};
            c = !1;
            d = p(Object.keys(a));
            for (var f = d.next(); !f.done; f = d.next()) f = f.value, (f = Nt(f, a[f])) && !Ct(zt(), f) && (et(b, f), et(e, f), c = !0);
            c && du(e)
        }
        z("ytglobal.timingready_", !0);
        a = L("TIMING_ACTION");
        B("ytglobal.timingready_") && a && "_start" in rt() &&
            qt() && Bt()
    }

    function eu(a, b, c, d) {
        null !== b && (wt(c)[a] = b, (a = Nt(a, b, c)) && du(a, c, d))
    }

    function du(a, b, c) {
        if (!M("web_csi_via_jspb") || (void 0 === c ? 0 : c)) c = Ft(b || ""), et(c.info, a), et(zt(b), a), c = At(b), b = vt(b).cttAuthInfo, Zt().info(a, c, b);
        else {
            c = new vj;
            var d = Object.keys(a);
            a = Object.values(a);
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                try {
                    switch (f) {
                        case "actionType":
                            xj(c, X[a[e]]);
                            break;
                        case "clientActionNonce":
                            E(c, 2, a[e]);
                            break;
                        case "clientScreenNonce":
                            E(c, 4, a[e]);
                            break;
                        case "loadType":
                            E(c, 3, a[e]);
                            break;
                        case "isPrewarmedLaunch":
                            E(c, 92, a[e]);
                            break;
                        case "isFirstInstall":
                            E(c, 55, a[e]);
                            break;
                        case "networkType":
                            E(c,
                                5, Ot[a[e]]);
                            break;
                        case "connectionType":
                            E(c, 26, Y[a[e]]);
                            break;
                        case "detailedConnectionType":
                            E(c, 27, Z[a[e]]);
                            break;
                        case "isVisible":
                            E(c, 6, a[e]);
                            break;
                        case "playerType":
                            E(c, 7, Pt[a[e]]);
                            break;
                        case "clientPlaybackNonce":
                            E(c, 8, a[e]);
                            break;
                        case "adClientPlaybackNonce":
                            E(c, 28, a[e]);
                            break;
                        case "previousCpn":
                            E(c, 77, a[e]);
                            break;
                        case "targetCpn":
                            E(c, 76, a[e]);
                            break;
                        case "isMonetized":
                            E(c, 9, a[e]);
                            break;
                        case "isPrerollAllowed":
                            E(c, 16, a[e]);
                            break;
                        case "isPrerollShown":
                            E(c, 17, a[e]);
                            break;
                        case "adType":
                            E(c, 12, a[e]);
                            break;
                        case "adTypesAllowed":
                            E(c, 36, a[e]);
                            break;
                        case "adNetworks":
                            E(c, 37, a[e]);
                            break;
                        case "previousAction":
                            E(c, 13, X[a[e]]);
                            break;
                        case "isRedSubscriber":
                            E(c, 14, a[e]);
                            break;
                        case "serverTimeMs":
                            E(c, 15, a[e]);
                            break;
                        case "videoId":
                            c.setVideoId(a[e]);
                            break;
                        case "adVideoId":
                            E(c, 20, a[e]);
                            break;
                        case "targetVideoId":
                            E(c, 78, a[e]);
                            break;
                        case "adBreakType":
                            E(c, 21, Qt[a[e]]);
                            break;
                        case "isNavigation":
                            yj(c, a[e]);
                            break;
                        case "viewportHeight":
                            E(c, 29, a[e]);
                            break;
                        case "viewportWidth":
                            E(c, 30, a[e]);
                            break;
                        case "screenHeight":
                            E(c,
                                84, a[e]);
                            break;
                        case "screenWidth":
                            E(c, 85, a[e]);
                            break;
                        case "browseId":
                            E(c, 31, a[e]);
                            break;
                        case "isCacheHit":
                            E(c, 32, a[e]);
                            break;
                        case "httpProtocol":
                            E(c, 33, a[e]);
                            break;
                        case "transportProtocol":
                            E(c, 34, a[e]);
                            break;
                        case "searchQuery":
                            E(c, 41, a[e]);
                            break;
                        case "isContinuation":
                            E(c, 42, a[e]);
                            break;
                        case "availableProcessors":
                            E(c, 43, a[e]);
                            break;
                        case "sdk":
                            E(c, 44, a[e]);
                            break;
                        case "isLocalStream":
                            E(c, 45, a[e]);
                            break;
                        case "navigationRequestedSameUrl":
                            E(c, 64, a[e]);
                            break;
                        case "shellStartupDurationMs":
                            E(c, 70, a[e]);
                            break;
                        case "appInstallDataAgeMs":
                            E(c, 73, a[e]);
                            break;
                        case "latencyActionError":
                            E(c, 71, Rt[a[e]]);
                            break;
                        case "actionStep":
                            E(c, 79, a[e]);
                            break;
                        case "jsHeapSizeLimit":
                            E(c, 80, a[e]);
                            break;
                        case "totalJsHeapSize":
                            E(c, 81, a[e]);
                            break;
                        case "usedJsHeapSize":
                            E(c, 82, a[e]);
                            break;
                        case "sourceVideoDurationMs":
                            E(c, 90, a[e]);
                            break;
                        case "videoOutputFrames":
                            E(c, 93, a[e]);
                            break;
                        case "adPrebufferedTimeSecs":
                            E(c, 39, a[e]);
                            break;
                        case "isLivestream":
                            E(c, 47, a[e]);
                            break;
                        case "liveStreamMode":
                            E(c, 91, St[a[e]]);
                            break;
                        case "adCpn2":
                            E(c, 48,
                                a[e]);
                            break;
                        case "adDaiDriftMillis":
                            E(c, 49, a[e]);
                            break;
                        case "videoStreamType":
                            E(c, 53, Tt[a[e]]);
                            break;
                        case "playbackRequiresTap":
                            E(c, 56, a[e]);
                            break;
                        case "performanceNavigationTiming":
                            E(c, 67, a[e]);
                            break;
                        case "transactionType":
                            E(c, 74, Ut[a[e]]);
                            break;
                        case "playerRotationType":
                            E(c, 101, Vt[a[e]]);
                            break;
                        case "allowedPreroll":
                            E(c, 10, a[e]);
                            break;
                        case "shownPreroll":
                            E(c, 11, a[e]);
                            break;
                        case "getHomeRequestId":
                            E(c, 57, a[e]);
                            break;
                        case "getSearchRequestId":
                            E(c, 60, a[e]);
                            break;
                        case "getPlayerRequestId":
                            E(c, 61, a[e]);
                            break;
                        case "getWatchNextRequestId":
                            E(c, 62, a[e]);
                            break;
                        case "getBrowseRequestId":
                            E(c, 63, a[e]);
                            break;
                        case "getLibraryRequestId":
                            E(c, 66, a[e]);
                            break;
                        default:
                            Wt.includes(f) && vk(new R("Codegen laipb translator asked to translate message field", "" + f))
                    }
                } catch (g) {
                    vk(Error("Codegen laipb translator failed to set " + f))
                }
            }
            fu(c, b)
        }
    }

    function fu(a, b) {
        var c = xt(b);
        c.jspbInfos || (c.jspbInfos = []);
        c.jspbInfos.push(a);
        Ft(b || "").jspbInfo.push(a);
        c = At(b);
        b = vt(b).cttAuthInfo;
        Zt().jspbInfo(a, c, b)
    }

    function cu(a, b, c) {
        if (!b && "_" !== a[0]) {
            var d = a;
            S.mark && (0 == d.lastIndexOf("mark_", 0) || (d = "mark_" + d), c && (d += " (" + c + ")"), S.mark(d))
        }
        d = Ft(c || "");
        d.tick[a] = b || P();
        if (d.callback && d.callback[a]) {
            d = p(d.callback[a]);
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, e()
        }
        d = xt(c);
        d.gelTicks && (d.gelTicks[a] = !0);
        d = rt(c);
        e = b || P();
        d[a] = e;
        e = At(c);
        var f = vt(c).cttAuthInfo;
        if ("_start" === a) {
            var g = Zt();
            $t(g, "baseline_" + e) || (b = {
                timestamp: b,
                cttAuthInfo: f
            }, M("web_csi_via_jspb") ? (f = new tj, E(f, 1, e), e = new Ej, Td(e, tj, 6, Fj, f), yr(e,
                b)) : dm("latencyActionBaselined", {
                clientActionNonce: e
            }, b))
        } else Zt().tick(a, e, b, f);
        Bt(c);
        return d[a]
    }

    function gu() {
        var a = At();
        requestAnimationFrame(function() {
            setTimeout(function() {
                a === At() && cu("ol", void 0, void 0)
            }, 0)
        })
    }

    function hu() {
        var a = document;
        if ("visibilityState" in a) a = a.visibilityState;
        else {
            var b = Dp + "VisibilityState";
            a = b in a ? a[b] : void 0
        }
        switch (a) {
            case "hidden":
                return 0;
            case "visible":
                return 1;
            case "prerender":
                return 2;
            case "unloaded":
                return 3;
            default:
                return -1
        }
    }

    function bu() {
        function a(f) {
            var g = st(),
                h = ut(),
                k = L("CSI_START_TIMESTAMP_MILLIS", 0);
            0 < k && !M("embeds_web_enable_csi_start_override_killswitch") && (h = k);
            h && (cu("srt", g.responseStart), 1 !== f.prerender && cu("_start", h, void 0));
            f = Dt();
            0 < f && cu("fpt", f);
            f = st();
            f.isPerformanceNavigationTiming && du({
                performanceNavigationTiming: !0
            });
            cu("nreqs", f.requestStart, void 0);
            cu("nress", f.responseStart, void 0);
            cu("nrese", f.responseEnd, void 0);
            0 < f.redirectEnd - f.redirectStart && (cu("nrs", f.redirectStart, void 0), cu("nre", f.redirectEnd,
                void 0));
            0 < f.domainLookupEnd - f.domainLookupStart && (cu("ndnss", f.domainLookupStart, void 0), cu("ndnse", f.domainLookupEnd, void 0));
            0 < f.connectEnd - f.connectStart && (cu("ntcps", f.connectStart, void 0), cu("ntcpe", f.connectEnd, void 0));
            f.secureConnectionStart >= ut() && 0 < f.connectEnd - f.secureConnectionStart && (cu("nstcps", f.secureConnectionStart, void 0), cu("ntcpe", f.connectEnd, void 0));
            S && "getEntriesByType" in S && iu()
        }
        var b = L("TIMING_INFO", {});
        if (M("web_csi_via_jspb")) {
            b = ju(b);
            fu(b);
            b = xj(yj(new vj, !0), X[Mt(L("TIMING_ACTION"))]);
            var c = L("PREVIOUS_ACTION");
            c && E(b, 13, X[Mt(c)]);
            (c = L("CLIENT_PROTOCOL")) && E(b, 33, c);
            (c = L("CLIENT_TRANSPORT")) && E(b, 34, c);
            (c = es()) && "UNDEFINED_CSN" !== c && E(b, 4, c);
            c = hu();
            1 !== c && -1 !== c || E(b, 6, !0);
            c = wt();
            E(b, 3, "cold");
            a(c);
            c = ku();
            if (0 < c.length) {
                c = p(c);
                for (var d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = new uj;
                    E(e, 1, d);
                    Vd(b, 83, uj, e)
                }
            }
            fu(b)
        } else {
            for (c in b) b.hasOwnProperty(c) && eu(c, b[c]);
            b = {
                isNavigation: !0,
                actionType: Mt(L("TIMING_ACTION"))
            };
            if (c = L("PREVIOUS_ACTION")) b.previousAction = Mt(c);
            if (c = L("CLIENT_PROTOCOL")) b.httpProtocol = c;
            if (c = L("CLIENT_TRANSPORT")) b.transportProtocol = c;
            (c = es()) && "UNDEFINED_CSN" !== c && (b.clientScreenNonce = c);
            c = hu();
            if (1 === c || -1 === c) b.isVisible = !0;
            c = wt();
            b.loadType = "cold";
            a(c);
            c = ku();
            if (0 < c.length)
                for (b.resourceInfo = [], c = p(c), d = c.next(); !d.done; d = c.next()) b.resourceInfo.push({
                    resourceCache: d.value
                });
            du(b)
        }
    }

    function ju(a) {
        var b = new vj;
        a = p(Object.entries(a));
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = p(c.value);
            c = d.next().value;
            d = d.next().value;
            switch (c) {
                case "GetBrowse_rid":
                    var e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "GetGuide_rid":
                    e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "GetHome_rid":
                    e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "GetPlayer_rid":
                    e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "GetSearch_rid":
                    e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "GetSettings_rid":
                    e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "GetTrending_rid":
                    e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "GetWatchNext_rid":
                    e = new Aj;
                    E(e, 1, c);
                    E(e, 2, String(d));
                    zj(b, e);
                    break;
                case "yt_red":
                    E(b, 14, !!d);
                    break;
                case "yt_ad":
                    E(b, 9, !!d)
            }
        }
        return b
    }

    function lu(a, b) {
        a = document.querySelector(a);
        if (!a) return !1;
        var c = "",
            d = a.nodeName;
        "SCRIPT" === d ? (c = a.src, c || (c = a.getAttribute("data-timing-href")) && (c = window.location.protocol + c)) : "LINK" === d && (c = a.href);
        fc() && a.setAttribute("nonce", fc());
        return c ? (a = S.getEntriesByName(c)) && a[0] && (a = a[0], c = ut(), cu("rsf_" + b, c + Math.round(a.fetchStart)), cu("rse_" + b, c + Math.round(a.responseEnd)), void 0 !== a.transferSize && 0 === a.transferSize) ? !0 : !1 : !1
    }

    function ku() {
        var a = [];
        if (document.querySelector && S && S.getEntriesByName)
            for (var b in pt)
                if (pt.hasOwnProperty(b)) {
                    var c = pt[b];
                    lu(b, c) && a.push(c)
                }
        return a
    }

    function iu() {
        var a = window.location.protocol,
            b = S.getEntriesByType("resource");
        b = fb(b, function(c) {
            return 0 === c.name.indexOf(a + "//fonts.gstatic.com/s/")
        });
        (b = hb(b, function(c, d) {
            return d.duration > c.duration ? d : c
        }, {
            duration: 0
        })) && 0 < b.startTime && 0 < b.responseEnd && (cu("wffs", tt(b.startTime)), cu("wffe", tt(b.responseEnd)))
    }
    var mu = window;
    mu.ytcsi && (mu.ytcsi.info = eu, mu.ytcsi.tick = cu);
    var nu = "tokens consistency mss client_location entities response_received_commands store".split(" ");

    function ou(a, b, c, d) {
        this.m = a;
        this.M = b;
        this.o = c;
        this.l = d;
        this.j = void 0;
        this.i = new Map;
        a.La || (a.La = {});
        a.La = Object.assign({}, dt, a.La)
    }

    function pu(a, b, c, d) {
        if (void 0 !== ou.i) {
            if (d = ou.i, a = [a !== d.m, b !== d.M, c !== d.o, !1, !1, void 0 !== d.j], a.some(function(e) {
                    return e
                })) throw new R("InnerTubeTransportService is already initialized", a);
        } else ou.i = new ou(a, b, c, d)
    }

    function qu(a) {
        var b = {
            signalServiceEndpoint: {
                signal: "GET_DATASYNC_IDS"
            }
        };
        var c = void 0 === c ? Ns : c;
        var d = Ws(b, a.m);
        if (!d) return uf(new R("Error: No request builder found for command.", b));
        var e = d.m(b, void 0, c);
        return e ? new pf(function(f) {
            var g, h, k;
            return w(function(m) {
                if (1 == m.i) {
                    h = "cors" === (null == (g = e.Ca) ? void 0 : g.mode) ? "cors" : void 0;
                    if (a.o.ld) {
                        var q = e.config,
                            t;
                        q = null == q ? void 0 : null == (t = q.Ra) ? void 0 : t.sessionIndex;
                        t = Es({
                            sessionIndex: q
                        });
                        k = Object.assign({}, ru(h), t);
                        return m.u(2)
                    }
                    return v(m, su(e.config,
                        h), 3)
                }
                2 != m.i && (k = m.j);
                f(tu(a, e, k));
                m.i = 0
            })
        }) : uf(new R("Error: Failed to build request for command.", b))
    }

    function tu(a, b, c) {
        var d, e, f, g, h, k, m, q, t, x, u, A, D, F, N, O, Q, ca, V;
        return w(function(W) {
            switch (W.i) {
                case 1:
                    W.u(2);
                    break;
                case 3:
                    if ((d = W.j) && !d.isExpired()) return W.return(Promise.resolve(d.i()));
                case 2:
                    if (null == (e = b) ? 0 : null == (f = e.ga) ? 0 : f.context)
                        for (g = p([]), h = g.next(); !h.done; h = g.next()) k = h.value, k.nq(b.ga.context);
                    if (null == (m = a.j) ? 0 : m.sq(b.input, b.ga)) return W.return(a.j.kq(b.input, b.ga));
                    (x = null == (t = b.config) ? void 0 : t.Ba) && a.i.has(x) && M("web_memoize_inflight_requests") ? q = a.i.get(x) : (u = JSON.stringify(b.ga),
                        b.Ca = Object.assign({}, b.Ca, {
                            headers: c
                        }), A = Object.assign({}, b.Ca), "POST" === b.Ca.method && (A = Object.assign({}, A, {
                            body: u
                        })), (null == (D = b.config) ? 0 : D.Wc) && cu(b.config.Wc), F = function() {
                            return a.M.fetch(b.input, A, b.config)
                        }, q = F(), x && a.i.set(x, q));
                    return v(W, q, 4);
                case 4:
                    N = W.j;
                    x && a.i.has(x) && a.i.delete(x);
                    (null == (O = b.config) ? 0 : O.Xc) && cu(b.config.Xc);
                    if (N || null == (Q = a.j) || !Q.cq(b.input, b.ga)) {
                        W.u(5);
                        break
                    }
                    return v(W, a.j.jq(b.input, b.ga), 6);
                case 6:
                    N = W.j;
                case 5:
                    if (N && a.l)
                        for (ca = p(nu), h = ca.next(); !h.done; h = ca.next()) V = h.value, a.l[V] && a.l[V].handleResponse(N, b);
                    return W.return(N)
            }
        })
    }

    function su(a, b) {
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.i) {
                e = null == (c = a) ? void 0 : null == (d = c.Ra) ? void 0 : d.sessionIndex;
                var h = Es({
                    sessionIndex: e
                });
                if (!(h instanceof pf)) {
                    var k = new pf(bb);
                    qf(k, 2, h);
                    h = k
                }
                return v(g, h, 2)
            }
            f = g.j;
            return g.return(Promise.resolve(Object.assign({}, ru(b), f)))
        })
    }

    function ru(a) {
        var b = {
            "Content-Type": "application/json"
        };
        M("enable_web_eom_visitor_data") && L("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = L("EOM_VISITOR_DATA") : L("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = L("VISITOR_DATA"));
        M("track_webfe_innertube_auth_mismatch") && (b["X-Youtube-Bootstrap-Logged-In"] = L("LOGGED_IN", !1));
        "cors" !== a && ((a = L("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = L("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = L("CHROME_CONNECTED_HEADER")) &&
            (b["X-Youtube-Chrome-Connected"] = a), (a = L("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
        return b
    };
    var uu = ["share/get_web_player_share_panel"],
        vu = ["feedback"],
        wu = ["notification/modify_channel_preference"],
        xu = ["browse/edit_playlist"],
        yu = ["subscription/subscribe"],
        zu = ["subscription/unsubscribe"];

    function Au() {}
    r(Au, at);
    Au.prototype.l = function() {
        return yu
    };
    Au.prototype.i = function(a) {
        return a.subscribeEndpoint
    };
    Au.prototype.j = function(a, b, c) {
        c = void 0 === c ? {} : c;
        b.channelIds && (a.channelIds = b.channelIds);
        b.siloName && (a.siloName = b.siloName);
        b.params && (a.params = b.params);
        c.botguardResponse && (a.botguardResponse = c.botguardResponse);
        c.feature && (a.clientFeature = c.feature)
    };
    ea.Object.defineProperties(Au.prototype, {
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Bu() {}
    r(Bu, at);
    Bu.prototype.l = function() {
        return zu
    };
    Bu.prototype.i = function(a) {
        return a.unsubscribeEndpoint
    };
    Bu.prototype.j = function(a, b) {
        b.channelIds && (a.channelIds = b.channelIds);
        b.siloName && (a.siloName = b.siloName);
        b.params && (a.params = b.params)
    };
    ea.Object.defineProperties(Bu.prototype, {
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Cu() {}
    r(Cu, at);
    Cu.prototype.l = function() {
        return vu
    };
    Cu.prototype.i = function(a) {
        return a.feedbackEndpoint
    };
    Cu.prototype.j = function(a, b, c) {
        a.feedbackTokens = [];
        b.feedbackToken && a.feedbackTokens.push(b.feedbackToken);
        if (b = b.cpn || c.cpn) a.feedbackContext = {
            cpn: b
        };
        a.isFeedbackTokenUnencrypted = !!c.is_feedback_token_unencrypted;
        a.shouldMerge = !1;
        c.extra_feedback_tokens && (a.shouldMerge = !0, a.feedbackTokens = a.feedbackTokens.concat(c.extra_feedback_tokens))
    };
    ea.Object.defineProperties(Cu.prototype, {
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Du() {}
    r(Du, at);
    Du.prototype.l = function() {
        return wu
    };
    Du.prototype.i = function(a) {
        return a.modifyChannelNotificationPreferenceEndpoint
    };
    Du.prototype.j = function(a, b) {
        b.params && (a.params = b.params);
        b.secondaryParams && (a.secondaryParams = b.secondaryParams)
    };

    function Eu() {}
    r(Eu, at);
    Eu.prototype.l = function() {
        return xu
    };
    Eu.prototype.i = function(a) {
        return a.playlistEditEndpoint
    };
    Eu.prototype.j = function(a, b) {
        b.actions && (a.actions = b.actions);
        b.params && (a.params = b.params);
        b.playlistId && (a.playlistId = b.playlistId)
    };

    function Fu() {}
    r(Fu, at);
    Fu.prototype.l = function() {
        return uu
    };
    Fu.prototype.i = function(a) {
        return a.webPlayerShareEntityServiceEndpoint
    };
    Fu.prototype.j = function(a, b, c) {
        c = void 0 === c ? {} : c;
        b.serializedShareEntity && (a.serializedSharedEntity = b.serializedShareEntity);
        c.includeListId && (a.includeListId = !0)
    };
    var Is = new Gs("NETWORK_SLI_TOKEN");

    function Gu(a) {
        this.i = a
    }
    Gu.prototype.fetch = function(a, b) {
        var c = this,
            d, e;
        return w(function(f) {
            c.i && (d = jc(kc(5, Ac(a, "key"))) || "/UNKNOWN_PATH", c.i.start(d));
            e = new window.Request(a, b);
            return M("web_fetch_promise_cleanup_killswitch") ? f.return(Promise.resolve(fetch(e).then(function(g) {
                return c.handleResponse(g)
            }).catch(function(g) {
                Nr(g)
            }))) : f.return(fetch(e).then(function(g) {
                return c.handleResponse(g)
            }).catch(function(g) {
                Nr(g)
            }))
        })
    };
    Gu.prototype.handleResponse = function(a) {
        var b = a.text().then(function(c) {
            return JSON.parse(c.replace(")]}'", ""))
        });
        a.redirected || a.ok ? this.i && this.i.success() : (this.i && this.i.failure(), b = b.then(function(c) {
            Nr(new R("Error: API fetch failed", a.status, a.url, c));
            return Object.assign({}, c, {
                errorMetadata: {
                    status: a.status
                }
            })
        }));
        return b
    };
    Gu[Fs] = [new Hs];
    var Hu = new Gs("NETWORK_MANAGER_TOKEN");
    var Iu;

    function Ju(a) {
        Ln.call(this, 1, arguments);
        this.csn = a
    }
    r(Ju, Ln);
    var Un = new Mn("screen-created", Ju),
        Ku = [],
        Mu = Lu,
        Nu = 0;

    function Ou(a, b, c, d, e, f, g) {
        function h() {
            Nr(new R("newScreen() parent element does not have a VE - rootVe", b))
        }
        var k = Mu();
        f = new Yr({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
        e = {
            cttAuthInfo: e,
            ca: k
        };
        if (M("il_via_jspb")) {
            var m = new ij;
            m.V(k);
            jj(m, f.getAsJspb());
            c && c.visualElement ? (f = new kj, c.clientScreenNonce && E(f, 2, c.clientScreenNonce), lj(f, c.visualElement.getAsJspb()), g && E(f, 4, Gj[g]), G(m, kj, 5, f)) : c && h();
            d && E(m, 3, d);
            Dr(m, e, a)
        } else f = {
            csn: k,
            pageVe: f.getAsJson()
        }, c && c.visualElement ? (f.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (f.implicitGesture.gestureType =
            g)) : c && h(), d && (f.cloneCsn = d), a ? hr("screenCreated", f, a, e) : dm("screenCreated", f, e);
        Rn(Un, new Ju(k));
        return k
    }

    function Pu(a, b, c, d) {
        var e = d.filter(function(k) {
                k.csn !== b ? (k.csn = b, k = !0) : k = !1;
                return k
            }),
            f = {
                cttAuthInfo: gs(b),
                ca: b
            };
        d = p(d);
        for (var g = d.next(); !g.done; g = d.next()) g = g.value.getAsJson(), (ob(g) || !g.trackingParams && !g.veType) && Nr(Error("Child VE logged with no data"));
        if (M("il_via_jspb")) {
            var h = new mj;
            h.V(b);
            oj(h, c.getAsJspb());
            gb(e, function(k) {
                k = k.getAsJspb();
                Vd(h, 3, dj, k)
            });
            "UNDEFINED_CSN" == b ? Qu("visualElementAttached", h, f) : Er(h, f, a)
        } else c = {
            csn: b,
            parentVe: c.getAsJson(),
            childVes: gb(e, function(k) {
                return k.getAsJson()
            })
        }, "UNDEFINED_CSN" == b ? Qu("visualElementAttached", c, f) : a ? hr("visualElementAttached", c, a, f) : dm("visualElementAttached", c, f)
    }

    function Lu() {
        for (var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return cd(b, 3)
    }

    function Qu(a, b, c) {
        Ku.push({
            payloadName: a,
            payload: b,
            options: c
        });
        Nu || (Nu = Vn())
    }

    function Wn(a) {
        if (Ku) {
            for (var b = p(Ku), c = b.next(); !c.done; c = b.next())
                if (c = c.value, c.payload)
                    if (M("il_via_jspb")) switch (c.payload.V(a.csn), c.payloadName) {
                        case "screenCreated":
                            Dr(c.payload, c.options);
                            break;
                        case "visualElementAttached":
                            Er(c.payload, c.options);
                            break;
                        case "visualElementShown":
                            zr(c.payload, c.options);
                            break;
                        case "visualElementHidden":
                            Ar(c.payload, c.options);
                            break;
                        case "visualElementGestured":
                            Br(c.payload, c.options);
                            break;
                        case "visualElementStateChanged":
                            Cr(c.payload, c.options);
                            break;
                        default:
                            Nr(new R("flushQueue unable to map payloadName to JSPB setter"))
                    } else c.payload.csn =
                        a.csn, hr(c.payloadName, c.payload, null, c.options);
            Ku.length = 0
        }
        Nu = 0
    };

    function Ru() {
        this.j = new Set;
        this.i = new Set;
        this.l = new Map
    }
    Ru.prototype.clear = function() {
        this.j.clear();
        this.i.clear();
        this.l.clear()
    };
    Ma(Ru);

    function Su() {
        this.m = [];
        this.C = [];
        this.i = [];
        this.o = [];
        this.s = [];
        this.j = new Set;
        this.O = new Map
    }

    function Tu(a, b, c) {
        c = void 0 === c ? 0 : c;
        b.then(function(d) {
            a.j.has(c) && a.l && a.l();
            var e = es(c),
                f = cs(c);
            if (e && f) {
                var g;
                (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && Pu(a.client, e, f, [Zr(d.response.trackingParams)]);
                var h;
                (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && Pu(a.client, e, f, [Zr(d.playerResponse.trackingParams)])
            }
        })
    }

    function Uu(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        if (a.j.has(d)) a.m.push([b, c]);
        else {
            var e = es(d);
            c = c || cs(d);
            e && c && Pu(a.client, e, c, [b])
        }
    }
    Su.prototype.clickCommand = function(a, b, c) {
        var d = a.clickTrackingParams;
        c = void 0 === c ? 0 : c;
        if (d)
            if (c = es(void 0 === c ? 0 : c)) {
                a = this.client;
                var e = Zr(d);
                d = {
                    cttAuthInfo: gs(c),
                    ca: c
                };
                if (M("il_via_jspb")) {
                    var f = new pj;
                    f.V(c);
                    e = e.getAsJspb();
                    G(f, dj, 2, e);
                    E(f, 4, Gj.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);
                    b && G(f, gj, 3);
                    "UNDEFINED_CSN" == c ? Qu("visualElementGestured", f, d) : Br(f, d, a)
                } else f = {
                        csn: c,
                        ve: e.getAsJson(),
                        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
                    }, b && (f.clientData = b), "UNDEFINED_CSN" == c ?
                    Qu("visualElementGestured", f, d) : a ? hr("visualElementGestured", f, a, d) : dm("visualElementGestured", f, d);
                b = !0
            } else b = !1;
        else b = !1;
        return b
    };

    function Vu(a, b, c) {
        c = void 0 === c ? {} : c;
        a.j.add(c.layer || 0);
        a.l = function() {
            Wu(a, b, c);
            var f = cs(c.layer);
            if (f) {
                for (var g = p(a.m), h = g.next(); !h.done; h = g.next()) h = h.value, Uu(a, h[0], h[1] || f, c.layer);
                f = p(a.C);
                for (g = f.next(); !g.done; g = f.next()) {
                    var k = g.value;
                    g = void 0;
                    g = void 0 === g ? 0 : g;
                    h = es(g);
                    var m = k[0] || cs(g);
                    if (h && m) {
                        g = a.client;
                        var q = k[1];
                        k = {
                            cttAuthInfo: gs(h),
                            ca: h
                        };
                        M("il_via_jspb") ? (q = new sj, q.V(h), m = m.getAsJspb(), G(q, dj, 2, m), "UNDEFINED_CSN" == h ? Qu("visualElementStateChanged", q, k) : Cr(q, k, g)) : (m = {
                            csn: h,
                            ve: m.getAsJson(),
                            clientData: q
                        }, "UNDEFINED_CSN" == h ? Qu("visualElementStateChanged", m, k) : g ? hr("visualElementStateChanged", m, g, k) : dm("visualElementStateChanged", m, k))
                    }
                }
            }
        };
        es(c.layer) || a.l();
        if (c.Nb)
            for (var d = p(c.Nb), e = d.next(); !e.done; e = d.next()) Tu(a, e.value, c.layer);
        else Mr(Error("Delayed screen needs a data promise."))
    }

    function Wu(a, b, c) {
        c = void 0 === c ? {} : c;
        c.layer || (c.layer = 0);
        var d = void 0 !== c.Rc ? c.Rc : c.layer;
        var e = es(d);
        d = cs(d);
        var f;
        d && (void 0 !== c.parentCsn ? f = {
            clientScreenNonce: c.parentCsn,
            visualElement: d
        } : e && "UNDEFINED_CSN" !== e && (f = {
            clientScreenNonce: e,
            visualElement: d
        }));
        var g, h = L("EVENT_ID");
        "UNDEFINED_CSN" === e && h && (g = {
            servletData: {
                serializedServletEventId: h
            }
        });
        try {
            var k = Ou(a.client, b, f, c.Mb, c.cttAuthInfo, g, c.hq)
        } catch (m) {
            Pr(m, {
                qq: b,
                rootVe: d,
                parentVisualElement: void 0,
                fq: e,
                mq: f,
                Mb: c.Mb
            });
            Mr(m);
            return
        }
        hs(k, b,
            c.layer, c.cttAuthInfo);
        if (b = e && "UNDEFINED_CSN" !== e && d) {
            a: {
                b = p(Object.values(Xr));
                for (f = b.next(); !f.done; f = b.next())
                    if (es(f.value) === e) {
                        b = !0;
                        break a
                    }
                b = !1
            }
            b = !b
        }
        b && (b = a.client, g = !0, h = (g = void 0 === g ? !1 : g) ? 16 : 8, f = {
            cttAuthInfo: gs(e),
            ca: e,
            Pb: g
        }, M("il_via_jspb") ? (h = new rj, h.V(e), d = d.getAsJspb(), G(h, dj, 2, d), E(h, 4, g ? 16 : 8), "UNDEFINED_CSN" == e ? Qu("visualElementHidden", h, f) : Ar(h, f, b)) : (d = {
            csn: e,
            ve: d.getAsJson(),
            eventType: h
        }, "UNDEFINED_CSN" == e ? Qu("visualElementHidden", d, f) : b ? hr("visualElementHidden", d, b, f) : dm("visualElementHidden",
            d, f)));
        a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = k || "");
        du({
            clientScreenNonce: k
        });
        Ru.getInstance().clear();
        d = cs(c.layer);
        e && "UNDEFINED_CSN" !== e && d && (M("web_mark_root_visible") || M("music_web_mark_root_visible")) && (e = k, k = {
            cttAuthInfo: gs(e),
            ca: e
        }, M("il_via_jspb") ? (b = new rj, b.V(e), f = d.getAsJspb(), G(b, dj, 2, f), E(b, 4, 1), "UNDEFINED_CSN" == e ? Qu("visualElementShown", b, k) : zr(b, k)) : (b = {
            csn: e,
            ve: d.getAsJson(),
            eventType: 1
        }, "UNDEFINED_CSN" == e ? Qu("visualElementShown", b, k) : dm("visualElementShown",
            b, k)));
        a.j.delete(c.layer || 0);
        a.l = void 0;
        e = p(a.O);
        for (k = e.next(); !k.done; k = e.next()) b = p(k.value), k = b.next().value, b = b.next().value, b.has(c.layer) && d && Uu(a, k, d, c.layer);
        for (c = 0; c < a.o.length; c++) {
            e = a.o[c];
            try {
                e()
            } catch (m) {
                Mr(m)
            }
        }
        for (c = a.o.length = 0; c < a.s.length; c++) {
            e = a.s[c];
            try {
                e()
            } catch (m) {
                Mr(m)
            }
        }
    };

    function Xu() {
        var a, b;
        return w(function(c) {
            if (1 == c.i) return a = ou.i, a ? v(c, qu(a), 2) : (Nr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")), c.return(void 0));
            if (b = c.j) return b.errorMetadata ? (Nr(Error("Datasync IDs fetch responded with " + b.errorMetadata.status + ": " + b.error)), c.return(void 0)) : c.return(b.gq);
            Nr(Error("Network request to get Datasync IDs failed."));
            return c.return(void 0)
        })
    };
    var Yu = y.caches,
        Zu;

    function $u(a) {
        var b = a.indexOf(":");
        return -1 === b ? {
            ac: a
        } : {
            ac: a.substring(0, b),
            datasyncId: a.substring(b + 1)
        }
    }

    function av() {
        return w(function(a) {
            if (void 0 !== Zu) return a.return(Zu);
            Zu = new Promise(function(b) {
                var c;
                return w(function(d) {
                    switch (d.i) {
                        case 1:
                            return ua(d, 2), v(d, Yu.open("test-only"), 4);
                        case 4:
                            return v(d, Yu.delete("test-only"), 5);
                        case 5:
                            va(d, 3);
                            break;
                        case 2:
                            if (c = wa(d), c instanceof Error && "SecurityError" === c.name) return b(!1), d.return();
                        case 3:
                            b("caches" in window), d.i = 0
                    }
                })
            });
            return a.return(Zu)
        })
    }

    function bv(a) {
        var b, c, d, e, f, g, h;
        w(function(k) {
            if (1 == k.i) return v(k, av(), 2);
            if (3 != k.i) {
                if (!k.j) return k.return(!1);
                b = [];
                return v(k, Yu.keys(), 3)
            }
            c = k.j;
            d = p(c);
            for (e = d.next(); !e.done; e = d.next()) f = e.value, g = $u(f), h = g.datasyncId, !h || a.includes(h) || b.push(Yu.delete(f));
            return k.return(Promise.all(b).then(function(m) {
                return m.some(function(q) {
                    return q
                })
            }))
        })
    }

    function cv() {
        var a, b, c, d, e, f, g;
        return w(function(h) {
            if (1 == h.i) return v(h, av(), 2);
            if (3 != h.i) {
                if (!h.j) return h.return(!1);
                a = hm("cache contains other");
                return v(h, Yu.keys(), 3)
            }
            b = h.j;
            c = p(b);
            for (d = c.next(); !d.done; d = c.next())
                if (e = d.value, f = $u(e), (g = f.datasyncId) && g !== a) return h.return(!0);
            return h.return(!1)
        })
    };

    function dv() {
        try {
            return !!self.localStorage
        } catch (a) {
            return !1
        }
    };

    function ev(a) {
        a = a.match(/(.*)::.*::.*/);
        if (null !== a) return a[1]
    }

    function fv(a) {
        if (dv()) {
            var b = Object.keys(window.localStorage);
            b = p(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = ev(c);
                void 0 === d || a.includes(d) || self.localStorage.removeItem(c)
            }
        }
    }

    function gv() {
        if (!dv()) return !1;
        var a = hm(),
            b = Object.keys(window.localStorage);
        b = p(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = ev(c.value), void 0 !== c && c !== a) return !0;
        return !1
    };

    function hv() {
        Xu().then(function(a) {
            a && (sn(a), bv(a), fv(a))
        })
    }

    function iv() {
        var a = new Ho;
        Mh.S(function() {
            var b, c, d, e;
            return w(function(f) {
                switch (f.i) {
                    case 1:
                        if (M("ytidb_clear_optimizations_killswitch")) {
                            f.u(2);
                            break
                        }
                        b = hm("clear");
                        if (b.startsWith("V")) {
                            var g = [b];
                            sn(g);
                            bv(g);
                            fv(g);
                            return f.return()
                        }
                        c = gv();
                        return v(f, cv(), 3);
                    case 3:
                        return d = f.j, v(f, tn(), 4);
                    case 4:
                        if (e = f.j, !c && !d && !e) return f.return();
                    case 2:
                        a.L() ? hv() : a.o.add("publicytnetworkstatus-online", hv, !0, void 0, void 0), f.i = 0
                }
            })
        })
    };

    function jv(a) {
        a && (a.dataset ? a.dataset[kv("loaded")] = "true" : a.setAttribute("data-loaded", "true"))
    }

    function lv(a, b) {
        return a ? a.dataset ? a.dataset[kv(b)] : a.getAttribute("data-" + b) : null
    }
    var mv = {};

    function kv(a) {
        return mv[a] || (mv[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    var nv = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        ov = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;

    function pv(a, b, c) {
        c = void 0 === c ? null : c;
        if (window.spf && spf.script) {
            c = "";
            if (a) {
                var d = a.indexOf("jsbin/"),
                    e = a.lastIndexOf(".js"),
                    f = d + 6; - 1 < d && -1 < e && e > f && (c = a.substring(f, e), c = c.replace(nv, ""), c = c.replace(ov, ""), c = c.replace("debug-", ""), c = c.replace("tracing-", ""))
            }
            spf.script.load(a, c, b)
        } else qv(a, b, c)
    }

    function qv(a, b, c) {
        c = void 0 === c ? null : c;
        var d = rv(a),
            e = document.getElementById(d),
            f = e && lv(e, "loaded"),
            g = e && !f;
        f ? b && b() : (b && (f = uq(d, b), b = "" + Qa(b), sv[b] = f), g || (e = tv(a, d, function() {
            lv(e, "loaded") || (jv(e), xq(d), Pk(Xa(yq, d), 0))
        }, c)))
    }

    function tv(a, b, c, d) {
        d = void 0 === d ? null : d;
        var e = bf("SCRIPT");
        e.id = b;
        e.onload = function() {
            c && setTimeout(c, 0)
        };
        e.onreadystatechange = function() {
            switch (e.readyState) {
                case "loaded":
                case "complete":
                    e.onload()
            }
        };
        d && e.setAttribute("nonce", d);
        yh(e, Ib(a));
        a = document.getElementsByTagName("head")[0] || document.body;
        a.insertBefore(e, a.firstChild);
        return e
    }

    function uv(a) {
        a = rv(a);
        var b = document.getElementById(a);
        b && (yq(a), b.parentNode.removeChild(b))
    }

    function vv(a, b) {
        a && b && (a = "" + Qa(b), (a = sv[a]) && wq(a))
    }

    function rv(a) {
        var b = document.createElement("a");
        cc(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + hc(a)
    }
    var sv = {};
    var wv = [],
        xv = !1;

    function yv() {
        if (!M("disable_biscotti_fetch_for_ad_blocker_detection") && !M("disable_biscotti_fetch_entirely_for_all_web_clients") && ts()) {
            var a = L("PLAYER_VARS", {});
            if (!("1" == qb(a) || M("embeds_web_disable_ads_for_pfl") && us(a))) {
                var b = function() {
                    xv = !0;
                    "google_ad_status" in window ? mk("DCLKSTAT", 1) : mk("DCLKSTAT", 2)
                };
                try {
                    pv("//static.doubleclick.net/instream/ad_status.js", b)
                } catch (c) {}
                wv.push(Mh.S(function() {
                    if (!(xv || "google_ad_status" in window)) {
                        try {
                            vv("//static.doubleclick.net/instream/ad_status.js", b)
                        } catch (c) {}
                        xv = !0;
                        mk("DCLKSTAT", 3)
                    }
                }, 5E3))
            }
        }
    }

    function Bv() {
        var a = Number(L("DCLKSTAT", 0));
        return isNaN(a) ? 0 : a
    };

    function Cv() {
        this.state = 1;
        this.i = null
    }
    Cv.prototype.initialize = function(a, b, c) {
        if (a.program) {
            var d, e = null != (d = a.interpreterScript) ? d : null,
                f;
            d = null != (f = a.interpreterUrl) ? f : null;
            a.interpreterSafeScript && (e = a.interpreterSafeScript, Cb("From proto message. b/166824318"), e = e.privateDoNotAccessOrElseSafeScriptWrappedValue || "", e = (f = xb()) ? f.createScript(e) : e, e = (new Eb(e)).toString());
            a.interpreterSafeUrl && (d = a.interpreterSafeUrl, Cb("From proto message. b/166824318"), d = Ib(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue || "").toString());
            Dv(this, e, d, a.program, b, c)
        } else Nr(Error("Cannot initialize botguard without program"))
    };

    function Dv(a, b, c, d, e, f) {
        var g = void 0 === g ? "trayride" : g;
        c ? (a.state = 2, pv(c, function() {
            window[g] ? Ev(a, d, g, e) : (a.state = 3, uv(c), Nr(new R("Unable to load Botguard", "from " + c)))
        }, f)) : b ? (f = bf("SCRIPT"), f.textContent = b, f.nonce = fc(), document.head.appendChild(f), document.head.removeChild(f), window[g] ? Ev(a, d, g, e) : (a.state = 4, Nr(new R("Unable to load Botguard from JS")))) : Nr(new R("Unable to load VM; no url or JS provided"))
    }
    Cv.prototype.isInitialized = function() {
        return !!this.i
    };

    function Ev(a, b, c, d) {
        a.state = 5;
        try {
            var e = new th({
                program: b,
                globalName: c
            });
            e.hd.then(function() {
                a.state = 6;
                d && d(b)
            });
            Fv(a, e)
        } catch (f) {
            a.state = 7, f instanceof Error && Nr(f)
        }
    }
    Cv.prototype.invoke = function(a) {
        a = void 0 === a ? {} : a;
        if (this.i) {
            var b = this.i;
            var c = {
                Lb: a
            };
            if (b.j) throw Error("Already disposed");
            a = rh();
            var d;
            null != (d = b.ta) && d.j.i.Bb("/client_streamz/bg/fsc", d.Ba);
            d = b.o([c.Lb, c.kd]);
            null != (b = b.ta) && (a = rh() - a, b.l.i.gb("/client_streamz/bg/fsl", a, b.Ba));
            b = d
        } else b = null;
        return b
    };
    Cv.prototype.dispose = function() {
        Fv(this, null);
        this.state = 8
    };

    function Fv(a, b) {
        je(a.i);
        a.i = b
    };
    var Gv = new Cv;

    function Hv() {
        return Gv.isInitialized()
    }

    function Iv(a) {
        a = void 0 === a ? {} : a;
        return Gv.invoke(a)
    };

    function Jv(a) {
        var b = this;
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? Tl() : d;
        this.o = c;
        this.l = d;
        this.j = new sh;
        this.i = a;
        a = {};
        c = p(this.i.entries());
        for (d = c.next(); !d.done; a = {
                Da: a.Da,
                Na: a.Na
            }, d = c.next()) {
            var e = p(d.value);
            d = e.next().value;
            e = e.next().value;
            a.Na = d;
            a.Da = e;
            d = function(f) {
                return function() {
                    f.Da.tb();
                    b.i[f.Na].cb = !0;
                    b.i.every(function(g) {
                        return !0 === g.cb
                    }) && b.j.resolve()
                }
            }(a);
            e = Pl(d, Kv(this, a.Da));
            this.i[a.Na] = Object.assign({}, a.Da, {
                tb: d,
                Ya: e
            })
        }
    }

    function Lv(a) {
        var b = Array.from(a.i.keys()).sort(function(d, e) {
            return Kv(a, a.i[e]) - Kv(a, a.i[d])
        });
        b = p(b);
        for (var c = b.next(); !c.done; c = b.next()) c = a.i[c.value], void 0 === c.Ya || c.cb || (a.l.aa(c.Ya), Pl(c.tb, 10))
    }
    Jv.prototype.cancel = function() {
        for (var a = p(this.i), b = a.next(); !b.done; b = a.next()) b = b.value, void 0 === b.Ya || b.cb || this.l.aa(b.Ya), b.cb = !0;
        this.j.resolve()
    };

    function Kv(a, b) {
        var c;
        return null != (c = b.priority) ? c : a.o
    };

    function Mv(a) {
        this.state = a;
        this.plugins = [];
        this.s = void 0
    }
    Mv.prototype.install = function() {
        this.plugins.push.apply(this.plugins, ha(Ia.apply(0, arguments)))
    };
    Mv.prototype.transition = function(a, b) {
        var c = this,
            d = this.C.find(function(f) {
                return f.from === c.state && f.F === a
            });
        if (d) {
            this.l && (Lv(this.l), this.l = void 0);
            this.state = a;
            d = d.action.bind(this);
            var e = this.plugins.filter(function(f) {
                return f[a]
            }).map(function(f) {
                return f[a]
            });
            d(Nv(this, e, this.s), b)
        } else throw Error("no transition specified from " + this.state + " to " + a);
    };

    function Nv(a, b, c) {
        return function() {
            var d = Ia.apply(0, arguments),
                e = b.filter(function(k) {
                    var m;
                    return 10 === (null != (m = null != c ? c : k.priority) ? m : 0)
                }),
                f = b.filter(function(k) {
                    var m;
                    return 10 !== (null != (m = null != c ? c : k.priority) ? m : 0)
                });
            Tl();
            var g = {};
            e = p(e);
            for (var h = e.next(); !h.done; g = {
                    Oa: g.Oa
                }, h = e.next()) g.Oa = h.value, Rl(function(k) {
                return function() {
                    k.Oa.callback.apply(k.Oa, ha(d))
                }
            }(g));
            f = f.map(function(k) {
                var m;
                return {
                    tb: function() {
                        k.callback.apply(k, ha(d))
                    },
                    priority: null != (m = null != c ? c : k.priority) ? m : 0
                }
            });
            f.length && (a.l = new Jv(f))
        }
    }
    ea.Object.defineProperties(Mv.prototype, {
        currentState: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state
            }
        }
    });

    function Ov(a) {
        Mv.call(this, void 0 === a ? "document_active" : a);
        var b = this;
        this.s = 10;
        this.i = new Map;
        this.C = [{
                from: "document_active",
                F: "document_disposed_preventable",
                action: this.O
            }, {
                from: "document_active",
                F: "document_disposed",
                action: this.o
            }, {
                from: "document_disposed_preventable",
                F: "document_disposed",
                action: this.o
            }, {
                from: "document_disposed_preventable",
                F: "flush_logs",
                action: this.m
            }, {
                from: "document_disposed_preventable",
                F: "document_active",
                action: this.j
            }, {
                from: "document_disposed",
                F: "flush_logs",
                action: this.m
            },
            {
                from: "document_disposed",
                F: "document_active",
                action: this.j
            }, {
                from: "document_disposed",
                F: "document_disposed",
                action: function() {}
            },
            {
                from: "flush_logs",
                F: "document_active",
                action: this.j
            }
        ];
        window.addEventListener("pagehide", function(c) {
            b.transition("document_disposed", {
                event: c
            })
        });
        window.addEventListener("beforeunload", function(c) {
            b.transition("document_disposed_preventable", {
                event: c
            })
        })
    }
    r(Ov, Mv);
    Ov.prototype.O = function(a, b) {
        if (!this.i.get("document_disposed_preventable")) {
            a(null == b ? void 0 : b.event);
            var c, d;
            if ((null == b ? 0 : null == (c = b.event) ? 0 : c.defaultPrevented) || (null == b ? 0 : null == (d = b.event) ? 0 : d.returnValue)) {
                b.event.returnValue || (b.event.returnValue = !0);
                b.event.defaultPrevented || b.event.preventDefault();
                this.i = new Map;
                this.transition("document_active");
                return
            }
        }
        this.i.set("document_disposed_preventable", !0);
        this.i.get("document_disposed") ? this.transition("flush_logs") : this.transition("document_disposed")
    };
    Ov.prototype.o = function(a, b) {
        this.i.get("document_disposed") ? this.transition("document_active") : (a(null == b ? void 0 : b.event), this.i.set("document_disposed", !0), this.transition("flush_logs"))
    };
    Ov.prototype.m = function(a, b) {
        a(null == b ? void 0 : b.event);
        this.transition("document_active")
    };
    Ov.prototype.j = function() {
        this.i = new Map
    };

    function Pv(a) {
        Mv.call(this, void 0 === a ? "document_visibility_unknown" : a);
        var b = this;
        this.C = [{
                from: "document_visibility_unknown",
                F: "document_visible",
                action: this.j
            }, {
                from: "document_visibility_unknown",
                F: "document_hidden",
                action: this.i
            }, {
                from: "document_visibility_unknown",
                F: "document_foregrounded",
                action: this.m
            }, {
                from: "document_visibility_unknown",
                F: "document_backgrounded",
                action: this.o
            }, {
                from: "document_visible",
                F: "document_hidden",
                action: this.i
            }, {
                from: "document_visible",
                F: "document_foregrounded",
                action: this.m
            },
            {
                from: "document_visible",
                F: "document_visible",
                action: this.j
            }, {
                from: "document_foregrounded",
                F: "document_visible",
                action: this.j
            }, {
                from: "document_foregrounded",
                F: "document_hidden",
                action: this.i
            }, {
                from: "document_foregrounded",
                F: "document_foregrounded",
                action: this.m
            }, {
                from: "document_hidden",
                F: "document_visible",
                action: this.j
            }, {
                from: "document_hidden",
                F: "document_backgrounded",
                action: this.o
            }, {
                from: "document_hidden",
                F: "document_hidden",
                action: this.i
            }, {
                from: "document_backgrounded",
                F: "document_hidden",
                action: this.i
            },
            {
                from: "document_backgrounded",
                F: "document_backgrounded",
                action: this.o
            }, {
                from: "document_backgrounded",
                F: "document_visible",
                action: this.j
            }
        ];
        document.addEventListener("visibilitychange", function(c) {
            "visible" === document.visibilityState ? b.transition("document_visible", {
                event: c
            }) : b.transition("document_hidden", {
                event: c
            })
        });
        M("visibility_lifecycles_dynamic_backgrounding") && (window.addEventListener("blur", function(c) {
            b.transition("document_backgrounded", {
                event: c
            })
        }), window.addEventListener("focus", function(c) {
            b.transition("document_foregrounded", {
                event: c
            })
        }))
    }
    r(Pv, Mv);
    Pv.prototype.j = function(a, b) {
        a(null == b ? void 0 : b.event);
        M("visibility_lifecycles_dynamic_backgrounding") && this.transition("document_foregrounded")
    };
    Pv.prototype.i = function(a, b) {
        a(null == b ? void 0 : b.event);
        M("visibility_lifecycles_dynamic_backgrounding") && this.transition("document_backgrounded")
    };
    Pv.prototype.o = function(a, b) {
        a(null == b ? void 0 : b.event)
    };
    Pv.prototype.m = function(a, b) {
        a(null == b ? void 0 : b.event)
    };

    function Qv() {
        this.i = new Ov;
        this.j = new Pv
    }
    Qv.prototype.install = function() {
        var a = Ia.apply(0, arguments);
        this.i.install.apply(this.i, ha(a));
        this.j.install.apply(this.j, ha(a))
    };

    function Rv() {
        Qv.call(this);
        var a = {};
        this.install((a.document_disposed = {
            callback: this.l
        }, a));
        a = {};
        this.install((a.flush_logs = {
            callback: this.o
        }, a))
    }
    var Sv;
    r(Rv, Qv);
    Rv.prototype.o = function() {
        if (M("web_fp_via_jspb")) {
            var a = new cj,
                b = es();
            b && a.V(b);
            b = new Ej;
            Td(b, cj, 380, Fj, a);
            yr(b);
            M("web_fp_via_jspb_and_json") && dm("finalPayload", {
                csn: es()
            })
        } else dm("finalPayload", {
            csn: es()
        })
    };
    Rv.prototype.l = function() {
        Rr(Sr)
    };

    function Tv() {}
    Tv.getInstance = function() {
        var a = B("ytglobal.storage_");
        a || (a = new Tv, z("ytglobal.storage_", a));
        return a
    };
    Tv.prototype.estimate = function() {
        var a, b, c;
        return w(function(d) {
            a = navigator;
            return (null == (b = a.storage) ? 0 : b.estimate) ? d.return(a.storage.estimate()) : (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) ? d.return(Uv()) : d.return()
        })
    };

    function Uv() {
        var a = navigator;
        return new Promise(function(b, c) {
            var d;
            null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota(function(e, f) {
                b({
                    usage: e,
                    quota: f
                })
            }, function(e) {
                c(e)
            }) : c(Error("webkitTemporaryStorage is not supported."))
        })
    }
    z("ytglobal.storageClass_", Tv);

    function bm(a, b) {
        var c = this;
        this.handleError = a;
        this.i = b;
        this.j = !1;
        void 0 === self.document || self.addEventListener("beforeunload", function() {
            c.j = !0
        });
        this.l = Math.random() <= pk("ytidb_transaction_ended_event_rate_limit", .02)
    }
    bm.prototype.logEvent = function(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                M("idb_data_corrupted_killswitch") || this.i("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.i("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                M("idb_is_supported_completed_killswitch") || this.i("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Vv(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.l && this.i("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.j
                }), this.i("idbTransactionAborted", a)
        }
    };

    function Vv(a, b) {
        Tv.getInstance().estimate().then(function(c) {
            c = Object.assign({}, b, {
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                deviceStorageUsageMbytes: Wv(null == c ? void 0 : c.usage),
                deviceStorageQuotaMbytes: Wv(null == c ? void 0 : c.quota)
            });
            a.i("idbQuotaExceeded", c)
        })
    }

    function Wv(a) {
        return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
    };

    function Xv(a, b, c) {
        J.call(this);
        var d = this;
        c = c || L("POST_MESSAGE_ORIGIN") || window.document.location.protocol + "//" + window.document.location.hostname;
        this.l = b || null;
        this.targetOrigin = "*";
        this.o = c;
        this.sessionId = null;
        this.channel = "widget";
        this.B = !!a;
        this.v = function(e) {
            a: if (!("*" != d.o && e.origin != d.o || d.l && e.source != d.l || "string" !== typeof e.data)) {
                try {
                    var f = JSON.parse(e.data)
                } catch (g) {
                    break a
                }
                if (!(null == f || d.B && (d.sessionId && d.sessionId != f.id || d.channel && d.channel != f.channel)) && f) switch (f.event) {
                    case "listening":
                        "null" !=
                        e.origin && (d.o = d.targetOrigin = e.origin);
                        d.l = e.source;
                        d.sessionId = f.id;
                        d.j && (d.j(), d.j = null);
                        break;
                    case "command":
                        d.m && (!d.s || 0 <= db(d.s, f.func)) && d.m(f.func, f.args, e.origin)
                }
            }
        };
        this.s = this.j = this.m = null;
        window.addEventListener("message", this.v)
    }
    r(Xv, J);
    Xv.prototype.sendMessage = function(a, b) {
        if (b = b || this.l) {
            this.sessionId && (a.id = this.sessionId);
            this.channel && (a.channel = this.channel);
            try {
                var c = JSON.stringify(a);
                b.postMessage(c, this.targetOrigin)
            } catch (d) {
                wk(d)
            }
        }
    };
    Xv.prototype.D = function() {
        window.removeEventListener("message", this.v);
        J.prototype.D.call(this)
    };

    function Yv() {
        this.j = [];
        this.isReady = !1;
        this.l = {};
        var a = this.i = new Xv(!!L("WIDGET_ID_ENFORCE")),
            b = this.Uc.bind(this);
        a.m = b;
        a.s = null;
        this.i.channel = "widget";
        if (a = L("WIDGET_ID")) this.i.sessionId = a
    }
    l = Yv.prototype;
    l.Uc = function(a, b, c) {
        "addEventListener" === a && b ? (a = b[0], this.l[a] || "onReady" === a || (this.addEventListener(a, Zv(this, a)), this.l[a] = !0)) : this.Cb(a, b, c)
    };
    l.Cb = function() {};

    function Zv(a, b) {
        return function(c) {
            return a.sendMessage(b, c)
        }
    }
    l.addEventListener = function() {};
    l.Hc = function() {
        this.isReady = !0;
        this.sendMessage("initialDelivery", this.ob());
        this.sendMessage("onReady");
        eb(this.j, this.jc, this);
        this.j = []
    };
    l.ob = function() {
        return null
    };

    function $v(a, b) {
        a.sendMessage("infoDelivery", b)
    }
    l.jc = function(a) {
        this.isReady ? this.i.sendMessage(a) : this.j.push(a)
    };
    l.sendMessage = function(a, b) {
        this.jc({
            event: a,
            info: void 0 === b ? null : b
        })
    };
    l.dispose = function() {
        this.i = null
    };

    function aw(a) {
        return (0 === a.search("cue") || 0 === a.search("load")) && "loadModule" !== a
    }

    function bw(a, b, c) {
        if ("string" === typeof a) return {
            videoId: a,
            startSeconds: b,
            suggestedQuality: c
        };
        b = ["endSeconds", "startSeconds", "mediaContentUrl", "suggestedQuality", "videoId"];
        c = {};
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            a[e] && (c[e] = a[e])
        }
        return c
    }

    function cw(a, b, c, d) {
        if (Pa(a) && !Array.isArray(a)) {
            b = "playlist list listType index startSeconds suggestedQuality".split(" ");
            c = {};
            for (d = 0; d < b.length; d++) {
                var e = b[d];
                a[e] && (c[e] = a[e])
            }
            return c
        }
        b = {
            index: b,
            startSeconds: c,
            suggestedQuality: d
        };
        "string" === typeof a && 16 === a.length ? b.list = "PL" + a : b.playlist = a;
        return b
    };

    function dw(a) {
        Yv.call(this);
        this.listeners = [];
        this.api = a;
        this.addEventListener("onReady", this.onReady.bind(this));
        this.addEventListener("onVideoProgress", this.ed.bind(this));
        this.addEventListener("onVolumeChange", this.fd.bind(this));
        this.addEventListener("onApiChange", this.Yc.bind(this));
        this.addEventListener("onPlaybackQualityChange", this.bd.bind(this));
        this.addEventListener("onPlaybackRateChange", this.cd.bind(this));
        this.addEventListener("onStateChange", this.dd.bind(this));
        this.addEventListener("onWebglSettingsChanged",
            this.gd.bind(this))
    }
    r(dw, Yv);
    l = dw.prototype;
    l.Cb = function(a, b, c) {
        if (this.api.isExternalMethodAvailable(a, c)) {
            b = b || [];
            if (0 < b.length && aw(a)) {
                var d = b;
                if (Pa(d[0]) && !Array.isArray(d[0])) var e = d[0];
                else switch (e = {}, a) {
                    case "loadVideoById":
                    case "cueVideoById":
                        e = bw(d[0], void 0 !== d[1] ? Number(d[1]) : void 0, d[2]);
                        break;
                    case "loadVideoByUrl":
                    case "cueVideoByUrl":
                        e = d[0];
                        "string" === typeof e && (e = {
                            mediaContentUrl: e,
                            startSeconds: void 0 !== d[1] ? Number(d[1]) : void 0,
                            suggestedQuality: d[2]
                        });
                        b: {
                            if ((d = e.mediaContentUrl) && (d = /\/([ve]|embed)\/([^#?]+)/.exec(d)) && d[2]) {
                                d =
                                    d[2];
                                break b
                            }
                            d = null
                        }
                        e.videoId = d;
                        e = bw(e);
                        break;
                    case "loadPlaylist":
                    case "cuePlaylist":
                        e = cw(d[0], d[1], d[2], d[3])
                }
                b.length = 1;
                b[0] = e
            }
            this.api.handleExternalCall(a, b, c);
            aw(a) && $v(this, this.ob())
        }
    };
    l.onReady = function() {
        var a = this.Hc.bind(this);
        this.i.j = a
    };
    l.addEventListener = function(a, b) {
        this.listeners.push({
            eventType: a,
            listener: b
        });
        this.api.addEventListener(a, b)
    };
    l.ob = function() {
        if (!this.api) return null;
        var a = this.api.getApiInterface();
        jb(a, "getVideoData");
        for (var b = {
                apiInterface: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            if (0 === e.search("get") || 0 === e.search("is")) {
                var f = 0;
                0 === e.search("get") ? f = 3 : 0 === e.search("is") && (f = 2);
                f = e.charAt(f).toLowerCase() + e.substr(f + 1);
                try {
                    var g = this.api[e]();
                    b[f] = g
                } catch (h) {}
            }
        }
        b.videoData = this.api.getVideoData();
        b.currentTimeLastUpdated_ = Date.now() / 1E3;
        return b
    };
    l.dd = function(a) {
        a = {
            playerState: a,
            currentTime: this.api.getCurrentTime(),
            duration: this.api.getDuration(),
            videoData: this.api.getVideoData(),
            videoStartBytes: 0,
            videoBytesTotal: this.api.getVideoBytesTotal(),
            videoLoadedFraction: this.api.getVideoLoadedFraction(),
            playbackQuality: this.api.getPlaybackQuality(),
            availableQualityLevels: this.api.getAvailableQualityLevels(),
            currentTimeLastUpdated_: Date.now() / 1E3,
            playbackRate: this.api.getPlaybackRate(),
            mediaReferenceTime: this.api.getMediaReferenceTime()
        };
        this.api.getVideoUrl &&
            (a.videoUrl = this.api.getVideoUrl());
        this.api.getVideoContentRect && (a.videoContentRect = this.api.getVideoContentRect());
        this.api.getProgressState && (a.progressState = this.api.getProgressState());
        this.api.getPlaylist && (a.playlist = this.api.getPlaylist());
        this.api.getPlaylistIndex && (a.playlistIndex = this.api.getPlaylistIndex());
        this.api.getStoryboardFormat && (a.storyboardFormat = this.api.getStoryboardFormat());
        $v(this, a)
    };
    l.bd = function(a) {
        $v(this, {
            playbackQuality: a
        })
    };
    l.cd = function(a) {
        $v(this, {
            playbackRate: a
        })
    };
    l.Yc = function() {
        for (var a = this.api.getOptions(), b = {
                namespaces: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c],
                f = this.api.getOptions(e);
            b[e] = {
                options: f
            };
            for (var g = 0, h = f.length; g < h; g++) {
                var k = f[g],
                    m = this.api.getOption(e, k);
                b[e][k] = m
            }
        }
        this.sendMessage("apiInfoDelivery", b)
    };
    l.fd = function() {
        $v(this, {
            muted: this.api.isMuted(),
            volume: this.api.getVolume()
        })
    };
    l.ed = function(a) {
        a = {
            currentTime: a,
            videoBytesLoaded: this.api.getVideoBytesLoaded(),
            videoLoadedFraction: this.api.getVideoLoadedFraction(),
            currentTimeLastUpdated_: Date.now() / 1E3,
            playbackRate: this.api.getPlaybackRate(),
            mediaReferenceTime: this.api.getMediaReferenceTime()
        };
        this.api.getProgressState && (a.progressState = this.api.getProgressState());
        $v(this, a)
    };
    l.gd = function() {
        var a = {
            sphericalProperties: this.api.getSphericalProperties()
        };
        $v(this, a)
    };
    l.dispose = function() {
        Yv.prototype.dispose.call(this);
        for (var a = 0; a < this.listeners.length; a++) {
            var b = this.listeners[a];
            this.api.removeEventListener(b.eventType, b.listener)
        }
        this.listeners = []
    };

    function ew(a) {
        J.call(this);
        this.j = {};
        this.started = !1;
        this.connection = a;
        this.connection.subscribe("command", this.dc, this)
    }
    r(ew, J);
    l = ew.prototype;
    l.start = function() {
        this.started || this.i() || (this.started = !0, this.connection.wa("RECEIVING"))
    };
    l.wa = function(a, b) {
        this.started && !this.i() && this.connection.wa(a, b)
    };
    l.dc = function(a, b, c) {
        if (this.started && !this.i()) {
            var d = b || {};
            switch (a) {
                case "addEventListener":
                    "string" === typeof d.event && this.addListener(d.event);
                    break;
                case "removeEventListener":
                    "string" === typeof d.event && this.removeListener(d.event);
                    break;
                default:
                    this.api.isReady() && this.api.isExternalMethodAvailable(a, c || null) && (b = fw(a, b || {}), c = this.api.handleExternalCall(a, b, c || null), (c = gw(a, c)) && this.wa(a, c))
            }
        }
    };
    l.addListener = function(a) {
        if (!(a in this.j)) {
            var b = this.Zc.bind(this, a);
            this.j[a] = b;
            this.addEventListener(a, b)
        }
    };
    l.Zc = function(a, b) {
        this.started && !this.i() && this.connection.wa(a, this.nb(a, b))
    };
    l.nb = function(a, b) {
        if (null != b) return {
            value: b
        }
    };
    l.removeListener = function(a) {
        a in this.j && (this.removeEventListener(a, this.j[a]), delete this.j[a])
    };
    l.D = function() {
        var a = this.connection;
        a.i() || ki(a.j, "command", this.dc, this);
        this.connection = null;
        for (var b in this.j) this.j.hasOwnProperty(b) && this.removeListener(b);
        J.prototype.D.call(this)
    };

    function hw(a, b) {
        ew.call(this, b);
        this.api = a;
        this.start()
    }
    r(hw, ew);
    hw.prototype.addEventListener = function(a, b) {
        this.api.addEventListener(a, b)
    };
    hw.prototype.removeEventListener = function(a, b) {
        this.api.removeEventListener(a, b)
    };

    function fw(a, b) {
        switch (a) {
            case "loadVideoById":
                return a = bw(b), [a];
            case "cueVideoById":
                return a = bw(b), [a];
            case "loadVideoByPlayerVars":
                return [b];
            case "cueVideoByPlayerVars":
                return [b];
            case "loadPlaylist":
                return a = cw(b), [a];
            case "cuePlaylist":
                return a = cw(b), [a];
            case "seekTo":
                return [b.seconds, b.allowSeekAhead];
            case "playVideoAt":
                return [b.index];
            case "setVolume":
                return [b.volume];
            case "setPlaybackQuality":
                return [b.suggestedQuality];
            case "setPlaybackRate":
                return [b.suggestedRate];
            case "setLoop":
                return [b.loopPlaylists];
            case "setShuffle":
                return [b.shufflePlaylist];
            case "getOptions":
                return [b.module];
            case "getOption":
                return [b.module, b.option];
            case "setOption":
                return [b.module, b.option, b.value];
            case "handleGlobalKeyDown":
                return [b.keyCode, b.shiftKey, b.ctrlKey, b.altKey, b.metaKey, b.key, b.code]
        }
        return []
    }

    function gw(a, b) {
        switch (a) {
            case "isMuted":
                return {
                    muted: b
                };
            case "getVolume":
                return {
                    volume: b
                };
            case "getPlaybackRate":
                return {
                    playbackRate: b
                };
            case "getAvailablePlaybackRates":
                return {
                    availablePlaybackRates: b
                };
            case "getVideoLoadedFraction":
                return {
                    videoLoadedFraction: b
                };
            case "getPlayerState":
                return {
                    playerState: b
                };
            case "getCurrentTime":
                return {
                    currentTime: b
                };
            case "getPlaybackQuality":
                return {
                    playbackQuality: b
                };
            case "getAvailableQualityLevels":
                return {
                    availableQualityLevels: b
                };
            case "getDuration":
                return {
                    duration: b
                };
            case "getVideoUrl":
                return {
                    videoUrl: b
                };
            case "getVideoEmbedCode":
                return {
                    videoEmbedCode: b
                };
            case "getPlaylist":
                return {
                    playlist: b
                };
            case "getPlaylistIndex":
                return {
                    playlistIndex: b
                };
            case "getOptions":
                return {
                    options: b
                };
            case "getOption":
                return {
                    option: b
                }
        }
    }
    hw.prototype.nb = function(a, b) {
        switch (a) {
            case "onReady":
                return;
            case "onStateChange":
                return {
                    playerState: b
                };
            case "onPlaybackQualityChange":
                return {
                    playbackQuality: b
                };
            case "onPlaybackRateChange":
                return {
                    playbackRate: b
                };
            case "onError":
                return {
                    errorCode: b
                }
        }
        return ew.prototype.nb.call(this, a, b)
    };
    hw.prototype.D = function() {
        ew.prototype.D.call(this);
        delete this.api
    };

    function iw(a) {
        a = void 0 === a ? !1 : a;
        J.call(this);
        this.j = new K(a);
        le(this, this.j)
    }
    Ya(iw, J);
    iw.prototype.subscribe = function(a, b, c) {
        return this.i() ? 0 : this.j.subscribe(a, b, c)
    };
    iw.prototype.o = function(a, b) {
        this.i() || this.j.qa.apply(this.j, arguments)
    };

    function jw(a, b, c) {
        iw.call(this);
        this.l = a;
        this.destination = b;
        this.id = c
    }
    r(jw, iw);
    jw.prototype.wa = function(a, b) {
        this.i() || this.l.wa(this.destination, this.id, a, b)
    };
    jw.prototype.D = function() {
        this.destination = this.l = null;
        iw.prototype.D.call(this)
    };

    function kw(a, b, c) {
        J.call(this);
        this.destination = a;
        this.origin = c;
        this.j = hq(window, "message", this.l.bind(this));
        this.connection = new jw(this, a, b);
        le(this, this.connection)
    }
    r(kw, J);
    kw.prototype.wa = function(a, b, c, d) {
        this.i() || a !== this.destination || (a = {
            id: b,
            command: c
        }, d && (a.data = d), this.destination.postMessage(pg(a), this.origin))
    };
    kw.prototype.l = function(a) {
        var b;
        if (b = !this.i())
            if (b = a.origin === this.origin) a: {
                b = this.destination;do {
                    b: {
                        var c = a.source;do {
                            if (c === b) {
                                c = !0;
                                break b
                            }
                            if (c === c.parent) break;
                            c = c.parent
                        } while (null != c);c = !1
                    }
                    if (c) {
                        b = !0;
                        break a
                    }
                    b = b.opener
                } while (null != b);b = !1
            }
        if (b && (b = a.data, "string" === typeof b)) {
            try {
                b = JSON.parse(b)
            } catch (d) {
                return
            }
            b.command && (c = this.connection, c.i() || c.o("command", b.command, b.data, a.origin))
        }
    };
    kw.prototype.D = function() {
        iq(this.j);
        this.destination = null;
        J.prototype.D.call(this)
    };

    function lw(a) {
        a = a || {};
        var b = {},
            c = {};
        this.url = a.url || "";
        this.args = a.args || sb(b);
        this.assets = a.assets || {};
        this.attrs = a.attrs || sb(c);
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    }
    lw.prototype.clone = function() {
        var a = new lw,
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "object" == Na(c) ? a[b] = sb(c) : a[b] = c
            }
        return a
    };
    var mw = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;

    function nw(a) {
        a = a || "";
        if (window.spf) {
            var b = a.match(mw);
            spf.style.load(a, b ? b[1] : "", void 0)
        } else ow(a)
    }

    function ow(a) {
        var b = pw(a),
            c = document.getElementById(b),
            d = c && lv(c, "loaded");
        d || c && !d || (c = qw(a, b, function() {
            lv(c, "loaded") || (jv(c), xq(b), Pk(Xa(yq, b), 0))
        }))
    }

    function qw(a, b, c) {
        var d = document.createElement("link");
        d.id = b;
        d.onload = function() {
            c && setTimeout(c, 0)
        };
        a = Ib(a);
        dc(d, a);
        (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
        return d
    }

    function pw(a) {
        var b = bf("A");
        Cb("This URL is never added to the DOM");
        cc(b, new Lb(a, Mb));
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "css-" + hc(a)
    };

    function rw() {
        J.call(this);
        this.j = []
    }
    r(rw, J);
    rw.prototype.D = function() {
        for (; this.j.length;) {
            var a = this.j.pop();
            a.target.removeEventListener(a.name, a.callback, void 0)
        }
        J.prototype.D.call(this)
    };

    function sw() {
        rw.apply(this, arguments)
    }
    r(sw, rw);

    function tw(a, b, c, d) {
        J.call(this);
        var e = this;
        this.v = b;
        this.webPlayerContextConfig = d;
        this.ea = !1;
        this.api = {};
        this.X = this.s = null;
        this.K = new K;
        this.j = {};
        this.R = this.Y = this.elementId = this.ra = this.config = null;
        this.P = !1;
        this.o = this.B = null;
        this.la = {};
        this.Pa = ["onReady"];
        this.lastError = null;
        this.Fa = NaN;
        this.G = {};
        this.Qa = new sw(this);
        this.T = 0;
        this.l = this.m = a;
        le(this, this.K);
        uw(this);
        vw(this);
        le(this, this.Qa);
        c ? this.T = Pk(function() {
            e.loadNewVideoConfig(c)
        }, 0) : d && (ww(this), xw(this))
    }
    r(tw, J);
    l = tw.prototype;
    l.getId = function() {
        return this.v
    };
    l.loadNewVideoConfig = function(a) {
        if (!this.i()) {
            this.T && (Qk(this.T), this.T = 0);
            var b = a || {};
            b instanceof lw || (b = new lw(b));
            this.config = b;
            this.setConfig(a);
            xw(this);
            this.isReady() && yw(this)
        }
    };

    function ww(a) {
        var b;
        a.webPlayerContextConfig ? b = a.webPlayerContextConfig.rootElementId : b = a.config.attrs.id;
        a.elementId = b || a.elementId;
        "video-player" === a.elementId && (a.elementId = a.v, a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.v : a.config.attrs.id = a.v);
        var c;
        (null == (c = a.l) ? void 0 : c.id) === a.elementId && (a.elementId += "-player", a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.elementId : a.config.attrs.id = a.elementId)
    }
    l.setConfig = function(a) {
        this.ra = a;
        this.config = zw(a);
        ww(this);
        if (!this.Y) {
            var b;
            this.Y = Aw(this, (null == (b = this.config.args) ? void 0 : b.jsapicallback) || "onYouTubePlayerReady")
        }
        this.config.args ? this.config.args.jsapicallback = null : this.config.args = {
            jsapicallback: null
        };
        var c;
        if (null == (c = this.config) ? 0 : c.attrs) a = this.config.attrs, (b = a.width) && this.l && (this.l.style.width = Fh(Number(b) || b)), (a = a.height) && this.l && (this.l.style.height = Fh(Number(a) || a))
    };

    function yw(a) {
        if (a.config && !0 !== a.config.loaded)
            if (a.config.loaded = !0, !a.config.args || "0" !== a.config.args.autoplay && 0 !== a.config.args.autoplay && !1 !== a.config.args.autoplay) {
                var b;
                a.api.loadVideoByPlayerVars(null != (b = a.config.args) ? b : null)
            } else a.api.cueVideoByPlayerVars(a.config.args)
    }

    function Bw(a) {
        var b = !0,
            c = Cw(a);
        c && a.config && (a = Dw(a), b = lv(c, "version") === a);
        return b && !!B("yt.player.Application.create")
    }

    function xw(a) {
        if (!a.i() && !a.P) {
            var b = Bw(a);
            if (b && "html5" === (Cw(a) ? "html5" : null)) a.R = "html5", a.isReady() || Ew(a);
            else if (Fw(a), a.R = "html5", b && a.o && a.m) a.m.appendChild(a.o), Ew(a);
            else {
                a.config && (a.config.loaded = !0);
                var c = !1;
                a.B = function() {
                    c = !0;
                    var d = Gw(a, "player_bootstrap_method") ? B("yt.player.Application.createAlternate") || B("yt.player.Application.create") : B("yt.player.Application.create");
                    var e = a.config ? zw(a.config) : void 0;
                    d && d(a.m, e, a.webPlayerContextConfig);
                    Ew(a)
                };
                a.P = !0;
                b ? a.B() : (pv(Dw(a), a.B), (b = Hw(a)) && nw(b), Iw(a) && !c && z("yt.player.Application.create", null))
            }
        }
    }

    function Cw(a) {
        var b = af(a.elementId);
        !b && a.l && a.l.querySelector && (b = a.l.querySelector("#" + a.elementId));
        return b
    }

    function Ew(a) {
        if (!a.i()) {
            var b = Cw(a),
                c = !1;
            b && b.getApiInterface && b.getApiInterface() && (c = !0);
            if (c) {
                a.P = !1;
                if (!Gw(a, "html5_remove_not_servable_check_killswitch")) {
                    var d;
                    if ((null == b ? 0 : b.isNotServable) && a.config && (null == b ? 0 : b.isNotServable(null == (d = a.config.args) ? void 0 : d.video_id))) return
                }
                Jw(a)
            } else a.Fa = Pk(function() {
                Ew(a)
            }, 50)
        }
    }

    function Jw(a) {
        uw(a);
        a.ea = !0;
        var b = Cw(a);
        if (b) {
            a.s = Kw(a, b, "addEventListener");
            a.X = Kw(a, b, "removeEventListener");
            var c = b.getApiInterface();
            c = c.concat(b.getInternalApiInterface());
            for (var d = a.api, e = 0; e < c.length; e++) {
                var f = c[e];
                d[f] || (d[f] = Kw(a, b, f))
            }
        }
        for (var g in a.j) a.j.hasOwnProperty(g) && a.s && a.s(g, a.j[g]);
        yw(a);
        a.Y && a.Y(a.api);
        a.K.qa("onReady", a.api)
    }

    function Kw(a, b, c) {
        var d = b[c];
        return function() {
            var e = Ia.apply(0, arguments);
            try {
                return a.lastError = null, d.apply(b, e)
            } catch (f) {
                "sendAbandonmentPing" !== c && (f.params = c, a.lastError = f, Nr(f))
            }
        }
    }

    function uw(a) {
        a.ea = !1;
        if (a.X)
            for (var b in a.j) a.j.hasOwnProperty(b) && a.X(b, a.j[b]);
        for (var c in a.G) a.G.hasOwnProperty(c) && Qk(Number(c));
        a.G = {};
        a.s = null;
        a.X = null;
        b = a.api;
        for (var d in b) b.hasOwnProperty(d) && (b[d] = null);
        b.addEventListener = function(e, f) {
            a.addEventListener(e, f)
        };
        b.removeEventListener = function(e, f) {
            a.removeEventListener(e, f)
        };
        b.destroy = function() {
            a.dispose()
        };
        b.getLastError = function() {
            return a.getLastError()
        };
        b.getPlayerType = function() {
            return a.getPlayerType()
        };
        b.getCurrentVideoConfig = function() {
            return a.ra
        };
        b.loadNewVideoConfig = function(e) {
            a.loadNewVideoConfig(e)
        };
        b.isReady = function() {
            return a.isReady()
        }
    }
    l.isReady = function() {
        return this.ea
    };

    function vw(a) {
        a.addEventListener("WATCH_LATER_VIDEO_ADDED", function(b) {
            xq("WATCH_LATER_VIDEO_ADDED", b)
        });
        a.addEventListener("WATCH_LATER_VIDEO_REMOVED", function(b) {
            xq("WATCH_LATER_VIDEO_REMOVED", b)
        })
    }
    l.addEventListener = function(a, b) {
        var c = this,
            d = Aw(this, b);
        d && (0 <= db(this.Pa, a) || this.j[a] || (b = Lw(this, a), this.s && this.s(a, b)), this.K.subscribe(a, d), "onReady" === a && this.isReady() && Pk(function() {
            d(c.api)
        }, 0))
    };
    l.removeEventListener = function(a, b) {
        this.i() || (b = Aw(this, b)) && ki(this.K, a, b)
    };

    function Aw(a, b) {
        var c = b;
        if ("string" === typeof b) {
            if (a.la[b]) return a.la[b];
            c = function() {
                var d = Ia.apply(0, arguments),
                    e = B(b);
                if (e) try {
                    e.apply(y, d)
                } catch (f) {
                    Mr(f)
                }
            };
            a.la[b] = c
        }
        return c ? c : null
    }

    function Lw(a, b) {
        var c = "ytPlayer" + b + a.v;
        a.j[b] = c;
        y[c] = function(d) {
            var e = Pk(function() {
                if (!a.i()) {
                    try {
                        a.K.qa(b, null != d ? d : void 0)
                    } catch (h) {
                        Nr(new R("PlayerProxy error when creating global callback", {
                            error: h,
                            event: b,
                            playerId: a.v,
                            data: d
                        }))
                    }
                    var f = a.G,
                        g = String(e);
                    g in f && delete f[g]
                }
            }, 0);
            pb(a.G, String(e))
        };
        return c
    }
    l.getPlayerType = function() {
        return this.R || (Cw(this) ? "html5" : null)
    };
    l.getLastError = function() {
        return this.lastError
    };

    function Fw(a) {
        a.cancel();
        uw(a);
        a.R = null;
        a.config && (a.config.loaded = !1);
        var b = Cw(a);
        b && (Bw(a) || !Iw(a) ? a.o = b : (b && b.destroy && b.destroy(), a.o = null));
        if (a.m)
            for (a = a.m; b = a.firstChild;) a.removeChild(b)
    }
    l.cancel = function() {
        this.B && vv(Dw(this), this.B);
        Qk(this.Fa);
        this.P = !1
    };
    l.D = function() {
        Fw(this);
        if (this.o && this.config && this.o.destroy) try {
            this.o.destroy()
        } catch (b) {
            Mr(b)
        }
        this.la = null;
        for (var a in this.j) this.j.hasOwnProperty(a) && (y[this.j[a]] = null);
        this.ra = this.config = this.api = null;
        delete this.m;
        delete this.l;
        J.prototype.D.call(this)
    };

    function Iw(a) {
        var b, c;
        a = null == (b = a.config) ? void 0 : null == (c = b.args) ? void 0 : c.fflags;
        return !!a && -1 !== a.indexOf("player_destroy_old_version=true")
    }

    function Dw(a) {
        return a.webPlayerContextConfig ? a.webPlayerContextConfig.jsUrl : (a = a.config.assets) ? a.js : ""
    }

    function Hw(a) {
        return a.webPlayerContextConfig ? a.webPlayerContextConfig.cssUrl : (a = a.config.assets) ? a.css : ""
    }

    function Gw(a, b) {
        if (a.webPlayerContextConfig) var c = a.webPlayerContextConfig.serializedExperimentFlags;
        else {
            var d;
            if (null == (d = a.config) ? 0 : d.args) c = a.config.args.fflags
        }
        return "true" === Ck(c || "", "&")[b]
    }

    function zw(a) {
        for (var b = {}, c = p(Object.keys(a)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d];
            b[d] = "object" === typeof e ? sb(e) : e
        }
        return b
    };
    var Mw = {},
        Nw = "player_uid_" + (1E9 * Math.random() >>> 0);

    function Ow(a, b, c) {
        var d = "player";
        c = void 0 === c ? !0 : c;
        d = "string" === typeof d ? af(d) : d;
        var e = Nw + "_" + Qa(d),
            f = Mw[e];
        if (f && c) return Pw(a, b) ? f.api.loadVideoByPlayerVars(a.args || null) : f.loadNewVideoConfig(a), f.api;
        f = new tw(d, e, a, b);
        Mw[e] = f;
        xq("player-added", f.api);
        me(f, function() {
            delete Mw[f.getId()]
        });
        return f.api
    }

    function Pw(a, b) {
        return b && b.serializedExperimentFlags ? b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true") : a && a.args && a.args.fflags ? a.args.fflags.includes("web_player_remove_playerproxy=true") : !1
    };
    var Qw = null,
        Rw = null,
        Sw = null;

    function Tw() {
        var a = Qw.getVideoData(1);
        a = a.title ? a.title + " - YouTube" : "YouTube";
        document.title !== a && (document.title = a)
    };

    function Uw(a, b, c) {
        a = "ST-" + hc(a).toString(36);
        b = b ? qc(b) : "";
        c = c || 5;
        ts() && fl(a, b, c)
    };

    function Vw(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? !1 : c;
        var d = L("EVENT_ID");
        d && (b.ei || (b.ei = d));
        if (b) {
            d = a;
            var e = void 0 === e ? !0 : e;
            var f = L("VALID_SESSION_TEMPDATA_DOMAINS", []),
                g = lc(window.location.href);
            g && f.push(g);
            g = lc(d);
            if (0 <= db(f, g) || !g && 0 == d.lastIndexOf("/", 0))
                if (M("autoescape_tempdata_url") && (f = document.createElement("a"), cc(f, d), d = f.href), d && (d = mc(d), f = d.indexOf("#"), d = 0 > f ? d : d.slice(0, f)))
                    if (e && !b.csn && (b.itct || b.ved) && (b = Object.assign({
                            csn: es()
                        }, b)), h) {
                        var h = parseInt(h, 10);
                        isFinite(h) && 0 < h &&
                            Uw(d, b, h)
                    } else Uw(d, b)
        }
        if (c) return !1;
        if ((window.ytspf || {}).enabled) spf.navigate(a);
        else {
            var k = void 0 === k ? {} : k;
            var m = void 0 === m ? "" : m;
            var q = void 0 === q ? window : q;
            c = q.location;
            a = sc(a, k) + m;
            var t = void 0 === t ? xh : t;
            a: {
                t = void 0 === t ? xh : t;
                for (k = 0; k < t.length; ++k)
                    if (m = t[k], m instanceof vh && m.isValid(a)) {
                        t = new Lb(a, Mb);
                        break a
                    }
                t = void 0
            }
            c.href = Nb(t || Pb)
        }
        return !0
    };
    z("yt.setConfig", mk);
    z("yt.config.set", mk);
    z("yt.setMsg", js);
    z("yt.msgs.set", js);
    z("yt.logging.errors.log", Mr);
    z("writeEmbed", function() {
        var a = L("PLAYER_CONFIG");
        if (!a) {
            var b = L("PLAYER_VARS");
            b && (a = {
                args: b
            })
        }
        Cs(!0);
        "gvn" === a.args.ps && (document.body.style.backgroundColor = "transparent");
        a.attrs || (a.attrs = {
            width: "100%",
            height: "100%",
            id: "video-player"
        });
        var c = document.referrer;
        b = L("POST_MESSAGE_ORIGIN");
        window !== window.top && c && c !== document.URL && (a.args.loaderUrl = c);
        M("embeds_js_api_set_1p_cookie") && (c = Hk(window.location.href), c.embedsTokenValue && (a.args.embedsTokenValue = c.embedsTokenValue));
        au();
        if ((c = L("WEB_PLAYER_CONTEXT_CONFIGS")) &&
            "WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER" in c) {
            c = c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
            if (!c.serializedForcedExperimentIds) {
                var d = Hk(window.location.href);
                d.forced_experiments && (c.serializedForcedExperimentIds = d.forced_experiments)
            }
            Qw = Ow(a, c, !1)
        } else Qw = Ow(a);
        Qw.addEventListener("onVideoDataChange", Tw);
        a = L("POST_MESSAGE_ID", "player");
        L("ENABLE_JS_API") ? Sw = new dw(Qw) : L("ENABLE_POST_API") && "string" === typeof a && "string" === typeof b && (Rw = new kw(window.parent, a, b), Sw = new hw(Qw, Rw.connection));
        yv();
        M("ytidb_create_logger_embed_killswitch") || am();
        a = {};
        Sv || (Sv = new Rv);
        Sv.install((a.flush_logs = {
            callback: function() {
                Pq()
            }
        }, a));
        M("embeds_web_enable_new_nwl") ? Oo() : Wo();
        M("ytidb_clear_embedded_player") && Mh.S(function() {
            var e;
            if (!Iu) {
                Ms || (Ms = new Js);
                var f = Ms;
                var g = {
                    Tc: Hu,
                    nc: Gu
                };
                f.providers.set(g.Tc, g);
                g = {
                    Kb: {
                        feedbackEndpoint: Xs(Cu),
                        modifyChannelNotificationPreferenceEndpoint: Xs(Du),
                        playlistEditEndpoint: Xs(Eu),
                        subscribeEndpoint: Xs(Au),
                        unsubscribeEndpoint: Xs(Bu),
                        webPlayerShareEntityServiceEndpoint: Xs(Fu)
                    }
                };
                var h = M("web_enable_client_location_service") ? Ts.getInstance() : void 0,
                    k = {};
                h && (k.client_location = h);
                if (void 0 === m) {
                    Ds.i ||
                        (Ds.i = new Ds);
                    var m = Ds.i
                }
                void 0 === e && (e = f.resolve(Hu));
                pu(g, e, m, k);
                Iu = ou.i
            }
            iv()
        })
    });
    var Ww = uk(function() {
            gu();
            var a = jl.getInstance(),
                b = ml(119),
                c = 1 < window.devicePixelRatio;
            if (document.body && Yh(document.body, "exp-invert-logo"))
                if (c && !Yh(document.body, "inverted-hdpi")) {
                    var d = document.body;
                    if (d.classList) d.classList.add("inverted-hdpi");
                    else if (!Yh(d, "inverted-hdpi")) {
                        var e = Wh(d);
                        Xh(d, e + (0 < e.length ? " inverted-hdpi" : "inverted-hdpi"))
                    }
                } else !c && Yh(document.body, "inverted-hdpi") && Zh();
            if (b != c) {
                b = "f" + (Math.floor(119 / 31) + 1);
                d = nl(b) || 0;
                d = c ? d | 67108864 : d & -67108865;
                0 == d ? delete il[b] : (c = d.toString(16),
                    il[b] = c.toString());
                c = !0;
                M("web_secure_pref_cookie_killswitch") && (c = !1);
                b = a.i;
                d = [];
                for (var f in il) d.push(f + "=" + encodeURIComponent(String(il[f])));
                fl(b, d.join("&"), 63072E3, a.j, c)
            }
            Su.i || (Su.i = new Su);
            a = Su.i;
            f = 16623;
            var g = void 0 === g ? {} : g;
            Object.values(ks).includes(f) || (Nr(new R("createClientScreen() called with a non-page VE", f)), f = 83769);
            g.isHistoryNavigation || a.i.push({
                rootVe: f,
                key: g.key || ""
            });
            a.m = [];
            a.C = [];
            g.Nb ? Vu(a, f, g) : Wu(a, f, g)
        }),
        Xw = uk(function() {
            Qw && Qw.sendAbandonmentPing && Qw.sendAbandonmentPing();
            L("PL_ATT") && Gv.dispose();
            for (var a = Mh, b = 0, c = wv.length; b < c; b++) a.aa(wv[b]);
            wv.length = 0;
            uv("//static.doubleclick.net/instream/ad_status.js");
            xv = !1;
            mk("DCLKSTAT", 0);
            ke(Sw, Rw);
            Qw && (Qw.removeEventListener("onVideoDataChange", Tw), Qw.destroy())
        });
    window.addEventListener ? (window.addEventListener("load", Ww), window.addEventListener("pagehide", Xw)) : window.attachEvent && (window.attachEvent("onload", Ww), window.attachEvent("onunload", Xw));
    z("yt.abuse.player.botguardInitialized", B("yt.abuse.player.botguardInitialized") || Hv);
    z("yt.abuse.player.invokeBotguard", B("yt.abuse.player.invokeBotguard") || Iv);
    z("yt.abuse.dclkstatus.checkDclkStatus", B("yt.abuse.dclkstatus.checkDclkStatus") || Bv);
    z("yt.player.exports.navigate", B("yt.player.exports.navigate") || Vw);
    z("yt.util.activity.init", B("yt.util.activity.init") || mq);
    z("yt.util.activity.getTimeSinceActive", B("yt.util.activity.getTimeSinceActive") || pq);
    z("yt.util.activity.setTimestamp", B("yt.util.activity.setTimestamp") || nq);
}).call(this);