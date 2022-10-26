(window.webpackJsonp = window.webpackJsonp || []).push([
    [44], {
        jrvE: function(e, t, n) {
            "use strict";
            var r = {};
            n.r(r), n.d(r, "FunctionToString", function() {
                return s
            }), n.d(r, "InboundFilters", function() {
                return v
            });
            var o = function extendStatics(e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };

            function __extends(e, t) {
                function __() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
            }
            var i, a = function __assign() {
                return (a = Object.assign || function __assign(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function __values(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function next() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (s) {
                    o = {
                        error: s
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function __spread() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
                return e
            }
            var s = function() {
                function FunctionToString() {
                    this.name = FunctionToString.id
                }
                return FunctionToString.prototype.setupOnce = function() {
                    i = Function.prototype.toString, Function.prototype.toString = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = this.__sentry_original__ || this;
                        return i.apply(n, e)
                    }
                }, FunctionToString.id = "FunctionToString", FunctionToString
            }();
            var c = function __assign() {
                return (c = Object.assign || function __assign(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function tslib_es6_values(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function next() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function tslib_es6_read(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (s) {
                    o = {
                        error: s
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function tslib_es6_spread() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(tslib_es6_read(arguments[t]));
                return e
            }
            var u = n("e9BD"),
                l = n("VKa5"),
                p = n("zgdO"),
                d = n("Iwrg"),
                h = n("cJHJ"),
                f = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                v = function() {
                    function InboundFilters(e) {
                        void 0 === e && (e = {}), this._options = e, this.name = InboundFilters.id
                    }
                    return InboundFilters.prototype.setupOnce = function() {
                        Object(u.b)(function(e) {
                            var t = Object(l.a)();
                            if (!t) return e;
                            var n = t.getIntegration(InboundFilters);
                            if (n) {
                                var r = t.getClient(),
                                    o = r ? r.getOptions() : {},
                                    i = "function" === typeof n._mergeOptions ? n._mergeOptions(o) : {};
                                return "function" !== typeof n._shouldDropEvent ? e : n._shouldDropEvent(e, i) ? null : e
                            }
                            return e
                        })
                    }, InboundFilters.prototype._shouldDropEvent = function(e, t) {
                        return this._isSentryError(e, t) ? (p.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(d.d)(e)), !0) : this._isIgnoredError(e, t) ? (p.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(d.d)(e)), !0) : this._isDeniedUrl(e, t) ? (p.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(d.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0) : !this._isAllowedUrl(e, t) && (p.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(d.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
                    }, InboundFilters.prototype._isSentryError = function(e, t) {
                        if (!t.ignoreInternal) return !1;
                        try {
                            return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
                        } catch (n) {
                            return !1
                        }
                    }, InboundFilters.prototype._isIgnoredError = function(e, t) {
                        return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some(function(e) {
                            return t.ignoreErrors.some(function(t) {
                                return Object(h.a)(e, t)
                            })
                        })
                    }, InboundFilters.prototype._isDeniedUrl = function(e, t) {
                        if (!t.denyUrls || !t.denyUrls.length) return !1;
                        var n = this._getEventFilterUrl(e);
                        return !!n && t.denyUrls.some(function(e) {
                            return Object(h.a)(n, e)
                        })
                    }, InboundFilters.prototype._isAllowedUrl = function(e, t) {
                        if (!t.allowUrls || !t.allowUrls.length) return !0;
                        var n = this._getEventFilterUrl(e);
                        return !n || t.allowUrls.some(function(e) {
                            return Object(h.a)(n, e)
                        })
                    }, InboundFilters.prototype._mergeOptions = function(e) {
                        return void 0 === e && (e = {}), {
                            allowUrls: tslib_es6_spread(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                            denyUrls: tslib_es6_spread(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                            ignoreErrors: tslib_es6_spread(this._options.ignoreErrors || [], e.ignoreErrors || [], f),
                            ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
                        }
                    }, InboundFilters.prototype._getPossibleEventMessages = function(e) {
                        if (e.message) return [e.message];
                        if (e.exception) try {
                            var t = e.exception.values && e.exception.values[0] || {},
                                n = t.type,
                                r = void 0 === n ? "" : n,
                                o = t.value,
                                i = void 0 === o ? "" : o;
                            return ["" + i, r + ": " + i]
                        } catch (a) {
                            return p.a.error("Cannot extract message for event " + Object(d.d)(e)), []
                        }
                        return []
                    }, InboundFilters.prototype._getLastValidUrl = function(e) {
                        var t, n;
                        void 0 === e && (e = []);
                        for (var r = e.length - 1; r >= 0; r--) {
                            var o = e[r];
                            if ("<anonymous>" !== (null === (t = o) || void 0 === t ? void 0 : t.filename) && "[native code]" !== (null === (n = o) || void 0 === n ? void 0 : n.filename)) return o.filename || null
                        }
                        return null
                    }, InboundFilters.prototype._getEventFilterUrl = function(e) {
                        try {
                            if (e.stacktrace) {
                                var t = e.stacktrace.frames;
                                return this._getLastValidUrl(t)
                            }
                            if (e.exception) {
                                var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                                return this._getLastValidUrl(n)
                            }
                            return null
                        } catch (r) {
                            return p.a.error("Cannot extract url for event " + Object(d.d)(e)), null
                        }
                    }, InboundFilters.id = "InboundFilters", InboundFilters
                }();
            var _ = n("bTzN"),
                m = n("jniC"),
                y = "6.13.2",
                g = n("sY30"),
                b = n("iTbi"),
                E = n("MiOA"),
                O = n("26VM"),
                k = n("xqFT"),
                w = n("mekd"),
                j = n("5CQL"),
                S = [];

            function filterDuplicates(e) {
                return e.reduce(function(e, t) {
                    return e.every(function(e) {
                        return t.name !== e.name
                    }) && e.push(t), e
                }, [])
            }

            function setupIntegrations(e) {
                var t = {};
                return function getIntegrationsToSetup(e) {
                    var t = e.defaultIntegrations && tslib_es6_spread(e.defaultIntegrations) || [],
                        n = e.integrations,
                        r = tslib_es6_spread(filterDuplicates(t));
                    Array.isArray(n) ? r = tslib_es6_spread(r.filter(function(e) {
                        return n.every(function(t) {
                            return t.name !== e.name
                        })
                    }), filterDuplicates(n)) : "function" === typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
                    var o = r.map(function(e) {
                        return e.name
                    });
                    return -1 !== o.indexOf("Debug") && r.push.apply(r, tslib_es6_spread(r.splice(o.indexOf("Debug"), 1))), r
                }(e).forEach(function(e) {
                    t[e.name] = e,
                        function setupIntegration(e) {
                            -1 === S.indexOf(e.name) && (e.setupOnce(u.b, l.a), S.push(e.name), p.a.log("Integration installed: " + e.name))
                        }(e)
                }), Object.defineProperty(t, "initialized", {
                    value: !0
                }), t
            }
            var x = function() {
                    function BaseClient(e, t) {
                        this._integrations = {}, this._numProcessing = 0, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = new E.a(t.dsn))
                    }
                    return BaseClient.prototype.captureException = function(e, t, n) {
                        var r = this,
                            o = t && t.event_id;
                        return this._process(this._getBackend().eventFromException(e, t).then(function(e) {
                            return r._captureEvent(e, t, n)
                        }).then(function(e) {
                            o = e
                        })), o
                    }, BaseClient.prototype.captureMessage = function(e, t, n, r) {
                        var o = this,
                            i = n && n.event_id,
                            a = Object(O.i)(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
                        return this._process(a.then(function(e) {
                            return o._captureEvent(e, n, r)
                        }).then(function(e) {
                            i = e
                        })), i
                    }, BaseClient.prototype.captureEvent = function(e, t, n) {
                        var r = t && t.event_id;
                        return this._process(this._captureEvent(e, t, n).then(function(e) {
                            r = e
                        })), r
                    }, BaseClient.prototype.captureSession = function(e) {
                        this._isEnabled() ? "string" !== typeof e.release ? p.a.warn("Discarded session because of missing or non-string release") : (this._sendSession(e), e.update({
                            init: !1
                        })) : p.a.warn("SDK not enabled, will not capture session.")
                    }, BaseClient.prototype.getDsn = function() {
                        return this._dsn
                    }, BaseClient.prototype.getOptions = function() {
                        return this._options
                    }, BaseClient.prototype.getTransport = function() {
                        return this._getBackend().getTransport()
                    }, BaseClient.prototype.flush = function(e) {
                        var t = this;
                        return this._isClientDoneProcessing(e).then(function(n) {
                            return t.getTransport().close(e).then(function(e) {
                                return n && e
                            })
                        })
                    }, BaseClient.prototype.close = function(e) {
                        var t = this;
                        return this.flush(e).then(function(e) {
                            return t.getOptions().enabled = !1, e
                        })
                    }, BaseClient.prototype.setupIntegrations = function() {
                        this._isEnabled() && !this._integrations.initialized && (this._integrations = setupIntegrations(this._options))
                    }, BaseClient.prototype.getIntegration = function(e) {
                        try {
                            return this._integrations[e.id] || null
                        } catch (t) {
                            return p.a.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
                        }
                    }, BaseClient.prototype._updateSessionFromEvent = function(e, t) {
                        var n, r, o = !1,
                            i = !1,
                            a = t.exception && t.exception.values;
                        if (a) {
                            i = !0;
                            try {
                                for (var s = tslib_es6_values(a), u = s.next(); !u.done; u = s.next()) {
                                    var l = u.value.mechanism;
                                    if (l && !1 === l.handled) {
                                        o = !0;
                                        break
                                    }
                                }
                            } catch (d) {
                                n = {
                                    error: d
                                }
                            } finally {
                                try {
                                    u && !u.done && (r = s.return) && r.call(s)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                        var p = e.status === g.a.Ok;
                        (p && 0 === e.errors || p && o) && (e.update(c(c({}, o && {
                            status: g.a.Crashed
                        }), {
                            errors: e.errors || Number(i || o)
                        })), this.captureSession(e))
                    }, BaseClient.prototype._sendSession = function(e) {
                        this._getBackend().sendSession(e)
                    }, BaseClient.prototype._isClientDoneProcessing = function(e) {
                        var t = this;
                        return new _.a(function(n) {
                            var r = 0,
                                o = setInterval(function() {
                                    0 == t._numProcessing ? (clearInterval(o), n(!0)) : (r += 1, e && r >= e && (clearInterval(o), n(!1)))
                                }, 1)
                        })
                    }, BaseClient.prototype._getBackend = function() {
                        return this._backend
                    }, BaseClient.prototype._isEnabled = function() {
                        return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                    }, BaseClient.prototype._prepareEvent = function(e, t, n) {
                        var r = this,
                            o = this.getOptions().normalizeDepth,
                            i = void 0 === o ? 3 : o,
                            a = c(c({}, e), {
                                event_id: e.event_id || (n && n.event_id ? n.event_id : Object(d.i)()),
                                timestamp: e.timestamp || Object(k.a)()
                            });
                        this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
                        var s = t;
                        n && n.captureContext && (s = u.a.clone(s).update(n.captureContext));
                        var l = _.a.resolve(a);
                        return s && (l = s.applyToEvent(a, n)), l.then(function(e) {
                            return "number" === typeof i && i > 0 ? r._normalizeEvent(e, i) : e
                        })
                    }, BaseClient.prototype._normalizeEvent = function(e, t) {
                        if (!e) return null;
                        var n = c(c(c(c(c({}, e), e.breadcrumbs && {
                            breadcrumbs: e.breadcrumbs.map(function(e) {
                                return c(c({}, e), e.data && {
                                    data: Object(w.d)(e.data, t)
                                })
                            })
                        }), e.user && {
                            user: Object(w.d)(e.user, t)
                        }), e.contexts && {
                            contexts: Object(w.d)(e.contexts, t)
                        }), e.extra && {
                            extra: Object(w.d)(e.extra, t)
                        });
                        e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace);
                        var r = this.getOptions()._experiments;
                        return (void 0 === r ? {} : r).ensureNoCircularStructures ? Object(w.d)(n) : n
                    }, BaseClient.prototype._applyClientOptions = function(e) {
                        var t = this.getOptions(),
                            n = t.environment,
                            r = t.release,
                            o = t.dist,
                            i = t.maxValueLength,
                            a = void 0 === i ? 250 : i;
                        "environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== o && (e.dist = o), e.message && (e.message = Object(h.d)(e.message, a));
                        var s = e.exception && e.exception.values && e.exception.values[0];
                        s && s.value && (s.value = Object(h.d)(s.value, a));
                        var c = e.request;
                        c && c.url && (c.url = Object(h.d)(c.url, a))
                    }, BaseClient.prototype._applyIntegrationsMetadata = function(e) {
                        var t = Object.keys(this._integrations);
                        t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = tslib_es6_spread(e.sdk.integrations || [], t))
                    }, BaseClient.prototype._sendEvent = function(e) {
                        this._getBackend().sendEvent(e)
                    }, BaseClient.prototype._captureEvent = function(e, t, n) {
                        return this._processEvent(e, t, n).then(function(e) {
                            return e.event_id
                        }, function(e) {
                            p.a.error(e)
                        })
                    }, BaseClient.prototype._processEvent = function(e, t, n) {
                        var r, o, i = this,
                            a = this.getOptions(),
                            s = a.beforeSend,
                            c = a.sampleRate,
                            u = this.getTransport();
                        if (!this._isEnabled()) return _.a.reject(new j.a("SDK not enabled, will not capture event."));
                        var l = "transaction" === e.type;
                        return !l && "number" === typeof c && Math.random() > c ? (null === (o = (r = u).recordLostEvent) || void 0 === o || o.call(r, b.a.SampleRate, "event"), _.a.reject(new j.a("Discarding event because it's not included in the random sample (sampling rate = " + c + ")"))) : this._prepareEvent(e, n, t).then(function(n) {
                            var r, o;
                            if (null === n) throw null === (o = (r = u).recordLostEvent) || void 0 === o || o.call(r, b.a.EventProcessor, e.type || "event"), new j.a("An event processor returned null, will not send event.");
                            if (t && t.data && !0 === t.data.__sentry__ || l || !s) return n;
                            var a = s(n, t);
                            return i._ensureBeforeSendRv(a)
                        }).then(function(t) {
                            var r, o;
                            if (null === t) throw null === (o = (r = u).recordLostEvent) || void 0 === o || o.call(r, b.a.BeforeSend, e.type || "event"), new j.a("`beforeSend` returned `null`, will not send event.");
                            var a = n && n.getSession && n.getSession();
                            return !l && a && i._updateSessionFromEvent(a, t), i._sendEvent(t), t
                        }).then(null, function(e) {
                            if (e instanceof j.a) throw e;
                            throw i.captureException(e, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: e
                            }), new j.a("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                        })
                    }, BaseClient.prototype._process = function(e) {
                        var t = this;
                        this._numProcessing += 1, e.then(function(e) {
                            return t._numProcessing -= 1, e
                        }, function(e) {
                            return t._numProcessing -= 1, e
                        })
                    }, BaseClient.prototype._ensureBeforeSendRv = function(e) {
                        var t = "`beforeSend` method has to return `null` or a valid event.";
                        if (Object(O.m)(e)) return e.then(function(e) {
                            if (!Object(O.h)(e) && null !== e) throw new j.a(t);
                            return e
                        }, function(e) {
                            throw new j.a("beforeSend rejected with " + e)
                        });
                        if (!Object(O.h)(e) && null !== e) throw new j.a(t);
                        return e
                    }, BaseClient
                }(),
                T = n("AHYT"),
                B = function() {
                    function NoopTransport() {}
                    return NoopTransport.prototype.sendEvent = function(e) {
                        return _.a.resolve({
                            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                            status: T.a.Skipped
                        })
                    }, NoopTransport.prototype.close = function(e) {
                        return _.a.resolve(!0)
                    }, NoopTransport
                }(),
                F = function() {
                    function BaseBackend(e) {
                        this._options = e, this._options.dsn || p.a.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                    }
                    return BaseBackend.prototype.eventFromException = function(e, t) {
                        throw new j.a("Backend has to implement `eventFromException` method")
                    }, BaseBackend.prototype.eventFromMessage = function(e, t, n) {
                        throw new j.a("Backend has to implement `eventFromMessage` method")
                    }, BaseBackend.prototype.sendEvent = function(e) {
                        this._transport.sendEvent(e).then(null, function(e) {
                            p.a.error("Error while sending event: " + e)
                        })
                    }, BaseBackend.prototype.sendSession = function(e) {
                        this._transport.sendSession ? this._transport.sendSession(e).then(null, function(e) {
                            p.a.error("Error while sending session: " + e)
                        }) : p.a.warn("Dropping session because custom transport doesn't implement sendSession")
                    }, BaseBackend.prototype.getTransport = function() {
                        return this._transport
                    }, BaseBackend.prototype._setupTransport = function() {
                        return new B
                    }, BaseBackend
                }(),
                I = n("N7nI"),
                R = n("jiYP"),
                C = "?",
                D = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                U = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                A = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                L = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                P = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                H = /Minified React error #\d+;/i;

            function computeStackTrace(e) {
                var t = null,
                    n = 0;
                e && ("number" === typeof e.framesToPop ? n = e.framesToPop : H.test(e.message) && (n = 1));
                try {
                    if (t = function computeStackTraceFromStacktraceProp(e) {
                            if (!e || !e.stacktrace) return null;
                            for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), a = [], s = 0; s < i.length; s += 2) {
                                var c = null;
                                (t = r.exec(i[s])) ? c = {
                                    url: t[2],
                                    func: t[3],
                                    args: [],
                                    line: +t[1],
                                    column: null
                                }: (t = o.exec(i[s])) && (c = {
                                    url: t[6],
                                    func: t[3] || t[4],
                                    args: t[5] ? t[5].split(",") : [],
                                    line: +t[1],
                                    column: +t[2]
                                }), c && (!c.func && c.line && (c.func = C), a.push(c))
                            }
                            if (!a.length) return null;
                            return {
                                message: extractMessage(e),
                                name: e.name,
                                stack: a
                            }
                        }(e)) return popFrames(t, n)
                } catch (r) {}
                try {
                    if (t = function computeStackTraceFromStackProp(e) {
                            var t, n;
                            if (!e || !e.stack) return null;
                            for (var r, o, i, a = [], s = e.stack.split("\n"), c = 0; c < s.length; ++c) {
                                if (o = D.exec(s[c])) {
                                    var u = o[2] && 0 === o[2].indexOf("native");
                                    o[2] && 0 === o[2].indexOf("eval") && (r = P.exec(o[2])) && (o[2] = r[1], o[3] = r[2], o[4] = r[3]);
                                    var l = o[2] && 0 === o[2].indexOf("address at ") ? o[2].substr("address at ".length) : o[2],
                                        p = o[1] || C;
                                    t = __read(q(p, l), 2), p = t[0], l = t[1], i = {
                                        url: l,
                                        func: p,
                                        args: u ? [o[2]] : [],
                                        line: o[3] ? +o[3] : null,
                                        column: o[4] ? +o[4] : null
                                    }
                                } else if (o = A.exec(s[c])) i = {
                                    url: o[2],
                                    func: o[1] || C,
                                    args: [],
                                    line: +o[3],
                                    column: o[4] ? +o[4] : null
                                };
                                else {
                                    if (!(o = U.exec(s[c]))) continue;
                                    o[3] && o[3].indexOf(" > eval") > -1 && (r = L.exec(o[3])) ? (o[1] = o[1] || "eval", o[3] = r[1], o[4] = r[2], o[5] = "") : 0 !== c || o[5] || void 0 === e.columnNumber || (a[0].column = e.columnNumber + 1);
                                    var l = o[3],
                                        p = o[1] || C;
                                    n = __read(q(p, l), 2), p = n[0], l = n[1], i = {
                                        url: l,
                                        func: p,
                                        args: o[2] ? o[2].split(",") : [],
                                        line: o[4] ? +o[4] : null,
                                        column: o[5] ? +o[5] : null
                                    }
                                }!i.func && i.line && (i.func = C), a.push(i)
                            }
                            if (!a.length) return null;
                            return {
                                message: extractMessage(e),
                                name: e.name,
                                stack: a
                            }
                        }(e)) return popFrames(t, n)
                } catch (r) {}
                return {
                    message: extractMessage(e),
                    name: e && e.name,
                    stack: [],
                    failed: !0
                }
            }
            var q = function extractSafariExtensionDetails(e, t) {
                var n = -1 !== e.indexOf("safari-extension"),
                    r = -1 !== e.indexOf("safari-web-extension");
                return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : C, n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
            };

            function popFrames(e, t) {
                try {
                    return a(a({}, e), {
                        stack: e.stack.slice(t)
                    })
                } catch (n) {
                    return e
                }
            }

            function extractMessage(e) {
                var t = e && e.message;
                return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
            }
            var N = 50;

            function exceptionFromStacktrace(e) {
                var t = prepareFramesForEvent(e.stack),
                    n = {
                        type: e.name,
                        value: e.message
                    };
                return t && t.length && (n.stacktrace = {
                    frames: t
                }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
            }

            function eventFromStacktrace(e) {
                return {
                    exception: {
                        values: [exceptionFromStacktrace(e)]
                    }
                }
            }

            function prepareFramesForEvent(e) {
                if (!e || !e.length) return [];
                var t = e,
                    n = t[0].func || "",
                    r = t[t.length - 1].func || "";
                return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, N).map(function(e) {
                    return {
                        colno: null === e.column ? void 0 : e.column,
                        filename: e.url || t[0].url,
                        function: e.func || "?",
                        in_app: !0,
                        lineno: null === e.line ? void 0 : e.line
                    }
                }).reverse()
            }

            function eventFromUnknownInput(e, t, n) {
                var r;
                if (void 0 === n && (n = {}), Object(O.e)(e) && e.error) return r = eventFromStacktrace(computeStackTrace(e = e.error));
                if (Object(O.a)(e) || Object(O.b)(e)) {
                    var o = e,
                        i = o.name || (Object(O.a)(o) ? "DOMError" : "DOMException"),
                        s = o.message ? i + ": " + o.message : i;
                    return r = eventFromString(s, t, n), Object(d.b)(r, s), "code" in o && (r.tags = a(a({}, r.tags), {
                        "DOMException.code": "" + o.code
                    })), r
                }
                return Object(O.d)(e) ? r = eventFromStacktrace(computeStackTrace(e)) : Object(O.h)(e) || Object(O.f)(e) ? (r = function eventFromPlainObject(e, t, n) {
                    var r = {
                        exception: {
                            values: [{
                                type: Object(O.f)(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                                value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(w.b)(e)
                            }]
                        },
                        extra: {
                            __serialized__: Object(w.e)(e)
                        }
                    };
                    if (t) {
                        var o = prepareFramesForEvent(computeStackTrace(t).stack);
                        r.stacktrace = {
                            frames: o
                        }
                    }
                    return r
                }(e, t, n.rejection), Object(d.a)(r, {
                    synthetic: !0
                }), r) : (r = eventFromString(e, t, n), Object(d.b)(r, "" + e, void 0), Object(d.a)(r, {
                    synthetic: !0
                }), r)
            }

            function eventFromString(e, t, n) {
                void 0 === n && (n = {});
                var r = {
                    message: e
                };
                if (n.attachStacktrace && t) {
                    var o = prepareFramesForEvent(computeStackTrace(t).stack);
                    r.stacktrace = {
                        frames: o
                    }
                }
                return r
            }

            function getSdkMetadataForEnvelopeHeader(e) {
                if (e.metadata && e.metadata.sdk) {
                    var t = e.metadata.sdk;
                    return {
                        name: t.name,
                        version: t.version
                    }
                }
            }

            function enhanceEventWithSdkInfo(e, t) {
                return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = tslib_es6_spread(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = tslib_es6_spread(e.sdk.packages || [], t.packages || []), e) : e
            }

            function sessionToSentryRequest(e, t) {
                var n = getSdkMetadataForEnvelopeHeader(t),
                    r = "aggregates" in e ? "sessions" : "session";
                return {
                    body: JSON.stringify(c(c({
                        sent_at: (new Date).toISOString()
                    }, n && {
                        sdk: n
                    }), t.forceEnvelope() && {
                        dsn: t.getDsn().toString()
                    })) + "\n" + JSON.stringify({
                        type: r
                    }) + "\n" + JSON.stringify(e),
                    type: r,
                    url: t.getEnvelopeEndpointWithUrlEncodedAuth()
                }
            }

            function eventToSentryRequest(e, t) {
                var n = getSdkMetadataForEnvelopeHeader(t),
                    r = e.type || "event",
                    o = "transaction" === r || t.forceEnvelope(),
                    i = e.debug_meta || {},
                    a = i.transactionSampling,
                    s = function tslib_es6_rest(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                        }
                        return n
                    }(i, ["transactionSampling"]),
                    u = a || {},
                    l = u.method,
                    p = u.rate;
                0 === Object.keys(s).length ? delete e.debug_meta : e.debug_meta = s;
                var d = {
                    body: JSON.stringify(n ? enhanceEventWithSdkInfo(e, t.metadata.sdk) : e),
                    type: r,
                    url: o ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
                };
                if (o) {
                    var h = JSON.stringify(c(c({
                        event_id: e.event_id,
                        sent_at: (new Date).toISOString()
                    }, n && {
                        sdk: n
                    }), t.forceEnvelope() && {
                        dsn: t.getDsn().toString()
                    })) + "\n" + JSON.stringify({
                        type: r,
                        sample_rates: [{
                            id: l,
                            rate: p
                        }]
                    }) + "\n" + d.body;
                    d.body = h
                }
                return d
            }
            var M = function() {
                    function API(e, t, n) {
                        void 0 === t && (t = {}), this.dsn = e, this._dsnObject = new E.a(e), this.metadata = t, this._tunnel = n
                    }
                    return API.prototype.getDsn = function() {
                        return this._dsnObject
                    }, API.prototype.forceEnvelope = function() {
                        return !!this._tunnel
                    }, API.prototype.getBaseApiEndpoint = function() {
                        var e = this.getDsn(),
                            t = e.protocol ? e.protocol + ":" : "",
                            n = e.port ? ":" + e.port : "";
                        return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
                    }, API.prototype.getStoreEndpoint = function() {
                        return this._getIngestEndpoint("store")
                    }, API.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                        return this.getStoreEndpoint() + "?" + this._encodedAuth()
                    }, API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                        return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
                    }, API.prototype.getStoreEndpointPath = function() {
                        var e = this.getDsn();
                        return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
                    }, API.prototype.getRequestHeaders = function(e, t) {
                        var n = this.getDsn(),
                            r = ["Sentry sentry_version=7"];
                        return r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.publicKey), n.pass && r.push("sentry_secret=" + n.pass), {
                            "Content-Type": "application/json",
                            "X-Sentry-Auth": r.join(", ")
                        }
                    }, API.prototype.getReportDialogEndpoint = function(e) {
                        void 0 === e && (e = {});
                        var t = this.getDsn(),
                            n = this.getBaseApiEndpoint() + "embed/error-page/",
                            r = [];
                        for (var o in r.push("dsn=" + t.toString()), e)
                            if ("dsn" !== o)
                                if ("user" === o) {
                                    if (!e.user) continue;
                                    e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                                } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                        return r.length ? n + "?" + r.join("&") : n
                    }, API.prototype._getEnvelopeEndpoint = function() {
                        return this._getIngestEndpoint("envelope")
                    }, API.prototype._getIngestEndpoint = function(e) {
                        return this._tunnel ? this._tunnel : "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/"
                    }, API.prototype._encodedAuth = function() {
                        var e = {
                            sentry_key: this.getDsn().publicKey,
                            sentry_version: "7"
                        };
                        return Object(w.f)(e)
                    }, API
                }(),
                W = n("IZJC"),
                G = {
                    event: "error",
                    transaction: "transaction",
                    session: "session",
                    attachment: "attachment"
                },
                X = Object(d.e)(),
                J = function() {
                    function BaseTransport(e) {
                        var t = this;
                        this.options = e, this._buffer = new W.a(30), this._rateLimits = {}, this._outcomes = {}, this._api = new M(e.dsn, e._metadata, e.tunnel), this.url = this._api.getStoreEndpointWithUrlEncodedAuth(), this.options.sendClientReports && X.document && X.document.addEventListener("visibilitychange", function() {
                            "hidden" === X.document.visibilityState && t._flushOutcomes()
                        })
                    }
                    return BaseTransport.prototype.sendEvent = function(e) {
                        throw new j.a("Transport Class has to implement `sendEvent` method")
                    }, BaseTransport.prototype.close = function(e) {
                        return this._buffer.drain(e)
                    }, BaseTransport.prototype.recordLostEvent = function(e, t) {
                        var n;
                        if (this.options.sendClientReports) {
                            var r = G[t] + ":" + e;
                            p.a.log("Adding outcome: " + r), this._outcomes[r] = (null !== (n = this._outcomes[r]) && void 0 !== n ? n : 0) + 1
                        }
                    }, BaseTransport.prototype._flushOutcomes = function() {
                        if (this.options.sendClientReports)
                            if (X.navigator && "function" === typeof X.navigator.sendBeacon) {
                                var e = this._outcomes;
                                if (this._outcomes = {}, Object.keys(e).length) {
                                    p.a.log("Flushing outcomes:\n" + JSON.stringify(e, null, 2));
                                    var t = this._api.getEnvelopeEndpointWithUrlEncodedAuth(),
                                        n = JSON.stringify({}) + "\n" + JSON.stringify({
                                            type: "client_report"
                                        }) + "\n" + JSON.stringify({
                                            timestamp: Object(k.a)(),
                                            discarded_events: Object.keys(e).map(function(t) {
                                                var n = __read(t.split(":"), 2),
                                                    r = n[0];
                                                return {
                                                    reason: n[1],
                                                    category: r,
                                                    quantity: e[t]
                                                }
                                            })
                                        });
                                    X.navigator.sendBeacon(t, n)
                                } else p.a.log("No outcomes to flush")
                            } else p.a.warn("Beacon API not available, skipping sending outcomes.")
                    }, BaseTransport.prototype._handleResponse = function(e) {
                        var t = e.requestType,
                            n = e.response,
                            r = e.headers,
                            o = e.resolve,
                            i = e.reject,
                            a = T.a.fromHttpCode(n.status);
                        this._handleRateLimit(r) && p.a.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)), a !== T.a.Success ? i(n) : o({
                            status: a
                        })
                    }, BaseTransport.prototype._disabledUntil = function(e) {
                        var t = G[e];
                        return this._rateLimits[t] || this._rateLimits.all
                    }, BaseTransport.prototype._isRateLimited = function(e) {
                        return this._disabledUntil(e) > new Date(Date.now())
                    }, BaseTransport.prototype._handleRateLimit = function(e) {
                        var t, n, r, o, i = Date.now(),
                            a = e["x-sentry-rate-limits"],
                            s = e["retry-after"];
                        if (a) {
                            try {
                                for (var c = __values(a.trim().split(",")), u = c.next(); !u.done; u = c.next()) {
                                    var l = u.value.split(":", 2),
                                        p = parseInt(l[0], 10),
                                        h = 1e3 * (isNaN(p) ? 60 : p);
                                    try {
                                        for (var f = (r = void 0, __values(l[1].split(";"))), v = f.next(); !v.done; v = f.next()) {
                                            var _ = v.value;
                                            this._rateLimits[_ || "all"] = new Date(i + h)
                                        }
                                    } catch (m) {
                                        r = {
                                            error: m
                                        }
                                    } finally {
                                        try {
                                            v && !v.done && (o = f.return) && o.call(f)
                                        } finally {
                                            if (r) throw r.error
                                        }
                                    }
                                }
                            } catch (y) {
                                t = {
                                    error: y
                                }
                            } finally {
                                try {
                                    u && !u.done && (n = c.return) && n.call(c)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return !0
                        }
                        return !!s && (this._rateLimits.all = new Date(i + Object(d.g)(i, s)), !0)
                    }, BaseTransport
                }();
            var z = function(e) {
                    function FetchTransport(t, n) {
                        void 0 === n && (n = function getNativeFetchImplementation() {
                            var e, t, n = Object(d.e)();
                            if (Object(R.a)(n.fetch)) return n.fetch.bind(n);
                            var r = n.document,
                                o = n.fetch;
                            if ("function" === typeof(null === (e = r) || void 0 === e ? void 0 : e.createElement)) try {
                                var i = r.createElement("iframe");
                                i.hidden = !0, r.head.appendChild(i), (null === (t = i.contentWindow) || void 0 === t ? void 0 : t.fetch) && (o = i.contentWindow.fetch), r.head.removeChild(i)
                            } catch (a) {
                                p.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a)
                            }
                            return o.bind(n)
                        }());
                        var r = e.call(this, t) || this;
                        return r._fetch = n, r
                    }
                    return __extends(FetchTransport, e), FetchTransport.prototype.sendEvent = function(e) {
                        return this._sendRequest(eventToSentryRequest(e, this._api), e)
                    }, FetchTransport.prototype.sendSession = function(e) {
                        return this._sendRequest(sessionToSentryRequest(e, this._api), e)
                    }, FetchTransport.prototype._sendRequest = function(e, t) {
                        var n = this;
                        if (this._isRateLimited(e.type)) return this.recordLostEvent(b.a.RateLimitBackoff, e.type), Promise.reject({
                            event: t,
                            type: e.type,
                            reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                            status: 429
                        });
                        var r = {
                            body: e.body,
                            method: "POST",
                            referrerPolicy: Object(R.e)() ? "origin" : ""
                        };
                        return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add(function() {
                            return new _.a(function(t, o) {
                                n._fetch(e.url, r).then(function(r) {
                                    var i = {
                                        "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                        "retry-after": r.headers.get("Retry-After")
                                    };
                                    n._handleResponse({
                                        requestType: e.type,
                                        response: r,
                                        headers: i,
                                        resolve: t,
                                        reject: o
                                    })
                                }).catch(o)
                            })
                        }).then(void 0, function(t) {
                            throw t instanceof j.a ? n.recordLostEvent(b.a.QueueOverflow, e.type) : n.recordLostEvent(b.a.NetworkError, e.type), t
                        })
                    }, FetchTransport
                }(J),
                $ = function(e) {
                    function XHRTransport() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return __extends(XHRTransport, e), XHRTransport.prototype.sendEvent = function(e) {
                        return this._sendRequest(eventToSentryRequest(e, this._api), e)
                    }, XHRTransport.prototype.sendSession = function(e) {
                        return this._sendRequest(sessionToSentryRequest(e, this._api), e)
                    }, XHRTransport.prototype._sendRequest = function(e, t) {
                        var n = this;
                        return this._isRateLimited(e.type) ? (this.recordLostEvent(b.a.RateLimitBackoff, e.type), Promise.reject({
                            event: t,
                            type: e.type,
                            reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                            status: 429
                        })) : this._buffer.add(function() {
                            return new _.a(function(t, r) {
                                var o = new XMLHttpRequest;
                                for (var i in o.onreadystatechange = function() {
                                        if (4 === o.readyState) {
                                            var i = {
                                                "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                                "retry-after": o.getResponseHeader("Retry-After")
                                            };
                                            n._handleResponse({
                                                requestType: e.type,
                                                response: o,
                                                headers: i,
                                                resolve: t,
                                                reject: r
                                            })
                                        }
                                    }, o.open("POST", e.url), n.options.headers) n.options.headers.hasOwnProperty(i) && o.setRequestHeader(i, n.options.headers[i]);
                                o.send(e.body)
                            })
                        }).then(void 0, function(t) {
                            throw t instanceof j.a ? n.recordLostEvent(b.a.QueueOverflow, e.type) : n.recordLostEvent(b.a.NetworkError, e.type), t
                        })
                    }, XHRTransport
                }(J),
                V = function(e) {
                    function BrowserBackend() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return __extends(BrowserBackend, e), BrowserBackend.prototype.eventFromException = function(e, t) {
                        return function eventFromException(e, t, n) {
                            var r = eventFromUnknownInput(t, n && n.syntheticException || void 0, {
                                attachStacktrace: e.attachStacktrace
                            });
                            return Object(d.a)(r, {
                                handled: !0,
                                type: "generic"
                            }), r.level = I.a.Error, n && n.event_id && (r.event_id = n.event_id), _.a.resolve(r)
                        }(this._options, e, t)
                    }, BrowserBackend.prototype.eventFromMessage = function(e, t, n) {
                        return void 0 === t && (t = I.a.Info),
                            function eventFromMessage(e, t, n, r) {
                                void 0 === n && (n = I.a.Info);
                                var o = eventFromString(t, r && r.syntheticException || void 0, {
                                    attachStacktrace: e.attachStacktrace
                                });
                                return o.level = n, r && r.event_id && (o.event_id = r.event_id), _.a.resolve(o)
                            }(this._options, e, t, n)
                    }, BrowserBackend.prototype._setupTransport = function() {
                        if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                        var t = a(a({}, this._options.transportOptions), {
                            dsn: this._options.dsn,
                            tunnel: this._options.tunnel,
                            sendClientReports: this._options.sendClientReports,
                            _metadata: this._options._metadata
                        });
                        return this._options.transport ? new this._options.transport(t) : Object(R.b)() ? new z(t) : new $(t)
                    }, BrowserBackend
                }(F),
                K = n("1FNf"),
                Y = Object(d.e)(),
                Q = 0;

            function shouldIgnoreOnError() {
                return Q > 0
            }

            function wrap(e, t, n) {
                if (void 0 === t && (t = {}), "function" !== typeof e) return e;
                try {
                    if (e.__sentry__) return e;
                    if (e.__sentry_wrapped__) return e.__sentry_wrapped__
                } catch (i) {
                    return e
                }
                var r = function sentryWrapped() {
                    var r = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" === typeof n && n.apply(this, arguments);
                        var o = r.map(function(e) {
                            return wrap(e, t)
                        });
                        return e.handleEvent ? e.handleEvent.apply(this, o) : e.apply(this, o)
                    } catch (i) {
                        throw function ignoreNextOnError() {
                            Q += 1, setTimeout(function() {
                                Q -= 1
                            })
                        }(), Object(K.c)(function(e) {
                            e.addEventProcessor(function(e) {
                                var n = a({}, e);
                                return t.mechanism && (Object(d.b)(n, void 0, void 0), Object(d.a)(n, t.mechanism)), n.extra = a(a({}, n.extra), {
                                    arguments: r
                                }), n
                            }), Object(K.a)(i)
                        }), i
                    }
                };
                try {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o])
                } catch (s) {}
                e.prototype = e.prototype || {}, r.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
                    enumerable: !1,
                    value: r
                }), Object.defineProperties(r, {
                    __sentry__: {
                        enumerable: !1,
                        value: !0
                    },
                    __sentry_original__: {
                        enumerable: !1,
                        value: e
                    }
                });
                try {
                    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                        get: function get() {
                            return e.name
                        }
                    })
                } catch (s) {}
                return r
            }
            var Z = n("exJp"),
                ee = function() {
                    function Breadcrumbs(e) {
                        this.name = Breadcrumbs.id, this._options = a({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, e)
                    }
                    return Breadcrumbs.prototype.addSentryBreadcrumb = function(e) {
                        this._options.sentry && Object(l.a)().addBreadcrumb({
                            category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                            event_id: e.event_id,
                            level: e.level,
                            message: Object(d.d)(e)
                        }, {
                            event: e
                        })
                    }, Breadcrumbs.prototype.setupOnce = function() {
                        var e = this;
                        this._options.console && Object(m.a)({
                            callback: function callback() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._consoleBreadcrumb.apply(e, __spread(t))
                            },
                            type: "console"
                        }), this._options.dom && Object(m.a)({
                            callback: function callback() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._domBreadcrumb.apply(e, __spread(t))
                            },
                            type: "dom"
                        }), this._options.xhr && Object(m.a)({
                            callback: function callback() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._xhrBreadcrumb.apply(e, __spread(t))
                            },
                            type: "xhr"
                        }), this._options.fetch && Object(m.a)({
                            callback: function callback() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._fetchBreadcrumb.apply(e, __spread(t))
                            },
                            type: "fetch"
                        }), this._options.history && Object(m.a)({
                            callback: function callback() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._historyBreadcrumb.apply(e, __spread(t))
                            },
                            type: "history"
                        })
                    }, Breadcrumbs.prototype._consoleBreadcrumb = function(e) {
                        var t = {
                            category: "console",
                            data: {
                                arguments: e.args,
                                logger: "console"
                            },
                            level: I.a.fromString(e.level),
                            message: Object(h.b)(e.args, " ")
                        };
                        if ("assert" === e.level) {
                            if (!1 !== e.args[0]) return;
                            t.message = "Assertion failed: " + (Object(h.b)(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
                        }
                        Object(l.a)().addBreadcrumb(t, {
                            input: e.args,
                            level: e.level
                        })
                    }, Breadcrumbs.prototype._domBreadcrumb = function(e) {
                        var t, n = "object" === typeof this._options.dom ? this._options.dom.serializeAttribute : void 0;
                        "string" === typeof n && (n = [n]);
                        try {
                            t = e.event.target ? Object(Z.a)(e.event.target, n) : Object(Z.a)(e.event, n)
                        } catch (r) {
                            t = "<unknown>"
                        }
                        0 !== t.length && Object(l.a)().addBreadcrumb({
                            category: "ui." + e.name,
                            message: t
                        }, {
                            event: e.event,
                            name: e.name,
                            global: e.global
                        })
                    }, Breadcrumbs.prototype._xhrBreadcrumb = function(e) {
                        if (e.endTimestamp) {
                            if (e.xhr.__sentry_own_request__) return;
                            var t = e.xhr.__sentry_xhr__ || {},
                                n = t.method,
                                r = t.url,
                                o = t.status_code,
                                i = t.body;
                            Object(l.a)().addBreadcrumb({
                                category: "xhr",
                                data: {
                                    method: n,
                                    url: r,
                                    status_code: o
                                },
                                type: "http"
                            }, {
                                xhr: e.xhr,
                                input: i
                            })
                        } else;
                    }, Breadcrumbs.prototype._fetchBreadcrumb = function(e) {
                        e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Object(l.a)().addBreadcrumb({
                            category: "fetch",
                            data: e.fetchData,
                            level: I.a.Error,
                            type: "http"
                        }, {
                            data: e.error,
                            input: e.args
                        }) : Object(l.a)().addBreadcrumb({
                            category: "fetch",
                            data: a(a({}, e.fetchData), {
                                status_code: e.response.status
                            }),
                            type: "http"
                        }, {
                            input: e.args,
                            response: e.response
                        })))
                    }, Breadcrumbs.prototype._historyBreadcrumb = function(e) {
                        var t = Object(d.e)(),
                            n = e.from,
                            r = e.to,
                            o = Object(d.h)(t.location.href),
                            i = Object(d.h)(n),
                            a = Object(d.h)(r);
                        i.path || (i = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), Object(l.a)().addBreadcrumb({
                            category: "navigation",
                            data: {
                                from: n,
                                to: r
                            }
                        })
                    }, Breadcrumbs.id = "Breadcrumbs", Breadcrumbs
                }(),
                te = function(e) {
                    function BrowserClient(t) {
                        void 0 === t && (t = {});
                        return t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                            name: "sentry.javascript.browser",
                            packages: [{
                                name: "npm:@sentry/browser",
                                version: y
                            }],
                            version: y
                        }, e.call(this, V, t) || this
                    }
                    return __extends(BrowserClient, e), BrowserClient.prototype.showReportDialog = function(e) {
                        void 0 === e && (e = {}), Object(d.e)().document && (this._isEnabled() ? function injectReportDialog(e) {
                            if (void 0 === e && (e = {}), Y.document)
                                if (e.eventId)
                                    if (e.dsn) {
                                        var t = Y.document.createElement("script");
                                        t.async = !0, t.src = new M(e.dsn).getReportDialogEndpoint(e), e.onLoad && (t.onload = e.onLoad);
                                        var n = Y.document.head || Y.document.body;
                                        n && n.appendChild(t)
                                    } else p.a.error("Missing dsn option in showReportDialog call");
                            else p.a.error("Missing eventId option in showReportDialog call")
                        }(a(a({}, e), {
                            dsn: e.dsn || this.getDsn()
                        })) : p.a.error("Trying to call showReportDialog with Sentry Client disabled"))
                    }, BrowserClient.prototype._prepareEvent = function(t, n, r) {
                        return t.platform = t.platform || "javascript", e.prototype._prepareEvent.call(this, t, n, r)
                    }, BrowserClient.prototype._sendEvent = function(t) {
                        var n = this.getIntegration(ee);
                        n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
                    }, BrowserClient
                }(x),
                ne = n("AHQf"),
                re = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                oe = function() {
                    function TryCatch(e) {
                        this.name = TryCatch.id, this._options = a({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, e)
                    }
                    return TryCatch.prototype.setupOnce = function() {
                        var e = Object(d.e)();
                        (this._options.setTimeout && Object(w.c)(e, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Object(w.c)(e, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Object(w.c)(e, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in e && Object(w.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : re).forEach(this._wrapEventTarget.bind(this))
                    }, TryCatch.prototype._wrapTimeFunction = function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = t[0];
                            return t[0] = wrap(r, {
                                mechanism: {
                                    data: {
                                        function: Object(ne.a)(e)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }), e.apply(this, t)
                        }
                    }, TryCatch.prototype._wrapRAF = function(e) {
                        return function(t) {
                            return e.call(this, wrap(t, {
                                mechanism: {
                                    data: {
                                        function: "requestAnimationFrame",
                                        handler: Object(ne.a)(e)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        }
                    }, TryCatch.prototype._wrapEventTarget = function(e) {
                        var t = Object(d.e)(),
                            n = t[e] && t[e].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(w.c)(n, "addEventListener", function(t) {
                            return function(n, r, o) {
                                try {
                                    "function" === typeof r.handleEvent && (r.handleEvent = wrap(r.handleEvent.bind(r), {
                                        mechanism: {
                                            data: {
                                                function: "handleEvent",
                                                handler: Object(ne.a)(r),
                                                target: e
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }))
                                } catch (i) {}
                                return t.call(this, n, wrap(r, {
                                    mechanism: {
                                        data: {
                                            function: "addEventListener",
                                            handler: Object(ne.a)(r),
                                            target: e
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), o)
                            }
                        }), Object(w.c)(n, "removeEventListener", function(e) {
                            return function(t, n, r) {
                                var o, i = n;
                                try {
                                    var a = null === (o = i) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                                    a && e.call(this, t, a, r)
                                } catch (s) {}
                                return e.call(this, t, i, r)
                            }
                        }))
                    }, TryCatch.prototype._wrapXHR = function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = this;
                            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(e) {
                                e in r && "function" === typeof r[e] && Object(w.c)(r, e, function(t) {
                                    var n = {
                                        mechanism: {
                                            data: {
                                                function: e,
                                                handler: Object(ne.a)(t)
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    };
                                    return t.__sentry_original__ && (n.mechanism.data.handler = Object(ne.a)(t.__sentry_original__)), wrap(t, n)
                                })
                            }), e.apply(this, t)
                        }
                    }, TryCatch.id = "TryCatch", TryCatch
                }(),
                ie = function() {
                    function GlobalHandlers(e) {
                        this.name = GlobalHandlers.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = a({
                            onerror: !0,
                            onunhandledrejection: !0
                        }, e)
                    }
                    return GlobalHandlers.prototype.setupOnce = function() {
                        Error.stackTraceLimit = 50, this._options.onerror && (p.a.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (p.a.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
                    }, GlobalHandlers.prototype._installGlobalOnErrorHandler = function() {
                        var e = this;
                        this._onErrorHandlerInstalled || (Object(m.a)({
                            callback: function callback(t) {
                                var n = t.error,
                                    r = Object(l.a)(),
                                    o = r.getIntegration(GlobalHandlers),
                                    i = n && !0 === n.__sentry_own_request__;
                                if (o && !shouldIgnoreOnError() && !i) {
                                    var a = r.getClient(),
                                        s = void 0 === n && Object(O.k)(t.msg) ? e._eventFromIncompleteOnError(t.msg, t.url, t.line, t.column) : e._enhanceEventWithInitialFrame(eventFromUnknownInput(n || t.msg, void 0, {
                                            attachStacktrace: a && a.getOptions().attachStacktrace,
                                            rejection: !1
                                        }), t.url, t.line, t.column);
                                    Object(d.a)(s, {
                                        handled: !1,
                                        type: "onerror"
                                    }), r.captureEvent(s, {
                                        originalException: n
                                    })
                                }
                            },
                            type: "error"
                        }), this._onErrorHandlerInstalled = !0)
                    }, GlobalHandlers.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                        var e = this;
                        this._onUnhandledRejectionHandlerInstalled || (Object(m.a)({
                            callback: function callback(t) {
                                var n = t;
                                try {
                                    "reason" in t ? n = t.reason : "detail" in t && "reason" in t.detail && (n = t.detail.reason)
                                } catch (c) {}
                                var r = Object(l.a)(),
                                    o = r.getIntegration(GlobalHandlers),
                                    i = n && !0 === n.__sentry_own_request__;
                                if (!o || shouldIgnoreOnError() || i) return !0;
                                var a = r.getClient(),
                                    s = Object(O.i)(n) ? e._eventFromRejectionWithPrimitive(n) : eventFromUnknownInput(n, void 0, {
                                        attachStacktrace: a && a.getOptions().attachStacktrace,
                                        rejection: !0
                                    });
                                s.level = I.a.Error, Object(d.a)(s, {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }), r.captureEvent(s, {
                                    originalException: n
                                })
                            },
                            type: "unhandledrejection"
                        }), this._onUnhandledRejectionHandlerInstalled = !0)
                    }, GlobalHandlers.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
                        var o, i = Object(O.e)(e) ? e.message : e,
                            a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        a && (o = a[1], i = a[2]);
                        var s = {
                            exception: {
                                values: [{
                                    type: o || "Error",
                                    value: i
                                }]
                            }
                        };
                        return this._enhanceEventWithInitialFrame(s, t, n, r)
                    }, GlobalHandlers.prototype._eventFromRejectionWithPrimitive = function(e) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + String(e)
                                }]
                            }
                        }
                    }, GlobalHandlers.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
                        e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                        var o = isNaN(parseInt(r, 10)) ? void 0 : r,
                            i = isNaN(parseInt(n, 10)) ? void 0 : n,
                            a = Object(O.k)(t) && t.length > 0 ? t : Object(d.f)();
                        return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                            colno: o,
                            filename: a,
                            function: "?",
                            in_app: !0,
                            lineno: i
                        }), e
                    }, GlobalHandlers.id = "GlobalHandlers", GlobalHandlers
                }(),
                ae = "cause",
                se = 5,
                ce = function() {
                    function LinkedErrors(e) {
                        void 0 === e && (e = {}), this.name = LinkedErrors.id, this._key = e.key || ae, this._limit = e.limit || se
                    }
                    return LinkedErrors.prototype.setupOnce = function() {
                        Object(u.b)(function(e, t) {
                            var n = Object(l.a)().getIntegration(LinkedErrors);
                            if (n) {
                                var r = n._handler && n._handler.bind(n);
                                return "function" === typeof r ? r(e, t) : e
                            }
                            return e
                        })
                    }, LinkedErrors.prototype._handler = function(e, t) {
                        if (!e.exception || !e.exception.values || !t || !Object(O.g)(t.originalException, Error)) return e;
                        var n = this._walkErrorTree(t.originalException, this._key);
                        return e.exception.values = __spread(n, e.exception.values), e
                    }, LinkedErrors.prototype._walkErrorTree = function(e, t, n) {
                        if (void 0 === n && (n = []), !Object(O.g)(e[t], Error) || n.length + 1 >= this._limit) return n;
                        var r = exceptionFromStacktrace(computeStackTrace(e[t]));
                        return this._walkErrorTree(e[t], t, __spread([r], n))
                    }, LinkedErrors.id = "LinkedErrors", LinkedErrors
                }(),
                ue = function() {
                    function Dedupe() {
                        this.name = Dedupe.id
                    }
                    return Dedupe.prototype.setupOnce = function(e, t) {
                        e(function(e) {
                            var n = t().getIntegration(Dedupe);
                            if (n) {
                                try {
                                    if (n._shouldDropEvent(e, n._previousEvent)) return p.a.warn("Event dropped due to being a duplicate of previously captured event."), null
                                } catch (r) {
                                    return n._previousEvent = e
                                }
                                return n._previousEvent = e
                            }
                            return e
                        })
                    }, Dedupe.prototype._shouldDropEvent = function(e, t) {
                        return !!t && (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t))
                    }, Dedupe.prototype._isSameMessageEvent = function(e, t) {
                        var n = e.message,
                            r = t.message;
                        return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t))))
                    }, Dedupe.prototype._getFramesFromEvent = function(e) {
                        var t = e.exception;
                        if (t) try {
                            return t.values[0].stacktrace.frames
                        } catch (n) {
                            return
                        } else if (e.stacktrace) return e.stacktrace.frames
                    }, Dedupe.prototype._isSameStacktrace = function(e, t) {
                        var n = this._getFramesFromEvent(e),
                            r = this._getFramesFromEvent(t);
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        if (n = n, (r = r).length !== n.length) return !1;
                        for (var o = 0; o < r.length; o++) {
                            var i = r[o],
                                a = n[o];
                            if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
                        }
                        return !0
                    }, Dedupe.prototype._getExceptionFromEvent = function(e) {
                        return e.exception && e.exception.values && e.exception.values[0]
                    }, Dedupe.prototype._isSameExceptionEvent = function(e, t) {
                        var n = this._getExceptionFromEvent(t),
                            r = this._getExceptionFromEvent(e);
                        return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)))
                    }, Dedupe.prototype._isSameFingerprint = function(e, t) {
                        var n = e.fingerprint,
                            r = t.fingerprint;
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        n = n, r = r;
                        try {
                            return !(n.join("") !== r.join(""))
                        } catch (o) {
                            return !1
                        }
                    }, Dedupe.id = "Dedupe", Dedupe
                }(),
                le = Object(d.e)(),
                pe = function() {
                    function UserAgent() {
                        this.name = UserAgent.id
                    }
                    return UserAgent.prototype.setupOnce = function() {
                        Object(u.b)(function(e) {
                            var t, n, r;
                            if (Object(l.a)().getIntegration(UserAgent)) {
                                if (!le.navigator && !le.location && !le.document) return e;
                                var o = (null === (t = e.request) || void 0 === t ? void 0 : t.url) || (null === (n = le.location) || void 0 === n ? void 0 : n.href),
                                    i = (le.document || {}).referrer,
                                    s = (le.navigator || {}).userAgent,
                                    c = a(a(a({}, null === (r = e.request) || void 0 === r ? void 0 : r.headers), i && {
                                        Referer: i
                                    }), s && {
                                        "User-Agent": s
                                    }),
                                    u = a(a({}, o && {
                                        url: o
                                    }), {
                                        headers: c
                                    });
                                return a(a({}, e), {
                                    request: u
                                })
                            }
                            return e
                        })
                    }, UserAgent.id = "UserAgent", UserAgent
                }();
            n.d(t, "a", function() {
                return init
            });
            var de = [new r.InboundFilters, new r.FunctionToString, new oe, new ee, new ie, new ce, new ue, new pe];

            function init(e) {
                if (void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = de), void 0 === e.release) {
                    var t = Object(d.e)();
                    t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
                }
                void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0),
                    function initAndBind(e, t) {
                        var n;
                        !0 === t.debug && p.a.enable();
                        var r = Object(l.a)();
                        null === (n = r.getScope()) || void 0 === n || n.update(t.initialScope);
                        var o = new e(t);
                        r.bindClient(o)
                    }(te, e), e.autoSessionTracking && function startSessionTracking() {
                        if ("undefined" === typeof Object(d.e)().document) return void p.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                        var e = Object(l.a)();
                        if ("function" !== typeof e.startSession || "function" !== typeof e.captureSession) return;
                        e.startSession({
                            ignoreDuration: !0
                        }), e.captureSession(), Object(m.a)({
                            callback: function callback(t) {
                                var n = t.from,
                                    r = t.to;
                                void 0 !== n && n !== r && (e.startSession({
                                    ignoreDuration: !0
                                }), e.captureSession())
                            },
                            type: "history"
                        })
                    }()
            }
        }
    }
]);