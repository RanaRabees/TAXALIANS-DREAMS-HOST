window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 246702,
    "r": 0.7631257631257631,
    "rec_value": 2.4299999999999994e-7,
    "state_change_listen_mode": "automatic",
    "record": true,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": false,
    "anonymize_digits": false,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": null,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [],
    "heatmaps": [{
        "id": 8667602,
        "created_epoch_time": 1638980222,
        "targeting": [{
            "component": "url",
            "match_operation": "simple",
            "pattern": "https://www.dreamhost.com/es/promo/productos/",
            "negate": false
        }],
        "selector_version": 2,
        "capture_type": "SNAPSHOT_2000"
    }],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": true
        }
    },
    "features": ["recordings.page_content_ws", "retire_http", "settings.billing_v2", "feedback.widgetV2", "survey.impressions", "heatmap.continuous_capture", "client_script.safe_date", "feedback.widget_telemetry"]
};

! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 339)
}({
    339: function(e, t) {
        window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
            var o = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                a = new RegExp(o, "i"),
                i = window.navigator || {
                    userAgent: "unknown"
                },
                r = i.userAgent ? i.userAgent : "unknown";
            if (a.test(r)) console.warn("Hotjar not launching due to suspicious userAgent:", r);
            else {
                var s = "http:" === window.location.protocol,
                    d = Boolean(window._hjSettings.preview);
                if (!s || d) {
                    var l = function(e, t, n) {
                        window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
                    };
                    l(0, 0, n);
                    var p, _, c, u, h = window.document,
                        j = h.head || h.getElementsByTagName("head")[0];
                    h.addEventListener && (hj.scriptDomain = e, (p = h.createElement("script")).async = 1, p.src = hj.scriptDomain + t, p.charset = "utf-8", j.appendChild(p), u = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], (_ = h.createElement("style")).type = "text/css", _.styleSheet ? _.styleSheet.cssText = u.join("") : _.appendChild(h.createTextNode(u.join(""))), j.appendChild(_), (c = h.createElement("iframe")).style.cssText = u[1], c.name = "_hjRemoteVarsFrame", c.title = "_hjRemoteVarsFrame", c.id = "_hjRemoteVarsFrame", c.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-63c3a81830bf549dafe40b369003f751.html", c.onload = function() {
                        l.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal && hj.event.signal("varsLoaded")
                    }, l.varsJar = c, "interactive" === h.readyState || "complete" === h.readyState || "loaded" === h.readyState ? f() : h.addEventListener("DOMContentLoaded", f), l.revision = "72dfdca9ff42", window.hjBootstrap = l)
                } else console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047")
            }

            function f() {
                setTimeout(function() {
                    h.body.appendChild(c)
                }, 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.d0961e771164cd91e405.js", "246702"), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.f8ff0df27213eaf8d419.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.73ff101f3f663998d1e6.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.fdc3a60f027b993551e9.js"
            },
            HEATMAP_SCREENSHOTTER: {
                js: "heatmap-screenshotter.3dfd459ea2aa23e2e2a6.js"
            },
            HEATMAP_VIEWER: {
                js: "heatmap-viewer.d677b7a3f14a429ae282.js"
            },
            HEATMAP_DYNAMIC_VIEW: {
                js: "heatmap-dynamic-view.80e50ebf7414e4678d9c.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.8f90166893115a331c3b.js"
            },
            NOTIFICATION: {
                js: "notification.e4b3b615773ddd177312.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.0b2962086c932728f9e3.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.0c4fdf1420538f563c5b.js"
            },
            SENTRY: {
                js: "sentry.b6048a310c7253782e9d.js"
            }
        }
    }
});