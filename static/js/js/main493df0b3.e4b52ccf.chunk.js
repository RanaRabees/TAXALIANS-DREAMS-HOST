(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        "/7QA": function(t, E, i) {
            "use strict";
            i.r(E);
            i("pNMO"), i("DEfu"), i("I9xj"), i("kSko"), i("zKZe"), i("uL8W"), i("Eqjn"), i("HRxU"), i("eoL8"), i("5xtp"), i("T63A"), i("3KgV"), i("wfmh"), i("5DmW"), i("27RR"), i("cDke"), i("NBAS"), i("Kxld"), i("yQYn"), i("4h0Y"), i("5D5o"), i("tkto"), i("v5b1"), i("W/eh"), i("zuhW"), i("r5Og"), i("ExoC"), i("07d7"), i("B6y2"), i("5s+n"), i("p532"), i("PKPk"), i("66V8"), i("8go2"), i("DrvE"), i("kCkZ"), i("3bBZ"), i("rB9j"), i("9bJ7"), i("inlA"), i("9tb/"), i("JTJg"), i("Rm1S"), i("hDyC"), i("TZCg"), i("2A+d"), i("OM9Z"), i("UxlC"), i("hByQ"), i("EnZy"), i("LKBx"), i("SYor"), i("HiXI"), i("7ueG"), i("GKVU"), i("E5NM"), i("BNMt"), i("zHFu"), i("x83w"), i("l2dK"), i("GRPF"), i("xdBZ"), i("mRH6"), i("yWo2"), i("IxXR"), i("TFPT"), i("Zk8X"), i("fN96"), i("UzNg"), i("DhMN"), i("rZ3M");
            "production" !== i("LeJ0").a.ENV && i("Cp41");
            ! function polyfillKickoff(t) {
                try {
                    [1].includes(1) && t()
                } catch (E) {
                    Promise.all([i.e(6).then(i.t.bind(null, "JtnU", 7)), Promise.all([i.e(12), i.e(7)]).then(i.t.bind(null, "LSZE", 7)), i.e(45).then(i.t.bind(null, "3yYM", 7))]).then(function() {
                        t()
                    }).catch(function(t) {
                        return console.error("Error importing polyfills", t)
                    })
                }
            }(function kickOff() {
                Promise.all([i.e(44), i.e(19), i.e(37), i.e(16), i.e(21), i.e(34), i.e(23), i.e(11), i.e(10), i.e(14), i.e(42), i.e(35), i.e(26), i.e(18), i.e(8), i.e(15), i.e(22), i.e(13)]).then(i.bind(null, "V+70")).catch(function(t) {
                    return console.warn("loading root widget failed", t)
                })
            })
        },
        0: function(t, E, i) {
            t.exports = i("/7QA")
        },
        "91+0": function(t) {
            t.exports = {
                "//WS_CHAT_BASE": "localhost:4000",
                ENV: "LOCAL",
                "//WS_USER_ENV": "LOCAL",
                "//WS_USER_PROTOCOL": "ws",
                "//WS_CHAT_PROTOCOL": "ws",
                "//WS_USER_BASE": "localhost:4002"
            }
        },
        DFuO: function(t) {
            t.exports = {
                ENV: "MASTER",
                PROJECT_NAMESPACE: "DRIFT_WIDGET",
                ATTACHMENTS_API_BASE: "https://attachments.driftqa-files.com",
                BOOTSTRAP_API_BASE: "https://bootstrap.api.driftqa.com",
                AUTH_API_BASE: "https://customer2.api.driftqa.com",
                CUSTOMER_API_BASE: "https://customer2.api.driftqa.com",
                INTEGRATION_API_BASE: "https://integration.driftqa.com",
                CONVERSATION_API_BASE: "https://conversation2.api.driftqa.com",
                EVENT_API_BASE: "https://event2.api.driftqa.com",
                IDENTIFY_API_BASE: "https://identify.api.driftqa.com",
                EMBED_API_BASE: "https://embeds.driftcdnqa.com",
                ENRICHMENT_API_BASE: "https://enrichment.api.driftqa.com",
                MESSAGES_API_BASE: "https://messaging.api.driftqa.com",
                TARGETING_API_BASE: "https://targeting.api.driftqa.com",
                MEETINGS_API_BASE: "https://meetings.api.driftqa.com",
                FLOW_API_BASE: "https://flow.api.driftqa.com",
                MESSAGES_WSS_BASE: "wss://ws.api.driftqa.com",
                WS_USER_BASE: "widgetsandbox.api.driftqa.com",
                WS_CHAT_BASE: "chat.api.driftqa.com",
                WS_VISITOR_PRESENCE_BASE: "presence.api.driftqa.com",
                WS_PROTOCOL: "wss",
                WS_NUM_SHARDS: 50,
                METRICS_API_BASE: "https://metrics.api.driftqa.com",
                LOG_API_BASE: "https://log.api.driftqa.com",
                MESSAGING_API_BASE: "https://messaging.api.driftqa.com",
                SALES_INBOX_ID: 44,
                SALES_USER_ID: 46894,
                REDUX_ACTION_NAMESPACE: "__DRIFT_WIDGET",
                CLIENT_ID: "5su4735sxsu7tx",
                GIPHY_API_KEY: "sMSS7MboOLsYItFABpnWNSOuszE4HExZ",
                GIPHY_API_BASE: "https://api.giphy.com/v1/gifs",
                IFRAMELY_API_KEY: "f0f2cc6ba50c77794e5c5eb2930f3fd5",
                IFRAMELY_API_BASE: "https://iframe.ly/api",
                SENTRY_DSN: "https://6a7024aa4c6a4c4d9a797440877237b2@sentry.io/1485028"
            }
        },
        LeJ0: function(t, E, i) {
            "use strict";
            var _ = i("nfbA"),
                A = i("vTYT"),
                S = i("DFuO"),
                e = i("wLM4"),
                o = i("91+0"),
                s = i("tXSl"),
                a = function resolveConfig() {
                    return window.__REGION__ === A.b.EU ? e : "PRODUCTION" === window.__ENV__ ? s : "MASTER" === window.__ENV__ ? S : Object(_.a)(Object(_.a)({}, S), o)
                }();
            E.a = a
        },
        tXSl: function(t) {
            t.exports = {
                ENV: "PRODUCTION",
                PROJECT_NAMESPACE: "DRIFT_WIDGET",
                ATTACHMENTS_API_BASE: "https://attachments.drift-files.com",
                AUTH_API_BASE: "https://customer.api.drift.com",
                BOOTSTRAP_API_BASE: "https://bootstrap.api.drift.com",
                CUSTOMER_API_BASE: "https://customer.api.drift.com",
                INTEGRATION_API_BASE: "https://integration.drift.com",
                CONVERSATION_API_BASE: "https://conversation.api.drift.com",
                EVENT_API_BASE: "https://event.api.drift.com",
                IDENTIFY_API_BASE: "https://identify.api.drift.com",
                EMBED_API_BASE: "https://embeds.driftcdn.com",
                ENRICHMENT_API_BASE: "https://enrichment.api.drift.com",
                MESSAGES_API_BASE: "https://messaging.api.drift.com",
                TARGETING_API_BASE: "https://targeting.api.drift.com",
                MEETINGS_API_BASE: "https://meetings.api.drift.com",
                FLOW_API_BASE: "https://flow.api.drift.com",
                MESSAGES_WSS_BASE: "wss://ws.api.drift.com",
                WS_USER_BASE: "widgetsandbox.api.drift.com",
                WS_CHAT_BASE: "chat.api.drift.com",
                WS_LIVE_BASE: "live.api.drift.com",
                WS_VISITOR_PRESENCE_BASE: "presence.api.drift.com",
                WS_PROTOCOL: "wss",
                WS_NUM_SHARDS: 50,
                METRICS_API_BASE: "https://metrics.api.drift.com",
                LOG_API_BASE: "https://log.api.drift.com",
                MESSAGING_API_BASE: "https://messaging.api.drift.com",
                SALES_INBOX_ID: 44,
                SALES_USER_ID: 46894,
                REDUX_ACTION_NAMESPACE: "__DRIFT_WIDGET",
                CLIENT_ID: "f6zuizdyhxrm7r",
                GIPHY_API_KEY: "sMSS7MboOLsYItFABpnWNSOuszE4HExZ",
                GIPHY_API_BASE: "https://api.giphy.com/v1/gifs",
                IFRAMELY_API_KEY: "f0f2cc6ba50c77794e5c5eb2930f3fd5",
                IFRAMELY_API_BASE: "https://iframe.ly/api",
                SENTRY_DSN: "https://6a7024aa4c6a4c4d9a797440877237b2@sentry.io/1485028"
            }
        },
        vTYT: function(t, E, i) {
            "use strict";
            i.d(E, "c", function() {
                return _
            }), i.d(E, "a", function() {
                return A
            }), i.d(E, "b", function() {
                return S
            });
            const _ = {
                    EMAIL_CAPTURE: "emailCapture",
                    SLIDER: "slider",
                    TAKEOVER: "takeover",
                    CONTROLLER: "controller",
                    CHAT: "chat",
                    LANDING_PAGE: "landingPage"
                },
                A = (_.EMAIL_CAPTURE, _.CHAT, _.CONTROLLER, _.SLIDER, _.TAKEOVER, {
                    RIGHT: "right",
                    LEFT: "left"
                }),
                S = {
                    US: "US",
                    EU: "EU"
                }
        },
        wLM4: function(t) {
            t.exports = {
                ENV: "PRODUCTION",
                PROJECT_NAMESPACE: "DRIFT_WIDGET",
                ATTACHMENTS_API_BASE: "https://attachments.eu.drift-files.com",
                BOOTSTRAP_API_BASE: "https://bootstrap.api.eu.drift.com",
                CUSTOMER_API_BASE: "https://customer.api.eu.drift.com",
                CONVERSATION_API_BASE: "https://conversation.api.eu.drift.com",
                EVENT_API_BASE: "https://event.api.eu.drift.com",
                EMBED_API_BASE: "https://embeds.eu.driftcdn.com",
                MESSAGES_API_BASE: "https://messaging.api.eu.drift.com",
                TARGETING_API_BASE: "https://targeting.api.eu.drift.com",
                MEETINGS_API_BASE: "https://meetings.api.eu.drift.com",
                FLOW_API_BASE: "https://flow.api.eu.drift.com",
                MESSAGES_WSS_BASE: "wss://ws.api.eu.drift.com",
                WS_CHAT_BASE: "chat.api.eu.drift.com",
                WS_LIVE_BASE: "live.api.eu.drift.com",
                WS_VISITOR_PRESENCE_BASE: "presence.api.drift.com",
                WS_PROTOCOL: "wss",
                WS_NUM_SHARDS: 50,
                METRICS_API_BASE: "https://metrics.api.eu.drift.com",
                REDUX_ACTION_NAMESPACE: "__DRIFT_WIDGET",
                CLIENT_ID: "f6zuizdyhxrm7r",
                GIPHY_API_KEY: "sMSS7MboOLsYItFABpnWNSOuszE4HExZ",
                GIPHY_API_BASE: "https://api.giphy.com/v1/gifs",
                IFRAMELY_API_KEY: "f0f2cc6ba50c77794e5c5eb2930f3fd5",
                IFRAMELY_API_BASE: "https://iframe.ly/api",
                SENTRY_DSN: "https://6a7024aa4c6a4c4d9a797440877237b2@sentry.io/1485028"
            }
        }
    },
    [
        [0, 4, 5]
    ]
]);