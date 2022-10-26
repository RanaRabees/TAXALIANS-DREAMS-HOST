/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var q, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ca(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var da = ca(this);

function ea(a, b) {
    if (b) a: {
        var c = da;a = a.split(".");
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

function fa(a) {
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

function r(a) {
    return fa(a())
}
ea("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});

function ha(a, b) {
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
ea("Array.prototype.values", function(a) {
    return a ? a : function() {
        return ha(this, function(b, c) {
            return c
        })
    }
});
ea("Array.prototype.includes", function(a) {
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
ea("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
ea("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
ea("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var u = this || self;

function v(a, b) {
    a = a.split(".");
    b = b || u;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ja(a, b, c) {
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

function ka(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = ia : ka = ja;
    return ka.apply(null, arguments)
}

function w(a, b) {
    a = a.split(".");
    var c = u;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function la(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ja = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.sb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function ma(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ma);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.wa = b)
}
la(ma, Error);
ma.prototype.name = "CustomError";

function na() {};

function oa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function pa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function qa(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function ra(a, b) {
    for (let d = 1; d < arguments.length; d++) {
        const e = arguments[d];
        var c = typeof e;
        c = "object" != c ? c : e ? Array.isArray(e) ? "array" : c : "null";
        if ("array" == c || "object" == c && "number" == typeof e.length) {
            c = a.length || 0;
            const f = e.length || 0;
            a.length = c + f;
            for (let g = 0; g < f; g++) a[c + g] = e[g]
        } else a.push(e)
    }
};

function sa(a) {
    for (const b in a) return !1;
    return !0
}

function ta(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = ta(a[c]);
    return b
}
const ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function va(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < ua.length; f++) c = ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function wa() {}

function xa(a) {
    return new wa(ya, a)
}
var ya = {};
xa("");
var za = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function Aa() {
    var a = u.navigator;
    return a && (a = a.userAgent) ? a : ""
}

function y(a) {
    return -1 != Aa().indexOf(a)
};

function Ba() {
    return (y("Chrome") || y("CriOS")) && !y("Edge") || y("Silk")
};
var A = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Ca(a) {
    return a ? decodeURI(a) : a
}

function Da(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Da(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Ea(a) {
    var b = [],
        c;
    for (c in a) Da(c, a[c], b);
    return b.join("&")
};
var Fa = {};

function Ga(a) {
    if (a !== Fa) throw Error("requires a valid immutable API token");
};

function Ia() {
    throw Error("Invalid UTF8");
}

function Ja(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Ka = void 0,
    La;
const Ma = "undefined" !== typeof TextDecoder;
!y("Android") || Ba();
Ba();
var Na = y("Safari") && !(Ba() || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")) && !(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod"));
var Oa = {},
    Pa = null;

function Qa(a, b) {
    void 0 === b && (b = 0);
    Ra();
    b = Oa[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Sa(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Ta(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Ta(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                m = Pa[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ra();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Ra() {
    if (!Pa) {
        Pa = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Oa[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Pa[f] && (Pa[f] = e)
            }
        }
    }
};
var Ua = "undefined" !== typeof Uint8Array;

function Va(a) {
    return Ua && null != a && a instanceof Uint8Array
}
let Wa;
var Xa = {};
let Ya;

function Za(a) {
    if (a !== Xa) throw Error("illegal external caller");
}

function $a() {
    return Ya || (Ya = new ab(null, Xa))
}
var ab = class {
    constructor(a, b) {
        Za(b);
        this.S = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    isEmpty() {
        return null == this.S
    }
};
const bb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

function cb(a, b) {
    Object.isFrozen(a) || (bb ? a[bb] |= b : void 0 !== a.L ? a.L |= b : Object.defineProperties(a, {
        L: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }))
}

function db(a) {
    let b;
    bb ? b = a[bb] : b = a.L;
    return null == b ? 0 : b
}

function eb(a) {
    return Array.isArray(a) ? !!(db(a) & 1) : !1
}

function fb(a) {
    cb(a, 1);
    return a
}

function gb(a) {
    return Array.isArray(a) ? !!(db(a) & 2) : !1
}

function hb(a) {
    if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
    cb(a, 2)
}

function ib(a, b) {
    if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
    b ? cb(a, 8) : Object.isFrozen(a) || (bb ? a[bb] &= -9 : void 0 !== a.L && (a.L &= -9))
};

function B(a) {
    return gb(a.s)
}

function jb(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let kb;
var lb = Object.freeze(fb([]));

function mb(a) {
    if (B(a)) throw Error("Cannot mutate an immutable Message");
}
var nb = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

function ob(a) {
    return {
        value: a,
        configurable: !1,
        writable: !1,
        enumerable: !1
    }
};

function pb(a) {
    u.setTimeout(() => {
        throw a;
    }, 0)
};

function qb(a) {
    return a.displayName || a.name || "unknown type name"
}

function rb(a, b) {
    a instanceof b || pb(Error(`Expected instanceof ${qb(b)} but got ${a&&qb(a.constructor)}`));
    return a
}

function sb(a, b, c = !1) {
    if (Array.isArray(a)) return new b(a);
    if (c) return new b
};

function tb(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            if (a && !Array.isArray(a)) {
                if (Va(a)) return Qa(a);
                if (a instanceof ab) {
                    var b = a.S;
                    b = null == b || "string" === typeof b ? b : Ua && b instanceof Uint8Array ? Qa(b) : null;
                    return null == b ? "" : a.S = b
                }
            }
    }
    return a
};

function ub(a, b = vb) {
    return wb(a, b)
}

function xb(a, b) {
    if (null != a) {
        if (Array.isArray(a)) a = wb(a, b);
        else if (jb(a)) {
            const c = {};
            for (let d in a) c[d] = xb(a[d], b);
            a = c
        } else a = b(a);
        return a
    }
}

function wb(a, b) {
    const c = a.slice();
    for (let d = 0; d < c.length; d++) c[d] = xb(c[d], b);
    eb(a) && fb(c);
    return c
}

function yb(a) {
    if (a && "object" == typeof a && a.toJSON) return a.toJSON();
    a = tb(a);
    return Array.isArray(a) ? ub(a, yb) : a
}

function vb(a) {
    return Va(a) ? new Uint8Array(a) : a
};

function zb(a) {
    return a.j || (a.j = a.s[a.l + a.K] = {})
}

function C(a, b, c = !1) {
    return -1 === b ? null : b >= a.l ? a.j ? a.j[b] : void 0 : c && a.j && (c = a.j[b], null != c) ? c : a.s[b + a.K]
}

function D(a, b, c, d = !1, e = !1) {
    e || mb(a);
    b < a.l && !d ? a.s[b + a.K] = c : zb(a)[b] = c;
    return a
}

function Ab(a, b, c = !0, d) {
    let e = C(a, b, d);
    Array.isArray(e) || (e = lb);
    if (B(a)) c && (hb(e), Object.freeze(e));
    else if (e === lb || gb(e)) e = fb(e.slice()), D(a, b, e, d);
    return e
}

function Bb(a, b, c, d) {
    mb(a);
    (c = Cb(a, c)) && c !== b && null != d && (a.i && c in a.i && (a.i[c] = void 0), D(a, c));
    return D(a, b, d)
}

function Cb(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
        const e = b[d];
        null != C(a, e) && (0 !== c && D(a, c, void 0, !1, !0), c = e)
    }
    return c
}

function Db(a, b, c, d, e = !1) {
    if (-1 === c) d = null;
    else {
        a.i || (a.i = {});
        var f = a.i[c];
        if (f) d = f;
        else {
            var g = C(a, c, e);
            b = sb(g, b, d);
            void 0 == b ? d = f : (d && b.s !== g && D(a, c, b.s, e, !0), a.i[c] = b, B(a) && hb(b.s), d = b)
        }
    }
    if (null == d) return d;
    B(d) && !B(a) && (d = d.ka(Fa), D(a, c, d.s, e), a.i[c] = d);
    return d
}

function Eb(a, b, c, d, e = !0) {
    a.i || (a.i = {});
    var f = B(a);
    let g = a.i[c];
    d = Ab(a, c, !0, d);
    const h = f || gb(d);
    if (!g) {
        g = [];
        f = f || h;
        for (let l = 0; l < d.length; l++) {
            var k = d[l];
            f = f || gb(k);
            k = sb(k, b);
            void 0 !== k && (g.push(k), h && hb(k.s))
        }
        a.i[c] = g;
        ib(d, !f)
    }
    b = h || e;
    e = gb(g);
    b && !e && (Object.isFrozen(g) && (a.i[c] = g = g.slice()), hb(g), Object.freeze(g));
    !b && e && (a.i[c] = g = g.slice());
    return g
}

function Fb(a, b, c, d = !1) {
    const e = B(a);
    b = Eb(a, b, c, d, e);
    a = Ab(a, c, d);
    if (!(c = e) && (c = a)) {
        if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
        c = !(db(a) & 8)
    }
    if (c) {
        for (c = 0; c < b.length; c++)(d = b[c]) && B(d) && !e && (b[c] = b[c].ka(Fa), a[c] = b[c].s);
        ib(a, !0)
    }
    return b
}

function E(a, b, c, d) {
    mb(a);
    a.i || (a.i = {});
    b = null != d ? rb(d, b).s : d;
    a.i[c] = d;
    D(a, c, b)
}

function F(a, b, c, d, e) {
    mb(a);
    a.i || (a.i = {});
    b = null != e ? rb(e, b).s : e;
    a.i[c] = e;
    Bb(a, c, d, b)
}

function H(a, b, c, d) {
    mb(a);
    const e = Eb(a, c, b, void 0, !1);
    c = null != d ? rb(d, c) : new c;
    a = Ab(a, b);
    e.push(c);
    a.push(c.s);
    c.J(Fa) && ib(a, !1);
    return c
}

function Gb(a, b) {
    a = C(a, b);
    return null == a ? "" : a
};

function Hb(a) {
    kb = !0;
    try {
        return JSON.stringify(a.toJSON(), Ib)
    } finally {
        kb = !1
    }
}
var Mb = class {
    constructor(a, b, c) {
        a || (a = Jb);
        Jb = null;
        var d = this.constructor.i;
        a || (a = d ? [d] : []);
        this.K = (d ? 0 : -1) - (this.constructor.j || 0);
        this.i = void 0;
        this.s = a;
        a: {
            d = this.s.length;a = d - 1;
            if (d && (d = this.s[a], jb(d))) {
                this.l = a - this.K;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.K), this.j = void 0) : this.l = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.l) a += this.K, (d = this.s[a]) ? Array.isArray(d) && fb(d) : this.s[a] = lb;
                else {
                    d = zb(this);
                    let e = d[a];
                    e ? Array.isArray(e) && fb(e) : d[a] = lb
                }
    }
    toJSON() {
        const a =
            Kb(this.s);
        return kb ? a : ub(a, yb)
    }
    clone() {
        var a = ub(this.s);
        Jb = a;
        a = new this.constructor(a);
        Jb = null;
        Lb(a, this);
        return a
    }
    isMutable(a) {
        Ga(a);
        return !B(this)
    }
    J(a) {
        Ga(a);
        return B(this)
    }
};

function Ib(a, b) {
    return tb(b)
}

function Kb(a) {
    let b, c = a.length,
        d = !1;
    for (let g = a.length; g--;) {
        let h = a[g];
        if (Array.isArray(h)) {
            var e = h;
            Array.isArray(h) && eb(h) && !h.length ? h = null : h = Kb(h);
            h != e && (d = !0)
        } else if (g === a.length - 1 && jb(h)) {
            a: {
                var f = h;e = {};
                let k = !1;
                for (let l in f) {
                    let m = f[l];
                    if (Array.isArray(m)) {
                        let p = m;
                        Array.isArray(m) && eb(m) && !m.length ? m = null : m = Kb(m);
                        m != p && (k = !0)
                    }
                    null != m ? e[l] = m : k = !0
                }
                if (k) {
                    for (let l in e) {
                        f = e;
                        break a
                    }
                    f = null
                }
            }
            f != h && (d = !0);c--;
            continue
        }
        null == h && c == g + 1 ? (d = !0, c--) : d && (b || (b = a.slice(0, c)), b[g] = h)
    }
    if (!d) return a;
    b || (b = a.slice(0, c));
    f && b.push(f);
    return b
}

function Lb(a, b) {
    b.M && (a.M = b.M.slice());
    const c = b.i;
    if (c) {
        b = b.j;
        for (let f in c) {
            const g = c[f];
            if (g) {
                var d = !(!b || !b[f]),
                    e = +f;
                if (Array.isArray(g)) {
                    if (g.length)
                        for (d = Fb(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) Lb(d[e], g[e])
                } else(d = Db(a, g.constructor, e, void 0, d)) && Lb(d, g)
            }
        }
    }
}
let Jb;

function Nb(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function Ob() {
    return Error("Failed to read varint, encoding is invalid.")
}

function Pb(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function Qb(a) {
    if ("string" === typeof a) return {
        buffer: Sa(a),
        J: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        J: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === ab) {
        Za(Xa);
        var b = a.S;
        b = null == b || Va(b) ? b : "string" === typeof b ? Sa(b) : null;
        return {
            buffer: (null == b ? b : a.S = b) || Wa || (Wa = new Uint8Array(0)),
            J: !0
        }
    }
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        J: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
const Rb = "function" === typeof Uint8Array.prototype.slice;

function Sb(a, b) {
    a.i = b;
    if (b > a.j) throw Pb(a.j, b);
}

function Tb(a) {
    const b = a.l;
    let c = a.i,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Ob();
    Sb(a, c);
    return e
}

function Ub(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.i,
        d = c + b;
    if (d > a.j) throw Pb(b, a.j - c);
    a.i = d;
    return c
}
var Vb = class {
        constructor(a) {
            this.l = null;
            this.o = !1;
            this.i = this.j = this.m = 0;
            this.init(a, void 0, void 0, void 0)
        }
        init(a, b, c, {
            aa: d = !1
        } = {}) {
            this.aa = d;
            a && (a = Qb(a), this.l = a.buffer, this.o = a.J, this.m = b || 0, this.j = void 0 !== c ? this.m + c : this.l.length, this.i = this.m)
        }
        clear() {
            this.l = null;
            this.o = !1;
            this.i = this.j = this.m = 0;
            this.aa = !1
        }
        reset() {
            this.i = this.m
        }
        advance(a) {
            Sb(this, this.i + a)
        }
    },
    Wb = [];

function Xb(a) {
    var b = a.i;
    if (b.i == b.j) return !1;
    a.l = a.i.i;
    var c = Tb(a.i) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Nb(c, a.l);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.l})`);
    a.m = b;
    a.j = c;
    return !0
}

function Yb(a) {
    switch (a.j) {
        case 0:
            if (0 != a.j) Yb(a);
            else a: {
                a = a.i;
                var b = a.i;
                const c = b + 10,
                    d = a.l;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        Sb(a, b);
                        break a
                    }
                throw Ob();
            }
            break;
        case 1:
            a.i.advance(8);
            break;
        case 2:
            2 != a.j ? Yb(a) : (b = Tb(a.i) >>> 0, a.i.advance(b));
            break;
        case 5:
            a.i.advance(4);
            break;
        case 3:
            b = a.m;
            do {
                if (!Xb(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.j) {
                    if (a.m != b) throw Error("Unmatched end-group tag");
                    break
                }
                Yb(a)
            } while (1);
            break;
        default:
            throw Nb(a.j, a.l);
    }
}
var Zb = class {
        constructor(a) {
            if (Wb.length) {
                const b = Wb.pop();
                b.init(a, void 0, void 0, void 0);
                a = b
            } else a = new Vb(a);
            this.i = a;
            this.l = this.i.i;
            this.j = this.m = -1;
            ({
                U: a = !1
            } = {});
            this.U = a
        }
        reset() {
            this.i.reset();
            this.l = this.i.i;
            this.j = this.m = -1
        }
        advance(a) {
            this.i.advance(a)
        }
    },
    $b = [];
var ac = class extends Mb {
    ka() {
        return this
    }
};
nb && Object.defineProperties(ac, {
    [Symbol.hasInstance]: ob(() => {
        throw Error("Cannot perform instanceof checks for MutableMessage");
    })
});
const bc = Symbol();

function cc(a, b, c) {
    return a[bc] || (a[bc] = (d, e) => b(d, e, c))
}

function dc(a) {
    let b = a[bc];
    if (!b) {
        const c = ec(a);
        b = (d, e) => fc(d, e, c);
        a[bc] = b
    }
    return b
}

function gc(a) {
    var b = a.tb;
    if (b) return dc(b);
    if (b = a.Cb) return cc(a.za.ba, b, a.Bb)
}

function hc(a) {
    const b = gc(a),
        c = a.za,
        d = a.Hb.X;
    return b ? (e, f) => d(e, f, c, b) : (e, f) => d(e, f, c)
}

function ic(a, b) {
    let c = a[b];
    "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
    return Array.isArray(c) && (jc in c || kc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
}
const kc = Symbol(),
    jc = Symbol();

function lc(a, b) {
    a[0] = b
}

function mc(a, b, c, d) {
    const e = c.X;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}

function nc(a, b, c, d, e) {
    const f = c.X,
        g = dc(d),
        h = ec(d).ba;
    a[b] = (k, l, m) => f(k, l, m, h, g, e)
}

function oc(a, b, c, d, e, f, g) {
    const h = c.X,
        k = cc(d, e, f);
    a[b] = (l, m, p) => h(l, m, p, d, k, g)
}

function ec(a) {
    var b = a[jc];
    if (b) return b;
    b = a[jc] = {};
    var c = lc,
        d = mc,
        e = nc,
        f = oc;
    b.ba = a[0];
    let g = 1;
    if (a.length > g && "number" !== typeof a[g]) {
        var h = a[g++];
        c(b, h)
    }
    for (; g < a.length;) {
        c = a[g++];
        for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
        h = a[g++];
        k -= g;
        switch (k) {
            case 0:
                d(b, c, h);
                break;
            case 1:
                (k = ic(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                break;
            case 2:
                k = b;
                var l = g++;
                l = ic(a, l);
                e(k, c, h, l, a[g++]);
                break;
            case 3:
                f(b, c, h, a[g++], a[g++], a[g++]);
                break;
            case 4:
                f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                break;
            default:
                throw Error("unexpected number of binary field arguments: " +
                    k);
        }
    }
    jc in a && kc in a && (a.length = 0);
    return b
}

function fc(a, b, c) {
    for (; Xb(b) && 4 != b.j;) {
        var d = b.m,
            e = c[d];
        if (!e) {
            var f = c[0];
            f && (f = f[d]) && (e = c[d] = hc(f))
        }
        if (!e || !e(b, a, d))
            if (f = b, d = a, e = f.l, Yb(f), !f.U) {
                var g = f.i.i - e;
                f.i.i = e;
                a: {
                    f = f.i;e = g;
                    if (0 == e) {
                        e = $a();
                        break a
                    }
                    const h = Ub(f, e);f.aa && f.o ? e = f.l.subarray(h, h + e) : (f = f.l, g = h, e = h + e, e = g === e ? Wa || (Wa = new Uint8Array(0)) : Rb ? f.slice(g, e) : new Uint8Array(f.subarray(g, e)));e = 0 == e.length ? $a() : new ab(e, Xa)
                }(f = d.M) ? f.push(e) : d.M = [e]
            }
    }
    return a
}

function pc(a, b) {
    return {
        X: a,
        Ob: b
    }
}
var qc = pc(function(a, b, c) {
        if (2 !== a.j) return !1;
        var d = Tb(a.i) >>> 0;
        a = a.i;
        var e = Ub(a, d);
        a = a.l;
        if (Ma) {
            var f = a,
                g;
            (g = La) || (g = La = new TextDecoder("utf-8", {
                fatal: !0
            }));
            a = e + d;
            f = 0 === e && a === f.length ? f : f.subarray(e, a);
            try {
                var h = g.decode(f)
            } catch (l) {
                if (void 0 === Ka) {
                    try {
                        g.decode(new Uint8Array([128]))
                    } catch (m) {}
                    try {
                        g.decode(new Uint8Array([97])), Ka = !0
                    } catch (m) {
                        Ka = !1
                    }
                }!Ka && (La = void 0);
                throw l;
            }
        } else {
            h = e;
            d = h + d;
            e = [];
            let l = null;
            let m;
            for (; h < d;) {
                var k = a[h++];
                128 > k ? e.push(k) : 224 > k ? h >= d ? Ia() : (m = a[h++], 194 > k || 128 !== (m & 192) ?
                    (h--, Ia()) : e.push((k & 31) << 6 | m & 63)) : 240 > k ? h >= d - 1 ? Ia() : (m = a[h++], 128 !== (m & 192) || 224 === k && 160 > m || 237 === k && 160 <= m || 128 !== ((f = a[h++]) & 192) ? (h--, Ia()) : e.push((k & 15) << 12 | (m & 63) << 6 | f & 63)) : 244 >= k ? h >= d - 2 ? Ia() : (m = a[h++], 128 !== (m & 192) || 0 !== (k << 28) + (m - 144) >> 30 || 128 !== ((f = a[h++]) & 192) || 128 !== ((g = a[h++]) & 192) ? (h--, Ia()) : (k = (k & 7) << 18 | (m & 63) << 12 | (f & 63) << 6 | g & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : Ia();
                8192 <= e.length && (l = Ja(l, e), e.length = 0)
            }
            h = Ja(l, e)
        }
        D(b, c, h);
        return !0
    }, function(a, b, c) {
        a.j(c, C(b, c))
    }),
    rc = pc(function(a, b, c, d, e) {
        if (2 !== a.j) return !1;
        b = H(b, c, d);
        c = a.i.j;
        d = Tb(a.i) >>> 0;
        const f = a.i.i + d;
        let g = f - c;
        0 >= g && (a.i.j = f, e(b, a, void 0, void 0, void 0), g = f - a.i.i);
        if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${d} bytes, instead read ${d-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
        a.i.i = f;
        a.i.j = c;
        return !0
    }, function(a, b, c, d, e) {
        a.i(c, Fb(b, d, c), e)
    });

function sc(a, b, c, d, e, f) {
    if (a = a.i && a.i[c])
        if (Array.isArray(a)) {
            f = f.N ? fb(a.slice()) : a;
            e = 0 < f.length ? f[0].constructor : void 0;
            mb(b);
            if (null != f) {
                d = fb([]);
                a = !1;
                for (let g = 0; g < f.length; g++) d[g] = rb(f[g], e).s, a = a || gb(d[g]);
                b.i || (b.i = {});
                b.i[c] = f;
                ib(d, !a)
            } else b.i && (b.i[c] = void 0), d = lb;
            D(b, c, d)
        } else E(b, a.constructor, c, a);
    else Ua && d instanceof Uint8Array ? e = d.length ? new ab(new Uint8Array(d), Xa) : $a() : (Array.isArray(d) && (e ? hb(d) : eb(d) && f.N && (d = d.slice())), e = d), D(b, c, e)
};
class J extends ac {
    ka(a) {
        Ga(a);
        if (B(this)) {
            ({
                N: a
            } = {
                N: !0
            });
            a = {
                N: a
            };
            const c = B(this);
            if (c && !a.N) throw Error("copyRepeatedFields must be true for frozen messages");
            const d = new this.constructor;
            this.M && (d.M = this.M.slice());
            const e = this.s;
            for (let f = 0; f < e.length; f++) {
                const g = e[f];
                if (f === e.length - 1 && jb(g))
                    for (b in g) {
                        const h = +b;
                        Number.isNaN(h) ? zb(d)[b] = g[b] : sc(this, d, h, g[b], c, a)
                    } else sc(this, d, f - this.K, g, c, a)
            }
            var b = d
        } else b = this;
        return b
    }
}
nb && Object.defineProperties(J, {
    [Symbol.hasInstance]: ob(Object[Symbol.hasInstance])
});
xa("csi.gstatic.com");
xa("googleads.g.doubleclick.net");
xa("partner.googleadservices.com");
xa("pubads.g.doubleclick.net");
xa("securepubads.g.doubleclick.net");
xa("tpc.googlesyndication.com");
/*

 SPDX-License-Identifier: Apache-2.0
*/
function tc(a) {
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
var uc = "client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    vc = [...uc, "client_dev_set_cookie"];

function wc() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        m = l = 0
    }

    function b(p) {
        for (var t = g, n = 0; 64 > n; n += 4) t[n / 4] = p[n] << 24 | p[n + 1] << 16 | p[n + 2] << 8 | p[n + 3];
        for (n = 16; 80 > n; n++) p = t[n - 3] ^ t[n - 8] ^ t[n - 14] ^ t[n - 16], t[n] = (p << 1 | p >>> 31) & 4294967295;
        p = e[0];
        var x = e[1],
            z = e[2],
            G = e[3],
            Ha = e[4];
        for (n = 0; 80 > n; n++) {
            if (40 > n)
                if (20 > n) {
                    var I = G ^ x & (z ^ G);
                    var aa = 1518500249
                } else I = x ^ z ^ G, aa = 1859775393;
            else 60 > n ? (I = x & z | G & (x | z), aa = 2400959708) : (I = x ^ z ^ G, aa = 3395469782);
            I = ((p << 5 | p >>> 27) & 4294967295) + I + Ha + aa + t[n] & 4294967295;
            Ha = G;
            G = z;
            z = (x << 30 | x >>> 2) & 4294967295;
            x = p;
            p = I
        }
        e[0] = e[0] + p & 4294967295;
        e[1] = e[1] + x & 4294967295;
        e[2] = e[2] + z & 4294967295;
        e[3] = e[3] + G & 4294967295;
        e[4] = e[4] + Ha & 4294967295
    }

    function c(p, t) {
        if ("string" === typeof p) {
            p = unescape(encodeURIComponent(p));
            for (var n = [], x = 0, z = p.length; x < z; ++x) n.push(p.charCodeAt(x));
            p = n
        }
        t || (t = p.length);
        n = 0;
        if (0 == l)
            for (; n + 64 < t;) b(p.slice(n, n + 64)), n += 64, m += 64;
        for (; n < t;)
            if (f[l++] = p[n++], m++, 64 == l)
                for (l = 0, b(f); n + 64 < t;) b(p.slice(n, n + 64)), n += 64, m += 64
    }

    function d() {
        var p = [],
            t = 8 * m;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var n = 63; 56 <= n; n--) f[n] = t & 255, t >>>= 8;
        b(f);
        for (n = t = 0; 5 > n; n++)
            for (var x = 24; 0 <= x; x -= 8) p[t++] = e[n] >> x & 255;
        return p
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, m;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        xa: function() {
            for (var p = d(), t = "", n = 0; n < p.length; n++) t += "0123456789ABCDEF".charAt(Math.floor(p[n] / 16)) + "0123456789ABCDEF".charAt(p[n] % 16);
            return t
        }
    }
};

function xc(a, b, c) {
    var d = String(u.location.href);
    return d && a && b ? [b, yc(tc(d), a, c || null)].join(" ") : null
}

function yc(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], oa(d, function(h) {
        e.push(h)
    }), zc(e.join(" "));
    var f = [],
        g = [];
    oa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    oa(d, function(h) {
        e.push(h)
    });
    a = zc(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function zc(a) {
    var b = wc();
    b.update(a);
    return b.xa().toLowerCase()
};
const Ac = {};

function Bc() {
    this.i = document || {
        cookie: ""
    }
}
q = Bc.prototype;
q.isEnabled = function() {
    if (!u.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        sa: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
q.set = function(a, b, c) {
    let d;
    var e = !1;
    let f;
    if ("object" === typeof c) {
        f = c.Lb;
        e = c.Mb || !1;
        d = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.sa
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    c = d ? ";domain=" + d : "";
    g = g ? ";path=" + g : "";
    e = e ? ";secure" : "";
    h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
    this.i.cookie = a + "=" + b + c + g + h + e + (null != f ? ";samesite=" +
        f : "")
};
q.get = function(a, b) {
    const c = a + "=",
        d = (this.i.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = za(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
q.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        sa: 0,
        path: b,
        domain: c
    });
    return d
};
q.isEmpty = function() {
    return !this.i.cookie
};
q.clear = function() {
    var a = (this.i.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = za(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function Cc() {
    return !!Ac.FPA_SAMESITE_PHASE2_MOD || !1
}

function Dc(a, b, c, d) {
    (a = u[a]) || (a = (new Bc).get(b));
    return a ? xc(a, c, d) : null
}

function Ec() {
    var a = [],
        b = tc(String(u.location.href));
    const c = [];
    var d = u.__SAPISID || u.__APISID || u.__3PSAPISID || u.__OVERRIDE_SID;
    Cc() && (d = d || u.__1PSAPISID);
    if (d) var e = !0;
    else e = new Bc, d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"), Cc() && (d = d || e.get("__Secure-1PAPISID")), e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? u.__SAPISID : u.__APISID, d || (d = new Bc, d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
        (e = d ? xc(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e), b && Cc() && ((b = Dc("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = Dc("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
};

function Fc() {
    this.l = this.l;
    this.m = this.m
}
Fc.prototype.l = !1;
Fc.prototype.dispose = function() {
    this.l || (this.l = !0, this.ca())
};
Fc.prototype.ca = function() {
    if (this.m)
        for (; this.m.length;) this.m.shift()()
};

function Gc(a) {
    var b = v("window.location.href");
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
        var e = a.fileName || a.filename || a.sourceURL || u.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Hc(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Ic[c]) c = Ic[c];
                else {
                    c = String(c);
                    if (!Ic[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Ic[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Ic[c]
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

function Hc(a, b) {
    b || (b = {});
    b[Jc(a)] = !0;
    var c = a.stack || "";
    (a = a.wa) && !b[Jc(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Hc(a, b));
    return c
}

function Jc(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Ic = {};

function Kc(a, b) {
    a.m(b);
    100 > a.j && (a.j++, b.next = a.i, a.i = b)
}
class Lc {
    constructor(a, b) {
        this.l = a;
        this.m = b;
        this.j = 0;
        this.i = null
    }
    get() {
        let a;
        0 < this.j ? (this.j--, a = this.i, this.i = a.next, a.next = null) : a = this.l();
        return a
    }
};
class Mc {
    constructor() {
        this.j = this.i = null
    }
    add(a, b) {
        const c = Nc.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.i = c;
        this.j = c
    }
    remove() {
        let a = null;
        this.i && (a = this.i, this.i = this.i.next, this.i || (this.j = null), a.next = null);
        return a
    }
}
var Nc = new Lc(() => new Oc, a => a.reset());
class Oc {
    constructor() {
        this.next = this.scope = this.i = null
    }
    set(a, b) {
        this.i = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.i = null
    }
};
let Pc, Qc = !1,
    Rc = new Mc,
    Tc = (a, b) => {
        Pc || Sc();
        Qc || (Pc(), Qc = !0);
        Rc.add(a, b)
    },
    Sc = () => {
        const a = u.Promise.resolve(void 0);
        Pc = () => {
            a.then(Uc)
        }
    };
var Uc = () => {
    let a;
    for (; a = Rc.remove();) {
        try {
            a.i.call(a.scope)
        } catch (b) {
            pb(b)
        }
        Kc(Nc, a)
    }
    Qc = !1
};
class Vc {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.reject = b
        })
    }
};

function K(a) {
    this.i = 0;
    this.D = void 0;
    this.m = this.j = this.l = null;
    this.o = this.u = !1;
    if (a != na) try {
        var b = this;
        a.call(void 0, function(c) {
            Wc(b, 2, c)
        }, function(c) {
            Wc(b, 3, c)
        })
    } catch (c) {
        Wc(this, 3, c)
    }
}

function Xc() {
    this.next = this.context = this.onRejected = this.j = this.i = null;
    this.l = !1
}
Xc.prototype.reset = function() {
    this.context = this.onRejected = this.j = this.i = null;
    this.l = !1
};
var Yc = new Lc(function() {
    return new Xc
}, function(a) {
    a.reset()
});

function Zc(a, b, c) {
    var d = Yc.get();
    d.j = a;
    d.onRejected = b;
    d.context = c;
    return d
}

function $c(a) {
    if (a instanceof K) return a;
    var b = new K(na);
    Wc(b, 2, a);
    return b
}
K.prototype.then = function(a, b, c) {
    return ad(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
K.prototype.$goog_Thenable = !0;
q = K.prototype;
q.Ma = function(a, b) {
    return ad(this, null, a, b)
};
q.catch = K.prototype.Ma;
q.cancel = function(a) {
    if (0 == this.i) {
        var b = new bd(a);
        Tc(function() {
            cd(this, b)
        }, this)
    }
};

function cd(a, b) {
    if (0 == a.i)
        if (a.l) {
            var c = a.l;
            if (c.j) {
                for (var d = 0, e = null, f = null, g = c.j; g && (g.l || (d++, g.i == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.i && 1 == d ? cd(c, b) : (f ? (d = f, d.next == c.m && (c.m = d), d.next = d.next.next) : dd(c), ed(c, e, 3, b)))
            }
            a.l = null
        } else Wc(a, 3, b)
}

function fd(a, b) {
    a.j || 2 != a.i && 3 != a.i || gd(a);
    a.m ? a.m.next = b : a.j = b;
    a.m = b
}

function ad(a, b, c, d) {
    var e = Zc(null, null, null);
    e.i = new K(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof bd ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.i.l = a;
    fd(a, e);
    return e.i
}
q.Na = function(a) {
    this.i = 0;
    Wc(this, 2, a)
};
q.Oa = function(a) {
    this.i = 0;
    Wc(this, 3, a)
};

function Wc(a, b, c) {
    if (0 == a.i) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.i = 1;
        a: {
            var d = c,
                e = a.Na,
                f = a.Oa;
            if (d instanceof K) {
                fd(d, Zc(e || na, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            hd(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.D = c, a.i = b, a.l = null, gd(a), 3 != b || c instanceof bd || id(a, c))
    }
}

function hd(a, b, c, d, e) {
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

function gd(a) {
    a.u || (a.u = !0, Tc(a.ya, a))
}

function dd(a) {
    var b = null;
    a.j && (b = a.j, a.j = b.next, b.next = null);
    a.j || (a.m = null);
    return b
}
q.ya = function() {
    for (var a; a = dd(this);) ed(this, a, this.i, this.D);
    this.u = !1
};

function ed(a, b, c, d) {
    if (3 == c && b.onRejected && !b.l)
        for (; a && a.o; a = a.l) a.o = !1;
    if (b.i) b.i.l = null, jd(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : jd(b, c, d)
    } catch (e) {
        kd.call(null, e)
    }
    Kc(Yc, b)
}

function jd(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function id(a, b) {
    a.o = !0;
    Tc(function() {
        a.o && kd.call(null, b)
    })
}
var kd = pb;

function bd(a) {
    ma.call(this, a)
}
la(bd, ma);
bd.prototype.name = "cancel";

function L(a) {
    Fc.call(this);
    this.D = 1;
    this.o = [];
    this.u = 0;
    this.i = [];
    this.j = {};
    this.R = !!a
}
la(L, Fc);
q = L.prototype;
q.va = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.D;
    this.i[e] = a;
    this.i[e + 1] = b;
    this.i[e + 2] = c;
    this.D = e + 3;
    d.push(e);
    return e
};
q.la = function(a) {
    var b = this.i[a];
    if (b) {
        var c = this.j[b];
        0 != this.u ? (this.o.push(a), this.i[a + 1] = () => {}) : (c && qa(c, a), delete this.i[a], delete this.i[a + 1], delete this.i[a + 2])
    }
    return !!b
};
q.ha = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.R)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                ld(this.i[g + 1], this.i[g + 2], d)
            } else {
                this.u++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.i[g + 1].apply(this.i[g + 2], d)
                } finally {
                    if (this.u--, 0 < this.o.length && 0 == this.u)
                        for (; c = this.o.pop();) this.la(c)
                }
            }
        return 0 != e
    }
    return !1
};

function ld(a, b, c) {
    Tc(function() {
        a.apply(b, c)
    })
}
q.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.la, this), delete this.j[a])
    } else this.i.length = 0, this.j = {}
};
q.ca = function() {
    L.Ja.ca.call(this);
    this.clear();
    this.o.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var md = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var nd = class extends J {
    constructor(a) {
        super(a)
    }
};
var pd = class extends J {
        constructor(a) {
            super(a)
        }
        getKey() {
            return C(this, 1)
        }
        da() {
            return C(this, 2 === Cb(this, od) ? 2 : -1)
        }
        setValue(a) {
            return Bb(this, 2, od, a)
        }
    },
    od = [2, 3, 4, 5, 6];
var qd = class extends J {
    constructor(a) {
        super(a)
    }
};
var sd = class extends J {
        constructor(a) {
            super(a, -1, rd)
        }
    },
    rd = [9, 66, 24, 32, 86, 100, 101];
var ud = class extends J {
        constructor(a) {
            super(a, -1, td)
        }
    },
    td = [15, 26, 28];
var vd = class extends J {
    constructor(a) {
        super(a)
    }
    setToken(a) {
        return D(this, 2, a)
    }
};
var xd = class extends J {
        constructor(a) {
            super(a, -1, wd)
        }
    },
    wd = [12];
var zd = class extends J {
        constructor(a) {
            super(a, -1, yd)
        }
    },
    yd = [12];
var Bd = class extends J {
        constructor(a) {
            super(a, -1, Ad)
        }
    },
    Cd = class extends J {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Gb(this, 1)
        }
        da() {
            return Gb(this, 2)
        }
        setValue(a) {
            return D(this, 2, a)
        }
    },
    Ad = [4, 5];
var Dd = class extends J {
    constructor(a) {
        super(a)
    }
};
var Ed = class extends J {
        constructor(a) {
            super(a)
        }
    },
    Fd = [2, 3, 4];
var Gd = class extends J {
    constructor(a) {
        super(a)
    }
};
var Hd = class extends J {
    constructor(a) {
        super(a)
    }
};
var Id = class extends J {
    constructor(a) {
        super(a)
    }
};
var Kd = class extends J {
        constructor(a) {
            super(a, -1, Jd)
        }
    },
    Jd = [10, 17];
var Ld = class extends J {
    constructor(a) {
        super(a)
    }
};
var M = class extends J {
    constructor(a) {
        super(a)
    }
};
var Md = class extends J {
    constructor(a) {
        super(a)
    }
};
var Od = class extends J {
        constructor(a) {
            super(a, -1, Nd)
        }
    },
    Nd = [4];

function Pd(a, b) {
    E(a, M, 1, b)
}
var Qd = class extends J {
    constructor(a) {
        super(a)
    }
    B(a) {
        D(this, 2, a)
    }
};

function Rd(a, b) {
    E(a, M, 1, b)
}
var Sd = class extends J {
    constructor(a) {
        super(a)
    }
};

function Td(a, b) {
    E(a, M, 2, b)
}
var Vd = class extends J {
        constructor(a) {
            super(a, -1, Ud)
        }
        B(a) {
            D(this, 1, a)
        }
    },
    Ud = [3];
var Wd = class extends J {
    constructor(a) {
        super(a)
    }
    B(a) {
        D(this, 1, a)
    }
};
var Xd = class extends J {
    constructor(a) {
        super(a)
    }
    B(a) {
        D(this, 1, a)
    }
};
var Yd = class extends J {
    constructor(a) {
        super(a)
    }
    B(a) {
        D(this, 1, a)
    }
};
var Zd = class extends J {
    constructor(a) {
        super(a)
    }
    B(a) {
        D(this, 1, a)
    }
};
var $d = class extends J {
    constructor(a) {
        super(a)
    }
};
var ae = class extends J {
    constructor(a) {
        super(a)
    }
};
var N = class extends J {
        constructor(a) {
            super(a, 432)
        }
    },
    be = [23, 24, 11, 6, 7, 5, 2, 3, 20, 21, 22, 28, 32, 37, 229, 241, 45, 59, 225, 288, 72, 73, 78, 208, 156, 202, 215, 74, 76, 79, 80, 111, 85, 91, 97, 100, 102, 105, 119, 126, 127, 136, 146, 148, 151, 157, 158, 159, 163, 164, 168, 176, 222, 383, 177, 178, 179, 411, 184, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 201, 402, 320, 203, 204, 205, 206, 258, 259, 260, 261, 209, 219, 226, 227, 232, 233, 234, 240, 244, 247, 248, 249, 251, 254, 255, 270, 272, 278, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 321, 323, 324, 328, 330, 331, 332, 334, 337,
        338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 388, 389, 403, 410, 412, 429, 413, 414, 415, 416, 417, 418, 430, 423, 424, 425, 426, 427, 431, 117
    ];
var ce = {
    jb: 0,
    Ta: 1,
    Za: 2,
    ab: 4,
    gb: 8,
    bb: 16,
    cb: 32,
    ib: 64,
    hb: 128,
    Va: 256,
    Xa: 512,
    fb: 1024,
    Wa: 2048,
    Ya: 4096,
    Ua: 8192,
    eb: 16384
};
var de = class extends J {
    constructor(a) {
        super(a)
    }
};
var fe = class extends J {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Bb(this, 1, ee, a)
        }
    },
    ee = [1, 2];
var he = class extends J {
        constructor() {
            super(void 0, -1, ge)
        }
    },
    ge = [3];
var ie = ["notification/convert_endpoint_to_url"],
    je = ["notification/record_interactions"],
    ke = ["notification_registration/set_registration"];
Date.now();
const le = u.window;
let me, ne;
const oe = (null == le ? void 0 : null == (me = le.yt) ? void 0 : me.config_) || (null == le ? void 0 : null == (ne = le.ytcfg) ? void 0 : ne.data_) || {};
w("yt.config_", oe);

function O(...a) {
    a = arguments;
    1 < a.length ? oe[a[0]] = a[1] : 1 === a.length && Object.assign(oe, a[0])
}

function P(a, b) {
    return a in oe ? oe[a] : b
}

function pe() {
    return P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function qe() {
    const a = oe.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};

function Q(a) {
    a = re(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function se(a, b) {
    a = re(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function te() {
    return P("EXPERIMENTS_TOKEN", "")
}

function re(a) {
    const b = P("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : P("EXPERIMENT_FLAGS", {})[a]
}

function ue() {
    const a = [],
        b = P("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c in b) a.push({
        key: c,
        value: String(b[c])
    });
    c = P("EXPERIMENT_FLAGS", {});
    for (let d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
const ve = [];

function we(a) {
    ve.forEach(b => b(a))
}

function xe(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            ye(b)
        }
    } : a
}

function ye(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = P("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), O("ERRORS", b));
    we(a)
}

function ze(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = P("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), O("ERRORS", b))
};
const Ae = /^[\w.]*$/,
    Be = {
        q: !0,
        search_query: !0
    };

function Ce(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = De(h[0] || ""),
                l = De(h[1] || "");
            k in c ? Array.isArray(c[k]) ? ra(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Ce);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Ee == l ? "unchanged" : l
            }];
            Be.hasOwnProperty(e) || ze(d)
        }
    }
    return c
}
const Ee = String(Ce);

function Fe(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Ce(a, "&")
}

function Ge(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Fe(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Ea(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function He(a) {
    if (!b) var b = window.location.href;
    const c = a.match(A)[1] || null,
        d = Ca(a.match(A)[3] || null);
    c && d ? (a = a.match(A), b = b.match(A), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ca(b.match(A)[3] || null) == d && (Number(b.match(A)[4] || null) || null) == (Number(a.match(A)[4] || null) || null) : !0;
    return a
}

function De(a) {
    return a && a.match(Ae) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function Ie(a, b) {
    "function" === typeof a && (a = xe(a));
    return window.setTimeout(a, b)
};
[...uc];
let Je = !1;

function Ke(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Le(a, b);
    const d = Me(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || u;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = m => {
                    m = m || {};
                    k ? b.onSuccess && b.onSuccess.call(e, m, h) : b.onError && b.onError.call(e, m, h);
                    b.onFinish && b.onFinish.call(e, m, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = Ie(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || u))
    }, a))
}

function Le(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = P("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Ge(a, b || {}, !0);
    return a
}

function Me(a, b) {
    const c = P("XSRF_FIELD_NAME"),
        d = P("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    var g = P("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Ca(a.match(A)[3] || null) && !b.withCredentials && Ca(a.match(A)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    f && "string" === typeof e && (e = Fe(e), va(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) :
        Ea(e));
    f = e || f && !sa(f);
    !Je && f && "POST" != b.method && (Je = !0, ye(Error("AJAX request with postData should use POST")));
    return e
};
w("ytglobal.prefsUserPrefsPrefs_", v("ytglobal.prefsUserPrefsPrefs_") || {});

function Ne() {
    return "INNERTUBE_API_KEY" in oe && "INNERTUBE_API_VERSION" in oe
}

function Oe() {
    return {
        innertubeApiKey: P("INNERTUBE_API_KEY"),
        innertubeApiVersion: P("INNERTUBE_API_VERSION"),
        ea: P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Ba: P("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ca: P("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: P("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ra: P("INNERTUBE_CONTEXT_HL"),
        qa: P("INNERTUBE_CONTEXT_GL"),
        Da: P("INNERTUBE_HOST_OVERRIDE") || "",
        Fa: !!P("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ea: !!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: P("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function Pe(a) {
    const b = {
        client: {
            hl: a.ra,
            gl: a.qa,
            clientName: a.Ba,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ea
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = u.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = te();
    "" !== c && (b.client.experimentsToken = c);
    c = ue();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    Qe(a, void 0, b);
    P("DELEGATED_SESSION_ID") && !Q("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: P("DELEGATED_SESSION_ID")
    });
    a = Object;
    c = a.assign;
    var d = b.client,
        e = P("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(Fe(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" === e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function Re(a) {
    const b = new zd,
        c = new sd;
    D(c, 1, a.ra);
    D(c, 2, a.qa);
    D(c, 16, a.Ca);
    D(c, 17, a.innertubeContextClientVersion);
    if (a.ea) {
        var d = a.ea,
            e = new qd;
        d.coldConfigData && D(e, 1, d.coldConfigData);
        d.appInstallData && D(e, 6, d.appInstallData);
        d.coldHashData && D(e, 3, d.coldHashData);
        d.hotHashData && D(e, 5, d.hotHashData);
        E(c, qd, 62, e)
    }(d = u.devicePixelRatio) && 1 != d && D(c, 65, d);
    d = te();
    "" !== d && D(c, 54, d);
    d = ue();
    if (0 < d.length) {
        e = new ud;
        for (let f = 0; f < d.length; f++) {
            const g = new pd;
            D(g, 1, d[f].key);
            g.setValue(d[f].value);
            H(e, 15,
                pd, g)
        }
        E(b, ud, 5, e)
    }
    Qe(a, c);
    P("DELEGATED_SESSION_ID") && !Q("pageid_as_header_web") && (a = new xd, D(a, 3, P("DELEGATED_SESSION_ID")));
    a = P("DEVICE", "");
    for (const [f, g] of Object.entries(Fe(a))) a = f, d = g, "cbrand" === a ? D(c, 12, d) : "cmodel" === a ? D(c, 13, d) : "cbr" === a ? D(c, 87, d) : "cbrver" === a ? D(c, 88, d) : "cos" === a ? D(c, 18, d) : "cosver" === a ? D(c, 19, d) : "cplatform" === a && D(c, 42, d);
    E(b, sd, 1, c);
    return b
}

function Qe(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = Db(b, qd, 62)) ? d : new qd;
            D(c, 6, a.appInstallData);
            E(b, qd, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function Se(a, b, c = {}) {
    let d = {};
    Q("enable_web_eom_visitor_data") && P("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": P("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || P("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    (b = c.rb || P("AUTHORIZATION")) || (a ? b = `Bearer ${v("gapi.auth.getToken")().qb}` : b = Ec());
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = P("SESSION_INDEX", 0), Q("pageid_as_header_web") && (d["X-Goog-PageId"] = P("DELEGATED_SESSION_ID")));
    return d
};
const Te = window;
var R = Te.ytcsi && Te.ytcsi.now ? Te.ytcsi.now : Te.performance && Te.performance.timing && Te.performance.now && Te.performance.timing.navigationStart ? () => Te.performance.timing.navigationStart + Te.performance.now() : () => (new Date).getTime();

function Ue(a, b) {
    Ve(a, 2, b)
}
var We = class {
    i(a) {
        Ve(a, 1)
    }
};

function Ve(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = v("yt.scheduler.instance.addJob");
    d ? d(a, b, c) : void 0 === c ? a() : Ie(a, c || 0)
}
var Xe = class extends We {
    start() {
        const a = v("yt.scheduler.instance.start");
        a && a()
    }
};
Xe.i || (Xe.i = new Xe);
var Ye = Xe.i;
const Ze = [];
let $e, af = !1;

function bf(a) {
    af || ($e ? $e.handleError(a) : (Ze.push({
        type: "ERROR",
        payload: a
    }), 10 < Ze.length && Ze.shift()))
}

function cf(a, b) {
    af || ($e ? $e.V(a, b) : (Ze.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < Ze.length && Ze.shift()))
};
var df = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};

function ef() {
    if (void 0 !== P("DATASYNC_ID")) return P("DATASYNC_ID");
    throw new df("Datasync ID not set", "unknown");
};

function ff(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function gf(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const hf = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    jf = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    kf = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var S = class extends df {
        constructor(a, b = {}, c = hf[a], d = jf[a], e = kf[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.i = e;
            Object.setPrototypeOf(this, S.prototype)
        }
    },
    lf = class extends S {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, hf.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, lf.prototype)
        }
    },
    mf = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, mf.prototype)
        }
    };
const nf = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function of (a, b, c, d) {
    b = gf(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof S) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new S("QUOTA_EXCEEDED", a);
    if (Na && "UnknownError" === e.name) return new S("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof mf) return new S("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && nf.some(f => e.message.includes(f))) return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new S("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Eb: e.name
    })];
    e.level = "WARNING";
    return e
}

function pf(a, b, c) {
    return new S("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function qf(a) {
    if (!a) throw Error();
    throw a;
}

function rf(a) {
    return a
}
var sf = class {
    constructor(a) {
        this.i = a
    }
};

function tf(a) {
    return new uf(new sf((b, c) => {
        a instanceof uf ? a.then(b, c) : b(a)
    }))
}

function vf(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof uf ? wf(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function xf(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof uf ? wf(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function wf(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof uf ? wf(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var uf = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.i = [];
        this.onRejected = [];
        a = a.i;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.i) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.onRejected) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new uf(new sf((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) tf(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static reject(a) {
        return new uf(new sf((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : rf,
            d = null != b ? b : qf;
        return new uf(new sf((e, f) => {
            "PENDING" === this.state.status ? (this.i.push(() => {
                vf(this, this, c, e, f)
            }), this.onRejected.push(() => {
                xf(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? vf(this, this, c, e, f) : "REJECTED" === this.state.status && xf(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function yf(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function zf(a) {
    return new Promise((b, c) => {
        yf(a, b, c)
    })
}

function T(a) {
    return new uf(new sf((b, c) => {
        yf(a, b, c)
    }))
};

function Af(a, b) {
    return new uf(new sf((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function Bf(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            H: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.H ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(R());
            try {
                const m = a.i.transaction(b, e.mode);
                var k = d;
                const p = new Cf(m),
                    t = yield Df(p, k), n = Math.round(R());
                Ef(a, l, n, g, void 0, b.join(), e);
                return t
            } catch (m) {
                k = Math.round(R());
                const p = of (m, a.i.name, b.join(), a.i.version);
                if (p instanceof S && !p.i || g >= f) Ef(a, l, k, g, p, b.join(), e),
                    h = p
            }
        }
        return Promise.reject(h)
    })
}

function Ff(a, b, c) {
    a = a.i.createObjectStore(b, c);
    return new Gf(a)
}

function Hf(a, b, c, d) {
    return Bf(a, [b], {
        mode: "readwrite",
        H: !0
    }, e => {
        e = e.objectStore(b);
        return T(e.i.put(c, d))
    })
}

function Ef(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof S && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && cf("QUOTA_EXCEEDED", {
        dbName: gf(a.i.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof S && "UNKNOWN_ABORT" === e.type && (c -= a.l, 0 > c && c >= Math.pow(2, 31) && (c = 0), cf("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.j = !0), If(a, !1, d, f, b, g.tag), bf(e)) : If(a, !0, d, f, b, g.tag)
}

function If(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    cf("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.j,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Jf = class {
    constructor(a, b) {
        this.i = a;
        this.options = b;
        this.transactionCount = 0;
        this.l = Math.round(R());
        this.j = !1
    }
    add(a, b, c) {
        return Bf(this, [a], {
            mode: "readwrite",
            H: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return Bf(this, [a], {
            mode: "readwrite",
            H: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.i.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return Bf(this, [a], {
            mode: "readonly",
            H: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return Bf(this, [a], {
            mode: "readwrite",
            H: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return Bf(this, [a], {
            mode: "readonly",
            H: !0
        }, c => c.objectStore(a).get(b))
    }
    objectStoreNames() {
        return Array.from(this.i.objectStoreNames)
    }
};

function Kf(a, b, c) {
    a = a.i.openCursor(b.query, b.direction);
    return Lf(a).then(d => Af(d, c))
}

function Mf(a, b) {
    return Kf(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var Gf = class {
    constructor(a) {
        this.i = a
    }
    add(a, b) {
        return T(this.i.add(a, b))
    }
    autoIncrement() {
        return this.i.autoIncrement
    }
    clear() {
        return T(this.i.clear()).then(() => {})
    }
    count(a) {
        return T(this.i.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Mf(this, a) : T(this.i.delete(a))
    }
    get(a) {
        return T(this.i.get(a))
    }
    index(a) {
        try {
            return new Nf(this.i.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new mf(a, this.i.name);
            throw b;
        }
    }
    keyPath() {
        return this.i.keyPath
    }
};

function Df(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Cf = class {
    constructor(a) {
        this.i = a;
        this.l = new Map;
        this.j = !1;
        this.done = new Promise((b, c) => {
            this.i.addEventListener("complete", () => {
                b()
            });
            this.i.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.i.error)
            });
            this.i.addEventListener("abort", () => {
                var d = this.i.error;
                if (d) c(d);
                else if (!this.j) {
                    d = S;
                    var e = this.i.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.i.db.name,
                        mode: this.i.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.i.abort();
        this.j = !0;
        throw new S("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.i.objectStore(a);
        let b = this.l.get(a);
        b || (b = new Gf(a), this.l.set(a, b));
        return b
    }
};

function Of(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.i.openCursor(d, e);
    return Lf(a).then(f => Af(f, c))
}
var Nf = class {
    constructor(a) {
        this.i = a
    }
    count(a) {
        return T(this.i.count(a))
    }
    delete(a) {
        return Of(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return T(this.i.get(a))
    }
    getKey(a) {
        return T(this.i.getKey(a))
    }
    keyPath() {
        return this.i.keyPath
    }
    unique() {
        return this.i.unique
    }
};

function Lf(a) {
    return T(a).then(b => b ? new Pf(a, b) : null)
}
var Pf = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Lf(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Lf(this.request)
    }
    delete() {
        return T(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    da() {
        return this.cursor.value
    }
    update(a) {
        return T(this.cursor.update(a))
    }
};

function Qf(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.blocked,
            h = c.blocking,
            k = c.La,
            l = c.upgrade,
            m = c.closed;
        let p;
        const t = () => {
            p || (p = new Jf(f.result, {
                closed: m
            }));
            return p
        };
        f.addEventListener("upgradeneeded", n => {
            try {
                if (null === n.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                n.dataLoss && "none" !== n.dataLoss && cf("IDB_DATA_CORRUPTED", {
                    reason: n.dataLossMessage || "unknown reason",
                    dbName: gf(a)
                });
                const x = t(),
                    z = new Cf(f.transaction);
                l && l(x, G => n.oldVersion < G && n.newVersion >= G, z);
                z.done.catch(G => {
                    e(G)
                })
            } catch (x) {
                e(x)
            }
        });
        f.addEventListener("success", () => {
            const n = f.result;
            h && n.addEventListener("versionchange", () => {
                h(t())
            });
            n.addEventListener("close", () => {
                cf("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: gf(a),
                    dbVersion: n.version
                });
                k && k()
            });
            d(t())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Rf(a, b, c = {}) {
    return Qf(a, b, c)
}

function Sf(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.blocked;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield zf(c)
        } catch (c) {
            throw of(c, a, "", -1);
        }
    })
};

function Tf(a) {
    return new Promise(b => {
        Ue(() => {
            b()
        }, a)
    })
}

function Uf(a, b) {
    return new S("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function Vf(a) {
    if (!a.m) throw Uf(a);
    if (a.i) return a.i;
    let b;
    const c = () => {
            a.i === b && (a.i = void 0)
        },
        d = {
            blocking: f => {
                f.close()
            },
            closed: c,
            La: c,
            upgrade: a.options.upgrade
        },
        e = () => r(function*() {
            var f, g = null != (f = Error().stack) ? f : "";
            try {
                const k = yield a.l(a.name, a.options.version, d);
                f = k;
                var h = a.options;
                const l = [];
                for (const m of Object.keys(h.P)) {
                    const {
                        T: p,
                        Ib: t = Number.MAX_VALUE
                    } = h.P[m];
                    !(f.i.version >= p) || f.i.version >= t || f.i.objectStoreNames.contains(m) || l.push(m)
                }
                if (0 !== l.length) {
                    const m = Object.keys(a.options.P),
                        p = k.objectStoreNames();
                    if (a.u < se("ytidb_reopen_db_retries", 0)) return a.u++, k.close(), bf(new S("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                        dbName: a.name,
                        expectedObjectStores: m,
                        foundObjectStores: p
                    })), e();
                    if (a.o < se("ytidb_remake_db_retries", 1)) return a.o++, Q("ytidb_remake_db_enable_backoff_delay") && (yield Tf(a.j), a.j *= 2), yield a.delete(), bf(new S("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                        dbName: a.name,
                        expectedObjectStores: m,
                        foundObjectStores: p
                    })), e();
                    throw new lf(p, m);
                }
                return k
            } catch (k) {
                if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k &&
                    "An attempt was made to open a database using a lower version than the existing version." === k.message) {
                    g = yield a.l(a.name, void 0, Object.assign({}, d, {
                        upgrade: void 0
                    }));
                    h = g.i.version;
                    if (void 0 !== a.options.version && h > a.options.version + 1) throw g.close(), a.m = !1, Uf(a, h);
                    return g
                }
                c();
                k instanceof Error && !Q("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                let l;
                throw of(k, a.name, "", null != (l = a.options.version) ? l : -1);
            }
        });
    b = e();
    a.i = b;
    return a.i
}

function Wf(a, b) {
    if (!b) throw pf("openWithToken", gf(a.name));
    return Vf(a)
}
var Xf = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.m = !0;
        this.u = this.o = 0;
        this.j = 500
    }
    l(a, b, c = {}) {
        return Rf(a, b, c)
    }
    delete(a = {}) {
        return Sf(this.name, a)
    }
};
const Yf = new Xf("YtIdbMeta", {
    P: {
        databases: {
            T: 1
        }
    },
    upgrade(a, b) {
        b(1) && Ff(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function Zf(a, b) {
    return r(function*() {
        return Bf(yield Wf(Yf, b), ["databases"], {
            H: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return T(d.i.put(a, void 0)).then(() => {})
            })
        })
    })
}

function $f(a, b) {
    return r(function*() {
        if (a) return (yield Wf(Yf, b)).delete("databases", a)
    })
};
let ag;
const bg = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function cg() {
    return r(function*() {
        return !0
    })
}

function dg() {
    if (void 0 !== ag) return ag;
    af = !0;
    return ag = cg().then(a => {
        af = !1;
        return a
    })
}

function eg() {
    const a = v("ytglobal.idbToken_") || void 0;
    return a ? Promise.resolve(a) : dg().then(b => {
        (b = b ? bg : void 0) && w("ytglobal.idbToken_", b);
        return b
    })
};
new Vc;

function fg(a) {
    try {
        ef();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new S("AUTH_INVALID", {
        dbName: a
    }), bf(a), a;
    b = ef();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function gg(a, b, c, d) {
    return r(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield eg();
        if (!e) throw e = pf("openDbImpl", a, b), Q("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), bf(e), e;
        ff(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : fg(a);
        try {
            return yield Zf(f, e), yield Rf(f.actualName, b, d)
        } catch (g) {
            try {
                yield $f(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function hg(a, b, c = {}) {
    return gg(a, b, !1, c)
}

function ig(a, b, c = {}) {
    return gg(a, b, !0, c)
}

function jg(a, b = {}) {
    return r(function*() {
        const c = yield eg();
        if (c) {
            ff(a);
            var d = fg(a);
            yield Sf(d.actualName, b);
            yield $f(d.actualName, c)
        }
    })
}

function kg(a, b = {}) {
    return r(function*() {
        const c = yield eg();
        c && (ff(a), yield Sf(a, b), yield $f(a, c))
    })
};

function lg(a) {
    this.version = 1;
    this.args = a
};

function mg() {
    var a = ng;
    this.topic = "screen-created";
    this.i = a
}
mg.prototype.toString = function() {
    return this.topic
};
const og = v("ytPubsub2Pubsub2Instance") || new L;
L.prototype.subscribe = L.prototype.va;
L.prototype.unsubscribeByKey = L.prototype.la;
L.prototype.publish = L.prototype.ha;
L.prototype.clear = L.prototype.clear;
w("ytPubsub2Pubsub2Instance", og);
const pg = v("ytPubsub2Pubsub2SubscribedKeys") || {};
w("ytPubsub2Pubsub2SubscribedKeys", pg);
const qg = v("ytPubsub2Pubsub2TopicToKeys") || {};
w("ytPubsub2Pubsub2TopicToKeys", qg);
const rg = v("ytPubsub2Pubsub2IsAsync") || {};
w("ytPubsub2Pubsub2IsAsync", rg);
w("ytPubsub2Pubsub2SkipSubKey", null);

function sg(a) {
    var b = tg;
    const c = ug();
    c && c.publish.call(c, b.toString(), b, a)
}

function vg(a) {
    var b = tg;
    const c = ug();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = v("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (pg[d]) try {
                if (f && b instanceof mg && b != e) try {
                    var h = b.i,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.ta) {
                            const n = new h;
                            h.ta = n.version
                        }
                        var l = h.ta
                    } catch (n) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var m = l.construct; {
                            var p = k.args;
                            const n = p.length;
                            if (0 < n) {
                                const x = Array(n);
                                for (k = 0; k < n; k++) x[k] = p[k];
                                var t = x
                            } else t = []
                        }
                        f = m.call(l, h, t)
                    } catch (n) {
                        throw n.message = "yt.pubsub2.Data.deserialize(): " + n.message, n;
                    }
                } catch (n) {
                    throw n.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + n.message, n;
                }
                a.call(window, f)
            } catch (n) {
                ye(n)
            }
        }, rg[b.toString()] ? v("yt.scheduler.instance") ? Ye.i(g) : Ie(g, 0) : g())
    });
    pg[d] = !0;
    qg[b.toString()] || (qg[b.toString()] = []);
    qg[b.toString()].push(d);
    return d
}

function yg() {
    var a = zg;
    const b = vg(function(c) {
        a.apply(void 0, arguments);
        Ag(b)
    });
    return b
}

function Ag(a) {
    const b = ug();
    b && ("number" === typeof a && (a = [a]), oa(a, c => {
        b.unsubscribeByKey(c);
        delete pg[c]
    }))
}

function ug() {
    return v("ytPubsub2Pubsub2Instance")
};

function Bg(a, b) {
    let c;
    return () => {
        c || (c = new Cg(a, b));
        return c
    }
}
var Cg = class extends Xf {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        ff(a)
    }
    l(a, b, c = {}) {
        return (this.options.ia ? ig : hg)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.ia ? kg : jg)(this.name, a)
    }
};
const Dg = ["client.name", "client.version"];

function Eg(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Dg.includes(b.key) : !1);
    return a
};
var Fg;
Fg = Bg("ServiceWorkerLogsDatabase", {
    P: {
        SWHealthLog: {
            T: 1
        }
    },
    ia: !0,
    upgrade: (a, b) => {
        b(1) && Ff(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).i.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Gg(a, b) {
    return r(function*() {
        var c = yield Wf(Fg(), b), d = P("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Eg(e.clientError));
        e.interface = d;
        return Hf(c, "SWHealthLog", e)
    })
};
const Hg = u.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
    potentialEsfErrorCounter: 0
};
w("ytNetworklessLoggingInitializationOptions", Hg);

function Ig(a) {
    !a.config_ && Ne() && (a.config_ = Oe());
    return !!a.config_
}

function Jg(a, b, c) {
    !P("VISITOR_DATA") && .01 > Math.random() && ze(new df("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!Ig(a)) throw a = new df("innertube xhrclient not ready", "log_event", b, c), ye(a), a;
    const d = {
        headers: c.headers || {},
        method: "POST",
        postParams: b,
        postBody: c.postBody,
        postBodyFormat: c.postBodyFormat || "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (m, p) => {
            if (c.onSuccess) c.onSuccess(p)
        },
        onFetchSuccess: m => {
            if (c.onSuccess) c.onSuccess(m)
        },
        onError: (m, p) => {
            if (c.onError) c.onError(p)
        },
        onFetchError: m => {
            if (c.onError) c.onError(m)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    d.headers["Content-Type"] || (d.headers["Content-Type"] = "application/json");
    b = "";
    var e = a.config_.Da;
    e && (b = e);
    e = Se(a.config_.Fa || !1, b, c);
    Object.assign(d.headers, e);
    (e = d.headers.Authorization) && !b && (d.headers["x-origin"] = window.location.origin);
    const f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.Ea && e;
    h = h && e.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    const k = Ge(`${b}${f}`, g || {}, !0),
        l = () => {
            try {
                Ke(k,
                    d)
            } catch (m) {
                if ("InvalidAccessError" == m.name) ze(Error("An extension is blocking network request."));
                else throw m;
            }
        };
    !Q("use_new_nwl") && v("ytNetworklessLoggingInitializationOptions") && Hg.isNwlInitialized ? dg().then(m => {
        l(m)
    }) : l(!1)
}
class Kg {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Ne() && (this.config_ = Oe())
    }
};
let Lg = 0;
w("ytDomDomGetNextId", v("ytDomDomGetNextId") || (() => ++Lg));
w("ytEventsEventsListeners", u.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", u.ytEventsEventsCounter || {
    count: 0
});

function Mg() {
    const a = v("_lact", window);
    var b;
    null == a ? b = -1 : b = Math.max(Date.now() - a, 0);
    return b
};
u.ytPubsubPubsubInstance || new L;
const Ng = u.window;
Ng.ytExports || (Ng.ytExports = {
    logging: {
        transport: {
            leaderQueueLength: 0,
            leaderChosen: !1
        }
    }
});
const Og = se("initial_gel_batch_timeout", 2E3),
    Pg = Math.pow(2, 16) - 1;
let Qg = !1,
    U = void 0;
class Rg {
    constructor() {
        this.l = this.i = this.j = 0
    }
}
const Sg = new Rg,
    Tg = new Rg;
let Ug = !0;
const Vg = u.ytLoggingTransportGELQueue_ || new Map,
    Wg = new Map,
    Xg = u.ytLoggingTransportGELProtoQueue_ || new Map,
    Yg = u.ytLoggingTransportTokensToCttTargetIds_ || {},
    Zg = u.ytLoggingTransportTokensToJspbCttTargetIds_ || {};

function $g() {
    Q("jspb_with_transport_leader") && !Ng.ytExports.logging.transport.leaderChosen && (Qg = Ng.ytExports.logging.transport.leaderChosen = !0, document.addEventListener("FLUSH_REQUEST", () => {
        ah(void 0, void 0, !0)
    }))
}

function bh(a, b) {
    $g();
    if ("log_event" === a.endpoint) {
        var c = ch(a),
            d = Vg.get(c) || [];
        Vg.set(c, d);
        d.push(a.payload);
        dh(b, d, c)
    }
}

function eh(a, b) {
    $g();
    if ("log_event" === a.endpoint) {
        var c = ch(a, !0);
        if (Q("jspb_with_transport_leader") && Qg) {
            var d = Wg.get(c) || [];
            Wg.set(c, d);
            Ng.ytExports.logging.transport.leaderQueueLength++;
            d.push(a.payload);
            dh(b, d, c, !0)
        } else d = Xg.get(c) || [], Xg.set(c, d), a = a.payload.toJSON(), d.push(a), dh(b, d, c, !0)
    }
}

function dh(a, b, c, d = !1) {
    a && (U = new a);
    a = se("tvhtml5_logging_max_batch") || se("web_logging_max_batch") || 100;
    const e = R(),
        f = d ? Tg.l : Sg.l,
        g = Xg.get(c) || [];
    Q("jspb_with_transport_leader") && (Qg && b.length + g.length >= a || !Qg && Ng.ytExports.logging.transport.leaderQueueLength + b.length >= a) || b.length >= a ? ah({
        writeThenSend: !0
    }, Q("flush_only_full_queue") ? c : void 0, d) : 10 <= e - f && (fh(d), d ? Tg.l = e : Sg.l = e)
}

function gh(a, b) {
    $g();
    if ("log_event" === a.endpoint) {
        var c = ch(a),
            d = new Map;
        d.set(c, [a.payload]);
        b && (U = new b);
        return new K((e, f) => {
            U && Ig(U) ? hh(d, e, f, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function ih(a, b) {
    $g();
    if ("log_event" === a.endpoint) {
        var c = ch(a, !0),
            d = new Map,
            e = new Map;
        Q("jspb_with_transport_leader") && Qg ? e.set(c, [a.payload]) : d.set(c, [a.payload.toJSON()]);
        b && (U = new b);
        return new K(f => {
            U && Ig(U) ? jh(d, e, f, {
                bypassNetworkless: !0
            }, !0) : f()
        })
    }
}

function ch(a, b = !1) {
    var c = "";
    if (a.O) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new fe;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Bb(d, 2, ee, c.playlistId);
            Zg[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Yg[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function ah(a = {}, b, c = !1) {
    new K((d, e) => {
        c ? (window.clearTimeout(Tg.j), window.clearTimeout(Tg.i), Tg.i = 0) : (window.clearTimeout(Sg.j), window.clearTimeout(Sg.i), Sg.i = 0);
        if (Q("jspb_with_transport_leader") && !Qg) document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")), d();
        else if (U && Ig(U))
            if (void 0 !== b)
                if (c) {
                    e = new Map;
                    var f = new Map,
                        g = Xg.get(b) || [];
                    e.set(b, g);
                    Q("jspb_with_transport_leader") && (g = Wg.get(b) || [], f.set(b, g));
                    jh(e, f, d, a);
                    Q("jspb_with_transport_leader") && Wg.delete(b);
                    Xg.delete(b)
                } else f = new Map, g =
                    Vg.get(b) || [], f.set(b, g), hh(f, d, e, a), Vg.delete(b);
        else c ? (jh(Xg, Wg, d, a), Xg.clear()) : (hh(Vg, d, e, a), Vg.clear());
        else fh(c), d()
    })
}

function fh(a = !1) {
    if (Q("web_gel_timeout_cap") && (!a && !Sg.i || a && !Tg.i)) {
        var b = Ie(() => {
            ah({
                writeThenSend: !0
            }, void 0, a)
        }, 6E4);
        a ? Tg.i = b : Sg.i = b
    }
    window.clearTimeout(a ? Tg.j : Sg.j);
    b = P("LOGGING_BATCH_TIMEOUT", se("web_gel_debounce_ms", 1E4));
    Q("shorten_initial_gel_batch_timeout") && Ug && (b = Og);
    b = Ie(() => {
        ah({
            writeThenSend: !0
        }, void 0, a)
    }, b);
    a ? Tg.j = b : Sg.j = b
}

function hh(a, b, c, d = {}, e) {
    var f = U;
    const g = Math.round(R());
    let h = a.size;
    for (const [m, p] of a) {
        var k = m,
            l = p;
        a = ta({
            context: Pe(f.config_ || Oe())
        });
        a.events = l;
        (l = Yg[k]) && kh(a, k, l);
        delete Yg[k];
        k = "visitorOnlyApprovedKey" === k;
        lh(a, g, k);
        mh(d);
        l = () => {
            h--;
            h || b()
        };
        const t = () => {
            h--;
            h || b()
        };
        try {
            Jg(f, a, nh(d, k, l, t, e)), Ug = !1
        } catch (n) {
            ye(n), c()
        }
    }
}

function jh(a, b, c, d = {}, e) {
    var f = U;
    const g = Math.round(R());
    let h = a.size + b.size;
    var k = new Map([...a, ...b]);
    for (const [t] of k) {
        var l = t,
            m = a.get(l),
            p = b.get(l) || [];
        k = new he;
        const n = Re(f.config_ || Oe());
        E(k, zd, 1, n);
        m = m ? oh(m) : [];
        for (const x of m) H(k, 3, N, x);
        for (const x of p) H(k, 3, N, x);
        (p = Zg[l]) && ph(k, l, p);
        delete Zg[l];
        l = "visitorOnlyApprovedKey" === l;
        qh(k, g, l);
        mh(d);
        k = Hb(k);
        l = nh(d, l, () => {
            Ng.ytExports.logging.transport.leaderQueueLength = 0;
            h--;
            h || c()
        }, () => {
            Ng.ytExports.logging.transport.leaderQueueLength = 0;
            h--;
            h || c()
        }, e);
        l.headers = {
            "Content-Type": "application/json+protobuf"
        };
        l.postBodyFormat = "JSPB";
        l.postBody = k;
        Jg(f, "", l);
        Ug = !1
    }
}

function mh(a) {
    Q("always_send_and_write") && (a.writeThenSend = !1)
}

function nh(a, b, c, d, e) {
    return {
        retry: !0,
        onSuccess: c,
        onError: d,
        Db: a,
        O: b,
        ub: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: ""
    }
}

function lh(a, b, c) {
    a.requestTimeMs = String(b);
    Q("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = P("EVENT_ID")) && (c = rh(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function qh(a, b, c) {
    D(a, 2, b);
    if (!c && (b = P("EVENT_ID"))) {
        c = rh();
        const d = new de;
        D(d, 1, b);
        D(d, 2, c);
        E(a, de, 5, d)
    }
}

function rh() {
    let a = P("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Pg / 2));
    a++;
    a > Pg && (a = 1);
    O("BATCH_CLIENT_COUNTER", a);
    return a
}

function kh(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
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

function ph(a, b, c) {
    let d;
    if (C(c, 1 === Cb(c, ee) ? 1 : -1)) d = 1;
    else if (C(c, 2 === Cb(c, ee) ? 2 : -1)) d = 2;
    else return;
    E(a, fe, 4, c);
    a = Db(a, zd, 1) || new zd;
    c = Db(a, xd, 3) || new xd;
    const e = new vd;
    e.setToken(b);
    D(e, 1, d);
    H(c, 12, vd, e);
    E(a, xd, 3, c)
}

function oh(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) try {
        b.push(new N(a[c]))
    } catch (d) {
        ye(new df("Transport failed to deserialize " + String(a[c])))
    }
    return b
};
const sh = u.ytLoggingGelSequenceIdObj_ || {};

function V(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || R());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = Mg();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    Q("log_sequence_info_on_gel_web") && d.C && (a = e.context, b = d.C, b = {
        index: th(b),
        groupKey: b
    }, a.sequence = b, d.pa && delete sh[d.C]);
    (d.Ia ? gh : bh)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        O: d.O
    }, c)
}

function uh(a = !1) {
    ah(void 0, void 0, a)
}

function th(a) {
    sh[a] = a in sh ? sh[a] + 1 : 0;
    return sh[a]
};
let vh = Kg;

function W(a, b, c = {}) {
    let d = vh;
    P("ytLoggingEventsDefaultDisabled", !1) && vh == Kg && (d = null);
    V(a, b, d, c)
};
const wh = [{
    ga: a => `Cannot read property '${a.key}'`,
    W: {
        Error: [{
            A: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            A: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            A: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            A: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            A: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            A: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            A: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    ga: a => `Cannot call '${a.key}'`,
    W: {
        TypeError: [{
            A: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            A: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            A: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            A: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            A: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            A: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    ga: a => `${a.key} is not defined`,
    W: {
        ReferenceError: [{
            A: /(.*) is not defined/,
            groups: ["key"]
        }, {
            A: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var yh = {
    G: [],
    F: [{
        callback: xh,
        weight: 500
    }]
};

function xh(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function zh() {
    if (!Ah) {
        var a = Ah = new Bh;
        a.G.length = 0;
        a.F.length = 0;
        Ch(a, yh)
    }
    return Ah
}

function Ch(a, b) {
    b.G && a.G.push.apply(a.G, b.G);
    b.F && a.F.push.apply(a.F, b.F)
}
var Bh = class {
        constructor() {
            this.F = [];
            this.G = []
        }
    },
    Ah;
const Dh = new L;

function Eh(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Fh(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Fh(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Fh(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Fh(a) {
    let b = a(),
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

function Gh(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Hh(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = Eh(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? Hh(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += Hh(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = Ih(a), d += c[b].length;
    else c[b] = Ih(a), d += c[b].length;
    return d
}

function Hh(a, b, c, d) {
    c += `.${a}`;
    a = Ih(b);
    d[c] = a;
    return c.length + a.length
}

function Ih(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};
const Jh = u.ytLoggingGelSequenceIdObj_ || {};

function Kh(a, b, c = {}) {
    var d = Math.round(c.timestamp || R());
    D(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
    var e = Mg();
    d = new ae;
    D(d, 1, c.timestamp || !isFinite(e) ? -1 : e);
    if (Q("log_sequence_info_on_gel_web") && c.C) {
        e = c.C;
        const f = th(e),
            g = new $d;
        D(g, 2, f);
        D(g, 1, e);
        E(d, $d, 3, g);
        c.pa && delete Jh[c.C]
    }
    E(a, ae, 33, d);
    (c.Ia ? ih : eh)({
        endpoint: "log_event",
        payload: a,
        cttAuthInfo: c.cttAuthInfo,
        O: c.O
    }, b)
};

function Lh(a, b = {}) {
    let c = !1;
    P("ytLoggingEventsDefaultDisabled", !1) && vh === Kg && (c = !0);
    Kh(a, c ? null : vh, b)
};

function Mh(a, b, c) {
    const d = new N;
    F(d, Yd, 72, be, a);
    c ? Kh(d, c, b) : Lh(d, b)
}

function Nh(a, b, c) {
    const d = new N;
    F(d, Xd, 73, be, a);
    c ? Kh(d, c, b) : Lh(d, b)
}

function Oh(a, b, c) {
    const d = new N;
    F(d, Wd, 78, be, a);
    c ? Kh(d, c, b) : Lh(d, b)
}

function Ph(a, b, c) {
    const d = new N;
    F(d, Zd, 208, be, a);
    c ? Kh(d, c, b) : Lh(d, b)
}

function Qh(a, b, c) {
    const d = new N;
    F(d, Qd, 156, be, a);
    c ? Kh(d, c, b) : Lh(d, b)
}

function Rh(a, b, c) {
    const d = new N;
    F(d, Vd, 215, be, a);
    c ? Kh(d, c, b) : Lh(d, b)
}

function Sh(a, b, c) {
    const d = new N;
    F(d, Md, 111, be, a);
    c ? Kh(d, c, b) : Lh(d, b)
};
var Th = new Set,
    Uh = 0,
    Vh = 0,
    Wh = 0,
    Xh = [];
const Yh = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Zh(a) {
    $h(a)
}

function ai(a) {
    $h(a, "WARNING")
}

function $h(a, b = "ERROR") {
    var c = {};
    c.name = P("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = P("INNERTUBE_CONTEXT_CLIENT_VERSION");
    bi(a, c || {}, b)
}

function bi(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (Q("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Uh)) {
            d = Xh;
            var e = Gc(a);
            const G = e.message || "Unknown Error",
                Ha = e.name || "UnknownError";
            var f = e.stack || a.j || "Not available";
            if (f.startsWith(`${Ha}: ${G}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let I = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(I = Gh(a.args[h], `params.${h}`, b, I), 500 <= I); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const aa = a.params;
                if ("object" === typeof a.params)
                    for (h in aa) {
                        if (!aa[h]) continue;
                        const wg = `params.${h}`,
                            xg = Ih(aa[h]);
                        b[wg] =
                            xg;
                        I += wg.length + xg.length;
                        if (500 < I) break
                    } else b.params = Ih(aa)
            }
            if (d.length)
                for (h = 0; h < d.length && !(I = Gh(d[h], `params.context.${h}`, b, I), 500 <= I); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: G,
                name: Ha,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = zh();d = b;
                for (k of a.G)
                    if (d.message && d.message.match(k.Ga)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.F)
                    if (l.callback(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var m of wh)
                if (m.W[k.name]) {
                    l = m.W[k.name];
                    for (var p of l)
                        if (l = k.message.match(p.A)) {
                            k.params["params.error.original"] = l[0];
                            a = p.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = m.ga(b);
                            break
                        }
                }
            k.params || (k.params = {});
            m = zh();
            k.params["params.errorServiceSignature"] = `msg=${m.G.length}&cb=${m.F.length}`;
            k.params["params.serviceWorker"] = "true";
            u.document && u.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            xa("sample").constructor !== wa && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !Th.has(k.message)) {
                "ERROR" === c ? (Dh.ha("handleError", k), Q("record_app_crashed_web") && 0 === Wh && 1 === k.sampleWeight && (Wh++, Q("errors_via_jspb") ? (m = new Ld, D(m, 1, 1), Q("report_client_error_with_app_crash_ks") || (l = new Gd, D(l, 1, k.message), p = new Hd, E(p, Gd, 3, l), l = new Id, E(l, Hd, 5, p), p = new Kd, E(p,
                    Id, 9, l), E(m, Kd, 4, p)), p = new N, F(p, Ld, 20, be, m), Lh(p)) : (m = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, Q("report_client_error_with_app_crash_ks") || (m.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: k.message
                            }
                        }
                    }
                }), W("appCrashed", m))), Vh++) : "WARNING" === c && Dh.ha("handleWarning", k);
                a: {
                    if (Q("errors_via_jspb")) {
                        if (ci()) var t = void 0;
                        else {
                            m = new Dd;
                            D(m, 1, k.stack);
                            k.fileName && D(m, 4, k.fileName);
                            var n = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                            0 !== n.length && (1 !== n.length || isNaN(Number(n[0])) ?
                                2 !== n.length || isNaN(Number(n[0])) || isNaN(Number(n[1])) || (D(m, 2, Number(n[0])), D(m, 3, Number(n[1]))) : D(m, 2, Number(n[0])));
                            n = new Gd;
                            D(n, 1, k.message);
                            D(n, 3, k.name);
                            D(n, 6, k.sampleWeight);
                            "ERROR" === c ? D(n, 2, 2) : "WARNING" === c ? D(n, 2, 1) : D(n, 2, 0);
                            var x = new Ed;
                            D(x, 1, !0);
                            F(x, Dd, 3, Fd, m);
                            m = new Bd;
                            D(m, 3, window.location.href);
                            p = P("FEXP_EXPERIMENTS", []);
                            for (b = 0; b < p.length; b++) l = m, a = p[b], mb(l), Ab(l, 5).push(a);
                            p = pe();
                            if (!qe() && p)
                                for (var z of Object.keys(p)) l = new Cd, D(l, 1, z), l.setValue(String(p[z])), H(m, 4, Cd, l);
                            if (z = k.params)
                                for (t of Object.keys(z)) p =
                                    new Cd, D(p, 1, `client.${t}`), p.setValue(String(z[t])), H(m, 4, Cd, p);
                            z = P("SERVER_NAME");
                            t = P("SERVER_VERSION");
                            z && t && (p = new Cd, D(p, 1, "server.name"), p.setValue(z), H(m, 4, Cd, p), z = new Cd, D(z, 1, "server.version"), z.setValue(t), H(m, 4, Cd, z));
                            t = new Hd;
                            E(t, Bd, 1, m);
                            E(t, Ed, 2, x);
                            E(t, Gd, 3, n)
                        }
                        if (!t) break a;
                        z = new N;
                        F(z, Hd, 163, be, t);
                        Lh(z)
                    } else {
                        if (ci()) t = void 0;
                        else {
                            z = {
                                stackTrace: k.stack
                            };
                            k.fileName && (z.filename = k.fileName);
                            t = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                            0 !== t.length && (1 !== t.length || isNaN(Number(t[0])) ?
                                2 !== t.length || isNaN(Number(t[0])) || isNaN(Number(t[1])) || (z.lineNumber = Number(t[0]), z.columnNumber = Number(t[1])) : z.lineNumber = Number(t[0]));
                            t = {
                                level: "ERROR_LEVEL_UNKNOWN",
                                message: k.message,
                                errorClassName: k.name,
                                sampleWeight: k.sampleWeight
                            };
                            "ERROR" === c ? t.level = "ERROR_LEVEL_ERROR" : "WARNING" === c && (t.level = "ERROR_LEVEL_WARNNING");
                            z = {
                                isObfuscated: !0,
                                browserStackInfo: z
                            };
                            m = {
                                pageUrl: window.location.href,
                                kvPairs: []
                            };
                            P("FEXP_EXPERIMENTS") && (m.experimentIds = P("FEXP_EXPERIMENTS"));
                            p = pe();
                            if (!qe() && p)
                                for (x of Object.keys(p)) m.kvPairs.push({
                                    key: x,
                                    value: String(p[x])
                                });
                            if (x = k.params)
                                for (n of Object.keys(x)) m.kvPairs.push({
                                    key: `client.${n}`,
                                    value: String(x[n])
                                });
                            n = P("SERVER_NAME");
                            x = P("SERVER_VERSION");
                            n && x && (m.kvPairs.push({
                                key: "server.name",
                                value: n
                            }), m.kvPairs.push({
                                key: "server.version",
                                value: x
                            }));
                            t = {
                                errorMetadata: m,
                                stackTrace: z,
                                logMessage: t
                            }
                        }
                        if (!t) break a;
                        W("clientError", t)
                    }
                    if ("ERROR" === c || Q("errors_flush_gel_always_killswitch")) Q("web_fp_via_jspb") && uh(!0),
                    uh()
                }
                try {
                    Th.add(k.message)
                } catch (aa) {}
                Uh++
            }
        }
    }
}

function ci() {
    for (const a of Yh) {
        const b = Aa();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
};
let di = 1;

function ei(a) {
    return new fi({
        trackingParams: a
    })
}

function gi(a) {
    const b = di++;
    return new fi({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    })
}
var fi = class {
    constructor(a) {
        this.i = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.i.trackingParams ? a.trackingParams = this.i.trackingParams : (a.veType = this.i.veType, void 0 !== this.i.veCounter && (a.veCounter = this.i.veCounter), void 0 !== this.i.elementIndex && (a.elementIndex = this.i.elementIndex));
        void 0 !== this.i.dataElement && (a.dataElement = this.i.dataElement.getAsJson());
        void 0 !== this.i.youtubeData && (a.youtubeData = this.i.youtubeData);
        return a
    }
    getAsJspb() {
        const a = new M;
        void 0 !== this.i.trackingParams ? D(a, 1, this.i.trackingParams) :
            (void 0 !== this.i.veType && D(a, 2, this.i.veType), void 0 !== this.i.veCounter && D(a, 6, this.i.veCounter), void 0 !== this.i.elementIndex && D(a, 3, this.i.elementIndex));
        if (void 0 !== this.i.dataElement) {
            var b = this.i.dataElement.getAsJspb();
            E(a, M, 7, b)
        }
        void 0 !== this.i.youtubeData && E(a, nd, 8, this.i.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.i.trackingParams && !!this.i.veType
    }
};
let hi = Date.now().toString();
let ii = u.ytLoggingDocDocumentNonce_;
if (!ii) {
    var ji;
    a: {
        if (window.crypto && window.crypto.getRandomValues) try {
            const d = Array(16),
                e = new Uint8Array(16);
            window.crypto.getRandomValues(e);
            for (let f = 0; f < d.length; f++) d[f] = e[f];
            ji = d;
            break a
        } catch (d) {}
        const c = Array(16);
        for (let d = 0; 16 > d; d++) {
            const e = Date.now();
            for (let f = 0; f < e % 23; f++) c[d] = Math.random();
            c[d] = Math.floor(256 * Math.random())
        }
        if (hi) {
            let d = 1;
            for (let e = 0; e < hi.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ hi.charCodeAt(e), d++
        }
        ji = c
    }
    const a = ji,
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] &
        63));
    ii = b.join("")
}
var ki = ii;
let li = Kg;
var mi = {
    Ra: 0,
    Pa: 1,
    Qa: 2,
    kb: 3,
    Sa: 4,
    pb: 5,
    lb: 6,
    ob: 7,
    mb: 8,
    nb: 9,
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

function ni(a = 0) {
    return 0 === a ? "client-screen-nonce" : `${"client-screen-nonce"}.${a}`
}

function oi(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function pi(a = 0) {
    return P(oi(a))
}

function qi(a = 0) {
    return (a = pi(a)) ? new fi({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function ri() {
    let a = P("csn-to-ctt-auth-info");
    a || (a = {}, O("csn-to-ctt-auth-info", a));
    return a
}

function X(a = 0) {
    a = P(ni(a));
    if (!a && !P("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function si(a, b, c) {
    const d = ri();
    (c = X(c)) && delete d[c];
    b && (d[a] = b)
}

function ti(a) {
    return ri()[a]
}

function ui(a, b, c = 0, d) {
    if (a !== P(ni(c)) || b !== P(oi(c))) si(a, d, c), O(ni(c), a), O(oi(c), b), b = () => {
        setTimeout(() => {
            if (a)
                if (Q("web_time_via_jspb")) {
                    var e = new Md;
                    D(e, 1, ki);
                    D(e, 2, a);
                    Q("use_default_heartbeat_client") ? Sh(e) : Sh(e, void 0, li)
                } else e = {
                    clientDocumentNonce: ki,
                    clientScreenNonce: a
                }, Q("use_default_heartbeat_client") ? W("foregroundHeartbeatScreenAssociated", e) : V("foregroundHeartbeatScreenAssociated", e, li)
        }, 0)
    }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : b()
};
class ng extends lg {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const tg = new mg,
    vi = [];
let xi = wi,
    yi = 0;

function zi(a, b, c, d, e, f, g) {
    const h = xi();
    f = new fi({
        veType: b,
        youtubeData: f,
        jspbYoutubeData: void 0
    });
    e = {
        cttAuthInfo: e,
        C: h
    };
    const k = () => {
        ai(new df("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (Q("il_via_jspb")) {
        const l = new Qd;
        l.B(h);
        Pd(l, f.getAsJspb());
        c && c.visualElement ? (f = new Sd, c.clientScreenNonce && D(f, 2, c.clientScreenNonce), Rd(f, c.visualElement.getAsJspb()), g && D(f, 4, ce[g]), E(l, Sd, 5, f)) : c && k();
        d && D(l, 3, d);
        Qh(l, e, a)
    } else f = {
        csn: h,
        pageVe: f.getAsJson()
    }, c && c.visualElement ? (f.implicitGesture = {
        parentCsn: c.clientScreenNonce,
        gesturedVe: c.visualElement.getAsJson()
    }, g && (f.implicitGesture.gestureType = g)) : c && k(), d && (f.cloneCsn = d), a ? V("screenCreated", f, a, e) : W("screenCreated", f, e);
    sg(new ng(h));
    return h
}

function Ai(a, b, c, d) {
    const e = d.filter(g => {
            g.csn !== b ? (g.csn = b, g = !0) : g = !1;
            return g
        }),
        f = {
            cttAuthInfo: ti(b),
            C: b
        };
    for (const g of d) d = g.getAsJson(), (sa(d) || !d.trackingParams && !d.veType) && ai(Error("Child VE logged with no data"));
    if (Q("il_via_jspb")) {
        const g = new Vd;
        g.B(b);
        Td(g, c.getAsJspb());
        pa(e, h => {
            h = h.getAsJspb();
            H(g, 3, M, h)
        });
        "UNDEFINED_CSN" == b ? Y("visualElementAttached", g, f) : Rh(g, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: pa(e, g => g.getAsJson())
    }, "UNDEFINED_CSN" == b ? Y("visualElementAttached", c, f) : a ? V("visualElementAttached", c, a, f) : W("visualElementAttached", c, f)
}

function Bi(a, b, c, d, e) {
    const f = {
        cttAuthInfo: ti(b),
        C: b
    };
    if (Q("il_via_jspb")) {
        const g = new Yd;
        g.B(b);
        c = c.getAsJspb();
        E(g, M, 2, c);
        D(g, 4, 1);
        d && E(g, Od, 3, e);
        "UNDEFINED_CSN" == b ? Y("visualElementShown", g, f) : Mh(g, f, a)
    } else e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" == b ? Y("visualElementShown", e, f) : a ? V("visualElementShown", e, a, f) : W("visualElementShown", e, f)
}

function Ci(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = {
        cttAuthInfo: ti(b),
        C: b,
        pa: d
    };
    Q("il_via_jspb") ? (e = new Yd, e.B(b), c = c.getAsJspb(), E(e, M, 2, c), D(e, 4, d ? 16 : 8), "UNDEFINED_CSN" == b ? Y("visualElementHidden", e, f) : Nh(e, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" == b ? Y("visualElementHidden", d, f) : a ? V("visualElementHidden", d, a, f) : W("visualElementHidden", d, f))
}

function Di(a, b, c, d) {
    const e = {
        cttAuthInfo: ti(b),
        C: b
    };
    if (Q("il_via_jspb")) {
        var f = new Wd;
        f.B(b);
        c = c.getAsJspb();
        E(f, M, 2, c);
        D(f, 4, ce.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);
        d && E(f, Od, 3);
        "UNDEFINED_CSN" == b ? Y("visualElementGestured", f, e) : Oh(f, e, a)
    } else f = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
    }, d && (f.clientData = d), "UNDEFINED_CSN" == b ? Y("visualElementGestured", f, e) : a ? V("visualElementGestured", f, a, e) : W("visualElementGestured", f, e)
}

function wi() {
    for (var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
    }
    return Qa(b, 3)
}

function Y(a, b, c) {
    vi.push({
        payloadName: a,
        payload: b,
        options: c
    });
    yi || (yi = yg())
}

function zg(a) {
    if (vi) {
        for (let b of vi)
            if (b.payload)
                if (Q("il_via_jspb")) switch (b.payload.B(a.csn), b.payloadName) {
                    case "screenCreated":
                        Qh(b.payload, b.options);
                        break;
                    case "visualElementAttached":
                        Rh(b.payload, b.options);
                        break;
                    case "visualElementShown":
                        Mh(b.payload, b.options);
                        break;
                    case "visualElementHidden":
                        Nh(b.payload, b.options);
                        break;
                    case "visualElementGestured":
                        Oh(b.payload, b.options);
                        break;
                    case "visualElementStateChanged":
                        Ph(b.payload, b.options);
                        break;
                    default:
                        ai(new df("flushQueue unable to map payloadName to JSPB setter"))
                } else b.payload.csn =
                    a.csn, V(b.payloadName, b.payload, null, b.options);
        vi.length = 0
    }
    yi = 0
};

function Ei(a, b) {
    return b.data && b.data.loggingDirectives ? b.data.loggingDirectives.trackingParams || "" : b.i && b.i.trackingParams ? b.i.trackingParams : b.data && b.data.trackingParams || ""
}

function Fi(a) {
    return parseInt(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "", 10) || 1
}

function Gi(a, b) {
    var c = Ei(0, b),
        d = b.visualElement ? b.visualElement : c,
        e = a.m.has(d);
    const f = a.j.get(d);
    a.m.add(d);
    a.j.set(d, !0);
    b.j && !e && b.j();
    if (c || b.visualElement)
        if (d = X(8)) {
            var g = !(!b.data || !b.data.loggingDirectives);
            if (Fi(b) || g) {
                var h = b.visualElement ? b.visualElement : ei(c);
                c = b.l;
                var k = b.m;
                g || e ? Fi(b) & 4 ? f || (a = a.i, b = {
                    cttAuthInfo: ti(d),
                    C: d
                }, Q("il_via_jspb") ? (e = new Yd, e.B(d), h = h.getAsJspb(), E(e, M, 2, h), D(e, 4, 4), c && E(e, Od, 3, k), "UNDEFINED_CSN" == d ? Y("visualElementShown", e, b) : Mh(e, b, a)) : (k = {
                    csn: d,
                    ve: h.getAsJson(),
                    eventType: 4
                }, c && (k.clientData = c), "UNDEFINED_CSN" == d ? Y("visualElementShown", k, b) : a ? V("visualElementShown", k, a, b) : W("visualElementShown", k, b))) : Fi(b) & 1 && !e && Bi(a.i, d, h, c, k) : Bi(a.i, d, h, c)
            }
        }
}

function Hi(a, b) {
    var c = Ei(0, b),
        d = b.visualElement ? b.visualElement : c,
        e = a.l.has(d);
    const f = a.j.get(d);
    a.l.add(d);
    a.j.set(d, !1);
    !1 !== f && (c || b.visualElement) && (!(d = X(8)) || !Fi(b) && b.data && b.data.loggingDirectives || (c = b.visualElement ? b.visualElement : ei(c), Fi(b) & 8 ? Ci(a.i, d, c) : Fi(b) & 2 && !e && (a = a.i, b = {
        cttAuthInfo: ti(d),
        C: d
    }, Q("il_via_jspb") ? (e = new Yd, e.B(d), c = c.getAsJspb(), E(e, M, 2, c), D(e, 4, 2), "UNDEFINED_CSN" == d ? Y("visualElementHidden", e, b) : Nh(e, b, a)) : (e = {
            csn: d,
            ve: c.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" ==
        d ? Y("visualElementHidden", e, b) : a ? V("visualElementHidden", e, a, b) : W("visualElementHidden", e, b)))))
}
class Ii {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.j = new Map;
        this.o = null;
        this.i = Kg
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.j.clear();
        this.o = null
    }
}(function() {
    var a = Ii;
    a.fa = void 0;
    a.v = function() {
        return a.fa ? a.fa : a.fa = new a
    }
})();
var Ji = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Ki = ["notifications_register", "notifications_check_registration"];
let Li = null;

function Z(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Mi().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Ni() {
    return Z("IndexedDBCheck", "testing IndexedDB").then(() => Oi("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Oi(a) {
    const b = new df("Error accessing DB");
    return Mi().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Mi() {
    return Li ? Promise.resolve(Li) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Li = d, a(Li);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Mi()
        };
        c.onupgradeneeded = Pi
    })
}

function Pi(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Qi = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Ri(a) {
    if (1 === a.length) return a[0];
    var b = Qi.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Qi).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Si(a) {
    return `/youtubei/v1/${Ri(a)}`
};
const Ti = window;
class Ui {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Vi = Ti.performance || Ti.mozPerformance || Ti.msPerformance || Ti.webkitPerformance || new Ui;
ka(Vi.clearResourceTimings || Vi.webkitClearResourceTimings || Vi.mozClearResourceTimings || Vi.msClearResourceTimings || Vi.oClearResourceTimings || na, Vi);
w("ytLoggingLatencyUsageStats_", u.ytLoggingLatencyUsageStats_ || {});

function Wi() {
    Xi.i || (Xi.i = new Xi);
    return Xi.i
}

function Yi(a, b, c = {}) {
    a.j.add(c.layer || 0);
    a.l = () => {
        Zi(a, b, c);
        var d = qi(c.layer);
        if (d) {
            for (var e of a.o) $i(a, e[0], e[1] || d, c.layer);
            for (const k of a.D) {
                e = X(0);
                var f = k[0] || qi(0);
                if (e && f) {
                    d = a.client;
                    var g = f,
                        h = k[1];
                    f = {
                        cttAuthInfo: ti(e),
                        C: e
                    };
                    Q("il_via_jspb") ? (h = new Zd, h.B(e), g = g.getAsJspb(), E(h, M, 2, g), "UNDEFINED_CSN" == e ? Y("visualElementStateChanged", h, f) : Ph(h, f, d)) : (g = {
                        csn: e,
                        ve: g.getAsJson(),
                        clientData: h
                    }, "UNDEFINED_CSN" == e ? Y("visualElementStateChanged", g, f) : d ? V("visualElementStateChanged", g, d, f) : W("visualElementStateChanged",
                        g, f))
                }
            }
        }
    };
    X(c.layer) || a.l();
    if (c.oa)
        for (const d of c.oa) aj(a, d, c.layer);
    else $h(Error("Delayed screen needs a data promise."))
}

function Zi(a, b, c = {}) {
    c.layer || (c.layer = 0);
    var d = void 0 !== c.Ha ? c.Ha : c.layer;
    var e = X(d);
    d = qi(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = P("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    let k;
    try {
        k = zi(a.client, b, f, c.na, c.cttAuthInfo, g, c.yb)
    } catch (l) {
        a = l;
        c = [{
            Kb: b,
            rootVe: d,
            parentVisualElement: void 0,
            xb: e,
            Fb: f,
            na: c.na
        }];
        a.args || (a.args = []);
        a.args.push(...c);
        $h(l);
        return
    }
    ui(k, b, c.layer, c.cttAuthInfo);
    if (b = e && "UNDEFINED_CSN" !== e && d) {
        a: {
            for (const l of Object.values(mi))
                if (X(l) === e) {
                    b = !0;
                    break a
                }
            b = !1
        }
        b = !b
    }
    b && Ci(a.client, e, d, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = k || "");
    d = Ii.v();
    d.clear();
    d.o = X();
    d = qi(c.layer);
    e && "UNDEFINED_CSN" !== e && d && (Q("web_mark_root_visible") || Q("music_web_mark_root_visible")) && Bi(void 0, k, d);
    a.j.delete(c.layer || 0);
    a.l = void 0;
    for (const [l, m] of a.R) e = l, m.has(c.layer) && d && $i(a, e, d, c.layer);
    for (c = 0; c < a.m.length; c++) {
        e =
            a.m[c];
        try {
            e()
        } catch (l) {
            $h(l)
        }
    }
    a.m.length = 0;
    for (c = 0; c < a.u.length; c++) {
        e = a.u[c];
        try {
            e()
        } catch (l) {
            $h(l)
        }
    }
}

function bj(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    [28631].includes(b) || (ai(new df("createClientScreen() called with a non-page VE", b)), b = 83769);
    c.isHistoryNavigation || a.i.push({
        rootVe: b,
        key: c.key || ""
    });
    a.o = [];
    a.D = [];
    c.oa ? Yi(a, b, c) : Zi(a, b, c)
}

function aj(a, b, c = 0) {
    b.then(d => {
        a.j.has(c) && a.l && a.l();
        const e = X(c),
            f = qi(c);
        if (e && f) {
            var g;
            (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && Ai(a.client, e, f, [ei(d.response.trackingParams)]);
            var h;
            (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && Ai(a.client, e, f, [ei(d.playerResponse.trackingParams)])
        }
    })
}

function $i(a, b, c, d = 0) {
    if (a.j.has(d)) a.o.push([b, c]);
    else {
        var e = X(d);
        c = c || qi(d);
        e && c && Ai(a.client, e, c, [b])
    }
}

function cj(a, b, c = 0) {
    (c = X(c)) && Di(a.client, c, b)
}

function dj(a, b, c, d = 0) {
    if (!b) return !1;
    d = X(d);
    if (!d) return !1;
    Di(a.client, d, ei(b), c);
    return !0
}

function ej(a, b) {
    const c = b.Aa && b.Aa();
    b.visualElement ? cj(a, b.visualElement, c) : (b = Ei(Ii.v(), b), dj(a, b, void 0, c))
}
var Xi = class {
    constructor() {
        this.o = [];
        this.D = [];
        this.i = [];
        this.m = [];
        this.u = [];
        this.j = new Set;
        this.R = new Map
    }
    clickCommand(a, b, c = 0) {
        return dj(this, a.clickTrackingParams, b, c)
    }
};
var fj = class extends J {
    constructor(a) {
        super(a)
    }
};
var gj = class extends J {
    constructor(a) {
        super(a)
    }
};
gj.i = "yt.sw.adr";

function hj(a) {
    return r(function*() {
        var b = yield u.fetch(a.j);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new gj).constructor.i) {
                    b = new gj(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function ij(a = !1) {
    const b = jj.i;
    return r(function*() {
        if (a || !b.i) b.i = hj(b).then(b.l).catch(c => {
            delete b.i;
            $h(c)
        });
        return b.i
    })
}
var jj = class {
    constructor() {
        this.j = `${self.location.origin}/sw.js_data`
    }
    l(a) {
        const b = Db(a, fj, 2);
        if (b) {
            const c = C(b, 5);
            c && (u.__SAPISID = c);
            Q("enable_web_eom_visitor_data") && null != C(b, 10) ? O("EOM_VISITOR_DATA", C(b, 10)) : null != C(b, 7) && O("VISITOR_DATA", C(b, 7));
            null != C(b, 4) && O("SESSION_INDEX", String(C(b, 4)));
            null != C(b, 8) && O("DELEGATED_SESSION_ID", C(b, 8))
        }
        return a
    }
};

function kj(a) {
    const b = {};
    var c = Ec();
    c && (b.Authorization = c, c = a = null == a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(P("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), Q("voice_search_auth_header_removal") || (b["X-Goog-AuthUser"] = c), "INNERTUBE_HOST_OVERRIDE" in oe || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in oe && (b["X-Goog-PageId"] = P("DELEGATED_SESSION_ID")));
    return b
}
var lj = class {
    constructor() {
        this.Ka = !0
    }
};
var mj = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function nj(a, b) {
    b.encryptedTokenJarContents && (a.i[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.i[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var oj = class {
    constructor() {
        this.i = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.I.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.i[f.encryptedTokenJarContents];
            nj(this, a)
        }
    }
};

function pj() {
    var a = P("INNERTUBE_CONTEXT");
    if (!a) return $h(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = ta(a);
    Q("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = te();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    oj.i || (oj.i = new oj);
    b = oj.i.i;
    c = [];
    let d = 0;
    for (const e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
};

function qj(a) {
    var b = a;
    if (a = P("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(A);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var rj = class {};
const sj = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends rj {})
};

function tj(a) {
    var b = {
        wb: {}
    };
    lj.i || (lj.i = new lj);
    var c = lj.i;
    if (void 0 !== uj.i) {
        const d = uj.i;
        a = [b !== d.o, a !== d.m, c !== d.l, !1, !1, void 0 !== d.j];
        if (a.some(e => e)) throw new df("InnerTubeTransportService is already initialized", a);
    } else uj.i = new uj(b, a, c)
}

function vj(a, b) {
    return r(function*() {
        var c, d = {
            sessionIndex: null == a ? void 0 : null == (c = a.ma) ? void 0 : c.sessionIndex
        };
        c = yield $c(kj(d));
        return Promise.resolve(Object.assign({}, wj(b), c))
    })
}

function xj(a, b, c) {
    return r(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.I) ? 0 : d.context)
            for (const h of []) h.Gb(b.I.context);
        var e;
        if (null == (e = a.j) ? 0 : e.Nb(b.input, b.I)) return a.j.Ab(b.input, b.I);
        var f;
        (d = null == (f = b.config) ? void 0 : f.Jb) && a.i.has(d) && Q("web_memoize_inflight_requests") ? f = a.i.get(d) : (f = JSON.stringify(b.I), b.Y = Object.assign({}, b.Y, {
            headers: c
        }), e = Object.assign({}, b.Y), "POST" === b.Y.method && (e = Object.assign({}, e, {
            body: f
        })), f = a.m.fetch(b.input, e, b.config), d && a.i.set(d, f));
        f = yield f;
        d && a.i.has(d) &&
            a.i.delete(d);
        let g;
        !f && (null == (g = a.j) ? 0 : g.vb(b.input, b.I)) && (f = yield a.j.zb(b.input, b.I));
        return f
    })
}

function yj(a, b, c) {
    var d = {
        ma: {
            identity: mj
        }
    };
    b.context || (b.context = pj());
    return new K(e => r(function*() {
        var f = qj(c);
        f = He(f) ? "same-origin" : "cors";
        if (a.l.Ka) {
            var g, h = null == d ? void 0 : null == (g = d.ma) ? void 0 : g.sessionIndex;
            g = kj({
                sessionIndex: h
            });
            f = Object.assign({}, wj(f), g)
        } else f = yield vj(d, f);
        g = qj(c);
        h = {};
        P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = P("INNERTUBE_API_KEY"));
        Q("json_condensed_response") && (h.prettyPrint = "false");
        g = Ge(g, h || {}, !1);
        h = {
            method: "POST",
            mode: He(g) ? "same-origin" : "cors",
            credentials: He(g) ? "same-origin" : "include"
        };
        e(xj(a, {
            input: g,
            Y: h,
            I: b,
            config: d
        }, f))
    }))
}

function wj(a) {
    const b = {
        "Content-Type": "application/json"
    };
    Q("enable_web_eom_visitor_data") && P("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = P("EOM_VISITOR_DATA") : P("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = P("VISITOR_DATA"));
    Q("track_webfe_innertube_auth_mismatch") && (b["X-Youtube-Bootstrap-Logged-In"] = P("LOGGED_IN", !1));
    "cors" !== a && ((a = P("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = P("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = P("CHROME_CONNECTED_HEADER")) &&
        (b["X-Youtube-Chrome-Connected"] = a), (a = P("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var uj = class {
    constructor(a, b, c) {
        this.o = a;
        this.m = b;
        this.l = c;
        this.j = void 0;
        this.i = new Map;
        a.ja || (a.ja = {});
        a.ja = Object.assign({}, sj, a.ja)
    }
};
let zj;

function Aj() {
    zj || (tj({
        fetch: (a, b) => $c(fetch(new Request(a, b)))
    }), zj = uj.i);
    return zj
};

function Bj(a) {
    return r(function*() {
        yield Cj();
        ai(a)
    })
}

function Dj(a) {
    r(function*() {
        var b = yield eg();
        b ? yield Gg(a, b): (yield ij(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            payloadName: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            payloadName: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && W(b.payloadName, b.payload))
    })
}

function Cj() {
    return r(function*() {
        try {
            yield ij()
        } catch (a) {}
    })
};
const Ej = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    Fj = RegExp("^(?:[a-z]+:)?//", "i");

function Gj(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Z("IDToken", b), Hj()) : "notifications_check_registration" === a && Ij(b)
}

function Jj() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Kj(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Lj(a) {
    return r(function*() {
        const b = Kj(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Si(ie);
        return Mj().then(e => yj(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? Nj(a, g.endpointUrl) : Promise.resolve())
        }))
    })
}

function Oj(a, b) {
    var c = X(8);
    if (null == c || !b) return a;
    a = Fj.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function Nj(a, b) {
    a.deviceId && Z("DeviceId", a.deviceId);
    a.timestampSec && Z("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Wi();
    bj(d);
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: Oj(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && Pj(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = ei(g.data.clickTrackingParams), $i(d, h, void 0, 8), h = {
            Z: 8,
            visualElement: h
        }, Gi(Ii.v(), h);
        Qj(a.displayCap)
    }).catch(() => {})
}

function Pj(a) {
    if (!a.recordNotificationInteractionsEndpoint) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest
        },
        c = Si(je);
    return Mj().then(d => yj(d, b, c))
}

function Qj(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
                let f;
                var c = ei(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
                const g = {
                        Z: 8,
                        visualElement: c
                    },
                    h = gi(82046),
                    k = Wi();
                $i(k, h, c, 8);
                c = {
                    Z: 8,
                    visualElement: h
                };
                Gi(Ii.v(), c);
                ej(k, c);
                Hi(Ii.v(), g)
            }
        }
    })
}

function Ij(a) {
    const b = [Rj(a), Oi("RegistrationTimestamp").then(Sj), Tj(), Uj(), Vj()];
    Promise.all(b).catch(() => {
        Z("IDToken", a);
        Hj();
        return Promise.resolve()
    })
}

function Sj(a) {
    a = a || 0;
    return 9E7 >= Date.now() - a ? Promise.resolve() : Promise.reject()
}

function Rj(a) {
    return Oi("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Tj() {
    return Oi("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Uj() {
    return Oi("Endpoint").then(a => Wj().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Vj() {
    return Oi("application_server_key").then(a => Xj().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Yj() {
    var a = Notification.permission;
    if (Ej[a]) return Ej[a]
}

function Hj() {
    Z("RegistrationTimestamp", 0);
    Promise.all([Wj(), Zj(), ak(), Xj()]).then(([a, b, c, d]) => {
        b = b ? Ji(b) : null;
        c = c ? Ji(c) : null;
        d = d ? Qa(new Uint8Array(d), 4) : null;
        bk(a, b, c, d)
    }).catch(() => {
        bk()
    })
}

function bk(a = null, b = null, c = null, d = null) {
    Ni().then(e => {
        e && (Z("Endpoint", a), Z("P256dhKey", b), Z("AuthKey", c), Z("application_server_key", d), Z("Permission", Notification.permission), Promise.all([Oi("DeviceId"), Oi("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || md.length;
                for (k = 0; 256 > k; k++) f[k] = md[0 | Math.random() * h];
                h = f.join("")
            }
            ck(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function ck(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Yj()
                    }
                }
            },
            h = Si(ke);
        return Mj().then(k => yj(k, g, h).then(() => {
            Z("DeviceId", a);
            Z("RegistrationTimestamp", Date.now());
            Z("TimestampLowerBound", Date.now())
        }, l => {
            Bj(l)
        }))
    })
}

function Wj() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Zj() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function ak() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Xj() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Mj() {
    return r(function*() {
        try {
            return yield ij(!0), Aj()
        } catch (a) {
            return yield Bj(a), Promise.reject(a)
        }
    })
};
let dk = void 0;

function ek(a) {
    return r(function*() {
        dk || (dk = yield a.open("yt-appshell-assets"));
        return dk
    })
}

function fk(a, b) {
    return r(function*() {
        const c = yield ek(a), d = b.map(e => gk(c, e));
        return Promise.all(d)
    })
}

function hk(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function ik(a, b) {
    return r(function*() {
        const c = yield ek(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function jk(a, b, c) {
    return r(function*() {
        yield(yield ek(a)).put(b, c)
    })
}

function kk(a, b) {
    r(function*() {
        yield(yield ek(a)).delete(b)
    })
}

function gk(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var lk;
lk = Bg("yt-serviceworker-metadata", {
    P: {
        auth: {
            T: 1
        },
        ["resource-manifest-assets"]: {
            T: 2
        }
    },
    ia: !0,
    upgrade(a, b) {
        b(1) && Ff(a, "resource-manifest-assets");
        b(2) && Ff(a, "auth")
    },
    version: 2
});
let mk = null;

function nk(a) {
    return Wf(lk(), a)
}

function ok() {
    const a = Date.now();
    return IDBKeyRange.bound(0, a)
}

function pk(a, b) {
    return r(function*() {
        yield Bf(yield nk(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return T(d.i.put(b, e)).then(() => {
                mk = e;
                let f = !0;
                return Kf(d, {
                    query: ok(),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function qk(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield Bf(yield nk(a.token), ["resource-manifest-assets"], "readonly", e => Kf(e.objectStore("resource-manifest-assets"), {
            query: ok(),
            direction: "prev"
        }, f => {
            if (f.da().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function rk(a) {
    return r(function*() {
        mk || (yield Bf(yield nk(a.token), ["resource-manifest-assets"], "readonly", b => Kf(b.objectStore("resource-manifest-assets"), {
            query: ok(),
            direction: "prev"
        }, c => {
            mk = c.getKey()
        })));
        return mk
    })
}
var sk = class {
    constructor(a) {
        this.token = a
    }
    static v() {
        return r(function*() {
            const a = yield eg();
            if (a) return sk.i || (sk.i = new sk(a)), sk.i
        })
    }
};

function tk(a, b) {
    return r(function*() {
        yield Hf(yield nk(a.token), "auth", b, "shell_identifier_key")
    })
}

function uk(a) {
    return r(function*() {
        return (yield(yield nk(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function vk(a) {
    return r(function*() {
        yield(yield nk(a.token)).clear("auth")
    })
}
var wk = class {
    constructor(a) {
        this.token = a
    }
    static v() {
        return r(function*() {
            const a = yield eg();
            if (a) return wk.i || (wk.i = new wk(a)), wk.i
        })
    }
};

function xk() {
    r(function*() {
        const a = yield wk.v();
        a && (yield vk(a))
    })
};
var yk = class extends J {
    constructor(a) {
        super(a)
    }
};

function zk(a) {
    a: {
        var b = Ak;
        if ($b.length) {
            const e = $b.pop();
            var {
                U: c = !1
            } = {};
            e.U = c;
            e.i.init(a, void 0, void 0, void 0);
            a = e
        } else a = new Zb(a);
        try {
            const e = ec(b);
            var d = fc(new e.ba, a, e);
            break a
        } finally {
            b = a, b.i.clear(), b.m = -1, b.j = -1, 100 > $b.length && $b.push(b)
        }
        d = void 0
    }
    return d
}
var Bk = [1],
    Ak = [class extends J {
        constructor(a) {
            super(a, -1, Bk)
        }
    }, 1, rc, [yk, 1, qc]];

function Ck(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(Dk(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function Dk(a) {
    return Fb(zk(decodeURIComponent(a)), yk, 1).reduce((b, c) => {
        (c = C(c, 1)) && b.push(c);
        return b
    }, [])
};
var Ek = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.i = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.j = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) {window.fetchInitialData();}\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function Fk(a) {
    return r(function*() {
        const b = yield ij();
        if (b && null != C(b, 3)) {
            var c = yield wk.v();
            c && (c = yield uk(c), C(b, 3) !== c && (kk(a.i, a.j), xk()))
        }
    })
}

function Gk(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield Hk(a.l), b = yield Ck(c), yield fk(a.i, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield Ik(), yield jk(a.i, a.j, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield Jk(a, b, a.j)
        } catch (d) {}
        return Promise.resolve()
    })
}

function Kk(a) {
    return r(function*() {
        yield Fk(a);
        return Gk(a)
    })
}

function Hk(a) {
    return r(function*() {
        try {
            return yield u.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function Ik() {
    return r(function*() {
        var a = yield ij();
        let b;
        a && null != C(a, 3) && (b = C(a, 3));
        return b ? (a = yield wk.v()) ? Promise.resolve(tk(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function Jk(a, b, c) {
    return r(function*() {
        const d = yield sk.v();
        if (d) try {
            yield pk(d, b)
        } catch (e) {
            yield Bj(e)
        }
        b.push(c);
        try {
            yield ik(a.i, b)
        } catch (e) {
            yield Bj(e)
        }
        return Promise.resolve()
    })
}

function Lk(a, b) {
    return r(function*() {
        return hk(a.i, b)
    })
}

function Mk(a) {
    return r(function*() {
        return hk(a.i, a.j)
    })
}
var Nk = class {
    constructor() {
        var a = self.caches;
        let b = self.location.origin + "/app_shell";
        Q("service_worker_forward_exp_params") && (b += self.location.search);
        var c = self.location.origin + "/app_shell_home";
        this.i = a;
        this.l = b;
        this.j = c
    }
};

function Ok(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield Lk(a.i, c.url);
        if (d) return Dj({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: R()
        }), d;
        Pk(c);
        return Qk(b)
    })
}

function Rk(a, b) {
    return r(function*() {
        const c = yield Sk(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield Mk(a.i);
        if (d) return Tk(a), Uk(d, b);
        Vk(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Wk(a, b) {
    b = new URL(b);
    if (!a.j.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.m)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function Xk(a, b) {
    return r(function*() {
        const c = yield Mk(a.i);
        if (!c) return Vk(a), Qk(b);
        Tk(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(R() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return Uk(c, b);
        d = yield Sk(b);
        return d.response && d.response.ok ? d.response : Uk(c, b)
    })
}

function Qk(a) {
    return a.preloadResponse.then(b => b && !Yk(b) ? b : u.fetch(a.request))
}

function Pk(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    sk.v().then(c => {
        if (c) {
            var d = rk(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = qk(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                Bj(e)
            }).finally(() => {
                Dj({
                    appShellAssetLoadReport: b,
                    timestamp: R()
                })
            })
        } else Dj({
            appShellAssetLoadReport: b,
            timestamp: R()
        })
    })
}

function Tk(a) {
    Dj({
        appShellAssetLoadReport: {
            assetPath: a.i.j,
            cacheHit: !0
        },
        timestamp: R()
    })
}

function Vk(a) {
    Dj({
        appShellAssetLoadReport: {
            assetPath: a.i.j,
            cacheHit: !1
        },
        timestamp: R()
    })
}

function Uk(a, b) {
    if (!Q("sw_nav_preload_pbj")) return a;
    const c = new Ek,
        d = c.i(a.body);
    b.preloadResponse.then(e => {
        e && Yk(e) ? d.then(() => c.i(e.body)).then(() => void c.close()) : d.then(() => {
            c.j();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function Sk(a) {
    return r(function*() {
        try {
            return {
                response: yield Qk(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function Yk(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var dl = class {
    constructor() {
        var a = Zk,
            b = $k,
            c = al,
            d = bl;
        const e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        for (var f of vc) e.push({
            key: f
        });
        f = cl();
        this.i = a;
        this.o = b;
        this.u = c;
        this.j = d;
        this.m = e;
        this.l = f
    }
};
var bl = ["/", "/feed/downloads"];
const el = [/^\/$/, /^\/feed\/downloads$/],
    fl = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function cl() {
    return new RegExp((Q("kevlar_sw_app_wide_fallback") ? fl : el).map(a => a.source).join("|"))
}
var $k = /^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\.ico$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,
    al = /^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;
var gl = class {
    constructor() {
        var a = Zk,
            b = new dl;
        this.i = self;
        this.j = a;
        this.o = b;
        this.R = Ki
    }
    init() {
        this.i.oninstall = this.u.bind(this);
        this.i.onactivate = this.l.bind(this);
        this.i.onfetch = this.m.bind(this);
        this.i.onmessage = this.D.bind(this)
    }
    u(a) {
        this.i.skipWaiting();
        const b = Kk(this.j).catch(c => {
            Bj(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.i.clients.claim()],
            c = this.i.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), Q("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.o,
                d = !!b.i.registration.navigationPreload;
            const e = a.request;
            if (c.u.test(e.url)) jj.i && (delete jj.i.i, u.__SAPISID = void 0, O("VISITOR_DATA", void 0), O("SESSION_INDEX", void 0), O("DELEGATED_SESSION_ID", void 0)), d = a.respondWith,
                c = c.i, kk(c.i, c.j), xk(), c = Qk(a), d.call(a, c);
            else if (c.o.test(e.url)) a.respondWith(Ok(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.j;
                (!Q("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.l.test(f.pathname)) ? a.respondWith(Rk(c, a)): Wk(c, e.url) ? a.respondWith(Xk(c, a)) : d && a.respondWith(Qk(a))
            }
        })
    }
    D(a) {
        const b = a.data;
        this.R.includes(b.type) ? Gj(a) : "refresh_shell" === b.type && Gk(this.j).catch(c => {
            Bj(c)
        })
    }
};
var hl = class {
    static v() {
        let a = v("ytglobal.storage_");
        a || (a = new hl, w("ytglobal.storage_", a));
        return a
    }
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return il()
        })
    }
};

function il() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
w("ytglobal.storageClass_", hl);

function jl(a, b) {
    hl.v().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: kl(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: kl(null == c ? void 0 : c.quota)
        });
        a.i("idbQuotaExceeded", c)
    })
}
class ll {
    constructor() {
        var a = ml;
        this.handleError = nl;
        this.i = a;
        this.j = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.j = !0
        });
        this.l = Math.random() <= se("ytidb_transaction_ended_event_rate_limit", .02)
    }
    V(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                Q("idb_data_corrupted_killswitch") || this.i("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.i("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                Q("idb_is_supported_completed_killswitch") || this.i("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                jl(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.l && this.i("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a =
                    Object.assign({}, b, {
                        hasWindowUnloaded: this.j
                    }), this.i("idbTransactionAborted", a)
        }
    }
}

function kl(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
Ch(zh(), {
    G: [{
        Ga: /Failed to fetch/,
        weight: 500
    }],
    F: []
});
var {
    handleError: nl = Zh,
    V: ml = W
} = {
    handleError: function(a) {
        return r(function*() {
            yield Cj();
            $h(a)
        })
    },
    V: function(a, b) {
        return r(function*() {
            yield Cj();
            W(a, b)
        })
    }
};
for ($e = new ll; 0 < Ze.length;) {
    const a = Ze.shift();
    switch (a.type) {
        case "ERROR":
            $e.handleError(a.payload);
            break;
        case "EVENT":
            $e.V(a.eventType, a.payload)
    }
}
jj.i = new jj;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Pj(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = ei(b.clickTrackingParams);
        a = {
            Z: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = gi(74726);
            b = Wi();
            $i(b, d, c, 8);
            c = {
                Z: 8,
                visualElement: d
            };
            Gi(Ii.v(), c);
            ej(b, c)
        }
        Hi(Ii.v(), a)
    }
};
self.onpush = function(a) {
    a.waitUntil(Oi("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Lj(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(Jj())
};
self.onpushsubscriptionchange = function() {
    Hj()
};
const Zk = new Nk;
(new gl).init();